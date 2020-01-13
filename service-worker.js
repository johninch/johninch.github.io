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

var precacheConfig = [["2019/10/13/welcome/index.html","6e3d7cfa31a0ba1289b4369b16d25ed2"],["2019/10/29/eleMessage/index.html","e76b32dcdd6060f0d84755d284a00382"],["2019/10/29/eventEmitter/index.html","a69fafecfe8c909ddf76411d75c038be"],["2019/10/30/asyncAwait/index.html","fa2d5f8647ee8eef7aa3d55fd1e8f438"],["2019/11/13/variablesAndTypes1/index.html","a088300c901c1c9f6e9480511e3a4ac9"],["2019/11/15/variablesAndTypes2/index.html","6380bb85efe180989d955317d6226234"],["2019/11/18/variablesAndTypes3/index.html","18ae31a7a30a4a9df0ae98d77430b179"],["2019/11/21/variablesAndTypes4/index.html","dc90adf0ea0a0a8c2212eca7ed5ac308"],["2019/11/22/variablesAndTypes5/index.html","b0a5a26aecbaaee284bb9f66b6049cb1"],["2019/12/12/eslintPrettier/index.html","79bb7e4d79381caac8833cfb2e7f1b5f"],["2019/12/18/linkedList/index.html","50e4344ed015013ec14f6f60af217d45"],["2019/12/26/cors/index.html","9596f8b55f37f3c9425ab60adfc7bb41"],["2020/01/06/classFn/index.html","3918c41432436a31d9f5351999c99a2a"],["2020/01/10/webAssembly/index.html","c8f8794d9c09e07287971ba6bb1ef624"],["2020/01/14/deploy/index.html","bc4b7641f75169ad806462962b2aa3ef"],["archives/2019/10/index.html","a11810c22416c79da80c58938ebb2d9e"],["archives/2019/11/index.html","88eed47a9cb9a7c148d5315ffcab9a9e"],["archives/2019/12/index.html","fa8371a16564dbd03cbdf795bdaff595"],["archives/2019/index.html","6ac6258a5da767bb82a8e438bab06413"],["archives/2019/page/2/index.html","2755d40a7afe5c5cfb8cc00438ea9915"],["archives/2020/01/index.html","ad936b195f738ed6a3e264a1e3049ea1"],["archives/2020/index.html","f1f4b227d578ab613ec8fab2cae93268"],["archives/index.html","f796bcd9a95876d2112f4b6da17b3852"],["archives/page/2/index.html","35c646672a1747f74a0b7a4d0efedf9e"],["categories/index.html","7e1396706186418cc11f10a440c1467c"],["categories/javascript/index.html","505532940e7d55b59c570ccce64c44c7"],["categories/工程化/index.html","f1330c4685ac58e358f1005f2f0a3d55"],["categories/随感/index.html","4cf58afc660e9587fc58fd29ad6cbdbc"],["css/index.css","feb94e69baa2e1214f3840b9cd5a0810"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","5618089a42f662617d3a08141dd6d99d"],["images/linkedList/reverseLinkList2.png","3908061dfc6ef3ff6b36d689ee7f7a0c"],["images/pwaicons/image-144.png","7d6fcae3031a97c864dd761fc0ab542d"],["images/pwaicons/image-192.png","df84bf38d98ef71c6a62718b3e3f0ebb"],["images/pwaicons/image-36.png","bde90002e4f3d82109751113210b95f8"],["images/pwaicons/image-48.png","32cdb45f03933ab93dee101aabcf1b95"],["images/pwaicons/image-512.png","d21ef017f14cd0733ce3b41d2afb8fb1"],["images/pwaicons/image-72.png","7181e1492826026aba11670f323e594a"],["images/pwaicons/image-96.png","7de26cc4f9502c21938df6c8dc96428b"],["images/variablesAndTypes/64位双精度.png","73431bfc577503f11e702c52241b3bd5"],["images/variablesAndTypes/Object.prototype.toString.call.png","a10aabff5de65c79ba829cb08a709e51"],["images/variablesAndTypes/原始类型复制.png","1f87cb2cb20c44938ea080ae6d01ce9f"],["images/variablesAndTypes/堆示例.png","305cd00fe97cdcbb9460f5ada62cd64d"],["images/variablesAndTypes/引用类型复制.png","9097f9a37d642db0950186c3c1d70a47"],["images/variablesAndTypes/栈示例.png","b212784d57016326250cc480ab35ff9a"],["images/variablesAndTypes/栈示例2.png","d8533d5d3953e0c630bf665a054970df"],["images/variablesAndTypes/类型比较.png","79e6de4611bac935c5c466e8b424b002"],["images/variablesAndTypes/精度位数.png","658f8e48778406e670ef15ec1102b506"],["images/variablesAndTypes/隐式类型转换规则表.png","22617f631abcb8ef47a4946e20cd4e89"],["images/webAssembly/what_is_WebAssembly.jpg","442a02666f799e11883461c30aab2998"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","6251ec14af5d497328de0cc9eaa24bfb"],["js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","082c5add5bb97348a2d9fecd7aa6a86d"],["slides/index.html","4ba33e473ebb1413d99aec3c202b2e53"],["tags/CI-CD配置/index.html","dd499d834ecaa0a40a1cf25e1c9c99a6"],["tags/ES6-原型链-类与继承/index.html","c8b11c5ef1e2cc67cb9e84057e3962d5"],["tags/ES6/index.html","25ffa25e00723a4b9e44d057be835ea8"],["tags/FE/index.html","ebf185082b6c3c285ca9fc5f757c725c"],["tags/HTTP-浏览器-跨域-预检请求/index.html","af0d16dbf9eb53235860206a2a741e3e"],["tags/HTTP/index.html","47f269093374d23d6dfa1582793f872b"],["tags/cdn原理/index.html","cef4b677cef6edce9feaa11f4191dbee"],["tags/elementUI/index.html","50e2fece973add77d64b9710d48e94d4"],["tags/eslint/index.html","3ef7a6f9e71a401ad333843eb725d94b"],["tags/husky/index.html","577835410901a610d9a0b5581366cca3"],["tags/index.html","e0f5cd9f51ba99bbd303ffde4688df3f"],["tags/leetcode/index.html","2d715623ee3db0de4db7b9e5736f8330"],["tags/nginx原理/index.html","48b8a1d535f7bb7c094461f5e2754fd4"],["tags/node/index.html","dbbc2a6c47d20d70a7af97c982116368"],["tags/prettier/index.html","16cd5155efb4083943587634bfadad94"],["tags/wasm/index.html","baaf5d260baf5a89ba7f45d2889fc704"],["tags/webAssembly/index.html","e65c646de74697cff04c5ea8a1eae9bb"],["tags/二次封装/index.html","d21f7b956cc5d476d3bcc57bddd56a70"],["tags/代码检查/index.html","9981be79547feef1b8584dd5b7919128"],["tags/前沿-webAssembly-wasm/index.html","46044d6a7db9245f66e462f087ad6ecc"],["tags/前沿/index.html","7e47b32bae3ba232b14e1e59c6abc30f"],["tags/前端基础/index.html","c81de3ac8cae4fc78f41d31be05f59b6"],["tags/前端知识点/index.html","326a5b3acac586b2dbf155617bb6f412"],["tags/博客/index.html","8ed81e86ca99defa20a583e264c27836"],["tags/原型链/index.html","7700769a74f0bec609ef335abce552ce"],["tags/变量/index.html","a8c47a9000ac64d9b78c05c38e701e5b"],["tags/团队成长/index.html","b312dfc44adbb76a9fe18c2a5fa74076"],["tags/异步/index.html","e5dc36b337ad2f91590df2fb852b0020"],["tags/数据类型/index.html","8574fbf3ea33149ba2998f0cb6728b97"],["tags/数据结构/index.html","b283b7d05655384748245dad53c928bd"],["tags/浏览器/index.html","1bd1994e63949644533fd095e1844835"],["tags/算法/index.html","4afde4b5bb7596119ce8d177819c8b32"],["tags/类与继承/index.html","1f3ebc2d0699af34ac709ec57382f68b"],["tags/类型判断/index.html","cd81ace1e779e593d57afcae272e5544"],["tags/类型转换/index.html","969d7a6330ab28a88bb82cf753703449"],["tags/线上部署流程/index.html","84359fe5b7f790aa4184cda9944e775b"],["tags/装箱拆箱/index.html","f9e40bf66a7e6054ea55a57c54550356"],["tags/跨域/index.html","a170ecef2b53e62bbb9395985d5603fb"],["tags/链表/index.html","337718b19c554f189f6e75813a375922"],["tags/预检请求/index.html","34497a7e9ea9ff5da94e54f23f0257c9"]];
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







