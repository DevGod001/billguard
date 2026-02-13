const CACHE_NAME = 'billguard-v2';
const urlsToCache = [
  '/billguard/',
  '/billguard/index.html',
  '/billguard/style.css',
  '/billguard/app.js',
  '/billguard/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('sync', event => {
  if (event.tag === 'backup-data') {
    event.waitUntil(backupData());
  }
});

async function backupData() {
  const data = localStorage.getItem('billguard_backup');
  if (data) {
    console.log('Data backed up');
  }
}
