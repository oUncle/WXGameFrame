
export default class NetManager {
    private static _instance: NetManager = null;
    private _websocket: WebSocket = null
    private _isNetClose: boolean = false

    public static getInstance() {
        if (!this._instance) {
            this._instance = new NetManager();
        }
        return this._instance;
    }

    connect() {
        this.closeConnect();
        this._websocket = new WebSocket("ws://150.158.50.53:8988");
        this._websocket.binaryType = "arraybuffer";
        this._websocket.onopen = (evt) => {
            cc.log("onMessage: onOpen");
            this._isNetClose = false;
            // GameEventManager.getInstance().dispathcGameEvent(GameEvent.NET_CLIENT_CONNECT);
            // this.startSendHeartMsg();
        }
        this._websocket.onmessage = (evt) => {
            cc.log('onMessage: ',evt, this._decode(evt.data))
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
        }
    }

    public closeConnect() {
        this._isNetClose = true;
        if (this._websocket) {
            this._websocket.close();
            delete this._websocket;
            this._websocket = null;
        }
    }

    private _decode(data: any) {
        let bytes = new Uint8Array(data);
        return bytes
        let msgList = [];

        let dvb = new DataView(bytes.buffer);
        let id = dvb.getUint16(0, false);
        let requestId = dvb.getUint16(2, false);
        let errorCode = dvb.getUint16(4, false);

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



    }
}
