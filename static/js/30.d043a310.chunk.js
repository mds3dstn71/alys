(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var n,a=(n=r(0))&&n.__esModule?n:{default:n},_=r(7);function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},_=Object.keys(e);for(n=0;n<_.length;n++)r=_[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);for(n=0;n<_.length;n++)r=_[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function u(e){var t=e.fontSize,r=e.viewBox,n=e.children,u=l(e,["fontSize","viewBox","children"]);return a.default.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",color:"inherit",viewBox:r,focusable:!1,width:(0,_.styleLengths)(t),height:(0,_.styleLengths)(t)},u),n)}u.defaultProps={fontSize:24,viewBox:"0 0 24 24"}},101:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TYPE_FONT_SIZE_PARAGRAPH=t.TYPE_FONT_SIZE_HEADING_6=t.TYPE_FONT_SIZE_HEADING_5=t.TYPE_FONT_SIZE_HEADING_4=t.TYPE_FONT_SIZE_HEADING_3=t.TYPE_FONT_SIZE_HEADING_2=t.TYPE_FONT_SIZE_HEADING_1=t.COLOR_GRAY=t.COLOR_WHITE_ALPHA60=t.COLOR_WHITE=t.COLOR_WHITE_BLUE=t.COLOR_GRAY_BLUE=t.COLOR_DARK=t.COLOR_SECONDARY=t.COLOR_WHITE_ALPHA30=t.COLOR_ERROR=t.COLOR_PRIMARY_LIGHT=t.COLOR_PRIMARY=void 0;t.COLOR_PRIMARY="#5887F9";t.COLOR_PRIMARY_LIGHT="#60C3FF";t.COLOR_ERROR="#FC5F6B";t.COLOR_WHITE_ALPHA30="rgba(255, 255, 255, 0.3)";t.COLOR_SECONDARY="rgba(255, 255, 255, 0.3)";t.COLOR_DARK="#4C5264";t.COLOR_GRAY_BLUE="#BCC5D3";t.COLOR_WHITE_BLUE="#E2E8ED";t.COLOR_WHITE="#ffffff";t.COLOR_WHITE_ALPHA60="rgba(255, 255, 255, 0.6)";t.COLOR_GRAY="rgba(255, 255, 255, 0.6)";t.TYPE_FONT_SIZE_HEADING_1=36;t.TYPE_FONT_SIZE_HEADING_2=24;t.TYPE_FONT_SIZE_HEADING_3=20;t.TYPE_FONT_SIZE_HEADING_4=16;t.TYPE_FONT_SIZE_HEADING_5=14;t.TYPE_FONT_SIZE_HEADING_6=12;t.TYPE_FONT_SIZE_PARAGRAPH=14;var n={colors:{primary:"#5887F9",primaryLight:"#60C3FF",error:"#FC5F6B",secondary:"rgba(255, 255, 255, 0.3)",dark:"#4C5264",grayBlue:"#BCC5D3",whiteBlue:"#E2E8ED",white:"#ffffff",gray:"rgba(255, 255, 255, 0.6)"},type:{fontSizes:{h1:36,h2:24,h3:20,h4:16,h5:14,h6:12,p:14}}};t.default=n},102:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iconDark=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.COLOR_WHITE,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.COLOR_DARK;return e?t:r};var n=r(101)},167:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(168))&&n.__esModule?n:{default:n}},168:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n=l(r(0)),a=r(102),_=l(r(99));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},_=Object.keys(e);for(n=0;n<_.length;n++)r=_[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);for(n=0;n<_.length;n++)r=_[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function o(e){var t=e.dark,r=u(e,["dark"]),l={fill:"none",stroke:(0,a.iconDark)(t),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10};return n.default.createElement(_.default,Object.assign({viewBox:"0 0 11.8 19.9"},r),n.default.createElement("g",{id:"microphone-icon",transform:"translate(0 0)"},n.default.createElement("path",Object.assign({},l,{id:"path",d:"M5.9,13.3h0A3.543,3.543,0,0,1,2.4,9.8V4A3.543,3.543,0,0,1,5.9.5h0A3.543,3.543,0,0,1,9.4,4V9.8A3.418,3.418,0,0,1,5.9,13.3Z"})),n.default.createElement("path",Object.assign({},l,{id:"path-2","data-name":"path",d:"M.5,7.8v2a5.378,5.378,0,0,0,5.4,5.4h0a5.378,5.378,0,0,0,5.4-5.4v-2"})),n.default.createElement("line",Object.assign({},l,{id:"line",y2:"4",transform:"translate(5.9 15.4)"})),n.default.createElement("line",Object.assign({},l,{id:"line-2","data-name":"line",x1:"6",transform:"translate(2.9 19.4)"}))))}o.defaultProps={dark:!1}},45:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.default.createElement(a.default,null)};var n=_(r(0)),a=_(r(167));function _(e){return e&&e.__esModule?e:{default:e}}},99:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(100))&&n.__esModule?n:{default:n}}}]);
//# sourceMappingURL=30.d043a310.chunk.js.map