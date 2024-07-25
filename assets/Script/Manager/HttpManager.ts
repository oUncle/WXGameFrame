
export default class HttpManager {
    private static _instance: HttpManager = null;

     /**
     * getInstance
     */
    public static getInstance() {
        if (!this._instance) {
            this._instance = new HttpManager();
        }
        return this._instance;
    }

    private httpEvents(xhr, responseHandler) {
        // Simple events
        ['abort', 'error', 'timeout'].forEach(function (eventname) {
            xhr["on" + eventname] = function () {
                responseHandler(xhr.status, eventname);
            }
        })

        // Special event
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                // cc.log("onreadystatechange",xhr.responseType,xhr.response)
                if (xhr.responseType == "text") {
                    responseHandler(xhr.status, xhr.responseText);
                    // cc.log('HttpManager ',xhr.responseText);
                } else {
                    responseHandler(xhr.status, xhr.response);
                    // cc.log('HttpManager ',xhr.response);
                }
            }
        }
    }

    /**
     * httpGet
     */
    public httpGet(url, handler, responseType="text",headers=null, timeout=10000) {
        let xhr = new XMLHttpRequest();
        this.httpEvents(xhr, handler);
        xhr.open("GET", url, true)
        cc.log('HttpManager httpGet'+"url= ",url);
        if (CC_JSB) {
            xhr.setRequestHeader("Accept-Encoding","gzip,deflate");
        }

        if (headers) {
            for (const key in headers) {
                xhr.setRequestHeader(key+"", headers[key]+"");
            }
        }
        
        if (responseType == "text") {
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        } else if (responseType == "json") {
            xhr.setRequestHeader("content-type", "application/json");
        } else if (responseType == "arraybuffer") {
            xhr.setRequestHeader("content-type", "application/octet-stream");
        }

        xhr.timeout = timeout
        xhr.responseType = (responseType as XMLHttpRequestResponseType);

        xhr.send()
    }

    /**
     * httpPost
     */
    public httpPost(url, body, handler, responseType="text",headers=null, timeout=10000) {
        let xhr = new XMLHttpRequest();
        this.httpEvents(xhr, handler);
        xhr.open("POST", url);
        
        cc.log('HttpManager '+"url= ",url,"\nbody =",body);
        if (headers) {
            for (const key in headers) {
                xhr.setRequestHeader(key+"", headers[key]+"");
            }
        }
        
        // if (CC_JSB) {
        //     xhr.setRequestHeader("content-length", body?body.length:0)
        // }
        
        if (responseType == "text") {
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        } else if (responseType == "json") {
            xhr.setRequestHeader("content-type", "application/json");
        } else if (responseType == "arraybuffer") {
            xhr.setRequestHeader("content-type", "application/octet-stream");
        }
        
        xhr.timeout = timeout
        xhr.responseType = (responseType as XMLHttpRequestResponseType);

        xhr.send(body)
    }
}
