
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/HttpManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84c7dFVWGBKRKIbVx1LdAAv', 'HttpManager');
// Script/Manager/HttpManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpManager = /** @class */ (function () {
    function HttpManager() {
    }
    /**
    * getInstance
    */
    HttpManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new HttpManager();
        }
        return this._instance;
    };
    HttpManager.prototype.httpEvents = function (xhr, responseHandler) {
        // Simple events
        ['abort', 'error', 'timeout'].forEach(function (eventname) {
            xhr["on" + eventname] = function () {
                responseHandler(xhr.status, eventname);
            };
        });
        // Special event
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                // cc.log("onreadystatechange",xhr.responseType,xhr.response)
                if (xhr.responseType == "text") {
                    responseHandler(xhr.status, xhr.responseText);
                    // cc.log('HttpManager ',xhr.responseText);
                }
                else {
                    responseHandler(xhr.status, xhr.response);
                    // cc.log('HttpManager ',xhr.response);
                }
            }
        };
    };
    /**
     * httpGet
     */
    HttpManager.prototype.httpGet = function (url, handler, responseType, headers, timeout) {
        if (responseType === void 0) { responseType = "text"; }
        if (headers === void 0) { headers = null; }
        if (timeout === void 0) { timeout = 10000; }
        var xhr = new XMLHttpRequest();
        this.httpEvents(xhr, handler);
        xhr.open("GET", url, true);
        cc.log('HttpManager httpGet' + "url= ", url);
        if (CC_JSB) {
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }
        if (headers) {
            for (var key in headers) {
                xhr.setRequestHeader(key + "", headers[key] + "");
            }
        }
        if (responseType == "text") {
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        }
        else if (responseType == "json") {
            xhr.setRequestHeader("content-type", "application/json");
        }
        else if (responseType == "arraybuffer") {
            xhr.setRequestHeader("content-type", "application/octet-stream");
        }
        xhr.timeout = timeout;
        xhr.responseType = responseType;
        xhr.send();
    };
    /**
     * httpPost
     */
    HttpManager.prototype.httpPost = function (url, body, handler, responseType, headers, timeout) {
        if (responseType === void 0) { responseType = "text"; }
        if (headers === void 0) { headers = null; }
        if (timeout === void 0) { timeout = 10000; }
        var xhr = new XMLHttpRequest();
        this.httpEvents(xhr, handler);
        xhr.open("POST", url);
        cc.log('HttpManager ' + "url= ", url, "\nbody =", body);
        if (headers) {
            for (var key in headers) {
                xhr.setRequestHeader(key + "", headers[key] + "");
            }
        }
        // if (CC_JSB) {
        //     xhr.setRequestHeader("content-length", body?body.length:0)
        // }
        if (responseType == "text") {
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        }
        else if (responseType == "json") {
            xhr.setRequestHeader("content-type", "application/json");
        }
        else if (responseType == "arraybuffer") {
            xhr.setRequestHeader("content-type", "application/octet-stream");
        }
        xhr.timeout = timeout;
        xhr.responseType = responseType;
        xhr.send(body);
    };
    HttpManager._instance = null;
    return HttpManager;
}());
exports.default = HttpManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxIdHRwTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBQUE7SUFvR0EsQ0FBQztJQWpHSTs7TUFFRTtJQUNXLHVCQUFXLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFTyxnQ0FBVSxHQUFsQixVQUFtQixHQUFHLEVBQUUsZUFBZTtRQUNuQyxnQkFBZ0I7UUFDaEIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLFNBQVM7WUFDckQsR0FBRyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsR0FBRztnQkFDcEIsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDM0MsQ0FBQyxDQUFBO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFFRixnQkFBZ0I7UUFDaEIsR0FBRyxDQUFDLGtCQUFrQixHQUFHO1lBQ3JCLElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7Z0JBQ3RCLDZEQUE2RDtnQkFDN0QsSUFBSSxHQUFHLENBQUMsWUFBWSxJQUFJLE1BQU0sRUFBRTtvQkFDNUIsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUM5QywyQ0FBMkM7aUJBQzlDO3FCQUFNO29CQUNILGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDMUMsdUNBQXVDO2lCQUMxQzthQUNKO1FBQ0wsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksNkJBQU8sR0FBZCxVQUFl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R0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDckIsR0FBRyxDQUFDLFlBQVksR0FBSSxZQUEyQyxDQUFDO1FBRWhFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEIsQ0FBQztJQWxHYyxxQkFBUyxHQUFnQixJQUFJLENBQUM7SUFtR2pELGtCQUFDO0NBcEdELEFBb0dDLElBQUE7a0JBcEdvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwTWFuYWdlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBIdHRwTWFuYWdlciA9IG51bGw7XG5cbiAgICAgLyoqXG4gICAgICogZ2V0SW5zdGFuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBIdHRwTWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGh0dHBFdmVudHMoeGhyLCByZXNwb25zZUhhbmRsZXIpIHtcbiAgICAgICAgLy8gU2ltcGxlIGV2ZW50c1xuICAgICAgICBbJ2Fib3J0JywgJ2Vycm9yJywgJ3RpbWVvdXQnXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudG5hbWUpIHtcbiAgICAgICAgICAgIHhocltcIm9uXCIgKyBldmVudG5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlSGFuZGxlcih4aHIuc3RhdHVzLCBldmVudG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIFNwZWNpYWwgZXZlbnRcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLHhoci5yZXNwb25zZVR5cGUseGhyLnJlc3BvbnNlKVxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVzcG9uc2VUeXBlID09IFwidGV4dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlSGFuZGxlcih4aHIuc3RhdHVzLCB4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKCdIdHRwTWFuYWdlciAnLHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlSGFuZGxlcih4aHIuc3RhdHVzLCB4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ0h0dHBNYW5hZ2VyICcseGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBodHRwR2V0XG4gICAgICovXG4gICAgcHVibGljIGh0dHBHZXQodXJsLCBoYW5kbGVyLCByZXNwb25zZVR5cGU9XCJ0ZXh0XCIsaGVhZGVycz1udWxsLCB0aW1lb3V0PTEwMDAwKSB7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgdGhpcy5odHRwRXZlbnRzKHhociwgaGFuZGxlcik7XG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSlcbiAgICAgICAgY2MubG9nKCdIdHRwTWFuYWdlciBodHRwR2V0JytcInVybD0gXCIsdXJsKTtcbiAgICAgICAgaWYgKENDX0pTQikge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHQtRW5jb2RpbmdcIixcImd6aXAsZGVmbGF0ZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBoZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5K1wiXCIsIGhlYWRlcnNba2V5XStcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHJlc3BvbnNlVHlwZSA9PSBcInRleHRcIikge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJjb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2VUeXBlID09IFwianNvblwiKSB7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcImNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2VUeXBlID09IFwiYXJyYXlidWZmZXJcIikge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJjb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIik7XG4gICAgICAgIH1cblxuICAgICAgICB4aHIudGltZW91dCA9IHRpbWVvdXRcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IChyZXNwb25zZVR5cGUgYXMgWE1MSHR0cFJlcXVlc3RSZXNwb25zZVR5cGUpO1xuXG4gICAgICAgIHhoci5zZW5kKClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBodHRwUG9zdFxuICAgICAqL1xuICAgIHB1YmxpYyBodHRwUG9zdCh1cmwsIGJvZHksIGhhbmRsZXIsIHJlc3BvbnNlVHlwZT1cInRleHRcIixoZWFkZXJzPW51bGwsIHRpbWVvdXQ9MTAwMDApIHtcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB0aGlzLmh0dHBFdmVudHMoeGhyLCBoYW5kbGVyKTtcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCk7XG4gICAgICAgIFxuICAgICAgICBjYy5sb2coJ0h0dHBNYW5hZ2VyICcrXCJ1cmw9IFwiLHVybCxcIlxcbmJvZHkgPVwiLGJvZHkpO1xuICAgICAgICBpZiAoaGVhZGVycykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaGVhZGVycykge1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleStcIlwiLCBoZWFkZXJzW2tleV0rXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGlmIChDQ19KU0IpIHtcbiAgICAgICAgLy8gICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiY29udGVudC1sZW5ndGhcIiwgYm9keT9ib2R5Lmxlbmd0aDowKVxuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgICAgICBpZiAocmVzcG9uc2VUeXBlID09IFwidGV4dFwiKSB7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcImNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZVR5cGUgPT0gXCJqc29uXCIpIHtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiY29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZVR5cGUgPT0gXCJhcnJheWJ1ZmZlclwiKSB7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcImNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgeGhyLnRpbWVvdXQgPSB0aW1lb3V0XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAocmVzcG9uc2VUeXBlIGFzIFhNTEh0dHBSZXF1ZXN0UmVzcG9uc2VUeXBlKTtcblxuICAgICAgICB4aHIuc2VuZChib2R5KVxuICAgIH1cbn1cbiJdfQ==