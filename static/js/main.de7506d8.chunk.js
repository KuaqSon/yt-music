(this["webpackJsonpyt-music"]=this["webpackJsonpyt-music"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=(a(11),a(1)),u=a(2),s=a.n(u),l=a(3);var m=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://"+t+"-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https%3A%2F%2Fwww.youtube.com%2Fget_video_info%3Fvideo_id%3D"+t).then((function(e){var t={};return e.ok?e.text().then((function(e){var a=e.split("&").reduce((function(e,t){var a=t.split("=").map((function(e){return decodeURIComponent(e.replace("+"," "))}));return e[a[0]]=a[1],e}),{}),n=JSON.parse(a.player_response),r=[];return n&&n.streamingData&&n.streamingData.adaptiveFormats&&(r=n.streamingData.adaptiveFormats),r.forEach((function(e,a){var n=!1;switch(1*e.itag){case 139:n="48kbps";break;case 140:n="128kbps";break;case 141:n="256kbps"}n&&(t[n]=e.url)})),t["128kbps"]})):null}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://noembed.com/embed?format=json&url=https://www.youtube.com/watch?v=".concat(t),e.next=3,fetch(a).then((function(e){return e.text().then((function(e){return JSON.parse(e)}))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=(a(13),a(14),function(){return r.a.createElement("div",{className:"loading_box"},r.a.createElement("div",{className:"loading_wrap"},r.a.createElement("div",{className:"loading"},r.a.createElement("div",{className:"bounceball"}),r.a.createElement("div",{className:"loading_text"},"LOADING"))))});function d(e){var t=e.addSongCallback,a=Object(n.useState)(""),c=Object(i.a)(a,2),o=c[0],u=c[1],s=Object(n.useState)(!1),l=Object(i.a)(s,2),d=l[0],b=l[1],v=Object(n.useState)(""),h=Object(i.a)(v,2),w=h[0],g=h[1];return r.a.createElement("div",{className:"card acrylic"},d&&r.a.createElement(p,null),r.a.createElement("label",null,"Input a youtube link:"),r.a.createElement("div",{className:"d-flex"},r.a.createElement("input",{type:"text",onChange:function(e){return u(e.target.value)},value:o,className:"text_input w-100",placeholder:"Eg: https://www.youtube.com/watch?v=aaaaaaaa"})),w&&r.a.createElement("div",{className:"error_text"},w),r.a.createElement("button",{onClick:function(){return function(){if(o)if(o.indexOf("youtube")<0||o.indexOf("youtu.be")<0)g("Not a youtube link!");else{var e=o.indexOf("youtu.be")>-1,a=o.split(e?".be/":"v=")[1]||"";if(a){var n=a.indexOf("&");-1!==n&&(a=a.substring(0,n)),g(""),b(!0);var r=[new Promise((function(e){return e(m(a))})),new Promise((function(e){return e(f(a))}))];Promise.all(r).then((function(e){return b(!1),t&&t({src:e[0],info:e[1]}),e})).catch((function(e){g("Something went wrong please try again later."),b(!1)}))}else g("Invalid link!")}}()},className:"btn mt-3"},"Play Now"))}var b=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),u=Object(i.a)(o,2),s=u[0],l=u[1],m=function(e){return e===s?"tab_item active":"tab_item"};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("nav",{className:"tabs"},r.a.createElement("div",{className:"selector",style:{width:"112px",left:"".concat(112*s,"px")}}),r.a.createElement("a",{href:"#",className:m(0),onClick:function(){return l(0)}},"New"),r.a.createElement("a",{href:"#",className:m(1),onClick:function(){return l(1)}},"Player"),r.a.createElement("a",{href:"#",className:m(2),onClick:function(){return l(2)}},"PlayList"))),0===s&&r.a.createElement(d,{addSongCallback:function(e){return function(e){c(e.src),l(1)}(e)}}),1===s&&r.a.createElement("div",null,r.a.createElement("audio",{id:"youtube",autoPlay:!0,controls:!0,loop:!0,src:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.de7506d8.chunk.js.map