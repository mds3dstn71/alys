(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{113:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.default.createElement(a.default,null)};var n=_(r(0)),a=_(r(53));function _(e){return e&&e.__esModule?e:{default:e}}},33:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.fontSizes=t.colors=t.TYPE_FONT_SIZE_PARAGRAPH=t.TYPE_FONT_SIZE_HEADING_6=t.TYPE_FONT_SIZE_HEADING_5=t.TYPE_FONT_SIZE_HEADING_4=t.TYPE_FONT_SIZE_HEADING_3=t.TYPE_FONT_SIZE_HEADING_2=t.TYPE_FONT_SIZE_HEADING_1=t.GRADIENT_PRIMARY=t.COLOR_GRAY=t.COLOR_WHITE_ALPHA60=t.COLOR_WHITE=t.COLOR_WHITE_BLUE=t.COLOR_GRAY_BLUE=t.COLOR_DARK=t.COLOR_SECONDARY=t.COLOR_WHITE_ALPHA30=t.COLOR_ERROR=t.COLOR_PRIMARY_LIGHT=t.COLOR_PRIMARY=void 0;t.COLOR_PRIMARY="#5887F9";t.COLOR_PRIMARY_LIGHT="#60C3FF";t.COLOR_ERROR="#FC5F6B";t.COLOR_WHITE_ALPHA30="rgba(255, 255, 255, 0.3)";t.COLOR_SECONDARY="rgba(255, 255, 255, 0.3)";t.COLOR_DARK="#4C5264";t.COLOR_GRAY_BLUE="#BCC5D3";t.COLOR_WHITE_BLUE="#E2E8ED";t.COLOR_WHITE="#ffffff";t.COLOR_WHITE_ALPHA60="rgba(255, 255, 255, 0.6)";t.COLOR_GRAY="rgba(255, 255, 255, 0.6)";t.GRADIENT_PRIMARY=["#5574f7","#60C3FF"];t.TYPE_FONT_SIZE_HEADING_1=36;t.TYPE_FONT_SIZE_HEADING_2=24;t.TYPE_FONT_SIZE_HEADING_3=20;t.TYPE_FONT_SIZE_HEADING_4=16;t.TYPE_FONT_SIZE_HEADING_5=14;t.TYPE_FONT_SIZE_HEADING_6=12;t.TYPE_FONT_SIZE_PARAGRAPH=14;var n={primary:"#5887F9",primaryLight:"#60C3FF",error:"#FC5F6B",secondary:"rgba(255, 255, 255, 0.3)",dark:"#4C5264",grayBlue:"#BCC5D3",whiteBlue:"#E2E8ED",white:"#ffffff",gray:"rgba(255, 255, 255, 0.6)"};t.colors=n;var a={h1:36,h2:24,h3:20,h4:16,h5:14,h6:12,p:14};t.fontSizes=a;var _={colors:n,type:{fontSizes:a}};t.default=_},34:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(35))&&n.__esModule?n:{default:n}},35:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n,a=(n=r(0))&&n.__esModule?n:{default:n},_=r(37);function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},_=Object.keys(e);for(n=0;n<_.length;n++)r=_[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);for(n=0;n<_.length;n++)r=_[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function l(e){var t=e.fontSize,r=e.viewBox,n=e.children,l=o(e,["fontSize","viewBox","children"]);return a.default.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",color:"inherit",viewBox:r,focusable:!1,width:(0,_.styleLengths)(t),height:(0,_.styleLengths)(t)},l),n)}l.defaultProps={fontSize:24,viewBox:"0 0 24 24"}},36:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iconDark=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.COLOR_WHITE,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.COLOR_DARK;return e?t:r};var n=r(33)},53:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(54))&&n.__esModule?n:{default:n}},54:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=O;var n=l(r(0)),a=r(33),_=r(36),o=l(r(34));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},_=Object.keys(e);for(n=0;n<_.length;n++)r=_[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);for(n=0;n<_.length;n++)r=_[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function O(e){var t=e.dark,r=e.color,l=u(e,["dark","color"]),O={fill:"none",stroke:(0,_.iconDark)(t,a.COLOR_WHITE,a.colors[r]),strokeLinecap:"round",strokeMiterlimit:10};return n.default.createElement(o.default,Object.assign({viewBox:"0 0 19.25 19.306"},l),n.default.createElement("g",{id:"register-icon",transform:"translate(0 0.105)"},n.default.createElement("path",Object.assign({},O,{id:"path",strokeLinejoin:"round",d:"M4.3,17.7l-3.8,1,1-3.9L15.8.6a.483.483,0,0,1,.7,0l2.1,2.1a.483.483,0,0,1,0,.7Z"})),n.default.createElement("line",Object.assign({},O,{id:"line",x2:"2.8",y2:"2.8",transform:"translate(14.7 1.7)"})),n.default.createElement("path",Object.assign({},O,{id:"path-2","data-name":"path",d:"M1.8,9.4V1.9H9.3"})),n.default.createElement("path",Object.assign({},O,{id:"path-3","data-name":"path",d:"M16.8,10.4v7.5H9.3"}))))}O.defaultProps={dark:!1,color:"dark"}}}]);
//# sourceMappingURL=54.82796911.chunk.js.map