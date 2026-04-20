const CACHE_NAME = 'driverflux-v12';
const urlsToCache = [
  './index.html',
  './manifest.json'
];

// Instala o motorzinho e guarda os ficheiros no celular
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Faz o app funcionar offline buscando os ficheiros guardados
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});