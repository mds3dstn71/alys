(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{35:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.type=t.lineHeights=t.fontSizes=t.colors=t.TYPE_LINE_HEIGHT_PARAGRAPH=t.TYPE_LINE_HEIGHT_HEADING_6=t.TYPE_LINE_HEIGHT_HEADING_5=t.TYPE_LINE_HEIGHT_HEADING_4=t.TYPE_LINE_HEIGHT_HEADING_3=t.TYPE_LINE_HEIGHT_HEADING_2=t.TYPE_LINE_HEIGHT_HEADING_1=t.TYPE_FONT_SIZE_PARAGRAPH=t.TYPE_FONT_SIZE_HEADING_6=t.TYPE_FONT_SIZE_HEADING_5=t.TYPE_FONT_SIZE_HEADING_4=t.TYPE_FONT_SIZE_HEADING_3=t.TYPE_FONT_SIZE_HEADING_2=t.TYPE_FONT_SIZE_HEADING_1=t.GRADIENT_PRIMARY=t.COLOR_GRAY=t.COLOR_WHITE_ALPHA60=t.COLOR_WHITE=t.COLOR_WHITE_BLUE=t.COLOR_GRAY_BLUE=t.COLOR_DARK=t.COLOR_SECONDARY=t.COLOR_WHITE_ALPHA30=t.COLOR_ERROR=t.COLOR_PRIMARY_LIGHT=t.COLOR_PRIMARY=void 0;t.COLOR_PRIMARY="#5887F9";t.COLOR_PRIMARY_LIGHT="#60C3FF";t.COLOR_ERROR="#FC5F6B";t.COLOR_WHITE_ALPHA30="rgba(255, 255, 255, 0.3)";t.COLOR_SECONDARY="rgba(255, 255, 255, 0.3)";t.COLOR_DARK="#4C5264";t.COLOR_GRAY_BLUE="#BCC5D3";t.COLOR_WHITE_BLUE="#E2E8ED";t.COLOR_WHITE="#ffffff";t.COLOR_WHITE_ALPHA60="rgba(255, 255, 255, 0.6)";t.COLOR_GRAY="rgba(255, 255, 255, 0.6)";t.GRADIENT_PRIMARY=["#5574f7","#60C3FF"];t.TYPE_FONT_SIZE_HEADING_1=36;t.TYPE_FONT_SIZE_HEADING_2=24;t.TYPE_FONT_SIZE_HEADING_3=20;t.TYPE_FONT_SIZE_HEADING_4=16;t.TYPE_FONT_SIZE_HEADING_5=14;t.TYPE_FONT_SIZE_HEADING_6=12;t.TYPE_FONT_SIZE_PARAGRAPH=14;t.TYPE_LINE_HEIGHT_HEADING_1=1.5;t.TYPE_LINE_HEIGHT_HEADING_2=1.75;t.TYPE_LINE_HEIGHT_HEADING_3=1.625;t.TYPE_LINE_HEIGHT_HEADING_4=1.25;t.TYPE_LINE_HEIGHT_HEADING_5=1.125;t.TYPE_LINE_HEIGHT_HEADING_6=1;t.TYPE_LINE_HEIGHT_PARAGRAPH=1.25;var n={primary:"#5887F9",primaryLight:"#60C3FF",error:"#FC5F6B",secondary:"rgba(255, 255, 255, 0.3)",dark:"#4C5264",grayBlue:"#BCC5D3",whiteBlue:"#E2E8ED",white:"#ffffff",gray:"rgba(255, 255, 255, 0.6)"};t.colors=n;var a={h1:36,h2:24,h3:20,h4:16,h5:14,h6:12,p:14};t.fontSizes=a;var _={h1:1.5,h2:1.75,h3:1.625,h4:1.25,h5:1.125,h6:1,p:1.25};t.lineHeights=_;var o={fontSizes:a,lineHeights:_};t.type=o;var l={colors:n,type:o};t.default=l},36:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(37))&&n.__esModule?n:{default:n}},37:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n,a=(n=r(0))&&n.__esModule?n:{default:n},_=r(39);function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},_=Object.keys(e);for(n=0;n<_.length;n++)r=_[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);for(n=0;n<_.length;n++)r=_[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function l(e){var t=e.fontSize,r=e.viewBox,n=e.children,l=o(e,["fontSize","viewBox","children"]);return a.default.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",color:"inherit",viewBox:r,focusable:!1,width:(0,_.styleLengths)(t),height:(0,_.styleLengths)(t)},l),n)}l.defaultProps={fontSize:24,viewBox:"0 0 24 24"}},38:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iconDark=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.COLOR_WHITE,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.COLOR_DARK;return e?t:r};var n=r(35)},40:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(41))&&n.__esModule?n:{default:n}},41:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n=l(r(0)),a=r(35),_=r(38),o=l(r(36));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},_=Object.keys(e);for(n=0;n<_.length;n++)r=_[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);for(n=0;n<_.length;n++)r=_[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function i(e){var t=e.dark,r=e.color,l=u(e,["dark","color"]),i={fill:"none",stroke:(0,_.iconDark)(t,a.COLOR_WHITE,a.colors[r]),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10};return n.default.createElement(o.default,Object.assign({viewBox:"0 0 21.7 19.4"},l),n.default.createElement("g",{id:"mentor-icon",transform:"translate(0 0)"},n.default.createElement("path",Object.assign({},i,{id:"path",d:"M10.3,13.6v3l-5,2.3"})),n.default.createElement("path",Object.assign({},i,{id:"path-2","data-name":"path",d:"M16.1,13.6v3l5.1,2.3"})),n.default.createElement("path",Object.assign({},i,{id:"path-3","data-name":"path",d:"M15,14.1a5.2,5.2,0,0,0,3.5-4.9V4.6A4.055,4.055,0,0,0,14.4.5H12.2A4.14,4.14,0,0,0,8,4.6V9.2a5.2,5.2,0,0,0,3.5,4.9"})),n.default.createElement("path",Object.assign({},i,{id:"path-4","data-name":"path",d:"M4.6,11.3v2.4L.5,15.6"})),n.default.createElement("path",Object.assign({},i,{id:"path-5","data-name":"path",d:"M6.9.5H6.1A3.372,3.372,0,0,0,2.7,3.9V7.6a4.249,4.249,0,0,0,2.8,4"}))))}i.defaultProps={dark:!1,color:"dark"}},46:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(47))&&n.__esModule?n:{default:n}},47:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=O;var n=l(r(0)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),_=r(35),o=l(r(40));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){return e.theme.size},i=function(e){return function(t){var r=t.theme.size;return r+r*e}},d={smaller:2.5,small:3.75,default:6.25},E=a.default.div.withConfig({displayName:"Avatar__Wrapper",componentId:"adbvsc-0"})(["background-color:",";width:","em;height:","em;border-radius:","em;"],_.COLOR_WHITE,i(.2),i(.2),function(e){return.1*e.theme.size}),f=a.default.img.withConfig({displayName:"Avatar__Img",componentId:"adbvsc-1"})(["height:","em;width:","em;border-radius:",";margin:","em;"],u,u,function(e){var t=e.theme,r=t.size;return t.round?"50%":"".concat(.1*r,"em")},function(e){var t=e.theme,r=t.size,n=t.outlined,a=t.round;return n&&!a?.1*r:0}),c=(0,a.default)(E).withConfig({displayName:"Avatar__DefaultWrapper",componentId:"adbvsc-2"})(["background-color:",";"],_.COLOR_WHITE_BLUE),s=(0,a.default)(o.default).withConfig({displayName:"Avatar__StyledMentorIcon",componentId:"adbvsc-3"})(["position:relative;left:50%;top:50%;transform:translate(-50%,-50%);&& path{stroke:",";}"],_.COLOR_GRAY_BLUE);function O(e){var t=e.src,r=e.alt,_=e.outlined,o=e.size,l=e.round,u={size:d[o],outlined:_,round:l};return n.default.createElement(a.ThemeProvider,{theme:u},t?_&&!l?n.default.createElement(E,null,n.default.createElement(f,{src:t,alt:r})):n.default.createElement(f,{src:t,alt:r}):n.default.createElement(c,null,n.default.createElement(s,null)))}O.defaultProps={alt:"",outlined:!1,size:"default",round:!1}},78:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.default.createElement(a.default,{size:"smaller"})};var n=_(r(0)),a=_(r(46));function _(e){return e&&e.__esModule?e:{default:e}}}}]);
//# sourceMappingURL=7.d6a92038.chunk.js.map