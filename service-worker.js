self.__precacheManifest = [
  {
    "url": ".//_next/static/chunks/3a829eff.ff5578978733a40a67a3.js",
    "revision": "d0820170114d54d75ae7"
  },
  {
    "url": ".//_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.9d5e053fad6165322600.js",
    "revision": "cfecd8c866c5e4f07a44"
  },
  {
    "url": ".//_next/static/chunks/commons.f0576fccb62f5876ec8b.js",
    "revision": "0444ff7883e8ebb69ce3"
  },
  {
    "url": ".//_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.25bc48f504a02479854f.js",
    "revision": "8ac21266f887eefc42d1"
  },
  {
    "url": ".//_next/static/chunks/framework.d342f5f3955b7f7d6277.js",
    "revision": "4bd064b5ff7c533fa0c0"
  },
  {
    "url": ".//_next/static/chunks/main-7d1d513bdcb4402b184b.js"
  },
  {
    "url": ".//_next/static/chunks/pages/_app-d23e11cf1c7d927b9117.js"
  },
  {
    "url": ".//_next/static/chunks/pages/_error-d3712a3c5a05d1a54717.js"
  },
  {
    "url": ".//_next/static/chunks/pages/index-2e668893274401c8fff4.js"
  },
  {
    "url": ".//_next/static/chunks/polyfills-a98cee78eb8282e29fb6.js"
  },
  {
    "url": ".//_next/static/chunks/styles.1569c9e7d589d68db666.js",
    "revision": "e050792d4e1912dec7dc"
  },
  {
    "url": ".//_next/static/chunks/webpack-d7b2fb72fb7257504a38.js"
  },
  {
    "url": ".//_next/static/css/3a829eff.4de5b0d9.chunk.css",
    "revision": "d0820170114d54d75ae7"
  },
  {
    "url": ".//_next/static/css/styles.78814b24.chunk.css",
    "revision": "e050792d4e1912dec7dc"
  },
  {
    "url": ".//_next/static/emmxSbQ6T46PvX5a8_Mru/_buildManifest.js",
    "revision": "ce91d5a1a67fae3a64798442c5a9cebe"
  },
  {
    "url": ".//_next/static/emmxSbQ6T46PvX5a8_Mru/_ssgManifest.js",
    "revision": "abee47769bf307639ace4945f9cfd4ff"
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
