(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{175:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _.default}});var n,_=(n=r(176))&&n.__esModule?n:{default:n}},176:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=O;var n=u(r(0)),_=r(33),o=r(36),a=u(r(34));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(null==e)return{};var r,n,_=function(e,t){if(null==e)return{};var r,n,_={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(_[r]=e[r]);return _}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(_[r]=e[r])}return _}function O(e){var t=e.dark,r=e.color,u=l(e,["dark","color"]),O={fill:"none",stroke:(0,o.iconDark)(t,_.COLOR_WHITE,_.colors[r]),strokeMiterlimit:10};return n.default.createElement(a.default,Object.assign({viewBox:"0 0 21.552 18.875"},u),n.default.createElement("g",{id:"like-icon",transform:"translate(0.022 0)"},n.default.createElement("path",Object.assign({},O,{id:"path",strokeLinejoin:"round",d:"M10.8,18.3h0C25.5,11.4,20,3.1,20,3.1A5.381,5.381,0,0,0,15.4.5a5.553,5.553,0,0,0-4.7,2.6A5.255,5.255,0,0,0,6.1.5,5.172,5.172,0,0,0,1.5,3.1S-4,11.4,10.8,18.3C10.7,18.4,10.8,18.4,10.8,18.3Z"})),n.default.createElement("path",Object.assign({},O,{id:"path-2","data-name":"path",strokeLinecap:"round",d:"M15.4,2.6a3.159,3.159,0,0,1,3.2,3.2"}))))}O.defaultProps={dark:!1,color:"dark"}},33:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.fontSizes=t.colors=t.TYPE_FONT_SIZE_PARAGRAPH=t.TYPE_FONT_SIZE_HEADING_6=t.TYPE_FONT_SIZE_HEADING_5=t.TYPE_FONT_SIZE_HEADING_4=t.TYPE_FONT_SIZE_HEADING_3=t.TYPE_FONT_SIZE_HEADING_2=t.TYPE_FONT_SIZE_HEADING_1=t.GRADIENT_PRIMARY=t.COLOR_GRAY=t.COLOR_WHITE_ALPHA60=t.COLOR_WHITE=t.COLOR_WHITE_BLUE=t.COLOR_GRAY_BLUE=t.COLOR_DARK=t.COLOR_SECONDARY=t.COLOR_WHITE_ALPHA30=t.COLOR_ERROR=t.COLOR_PRIMARY_LIGHT=t.COLOR_PRIMARY=void 0;t.COLOR_PRIMARY="#5887F9";t.COLOR_PRIMARY_LIGHT="#60C3FF";t.COLOR_ERROR="#FC5F6B";t.COLOR_WHITE_ALPHA30="rgba(255, 255, 255, 0.3)";t.COLOR_SECONDARY="rgba(255, 255, 255, 0.3)";t.COLOR_DARK="#4C5264";t.COLOR_GRAY_BLUE="#BCC5D3";t.COLOR_WHITE_BLUE="#E2E8ED";t.COLOR_WHITE="#ffffff";t.COLOR_WHITE_ALPHA60="rgba(255, 255, 255, 0.6)";t.COLOR_GRAY="rgba(255, 255, 255, 0.6)";t.GRADIENT_PRIMARY=["#5574f7","#60C3FF"];t.TYPE_FONT_SIZE_HEADING_1=36;t.TYPE_FONT_SIZE_HEADING_2=24;t.TYPE_FONT_SIZE_HEADING_3=20;t.TYPE_FONT_SIZE_HEADING_4=16;t.TYPE_FONT_SIZE_HEADING_5=14;t.TYPE_FONT_SIZE_HEADING_6=12;t.TYPE_FONT_SIZE_PARAGRAPH=14;var n={primary:"#5887F9",primaryLight:"#60C3FF",error:"#FC5F6B",secondary:"rgba(255, 255, 255, 0.3)",dark:"#4C5264",grayBlue:"#BCC5D3",whiteBlue:"#E2E8ED",white:"#ffffff",gray:"rgba(255, 255, 255, 0.6)"};t.colors=n;var _={h1:36,h2:24,h3:20,h4:16,h5:14,h6:12,p:14};t.fontSizes=_;var o={colors:n,type:{fontSizes:_}};t.default=o},34:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _.default}});var n,_=(n=r(35))&&n.__esModule?n:{default:n}},35:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var n,_=(n=r(0))&&n.__esModule?n:{default:n},o=r(37);function a(e,t){if(null==e)return{};var r,n,_=function(e,t){if(null==e)return{};var r,n,_={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(_[r]=e[r]);return _}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(_[r]=e[r])}return _}function u(e){var t=e.fontSize,r=e.viewBox,n=e.children,u=a(e,["fontSize","viewBox","children"]);return _.default.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",color:"inherit",viewBox:r,focusable:!1,width:(0,o.styleLengths)(t),height:(0,o.styleLengths)(t)},u),n)}u.defaultProps={fontSize:24,viewBox:"0 0 24 24"}},36:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iconDark=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.COLOR_WHITE,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.COLOR_DARK;return e?t:r};var n=r(33)},93:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.default.createElement(_.default,null)};var n=o(r(0)),_=o(r(175));function o(e){return e&&e.__esModule?e:{default:e}}}}]);
//# sourceMappingURL=34.550721c7.chunk.js.map