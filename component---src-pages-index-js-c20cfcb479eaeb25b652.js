(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{M4UQ:function(e){e.exports=JSON.parse('{"itens":[{"name":"item1","qty":"10","colors":["red","blue"],"id":1},{"name":"item2","qty":"10","colors":["green","purple"],"id":2},{"name":"item3","qty":"10","colors":["red","yellow"],"id":3},{"name":"item4","qty":"10","colors":["white","cyan"],"id":4},{"name":"item5","qty":"10","id":5}]}')},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("TSYQ")),c=n.n(l),o=(n("f3/d"),function(e){var t=e.name,n=e.qty,r=e.colors,l=void 0===r?[]:r;return a.a.createElement("tr",{className:l.join(" ")},a.a.createElement("td",null,t),a.a.createElement("td",null,l.join()),a.a.createElement("td",null,n))}),i=function(e){var t=e.name,n=e.toggleFilter;return a.a.createElement("button",{className:t,onClick:function(){return n(t)}},t)},u=(n("ZtJ1"),function(e){var t=e.items,n=t.reduce((function(e,t){return t.colors&&t.colors.forEach((function(t){e[t]=!1})),e}),{}),l=Object(r.useState)(n),u=l[0],s=l[1];function m(e){var t;s(Object.assign({},u,((t={})[e]=!u[e],t)))}return a.a.createElement("div",{className:"inventory"},a.a.createElement("h2",null,"Inventory"),a.a.createElement("div",{className:"filters"},Object.keys(u).map((function(e){return a.a.createElement(i,{key:e,name:e,toggleFilter:m})}))),a.a.createElement("table",{className:c()(u)},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Colors"),a.a.createElement("th",null,"Quantity"))),a.a.createElement("tbody",null,t.map((function(e){return a.a.createElement(o,Object.assign({key:e.id},e))})))))}),s=n("M4UQ");t.default=function(){return a.a.createElement(u,{items:s.itens})}},TSYQ:function(e,t,n){var r;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===l)for(var o in r)n.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=component---src-pages-index-js-c20cfcb479eaeb25b652.js.map