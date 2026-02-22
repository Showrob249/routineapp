const CACHE_NAME="routine-v4";

const FILES=[
"./",
"./index.html",
"./manifest.json",
"./alarm.mp3",
"./icon.png"
];

self.addEventListener("install",e=>{
self.skipWaiting();
e.waitUntil(
caches.open(CACHE_NAME)
.then(cache=>cache.addAll(FILES))
);
});

self.addEventListener("activate",e=>{
e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch",e=>{
e.respondWith(
caches.match(e.request)
.then(r=>r||fetch(e.request))
);
});
