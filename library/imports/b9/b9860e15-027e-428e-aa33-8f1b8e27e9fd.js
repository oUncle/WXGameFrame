"use strict";
cc._RF.push(module, 'b98604VAn5CjqozjxuOJ+n9', 'GameData');
// Script/Other/GameData.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemType = exports.ItemInfo = exports.Platform = exports.GameState = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameData = /** @class */ (function () {
    function GameData() {
    }
    /** 数组是否包含数值 */
    GameData.IsArrayHave = function (ary, item) {
        var index = ary.indexOf(item);
        return index > -1;
    };
    /** 前面补零 */
    GameData.PrefixInteger = function (num, length) {
        for (var len = (num + "").length; len < length; len = num.length) {
            num = "0" + num;
        }
        return num;
    };
    /** 震动效果 */
    GameData.vibrationEffect = function () {
        if (cc.sys.os === cc.sys.OS_IOS) {
            //调用苹果的方法;
        }
        else if (cc.sys.os === cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "vibrate", "(I)V", 200);
        }
    };
    /** 保存本地数据 */
    GameData.saveLocalData = function (path, data) {
        var localData = JSON.stringify(data);
        cc.sys.localStorage.setItem(this.gameName + path, localData);
    };
    /** 获取本地数据 */
    GameData.getLocalData = function (path) {
        var newLocalData = cc.sys.localStorage.getItem(this.gameName + path);
        if (newLocalData) {
            var nowData = JSON.parse(newLocalData);
            return nowData;
        }
        return null;
    };
    /** JS获取n至m随机整数,包括n,m */
    GameData.randomRange = function (n, m) {
        var c = m - n + 1;
        return Math.floor(Math.random() * c + n);
    };
    /** 获取游戏平台 */
    GameData.getPlatform = function () {
        if (typeof wx !== "undefined") {
            return Platform.wx;
        }
        else {
            return Platform.h5;
        }
    };
    /** 复制文字到粘贴板 */
    GameData.copyText = function (copyText) {
        if (copyText === void 0) { copyText = ''; }
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
        var textToClipboard = copyText; //文本到剪贴板
        var success = false;
        if (window['clipboardData']) { // 浏览器
            window['clipboardData'].setData("Text", textToClipboard);
            success = true;
        }
        else {
            var input = copyText + '';
            var el = document.createElement('textarea');
            el.value = input;
            el.setAttribute('readonly', '');
            el.style['contain'] = 'strict';
            el.style['position'] = 'absolute';
            el.style['left'] = '-9999px';
            el.style['fontSize'] = '12pt'; // Prevent zooming on iOS
            var selection = getSelection();
            var originalRange = null;
            if (selection.rangeCount > 0) {
                originalRange = selection.getRangeAt(0);
            }
            document.body.appendChild(el);
            el.select();
            el.selectionStart = 0;
            el.selectionEnd = input.length;
            try {
                success = document.execCommand('copy', false);
            }
            catch (err) {
                console.error("ClipboardJS err " + err);
            }
            document.body.removeChild(el);
            if (originalRange) {
                selection.removeAllRanges();
                selection.addRange(originalRange);
            }
        }
        // }
    };
    GameData.sizeType = 1;
    GameData.nowGameID = "*************";
    GameData.gameName = "游戏名字";
    GameData.isPause = false;
    GameData.showGameEvent = [];
    GameData.hideGameEvent = [];
    GameData = __decorate([
        ccclass
    ], GameData);
    return GameData;
}());
exports.default = GameData;
var GameState;
(function (GameState) {
    GameState[GameState["waitStart"] = 0] = "waitStart";
    GameState[GameState["playering"] = 1] = "playering";
    GameState[GameState["gameOver"] = 2] = "gameOver";
})(GameState = exports.GameState || (exports.GameState = {}));
var Platform;
(function (Platform) {
    /** 网页 */
    Platform[Platform["h5"] = 1] = "h5";
    /** 微信 */
    Platform[Platform["wx"] = 2] = "wx";
})(Platform = exports.Platform || (exports.Platform = {}));
var ItemInfo = /** @class */ (function () {
    function ItemInfo() {
    }
    return ItemInfo;
}());
exports.ItemInfo = ItemInfo;
var ItemType;
(function (ItemType) {
    ItemType[ItemType["NULL"] = 0] = "NULL";
    ItemType[ItemType["GOLD"] = 1] = "GOLD";
})(ItemType = exports.ItemType || (exports.ItemType = {}));

cc._RF.pop();