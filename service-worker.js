self.__precacheManifest = [
  {
    "url": ".//_next/.//_next/build-manifest.json",
    "revision": "41401be7e6eecd1816706857c4375380"
  },
  {
    "url": ".//_next/.//_next/react-loadable-manifest.json",
    "revision": "99914b932bd37a50b983c5e7c90ae93b"
  },
  {
    "url": ".//_next/.//_next/static/CzpnG2jYiqu6QYte7TfIW/_buildManifest.js",
    "revision": "ff647b147923fd658773206086fb4e06"
  },
  {
    "url": ".//_next/.//_next/static/CzpnG2jYiqu6QYte7TfIW/_ssgManifest.js",
    "revision": "abee47769bf307639ace4945f9cfd4ff"
  },
  {
    "url": ".//_next/.//_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.6270b807bbf9d3c26bb3.js",
    "revision": "241edc6b46051c2dbcc4"
  },
  {
    "url": ".//_next/.//_next/static/chunks/commons.61c34b9a80af5ece82f4.js",
    "revision": "96185632cbc6c984b646"
  },
  {
    "url": ".//_next/.//_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.c40f7baefb7ffa10f36e.js",
    "revision": "94e4a9ba443d80848fe5"
  },
  {
    "url": ".//_next/.//_next/static/chunks/framework.5583dae4e509ec05c764.js",
    "revision": "dc1eb100171879f6248a"
  },
  {
    "url": ".//_next/.//_next/static/chunks/main-78aedcf5c17403569769.js"
  },
  {
    "url": ".//_next/.//_next/static/chunks/pages/_app-003b0b720bdf74bec159.js"
  },
  {
    "url": ".//_next/.//_next/static/chunks/pages/_error-cd08b909a1ca6a66f325.js"
  },
  {
    "url": ".//_next/.//_next/static/chunks/pages/index-06cd65163e460a981fb3.js"
  },
  {
    "url": ".//_next/.//_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",
    "revision": "99442aec5788bccac9b2f0ead2afdd6b"
  },
  {
    "url": ".//_next/.//_next/static/chunks/styles.06d877452bfe5405af08.js",
    "revision": "a1f1a10a769542e74818"
  },
  {
    "url": ".//_next/.//_next/static/chunks/webpack-f6c2222b6dcea8dd931d.js"
  },
  {
    "url": ".//_next/.//_next/static/css/styles.25cfee8b.chunk.css",
    "revision": "a1f1a10a769542e74818"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  ".//_next/precache-manifest.61c3f61d2645ce6173e12c892155c610.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
