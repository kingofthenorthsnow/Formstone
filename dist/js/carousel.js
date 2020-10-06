/*! formstone v1.4.17 [carousel.js] 2020-10-06 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery","./touch"],e):e(jQuery,Formstone)}(function(u,m){"use strict";function g(){L=u(k.base)}function p(e){e.enabled&&(y.clearTimer(e.autoTimer),e.enabled=!1,e.$subordinate.off(j.update),this.removeClass([q.enabled,q.animated].join(" ")).off(j.namespace),e.$canister.fsTouch("destroy").off(j.namespace).attr("style","").css(H,"none"),e.$items.css({width:"",height:""}).removeClass([q.visible,k.item_previous,k.item_next].join(" ")),e.$images.off(j.namespace),e.$controlItems.off(j.namespace),e.$pagination.html("").off(j.namespace),$(e),e.useMargin?e.$canister.css({marginLeft:""}):e.$canister.css(X,""),e.index=0)}function h(e){e.enabled||(e.enabled=!0,this.addClass(q.enabled),e.$controlItems.on(j.click,e,o),e.$pagination.on(j.click,k.page,e,r),e.$items.on(j.click,e,x),e.$subordinate.on(j.update,e,T),T({data:e},0),e.$canister.fsTouch({axis:"x",pan:!0,swipe:!0}).on(j.panStart,e,l).on(j.pan,e,c).on(j.panEnd,e,d).on(j.swipe,e,b).on(j.focusIn,e,w).css(H,""),f(e),e.$images.on(j.load,e,s),e.autoAdvance&&(e.autoTimer=y.startTimer(e.autoTimer,e.autoTime,function(){!function(e){var t=e.index+1;t>=e.pageCount&&(t=0);v(e,t)}(e)},!0)),i.call(this,e))}function i(e){if(e.enabled){var t,i,a,n,s;if(e.count=e.$items.length,e.count<1)return $(e),void e.$canister.css({height:""});if(this.removeClass(q.animated),e.containerWidth=e.$container.outerWidth(!1),e.visible=function(e){var t=1;{if(e.single)return t;if("array"===u.type(e.show))for(var i in e.show)e.show.hasOwnProperty(i)&&(m.support.matchMedia?e.show[i].mq.matches&&(t=e.show[i].count):e.show[i].width<m.fallbackWidth&&(t=e.show[i].count));else t=e.show}return e.fill&&e.count<t?e.count:t}(e),e.perPage=e.paged?1:e.visible,e.itemMarginLeft=parseInt(e.$items.eq(0).css("marginLeft")),e.itemMarginRight=parseInt(e.$items.eq(0).css("marginRight")),e.itemMargin=e.itemMarginLeft+e.itemMarginRight,isNaN(e.itemMargin)&&(e.itemMargin=0),e.itemWidth=(e.containerWidth-e.itemMargin*(e.visible-1))/e.visible,e.itemHeight=0,e.pageWidth=e.paged?e.itemWidth:e.containerWidth,e.matchWidth)e.canisterWidth=e.single?e.containerWidth:(e.itemWidth+e.itemMargin)*e.count;else for(e.canisterWidth=0,e.$canister.css({width:1e6}),t=0;t<e.count;t++)e.canisterWidth+=e.$items.eq(t).outerWidth(!0);e.$canister.css({width:e.canisterWidth,height:""}),e.$items.css({width:e.matchWidth?e.itemWidth:"",height:""}).removeClass([q.visible,q.item_previous,q.item_next].join(" ")),e.pages=[],e.items=[];var o,r=0,l=0,c=0;for(n=a=0,i=u(),t=0;t<e.count;t++)o=e.$items.eq(t),r=e.matchWidth?e.itemWidth+e.itemMargin:o.outerWidth(!0),l=o.outerHeight(),c=o.position().left,e.items.push({$el:o,width:r,left:e.rtl?c-(e.canisterWidth-r):c}),(i.length&&a+r>e.containerWidth+e.itemMargin||e.paged&&0<t)&&(s=(e.rtl?i.eq(i.length-1):i.eq(0)).position().left,e.pages.push({left:e.rtl?s-(e.canisterWidth-a):s,height:n,width:a,$items:i}),i=u(),a=n=0),i=i.add(o),a+=r,r,n<l&&(n=l),n>e.itemHeight&&(e.itemHeight=n);e.rtl?i.eq(i.length-1):i.eq(0),s=e.canisterWidth-e.containerWidth-(e.rtl?e.itemMarginLeft:e.itemMarginRight),e.pages.push({left:e.rtl?-s:s,height:n,width:a,$items:i}),e.pageCount=e.pages.length,e.paged&&(e.pageCount-=e.count%e.visible),e.pageCount<=0&&(e.pageCount=1),e.maxMove=-e.pages[e.pageCount-1].left,e.autoHeight?e.$canister.css({height:e.pages[0].height}):e.matchHeight&&e.$items.css({height:e.itemHeight});var d="";for(t=0;t<e.pageCount;t++)d+='<button type="button" class="'+q.page+'">'+(t+1)+"</button>";e.$pagination.html(d),e.pageCount<=1?$(e):function(e){e.$controls.addClass(q.visible),e.$controlItems.addClass(q.visible),e.$pagination.addClass(q.visible)}(e),e.$paginationItems=e.$pagination.find(k.page),v(e,e.index,!1),setTimeout(function(){e.$el.addClass(q.animated)},5)}}function f(e){e.$items=e.$canister.children().not(":hidden").addClass(q.item),e.$images=e.$canister.find("img"),e.totalImages=e.$images.length}function t(e,t){e.$images.off(j.namespace),!1!==t&&e.$canister.html(t),e.index=0,f(e),i.call(this,e)}function e(e,t,i,a,n){e.enabled&&(a||y.clearTimer(e.autoTimer),void 0===n&&(n=!0),v(e,t-1,n,i,a))}function a(e){var t=e.index-1;e.infinite&&t<0&&(t=e.pageCount-1),v(e,t)}function n(e){var t=e.index+1;e.infinite&&t>=e.pageCount&&(t=0),v(e,t)}function s(e){var t=e.data;t.resizeTimer=y.startTimer(t.resizeTimer,1,function(){i.call(t.$el,t)})}function o(e){y.killEvent(e);var t=e.data,i=t.index+(u(e.currentTarget).hasClass(q.control_next)?1:-1);y.clearTimer(t.autoTimer),v(t,i)}function r(e){y.killEvent(e);var t=e.data,i=t.$paginationItems.index(u(e.currentTarget));y.clearTimer(t.autoTimer),v(t,i)}function v(e,t,i,a,n){if(t<0&&(t=e.infinite?e.pageCount-1:0),t>=e.pageCount&&(t=e.infinite?0:e.pageCount-1),!(e.count<1)){if(e.pages[t]&&(e.leftPosition=-e.pages[t].left),e.leftPosition=P(e,e.leftPosition),e.useMargin?e.$canister.css({marginLeft:e.leftPosition}):!1===i?(e.$canister.css(H,"none").css(X,"translateX("+e.leftPosition+"px)"),setTimeout(function(){e.$canister.css(H,"")},5)):e.$canister.css(X,"translateX("+e.leftPosition+"px)"),e.$items.removeClass([q.visible,q.item_previous,q.item_next].join(" ")),e.single)for(var s=0,o=e.pages.length;s<o;s++)s===t?e.pages[s].$items.addClass(q.visible).attr("aria-hidden","false"):e.pages[s].$items.not(e.pages[t].$items).addClass(s<t?q.item_previous:q.item_next).attr("aria-hidden","true");else for(s=0;s<e.count;s++){var r=e.rtl?-1:1,l=e.leftPosition*r+e.items[s].left*r,c=l+e.items[s].width,d=e.containerWidth+e.itemMargin+1;-1<=l&&c<=d?e.items[s].$el.addClass(q.visible).attr("aria-hidden","false"):l<0?e.items[s].$el.addClass(q.item_previous).attr("aria-hidden","false"):e.items[s].$el.addClass(q.item_next).attr("aria-hidden","false")}e.autoHeight&&e.$canister.css({height:e.pages[t].height}),!1!==i&&!0!==a&&t!==e.index&&(e.infinite||-1<t&&t<e.pageCount)&&e.$el.trigger(j.update,[t]),e.index=t,e.linked&&!0!==n&&u(e.linked).not(e.$el)[_]("jumpPage",e.index+1,!0,!0),function(e){e.$paginationItems.removeClass(q.active).eq(e.index).addClass(q.active),e.infinite?e.$controlItems.addClass(q.visible):e.pageCount<1?e.$controlItems.removeClass(q.visible):(e.$controlItems.addClass(q.visible),e.index<=0?e.$controlPrevious.removeClass(q.visible):(e.index>=e.pageCount-1||!e.single&&e.leftPosition===e.maxMove)&&e.$controlNext.removeClass(q.visible))}(e)}}function $(e){e.$controls.removeClass(q.visible),e.$controlItems.removeClass(q.visible),e.$pagination.removeClass(q.visible)}function l(e,t){var i=e.data;if(y.clearTimer(i.autoTimer),!i.single){if(i.useMargin)i.leftPosition=parseInt(i.$canister.css("marginLeft"));else{var a=i.$canister.css(X).split(",");i.leftPosition=parseInt(a[4])}if(i.$canister.css(H,"none").css("will-change","transform"),c(e),i.linked&&!0!==t){var n=e.deltaX/i.pageWidth;i.rtl&&(n*=-1),u(i.linked).not(i.$el)[_]("panStart",n)}}i.isTouching=!0}function c(e,t){var i=e.data;if(!i.single&&(i.touchLeft=P(i,i.leftPosition+e.deltaX),i.useMargin?i.$canister.css({marginLeft:i.touchLeft}):i.$canister.css(X,"translateX("+i.touchLeft+"px)"),i.linked&&!0!==t)){var a=e.deltaX/i.pageWidth;i.rtl&&(a*=-1),u(i.linked).not(i.$el)[_]("pan",a)}}function d(e,t){var i=e.data,a=Math.abs(e.deltaX),n=W(i,e),s=!1;if(i.didPan=!1,0==n)s=i.index;else{if(!i.single){var o,r,l=Math.abs(i.touchLeft),c=!1,d=i.rtl?"right":"left";if(e.directionX===d)for(o=0,r=i.pages.length;o<r;o++)c=i.pages[o],l>Math.abs(c.left)+20&&(s=o+1);else for(o=i.pages.length-1,r=0;r<=o;o--)c=i.pages[o],l<Math.abs(c.left)&&(s=o-1)}!1===s&&(s=a<50?i.index:i.index+n)}s!==i.index&&(i.didPan=!0),i.linked&&!0!==t&&u(i.linked).not(i.$el)[_]("panEnd",s),C(i,s)}function b(e,t){var i=e.data,a=W(i,e),n=i.index+a;i.linked&&!0!==t&&u(i.linked).not(i.$el)[_]("swipe",e.directionX),C(i,n)}function C(e,t){e.$canister.css(H,"").css("will-change",""),v(e,t),e.isTouching=!1}function x(e){var t=e.data,i=u(e.currentTarget);if(!t.didPan&&(i.trigger(j.itemClick),t.controller)){var a=t.$items.index(i);T(e,a),t.$subordinate[_]("jumpPage",a+1,!0)}}function w(e){var t=e.data;if(t.enabled&&!t.isTouching){y.clearTimer(t.autoTimer),t.$container.scrollLeft(0);var i,a=u(e.target);a.hasClass(q.item)?i=a:a.parents(k.item).length&&(i=a.parents(k.item).eq(0));for(var n=0;n<t.pageCount;n++)if(t.pages[n].$items.is(i)){v(t,n);break}}}function T(e,t){var i=e.data;if(i.controller){var a=i.$items.eq(t);i.$items.removeClass(q.active),a.addClass(q.active);for(var n=0;n<i.pageCount;n++)if(i.pages[n].$items.is(a)){v(i,n,!0,!0);break}}}function P(e,t){return isNaN(t)?t=0:e.rtl?(t>e.maxMove&&(t=e.maxMove),t<0&&(t=0)):(t<e.maxMove&&(t=e.maxMove),0<t&&(t=0)),t}function W(e,t){return Math.abs(t.deltaX)<Math.abs(t.deltaY)?0:e.rtl?"right"===t.directionX?1:-1:"left"===t.directionX?1:-1}var M=m.Plugin("carousel",{widget:!0,defaults:{autoAdvance:!1,autoHeight:!1,autoTime:8e3,contained:!0,controls:!0,customClass:"",fill:!1,infinite:!1,labels:{next:"Next",previous:"Previous",controls:"Carousel {guid} Controls",pagination:"Carousel {guid} Pagination"},matchHeight:!1,matchWidth:!0,maxWidth:1/0,minWidth:"0px",paged:!1,pagination:!0,rtl:!1,show:1,single:!1,theme:"fs-light",useMargin:!1},classes:["ltr","rtl","viewport","wrapper","container","canister","item","item_previous","item_next","controls","controls_custom","control","control_previous","control_next","pagination","page","animated","enabled","visible","active","auto_height","contained","single"],events:{itemClick:"itemClick",update:"update"},methods:{_construct:function(e){var t;e.didPan=!1,e.carouselClasses=[q.base,e.theme,e.customClass,e.rtl?q.rtl:q.ltr],e.maxWidth=e.maxWidth===1/0?"100000px":e.maxWidth,e.mq="(min-width:"+e.minWidth+") and (max-width:"+e.maxWidth+")",e.customControls="object"===u.type(e.controls)&&e.controls.previous&&e.controls.next,e.customPagination="string"===u.type(e.pagination),e.id=this.attr("id"),e.id?e.ariaId=e.id:(e.ariaId=e.rawGuid,this.attr("id",e.ariaId)),m.support.transform||(e.useMargin=!0);var i="",a="",n=[q.control,q.control_previous].join(" "),s=[q.control,q.control_next].join(" ");e.controls&&!e.customControls&&(e.labels.controls=e.labels.controls.replace("{guid}",e.numGuid),i+='<div class="'+q.controls+'" aria-label="'+e.labels.controls+'" aria-controls="'+e.ariaId+'">',i+='<button type="button" class="'+n+'" aria-label="'+e.labels.previous+'">'+e.labels.previous+"</button>",i+='<button type="button" class="'+s+'" aria-label="'+e.labels.next+'">'+e.labels.next+"</button>",i+="</div>"),e.pagination&&!e.customPagination&&(e.labels.pagination=e.labels.pagination.replace("{guid}",e.numGuid),a+='<div class="'+q.pagination+'" aria-label="'+e.labels.pagination+'" aria-controls="'+e.ariaId+'" role="navigation">',a+="</div>"),e.autoHeight&&e.carouselClasses.push(q.auto_height),e.contained&&e.carouselClasses.push(q.contained),e.single&&e.carouselClasses.push(q.single),this.addClass(e.carouselClasses.join(" ")).wrapInner('<div class="'+q.wrapper+'" aria-live="polite"><div class="'+q.container+'"><div class="'+q.canister+'"></div></div></div>').append(i).wrapInner('<div class="'+q.viewport+'"></div>').append(a),e.$viewport=this.find(k.viewport).eq(0),e.$container=this.find(k.container).eq(0),e.$canister=this.find(k.canister).eq(0),e.$pagination=this.find(k.pagination).eq(0),e.$controlPrevious=e.$controlNext=u(""),e.customControls?(e.$controls=u(e.controls.container).addClass([q.controls,q.controls_custom].join(" ")),e.$controlPrevious=u(e.controls.previous).addClass(n),e.$controlNext=u(e.controls.next).addClass(s)):(e.$controls=this.find(k.controls).eq(0),e.$controlPrevious=e.$controls.find(k.control_previous),e.$controlNext=e.$controls.find(k.control_next)),e.$controlItems=e.$controlPrevious.add(e.$controlNext),e.customPagination&&(e.$pagination=u(e.pagination).addClass([q.pagination])),e.$paginationItems=e.$pagination.find(k.page),e.index=0,e.enabled=!1,e.leftPosition=0,e.autoTimer=null,e.resizeTimer=null;var o=this.data(I+"-linked");e.linked=!!o&&"[data-"+I+'-linked="'+o+'"]',e.linked&&(e.paged=!0);var r=this.data(I+"-controller-for")||"";if(e.$subordinate=u(r),e.$subordinate.length&&(e.controller=!0),"object"===u.type(e.show)){var l=e.show,c=[],d=[];for(t in l)l.hasOwnProperty(t)&&d.push(t);for(t in d.sort(y.sortAsc),d)d.hasOwnProperty(t)&&c.push({width:parseInt(d[t]),count:l[d[t]],mq:window.matchMedia("(min-width: "+parseInt(d[t])+"px)")});e.show=c}f(e),u.fsMediaquery("bind",e.rawGuid,e.mq,{enter:function(){h.call(e.$el,e)},leave:function(){p.call(e.$el,e)}}),g(),e.carouselClasses.push(q.enabled),e.carouselClasses.push(q.animated)},_destruct:function(e){y.clearTimer(e.autoTimer),y.clearTimer(e.resizeTimer),p.call(this,e),u.fsMediaquery("unbind",e.rawGuid),e.id!==e.ariaId&&this.removeAttr("id"),e.$controlItems.removeClass([k.control,q.control_previous,k.control_next,k.visible].join(" ")).off(j.namespace),e.$images.off(j.namespace),e.$canister.fsTouch("destroy"),e.$items.removeClass([q.item,q.visible,k.item_previous,k.item_next].join(" ")).unwrap().unwrap().unwrap().unwrap(),e.controls&&!e.customControls&&e.$controls.remove(),e.customControls&&e.$controls.removeClass([q.controls,q.controls_custom,q.visible].join(" ")),e.pagination&&!e.customPagination&&e.$pagination.remove(),e.customPagination&&e.$pagination.html("").removeClass([q.pagination,q.visible].join(" ")),this.removeClass(e.carouselClasses.join(" ")),g()},_resize:function(e){y.iterate.call(L,i)},disable:p,enable:h,jump:e,previous:a,next:n,jumpPage:e,previousPage:a,nextPage:n,jumpItem:function(e,t,i,a,n){if(e.enabled){y.clearTimer(e.autoTimer);var s=e.$items.eq(t-1);void 0===n&&(n=!0);for(var o=0;o<e.pageCount;o++)if(e.pages[o].$items.is(s)){v(e,o,n,i,a);break}}},reset:function(e){e.enabled&&t.call(this,e,!1)},resize:i,update:t,panStart:function(e,t){if(y.clearTimer(e.autoTimer),!e.single){if(e.rtl&&(t*=-1),e.useMargin)e.leftPosition=parseInt(e.$canister.css("marginLeft"));else{var i=e.$canister.css(X).split(",");e.leftPosition=parseInt(i[4])}e.$canister.css(H,"none"),c({data:e,deltaX:e.pageWidth*t},!0)}e.isTouching=!0},pan:function(e,t){if(!e.single){e.rtl&&(t*=-1);var i=e.pageWidth*t;e.touchLeft=P(e,e.leftPosition+i),e.useMargin?e.$canister.css({marginLeft:e.touchLeft}):e.$canister.css(X,"translateX("+e.touchLeft+"px)")}},panEnd:function(e,t){C(e,t)},swipe:function(e,t){b({data:e,directionX:t},!0)}}}),I=M.namespace,_=M.namespaceClean,k=M.classes,q=k.raw,j=M.events,y=M.functions,L=[],X=m.transform,H=m.transition});