"use strict";
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