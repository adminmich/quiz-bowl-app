/* Global leaderboard API backed by Upstash Redis (via Vercel integration).
   GET  /api/leaderboard         → top 100 players
   POST /api/leaderboard { ... } → upsert a player's snapshot */
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();
const KEY = 'quiz-bowl:players:v1';

/* We store each player as a JSON string in a Redis hash keyed by their username. */

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req, res) {
  setCors(res);
  if (req.method === 'OPTIONS') { res.status(204).end(); return; }

  try {
    if (req.method === 'GET') {
      const raw = await redis.hgetall(KEY);
      const out = [];
      const HIDE = new Set(['testuser', 'test', 'demo']);
      if (raw) {
        for (const [uname, value] of Object.entries(raw)) {
          if (HIDE.has(uname.toLowerCase())) continue;
          try {
            const p = typeof value === 'string' ? JSON.parse(value) : value;
            if (!p) continue;
            /* Legacy values on the 1-28 grade scale get clamped to 1-5. */
            let hl = p.highestLevel | 0;
            if (hl > 5) hl = hl >= 27 ? 5 : hl >= 21 ? 4 : hl >= 15 ? 3 : hl >= 9 ? 2 : 1;
            out.push({
              username: uname,
              name: p.name,
              avatar: p.avatar,
              grade: p.grade,
              totalPoints: p.totalPoints | 0,
              quizzesCompleted: p.quizzesCompleted | 0,
              correctAnswers: p.correctAnswers | 0,
              highestLevel: hl,
              trophies: p.trophies | 0,
              lastPlayed: p.lastPlayed || null,
            });
          } catch (_) {}
        }
      }
      out.sort((a, b) => (b.totalPoints - a.totalPoints) || (b.correctAnswers - a.correctAnswers));
      res.setHeader('Cache-Control', 'no-store');
      res.status(200).json({ players: out.slice(0, 200) });
      return;
    }

    if (req.method === 'POST') {
      /* Accept a snapshot from the client. Trust it minimally — cap point values
         to avoid absurd tampering, and validate shape. */
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      const username = String(body.username || '').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 24);
      if (!username) { res.status(400).json({ error: 'missing username' }); return; }

      const clean = {
        name: String(body.name || '').slice(0, 40),
        avatar: String(body.avatar || '').slice(0, 4),
        grade: Number(body.grade) || 0,
        totalPoints: Math.max(0, Math.min(10_000_000, Number(body.totalPoints) || 0)),
        quizzesCompleted: Math.max(0, Math.min(100_000, Number(body.quizzesCompleted) || 0)),
        correctAnswers: Math.max(0, Math.min(1_000_000, Number(body.correctAnswers) || 0)),
        highestLevel: Math.max(0, Math.min(5, Number(body.highestLevel) || 0)),
        trophies: Math.max(0, Math.min(50, Number(body.trophies) || 0)),
        lastPlayed: new Date().toISOString(),
      };
      /* Don't downgrade a player's score: keep the higher of the two on each field. */
      const existingRaw = await redis.hget(KEY, username);
      const existing = existingRaw ? (typeof existingRaw === 'string' ? JSON.parse(existingRaw) : existingRaw) : null;
      if (existing) {
        clean.totalPoints = Math.max(clean.totalPoints, existing.totalPoints | 0);
        clean.quizzesCompleted = Math.max(clean.quizzesCompleted, existing.quizzesCompleted | 0);
        clean.correctAnswers = Math.max(clean.correctAnswers, existing.correctAnswers | 0);
        /* Cap the merged highestLevel at 5 (the new tier scale) so any legacy
           1-28 value stored from before the tier refactor gets clamped down. */
        clean.highestLevel = Math.min(5, Math.max(clean.highestLevel, existing.highestLevel | 0));
        clean.trophies = Math.max(clean.trophies, existing.trophies | 0);
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
