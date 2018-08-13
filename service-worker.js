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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2d961d8ea82a4fdd7e04f27cb38f5922"
  },
  {
    "url": "assets/css/0.styles.e08a833b.css",
    "revision": "78f75a539f2ae655857ccd0dc6318785"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.043232fb.js",
    "revision": "19f4557c8d87ee24a16092e7631c021c"
  },
  {
    "url": "assets/js/11.bce79c01.js",
    "revision": "ddcb041c65abfb01f343b7d1f2341611"
  },
  {
    "url": "assets/js/12.408c4140.js",
    "revision": "74b346ad571a642a9f12839eed403f76"
  },
  {
    "url": "assets/js/13.729ceff7.js",
    "revision": "f06cfc18e79476b991cbfecc3c6c1480"
  },
  {
    "url": "assets/js/14.f6cceab6.js",
    "revision": "48dc444e5f11868168fd5d61a0eab087"
  },
  {
    "url": "assets/js/15.7cc40fcd.js",
    "revision": "a38c39c8b81efebb9a872ba5d265d412"
  },
  {
    "url": "assets/js/16.1df7f67c.js",
    "revision": "2843e28dedcf9892ccf6ffe4e5759c06"
  },
  {
    "url": "assets/js/17.16f72978.js",
    "revision": "c5b42053d9dc2d76f89c1b175fb321e7"
  },
  {
    "url": "assets/js/2.448ed1ef.js",
    "revision": "6853b105a973c9ab9d43289041231e67"
  },
  {
    "url": "assets/js/3.2a20f521.js",
    "revision": "4b6bfb8bbc59da1712058f95fcaca763"
  },
  {
    "url": "assets/js/4.4ad77fdc.js",
    "revision": "b9c814b7157bcecef34ca8228d2505c1"
  },
  {
    "url": "assets/js/5.9ce1054e.js",
    "revision": "f6b74cca686ac89dbcab05f60ff7639d"
  },
  {
    "url": "assets/js/6.d4590f20.js",
    "revision": "e1df2f917719506c59c15aa2379c0e52"
  },
  {
    "url": "assets/js/7.2f53d2f2.js",
    "revision": "ef47c2cfe798ad70db440bf7742f25da"
  },
  {
    "url": "assets/js/8.14d35ca5.js",
    "revision": "5a33819692bf892ffa75dfd827c4a600"
  },
  {
    "url": "assets/js/9.29a12b60.js",
    "revision": "b09cdd2f46a0f9f26659dd156304eae8"
  },
  {
    "url": "assets/js/app.40606a56.js",
    "revision": "0c84761421c873d346fed277b86c758a"
  },
  {
    "url": "components/blockquote.html",
    "revision": "4b7325dade8d2bfe5ea11056aab1aafc"
  },
  {
    "url": "components/button.html",
    "revision": "2d7e2ad5ad97f4ac3f146090278c390d"
  },
  {
    "url": "components/checkbox.html",
    "revision": "4177726acc17c80e3e9761d25343b7f3"
  },
  {
    "url": "components/figure.html",
    "revision": "9bf5d6d2dee7cad62a7af39184592067"
  },
  {
    "url": "components/hr.html",
    "revision": "d89479321f65f46c6b067a53caa8bd18"
  },
  {
    "url": "components/input.html",
    "revision": "29b173ded8565190a582e7b782c4f9bb"
  },
  {
    "url": "hero.png",
    "revision": "ab614432cf37e9263eb0afd85d75fbf5"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "25b1a3e64ef02d62bb8d5e7bd93418ea"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "3331b884e104dea9bf00503f216aff98"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "3c696d67bdfe7a5bd1940b956dedd30a"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "7710938a1b8c20b4a2d6bab363bd3cd5"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "dd73dd83444767708afe579c0ad2d53b"
  },
  {
    "url": "icons/mstile-144x144.png",
    "revision": "0fe25867d2ceed671f96968d532a9cee"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "959131ca389738ae81b7d0af73b4280f"
  },
  {
    "url": "icons/mstile-310x150.png",
    "revision": "a0efb1575031edf4a39f83b126710ceb"
  },
  {
    "url": "icons/mstile-310x310.png",
    "revision": "182b12c9bbea0d02f3fb11bf08e2fe22"
  },
  {
    "url": "icons/mstile-70x70.png",
    "revision": "4acd7d952077d458432251de71cdf75f"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "c6112350f9f5424dbd140ff43a32ff68"
  },
  {
    "url": "index.html",
    "revision": "07eafd07c34ddb5f6c9e8e95686167fb"
  },
  {
    "url": "introduction/getting-started.html",
    "revision": "83e43a8ceed7afffea3388c91abb4135"
  },
  {
    "url": "logo.png",
    "revision": "dd73dd83444767708afe579c0ad2d53b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
