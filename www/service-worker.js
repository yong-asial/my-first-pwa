importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();

// cache name
workbox.core.setCacheNameDetails({
    prefix: 'My-awesome-cache',
    precache: 'precache',
    runtime: 'runtime',
  });
  
// runtime cache
// 1. stylesheet
workbox.routing.registerRoute(
    new RegExp('\.css$'),
    workbox.strategies.cacheFirst({
        cacheName: 'My-awesome-cache-Stylesheets',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
                maxEntries: 20, // only cache 20 request
                purgeOnQuotaError: true
            })
        ]
    })
);
// 2. images
workbox.routing.registerRoute(
    new RegExp('\.(png|svg|jpg|jpeg)$'),
    workbox.strategies.cacheFirst({
        cacheName: 'My-awesome-cache-Images',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 50,
                purgeOnQuotaError: true
            })
        ]
    })
);

// 3. cache news articles result
workbox.routing.registerRoute(
    new RegExp('https://newsapi.org/v2/top-headlines'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'My-awesome-cache-news-headline',
        cacheExpiration: {
            maxAgeSeconds: 60 * 30 //cache the news content for 30mn
        }
    })
);
  
workbox.precaching.precacheAndRoute([
  {
    "url": "components/loader.css",
    "revision": "93899d9053b17d836ecad563970fcd79"
  },
  {
    "url": "components/loader.js",
    "revision": "91dc91ff38b6c8a3fa5bc604f4ef1448"
  },
  {
    "url": "components/monaca-cordova-loader/cordova-loader.js",
    "revision": "f95edd85998fa97a31cd7c36b8c9e911"
  },
  {
    "url": "components/monaca-core-utils/monaca-core-utils.js",
    "revision": "5135d67955a47fd60ef18617f0de38fd"
  },
  {
    "url": "css/style.css",
    "revision": "a04a8117ae087880ca305446a746de3f"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "32418e55eeab53d89f451189032196e5"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "0a74124a45f0419e4bfcf4b1e409132f"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "bcaf41e37ba54a3f6f887da33e29c425"
  },
  {
    "url": "images/icons/icon-168x168.png",
    "revision": "604edc7754c3db4d2e20ce7fe517ae0e"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "d3ed840ac444493f7978bcdceb2f87bf"
  },
  {
    "url": "images/icons/icon-256x256.png",
    "revision": "93012638cf3a7f142d6ac32046b9026e"
  },
  {
    "url": "images/icons/icon-48x48.png",
    "revision": "df7323759ba57b1cd54245e7956a2fc6"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "17ce26f01364a397e7f935733eb8275c"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "0db7a34fb4e410a34d29d85a06478f7e"
  },
  {
    "url": "images/no-image-icon.png",
    "revision": "f98b32ceb4e65ec11ae685fc4b6d5a15"
  },
  {
    "url": "index.html",
    "revision": "991b5a32aa18e91a47153a4b83dd8c8f"
  },
  {
    "url": "script/main.js",
    "revision": "ea6292b70ea33dc6dbe969a4e983fef6"
  }
]);