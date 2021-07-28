'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7119f8d8f72c209f186f5cde134554d6",
"assets/assets/images/1.jpg": "0734c1ac486b7e12bc2029de68988aeb",
"assets/assets/images/1.png": "24d16f2540c5af5dff4ad1a0d82b1e3b",
"assets/assets/images/2.jpg": "9dad698fada92bb4c3288a46b4cf7022",
"assets/assets/images/3.jpg": "2defd829598f7cc967be041b75acc89a",
"assets/assets/images/4.jpg": "d45ab0de08928f79cb4aff93cac447ab",
"assets/assets/images/4coches.jpg": "26dc215a12fe21c5c50b21b5dd344afb",
"assets/assets/images/blancocamion.jpg": "5aa28ba32fff61762b31b31f00e2b47e",
"assets/assets/images/bmw.jpg": "10fbbc7cc31554c15c82df936824049a",
"assets/assets/images/carbrands.jpg": "5ebfe61e17275996ca182dd417b4be94",
"assets/assets/images/carmain.jpg": "1b3b9fb3f86c7d5bfcfe8def309b4d5a",
"assets/assets/images/caseih.jpg": "b6db1b5249f09f55b61fa85310bc79db",
"assets/assets/images/daf.jpg": "b664d3bddc2dc31e7da02f27eac30113",
"assets/assets/images/daf.png": "e4c1d4dcaef1132151ee28f37359581d",
"assets/assets/images/davidbrown.jpg": "fb3274b895a524294be67865004def60",
"assets/assets/images/deal.jpg": "5845137b873af607ca1dd6093a8c5c2e",
"assets/assets/images/docscomputer.jpg": "6f62726d54bac0d38a9f3a7a3e41dd9f",
"assets/assets/images/documentsphoto.jpg": "d995c725b380332f69ecc477de8697a3",
"assets/assets/images/excavatorsmain.jpg": "7b50944658db8f7b8ba7c827319178d7",
"assets/assets/images/favicon.jpg": "7d5804bb70bb2d24da8d874a2d241f78",
"assets/assets/images/fendt.jpg": "67ec93c8dda30f1eceef503d8ccba3e8",
"assets/assets/images/fiat.jpg": "5d62cc4bb8b8a6e047b869e368a2f598",
"assets/assets/images/fiatcoche.jpg": "3a95cf8bb4888fa3db7b17b4d666315c",
"assets/assets/images/fondoblanco.jpg": "3f5873bbea2a365d25fd69e016a86c96",
"assets/assets/images/ford.jpg": "cf0163eb46b789ff9cfdea74b631fc19",
"assets/assets/images/hyundai.jpg": "d744fdc61fc7a6b21dc45501f9bef0cc",
"assets/assets/images/iveco.jpg": "e6e2bc3763ccc8154bf45d65282ec5a5",
"assets/assets/images/iveco.png": "1196a0baf37718ce793e3e85af640f54",
"assets/assets/images/johndeere.jpg": "c649551a2a0772e08efcae2f2c01b082",
"assets/assets/images/kia.jpg": "9c50413bd8c7d85b6dbb4523cdc928f3",
"assets/assets/images/logo_size.jpg": "8e44336081a64df281a2a5fea2183905",
"assets/assets/images/logo_size_invert.jpg": "ff18c58949c141008d24b9065d07d227",
"assets/assets/images/maintruck.jpg": "83ff018fb787ff42dbd9f4c38f05103f",
"assets/assets/images/man.jpg": "b24dedf6266f559d4bb219bbac5ffd9d",
"assets/assets/images/man.png": "141a6d0678dd7644b0ee258551d201fc",
"assets/assets/images/mccormick.jpg": "98ace1bcb67babafaa898b0bd9675aab",
"assets/assets/images/mercedes.jpg": "5fd7e758f830c34379fd061c8068af81",
"assets/assets/images/mercedes.png": "3dd3c184c9eaa3ea0ec8dc37a82b64f2",
"assets/assets/images/mini.jpg": "3234c1fdf539eb62d50cb1714d80034b",
"assets/assets/images/newcar.jpg": "17928c353b2b56bb953656fef254ea0d",
"assets/assets/images/newexcavator.jpg": "0aacde17965f60304be5952fb8763b77",
"assets/assets/images/newholland.jpg": "e59dc5e5a3f4da01ddea5a1dbe21c330",
"assets/assets/images/newtractor.jpg": "945238e11c7183b7401ba3b8291e4582",
"assets/assets/images/newtruck.jpg": "0060d5bdcbf5f3c50429f8ae796e21bb",
"assets/assets/images/nissan.jpg": "8bd6a7e66bd0ac381f7f045a76891383",
"assets/assets/images/peugeot.jpg": "375134159294caca2973682e44ebcc9c",
"assets/assets/images/porsche.jpg": "1cb89003806920a6d7d90b260b8ef785",
"assets/assets/images/renault.jpg": "3f3b28701ca3ce474c54ad9082f8f818",
"assets/assets/images/resize2.jpg": "eba88fe8fe8b68f3f817e65cd89658d3",
"assets/assets/images/resize3.jpg": "7ec5ef8d32d85c0a44f8a1b500e9fa5c",
"assets/assets/images/resize4.jpg": "feb6bcc8cf58b3bffea080a1ffe285a4",
"assets/assets/images/resizeblancocamion.jpg": "da01c9e35819888d9d5da6db9a21f5d8",
"assets/assets/images/resizecarbrands.jpg": "8ed1a0732e6ef23aaca091f84c9fbe2e",
"assets/assets/images/same.jpg": "c58e3944a078472c624600a4059f147f",
"assets/assets/images/scania.jpg": "b873069c729388166a9f83544ebf42e6",
"assets/assets/images/scania.png": "5b74963fea8a57dea253b26566426807",
"assets/assets/images/seat.jpg": "f943c76f5816ca8520bab2f2230528a6",
"assets/assets/images/toyota.jpg": "75d1ba8ff9b41893c67054711e80372c",
"assets/assets/images/tractormain.jpg": "b0e4684afc043d1c76dbd018d6c0788f",
"assets/assets/images/truckmain.jpg": "55bcb1e1be3973f7eabd0347b514da36",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "01214a00946a0e86c2d320ad1d9cd042",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.ico": "ee63a85ce46c5526467198d28bc6ba7b",
"icons/Icon-192.png": "750c928436f3d8578e2ab9dd0a9a6a92",
"icons/Icon-512.png": "edfc0deaab05fc09af6bb4aff04af7e0",
"index.html": "e2bfe81e16a9a0ad80c881be5d7dff55",
"/": "e2bfe81e16a9a0ad80c881be5d7dff55",
"main.dart.js": "fa43cf7af23e1cb65f817c93f6c91423",
"manifest.json": "19193895fec966c8e96550cb5449d997",
"version.json": "d4095755ca0d9b3ee421f739c79120fe"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
