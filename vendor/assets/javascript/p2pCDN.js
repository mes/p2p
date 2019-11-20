var P2pCDN=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r,o,i,s,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var c,l=function(e){var t=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"keyval-store",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"keyval";u(this,e),this.storeName=n,this._dbp=new Promise((function(e,r){var o=indexedDB.open(t,1);o.onerror=function(){return r(o.error)},o.onsuccess=function(){return e(o.result)},o.onupgradeneeded=function(){o.result.createObjectStore(n)}}))}return a(e,[{key:"_withIDBStore",value:function(e,t){var n=this;return this._dbp.then((function(r){return new Promise((function(o,i){var s=r.transaction(n.storeName,e);s.oncomplete=function(){return o()},s.onabort=s.onerror=function(){return i(s.error)},t(s.objectStore(n.storeName))}))}))}}]),e}(),n=void 0;function r(){return n||(n=new t),n}return e.Store=t,e.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r(),n=void 0;return t._withIDBStore("readonly",(function(t){n=t.get(e)})).then((function(){return n.result}))},e.set=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r();return n._withIDBStore("readwrite",(function(n){n.put(t,e)}))},e.del=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r();return t._withIDBStore("readwrite",(function(t){t.delete(e)}))},e.clear=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r();return e._withIDBStore("readwrite",(function(e){e.clear()}))},e.keys=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r(),t=[];return e._withIDBStore("readonly",(function(e){(e.openKeyCursor||e.openCursor).call(e).onsuccess=function(){this.result&&(t.push(this.result.key),this.result.continue())}})).then((function(){return t}))},e}({}),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};c=function(){return function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){if(!u&&"function"==typeof s&&s)return s(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};t[a][0].call(l.exports,(function(e){var n=t[a][1][e];return o(n||e)}),l,l.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof s&&s,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function s(){v&&h&&(v=!1,h.length?p=h.concat(p):g=-1,p.length&&a())}function a(){if(!v){var e=i(s);v=!0;for(var t=p.length;t;){for(h=p,p=[];++g<t;)h&&h[g].run();g=-1,t=p.length}h=null,v=!1,function(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,d,f=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(e){l=r}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var h,p=[],v=!1,g=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new u(e,t)),1!==p.length||v||i(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},{}],2:[function(e,t,n){function r(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var o=1e3,i=60*o,s=60*i,a=24*s,u=365.25*a;t.exports=function(e,t){t=t||{};var n=void 0===e?"undefined":d(e);if("string"===n&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*u;case"days":case"day":case"d":return n*a;case"hours":case"hour":case"hrs":case"hr":case"h":return n*s;case"minutes":case"minute":case"mins":case"min":case"m":return n*i;case"seconds":case"second":case"secs":case"sec":case"s":return n*o;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}(e);if("number"===n&&!1===isNaN(e))return t.long?function(e){return r(e,a,"day")||r(e,s,"hour")||r(e,i,"minute")||r(e,o,"second")||e+" ms"}(e):function(e){return e>=a?Math.round(e/a)+"d":e>=s?Math.round(e/s)+"h":e>=i?Math.round(e/i)+"m":e>=o?Math.round(e/o)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},{}],3:[function(e,t,n){function r(e){function t(){if(t.enabled){var e=t,o=+new Date,i=o-(r||o);e.diff=i,e.prev=r,e.curr=o,r=o;for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=n.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var u=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(t,r){if("%%"===t)return t;u++;var o=n.formatters[r];if("function"==typeof o){var i=s[u];t=o.call(e,i),s.splice(u,1),u--}return t})),n.formatArgs.call(e,s),(t.log||n.log||console.log.bind(console)).apply(e,s)}}var r;return t.namespace=e,t.enabled=n.enabled(e),t.useColors=n.useColors(),t.color=function(e){var t,r=0;for(t in e)r=(r<<5)-r+e.charCodeAt(t),r|=0;return n.colors[Math.abs(r)%n.colors.length]}(e),t.destroy=o,"function"==typeof n.init&&n.init(t),n.instances.push(t),t}function o(){var e=n.instances.indexOf(this);return-1!==e&&(n.instances.splice(e,1),!0)}(n=t.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},n.disable=function(){n.enable("")},n.enable=function(e){n.save(e),n.names=[],n.skips=[];var t,r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;for(t=0;t<o;t++)r[t]&&("-"===(e=r[t].replace(/\*/g,".*?"))[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")));for(t=0;t<n.instances.length;t++){var i=n.instances[t];i.enabled=n.enabled(i.namespace)}},n.enabled=function(e){if("*"===e[e.length-1])return!0;var t,r;for(t=0,r=n.skips.length;t<r;t++)if(n.skips[t].test(e))return!1;for(t=0,r=n.names.length;t<r;t++)if(n.names[t].test(e))return!0;return!1},n.humanize=e("ms"),n.instances=[],n.names=[],n.skips=[],n.formatters={}},{ms:2}],4:[function(e,t,n){(function(r){function o(){var e;try{e=n.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG),e}(n=t.exports=e("./debug")).log=function(){return"object"==("undefined"==typeof console?"undefined":d(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},n.formatArgs=function(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+n.humanize(this.diff),t){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,i=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(i=o))})),e.splice(i,0,r)}},n.save=function(e){try{null==e?n.storage.removeItem("debug"):n.storage.debug=e}catch(e){}},n.load=o,n.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.types)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},n.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),n.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],n.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},n.enable(o())}).call(this,e("_process"))},{"./debug":3,_process:1}]},{},[4])(4)},"object"==d(t)&&void 0!==e?e.exports=c():(o=[],void 0===(i="function"==typeof(r=c)?r.apply(t,o):r)||(e.exports=i));a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var f=function(){function e(t){u(this,e),t.verbose?(this.log=y("p2pCDN:ServiceWorkerMiddleware"),this.logDetail=y("p2pCDN:ServiceWorkerMiddleware:detail")):(this.log=function(e){},this.logDetail=function(e){}),this._initServiceWorker(t)}return a(e,[{key:"_initServiceWorker",value:function(e){var t=this,n=navigator.serviceWorker;if(void 0===n||void 0===l)return this.log("Failed to register service worker"),!1;l.set("swConfig",e).then((function(){n.controller?t.log("serviceWorker already registered"):n.register(e.serviceWorker.path,{scope:e.serviceWorker.scope}).then((function(e){t.log("registration successful, scope: %s",e.scope)}),(function(e){t.log("registration failed: %s",e)}))})),this._initListeners()}},{key:"_onRequest",value:function(e,t){var n={hash:e,cb:t};document.dispatchEvent(new CustomEvent("peer:onRequestResource",{detail:n}))}},{key:"_onUpdate",value:function(e){document.dispatchEvent(new CustomEvent("peer:onUpdatePeers",{detail:e}))}},{key:"_onAddedResource",value:function(e){document.dispatchEvent(new CustomEvent("peer:onAddedResource",{detail:e}))}},{key:"_onRemovedResource",value:function(e){document.dispatchEvent(new CustomEvent("peer:onRemovedResource",{detail:e}))}},{key:"_onServiceWorkerMessage",value:function(e){var t=this;if(this.logDetail("received request for: %o",e.data),"addedResource"===e.data.type)this._onAddedResource(e.data.hash);else if("removedResource"===e.data.type)this._onRemovedResource(e.data.hash);else if("request"===e.data.type){this._onRequest(e.data.hash,(function(n){t.logDetail("have received something: %s",n),e.ports[0].postMessage(n)}))}else"heartbeat"===e.data.type?this._sendHeartbeat(e):this.log("cant match request!")}},{key:"_onClientReady",value:function(){this.messageToServiceWorker({type:"status",msg:"ready"})}},{key:"_sendHeartbeat",value:function(e){e.ports[0].postMessage({type:"heartbeat"})}},{key:"_onRequestCache",value:function(e){this.messageToServiceWorker({type:"cache"}).then((function(t){e.detail(t)}))}},{key:"_onRequestResource",value:function(e){var t={type:"resource",resource:e.detail.hash};this.messageToServiceWorker(t).then((function(t){e.detail.cb(t)}))}},{key:"_initListeners",value:function(){void 0!==navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this._onServiceWorkerMessage.bind(this)),document.addEventListener("sw:clientReady",this._onClientReady.bind(this)),document.addEventListener("sw:onRequestCache",this._onRequestCache.bind(this)),document.addEventListener("sw:onRequestResource",this._onRequestResource.bind(this)))}},{key:"messageToServiceWorker",value:function(e){var t=this;return new Promise((function(n,r){if(navigator.serviceWorker&&navigator.serviceWorker.controller){var o=new MessageChannel;o.port1.onmessage=function(e){e.data.error?n(void 0):n(e.data)},t.logDetail("ask service worker for %o",e),navigator.serviceWorker.controller.postMessage(e,[o.port2])}else n(void 0)}))}}]),e}();a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var h=function(){function e(t){u(this,e),t.verbose?(this.log=y("p2pCDN:client-signaling"),this.logDetail=y("p2pCDN:client-signaling:detail")):(this.log=function(e){},this.logDetail=function(e){}),this.mesh=t.channel,this.peerId=t.clientId,this.socket=new m,this._dispatcher(),this.join()}return a(e,[{key:"join",value:function(){this.socket.send(this._getChannel("joined"),{peerId:this.peerId})}},{key:"_getChannel",value:function(e){return this.mesh+"/"+e}},{key:"_dispatcher",value:function(){this.socket.on(this._getChannel("joined"),this._onJoined.bind(this)),this.socket.on(this._getChannel("message/"+this.peerId),this._onMessage.bind(this))}},{key:"_onJoined",value:function(e){var t=e.peerId;this.log("client %s has joined.",t),document.dispatchEvent(new CustomEvent("peer:onNewConnection",{detail:t}))}},{key:"_onMessage",value:function(e){this.logDetail("received message %o from %s",e.message,e.peerId),document.dispatchEvent(new CustomEvent("peer:onSignalingMessage",{detail:{message:e.message,peerId:e.peerId}}))}},{key:"send",value:function(e,t){this.logDetail("send message %o to client %s",t,e),this.socket.sendTo(this._getChannel("message"),e,{peerId:this.peerId,message:t})}}]),e}();a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var p=function(){function e(t){u(this,e),this.config=t,t.verbose?(this.log=y("p2pCDN:peer"),this.logDetail=y("p2pCDN:peer:detail")):(this.log=function(e){},this.logDetail=function(e){}),this.signaling=new h(t),this.serviceWorker=new f(t),this.stunServer={iceServers:[]},t.stunServer&&0!==t.stunServer.iceServers.length&&""!==t.stunServer.iceServers[0].urls&&(this.stunServer=t.stunServer),this.peerId=this.config.clientId,this.peers=[],this.requests=[],this.channel=t.channel,this.pendingResourceRequests={},this.message=Object.freeze({types:{addedResource:1,removedResource:2,startedDownload:3,request:4,chunk:5,response:6},sizes:{type:1,peerId:t.idLength,hash:64,chunkId:8,chunkCount:8,maxData:65536}}),this._registerEvents()}return a(e,[{key:"_updateUI",value:function(){document.dispatchEvent(new CustomEvent("ui:onUpdate",{detail:{peerId:this.peerId,peers:this.peers}}))}},{key:"_updateSW",value:function(){document.dispatchEvent(new CustomEvent("sw:clientReady"))}},{key:"_onAddedResource",value:function(e){this.updatePeers(e.detail,this.message.types.addedResource),this._updateUI()}},{key:"_onRemovedResource",value:function(e){this.updatePeers(e.detail,this.message.types.removedResource),this._updateUI()}},{key:"_onNewConnection",value:function(e){e.detail!==this.peerId&&(this.connectTo(e.detail),this._updateUI())}},{key:"_onRequestResource",value:function(e){var t=e.detail;this.requestResourceFromPeers(t.hash,t.cb)}},{key:"_onSignalingMessage",value:function(e){var t=e.detail;this.receiveSignalMessage(t.peerId,t.message),this._updateUI()}},{key:"_registerEvents",value:function(){document.addEventListener("peer:onAddedResource",this._onAddedResource.bind(this)),document.addEventListener("peer:onRemovedResource",this._onRemovedResource.bind(this)),document.addEventListener("peer:onNewConnection",this._onNewConnection.bind(this)),document.addEventListener("peer:onRequestResource",this._onRequestResource.bind(this)),document.addEventListener("peer:onSignalingMessage",this._onSignalingMessage.bind(this))}},{key:"_getPeerIdx",value:function(e){return this.peers.map((function(e){return e.id})).indexOf(e)}},{key:"_getPeer",value:function(e){for(var t=-1,n=0;n<this.peers.length;n++)if(this.peers[n].id===e){t=n;break}if(t>=0)return this.peers[t]}},{key:"_getRequestId",value:function(e,t){for(var n=-1,r=0;r<this.requests.length;r++)if(this.requests[r].from===e&&this.requests[r].hash===t){n=r;break}return n}},{key:"_getRequest",value:function(e,t){var n=this._getRequestId(e,t);if(n>=0)return this.requests[n]}},{key:"_removeRequest",value:function(e,t){var n=this._getRequestId(e,t);n>=0&&this.requests.splice(n,1)}},{key:"_onLocalSessionCreated",value:function(e,t){var n=this;this.logDetail("local session created: %o",t);var r=this._getPeer(e);void 0!==r.con&&r.con.setLocalDescription(t).then((function(){void 0!==r.con&&(n.logDetail("sending local desc: %o",r.con.localDescription),n.signaling.send(r.id,r.con.localDescription))}))}},{key:"_getStateFor",value:function(e){return e.dataChannel?e.dataChannel.readyState:"connecting"}},{key:"_sendViaDataChannel",value:function(e,t){var n=this._getStateFor(e),r=function t(n){try{if(e.dataChannel.bufferedAmount<=16e6)return void e.dataChannel.send(n);e.requestQueue.push(n),e.dataChannel.bufferedAmountLowThreshold=65536,e.dataChannel.onbufferedamountlow=function(){var n=e.requestQueue.slice();e.requestQueue=[],n.forEach((function(e){return t(e)}))}}catch(e){this.log(e)}};switch(n){case"connecting":this.logDetail("connection not open; queueing: %s",t),e.requestQueue.push(t);break;case"open":r(t),e.requestQueue.size>=1&&(e.requestQueue.forEach((function(e){return r(e)})),e.requestQueue=[]);break;case"closing":this.logDetail("attempted to send message while closing: %s",t);break;case"closed":this.logDetail("attempted to send while connection closed: %s",t)}}},{key:"_sendToPeer",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,o=w(t),i="0".repeat(this.message.sizes.peerId-this.peerId.toString().length)+this.peerId,s=w(i),a=w(n),u=void 0;u=b(r?[o,s,a,r]:[o,s,a]),this._sendViaDataChannel(e,u)}},{key:"_requestPeer",value:function(e,t,n,r){var o=this,i={from:e.id,hash:n,chunks:[],respond:r};this.log("Request resource %s from peer %s",n,e.id),this._sendToPeer(e,t,n),this.requests.push(i),setTimeout((function(){i.respond({error:"Not finished in time"}),o._removeRequest(e.id,n)}),2e4)}},{key:"_addResource",value:function(e,t){if(-1===e.resources.indexOf(t)){e.resources.push(t);var n=e.downloadingResources.indexOf(t);-1!==n&&(this._triggerPendingRequestsFor(e,t),e.downloadingResources.splice(n,1)),this._updateUI()}}},{key:"_addResourcesFrom",value:function(e,t){for(var n=0;n<t.length;n+=1)this._addResource(e,t[n])}},{key:"_startedDownloadFrom",value:function(e,t){this.log("Peer %s started to download resource %s",e.id,t),e.downloadingResources.push(t)}},{key:"_removeResourceFrom",value:function(e,t){var n=e.resources.indexOf(t);-1!==n&&(e.resources.splice(n,1),this._updateUI())}},{key:"_checkCache",value:function(e){var t=this;document.dispatchEvent(new CustomEvent("sw:onRequestCache",{detail:function(n){t.logDetail("cached resources %o",n),n&&n.length>0&&e.dataChannel&&(t.logDetail("update %s about cached resources",e.id),t._sendToPeer(e,t.message.types.addedResource,n[0],w(n.toString())))}}))}},{key:"_abToMessage",value:function(e){var t={type:null,from:null,hash:null,chunkId:null,chunkCount:null,data:null},n=0,r=this.message.sizes.type,o=new Uint8Array(e.slice(n,r));n=r,r+=this.message.sizes.peerId;var i=new Uint8Array(e.slice(n,r));n=r,r+=this.message.sizes.hash;var s=new Uint8Array(e.slice(n,r));if(t.type=parseInt(C(o)),t.from=C(i),t.hash=C(s),t.type===this.message.types.chunk){n=r,r+=this.message.sizes.chunkId;var a=new Uint8Array(e.slice(n,r));n=r,r+=this.message.sizes.chunkCount;var u=new Uint8Array(e.slice(n,r));n=r,t.data=new Uint8Array(e.slice(n)),t.chunkId=parseInt(C(a)),t.chunkCount=parseInt(C(u))}return t.type!==this.message.types.response&&t.type!==this.message.types.addedResource||(n=r,t.data=new Uint8Array(e.slice(n))),t}},{key:"_triggerPendingRequestsFor",value:function(e,t){var n=this.pendingResourceRequests[e.id];if(void 0!==n&&void 0!==n[t]){var r=n[t];this.requestResourceFromPeers(t,r.cb),delete this.pendingResourceRequests[e.id][t]}}},{key:"_handleUpdate",value:function(e,t){var n=this._getPeer(e.from);n?(this.logDetail("updated peer %s with resource %s",e.from,e.hash),t!==this.message.types.addedResource?t!==this.message.types.startedDownload?this._removeResourceFrom(n,e.hash):this._startedDownloadFrom(n,e.hash):this._addResourcesFrom(n,C(e.data).split(","))):this.logDetail("Could not send update to peer")}},{key:"_handleRequest",value:function(e){var t=this;document.dispatchEvent(new CustomEvent("sw:onRequestResource",{detail:{hash:e.hash,cb:function(n){t._handleResponse(e,n)}}}))}},{key:"_handleResponse",value:function(e,t){var n=this._getPeer(e.from);this.log("Sending request %s to peer: %s",e.hash,e.from),void 0===t||t.byteLength<=this.message.sizes.maxData?this._sendToPeer(n,this.message.types.response,e.hash,t):this._sendChunkedToPeer(n,e.hash,t)}},{key:"_handleChunk",value:function(e){var t=this._getRequest(e.from,e.hash),n={};void 0!==t&&(t.chunks.push({id:e.chunkId,data:e.data}),t.chunks.length===e.chunkCount&&(n.data=this._concatMessage(t.chunks),n.from=e.from,n.peerId=this.peerId,this._removeRequest(e.from,e.hash),t.respond(n)))}},{key:"_handleAnswer",value:function(e){var t=this._getRequest(e.from,e.hash);t?(this._removeRequest(e.from,e.hash),e.peerId=this.peerId,t.respond(e)):this.logDetail("error, could not find response!?")}},{key:"_sendChunkedToPeer",value:function(e,t,n){this.logDetail("have to chunk data %s",t);for(var r=this.message.sizes,o=n.byteLength,i=r.maxData-(r.peerId+r.hash+r.type+r.chunkId+r.chunkCount),s=Math.ceil(o/i),a=function(e,t){for(var n=e.toString();n.length<t;)n="0"+n;return n},u=function(e,t,n){return b([w(e),w(t),n])},c=i,l=0,d=0;d<o;d+=i){var f=void 0;f=d<o?new Uint8Array(n.slice(d,c)):new Uint8Array(n.slice(d)),c+=i;var h=u(a(l,r.chunkId),a(s,r.chunkCount),f);this._sendToPeer(e,this.message.types.chunk,t,h),l+=1}this.logDetail("sent chunked data for %s",t)}},{key:"_concatMessage",value:function(e){return this.logDetail("concat message"),e.sort((function(e,t){return e.id<t.id?-1:e.id>t.id?1:0})),b(e.map((function(e){return e.data})))}},{key:"_onDataChannelCreated",value:function(e){var t=this,n=e.dataChannel;this.logDetail("onDataChannelCreated: %o",n),n.binaryType="arraybuffer",n.onopen=function(){t.logDetail("data channel opened"),t._checkCache(e)},n.onclose=function(){t.logDetail("data channel closed")},n.onmessage=function(e){var n=t._abToMessage(e.data),r=t.message.types;switch(t.logDetail("decoded message %o",n),n.type){case r.update:t._handleUpdate(n);break;case r.addedResource:case r.removedResource:case r.startedDownload:t._handleUpdate(n,n.type);break;case r.request:t._handleRequest(n);break;case r.chunk:t._handleChunk(n);break;case r.response:t._handleAnswer(n)}}}},{key:"addPeer",value:function(e){var t={id:e,con:new RTCPeerConnection(this.stunServer),dataChannel:null,resources:[],requestQueue:[],downloadingResources:[]};return this.removePeer(e),this.peers.push(t),t}},{key:"connectTo",value:function(e){var t,n=this,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.logDetail("creating connection as initiator? %s",r),(t=this.addPeer(e)).con.onicecandidate=function(e){n.logDetail("icecandidate event: %o",e),e.candidate&&n.signaling.send(t.id,{type:"candidate",label:e.candidate.sdpMLineIndex,id:e.candidate.sdpMid,sdpMid:e.candidate.sdpMid,sdpMLineIndex:e.candidate.sdpMLineIndex,candidate:e.candidate.candidate})},t.con.oniceconnectionstatechange=function(t){"disconnected"!==t.target.iceConnectionState&&"closed"!==t.target.iceConnectionState||(n.removePeer(e),n.logDetail(t.target.iceConnectionState))},r?(this.logDetail("creating data channel"),t.dataChannel=t.con.createDataChannel("data"),this._onDataChannelCreated(t),this.logDetail("creating an offer"),t.con.createOffer().then((function(e){n._onLocalSessionCreated(t.id,e)}))):t.con.ondatachannel=function(e){n.log("established connection to peer: %s",t.id),t.dataChannel=e.channel,n._onDataChannelCreated(t)}}},{key:"_handleCreateDescriptionError",value:function(e){this.log("Failed to establish peer connection: "+e)}},{key:"receiveSignalMessage",value:function(e,t){var n=this;if(e&&e!==this.peerId){var r=this._getPeer(e);r||(this.connectTo(e,!1),r=this._getPeer(e)),void 0!==r.con&&("offer"===t.type?(this.logDetail("Got offer %o. Sending answer to peer.",t),r.con.setRemoteDescription(t).then((function(){void 0!==r.con&&r.con.createAnswer().then((function(e){n._onLocalSessionCreated(r.id,e)}))})).catch(this._handleCreateDescriptionError)):"answer"===t.type?(this.logDetail("Got answer. %o",t),r.con.setRemoteDescription(t).catch(this._handleCreateDescriptionError)):"candidate"===t.type&&r.con.addIceCandidate(t).then((function(){n.logDetail("Set addIceCandidate successfully %o",t)})).catch((function(e){return n.log("error: %o",e)})))}}},{key:"removePeer",value:function(e){var t=this._getPeerIdx(e);if(t>=0){this.log("remove peer %s",e);var n=this.peers[t].con;this.peers[t].con=null,this.peers.splice(t,1);for(var r=0;r<this.requests.length;){this.requests[r].from===e?(this.logDetail("remove pending request from %s",e),this.requests.splice(r,1)):r+=1}n.close()}}},{key:"updatePeers",value:function(e,t){var n=this;this.peers.length>0&&(this.logDetail("broadcast peers for %s",e),this.peers.forEach((function(r){n._sendToPeer(r,t,e,w(e))})))}},{key:"_currentlyDownloading",value:function(e){return this.peers.filter((function(t){return t.downloadingResources.indexOf(e)>=0}))}},{key:"requestResourceFromPeers",value:function(e,t){this.log("try to find a peer for resource %s",e);var n=this.peers.filter((function(t){return t.resources.indexOf(e)>=0})),r=n.length;if(this.logDetail("found %d peers",r),r>0){var o=n[Math.floor(Math.random()*r)];this._requestPeer(o,this.message.types.request,e,t)}else{var i=Math.floor(Math.random()*r);if((r=(n=this._currentlyDownloading(e)).length)>0){var s=n[i];void 0===this.pendingResourceRequests[s.id]&&(this.pendingResourceRequests[s.id]={}),this.pendingResourceRequests[s.id][e]={cb:t},this.updatePeers(e,this.message.types.startedDownload)}else this.updatePeers(e,this.message.types.startedDownload),t(void 0)}}}]),e}();a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var v=function(){function e(t){u(this,e),this.p2pCDN=t,this.tests={webrtcInitialized:!1},this.maxWaitTime=3e3,this._initListeners()}return a(e,[{key:"testBrowser",value:function(){for(var e in Modernizr)if(Modernizr.hasOwnProperty(e)&&!e)return!1;return void 0!==navigator.serviceWorker}},{key:"webrtcInitialized",value:function(){return this._executeWithRetry(function(){return this.tests.webrtcInitialized}.bind(this))}},{key:"clientConnected",value:function(){return this._executeWithRetry(function(){if(0===this.p2pCDN.peer.peers.length)return!1;var e=this.p2pCDN.peer.peers[0];return"open"===this.p2pCDN.peer._getStateFor(e)}.bind(this))}},{key:"_executeWithRetry",value:function(e){return new Promise(function(t,n){e();if(e())return t(!0);setTimeout((function(){t(e())}),this.maxWaitTime)}.bind(this))}},{key:"_initListeners",value:function(){document.addEventListener("sw:clientReady",function(e){this.tests.webrtcInitialized=!0}.bind(this))}}]),e}();a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var g=function(){function e(t){if(u(this,e),t.clientId&&(this.systemTest=new v(this),this.systemTest.testBrowser())){var n=t.idLength;"all"===t.logLevel?localStorage.debug="*":localStorage.debug="*,-*:detail";var r=n-t.clientId.toString().length;t.clientId=r<0?t.clientId.slice(0,n):"0".repeat(r)+t.clientId,this.peer=new p(t)}}return a(e,[{key:"systemTest",value:function(){return this.systemTest}}]),e}();e.exports=g;a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var m=function(){function e(){u(this,e),this.client=new Faye.Client(window.location.origin+"/faye")}return a(e,[{key:"on",value:function(e,t){this.client.subscribe("/"+e,t)}},{key:"send",value:function(e,t){this.client.publish("/"+e,t)}},{key:"sendTo",value:function(e,t,n){this.client.publish("/"+e+"/"+t,n)}}]),e}();d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function y(e){return"undefined"!=typeof debug?debug(e):function(){}}function C(e){return String.fromCharCode.apply(null,new Uint8Array(e))}function w(e){var t=e;"number"==typeof e&&(t=e.toString());for(var n=new ArrayBuffer(t.length),r=new Uint8Array(n),o=0,i=t.length;o<i;o++)r[o]=t.charCodeAt(o);return n}function b(e){var t=0,n=0;e.forEach((function(e){t+=e.byteLength}));var r=new Uint8Array(t);return e.forEach((function(e){r.set(new Uint8Array(e),n),n+=e.byteLength})),r}!function(e,t,n){function r(e,t){return(void 0===e?"undefined":d(e))===t}function o(e,t){return!!~(""+e).indexOf(t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):R?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e,n,r,o){var s,a,u,c,l="modernizr",d=i("div"),f=function(){var e=t.body;return e||((e=i(R?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(u=i("div")).id=o?o[r]:l+(r+1),d.appendChild(u);return(s=i("style")).type="text/css",s.id="s"+l,(f.fake?f:d).appendChild(s),f.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=l,f.fake&&(f.style.background="",f.style.overflow="hidden",c=_.style.overflow,_.style.overflow="hidden",_.appendChild(f)),a=n(d,e),f.fake?(f.parentNode.removeChild(f),_.style.overflow=c,_.offsetHeight):d.parentNode.removeChild(d),!!a}function a(e){return e.replace(/([A-Z])/g,(function(e,t){return"-"+t.toLowerCase()})).replace(/^ms-/,"-ms-")}function u(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){i[i.error?"error":"log"].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function c(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(a(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+a(t[o])+":"+r+")");return s("@supports ("+(i=i.join(" or "))+") { #modernizr { position: absolute; } }",(function(e){return"absolute"==u(e,null,"position")}))}return n}function l(e){return e.replace(/([a-z])-([a-z])/g,(function(e,t,n){return t+n.toUpperCase()})).replace(/^-/,"")}function f(e,t,s,a){function u(){f&&(delete D.style,delete D.modElem)}if(a=!r(a,"undefined")&&a,!r(s,"undefined")){var d=c(e,s);if(!r(d,"undefined"))return d}for(var f,h,p,v,g,m=["modernizr","tspan","samp"];!D.style&&m.length;)f=!0,D.modElem=i(m.shift()),D.style=D.modElem.style;for(p=e.length,h=0;p>h;h++)if(v=e[h],g=D.style[v],o(v,"-")&&(v=l(v)),D.style[v]!==n){if(a||r(s,"undefined"))return u(),"pfx"!=t||v;try{D.style[v]=s}catch(e){}if(D.style[v]!=g)return u(),"pfx"!=t||v}return u(),!1}function h(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+k.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?f(a,t,o,i):function(e,t,n){var o;for(var i in e)if(e[i]in t)return!1===n?e[i]:r(o=t[e[i]],"function")?h(o,n||t):o;return!1}(a=(e+" "+F.join(s+" ")+s).split(" "),t,n)}function v(e,t){if("object"==(void 0===e?"undefined":d(e)))for(var n in e)E(e,n)&&v(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),o=C[r[0]];if(2==r.length&&(o=o[r[1]]),void 0!==o)return C;t="function"==typeof t?t():t,1==r.length?C[r[0]]=t:(!C[r[0]]||C[r[0]]instanceof Boolean||(C[r[0]]=new Boolean(C[r[0]])),C[r[0]][r[1]]=t),function(e){var t=_.className,n=C._config.classPrefix||"";if(R&&(t=t.baseVal),C._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}C._config.enableClasses&&(t+=" "+n+e.join(" "+n),R?_.className.baseVal=t:_.className=t)}([(t&&0!=t?"":"no-")+r.join("-")]),C._trigger(e,t)}return C}function g(e,t){var n=e.deleteDatabase(t);n.onsuccess=function(){v("indexeddb.deletedatabase",!0)},n.onerror=function(){v("indexeddb.deletedatabase",!1)}}var m=[],y={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){m.push({name:e,fn:t,options:n})},addAsyncTest:function(e){m.push({name:null,fn:e})}},C=function(){};C.prototype=y,C=new C;var w=[];C.addTest("applicationcache","applicationCache"in e),C.addTest("cookies",(function(){try{t.cookie="cookietest=1";var e=-1!=t.cookie.indexOf("cookietest=");return t.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(e){return!1}})),C.addTest("customevent","CustomEvent"in e&&"function"==typeof e.CustomEvent),C.addTest("dataview","undefined"!=typeof DataView&&"getFloat64"in DataView.prototype);var b="Moz O ms Webkit",k=y._config.usePrefixes?b.split(" "):[];y._cssomPrefixes=k;var _=t.documentElement,R="svg"===_.nodeName.toLowerCase(),S={elem:i("modernizr")};C._q.push((function(){delete S.elem}));var D={style:S.elem.style};C._q.unshift((function(){delete D.style}));var F=y._config.usePrefixes?b.toLowerCase().split(" "):[];y._domPrefixes=F,y.testAllProps=p;var T=function(t){var r,o=prefixes.length,i=e.CSSRule;if(void 0===i)return n;if(!t)return!1;if((r=(t=t.replace(/^@/,"")).replace(/-/g,"_").toUpperCase()+"_RULE")in i)return"@"+t;for(var s=0;o>s;s++){var a=prefixes[s];if(a.toUpperCase()+"_"+r in i)return"@-"+a.toLowerCase()+"-"+t}return!1};y.atRule=T;var E,I=y.prefixed=function(e,t,n){return 0===e.indexOf("@")?T(e):(-1!=e.indexOf("-")&&(e=l(e)),t?p(e,t,n):p(e,"pfx"))};!function(){var e={}.hasOwnProperty;E=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),y._l={},y.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),C.hasOwnProperty(e)&&setTimeout((function(){C._trigger(e,C[e])}),0)},y._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout((function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)}),0),delete this._l[e]}},C._q.push((function(){y.addTest=v})),C.addAsyncTest((function(){var t;try{t=I("indexedDB",e)}catch(e){}if(t){var n="modernizr-"+Math.random(),r=t.open(n);r.onerror=function(){r.error&&"InvalidStateError"===r.error.name?v("indexeddb",!1):(v("indexeddb",!0),g(t,n))},r.onsuccess=function(){v("indexeddb",!0),g(t,n)}}else v("indexeddb",!1)})),C.addTest("messagechannel","MessageChannel"in e),C.addTest("postmessage","postMessage"in e),C.addTest("quotamanagement",(function(){var e=I("temporaryStorage",navigator),t=I("persistentStorage",navigator);return!(!e||!t)})),C.addTest("serviceworker","serviceWorker"in navigator);var q=!1;try{q="WebSocket"in e&&2===e.WebSocket.CLOSING}catch(e){}C.addTest("websockets",q),C.addTest("peerconnection",!!I("RTCPeerConnection",e)),C.addTest("datachannel",(function(){if(!C.peerconnection)return!1;for(var t=0,n=F.length;n>t;t++){var r=e[F[t]+"RTCPeerConnection"];if(r)return"createDataChannel"in new r(null)}return!1})),C.addTest("getUserMedia","mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices),function(){var e,t,n,o,i,s;for(var a in m)if(m.hasOwnProperty(a)){if(e=[],(t=m[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(s=e[i].split(".")).length?C[s[0]]=o:(!C[s[0]]||C[s[0]]instanceof Boolean||(C[s[0]]=new Boolean(C[s[0]])),C[s[0]][s[1]]=o),w.push((o?"":"no-")+s.join("-"))}}(),delete y.addTest,delete y.addAsyncTest;for(var x=0;x<C._q.length;x++)C._q[x]();e.Modernizr=C}(window,document)}]);