(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{107:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.fontSizes=t.colors=t.TYPE_FONT_SIZE_PARAGRAPH=t.TYPE_FONT_SIZE_HEADING_6=t.TYPE_FONT_SIZE_HEADING_5=t.TYPE_FONT_SIZE_HEADING_4=t.TYPE_FONT_SIZE_HEADING_3=t.TYPE_FONT_SIZE_HEADING_2=t.TYPE_FONT_SIZE_HEADING_1=t.GRADIENT_PRIMARY=t.COLOR_GRAY=t.COLOR_WHITE_ALPHA60=t.COLOR_WHITE=t.COLOR_WHITE_BLUE=t.COLOR_GRAY_BLUE=t.COLOR_DARK=t.COLOR_SECONDARY=t.COLOR_WHITE_ALPHA30=t.COLOR_ERROR=t.COLOR_PRIMARY_LIGHT=t.COLOR_PRIMARY=void 0;t.COLOR_PRIMARY="#5887F9";t.COLOR_PRIMARY_LIGHT="#60C3FF";t.COLOR_ERROR="#FC5F6B";t.COLOR_WHITE_ALPHA30="rgba(255, 255, 255, 0.3)";t.COLOR_SECONDARY="rgba(255, 255, 255, 0.3)";t.COLOR_DARK="#4C5264";t.COLOR_GRAY_BLUE="#BCC5D3";t.COLOR_WHITE_BLUE="#E2E8ED";t.COLOR_WHITE="#ffffff";t.COLOR_WHITE_ALPHA60="rgba(255, 255, 255, 0.6)";t.COLOR_GRAY="rgba(255, 255, 255, 0.6)";t.GRADIENT_PRIMARY=["#5574f7","#60C3FF"];t.TYPE_FONT_SIZE_HEADING_1=36;t.TYPE_FONT_SIZE_HEADING_2=24;t.TYPE_FONT_SIZE_HEADING_3=20;t.TYPE_FONT_SIZE_HEADING_4=16;t.TYPE_FONT_SIZE_HEADING_5=14;t.TYPE_FONT_SIZE_HEADING_6=12;t.TYPE_FONT_SIZE_PARAGRAPH=14;var n={primary:"#5887F9",primaryLight:"#60C3FF",error:"#FC5F6B",secondary:"rgba(255, 255, 255, 0.3)",dark:"#4C5264",grayBlue:"#BCC5D3",whiteBlue:"#E2E8ED",white:"#ffffff",gray:"rgba(255, 255, 255, 0.6)"};t.colors=n;var _={h1:36,h2:24,h3:20,h4:16,h5:14,h6:12,p:14};t.fontSizes=_;var o={colors:n,type:{fontSizes:_}};t.default=o},108:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _.default}});var n,_=(n=r(109))&&n.__esModule?n:{default:n}},109:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n,_=(n=r(0))&&n.__esModule?n:{default:n},o=r(7);function a(e,t){if(null==e)return{};var r,n,_=function(e,t){if(null==e)return{};var r,n,_={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(_[r]=e[r]);return _}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(_[r]=e[r])}return _}function l(e){var t=e.fontSize,r=e.viewBox,n=e.children,l=a(e,["fontSize","viewBox","children"]);return _.default.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",color:"inherit",viewBox:r,focusable:!1,width:(0,o.styleLengths)(t),height:(0,o.styleLengths)(t)},l),n)}l.defaultProps={fontSize:24,viewBox:"0 0 24 24"}},110:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iconDark=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.COLOR_WHITE,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.COLOR_DARK;return e?t:r};var n=r(107)},171:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _.default}});var n,_=(n=r(172))&&n.__esModule?n:{default:n}},172:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=O;var n=l(r(0)),_=r(107),o=r(110),a=l(r(108));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,_=function(e,t){if(null==e)return{};var r,n,_={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(_[r]=e[r]);return _}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(_[r]=e[r])}return _}function O(e){var t=e.dark,r=e.color,l=u(e,["dark","color"]),O={fill:"none",stroke:(0,o.iconDark)(t,_.COLOR_WHITE,_.colors[r]),strokeMiterlimit:10};return n.default.createElement(a.default,Object.assign({viewBox:"0 0 23.217 18"},l),n.default.createElement("g",{id:"laptop-icon",transform:"translate(-0.041 0)"},n.default.createElement("path",Object.assign({},O,{id:"path",d:"M21.1,12.5H2.1V1.4A.9.9,0,0,1,3,.5H20.2a.9.9,0,0,1,.9.9Z"})),n.default.createElement("path",Object.assign({},O,{id:"path-2","data-name":"path",d:"M21.1,12.5H2.1L.6,16.3a.881.881,0,0,0,.8,1.2H21.9a.881.881,0,0,0,.8-1.2Z"})),n.default.createElement("line",Object.assign({},O,{id:"line",strokeLinecap:"round",x2:"3",transform:"translate(10.1 15.5)"}))))}O.defaultProps={dark:!1,color:"dark"}},48:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.default.createElement(_.default,null)};var n=o(r(0)),_=o(r(171));function o(e){return e&&e.__esModule?e:{default:e}}}}]);
//# sourceMappingURL=33.22ac6355.chunk.js.map