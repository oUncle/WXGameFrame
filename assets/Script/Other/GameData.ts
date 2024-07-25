

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameData {
    public static sizeType: number = 1;
    public static nowGameID: string = "*************";
    public static gameName: string = "游戏名字";

    public static isPause: boolean = false
    public static showGameEvent: Function[] = []
    public static hideGameEvent: Function[] = []

    /** 数组是否包含数值 */
    public static IsArrayHave(ary: any[], item: any): boolean {
        let index = ary.indexOf(item);
        return index > -1;
    }

    /** 前面补零 */
    public static PrefixInteger(num, length) {
        for (var len = (num + "").length; len < length; len = num.length) {
            num = "0" + num;
        }
        return num;
    }

    /** 震动效果 */
    public static vibrationEffect() {
        if (cc.sys.os === cc.sys.OS_IOS) {
            //调用苹果的方法;
        }
        else if (cc.sys.os === cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "vibrate", "(I)V", 200);
        }
    }

    /** 保存本地数据 */
    public static saveLocalData(path: string, data: any) {
        let localData = JSON.stringify(data);
        cc.sys.localStorage.setItem(this.gameName + path, localData);
    }

    /** 获取本地数据 */
    public static getLocalData(path: string): any {
        let newLocalData = cc.sys.localStorage.getItem(this.gameName + path);
        if (newLocalData) {
            let nowData = JSON.parse(newLocalData);
            return nowData
        }
        return null
    }

    /** JS获取n至m随机整数,包括n,m */
    public static randomRange(n: number, m: number): number {
        let c = m - n + 1;
        return Math.floor(Math.random() * c + n);
    }

    /** 获取游戏平台 */
    public static getPlatform() {
        if (typeof wx !== "undefined") {
            return Platform.wx
        } else {
            return Platform.h5
        }
    }

    /** 复制文字到粘贴板 */
    public static copyText(copyText: string = '') {
        cc.log("copyText", copyText);
        // if (CC_JSB) {
        //     if (cc.sys.os === cc.sys.OS_ANDROID) {
        //         jsb.reflection.callStaticMethod(this._className, "copyText", "(Ljava/lang/String;)V", copyText);
        //     } else if (cc.sys.os === cc.sys.OS_IOS) {
        //         jsb.reflection.callStaticMethod("DeviceModule", "copyText:", copyText);
        //     } else if (cc.sys.os === cc.sys.OS_WINDOWS || cc.sys.os === cc.sys.OS_WINRT) {
        //         jsb.copyTextToClipboard(copyText);
        //     }
        // } else {
        let textToClipboard = copyText; //文本到剪贴板

        let success = false;
        if (window['clipboardData']) { // 浏览器
            window['clipboardData'].setData("Text", textToClipboard);
            success = true;
        }
        else {
            let input = copyText + '';
            const el = document.createElement('textarea');
            el.value = input;
            el.setAttribute('readonly', '');
            el.style['contain'] = 'strict';
            el.style['position'] = 'absolute';
            el.style['left'] = '-9999px';
            el.style['fontSize'] = '12pt'; // Prevent zooming on iOS

            const selection = getSelection();
            let originalRange = null;
            if (selection.rangeCount > 0) {
                originalRange = selection.getRangeAt(0);
            }
            document.body.appendChild(el);
            el.select();
            el.selectionStart = 0;
            el.selectionEnd = input.length;

            try {
                success = document.execCommand('copy', false);
            } catch (err) {
                console.error("ClipboardJS err " + err);
            }

            document.body.removeChild(el);

            if (originalRange) {
                selection.removeAllRanges();
                selection.addRange(originalRange);
            }
        }
        // }
    }
}

export enum GameState {
    waitStart = 0, playering = 1, gameOver = 2
}

export enum Platform {
    /** 网页 */
    h5 = 1,
    /** 微信 */
    wx = 2,
}

export class ItemInfo {
    itemID: number
    itemCount: number
}

export enum ItemType {
    NULL = 0,        //无
    GOLD = 1,        //金币
}