/*


URL POLYFILL


*/

;(function(t){var e=function(){try{return!!Symbol.iterator}catch(e){return false}};var r=e();var n=function(t){var e={next:function(){var e=t.shift();return{done:e===void 0,value:e}}};if(r){e[Symbol.iterator]=function(){return e}}return e};var i=function(e){return encodeURIComponent(e).replace(/%20/g,"+")};var o=function(e){return decodeURIComponent(String(e).replace(/\+/g," "))};var a=function(){var a=function(e){Object.defineProperty(this,"_entries",{writable:true,value:{}});var t=typeof e;if(t==="undefined"){}else if(t==="string"){if(e!==""){this._fromString(e)}}else if(e instanceof a){var r=this;e.forEach(function(e,t){r.append(t,e)})}else if(e!==null&&t==="object"){if(Object.prototype.toString.call(e)==="[object Array]"){for(var n=0;n<e.length;n++){var i=e[n];if(Object.prototype.toString.call(i)==="[object Array]"||i.length!==2){this.append(i[0],i[1])}else{throw new TypeError("Expected [string, any] as entry at index "+n+" of URLSearchParams's input")}}}else{for(var o in e){if(e.hasOwnProperty(o)){this.append(o,e[o])}}}}else{throw new TypeError("Unsupported input's type for URLSearchParams")}};var e=a.prototype;e.append=function(e,t){if(e in this._entries){this._entries[e].push(String(t))}else{this._entries[e]=[String(t)]}};e.delete=function(e){delete this._entries[e]};e.get=function(e){return e in this._entries?this._entries[e][0]:null};e.getAll=function(e){return e in this._entries?this._entries[e].slice(0):[]};e.has=function(e){return e in this._entries};e.set=function(e,t){this._entries[e]=[String(t)]};e.forEach=function(e,t){var r;for(var n in this._entries){if(this._entries.hasOwnProperty(n)){r=this._entries[n];for(var i=0;i<r.length;i++){e.call(t,r[i],n,this)}}}};e.keys=function(){var r=[];this.forEach(function(e,t){r.push(t)});return n(r)};e.values=function(){var t=[];this.forEach(function(e){t.push(e)});return n(t)};e.entries=function(){var r=[];this.forEach(function(e,t){r.push([t,e])});return n(r)};if(r){e[Symbol.iterator]=e.entries}e.toString=function(){var r=[];this.forEach(function(e,t){r.push(i(t)+"="+i(e))});return r.join("&")};t.URLSearchParams=a};var s=function(){try{var e=t.URLSearchParams;return new e("?a=1").toString()==="a=1"&&typeof e.prototype.set==="function"}catch(e){return false}};if(!s()){a()}var c=t.URLSearchParams.prototype;if(typeof c.sort!=="function"){c.sort=function(){var r=this;var n=[];this.forEach(function(e,t){n.push([t,e]);if(!r._entries){r.delete(t)}});n.sort(function(e,t){if(e[0]<t[0]){return-1}else if(e[0]>t[0]){return+1}else{return 0}});if(r._entries){r._entries={}}for(var e=0;e<n.length;e++){this.append(n[e][0],n[e][1])}}}if(typeof c._fromString!=="function"){Object.defineProperty(c,"_fromString",{enumerable:false,configurable:false,writable:false,value:function(e){if(this._entries){this._entries={}}else{var r=[];this.forEach(function(e,t){r.push(t)});for(var t=0;t<r.length;t++){this.delete(r[t])}}e=e.replace(/^\?/,"");var n=e.split("&");var i;for(var t=0;t<n.length;t++){i=n[t].split("=");this.append(o(i[0]),i.length>1?o(i[1]):"")}}})}})(typeof global!=="undefined"?global:typeof window!=="undefined"?window:typeof self!=="undefined"?self:this);(function(u){var e=function(){try{var e=new u.URL("b","http://a");e.pathname="c d";return e.href==="http://a/c%20d"&&e.searchParams}catch(e){return false}};var t=function(){var t=u.URL;var e=function(e,t){if(typeof e!=="string")e=String(e);var r=document,n;if(t&&(u.location===void 0||t!==u.location.href)){r=document.implementation.createHTMLDocument("");n=r.createElement("base");n.href=t;r.head.appendChild(n);try{if(n.href.indexOf(t)!==0)throw new Error(n.href)}catch(e){throw new Error("URL unable to set base "+t+" due to "+e)}}var i=r.createElement("a");i.href=e;if(n){r.body.appendChild(i);i.href=i.href}var o=r.createElement("input");o.type="url";o.value=e;if(i.protocol===":"||!/:/.test(i.href)||!o.checkValidity()&&!t){throw new TypeError("Invalid URL")}Object.defineProperty(this,"_anchorElement",{value:i});var a=new u.URLSearchParams(this.search);var s=true;var c=true;var f=this;["append","delete","set"].forEach(function(e){var t=a[e];a[e]=function(){t.apply(a,arguments);if(s){c=false;f.search=a.toString();c=true}}});Object.defineProperty(this,"searchParams",{value:a,enumerable:true});var h=void 0;Object.defineProperty(this,"_updateSearchParams",{enumerable:false,configurable:false,writable:false,value:function(){if(this.search!==h){h=this.search;if(c){s=false;this.searchParams._fromString(this.search);s=true}}}})};var r=e.prototype;var n=function(t){Object.defineProperty(r,t,{get:function(){return this._anchorElement[t]},set:function(e){this._anchorElement[t]=e},enumerable:true})};["hash","host","hostname","port","protocol"].forEach(function(e){n(e)});Object.defineProperty(r,"search",{get:function(){return this._anchorElement["search"]},set:function(e){this._anchorElement["search"]=e;this._updateSearchParams()},enumerable:true});Object.defineProperties(r,{toString:{get:function(){var e=this;return function(){return e.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(e){this._anchorElement.href=e;this._updateSearchParams()},enumerable:true},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(e){this._anchorElement.pathname=e},enumerable:true},origin:{get:function(){var e={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol];var t=this._anchorElement.port!=e&&this._anchorElement.port!=="";return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(t?":"+this._anchorElement.port:"")},enumerable:true},password:{get:function(){return""},set:function(e){},enumerable:true},username:{get:function(){return""},set:function(e){},enumerable:true}});e.createObjectURL=function(e){return t.createObjectURL.apply(t,arguments)};e.revokeObjectURL=function(e){return t.revokeObjectURL.apply(t,arguments)};u.URL=e};if(!e()){t()}if(u.location!==void 0&&!("origin"in u.location)){var r=function(){return u.location.protocol+"//"+u.location.hostname+(u.location.port?":"+u.location.port:"")};try{Object.defineProperty(u.location,"origin",{get:r,enumerable:true})}catch(e){setInterval(function(){u.location.origin=r()},100)}}})(typeof global!=="undefined"?global:typeof window!=="undefined"?window:typeof self!=="undefined"?self:this);





/*

PROMISE POLYFILL

*/


!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){"use strict";function e(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})}function n(e){return!(!e||"undefined"==typeof e.length)}function t(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],c(e,this)}function r(e,n){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,o._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null!==t){var o;try{o=t(e._value)}catch(r){return void f(n.promise,r)}i(n.promise,o)}else(1===e._state?i:f)(n.promise,e._value)})):e._deferreds.push(n)}function i(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var t=n.then;if(n instanceof o)return e._state=3,e._value=n,void u(e);if("function"==typeof t)return void c(function(e,n){return function(){e.apply(n,arguments)}}(t,n),e)}e._state=1,e._value=n,u(e)}catch(r){f(e,r)}}function f(e,n){e._state=2,e._value=n,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;t>n;n++)r(e,e._deferreds[n]);e._deferreds=null}function c(e,n){var t=!1;try{e(function(e){t||(t=!0,i(n,e))},function(e){t||(t=!0,f(n,e))})}catch(o){if(t)return;t=!0,f(n,o)}}var a=setTimeout;o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,n){var o=new this.constructor(t);return r(this,new function(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}(e,n,o)),o},o.prototype["finally"]=e,o.all=function(e){return new o(function(t,o){function r(e,n){try{if(n&&("object"==typeof n||"function"==typeof n)){var u=n.then;if("function"==typeof u)return void u.call(n,function(n){r(e,n)},o)}i[e]=n,0==--f&&t(i)}catch(c){o(c)}}if(!n(e))return o(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var f=i.length,u=0;i.length>u;u++)r(u,i[u])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(n){n(e)})},o.reject=function(e){return new o(function(n,t){t(e)})},o.race=function(e){return new o(function(t,r){if(!n(e))return r(new TypeError("Promise.race accepts an array"));for(var i=0,f=e.length;f>i;i++)o.resolve(e[i]).then(t,r)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){a(e,0)},o._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"Promise"in l?l.Promise.prototype["finally"]||(l.Promise.prototype["finally"]=e):l.Promise=o});




/*

FETCH API POLYFILL


*/


!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.WHATWGFetch={})}(this,function(t){"use strict";var e={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(e.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],o=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};function n(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function i(t){return"string"!=typeof t&&(t=String(t)),t}function s(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(r[Symbol.iterator]=function(){return r}),r}function a(t){this.map={},t instanceof a?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function h(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function f(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function u(t){var e=new FileReader,r=f(e);return e.readAsArrayBuffer(t),r}function d(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function c(){return this.bodyUsed=!1,this._initBody=function(t){var r;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:e.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:e.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():e.arrayBuffer&&e.blob&&((r=t)&&DataView.prototype.isPrototypeOf(r))?(this._bodyArrayBuffer=d(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):e.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||o(t))?this._bodyArrayBuffer=d(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=h(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(u)}),this.text=function(){var t,e,r,o=h(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=f(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}a.prototype.append=function(t,e){t=n(t),e=i(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},a.prototype.delete=function(t){delete this.map[n(t)]},a.prototype.get=function(t){return t=n(t),this.has(t)?this.map[t]:null},a.prototype.has=function(t){return this.map.hasOwnProperty(n(t))},a.prototype.set=function(t,e){this.map[n(t)]=i(e)},a.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},a.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),s(t)},a.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),s(t)},a.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),s(t)},e.iterable&&(a.prototype[Symbol.iterator]=a.prototype.entries);var l=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function y(t,e){var r,o,n=(e=e||{}).body;if(t instanceof y){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new a(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new a(e.headers)),this.method=(r=e.method||this.method||"GET",o=r.toUpperCase(),l.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function p(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function b(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new a(e.headers),this.url=e.url||"",this._initBody(t)}y.prototype.clone=function(){return new y(this,{body:this._bodyInit})},c.call(y.prototype),c.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new a(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var m=[301,302,303,307,308];b.redirect=function(t,e){if(-1===m.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})},t.DOMException=self.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function w(r,o){return new Promise(function(n,i){var s=new y(r,o);if(s.signal&&s.signal.aborted)return i(new t.DOMException("Aborted","AbortError"));var h=new XMLHttpRequest;function f(){h.abort()}h.onload=function(){var t,e,r={status:h.status,statusText:h.statusText,headers:(t=h.getAllResponseHeaders()||"",e=new a,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}}),e)};r.url="responseURL"in h?h.responseURL:r.headers.get("X-Request-URL");var o="response"in h?h.response:h.responseText;n(new b(o,r))},h.onerror=function(){i(new TypeError("Network request failed"))},h.ontimeout=function(){i(new TypeError("Network request failed"))},h.onabort=function(){i(new t.DOMException("Aborted","AbortError"))},h.open(s.method,s.url,!0),"include"===s.credentials?h.withCredentials=!0:"omit"===s.credentials&&(h.withCredentials=!1),"responseType"in h&&e.blob&&(h.responseType="blob"),s.headers.forEach(function(t,e){h.setRequestHeader(e,t)}),s.signal&&(s.signal.addEventListener("abort",f),h.onreadystatechange=function(){4===h.readyState&&s.signal.removeEventListener("abort",f)}),h.send(void 0===s._bodyInit?null:s._bodyInit)})}w.polyfill=!0,self.fetch||(self.fetch=w,self.Headers=a,self.Request=y,self.Response=b),t.Headers=a,t.Request=y,t.Response=b,t.fetch=w,Object.defineProperty(t,"__esModule",{value:!0})});


function M3U8() {
    var _this = this; // access root scope

    this.ie = navigator.appVersion.toString().indexOf(".NET") > 0;
    this.ios = navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);


    this.start = function(m3u8, options) {

        if (!options)
            options = {};

        var callbacks = {
            progress: null,
            finished: null,
            error: null,
            aborted: null
        }

        var recur; // the recursive download instance to later be initialized. Scoped here so callbakcs can access and manage it.

        function handleCb(key, payload) {
            if (key && callbacks[key])
                callbacks[key](payload);
        }

        if (_this.ios)
            return handleCb("error", "Downloading on IOS is not supported.");

        var startObj = {
            on: function(str, cb) {
                switch (str) {
                    case "progress": {
                        callbacks.progress = cb;
                        break;
                    }
                    case "finished": {
                        callbacks.finished = cb;
                        break;
                    }
                    case "error": {
                        callbacks.error = cb;
                        break;
                    }
                    case "aborted": {
                        callbacks.aborted = cb;
                        break;
                    }
                }

                return startObj;
            },
            abort: function() {
                ;
                recur && (recur.aborted = function() {
                    handleCb("aborted");
                });
            }
        }

        var download = new Promise(function(resolve, reject) {
            var url = new URL(m3u8);

            var req = fetch(m3u8)
                .then(function(d) {
                    return d.text();
                })
                .then(function(d) {

                    var filtered = filter(d.split(/(\r\n|\r|\n)/gi), function(item) {
                        return item.indexOf(".ts") > -1; // select only ts files
                    });

                    var mapped = map(filtered, function(v, i) {
                        if (v.indexOf("http") === 0 || v.indexOf("ftp") === 0) { // absolute url
                            return v;
                        }
                        return url.protocol + "//" + url.host + url.pathname + "/./../" + v; // map ts files into url
                    });

                    if (!mapped.length) {
                        reject("Invalid m3u8 playlist");
                        return handleCb("error", "Invalid m3u8 playlist");
                    }

                    recur = new RecurseDownload(mapped, function(data) {

                        var blob = new Blob(data, {
                            type: "octet/stream"
                        });

                        handleCb("progress", {
                            status: "Processing..."
                        });

                        if (!options.returnBlob) {
                            if (_this.ios) {
                                // handle ios?
                            } else if (_this.ie) {
                                handleCb("progress", {
                                    status: "Sending video to Internet Explorer... this may take a while depending on your device's performance."
                                });
                                window.navigator.msSaveBlob(blob, (options && options.filename) || "video.mp4");
                            } else {
                                handleCb("progress", {
                                    status: "Sending video to browser..."
                                });
                                var a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
                                a.href = URL.createObjectURL(blob);
                                a.download = (options && options.filename) || "video.mp4";
                                a.style.display = "none";
                                document.body.appendChild(a); // Firefox fix
                                a.click();
                                handleCb("finished", {
                                    status: "Successfully downloaded video",
                                    data: blob
                                });
                                resolve(blob);
                            }
                        } else {
                            handleCb("finished", {
                                status: "Successfully downloaded video",
                                data: blob
                            });
                            resolve(blob)
                        }


                    }, 0, []);

                    recur.onprogress = function(obj) {
                        handleCb("progress", obj);
                    }

                })
                .catch(function(err) {
                    handleCb("error", "Something went wrong when downloading m3u8 playlist: " + err);
                });
        });

        return startObj;

    }

    function RecurseDownload(arr, cb, i, data) { // recursively download asynchronously 2 at the time
        var _this = this;

        this.aborted = false;

        recurseDownload(arr, cb, i, data);

        function recurseDownload(arr, cb, i, data) {
            var req = Promise.all([fetch(arr[i]), arr[i + 1] ? fetch(arr[i + 1]) : Promise.resolve()]) // HTTP protocol dictates only TWO requests can be simultaneously performed
                .then(function(d) {
                    return map(filter(d, function(v) {
                        return v && v.blob;
                    }), function(v) {
                        return v.blob();
                    });
                })
                .then(function(d) {
                    return Promise.all(d);
                })
                .then(function(d) {

                    var blobs = map(d, function(v, j) {
                        return new Promise(function(resolve, reject) {
                            var reader = new FileReader();

                            var read = reader.readAsArrayBuffer(new Blob([v], {
                                type: "octet/stream"
                            })); // IE can't read Blob.arrayBuffer :(

                            reader.addEventListener("loadend", function(event) { // event listener, my old friend we meet again... I cenrtainly haven't missed you in place of promise

                                resolve(reader.result);;
                                (_this.onprogress && _this.onprogress({
                                    segment: i + j + 1,
                                    total: arr.length,
                                    percentage: ((i + j + 1) / arr.length * 100).toFixed(3),
                                    downloaded: formatNumber(+reduce(map(data, function(v) {
                                        return v.byteLength;
                                    }), function(t, c) {
                                        return t + c;
                                    }, 0)),
                                    status: "Downloading..."
                                }));
                            });
                        });
                    });

                    Promise.all(blobs).then(function(d) {
                        for (var n = 0; n < d.length; n++) { // polymorphism
                            data.push(d[n]);
                        }

                        var increment = arr[i + 2] ? 2 : 1; // look ahead to see if we can perform 2 requests at the same time again

                        if (_this.aborted) {
                            data = null; // purge data... client side calling of garbage collector isn't possible. I know about opera and ie's garbage collectors but they're not ideal.
                            _this.aborted();
                            return; // exit promise
                        } else if (arr[i + increment]) {

                            setTimeout(function() {
                                recurseDownload(arr, cb, i + increment, data);
                            }, _this.ie ? 500 : 0);
                        } else {
                            cb(data);
                        }
                    });

                })
                .catch(function(err) {
                    ;
                    _this.onerror && _this.onerror("Something went wrong when downloading ts file, nr. " + i + ": " + err);
                });
        }

    }

    function filter(arr, condition) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if (condition(arr[i], i)) {
                result.push(arr[i]);
            }
        }
        return result;
    }

    function map(arr, condition) {
        var result = arr.slice(0);
        for (var i = 0; i < arr.length; i++) {
            result[i] = condition(arr[i], i);
        }
        return result;
    }

    function reduce(arr, condition, start) {
        var result = start;
        arr.forEach(function(v, i) {
            var res = +condition(result, v, i);
            result = res;
        });
        return result;
    }



    function formatNumber(n) {

        var ranges = [{
                divider: 1e18,
                suffix: "EB"
            },
            {
                divider: 1e15,
                suffix: "PB"
            },
            {
                divider: 1e12,
                suffix: "TB"
            },
            {
                divider: 1e9,
                suffix: "GB"
            },
            {
                divider: 1e6,
                suffix: "MB"
            },
            {
                divider: 1e3,
                suffix: "kB"
            }
        ]
        for (var i = 0; i < ranges.length; i++) {
            if (n >= ranges[i].divider) {
                var res = (n / ranges[i].divider).toString()

                return res.toString().split(".")[0] + ranges[i].suffix;
            }
        }
        return n.toString();
    }
}
