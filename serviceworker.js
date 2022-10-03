const cacheName = 'cache-insects';
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(['/', 'students/index.html', 'mystyle.css', 'morten.png', 'nina.png', 'olivia.png', 'javascript.js', 'members.json']);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(cacheName).then(cache => cache.match(event.request))
    )
  );
});