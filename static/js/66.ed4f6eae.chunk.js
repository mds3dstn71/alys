(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{124:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.default.createElement(a.default,null)};var n=l(r(0)),a=l(r(213));function l(e){return e&&e.__esModule?e:{default:e}}},213:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(214))&&n.__esModule?n:{default:n}},214:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var n=o(r(0)),a=r(33),l=r(36),_=o(r(34));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function u(e){var t=e.dark,r=e.color,o=i(e,["dark","color"]),u={fill:"none",stroke:(0,l.iconDark)(t,a.COLOR_WHITE,a.colors[r]),strokeLinecap:"round",strokeMiterlimit:10};return n.default.createElement(_.default,Object.assign({viewBox:"0 0 19 19"},o),n.default.createElement("path",Object.assign({},u,{id:"path",d:"M16.5,2.5l-1,15a.945.945,0,0,1-1,1H4.5a.945.945,0,0,1-1-1l-1-15"})),n.default.createElement("line",Object.assign({id:"line"},u,{x2:"18",transform:"translate(0.5 2.5)"})),n.default.createElement("line",Object.assign({},u,{id:"line-2","data-name":"line",x2:"10",transform:"translate(4.5 0.5)"})),n.default.createElement("line",Object.assign({},u,{id:"line-3","data-name":"line",y2:"10",transform:"translate(9.5 5.5)"})),n.default.createElement("line",Object.assign({},u,{id:"line-4","data-name":"line",y2:"10",transform:"translate(6.5 5.5)"})),n.default.createElement("line",Object.assign({},u,{id:"line-5","data-name":"line",y2:"10",transform:"translate(12.5 5.5)"})))}u.defaultProps={dark:!1,color:"dark"}},33:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.fontSizes=t.colors=t.TYPE_FONT_SIZE_PARAGRAPH=t.TYPE_FONT_SIZE_HEADING_6=t.TYPE_FONT_SIZE_HEADING_5=t.TYPE_FONT_SIZE_HEADING_4=t.TYPE_FONT_SIZE_HEADING_3=t.TYPE_FONT_SIZE_HEADING_2=t.TYPE_FONT_SIZE_HEADING_1=t.GRADIENT_PRIMARY=t.COLOR_GRAY=t.COLOR_WHITE_ALPHA60=t.COLOR_WHITE=t.COLOR_WHITE_BLUE=t.COLOR_GRAY_BLUE=t.COLOR_DARK=t.COLOR_SECONDARY=t.COLOR_WHITE_ALPHA30=t.COLOR_ERROR=t.COLOR_PRIMARY_LIGHT=t.COLOR_PRIMARY=void 0;t.COLOR_PRIMARY="#5887F9";t.COLOR_PRIMARY_LIGHT="#60C3FF";t.COLOR_ERROR="#FC5F6B";t.COLOR_WHITE_ALPHA30="rgba(255, 255, 255, 0.3)";t.COLOR_SECONDARY="rgba(255, 255, 255, 0.3)";t.COLOR_DARK="#4C5264";t.COLOR_GRAY_BLUE="#BCC5D3";t.COLOR_WHITE_BLUE="#E2E8ED";t.COLOR_WHITE="#ffffff";t.COLOR_WHITE_ALPHA60="rgba(255, 255, 255, 0.6)";t.COLOR_GRAY="rgba(255, 255, 255, 0.6)";t.GRADIENT_PRIMARY=["#5574f7","#60C3FF"];t.TYPE_FONT_SIZE_HEADING_1=36;t.TYPE_FONT_SIZE_HEADING_2=24;t.TYPE_FONT_SIZE_HEADING_3=20;t.TYPE_FONT_SIZE_HEADING_4=16;t.TYPE_FONT_SIZE_HEADING_5=14;t.TYPE_FONT_SIZE_HEADING_6=12;t.TYPE_FONT_SIZE_PARAGRAPH=14;var n={primary:"#5887F9",primaryLight:"#60C3FF",error:"#FC5F6B",secondary:"rgba(255, 255, 255, 0.3)",dark:"#4C5264",grayBlue:"#BCC5D3",whiteBlue:"#E2E8ED",white:"#ffffff",gray:"rgba(255, 255, 255, 0.6)"};t.colors=n;var a={h1:36,h2:24,h3:20,h4:16,h5:14,h6:12,p:14};t.fontSizes=a;var l={colors:n,type:{fontSizes:a}};t.default=l},34:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(35))&&n.__esModule?n:{default:n}},35:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n,a=(n=r(0))&&n.__esModule?n:{default:n},l=r(37);function _(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function o(e){var t=e.fontSize,r=e.viewBox,n=e.children,o=_(e,["fontSize","viewBox","children"]);return a.default.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",color:"inherit",viewBox:r,focusable:!1,width:(0,l.styleLengths)(t),height:(0,l.styleLengths)(t)},o),n)}o.defaultProps={fontSize:24,viewBox:"0 0 24 24"}},36:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iconDark=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.COLOR_WHITE,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.COLOR_DARK;return e?t:r};var n=r(33)}}]);
//# sourceMappingURL=66.ed4f6eae.chunk.js.map