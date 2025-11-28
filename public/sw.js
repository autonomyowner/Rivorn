// Service Worker for caching Rivorn assets
const CACHE_NAME = 'rivorn-pages-v1';
const STATIC_CACHE = 'rivorn-static-v1';
const IMAGE_CACHE = 'rivorn-images-v1';

const STATIC_ASSETS = [
  '/',
  '/collection',
  '/about',
  '/shipping',
  '/contact',
  '/pricing',
  '/privacy',
  '/manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)).then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) => {
            if (![CACHE_NAME, STATIC_CACHE, IMAGE_CACHE].includes(cacheName)) {
              return caches.delete(cacheName);
            }
            return undefined;
          }),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;

  if (request.destination === 'image') {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) =>
        cache.match(request).then((response) => {
          if (response) return response;

          return fetch(request)
            .then((networkResponse) => {
              if (networkResponse.status === 200) {
                cache.put(request, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch(
              () =>
                new Response(
                  '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#0f0f0f"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#b0b0b0">Image non disponible</text></svg>',
                  { headers: { 'Content-Type': 'image/svg+xml' } },
                ),
            );
        }),
      ),
    );
    return;
  }

  if (
    url.origin === self.location.origin &&
    (url.pathname.startsWith('/_next/static/') || url.pathname.endsWith('.js') || url.pathname.endsWith('.css'))
  ) {
    event.respondWith(
      caches.open(STATIC_CACHE).then((cache) =>
        cache.match(request).then((response) => {
          if (response) return response;
          return fetch(request).then((networkResponse) => {
            if (networkResponse.status === 200) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });
        }),
      ),
    );
    return;
  }

  if (request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() =>
          caches.match(request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;
            return caches.match('/').then(
              (offline) =>
                offline ||
                new Response('<html><body><h1>Hors ligne</h1><p>Veuillez verifier votre connexion internet.</p></body></html>', {
                  headers: { 'Content-Type': 'text/html' },
                }),
            );
          }),
        ),
    );
    return;
  }

  event.respondWith(fetch(request).catch(() => caches.match(request)));
});
