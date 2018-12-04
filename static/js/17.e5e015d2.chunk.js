(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{107:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.fontSizes=t.colors=t.TYPE_FONT_SIZE_PARAGRAPH=t.TYPE_FONT_SIZE_HEADING_6=t.TYPE_FONT_SIZE_HEADING_5=t.TYPE_FONT_SIZE_HEADING_4=t.TYPE_FONT_SIZE_HEADING_3=t.TYPE_FONT_SIZE_HEADING_2=t.TYPE_FONT_SIZE_HEADING_1=t.GRADIENT_PRIMARY=t.COLOR_GRAY=t.COLOR_WHITE_ALPHA60=t.COLOR_WHITE=t.COLOR_WHITE_BLUE=t.COLOR_GRAY_BLUE=t.COLOR_DARK=t.COLOR_SECONDARY=t.COLOR_WHITE_ALPHA30=t.COLOR_ERROR=t.COLOR_PRIMARY_LIGHT=t.COLOR_PRIMARY=void 0;t.COLOR_PRIMARY="#5887F9";t.COLOR_PRIMARY_LIGHT="#60C3FF";t.COLOR_ERROR="#FC5F6B";t.COLOR_WHITE_ALPHA30="rgba(255, 255, 255, 0.3)";t.COLOR_SECONDARY="rgba(255, 255, 255, 0.3)";t.COLOR_DARK="#4C5264";t.COLOR_GRAY_BLUE="#BCC5D3";t.COLOR_WHITE_BLUE="#E2E8ED";t.COLOR_WHITE="#ffffff";t.COLOR_WHITE_ALPHA60="rgba(255, 255, 255, 0.6)";t.COLOR_GRAY="rgba(255, 255, 255, 0.6)";t.GRADIENT_PRIMARY=["#5574f7","#60C3FF"];t.TYPE_FONT_SIZE_HEADING_1=36;t.TYPE_FONT_SIZE_HEADING_2=24;t.TYPE_FONT_SIZE_HEADING_3=20;t.TYPE_FONT_SIZE_HEADING_4=16;t.TYPE_FONT_SIZE_HEADING_5=14;t.TYPE_FONT_SIZE_HEADING_6=12;t.TYPE_FONT_SIZE_PARAGRAPH=14;var r={primary:"#5887F9",primaryLight:"#60C3FF",error:"#FC5F6B",secondary:"rgba(255, 255, 255, 0.3)",dark:"#4C5264",grayBlue:"#BCC5D3",whiteBlue:"#E2E8ED",white:"#ffffff",gray:"rgba(255, 255, 255, 0.6)"};t.colors=r;var o={h1:36,h2:24,h3:20,h4:16,h5:14,h6:12,p:14};t.fontSizes=o;var l={colors:r,type:{fontSizes:o}};t.default=l},108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var r,o=(r=n(109))&&r.__esModule?r:{default:r}},109:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r,o=(r=n(0))&&r.__esModule?r:{default:r},l=n(7);function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function i(e){var t=e.fontSize,n=e.viewBox,r=e.children,i=a(e,["fontSize","viewBox","children"]);return o.default.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",color:"inherit",viewBox:n,focusable:!1,width:(0,l.styleLengths)(t),height:(0,l.styleLengths)(t)},i),r)}i.defaultProps={fontSize:24,viewBox:"0 0 24 24"}},110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iconDark=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.COLOR_WHITE,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.COLOR_DARK;return e?t:n};var r=n(107)},113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var r,o=(r=n(114))&&r.__esModule?r:{default:r}},114:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;var r=i(n(0)),o=i(n(1)),l=n(107),a=n(7);function i(e){return e&&e.__esModule?e:{default:e}}var u=o.default.div.attrs(function(e){return{children:e.text}}).withConfig({displayName:"Button__BasicButton",componentId:"lsnwxn-0"})(["display:inline-block;text-align:center;vertical-align:middle;background:",";color:",";text-transform:uppercase;border-radius:0.375em;padding:1em;font-size:",";font-weight:500;&:hover{cursor:pointer;}"],l.COLOR_PRIMARY,l.COLOR_WHITE,(0,a.styleLengths)(l.TYPE_FONT_SIZE_HEADING_6)),c=(0,o.default)(u).withConfig({displayName:"Button__IconOnlyButton",componentId:"lsnwxn-1"})(["border-radius:50%;"]),_=(0,o.default)(u).withConfig({displayName:"Button__OtherButton",componentId:"lsnwxn-2"})(["display:flex;flex-direction:row;align-items:center;justify-content:center;background:",";color:",";border-radius:",";min-height:1.75em;margin:",";"],function(e){var t;return"link"===e.type?"transparent":(t=l.GRADIENT_PRIMARY,"linear-gradient(to right, ".concat(t,")"))},function(e){return"link"===e.type?l.COLOR_PRIMARY:l.COLOR_WHITE},function(e){return e.block?0:"0.375em"},function(e){return e.block?0:"1.25em 1.875em"});function f(e){var t=e.basic,n=e.text,l=e.block,a=e.type,i=e.icon,f=e.iconOnly,d=function(){return null};return i&&(d=(0,o.default)(i).attrs(function(){return{dark:"link"!==a,color:"primary"}}).withConfig({displayName:"Button__ButtonIcon",componentId:"lsnwxn-3"})(["margin-right:",";vertical-align:middle;&& svg{font-size:1.125em;}"],f?0:"1.125em")),f?r.default.createElement(c,null,r.default.createElement(d,null)):t?r.default.createElement(u,{text:n}):r.default.createElement(_,{block:l,type:a},r.default.createElement(d,null)," ",n)}f.defaultProps={basic:!1,block:!1,color:"default",icon:null,iconOnly:!1,type:"default"}},125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var r,o=(r=n(126))&&r.__esModule?r:{default:r}},126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var r=i(n(0)),o=n(107),l=n(110),a=i(n(108));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e){var t=e.dark,n=e.color,i=u(e,["dark","color"]),c={fill:"none",stroke:(0,l.iconDark)(t,o.COLOR_WHITE,o.colors[n]),strokeLinecap:"round",strokeMiterlimit:10};return r.default.createElement(a.default,Object.assign({viewBox:"0 0 19.25 19.306"},i),r.default.createElement("g",{id:"register-icon",transform:"translate(0 0.105)"},r.default.createElement("path",Object.assign({},c,{id:"path",strokeLinejoin:"round",d:"M4.3,17.7l-3.8,1,1-3.9L15.8.6a.483.483,0,0,1,.7,0l2.1,2.1a.483.483,0,0,1,0,.7Z"})),r.default.createElement("line",Object.assign({},c,{id:"line",x2:"2.8",y2:"2.8",transform:"translate(14.7 1.7)"})),r.default.createElement("path",Object.assign({},c,{id:"path-2","data-name":"path",d:"M1.8,9.4V1.9H9.3"})),r.default.createElement("path",Object.assign({},c,{id:"path-3","data-name":"path",d:"M16.8,10.4v7.5H9.3"}))))}c.defaultProps={dark:!1,color:"dark"}},32:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r.default.createElement(o.default,{type:"link",text:"Example text only with icon",icon:l.default,onClick:function(){}})};var r=a(n(0)),o=a(n(113)),l=a(n(125));function a(e){return e&&e.__esModule?e:{default:e}}}}]);
//# sourceMappingURL=17.e5e015d2.chunk.js.map