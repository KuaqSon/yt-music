(this["webpackJsonpyt-music"]=this["webpackJsonpyt-music"]||[]).push([[0],{21:function(e,t,a){},24:function(e,t,a){e.exports=a(41)},29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),i=(a(29),a(6)),o=a(1),s=(a(30),a(4)),u=a.n(s),m=a(13);var f=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://"+t+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https%3A%2F%2Fwww.youtube.com%2Fget_video_info%3Fvideo_id%3D"+t).then((function(e){var t={};return e.ok?e.text().then((function(e){var a=e.split("&").reduce((function(e,t){var a=t.split("=").map((function(e){return decodeURIComponent(e.replace("+"," "))}));return e[a[0]]=a[1],e}),{}),n=JSON.parse(a.player_response);console.log("\nLog ->\n: parseData",a);var r=[];return n&&n.streamingData&&n.streamingData.adaptiveFormats&&(r=n.streamingData.adaptiveFormats),r.forEach((function(e,a){var n=!1;switch(1*e.itag){case 139:n="48kbps";break;case 140:n="128kbps";break;case 141:n="256kbps"}n&&(t[n]=e.url)})),t["128kbps"]})):null}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://noembed.com/embed?format=json&url=https://www.youtube.com/watch?v=".concat(t),e.next=3,fetch(a).then((function(e){return e.text().then((function(e){return JSON.parse(e)}))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=a(7);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h=function(){var e=localStorage.getItem("playlist");return JSON.parse(e)},b=function(e){var t=h();t?localStorage.setItem("playlist",JSON.stringify([e].concat(Object(p.a)(t.filter((function(t){return t.src!==e.src})).map((function(e){return v({},e,{playing:!1})})))))):localStorage.setItem("playlist",JSON.stringify([e]))},w=function(e){var t=h();t&&localStorage.setItem("playlist",JSON.stringify(t.filter((function(t){return t.id!==e.id}))))},y=function(){var e=h();return e?e.find((function(e){return!0===e.playing})):null},x=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=h();if(a){var n=a.find((function(t){return t.id===e}));if(n){var r=a.filter((function(t){return t.id!==e})).map((function(e){return v({},e,{playing:!1})}));localStorage.setItem("playlist",JSON.stringify([v({},n,{playing:t})].concat(Object(p.a)(r))))}}},E=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=h();if(a){var n=a.find((function(t){return t.src===e}));if(n){var r=a.filter((function(t){return t.src!==e})).map((function(e){return v({},e,{playing:!1})}));localStorage.setItem("playlist",JSON.stringify([v({},n,{playing:t})].concat(Object(p.a)(r))))}}},O=(a(32),function(){return r.a.createElement("div",{className:"loading_box"},r.a.createElement("div",{className:"loading_wrap"},r.a.createElement("div",{className:"loading"},r.a.createElement("div",{className:"bounceball"}),r.a.createElement("div",{className:"loading_text"},"LOADING"))))});function k(e){var t=e.addSongCallback,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],i=c[1],s=Object(n.useState)(!1),u=Object(o.a)(s,2),m=u[0],p=u[1],g=Object(n.useState)(""),v=Object(o.a)(g,2),h=v[0],w=v[1],y=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(l)if(l.indexOf("youtube")<0&&l.indexOf("youtu.be")<0)w("Not a youtube link!");else{var a=l.indexOf("youtu.be")>-1&&l.indexOf("youtube")<0,n=l.split(a?".be/":"v=")[1]||"";if(n){var r=n.indexOf("&");-1!==r&&(n=n.substring(0,r)),w(""),p(!0);var c=[new Promise((function(e){return e(f(n))})),new Promise((function(e){return e(d(n))}))];Promise.all(c).then((function(a){p(!1);var n=a[1];return t&&!e&&t({src:a[0],info:n}),b({id:(new Date).getTime(),src:a[0],thumbnail_url:n.thumbnail_url,author_name:n.author_name,title:n.title,playing:!0}),a})).catch((function(e){w("Something went wrong please try again later."),p(!1)}))}else w("Invalid link!")}};return r.a.createElement("div",{className:"card acrylic"},m&&r.a.createElement(O,null),r.a.createElement("label",null,"Input a youtube link:"),r.a.createElement("div",{className:"d-flex"},r.a.createElement("input",{type:"text",onChange:function(e){return i(e.target.value)},value:l,className:"text_input w-100",placeholder:"Eg: https://www.youtube.com/watch?v=aaaaaaaa"})),h&&r.a.createElement("div",{className:"error_text"},h),r.a.createElement("button",{onClick:function(){return y()},className:"btn mt-3"},"Play Now"),r.a.createElement("button",{onClick:function(){return y(!0)},className:"btn mt-3"},"Add To Queue"))}var N=a(23),j=a.n(N),S=(a(21),Object(n.forwardRef)((function(e){var t=e.src,a=e.songInfo,c=e.playerRef,l=e.handleNextSong,i=e.handlePreSong,s=Object(n.useState)({}),u=Object(o.a)(s,2),m=u[0],f=u[1],d=Object(n.useState)(0),p=Object(o.a)(d,2),g=p[0],v=p[1],h=Object(n.useState)(!0),b=Object(o.a)(h,2),w=b[0],y=b[1],x=Object(n.useState)(!1),O=Object(o.a)(x,2),k=O[0],N=O[1],S=function(){E(t),y(!0)},P=function(){E(t,!1),y(!1)},M=function(){l&&l()};return Object(n.useImperativeHandle)(c,(function(){return{forcePause:function(){y(!1)}}})),r.a.createElement("div",{className:"card acrylic"},r.a.createElement("div",null,a.thumbnail_url&&r.a.createElement("div",{className:"cover-image",style:{backgroundImage:"url(".concat(a.thumbnail_url,")")}}),r.a.createElement("div",{className:"song-info"},r.a.createElement("div",{className:"song-title"},a.title),r.a.createElement("div",{className:"song-author"},a.author_name)),r.a.createElement("div",{className:"range-slider"},r.a.createElement("input",{className:"range-slider__range",style:function(){var e=100*g;return{background:"linear-gradient(90deg, #1abc9c ".concat(e,"%, rgba(255, 255, 255, 0.216) ").concat(e,"%)")}}(),type:"range",min:0,max:1,step:"any",value:g,onChange:function(e){v(parseFloat(e.target.value))},onMouseUp:function(e){m.seekTo(parseFloat(e.target.value))},onPlay:S,onPause:P})),r.a.createElement("div",{className:"player-actions"},r.a.createElement("div",{className:"btn-player",onClick:function(){i&&i()}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"42px",height:"42px",style:{msTransform:"rotate(360deg)",WebkitTransform:"rotate(360deg)",transform:"rotate(360deg)"},preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M18.464 2.114a.998.998 0 0 0-1.033.063l-13 9a1.003 1.003 0 0 0 0 1.645l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-.536-.886zM17 19.091L6.757 12L17 4.909v14.182z",fill:"#1B2021"}))),!w&&r.a.createElement("div",{className:"btn-player",onClick:function(){return S()}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"42px",height:"42px",style:{msTransform:"rotate(360deg)",WebkitTransform:"rotate(360deg)",transform:"rotate(360deg)"},preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},r.a.createElement("path",{d:"M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248s248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256z",fill:"#1B2021"}))),w&&r.a.createElement("div",{className:"btn-player",onClick:function(){return P()}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"42px",height:"42px",style:{msTransform:"rotate(360deg)",WebkitTransform:"rotate(360deg)",transform:"rotate(360deg)"},preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},r.a.createElement("path",{d:"M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z",fill:"#1B2021"}))),r.a.createElement("div",{className:"btn-player",onClick:function(){return M()}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"42px",height:"42px",style:{msTransform:"rotate(360deg)",WebkitTransform:"rotate(360deg)",transform:"rotate(360deg)"},preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909L17.243 12L7 19.091V4.909z",fill:"#1B2021"}))),k&&r.a.createElement("div",{className:"btn-player",onClick:function(){return N(!1)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"24px",height:"24px",style:{msTransform:"rotate(360deg)",WebkitTransform:"rotate(360deg)",transform:"rotate(360deg)"},preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M7 7h10v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79a.5.5 0 0 0-.85.36V5H6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7zm10 10H7v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.36V19h11c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1v3zm-4-2.75V9.81c0-.45-.36-.81-.81-.81a.74.74 0 0 0-.36.09l-1.49.74a.61.61 0 0 0-.34.55c0 .34.28.62.62.62h.88v3.25c0 .41.34.75.75.75s.75-.34.75-.75z",fill:"#1B2021"}))),!k&&r.a.createElement("div",{className:"btn-player",onClick:function(){return N(!0)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"24px",height:"24px",style:{msTransform:"rotate(360deg)",WebkitTransform:"rotate(360deg)",transform:"rotate(360deg)"},preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M7 7h10v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79a.5.5 0 0 0-.85.36V5H6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7zm10 10H7v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.36V19h11c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1v3z",fill:"#1B2021"}))))),r.a.createElement("div",{style:{display:"none"}},r.a.createElement(j.a,{ref:function(e){f(e)},url:t,onProgress:function(e){v(e.played)},playing:w,loop:k,onEnded:M})))})));function P(e){var t=e.playlist,a=e.handlePlaySongFromPlaylist,n=e.handlePauseSongFromPlaylist,c=e.loadPlayList;return r.a.createElement("div",{className:"card acrylic"},r.a.createElement("div",{className:"playlist"},(!t||0===t.length)&&r.a.createElement("div",null,"No songs found."),t&&t.map((function(e,t){return r.a.createElement("div",{className:"pl-item",key:t},r.a.createElement("div",{className:"pl-action"},!e.playing&&r.a.createElement("div",{className:"btn-player",onClick:function(){return t=e,void(a&&a(t));var t}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"24px",height:"24px",style:{msTransform:"rotate(360deg)",WebkitTransform:"rotate(360deg)",transform:"rotate(360deg)"},preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},r.a.createElement("path",{d:"M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248s248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256z",fill:"#1B2021"}))),e.playing&&r.a.createElement("div",{className:"btn-player",onClick:function(){return t=e,void(n&&n(t));var t}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"24px",height:"24px",style:{msTransform:"rotate(360deg)",WebkitTransform:"rotate(360deg)",transform:"rotate(360deg)"},preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},r.a.createElement("path",{d:"M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200s-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z",fill:"#1B2021"})))),r.a.createElement("div",{className:"pl-title"},r.a.createElement("span",{className:"pl-title_safe"},e.title)),r.a.createElement("div",{className:"btn-player",onClick:function(){return w(e),void(c&&c())}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"24px",height:"24px",style:{msTransform:"rotate(360deg)",WebkitTransform:"rotate(360deg)",transform:"rotate(360deg)"},preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z",fill:"#f44336"}))))}))))}function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var z=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),i=Object(o.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)({}),f=Object(o.a)(m,2),d=f[0],p=f[1],g=Object(n.useState)([]),v=Object(o.a)(g,2),b=v[0],w=v[1],E=Object(n.useRef)();Object(n.useEffect)((function(){var e=y();e&&(c(e.src),p(_({},e)),u(1));var t=h();w(t)}),[]);var O=function(e){return e===s?"tab_item active":"tab_item"},N=function(){u(2);var e=h();w(e)},j=function(e){if(b&&!(b.length<=1)){var t=b.findIndex((function(e){return e.src===d.src}));if(!(t<0)){var a=t;a=e&&t===b.length-1?0:e||0!==t?e?t+1:t-1:b.length-1;var n=b[a];x(n.id),c(n.src),p(_({},n))}}};return r.a.createElement("div",{className:"App"},d.thumbnail_url&&r.a.createElement("div",{className:"app-background",style:{backgroundImage:"url(".concat(d.thumbnail_url,")")}}),r.a.createElement("div",{className:"wrapper"},r.a.createElement("nav",{className:"tabs"},r.a.createElement("div",{className:"selector",style:{width:"112px",left:"".concat(112*s,"px")}}),r.a.createElement("a",{href:"#",className:O(0),onClick:function(){return u(0)}},"New"),r.a.createElement("a",{href:"#",className:O(1),onClick:function(){return u(1)}},"Player"),r.a.createElement("a",{href:"#",className:O(2),onClick:function(){return N()}},"PlayList"))),r.a.createElement("div",{className:"tabs_cont"},r.a.createElement("div",{className:0===s?"tabs_item":"tabs_item d-none"},r.a.createElement(k,{addSongCallback:function(e){return function(e){console.log("\nLog ->\n: App -> data",e),c(e.src),p(e.info),u(1)}(e)}})),r.a.createElement("div",{className:1===s?"tabs_item":"tabs_item d-none"},r.a.createElement(S,{handleNextSong:function(){return j(!0)},handlePreSong:function(){return j(!1)},playerRef:E,src:a,songInfo:d})),r.a.createElement("div",{className:2===s?"tabs_item":"tabs_item d-none"},r.a.createElement(P,{handlePlaySongFromPlaylist:function(e){x(e.id),c(e.src),p(_({},e)),N()},handlePauseSongFromPlaylist:function(e){x(e.id,!1),N(),E.current.forcePause()},playlist:b,loadPlayList:function(){return function(){var e=h();w(e),e&&0!==e.length||(c(null),p({}))}()}}))),r.a.createElement("footer",null,"Made by Quang Son with \u2764"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.84ad1310.chunk.js.map