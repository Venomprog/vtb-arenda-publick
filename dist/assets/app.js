(()=>{var e,t={308:(e,t,r)=>{"use strict";var n=r(592),o=r(638);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}o(window).on("load",(function(){var e;(e=o("[data-slider-id]")).length&&e.each((function(){var e,t,r=o(this),a=r.data("slider-id"),s=r.data("slider-prev"),l=r.data("slider-next"),d=o('[data-slider-button="'.concat(s,'"]')),u=o('[data-slider-button="'.concat(l,'"]')),p=o("[data-slider-buttons]");if(p.length&&r.find(".swiper-slide").length<+p.data("slider-buttons")&&p.addClass("hidden"),r[0].hasAttribute("data-thumbs-slider")){var f=o('[data-thumbs-id="'.concat(a,'"]'));e=new n.Z(f[0],{direction:"vertical",slidesPerView:"auto",on:{init:function(e){e.el.querySelectorAll("[data-thumb]").forEach((function(e,r){e.onclick=function(){t.slideTo(r)}}))}}})}var v={slidesPerView:"auto",spaceBetween:12,speed:500,breakpoints:c({},1280,{spaceBetween:40})};switch(a){case 2:v=i(i({},v),{},{loop:!0});break;case 11:case"m11":v={pagination:{el:'[data-swiper-pagination="'.concat(a,'"]'),type:"bullets"},on:{slideChange:function(t){var r=t.realIndex,n=e.el.querySelectorAll("[data-thumb]");e.el.querySelector("[data-thumb].active").classList.remove("active"),n[r].classList.add("active"),e.slideTo(r)}}}}t=new n.Z(r[0],v),d.on("click",(function(){t.slidePrev()})),u.on("click",(function(){t.slideNext()}))}))}));r(490);var s=r(638);s((function(){s(".select__select").each((function(){var e=s(this),t=e.closest(".select-wrapper"),r=getComputedStyle(t[0]),n=s(this).data("select-placeholder");"static"===r.position&&t.css("position","relative"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:n,dropdownAutoWidth:!0}),e.on("select2:open",(function(e){t.css("z-index","100000");var r="scroll.select2";s(e.target).parents().off(r),s(window).off(r);var n=t.find(".select2-dropdown");n.hide();var o=setTimeout((function(){n.slideDown({duration:500}),clearTimeout(o)}),0)})),e.on("select2:closing",(function(r){r.preventDefault();var o=t.find(".select2-dropdown"),a=setTimeout((function(){t.css("z-index","");var r=t.find(".select2");r.addClass("closing"),r.removeClass("select2-container--open"),o.slideUp(500,(function(){var r=setTimeout((function(){e.select2("destroy"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:n,dropdownAutoWidth:!0}),e.removeClass("closing"),t.css("z-index",""),clearTimeout(r)}),300)})),clearTimeout(a)}),0)}))}))}));r(784),r(888);r(524).KR.bind('[data-fancybox="gallery"]',{})},784:()=>{var e;ymaps.ready((function(){e=new ymaps.Map("map",{center:[55.791,37.559],zoom:16},{searchControlProvider:"yandex#search"}),myPlacemark=new ymaps.Placemark(e.getCenter(),{},{iconLayout:"default#image",iconImageHref:"./assets/images/placemark.png",iconImageSize:[32,40],iconImageOffset:[-5,-38]}),e.geoObjects.add(myPlacemark)}))},888:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".main-hero__rect"),t=document.querySelector(".popup-img"),r=document.querySelector(".popup-img__close"),n=document.querySelector(".body");e.addEventListener("click",(function(){t.classList.add("active"),n.classList.add("overflow")})),r.addEventListener("click",(function(){t.classList.remove("active"),n.classList.remove("overflow")}))}))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,o,a]=e[d],c=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,c,s]=r,l=0;if(i.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var d=s(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[183,532],(()=>n(308)));o=n.O(o)})();