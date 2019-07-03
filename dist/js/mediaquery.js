/*! formstone v1.4.13-1 [mediaquery.js] 2019-07-03 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(a,e){"use strict";function o(){!function(){for(var e in r={unit:s.unit},u)if(u.hasOwnProperty(e))for(var t in l[e])if(l[e].hasOwnProperty(t)){var n="Infinity"===t?1/0:parseInt(t,10),i=-1<e.indexOf("max");l[e][t].matches&&(i?(!r[e]||n<r[e])&&(r[e]=n):(!r[e]||n>r[e])&&(r[e]=n))}}(),n.trigger(c.mqChange,[r])}function h(e){var t=m(e.media),n=d[t],i=e.matches,r=i?c.enter:c.leave;if(n&&(n.active||!n.active&&i)){for(var a in n[r])n[r].hasOwnProperty(a)&&n[r][a].apply(n.mq);n.active=!0}}function m(e){return e.replace(/[^a-z0-9\s]/gi,"").replace(/[_\s]/g,"").replace(/^\s+|\s+$/g,"")}var t=e.Plugin("mediaquery",{utilities:{_initialize:function(e){for(var t in e=e||{},u)u.hasOwnProperty(t)&&(s[t]=e[t]?a.merge(e[t],s[t]):s[t]);for(var n in(s=a.extend(s,e)).minWidth.sort(v.sortDesc),s.maxWidth.sort(v.sortAsc),s.minHeight.sort(v.sortDesc),s.maxHeight.sort(v.sortAsc),u)if(u.hasOwnProperty(n))for(var i in l[n]={},s[n])if(s[n].hasOwnProperty(i)){var r=window.matchMedia("("+u[n]+": "+(s[n][i]===1/0?1e5:s[n][i])+s.unit+")");r.addListener(o),l[n][s[n][i]]=r}o()},state:function(){return r},bind:function(e,t,n){var i=f.matchMedia(t),r=m(i.media);for(var a in d[r]||(d[r]={mq:i,active:!0,enter:{},leave:{}},d[r].mq.addListener(h)),n)n.hasOwnProperty(a)&&d[r].hasOwnProperty(a)&&(d[r][a][e]=n[a]);var o=d[r],s=i.matches;s&&o[c.enter].hasOwnProperty(e)?(o[c.enter][e].apply(i),o.active=!0):!s&&o[c.leave].hasOwnProperty(e)&&(o[c.leave][e].apply(i),o.active=!1)},unbind:function(e,t){if(e)if(t){var n=m(t);d[n]&&(d[n].enter[e]&&delete d[n].enter[e],d[n].leave[e]&&delete d[n].leave[e])}else for(var i in d)d.hasOwnProperty(i)&&(d[i].enter[e]&&delete d[i].enter[e],d[i].leave[e]&&delete d[i].leave[e])}},events:{mqChange:"mqchange"}}),s={minWidth:[0],maxWidth:[1/0],minHeight:[0],maxHeight:[1/0],unit:"px"},c=a.extend(t.events,{enter:"enter",leave:"leave"}),n=e.$window,f=n[0],v=t.functions,r=null,d=[],l={},u={minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height"}});