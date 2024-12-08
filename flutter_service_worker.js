'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "edfb07c6eb7c5bc56bd280deeebe81c9",
".git/config": "7e08c67c6f319e3f82ebb9b1ca79aa3c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5c003efa94e1d2e630a55409e10702f6",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "407de63743a233ba5b9fee10b6e86c0b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "83358843b48345176cda143431482086",
".git/logs/refs/heads/2.0": "1b002e022e86dda1cdb78de95d30db4f",
".git/logs/refs/heads/3.0": "ee8a7fea06160bbed4d837660e02b312",
".git/logs/refs/heads/4.0": "466e6b99c10775092c558864c71e53ac",
".git/logs/refs/heads/master": "fa3e79a0b279d475f1bb205a955af11b",
".git/logs/refs/remotes/origin/2.0": "7ea4ee05786702aa46c1474422515679",
".git/logs/refs/remotes/origin/3.0": "06a63a259be0e0a139b564599e68b53a",
".git/logs/refs/remotes/origin/4.0": "4685f81eed4bde2e101cda890d6ff71a",
".git/objects/00/3cf3ba9c6e35424befe14b26d0095385cbbdd4": "cb28440056a8e8fe0c4d91d6007f8999",
".git/objects/04/5fcb9e7c73b8db5783ea5636815ce1fe71249d": "ac195df1090eb30ca568ba5eb16810d1",
".git/objects/04/d7b91914ee7f71ba5dbea6f254d32bb07e6bbf": "e126f2214563d714bca3e85fb2069926",
".git/objects/07/f58cc874da8972686377b64d4081ec2bd74723": "5ef3656d233633e26067c19afd433b93",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/2dec51f0d3364712fa7ec55ed284f703fe5c08": "1990ce6e93f2a87e91bce8110aaaf22b",
".git/objects/11/124f606a3327cdaa2da6533a5fd6c56099ffb3": "cec81e54a168dc836f5e44fc730a8526",
".git/objects/11/67f43fc0427174d416419c374e9dbbeace8f29": "c9c9f62085523110aefb68e94ad07dc9",
".git/objects/17/970d3130227f09e6982d4353b9dec63502b627": "b09e7e752d5ef1265e9f7d0da3958847",
".git/objects/18/fbce0e1e2b39ef914306abacd91c651ba2fad6": "839c51e68dc2fe9bc5e177c39ab67b5c",
".git/objects/19/f15ebd44dc6adf4824cfddec39ca18f81651b4": "80e98fd6ee460c902a04064fc74de926",
".git/objects/1a/c978f304797cfab06c2da33e66ac1fc7d743ac": "5006d4372653d47f6b94a21bcb6ddbaf",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/5014864189d98e47758c9adc147bc194fd7e63": "c535a53aeeb05928dd02c0654967b164",
".git/objects/20/a6c54abfd3e6a4a7c730a5d095740b9c0ca7f6": "548c3c1472c6171d9a8db4de85bfdb59",
".git/objects/22/b6ae7dccf2bcb6ef33cf5fff9f52ea39af1e9d": "ecbdfe0a4afd490683228cc01f5e9cec",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2b/867283e49b88aa48ad327ea5d56da67b61e3bb": "de4250e2e589678e196cc1766c684bd9",
".git/objects/30/22cd374a37f7be7bf2ed37671b3bda610e8587": "afda8f942587fc1f782a764c45357369",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/5bdc4b0a0471dbe86446749b7208d54fc06772": "b01631fe05a934fcf17f7bbec77f1697",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/d8986e6416e6be593330fd6df6164df5cf101d": "f091d8af68a25e287571b9770b24149c",
".git/objects/53/e471af4045b75c8f9b83969914c11c982a8756": "3e20c0b5fdcdc6f7ed1c4fab8e8f9869",
".git/objects/68/0ff49b00d856556f743609f614def6087b5468": "6e47ffc3784db443a84552f313aeedf2",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/76/bffa94bc877f9bb80091f6250ef168dcffb28a": "acae671297dcfcdb00bd53977ac34fbd",
".git/objects/77/36de9588f31242fa8dc57904ab010cbe87081e": "42cadebc8b064ded9758a1afcd9ac550",
".git/objects/7a/c519ec4cffbba0c5ea21ad0601502db41d941d": "632272b0748b24537edcf647a4e7d709",
".git/objects/7e/2fdc28ae52e91c8cc98b13d6b7548e636bf95c": "1260871c4771b2951eed2db138152aa3",
".git/objects/7e/5a00577ee51d2304da851f4cb6391d1c77c954": "844d61b7d1ce2ee46914c2e334fac67b",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/a109c842d9fedd7855e36cce4c1be747c807ab": "700d78f35df454855a3342906ec664b5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/8365443b942f83c9d4bd457f6284d5e802546b": "3b52dc71b9d8f5e12f2cc94921d3549a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/cac894e88f6c6c99d035e32f9145efa9278e31": "c41bca889b5980b30660f98c785bfe90",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/6978c337a68e3781cff81b207a2e53ebe3ab74": "a2b9a5acca07f163a281806ca666b42e",
".git/objects/a2/27466646ff29784c3b85c90e8ed58d90cf7de3": "f4c9f14cada41ca5a5cdc1e756c27cde",
".git/objects/a8/7e37bd19518443eeaa401d43d88f0a27237778": "596c4f0b475ba78827c42bbb0451f9ca",
".git/objects/a9/18e2e392a09da367cd139dcc8acdce535b5d58": "bb382c68e163ea65d21090207c7eefde",
".git/objects/a9/d8b4ecdb2a133fda0714b008be34d7dfd9778d": "8bc4133375c3a38b4175793fa3227d71",
".git/objects/b0/0ea629d2682edefddd9d1d3ecd41eb59118da1": "618cb5b5670575e48b822e19f95abdd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/15e0b576427cf34802afaf51ab99963c430f6c": "7836d348564e422aed9b8ca21f4639e4",
".git/objects/b9/12c7e2c203ba0879a345a2fce9fb031cb88a60": "3cf3aa001ee8aae5f9737e75b5b3ada3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/07fe182df11c91fb149ac60e2a367bc7bfed9e": "131d61964b9029ff334b9bf320e6b012",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c7/c0bc43856ccd6cbbb76df9810ce356c3f0bef7": "46238b482b4e3b6d06bbd9398aab54f9",
".git/objects/d0/1c9a6716bba26295578d119eedc90abb4dee98": "3a04d2f6ff0245b21ed6d9fa05deebe1",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/415fb47c50056894a66c8cb1bbe99673395803": "7746c572df4ffc98261e01141404d574",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/39225c3bd843f0949f322a720f6b89b2da84fe": "72bbb51d78acc4ee152bf5fc6e552973",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/25d97672020c45c9847bcb1b9d23f77efe5056": "6c419fdf37c3fb459171faf0ac330147",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/3f5299be149bf7a5f9a3fd38998af03c8aefaf": "3dff67603ed12a4b9c37ee59796a12ef",
".git/objects/e3/597adbf4c9f8cc1620551b546196d37d7f9f5d": "27dbb1d19a97341eb575982beb0635c9",
".git/objects/e4/859f0a18b08e689c0866e3fda477b4f5d38027": "df762c8596ce394464b16a82469d060e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/b9cee325fa1e2d9f3e72c8df3b7744eb509de7": "98eff1f3925285286c4b610570de7aa0",
".git/refs/heads/2.0": "7910b5b08b7ccf3432485908c8051f94",
".git/refs/heads/3.0": "094f266d9f686387fb48075b6981d75b",
".git/refs/heads/4.0": "094f266d9f686387fb48075b6981d75b",
".git/refs/heads/master": "2dd6df74dce0836509c961a4213465e2",
".git/refs/remotes/origin/2.0": "7910b5b08b7ccf3432485908c8051f94",
".git/refs/remotes/origin/3.0": "7910b5b08b7ccf3432485908c8051f94",
".git/refs/remotes/origin/4.0": "094f266d9f686387fb48075b6981d75b",
"assets/AssetManifest.bin": "3cecd8aa72eff66a46be29cc8cd4f4ef",
"assets/AssetManifest.bin.json": "7136c4c600f77ff9411c9b483e929b29",
"assets/AssetManifest.json": "c254850d95a5bbd8e991b541a69d67c7",
"assets/assets/icons/navigation-arrow.svg": "2fe7d6deb605ea6945a7227b2becb8aa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "67af9a1b66f9f6e0b5b5aa4f02182a8e",
"assets/NOTICES": "fb5134e0091c62dc14d67c65c1781046",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "52edf5ed77e7e23b37fd5cb87d4ec14a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "37963cd31ada51456bd496cfe934c648",
"/": "37963cd31ada51456bd496cfe934c648",
"main.dart.js": "86ab4f4c5e7ad051a64850ce3da83adc",
"manifest.json": "6d44aa1fbdd53f595a3fba466cd66e8c",
"version.json": "bbbfe56615bd598e58c53d4d0972dd26"};
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
