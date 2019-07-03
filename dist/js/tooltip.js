/*! formstone v1.4.13-1 [tooltip.js] 2019-07-03 | GPL-3.0 License | formstone.it */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core"],t):t(jQuery,Formstone)}(function(v,$){"use strict";function e(t){w();var e=t.data;e.left=t.pageX,e.top=t.pageY,function(t){w();var e="";e+='<div class="',e+=[H.base,H[t.direction],t.theme,t.customClass].join(" "),e+='">',e+='<div class="'+H.content+'">',e+=t.formatter.call(t.$el,t),e+='<span class="'+H.caret+'"></span>',e+="</div>",M={$tooltip:v(e+="</div>"),$el:t.$el},$.$body.append(M.$tooltip);var o=M.$tooltip.find(C.content),i=M.$tooltip.find(C.caret),n=t.$el.offset(),r=t.$el.outerHeight(),l=t.$el.outerWidth(),c=0,a=0,s=0,f=0,d=!1,u=!1,p=i.outerHeight(!0),m=i.outerWidth(!0),g=o.outerHeight(!0),h=o.outerWidth(!0);"right"===t.direction||"left"===t.direction?(u=(g-p)/2,f=-g/2,"right"===t.direction?s=t.margin:"left"===t.direction&&(s=-(h+t.margin))):(d=(h-m)/2,s=-h/2,"bottom"===t.direction?f=t.margin:"top"===t.direction&&(f=-(g+t.margin)));o.css({top:f,left:s}),i.css({top:u,left:d}),t.follow?t.$el.on(W.mouseMove,t,y):(t.match?"right"===t.direction||"left"===t.direction?(a=t.top,"right"===t.direction?c=n.left+l:"left"===t.direction&&(c=n.left)):(c=t.left,"bottom"===t.direction?a=n.top+r:"top"===t.direction&&(a=n.top)):"right"===t.direction||"left"===t.direction?(a=n.top+r/2,"right"===t.direction?c=n.left+l:"left"===t.direction&&(c=n.left)):(c=n.left+l/2,"bottom"===t.direction?a=n.top+r:"top"===t.direction&&(a=n.top)),j(c,a));t.timer=L.startTimer(t.timer,t.delay,function(){M.$tooltip.addClass(H.visible)}),t.$el.one(W.mouseLeave,t,b)}(e)}function b(t){var e=t.data;L.clearTimer(e.timer),w()}function y(t){j(t.pageX,t.pageY)}function j(t,e){M&&M.$tooltip.css({left:t,top:e})}function w(){M&&(M.$el.off([W.mouseMove,W.mouseLeave].join(" ")),M.$tooltip.remove(),M=null)}var t=$.Plugin("tooltip",{widget:!0,defaults:{customClass:"",delay:0,direction:"top",follow:!1,formatter:function(t){return this.data("title")},margin:15,match:!1,theme:"fs-light"},classes:["content","caret","visible","top","bottom","right","left"],methods:{_construct:function(t){this.on(W.mouseEnter,t,e)},_destruct:function(t){w(),this.off(W.namespace)}}}),C=t.classes,H=C.raw,W=t.events,L=t.functions,M=null});