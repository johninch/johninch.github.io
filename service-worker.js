/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2019/10/13/welcome/index.html","24bb4bdf4f31b90f001baedd08c2bc40"],["2019/10/29/eleMessage/index.html","3c124137beae15917006dacf8464fc59"],["2019/10/29/eventEmitter/index.html","136c1fa0154663a65a2ac7a600e01f42"],["2019/10/30/asyncAwait/index.html","ce4701c5f95f4f6a2a4329cdd0ea6513"],["2019/11/13/variablesAndTypes1/index.html","b8baf64031834e1b077ffe62393de5a3"],["2019/11/15/variablesAndTypes2/index.html","f069c80b6715e54c9de866f2f49389b0"],["2019/11/18/variablesAndTypes3/index.html","bfd00d6811dc3bd12f7f15ce3f033512"],["2019/11/21/variablesAndTypes4/index.html","562de50c4b0ceac26c1a531ef5c786f5"],["2019/11/22/variablesAndTypes5/index.html","e3edfd34b41bb43d586f6cfc6f7d45b0"],["2019/12/12/eslintPrettier/index.html","9b41d672e7b44d11c87256e8e26b3a1e"],["2019/12/18/linkedList/index.html","167b7d847a5503151ad0ec3eb93737a3"],["2019/12/26/cors/index.html","30be3db5a3c3efe55cf12ca60969c268"],["2020/01/06/classFn/index.html","26c34f2fc094fd17299cfcfc22d023ee"],["2020/01/10/webAssembly/index.html","6b37c68cf5c0e91258707e5a946d743f"],["archives/2019/10/index.html","cdc902a81ca2ec8abe36484961b8aa5d"],["archives/2019/11/index.html","c46893cf49a15612ebda0533096967fc"],["archives/2019/12/index.html","44f226769e13b5706430b1e46c5875c0"],["archives/2019/index.html","ef86034dd35bfbf972f8fb3f24e06b25"],["archives/2019/page/2/index.html","534a0de37828753b155049d6a35c4d56"],["archives/2020/01/index.html","15b0f6243840cf3fcc108c16e5d59b11"],["archives/2020/index.html","baf3d846e72285e5d3cb3edb4510d15f"],["archives/index.html","23a1dcf6ee412ff308c51be83baf8d5c"],["archives/page/2/index.html","d4b6ebaa08f60bcec684726b495bc832"],["categories/index.html","5221c6452eb10342fcb8562e99d885cb"],["categories/javascript/index.html","829389fd2e5479846d7c0d6afe9597ff"],["categories/工程化/index.html","cad218fdebb24bbb63624bb9702b63b9"],["categories/随感/index.html","90043586ae02d0e5055b6f00fd090a28"],["css/index.css","feb94e69baa2e1214f3840b9cd5a0810"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","a68639d04e278983ddd17a4bd6953c88"],["images/linkedList/reverseLinkList2.png","3908061dfc6ef3ff6b36d689ee7f7a0c"],["images/pwaicons/image-144.png","7d6fcae3031a97c864dd761fc0ab542d"],["images/pwaicons/image-192.png","df84bf38d98ef71c6a62718b3e3f0ebb"],["images/pwaicons/image-36.png","bde90002e4f3d82109751113210b95f8"],["images/pwaicons/image-48.png","32cdb45f03933ab93dee101aabcf1b95"],["images/pwaicons/image-512.png","d21ef017f14cd0733ce3b41d2afb8fb1"],["images/pwaicons/image-72.png","7181e1492826026aba11670f323e594a"],["images/pwaicons/image-96.png","7de26cc4f9502c21938df6c8dc96428b"],["images/variablesAndTypes/64位双精度.png","73431bfc577503f11e702c52241b3bd5"],["images/variablesAndTypes/Object.prototype.toString.call.png","a10aabff5de65c79ba829cb08a709e51"],["images/variablesAndTypes/原始类型复制.png","1f87cb2cb20c44938ea080ae6d01ce9f"],["images/variablesAndTypes/堆示例.png","305cd00fe97cdcbb9460f5ada62cd64d"],["images/variablesAndTypes/引用类型复制.png","9097f9a37d642db0950186c3c1d70a47"],["images/variablesAndTypes/栈示例.png","b212784d57016326250cc480ab35ff9a"],["images/variablesAndTypes/栈示例2.png","d8533d5d3953e0c630bf665a054970df"],["images/variablesAndTypes/类型比较.png","79e6de4611bac935c5c466e8b424b002"],["images/variablesAndTypes/精度位数.png","658f8e48778406e670ef15ec1102b506"],["images/variablesAndTypes/隐式类型转换规则表.png","22617f631abcb8ef47a4946e20cd4e89"],["images/webAssembly/what_is_WebAssembly.jpg","442a02666f799e11883461c30aab2998"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","bb68e798cf633b605a6978813c04a4c6"],["js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","4a969c6be1ff0fca593ceab3078a65a6"],["slides/index.html","7995b3cd4c2bbca28bf7810b1d32b550"],["tags/ES6-原型链-类与继承/index.html","c8b11c5ef1e2cc67cb9e84057e3962d5"],["tags/ES6/index.html","1dd2e627f317787f5767383bbed5ed16"],["tags/FE/index.html","716c38a18e68ea0c4fffa11bb906772c"],["tags/HTTP-浏览器-跨域-预检请求/index.html","af0d16dbf9eb53235860206a2a741e3e"],["tags/elementUI/index.html","10a68b488caa10de9ef615cc66e70ed2"],["tags/eslint/index.html","bf628c1b6cfbefdefcba121cd10e3125"],["tags/husky/index.html","e7ab60208e498d9b4a1908dc6b4187d6"],["tags/index.html","00ec71d8da47b0088e4d2a65aae271ec"],["tags/leetcode/index.html","7cd54d6df62947ec52b1b5591f2dbd8f"],["tags/node/index.html","25cd17c245a13def9633f9c51f1b1e9c"],["tags/prettier/index.html","dcd0959ddc8cf5b6b6d75c19a3046259"],["tags/二次封装/index.html","a017c6ac3b9d8f8633b0b9f1d98e2c00"],["tags/代码检查/index.html","bcf3170f456b06eb712abae7b0a8bdcf"],["tags/前沿-webAssembly-wasm/index.html","46044d6a7db9245f66e462f087ad6ecc"],["tags/前端基础/index.html","e2deba1dda69f7aeb83e1821526bb7d5"],["tags/前端知识点/index.html","1e8aa1225aa5102670abc01093ed55c2"],["tags/博客/index.html","be36d3d6ae13df9638af10ff1973bd8b"],["tags/变量/index.html","fd544d4e8daf733bf5013cde4ff0b7d2"],["tags/团队成长/index.html","b1fb11df84e714adb48bec84398a6683"],["tags/异步/index.html","fd1ba1147a6e24b1440c9d21439677dc"],["tags/数据类型/index.html","dc5c7c47e019c5ebcd2e15338e454cf8"],["tags/数据结构/index.html","ba6d541b0ea35eeeea6868db1578de01"],["tags/算法/index.html","6c7173bab8d7d19803879602bede1c4e"],["tags/类型判断/index.html","9e6328aef64e191da62b805e569888c9"],["tags/类型转换/index.html","a9f66c28fda0eb28160b42c6f7254c47"],["tags/装箱拆箱/index.html","f0c39325b8402bed49828ff1f21b44af"],["tags/链表/index.html","39a3d67c1c7c0126e8d30751d83a77ce"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







