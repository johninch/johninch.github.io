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

var precacheConfig = [["2019/10/13/welcome/index.html","b97d80d15dca5e06269a35a7230d1e33"],["2019/10/29/eleMessage/index.html","2de98e4a2c1d448bf7b99c8f6968a8fc"],["2019/10/29/eventEmitter/index.html","2b814d9624a50b85b3d8ec34f8cae4fe"],["2019/10/30/asyncAwait/index.html","54aea163f90becd1e9a3967c03e67ad5"],["2019/11/13/variablesAndTypes1/index.html","62de2e578c0bcf37315aa74ff1740132"],["2019/11/15/variablesAndTypes2/index.html","4157f09ae67e68b06ddedfa415bb99c7"],["2019/11/15/variablesAndTypes3/index.html","c4768962ae4874a01147a00ecd4e78ca"],["2019/11/18/variablesAndTypes3/index.html","57f2c0a19e99e094e0d3df5037892543"],["2019/11/21/variablesAndTypes4/index.html","37d61e547e569b5b455de63802949f87"],["2019/11/22/variablesAndTypes5/index.html","8205c79ea51fbc9ab1e276b3e2ccad0e"],["2019/12/12/eslintPrettier/index.html","57352c5b9fac9deb914602793bea9aaf"],["2019/12/18/linkedList/index.html","a7c05ead44511848dfbd49e8e18e06f8"],["archives/2019/10/index.html","bc1177173e20c2febb60381e18ae8111"],["archives/2019/11/index.html","085a743cb6e0f9463f9a530735ace291"],["archives/2019/12/index.html","bc27a50f916043ca203fba12659dc64e"],["archives/2019/index.html","3575c898e5f1ac6a9d2de88d5d3f9836"],["archives/2019/page/2/index.html","23eedd55fb6c6673351a3ccaaebd65ac"],["archives/index.html","d61a651b9b8aa797c30be5d71a4febfa"],["archives/page/2/index.html","f7d89871eb1833b984de11cbcb5a6c4f"],["categories/index.html","d0eb234041bc8166a82ed5de047f4e18"],["categories/javascript/index.html","f0cdb40c5aff641adee08083fc6f61cc"],["categories/工程化/index.html","96045e0fa015e22dc1c7b7c5be00b95e"],["categories/随感/index.html","208976d136e22a3b6c1a4e4a22705b42"],["css/index.css","feb94e69baa2e1214f3840b9cd5a0810"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","7e77b8afb28518ee5f38059e938f92eb"],["images/pwaicons/image-144.png","7d6fcae3031a97c864dd761fc0ab542d"],["images/pwaicons/image-192.png","df84bf38d98ef71c6a62718b3e3f0ebb"],["images/pwaicons/image-36.png","bde90002e4f3d82109751113210b95f8"],["images/pwaicons/image-48.png","32cdb45f03933ab93dee101aabcf1b95"],["images/pwaicons/image-512.png","d21ef017f14cd0733ce3b41d2afb8fb1"],["images/pwaicons/image-72.png","7181e1492826026aba11670f323e594a"],["images/pwaicons/image-96.png","7de26cc4f9502c21938df6c8dc96428b"],["images/variablesAndTypes/64位双精度.png","73431bfc577503f11e702c52241b3bd5"],["images/variablesAndTypes/Object.prototype.toString.call.png","a10aabff5de65c79ba829cb08a709e51"],["images/variablesAndTypes/原始类型复制.png","1f87cb2cb20c44938ea080ae6d01ce9f"],["images/variablesAndTypes/堆示例.png","305cd00fe97cdcbb9460f5ada62cd64d"],["images/variablesAndTypes/引用类型复制.png","9097f9a37d642db0950186c3c1d70a47"],["images/variablesAndTypes/栈示例.png","b212784d57016326250cc480ab35ff9a"],["images/variablesAndTypes/栈示例2.png","d8533d5d3953e0c630bf665a054970df"],["images/variablesAndTypes/类型比较.png","79e6de4611bac935c5c466e8b424b002"],["images/variablesAndTypes/精度位数.png","658f8e48778406e670ef15ec1102b506"],["images/variablesAndTypes/隐式类型转换规则表.png","22617f631abcb8ef47a4946e20cd4e89"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","fc9b51f624b047fccb0a41fb1f5db61d"],["js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","9b308ea619c5bf5b7284b0385f49de0b"],["slides/index.html","396c012cf3a3af3fc342cfeae7be600b"],["tags/ES6/index.html","087c653c0382a4d2660ad2b6189cb364"],["tags/FE/index.html","28210655c81382ea89ce9882aef61142"],["tags/elementUI/index.html","a0ff935bccae71580f22255ac5036532"],["tags/eslint/index.html","a10503da08e200b121ec3e7b3158b6a4"],["tags/husky/index.html","29937391a77ddfd798960b4589d2d600"],["tags/index.html","2be232861947c8ca95403cf0a9ba4c09"],["tags/leetcode/index.html","7e435ae44725ddbf2b41aaf626a24bf9"],["tags/node/index.html","a528b5b0183ee10379794822db2f1a00"],["tags/prettier/index.html","d2e8a6f495fdec8129da85e3d7814801"],["tags/二次封装/index.html","279e643cf4343eddd4e5e2b2e185e532"],["tags/代码检查/index.html","224b56d0fed897a5be02ae744fcd13cb"],["tags/前端基础/index.html","844f80f0a5587dab010302d02cbf468b"],["tags/前端知识点/index.html","16daab7d938dbaa8167700f829f1590f"],["tags/博客/index.html","92c6db019e44b7945ce5ae222de81cf2"],["tags/变量/index.html","10a9ab8a05eba2604743e91d3ad2852a"],["tags/团队成长/index.html","97a0c5edf38b4d8a615502757c0c6889"],["tags/异步/index.html","b0f354c08e0b53d2e1009674079d863e"],["tags/数据类型/index.html","b83afa5b1be235273cf04187c22e3e66"],["tags/数据结构/index.html","cdc49de9ee692a91fc93365197b4ec2c"],["tags/算法/index.html","c5edda4bb97456b3a0d84daa58d82ba8"],["tags/类型判断/index.html","2c033b5cf50582e7282ea070c6b40a4c"],["tags/类型转换/index.html","c508e73586708f2c3dd9445b6fe50b15"],["tags/装箱拆箱/index.html","b2bfaa14d5f084a38419c65420f42bdd"],["tags/链表/index.html","488bf55dd6d97e6ff1b8c64c6fc44f0b"]];
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







