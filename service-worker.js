self.__precacheManifest = [
  {
    "url": ".//_next/.//_next/build-manifest.json",
    "revision": "95f2566c8fb4df19a7ca35869c677944"
  },
  {
    "url": ".//_next/.//_next/react-loadable-manifest.json",
    "revision": "99914b932bd37a50b983c5e7c90ae93b"
  },
  {
    "url": ".//_next/.//_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.ca0603d66670b927c4bf.js",
    "revision": "5a940921d3d4fa5a8615"
  },
  {
    "url": ".//_next/.//_next/static/chunks/commons.ae6b28ba5212c410c854.js",
    "revision": "9f0b99e1fcec236627d5"
  },
  {
    "url": ".//_next/.//_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.71de7335815ad041d813.js",
    "revision": "a92bc104e209bc4b5133"
  },
  {
    "url": ".//_next/.//_next/static/chunks/framework.1358241a61d6c7b05ab8.js",
    "revision": "d246d4272315ef6b8020"
  },
  {
    "url": ".//_next/.//_next/static/chunks/main-0aa194fec94527c4ff2d.js"
  },
  {
    "url": ".//_next/.//_next/static/chunks/pages/_app-2e214d5a902a8a563a84.js"
  },
  {
    "url": ".//_next/.//_next/static/chunks/pages/_error-ff24003c5d0c7e57a1c0.js"
  },
  {
    "url": ".//_next/.//_next/static/chunks/pages/index-355ec8cfb24ffb787cba.js"
  },
  {
    "url": ".//_next/.//_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",
    "revision": "99442aec5788bccac9b2f0ead2afdd6b"
  },
  {
    "url": ".//_next/.//_next/static/chunks/styles.06d877452bfe5405af08.js",
    "revision": "0635357c59e9fde4243b"
  },
  {
    "url": ".//_next/.//_next/static/chunks/webpack-f6c2222b6dcea8dd931d.js"
  },
  {
    "url": ".//_next/.//_next/static/css/styles.910a9556.chunk.css",
    "revision": "0635357c59e9fde4243b"
  },
  {
    "url": ".//_next/.//_next/static/e3qOiXUhlgxIy5_1_Ipkg/_buildManifest.js",
    "revision": "76991db81b47a9ec7c248777f57570ff"
  },
  {
    "url": ".//_next/.//_next/static/e3qOiXUhlgxIy5_1_Ipkg/_ssgManifest.js",
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
  ".//_next/precache-manifest.0631e339422137515bff0a880d067220.js"
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
