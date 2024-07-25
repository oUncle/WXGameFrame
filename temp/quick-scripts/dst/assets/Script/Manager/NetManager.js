
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/NetManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0d471vbUopMJqAKcyJ9VfmK', 'NetManager');
// Script/Manager/NetManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NetManager = /** @class */ (function () {
    function NetManager() {
        this._websocket = null;
        this._isNetClose = false;
    }
    NetManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new NetManager();
        }
        return this._instance;
    };
    NetManager.prototype.connect = function () {
        var _this = this;
        this.closeConnect();
        this._websocket = new WebSocket("ws://150.158.50.53:8988");
        this._websocket.binaryType = "arraybuffer";
        this._websocket.onopen = function (evt) {
            cc.log("onMessage: onOpen");
            _this._isNetClose = false;
            // GameEventManager.getInstance().dispathcGameEvent(GameEvent.NET_CLIENT_CONNECT);
            // this.startSendHeartMsg();
        };
        this._websocket.onmessage = function (evt) {
            cc.log('onMessage: ', evt, _this._decode(evt.data));
            // let msgList = this._decode(evt.data);
            // for (let i = 0; i < msgList.length; i++) {
            //     const msg: NetMsgInfo = msgList[i];
            //     // cc.log("onMessage", msg.id)
            //     let msgEx = null;
            //     if (IS_MSG_BYTE) {
            //         msgEx = this.popWaitMsg(msg.requestId);
            //     } else {
            //         msgEx = this.popWaitMsg(msg.id);
            //     }
            //     this._closeNetLoading(msg.id);
            //     // cc.log("lklkkl ",msg.errorCode);
            //     if (msg.errorCode == 0) {
            //         NetEventManager.getInstance().dispatchNetEvent(msg.id, msg.msg, msgEx);
            //     } else {
            //         // let errorText = ErrorCode.datas[msg.errorCode]
            //         let errorText = (<TranslationConfig>TranslationConfigConfig.datas[msg.errorCode]).text;
            //         cc.log("error messageid ", msg.id, " errorcode ", msg.errorCode, "   ", errorText)
            //         NetEventManager.getInstance().dispatchNetErrorEvent(msg.id, msg.errorCode, msgEx);
            //         cc.log("dispatchNetErrorEvent", msg.id, msg.errorCode)
            //         WindowManager.getInstance().showNetErrorTip(msg.errorCode);
            //     }
            // }
        };
    };
    NetManager.prototype.closeConnect = function () {
        this._isNetClose = true;
        if (this._websocket) {
            this._websocket.close();
            delete this._websocket;
            this._websocket = null;
        }
    };
    NetManager.prototype._decode = function (data) {
        var bytes = new Uint8Array(data);
        return bytes;
        var msgList = [];
        var dvb = new DataView(bytes.buffer);
        var id = dvb.getUint16(0, false);
        var requestId = dvb.getUint16(2, false);
        var errorCode = dvb.getUint16(4, false);
        // cc.log("_decode", id, requestId, errorCode)
        // let msg = new NetMsgInfo();
        // msg.id = id;
        // msg.requestId = requestId;
        // msg.errorCode = errorCode;
        // if (bytes.length > 6) {
        //     msg.msg = bytes.subarray(6);
        // } else {
        //     msg.msg = null;
        // }
        // msgList.push(msg);
        // return msgList;
    };
    NetManager._instance = null;
    return NetManager;
}());
exports.default = NetManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxOZXRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFBQTtRQUVZLGVBQVUsR0FBYyxJQUFJLENBQUE7UUFDNUIsZ0JBQVcsR0FBWSxLQUFLLENBQUE7SUFzRnhDLENBQUM7SUFwRmlCLHNCQUFXLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCw0QkFBTyxHQUFQO1FBQUEsaUJBc0NDO1FBckNHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksU0FBUyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFVBQUMsR0FBRztZQUN6QixFQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDNUIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsa0ZBQWtGO1lBQ2xGLDRCQUE0QjtRQUNoQyxDQUFDLENBQUE7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxVQUFDLEdBQUc7WUFDNUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsR0FBRyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7WUFDakQsd0NBQXdDO1lBQ3hDLDZDQUE2QztZQUM3QywwQ0FBMEM7WUFDMUMscUNBQXFDO1lBQ3JDLHdCQUF3QjtZQUN4Qix5QkFBeUI7WUFDekIsa0RBQWtEO1lBQ2xELGVBQWU7WUFDZiwyQ0FBMkM7WUFDM0MsUUFBUTtZQUVSLHFDQUFxQztZQUNyQywwQ0FBMEM7WUFDMUMsZ0NBQWdDO1lBQ2hDLGtGQUFrRjtZQUNsRixlQUFlO1lBQ2YsNERBQTREO1lBQzVELGtHQUFrRztZQUNsRyw2RkFBNkY7WUFDN0YsNkZBQTZGO1lBQzdGLGlFQUFpRTtZQUNqRSxzRUFBc0U7WUFFdEUsUUFBUTtZQUNSLElBQUk7UUFDUixDQUFDLENBQUE7SUFDTCxDQUFDO0lBRU0saUNBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN4QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRU8sNEJBQU8sR0FBZixVQUFnQixJQUFTO1FBQ3JCLElBQUksS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sS0FBSyxDQUFBO1FBQ1osSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWpCLElBQUksR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqQyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4Qyw4Q0FBOEM7UUFFOUMsOEJBQThCO1FBQzlCLGVBQWU7UUFDZiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLDBCQUEwQjtRQUMxQixtQ0FBbUM7UUFDbkMsV0FBVztRQUNYLHNCQUFzQjtRQUN0QixJQUFJO1FBRUoscUJBQXFCO1FBQ3JCLGtCQUFrQjtJQUl0QixDQUFDO0lBdkZjLG9CQUFTLEdBQWUsSUFBSSxDQUFDO0lBd0ZoRCxpQkFBQztDQXpGRCxBQXlGQyxJQUFBO2tCQXpGb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0TWFuYWdlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBOZXRNYW5hZ2VyID0gbnVsbDtcbiAgICBwcml2YXRlIF93ZWJzb2NrZXQ6IFdlYlNvY2tldCA9IG51bGxcbiAgICBwcml2YXRlIF9pc05ldENsb3NlOiBib29sZWFuID0gZmFsc2VcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IE5ldE1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jbG9zZUNvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5fd2Vic29ja2V0ID0gbmV3IFdlYlNvY2tldChcIndzOi8vMTUwLjE1OC41MC41Mzo4OTg4XCIpO1xuICAgICAgICB0aGlzLl93ZWJzb2NrZXQuYmluYXJ5VHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICAgICAgdGhpcy5fd2Vic29ja2V0Lm9ub3BlbiA9IChldnQpID0+IHtcbiAgICAgICAgICAgIGNjLmxvZyhcIm9uTWVzc2FnZTogb25PcGVuXCIpO1xuICAgICAgICAgICAgdGhpcy5faXNOZXRDbG9zZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gR2FtZUV2ZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpLmRpc3BhdGhjR2FtZUV2ZW50KEdhbWVFdmVudC5ORVRfQ0xJRU5UX0NPTk5FQ1QpO1xuICAgICAgICAgICAgLy8gdGhpcy5zdGFydFNlbmRIZWFydE1zZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3dlYnNvY2tldC5vbm1lc3NhZ2UgPSAoZXZ0KSA9PiB7XG4gICAgICAgICAgICBjYy5sb2coJ29uTWVzc2FnZTogJyxldnQsIHRoaXMuX2RlY29kZShldnQuZGF0YSkpXG4gICAgICAgICAgICAvLyBsZXQgbXNnTGlzdCA9IHRoaXMuX2RlY29kZShldnQuZGF0YSk7XG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IG1zZ0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBtc2c6IE5ldE1zZ0luZm8gPSBtc2dMaXN0W2ldO1xuICAgICAgICAgICAgLy8gICAgIC8vIGNjLmxvZyhcIm9uTWVzc2FnZVwiLCBtc2cuaWQpXG4gICAgICAgICAgICAvLyAgICAgbGV0IG1zZ0V4ID0gbnVsbDtcbiAgICAgICAgICAgIC8vICAgICBpZiAoSVNfTVNHX0JZVEUpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgbXNnRXggPSB0aGlzLnBvcFdhaXRNc2cobXNnLnJlcXVlc3RJZCk7XG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgbXNnRXggPSB0aGlzLnBvcFdhaXRNc2cobXNnLmlkKTtcbiAgICAgICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgICAgIC8vICAgICB0aGlzLl9jbG9zZU5ldExvYWRpbmcobXNnLmlkKTtcbiAgICAgICAgICAgIC8vICAgICAvLyBjYy5sb2coXCJsa2xra2wgXCIsbXNnLmVycm9yQ29kZSk7XG4gICAgICAgICAgICAvLyAgICAgaWYgKG1zZy5lcnJvckNvZGUgPT0gMCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBOZXRFdmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5kaXNwYXRjaE5ldEV2ZW50KG1zZy5pZCwgbXNnLm1zZywgbXNnRXgpO1xuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIGxldCBlcnJvclRleHQgPSBFcnJvckNvZGUuZGF0YXNbbXNnLmVycm9yQ29kZV1cbiAgICAgICAgICAgIC8vICAgICAgICAgbGV0IGVycm9yVGV4dCA9ICg8VHJhbnNsYXRpb25Db25maWc+VHJhbnNsYXRpb25Db25maWdDb25maWcuZGF0YXNbbXNnLmVycm9yQ29kZV0pLnRleHQ7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNjLmxvZyhcImVycm9yIG1lc3NhZ2VpZCBcIiwgbXNnLmlkLCBcIiBlcnJvcmNvZGUgXCIsIG1zZy5lcnJvckNvZGUsIFwiICAgXCIsIGVycm9yVGV4dClcbiAgICAgICAgICAgIC8vICAgICAgICAgTmV0RXZlbnRNYW5hZ2VyLmdldEluc3RhbmNlKCkuZGlzcGF0Y2hOZXRFcnJvckV2ZW50KG1zZy5pZCwgbXNnLmVycm9yQ29kZSwgbXNnRXgpO1xuICAgICAgICAgICAgLy8gICAgICAgICBjYy5sb2coXCJkaXNwYXRjaE5ldEVycm9yRXZlbnRcIiwgbXNnLmlkLCBtc2cuZXJyb3JDb2RlKVxuICAgICAgICAgICAgLy8gICAgICAgICBXaW5kb3dNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2hvd05ldEVycm9yVGlwKG1zZy5lcnJvckNvZGUpO1xuXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlQ29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5faXNOZXRDbG9zZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl93ZWJzb2NrZXQpIHtcbiAgICAgICAgICAgIHRoaXMuX3dlYnNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3dlYnNvY2tldDtcbiAgICAgICAgICAgIHRoaXMuX3dlYnNvY2tldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9kZWNvZGUoZGF0YTogYW55KSB7XG4gICAgICAgIGxldCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICAgICAgICByZXR1cm4gYnl0ZXNcbiAgICAgICAgbGV0IG1zZ0xpc3QgPSBbXTtcblxuICAgICAgICBsZXQgZHZiID0gbmV3IERhdGFWaWV3KGJ5dGVzLmJ1ZmZlcik7XG4gICAgICAgIGxldCBpZCA9IGR2Yi5nZXRVaW50MTYoMCwgZmFsc2UpO1xuICAgICAgICBsZXQgcmVxdWVzdElkID0gZHZiLmdldFVpbnQxNigyLCBmYWxzZSk7XG4gICAgICAgIGxldCBlcnJvckNvZGUgPSBkdmIuZ2V0VWludDE2KDQsIGZhbHNlKTtcblxuICAgICAgICAvLyBjYy5sb2coXCJfZGVjb2RlXCIsIGlkLCByZXF1ZXN0SWQsIGVycm9yQ29kZSlcblxuICAgICAgICAvLyBsZXQgbXNnID0gbmV3IE5ldE1zZ0luZm8oKTtcbiAgICAgICAgLy8gbXNnLmlkID0gaWQ7XG4gICAgICAgIC8vIG1zZy5yZXF1ZXN0SWQgPSByZXF1ZXN0SWQ7XG4gICAgICAgIC8vIG1zZy5lcnJvckNvZGUgPSBlcnJvckNvZGU7XG4gICAgICAgIC8vIGlmIChieXRlcy5sZW5ndGggPiA2KSB7XG4gICAgICAgIC8vICAgICBtc2cubXNnID0gYnl0ZXMuc3ViYXJyYXkoNik7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBtc2cubXNnID0gbnVsbDtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIG1zZ0xpc3QucHVzaChtc2cpO1xuICAgICAgICAvLyByZXR1cm4gbXNnTGlzdDtcblxuXG5cbiAgICB9XG59XG4iXX0=