(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{136:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return n.default.createElement(i.default,{timestamp:new Date},"Great catching up today Aaron. I\u2019ve got our next mentoring session schedule for next Tuesday 6th November if this still works for you? How do you feel about tackling some more advanced photography techniques?")};var n=s(r(0)),i=s(r(78));function s(t){return t&&t.__esModule?t:{default:t}}},39:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.type=e.avatarSizes=e.lineHeights=e.fontSizes=e.colors=e.AVATAR_SIZE_DEFAULT=e.AVATAR_SIZE_SMALL=e.AVATAR_SIZE_SMALLER=e.TYPE_LINE_HEIGHT_PARAGRAPH=e.TYPE_LINE_HEIGHT_HEADING_6=e.TYPE_LINE_HEIGHT_HEADING_5=e.TYPE_LINE_HEIGHT_HEADING_4=e.TYPE_LINE_HEIGHT_HEADING_3=e.TYPE_LINE_HEIGHT_HEADING_2=e.TYPE_LINE_HEIGHT_HEADING_1=e.TYPE_FONT_SIZE_PARAGRAPH=e.TYPE_FONT_SIZE_HEADING_6=e.TYPE_FONT_SIZE_HEADING_5=e.TYPE_FONT_SIZE_HEADING_4=e.TYPE_FONT_SIZE_HEADING_3=e.TYPE_FONT_SIZE_HEADING_2=e.TYPE_FONT_SIZE_HEADING_1=e.GRADIENT_PRIMARY=e.COLOR_SHADOW=e.COLOR_BLACK_ALPHA20=e.COLOR_GRAY=e.COLOR_WHITE_ALPHA60=e.COLOR_WHITE=e.COLOR_WHITE_BLUE=e.COLOR_BLUE_GRAY=e.COLOR_GRAY_BLUE=e.COLOR_DARK=e.COLOR_SECONDARY=e.COLOR_WHITE_ALPHA30=e.COLOR_ERROR=e.COLOR_PRIMARY_FILL=e.COLOR_PRIMARY_LIGHT=e.COLOR_PRIMARY=void 0;e.COLOR_PRIMARY="#5887F9";e.COLOR_PRIMARY_LIGHT="#60C3FF";e.COLOR_PRIMARY_FILL="#dce9ff";e.COLOR_ERROR="#FC5F6B";e.COLOR_WHITE_ALPHA30="rgba(255, 255, 255, 0.3)";e.COLOR_SECONDARY="rgba(255, 255, 255, 0.3)";e.COLOR_DARK="#4C5264";e.COLOR_GRAY_BLUE="#BCC5D3";e.COLOR_BLUE_GRAY="#b0caff";e.COLOR_WHITE_BLUE="#E2E8ED";e.COLOR_WHITE="#ffffff";e.COLOR_WHITE_ALPHA60="rgba(255, 255, 255, 0.6)";e.COLOR_GRAY="rgba(255, 255, 255, 0.6)";e.COLOR_BLACK_ALPHA20="rgba(0, 0, 0, 0.2)";e.COLOR_SHADOW="rgba(0, 0, 0, 0.2)";e.GRADIENT_PRIMARY=["#5574f7","#60C3FF"];e.TYPE_FONT_SIZE_HEADING_1=36;e.TYPE_FONT_SIZE_HEADING_2=24;e.TYPE_FONT_SIZE_HEADING_3=20;e.TYPE_FONT_SIZE_HEADING_4=16;e.TYPE_FONT_SIZE_HEADING_5=14;e.TYPE_FONT_SIZE_HEADING_6=12;e.TYPE_FONT_SIZE_PARAGRAPH=14;e.TYPE_LINE_HEIGHT_HEADING_1=1.5;e.TYPE_LINE_HEIGHT_HEADING_2=1.75;e.TYPE_LINE_HEIGHT_HEADING_3=1.625;e.TYPE_LINE_HEIGHT_HEADING_4=1.25;e.TYPE_LINE_HEIGHT_HEADING_5=1.125;e.TYPE_LINE_HEIGHT_HEADING_6=1;e.TYPE_LINE_HEIGHT_PARAGRAPH=1.25;e.AVATAR_SIZE_SMALLER=2.5;e.AVATAR_SIZE_SMALL=3.75;e.AVATAR_SIZE_DEFAULT=6.25;var n={primary:"#5887F9",primaryLight:"#60C3FF",primaryFill:"#dce9ff",error:"#FC5F6B",secondary:"rgba(255, 255, 255, 0.3)",dark:"#4C5264",grayBlue:"#BCC5D3",whiteBlue:"#E2E8ED",white:"#ffffff",gray:"rgba(255, 255, 255, 0.6)"};e.colors=n;var i={h1:36,h2:24,h3:20,h4:16,h5:14,h6:12,p:14};e.fontSizes=i;var s={h1:1.5,h2:1.75,h3:1.625,h4:1.25,h5:1.125,h6:1,p:1.25};e.lineHeights=s;var a={smaller:2.5,small:3.75,default:6.25};e.avatarSizes=a;var u={fontSizes:i,lineHeights:s};e.type=u;var o={colors:n,type:u,avatarSizes:a};e.default=o},63:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i.default}});var n,i=(n=r(64))&&n.__esModule?n:{default:n}},64:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.value,r=(0,s.default)(e).format("MMM D, HH:mm");return i.default.createElement(i.Fragment,null,r)};var n,i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};n.get||n.set?Object.defineProperty(e,r,n):e[r]=t[r]}return e.default=t,e}(r(0)),s=(n=r(65))&&n.__esModule?n:{default:n}},65:function(t,e,r){t.exports=function(){"use strict";var t="millisecond",e="second",r="minute",n="hour",i="day",s="week",a="month",u="quarter",o="year",_=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},l={s:c,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+c(n,2,"0")+":"+c(i,2,"0")},m:function(t,e){var r=12*(e.year()-t.year())+(e.month()-t.month()),n=t.clone().add(r,a),i=e-n<0,s=t.clone().add(r+(i?-1:1),a);return Number(-(r+(e-n)/(i?n-s:s-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(_){return{M:a,y:o,w:s,d:i,h:n,m:r,s:e,ms:t,Q:u}[_]||String(_||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h="en",E={};E[h]=d;var O=function(t){return t instanceof H},I=function(t,e,r){var n;if(!t)return null;if("string"==typeof t)E[t]&&(n=t),e&&(E[t]=e,n=t);else{var i=t.name;E[i]=t,n=i}return r||(h=n),n},A=function(t,e,r){if(O(t))return t.clone();var n=e?"string"==typeof e?{format:e,pl:r}:e:{};return n.date=t,new H(n)},g=l;g.l=I,g.i=O,g.w=function(t,e){return A(t,{locale:e.$L,utc:e.$u})};var H=function(){function c(t){this.$L=this.$L||I(t.locale,null,!0)||h,this.parse(t)}var l=c.prototype;return l.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(_);if(n)return r?new Date(Date.UTC(n[1],n[2]-1,n[3]||1,n[4]||0,n[5]||0,n[6]||0,n[7]||0)):new Date(n[1],n[2]-1,n[3]||1,n[4]||0,n[5]||0,n[6]||0,n[7]||0)}return new Date(e)}(t),this.init()},l.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},l.$utils=function(){return g},l.isValid=function(){return!("Invalid Date"===this.$d.toString())},l.isSame=function(t,e){var r=A(t);return this.startOf(e)<=r&&r<=this.endOf(e)},l.isAfter=function(t,e){return A(t)<this.startOf(e)},l.isBefore=function(t,e){return this.endOf(e)<A(t)},l.$g=function(t,e,r){return g.u(t)?this[e]:this.set(r,t)},l.year=function(t){return this.$g(t,"$y",o)},l.month=function(t){return this.$g(t,"$M",a)},l.day=function(t){return this.$g(t,"$W",i)},l.date=function(t){return this.$g(t,"$D","date")},l.hour=function(t){return this.$g(t,"$H",n)},l.minute=function(t){return this.$g(t,"$m",r)},l.second=function(t){return this.$g(t,"$s",e)},l.millisecond=function(e){return this.$g(e,"$ms",t)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,u){var _=this,f=!!g.u(u)||u,c=g.p(t),l=function(t,e){var r=g.w(_.$u?Date.UTC(_.$y,e,t):new Date(_.$y,e,t),_);return f?r:r.endOf(i)},d=function(t,e){return g.w(_.toDate()[t].apply(_.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),_)},h=this.$W,E=this.$M,O=this.$D,I="set"+(this.$u?"UTC":"");switch(c){case o:return f?l(1,0):l(31,11);case a:return f?l(1,E):l(0,E+1);case s:var A=this.$locale().weekStart||0,H=(h<A?h+7:h)-A;return l(f?O-H:O+(6-H),E);case i:case"date":return d(I+"Hours",0);case n:return d(I+"Minutes",1);case r:return d(I+"Seconds",2);case e:return d(I+"Milliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(s,u){var _,f=g.p(s),c="set"+(this.$u?"UTC":""),l=(_={},_[i]=c+"Date",_.date=c+"Date",_[a]=c+"Month",_[o]=c+"FullYear",_[n]=c+"Hours",_[r]=c+"Minutes",_[e]=c+"Seconds",_[t]=c+"Milliseconds",_)[f],d=f===i?this.$D+(u-this.$W):u;if(f===a||f===o){var h=this.clone().set("date",1);h.$d[l](d),h.init(),this.$d=h.set("date",Math.min(this.$D,h.daysInMonth())).toDate()}else l&&this.$d[l](d);return this.init(),this},l.set=function(t,e){return this.clone().$set(t,e)},l.get=function(t){return this[g.p(t)]()},l.add=function(t,u){var _,f=this;t=Number(t);var c=g.p(u),l=function(e){var r=new Date(f.$d);return r.setDate(r.getDate()+e*t),g.w(r,f)};if(c===a)return this.set(a,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return l(1);if(c===s)return l(7);var d=(_={},_[r]=6e4,_[n]=36e5,_[e]=1e3,_)[c]||1,h=this.valueOf()+t*d;return g.w(h,this)},l.subtract=function(t,e){return this.add(-1*t,e)},l.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var r=t||"YYYY-MM-DDTHH:mm:ssZ",n=g.z(this),i=this.$locale(),s=i.weekdays,a=i.months,u=function(t,e,r,n){return t&&t[e]||r[e].substr(0,n)},o=function(t){return g.s(e.$H%12||12,t,"0")},_={YY:String(this.$y).slice(-2),YYYY:String(this.$y),M:String(this.$M+1),MM:g.s(this.$M+1,2,"0"),MMM:u(i.monthsShort,this.$M,a,3),MMMM:a[this.$M],D:String(this.$D),DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:u(i.weekdaysMin,this.$W,s,2),ddd:u(i.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(this.$H),HH:g.s(this.$H,2,"0"),h:o(1),hh:o(2),a:this.$H<12?"am":"pm",A:this.$H<12?"AM":"PM",m:String(this.$m),mm:g.s(this.$m,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:n};return r.replace(f,function(t,e){return e||_[t]||n.replace(":","")})},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(t,_,f){var c,l=g.p(_),d=A(t),h=6e4*(d.utcOffset()-this.utcOffset()),E=this-d,O=g.m(this,d);return O=(c={},c[o]=O/12,c[a]=O,c[u]=O/3,c[s]=(E-h)/6048e5,c[i]=(E-h)/864e5,c[n]=E/36e5,c[r]=E/6e4,c[e]=E/1e3,c)[l]||E,f?O:g.a(O)},l.daysInMonth=function(){return this.endOf(a).$D},l.$locale=function(){return E[this.$L]},l.locale=function(t,e){if(!t)return this.$L;var r=this.clone();return r.$L=I(t,e,!0),r},l.clone=function(){return g.w(this.toDate(),this)},l.toDate=function(){return new Date(this.$d)},l.toJSON=function(){return this.toISOString()},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},c}();return A.prototype=H.prototype,A.extend=function(t,e){return t(e,H,A),A},A.locale=I,A.isDayjs=O,A.unix=function(t){return A(1e3*t)},A.en=E[h],A.Ls=E,A}()},78:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i.default}});var n,i=(n=r(79))&&n.__esModule?n:{default:n}},79:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=h;var n,i=_(r(0)),s=_(r(1)),a=(n=r(63))&&n.__esModule?n:{default:n},u=r(39),o=r(43);function _(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};n.get||n.set?Object.defineProperty(e,r,n):e[r]=t[r]}return e.default=t,e}function f(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var c=s.default.div.withConfig({displayName:"ChatBubble__Wrapper",componentId:"sc-15gboux-0"})(["",";border-radius:0.375em;padding:1em;position:relative;::after{content:'';height:0;border-top:0.421875rem solid transparent;border-bottom:0.421875rem solid transparent;"," position:absolute;top:0.83125rem;width:0;}"],function(t){switch(t.variant){case"secondary":return(0,s.css)(["background:",";color:",";"],u.COLOR_WHITE_BLUE,u.COLOR_DARK);case"default":default:return(0,s.css)(["background:linear-gradient(to top right,#5574f7,#60c3ff);color:",";"],u.COLOR_WHITE)}},function(t){var e=t.arrowSide,r=t.variant;switch(e){case"left":return(0,s.css)(["border-right:0.43rem solid ",";left:-0.43rem;"],"secondary"===r?u.COLOR_WHITE_BLUE:"#5a99fb");case"right":default:return(0,s.css)(["border-left:0.43rem solid ",";right:-0.43rem;"],"secondary"===r?u.COLOR_WHITE_BLUE:"#60c3ff")}}),l=s.default.p.withConfig({displayName:"ChatBubble__Message",componentId:"sc-15gboux-1"})(["font-size:",";font-weight:400;line-height:1.5;margin:0;"],(0,o.styleLengths)(u.TYPE_FONT_SIZE_PARAGRAPH)),d=s.default.div.withConfig({displayName:"ChatBubble__MessageTimestamp",componentId:"sc-15gboux-2"})(["color:",";font-size:",";font-weight:400;padding:0.1875em;text-align:right;"],u.COLOR_GRAY_BLUE,(0,o.styleLengths)(u.TYPE_FONT_SIZE_HEADING_6));function h(t){var e=t.children,r=t.timestamp,n=f(t,["children","timestamp"]);return i.default.createElement(i.Fragment,null,i.default.createElement(c,n,i.default.createElement(l,null,e)),r&&i.default.createElement(d,{title:r.toString()},i.default.createElement(a.default,{value:r})))}h.defaultProps={arrowSide:"right",variant:"default"}}}]);
//# sourceMappingURL=37.d373358b.chunk.js.map