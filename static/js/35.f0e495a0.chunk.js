(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{174:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _.default}});var n,_=(n=r(175))&&n.__esModule?n:{default:n}},175:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n=l(r(0)),_=r(99),a=l(r(96));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,_=function(e,t){if(null==e)return{};var r,n,_={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(_[r]=e[r]);return _}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(_[r]=e[r])}return _}function o(e){var t=e.dark,r=u(e,["dark"]),l={fill:"none",stroke:(0,_.iconDark)(t),strokeMiterlimit:10};return n.default.createElement(a.default,Object.assign({viewBox:"0 0 13 22"},r),n.default.createElement("g",{id:"phone-icon",transform:"translate(0 0)"},n.default.createElement("path",Object.assign({},l,{id:"path",d:"M11.5,21.5H1.5a.945.945,0,0,1-1-1V1.5a.945.945,0,0,1,1-1h10a.945.945,0,0,1,1,1v19A.945.945,0,0,1,11.5,21.5Z"})),n.default.createElement("line",Object.assign({},l,{id:"line",x2:"12",transform:"translate(1 4.5)"})),n.default.createElement("line",Object.assign({},l,{id:"line-2","data-name":"line",strokeLinecap:"round",x2:"2",transform:"translate(5.5 2.5)"})),n.default.createElement("circle",Object.assign({},l,{id:"ellipse",cx:"0.5",cy:"0.5",r:"0.5",transform:"translate(6 18.5)"}))))}o.defaultProps={dark:!1}},50:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.default.createElement(_.default,null)};var n=a(r(0)),_=a(r(174));function a(e){return e&&e.__esModule?e:{default:e}}},96:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _.default}});var n,_=(n=r(97))&&n.__esModule?n:{default:n}},97:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var n,_=(n=r(0))&&n.__esModule?n:{default:n},a=r(7);function l(e,t){if(null==e)return{};var r,n,_=function(e,t){if(null==e)return{};var r,n,_={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(_[r]=e[r]);return _}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(_[r]=e[r])}return _}function u(e){var t=e.fontSize,r=e.viewBox,n=e.children,u=l(e,["fontSize","viewBox","children"]);return _.default.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",color:"inherit",viewBox:r,focusable:!1,width:(0,a.styleLengths)(t),height:(0,a.styleLengths)(t)},u),n)}u.defaultProps={fontSize:24,viewBox:"0 0 24 24"}},98:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TYPE_FONT_SIZE_PARAGRAPH=t.TYPE_FONT_SIZE_HEADING_6=t.TYPE_FONT_SIZE_HEADING_5=t.TYPE_FONT_SIZE_HEADING_4=t.TYPE_FONT_SIZE_HEADING_3=t.TYPE_FONT_SIZE_HEADING_2=t.TYPE_FONT_SIZE_HEADING_1=t.COLOR_GRAY=t.COLOR_WHITE_ALPHA60=t.COLOR_WHITE=t.COLOR_WHITE_BLUE=t.COLOR_GRAY_BLUE=t.COLOR_DARK=t.COLOR_SECONDARY=t.COLOR_WHITE_ALPHA30=t.COLOR_ERROR=t.COLOR_PRIMARY_LIGHT=t.COLOR_PRIMARY=void 0;t.COLOR_PRIMARY="#5887F9";t.COLOR_PRIMARY_LIGHT="#60C3FF";t.COLOR_ERROR="#FC5F6B";t.COLOR_WHITE_ALPHA30="rgba(255, 255, 255, 0.3)";t.COLOR_SECONDARY="rgba(255, 255, 255, 0.3)";t.COLOR_DARK="#4C5264";t.COLOR_GRAY_BLUE="#BCC5D3";t.COLOR_WHITE_BLUE="#E2E8ED";t.COLOR_WHITE="#ffffff";t.COLOR_WHITE_ALPHA60="rgba(255, 255, 255, 0.6)";t.COLOR_GRAY="rgba(255, 255, 255, 0.6)";t.TYPE_FONT_SIZE_HEADING_1=36;t.TYPE_FONT_SIZE_HEADING_2=24;t.TYPE_FONT_SIZE_HEADING_3=20;t.TYPE_FONT_SIZE_HEADING_4=16;t.TYPE_FONT_SIZE_HEADING_5=14;t.TYPE_FONT_SIZE_HEADING_6=12;t.TYPE_FONT_SIZE_PARAGRAPH=14;var n={colors:{primary:"#5887F9",primaryLight:"#60C3FF",error:"#FC5F6B",secondary:"rgba(255, 255, 255, 0.3)",dark:"#4C5264",grayBlue:"#BCC5D3",whiteBlue:"#E2E8ED",white:"#ffffff",gray:"rgba(255, 255, 255, 0.6)"},type:{fontSizes:{h1:36,h2:24,h3:20,h4:16,h5:14,h6:12,p:14}}};t.default=n},99:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iconDark=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.COLOR_WHITE,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.COLOR_DARK;return e?t:r};var n=r(98)}}]);
//# sourceMappingURL=35.f0e495a0.chunk.js.map