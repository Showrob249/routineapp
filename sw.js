const CACHE_NAME = "routineapp-v3";

const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png",
  "./alarm.mp3"
];

self.addEventListener("install", event => {
self.skipWaiting();
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => cache.addAll(urlsToCache))
);
});

self.addEventListener("activate", event => {
event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
event.respondWith(
caches.match(event.request)
.then(response => response || fetch(event.request))
);
});

self.addEventListener("notificationclick", event => {
event.notification.close();
event.waitUntil(
clients.openWindow("./")
);
});
