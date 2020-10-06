/*! formstone v1.4.17 [touch.js] 2020-10-06 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(X,s){"use strict";function o(e){e.preventManipulation&&e.preventManipulation();var t=e.data,a=e.originalEvent;if(a.type.match(/(up|end|cancel)$/i))d(e);else{if(a.pointerId){var n=!1;for(var i in t.touches)t.touches[i].id===a.pointerId&&(n=!0,t.touches[i].pageX=a.pageX,t.touches[i].pageY=a.pageY);n||t.touches.push({id:a.pointerId,pageX:a.pageX,pageY:a.pageY})}else t.touches=a.touches;a.type.match(/(down|start)$/i)?Y(e):a.type.match(/move$/i)&&p(e)}}function Y(e){var t=e.data,a="undefined"!==X.type(t.touches)&&t.touches.length?t.touches[0]:null;a&&t.$el.off(w.mouseDown),t.touching||(t.startE=e.originalEvent,t.startX=a?a.pageX:e.pageX,t.startY=a?a.pageY:e.pageY,t.startT=(new Date).getTime(),t.scaleD=1,t.passedAxis=!1),t.$links&&t.$links.off(w.click);var n=x(t.scale?w.scaleStart:w.panStart,e,t.startX,t.startY,t.scaleD,0,0,"","");if(t.scale&&t.touches&&2<=t.touches.length){var i=t.touches;t.pinch={startX:f(i[0].pageX,i[1].pageX),startY:f(i[0].pageY,i[1].pageY),startD:m(i[1].pageX-i[0].pageX,i[1].pageY-i[0].pageY)},n.pageX=t.startX=t.pinch.startX,n.pageY=t.startY=t.pinch.startY}t.touching||(t.touching=!0,t.pan&&!a&&D.on(w.mouseMove,t,p).on(w.mouseUp,t,d),s.support.pointer?D.on([w.pointerMove,w.pointerUp,w.pointerCancel].join(" "),t,o):D.on([w.touchMove,w.touchEnd,w.touchCancel].join(" "),t,o),t.$el.trigger(n))}function p(e){var t=e.data,a="undefined"!==X.type(t.touches)&&t.touches.length?t.touches[0]:null,n=a?a.pageX:e.pageX,i=a?a.pageY:e.pageY,s=n-t.startX,o=i-t.startY,p=0<s?"right":"left",c=0<o?"down":"up",r=Math.abs(s)>t.threshold,l=Math.abs(o)>t.threshold;if(!t.passedAxis&&t.axis&&(t.axisX&&l||t.axisY&&r))d(e);else{!t.passedAxis&&(!t.axis||t.axis&&t.axisX&&r||t.axisY&&l)&&(t.passedAxis=!0),t.passedAxis&&(M.killEvent(e),M.killEvent(t.startE));var u=!0,h=x(t.scale?w.scale:w.pan,e,n,i,t.scaleD,s,o,p,c);if(t.scale)if(t.touches&&2<=t.touches.length){var g=t.touches;t.pinch.endX=f(g[0].pageX,g[1].pageX),t.pinch.endY=f(g[0].pageY,g[1].pageY),t.pinch.endD=m(g[1].pageX-g[0].pageX,g[1].pageY-g[0].pageY),t.scaleD=t.pinch.endD/t.pinch.startD,h.pageX=t.pinch.endX,h.pageY=t.pinch.endY,h.scale=t.scaleD,h.deltaX=t.pinch.endX-t.pinch.startX,h.deltaY=t.pinch.endY-t.pinch.startY}else t.pan||(u=!1);u&&t.$el.trigger(h)}}function d(e){var t=e.data,a="undefined"!==X.type(t.touches)&&t.touches.length?t.touches[0]:null,n=a?a.pageX:e.pageX,i=a?a.pageY:e.pageY,s=n-t.startX,o=i-t.startY,p=(new Date).getTime(),c=t.scale?w.scaleEnd:w.panEnd,r=0<s?"right":"left",l=0<o?"down":"up",u=1<Math.abs(s),h=1<Math.abs(o);if(t.swipe&&p-t.startT<t.time&&Math.abs(s)>t.threshold&&(c=w.swipe),t.axis&&(t.axisX&&h||t.axisY&&u)||u||h){t.$links=t.$el.find("a");for(var g=0,d=t.$links.length;g<d;g++)v(t.$links.eq(g),t)}var f=x(c,e,n,i,t.scaleD,s,o,r,l);D.off([w.touchMove,w.touchEnd,w.touchCancel,w.mouseMove,w.mouseUp,w.pointerMove,w.pointerUp,w.pointerCancel].join(" ")),t.$el.trigger(f),t.touches=[],t.scale,a&&(t.touchTimer=M.startTimer(t.touchTimer,5,function(){t.$el.on(w.mouseDown,t,Y)})),t.touching=!1}function v(e,t){e.on(w.click,t,n);var a=X._data(e[0],"events").click;a.unshift(a.pop())}function n(e){M.killEvent(e,!0),e.data.$links.off(w.click)}function x(e,t,a,n,i,s,o,p,c){return X.Event(e,{originalEvent:t,bubbles:!0,pageX:a,pageY:n,scale:i,deltaX:s,deltaY:o,directionX:p,directionY:c})}function f(e,t){return(e+t)/2}function m(e,t){return Math.sqrt(e*e+t*t)}function a(e,t){e.css({"-ms-touch-action":t,"touch-action":t})}var e=!s.window.PointerEvent,t=s.Plugin("touch",{widget:!0,defaults:{axis:!1,pan:!1,scale:!1,swipe:!1,threshold:10,time:50},methods:{_construct:function(e){if(e.touches=[],e.touching=!1,this.on(w.dragStart,M.killEvent),e.swipe&&(e.pan=!0),e.scale&&(e.axis=!1),e.axisX="x"===e.axis,e.axisY="y"===e.axis,s.support.pointer){var t="";!e.axis||e.axisX&&e.axisY?t="none":(e.axisX&&(t+=" pan-y"),e.axisY&&(t+=" pan-x")),a(this,t),this.on(w.pointerDown,e,o)}else this.on(w.touchStart,e,o).on(w.mouseDown,e,Y)},_destruct:function(e){this.off(w.namespace),a(this,"")}},events:{pointerDown:e?"MSPointerDown":"pointerdown",pointerUp:e?"MSPointerUp":"pointerup",pointerMove:e?"MSPointerMove":"pointermove",pointerCancel:e?"MSPointerCancel":"pointercancel"}}),w=t.events,M=t.functions,D=s.$window;w.pan="pan",w.panStart="panstart",w.panEnd="panend",w.scale="scale",w.scaleStart="scalestart",w.scaleEnd="scaleend",w.swipe="swipe"});