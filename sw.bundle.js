if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const s=e=>a(e,d),f={module:{uri:d},exports:r,require:s};i[d]=Promise.all(n.map((e=>f[e]||s(e)))).then((e=>(c(...e),r)))}}define(["./workbox-ba2ee9ae"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/images/restaurant/favicon-16x16.png",revision:"75df61668253dd2c2f12b4286a524b78"},{url:"/images/restaurant/favicon-32x32.png",revision:"26b5c8af2d27032e74a84cd6f3fb9edd"},{url:"/images/restaurant/favicon-48x48.png",revision:"2f94c4e101e175b04f7103e2d492ed9b"},{url:"/images/restaurant/favicon.ico",revision:"87d25d60fff52d1dcd9d78b01668d35d"},{url:"192.bundle.js",revision:"8042fe5f2c05a9c7dcd97c89823efc7a"},{url:"2.bundle.js",revision:"a496886f92b2e130870f4fdbd6c379cf"},{url:"96cccd3859befbdef31d.webp",revision:null},{url:"app.webmanifest",revision:"41ecf4225b74de50938d5c9eaee535fe"},{url:"app~309f7e27.bundle.js",revision:"494274d453600cbb4280dbbcbb11bcdc"},{url:"app~309f7e27.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~4e5ec22b.bundle.js",revision:"d601b7379e4b3641393f3867d3a3e089"},{url:"app~7bd12dde.bundle.js",revision:"23bd91c33d57cf0652deaaf2dfc696d9"},{url:"app~7bd12dde.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"0302fdf5aeca492dacd00a12c7ee1089"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"5834ff44b908274eb59664c5f17dcd15"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"fdbb630ac28567b99a23.webp",revision:null},{url:"icons/icon-128x128.png",revision:"5ff06c700024a9c0f62a9df8366aa752"},{url:"icons/icon-144x144.png",revision:"a1efa9d8f5609feaba7da192953c2a53"},{url:"icons/icon-152x152.png",revision:"8e54ad1a963432bf09760722b6a557e2"},{url:"icons/icon-192x192.png",revision:"2d198c1fbef2152da6cfce9c5d826c0d"},{url:"icons/icon-384x384.png",revision:"6045e037692296902083518a77da59ec"},{url:"icons/icon-512x512.png",revision:"9818ffc833fd04a2a6c3c3f35ea00b63"},{url:"icons/icon-72x72.png",revision:"b5cda93410add42959b632e6405e986b"},{url:"icons/icon-96x96.png",revision:"d93ca011352b8810e8818428bd01dcbb"},{url:"images/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/heros/hero-image_2-large.webp",revision:"f8e058643c2d95b8e15f56b8b988d047"},{url:"images/heros/hero-image_2-small.webp",revision:"83d53e57ed37cc39e55c3b888b5d8dce"},{url:"images/heros/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/logo/logo.png",revision:"9818ffc833fd04a2a6c3c3f35ea00b63"},{url:"index.html",revision:"8211cab852b199a3367ee3fdb3fa1a61"},{url:"restaurant.png",revision:"9818ffc833fd04a2a6c3c3f35ea00b63"}],{}),e.registerRoute(/https:\/\/restaurant-api.dicoding.dev/,new e.StaleWhileRevalidate({cacheName:"api-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:259200}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
