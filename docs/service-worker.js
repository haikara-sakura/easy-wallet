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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

importScripts(
  "./precache-manifest.3f3bbe82257391177c3d436040ca9a78.js"
);

workbox.core.setCacheNameDetails({prefix: "easy-wallet"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "17ecd8174671fecba6b6e627fba7a165"
  },
  {
    "url": "precache-manifest.3f8f9b83f9d90326fe08be5f34a0c29c.js",
    "revision": "3f8f9b83f9d90326fe08be5f34a0c29c"
  },
  {
    "url": "precache-manifest.5071fb3c692dd87b61a2e86fe31fb9ef.js",
    "revision": "5071fb3c692dd87b61a2e86fe31fb9ef"
  },
  {
    "url": "precache-manifest.bddb8fadf73b5b480e2f226da7fa437c.js",
    "revision": "bddb8fadf73b5b480e2f226da7fa437c"
  },
  {
    "url": "precache-manifest.ca040171c8b1e4e94d2a12a53f5af9e2.js",
    "revision": "ca040171c8b1e4e94d2a12a53f5af9e2"
  },
  {
    "url": "precache-manifest.cb78f6f9d367a478b0e06c0ba42c22fb.js",
    "revision": "cb78f6f9d367a478b0e06c0ba42c22fb"
  },
  {
    "url": "precache-manifest.db77fa69a771fac1c8f96f42074cb88e.js",
    "revision": "db77fa69a771fac1c8f96f42074cb88e"
  },
  {
    "url": "precache-manifest.f6411658ff8bf7c865686aa810293105.js",
    "revision": "f6411658ff8bf7c865686aa810293105"
  },
  {
    "url": "service-worker.js",
    "revision": "e9c4ab5bf1caf88715ac914e72717ed0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
