'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d4095755ca0d9b3ee421f739c79120fe",
"manifest.json": "460bc64a34d26f964be24b89d29c9912",
"favicon.ico": "ee63a85ce46c5526467198d28bc6ba7b",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "be08bb4451db670d9c5fa90d983d944d",
"/": "be08bb4451db670d9c5fa90d983d944d",
"main.dart.js": "d2a0adfc69aa2c8441eff1e39646ea98",
".git/FETCH_HEAD": "930b14004033330cfa2b0e78dbed9a18",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/refs/heads/master": "604bb3cee21ce40d5f5fb9f2be0accb4",
".git/logs/refs/remotes/origin/master": "1fb2347076e2a88d6417d312c47403f4",
".git/logs/HEAD": "604bb3cee21ce40d5f5fb9f2be0accb4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/COMMIT_EDITMSG": "7dac9030c29a6dd257882a378ab05a53",
".git/objects/3e/6290c28423376c093a78ea275ef675e093471a": "4d25bab057cd36f384d0d453d20b43b9",
".git/objects/c1/5e72d38d77ad456d6c5c3d1950c4907a18ab84": "b71967bbf7dd86b588f1fffc10925e2a",
".git/objects/60/535a79ff0401483dc2125b7f8021d4c16c35a5": "d538b7f48d073585acb828bcc5a25525",
".git/objects/7a/5f66ab061c3f48cfc61f178b99b4c865d230d0": "c7c236f2cf6c52613b38f7544488b409",
".git/objects/6d/1ee2846d109f2944da24735f13b88372559835": "a8a81988be58bfe124a2465b52667deb",
".git/objects/6d/e9dd4ff3eccbcade4e7f200d0c59aad7055ea3": "8110ca738de6d97b4c933fe0b570aa1c",
".git/objects/6d/7f079b1bd1ea9838fb16616d362663e2d8af00": "a4c80ffeb0a84a08ad79e9adcbdc376c",
".git/objects/48/36d9030304c0637382ff09dcac4328a5d2d460": "dbdf0577e0671c49fdc5dbb86590413d",
".git/objects/48/87bc6766e7be8383e679408f0c69e099b95530": "ad419e2d726c70f056b3b37f9e188523",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/f6/72441192655156a95b970b5fc550d72c9b3496": "77ad449a46ca12f3f6a7b38272dc6508",
".git/objects/4c/20441a161f077fd79ba1b86c7e6ffa53630c5f": "ad613454975abf70945e9ab866cd05ef",
".git/objects/4c/d257bbf0033ef18e1e0e5b8f25ce8967c3406e": "d4fa36433b7d25e9ad36f8ce918b81ab",
".git/objects/13/b3a6f986120727e0c44cb6d376121de15a15e8": "17087f840eaa3cd2a6c3091e2abf8428",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/e4/c03c01fa1355dc324f03660d212d8446415625": "df0192257ffaccadb71ac85ef051049a",
".git/objects/0e/1a891a3afa6a17012cb8cedb03280ab99d2917": "f61255158692a643994eecc98707936a",
".git/objects/b6/5b493ae33cad8bddd0b4c674fcdf751f42b5ce": "c7568ae54eb41a1cc147fc65fdd290fa",
".git/objects/eb/91d7298deae53ae0dff5383b967144be465b54": "091ac92dca3b941b91f9df3ba0e02dc4",
".git/objects/bf/525eda2191baafb442fe3ef08aeadbdc3db9f6": "0f30d7c8d586f3e9b979b8313c076466",
".git/objects/11/ee7d8792eb255b38626c743521523df84c4ef3": "9273b5b95f3f729a68fd69df989d3d01",
".git/objects/0f/f9d8ce55e54416f91333abb86b2a030be509c8": "d8d8dea29f2ada76c059e3aabc8bb2fb",
".git/objects/1d/07fdd9133066e9978a8fc9d760fa812a94444d": "4fec4dc28a0eeb8f1da62b0a913e6668",
".git/objects/e8/77835131a92d4bbc633c890cae368d34ee67b9": "0cb2933a2f75584eb456a1f61d0011fc",
".git/objects/66/efc35b6d65029d8ad66f1258847a8d3bd0eacf": "e6f4f17d78c944978a6911cab4c850e1",
".git/objects/15/a5f2c202972ce52999d15ff604288cf13db522": "01cde60fe2df387ac7a7183f218be12a",
".git/objects/0b/7cce52ba5b8a70f669aee23cfd6114ef0c0909": "5d0241605989bc4c4f31caa7fbbdfb3e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/8e/97e819b8b4cac25738037d13566476b0a7c48a": "d878ebe719ca6b07b1f028bbcd1068f1",
".git/objects/8e/b274f10a49b3f6a0155e73f6fab0075e71c357": "76cf8eb77092e7fe42a278229e0cacc0",
".git/objects/72/2cc080cbf288de8cfc909b83515a6aba70c9ca": "b52e495932c43e5431b0303d76d2780c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/ca/a1caaf3bb2a8a269d7e70c4f5e25ba73f3fe05": "8b90cdba71388f83c1708e231a80d255",
".git/objects/6a/db10f231cd9812dc69e5a61bd042186443d0e8": "cc9d16212c846e2a5c84e5fbb10a5654",
".git/objects/81/6a514e884d43262f420fc027eea4971c458d5b": "a4812cffddc89a94990f80f010391885",
".git/objects/d6/2d03824025ecd2d737d20a2c66cf53b000dc9f": "9d6936d2defbb74b5bddeac7aeba6a9a",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a5/92ac79c3a067339878aabf83a96bb7549dbce6": "d07c5ab6376c0fea6ca0efa17fc4d069",
".git/objects/12/74adadc44f4d5510eaa18bc81b2f3ca9abe516": "0eb2f165b66d15934461770cc2911a16",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/05664cc47016b949632ab3c61cb52acfa21e82": "fd324a08e49aa5fa1650ead0a232760c",
".git/objects/33/f32aae0a326ef078a79503d7350407031f8a97": "39e5dc565a83721ab6298d51f190bff3",
".git/objects/fe/ed18d6232131f1c3eb08d63ea3f60c2f08f850": "a67b98e55d15d720119f3c3dc17e86dd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/04/77fb1b60c493a332abe45c36b176d87e8ecf4d": "802930e50032f63956daae1f56f9635a",
".git/refs/heads/master": "ed3798456c0f9fce08214419e97ed014",
".git/refs/remotes/origin/master": "a04e5abe5ce90c00d43a1e3ba5eb066f",
".git/config": "8f3a92e4808cb40b0d41cab47736b4fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/index": "9ce2b2a7b3f6f3d6734e86f5c174e8be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "30ae92d39d9407fe59fed1504ef9e27e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "75755d299305790930634cd2746c259e",
"assets/assets/images/fondoblanco.jpg": "3f5873bbea2a365d25fd69e016a86c96",
"assets/assets/images/favicon.jpg": "7d5804bb70bb2d24da8d874a2d241f78",
"assets/assets/images/1.png": "24d16f2540c5af5dff4ad1a0d82b1e3b",
"assets/assets/images/3.jpg": "2defd829598f7cc967be041b75acc89a",
"assets/assets/images/carbrands.jpg": "5ebfe61e17275996ca182dd417b4be94",
"assets/assets/images/blancocamion.jpg": "5aa28ba32fff61762b31b31f00e2b47e",
"assets/assets/images/1.jpg": "0734c1ac486b7e12bc2029de68988aeb",
"assets/assets/images/4coches.jpg": "26dc215a12fe21c5c50b21b5dd344afb",
"assets/assets/images/logo_size.jpg": "8e44336081a64df281a2a5fea2183905",
"assets/assets/images/2.jpg": "9dad698fada92bb4c3288a46b4cf7022",
"assets/assets/images/4.jpg": "d45ab0de08928f79cb4aff93cac447ab",
"assets/assets/images/logo_size_invert.jpg": "ff18c58949c141008d24b9065d07d227",
"assets/assets/images/resize3.jpg": "7ec5ef8d32d85c0a44f8a1b500e9fa5c",
"assets/assets/images/resizeblancocamion.jpg": "da01c9e35819888d9d5da6db9a21f5d8",
"assets/assets/images/resizecarbrands.jpg": "8ed1a0732e6ef23aaca091f84c9fbe2e",
"assets/assets/images/resize4.jpg": "feb6bcc8cf58b3bffea080a1ffe285a4",
"assets/assets/images/resize2.jpg": "eba88fe8fe8b68f3f817e65cd89658d3"
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
