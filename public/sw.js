/* Service worker with fresh-first strategy for HTML, data, and API,
   cache-first for immutable assets like icons. */
const CACHE = 'quiz-bowl-v17';
const CORE = ['/manifest.json', '/icon-192.svg', '/icon-512.svg', '/icon-maskable.svg'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  /* Never cache API calls — they must always be fresh for the leaderboard. */
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(fetch(req));
    return;
  }

  const isHtmlLike =
    req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html') ||
    url.pathname === '/' ||
    url.pathname.endsWith('.html');
  const isData = url.pathname.endsWith('/questions.js');

  if (isHtmlLike || isData) {
    // Network first so updates show immediately; cache is a fallback.
    event.respondWith(
      fetch(req).then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(req, clone));
        }
        return res;
      }).catch(() => caches.match(req).then(hit => hit || caches.match('/')))
    );
    return;
  }

  // Static assets: cache first for speed.
  event.respondWith(
    caches.match(req).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(req, clone));
        }
        return res;
      });
    })
  );
});

self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
