/* Global leaderboard API backed by Upstash Redis (via Vercel integration).
   Public routes:
     GET  /api/leaderboard         → top 100 non-blocked players
     POST /api/leaderboard { ... snapshot ... } → upsert (rejected if blocked)
   Admin routes (require x-admin-key: <ADMIN_KEY>):
     GET  /api/leaderboard?admin=1 → all players, includes blocked flag
     POST /api/leaderboard { action: 'block'|'unblock'|'remove', username }
*/
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();
const KEY = 'quiz-bowl:players:v1';
const BLOCK_KEY = 'quiz-bowl:blocked:v1';

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Key');
}

function isAdminRequest(req) {
  const expected = process.env.ADMIN_KEY;
  if (!expected) return false;
  const got = req.headers['x-admin-key'] || req.headers['X-Admin-Key'];
  return got && got === expected;
}

function normUname(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 24);
}

function clampLegacyLevel(hl) {
  hl = hl | 0;
  if (hl <= 5) return hl;
  return hl >= 27 ? 5 : hl >= 21 ? 4 : hl >= 15 ? 3 : hl >= 9 ? 2 : 1;
}

export default async function handler(req, res) {
  setCors(res);
  if (req.method === 'OPTIONS') { res.status(204).end(); return; }

  try {
    /* ---------------- GET ---------------- */
    if (req.method === 'GET') {
      const adminView = req.query && (req.query.admin === '1' || req.query.admin === 'true') && isAdminRequest(req);

      /* Single-player lookup by username, used on login to sync a student's
         score across devices. Returns 404 for missing or (non-admin) blocked
         usernames so clients can distinguish "no record" from "server down". */
      const qUname = req.query && req.query.username;
      if (qUname) {
        const target = normUname(qUname);
        if (!target) { res.status(400).json({ error: 'invalid username' }); return; }
        const value = await redis.hget(KEY, target);
        if (!value) { res.status(404).json({ error: 'not_found' }); return; }
        const isBlocked = await redis.sismember(BLOCK_KEY, target);
        if (isBlocked && !adminView) { res.status(404).json({ error: 'not_found' }); return; }
        const p = typeof value === 'string' ? JSON.parse(value) : value;
        const entry = {
          username: target,
          name: p.name,
          avatar: p.avatar,
          grade: p.grade,
          totalPoints: p.totalPoints | 0,
          quizzesCompleted: p.quizzesCompleted | 0,
          correctAnswers: p.correctAnswers | 0,
          totalQuestions: p.totalQuestions | 0,
          perfectRuns: p.perfectRuns | 0,
          bestScore: p.bestScore | 0,
          highestLevel: clampLegacyLevel(p.highestLevel),
          trophies: p.trophies | 0,
          fastestAnswerMs: p.fastestAnswerMs || null,
          joinedAt: p.joinedAt || null,
          lastPlayed: p.lastPlayed || null,
          subjectsPlayed: p.subjectsPlayed || {},
        };
        if (adminView) entry.blocked = isBlocked;
        res.setHeader('Cache-Control', 'no-store');
        res.status(200).json({ player: entry });
        return;
      }

      const raw = await redis.hgetall(KEY);
      const blockedList = await redis.smembers(BLOCK_KEY);
      const blocked = new Set((blockedList || []).map(u => String(u).toLowerCase()));
      const HIDE = new Set(['testuser', 'test', 'demo']);
      const out = [];
      if (raw) {
        for (const [uname, value] of Object.entries(raw)) {
          const un = String(uname).toLowerCase();
          if (HIDE.has(un)) continue;
          const isBlocked = blocked.has(un);
          if (isBlocked && !adminView) continue;
          try {
            const p = typeof value === 'string' ? JSON.parse(value) : value;
            if (!p) continue;
            const entry = {
              username: uname,
              name: p.name,
              avatar: p.avatar,
              grade: p.grade,
              totalPoints: p.totalPoints | 0,
              quizzesCompleted: p.quizzesCompleted | 0,
              correctAnswers: p.correctAnswers | 0,
              highestLevel: clampLegacyLevel(p.highestLevel),
              trophies: p.trophies | 0,
              lastPlayed: p.lastPlayed || null,
              accuracy: p.totalQuestions ? Math.round(100 * (p.correctAnswers | 0) / p.totalQuestions) : null,
              totalQuestions: p.totalQuestions || 0,
              perfectRuns: p.perfectRuns || 0,
              bestScore: p.bestScore || 0,
              fastestAnswerMs: p.fastestAnswerMs || null,
              joinedAt: p.joinedAt || null,
              subjectsPlayed: p.subjectsPlayed || {},
            };
            if (adminView) entry.blocked = isBlocked;
            out.push(entry);
          } catch (_) {}
        }
      }
      out.sort((a, b) => (b.totalPoints - a.totalPoints) || (b.correctAnswers - a.correctAnswers));
      res.setHeader('Cache-Control', 'no-store');
      res.status(200).json({ players: out.slice(0, 500) });
      return;
    }

    /* ---------------- POST ---------------- */
    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

      /* Admin actions */
      if (body.action) {
        if (!isAdminRequest(req)) {
          res.status(403).json({ error: 'forbidden' });
          return;
        }
        const target = normUname(body.username);
        if (!target) { res.status(400).json({ error: 'username required' }); return; }
        if (body.action === 'remove') {
          await redis.hdel(KEY, target);
          await redis.srem(BLOCK_KEY, target);
          res.status(200).json({ ok: true, action: 'remove', username: target });
          return;
        }
        if (body.action === 'block') {
          await redis.sadd(BLOCK_KEY, target);
          res.status(200).json({ ok: true, action: 'block', username: target });
          return;
        }
        if (body.action === 'unblock') {
          await redis.srem(BLOCK_KEY, target);
          res.status(200).json({ ok: true, action: 'unblock', username: target });
          return;
        }
        res.status(400).json({ error: 'unknown action' });
        return;
      }

      /* Regular score sync from a player */
      const username = normUname(body.username);
      if (!username) { res.status(400).json({ error: 'missing username' }); return; }
      /* Reject posts from blocked users */
      const isBlocked = await redis.sismember(BLOCK_KEY, username);
      if (isBlocked) { res.status(403).json({ error: 'user is blocked' }); return; }

      const clean = {
        name: String(body.name || '').slice(0, 40),
        avatar: String(body.avatar || '').slice(0, 4),
        grade: Number(body.grade) || 0,
        totalPoints: Math.max(0, Math.min(10_000_000, Number(body.totalPoints) || 0)),
        quizzesCompleted: Math.max(0, Math.min(100_000, Number(body.quizzesCompleted) || 0)),
        correctAnswers: Math.max(0, Math.min(1_000_000, Number(body.correctAnswers) || 0)),
        totalQuestions: Math.max(0, Math.min(2_000_000, Number(body.totalQuestions) || 0)),
        perfectRuns: Math.max(0, Math.min(100_000, Number(body.perfectRuns) || 0)),
        bestScore: Math.max(0, Math.min(1000, Number(body.bestScore) || 0)),
        fastestAnswerMs: body.fastestAnswerMs != null ? Math.max(0, Number(body.fastestAnswerMs) || 0) : null,
        joinedAt: body.joinedAt || null,
        subjectsPlayed: body.subjectsPlayed && typeof body.subjectsPlayed === 'object' ? body.subjectsPlayed : {},
        highestLevel: Math.max(0, Math.min(5, Number(body.highestLevel) || 0)),
        trophies: Math.max(0, Math.min(50, Number(body.trophies) || 0)),
        lastPlayed: new Date().toISOString(),
      };
      const existingRaw = await redis.hget(KEY, username);
      const existing = existingRaw ? (typeof existingRaw === 'string' ? JSON.parse(existingRaw) : existingRaw) : null;
      if (existing) {
        clean.totalPoints = Math.max(clean.totalPoints, existing.totalPoints | 0);
        clean.quizzesCompleted = Math.max(clean.quizzesCompleted, existing.quizzesCompleted | 0);
        clean.correctAnswers = Math.max(clean.correctAnswers, existing.correctAnswers | 0);
        clean.totalQuestions = Math.max(clean.totalQuestions, existing.totalQuestions | 0);
        clean.perfectRuns = Math.max(clean.perfectRuns, existing.perfectRuns | 0);
        clean.bestScore = Math.max(clean.bestScore, existing.bestScore | 0);
        clean.highestLevel = Math.min(5, Math.max(clean.highestLevel, existing.highestLevel | 0));
        clean.trophies = Math.max(clean.trophies, existing.trophies | 0);
        if (!clean.joinedAt) clean.joinedAt = existing.joinedAt || null;
        if (existing.fastestAnswerMs && (clean.fastestAnswerMs == null || existing.fastestAnswerMs < clean.fastestAnswerMs)) {
          clean.fastestAnswerMs = existing.fastestAnswerMs;
        }
      }
      await redis.hset(KEY, { [username]: JSON.stringify(clean) });
      res.status(200).json({ ok: true, username, snapshot: clean });
      return;
    }

    res.status(405).json({ error: 'method not allowed' });
  } catch (err) {
    res.status(500).json({ error: 'server_error', message: err && err.message });
  }
}
