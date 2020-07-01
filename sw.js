// Installing Service Worker
self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
});

// Activating content using Service Worker
self.addEventListener('activate', function (e) {
    console.log('[Service Worker] activate');
});

// Fetching content using Service Worker
self.addEventListener('fetch', function (e) {
    console.log('[Service Worker] fetch');
});