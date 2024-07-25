
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other/GameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlclxcR2FtZURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtJQXNIQSxDQUFDO0lBN0dHLGVBQWU7SUFDRCxvQkFBVyxHQUF6QixVQUEwQixHQUFVLEVBQUUsSUFBUztRQUMzQyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXO0lBQ0csc0JBQWEsR0FBM0IsVUFBNEIsR0FBRyxFQUFFLE1BQU07UUFDbkMsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUM5RCxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNuQjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELFdBQVc7SUFDRyx3QkFBZSxHQUE3QjtRQUNJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDN0IsVUFBVTtTQUNiO2FBQ0ksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUN0QyxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHFDQUFxQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbEc7SUFDTCxDQUFDO0lBRUQsYUFBYTtJQUNDLHNCQUFhLEdBQTNCLFVB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QVM7SUFDVCxtQ0FBTSxDQUFBO0lBQ04sU0FBUztJQUNULG1DQUFNLENBQUE7QUFDVixDQUFDLEVBTFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFLbkI7QUFFRDtJQUFBO0lBR0EsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLDRCQUFRO0FBS3JCLElBQVksUUFHWDtBQUhELFdBQVksUUFBUTtJQUNoQix1Q0FBUSxDQUFBO0lBQ1IsdUNBQVEsQ0FBQTtBQUNaLENBQUMsRUFIVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUduQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZURhdGEge1xuICAgIHB1YmxpYyBzdGF0aWMgc2l6ZVR5cGU6IG51bWJlciA9IDE7XG4gICAgcHVibGljIHN0YXRpYyBub3dHYW1lSUQ6IHN0cmluZyA9IFwiKioqKioqKioqKioqKlwiO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2FtZU5hbWU6IHN0cmluZyA9IFwi5ri45oiP5ZCN5a2XXCI7XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzUGF1c2U6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHB1YmxpYyBzdGF0aWMgc2hvd0dhbWVFdmVudDogRnVuY3Rpb25bXSA9IFtdXG4gICAgcHVibGljIHN0YXRpYyBoaWRlR2FtZUV2ZW50OiBGdW5jdGlvbltdID0gW11cblxuICAgIC8qKiDmlbDnu4TmmK/lkKbljIXlkKvmlbDlgLwgKi9cbiAgICBwdWJsaWMgc3RhdGljIElzQXJyYXlIYXZlKGFyeTogYW55W10sIGl0ZW06IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgaW5kZXggPSBhcnkuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgcmV0dXJuIGluZGV4ID4gLTE7XG4gICAgfVxuXG4gICAgLyoqIOWJjemdouihpembtiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUHJlZml4SW50ZWdlcihudW0sIGxlbmd0aCkge1xuICAgICAgICBmb3IgKHZhciBsZW4gPSAobnVtICsgXCJcIikubGVuZ3RoOyBsZW4gPCBsZW5ndGg7IGxlbiA9IG51bS5sZW5ndGgpIHtcbiAgICAgICAgICAgIG51bSA9IFwiMFwiICsgbnVtO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW07XG4gICAgfVxuXG4gICAgLyoqIOmch+WKqOaViOaenCAqL1xuICAgIHB1YmxpYyBzdGF0aWMgdmlicmF0aW9uRWZmZWN0KCkge1xuICAgICAgICBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgICAgICAvL+iwg+eUqOiLueaenOeahOaWueazlTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJ2aWJyYXRlXCIsIFwiKEkpVlwiLCAyMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOS/neWtmOacrOWcsOaVsOaNriAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc2F2ZUxvY2FsRGF0YShwYXRoOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgICAgICBsZXQgbG9jYWxEYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmdhbWVOYW1lICsgcGF0aCwgbG9jYWxEYXRhKTtcbiAgICB9XG5cbiAgICAvKiog6I635Y+W5pys5Zyw5pWw5o2uICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRMb2NhbERhdGEocGF0aDogc3RyaW5nKTogYW55IHtcbiAgICAgICAgbGV0IG5ld0xvY2FsRGF0YSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmdhbWVOYW1lICsgcGF0aCk7XG4gICAgICAgIGlmIChuZXdMb2NhbERhdGEpIHtcbiAgICAgICAgICAgIGxldCBub3dEYXRhID0gSlNPTi5wYXJzZShuZXdMb2NhbERhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIG5vd0RhdGFcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8qKiBKU+iOt+WPlm7oh7Nt6ZqP5py65pW05pWwLOWMheaLrG4sbSAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tUmFuZ2UobjogbnVtYmVyLCBtOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgYyA9IG0gLSBuICsgMTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGMgKyBuKTtcbiAgICB9XG5cbiAgICAvKiog6I635Y+W5ri45oiP5bmz5Y+wICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRQbGF0Zm9ybSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3eCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIFBsYXRmb3JtLnd4XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUGxhdGZvcm0uaDVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDlpI3liLbmloflrZfliLDnspjotLTmnb8gKi9cbiAgICBwdWJsaWMgc3RhdGljIGNvcHlUZXh0KGNvcHlUZXh0OiBzdHJpbmcgPSAnJykge1xuICAgICAgICBjYy5sb2coXCJjb3B5VGV4dFwiLCBjb3B5VGV4dCk7XG4gICAgICAgIC8vIGlmIChDQ19KU0IpIHtcbiAgICAgICAgLy8gICAgIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XG4gICAgICAgIC8vICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCh0aGlzLl9jbGFzc05hbWUsIFwiY29weVRleHRcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgY29weVRleHQpO1xuICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19JT1MpIHtcbiAgICAgICAgLy8gICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiRGV2aWNlTW9kdWxlXCIsIFwiY29weVRleHQ6XCIsIGNvcHlUZXh0KTtcbiAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoY2Muc3lzLm9zID09PSBjYy5zeXMuT1NfV0lORE9XUyB8fCBjYy5zeXMub3MgPT09IGNjLnN5cy5PU19XSU5SVCkge1xuICAgICAgICAvLyAgICAgICAgIGpzYi5jb3B5VGV4dFRvQ2xpcGJvYXJkKGNvcHlUZXh0KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgbGV0IHRleHRUb0NsaXBib2FyZCA9IGNvcHlUZXh0OyAvL+aWh+acrOWIsOWJqui0tOadv1xuXG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIGlmICh3aW5kb3dbJ2NsaXBib2FyZERhdGEnXSkgeyAvLyDmtY/op4jlmahcbiAgICAgICAgICAgIHdpbmRvd1snY2xpcGJvYXJkRGF0YSddLnNldERhdGEoXCJUZXh0XCIsIHRleHRUb0NsaXBib2FyZCk7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGNvcHlUZXh0ICsgJyc7XG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICBlbC52YWx1ZSA9IGlucHV0O1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcbiAgICAgICAgICAgIGVsLnN0eWxlWydjb250YWluJ10gPSAnc3RyaWN0JztcbiAgICAgICAgICAgIGVsLnN0eWxlWydwb3NpdGlvbiddID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIGVsLnN0eWxlWydsZWZ0J10gPSAnLTk5OTlweCc7XG4gICAgICAgICAgICBlbC5zdHlsZVsnZm9udFNpemUnXSA9ICcxMnB0JzsgLy8gUHJldmVudCB6b29taW5nIG9uIGlPU1xuXG4gICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBnZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIGxldCBvcmlnaW5hbFJhbmdlID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ucmFuZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgICAgIGVsLnNlbGVjdCgpO1xuICAgICAgICAgICAgZWwuc2VsZWN0aW9uU3RhcnQgPSAwO1xuICAgICAgICAgICAgZWwuc2VsZWN0aW9uRW5kID0gaW5wdXQubGVuZ3RoO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScsIGZhbHNlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDbGlwYm9hcmRKUyBlcnIgXCIgKyBlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcblxuICAgICAgICAgICAgaWYgKG9yaWdpbmFsUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKG9yaWdpbmFsUmFuZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9XG59XG5cbmV4cG9ydCBlbnVtIEdhbWVTdGF0ZSB7XG4gICAgd2FpdFN0YXJ0ID0gMCwgcGxheWVyaW5nID0gMSwgZ2FtZU92ZXIgPSAyXG59XG5cbmV4cG9ydCBlbnVtIFBsYXRmb3JtIHtcbiAgICAvKiog572R6aG1ICovXG4gICAgaDUgPSAxLFxuICAgIC8qKiDlvq7kv6EgKi9cbiAgICB3eCA9IDIsXG59XG5cbmV4cG9ydCBjbGFzcyBJdGVtSW5mbyB7XG4gICAgaXRlbUlEOiBudW1iZXJcbiAgICBpdGVtQ291bnQ6IG51bWJlclxufVxuXG5leHBvcnQgZW51bSBJdGVtVHlwZSB7XG4gICAgTlVMTCA9IDAsICAgICAgICAvL+aXoFxuICAgIEdPTEQgPSAxLCAgICAgICAgLy/ph5HluIFcbn0iXX0=