const CACHE_NAME = "routine-cache-v1";

const urlsToCache = [
  "/routineapp/",
  "/routineapp/index.html",
  "/routineapp/manifest.json",
  "/routineapp/icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

// 🔔 Push Event (PART 3)
self.addEventListener("push", event => {
  const data = event.data.json();

  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "/routineapp/icon.png",
    badge: "/routineapp/icon.png"
  });
});
