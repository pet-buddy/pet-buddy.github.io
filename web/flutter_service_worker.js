'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6fc1ce0b96351190574efee54ec0940b",
"version.json": "326f13b0338739987d6c770f82ff958a",
"index.html": "dd5c016546f53f118e8b0349f31be872",
"/": "dd5c016546f53f118e8b0349f31be872",
"main.dart.js": "1e4281b8f756e002050ecc9d98b72922",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6e81dea6b0221cf83674d7ca5d619e9b",
"assets/AssetManifest.json": "fa67a36ae56a1ca5fe874763f91eba0b",
"assets/NOTICES": "25ae70e015149ddf13f052a8f0a24fea",
"assets/FontManifest.json": "791bcdb50f92c58f29b5236a1750c168",
"assets/AssetManifest.bin.json": "f316d10f48831447ff47d30a552a3e4c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a57f005e62661fd9bcaa73f25a80fc9b",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/icons/etc/feed.svg": "896e1a9c3f17ca7ff89253e39ddd23a6",
"assets/assets/icons/etc/Dog.svg": "f853a1bc14ff40a595a93a9e975a50e8",
"assets/assets/icons/etc/poop_status_1.svg": "21a51586b7142cd5d62238ea671235fd",
"assets/assets/icons/etc/poop_status_3.svg": "bdd7bb9959ff0df1e583734f0c7989e8",
"assets/assets/icons/etc/poop_status_2.svg": "4dc3ca51dc071cd33d97e9550a4e5283",
"assets/assets/icons/etc/poop_status_5.svg": "2218baab4118a09a662dc7027e2caae0",
"assets/assets/icons/etc/poop_status_4.svg": "1cc42f7d41b71f33c0b4b4a6a47c920c",
"assets/assets/icons/etc/poop.svg": "f1f407b9a0c249ea1f4bcf89e69b6ca0",
"assets/assets/icons/etc/heart.svg": "7f794f2e0d810539d7b40346545d0949",
"assets/assets/icons/navigation/arrow_next.svg": "4d272a7cf5687e1aad19394011a8b5d4",
"assets/assets/icons/navigation/arrow_back.svg": "1e28b5a900ab245c8756e223f51bc852",
"assets/assets/icons/outlined/close.svg": "8de3d2d8f79efebb2534eaf3bb8f1044",
"assets/assets/icons/outlined/camera_icon_outlined.svg": "6be4cec903074719c176c73a02f4deaf",
"assets/assets/icons/outlined/shopping_icon_outlined.svg": "c3d7f09d17985b172691816d251e6f37",
"assets/assets/icons/outlined/profile_icon_outlined.svg": "8acb88909e67c2c48f895299135b7e3c",
"assets/assets/icons/outlined/home_icon_outlined.svg": "723d202d48c439d7a5be683aebce3ac2",
"assets/assets/icons/filled/camera_icon_filled.svg": "7705f3cae97867e5694615dbcf388994",
"assets/assets/icons/filled/home_icon_filled.svg": "0b1ec7577c895ea9d32bdecacb062679",
"assets/assets/icons/filled/shopping_icon_filled.svg": "1ec30eb7c452c45db8dcca9cc5b06a30",
"assets/assets/icons/filled/profile_icon_filled.svg": "05795af6836bf18248764bb6ff67e5ca",
"assets/assets/icons/illustration/puppy_yellow.svg": "dd651658b886f7f88c2578c1cb25c22f",
"assets/assets/icons/illustration/puppy_black.svg": "bf02e670b6f479d7614e010820d353d1",
"assets/assets/icons/illustration/puppy_white.svg": "fc77bd6c3545dc2d8753b9b4930cc164",
"assets/assets/icons/logo/apple_logo.png": "8101e827e5577b493a2142493988f264",
"assets/assets/icons/logo/kakao_logo.png": "9b77213ced3b7710f91bc2ed1cf1c0ed",
"assets/assets/icons/logo/naver_logo.png": "d9c13906ceeee1970479c08a48d00bed",
"assets/assets/fonts/NanumSquareRoundB.ttf": "ecc61bfabe0637e8367a734e718a4f8e",
"assets/assets/fonts/NanumSquareRoundOTFB.otf": "d1b7d1fc8bfe4eccc8aeb7ff95bad663",
"assets/assets/fonts/NanumSquareRoundOTFR.otf": "30caed9c2deb38480396e8ed892dc3cc",
"assets/assets/fonts/NanumSquareRoundR.ttf": "4ba97a2a508f59611d45c41e7414ba66",
"assets/assets/fonts/NanumSquareRoundOTFL.otf": "75662d6e584f51c83a805698c3de0f20",
"assets/assets/fonts/NanumSquareRoundL.ttf": "924b9ea5f0305f8dc6371fc4f12da37a",
"assets/assets/fonts/NanumSquareRoundEB.ttf": "00f73012c2e65950de3d7fa2be640c95",
"assets/assets/fonts/NanumSquareRoundOTFEB.otf": "80d60e4eb529133db2d93250100760f5",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
