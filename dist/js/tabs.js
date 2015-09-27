/*! formstone v0.8.18 [tabs.js] 2015-09-27 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(b){b.mq="(max-width:"+(b.mobileMaxWidth===1/0?"100000px":b.mobileMaxWidth)+")",b.content=this.attr("href"),b.group=this.data(q+"-group"),b.tabClasses=[s.tab,b.rawGuid].join(" "),b.mobileTabClasses=[s.tab,s.tab_mobile,b.rawGuid].join(" "),b.contentClasses=[s.content,b.rawGuid].join(" "),b.$mobileTab=a('<button type="button" class="'+b.mobileTabClasses+'">'+this.text()+"</button>"),b.$content=a(b.content).addClass(b.contentClasses),b.$content.before(b.$mobileTab),this.attr("data-swap-target",b.content).attr("data-swap-group",b.group).addClass(b.tabClasses).on("activate.swap"+b.dotGuid,b,i).on("deactivate.swap"+b.dotGuid,b,j).on("enable.swap"+b.dotGuid,b,k).on("disable.swap"+b.dotGuid,b,l).fsSwap({maxWidth:b.maxWidth,classes:{target:b.dotGuid,enabled:r.enabled,active:r.active,raw:{target:b.rawGuid,enabled:s.enabled,active:s.active}},collapse:!1}),b.$mobileTab.on("click"+b.dotGuid,b,m),a.fsMediaquery("bind",b.rawGuid,b.mq,{enter:function(){n.call(b.$el,b)},leave:function(){o.call(b.$el,b)}})}function e(b){a.fsMediaquery("unbind",b.rawGuid),b.$mobileTab.off(t.namespace).remove(),b.$content.removeClass(s.content),this.removeAttr("data-swap-target").removeData("data-swap-target").removeAttr("data-swap-group").removeData("data-swap-group").removeClass(s.tab).off(t.namespace).fsSwap("destroy")}function f(a){this.fsSwap("activate")}function g(a){this.fsSwap("enable")}function h(a){this.fsSwap("disable")}function i(a){if(!a.originalEvent){var b=a.data,c=0;b.$el.trigger(t.update,[c]),b.$mobileTab.addClass(s.active),b.$content.addClass(s.active)}}function j(a){if(!a.originalEvent){var b=a.data;b.$mobileTab.removeClass(s.active),b.$content.removeClass(s.active)}}function k(a){var b=a.data;b.$mobileTab.addClass(s.enabled),b.$content.addClass(s.enabled)}function l(a){var b=a.data;b.$mobileTab.removeClass(s.enabled),b.$content.removeClass(s.enabled)}function m(a){a.data.$el.fsSwap("activate")}function n(a){a.$el.addClass(s.mobile),a.$mobileTab.addClass(s.mobile)}function o(a){a.$el.removeClass(s.mobile),a.$mobileTab.removeClass(s.mobile)}var p=b.Plugin("tabs",{widget:!0,defaults:{customClass:"",maxWidth:1/0,mobileMaxWidth:"740px",vertical:!1},classes:["tab","tab_mobile","mobile","content","enabled","active"],events:{update:"update"},methods:{_construct:d,_destruct:e,activate:f,enable:g,disable:h}}),q=p.namespace,r=p.classes,s=r.raw,t=p.events;p.functions}(jQuery,Formstone);