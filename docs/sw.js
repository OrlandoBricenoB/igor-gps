if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,o)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const a=e=>n(e,c),d={module:{uri:c},exports:r,require:a};i[c]=Promise.all(s.map((e=>d[e]||a(e)))).then((e=>(o(...e),r)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.9daa33ea.css",revision:null},{url:"assets/index.a9612a0c.js",revision:null},{url:"index.html",revision:"53b6dc36b8977f0fb1eff2c6ac87af2d"},{url:"registerSW.js",revision:"0d20e4b984fa56049eb282eacc4a96de"},{url:"pwa-icons/icon-72x72.png",revision:"2d2a95367872d503fc17894ccea10163"},{url:"pwa-icons/icon-96x96.png",revision:"f3d11b3e0827533c326d5a67b8d1ef40"},{url:"pwa-icons/icon-128x128.png",revision:"84e88f80efdf5f45390c719dbe4e15fa"},{url:"pwa-icons/icon-144x144.png",revision:"8db89473c9167980eeb9aa1fc0da5206"},{url:"pwa-icons/icon-152x152.png",revision:"630ebb2bce54a11a383228d15a1b4adc"},{url:"pwa-icons/icon-192x192.png",revision:"a4f98d14721d751f6a1efada09704ecd"},{url:"pwa-icons/icon-384x384.png",revision:"21398310082bbda380b11b6554622dc8"},{url:"pwa-icons/icon-512x512.png",revision:"320f64231ea03b47e484a65055b338cc"},{url:"manifest.webmanifest",revision:"209213002dd496619c6b627452898875"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
