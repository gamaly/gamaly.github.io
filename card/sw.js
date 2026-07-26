/* Offline support for the contact card. Bump CACHE when the page changes. */
var CACHE = 'card-v1';
var ASSETS = [
  '/card/',
  '/card/index.html',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      // individual failures (e.g. the CDN) must not abort the install
      .then(function (c) { return Promise.allSettled(ASSETS.map(function (a) { return c.add(a); })); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (k) { return k !== CACHE; })
          .map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

/* Network first so edits show up, cache as the offline fallback. */
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); }).catch(function () {});
        return res;
      })
      .catch(function () { return caches.match(e.request, { ignoreSearch: true }); })
  );
});
