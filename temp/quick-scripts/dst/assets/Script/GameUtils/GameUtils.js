
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameUtils/GameUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ec6cPplIBD0rTkPhHsFchV', 'GameUtils');
// Script/GameUtils/GameUtils.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AutoReleaseSpineModify_1 = require("../Common/AutoReleaseSpineModify");
var LZString = require("./lzstring");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameUtils = /** @class */ (function () {
    function GameUtils() {
    }
    GameUtils_1 = GameUtils;
    GameUtils.getInstance = function () {
        if (!this._instance) {
            this._instance = new GameUtils_1();
        }
        return this._instance;
    };
    GameUtils.prototype.setVisible = function (node, visible) {
        if (node) {
            if (node.node) {
                node.node.active = visible;
            }
            else {
                node.active = visible;
            }
        }
    };
    GameUtils.prototype.setCCCNodeOpacity = function (node, value) {
        if (node) {
            node.opacity = value;
        }
    };
    GameUtils.prototype.isVisible = function (node) {
        if (node) {
            if (node.node) {
                return node.node.active;
            }
            else {
                return node.active;
            }
            return false;
        }
    };
    GameUtils.prototype.setPosition = function (node, pos) {
        if (node && pos) {
            if (node.node) {
                node.node.setPosition(pos);
            }
            else {
                node.setPosition(pos);
            }
        }
    };
    GameUtils.prototype.setRotation = function (node, rotation) {
        if (rotation === void 0) { rotation = 0; }
        if (node) {
            node.rotation = rotation;
        }
    };
    GameUtils.prototype.setAngle = function (node, angle) {
        if (angle === void 0) { angle = 0; }
        if (node) {
            node.angle = angle;
        }
    };
    GameUtils.prototype.setScaleX = function (node, scaleX) {
        if (node && scaleX) {
            if (node.node) {
                node.node.scaleX = scaleX;
            }
            else {
                node.scaleX = scaleX;
            }
        }
    };
    GameUtils.prototype.setColor = function (node, color) {
        if (node && color) {
            if (node.node) {
                node.node.color = color;
            }
            else {
                node.scaleX = color;
            }
        }
    };
    GameUtils.prototype.getPosition = function (node) {
        if (node) {
            return node.getPosition();
        }
        return cc.v2(0, 0);
    };
    GameUtils.prototype.setProgress = function (node, progress) {
        //原来条件是：node && node.progress ，node.progress为0，则为false
        if (node) {
            node.progress = progress;
        }
    };
    GameUtils.prototype.setString = function (label, text) {
        // cc.log(new Error().stack);
        // cc.log(text);
        if (label) {
            label.string = text + "" || "";
        }
    };
    GameUtils.prototype.getString = function (label) {
        if (label) {
            return label.string;
        }
        return "";
    };
    //判断非法字符
    GameUtils.prototype.isHaveSpecial = function (text) {
        var reg = /^(\w|[\u4E00-\u9FA5])*$/;
        // let reg = /^([a-zA-Z0-9]|[\u4E00-\u9FA5])*$/;
        if (text.match(reg)) {
            return false;
        }
        else {
            return true;
        }
    };
    GameUtils.prototype.setCCCNodeColor = function (cccNode, color, isChild) {
        if (isChild === void 0) { isChild = true; }
        if (!cccNode) {
            return;
        }
        this._setColor(cccNode, color);
        if (isChild) {
            var children = cccNode.children;
            if (!children || children.length <= 0)
                return;
            for (var i = 0; i < children.length; i++) {
                this.setCCCNodeColor(children[i], color, isChild);
            }
        }
    };
    GameUtils.prototype._setColor = function (cccNode, color) {
        if (cccNode) {
            if (typeof color == "string") {
                cccNode.color = this.getColorRGBA(color);
            }
            else {
                cccNode.color = color;
            }
        }
    };
    GameUtils.prototype.getColorRGBA = function (colorString) {
        var colorValueList = [];
        if (!colorString) { //默认为白色
            colorString = "#ffffff";
        }
        if (colorString[0] != '#') {
            colorString = '#' + colorString;
        }
        if (colorString.length < 9) {
            colorString += "ff";
        }
        for (var i = 1; i < 9; i += 2) {
            colorValueList.push(parseInt("0x" + colorString.slice(i, i + 2)));
        }
        var color = cc.color(colorValueList[0], colorValueList[1], colorValueList[2], colorValueList[3]);
        return color;
    };
    GameUtils.prototype.setCCCNodeGray = function (node, isGray, isChild) {
        if (isChild === void 0) { isChild = true; }
        if (!node) {
            return;
        }
        var cccNode = null;
        if (node instanceof cc.Component) {
            cccNode = node.node;
        }
        else {
            cccNode = node;
        }
        if (!cccNode) {
            return;
        }
        var spr = cccNode.getComponent(cc.Sprite);
        if (spr) {
            this.setCCCSpriteGray(spr, isGray, false);
        }
        var label = cccNode.getComponent(cc.Label);
        if (label) {
            this.setCCCLabelGray(label, isGray, false);
        }
        var button = cccNode.getComponent(cc.Button);
        if (button) {
            this.setButtonGray(button, isGray, false);
        }
        if (isChild) {
            var children = cccNode.children;
            if (!children || children.length <= 0)
                return;
            for (var i = 0; i < children.length; i++) {
                this.setCCCNodeGray(children[i], isGray, isChild);
            }
        }
    };
    GameUtils.prototype.setCCCSpriteGray = function (sprite, isGray, isChild) {
        if (isChild === void 0) { isChild = true; }
        if (!sprite) {
            return;
        }
        // sprite.setState(isGray ? 1 : 0);//升级到2.1.2后 废弃了
        //以下为2.1.2版本
        var mat = null;
        if (isGray) {
            mat = cc.Material.getBuiltinMaterial('2d-gray-sprite');
        }
        else {
            mat = cc.Material.getBuiltinMaterial('2d-sprite');
        }
        sprite.setMaterial(0, mat);
        //---
        if (isChild) {
            var children = sprite.node.children;
            if (!children || children.length <= 0)
                return;
            for (var i = 0; i < children.length; i++) {
                this.setCCCSpriteGray(children[i].getComponent(cc.Sprite), isGray, isChild);
            }
        }
    };
    GameUtils.prototype.setCCCLabelGray = function (label, isGray, isChild) {
        if (isChild === void 0) { isChild = true; }
        if (!label) {
            return;
        }
        // sprite.setState(isGray ? 1 : 0);//升级到2.1.2后 废弃了
        //以下为2.1.2版本
        var mat = null;
        if (isGray) {
            mat = cc.Material.getBuiltinMaterial('2d-gray-sprite');
        }
        else {
            mat = cc.Material.getBuiltinMaterial('2d-sprite');
        }
        label.setMaterial(0, mat);
        //---
        if (isChild) {
            var children = label.node.children;
            if (!children || children.length <= 0)
                return;
            for (var i = 0; i < children.length; i++) {
                this.setCCCLabelGray(children[i].getComponent(cc.Label), isGray, isChild);
            }
        }
    };
    GameUtils.prototype.setButtonGray = function (button, isGray, isChild) {
        if (isGray === void 0) { isGray = true; }
        if (isChild === void 0) { isChild = true; }
        if (button) {
            button.interactable = !isGray;
            button.enableAutoGrayEffect = true;
            if (isChild) {
                var children = button.node.children;
                for (var i = 0; i < children.length; i++) {
                    var child = children[i];
                    this.setCCCNodeGray(child, isGray, isChild);
                }
            }
        }
    };
    /**
     * 判断该日期是否到期 time 时间戳(毫秒)
     */
    GameUtils.prototype.checkTimeISOverDue = function (time) {
        var date = new Date();
        var nowTime = date.getTime();
        return nowTime - time >= 0;
    };
    GameUtils.prototype.isNull = function (obj) {
        return obj === null || obj === undefined;
    };
    GameUtils.prototype.replaceString = function (text, args) {
        if (args === void 0) { args = []; }
        if (!text) {
            return "";
        }
        var result = text;
        if (!this.isNull(args) && args.length > 0) {
            for (var i = 0; i < args.length; i++) {
                var re = new RegExp('\\{' + (i) + '\\}', 'gm');
                result = result.replace(re, args[i]);
            }
        }
        return result;
    };
    GameUtils.prototype.getChildByName = function (node, name, component) {
        if (component === void 0) { component = null; }
        var temp = null;
        if (node) {
            temp = node.getChildByName(name);
            if (!temp) {
                var children = node.children;
                for (var i = 0; i < children.length; ++i) {
                    temp = this.getChildByName(children[i], name);
                    if (temp) {
                        if (component) {
                            return temp.getComponent(component);
                        }
                        return temp;
                    }
                }
            }
        }
        return temp;
    };
    GameUtils.prototype.getCompressString = function (str) {
        if (!str) {
            return "";
        }
        return LZString.compressToBase64(str);
    };
    GameUtils.prototype.getDecompressString = function (compressString) {
        if (!compressString) {
            return "";
        }
        return LZString.decompressFromBase64(compressString);
    };
    //读取英雄动画换皮
    GameUtils.prototype.loadGeneralAnimation = function (spine, spineModifyList) {
        if (spineModifyList === void 0) { spineModifyList = null; }
        return __awaiter(this, void 0, void 0, function () {
            var i, smd;
            return __generator(this, function (_a) {
                if (spineModifyList && spineModifyList.length > 0) {
                    for (i = 0; i < spineModifyList.length; i++) {
                        smd = spineModifyList[i];
                        this.modifySpineAttachment(spine, smd.slotName, smd.sfPath);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    GameUtils.prototype.modifySpineAttachment = function (spo, slotName, sfPath) {
        if (!spo || !slotName || !sfPath) {
            cc.error("modifySpineAttachment args err");
            return;
        }
        cc.resources.load(sfPath, cc.SpriteFrame, function (err, sf) {
            if (!err !== null && err !== undefined) {
                console.error("loadSpineSF " + sfPath + " error:", err);
                return;
            }
            spo.changeSlotSkin(slotName, sf);
            var autoCom = spo.getComponent(AutoReleaseSpineModify_1.default);
            if (spo && !autoCom) {
                autoCom = spo.addComponent(AutoReleaseSpineModify_1.default);
            }
            autoCom.addModifySF(sf);
        });
    };
    /**
    * 局部换皮肤，可以更换皮肤指定的部位。非常nice！
    * @param spine 要替换的spine动画
    * @param skinName 要替换的部件皮肤名称
    * @param slotName 要替换的部件的插槽名称
    * @param targetAttaName  Spine中皮肤占位符的名字
     */
    GameUtils.prototype.changeSlot = function (spine, skinName, slotName, targetAttaName) {
        //查找局部皮肤
        var skeletonData = spine.skeletonData.getRuntimeData();
        var targetSkin = skeletonData.findSkin(skinName);
        if (!targetSkin) {
            cc.warn("找不到这个皮肤:", skinName);
            return;
        }
        //查找局部皮肤下的插槽与附件
        var targetSkinSlotIndex = skeletonData.findSlotIndex(slotName);
        var atta = targetSkin.getAttachment(targetSkinSlotIndex, targetAttaName);
        //查找全身皮肤下的插槽
        var curSlot = spine.findSlot(slotName);
        //替换全身皮肤插槽的附件
        curSlot && curSlot.setAttachment(atta);
    };
    var GameUtils_1;
    GameUtils._instance = null;
    GameUtils = GameUtils_1 = __decorate([
        ccclass
    ], GameUtils);
    return GameUtils;
}());
exports.default = GameUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lVXRpbHNcXEdhbWVVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJFQUFzRTtBQUV0RSxxQ0FBdUM7QUFFakMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtJQWtZQSxDQUFDO2tCQWxZb0IsU0FBUztJQUdaLHFCQUFXLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQVMsRUFBRSxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFTSw4QkFBVSxHQUFqQixVQUFrQixJQUFtQixFQUFFLE9BQWdCO1FBQ25ELElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQzthQUM5QjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQzthQUN6QjtTQUNKO0lBQ0wsQ0FBQztJQUVNLHFDQUFpQixHQUF4QixVQUF5QixJQUFhLEVBQUUsS0FBYTtRQUNqRCxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVNLDZCQUFTLEdBQWhCLFVBQWlCLElBQW1CO1FBQ2hDLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7YUFDMUI7aUJBQU07Z0JBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxD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VSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQzdCLE9BQU07U0FDVDtRQUVELGVBQWU7UUFDZixJQUFJLG1CQUFtQixHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0QsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV6RSxZQUFZO1FBQ1osSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2QyxhQUFhO1FBQ2IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7SUEvWGMsbUJBQVMsR0FBYyxJQUFJLENBQUM7SUFGMUIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWtZN0I7SUFBRCxnQkFBQztDQWxZRCxBQWtZQyxJQUFBO2tCQWxZb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEF1dG9SZWxlYXNlU3BpbmVNb2RpZnkgZnJvbSAnLi4vQ29tbW9uL0F1dG9SZWxlYXNlU3BpbmVNb2RpZnknO1xuaW1wb3J0IFNwaW5lTWFuYWdlciBmcm9tICcuLi9NYW5hZ2VyL1NwaW5lTWFuYWdlcic7XG5pbXBvcnQgTFpTdHJpbmcgPSByZXF1aXJlKCcuL2x6c3RyaW5nJylcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVVdGlscyB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEdhbWVVdGlscyA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBHYW1lVXRpbHMge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBHYW1lVXRpbHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFZpc2libGUobm9kZTogY2MuTm9kZSB8IGFueSwgdmlzaWJsZTogYm9vbGVhbikge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGUubm9kZS5hY3RpdmUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q0NDTm9kZU9wYWNpdHkobm9kZTogY2MuTm9kZSwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaXNWaXNpYmxlKG5vZGU6IGNjLk5vZGUgfCBhbnkpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5ub2RlLmFjdGl2ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5hY3RpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UG9zaXRpb24obm9kZTogY2MuTm9kZSB8IGFueSwgcG9zOiBjYy5WZWMyKSB7XG4gICAgICAgIGlmIChub2RlICYmIHBvcykge1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGUubm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Um90YXRpb24obm9kZTogY2MuTm9kZSwgcm90YXRpb246IG51bWJlciA9IDApIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRBbmdsZShub2RlOiBjYy5Ob2RlLCBhbmdsZTogbnVtYmVyID0gMCkge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgbm9kZS5hbmdsZSA9IGFuZ2xlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldFNjYWxlWChub2RlOiBjYy5Ob2RlIHwgYW55LCBzY2FsZVg6IG51bWJlcikge1xuICAgICAgICBpZiAobm9kZSAmJiBzY2FsZVgpIHtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLm5vZGUuc2NhbGVYID0gc2NhbGVYO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlWCA9IHNjYWxlWDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDb2xvcihub2RlOiBjYy5Ob2RlIHwgYW55LCBjb2xvcjogY2MuQ29sb3IpIHtcbiAgICAgICAgaWYgKG5vZGUgJiYgY29sb3IpIHtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLm5vZGUuY29sb3IgPSBjb2xvclxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlWCA9IGNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvc2l0aW9uKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNjLnYyKDAsIDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQcm9ncmVzcyhub2RlOiBjYy5Qcm9ncmVzc0JhciB8IGNjLlNsaWRlciwgcHJvZ3Jlc3M6IG51bWJlcikge1xuICAgICAgICAvL+WOn+adpeadoeS7tuaYr++8mm5vZGUgJiYgbm9kZS5wcm9ncmVzcyDvvIxub2RlLnByb2dyZXNz5Li6MO+8jOWImeS4umZhbHNlXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBub2RlLnByb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U3RyaW5nKGxhYmVsOiBjYy5MYWJlbCB8IGNjLlJpY2hUZXh0IHwgY2MuRWRpdEJveCwgdGV4dDogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgICAgIC8vIGNjLmxvZyhuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgICAgIC8vIGNjLmxvZyh0ZXh0KTtcblxuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IHRleHQgKyBcIlwiIHx8IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U3RyaW5nKGxhYmVsOiBjYy5MYWJlbCB8IGNjLlJpY2hUZXh0IHwgY2MuRWRpdEJveCk6IHN0cmluZyB7XG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGxhYmVsLnN0cmluZ1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIC8v5Yik5pat6Z2e5rOV5a2X56ymXG4gICAgcHVibGljIGlzSGF2ZVNwZWNpYWwodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCByZWcgPSAvXihcXHd8W1xcdTRFMDAtXFx1OUZBNV0pKiQvO1xuICAgICAgICAvLyBsZXQgcmVnID0gL14oW2EtekEtWjAtOV18W1xcdTRFMDAtXFx1OUZBNV0pKiQvO1xuICAgICAgICBpZiAodGV4dC5tYXRjaChyZWcpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDQ0NOb2RlQ29sb3IoY2NjTm9kZTogY2MuTm9kZSwgY29sb3I6IGNjLkNvbG9yIHwgc3RyaW5nLCBpc0NoaWxkOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBpZiAoIWNjY05vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldENvbG9yKGNjY05vZGUsIGNvbG9yKTtcbiAgICAgICAgaWYgKGlzQ2hpbGQpIHtcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IGNjY05vZGUuY2hpbGRyZW47XG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuIHx8IGNoaWxkcmVuLmxlbmd0aCA8PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENDQ05vZGVDb2xvcihjaGlsZHJlbltpXSwgY29sb3IsIGlzQ2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0Q29sb3IoY2NjTm9kZTogY2MuTm9kZSwgY29sb3I6IGNjLkNvbG9yIHwgc3RyaW5nKSB7XG4gICAgICAgIGlmIChjY2NOb2RlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbG9yID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBjY2NOb2RlLmNvbG9yID0gdGhpcy5nZXRDb2xvclJHQkEoY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2NjTm9kZS5jb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbG9yUkdCQShjb2xvclN0cmluZzogc3RyaW5nKTogY2MuQ29sb3Ige1xuICAgICAgICBsZXQgY29sb3JWYWx1ZUxpc3QgPSBbXTtcbiAgICAgICAgaWYgKCFjb2xvclN0cmluZykgeyAvL+m7mOiupOS4uueZveiJslxuICAgICAgICAgICAgY29sb3JTdHJpbmcgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sb3JTdHJpbmdbMF0gIT0gJyMnKSB7XG4gICAgICAgICAgICBjb2xvclN0cmluZyA9ICcjJyArIGNvbG9yU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xvclN0cmluZy5sZW5ndGggPCA5KSB7XG4gICAgICAgICAgICBjb2xvclN0cmluZyArPSBcImZmXCI7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA5OyBpICs9IDIpIHtcbiAgICAgICAgICAgIGNvbG9yVmFsdWVMaXN0LnB1c2gocGFyc2VJbnQoXCIweFwiICsgY29sb3JTdHJpbmcuc2xpY2UoaSwgaSArIDIpKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvbG9yID0gY2MuY29sb3IoY29sb3JWYWx1ZUxpc3RbMF0sIGNvbG9yVmFsdWVMaXN0WzFdLCBjb2xvclZhbHVlTGlzdFsyXSwgY29sb3JWYWx1ZUxpc3RbM10pO1xuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxuXG4gICAgcHVibGljIHNldENDQ05vZGVHcmF5KG5vZGU6IGNjLk5vZGUgfCBjYy5Db21wb25lbnQsIGlzR3JheTogYm9vbGVhbiwgaXNDaGlsZDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2NjTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgY2MuQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBjY2NOb2RlID0gbm9kZS5ub2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2NjTm9kZSA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjY2NOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3ByOiBjYy5TcHJpdGUgPSBjY2NOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBpZiAoc3ByKSB7XG4gICAgICAgICAgICB0aGlzLnNldENDQ1Nwcml0ZUdyYXkoc3ByLCBpc0dyYXksIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGFiZWw6IGNjLkxhYmVsID0gY2NjTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q0NDTGFiZWxHcmF5KGxhYmVsLCBpc0dyYXksIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYnV0dG9uOiBjYy5CdXR0b24gPSBjY2NOb2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJ1dHRvbkdyYXkoYnV0dG9uLCBpc0dyYXksIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0NoaWxkKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBjY2NOb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgaWYgKCFjaGlsZHJlbiB8fCBjaGlsZHJlbi5sZW5ndGggPD0gMClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDQ0NOb2RlR3JheShjaGlsZHJlbltpXSwgaXNHcmF5LCBpc0NoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRDQ0NTcHJpdGVHcmF5KHNwcml0ZTogY2MuU3ByaXRlLCBpc0dyYXk6IGJvb2xlYW4sIGlzQ2hpbGQ6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGlmICghc3ByaXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3ByaXRlLnNldFN0YXRlKGlzR3JheSA/IDEgOiAwKTsvL+WNh+e6p+WIsDIuMS4y5ZCOIOW6n+W8g+S6hlxuICAgICAgICAvL+S7peS4i+S4ujIuMS4y54mI5pysXG4gICAgICAgIGxldCBtYXQ6IGNjLk1hdGVyaWFsID0gbnVsbDtcbiAgICAgICAgaWYgKGlzR3JheSkge1xuICAgICAgICAgICAgbWF0ID0gY2MuTWF0ZXJpYWwuZ2V0QnVpbHRpbk1hdGVyaWFsKCcyZC1ncmF5LXNwcml0ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWF0ID0gY2MuTWF0ZXJpYWwuZ2V0QnVpbHRpbk1hdGVyaWFsKCcyZC1zcHJpdGUnKTtcbiAgICAgICAgfVxuICAgICAgICBzcHJpdGUuc2V0TWF0ZXJpYWwoMCwgbWF0KTtcbiAgICAgICAgLy8tLS1cbiAgICAgICAgaWYgKGlzQ2hpbGQpIHtcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHNwcml0ZS5ub2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgaWYgKCFjaGlsZHJlbiB8fCBjaGlsZHJlbi5sZW5ndGggPD0gMClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDQ0NTcHJpdGVHcmF5KGNoaWxkcmVuW2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBpc0dyYXksIGlzQ2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldENDQ0xhYmVsR3JheShsYWJlbDogY2MuTGFiZWwsIGlzR3JheTogYm9vbGVhbiwgaXNDaGlsZDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgaWYgKCFsYWJlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNwcml0ZS5zZXRTdGF0ZShpc0dyYXkgPyAxIDogMCk7Ly/ljYfnuqfliLAyLjEuMuWQjiDlup/lvIPkuoZcbiAgICAgICAgLy/ku6XkuIvkuLoyLjEuMueJiOacrFxuICAgICAgICBsZXQgbWF0OiBjYy5NYXRlcmlhbCA9IG51bGw7XG4gICAgICAgIGlmIChpc0dyYXkpIHtcbiAgICAgICAgICAgIG1hdCA9IGNjLk1hdGVyaWFsLmdldEJ1aWx0aW5NYXRlcmlhbCgnMmQtZ3JheS1zcHJpdGUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1hdCA9IGNjLk1hdGVyaWFsLmdldEJ1aWx0aW5NYXRlcmlhbCgnMmQtc3ByaXRlJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwuc2V0TWF0ZXJpYWwoMCwgbWF0KTtcbiAgICAgICAgLy8tLS1cbiAgICAgICAgaWYgKGlzQ2hpbGQpIHtcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IGxhYmVsLm5vZGUuY2hpbGRyZW47XG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuIHx8IGNoaWxkcmVuLmxlbmd0aCA8PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENDQ0xhYmVsR3JheShjaGlsZHJlbltpXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLCBpc0dyYXksIGlzQ2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldEJ1dHRvbkdyYXkoYnV0dG9uOiBjYy5CdXR0b24sIGlzR3JheTogYm9vbGVhbiA9IHRydWUsIGlzQ2hpbGQ6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAgIGJ1dHRvbi5pbnRlcmFjdGFibGUgPSAhaXNHcmF5O1xuICAgICAgICAgICAgYnV0dG9uLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKGlzQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBidXR0b24ubm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENDQ05vZGVHcmF5KGNoaWxkLCBpc0dyYXksIGlzQ2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIpOaWreivpeaXpeacn+aYr+WQpuWIsOacnyB0aW1lIOaXtumXtOaIsyjmr6vnp5IpXG4gICAgICovXG4gICAgcHVibGljIGNoZWNrVGltZUlTT3ZlckR1ZSh0aW1lOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICAgIGxldCBub3dUaW1lID0gZGF0ZS5nZXRUaW1lKClcbiAgICAgICAgcmV0dXJuIG5vd1RpbWUgLSB0aW1lID49IDBcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNOdWxsKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHJlcGxhY2VTdHJpbmcodGV4dDogc3RyaW5nLCBhcmdzOiBhbnlbXSA9IFtdKSB7XG4gICAgICAgIGlmICghdGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdCA9IHRleHQ7XG4gICAgICAgIGlmICghdGhpcy5pc051bGwoYXJncykgJiYgYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcmUgPSBuZXcgUmVnRXhwKCdcXFxceycgKyAoaSkgKyAnXFxcXH0nLCAnZ20nKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShyZSwgYXJnc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2hpbGRCeU5hbWUobm9kZTogY2MuTm9kZSwgbmFtZTogc3RyaW5nLCBjb21wb25lbnQ6IHsgcHJvdG90eXBlOiBjYy5Db21wb25lbnQgfSB8IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgbGV0IHRlbXAgPSBudWxsO1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgdGVtcCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUobmFtZSk7XG4gICAgICAgICAgICBpZiAoIXRlbXApIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcCA9IHRoaXMuZ2V0Q2hpbGRCeU5hbWUoY2hpbGRyZW5baV0sIG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVtcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZW1wLmdldENvbXBvbmVudChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbXByZXNzU3RyaW5nKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBMWlN0cmluZy5jb21wcmVzc1RvQmFzZTY0KHN0cik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERlY29tcHJlc3NTdHJpbmcoY29tcHJlc3NTdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICghY29tcHJlc3NTdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBMWlN0cmluZy5kZWNvbXByZXNzRnJvbUJhc2U2NChjb21wcmVzc1N0cmluZyk7XG4gICAgfVxuXG4gICAgLy/or7vlj5boi7Hpm4TliqjnlLvmjaLnmq5cbiAgICBhc3luYyBsb2FkR2VuZXJhbEFuaW1hdGlvbihzcGluZTogc3AuU2tlbGV0b24sIHNwaW5lTW9kaWZ5TGlzdCA9IG51bGwpIHtcbiAgICAgICAgaWYgKHNwaW5lTW9kaWZ5TGlzdCAmJiBzcGluZU1vZGlmeUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGluZU1vZGlmeUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzbWQgPSBzcGluZU1vZGlmeUxpc3RbaV07XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RpZnlTcGluZUF0dGFjaG1lbnQoc3BpbmUsIHNtZC5zbG90TmFtZSwgc21kLnNmUGF0aClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBtb2RpZnlTcGluZUF0dGFjaG1lbnQoc3BvOiBzcC5Ta2VsZXRvbiwgc2xvdE5hbWU6IHN0cmluZywgc2ZQYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFzcG8gfHwgIXNsb3ROYW1lIHx8ICFzZlBhdGgpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwibW9kaWZ5U3BpbmVBdHRhY2htZW50IGFyZ3MgZXJyXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHNmUGF0aCwgY2MuU3ByaXRlRnJhbWUsIChlcnI6IEVycm9yIHwgbnVsbCwgc2Y6IGNjLlNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVyciAhPT0gbnVsbCAmJiBlcnIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGxvYWRTcGluZVNGICR7c2ZQYXRofSBlcnJvcjpgLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwby5jaGFuZ2VTbG90U2tpbihzbG90TmFtZSwgc2YpO1xuXG4gICAgICAgICAgICBsZXQgYXV0b0NvbTogQXV0b1JlbGVhc2VTcGluZU1vZGlmeSA9IHNwby5nZXRDb21wb25lbnQoQXV0b1JlbGVhc2VTcGluZU1vZGlmeSk7XG4gICAgICAgICAgICBpZiAoc3BvICYmICFhdXRvQ29tKSB7XG4gICAgICAgICAgICAgICAgYXV0b0NvbSA9IHNwby5hZGRDb21wb25lbnQoQXV0b1JlbGVhc2VTcGluZU1vZGlmeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdXRvQ29tLmFkZE1vZGlmeVNGKHNmKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiDlsYDpg6jmjaLnmq7ogqTvvIzlj6/ku6Xmm7TmjaLnmq7ogqTmjIflrprnmoTpg6jkvY3jgILpnZ7luLhuaWNl77yBXG4gICAgKiBAcGFyYW0gc3BpbmUg6KaB5pu/5o2i55qEc3BpbmXliqjnlLtcbiAgICAqIEBwYXJhbSBza2luTmFtZSDopoHmm7/mjaLnmoTpg6jku7bnmq7ogqTlkI3np7BcbiAgICAqIEBwYXJhbSBzbG90TmFtZSDopoHmm7/mjaLnmoTpg6jku7bnmoTmj5Lmp73lkI3np7BcbiAgICAqIEBwYXJhbSB0YXJnZXRBdHRhTmFtZSAgU3BpbmXkuK3nmq7ogqTljaDkvY3nrKbnmoTlkI3lrZdcbiAgICAgKi9cbiAgICBjaGFuZ2VTbG90KHNwaW5lOiBzcC5Ta2VsZXRvbiwgc2tpbk5hbWU6IHN0cmluZywgc2xvdE5hbWU6IHN0cmluZywgdGFyZ2V0QXR0YU5hbWU6IHN0cmluZykge1xuICAgICAgICAvL+afpeaJvuWxgOmDqOearuiCpFxuICAgICAgICBsZXQgc2tlbGV0b25EYXRhID0gc3BpbmUuc2tlbGV0b25EYXRhLmdldFJ1bnRpbWVEYXRhKCk7XG4gICAgICAgIGxldCB0YXJnZXRTa2luOiBzcC5zcGluZS5Ta2luID0gc2tlbGV0b25EYXRhLmZpbmRTa2luKHNraW5OYW1lKTtcblxuICAgICAgICBpZiAoIXRhcmdldFNraW4pIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCLmib7kuI3liLDov5nkuKrnmq7ogqQ6XCIsIHNraW5OYW1lKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvL+afpeaJvuWxgOmDqOearuiCpOS4i+eahOaPkuanveS4jumZhOS7tlxuICAgICAgICBsZXQgdGFyZ2V0U2tpblNsb3RJbmRleCA9IHNrZWxldG9uRGF0YS5maW5kU2xvdEluZGV4KHNsb3ROYW1lKTtcbiAgICAgICAgbGV0IGF0dGEgPSB0YXJnZXRTa2luLmdldEF0dGFjaG1lbnQodGFyZ2V0U2tpblNsb3RJbmRleCwgdGFyZ2V0QXR0YU5hbWUpO1xuXG4gICAgICAgIC8v5p+l5om+5YWo6Lqr55qu6IKk5LiL55qE5o+S5qe9XG4gICAgICAgIGxldCBjdXJTbG90ID0gc3BpbmUuZmluZFNsb3Qoc2xvdE5hbWUpO1xuXG4gICAgICAgIC8v5pu/5o2i5YWo6Lqr55qu6IKk5o+S5qe955qE6ZmE5Lu2XG4gICAgICAgIGN1clNsb3QgJiYgY3VyU2xvdC5zZXRBdHRhY2htZW50KGF0dGEpO1xuICAgIH1cbn1cbiJdfQ==