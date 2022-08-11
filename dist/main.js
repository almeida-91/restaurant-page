(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(81),r=t.n(a),o=t(645),c=t.n(o)()(r());c.push([e.id,"html,\nbody {\n    margin: 0;\n    height: 100%;\n    background-size: auto 120%;\n    font-family: sans-serif;\n}\n\n#content { \n    height: 100%;\n    display: flex;\n    flex:1;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    justify-content: space-between;\n}\n\n.menuContainer { \n    display: flex;\n    justify-content: space-around;\n    align-items: stretch;\n    background-color: gray;\n    width: 100%;\n    padding: 20px;\n    border-bottom: 4px solid white;\n}\n\n.menuContainer a {\n    height: 100%;\n    text-decoration: none;\n    background-color: gray;\n    color: white;\n    font-weight: 700;\n}\n\n.imageContainer img {\n    height: 400px;\n    border: 2px solid white;\n    border-radius: 20px;\n}\n\n.quoteContainer {\n    background-color: rgb(64, 64, 64);\n    padding: 20px;\n    width: 43%;\n    border-radius: 10px;\n    margin: 20px;\n    display: flex;\n    flex-direction: column;\n}\n\n.quoteContainer p {\n    text-align: right;\n}\n\n.title,\n.credit {\n    background-color: rgba(0, 0, 0, 0.396);\n}\n\n.footer {\n    margin-bottom: 0px;\n    border-top: 4px solid white;\n    background-color: gray;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: white;\n    justify-content: space-between;\n    padding: 20px 0px;\n}\n\n.footer a {\n    margin: 0px 10px;\n}\n\n.link {\n    color: white;\n}\n\n.plate { \n    background-color: white;\n    color: black;\n}\n\n.plateContainer {\n    display: grid;\n    gap: 20px;\n    grid-template-columns: 200px;\n    grid-template-rows: 1fr;\n    grid-auto-rows: 1fr;\n    grid-auto-columns: 200px;\n    grid-auto-flow: column;\n}\n\n.plate {\n    padding: 10px;\n    background-color: gray;\n    color: white;\n    border-radius: 10px;\n    display: grid;\n    align-content: space-between;\n    justify-items: center;\n}\n\n.contact {\n    background-color: gray;\n    border-radius: 10px;\n    padding: 10px;\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-auto-flow: column;\n    margin: 10px;\n}\n\n.contactImage {\n    grid-row: span 3;\n}\n",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&c[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},c=[],i=0;i<e.length;i++){var d=e[i],s=a.base?d[0]+a.base:d[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=r(m,a);a.byIndex=i,n.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=t(o[c]);n[i].references--}for(var d=a(e,r),s=0;s<o.length;s++){var l=t(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"3d2794dc83c9f6633434.jpg";function n(){const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("footer");const t=document.createElement("a");t.classList.add("link"),t.href="https://www.freepik.com/",t.innerHTML="Background image from Freepik",n.appendChild(t);const a=document.createElement("a");a.classList.add("link"),a.href="https://www.flaticon.com/",a.innerHTML="Icon images from Flaticon",n.appendChild(a),e.appendChild(n)}const a=t.p+"aa01f716288eeaae855f.svg",r=t.p+"798c1a32b040749150ec.svg",o=t.p+"dafbc1f97e0ef29ba4b4.svg";function c(){l(),document.getElementById("menuContact").style.textDecoration="underline";const e=document.getElementById("content"),t=document.createElement("div"),c=document.createElement("div");c.classList.add("contact");const i=new Image;i.style.height="100px",i.src=a,i.classList.add("contactImage"),c.innerHTML="<p>The Chef</p><p>Phone: 123456789</p><p>E-mail: chefoftherestaurant@mail.com</p>",c.appendChild(i),t.appendChild(c);const d=document.createElement("div");d.classList.add("contact");const s=new Image;s.style.height="100px",s.src=r,s.classList.add("contactImage"),d.innerHTML="<p>The Waiter</p><p>Phone: 012345678</p><p>E-mail: waiteroftherestaurant@mail.com</p>",d.appendChild(s),t.appendChild(d);const p=document.createElement("div");p.classList.add("contact");const u=new Image;u.style.height="100px",u.src=o,u.classList.add("contactImage"),p.innerHTML="<p>The Treasurekeeper</p><p>Phone: 234567890</p><p>E-mail: treasurekeeperoftherestaurant@mail.com</p>",p.appendChild(u),t.appendChild(p),e.appendChild(t),n()}const i=t.p+"ae67b2a27cb9a40f3543.png";function d(){l(),document.getElementById("menuMenu").style.textDecoration="underline";const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("plateContainer");const a=new Image;a.src=i,a.style.height="100px";const r=document.createElement("div");r.appendChild(a),r.classList.add("plate");const o=document.createElement("p");o.innerHTML="Empty Glass";const c=document.createElement("p");c.innerHTML="Price: 30$",r.appendChild(o),r.appendChild(c),t.appendChild(r);const d=new Image;d.src=i,d.style.height="100px";const s=document.createElement("div");s.appendChild(d),s.classList.add("plate");const p=document.createElement("p");p.innerHTML="Food plate <p>(with extra space)</p>",p.style.textAlign="center";const u=document.createElement("p");u.innerHTML="Price: 120$",s.appendChild(p),s.appendChild(u),t.appendChild(s);const m=new Image;m.src=i,m.style.height="100px";const h=document.createElement("div");h.appendChild(m),h.classList.add("plate");const f=document.createElement("p");f.innerHTML="Sauce";const g=document.createElement("p");g.innerHTML="Price: 80$",h.appendChild(f),h.appendChild(g),t.appendChild(h),e.appendChild(t),n()}const s=t.p+"73cd04e1ddef608db69f.jpg";function l(){const e=document.getElementById("content");document.getElementsByTagName("body"),e.innerHTML="",document.body.style.backgroundImage=`url(${s})`;const n=document.createElement("div");n.classList.add("menuContainer");const t=document.createElement("a");t.id="menuHome",t.href="#",t.innerHTML="Homepage",t.addEventListener("click",p),n.appendChild(t);const a=document.createElement("a");a.id="menuMenu",a.href="#",a.innerHTML="Menu",a.addEventListener("click",d),n.appendChild(a);const r=document.createElement("a");r.id="menuContact",r.href="#",r.innerHTML="Contact",r.addEventListener("click",c),n.appendChild(r),e.appendChild(n)}function p(){const t=document.getElementById("content");l(),document.getElementById("menuHome").style.textDecoration="underline";const a=document.createElement("h1");a.classList.add("title"),a.innerHTML="Restaurant Name",t.appendChild(a);const r=new Image,o=document.createElement("div");o.classList.add("imageContainer"),r.src=e,o.appendChild(r),t.appendChild(o);const c=document.createElement("p");c.innerHTML="Photo taken by ",c.classList.add("credit");const i=document.createElement("a");i.href="https://unsplash.com/@jaywennington",i.classList.add("link"),i.innerHTML="Jay Wennington",c.appendChild(i);const d=document.createElement("span");d.innerHTML=" on ",c.appendChild(d);const s=document.createElement("a");s.classList.add("link"),s.href="https://unsplash.com/",s.innerHTML="Unsplash",c.appendChild(s),t.appendChild(c);const p=document.createElement("div");p.classList.add("quoteContainer");const u=document.createElement("h3");u.innerHTML="Here's a quote from one of our many satisfied customers:",p.appendChild(u);const m=document.createElement("p");m.innerHTML='"<em>When I saw my plate I knew I was inside a gourmet restaurant,\n    after all, the plate could fit <strong>five</strong> times the food that was there!"<em>\n    <p></p><p> - Random Customer</p>',p.appendChild(m),t.appendChild(p),n()}var u=t(379),m=t.n(u),h=t(795),f=t.n(h),g=t(569),y=t.n(g),v=t(565),C=t.n(v),b=t(216),x=t.n(b),w=t(589),E=t.n(w),L=t(426),T={};T.styleTagTransform=E(),T.setAttributes=C(),T.insert=y().bind(null,"head"),T.domAPI=f(),T.insertStyleElement=x(),m()(L.Z,T),L.Z&&L.Z.locals&&L.Z.locals,p(),document.getElementById("content")})()})();