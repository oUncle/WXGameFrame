"use strict";
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