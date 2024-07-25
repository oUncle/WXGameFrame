
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Base/GameBaseEventNode');
require('./assets/Script/Base/UIParent');
require('./assets/Script/Common/AutoReleaseSpineModify');
require('./assets/Script/Common/CustomListItem');
require('./assets/Script/Common/CustomListView');
require('./assets/Script/Common/CustomListViewGroup');
require('./assets/Script/Common/TurnTable');
require('./assets/Script/Config/GameEventConfig');
require('./assets/Script/Config/ItemConfig');
require('./assets/Script/Ctrl/GameCtrl');
require('./assets/Script/Ctrl/SdkCtrl');
require('./assets/Script/GameUtils/GameUtils');
require('./assets/Script/GameUtils/lzstring');
require('./assets/Script/Manager/GameEventManager');
require('./assets/Script/Manager/HttpManager');
require('./assets/Script/Manager/NetManager');
require('./assets/Script/Manager/ObjectManager');
require('./assets/Script/Manager/SpineManager');
require('./assets/Script/Manager/SpriteManager');
require('./assets/Script/Manager/UIManager');
require('./assets/Script/Other/GameData');
require('./assets/Script/Other/SoundMgr');
require('./assets/Script/UIManager/GameSetting/GameSetting');
require('./assets/Script/UIManager/HomeMain/HomeMain');
require('./assets/Script/UIManager/OtherGameMain/OtherGameBtn');
require('./assets/Script/UIManager/OtherGameMain/OtherGameMain');
require('./assets/Script/UIManager/PopUpMain/PopUpMain');
require('./assets/Script/UIManager/TipMain/TipMain');
require('./assets/Script/UIManager/TipMain/TipText');
require('./assets/Script/plugins/SkeletonExt');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Base/GameBaseEventNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c945fDPV6ZB9YInnrDfTit/', 'GameBaseEventNode');
// Script/Base/GameBaseEventNode.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameBaseEventNode = /** @class */ (function (_super) {
    __extends(GameBaseEventNode, _super);
    function GameBaseEventNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameBaseEventNode.prototype.onDispathcGameEvent = function (eventId, eventData) {
    };
    GameBaseEventNode = __decorate([
        ccclass
    ], GameBaseEventNode);
    return GameBaseEventNode;
}(cc.Component));
exports.default = GameBaseEventNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlXFxHYW1lQmFzZUV2ZW50Tm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUErQyxxQ0FBWTtJQUEzRDs7SUFLQSxDQUFDO0lBSEcsK0NBQW1CLEdBQW5CLFVBQXFCLE9BQWlCLEVBQUUsU0FBYTtJQUVyRCxDQUFDO0lBSmdCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBS3JDO0lBQUQsd0JBQUM7Q0FMRCxBQUtDLENBTDhDLEVBQUUsQ0FBQyxTQUFTLEdBSzFEO2tCQUxvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4uL0NvbmZpZy9HYW1lRXZlbnRDb25maWdcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQmFzZUV2ZW50Tm9kZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBvbkRpc3BhdGhjR2FtZUV2ZW50IChldmVudElkOkdhbWVFdmVudCwgZXZlbnREYXRhOmFueSkge1xuICAgICAgICBcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/CustomListView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea23eUA7dlK+53f+uVixC0r', 'CustomListView');
// Script/Common/CustomListView.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollDirection = void 0;
var GameUtils_1 = require("../GameUtils/GameUtils");
var CustomListItem_1 = require("./CustomListItem");
var CustomListViewGroup_1 = require("./CustomListViewGroup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScrollDirection;
(function (ScrollDirection) {
    ScrollDirection[ScrollDirection["Horizontal"] = 0] = "Horizontal";
    ScrollDirection[ScrollDirection["Vertical"] = 1] = "Vertical";
})(ScrollDirection = exports.ScrollDirection || (exports.ScrollDirection = {}));
var CustomListView = /** @class */ (function (_super) {
    __extends(CustomListView, _super);
    function CustomListView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollView = null;
        _this.direction = ScrollDirection.Vertical;
        _this.spawnCount = 8;
        _this.spacingX = 0;
        _this.spacingY = 0;
        _this.updateInterval = 0.05;
        _this.canTouchItem = false;
        // @property(CustomListItem) //导UI用，不可删除
        _this.listItem = null;
        // LIFE-CYCLE CALLBACKS:
        _this._itemDatas = [];
        _this._itemNodes = [];
        _this._itemNodesCache = [];
        _this._totalCount = 0;
        _this._updateTimer = 0;
        _this._lastContentPosY = 0;
        _this._lastContentPosX = 0;
        _this._itemWidth = 0;
        _this._itemHeight = 0;
        _this._selectIndex = 0;
        _this._scrollViewWorldPoses = [];
        _this._selectData = null;
        return _this;
    }
    CustomListView.prototype.onLoad = function () {
        if (this.listItem && this.listItem.node) {
            this.listItem.node.active = false;
        }
    };
    CustomListView.prototype.start = function () {
        // this._resetScrollView();
    };
    CustomListView.prototype.setSelectData = function (data) {
        this._selectData = data;
        this._refreshAllItemData();
    };
    CustomListView.prototype._resetScrollView = function () {
        var _this = this;
        if (this.scrollView) {
            this.scrollView.horizontal = false;
            this.scrollView.vertical = false;
            var widget = this.scrollView.content.getComponent(cc.Widget);
            if (!widget) {
                widget = this.scrollView.content.addComponent(cc.Widget);
            }
            widget.enabled = true;
            if (this.direction == ScrollDirection.Horizontal) {
                this.scrollView.horizontal = true;
                this.scrollView.content.setAnchorPoint(cc.v2(0, 0.5));
                widget.isAlignTop = true;
                widget.isAlignBottom = true;
                widget.isAlignLeft = true;
                widget.isAlignRight = false;
            }
            else {
                this.scrollView.vertical = true;
                this.scrollView.content.setAnchorPoint(cc.v2(0.5, 1));
                widget.isAlignTop = true;
                widget.isAlignBottom = false;
                widget.isAlignLeft = true;
                widget.isAlignRight = true;
            }
            widget.alignMode = cc.Widget.AlignMode.ONCE;
            widget.updateAlignment();
            widget.enabled = false;
            this._resetScrollViewRect();
            //
            if (this.canTouchItem) {
                if (!this.scrollView.content.getComponent(cc.ToggleContainer)) {
                    var toggleContainer = this.scrollView.content.addComponent(cc.ToggleContainer);
                    toggleContainer.allowSwitchOff = true;
                    // cc.log('_resetScrollView allowSwitchOff= ',toggleContainer.allowSwitchOff);
                    toggleContainer.node.on("customListSelect", function (index, y) {
                        _this._onsetSelectIndex(index);
                    });
                }
            }
        }
    };
    CustomListView.prototype._resetScrollViewRect = function () {
        this._scrollViewWorldPoses.length = 0;
        //左下，右下，右上，左上
        var w = this.scrollView.node.width;
        var h = this.scrollView.node.height;
        var ax = this.scrollView.node.anchorX;
        var ay = this.scrollView.node.anchorY;
        var wp = this.scrollView.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        // cc.log("_resetScrollViewRect", w, h, ax, ay, wp.x, wp.y)
        this._scrollViewWorldPoses.push(cc.v2(wp.x - w * ax, wp.y - h * ay));
        this._scrollViewWorldPoses.push(cc.v2(wp.x + w * (1 - ax), wp.y - h * ay));
        this._scrollViewWorldPoses.push(cc.v2(wp.x + w * (1 - ax), wp.y + h * (1 - ay)));
        this._scrollViewWorldPoses.push(cc.v2(wp.x - w * ax, wp.y + h * (1 - ay)));
        // cc.log("this._scrollViewWorldPoses", this._scrollViewWorldPoses)
    };
    CustomListView.prototype.initListInfo = function (dataList) {
        if (dataList === void 0) { dataList = []; }
        this._resetScrollView();
        var group = this.listItem.getComponent(CustomListViewGroup_1.default);
        if (group) {
            var groupCellCount = group.getItemCount();
            var ndl = [];
            for (var i = 0; i < dataList.length; i += groupCellCount) {
                var temp = [];
                for (var index = 0; index < groupCellCount; index++) {
                    if (i + index >= dataList.length) {
                        break;
                    }
                    temp.push(dataList[i + index]);
                }
                ndl.push(temp);
            }
            dataList = ndl;
        }
        this._itemDatas = dataList;
        this._totalCount = this._itemDatas.length;
        this._selectIndex = 0;
        this._initialize();
        // cc.log("totalCount ",this._totalCount)
    };
    /** 刷新ItemData */
    CustomListView.prototype.resetItemDatas = function (dataList, selectIndex, isScrollTo) {
        if (dataList === void 0) { dataList = []; }
        if (selectIndex === void 0) { selectIndex = 0; }
        if (isScrollTo === void 0) { isScrollTo = false; }
        var oldLength = this._totalCount;
        this._itemDatas = dataList;
        this._totalCount = this._itemDatas.length;
        this._selectIndex = selectIndex;
        this._resetScrollViewContentSize();
        if (!this._checkContentSizeFull() || this._itemNodes.length < this.spawnCount || this._totalCount < this.spawnCount) {
            if (oldLength == dataList.length) {
                cc.log("resetItemDatas  oldLength ==dataList.length ", oldLength == dataList.length);
            }
            else {
                this.initListInfo(dataList);
                this.setSelectIndex(selectIndex);
                return;
            }
        }
        cc.log("resetItemDatas  totalCount ", this._totalCount);
        // this._resetScrollView();
        this._resetScrollViewRect();
        var isEnd = false;
        for (var index = 0; index < this._itemNodes.length; index++) {
            if (this._itemNodes[index].getItemIndex() >= this._totalCount) {
                isEnd = true;
                break;
            }
        }
        if (isEnd) {
            this.setToEnd();
        }
        else {
            this._refreshAllItemData();
        }
        if (isScrollTo) {
            this.scrollToItem(selectIndex);
        }
        this.setSelectIndex(this._selectIndex);
    };
    CustomListView.prototype._createListItem = function () {
        if (!this.listItem) {
            return null;
        }
        var itemNode = cc.instantiate(this.listItem.node);
        itemNode.active = true;
        var item = itemNode.getComponent(CustomListItem_1.default);
        return item;
    };
    /** 滑动到最后 */
    CustomListView.prototype.setToEnd = function () {
        var w = this.scrollView.node.width;
        var h = this.scrollView.node.height;
        var ax = this.scrollView.node.anchorX;
        var ay = this.scrollView.node.anchorY;
        if (this.direction == ScrollDirection.Horizontal) {
            this.scrollView.content.x = -(this.scrollView.content.width - w * (1 - ax));
            this._lastContentPosX = this.scrollView.content.x;
            // cc.log("setToEnd",this._lastContentPosX)
            var offset = (this._itemWidth + this.spacingX) * this._itemNodes.length - this._itemWidth * 0.5;
            var sposX = this.scrollView.content.width - offset;
            for (var index = 0; index < this.spawnCount && index < this._itemNodes.length; index++) {
                var item = this._itemNodes[index];
                var itemId = this._totalCount - this.spawnCount + index;
                // cc.log(itemId,this._itemDatas[itemId])
                item.initItem(itemId, this.getItemData(itemId), this._selectData, this.canTouchItem, this._selectIndex == itemId);
                item.node.x = sposX + (this._itemWidth + this.spacingX) * index;
            }
        }
        else {
            this.scrollView.content.y = (this.scrollView.content.height - h * (1 - ay));
            this._lastContentPosY = this.scrollView.content.y;
            var offset = (this._itemHeight + this.spacingY) * this._itemNodes.length - this._itemHeight * 0.5;
            var sposY = -(this.scrollView.content.height - offset);
            for (var index = 0; index < this.spawnCount && index < this._itemNodes.length; index++) {
                var item = this._itemNodes[index];
                var itemId = this._totalCount - this.spawnCount + index;
                // cc.log(itemId,this.getItemData(itemId))
                item.initItem(itemId, this.getItemData(itemId), this._selectData, this.canTouchItem, this._selectIndex == itemId);
                item.node.y = sposY - (this._itemHeight + this.spacingY) * index;
            }
            // cc.log("setToEnd",this._lastContentPosY)
        }
    };
    CustomListView.prototype.refreshAllShowItems = function () {
        this._refreshAllItemData();
    };
    CustomListView.prototype._refreshAllItemData = function () {
        for (var index = 0; index < this._itemNodes.length; index++) {
            var item = this._itemNodes[index];
            var itemIndex = item.getItemIndex();
            item.initItem(itemIndex, this.getItemData(itemIndex), this._selectData, this.canTouchItem, this._selectIndex == itemIndex);
        }
    };
    CustomListView.prototype._resetScrollViewContentSize = function () {
        if (this.direction == ScrollDirection.Horizontal) {
            this.scrollView.content.width = this._totalCount * (this._itemWidth + this.spacingX) + this.spacingX;
        }
        else {
            this.scrollView.content.height = this._totalCount * (this._itemHeight + this.spacingY) + this.spacingY;
        }
    };
    CustomListView.prototype._checkContentSizeFull = function () {
        var size = this.scrollView.node.getContentSize();
        if (this.direction == ScrollDirection.Horizontal) {
            return this.scrollView.content.width >= size.width;
        }
        return this.scrollView.content.height >= size.height;
    };
    CustomListView.prototype._initialize = function () {
        if (!this.listItem) {
            cc.warn("列表Item为空");
            return;
        }
        this._resetScrollViewRect();
        this._itemWidth = this.listItem.getItemWidth();
        this._itemHeight = this.listItem.getItemHeight();
        this._itemNodes.length = 0;
        this._resetScrollViewContentSize();
        // if (!this._startPos) {
        //     this._startPos =  this.scrollView.content.getPosition()
        // }
        // cc.log("_initialize",this._startPos)
        // this.scrollView.content.setPosition(this._startPos)
        for (var i = 0; i < this.spawnCount && i < this._itemDatas.length; i++) {
            var item = this._itemNodesCache[i];
            if (i >= this._itemNodesCache.length) {
                item = this._createListItem();
                this.scrollView.content.addChild(item.node);
                this._itemNodesCache.push(item);
            }
            GameUtils_1.default.getInstance().setVisible(item, true);
            if (this.direction == ScrollDirection.Horizontal) {
                item.node.setPosition(this._itemWidth * (0.5 + i) + this.spacingX * (i + 1), 0);
            }
            else {
                item.node.setPosition(0, -(this._itemHeight * (0.5 + i) + this.spacingY * (i + 1)));
            }
            item.initItem(i, this.getItemData(i), this._selectData, this.canTouchItem);
            this._itemNodes.push(item);
        }
        if (this._itemNodesCache.length > this._itemNodes.length) {
            for (var i = this._itemNodes.length; i < this._itemNodesCache.length; i++) {
                GameUtils_1.default.getInstance().setVisible(this._itemNodesCache[i], false);
            }
        }
    };
    CustomListView.prototype.initWithoutData = function () {
        for (var i = 0; i < this.spawnCount; i++) {
            var item = this._itemNodesCache[i];
            if (i >= this._itemNodesCache.length) {
                item = this._createListItem();
                this.scrollView.content.addChild(item.node);
                this._itemNodesCache.push(item);
            }
            GameUtils_1.default.getInstance().setVisible(item, false);
        }
    };
    CustomListView.prototype._onsetSelectIndex = function (index) {
        // cc.log('CustomListView _onsetSelectIndex ',index);
        this._selectIndex = index;
    };
    CustomListView.prototype.setSelectIndex = function (index) {
        // cc.log('setSelectIndex  ',index);
        this._selectIndex = index;
        for (var index_1 = 0; index_1 < this._itemNodes.length; index_1++) {
            var item = this._itemNodes[index_1];
            // cc.log(item.getItemIndex())
            if (item.getItemIndex() == this._selectIndex) {
                // cc.log('select  true ',item.getItemIndex());
                item.setIsCheckedItem(true);
            }
        }
    };
    CustomListView.prototype.getSelectIndex = function () {
        return this._selectIndex;
    };
    CustomListView.prototype.resetItemData = function (index, data, selectData) {
        if (data === void 0) { data = null; }
        if (selectData === void 0) { selectData = null; }
        this._itemDatas[index] = data ? data : this._itemDatas[index];
        this._itemNodes[index].initItem(index, data, selectData);
    };
    CustomListView.prototype.getTotalCount = function () {
        return this._totalCount;
    };
    CustomListView.prototype.getItemData = function (index) {
        return this._itemDatas[index];
    };
    CustomListView.prototype.getShowItems = function () {
        return this._itemNodes;
    };
    CustomListView.prototype.getSpacingX = function () {
        return this.spacingX;
    };
    CustomListView.prototype.getSpacingY = function () {
        return this.spacingY;
    };
    CustomListView.prototype._getItemPos = function (index) {
        if (this.direction == ScrollDirection.Horizontal) {
            return cc.v2(this._itemWidth * (0.5 + index) + this.spacingX * (index + 1), 0);
        }
        return cc.v2(0, -(this._itemHeight * (0.5 + index) + this.spacingY * (index + 1)));
    };
    CustomListView.prototype.scrollToItem = function (index, scrollTime) {
        if (scrollTime === void 0) { scrollTime = 1; }
        // cc.log('scrollToItem');
        if (index < 0 || index >= this._totalCount) {
            return;
        }
        var percent = (Math.abs(index) / this._totalCount);
        if (index == 0) {
            percent = 0;
        }
        else if (index >= (this._totalCount - 1)) {
            percent = 1;
        }
        // let itemPos = this._getItemPos(index);
        if (this.direction == ScrollDirection.Horizontal) {
            // let percent = 1-(Math.abs(itemPos.x) / this.scrollView.content.width)
            this.scrollView.scrollToPercentHorizontal(percent, scrollTime);
        }
        else {
            // let percent = 1-(Math.abs(itemPos.y) / this.scrollView.content.height)
            this.scrollView.scrollToPercentVertical(percent, scrollTime);
        }
    };
    CustomListView.prototype.update = function (dt) {
        if (this._itemNodes.length <= 0) {
            return;
        }
        this._updateTimer += dt;
        if (this._updateTimer < this.updateInterval)
            return; // we don't need to do the math every frame
        this._updateTimer = 0;
        if (this.direction == ScrollDirection.Horizontal) {
            if (this.scrollView.content.x == this._lastContentPosX) {
                return;
            }
            var isLeft = this.scrollView.content.x < this._lastContentPosX;
            var offset = (this._itemWidth + this.spacingX) * this._itemNodes.length;
            for (var i = 0; i < this._itemNodes.length; i++) {
                var item = this._itemNodes[i];
                var wp = item.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
                // cc.log("item wp", i, item.node.x, item.node.y, wp.x, wp.y)
                var wlx = wp.x - item.getItemWidth();
                var wrx = wp.x + item.getItemWidth();
                if (isLeft) {
                    // cc.log("isLeft", wrx, this._scrollViewWorldPoses[0].x, item.node.x, offset, this.scrollView.content.width, wrx < this._scrollViewWorldPoses[0].x && item.node.x + offset < this.scrollView.content.width)
                    // if away from buffer zone and not reaching top of content
                    if (wrx < this._scrollViewWorldPoses[0].x && item.node.x + offset < this.scrollView.content.width) {
                        item.node.x = (item.node.x + offset);
                        var dataIndex = item.getItemIndex() + this._itemNodes.length;
                        item.initItem(dataIndex, this.getItemData(dataIndex), this._selectData, this.canTouchItem, this._selectIndex == dataIndex);
                    }
                }
                else {
                    // cc.log("isRight", wlx, this._scrollViewWorldPoses[1].x, item.node.x, offset, wlx > this._scrollViewWorldPoses[1].x && item.node.x - offset > 0)
                    // if away from buffer zone and not reaching bottom of content
                    if (wlx > this._scrollViewWorldPoses[1].x && item.node.x - offset > 0) {
                        item.node.x = (item.node.x - offset);
                        var dataIndex = item.getItemIndex() - this._itemNodes.length;
                        item.initItem(dataIndex, this.getItemData(dataIndex), this._selectData, this.canTouchItem, this._selectIndex == dataIndex);
                    }
                }
            }
            this._lastContentPosX = this.scrollView.content.x;
            // cc.log("_lastContentPosX",this._lastContentPosX)
        }
        else {
            if (this._lastContentPosY == this.scrollView.content.y) {
                return;
            }
            var isDown = this.scrollView.content.y < this._lastContentPosY;
            var offset = (this._itemHeight + this.spacingY) * this._itemNodes.length;
            for (var i = 0; i < this._itemNodes.length; i++) {
                var item = this._itemNodes[i];
                var wp = item.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
                var wty = wp.y + item.getItemHeight();
                var wby = wp.y - item.getItemHeight();
                if (isDown) {
                    // if away from buffer zone and not reaching top of content
                    if (wty < this._scrollViewWorldPoses[0].y && item.node.y + offset < 0) {
                        item.node.y = (item.node.y + offset);
                        var dataIndex = item.getItemIndex() - this._itemNodes.length;
                        item.initItem(dataIndex, this.getItemData(dataIndex), this._selectData, this.canTouchItem, this._selectIndex == dataIndex);
                    }
                }
                else {
                    // if away from buffer zone and not reaching bottom of content
                    if (wby > this._scrollViewWorldPoses[3].y && item.node.y - offset > -this.scrollView.content.height) {
                        item.node.y = (item.node.y - offset);
                        var dataIndex = item.getItemIndex() + this._itemNodes.length;
                        item.initItem(dataIndex, this.getItemData(dataIndex), this._selectData, this.canTouchItem, this._selectIndex == dataIndex);
                    }
                }
            }
            this._lastContentPosY = this.scrollView.content.y;
            // cc.log("_lastContentPosY",this._lastContentPosY)
        }
    };
    CustomListView.prototype.stopAutoScroll = function () {
        this.scrollView.stopAutoScroll();
    };
    CustomListView.prototype.scrollToLeft = function (timeInSecond, attenuated) {
        if (this.scrollView) {
            this.scrollView.scrollToLeft(timeInSecond, attenuated);
        }
    };
    CustomListView.prototype.scrollToRight = function (timeInSecond, attenuated) {
        if (this.scrollView) {
            this.scrollView.scrollToRight(timeInSecond, attenuated);
        }
    };
    CustomListView.prototype.scrollToTop = function (timeInSecond, attenuated) {
        if (this.scrollView) {
            this.scrollView.scrollToTop(timeInSecond, attenuated);
        }
    };
    CustomListView.prototype.scrollToBottom = function (timeInSecond, attenuated) {
        if (this.scrollView) {
            this.scrollView.scrollToBottom(timeInSecond, attenuated);
        }
    };
    CustomListView.prototype.scrollToOffset = function (offset, timeInSecond, attenuated) {
        if (this.scrollView) {
            this.scrollView.scrollToOffset(offset, timeInSecond, attenuated);
        }
    };
    CustomListView.prototype.getScrollOffset = function () {
        if (this.scrollView) {
            return this.scrollView.getScrollOffset();
        }
    };
    CustomListView.prototype.getMaxScrollOffset = function () {
        if (this.scrollView) {
            return this.scrollView.getMaxScrollOffset();
        }
    };
    __decorate([
        property({ type: cc.ScrollView, tooltip: CC_DEV && "需要取消Horizontal和Vertical\ncontent的layout组件需要去掉" })
    ], CustomListView.prototype, "scrollView", void 0);
    __decorate([
        property({ type: cc.Enum(ScrollDirection), tooltip: CC_DEV && "Horizontal时，content锚点设置为cc.v2(0,0.5)\nVertical时，content锚点设置为cc.v2(0.5,1)" })
    ], CustomListView.prototype, "direction", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: CC_DEV && "需要初始多少个item，至少比显示区域多3-5个" })
    ], CustomListView.prototype, "spawnCount", void 0);
    __decorate([
        property(cc.Integer)
    ], CustomListView.prototype, "spacingX", void 0);
    __decorate([
        property(cc.Integer)
    ], CustomListView.prototype, "spacingY", void 0);
    __decorate([
        property(cc.Float)
    ], CustomListView.prototype, "updateInterval", void 0);
    __decorate([
        property(cc.Boolean)
    ], CustomListView.prototype, "canTouchItem", void 0);
    __decorate([
        property({ type: CustomListItem_1.default, tooltip: CC_DEV && "item锚点必需为cc.v2(0.5,0.5)" })
    ], CustomListView.prototype, "listItem", void 0);
    CustomListView = __decorate([
        ccclass
    ], CustomListView);
    return CustomListView;
}(cc.Component));
exports.default = CustomListView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXEN1c3RvbUxpc3RWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixvREFBK0M7QUFDL0MsbURBQThDO0FBQzlDLDZEQUF3RDtBQUVsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDdkIsaUVBQWMsQ0FBQTtJQUNkLDZEQUFZLENBQUE7QUFDaEIsQ0FBQyxFQUhXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBRzFCO0FBR0Q7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFraEJDO1FBL2dCRyxnQkFBVSxHQUFrQixJQUFJLENBQUM7UUFFakMsZUFBUyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFFckMsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLG9CQUFjLEdBQVcsSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLHdDQUF3QztRQUV4QyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyx3QkFBd0I7UUFFaEIsZ0JBQVUsR0FBVSxFQUFFLENBQUM7UUFDdkIsZ0JBQVUsR0FBcUIsRUFBRSxDQUFDO1FBQ2xDLHFCQUFlLEdBQXFCLEVBQUUsQ0FBQztRQUN2QyxpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixzQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIsc0JBQWdCLEdBQUcsQ0FB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QyxVQUFVLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLENBQUE7U0FDOUM7SUFDTCxDQUFDO0lBOWdCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksK0NBQStDLEVBQUUsQ0FBQztzREFDckU7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxJQUFJLDBFQUEwRSxFQUFFLENBQUM7cURBQ3ZHO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSwwQkFBMEIsRUFBRSxDQUFDO3NEQUN2RDtJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO29EQUNBO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0RBQ0E7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswREFDVztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3dEQUNTO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLHdCQUFjLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSx5QkFBeUIsRUFBRSxDQUFDO29EQUNqRDtJQWxCZixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBa2hCbEM7SUFBRCxxQkFBQztDQWxoQkQsQUFraEJDLENBbGhCMkMsRUFBRSxDQUFDLFNBQVMsR0FraEJ2RDtrQkFsaEJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lVXRpbHMgZnJvbSBcIi4uL0dhbWVVdGlscy9HYW1lVXRpbHNcIjtcbmltcG9ydCBDdXN0b21MaXN0SXRlbSBmcm9tIFwiLi9DdXN0b21MaXN0SXRlbVwiO1xuaW1wb3J0IEN1c3RvbUxpc3RWaWV3R3JvdXAgZnJvbSBcIi4vQ3VzdG9tTGlzdFZpZXdHcm91cFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgZW51bSBTY3JvbGxEaXJlY3Rpb24ge1xuICAgIEhvcml6b250YWwgPSAwLFxuICAgIFZlcnRpY2FsID0gMSxcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUxpc3RWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNjcm9sbFZpZXcsIHRvb2x0aXA6IENDX0RFViAmJiBcIumcgOimgeWPlua2iEhvcml6b250YWzlkoxWZXJ0aWNhbFxcbmNvbnRlbnTnmoRsYXlvdXTnu4Tku7bpnIDopoHljrvmjolcIiB9KVxuICAgIHNjcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oU2Nyb2xsRGlyZWN0aW9uKSwgdG9vbHRpcDogQ0NfREVWICYmIFwiSG9yaXpvbnRhbOaXtu+8jGNvbnRlbnTplJrngrnorr7nva7kuLpjYy52MigwLDAuNSlcXG5WZXJ0aWNhbOaXtu+8jGNvbnRlbnTplJrngrnorr7nva7kuLpjYy52MigwLjUsMSlcIiB9KVxuICAgIGRpcmVjdGlvbiA9IFNjcm9sbERpcmVjdGlvbi5WZXJ0aWNhbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyLCB0b29sdGlwOiBDQ19ERVYgJiYgXCLpnIDopoHliJ3lp4vlpJrlsJHkuKppdGVt77yM6Iez5bCR5q+U5pi+56S65Yy65Z+f5aSaMy015LiqXCIgfSlcbiAgICBzcGF3bkNvdW50OiBudW1iZXIgPSA4O1xuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHNwYWNpbmdYOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHNwYWNpbmdZOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICB1cGRhdGVJbnRlcnZhbDogbnVtYmVyID0gMC4wNTtcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcbiAgICBjYW5Ub3VjaEl0ZW06IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyBAcHJvcGVydHkoQ3VzdG9tTGlzdEl0ZW0pIC8v5a+8VUnnlKjvvIzkuI3lj6/liKDpmaRcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDdXN0b21MaXN0SXRlbSwgdG9vbHRpcDogQ0NfREVWICYmIFwiaXRlbemUmueCueW/hemcgOS4umNjLnYyKDAuNSwwLjUpXCIgfSlcbiAgICBsaXN0SXRlbTogQ3VzdG9tTGlzdEl0ZW0gPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBwcml2YXRlIF9pdGVtRGF0YXM6IGFueVtdID0gW107XG4gICAgcHJpdmF0ZSBfaXRlbU5vZGVzOiBDdXN0b21MaXN0SXRlbVtdID0gW107XG4gICAgcHJpdmF0ZSBfaXRlbU5vZGVzQ2FjaGU6IEN1c3RvbUxpc3RJdGVtW10gPSBbXTtcbiAgICBwcml2YXRlIF90b3RhbENvdW50ID0gMDtcbiAgICBwcml2YXRlIF91cGRhdGVUaW1lciA9IDA7XG4gICAgcHJpdmF0ZSBfbGFzdENvbnRlbnRQb3NZID0gMDtcbiAgICBwcml2YXRlIF9sYXN0Q29udGVudFBvc1ggPSAwO1xuICAgIHByaXZhdGUgX2l0ZW1XaWR0aCA9IDA7XG4gICAgcHJpdmF0ZSBfaXRlbUhlaWdodCA9IDA7XG5cbiAgICBwcml2YXRlIF9zZWxlY3RJbmRleCA9IDA7XG5cbiAgICBwcml2YXRlIF9zY3JvbGxWaWV3V29ybGRQb3NlczogY2MuVmVjMltdID0gW107XG5cbiAgICBwcml2YXRlIF9zZWxlY3REYXRhOiBhbnkgPSBudWxsO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdEl0ZW0gJiYgdGhpcy5saXN0SXRlbS5ub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RJdGVtLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgICAgICAvLyB0aGlzLl9yZXNldFNjcm9sbFZpZXcoKTtcbiAgICB9XG5cbiAgICBzZXRTZWxlY3REYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0RGF0YSA9IGRhdGE7XG5cbiAgICAgICAgdGhpcy5fcmVmcmVzaEFsbEl0ZW1EYXRhKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVzZXRTY3JvbGxWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuaG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnZlcnRpY2FsID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGxldCB3aWRnZXQgPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICAgICAgICAgIGlmICghd2lkZ2V0KSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0ID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuYWRkQ29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aWRnZXQuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBTY3JvbGxEaXJlY3Rpb24uSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5ob3Jpem9udGFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5zZXRBbmNob3JQb2ludChjYy52MigwLCAwLjUpKTtcblxuICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduVG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkJvdHRvbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblJpZ2h0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnZlcnRpY2FsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5zZXRBbmNob3JQb2ludChjYy52MigwLjUsIDEpKTtcblxuICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduVG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkJvdHRvbSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduTGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25SaWdodCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpZGdldC5hbGlnbk1vZGUgPSBjYy5XaWRnZXQuQWxpZ25Nb2RlLk9OQ0U7XG4gICAgICAgICAgICB3aWRnZXQudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICAgICAgICB3aWRnZXQuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLl9yZXNldFNjcm9sbFZpZXdSZWN0KCk7XG5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBpZiAodGhpcy5jYW5Ub3VjaEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmdldENvbXBvbmVudChjYy5Ub2dnbGVDb250YWluZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2dnbGVDb250YWluZXIgPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5hZGRDb21wb25lbnQoY2MuVG9nZ2xlQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ29udGFpbmVyLmFsbG93U3dpdGNoT2ZmID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ19yZXNldFNjcm9sbFZpZXcgYWxsb3dTd2l0Y2hPZmY9ICcsdG9nZ2xlQ29udGFpbmVyLmFsbG93U3dpdGNoT2ZmKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ29udGFpbmVyLm5vZGUub24oXCJjdXN0b21MaXN0U2VsZWN0XCIsIChpbmRleCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25zZXRTZWxlY3RJbmRleChpbmRleClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVzZXRTY3JvbGxWaWV3UmVjdCgpIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1dvcmxkUG9zZXMubGVuZ3RoID0gMDtcbiAgICAgICAgLy/lt6bkuIvvvIzlj7PkuIvvvIzlj7PkuIrvvIzlt6bkuIpcbiAgICAgICAgbGV0IHcgPSB0aGlzLnNjcm9sbFZpZXcubm9kZS53aWR0aDtcbiAgICAgICAgbGV0IGggPSB0aGlzLnNjcm9sbFZpZXcubm9kZS5oZWlnaHQ7XG4gICAgICAgIGxldCBheCA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmFuY2hvclg7XG4gICAgICAgIGxldCBheSA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmFuY2hvclk7XG4gICAgICAgIGxldCB3cCA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xuICAgICAgICAvLyBjYy5sb2coXCJfcmVzZXRTY3JvbGxWaWV3UmVjdFwiLCB3LCBoLCBheCwgYXksIHdwLngsIHdwLnkpXG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXdXb3JsZFBvc2VzLnB1c2goY2MudjIod3AueCAtIHcgKiBheCwgd3AueSAtIGggKiBheSkpO1xuICAgICAgICB0aGlzLl9zY3JvbGxWaWV3V29ybGRQb3Nlcy5wdXNoKGNjLnYyKHdwLnggKyB3ICogKDEgLSBheCksIHdwLnkgLSBoICogYXkpKTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1dvcmxkUG9zZXMucHVzaChjYy52Mih3cC54ICsgdyAqICgxIC0gYXgpLCB3cC55ICsgaCAqICgxIC0gYXkpKSk7XG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXdXb3JsZFBvc2VzLnB1c2goY2MudjIod3AueCAtIHcgKiBheCwgd3AueSArIGggKiAoMSAtIGF5KSkpO1xuICAgICAgICAvLyBjYy5sb2coXCJ0aGlzLl9zY3JvbGxWaWV3V29ybGRQb3Nlc1wiLCB0aGlzLl9zY3JvbGxWaWV3V29ybGRQb3NlcylcbiAgICB9XG5cbiAgICBpbml0TGlzdEluZm8oZGF0YUxpc3Q6IGFueVtdID0gW10pIHtcbiAgICAgICAgdGhpcy5fcmVzZXRTY3JvbGxWaWV3KCk7XG4gICAgICAgIGxldCBncm91cDpDdXN0b21MaXN0Vmlld0dyb3VwID0gdGhpcy5saXN0SXRlbS5nZXRDb21wb25lbnQoQ3VzdG9tTGlzdFZpZXdHcm91cCk7XG4gICAgICAgIGlmIChncm91cCkge1xuICAgICAgICAgICAgbGV0IGdyb3VwQ2VsbENvdW50ID0gZ3JvdXAuZ2V0SXRlbUNvdW50KCk7XG5cbiAgICAgICAgICAgIGxldCBuZGwgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTGlzdC5sZW5ndGg7IGkgKz0gZ3JvdXBDZWxsQ291bnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IFtdXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdyb3VwQ2VsbENvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICsgaW5kZXggPj0gZGF0YUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRlbXAucHVzaChkYXRhTGlzdFtpICsgaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmRsLnB1c2godGVtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhTGlzdCA9IG5kbFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXRlbURhdGFzID0gZGF0YUxpc3Q7XG4gICAgICAgIHRoaXMuX3RvdGFsQ291bnQgPSB0aGlzLl9pdGVtRGF0YXMubGVuZ3RoO1xuICAgICAgICB0aGlzLl9zZWxlY3RJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemUoKTtcbiAgICAgICAgLy8gY2MubG9nKFwidG90YWxDb3VudCBcIix0aGlzLl90b3RhbENvdW50KVxuICAgIH1cblxuICAgIC8qKiDliLfmlrBJdGVtRGF0YSAqL1xuICAgIHJlc2V0SXRlbURhdGFzKGRhdGFMaXN0OiBhbnlbXSA9IFtdLCBzZWxlY3RJbmRleDogbnVtYmVyID0gMCwgaXNTY3JvbGxUbzogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBvbGRMZW5ndGggPSB0aGlzLl90b3RhbENvdW50XG4gICAgICAgIHRoaXMuX2l0ZW1EYXRhcyA9IGRhdGFMaXN0O1xuICAgICAgICB0aGlzLl90b3RhbENvdW50ID0gdGhpcy5faXRlbURhdGFzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fc2VsZWN0SW5kZXggPSBzZWxlY3RJbmRleDtcblxuICAgICAgICB0aGlzLl9yZXNldFNjcm9sbFZpZXdDb250ZW50U2l6ZSgpO1xuXG4gICAgICAgIGlmICghdGhpcy5fY2hlY2tDb250ZW50U2l6ZUZ1bGwoKSB8fCB0aGlzLl9pdGVtTm9kZXMubGVuZ3RoIDwgdGhpcy5zcGF3bkNvdW50IHx8IHRoaXMuX3RvdGFsQ291bnQgPCB0aGlzLnNwYXduQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChvbGRMZW5ndGggPT0gZGF0YUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwicmVzZXRJdGVtRGF0YXMgIG9sZExlbmd0aCA9PWRhdGFMaXN0Lmxlbmd0aCBcIiwgb2xkTGVuZ3RoID09IGRhdGFMaXN0Lmxlbmd0aClcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRMaXN0SW5mbyhkYXRhTGlzdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RJbmRleChzZWxlY3RJbmRleClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYy5sb2coXCJyZXNldEl0ZW1EYXRhcyAgdG90YWxDb3VudCBcIiwgdGhpcy5fdG90YWxDb3VudClcbiAgICAgICAgLy8gdGhpcy5fcmVzZXRTY3JvbGxWaWV3KCk7XG5cbiAgICAgICAgdGhpcy5fcmVzZXRTY3JvbGxWaWV3UmVjdCgpO1xuICAgICAgICBsZXQgaXNFbmQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2l0ZW1Ob2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pdGVtTm9kZXNbaW5kZXhdLmdldEl0ZW1JbmRleCgpID49IHRoaXMuX3RvdGFsQ291bnQpIHtcbiAgICAgICAgICAgICAgICBpc0VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRW5kKSB7XG4gICAgICAgICAgICB0aGlzLnNldFRvRW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoQWxsSXRlbURhdGEoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1Njcm9sbFRvKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSXRlbShzZWxlY3RJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFNlbGVjdEluZGV4KHRoaXMuX3NlbGVjdEluZGV4KVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY3JlYXRlTGlzdEl0ZW0oKSB7XG4gICAgICAgIGlmICghdGhpcy5saXN0SXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGl0ZW1Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbS5ub2RlKTtcbiAgICAgICAgaXRlbU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGl0ZW0gPSBpdGVtTm9kZS5nZXRDb21wb25lbnQoQ3VzdG9tTGlzdEl0ZW0pO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cblxuICAgIC8qKiDmu5HliqjliLDmnIDlkI4gKi9cbiAgICBzZXRUb0VuZCgpIHtcbiAgICAgICAgbGV0IHcgPSB0aGlzLnNjcm9sbFZpZXcubm9kZS53aWR0aDtcbiAgICAgICAgbGV0IGggPSB0aGlzLnNjcm9sbFZpZXcubm9kZS5oZWlnaHQ7XG4gICAgICAgIGxldCBheCA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmFuY2hvclg7XG4gICAgICAgIGxldCBheSA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmFuY2hvclk7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBTY3JvbGxEaXJlY3Rpb24uSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueCA9IC0odGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQud2lkdGggLSB3ICogKDEgLSBheCkpXG4gICAgICAgICAgICB0aGlzLl9sYXN0Q29udGVudFBvc1ggPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC54O1xuICAgICAgICAgICAgLy8gY2MubG9nKFwic2V0VG9FbmRcIix0aGlzLl9sYXN0Q29udGVudFBvc1gpXG5cbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAodGhpcy5faXRlbVdpZHRoICsgdGhpcy5zcGFjaW5nWCkgKiB0aGlzLl9pdGVtTm9kZXMubGVuZ3RoIC0gdGhpcy5faXRlbVdpZHRoICogMC41O1xuICAgICAgICAgICAgbGV0IHNwb3NYID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQud2lkdGggLSBvZmZzZXQ7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5zcGF3bkNvdW50ICYmIGluZGV4IDwgdGhpcy5faXRlbU5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbU5vZGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbUlkID0gdGhpcy5fdG90YWxDb3VudCAtIHRoaXMuc3Bhd25Db3VudCArIGluZGV4XG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGl0ZW1JZCx0aGlzLl9pdGVtRGF0YXNbaXRlbUlkXSlcbiAgICAgICAgICAgICAgICBpdGVtLmluaXRJdGVtKGl0ZW1JZCwgdGhpcy5nZXRJdGVtRGF0YShpdGVtSWQpLCB0aGlzLl9zZWxlY3REYXRhLCB0aGlzLmNhblRvdWNoSXRlbSwgdGhpcy5fc2VsZWN0SW5kZXggPT0gaXRlbUlkKTtcbiAgICAgICAgICAgICAgICBpdGVtLm5vZGUueCA9IHNwb3NYICsgKHRoaXMuX2l0ZW1XaWR0aCArIHRoaXMuc3BhY2luZ1gpICogaW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnkgPSAodGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuaGVpZ2h0IC0gaCAqICgxIC0gYXkpKVxuICAgICAgICAgICAgdGhpcy5fbGFzdENvbnRlbnRQb3NZID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueTtcblxuICAgICAgICAgICAgbGV0IG9mZnNldCA9ICh0aGlzLl9pdGVtSGVpZ2h0ICsgdGhpcy5zcGFjaW5nWSkgKiB0aGlzLl9pdGVtTm9kZXMubGVuZ3RoIC0gdGhpcy5faXRlbUhlaWdodCAqIDAuNTtcbiAgICAgICAgICAgIGxldCBzcG9zWSA9IC0odGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuaGVpZ2h0IC0gb2Zmc2V0KTtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnNwYXduQ291bnQgJiYgaW5kZXggPCB0aGlzLl9pdGVtTm9kZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9pdGVtTm9kZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtSWQgPSB0aGlzLl90b3RhbENvdW50IC0gdGhpcy5zcGF3bkNvdW50ICsgaW5kZXhcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coaXRlbUlkLHRoaXMuZ2V0SXRlbURhdGEoaXRlbUlkKSlcbiAgICAgICAgICAgICAgICBpdGVtLmluaXRJdGVtKGl0ZW1JZCwgdGhpcy5nZXRJdGVtRGF0YShpdGVtSWQpLCB0aGlzLl9zZWxlY3REYXRhLCB0aGlzLmNhblRvdWNoSXRlbSwgdGhpcy5fc2VsZWN0SW5kZXggPT0gaXRlbUlkKTtcbiAgICAgICAgICAgICAgICBpdGVtLm5vZGUueSA9IHNwb3NZIC0gKHRoaXMuX2l0ZW1IZWlnaHQgKyB0aGlzLnNwYWNpbmdZKSAqIGluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjYy5sb2coXCJzZXRUb0VuZFwiLHRoaXMuX2xhc3RDb250ZW50UG9zWSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVmcmVzaEFsbFNob3dJdGVtcygpIHtcbiAgICAgICAgdGhpcy5fcmVmcmVzaEFsbEl0ZW1EYXRhKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVmcmVzaEFsbEl0ZW1EYXRhKCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5faXRlbU5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9pdGVtTm9kZXNbaW5kZXhdO1xuICAgICAgICAgICAgbGV0IGl0ZW1JbmRleCA9IGl0ZW0uZ2V0SXRlbUluZGV4KCk7XG4gICAgICAgICAgICBpdGVtLmluaXRJdGVtKGl0ZW1JbmRleCwgdGhpcy5nZXRJdGVtRGF0YShpdGVtSW5kZXgpLCB0aGlzLl9zZWxlY3REYXRhLCB0aGlzLmNhblRvdWNoSXRlbSwgdGhpcy5fc2VsZWN0SW5kZXggPT0gaXRlbUluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3Jlc2V0U2Nyb2xsVmlld0NvbnRlbnRTaXplKCkge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gU2Nyb2xsRGlyZWN0aW9uLkhvcml6b250YWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LndpZHRoID0gdGhpcy5fdG90YWxDb3VudCAqICh0aGlzLl9pdGVtV2lkdGggKyB0aGlzLnNwYWNpbmdYKSArIHRoaXMuc3BhY2luZ1g7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5oZWlnaHQgPSB0aGlzLl90b3RhbENvdW50ICogKHRoaXMuX2l0ZW1IZWlnaHQgKyB0aGlzLnNwYWNpbmdZKSArIHRoaXMuc3BhY2luZ1k7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9jaGVja0NvbnRlbnRTaXplRnVsbCgpIHtcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLnNjcm9sbFZpZXcubm9kZS5nZXRDb250ZW50U2l6ZSgpO1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gU2Nyb2xsRGlyZWN0aW9uLkhvcml6b250YWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFZpZXcuY29udGVudC53aWR0aCA+PSBzaXplLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5oZWlnaHQgPj0gc2l6ZS5oZWlnaHQ7XG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgX2luaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5saXN0SXRlbSkge1xuICAgICAgICAgICAgY2Mud2FybihcIuWIl+ihqEl0ZW3kuLrnqbpcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9yZXNldFNjcm9sbFZpZXdSZWN0KCk7XG5cbiAgICAgICAgdGhpcy5faXRlbVdpZHRoID0gdGhpcy5saXN0SXRlbS5nZXRJdGVtV2lkdGgoKTtcbiAgICAgICAgdGhpcy5faXRlbUhlaWdodCA9IHRoaXMubGlzdEl0ZW0uZ2V0SXRlbUhlaWdodCgpO1xuXG4gICAgICAgIHRoaXMuX2l0ZW1Ob2Rlcy5sZW5ndGggPSAwO1xuXG4gICAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsVmlld0NvbnRlbnRTaXplKCk7XG5cbiAgICAgICAgLy8gaWYgKCF0aGlzLl9zdGFydFBvcykge1xuICAgICAgICAvLyAgICAgdGhpcy5fc3RhcnRQb3MgPSAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuZ2V0UG9zaXRpb24oKVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGNjLmxvZyhcIl9pbml0aWFsaXplXCIsdGhpcy5fc3RhcnRQb3MpXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnNldFBvc2l0aW9uKHRoaXMuX3N0YXJ0UG9zKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3Bhd25Db3VudCAmJiBpIDwgdGhpcy5faXRlbURhdGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1Ob2Rlc0NhY2hlW2ldXG4gICAgICAgICAgICBpZiAoaSA+PSB0aGlzLl9pdGVtTm9kZXNDYWNoZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5fY3JlYXRlTGlzdEl0ZW0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1Ob2Rlc0NhY2hlLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHYW1lVXRpbHMuZ2V0SW5zdGFuY2UoKS5zZXRWaXNpYmxlKGl0ZW0sIHRydWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09IFNjcm9sbERpcmVjdGlvbi5Ib3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5ub2RlLnNldFBvc2l0aW9uKHRoaXMuX2l0ZW1XaWR0aCAqICgwLjUgKyBpKSArIHRoaXMuc3BhY2luZ1ggKiAoaSArIDEpLCAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5ub2RlLnNldFBvc2l0aW9uKDAsIC0odGhpcy5faXRlbUhlaWdodCAqICgwLjUgKyBpKSArIHRoaXMuc3BhY2luZ1kgKiAoaSArIDEpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW0uaW5pdEl0ZW0oaSwgdGhpcy5nZXRJdGVtRGF0YShpKSwgdGhpcy5fc2VsZWN0RGF0YSwgdGhpcy5jYW5Ub3VjaEl0ZW0pO1xuXG4gICAgICAgICAgICB0aGlzLl9pdGVtTm9kZXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faXRlbU5vZGVzQ2FjaGUubGVuZ3RoID4gdGhpcy5faXRlbU5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX2l0ZW1Ob2Rlcy5sZW5ndGg7IGkgPCB0aGlzLl9pdGVtTm9kZXNDYWNoZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIEdhbWVVdGlscy5nZXRJbnN0YW5jZSgpLnNldFZpc2libGUodGhpcy5faXRlbU5vZGVzQ2FjaGVbaV0sIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaW5pdFdpdGhvdXREYXRhKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3Bhd25Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1Ob2Rlc0NhY2hlW2ldXG4gICAgICAgICAgICBpZiAoaSA+PSB0aGlzLl9pdGVtTm9kZXNDYWNoZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5fY3JlYXRlTGlzdEl0ZW0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1Ob2Rlc0NhY2hlLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHYW1lVXRpbHMuZ2V0SW5zdGFuY2UoKS5zZXRWaXNpYmxlKGl0ZW0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX29uc2V0U2VsZWN0SW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgICAgICAvLyBjYy5sb2coJ0N1c3RvbUxpc3RWaWV3IF9vbnNldFNlbGVjdEluZGV4ICcsaW5kZXgpO1xuICAgICAgICB0aGlzLl9zZWxlY3RJbmRleCA9IGluZGV4O1xuICAgIH1cblxuICAgIHNldFNlbGVjdEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgLy8gY2MubG9nKCdzZXRTZWxlY3RJbmRleCAgJyxpbmRleCk7XG4gICAgICAgIHRoaXMuX3NlbGVjdEluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2l0ZW1Ob2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbU5vZGVzW2luZGV4XTtcbiAgICAgICAgICAgIC8vIGNjLmxvZyhpdGVtLmdldEl0ZW1JbmRleCgpKVxuICAgICAgICAgICAgaWYgKGl0ZW0uZ2V0SXRlbUluZGV4KCkgPT0gdGhpcy5fc2VsZWN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ3NlbGVjdCAgdHJ1ZSAnLGl0ZW0uZ2V0SXRlbUluZGV4KCkpO1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0SXNDaGVja2VkSXRlbSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNlbGVjdEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0SW5kZXg7XG4gICAgfVxuXG4gICAgcmVzZXRJdGVtRGF0YShpbmRleDogbnVtYmVyLCBkYXRhOiBhbnkgPSBudWxsLCBzZWxlY3REYXRhOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1EYXRhc1tpbmRleF0gPSBkYXRhID8gZGF0YSA6dGhpcy5faXRlbURhdGFzW2luZGV4XTtcbiAgICAgICAgdGhpcy5faXRlbU5vZGVzW2luZGV4XS5pbml0SXRlbShpbmRleCwgZGF0YSwgc2VsZWN0RGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0VG90YWxDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvdGFsQ291bnQ7XG4gICAgfVxuXG4gICAgZ2V0SXRlbURhdGEoaW5kZXg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbURhdGFzW2luZGV4XTtcbiAgICB9XG5cbiAgICBnZXRTaG93SXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtTm9kZXM7XG4gICAgfVxuXG4gICAgZ2V0U3BhY2luZ1goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwYWNpbmdYXG4gICAgfVxuXG4gICAgZ2V0U3BhY2luZ1koKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwYWNpbmdZXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0SXRlbVBvcyhpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBTY3JvbGxEaXJlY3Rpb24uSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgcmV0dXJuIGNjLnYyKHRoaXMuX2l0ZW1XaWR0aCAqICgwLjUgKyBpbmRleCkgKyB0aGlzLnNwYWNpbmdYICogKGluZGV4ICsgMSksIDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYy52MigwLCAtKHRoaXMuX2l0ZW1IZWlnaHQgKiAoMC41ICsgaW5kZXgpICsgdGhpcy5zcGFjaW5nWSAqIChpbmRleCArIDEpKSk7XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9JdGVtKGluZGV4OiBudW1iZXIsIHNjcm9sbFRpbWU6IG51bWJlciA9IDEpIHtcbiAgICAgICAgLy8gY2MubG9nKCdzY3JvbGxUb0l0ZW0nKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLl90b3RhbENvdW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBlcmNlbnQgPSAoTWF0aC5hYnMoaW5kZXgpIC8gdGhpcy5fdG90YWxDb3VudClcbiAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgIHBlcmNlbnQgPSAwXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPj0gKHRoaXMuX3RvdGFsQ291bnQgLSAxKSkge1xuICAgICAgICAgICAgcGVyY2VudCA9IDFcbiAgICAgICAgfVxuICAgICAgICAvLyBsZXQgaXRlbVBvcyA9IHRoaXMuX2dldEl0ZW1Qb3MoaW5kZXgpO1xuXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBTY3JvbGxEaXJlY3Rpb24uSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgLy8gbGV0IHBlcmNlbnQgPSAxLShNYXRoLmFicyhpdGVtUG9zLngpIC8gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQud2lkdGgpXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9QZXJjZW50SG9yaXpvbnRhbChwZXJjZW50LCBzY3JvbGxUaW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGxldCBwZXJjZW50ID0gMS0oTWF0aC5hYnMoaXRlbVBvcy55KSAvIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmhlaWdodClcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb1BlcmNlbnRWZXJ0aWNhbChwZXJjZW50LCBzY3JvbGxUaW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5faXRlbU5vZGVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl91cGRhdGVUaW1lciArPSBkdDtcbiAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZVRpbWVyIDwgdGhpcy51cGRhdGVJbnRlcnZhbCkgcmV0dXJuOyAvLyB3ZSBkb24ndCBuZWVkIHRvIGRvIHRoZSBtYXRoIGV2ZXJ5IGZyYW1lXG4gICAgICAgIHRoaXMuX3VwZGF0ZVRpbWVyID0gMDtcblxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gU2Nyb2xsRGlyZWN0aW9uLkhvcml6b250YWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbFZpZXcuY29udGVudC54ID09IHRoaXMuX2xhc3RDb250ZW50UG9zWCkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGlzTGVmdCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnggPCB0aGlzLl9sYXN0Q29udGVudFBvc1g7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gKHRoaXMuX2l0ZW1XaWR0aCArIHRoaXMuc3BhY2luZ1gpICogdGhpcy5faXRlbU5vZGVzLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9pdGVtTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1Ob2Rlc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgd3AgPSBpdGVtLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKFwiaXRlbSB3cFwiLCBpLCBpdGVtLm5vZGUueCwgaXRlbS5ub2RlLnksIHdwLngsIHdwLnkpXG4gICAgICAgICAgICAgICAgbGV0IHdseCA9IHdwLnggLSBpdGVtLmdldEl0ZW1XaWR0aCgpO1xuICAgICAgICAgICAgICAgIGxldCB3cnggPSB3cC54ICsgaXRlbS5nZXRJdGVtV2lkdGgoKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcImlzTGVmdFwiLCB3cngsIHRoaXMuX3Njcm9sbFZpZXdXb3JsZFBvc2VzWzBdLngsIGl0ZW0ubm9kZS54LCBvZmZzZXQsIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LndpZHRoLCB3cnggPCB0aGlzLl9zY3JvbGxWaWV3V29ybGRQb3Nlc1swXS54ICYmIGl0ZW0ubm9kZS54ICsgb2Zmc2V0IDwgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQud2lkdGgpXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGF3YXkgZnJvbSBidWZmZXIgem9uZSBhbmQgbm90IHJlYWNoaW5nIHRvcCBvZiBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgIGlmICh3cnggPCB0aGlzLl9zY3JvbGxWaWV3V29ybGRQb3Nlc1swXS54ICYmIGl0ZW0ubm9kZS54ICsgb2Zmc2V0IDwgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9kZS54ID0gKGl0ZW0ubm9kZS54ICsgb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSBpdGVtLmdldEl0ZW1JbmRleCgpICsgdGhpcy5faXRlbU5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5pdEl0ZW0oZGF0YUluZGV4LCB0aGlzLmdldEl0ZW1EYXRhKGRhdGFJbmRleCksIHRoaXMuX3NlbGVjdERhdGEsIHRoaXMuY2FuVG91Y2hJdGVtLCB0aGlzLl9zZWxlY3RJbmRleCA9PSBkYXRhSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKFwiaXNSaWdodFwiLCB3bHgsIHRoaXMuX3Njcm9sbFZpZXdXb3JsZFBvc2VzWzFdLngsIGl0ZW0ubm9kZS54LCBvZmZzZXQsIHdseCA+IHRoaXMuX3Njcm9sbFZpZXdXb3JsZFBvc2VzWzFdLnggJiYgaXRlbS5ub2RlLnggLSBvZmZzZXQgPiAwKVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBhd2F5IGZyb20gYnVmZmVyIHpvbmUgYW5kIG5vdCByZWFjaGluZyBib3R0b20gb2YgY29udGVudFxuICAgICAgICAgICAgICAgICAgICBpZiAod2x4ID4gdGhpcy5fc2Nyb2xsVmlld1dvcmxkUG9zZXNbMV0ueCAmJiBpdGVtLm5vZGUueCAtIG9mZnNldCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9kZS54ID0gKGl0ZW0ubm9kZS54IC0gb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSBpdGVtLmdldEl0ZW1JbmRleCgpIC0gdGhpcy5faXRlbU5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5pdEl0ZW0oZGF0YUluZGV4LCB0aGlzLmdldEl0ZW1EYXRhKGRhdGFJbmRleCksIHRoaXMuX3NlbGVjdERhdGEsIHRoaXMuY2FuVG91Y2hJdGVtLCB0aGlzLl9zZWxlY3RJbmRleCA9PSBkYXRhSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbGFzdENvbnRlbnRQb3NYID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueDtcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIl9sYXN0Q29udGVudFBvc1hcIix0aGlzLl9sYXN0Q29udGVudFBvc1gpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbGFzdENvbnRlbnRQb3NZID09IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpc0Rvd24gPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC55IDwgdGhpcy5fbGFzdENvbnRlbnRQb3NZO1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9ICh0aGlzLl9pdGVtSGVpZ2h0ICsgdGhpcy5zcGFjaW5nWSkgKiB0aGlzLl9pdGVtTm9kZXMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2l0ZW1Ob2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbU5vZGVzW2ldO1xuICAgICAgICAgICAgICAgIGxldCB3cCA9IGl0ZW0ubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKTtcbiAgICAgICAgICAgICAgICBsZXQgd3R5ID0gd3AueSArIGl0ZW0uZ2V0SXRlbUhlaWdodCgpO1xuICAgICAgICAgICAgICAgIGxldCB3YnkgPSB3cC55IC0gaXRlbS5nZXRJdGVtSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzRG93bikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBhd2F5IGZyb20gYnVmZmVyIHpvbmUgYW5kIG5vdCByZWFjaGluZyB0b3Agb2YgY29udGVudFxuICAgICAgICAgICAgICAgICAgICBpZiAod3R5IDwgdGhpcy5fc2Nyb2xsVmlld1dvcmxkUG9zZXNbMF0ueSAmJiBpdGVtLm5vZGUueSArIG9mZnNldCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9kZS55ID0gKGl0ZW0ubm9kZS55ICsgb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSBpdGVtLmdldEl0ZW1JbmRleCgpIC0gdGhpcy5faXRlbU5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5pdEl0ZW0oZGF0YUluZGV4LCB0aGlzLmdldEl0ZW1EYXRhKGRhdGFJbmRleCksIHRoaXMuX3NlbGVjdERhdGEsIHRoaXMuY2FuVG91Y2hJdGVtLCB0aGlzLl9zZWxlY3RJbmRleCA9PSBkYXRhSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgYXdheSBmcm9tIGJ1ZmZlciB6b25lIGFuZCBub3QgcmVhY2hpbmcgYm90dG9tIG9mIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdieSA+IHRoaXMuX3Njcm9sbFZpZXdXb3JsZFBvc2VzWzNdLnkgJiYgaXRlbS5ub2RlLnkgLSBvZmZzZXQgPiAtdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5vZGUueSA9IChpdGVtLm5vZGUueSAtIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gaXRlbS5nZXRJdGVtSW5kZXgoKSArIHRoaXMuX2l0ZW1Ob2Rlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluaXRJdGVtKGRhdGFJbmRleCwgdGhpcy5nZXRJdGVtRGF0YShkYXRhSW5kZXgpLCB0aGlzLl9zZWxlY3REYXRhLCB0aGlzLmNhblRvdWNoSXRlbSwgdGhpcy5fc2VsZWN0SW5kZXggPT0gZGF0YUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fbGFzdENvbnRlbnRQb3NZID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueTtcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIl9sYXN0Q29udGVudFBvc1lcIix0aGlzLl9sYXN0Q29udGVudFBvc1kpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wQXV0b1Njcm9sbCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKClcbiAgICB9XG5cbiAgICBzY3JvbGxUb0xlZnQodGltZUluU2Vjb25kPzogbnVtYmVyLCBhdHRlbnVhdGVkPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9MZWZ0KHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjcm9sbFRvUmlnaHQodGltZUluU2Vjb25kPzogbnVtYmVyLCBhdHRlbnVhdGVkPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9SaWdodCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxUb1RvcCh0aW1lSW5TZWNvbmQ/OiBudW1iZXIsIGF0dGVudWF0ZWQ/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb1RvcCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxUb0JvdHRvbSh0aW1lSW5TZWNvbmQ/OiBudW1iZXIsIGF0dGVudWF0ZWQ/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb0JvdHRvbSh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxUb09mZnNldChvZmZzZXQ6IGNjLlZlYzIsIHRpbWVJblNlY29uZD86IG51bWJlciwgYXR0ZW51YXRlZD86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsVmlldykge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvT2Zmc2V0KG9mZnNldCwgdGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2Nyb2xsT2Zmc2V0KCkge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxWaWV3KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxWaWV3LmdldFNjcm9sbE9mZnNldCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNYXhTY3JvbGxPZmZzZXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbFZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFZpZXcuZ2V0TWF4U2Nyb2xsT2Zmc2V0KClcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/SpineManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3df57yJEQVNAaMCWzJcor+T', 'SpineManager');
// Script/Manager/SpineManager.ts

"use strict";
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
var SpineManager = /** @class */ (function () {
    function SpineManager() {
        this._skeletonDatas = {};
        this._superior = {};
        this._soldierBundle = null;
    }
    SpineManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new SpineManager();
        }
        return this._instance;
    };
    SpineManager.prototype._isNull = function (arg) {
        return arg == null || arg == undefined;
    };
    SpineManager.prototype._getSkeletonData = function (name, superior) {
        if (this._skeletonDatas[name]) {
            // cc.log("_getSpriteFarme",name);
            this._addSuperiorData(name, superior);
            return this._skeletonDatas[name];
        }
        return null;
    };
    SpineManager.prototype._addSuperiorData = function (path, superior) {
        if (this._isNull(this._superior[superior])) {
            this._superior[superior] = {};
        }
        if (this._isNull(this._superior[superior][path])) {
            this._superior[superior][path] = true;
        }
    };
    SpineManager.prototype._checkSuperior = function (superior) {
        var clearList = [];
        if (this._isNull(this._superior[superior])) {
            return clearList;
        }
        for (var skey in this._superior[superior]) {
            var isHave = false;
            for (var key in this._superior) {
                if (key == superior) {
                    continue;
                }
                for (var kk in this._superior[key]) {
                    if (kk == skey) {
                        isHave = true;
                        break;
                    }
                }
                if (isHave) {
                    break;
                }
            }
            if (!isHave) {
                clearList.push(skey);
            }
        }
        return clearList;
    };
    SpineManager.prototype._checkPathSuperior = function (path, superior) {
        var clearList = [];
        if (this._isNull(this._superior[superior])) {
            return clearList;
        }
        var isHave = false;
        for (var key in this._superior) {
            if (key == superior) {
                continue;
            }
            for (var kk in this._superior[key]) {
                if (kk == path) {
                    isHave = true;
                    break;
                }
            }
        }
        if (!isHave) {
            clearList.push(path);
        }
        return clearList;
    };
    SpineManager.prototype.preloadSkeletonData = function (path, superior, cb) {
        var _this = this;
        if (this._skeletonDatas[path]) {
            this._addSuperiorData(path, superior);
            cb(path + "*@*" + superior);
            cc.log("preloadSkeletonData have ", path);
            return;
        }
        cc.resources.load(path, sp.SkeletonData, function (err, skeletonData) {
            if (err) {
                cc.log("loadSkeletonData err", err);
                cb(path + "*@*" + superior);
                return;
            }
            cc.log("preloadSkeletonData have ", path);
            _this._skeletonDatas[path] = skeletonData;
            _this._addSuperiorData(path, superior);
            skeletonData.addRef();
            cb(path + "*@*" + superior);
        });
    };
    SpineManager.prototype.loadBundleSkeletonData = function (path, superior) {
        if (superior === void 0) { superior = ""; }
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this._skeletonDatas[path]) {
                            cc.log("loadskeletonData have ", path);
                            _this._addSuperiorData(path, superior);
                            resolve(_this._skeletonDatas[path]);
                            return;
                        }
                        var bundle = cc.assetManager.getBundle("PlayerEffect");
                        bundle.load(path, sp.SkeletonData, function (err, skeletonData) {
                            if (err) {
                                cc.warn("loadskeletonData err", err);
                                resolve(null);
                                return;
                            }
                            _this._skeletonDatas[path] = skeletonData;
                            // cc.log("loadskeletonData nononohave ",path);
                            _this._addSuperiorData(path, superior);
                            skeletonData.addRef();
                            resolve(skeletonData);
                        });
                    })];
            });
        });
    };
    SpineManager.prototype.loadSkeletonData = function (path, superior) {
        if (superior === void 0) { superior = ""; }
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this._skeletonDatas[path]) {
                            cc.log("loadskeletonData have ", path);
                            _this._addSuperiorData(path, superior);
                            resolve(_this._skeletonDatas[path]);
                            return;
                        }
                        cc.resources.load(path, sp.SkeletonData, function (err, skeletonData) {
                            if (err) {
                                cc.warn("loadskeletonData err", err);
                                resolve(null);
                                return;
                            }
                            _this._skeletonDatas[path] = skeletonData;
                            // cc.log("loadskeletonData nononohave ",path);
                            _this._addSuperiorData(path, superior);
                            skeletonData.addRef();
                            resolve(skeletonData);
                        });
                    })];
            });
        });
    };
    SpineManager.prototype.getBundleSkeletonData = function (name, superior) {
        if (superior === void 0) { superior = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var sf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadBundleSkeletonData(name, superior)];
                    case 1:
                        sf = _a.sent();
                        if (sf) {
                            return [2 /*return*/, sf];
                        }
                        return [4 /*yield*/, this.loadSkeletonData(name, superior)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SpineManager.prototype.getSkeletonData = function (name, superior) {
        if (superior === void 0) { superior = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var sf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sf = this._getSkeletonData(name, superior);
                        if (sf) {
                            return [2 /*return*/, sf];
                        }
                        return [4 /*yield*/, this.loadSkeletonData(name, superior)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 播放spine动画回调接口
     * @param spine  动画
     * @param listener
     * @param name
     * @param loop boolen 默认不循环
     * @param hideOnComplete bool 默认隐藏
     * @returns
     */
    SpineManager.prototype.playSpineAni = function (spine, listener, name, loop, hideOnComplete) {
        if (listener === void 0) { listener = null; }
        if (name === void 0) { name = ""; }
        if (loop === void 0) { loop = false; }
        if (hideOnComplete === void 0) { hideOnComplete = true; }
        if (spine == null || !spine.isValid) {
            // if(Global.showLog == true)
            cc.warn("spine 动画为空", name);
            return;
        }
        if (!name) {
            cc.warn("spine 动画名为空", spine.skeletonData.name, spine.node.name);
            return;
        }
        // spine.node.active = false;
        // spine.node.active = true;
        if (!spine.isAnimationCached()) {
            spine.clearTracks();
        }
        spine.setToSetupPose();
        spine.setAnimation(0, name, loop);
        // spine.animation = name;
        // spine.loop = loop;
        spine.setCompleteListener(function () {
            if (hideOnComplete) {
                spine.node.active = false;
                // spine.node.opacity = 0;
            }
            if (listener != null) {
                listener();
            }
        });
    };
    /**
     * 播放spine动画随机起始时间回调接口
     * @param spine  动画
     * @param listener
     * @param name
     * @param startdt 起始时间，0到1之间，(0,1) // 小于等于0 或 大于等于1 为随机起始时间
     * @param loop boolen 默认不循环
     * @param hideOnComplete bool 默认隐藏
     * @returns
     */
    SpineManager.prototype.playSpineAniByStart = function (spine, listener, name, startdt, loop, hideOnComplete) {
        if (listener === void 0) { listener = null; }
        if (name === void 0) { name = ""; }
        if (startdt === void 0) { startdt = 0; }
        if (loop === void 0) { loop = false; }
        if (hideOnComplete === void 0) { hideOnComplete = true; }
        if (spine == null || !spine.isValid) {
            // if(Global.showLog == true)
            cc.warn("spine 动画为空", name);
            return;
        }
        if (!name) {
            cc.warn("spine 动画名为空", spine.node.name);
            return;
        }
        // spine.node.active = false;
        // spine.node.active = true;
        if (!spine.isAnimationCached()) {
            spine.clearTracks();
        }
        spine.setToSetupPose();
        var track = spine.setAnimation(0, name, loop);
        if (!track && spine.isAnimationCached()) {
            track = spine.getCurrent(0);
        }
        if (startdt <= 0 || startdt >= 1) {
            track.animationStart = Math.random();
        }
        else {
            track.animationStart = startdt;
        }
        // spine.animation = name;
        // spine.loop = loop;
        spine.setCompleteListener(function () {
            track.animationStart = 0;
            if (hideOnComplete) {
                spine.node.active = false;
                // spine.node.opacity = 0;
            }
            if (listener != null) {
                listener();
            }
        });
    };
    SpineManager.prototype.clearObject = function (path, superior) {
        var clearList = this._checkPathSuperior(path, superior);
        if (this._superior[superior] && this._superior[superior][path]) {
            delete this._superior[superior][path];
        }
        for (var i = 0; i < clearList.length; ++i) {
            if (this._skeletonDatas[clearList[i]]) {
                this._skeletonDatas[clearList[i]].decRef();
                delete this._skeletonDatas[clearList[i]];
            }
        }
        // MemoryManager.getInstance().removeMeoryAsset(clearList);
    };
    SpineManager.prototype.clearSuperiorObject = function (superior) {
        var clearList = this._checkSuperior(superior);
        if (this._superior[superior]) {
            delete this._superior[superior];
        }
        for (var i = 0; i < clearList.length; ++i) {
            if (this._skeletonDatas[clearList[i]]) {
                this._skeletonDatas[clearList[i]].decRef();
                delete this._skeletonDatas[clearList[i]];
            }
        }
        // MemoryManager.getInstance().removeMeoryAsset(clearList);
    };
    SpineManager.prototype.clearAllSuperiorObject = function () {
        for (var key in this._superior) {
            this.clearSuperiorObject(key);
            delete this._superior[key];
        }
        // MemoryManager.getInstance().removeMeoryAsset(clearList);
    };
    SpineManager._instance = null;
    return SpineManager;
}());
exports.default = SpineManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxTcGluZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQUFBO1FBQ1ksbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixtQkFBYyxHQUFHLElBQUksQ0FBQTtJQTZTakMsQ0FBQztJQTFTaUIsd0JBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FDdkM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVPLDhCQUFPLEdBQWYsVUFBZ0IsR0FBRztRQUNmLE9BQU8sR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFFTyx1Q0FBZ0IsR0FBeEIsVUFBeUIsSUFBWSxFQUFFLFFBQWdCO1FBQ25ELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQixrQ0FBa0M7WUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN0QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU8sdUNBQWdCLEdBQXhCLFVBQXlCLElBQVksRUFBRSxRQUFnQjtRQUNuRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxJQUFJLENB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LENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN2QyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7Z0JBQzFDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1QztTQUNKO1FBQ0QsMkRBQTJEO0lBQy9ELENBQUM7SUFFTSw2Q0FBc0IsR0FBN0I7UUFDSSxLQUFLLElBQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM5QjtRQUVELDJEQUEyRDtJQUMvRCxDQUFDO0lBMVNjLHNCQUFTLEdBQWlCLElBQUksQ0FBQztJQTJTbEQsbUJBQUM7Q0FoVEQsQUFnVEMsSUFBQTtrQkFoVG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGluZU1hbmFnZXIge1xuICAgIHByaXZhdGUgX3NrZWxldG9uRGF0YXM6IGFueSA9IHt9O1xuICAgIHByaXZhdGUgX3N1cGVyaW9yOiBhbnkgPSB7fTtcbiAgICBwcml2YXRlIF9zb2xkaWVyQnVuZGxlID0gbnVsbFxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTcGluZU1hbmFnZXIgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFNwaW5lTWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc051bGwoYXJnKSB7XG4gICAgICAgIHJldHVybiBhcmcgPT0gbnVsbCB8fCBhcmcgPT0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFNrZWxldG9uRGF0YShuYW1lOiBzdHJpbmcsIHN1cGVyaW9yOiBzdHJpbmcpOiBzcC5Ta2VsZXRvbkRhdGEge1xuICAgICAgICBpZiAodGhpcy5fc2tlbGV0b25EYXRhc1tuYW1lXSkge1xuICAgICAgICAgICAgLy8gY2MubG9nKFwiX2dldFNwcml0ZUZhcm1lXCIsbmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9hZGRTdXBlcmlvckRhdGEobmFtZSwgc3VwZXJpb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NrZWxldG9uRGF0YXNbbmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hZGRTdXBlcmlvckRhdGEocGF0aDogc3RyaW5nLCBzdXBlcmlvcjogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc051bGwodGhpcy5fc3VwZXJpb3Jbc3VwZXJpb3JdKSkge1xuICAgICAgICAgICAgdGhpcy5fc3VwZXJpb3Jbc3VwZXJpb3JdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lzTnVsbCh0aGlzLl9zdXBlcmlvcltzdXBlcmlvcl1bcGF0aF0pKSB7XG4gICAgICAgICAgICB0aGlzLl9zdXBlcmlvcltzdXBlcmlvcl1bcGF0aF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2hlY2tTdXBlcmlvcihzdXBlcmlvcjogc3RyaW5nKSB7XG4gICAgICAgIGxldCBjbGVhckxpc3Q6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGlmICh0aGlzLl9pc051bGwodGhpcy5fc3VwZXJpb3Jbc3VwZXJpb3JdKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNsZWFyTGlzdDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBza2V5IGluIHRoaXMuX3N1cGVyaW9yW3N1cGVyaW9yXSkge1xuICAgICAgICAgICAgbGV0IGlzSGF2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuX3N1cGVyaW9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PSBzdXBlcmlvcikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2sgaW4gdGhpcy5fc3VwZXJpb3Jba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2sgPT0gc2tleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNIYXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc0hhdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc0hhdmUpIHtcbiAgICAgICAgICAgICAgICBjbGVhckxpc3QucHVzaChza2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xlYXJMaXN0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NoZWNrUGF0aFN1cGVyaW9yKHBhdGg6IHN0cmluZywgc3VwZXJpb3I6IHN0cmluZykge1xuICAgICAgICBsZXQgY2xlYXJMaXN0OiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBpZiAodGhpcy5faXNOdWxsKHRoaXMuX3N1cGVyaW9yW3N1cGVyaW9yXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGVhckxpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlzSGF2ZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fc3VwZXJpb3IpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT0gc3VwZXJpb3IpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGtrIGluIHRoaXMuX3N1cGVyaW9yW2tleV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2sgPT0gcGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBpc0hhdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0hhdmUpIHtcbiAgICAgICAgICAgIGNsZWFyTGlzdC5wdXNoKHBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGVhckxpc3Q7XG4gICAgfVxuXG4gICAgcHVibGljIHByZWxvYWRTa2VsZXRvbkRhdGEocGF0aDogc3RyaW5nLCBzdXBlcmlvcjogc3RyaW5nLCBjYjogRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX3NrZWxldG9uRGF0YXNbcGF0aF0pIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFN1cGVyaW9yRGF0YShwYXRoLCBzdXBlcmlvcik7XG4gICAgICAgICAgICBjYihwYXRoICsgXCIqQCpcIiArIHN1cGVyaW9yKTtcbiAgICAgICAgICAgIGNjLmxvZyhcInByZWxvYWRTa2VsZXRvbkRhdGEgaGF2ZSBcIiwgcGF0aCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgc3AuU2tlbGV0b25EYXRhLCAoZXJyLCBza2VsZXRvbkRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJsb2FkU2tlbGV0b25EYXRhIGVyclwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIGNiKHBhdGggKyBcIipAKlwiICsgc3VwZXJpb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLmxvZyhcInByZWxvYWRTa2VsZXRvbkRhdGEgaGF2ZSBcIiwgcGF0aCk7XG4gICAgICAgICAgICB0aGlzLl9za2VsZXRvbkRhdGFzW3BhdGhdID0gc2tlbGV0b25EYXRhO1xuICAgICAgICAgICAgdGhpcy5fYWRkU3VwZXJpb3JEYXRhKHBhdGgsIHN1cGVyaW9yKTtcbiAgICAgICAgICAgIHNrZWxldG9uRGF0YS5hZGRSZWYoKVxuICAgICAgICAgICAgY2IocGF0aCArIFwiKkAqXCIgKyBzdXBlcmlvcik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGxvYWRCdW5kbGVTa2VsZXRvbkRhdGEocGF0aDogc3RyaW5nLCBzdXBlcmlvcjogc3RyaW5nID0gXCJcIik6IFByb21pc2U8c3AuU2tlbGV0b25EYXRhPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzcC5Ta2VsZXRvbkRhdGE+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9za2VsZXRvbkRhdGFzW3BhdGhdKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwibG9hZHNrZWxldG9uRGF0YSBoYXZlIFwiLCBwYXRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRTdXBlcmlvckRhdGEocGF0aCwgc3VwZXJpb3IpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fc2tlbGV0b25EYXRhc1twYXRoXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoXCJQbGF5ZXJFZmZlY3RcIik7XG4gICAgICAgICAgICBidW5kbGUubG9hZChwYXRoLCBzcC5Ta2VsZXRvbkRhdGEsIChlcnIsIHNrZWxldG9uRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2Mud2FybihcImxvYWRza2VsZXRvbkRhdGEgZXJyXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b25EYXRhc1twYXRoXSA9IHNrZWxldG9uRGF0YTtcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCJsb2Fkc2tlbGV0b25EYXRhIG5vbm9ub2hhdmUgXCIscGF0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkU3VwZXJpb3JEYXRhKHBhdGgsIHN1cGVyaW9yKTtcbiAgICAgICAgICAgICAgICBza2VsZXRvbkRhdGEuYWRkUmVmKClcbiAgICAgICAgICAgICAgICByZXNvbHZlKHNrZWxldG9uRGF0YSBhcyBzcC5Ta2VsZXRvbkRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBsb2FkU2tlbGV0b25EYXRhKHBhdGg6IHN0cmluZywgc3VwZXJpb3I6IHN0cmluZyA9IFwiXCIpOiBQcm9taXNlPHNwLlNrZWxldG9uRGF0YT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3AuU2tlbGV0b25EYXRhPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2tlbGV0b25EYXRhc1twYXRoXSkge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcImxvYWRza2VsZXRvbkRhdGEgaGF2ZSBcIiwgcGF0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkU3VwZXJpb3JEYXRhKHBhdGgsIHN1cGVyaW9yKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3NrZWxldG9uRGF0YXNbcGF0aF0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIHNwLlNrZWxldG9uRGF0YSwgKGVyciwgc2tlbGV0b25EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYy53YXJuKFwibG9hZHNrZWxldG9uRGF0YSBlcnJcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbkRhdGFzW3BhdGhdID0gc2tlbGV0b25EYXRhO1xuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcImxvYWRza2VsZXRvbkRhdGEgbm9ub25vaGF2ZSBcIixwYXRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRTdXBlcmlvckRhdGEocGF0aCwgc3VwZXJpb3IpO1xuICAgICAgICAgICAgICAgIHNrZWxldG9uRGF0YS5hZGRSZWYoKVxuICAgICAgICAgICAgICAgIHJlc29sdmUoc2tlbGV0b25EYXRhIGFzIHNwLlNrZWxldG9uRGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldEJ1bmRsZVNrZWxldG9uRGF0YShuYW1lOiBzdHJpbmcsIHN1cGVyaW9yOiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLl9nZXRTcHJpdGVGYXJtZShuYW1lKTtcbiAgICAgICAgbGV0IHNmOiBzcC5Ta2VsZXRvbkRhdGEgPSBhd2FpdCB0aGlzLmxvYWRCdW5kbGVTa2VsZXRvbkRhdGEobmFtZSwgc3VwZXJpb3IpO1xuICAgICAgICBpZiAoc2YpIHtcbiAgICAgICAgICAgIHJldHVybiBzZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5sb2FkU2tlbGV0b25EYXRhKG5hbWUsIHN1cGVyaW9yKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0U2tlbGV0b25EYXRhKG5hbWU6IHN0cmluZywgc3VwZXJpb3I6IHN0cmluZyA9IFwiXCIpIHtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuX2dldFNwcml0ZUZhcm1lKG5hbWUpO1xuICAgICAgICBsZXQgc2Y6IHNwLlNrZWxldG9uRGF0YSA9IHRoaXMuX2dldFNrZWxldG9uRGF0YShuYW1lLCBzdXBlcmlvcik7XG4gICAgICAgIGlmIChzZikge1xuICAgICAgICAgICAgcmV0dXJuIHNmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmxvYWRTa2VsZXRvbkRhdGEobmFtZSwgc3VwZXJpb3IpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaSreaUvnNwaW5l5Yqo55S75Zue6LCD5o6l5Y+jXG4gICAgICogQHBhcmFtIHNwaW5lICDliqjnlLtcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgXG4gICAgICogQHBhcmFtIG5hbWUgXG4gICAgICogQHBhcmFtIGxvb3AgYm9vbGVuIOm7mOiupOS4jeW+queOr1xuICAgICAqIEBwYXJhbSBoaWRlT25Db21wbGV0ZSBib29sIOm7mOiupOmakOiXj1xuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBwbGF5U3BpbmVBbmkoc3BpbmU6IHNwLlNrZWxldG9uLCBsaXN0ZW5lcjogYW55ID0gbnVsbCwgbmFtZTogc3RyaW5nID0gXCJcIiwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBoaWRlT25Db21wbGV0ZTogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgaWYgKHNwaW5lID09IG51bGwgfHwgIXNwaW5lLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIC8vIGlmKEdsb2JhbC5zaG93TG9nID09IHRydWUpXG4gICAgICAgICAgICBjYy53YXJuKFwic3BpbmUg5Yqo55S75Li656m6XCIsIG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgY2Mud2FybihcInNwaW5lIOWKqOeUu+WQjeS4uuepulwiLCBzcGluZS5za2VsZXRvbkRhdGEubmFtZSwgc3BpbmUubm9kZS5uYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBzcGluZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyBzcGluZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKCFzcGluZS5pc0FuaW1hdGlvbkNhY2hlZCgpKSB7XG4gICAgICAgICAgICBzcGluZS5jbGVhclRyYWNrcygpO1xuICAgICAgICB9XG4gICAgICAgIHNwaW5lLnNldFRvU2V0dXBQb3NlKCk7XG4gICAgICAgIHNwaW5lLnNldEFuaW1hdGlvbigwLCBuYW1lLCBsb29wKTtcbiAgICAgICAgLy8gc3BpbmUuYW5pbWF0aW9uID0gbmFtZTtcbiAgICAgICAgLy8gc3BpbmUubG9vcCA9IGxvb3A7XG5cbiAgICAgICAgc3BpbmUuc2V0Q29tcGxldGVMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaGlkZU9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBzcGluZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIHNwaW5lLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsaXN0ZW5lciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pKt5pS+c3BpbmXliqjnlLvpmo/mnLrotbflp4vml7bpl7Tlm57osIPmjqXlj6NcbiAgICAgKiBAcGFyYW0gc3BpbmUgIOWKqOeUu1xuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBcbiAgICAgKiBAcGFyYW0gbmFtZSBcbiAgICAgKiBAcGFyYW0gc3RhcnRkdCDotbflp4vml7bpl7TvvIww5YiwMeS5i+mXtO+8jCgwLDEpIC8vIOWwj+S6juetieS6jjAg5oiWIOWkp+S6juetieS6jjEg5Li66ZqP5py66LW35aeL5pe26Ze0XG4gICAgICogQHBhcmFtIGxvb3AgYm9vbGVuIOm7mOiupOS4jeW+queOr1xuICAgICAqIEBwYXJhbSBoaWRlT25Db21wbGV0ZSBib29sIOm7mOiupOmakOiXj1xuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBwbGF5U3BpbmVBbmlCeVN0YXJ0KHNwaW5lOiBzcC5Ta2VsZXRvbiwgbGlzdGVuZXI6IGFueSA9IG51bGwsIG5hbWU6IHN0cmluZyA9IFwiXCIsIHN0YXJ0ZHQ6IG51bWJlciA9IDAsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgaGlkZU9uQ29tcGxldGU6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGlmIChzcGluZSA9PSBudWxsIHx8ICFzcGluZS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAvLyBpZihHbG9iYWwuc2hvd0xvZyA9PSB0cnVlKVxuICAgICAgICAgICAgY2Mud2FybihcInNwaW5lIOWKqOeUu+S4uuepulwiLCBuYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJzcGluZSDliqjnlLvlkI3kuLrnqbpcIiwgc3BpbmUubm9kZS5uYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBzcGluZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyBzcGluZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKCFzcGluZS5pc0FuaW1hdGlvbkNhY2hlZCgpKSB7XG4gICAgICAgICAgICBzcGluZS5jbGVhclRyYWNrcygpO1xuICAgICAgICB9XG4gICAgICAgIHNwaW5lLnNldFRvU2V0dXBQb3NlKCk7XG4gICAgICAgIGxldCB0cmFjazogc3Auc3BpbmUuVHJhY2tFbnRyeSA9IHNwaW5lLnNldEFuaW1hdGlvbigwLCBuYW1lLCBsb29wKTtcbiAgICAgICAgaWYgKCF0cmFjayAmJiBzcGluZS5pc0FuaW1hdGlvbkNhY2hlZCgpKSB7XG4gICAgICAgICAgICB0cmFjayA9IHNwaW5lLmdldEN1cnJlbnQoMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZHQgPD0gMCB8fCBzdGFydGR0ID49IDEpIHtcbiAgICAgICAgICAgIHRyYWNrLmFuaW1hdGlvblN0YXJ0ID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyYWNrLmFuaW1hdGlvblN0YXJ0ID0gc3RhcnRkdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBzcGluZS5hbmltYXRpb24gPSBuYW1lO1xuICAgICAgICAvLyBzcGluZS5sb29wID0gbG9vcDtcblxuICAgICAgICBzcGluZS5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgIHRyYWNrLmFuaW1hdGlvblN0YXJ0ID0gMDtcbiAgICAgICAgICAgIGlmIChoaWRlT25Db21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHNwaW5lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gc3BpbmUubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxpc3RlbmVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJPYmplY3QocGF0aDogc3RyaW5nLCBzdXBlcmlvcjogc3RyaW5nKSB7XG4gICAgICAgIGxldCBjbGVhckxpc3QgPSB0aGlzLl9jaGVja1BhdGhTdXBlcmlvcihwYXRoLCBzdXBlcmlvcik7XG4gICAgICAgIGlmICh0aGlzLl9zdXBlcmlvcltzdXBlcmlvcl0gJiYgdGhpcy5fc3VwZXJpb3Jbc3VwZXJpb3JdW3BhdGhdKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fc3VwZXJpb3Jbc3VwZXJpb3JdW3BhdGhdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xlYXJMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2tlbGV0b25EYXRhc1tjbGVhckxpc3RbaV1dKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b25EYXRhc1tjbGVhckxpc3RbaV1dLmRlY1JlZigpXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3NrZWxldG9uRGF0YXNbY2xlYXJMaXN0W2ldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBNZW1vcnlNYW5hZ2VyLmdldEluc3RhbmNlKCkucmVtb3ZlTWVvcnlBc3NldChjbGVhckxpc3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclN1cGVyaW9yT2JqZWN0KHN1cGVyaW9yOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGNsZWFyTGlzdCA9IHRoaXMuX2NoZWNrU3VwZXJpb3Ioc3VwZXJpb3IpO1xuICAgICAgICBpZiAodGhpcy5fc3VwZXJpb3Jbc3VwZXJpb3JdKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fc3VwZXJpb3Jbc3VwZXJpb3JdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xlYXJMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2tlbGV0b25EYXRhc1tjbGVhckxpc3RbaV1dKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b25EYXRhc1tjbGVhckxpc3RbaV1dLmRlY1JlZigpXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3NrZWxldG9uRGF0YXNbY2xlYXJMaXN0W2ldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBNZW1vcnlNYW5hZ2VyLmdldEluc3RhbmNlKCkucmVtb3ZlTWVvcnlBc3NldChjbGVhckxpc3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckFsbFN1cGVyaW9yT2JqZWN0KCkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdXBlcmlvcikge1xuICAgICAgICAgICAgdGhpcy5jbGVhclN1cGVyaW9yT2JqZWN0KGtleSk7XG5cbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9zdXBlcmlvcltrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWVtb3J5TWFuYWdlci5nZXRJbnN0YW5jZSgpLnJlbW92ZU1lb3J5QXNzZXQoY2xlYXJMaXN0KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Ctrl/SdkCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b1deV1fjRGEJ90nKNh3ltk', 'SdkCtrl');
// Script/Ctrl/SdkCtrl.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameData_1 = require("../Other/GameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SdkCtrl = /** @class */ (function () {
    function SdkCtrl() {
        this.rewardedVideoAdID = "adunit-xxxxxxxxxxxxxxx";
        this.bannerVideoAdID = "adunit-xxxxxxxxxxxxxxx";
        this.interstitialAdID = "adunit-xxxxxxxxxxxxxxx";
        this.leftCustomAdID = "adunit-xxxxxxxxxxxxxxx";
        this.rightCustomAdID = "adunit-xxxxxxxxxxxxxxx";
        this.flveCustomAdID = "adunit-xxxxxxxxxxxxxxx";
        this.rewardedVideoAd = null;
        this.bannerVideoAd = null;
        this.successFun = null;
        this.failFun = null;
        this.isfiveCustom = false;
        this.isShowCustom = false;
    }
    SdkCtrl_1 = SdkCtrl;
    SdkCtrl.getInstance = function () {
        if (!this._instance) {
            this._instance = new SdkCtrl_1();
            this._instance._init();
        }
        return this._instance;
    };
    SdkCtrl.prototype._init = function () {
        var _this = this;
        if (GameData_1.default.getPlatform() == GameData_1.Platform.wx) {
            this.showShareMenu();
            this.onShareAppMessage();
            this.rewardedVideoAd = wx.createRewardedVideoAd({ adUnitId: this.rewardedVideoAdID });
            this.rewardedVideoAd.onError(function (err) {
                console.log("激励视频 " + err);
                if (_this.failFun) {
                    _this.failFun();
                    _this.failFun = null;
                }
                GameData_1.default.isPause = false;
                return;
            });
            this.rewardedVideoAd.onLoad(function () {
                console.log('激励视频 广告加载成功');
                _this.rewardedVideoAd.onClose(function (res) {
                    // 用户点击了【关闭广告】按钮
                    // 小于 2.1.0 的基础库版本，res 是一个 undefined
                    if (res && res.isEnded || res === undefined) {
                        // 正常播放结束，可以下发游戏奖励
                        console.log('激励视频 广告播放完毕');
                        if (_this.successFun) {
                            _this.successFun();
                            _this.successFun = null;
                        }
                        GameData_1.default.isPause = false;
                    }
                    else {
                        // 播放中途退出，不下发游戏奖励
                        console.log('激励视频 广告播放中途退出');
                        if (_this.failFun) {
                            _this.failFun();
                            _this.failFun = null;
                        }
                        GameData_1.default.isPause = false;
                        return;
                    }
                });
            });
            var systemInfo = wx.getSystemInfoSync();
            var screenWidth = systemInfo.screenWidth;
            var screenHeight = systemInfo.screenHeight;
            this.bannerVideoAd = wx.createBannerAd({
                adUnitId: this.bannerVideoAdID,
                adIntervals: 30,
                style: {
                    top: screenHeight - 100,
                    left: (screenWidth / 2) - 150,
                    width: 150,
                    height: 40,
                }
            });
            this.bannerVideoAd.onError(function (err) {
                console.log("banner1广告错误 " + err);
            });
            this.bannerVideoAd.onLoad(function () { });
        }
    };
    SdkCtrl.prototype.ShowRewardedVideoAd = function (successFun, failFun) {
        var _this = this;
        if (failFun === void 0) { failFun = function () { }; }
        switch (GameData_1.default.getPlatform()) {
            case GameData_1.Platform.wx:
                {
                    GameData_1.default.isPause = true;
                    this.successFun = successFun;
                    this.failFun = failFun;
                    this.rewardedVideoAd.show().catch(function () {
                        // 失败重试
                        _this.rewardedVideoAd.load()
                            .then(function () { return _this.rewardedVideoAd.show(); })
                            .catch(function (err) {
                            console.log('激励视频 广告显示失败,可能是没加载出来');
                            if (_this.failFun) {
                                _this.failFun();
                                _this.failFun = null;
                            }
                            GameData_1.default.isPause = false;
                            return;
                        });
                    });
                }
                break;
            default:
                cc.log("观看广告");
                successFun();
                break;
        }
    };
    SdkCtrl.prototype.ShowBanner = function () {
        switch (GameData_1.default.getPlatform()) {
            case GameData_1.Platform.wx:
                this.bannerVideoAd.show();
                break;
        }
    };
    SdkCtrl.prototype.HideBanner = function () {
        switch (GameData_1.default.getPlatform()) {
            case GameData_1.Platform.wx:
                this.bannerVideoAd.hide();
                break;
        }
    };
    SdkCtrl.prototype.getSetting = function () {
        console.log("获取信息");
        var pingtai = GameData_1.default.getPlatform();
        switch (pingtai) {
            case GameData_1.Platform.wx:
                {
                    wx.getSetting({
                        success: function (res) {
                            var _this = this;
                            if (res.authSetting['scope.userInfo']) {
                                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                                wx.getUserInfo({
                                    success: function (res) {
                                        console.log("个人信息1", res);
                                        var userInfo = res.userInfo;
                                        //保存数据，进入游戏主界面
                                        this._userInfo = userInfo;
                                    }
                                });
                            }
                            else {
                                // 未授权的要调用 createUserInfoButton 创建按钮引导玩家点击
                                var systemInfo = wx.getSystemInfoSync();
                                var safeArea = systemInfo.safeArea;
                                var button = wx.createUserInfoButton({
                                    type: 'text',
                                    text: '授权登录',
                                    style: {
                                        left: safeArea.left,
                                        top: (safeArea.top - safeArea.height / 2 - 25),
                                        width: safeArea.width,
                                        height: 50,
                                        lineHeight: 50,
                                        backgroundColor: '#90ef62',
                                        color: '#ffffff',
                                        textAlign: 'center',
                                        fontSize: 20,
                                        borderRadius: 5
                                    }
                                });
                                button.onTap(function (res) {
                                    var userInfo = res.userInfo;
                                    if (res && userInfo) {
                                        //保存数据，进入游戏主界面
                                        _this._userInfo = userInfo;
                                        console.log("个人信息2", res);
                                    }
                                });
                            }
                        }
                    });
                }
                break;
        }
    };
    /** 给好友排行榜发送消息 */
    SdkCtrl.prototype.postMessage = function (score) {
        var pingtai = GameData_1.default.getPlatform();
        switch (pingtai) {
            case GameData_1.Platform.wx:
                {
                    wx.getOpenDataContext().postMessage({
                        score: score,
                        dayTime: new Date().getTime()
                    });
                }
                break;
        }
    };
    /** 更新好友排行榜 */
    SdkCtrl.prototype.updataFriendList = function () {
        var pingtai = GameData_1.default.getPlatform();
        switch (pingtai) {
            case GameData_1.Platform.wx:
                {
                    wx.getOpenDataContext().postMessage({});
                }
                break;
        }
    };
    /** 打开另一个小程序 */
    SdkCtrl.prototype.navigateToMiniProgram = function (appId) {
        var pingtai = GameData_1.default.getPlatform();
        switch (pingtai) {
            case GameData_1.Platform.wx:
                {
                    wx.navigateToMiniProgram({
                        appId: appId,
                        path: 'page/index/index?id=123',
                        extraData: {
                            foo: 'bar'
                        },
                        envVersion: 'develop',
                        success: function (res) {
                            // 打开成功
                        }
                    });
                }
                break;
        }
    };
    /** 创建游戏圈 */
    SdkCtrl.prototype.createGameClubButton = function () {
        var pingtai = GameData_1.default.getPlatform();
        switch (pingtai) {
            case GameData_1.Platform.wx:
                {
                    var button = wx.createGameClubButton({
                        icon: 'light',
                        style: {
                            left: 10,
                            top: 76,
                            width: 40,
                            height: 40
                        }
                    });
                }
                break;
        }
    };
    /** 打开分享游戏权限 */
    SdkCtrl.prototype.showShareMenu = function () {
        if (GameData_1.default.getPlatform() == GameData_1.Platform.wx) {
            wx.showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline'],
                success: function (res) { },
                fail: function (e) { }
            });
        }
    };
    /** 主动分享 */
    SdkCtrl.prototype.shareAppMessage = function (fun) {
        if (fun === void 0) { fun = null; }
        if (fun) {
            GameData_1.default.showGameEvent.push(fun);
        }
        if (GameData_1.default.getPlatform() == GameData_1.Platform.wx) {
            var titleList = ["超级好玩的游戏！"];
            wx.shareAppMessage({
                title: titleList[Math.floor(Math.random() * titleList.length)],
            });
            this.onShareAppMessage();
        }
    };
    /** 监听游戏分享修改分享图片和标题 */
    SdkCtrl.prototype.onShareAppMessage = function () {
        if (GameData_1.default.getPlatform() == GameData_1.Platform.wx) {
            var titleList_1 = ["超级好玩的游戏！"];
            wx.onShareAppMessage(function () {
                return {
                    title: titleList_1[Math.floor(Math.random() * titleList_1.length)],
                };
            });
        }
    };
    /** 显示插屏广告 */
    SdkCtrl.prototype.showInterstitialAd = function () {
        // 定义插屏广告
        if (GameData_1.default.getPlatform() == GameData_1.Platform.wx) {
            var interstitialAd = null;
            // 创建插屏广告实例，提前初始化
            if (!interstitialAd) {
                if (wx.createInterstitialAd) {
                    interstitialAd = wx.createInterstitialAd({
                        adUnitId: this.interstitialAdID
                    });
                }
            }
            // 在适合的场景显示插屏广告
            if (interstitialAd) {
                interstitialAd.show().catch(function (err) {
                    console.error(err);
                });
            }
        }
    };
    SdkCtrl.prototype.showCustomAd = function () {
        var _this = this;
        if (GameData_1.default.getPlatform() == GameData_1.Platform.wx) {
            this.isShowCustom = true;
            var leftId = this.leftCustomAdID;
            var rightId = this.rightCustomAdID;
            var winSize = wx.getSystemInfoSync();
            var leftStyle = {
                left: 15,
                top: 120,
                fixed: false,
            };
            var rightStyle = {
                left: winSize.screenWidth - 70,
                top: 120,
                fixed: false,
            };
            if (this.leftCustom) {
                this.leftCustom.show();
            }
            else {
                this.leftCustom = wx.createCustomAd({
                    adUnitId: leftId,
                    style: leftStyle
                });
                this.leftCustom.onLoad(function () {
                    console.log('原生模板 广告加载成功');
                    if (_this.isShowCustom) {
                        _this.leftCustom.show().then(function () { return console.log('原生模板 广告显示成功'); }).catch(function (err) {
                            console.log("原生模板 广告显示失败", err);
                        });
                    }
                });
            }
            if (this.rightCustom) {
                this.rightCustom.show();
            }
            else {
                this.rightCustom = wx.createCustomAd({
                    adUnitId: rightId,
                    style: rightStyle
                });
                this.rightCustom.onLoad(function () {
                    console.log('原生模板 广告加载成功');
                    if (_this.isShowCustom) {
                        _this.rightCustom.show().then(function () { return console.log('原生模板 广告显示成功'); }).catch(function (err) {
                            console.log("原生模板 广告显示失败", err);
                        });
                    }
                });
            }
        }
    };
    /** 隐藏格子广告 */
    SdkCtrl.prototype.hideCustomAd = function () {
        this.isShowCustom = false;
        if (this.leftCustom) {
            this.leftCustom.hide();
        }
        if (this.rightCustom) {
            this.rightCustom.hide();
        }
    };
    /** 手机振动 */
    SdkCtrl.prototype.QuakeScreen = function () {
        if (GameData_1.default.getPlatform() == GameData_1.Platform.wx) {
            wx.vibrateLong({
                success: function (t) {
                    console.log("" + t);
                },
                fail: function (t) {
                    console.log("vibrateLong调用失败");
                }
            });
        }
    };
    /** 创建原生模板广告组件-五行格子广告-弹窗 */
    SdkCtrl.prototype.showFiveCustomAd = function () {
        var _this = this;
        if (GameData_1.default.getPlatform() == GameData_1.Platform.wx) {
            this.isfiveCustom = true;
            var winSize = wx.getSystemInfoSync();
            var leftStyle = {
                left: 0,
                top: 100,
                fixed: false,
            };
            if (this.fiveCustom) {
                this.fiveCustom.show();
            }
            else {
                this.fiveCustom = wx.createCustomAd({
                    adUnitId: this.flveCustomAdID,
                    style: leftStyle
                });
                this.fiveCustom.onLoad(function () {
                    console.log('原生模板 广告加载成功');
                    if (_this.isfiveCustom) {
                        _this.fiveCustom.show().then(function () { return console.log('原生模板 广告显示成功'); }).catch(function (err) {
                            console.log("原生模板 广告显示失败", err);
                        });
                    }
                });
            }
        }
    };
    var SdkCtrl_1;
    SdkCtrl._instance = null;
    SdkCtrl = SdkCtrl_1 = __decorate([
        ccclass
    ], SdkCtrl);
    return SdkCtrl;
}());
exports.default = SdkCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDdHJsXFxTZGtDdHJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsOENBQXVEO0FBR2pELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFFWSxzQkFBaUIsR0FBVyx3QkFBd0IsQ0FBQTtRQUNwRCxvQkFBZSxHQUFXLHdCQUF3QixDQUFBO1FBQ2xELHFCQUFnQixHQUFXLHdCQUF3QixDQUFBO1FBQ25ELG1CQUFjLEdBQVcsd0JBQXdCLENBQUE7UUFDakQsb0JBQWUsR0FBVyx3QkFBd0IsQ0FBQTtRQUNsRCxtQkFBYyxHQUFXLHdCQUF3QixDQUFBO1FBQ2xELG9CQUFlLEdBQVEsSUFBSSxDQUFDO1FBQzVCLGtCQUFhLEdBQVEsSUFBSSxDQUFDO1FBQzFCLGVBQVUsR0FBYSxJQUFJLENBQUE7UUFDM0IsWUFBTyxHQUFhLElBQUksQ0FBQTtRQUV4QixpQkFBWSxHQUFZLEtBQUssQ0FBQTtRQW9UcEMsaUJBQVksR0FBWSxLQUFLLENBQUE7SUE2R2pDLENBQUM7Z0JBOWFvQixPQUFPO0lBZVYsbUJBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBTyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQjtRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU8sdUJBQUssR0FBYjtRQUFBLGlCQTJEQztRQTFERyxJQUFJLGtCQUFRLENBQUMsV0FBVyxFQUFFLElBQUksbUJBQVEsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1lBQ3BCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1lBRXhC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LElBQUksQ0FBQTtZQUN4QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNyQyxJQUFJLFNBQVMsR0FBRztnQkFDWixJQUFJLEVBQUUsQ0FBQztnQkFDUCxHQUFHLEVBQUUsR0FBRztnQkFDUixLQUFLLEVBQUUsS0FBSzthQUNmLENBQUE7WUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUNoQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWM7b0JBQzdCLEtBQUssRUFBRSxTQUFTO2lCQUNuQixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzNCLElBQUksS0FBSSxDQUFDLFlBQVksRUFBRTt3QkFDbkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFROzRCQUN6RSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQTt3QkFDbkMsQ0FBQyxDQUFDLENBQUE7cUJBQ0w7Z0JBQ0wsQ0FBQyxDQUFDLENBQUE7YUFDTDtTQUNKO0lBQ0wsQ0FBQzs7SUE1YWMsaUJBQVMsR0FBWSxJQUFJLENBQUM7SUFEeEIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQThhM0I7SUFBRCxjQUFDO0NBOWFELEFBOGFDLElBQUE7a0JBOWFvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgR2FtZURhdGEsIHsgUGxhdGZvcm0gfSBmcm9tIFwiLi4vT3RoZXIvR2FtZURhdGFcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2RrQ3RybCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTZGtDdHJsID0gbnVsbDtcbiAgICBwcml2YXRlIHJld2FyZGVkVmlkZW9BZElEOiBzdHJpbmcgPSBcImFkdW5pdC14eHh4eHh4eHh4eHh4eHhcIlxuICAgIHByaXZhdGUgYmFubmVyVmlkZW9BZElEOiBzdHJpbmcgPSBcImFkdW5pdC14eHh4eHh4eHh4eHh4eHhcIlxuICAgIHByaXZhdGUgaW50ZXJzdGl0aWFsQWRJRDogc3RyaW5nID0gXCJhZHVuaXQteHh4eHh4eHh4eHh4eHh4XCJcbiAgICBwcml2YXRlIGxlZnRDdXN0b21BZElEOiBzdHJpbmcgPSBcImFkdW5pdC14eHh4eHh4eHh4eHh4eHhcIlxuICAgIHByaXZhdGUgcmlnaHRDdXN0b21BZElEOiBzdHJpbmcgPSBcImFkdW5pdC14eHh4eHh4eHh4eHh4eHhcIlxuICAgIHByaXZhdGUgZmx2ZUN1c3RvbUFkSUQ6IHN0cmluZyA9IFwiYWR1bml0LXh4eHh4eHh4eHh4eHh4eFwiXG4gICAgcHVibGljIHJld2FyZGVkVmlkZW9BZDogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgYmFubmVyVmlkZW9BZDogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgc3VjY2Vzc0Z1bjogRnVuY3Rpb24gPSBudWxsXG4gICAgcHVibGljIGZhaWxGdW46IEZ1bmN0aW9uID0gbnVsbFxuICAgIHB1YmxpYyBmaXZlQ3VzdG9tOiBhbnk7XG4gICAgcHVibGljIGlzZml2ZUN1c3RvbTogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBTZGtDdHJsKCk7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5faW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0KCkge1xuICAgICAgICBpZiAoR2FtZURhdGEuZ2V0UGxhdGZvcm0oKSA9PSBQbGF0Zm9ybS53eCkge1xuICAgICAgICAgICAgdGhpcy5zaG93U2hhcmVNZW51KClcbiAgICAgICAgICAgIHRoaXMub25TaGFyZUFwcE1lc3NhZ2UoKVxuXG4gICAgICAgICAgICB0aGlzLnJld2FyZGVkVmlkZW9BZCA9IHd4LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7IGFkVW5pdElkOiB0aGlzLnJld2FyZGVkVmlkZW9BZElEIH0pXG4gICAgICAgICAgICB0aGlzLnJld2FyZGVkVmlkZW9BZC5vbkVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmv4DlirHop4bpopEgXCIgKyBlcnIpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZhaWxGdW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsRnVuKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsRnVuID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHYW1lRGF0YS5pc1BhdXNlID0gZmFsc2VcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5yZXdhcmRlZFZpZGVvQWQub25Mb2FkKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5r+A5Yqx6KeG6aKRIOW5v+WRiuWKoOi9veaIkOWKnycpO1xuICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkZWRWaWRlb0FkLm9uQ2xvc2UocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g55So5oi354K55Ye75LqG44CQ5YWz6Zet5bm/5ZGK44CR5oyJ6ZKuXG4gICAgICAgICAgICAgICAgICAgIC8vIOWwj+S6jiAyLjEuMCDnmoTln7rnoYDlupPniYjmnKzvvIxyZXMg5piv5LiA5LiqIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzICYmIHJlcy5pc0VuZGVkIHx8IHJlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmraPluLjmkq3mlL7nu5PmnZ/vvIzlj6/ku6XkuIvlj5HmuLjmiI/lpZblirFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopEg5bm/5ZGK5pKt5pS+5a6M5q+VJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdWNjZXNzRnVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzRnVuKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3NGdW4gPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5pc1BhdXNlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaSreaUvuS4remAlOmAgOWHuu+8jOS4jeS4i+WPkea4uOaIj+WlluWKsVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+a/gOWKseinhumikSDlub/lkYrmkq3mlL7kuK3pgJTpgIDlh7onKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZhaWxGdW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhaWxGdW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmFpbEZ1biA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVEYXRhLmlzUGF1c2UgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IHN5c3RlbUluZm8gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xuICAgICAgICAgICAgbGV0IHNjcmVlbldpZHRoID0gc3lzdGVtSW5mby5zY3JlZW5XaWR0aDtcbiAgICAgICAgICAgIGxldCBzY3JlZW5IZWlnaHQgPSBzeXN0ZW1JbmZvLnNjcmVlbkhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuYmFubmVyVmlkZW9BZCA9IHd4LmNyZWF0ZUJhbm5lckFkKHtcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogdGhpcy5iYW5uZXJWaWRlb0FkSUQsXG4gICAgICAgICAgICAgICAgYWRJbnRlcnZhbHM6IDMwLCAvLyDoh6rliqjliLfmlrDpopHnjofkuI3og73lsI/kuo4zMOenklxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogc2NyZWVuSGVpZ2h0IC0gMTAwLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAoc2NyZWVuV2lkdGggLyAyKSAtIDE1MCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYmFubmVyVmlkZW9BZC5vbkVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYW5uZXIx5bm/5ZGK6ZSZ6K+vIFwiICsgZXJyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmJhbm5lclZpZGVvQWQub25Mb2FkKCgpID0+IHsgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBTaG93UmV3YXJkZWRWaWRlb0FkKHN1Y2Nlc3NGdW46IEZ1bmN0aW9uLCBmYWlsRnVuOiBGdW5jdGlvbiA9ICgpID0+IHsgfSkge1xuICAgICAgICBzd2l0Y2ggKEdhbWVEYXRhLmdldFBsYXRmb3JtKCkpIHtcbiAgICAgICAgICAgIGNhc2UgUGxhdGZvcm0ud3g6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5pc1BhdXNlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3NGdW4gPSBzdWNjZXNzRnVuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFpbEZ1biA9IGZhaWxGdW5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRlZFZpZGVvQWQuc2hvdygpLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWksei0pemHjeivlVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRlZFZpZGVvQWQubG9hZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5yZXdhcmRlZFZpZGVvQWQuc2hvdygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5r+A5Yqx6KeG6aKRIOW5v+WRiuaYvuekuuWksei0pSzlj6/og73mmK/msqHliqDovb3lh7rmnaUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mYWlsRnVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhaWxGdW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsRnVuID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVEYXRhLmlzUGF1c2UgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLop4LnnIvlub/lkYpcIilcbiAgICAgICAgICAgICAgICBzdWNjZXNzRnVuKClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFNob3dCYW5uZXIoKSB7XG4gICAgICAgIHN3aXRjaCAoR2FtZURhdGEuZ2V0UGxhdGZvcm0oKSkge1xuICAgICAgICAgICAgY2FzZSBQbGF0Zm9ybS53eDpcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lclZpZGVvQWQuc2hvdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgSGlkZUJhbm5lcigpIHtcbiAgICAgICAgc3dpdGNoIChHYW1lRGF0YS5nZXRQbGF0Zm9ybSgpKSB7XG4gICAgICAgICAgICBjYXNlIFBsYXRmb3JtLnd4OlxuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyVmlkZW9BZC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTZXR0aW5nKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuiOt+WPluS/oeaBr1wiKTtcbiAgICAgICAgbGV0IHBpbmd0YWkgPSBHYW1lRGF0YS5nZXRQbGF0Zm9ybSgpXG4gICAgICAgIHN3aXRjaCAocGluZ3RhaSkge1xuICAgICAgICAgICAgY2FzZSBQbGF0Zm9ybS53eDpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Liq5Lq65L+h5oGvMVwiLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5L+d5a2Y5pWw5o2u77yM6L+b5YWl5ri45oiP5Li755WM6Z2iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXNlckluZm8gPSB1c2VySW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOacquaOiOadg+eahOimgeiwg+eUqCBjcmVhdGVVc2VySW5mb0J1dHRvbiDliJvlu7rmjInpkq7lvJXlr7znjqnlrrbngrnlh7tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3lzdGVtSW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhZmVBcmVhID0gc3lzdGVtSW5mby5zYWZlQXJlYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gd3guY3JlYXRlVXNlckluZm9CdXR0b24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+aOiOadg+eZu+W9lScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHNhZmVBcmVhLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAoc2FmZUFyZWEudG9wIC0gc2FmZUFyZWEuaGVpZ2h0IC8gMiAtIDI1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2FmZUFyZWEud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjOTBlZjYyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ub25UYXAoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSByZXMudXNlckluZm87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzICYmIHVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/kv53lrZjmlbDmja7vvIzov5vlhaXmuLjmiI/kuLvnlYzpnaJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VySW5mbyA9IHVzZXJJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkuKrkurrkv6Hmga8yXCIsIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqIOe7meWlveWPi+aOkuihjOamnOWPkemAgea2iOaBryAqL1xuICAgIHBvc3RNZXNzYWdlKHNjb3JlOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHBpbmd0YWkgPSBHYW1lRGF0YS5nZXRQbGF0Zm9ybSgpXG4gICAgICAgIHN3aXRjaCAocGluZ3RhaSkge1xuICAgICAgICAgICAgY2FzZSBQbGF0Zm9ybS53eDpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHd4LmdldE9wZW5EYXRhQ29udGV4dCgpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlOiBzY29yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheVRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDmm7TmlrDlpb3lj4vmjpLooYzmppwgKi9cbiAgICB1cGRhdGFGcmllbmRMaXN0KCkge1xuICAgICAgICBsZXQgcGluZ3RhaSA9IEdhbWVEYXRhLmdldFBsYXRmb3JtKClcbiAgICAgICAgc3dpdGNoIChwaW5ndGFpKSB7XG4gICAgICAgICAgICBjYXNlIFBsYXRmb3JtLnd4OlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgd3guZ2V0T3BlbkRhdGFDb250ZXh0KCkucG9zdE1lc3NhZ2Uoe30pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDmiZPlvIDlj6bkuIDkuKrlsI/nqIvluo8gKi9cbiAgICBuYXZpZ2F0ZVRvTWluaVByb2dyYW0oYXBwSWQ6IHN0cmluZykge1xuICAgICAgICBsZXQgcGluZ3RhaSA9IEdhbWVEYXRhLmdldFBsYXRmb3JtKClcbiAgICAgICAgc3dpdGNoIChwaW5ndGFpKSB7XG4gICAgICAgICAgICBjYXNlIFBsYXRmb3JtLnd4OlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiBhcHBJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICdwYWdlL2luZGV4L2luZGV4P2lkPTEyMycsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb286ICdiYXInXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW52VmVyc2lvbjogJ2RldmVsb3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmiZPlvIDmiJDlip9cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5Yib5bu65ri45oiP5ZyIICovXG4gICAgY3JlYXRlR2FtZUNsdWJCdXR0b24oKSB7XG4gICAgICAgIGxldCBwaW5ndGFpID0gR2FtZURhdGEuZ2V0UGxhdGZvcm0oKVxuICAgICAgICBzd2l0Y2ggKHBpbmd0YWkpIHtcbiAgICAgICAgICAgIGNhc2UgUGxhdGZvcm0ud3g6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYnV0dG9uID0gd3guY3JlYXRlR2FtZUNsdWJCdXR0b24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2xpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA3NixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDmiZPlvIDliIbkuqvmuLjmiI/mnYPpmZAgKi9cbiAgICBzaG93U2hhcmVNZW51KCkge1xuICAgICAgICBpZiAoR2FtZURhdGEuZ2V0UGxhdGZvcm0oKSA9PSBQbGF0Zm9ybS53eCkge1xuICAgICAgICAgICAgd3guc2hvd1NoYXJlTWVudSh7XG4gICAgICAgICAgICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lbnVzOiBbJ3NoYXJlQXBwTWVzc2FnZScsICdzaGFyZVRpbWVsaW5lJ10sXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHsgfSxcbiAgICAgICAgICAgICAgICBmYWlsKGUpIHsgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDkuLvliqjliIbkuqsgKi9cbiAgICBzaGFyZUFwcE1lc3NhZ2UoZnVuOiBGdW5jdGlvbiA9IG51bGwpIHtcbiAgICAgICAgaWYgKGZ1bikge1xuICAgICAgICAgICAgR2FtZURhdGEuc2hvd0dhbWVFdmVudC5wdXNoKGZ1bilcbiAgICAgICAgfVxuICAgICAgICBpZiAoR2FtZURhdGEuZ2V0UGxhdGZvcm0oKSA9PSBQbGF0Zm9ybS53eCkge1xuICAgICAgICAgICAgbGV0IHRpdGxlTGlzdCA9IFtcIui2hee6p+WlveeOqeeahOa4uOaIj++8gVwiXVxuICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGVMaXN0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRpdGxlTGlzdC5sZW5ndGgpXSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLm9uU2hhcmVBcHBNZXNzYWdlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDnm5HlkKzmuLjmiI/liIbkuqvkv67mlLnliIbkuqvlm77niYflkozmoIfpopggKi9cbiAgICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICAgICAgaWYgKEdhbWVEYXRhLmdldFBsYXRmb3JtKCkgPT0gUGxhdGZvcm0ud3gpIHtcbiAgICAgICAgICAgIGxldCB0aXRsZUxpc3QgPSBbXCLotoXnuqflpb3njqnnmoTmuLjmiI/vvIFcIl1cbiAgICAgICAgICAgIHd4Lm9uU2hhcmVBcHBNZXNzYWdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGVMaXN0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRpdGxlTGlzdC5sZW5ndGgpXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VVcmxJZDogXCJKUFB1aWpLUVNLQ2oxbXdCVjltV1pBPT1cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VVcmw6IFwiaHR0cHM6Ly9tbW9jZ2FtZS5xcGljLmNuL3dlY2hhdGdhbWUvSnpabEF2TklTTm5aNVFGTGliWDhTbmlhcE9QZkJ4SWZWWDFITjB3M2ljVkdMd01kdHY1WWtCcTJwSEJmbkdnMTZOYi8wXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOaYvuekuuaPkuWxj+W5v+WRiiAqL1xuICAgIHNob3dJbnRlcnN0aXRpYWxBZCgpIHtcbiAgICAgICAgLy8g5a6a5LmJ5o+S5bGP5bm/5ZGKXG4gICAgICAgIGlmIChHYW1lRGF0YS5nZXRQbGF0Zm9ybSgpID09IFBsYXRmb3JtLnd4KSB7XG4gICAgICAgICAgICBsZXQgaW50ZXJzdGl0aWFsQWQgPSBudWxsXG5cbiAgICAgICAgICAgIC8vIOWIm+W7uuaPkuWxj+W5v+WRiuWunuS+i++8jOaPkOWJjeWIneWni+WMllxuICAgICAgICAgICAgaWYgKCFpbnRlcnN0aXRpYWxBZCkge1xuICAgICAgICAgICAgICAgIGlmICh3eC5jcmVhdGVJbnRlcnN0aXRpYWxBZCkge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnN0aXRpYWxBZCA9IHd4LmNyZWF0ZUludGVyc3RpdGlhbEFkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkVW5pdElkOiB0aGlzLmludGVyc3RpdGlhbEFkSURcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWcqOmAguWQiOeahOWcuuaZr+aYvuekuuaPkuWxj+W5v+WRilxuICAgICAgICAgICAgaWYgKGludGVyc3RpdGlhbEFkKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJzdGl0aWFsQWQuc2hvdygpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDliJvlu7rljp/nlJ/mqKHmnb/lub/lkYrnu4Tku7Yt5LqU6KGM5qC85a2Q5bm/5ZGKLeW8ueeqlyAqL1xuICAgIGxlZnRDdXN0b206IGFueTtcbiAgICByaWdodEN1c3RvbTogYW55O1xuICAgIGlzU2hvd0N1c3RvbTogYm9vbGVhbiA9IGZhbHNlXG4gICAgc2hvd0N1c3RvbUFkKCkge1xuICAgICAgICBpZiAoR2FtZURhdGEuZ2V0UGxhdGZvcm0oKSA9PSBQbGF0Zm9ybS53eCkge1xuICAgICAgICAgICAgdGhpcy5pc1Nob3dDdXN0b20gPSB0cnVlXG4gICAgICAgICAgICBsZXQgbGVmdElkID0gdGhpcy5sZWZ0Q3VzdG9tQWRJRDtcbiAgICAgICAgICAgIGxldCByaWdodElkID0gdGhpcy5yaWdodEN1c3RvbUFkSUQ7XG4gICAgICAgICAgICBsZXQgd2luU2l6ZSA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgICAgICBsZXQgbGVmdFN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDE1LFxuICAgICAgICAgICAgICAgIHRvcDogMTIwLFxuICAgICAgICAgICAgICAgIGZpeGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJpZ2h0U3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogd2luU2l6ZS5zY3JlZW5XaWR0aCAtIDcwLFxuICAgICAgICAgICAgICAgIHRvcDogMTIwLFxuICAgICAgICAgICAgICAgIGZpeGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubGVmdEN1c3RvbSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdEN1c3RvbS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdEN1c3RvbSA9IHd4LmNyZWF0ZUN1c3RvbUFkKHtcbiAgICAgICAgICAgICAgICAgICAgYWRVbml0SWQ6IGxlZnRJZCwgIC8vJ2FkdW5pdC1hYmY5YzYzNDI3YzNhMzhhJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IGxlZnRTdHlsZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdEN1c3RvbS5vbkxvYWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5Y6f55Sf5qih5p2/IOW5v+WRiuWKoOi9veaIkOWKnycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1Nob3dDdXN0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdEN1c3RvbS5zaG93KCkudGhlbigoKSA9PiBjb25zb2xlLmxvZygn5Y6f55Sf5qih5p2/IOW5v+WRiuaYvuekuuaIkOWKnycpKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLljp/nlJ/mqKHmnb8g5bm/5ZGK5pi+56S65aSx6LSlXCIsIGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5yaWdodEN1c3RvbSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDdXN0b20uc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q3VzdG9tID0gd3guY3JlYXRlQ3VzdG9tQWQoe1xuICAgICAgICAgICAgICAgICAgICBhZFVuaXRJZDogcmlnaHRJZCwgIC8vJ2FkdW5pdC1hYmY5YzYzNDI3YzNhMzhhJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHJpZ2h0U3R5bGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q3VzdG9tLm9uTG9hZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfljp/nlJ/mqKHmnb8g5bm/5ZGK5Yqg6L295oiQ5YqfJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2hvd0N1c3RvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodEN1c3RvbS5zaG93KCkudGhlbigoKSA9PiBjb25zb2xlLmxvZygn5Y6f55Sf5qih5p2/IOW5v+WRiuaYvuekuuaIkOWKnycpKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLljp/nlJ/mqKHmnb8g5bm/5ZGK5pi+56S65aSx6LSlXCIsIGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOmakOiXj+agvOWtkOW5v+WRiiAqL1xuICAgIGhpZGVDdXN0b21BZCgpIHtcbiAgICAgICAgdGhpcy5pc1Nob3dDdXN0b20gPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5sZWZ0Q3VzdG9tKSB7XG4gICAgICAgICAgICB0aGlzLmxlZnRDdXN0b20uaGlkZSgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmlnaHRDdXN0b20pIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRDdXN0b20uaGlkZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5omL5py65oyv5YqoICovXG4gICAgUXVha2VTY3JlZW4oKSB7XG4gICAgICAgIGlmIChHYW1lRGF0YS5nZXRQbGF0Zm9ybSgpID09IFBsYXRmb3JtLnd4KSB7XG4gICAgICAgICAgICB3eC52aWJyYXRlTG9uZyh7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcIiArIHQpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiAodCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZpYnJhdGVMb25n6LCD55So5aSx6LSlXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDliJvlu7rljp/nlJ/mqKHmnb/lub/lkYrnu4Tku7Yt5LqU6KGM5qC85a2Q5bm/5ZGKLeW8ueeqlyAqL1xuICAgIHNob3dGaXZlQ3VzdG9tQWQoKSB7XG4gICAgICAgIGlmIChHYW1lRGF0YS5nZXRQbGF0Zm9ybSgpID09IFBsYXRmb3JtLnd4KSB7XG4gICAgICAgICAgICB0aGlzLmlzZml2ZUN1c3RvbSA9IHRydWVcbiAgICAgICAgICAgIGxldCB3aW5TaXplID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgICAgICAgICAgIGxldCBsZWZ0U3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDEwMCxcbiAgICAgICAgICAgICAgICBmaXhlZDogZmFsc2UsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpdmVDdXN0b20pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpdmVDdXN0b20uc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpdmVDdXN0b20gPSB3eC5jcmVhdGVDdXN0b21BZCh7XG4gICAgICAgICAgICAgICAgICAgIGFkVW5pdElkOiB0aGlzLmZsdmVDdXN0b21BZElELCAgLy8nYWR1bml0LWFiZjljNjM0MjdjM2EzOGEnLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogbGVmdFN0eWxlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5maXZlQ3VzdG9tLm9uTG9hZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfljp/nlJ/mqKHmnb8g5bm/5ZGK5Yqg6L295oiQ5YqfJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzZml2ZUN1c3RvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXZlQ3VzdG9tLnNob3coKS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCfljp/nlJ/mqKHmnb8g5bm/5ZGK5pi+56S65oiQ5YqfJykpLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Y6f55Sf5qih5p2/IOW5v+WRiuaYvuekuuWksei0pVwiLCBlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18c9afpMBFPV7msMxMGnST7', 'UIManager');
// Script/Manager/UIManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinID = void 0;
var GameCtrl_1 = require("../Ctrl/GameCtrl");
var SdkCtrl_1 = require("../Ctrl/SdkCtrl");
var GameData_1 = require("../Other/GameData");
var SoundMgr_1 = require("../Other/SoundMgr");
var WinID;
(function (WinID) {
    WinID["GameSetting"] = "GameSetting";
    WinID["HomeMain"] = "HomeMain";
    WinID["OtherGameMain"] = "OtherGameMain";
    WinID["PopUpMain"] = "PopUpMain";
    WinID["TipMain"] = "TipMain";
})(WinID = exports.WinID || (exports.WinID = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadBar = null;
        _this.panelParent = null;
        _this.tipParent = null;
        _this.versions = null;
        _this.allUIPanel = [];
        _this.UIPlaneDictionary = {};
        _this.isload = false;
        _this.isShow = false;
        _this.loadStateList = [];
        return _this;
    }
    UIManager_1 = UIManager;
    UIManager.prototype.onLoad = function () {
        // cc.sys.localStorage.removeItem("LocalData")
        UIManager_1.share = this;
        var view = cc.view.getFrameSize();
        if (view.height / view.width < 10 / 17) { //1.7
            GameData_1.default.sizeType = view.height / (view.width * (10 / 17));
        }
        this.LoadUIPanel();
        // GameUtils.getInstance().setString(this.versions, VersionsData.Versions)
        // cc.director.getPhysicsManager().enabled = true
        // cc.director.getCollisionManager().enabled = true
        // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        // cc.PhysicsManager.DrawBits.e_jointBit |
        // cc.PhysicsManager.DrawBits.e_shapeBit;
        SdkCtrl_1.default.getInstance().showShareMenu();
        cc.game.on(cc.game.EVENT_SHOW, function () {
            //打开游戏界面
            var eventList = GameData_1.default.showGameEvent;
            for (var index = 0; index < eventList.length; index++) {
                eventList[index]();
            }
            GameData_1.default.showGameEvent = [];
            // this.sendEvent(GameEvent.UpdataVit)
        });
        cc.game.on(cc.game.EVENT_HIDE, function () {
            //关闭游戏界面
            var eventList = GameData_1.default.hideGameEvent;
            for (var index = 0; index < eventList.length; index++) {
                eventList[index]();
            }
            GameData_1.default.hideGameEvent = [];
        });
    };
    UIManager.prototype.start = function () {
        this.LoadGameBundle();
        this.startPor();
    };
    UIManager.prototype.LoadUIPanel = function () {
        var _this = this;
        var uiPath = [];
        var uiPanel = [
            WinID.HomeMain,
            WinID.TipMain,
            WinID.OtherGameMain,
        ];
        for (var i = 0; i < uiPanel.length; i++) {
            uiPath[i] = "UIPanel/" + uiPanel[i] + "/" + uiPanel[i];
        }
        cc.loader.loadResArray(uiPath, cc.Prefab, function (completedCount, totalCount, item) {
            //console.log(completedCount, totalCount, item);
        }, function (msg, res) {
            //console.log(msg, res);
            for (var i = 0; i < res.length; i++) {
                var obj = cc.instantiate(res[i]);
                if (obj.name == WinID.TipMain) {
                    obj.parent = _this.tipParent;
                }
                else {
                    obj.parent = _this.panelParent;
                }
                var uiPlaneSpr = obj.getComponent(obj.name);
                _this.UIPlaneDictionary[obj.name] = uiPlaneSpr;
                obj.active = false;
            }
            _this.isload = true;
        });
    };
    UIManager.prototype.LoadGameBundle = function () {
        var _this = this;
        var nowIndex = this.loadStateList.length;
        this.loadStateList[nowIndex] = false;
        cc.assetManager.loadBundle('Game', function (err, bundle) {
            _this.loadStateList[nowIndex] = true;
            var nowIndex1 = _this.loadStateList.length;
            _this.loadStateList[nowIndex1] = false;
            bundle.loadDir("Music", cc.AudioClip, function (err, clips) {
                for (var i = 0; i < clips.length; i++) {
                    SoundMgr_1.default.getInstance().addSound(clips[i].name, clips[i]);
                }
                SoundMgr_1.default.getInstance().playMusic("BGM");
                _this.loadStateList[nowIndex1] = true;
            });
        });
    };
    UIManager.prototype.startPor = function () {
        var _this = this;
        var count = 0;
        this.loadBar.progress = count;
        var callback = function (event) {
            if (count >= 0.9) {
                if (_this.isload && _this.checkIsLoadSuccess()) {
                    count += 0.015;
                }
            }
            else {
                count += 0.015;
            }
            _this.loadBar.progress = count;
            if (count >= 1) {
                _this.isShow = true;
                _this.unschedule(callback);
                _this.loadBar.node.parent.active = false;
                GameCtrl_1.default.getInstance().checkDayIsToday();
                for (var i in _this.UIPlaneDictionary) {
                    _this.UIPlaneDictionary[i].InitUI(_this);
                }
                _this.ShowUIName(WinID.HomeMain);
            }
        };
        this.schedule(callback, 0.02);
    };
    UIManager.prototype.checkIsLoadSuccess = function () {
        for (var index = 0; index < this.loadStateList.length; index++) {
            var state = this.loadStateList[index];
            if (!state) {
                return false;
            }
        }
        return true;
    };
    UIManager.prototype.ShowUIName = function (uiName, data, fun) {
        if (data === void 0) { data = null; }
        if (fun === void 0) { fun = function () { }; }
        if (this.UIPlaneDictionary[uiName]) {
            this.UIPlaneDictionary[uiName].ShowUI(data, fun);
        }
        else {
            cc.log("空界面");
        }
    };
    UIManager.prototype.HideUIName = function (uiName) {
        if (this.UIPlaneDictionary[uiName]) {
            this.UIPlaneDictionary[uiName].onClickClose();
        }
        else {
            cc.log("空界面");
        }
    };
    UIManager.prototype.showTip = function (str) {
        this.ShowUIName(WinID.TipMain, str);
    };
    UIManager.prototype.GetUIPanl = function (uiName) {
        return this.UIPlaneDictionary[uiName];
    };
    var UIManager_1;
    __decorate([
        property(cc.ProgressBar)
    ], UIManager.prototype, "loadBar", void 0);
    __decorate([
        property(cc.Node)
    ], UIManager.prototype, "panelParent", void 0);
    __decorate([
        property(cc.Node)
    ], UIManager.prototype, "tipParent", void 0);
    __decorate([
        property(cc.Label)
    ], UIManager.prototype, "versions", void 0);
    UIManager = UIManager_1 = __decorate([
        ccclass
    ], UIManager);
    return UIManager;
}(cc.Component));
exports.default = UIManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxVSU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDZDQUF3QztBQUN4QywyQ0FBc0M7QUFDdEMsOENBQXlDO0FBQ3pDLDhDQUF5QztBQUV6QyxJQUFZLEtBTVg7QUFORCxXQUFZLEtBQUs7SUFDYixvQ0FBMkIsQ0FBQTtJQUMzQiw4QkFBcUIsQ0FBQTtJQUNyQix3Q0FBK0IsQ0FBQTtJQUMvQixnQ0FBdUIsQ0FBQTtJQUN2Qiw0QkFBbUIsQ0FBQTtBQUN2QixDQUFDLEVBTlcsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBTWhCO0FBRUssSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUF3S0M7UUF0S0csYUFBTyxHQUFtQixJQUFJLENBQUM7UUFFL0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQWUsRUFBRSxDQUFDO1FBQzVCLHVCQUFpQixHQUFpQyxFQUFFLENBQUM7UUFDckQsWUFBTSxHQUFZLEtBQUssQ0FBQTtRQUN2QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLG1CQUFhLEdBQWMsRUFBRSxDQUFBOztJQTBKakMsQ0FBQztrQkF4S29CLFNBQVM7SUFpQjFCLDBCQUFNLEdBQU47UUFDSSw4Q0FBOEM7UUFDOUMsV0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNqQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFB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QVMsR0FBVCxVQUFVLE1BQU07UUFDWixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDOztJQXJLRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhDQUNNO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNPO0lBUlQsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXdLN0I7SUFBRCxnQkFBQztDQXhLRCxBQXdLQyxDQXhLc0MsRUFBRSxDQUFDLFNBQVMsR0F3S2xEO2tCQXhLb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFVJUGFyZW50IGZyb20gXCIuLi9CYXNlL1VJUGFyZW50XCI7XG5pbXBvcnQgR2FtZUN0cmwgZnJvbSBcIi4uL0N0cmwvR2FtZUN0cmxcIjtcbmltcG9ydCBTZGtDdHJsIGZyb20gXCIuLi9DdHJsL1Nka0N0cmxcIjtcbmltcG9ydCBHYW1lRGF0YSBmcm9tIFwiLi4vT3RoZXIvR2FtZURhdGFcIjtcbmltcG9ydCBTb3VuZE1nciBmcm9tIFwiLi4vT3RoZXIvU291bmRNZ3JcIjtcblxuZXhwb3J0IGVudW0gV2luSUQge1xuICAgIEdhbWVTZXR0aW5nID0gXCJHYW1lU2V0dGluZ1wiLFxuICAgIEhvbWVNYWluID0gXCJIb21lTWFpblwiLFxuICAgIE90aGVyR2FtZU1haW4gPSBcIk90aGVyR2FtZU1haW5cIixcbiAgICBQb3BVcE1haW4gPSBcIlBvcFVwTWFpblwiLFxuICAgIFRpcE1haW4gPSBcIlRpcE1haW5cIixcbn1cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxuICAgIGxvYWRCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwYW5lbFBhcmVudDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGlwUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdmVyc2lvbnM6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIGFsbFVJUGFuZWw6IFVJUGFyZW50W10gPSBbXTtcbiAgICBVSVBsYW5lRGljdGlvbmFyeTogeyBba2V5OiBzdHJpbmddOiBVSVBhcmVudDsgfSA9IHt9O1xuICAgIGlzbG9hZDogYm9vbGVhbiA9IGZhbHNlXG4gICAgaXNTaG93OiBib29sZWFuID0gZmFsc2U7XG4gICAgbG9hZFN0YXRlTGlzdDogYm9vbGVhbltdID0gW11cbiAgICBwdWJsaWMgc3RhdGljIHNoYXJlOiBVSU1hbmFnZXI7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIkxvY2FsRGF0YVwiKVxuICAgICAgICBVSU1hbmFnZXIuc2hhcmUgPSB0aGlzO1xuICAgICAgICBsZXQgdmlldyA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKClcbiAgICAgICAgaWYgKHZpZXcuaGVpZ2h0IC8gdmlldy53aWR0aCA8IDEwIC8gMTcpIHsvLzEuN1xuICAgICAgICAgICAgR2FtZURhdGEuc2l6ZVR5cGUgPSB2aWV3LmhlaWdodCAvICh2aWV3LndpZHRoICogKDEwIC8gMTcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuTG9hZFVJUGFuZWwoKTtcblxuICAgICAgICAvLyBHYW1lVXRpbHMuZ2V0SW5zdGFuY2UoKS5zZXRTdHJpbmcodGhpcy52ZXJzaW9ucywgVmVyc2lvbnNEYXRhLlZlcnNpb25zKVxuXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWVcbiAgICAgICAgLy8gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3MgPSBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2FhYmJCaXQgfFxuICAgICAgICAvLyBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2pvaW50Qml0IHxcbiAgICAgICAgLy8gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdDtcblxuICAgICAgICBTZGtDdHJsLmdldEluc3RhbmNlKCkuc2hvd1NoYXJlTWVudSgpXG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9TSE9XLCAoKSA9PiB7XG4gICAgICAgICAgICAvL+aJk+W8gOa4uOaIj+eVjOmdolxuICAgICAgICAgICAgbGV0IGV2ZW50TGlzdCA9IEdhbWVEYXRhLnNob3dHYW1lRXZlbnRcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBldmVudExpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRMaXN0W2luZGV4XSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHYW1lRGF0YS5zaG93R2FtZUV2ZW50ID0gW11cbiAgICAgICAgICAgIC8vIHRoaXMuc2VuZEV2ZW50KEdhbWVFdmVudC5VcGRhdGFWaXQpXG4gICAgICAgIH0pXG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9ISURFLCAoKSA9PiB7XG4gICAgICAgICAgICAvL+WFs+mXrea4uOaIj+eVjOmdolxuICAgICAgICAgICAgbGV0IGV2ZW50TGlzdCA9IEdhbWVEYXRhLmhpZGVHYW1lRXZlbnRcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBldmVudExpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRMaXN0W2luZGV4XSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHYW1lRGF0YS5oaWRlR2FtZUV2ZW50ID0gW11cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5Mb2FkR2FtZUJ1bmRsZSgpO1xuICAgICAgICB0aGlzLnN0YXJ0UG9yKCk7XG4gICAgfVxuXG4gICAgTG9hZFVJUGFuZWwoKSB7XG4gICAgICAgIGxldCB1aVBhdGggPSBbXTtcbiAgICAgICAgbGV0IHVpUGFuZWwgPSBbXG4gICAgICAgICAgICBXaW5JRC5Ib21lTWFpbixcbiAgICAgICAgICAgIFdpbklELlRpcE1haW4sXG4gICAgICAgICAgICBXaW5JRC5PdGhlckdhbWVNYWluLFxuICAgICAgICBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVpUGFuZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHVpUGF0aFtpXSA9IFwiVUlQYW5lbC9cIiArIHVpUGFuZWxbaV0gKyBcIi9cIiArIHVpUGFuZWxbaV07XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNBcnJheSh1aVBhdGgsIGNjLlByZWZhYiwgKGNvbXBsZXRlZENvdW50OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlciwgaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNvbXBsZXRlZENvdW50LCB0b3RhbENvdW50LCBpdGVtKTtcbiAgICAgICAgfSwgKG1zZzogRXJyb3IsIHJlczogYW55W10pID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobXNnLCByZXMpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0gY2MuaW5zdGFudGlhdGUocmVzW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAob2JqLm5hbWUgPT0gV2luSUQuVGlwTWFpbikge1xuICAgICAgICAgICAgICAgICAgICBvYmoucGFyZW50ID0gdGhpcy50aXBQYXJlbnRcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmoucGFyZW50ID0gdGhpcy5wYW5lbFBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHVpUGxhbmVTcHIgPSBvYmouZ2V0Q29tcG9uZW50KG9iai5uYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLlVJUGxhbmVEaWN0aW9uYXJ5W29iai5uYW1lXSA9IHVpUGxhbmVTcHI7XG4gICAgICAgICAgICAgICAgb2JqLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc2xvYWQgPSB0cnVlO1xuXG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBMb2FkR2FtZUJ1bmRsZSgpIHtcbiAgICAgICAgbGV0IG5vd0luZGV4ID0gdGhpcy5sb2FkU3RhdGVMaXN0Lmxlbmd0aFxuICAgICAgICB0aGlzLmxvYWRTdGF0ZUxpc3Rbbm93SW5kZXhdID0gZmFsc2VcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUoJ0dhbWUnLCAoZXJyLCBidW5kbGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZFN0YXRlTGlzdFtub3dJbmRleF0gPSB0cnVlXG5cbiAgICAgICAgICAgIGxldCBub3dJbmRleDEgPSB0aGlzLmxvYWRTdGF0ZUxpc3QubGVuZ3RoXG4gICAgICAgICAgICB0aGlzLmxvYWRTdGF0ZUxpc3Rbbm93SW5kZXgxXSA9IGZhbHNlXG4gICAgICAgICAgICBidW5kbGUubG9hZERpcihcIk11c2ljXCIsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgY2xpcHM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5hZGRTb3VuZChjbGlwc1tpXS5uYW1lLCBjbGlwc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFNvdW5kTWdyLmdldEluc3RhbmNlKCkucGxheU11c2ljKFwiQkdNXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3RhdGVMaXN0W25vd0luZGV4MV0gPSB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhcnRQb3IoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIHRoaXMubG9hZEJhci5wcm9ncmVzcyA9IGNvdW50O1xuICAgICAgICBsZXQgY2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChjb3VudCA+PSAwLjkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc2xvYWQgJiYgdGhpcy5jaGVja0lzTG9hZFN1Y2Nlc3MoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCArPSAwLjAxNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50ICs9IDAuMDE1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2FkQmFyLnByb2dyZXNzID0gY291bnQ7XG4gICAgICAgICAgICBpZiAoY291bnQgPj0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEJhci5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBHYW1lQ3RybC5nZXRJbnN0YW5jZSgpLmNoZWNrRGF5SXNUb2RheSgpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLlVJUGxhbmVEaWN0aW9uYXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVUlQbGFuZURpY3Rpb25hcnlbaV0uSW5pdFVJKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLlNob3dVSU5hbWUoV2luSUQuSG9tZU1haW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoY2FsbGJhY2ssIDAuMDIpO1xuICAgIH1cblxuICAgIGNoZWNrSXNMb2FkU3VjY2VzcygpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubG9hZFN0YXRlTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IHRoaXMubG9hZFN0YXRlTGlzdFtpbmRleF07XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBTaG93VUlOYW1lKHVpTmFtZTogV2luSUQsIGRhdGE6IGFueSA9IG51bGwsIGZ1biA9ICgpID0+IHsgfSkge1xuICAgICAgICBpZiAodGhpcy5VSVBsYW5lRGljdGlvbmFyeVt1aU5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLlVJUGxhbmVEaWN0aW9uYXJ5W3VpTmFtZV0uU2hvd1VJKGRhdGEsIGZ1bik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5sb2coXCLnqbrnlYzpnaJcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEhpZGVVSU5hbWUodWlOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLlVJUGxhbmVEaWN0aW9uYXJ5W3VpTmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuVUlQbGFuZURpY3Rpb25hcnlbdWlOYW1lXS5vbkNsaWNrQ2xvc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIuepuueVjOmdolwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1RpcChzdHI6IHN0cmluZykge1xuICAgICAgICB0aGlzLlNob3dVSU5hbWUoV2luSUQuVGlwTWFpbiwgc3RyKVxuICAgIH1cblxuICAgIEdldFVJUGFubCh1aU5hbWUpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5VSVBsYW5lRGljdGlvbmFyeVt1aU5hbWVdO1xuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameUtils/lzstring.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e2beUk1nVG9Y25YUCYHpCj', 'lzstring');
// Script/GameUtils/lzstring.js

"use strict";

// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
var LZString = function () {
  // private property
  var f = String.fromCharCode;
  var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
  var baseReverseDic = {};

  function getBaseValue(alphabet, character) {
    if (!baseReverseDic[alphabet]) {
      baseReverseDic[alphabet] = {};

      for (var i = 0; i < alphabet.length; i++) {
        baseReverseDic[alphabet][alphabet.charAt(i)] = i;
      }
    }

    return baseReverseDic[alphabet][character];
  }

  var LZString = {
    compressToBase64: function compressToBase64(input) {
      if (input == null) return "";

      var res = LZString._compress(input, 6, function (a) {
        return keyStrBase64.charAt(a);
      });

      switch (res.length % 4) {
        // To produce valid Base64
        default: // When could this happen ?

        case 0:
          return res;

        case 1:
          return res + "===";

        case 2:
          return res + "==";

        case 3:
          return res + "=";
      }
    },
    decompressFromBase64: function decompressFromBase64(input) {
      if (input == null) return "";
      if (input == "") return null;
      return LZString._decompress(input.length, 32, function (index) {
        return getBaseValue(keyStrBase64, input.charAt(index));
      });
    },
    compressToUTF16: function compressToUTF16(input) {
      if (input == null) return "";
      return LZString._compress(input, 15, function (a) {
        return f(a + 32);
      }) + " ";
    },
    decompressFromUTF16: function decompressFromUTF16(compressed) {
      if (compressed == null) return "";
      if (compressed == "") return null;
      return LZString._decompress(compressed.length, 16384, function (index) {
        return compressed.charCodeAt(index) - 32;
      });
    },
    //compress into uint8array (UCS-2 big endian format)
    compressToUint8Array: function compressToUint8Array(uncompressed) {
      var compressed = LZString.compress(uncompressed);
      var buf = new Uint8Array(compressed.length * 2); // 2 bytes per character

      for (var i = 0, TotalLen = compressed.length; i < TotalLen; i++) {
        var current_value = compressed.charCodeAt(i);
        buf[i * 2] = current_value >>> 8;
        buf[i * 2 + 1] = current_value % 256;
      }

      return buf;
    },
    //decompress from uint8array (UCS-2 big endian format)
    decompressFromUint8Array: function decompressFromUint8Array(compressed) {
      if (compressed === null || compressed === undefined) {
        return LZString.decompress(compressed);
      } else {
        var buf = new Array(compressed.length / 2); // 2 bytes per character

        for (var i = 0, TotalLen = buf.length; i < TotalLen; i++) {
          buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1];
        }

        var result = [];
        buf.forEach(function (c) {
          result.push(f(c));
        });
        return LZString.decompress(result.join(''));
      }
    },
    //compress into a string that is already URI encoded
    compressToEncodedURIComponent: function compressToEncodedURIComponent(input) {
      if (input == null) return "";
      return LZString._compress(input, 6, function (a) {
        return keyStrUriSafe.charAt(a);
      });
    },
    //decompress from an output of compressToEncodedURIComponent
    decompressFromEncodedURIComponent: function decompressFromEncodedURIComponent(input) {
      if (input == null) return "";
      if (input == "") return null;
      input = input.replace(/ /g, "+");
      return LZString._decompress(input.length, 32, function (index) {
        return getBaseValue(keyStrUriSafe, input.charAt(index));
      });
    },
    compress: function compress(uncompressed) {
      return LZString._compress(uncompressed, 16, function (a) {
        return f(a);
      });
    },
    _compress: function _compress(uncompressed, bitsPerChar, getCharFromInt) {
      if (uncompressed == null) return "";
      var i,
          value,
          context_dictionary = {},
          context_dictionaryToCreate = {},
          context_c = "",
          context_wc = "",
          context_w = "",
          context_enlargeIn = 2,
          // Compensate for the first entry which should not count
      context_dictSize = 3,
          context_numBits = 2,
          context_data = [],
          context_data_val = 0,
          context_data_position = 0,
          ii;

      for (ii = 0; ii < uncompressed.length; ii += 1) {
        context_c = uncompressed.charAt(ii);

        if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
          context_dictionary[context_c] = context_dictSize++;
          context_dictionaryToCreate[context_c] = true;
        }

        context_wc = context_w + context_c;

        if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
          context_w = context_wc;
        } else {
          if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
            if (context_w.charCodeAt(0) < 256) {
              for (i = 0; i < context_numBits; i++) {
                context_data_val = context_data_val << 1;

                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
              }

              value = context_w.charCodeAt(0);

              for (i = 0; i < 8; i++) {
                context_data_val = context_data_val << 1 | value & 1;

                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }

                value = value >> 1;
              }
            } else {
              value = 1;

              for (i = 0; i < context_numBits; i++) {
                context_data_val = context_data_val << 1 | value;

                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }

                value = 0;
              }

              value = context_w.charCodeAt(0);

              for (i = 0; i < 16; i++) {
                context_data_val = context_data_val << 1 | value & 1;

                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }

                value = value >> 1;
              }
            }

            context_enlargeIn--;

            if (context_enlargeIn == 0) {
              context_enlargeIn = Math.pow(2, context_numBits);
              context_numBits++;
            }

            delete context_dictionaryToCreate[context_w];
          } else {
            value = context_dictionary[context_w];

            for (i = 0; i < context_numBits; i++) {
              context_data_val = context_data_val << 1 | value & 1;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }

              value = value >> 1;
            }
          }

          context_enlargeIn--;

          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          } // Add wc to the dictionary.


          context_dictionary[context_wc] = context_dictSize++;
          context_w = String(context_c);
        }
      } // Output the code for w.


      if (context_w !== "") {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
          if (context_w.charCodeAt(0) < 256) {
            for (i = 0; i < context_numBits; i++) {
              context_data_val = context_data_val << 1;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }

            value = context_w.charCodeAt(0);

            for (i = 0; i < 8; i++) {
              context_data_val = context_data_val << 1 | value & 1;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }

              value = value >> 1;
            }
          } else {
            value = 1;

            for (i = 0; i < context_numBits; i++) {
              context_data_val = context_data_val << 1 | value;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }

              value = 0;
            }

            value = context_w.charCodeAt(0);

            for (i = 0; i < 16; i++) {
              context_data_val = context_data_val << 1 | value & 1;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }

              value = value >> 1;
            }
          }

          context_enlargeIn--;

          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }

          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];

          for (i = 0; i < context_numBits; i++) {
            context_data_val = context_data_val << 1 | value & 1;

            if (context_data_position == bitsPerChar - 1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }

            value = value >> 1;
          }
        }

        context_enlargeIn--;

        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
      } // Mark the end of the stream


      value = 2;

      for (i = 0; i < context_numBits; i++) {
        context_data_val = context_data_val << 1 | value & 1;

        if (context_data_position == bitsPerChar - 1) {
          context_data_position = 0;
          context_data.push(getCharFromInt(context_data_val));
          context_data_val = 0;
        } else {
          context_data_position++;
        }

        value = value >> 1;
      } // Flush the last char


      while (true) {
        context_data_val = context_data_val << 1;

        if (context_data_position == bitsPerChar - 1) {
          context_data.push(getCharFromInt(context_data_val));
          break;
        } else context_data_position++;
      }

      return context_data.join('');
    },
    decompress: function decompress(compressed) {
      if (compressed == null) return "";
      if (compressed == "") return null;
      return LZString._decompress(compressed.length, 32768, function (index) {
        return compressed.charCodeAt(index);
      });
    },
    _decompress: function _decompress(length, resetValue, getNextValue) {
      var dictionary = [],
          next,
          enlargeIn = 4,
          dictSize = 4,
          numBits = 3,
          entry = "",
          result = [],
          i,
          w,
          bits,
          resb,
          maxpower,
          power,
          c,
          data = {
        val: getNextValue(0),
        position: resetValue,
        index: 1
      };

      for (i = 0; i < 3; i += 1) {
        dictionary[i] = i;
      }

      bits = 0;
      maxpower = Math.pow(2, 2);
      power = 1;

      while (power != maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;

        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }

        bits |= (resb > 0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (next = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2, 8);
          power = 1;

          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;

            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }

            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }

          c = f(bits);
          break;

        case 1:
          bits = 0;
          maxpower = Math.pow(2, 16);
          power = 1;

          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;

            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }

            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }

          c = f(bits);
          break;

        case 2:
          return "";
      }

      dictionary[3] = c;
      w = c;
      result.push(c);

      while (true) {
        if (data.index > length) {
          return "";
        }

        bits = 0;
        maxpower = Math.pow(2, numBits);
        power = 1;

        while (power != maxpower) {
          resb = data.val & data.position;
          data.position >>= 1;

          if (data.position == 0) {
            data.position = resetValue;
            data.val = getNextValue(data.index++);
          }

          bits |= (resb > 0 ? 1 : 0) * power;
          power <<= 1;
        }

        switch (c = bits) {
          case 0:
            bits = 0;
            maxpower = Math.pow(2, 8);
            power = 1;

            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;

              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }

              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }

            dictionary[dictSize++] = f(bits);
            c = dictSize - 1;
            enlargeIn--;
            break;

          case 1:
            bits = 0;
            maxpower = Math.pow(2, 16);
            power = 1;

            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;

              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }

              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }

            dictionary[dictSize++] = f(bits);
            c = dictSize - 1;
            enlargeIn--;
            break;

          case 2:
            return result.join('');
        }

        if (enlargeIn == 0) {
          enlargeIn = Math.pow(2, numBits);
          numBits++;
        }

        if (dictionary[c]) {
          entry = dictionary[c];
        } else {
          if (c === dictSize) {
            entry = w + w.charAt(0);
          } else {
            return null;
          }
        }

        result.push(entry); // Add w+entry[0] to the dictionary.

        dictionary[dictSize++] = w + entry.charAt(0);
        enlargeIn--;
        w = entry;

        if (enlargeIn == 0) {
          enlargeIn = Math.pow(2, numBits);
          numBits++;
        }
      }
    }
  };
  return LZString;
}();

if (typeof define === 'function' && define.amd) {
  define(function () {
    return LZString;
  });
} else if (typeof module !== 'undefined' && module != null) {
  module.exports = LZString;
} else if (typeof angular !== 'undefined' && angular != null) {
  angular.module('LZString', []).factory('LZString', function () {
    return LZString;
  });
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lVXRpbHNcXGx6c3RyaW5nLmpzIl0sIm5hbWVzIjpbIkxaU3RyaW5nIiwiZiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImtleVN0ckJhc2U2NCIsImtleVN0clVyaVNhZmUiLCJiYXNlUmV2ZXJzZURpYyIsImdldEJhc2VWYWx1ZSIsImFscGhhYmV0IiwiY2hhcmFjdGVyIiwiaSIsImxlbmd0aCIsImNoYXJBdCIsImNvbXByZXNzVG9CYXNlNjQiLCJpbnB1dCIsInJlcyIsIl9jb21wcmVzcyIsImEiLCJkZWNvbXByZXNzRnJvbUJhc2U2NCIsIl9kZWNvbXByZXNzIiwiaW5kZXgiLCJjb21wcmVzc1RvVVRGMTYiLCJkZWNvbXByZXNzRnJvbVVURjE2IiwiY29tcHJlc3NlZCIsImNoYXJDb2RlQXQiLCJjb21wcmVzc1RvVWludDhBcnJheSIsInVuY29tcHJlc3NlZCIsImNvbXByZXNzIiwiYnVmIiwiVWludDhBcnJheSIsIlRvdGFsTGVuIiwiY3VycmVudF92YWx1ZSIsImRlY29tcHJlc3NGcm9tVWludDhBcnJheSIsInVuZGVmaW5lZCIsImRlY29tcHJlc3MiLCJBcnJheSIsInJlc3VsdCIsImZvckVhY2giLCJjIiwicHVzaCIsImpvaW4iLCJjb21wcmVzc1RvRW5jb2RlZFVSSUNvbXBvbmVudCIsImRlY29tcHJlc3NGcm9tRW5jb2RlZFVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJiaXRzUGVyQ2hhciIsImdldENoYXJGcm9tSW50IiwidmFsdWUiLCJjb250ZXh0X2RpY3Rpb25hcnkiLCJjb250ZXh0X2RpY3Rpb25hcnlUb0NyZWF0ZSIsImNvbnRleHRfYyIsImNvbnRleHRfd2MiLCJjb250ZXh0X3ciLCJjb250ZXh0X2VubGFyZ2VJbiIsImNvbnRleHRfZGljdFNpemUiLCJjb250ZXh0X251bUJpdHMiLCJjb250ZXh0X2RhdGEiLCJjb250ZXh0X2RhdGFfdmFsIiwiY29udGV4dF9kYXRhX3Bvc2l0aW9uIiwiaWkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJNYXRoIiwicG93IiwicmVzZXRWYWx1ZSIsImdldE5leHRWYWx1ZSIsImRpY3Rpb25hcnkiLCJuZXh0IiwiZW5sYXJnZUluIiwiZGljdFNpemUiLCJudW1CaXRzIiwiZW50cnkiLCJ3IiwiYml0cyIsInJlc2IiLCJtYXhwb3dlciIsInBvd2VyIiwiZGF0YSIsInZhbCIsInBvc2l0aW9uIiwiZGVmaW5lIiwiYW1kIiwibW9kdWxlIiwiZXhwb3J0cyIsImFuZ3VsYXIiLCJmYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLFFBQVEsR0FBSSxZQUFXO0FBRTNCO0FBQ0EsTUFBSUMsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLFlBQWY7QUFDQSxNQUFJQyxZQUFZLEdBQUcsbUVBQW5CO0FBQ0EsTUFBSUMsYUFBYSxHQUFHLG1FQUFwQjtBQUNBLE1BQUlDLGNBQWMsR0FBRyxFQUFyQjs7QUFFQSxXQUFTQyxZQUFULENBQXNCQyxRQUF0QixFQUFnQ0MsU0FBaEMsRUFBMkM7QUFDekMsUUFBSSxDQUFDSCxjQUFjLENBQUNFLFFBQUQsQ0FBbkIsRUFBK0I7QUFDN0JGLE1BQUFBLGNBQWMsQ0FBQ0UsUUFBRCxDQUFkLEdBQTJCLEVBQTNCOztBQUNBLFdBQUssSUFBSUUsQ0FBQyxHQUFDLENBQVgsRUFBZUEsQ0FBQyxHQUFDRixRQUFRLENBQUNHLE1BQTFCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDSixRQUFBQSxjQUFjLENBQUNFLFFBQUQsQ0FBZCxDQUF5QkEsUUFBUSxDQUFDSSxNQUFULENBQWdCRixDQUFoQixDQUF6QixJQUErQ0EsQ0FBL0M7QUFDRDtBQUNGOztBQUNELFdBQU9KLGNBQWMsQ0FBQ0UsUUFBRCxDQUFkLENBQXlCQyxTQUF6QixDQUFQO0FBQ0Q7O0FBRUQsTUFBSVQsUUFBUSxHQUFHO0FBQ2Jh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Q0FBLFVBQUFBLE9BQU87QUFDUjtBQUVGO0FBQ0Y7QUFoZFksR0FBZjtBQWtkRSxTQUFPdkUsUUFBUDtBQUNELENBcmVjLEVBQWY7O0FBdWVBLElBQUksT0FBT2lGLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE1BQU0sQ0FBQ0MsR0FBM0MsRUFBZ0Q7QUFDOUNELEVBQUFBLE1BQU0sQ0FBQyxZQUFZO0FBQUUsV0FBT2pGLFFBQVA7QUFBa0IsR0FBakMsQ0FBTjtBQUNELENBRkQsTUFFTyxJQUFJLE9BQU9tRixNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxNQUFNLElBQUksSUFBL0MsRUFBc0Q7QUFDM0RBLEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnBGLFFBQWpCO0FBQ0QsQ0FGTSxNQUVBLElBQUksT0FBT3FGLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0NBLE9BQU8sSUFBSSxJQUFqRCxFQUF3RDtBQUM3REEsRUFBQUEsT0FBTyxDQUFDRixNQUFSLENBQWUsVUFBZixFQUEyQixFQUEzQixFQUNDRyxPQURELENBQ1MsVUFEVCxFQUNxQixZQUFZO0FBQy9CLFdBQU90RixRQUFQO0FBQ0QsR0FIRDtBQUlEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTMgUGllcm94eSA8cGllcm94eUBwaWVyb3h5Lm5ldD5cbi8vIFRoaXMgd29yayBpcyBmcmVlLiBZb3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0XG4vLyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIFdURlBMLCBWZXJzaW9uIDJcbi8vIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZSBMSUNFTlNFLnR4dCBvciBodHRwOi8vd3d3Lnd0ZnBsLm5ldC9cbi8vXG4vLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgdGhlIGhvbWUgcGFnZTpcbi8vIGh0dHA6Ly9waWVyb3h5Lm5ldC9ibG9nL3BhZ2VzL2x6LXN0cmluZy90ZXN0aW5nLmh0bWxcbi8vXG4vLyBMWi1iYXNlZCBjb21wcmVzc2lvbiBhbGdvcml0aG0sIHZlcnNpb24gMS40LjRcbnZhciBMWlN0cmluZyA9IChmdW5jdGlvbigpIHtcblxuLy8gcHJpdmF0ZSBwcm9wZXJ0eVxudmFyIGYgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xudmFyIGtleVN0ckJhc2U2NCA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIjtcbnZhciBrZXlTdHJVcmlTYWZlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSstJFwiO1xudmFyIGJhc2VSZXZlcnNlRGljID0ge307XG5cbmZ1bmN0aW9uIGdldEJhc2VWYWx1ZShhbHBoYWJldCwgY2hhcmFjdGVyKSB7XG4gIGlmICghYmFzZVJldmVyc2VEaWNbYWxwaGFiZXRdKSB7XG4gICAgYmFzZVJldmVyc2VEaWNbYWxwaGFiZXRdID0ge307XG4gICAgZm9yICh2YXIgaT0wIDsgaTxhbHBoYWJldC5sZW5ndGggOyBpKyspIHtcbiAgICAgIGJhc2VSZXZlcnNlRGljW2FscGhhYmV0XVthbHBoYWJldC5jaGFyQXQoaSldID0gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJhc2VSZXZlcnNlRGljW2FscGhhYmV0XVtjaGFyYWN0ZXJdO1xufVxuXG52YXIgTFpTdHJpbmcgPSB7XG4gIGNvbXByZXNzVG9CYXNlNjQgOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG4gICAgdmFyIHJlcyA9IExaU3RyaW5nLl9jb21wcmVzcyhpbnB1dCwgNiwgZnVuY3Rpb24oYSl7cmV0dXJuIGtleVN0ckJhc2U2NC5jaGFyQXQoYSk7fSk7XG4gICAgc3dpdGNoIChyZXMubGVuZ3RoICUgNCkgeyAvLyBUbyBwcm9kdWNlIHZhbGlkIEJhc2U2NFxuICAgIGRlZmF1bHQ6IC8vIFdoZW4gY291bGQgdGhpcyBoYXBwZW4gP1xuICAgIGNhc2UgMCA6IHJldHVybiByZXM7XG4gICAgY2FzZSAxIDogcmV0dXJuIHJlcytcIj09PVwiO1xuICAgIGNhc2UgMiA6IHJldHVybiByZXMrXCI9PVwiO1xuICAgIGNhc2UgMyA6IHJldHVybiByZXMrXCI9XCI7XG4gICAgfVxuICB9LFxuXG4gIGRlY29tcHJlc3NGcm9tQmFzZTY0IDogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgaWYgKGlucHV0ID09IG51bGwpIHJldHVybiBcIlwiO1xuICAgIGlmIChpbnB1dCA9PSBcIlwiKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gTFpTdHJpbmcuX2RlY29tcHJlc3MoaW5wdXQubGVuZ3RoLCAzMiwgZnVuY3Rpb24oaW5kZXgpIHsgcmV0dXJuIGdldEJhc2VWYWx1ZShrZXlTdHJCYXNlNjQsIGlucHV0LmNoYXJBdChpbmRleCkpOyB9KTtcbiAgfSxcblxuICBjb21wcmVzc1RvVVRGMTYgOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG4gICAgcmV0dXJuIExaU3RyaW5nLl9jb21wcmVzcyhpbnB1dCwgMTUsIGZ1bmN0aW9uKGEpe3JldHVybiBmKGErMzIpO30pICsgXCIgXCI7XG4gIH0sXG5cbiAgZGVjb21wcmVzc0Zyb21VVEYxNjogZnVuY3Rpb24gKGNvbXByZXNzZWQpIHtcbiAgICBpZiAoY29tcHJlc3NlZCA9PSBudWxsKSByZXR1cm4gXCJcIjtcbiAgICBpZiAoY29tcHJlc3NlZCA9PSBcIlwiKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gTFpTdHJpbmcuX2RlY29tcHJlc3MoY29tcHJlc3NlZC5sZW5ndGgsIDE2Mzg0LCBmdW5jdGlvbihpbmRleCkgeyByZXR1cm4gY29tcHJlc3NlZC5jaGFyQ29kZUF0KGluZGV4KSAtIDMyOyB9KTtcbiAgfSxcblxuICAvL2NvbXByZXNzIGludG8gdWludDhhcnJheSAoVUNTLTIgYmlnIGVuZGlhbiBmb3JtYXQpXG4gIGNvbXByZXNzVG9VaW50OEFycmF5OiBmdW5jdGlvbiAodW5jb21wcmVzc2VkKSB7XG4gICAgdmFyIGNvbXByZXNzZWQgPSBMWlN0cmluZy5jb21wcmVzcyh1bmNvbXByZXNzZWQpO1xuICAgIHZhciBidWY9bmV3IFVpbnQ4QXJyYXkoY29tcHJlc3NlZC5sZW5ndGgqMik7IC8vIDIgYnl0ZXMgcGVyIGNoYXJhY3RlclxuXG4gICAgZm9yICh2YXIgaT0wLCBUb3RhbExlbj1jb21wcmVzc2VkLmxlbmd0aDsgaTxUb3RhbExlbjsgaSsrKSB7XG4gICAgICB2YXIgY3VycmVudF92YWx1ZSA9IGNvbXByZXNzZWQuY2hhckNvZGVBdChpKTtcbiAgICAgIGJ1ZltpKjJdID0gY3VycmVudF92YWx1ZSA+Pj4gODtcbiAgICAgIGJ1ZltpKjIrMV0gPSBjdXJyZW50X3ZhbHVlICUgMjU2O1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xuICB9LFxuXG4gIC8vZGVjb21wcmVzcyBmcm9tIHVpbnQ4YXJyYXkgKFVDUy0yIGJpZyBlbmRpYW4gZm9ybWF0KVxuICBkZWNvbXByZXNzRnJvbVVpbnQ4QXJyYXk6ZnVuY3Rpb24gKGNvbXByZXNzZWQpIHtcbiAgICBpZiAoY29tcHJlc3NlZD09PW51bGwgfHwgY29tcHJlc3NlZD09PXVuZGVmaW5lZCl7XG4gICAgICAgIHJldHVybiBMWlN0cmluZy5kZWNvbXByZXNzKGNvbXByZXNzZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBidWY9bmV3IEFycmF5KGNvbXByZXNzZWQubGVuZ3RoLzIpOyAvLyAyIGJ5dGVzIHBlciBjaGFyYWN0ZXJcbiAgICAgICAgZm9yICh2YXIgaT0wLCBUb3RhbExlbj1idWYubGVuZ3RoOyBpPFRvdGFsTGVuOyBpKyspIHtcbiAgICAgICAgICBidWZbaV09Y29tcHJlc3NlZFtpKjJdKjI1Nitjb21wcmVzc2VkW2kqMisxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgYnVmLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChmKGMpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBMWlN0cmluZy5kZWNvbXByZXNzKHJlc3VsdC5qb2luKCcnKSk7XG5cbiAgICB9XG5cbiAgfSxcblxuXG4gIC8vY29tcHJlc3MgaW50byBhIHN0cmluZyB0aGF0IGlzIGFscmVhZHkgVVJJIGVuY29kZWRcbiAgY29tcHJlc3NUb0VuY29kZWRVUklDb21wb25lbnQ6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIGlmIChpbnB1dCA9PSBudWxsKSByZXR1cm4gXCJcIjtcbiAgICByZXR1cm4gTFpTdHJpbmcuX2NvbXByZXNzKGlucHV0LCA2LCBmdW5jdGlvbihhKXtyZXR1cm4ga2V5U3RyVXJpU2FmZS5jaGFyQXQoYSk7fSk7XG4gIH0sXG5cbiAgLy9kZWNvbXByZXNzIGZyb20gYW4gb3V0cHV0IG9mIGNvbXByZXNzVG9FbmNvZGVkVVJJQ29tcG9uZW50XG4gIGRlY29tcHJlc3NGcm9tRW5jb2RlZFVSSUNvbXBvbmVudDpmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG4gICAgaWYgKGlucHV0ID09IFwiXCIpIHJldHVybiBudWxsO1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvIC9nLCBcIitcIik7XG4gICAgcmV0dXJuIExaU3RyaW5nLl9kZWNvbXByZXNzKGlucHV0Lmxlbmd0aCwgMzIsIGZ1bmN0aW9uKGluZGV4KSB7IHJldHVybiBnZXRCYXNlVmFsdWUoa2V5U3RyVXJpU2FmZSwgaW5wdXQuY2hhckF0KGluZGV4KSk7IH0pO1xuICB9LFxuXG4gIGNvbXByZXNzOiBmdW5jdGlvbiAodW5jb21wcmVzc2VkKSB7XG4gICAgcmV0dXJuIExaU3RyaW5nLl9jb21wcmVzcyh1bmNvbXByZXNzZWQsIDE2LCBmdW5jdGlvbihhKXtyZXR1cm4gZihhKTt9KTtcbiAgfSxcbiAgX2NvbXByZXNzOiBmdW5jdGlvbiAodW5jb21wcmVzc2VkLCBiaXRzUGVyQ2hhciwgZ2V0Q2hhckZyb21JbnQpIHtcbiAgICBpZiAodW5jb21wcmVzc2VkID09IG51bGwpIHJldHVybiBcIlwiO1xuICAgIHZhciBpLCB2YWx1ZSxcbiAgICAgICAgY29udGV4dF9kaWN0aW9uYXJ5PSB7fSxcbiAgICAgICAgY29udGV4dF9kaWN0aW9uYXJ5VG9DcmVhdGU9IHt9LFxuICAgICAgICBjb250ZXh0X2M9XCJcIixcbiAgICAgICAgY29udGV4dF93Yz1cIlwiLFxuICAgICAgICBjb250ZXh0X3c9XCJcIixcbiAgICAgICAgY29udGV4dF9lbmxhcmdlSW49IDIsIC8vIENvbXBlbnNhdGUgZm9yIHRoZSBmaXJzdCBlbnRyeSB3aGljaCBzaG91bGQgbm90IGNvdW50XG4gICAgICAgIGNvbnRleHRfZGljdFNpemU9IDMsXG4gICAgICAgIGNvbnRleHRfbnVtQml0cz0gMixcbiAgICAgICAgY29udGV4dF9kYXRhPVtdLFxuICAgICAgICBjb250ZXh0X2RhdGFfdmFsPTAsXG4gICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbj0wLFxuICAgICAgICBpaTtcblxuICAgIGZvciAoaWkgPSAwOyBpaSA8IHVuY29tcHJlc3NlZC5sZW5ndGg7IGlpICs9IDEpIHtcbiAgICAgIGNvbnRleHRfYyA9IHVuY29tcHJlc3NlZC5jaGFyQXQoaWkpO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29udGV4dF9kaWN0aW9uYXJ5LGNvbnRleHRfYykpIHtcbiAgICAgICAgY29udGV4dF9kaWN0aW9uYXJ5W2NvbnRleHRfY10gPSBjb250ZXh0X2RpY3RTaXplKys7XG4gICAgICAgIGNvbnRleHRfZGljdGlvbmFyeVRvQ3JlYXRlW2NvbnRleHRfY10gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0X3djID0gY29udGV4dF93ICsgY29udGV4dF9jO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb250ZXh0X2RpY3Rpb25hcnksY29udGV4dF93YykpIHtcbiAgICAgICAgY29udGV4dF93ID0gY29udGV4dF93YztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29udGV4dF9kaWN0aW9uYXJ5VG9DcmVhdGUsY29udGV4dF93KSkge1xuICAgICAgICAgIGlmIChjb250ZXh0X3cuY2hhckNvZGVBdCgwKTwyNTYpIHtcbiAgICAgICAgICAgIGZvciAoaT0wIDsgaTxjb250ZXh0X251bUJpdHMgOyBpKyspIHtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IChjb250ZXh0X2RhdGFfdmFsIDw8IDEpO1xuICAgICAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyLTEpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gMDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSBjb250ZXh0X3cuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIGZvciAoaT0wIDsgaTw4IDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8ICh2YWx1ZSYxKTtcbiAgICAgICAgICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PSBiaXRzUGVyQ2hhci0xKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA+PiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IDE7XG4gICAgICAgICAgICBmb3IgKGk9MCA7IGk8Y29udGV4dF9udW1CaXRzIDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8IHZhbHVlO1xuICAgICAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09Yml0c1BlckNoYXItMSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhLnB1c2goZ2V0Q2hhckZyb21JbnQoY29udGV4dF9kYXRhX3ZhbCkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbisrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gY29udGV4dF93LmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBmb3IgKGk9MCA7IGk8MTYgOyBpKyspIHtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IChjb250ZXh0X2RhdGFfdmFsIDw8IDEpIHwgKHZhbHVlJjEpO1xuICAgICAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyLTEpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gMDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID4+IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRleHRfZW5sYXJnZUluLS07XG4gICAgICAgICAgaWYgKGNvbnRleHRfZW5sYXJnZUluID09IDApIHtcbiAgICAgICAgICAgIGNvbnRleHRfZW5sYXJnZUluID0gTWF0aC5wb3coMiwgY29udGV4dF9udW1CaXRzKTtcbiAgICAgICAgICAgIGNvbnRleHRfbnVtQml0cysrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWxldGUgY29udGV4dF9kaWN0aW9uYXJ5VG9DcmVhdGVbY29udGV4dF93XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IGNvbnRleHRfZGljdGlvbmFyeVtjb250ZXh0X3ddO1xuICAgICAgICAgIGZvciAoaT0wIDsgaTxjb250ZXh0X251bUJpdHMgOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8ICh2YWx1ZSYxKTtcbiAgICAgICAgICAgIGlmIChjb250ZXh0X2RhdGFfcG9zaXRpb24gPT0gYml0c1BlckNoYXItMSkge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID4+IDE7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0X2VubGFyZ2VJbi0tO1xuICAgICAgICBpZiAoY29udGV4dF9lbmxhcmdlSW4gPT0gMCkge1xuICAgICAgICAgIGNvbnRleHRfZW5sYXJnZUluID0gTWF0aC5wb3coMiwgY29udGV4dF9udW1CaXRzKTtcbiAgICAgICAgICBjb250ZXh0X251bUJpdHMrKztcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgd2MgdG8gdGhlIGRpY3Rpb25hcnkuXG4gICAgICAgIGNvbnRleHRfZGljdGlvbmFyeVtjb250ZXh0X3djXSA9IGNvbnRleHRfZGljdFNpemUrKztcbiAgICAgICAgY29udGV4dF93ID0gU3RyaW5nKGNvbnRleHRfYyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3V0cHV0IHRoZSBjb2RlIGZvciB3LlxuICAgIGlmIChjb250ZXh0X3cgIT09IFwiXCIpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29udGV4dF9kaWN0aW9uYXJ5VG9DcmVhdGUsY29udGV4dF93KSkge1xuICAgICAgICBpZiAoY29udGV4dF93LmNoYXJDb2RlQXQoMCk8MjU2KSB7XG4gICAgICAgICAgZm9yIChpPTAgOyBpPGNvbnRleHRfbnVtQml0cyA7IGkrKykge1xuICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IChjb250ZXh0X2RhdGFfdmFsIDw8IDEpO1xuICAgICAgICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PSBiaXRzUGVyQ2hhci0xKSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsdWUgPSBjb250ZXh0X3cuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICBmb3IgKGk9MCA7IGk8OCA7IGkrKykge1xuICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IChjb250ZXh0X2RhdGFfdmFsIDw8IDEpIHwgKHZhbHVlJjEpO1xuICAgICAgICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PSBiaXRzUGVyQ2hhci0xKSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPj4gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSAxO1xuICAgICAgICAgIGZvciAoaT0wIDsgaTxjb250ZXh0X251bUJpdHMgOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8IHZhbHVlO1xuICAgICAgICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PSBiaXRzUGVyQ2hhci0xKSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsdWUgPSBjb250ZXh0X3cuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICBmb3IgKGk9MCA7IGk8MTYgOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8ICh2YWx1ZSYxKTtcbiAgICAgICAgICAgIGlmIChjb250ZXh0X2RhdGFfcG9zaXRpb24gPT0gYml0c1BlckNoYXItMSkge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID4+IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRleHRfZW5sYXJnZUluLS07XG4gICAgICAgIGlmIChjb250ZXh0X2VubGFyZ2VJbiA9PSAwKSB7XG4gICAgICAgICAgY29udGV4dF9lbmxhcmdlSW4gPSBNYXRoLnBvdygyLCBjb250ZXh0X251bUJpdHMpO1xuICAgICAgICAgIGNvbnRleHRfbnVtQml0cysrO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0X2RpY3Rpb25hcnlUb0NyZWF0ZVtjb250ZXh0X3ddO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBjb250ZXh0X2RpY3Rpb25hcnlbY29udGV4dF93XTtcbiAgICAgICAgZm9yIChpPTAgOyBpPGNvbnRleHRfbnVtQml0cyA7IGkrKykge1xuICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8ICh2YWx1ZSYxKTtcbiAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyLTEpIHtcbiAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlID0gdmFsdWUgPj4gMTtcbiAgICAgICAgfVxuXG5cbiAgICAgIH1cbiAgICAgIGNvbnRleHRfZW5sYXJnZUluLS07XG4gICAgICBpZiAoY29udGV4dF9lbmxhcmdlSW4gPT0gMCkge1xuICAgICAgICBjb250ZXh0X2VubGFyZ2VJbiA9IE1hdGgucG93KDIsIGNvbnRleHRfbnVtQml0cyk7XG4gICAgICAgIGNvbnRleHRfbnVtQml0cysrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1hcmsgdGhlIGVuZCBvZiB0aGUgc3RyZWFtXG4gICAgdmFsdWUgPSAyO1xuICAgIGZvciAoaT0wIDsgaTxjb250ZXh0X251bUJpdHMgOyBpKyspIHtcbiAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8ICh2YWx1ZSYxKTtcbiAgICAgIGlmIChjb250ZXh0X2RhdGFfcG9zaXRpb24gPT0gYml0c1BlckNoYXItMSkge1xuICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IHZhbHVlID4+IDE7XG4gICAgfVxuXG4gICAgLy8gRmx1c2ggdGhlIGxhc3QgY2hhclxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBjb250ZXh0X2RhdGFfdmFsID0gKGNvbnRleHRfZGF0YV92YWwgPDwgMSk7XG4gICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyLTEpIHtcbiAgICAgICAgY29udGV4dF9kYXRhLnB1c2goZ2V0Q2hhckZyb21JbnQoY29udGV4dF9kYXRhX3ZhbCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGVsc2UgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0X2RhdGEuam9pbignJyk7XG4gIH0sXG5cbiAgZGVjb21wcmVzczogZnVuY3Rpb24gKGNvbXByZXNzZWQpIHtcbiAgICBpZiAoY29tcHJlc3NlZCA9PSBudWxsKSByZXR1cm4gXCJcIjtcbiAgICBpZiAoY29tcHJlc3NlZCA9PSBcIlwiKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gTFpTdHJpbmcuX2RlY29tcHJlc3MoY29tcHJlc3NlZC5sZW5ndGgsIDMyNzY4LCBmdW5jdGlvbihpbmRleCkgeyByZXR1cm4gY29tcHJlc3NlZC5jaGFyQ29kZUF0KGluZGV4KTsgfSk7XG4gIH0sXG5cbiAgX2RlY29tcHJlc3M6IGZ1bmN0aW9uIChsZW5ndGgsIHJlc2V0VmFsdWUsIGdldE5leHRWYWx1ZSkge1xuICAgIHZhciBkaWN0aW9uYXJ5ID0gW10sXG4gICAgICAgIG5leHQsXG4gICAgICAgIGVubGFyZ2VJbiA9IDQsXG4gICAgICAgIGRpY3RTaXplID0gNCxcbiAgICAgICAgbnVtQml0cyA9IDMsXG4gICAgICAgIGVudHJ5ID0gXCJcIixcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIGksXG4gICAgICAgIHcsXG4gICAgICAgIGJpdHMsIHJlc2IsIG1heHBvd2VyLCBwb3dlcixcbiAgICAgICAgYyxcbiAgICAgICAgZGF0YSA9IHt2YWw6Z2V0TmV4dFZhbHVlKDApLCBwb3NpdGlvbjpyZXNldFZhbHVlLCBpbmRleDoxfTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGRpY3Rpb25hcnlbaV0gPSBpO1xuICAgIH1cblxuICAgIGJpdHMgPSAwO1xuICAgIG1heHBvd2VyID0gTWF0aC5wb3coMiwyKTtcbiAgICBwb3dlcj0xO1xuICAgIHdoaWxlIChwb3dlciE9bWF4cG93ZXIpIHtcbiAgICAgIHJlc2IgPSBkYXRhLnZhbCAmIGRhdGEucG9zaXRpb247XG4gICAgICBkYXRhLnBvc2l0aW9uID4+PSAxO1xuICAgICAgaWYgKGRhdGEucG9zaXRpb24gPT0gMCkge1xuICAgICAgICBkYXRhLnBvc2l0aW9uID0gcmVzZXRWYWx1ZTtcbiAgICAgICAgZGF0YS52YWwgPSBnZXROZXh0VmFsdWUoZGF0YS5pbmRleCsrKTtcbiAgICAgIH1cbiAgICAgIGJpdHMgfD0gKHJlc2I+MCA/IDEgOiAwKSAqIHBvd2VyO1xuICAgICAgcG93ZXIgPDw9IDE7XG4gICAgfVxuXG4gICAgc3dpdGNoIChuZXh0ID0gYml0cykge1xuICAgICAgY2FzZSAwOlxuICAgICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAgIG1heHBvd2VyID0gTWF0aC5wb3coMiw4KTtcbiAgICAgICAgICBwb3dlcj0xO1xuICAgICAgICAgIHdoaWxlIChwb3dlciE9bWF4cG93ZXIpIHtcbiAgICAgICAgICAgIHJlc2IgPSBkYXRhLnZhbCAmIGRhdGEucG9zaXRpb247XG4gICAgICAgICAgICBkYXRhLnBvc2l0aW9uID4+PSAxO1xuICAgICAgICAgICAgaWYgKGRhdGEucG9zaXRpb24gPT0gMCkge1xuICAgICAgICAgICAgICBkYXRhLnBvc2l0aW9uID0gcmVzZXRWYWx1ZTtcbiAgICAgICAgICAgICAgZGF0YS52YWwgPSBnZXROZXh0VmFsdWUoZGF0YS5pbmRleCsrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJpdHMgfD0gKHJlc2I+MCA/IDEgOiAwKSAqIHBvd2VyO1xuICAgICAgICAgICAgcG93ZXIgPDw9IDE7XG4gICAgICAgICAgfVxuICAgICAgICBjID0gZihiaXRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgICAgYml0cyA9IDA7XG4gICAgICAgICAgbWF4cG93ZXIgPSBNYXRoLnBvdygyLDE2KTtcbiAgICAgICAgICBwb3dlcj0xO1xuICAgICAgICAgIHdoaWxlIChwb3dlciE9bWF4cG93ZXIpIHtcbiAgICAgICAgICAgIHJlc2IgPSBkYXRhLnZhbCAmIGRhdGEucG9zaXRpb247XG4gICAgICAgICAgICBkYXRhLnBvc2l0aW9uID4+PSAxO1xuICAgICAgICAgICAgaWYgKGRhdGEucG9zaXRpb24gPT0gMCkge1xuICAgICAgICAgICAgICBkYXRhLnBvc2l0aW9uID0gcmVzZXRWYWx1ZTtcbiAgICAgICAgICAgICAgZGF0YS52YWwgPSBnZXROZXh0VmFsdWUoZGF0YS5pbmRleCsrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJpdHMgfD0gKHJlc2I+MCA/IDEgOiAwKSAqIHBvd2VyO1xuICAgICAgICAgICAgcG93ZXIgPDw9IDE7XG4gICAgICAgICAgfVxuICAgICAgICBjID0gZihiaXRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBkaWN0aW9uYXJ5WzNdID0gYztcbiAgICB3ID0gYztcbiAgICByZXN1bHQucHVzaChjKTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKGRhdGEuaW5kZXggPiBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG5cbiAgICAgIGJpdHMgPSAwO1xuICAgICAgbWF4cG93ZXIgPSBNYXRoLnBvdygyLG51bUJpdHMpO1xuICAgICAgcG93ZXI9MTtcbiAgICAgIHdoaWxlIChwb3dlciE9bWF4cG93ZXIpIHtcbiAgICAgICAgcmVzYiA9IGRhdGEudmFsICYgZGF0YS5wb3NpdGlvbjtcbiAgICAgICAgZGF0YS5wb3NpdGlvbiA+Pj0gMTtcbiAgICAgICAgaWYgKGRhdGEucG9zaXRpb24gPT0gMCkge1xuICAgICAgICAgIGRhdGEucG9zaXRpb24gPSByZXNldFZhbHVlO1xuICAgICAgICAgIGRhdGEudmFsID0gZ2V0TmV4dFZhbHVlKGRhdGEuaW5kZXgrKyk7XG4gICAgICAgIH1cbiAgICAgICAgYml0cyB8PSAocmVzYj4wID8gMSA6IDApICogcG93ZXI7XG4gICAgICAgIHBvd2VyIDw8PSAxO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGMgPSBiaXRzKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgICBtYXhwb3dlciA9IE1hdGgucG93KDIsOCk7XG4gICAgICAgICAgcG93ZXI9MTtcbiAgICAgICAgICB3aGlsZSAocG93ZXIhPW1heHBvd2VyKSB7XG4gICAgICAgICAgICByZXNiID0gZGF0YS52YWwgJiBkYXRhLnBvc2l0aW9uO1xuICAgICAgICAgICAgZGF0YS5wb3NpdGlvbiA+Pj0gMTtcbiAgICAgICAgICAgIGlmIChkYXRhLnBvc2l0aW9uID09IDApIHtcbiAgICAgICAgICAgICAgZGF0YS5wb3NpdGlvbiA9IHJlc2V0VmFsdWU7XG4gICAgICAgICAgICAgIGRhdGEudmFsID0gZ2V0TmV4dFZhbHVlKGRhdGEuaW5kZXgrKyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiaXRzIHw9IChyZXNiPjAgPyAxIDogMCkgKiBwb3dlcjtcbiAgICAgICAgICAgIHBvd2VyIDw8PSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpY3Rpb25hcnlbZGljdFNpemUrK10gPSBmKGJpdHMpO1xuICAgICAgICAgIGMgPSBkaWN0U2l6ZS0xO1xuICAgICAgICAgIGVubGFyZ2VJbi0tO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgYml0cyA9IDA7XG4gICAgICAgICAgbWF4cG93ZXIgPSBNYXRoLnBvdygyLDE2KTtcbiAgICAgICAgICBwb3dlcj0xO1xuICAgICAgICAgIHdoaWxlIChwb3dlciE9bWF4cG93ZXIpIHtcbiAgICAgICAgICAgIHJlc2IgPSBkYXRhLnZhbCAmIGRhdGEucG9zaXRpb247XG4gICAgICAgICAgICBkYXRhLnBvc2l0aW9uID4+PSAxO1xuICAgICAgICAgICAgaWYgKGRhdGEucG9zaXRpb24gPT0gMCkge1xuICAgICAgICAgICAgICBkYXRhLnBvc2l0aW9uID0gcmVzZXRWYWx1ZTtcbiAgICAgICAgICAgICAgZGF0YS52YWwgPSBnZXROZXh0VmFsdWUoZGF0YS5pbmRleCsrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJpdHMgfD0gKHJlc2I+MCA/IDEgOiAwKSAqIHBvd2VyO1xuICAgICAgICAgICAgcG93ZXIgPDw9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpY3Rpb25hcnlbZGljdFNpemUrK10gPSBmKGJpdHMpO1xuICAgICAgICAgIGMgPSBkaWN0U2l6ZS0xO1xuICAgICAgICAgIGVubGFyZ2VJbi0tO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVubGFyZ2VJbiA9PSAwKSB7XG4gICAgICAgIGVubGFyZ2VJbiA9IE1hdGgucG93KDIsIG51bUJpdHMpO1xuICAgICAgICBudW1CaXRzKys7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWN0aW9uYXJ5W2NdKSB7XG4gICAgICAgIGVudHJ5ID0gZGljdGlvbmFyeVtjXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjID09PSBkaWN0U2l6ZSkge1xuICAgICAgICAgIGVudHJ5ID0gdyArIHcuY2hhckF0KDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChlbnRyeSk7XG5cbiAgICAgIC8vIEFkZCB3K2VudHJ5WzBdIHRvIHRoZSBkaWN0aW9uYXJ5LlxuICAgICAgZGljdGlvbmFyeVtkaWN0U2l6ZSsrXSA9IHcgKyBlbnRyeS5jaGFyQXQoMCk7XG4gICAgICBlbmxhcmdlSW4tLTtcblxuICAgICAgdyA9IGVudHJ5O1xuXG4gICAgICBpZiAoZW5sYXJnZUluID09IDApIHtcbiAgICAgICAgZW5sYXJnZUluID0gTWF0aC5wb3coMiwgbnVtQml0cyk7XG4gICAgICAgIG51bUJpdHMrKztcbiAgICAgIH1cblxuICAgIH1cbiAgfVxufTtcbiAgcmV0dXJuIExaU3RyaW5nO1xufSkoKTtcblxuaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gTFpTdHJpbmc7IH0pO1xufSBlbHNlIGlmKCB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUgIT0gbnVsbCApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBMWlN0cmluZ1xufSBlbHNlIGlmKCB0eXBlb2YgYW5ndWxhciAhPT0gJ3VuZGVmaW5lZCcgJiYgYW5ndWxhciAhPSBudWxsICkge1xuICBhbmd1bGFyLm1vZHVsZSgnTFpTdHJpbmcnLCBbXSlcbiAgLmZhY3RvcnkoJ0xaU3RyaW5nJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBMWlN0cmluZztcbiAgfSk7XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/SpriteManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a71aa/D32dFIbq5Kq7tTAiX', 'SpriteManager');
// Script/Manager/SpriteManager.ts

"use strict";
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
var SpriteManager = /** @class */ (function () {
    function SpriteManager() {
        this._spriteFrames = {};
    }
    SpriteManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new SpriteManager();
            this._instance._init();
        }
        return this._instance;
    };
    SpriteManager.destroyInstance = function () {
        if (this._instance) {
            this._instance._destroy();
            delete this._instance;
            this._instance = null;
        }
    };
    SpriteManager.prototype._init = function () {
    };
    SpriteManager.prototype._destroy = function () {
    };
    SpriteManager.prototype.setBundleSpriteFrameByName = function (sprite, spriteFrameName) {
        return __awaiter(this, void 0, void 0, function () {
            var frame;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!sprite) {
                            return [2 /*return*/];
                        }
                        if (!Boolean(spriteFrameName)) {
                            cc.warn("setSpriteFrameByName spriteFrameName is null");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getBundleSpriteFrame(spriteFrameName)];
                    case 1:
                        frame = _a.sent();
                        if (sprite && cc.isValid(sprite) && cc.isValid(sprite.node)) {
                            if (frame) {
                                sprite.spriteFrame = frame;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SpriteManager.prototype.getBundleSpriteFrame = function (spriteFrameName) {
        return __awaiter(this, void 0, void 0, function () {
            var sp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sp = this._spriteFrames[spriteFrameName];
                        if (sp) {
                            return [2 /*return*/, sp];
                        }
                        return [4 /*yield*/, this.loadBundleSpriteFrame(spriteFrameName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SpriteManager.prototype.loadBundleSpriteFrame = function (path) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this._spriteFrames[path]) {
                            resolve(_this._spriteFrames[path]);
                            return;
                        }
                        var bundle = cc.assetManager.getBundle("PlayerEffect");
                        if (!bundle) {
                            cc.warn("Game分包还没加载,图片路径", path);
                            resolve(null);
                            return;
                        }
                        bundle.load(path, cc.SpriteFrame, function (err, spriteFrame) {
                            if (err) {
                                cc.warn("loadSpriteFrame err", path, err);
                                resolve(null);
                                return;
                            }
                            _this._spriteFrames[path] = spriteFrame;
                            spriteFrame.addRef();
                            resolve(spriteFrame);
                        });
                    })];
            });
        });
    };
    SpriteManager.prototype.setSpriteFrameByName = function (sprite, spriteFrameName) {
        return __awaiter(this, void 0, void 0, function () {
            var frame;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!sprite) {
                            return [2 /*return*/];
                        }
                        if (!Boolean(spriteFrameName)) {
                            cc.warn("setSpriteFrameByName spriteFrameName is null");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getSpriteFrame(spriteFrameName)];
                    case 1:
                        frame = _a.sent();
                        if (sprite && cc.isValid(sprite) && cc.isValid(sprite.node)) {
                            if (frame) {
                                sprite.spriteFrame = frame;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SpriteManager.prototype.getSpriteFrame = function (spriteFrameName) {
        return __awaiter(this, void 0, void 0, function () {
            var sp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sp = this._spriteFrames[spriteFrameName];
                        if (sp) {
                            return [2 /*return*/, sp];
                        }
                        return [4 /*yield*/, this.loadSpriteFrame(spriteFrameName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SpriteManager.prototype.loadSpriteFrame = function (path) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this._spriteFrames[path]) {
                            resolve(_this._spriteFrames[path]);
                            return;
                        }
                        cc.resources.load(path, cc.SpriteFrame, function (err, spriteFrame) {
                            if (err) {
                                cc.warn("loadSpriteFrame err", path, err);
                                resolve(null);
                                return;
                            }
                            _this._spriteFrames[path] = spriteFrame;
                            spriteFrame.addRef();
                            resolve(spriteFrame);
                        });
                    })];
            });
        });
    };
    SpriteManager._instance = null;
    return SpriteManager;
}());
exports.default = SpriteManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxTcHJpdGVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtRQUdZLGtCQUFhLEdBQVEsRUFBRSxDQUFDO0lBc0hwQyxDQUFDO0lBcEhpQix5QkFBVyxHQUF6QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFYSw2QkFBZSxHQUE3QjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzFCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFTyw2QkFBSyxHQUFiO0lBRUEsQ0FBQztJQUVPLGdDQUFRLEdBQWhCO0lBRUEsQ0FBQztJQUVZLGtEQUEwQixHQUF2QyxVQUF3QyxNQUFpQixFQUFFLGVBQXVCOzs7Ozs7d0JBQzlFLElBQUksQ0FBQyxNQUFNLEVBQUU7NEJBQ1Qsc0JBQU87eUJBQ1Y7d0JBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTs0QkFDM0IsRUFBRSxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDOzRCQUN4RCxzQkFBTzt5QkFDVjt3QkFDVyxxQkFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLEVBQUE7O3dCQUF4RCxLQUFLLEdBQUcsU0FBZ0Q7d0JBQzVELElBQUksTUFBTSxJQUFJLEVBQUUs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TyxTQUEyQyxFQUFDOzs7O0tBQ3REO0lBRWEsdUNBQWUsR0FBN0IsVUFBOEIsSUFBWTt1Q0FBRyxPQUFPOzs7Z0JBQ2hELHNCQUFPLElBQUksT0FBTyxDQUFpQixVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUMvQyxJQUFJLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQzFCLE9BQU8sQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ2xDLE9BQU87eUJBQ1Y7d0JBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsV0FBVzs0QkFDckQsSUFBSSxHQUFHLEVBQUU7Z0NBQ0wsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0NBQzFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDZCxPQUFPOzZCQUNWOzRCQUNELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDOzRCQUN2QyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUE7NEJBQ3BCLE9BQU8sQ0FBQyxXQUE2QixDQUFDLENBQUM7d0JBQzNDLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxFQUFDOzs7S0FDTjtJQXRIYyx1QkFBUyxHQUFrQixJQUFJLENBQUM7SUF1SG5ELG9CQUFDO0NBekhELEFBeUhDLElBQUE7a0JBekhvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwcml0ZU1hbmFnZXIge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTcHJpdGVNYW5hZ2VyID0gbnVsbDtcbiAgICBwcml2YXRlIF9zcHJpdGVGcmFtZXM6IGFueSA9IHt9O1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgU3ByaXRlTWFuYWdlcigpO1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UuX2luaXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkZXN0cm95SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UuX2Rlc3Ryb3koKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9pbnN0YW5jZTtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXQoKSB7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIF9kZXN0cm95KCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHNldEJ1bmRsZVNwcml0ZUZyYW1lQnlOYW1lKHNwcml0ZTogY2MuU3ByaXRlLCBzcHJpdGVGcmFtZU5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAoIXNwcml0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQm9vbGVhbihzcHJpdGVGcmFtZU5hbWUpKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwic2V0U3ByaXRlRnJhbWVCeU5hbWUgc3ByaXRlRnJhbWVOYW1lIGlzIG51bGxcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZyYW1lID0gYXdhaXQgdGhpcy5nZXRCdW5kbGVTcHJpdGVGcmFtZShzcHJpdGVGcmFtZU5hbWUpO1xuICAgICAgICBpZiAoc3ByaXRlICYmIGNjLmlzVmFsaWQoc3ByaXRlKSAmJiBjYy5pc1ZhbGlkKHNwcml0ZS5ub2RlKSkge1xuICAgICAgICAgICAgaWYgKGZyYW1lKSB7XG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gZnJhbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldEJ1bmRsZVNwcml0ZUZyYW1lKHNwcml0ZUZyYW1lTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBzcCA9IHRoaXMuX3Nwcml0ZUZyYW1lc1tzcHJpdGVGcmFtZU5hbWVdXG4gICAgICAgIGlmIChzcCkge1xuICAgICAgICAgICAgcmV0dXJuIHNwXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMubG9hZEJ1bmRsZVNwcml0ZUZyYW1lKHNwcml0ZUZyYW1lTmFtZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkQnVuZGxlU3ByaXRlRnJhbWUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxjYy5TcHJpdGVGcmFtZT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Y2MuU3ByaXRlRnJhbWU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zcHJpdGVGcmFtZXNbcGF0aF0pIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3Nwcml0ZUZyYW1lc1twYXRoXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoXCJQbGF5ZXJFZmZlY3RcIik7XG4gICAgICAgICAgICBpZiAoIWJ1bmRsZSkge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oXCJHYW1l5YiG5YyF6L+Y5rKh5Yqg6L29LOWbvueJh+i3r+W+hFwiLCBwYXRoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1bmRsZS5sb2FkKHBhdGgsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2Mud2FybihcImxvYWRTcHJpdGVGcmFtZSBlcnJcIiwgcGF0aCwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGVGcmFtZXNbcGF0aF0gPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZS5hZGRSZWYoKVxuICAgICAgICAgICAgICAgIHJlc29sdmUoc3ByaXRlRnJhbWUgYXMgY2MuU3ByaXRlRnJhbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzZXRTcHJpdGVGcmFtZUJ5TmFtZShzcHJpdGU6IGNjLlNwcml0ZSwgc3ByaXRlRnJhbWVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFzcHJpdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUJvb2xlYW4oc3ByaXRlRnJhbWVOYW1lKSkge1xuICAgICAgICAgICAgY2Mud2FybihcInNldFNwcml0ZUZyYW1lQnlOYW1lIHNwcml0ZUZyYW1lTmFtZSBpcyBudWxsXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmcmFtZSA9IGF3YWl0IHRoaXMuZ2V0U3ByaXRlRnJhbWUoc3ByaXRlRnJhbWVOYW1lKTtcbiAgICAgICAgaWYgKHNwcml0ZSAmJiBjYy5pc1ZhbGlkKHNwcml0ZSkgJiYgY2MuaXNWYWxpZChzcHJpdGUubm9kZSkpIHtcbiAgICAgICAgICAgIGlmIChmcmFtZSkge1xuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IGZyYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldFNwcml0ZUZyYW1lKHNwcml0ZUZyYW1lTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBzcCA9IHRoaXMuX3Nwcml0ZUZyYW1lc1tzcHJpdGVGcmFtZU5hbWVdXG4gICAgICAgIGlmIChzcCkge1xuICAgICAgICAgICAgcmV0dXJuIHNwXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMubG9hZFNwcml0ZUZyYW1lKHNwcml0ZUZyYW1lTmFtZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkU3ByaXRlRnJhbWUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxjYy5TcHJpdGVGcmFtZT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Y2MuU3ByaXRlRnJhbWU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zcHJpdGVGcmFtZXNbcGF0aF0pIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3Nwcml0ZUZyYW1lc1twYXRoXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYy53YXJuKFwibG9hZFNwcml0ZUZyYW1lIGVyclwiLCBwYXRoLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZUZyYW1lc1twYXRoXSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLmFkZFJlZigpXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzcHJpdGVGcmFtZSBhcyBjYy5TcHJpdGVGcmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/TurnTable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '22ed9iFedlC6qm7EBKnMIbn', 'TurnTable');
// Script/Common/TurnTable.js

"use strict";

cc.Class({
  "extends": cc.Component,
  editor: {
    executeInEditMode: true,
    menu: 'TurnTable'
  },
  properties: {
    radius: {
      get: function get() {
        return this._radius;
      },
      set: function set(val) {
        if (this._radius !== val) {
          this._radius = val;

          if (CC_EDITOR) {
            this.onTurnChange();
          }
        }
      }
    },
    _radius: '',
    target: cc.Node
  },
  onTurnChange: function onTurnChange() {
    if (this.target && this.target.children.length > 0) {
      var len = this.target.children.length;
      var angle = 360 / len;

      for (var i = 0; i < len; i++) {
        var x = this.radius * Math.cos(angle * i * Math.PI / 180);
        var y = this.radius * Math.sin(angle * i * Math.PI / 180);
        this.target.children[i].setPosition(x, y);
      }
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXFR1cm5UYWJsZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwiZWRpdG9yIiwiZXhlY3V0ZUluRWRpdE1vZGUiLCJtZW51IiwicHJvcGVydGllcyIsInJhZGl1cyIsImdldCIsIl9yYWRpdXMiLCJzZXQiLCJ2YWwiLCJDQ19FRElUT1IiLCJvblR1cm5DaGFuZ2UiLCJ0YXJnZXQiLCJOb2RlIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJsZW4iLCJhbmdsZSIsImkiLCJ4IiwiTWF0aCIsImNvcyIsIlBJIiwieSIsInNpbiIsInNldFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxNQUFNLEVBQUU7QUFDSkMsSUFBQUEsaUJBQWlCLEVBQUUsSUFEZjtBQUVKQyxJQUFBQSxJQUFJLEVBQUU7QUFGRixHQUhIO0FBUUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQUU7QUFDSkMsTUFBQUEsR0FESSxpQkFDRztBQUNILGVBQU8sS0FBS0MsT0FBWjtBQUNILE9BSEc7QUFJSkMsTUFBQUEsR0FKSSxlQUlDQyxHQUpELEVBSU07QUFDTixZQUFJLEtBQUtGLE9BQUwsS0FBaUJFLEdBQXJCLEVBQTBCO0FBQ3RCLGVBQUtGLE9BQUwsR0FBZUUsR0FBZjs7QUFDQSxjQUFJQyxTQUFKLEVBQWU7QUFDWCxpQkFBS0MsWUFBTDtBQUNIO0FBQ0o7QUFDSjtBQVhHLEtBREE7QUFjUkosSUFBQUEsT0FBTyxFQUFFLEVBZEQ7QUFlUkssSUFBQUEsTUFBTSxFQUFFZCxFQUFFLENBQUNlO0FBZkgsR0FSUDtBQTBCTEYsRUFBQUEsWUExQkssMEJBMEJTO0FBQ1YsUUFBRyxLQUFLQyxNQUFMLElBQWUsS0FBS0EsTUFBTCxDQUFZRSxRQUFaLENBQXFCQyxNQUFyQixHQUE4QixDQUFoRCxFQUFrRDtBQUM5QyxVQUFJQyxHQUFHLEdBQUcsS0FBS0osTUFBTCxDQUFZRSxRQUFaLENBQXFCQyxNQUEvQjtBQUNBLFVBQUlFLEtBQUssR0FBRyxNQUFNRCxHQUFsQjs7QUFDQSxXQUFJLElBQUlFLENBQUMsR0FBRyxDQUFaLEVBQWdCQSxDQUFDLEdBQUdGLEdBQXBCLEVBQXlCRSxDQUFDLEVBQTFCLEVBQTZCO0FBQ3pCLFlBQUlDLENBQUMsR0FBRyxLQUFLZCxNQUFMLEdBQWNlLElBQUksQ0FBQ0MsR0FBTCxDQUFTSixLQUFLLEdBQUdDLENBQVIsR0FBWUUsSUFBSSxDQUFDRSxFQUFqQixHQUFzQixHQUEvQixDQUF0QjtBQUNBLFlBQUlDLENBQUMsR0FBRyxLQUFLbEIsTUFBTCxHQUFjZSxJQUFJLENBQUNJLEdBQUwsQ0FBU1AsS0FBSyxHQUFHQyxDQUFSLEdBQVlFLElBQUksQ0FBQ0UsRUFBakIsR0FBb0IsR0FBN0IsQ0FBdEI7QUFDQSxhQUFLVixNQUFMLENBQVlFLFFBQVosQ0FBcUJJLENBQXJCLEVBQXdCTyxXQUF4QixDQUFvQ04sQ0FBcEMsRUFBc0NJLENBQXRDO0FBQ0g7QUFDSjtBQUNKO0FBcENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBlZGl0b3I6IHtcbiAgICAgICAgZXhlY3V0ZUluRWRpdE1vZGU6IHRydWUsXG4gICAgICAgIG1lbnU6ICdUdXJuVGFibGUnXG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcmFkaXVzOiB7XG4gICAgICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yYWRpdXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0ICh2YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmFkaXVzICE9PSB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmFkaXVzID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQ0NfRURJVE9SKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uVHVybkNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX3JhZGl1czogJycsXG4gICAgICAgIHRhcmdldDogY2MuTm9kZVxuICAgIH0sXG4gICAgXG4gICAgb25UdXJuQ2hhbmdlKCl7XG4gICAgICAgIGlmKHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LmNoaWxkcmVuLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgbGV0IGxlbiA9IHRoaXMudGFyZ2V0LmNoaWxkcmVuLmxlbmd0aFxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gMzYwIC8gbGVuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IGxlbiA7aSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IHRoaXMucmFkaXVzICogTWF0aC5jb3MoYW5nbGUgKiBpICogTWF0aC5QSSAvIDE4MClcbiAgICAgICAgICAgICAgICBsZXQgeSA9IHRoaXMucmFkaXVzICogTWF0aC5zaW4oYW5nbGUgKiBpICogTWF0aC5QSS8xODApXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuY2hpbGRyZW5baV0uc2V0UG9zaXRpb24oeCx5KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIManager/OtherGameMain/OtherGameMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'adf41hmNfNKpasqzpicgEYT', 'OtherGameMain');
// Script/UIManager/OtherGameMain/OtherGameMain.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIParent_1 = require("../../Base/UIParent");
var SdkCtrl_1 = require("../../Ctrl/SdkCtrl");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OtherGameMain = /** @class */ (function (_super) {
    __extends(OtherGameMain, _super);
    function OtherGameMain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @property(cc.Slider)
    // bg1MusicSlider: cc.Slider = null;
    // LIFE-CYCLE CALLBACKS:
    OtherGameMain.prototype.ShowUI = function (data) {
        _super.prototype.ShowUI.call(this, data);
        SdkCtrl_1.default.getInstance().ShowBanner();
    };
    OtherGameMain.prototype.onClickClose = function () {
        this.HideUI();
        SdkCtrl_1.default.getInstance().HideBanner();
    };
    OtherGameMain = __decorate([
        ccclass
    ], OtherGameMain);
    return OtherGameMain;
}(UIParent_1.default));
exports.default = OtherGameMain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVSU1hbmFnZXJcXE90aGVyR2FtZU1haW5cXE90aGVyR2FtZU1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLDhDQUF5QztBQUduQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBUTtJQUFuRDs7SUFlQSxDQUFDO0lBZEcsdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUVwQyx3QkFBd0I7SUFFeEIsOEJBQU0sR0FBTixVQUFPLElBQVM7UUFDWixpQkFBTSxNQUFNLFlBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsaUJBQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUNiLGlCQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDdEMsQ0FBQztJQWRnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBZWpDO0lBQUQsb0JBQUM7Q0FmRCxBQWVDLENBZjBDLGtCQUFRLEdBZWxEO2tCQWZvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJUGFyZW50IGZyb20gXCIuLi8uLi9CYXNlL1VJUGFyZW50XCI7XG5pbXBvcnQgU2RrQ3RybCBmcm9tIFwiLi4vLi4vQ3RybC9TZGtDdHJsXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE90aGVyR2FtZU1haW4gZXh0ZW5kcyBVSVBhcmVudCB7XG4gICAgLy8gQHByb3BlcnR5KGNjLlNsaWRlcilcbiAgICAvLyBiZzFNdXNpY1NsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgU2hvd1VJKGRhdGE6IGFueSkge1xuICAgICAgICBzdXBlci5TaG93VUkoZGF0YSk7XG4gICAgICAgIFNka0N0cmwuZ2V0SW5zdGFuY2UoKS5TaG93QmFubmVyKClcbiAgICB9XG5cbiAgICBvbkNsaWNrQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMuSGlkZVVJKClcbiAgICAgICAgU2RrQ3RybC5nZXRJbnN0YW5jZSgpLkhpZGVCYW5uZXIoKVxuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Config/ItemConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2a73Gio2VLzYSwUDNFEacn', 'ItemConfig');
// Script/Config/ItemConfig.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemConfigBasic = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemConfigConfig = /** @class */ (function () {
    function ItemConfigConfig() {
    }
    ItemConfigConfig.datas = {
        1: {
            id: 1,
            name: "金币",
            itemPrefabName: "gold",
            iconName: "gold",
        },
    };
    ItemConfigConfig = __decorate([
        ccclass
    ], ItemConfigConfig);
    return ItemConfigConfig;
}());
exports.default = ItemConfigConfig;
var ItemConfigBasic = /** @class */ (function () {
    function ItemConfigBasic() {
        /** ID */
        this.id = 0;
        this.name = "";
        this.itemPrefabName = "";
        this.iconName = "";
    }
    return ItemConfigBasic;
}());
exports.ItemConfigBasic = ItemConfigBasic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb25maWdcXEl0ZW1Db25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtJQVNBLENBQUM7SUFSaUIsc0JBQUssR0FBRztRQUNsQixDQUFDLEVBQUU7WUFDQyxFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxJQUFJO1lBQ1YsY0FBYyxFQUFFLE1BQU07WUFDdEIsUUFBUSxFQUFFLE1BQU07U0FDbkI7S0FDSixDQUFBO0lBUmdCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBU3BDO0lBQUQsdUJBQUM7Q0FURCxBQVNDLElBQUE7a0JBVG9CLGdCQUFnQjtBQVdyQztJQUFBO1FBQ0ksU0FBUztRQUNULE9BQUUsR0FBVyxDQUFDLENBQUE7UUFDZCxTQUFJLEdBQVcsRUFBRSxDQUFBO1FBQ2pCLG1CQUFjLEdBQVcsRUFBRSxDQUFBO1FBQzNCLGFBQVEsR0FBVyxFQUFFLENBQUE7SUFDekIsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1Db25maWdDb25maWcge1xuICAgIHB1YmxpYyBzdGF0aWMgZGF0YXMgPSB7XG4gICAgICAgIDE6IHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmFtZTogXCLph5HluIFcIixcbiAgICAgICAgICAgIGl0ZW1QcmVmYWJOYW1lOiBcImdvbGRcIixcbiAgICAgICAgICAgIGljb25OYW1lOiBcImdvbGRcIixcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJdGVtQ29uZmlnQmFzaWMge1xuICAgIC8qKiBJRCAqL1xuICAgIGlkOiBudW1iZXIgPSAwXG4gICAgbmFtZTogc3RyaW5nID0gXCJcIlxuICAgIGl0ZW1QcmVmYWJOYW1lOiBzdHJpbmcgPSBcIlwiXG4gICAgaWNvbk5hbWU6IHN0cmluZyA9IFwiXCJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other/SoundMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '48519eBSs9KNpciFARl2X9H', 'SoundMgr');
// Script/Other/SoundMgr.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameData_1 = require("./GameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundMgr = /** @class */ (function (_super) {
    __extends(SoundMgr, _super);
    function SoundMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sound_path = 'music/';
        _this.sounds = {};
        _this.music_enabled = true;
        _this.audio_enabled = true;
        _this.music = 'BGM';
        return _this;
    }
    SoundMgr_1 = SoundMgr;
    SoundMgr.getInstance = function () {
        if (!this._instance) {
            this._instance = new SoundMgr_1();
            this._instance._init();
        }
        return this._instance;
    };
    SoundMgr.prototype._init = function () {
        this.setBgmVolume(this.getBgmVolume());
        this.setAudioVolume(this.getAudioVolume());
    };
    SoundMgr.prototype.addSound = function (key, clip) {
        this.sounds[key] = clip;
    };
    SoundMgr.prototype.playFx = function (fxName, isloop) {
        if (isloop === void 0) { isloop = false; }
        if (!this.audio_enabled)
            return;
        if (this.sounds[fxName])
            cc.audioEngine.playEffect(this.sounds[fxName], isloop);
    };
    SoundMgr.prototype.playMusic = function (musicName) {
        if (!this.music_enabled)
            return;
        if (this.sounds[musicName])
            cc.audioEngine.playMusic(this.sounds[musicName], true);
    };
    SoundMgr.prototype.setBgmVolume = function (num) {
        cc.audioEngine.setMusicVolume(num);
        GameData_1.default.saveLocalData("MusicVolume", num);
    };
    SoundMgr.prototype.setAudioVolume = function (num) {
        cc.audioEngine.setEffectsVolume(num);
        GameData_1.default.saveLocalData("EffectsVolume", num);
    };
    SoundMgr.prototype.getBgmVolume = function () {
        var num = GameData_1.default.getLocalData("MusicVolume");
        if (num == 0) {
            return 0;
        }
        return num ? num : 1;
    };
    SoundMgr.prototype.getAudioVolume = function () {
        var num = GameData_1.default.getLocalData("EffectsVolume");
        if (num == 0) {
            return 0;
        }
        return num ? num : 1;
    };
    SoundMgr.prototype.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    SoundMgr.prototype.stopAllMusic = function () {
        cc.audioEngine.stopAll();
    };
    SoundMgr.prototype.setMusic = function (enabled) {
        this.music_enabled = enabled;
        if (!enabled) {
            cc.audioEngine.stopMusic();
        }
    };
    SoundMgr.prototype.setAudio = function (enabled) {
        this.audio_enabled = enabled;
    };
    SoundMgr.prototype.setEnabled = function (enabled) {
        this.music_enabled = enabled;
        if (this.music_enabled) {
            this.playMusic(this.music);
        }
        else {
            cc.audioEngine.stopAll();
        }
    };
    SoundMgr.prototype.getEnable = function () {
        return this.music_enabled;
    };
    SoundMgr.prototype.getMusicName = function () {
        return this.music;
    };
    var SoundMgr_1;
    SoundMgr = SoundMgr_1 = __decorate([
        ccclass
    ], SoundMgr);
    return SoundMgr;
}(cc.Component));
exports.default = SoundMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlclxcU291bmRNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBRzVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbUdDO1FBakdHLGdCQUFVLEdBQVcsUUFBUSxDQUFDO1FBQzlCLFlBQU0sR0FBMkIsRUFBRSxDQUFDO1FBQ3BDLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLFdBQUssR0FBVyxLQUFLLENBQUM7O0lBNkYxQixDQUFDO2lCQW5Hb0IsUUFBUTtJQVFYLG9CQUFXLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVEsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDMUI7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVPLHdCQUFLLEdBQWI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxHQUFXLEVBQUUsSUFBa0I7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxNQUFjLEVBQUUsTUFBdUI7UUFBdkIsdUJBQUEsRUFBQSxjQUF1QjtRQUMxQyxJQUFJLENBQUMsSUFB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QUMsU0FBUyxHQW1HakQ7a0JBbkdvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVEYXRhIGZyb20gXCIuL0dhbWVEYXRhXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kTWdyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHNvdW5kX3BhdGg6IHN0cmluZyA9ICdtdXNpYy8nO1xuICAgIHNvdW5kczogeyBba2V5OiBudW1iZXJdOiBhbnkgfSA9IHt9O1xuICAgIG11c2ljX2VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGF1ZGlvX2VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIG11c2ljOiBzdHJpbmcgPSAnQkdNJztcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9pbnN0YW5jZTogU291bmRNZ3I7XG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBTb3VuZE1nciB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFNvdW5kTWdyKCk7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5faW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0KCkge1xuICAgICAgICB0aGlzLnNldEJnbVZvbHVtZSh0aGlzLmdldEJnbVZvbHVtZSgpKVxuICAgICAgICB0aGlzLnNldEF1ZGlvVm9sdW1lKHRoaXMuZ2V0QXVkaW9Wb2x1bWUoKSlcbiAgICB9XG5cbiAgICBhZGRTb3VuZChrZXk6IHN0cmluZywgY2xpcDogY2MuQXVkaW9DbGlwKSB7XG4gICAgICAgIHRoaXMuc291bmRzW2tleV0gPSBjbGlwO1xuICAgIH1cblxuICAgIHBsYXlGeChmeE5hbWU6IHN0cmluZywgaXNsb29wOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLmF1ZGlvX2VuYWJsZWQpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuc291bmRzW2Z4TmFtZV0pIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zb3VuZHNbZnhOYW1lXSwgaXNsb29wKTtcbiAgICB9XG5cbiAgICBwbGF5TXVzaWMobXVzaWNOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLm11c2ljX2VuYWJsZWQpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuc291bmRzW211c2ljTmFtZV0pIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLnNvdW5kc1ttdXNpY05hbWVdLCB0cnVlKTtcbiAgICB9XG5cbiAgICBzZXRCZ21Wb2x1bWUobnVtOiBudW1iZXIpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUobnVtKVxuICAgICAgICBHYW1lRGF0YS5zYXZlTG9jYWxEYXRhKFwiTXVzaWNWb2x1bWVcIiwgbnVtKVxuICAgIH1cblxuICAgIHNldEF1ZGlvVm9sdW1lKG51bTogbnVtYmVyKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUobnVtKVxuICAgICAgICBHYW1lRGF0YS5zYXZlTG9jYWxEYXRhKFwiRWZmZWN0c1ZvbHVtZVwiLCBudW0pXG4gICAgfVxuXG4gICAgZ2V0QmdtVm9sdW1lKCkge1xuICAgICAgICBsZXQgbnVtID0gR2FtZURhdGEuZ2V0TG9jYWxEYXRhKFwiTXVzaWNWb2x1bWVcIilcbiAgICAgICAgaWYgKG51bSA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW0gPyBudW0gOiAxXG4gICAgfVxuXG4gICAgZ2V0QXVkaW9Wb2x1bWUoKSB7XG4gICAgICAgIGxldCBudW0gPSBHYW1lRGF0YS5nZXRMb2NhbERhdGEoXCJFZmZlY3RzVm9sdW1lXCIpXG4gICAgICAgIGlmIChudW0gPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtID8gbnVtIDogMVxuICAgIH1cblxuICAgIHN0b3BNdXNpYygpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XG4gICAgfVxuXG4gICAgc3RvcEFsbE11c2ljKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XG4gICAgfVxuXG4gICAgc2V0TXVzaWMoZW5hYmxlZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLm11c2ljX2VuYWJsZWQgPSBlbmFibGVkO1xuICAgICAgICBpZiAoIWVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEF1ZGlvKGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5hdWRpb19lbmFibGVkID0gZW5hYmxlZDtcbiAgICB9XG5cbiAgICBzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5tdXNpY19lbmFibGVkID0gZW5hYmxlZDtcbiAgICAgICAgaWYgKHRoaXMubXVzaWNfZW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5TXVzaWModGhpcy5tdXNpYyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRFbmFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm11c2ljX2VuYWJsZWQ7XG4gICAgfVxuXG5cbiAgICBnZXRNdXNpY05hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm11c2ljXG4gICAgfVxuXG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/plugins/SkeletonExt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3ee8wnObtHVbVVbFY8a+mj', 'SkeletonExt');
// Script/plugins/SkeletonExt.js

"use strict";

cc.game.once(cc.game.EVENT_ENGINE_INITED, function () {
  cc.js.mixin(sp.Skeleton.prototype, {
    update: function update(dt) {
      // if (CC_EDITOR) return;
      if (CC_EDITOR) {
        cc.engine._animatingInEditMode = 1;
        cc.engine.animatingInEditMode = 1;
      }

      if (this.paused) return;
      dt *= this.timeScale * sp.timeScale;

      if (this.isAnimationCached()) {
        // Cache mode and has animation queue.
        if (this._isAniComplete) {
          if (this._animationQueue.length === 0 && !this._headAniInfo) {
            var frameCache = this._frameCache;

            if (frameCache && frameCache.isInvalid()) {
              frameCache.updateToFrame();
              var frames = frameCache.frames;
              this._curFrame = frames[frames.length - 1];
            }

            return;
          }

          if (!this._headAniInfo) {
            this._headAniInfo = this._animationQueue.shift();
          }

          this._accTime += dt;

          if (this._accTime > this._headAniInfo.delay) {
            var aniInfo = this._headAniInfo;
            this._headAniInfo = null;
            this.setAnimation(0, aniInfo.animationName, aniInfo.loop);
          }

          return;
        }

        this._updateCache(dt);
      } else {
        this._updateRealtime(dt);
      }
    },
    makeSkinIno: function makeSkinIno(sf) {
      var texture = sf.getTexture();
      var rect = sf.getRect();
      var origSize = sf.getOriginalSize();
      var offset = sf.getOffset();
      var rotate = sf.isRotated(); // 匹配原生端字段名

      rect.w = rect.width;
      rect.h = rect.height;
      var info = {
        rect: rect,
        origSize: origSize,
        offset: cc.v2((origSize.width - rect.width) * 0.5 + offset.x, (origSize.height - rect.height) * 0.5 + offset.y),
        degrees: rotate ? 270 : 0,
        texture: texture
      };
      return info;
    },
    //局部换装
    changeSlotSkin: function changeSlotSkin(slotName, sf) {
      var skinInfo = this.makeSkinIno(sf);

      if (cc.sys.isNative) {
        var texture = skinInfo.texture;
        var spineSkeletonData = sp.SkeletonData.prototype;
        var textureIdx = spineSkeletonData.recordTexture(texture);
        var spTex = new middleware.Texture2D(); // spTex.setRealTexture(tex2d);

        spTex.setRealTextureIndex(textureIdx);
        spTex.setPixelsHigh(texture.height);
        spTex.setPixelsWide(texture.width);
        spTex.setNativeTexture(texture.getImpl());

        if (this._nativeSkeleton) {
          this._nativeSkeleton.updateRegion(slotName, spTex, skinInfo.rect, skinInfo.origSize, skinInfo.offset, skinInfo.degrees);
        }
      } else {
        var slot = this.findSlot(slotName);
        if (!slot) return;
        var attachment = slot.getAttachment();
        if (!attachment) return;
        var isMesh = attachment instanceof sp.spine.MeshAttachment;
        var isRegion = attachment instanceof sp.spine.RegionAttachment;
        if (!isMesh && !isRegion) return;
        attachment = slot.getAttachment().copy();
        attachment.name = slotName; // + '_copy';

        var _texture = skinInfo.texture;
        var rect = skinInfo.rect;
        var origSize = skinInfo.origSize;
        var offset = skinInfo.offset;
        var degrees = skinInfo.degrees;
        var tex2dW = rect.width;
        var tex2dH = rect.height;
        var skelTex = new sp.SkeletonTexture({
          width: tex2dW,
          height: tex2dH
        });
        skelTex.setRealTexture(_texture);
        var region = new sp.spine.TextureAtlasRegion();
        region.width = tex2dW;
        region.height = tex2dH;
        region.originalWidth = origSize.width;
        region.originalHeight = origSize.height;
        region.offsetX = offset.x;
        region.offsetY = offset.y;

        if (degrees != 0) {
          region.u = rect.x / _texture.width;
          region.v = rect.y / _texture.height;
          region.u2 = (rect.x + tex2dH) / _texture.width;
          region.v2 = (rect.y + tex2dW) / _texture.height;
        } else {
          region.u = rect.x / _texture.width;
          region.v = rect.y / _texture.height;
          region.u2 = (rect.x + tex2dW) / _texture.width;
          region.v2 = (rect.y + tex2dH) / _texture.height;
        }

        region.texture = skelTex;
        region.renderObject = region;
        region.page = attachment.region.page;
        attachment.region = region;
        attachment.width = tex2dW;
        attachment.height = tex2dH;

        if (isMesh) {
          attachment.updateUVs();
        } else if (isRegion) {
          attachment.setRegion(region);
          var uvs = attachment.uvs;

          if (degrees == 90) {
            uvs[2] = region.u;
            uvs[3] = region.v2;
            uvs[4] = region.u;
            uvs[5] = region.v;
            uvs[6] = region.u2;
            uvs[7] = region.v;
            uvs[0] = region.u2;
            uvs[1] = region.v2;
          } else if (degrees == 270) {
            uvs[6] = region.u;
            uvs[7] = region.v2;
            uvs[0] = region.u;
            uvs[1] = region.v;
            uvs[2] = region.u2;
            uvs[3] = region.v;
            uvs[4] = region.u2;
            uvs[5] = region.v2;
          } else {
            uvs[0] = region.u;
            uvs[1] = region.v2;
            uvs[2] = region.u;
            uvs[3] = region.v;
            uvs[4] = region.u2;
            uvs[5] = region.v;
            uvs[6] = region.u2;
            uvs[7] = region.v2;
          }

          attachment.updateOffset();
        }

        slot.setAttachment(attachment);
      }
    },
    // 隐藏某个slot
    setSlotVisible: function setSlotVisible(slotName, visible) {
      if (this._nativeSkeleton) {
        this._nativeSkeleton.setSlotVisible(slotName, visible);
      }
    },
    // 隐藏某个bone
    setBoneVisible: function setBoneVisible(name, visible) {
      if (this._nativeSkeleton) {
        this._nativeSkeleton.setBoneVisible(name, visible);
      }
    }
  });
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwbHVnaW5zXFxTa2VsZXRvbkV4dC5qcyJdLCJuYW1lcyI6WyJjYyIsImdhbWUiLCJvbmNlIiwiRVZFTlRfRU5HSU5FX0lOSVRFRCIsImpzIiwibWl4aW4iLCJzcCIsIlNrZWxldG9uIiwicHJvdG90eXBlIiwidXBkYXRlIiwiZHQiLCJDQ19FRElUT1IiLCJlbmdpbmUiLCJfYW5pbWF0aW5nSW5FZGl0TW9kZSIsImFuaW1hdGluZ0luRWRpdE1vZGUiLCJwYXVzZWQiLCJ0aW1lU2NhbGUiLCJpc0FuaW1hdGlvbkNhY2hlZCIsIl9pc0FuaUNvbXBsZXRlIiwiX2FuaW1hdGlvblF1ZXVlIiwibGVuZ3RoIiwiX2hlYWRBbmlJbmZvIiwiZnJhbWVDYWNoZSIsIl9mcmFtZUNhY2hlIiwiaXNJbnZhbGlkIiwidXBkYXRlVG9GcmFtZSIsImZyYW1lcyIsIl9jdXJGcmFtZSIsInNoaWZ0IiwiX2FjY1RpbWUiLCJkZWxheSIsImFuaUluZm8iLCJzZXRBbmltYXRpb24iLCJhbmltYXRpb25OYW1lIiwibG9vcCIsIl91cGRhdGVDYWNoZSIsIl91cGRhdGVSZWFsdGltZSIsIm1ha2VTa2luSW5vIiwic2YiLCJ0ZXh0dXJlIiwiZ2V0VGV4dHVyZSIsInJlY3QiLCJnZXRSZWN0Iiwib3JpZ1NpemUiLCJnZXRPcmlnaW5hbFNpemUiLCJvZmZzZXQiLCJnZXRPZmZzZXQiLCJyb3RhdGUiLCJpc1JvdGF0ZWQiLCJ3Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwiaW5mbyIsInYyIiwieCIsInkiLCJkZWdyZWVzIiwiY2hhbmdlU2xvdFNraW4iLCJzbG90TmFtZSIsInNraW5JbmZvIiwic3lzIiwiaXNOYXRpdmUiLCJzcGluZVNrZWxldG9uRGF0YSIsIlNrZWxldG9uRGF0YSIsInRleHR1cmVJZHgiLCJyZWNvcmRUZXh0dXJlIiwic3BUZXgiLCJtaWRkbGV3YXJlIiwiVGV4dHVyZTJEIiwic2V0UmVhbFRleHR1cmVJbmRleCIsInNldFBpeGVsc0hpZ2giLCJzZXRQaXhlbHNXaWRlIiwic2V0TmF0aXZlVGV4dHVyZSIsImdldEltcGwiLCJfbmF0aXZlU2tlbGV0b24iLCJ1cGRhdGVSZWdpb24iLCJzbG90IiwiZmluZFNsb3QiLCJhdHRhY2htZW50IiwiZ2V0QXR0YWNobWVudCIsImlzTWVzaCIsInNwaW5lIiwiTWVzaEF0dGFjaG1lbnQiLCJpc1JlZ2lvbiIsIlJlZ2lvbkF0dGFjaG1lbnQiLCJjb3B5IiwibmFtZSIsInRleDJkVyIsInRleDJkSCIsInNrZWxUZXgiLCJTa2VsZXRvblRleHR1cmUiLCJzZXRSZWFsVGV4dHVyZSIsInJlZ2lvbiIsIlRleHR1cmVBdGxhc1JlZ2lvbiIsIm9yaWdpbmFsV2lkdGgiLCJvcmlnaW5hbEhlaWdodCIsIm9mZnNldFgiLCJvZmZzZXRZIiwidSIsInYiLCJ1MiIsInJlbmRlck9iamVjdCIsInBhZ2UiLCJ1cGRhdGVVVnMiLCJzZXRSZWdpb24iLCJ1dnMiLCJ1cGRhdGVPZmZzZXQiLCJzZXRBdHRhY2htZW50Iiwic2V0U2xvdFZpc2libGUiLCJ2aXNpYmxlIiwic2V0Qm9uZVZpc2libGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRQyxJQUFSLENBQWFGLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRRSxtQkFBckIsRUFBMEMsWUFBWTtBQUVsREgsRUFBQUEsRUFBRSxDQUFDSSxFQUFILENBQU1DLEtBQU4sQ0FBWUMsRUFBRSxDQUFDQyxRQUFILENBQVlDLFNBQXhCLEVBQW1DO0FBQy9CQyxJQUFBQSxNQUQrQixrQkFDeEJDLEVBRHdCLEVBQ3BCO0FBQ1A7QUFFQSxVQUFJQyxTQUFKLEVBQWU7QUFDWFgsUUFBQUEsRUFBRSxDQUFDWSxNQUFILENBQVVDLG9CQUFWLEdBQWlDLENBQWpDO0FBQ0FiLFFBQUFBLEVBQUUsQ0FBQ1ksTUFBSCxDQUFVRSxtQkFBVixHQUFnQyxDQUFoQztBQUNIOztBQUVELFVBQUksS0FBS0MsTUFBVCxFQUFpQjtBQUVqQkwsTUFBQUEsRUFBRSxJQUFJ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VUFBVSxDQUFDNEIsWUFBWDtBQUNIOztBQUNEOUIsUUFBQUEsSUFBSSxDQUFDK0IsYUFBTCxDQUFtQjdCLFVBQW5CO0FBQ0g7QUFDSixLQXpLOEI7QUEwSy9CO0FBQ0E4QixJQUFBQSxjQTNLK0IsMEJBMktoQmxELFFBM0tnQixFQTJLTm1ELE9BM0tNLEVBMktHO0FBQzlCLFVBQUksS0FBS25DLGVBQVQsRUFBMEI7QUFDdEIsYUFBS0EsZUFBTCxDQUFxQmtDLGNBQXJCLENBQW9DbEQsUUFBcEMsRUFBOENtRCxPQUE5QztBQUNIO0FBQ0osS0EvSzhCO0FBZ0wvQjtBQUNBQyxJQUFBQSxjQWpMK0IsMEJBaUxoQnhCLElBakxnQixFQWlMVnVCLE9BakxVLEVBaUxEO0FBQzFCLFVBQUksS0FBS25DLGVBQVQsRUFBMEI7QUFDdEIsYUFBS0EsZUFBTCxDQUFxQm9DLGNBQXJCLENBQW9DeEIsSUFBcEMsRUFBMEN1QixPQUExQztBQUNIO0FBQ0o7QUFyTDhCLEdBQW5DO0FBdUxILENBekxEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNjLmdhbWUub25jZShjYy5nYW1lLkVWRU5UX0VOR0lORV9JTklURUQsIGZ1bmN0aW9uICgpIHtcblxuICAgIGNjLmpzLm1peGluKHNwLlNrZWxldG9uLnByb3RvdHlwZSwge1xuICAgICAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgICAgIC8vIGlmIChDQ19FRElUT1IpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKENDX0VESVRPUikge1xuICAgICAgICAgICAgICAgIGNjLmVuZ2luZS5fYW5pbWF0aW5nSW5FZGl0TW9kZSA9IDE7XG4gICAgICAgICAgICAgICAgY2MuZW5naW5lLmFuaW1hdGluZ0luRWRpdE1vZGUgPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHJldHVybjtcblxuICAgICAgICAgICAgZHQgKj0gdGhpcy50aW1lU2NhbGUgKiBzcC50aW1lU2NhbGU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzQW5pbWF0aW9uQ2FjaGVkKCkpIHtcblxuICAgICAgICAgICAgICAgIC8vIENhY2hlIG1vZGUgYW5kIGhhcyBhbmltYXRpb24gcXVldWUuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lzQW5pQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvblF1ZXVlLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5faGVhZEFuaUluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmcmFtZUNhY2hlID0gdGhpcy5fZnJhbWVDYWNoZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcmFtZUNhY2hlICYmIGZyYW1lQ2FjaGUuaXNJbnZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZUNhY2hlLnVwZGF0ZVRvRnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnJhbWVzID0gZnJhbWVDYWNoZS5mcmFtZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VyRnJhbWUgPSBmcmFtZXNbZnJhbWVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5faGVhZEFuaUluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hlYWRBbmlJbmZvID0gdGhpcy5fYW5pbWF0aW9uUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY2NUaW1lICs9IGR0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fYWNjVGltZSA+IHRoaXMuX2hlYWRBbmlJbmZvLmRlbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5pSW5mbyA9IHRoaXMuX2hlYWRBbmlJbmZvO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGVhZEFuaUluZm8gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltYXRpb24oMCwgYW5pSW5mby5hbmltYXRpb25OYW1lLCBhbmlJbmZvLmxvb3ApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDYWNoZShkdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJlYWx0aW1lKGR0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWFrZVNraW5Jbm8oc2YpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gc2YuZ2V0VGV4dHVyZSgpXG4gICAgICAgICAgICBsZXQgcmVjdCA9IHNmLmdldFJlY3QoKVxuICAgICAgICAgICAgbGV0IG9yaWdTaXplID0gc2YuZ2V0T3JpZ2luYWxTaXplKClcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBzZi5nZXRPZmZzZXQoKVxuICAgICAgICAgICAgbGV0IHJvdGF0ZSA9IHNmLmlzUm90YXRlZCgpXG5cbiAgICAgICAgICAgIC8vIOWMuemFjeWOn+eUn+err+Wtl+auteWQjVxuICAgICAgICAgICAgcmVjdC53ID0gcmVjdC53aWR0aFxuICAgICAgICAgICAgcmVjdC5oID0gcmVjdC5oZWlnaHRcblxuICAgICAgICAgICAgbGV0IGluZm8gPSB7XG4gICAgICAgICAgICAgICAgcmVjdDogcmVjdCxcbiAgICAgICAgICAgICAgICBvcmlnU2l6ZTogb3JpZ1NpemUsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBjYy52MihcbiAgICAgICAgICAgICAgICAgICAgKG9yaWdTaXplLndpZHRoIC0gcmVjdC53aWR0aCkgKiAwLjUgKyBvZmZzZXQueCxcbiAgICAgICAgICAgICAgICAgICAgKG9yaWdTaXplLmhlaWdodCAtIHJlY3QuaGVpZ2h0KSAqIDAuNSArIG9mZnNldC55XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBkZWdyZWVzOiByb3RhdGUgPyAyNzAgOiAwLFxuICAgICAgICAgICAgICAgIHRleHR1cmU6IHRleHR1cmUsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpbmZvXG4gICAgICAgIH0sXG4gICAgICAgIC8v5bGA6YOo5o2i6KOFXG4gICAgICAgIGNoYW5nZVNsb3RTa2luKHNsb3ROYW1lLCBzZikge1xuICAgICAgICAgICAgbGV0IHNraW5JbmZvID0gdGhpcy5tYWtlU2tpbklubyhzZik7XG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRleHR1cmUgPSBza2luSW5mby50ZXh0dXJlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwaW5lU2tlbGV0b25EYXRhID0gc3AuU2tlbGV0b25EYXRhLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlSWR4ID0gc3BpbmVTa2VsZXRvbkRhdGEucmVjb3JkVGV4dHVyZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcFRleCA9IG5ldyBtaWRkbGV3YXJlLlRleHR1cmUyRCgpO1xuICAgICAgICAgICAgICAgIC8vIHNwVGV4LnNldFJlYWxUZXh0dXJlKHRleDJkKTtcbiAgICAgICAgICAgICAgICBzcFRleC5zZXRSZWFsVGV4dHVyZUluZGV4KHRleHR1cmVJZHgpO1xuICAgICAgICAgICAgICAgIHNwVGV4LnNldFBpeGVsc0hpZ2godGV4dHVyZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIHNwVGV4LnNldFBpeGVsc1dpZGUodGV4dHVyZS53aWR0aCk7XG4gICAgICAgICAgICAgICAgc3BUZXguc2V0TmF0aXZlVGV4dHVyZSh0ZXh0dXJlLmdldEltcGwoKSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX25hdGl2ZVNrZWxldG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25hdGl2ZVNrZWxldG9uLnVwZGF0ZVJlZ2lvbihzbG90TmFtZSwgc3BUZXgsIHNraW5JbmZvLnJlY3QsIHNraW5JbmZvLm9yaWdTaXplLCBza2luSW5mby5vZmZzZXQsIHNraW5JbmZvLmRlZ3JlZXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90ID0gdGhpcy5maW5kU2xvdChzbG90TmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFzbG90KSByZXR1cm47XG4gICAgICAgICAgICAgICAgbGV0IGF0dGFjaG1lbnQgPSBzbG90LmdldEF0dGFjaG1lbnQoKTtcblxuICAgICAgICAgICAgICAgIGlmICghYXR0YWNobWVudCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzTWVzaCA9IGF0dGFjaG1lbnQgaW5zdGFuY2VvZiBzcC5zcGluZS5NZXNoQXR0YWNobWVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1JlZ2lvbiA9IGF0dGFjaG1lbnQgaW5zdGFuY2VvZiBzcC5zcGluZS5SZWdpb25BdHRhY2htZW50O1xuICAgICAgICAgICAgICAgIGlmICghaXNNZXNoICYmICFpc1JlZ2lvbikgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGF0dGFjaG1lbnQgPSBzbG90LmdldEF0dGFjaG1lbnQoKS5jb3B5KCk7XG4gICAgICAgICAgICAgICAgYXR0YWNobWVudC5uYW1lID0gc2xvdE5hbWU7IC8vICsgJ19jb3B5JztcblxuICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gc2tpbkluZm8udGV4dHVyZTtcbiAgICAgICAgICAgICAgICBsZXQgcmVjdCA9IHNraW5JbmZvLnJlY3RcbiAgICAgICAgICAgICAgICBsZXQgb3JpZ1NpemUgPSBza2luSW5mby5vcmlnU2l6ZVxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBza2luSW5mby5vZmZzZXRcbiAgICAgICAgICAgICAgICBsZXQgZGVncmVlcyA9IHNraW5JbmZvLmRlZ3JlZXNcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRleDJkVyA9IHJlY3Qud2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4MmRIID0gcmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2tlbFRleCA9IG5ldyBzcC5Ta2VsZXRvblRleHR1cmUoeyB3aWR0aDogdGV4MmRXLCBoZWlnaHQ6IHRleDJkSCB9KTtcbiAgICAgICAgICAgICAgICBza2VsVGV4LnNldFJlYWxUZXh0dXJlKHRleHR1cmUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVnaW9uID0gbmV3IHNwLnNwaW5lLlRleHR1cmVBdGxhc1JlZ2lvbigpO1xuICAgICAgICAgICAgICAgIHJlZ2lvbi53aWR0aCA9IHRleDJkV1xuICAgICAgICAgICAgICAgIHJlZ2lvbi5oZWlnaHQgPSB0ZXgyZEhcbiAgICAgICAgICAgICAgICByZWdpb24ub3JpZ2luYWxXaWR0aCA9IG9yaWdTaXplLndpZHRoXG4gICAgICAgICAgICAgICAgcmVnaW9uLm9yaWdpbmFsSGVpZ2h0ID0gb3JpZ1NpemUuaGVpZ2h0XG4gICAgICAgICAgICAgICAgcmVnaW9uLm9mZnNldFggPSBvZmZzZXQueFxuICAgICAgICAgICAgICAgIHJlZ2lvbi5vZmZzZXRZID0gb2Zmc2V0LnlcblxuICAgICAgICAgICAgICAgIGlmIChkZWdyZWVzICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uLnUgPSByZWN0LnggLyB0ZXh0dXJlLndpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbi52ID0gcmVjdC55IC8gdGV4dHVyZS5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uLnUyID0gKHJlY3QueCArIHRleDJkSCkgLyB0ZXh0dXJlLndpZHRoXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbi52MiA9IChyZWN0LnkgKyB0ZXgyZFcpIC8gdGV4dHVyZS5oZWlnaHRcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWdpb24udSA9IHJlY3QueCAvIHRleHR1cmUud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uLnYgPSByZWN0LnkgLyB0ZXh0dXJlLmhlaWdodFxuICAgICAgICAgICAgICAgICAgICByZWdpb24udTIgPSAocmVjdC54ICsgdGV4MmRXKSAvIHRleHR1cmUud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uLnYyID0gKHJlY3QueSArIHRleDJkSCkgLyB0ZXh0dXJlLmhlaWdodFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWdpb24udGV4dHVyZSA9IHNrZWxUZXg7XG4gICAgICAgICAgICAgICAgcmVnaW9uLnJlbmRlck9iamVjdCA9IHJlZ2lvbjtcbiAgICAgICAgICAgICAgICByZWdpb24ucGFnZSA9IGF0dGFjaG1lbnQucmVnaW9uLnBhZ2U7XG5cbiAgICAgICAgICAgICAgICBhdHRhY2htZW50LnJlZ2lvbiA9IHJlZ2lvbjtcbiAgICAgICAgICAgICAgICBhdHRhY2htZW50LndpZHRoID0gdGV4MmRXO1xuICAgICAgICAgICAgICAgIGF0dGFjaG1lbnQuaGVpZ2h0ID0gdGV4MmRIO1xuICAgICAgICAgICAgICAgIGlmIChpc01lc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudC51cGRhdGVVVnMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzUmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFjaG1lbnQuc2V0UmVnaW9uKHJlZ2lvbik7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1dnMgPSBhdHRhY2htZW50LnV2cztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZ3JlZXMgPT0gOTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHV2c1syXSA9IHJlZ2lvbi51O1xuICAgICAgICAgICAgICAgICAgICAgICAgdXZzWzNdID0gcmVnaW9uLnYyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXZzWzRdID0gcmVnaW9uLnU7XG4gICAgICAgICAgICAgICAgICAgICAgICB1dnNbNV0gPSByZWdpb24udjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHV2c1s2XSA9IHJlZ2lvbi51MjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHV2c1s3XSA9IHJlZ2lvbi52O1xuICAgICAgICAgICAgICAgICAgICAgICAgdXZzWzBdID0gcmVnaW9uLnUyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXZzWzFdID0gcmVnaW9uLnYyO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRlZ3JlZXMgPT0gMjcwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1dnNbNl0gPSByZWdpb24udTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHV2c1s3XSA9IHJlZ2lvbi52MjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHV2c1swXSA9IHJlZ2lvbi51O1xuICAgICAgICAgICAgICAgICAgICAgICAgdXZzWzFdID0gcmVnaW9uLnY7XG4gICAgICAgICAgICAgICAgICAgICAgICB1dnNbMl0gPSByZWdpb24udTI7XG4gICAgICAgICAgICAgICAgICAgICAgICB1dnNbM10gPSByZWdpb24udjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHV2c1s0XSA9IHJlZ2lvbi51MjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHV2c1s1XSA9IHJlZ2lvbi52MjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHV2c1swXSA9IHJlZ2lvbi51O1xuICAgICAgICAgICAgICAgICAgICAgICAgdXZzWzFdID0gcmVnaW9uLnYyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXZzWzJdID0gcmVnaW9uLnU7XG4gICAgICAgICAgICAgICAgICAgICAgICB1dnNbM10gPSByZWdpb24udjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHV2c1s0XSA9IHJlZ2lvbi51MjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHV2c1s1XSA9IHJlZ2lvbi52O1xuICAgICAgICAgICAgICAgICAgICAgICAgdXZzWzZdID0gcmVnaW9uLnUyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXZzWzddID0gcmVnaW9uLnYyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGF0dGFjaG1lbnQudXBkYXRlT2Zmc2V0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2xvdC5zZXRBdHRhY2htZW50KGF0dGFjaG1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyDpmpDol4/mn5DkuKpzbG90XG4gICAgICAgIHNldFNsb3RWaXNpYmxlKHNsb3ROYW1lLCB2aXNpYmxlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbmF0aXZlU2tlbGV0b24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9uYXRpdmVTa2VsZXRvbi5zZXRTbG90VmlzaWJsZShzbG90TmFtZSwgdmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOmakOiXj+afkOS4qmJvbmVcbiAgICAgICAgc2V0Qm9uZVZpc2libGUobmFtZSwgdmlzaWJsZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX25hdGl2ZVNrZWxldG9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbmF0aXZlU2tlbGV0b24uc2V0Qm9uZVZpc2libGUobmFtZSwgdmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufSlcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/CustomListItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9653BgQAVG665zoE49f92V', 'CustomListItem');
// Script/Common/CustomListItem.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomListItem = /** @class */ (function (_super) {
    __extends(CustomListItem, _super);
    function CustomListItem() {
        // @property(cc.Node)
        // itemNode: cc.Node = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this._index = -1;
        _this._itemData = null;
        _this._callBack = null;
        _this._totalCountCallBack = null;
        _this._selectItemCallBack = null;
        _this._getSelectItemCallBack = null;
        return _this;
    }
    CustomListItem.prototype.onLoad = function () {
    };
    CustomListItem.prototype.start = function () {
    };
    /**
     * 默认节点高度，如果有需求，子类可重写
     */
    CustomListItem.prototype.getItemHeight = function () {
        return this.node.height;
    };
    /**
     * 默认节点宽度，如果有需求，子类可重写
     */
    CustomListItem.prototype.getItemWidth = function () {
        return this.node.width;
    };
    //这个接口只有 customListView 里调用，其他地方不要调用
    CustomListItem.prototype.initItem = function (index, data, selectData, canTouch, isChecked) {
        if (canTouch === void 0) { canTouch = true; }
        if (isChecked === void 0) { isChecked = false; }
        if (canTouch) {
            var toggle = this.getComponent(cc.Toggle);
            if (!toggle) {
                toggle = this.addComponent(cc.Toggle);
                this.node.on('toggle', this.onTouchCustomListItem, this);
            }
            toggle.isChecked = isChecked;
            // cc.log(toggle.isChecked,'customListView,initItem index ',index," isCheck ",isChecked);
        }
        this.updateItem(index, data, selectData);
    };
    /**
     * 更新item， 子类实现
     * @param index
     * @param data
     */
    CustomListItem.prototype.updateItem = function (index, data, selectData) {
        //子类实现
        this._index = index;
        this._itemData = data;
    };
    CustomListItem.prototype.setIsCheckedItem = function (isChecked) {
        if (isChecked === void 0) { isChecked = true; }
        var toggle = this.getComponent(cc.Toggle);
        if (toggle) {
            toggle.isChecked = isChecked;
            if (isChecked) {
                this.node.parent.emit('customListSelect', this._index);
            }
            // cc.log(toggle.isChecked,'customListView,setIsCheckedItem index ',this._index," isCheck ",isChecked);
        }
    };
    CustomListItem.prototype.getIsCheckedItem = function () {
        var toggle = this.getComponent(cc.Toggle);
        if (toggle) {
            return toggle.isChecked;
        }
        return false;
    };
    /**数据索引 */
    CustomListItem.prototype.getItemIndex = function () {
        return this._index;
    };
    /**刷新点 数据 */
    CustomListItem.prototype.getItemData = function () {
        return this._itemData;
    };
    /**
     * onTouchCustomListItem 子类实现
     * 回调的参数是 toggle 组件
     */
    CustomListItem.prototype.onTouchCustomListItem = function () {
        // cc.log('onTouchCustomListItem ',this._index);
    };
    // update (dt) {}
    CustomListItem.prototype.onDestroy = function () {
    };
    CustomListItem = __decorate([
        ccclass
    ], CustomListItem);
    return CustomListItem;
}(cc.Component));
exports.default = CustomListItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXEN1c3RvbUxpc3RJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBRUkscUJBQXFCO1FBQ3JCLDRCQUE0QjtRQUhoQyxxRUEwR0M7UUFyR0csd0JBQXdCO1FBRWQsWUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1osZUFBUyxHQUFPLElBQUksQ0FBQztRQUNyQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLHlCQUFtQixHQUFZLElBQUksQ0FBQztRQUNwQyx5QkFBbUIsR0FBWSxJQUFJLENBQUM7UUFDcEMsNEJBQXNCLEdBQVksSUFBSSxDQUFDOztJQThGckQsQ0FBQztJQTVGRywrQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDhCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxzQ0FBYSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxxQ0FBWSxHQUFaO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsb0NBQW9DO0lBQ3BDLGlDQUFRLEdBQVIsVUFBUyxLQUFZLEVBQUUsSUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFxQixFQUFFLFNBQXVCO1FBQTlDLHlCQUFBLEVBQUEsZUFBcUI7UUFBRSwwQkFBQSxFQUFBLGlCQUF1QjtRQUN2RixJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1QsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzVEO1lBQ0QsTUFBTSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDN0IseUZBQXlGO1NBRTVGO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUNBQVUsR0FBVixVQUFXLEtBQVksRUFBRSxJQUFRLEVBQUUsVUFBYztRQUM3QyxNQUFNO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELHlDQUFnQixHQUFoQixVQUFpQixTQUFzQjtRQUF0QiwwQkFBQSxFQUFBLGdCQUFzQjtRQUNuQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLE1BQU0sRUFBRTtZQUNSLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBRTdCLElBQUksU0FBUyxFQUFFO2dCQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDMUQ7WUFDRCx1R0FBdUc7U0FDMUc7SUFDTCxDQUFDO0lBRUQseUNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxNQUFNLEVBQUU7WUFDUixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUM7U0FDM0I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsVUFBVTtJQUNWLHFDQUFZLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNELFlBQVk7SUFDWixvQ0FBVyxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSCw4Q0FBcUIsR0FBckI7UUFDSSxnREFBZ0Q7SUFDcEQsQ0FBQztJQUdELGlCQUFpQjtJQUVqQixrQ0FBUyxHQUFUO0lBRUEsQ0FBQztJQXpHZ0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTBHbEM7SUFBRCxxQkFBQztDQTFHRCxBQTBHQyxDQTFHMkMsRUFBRSxDQUFDLFNBQVMsR0EwR3ZEO2tCQTFHb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tTGlzdEl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gaXRlbU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBwcm90ZWN0ZWQgX2luZGV4ID0gLTE7XG4gICAgcHJvdGVjdGVkIF9pdGVtRGF0YTphbnkgPSBudWxsO1xuICAgIHByb3RlY3RlZCBfY2FsbEJhY2s6RnVuY3Rpb24gPSBudWxsO1xuICAgIHByb3RlY3RlZCBfdG90YWxDb3VudENhbGxCYWNrOkZ1bmN0aW9uID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgX3NlbGVjdEl0ZW1DYWxsQmFjazpGdW5jdGlvbiA9IG51bGw7XG4gICAgcHJvdGVjdGVkIF9nZXRTZWxlY3RJdGVtQ2FsbEJhY2s6RnVuY3Rpb24gPSBudWxsO1xuXG4gICAgb25Mb2FkICgpIHtcblxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6buY6K6k6IqC54K56auY5bqm77yM5aaC5p6c5pyJ6ZyA5rGC77yM5a2Q57G75Y+v6YeN5YaZXG4gICAgICovXG4gICAgZ2V0SXRlbUhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6buY6K6k6IqC54K55a695bqm77yM5aaC5p6c5pyJ6ZyA5rGC77yM5a2Q57G75Y+v6YeN5YaZXG4gICAgICovXG4gICAgZ2V0SXRlbVdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLndpZHRoO1xuICAgIH1cblxuICAgIC8v6L+Z5Liq5o6l5Y+j5Y+q5pyJIGN1c3RvbUxpc3RWaWV3IOmHjOiwg+eUqO+8jOWFtuS7luWcsOaWueS4jeimgeiwg+eUqFxuICAgIGluaXRJdGVtKGluZGV4Om51bWJlciwgZGF0YTphbnksIHNlbGVjdERhdGEsIGNhblRvdWNoOmJvb2xlYW49dHJ1ZSwgaXNDaGVja2VkOmJvb2xlYW49ZmFsc2UpIHtcbiAgICAgICAgaWYgKGNhblRvdWNoKSB7XG4gICAgICAgICAgICBsZXQgdG9nZ2xlID0gdGhpcy5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKTtcbiAgICAgICAgICAgIGlmICghdG9nZ2xlKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlID0gdGhpcy5hZGRDb21wb25lbnQoY2MuVG9nZ2xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUub24oJ3RvZ2dsZScsIHRoaXMub25Ub3VjaEN1c3RvbUxpc3RJdGVtLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvZ2dsZS5pc0NoZWNrZWQgPSBpc0NoZWNrZWQ7XG4gICAgICAgICAgICAvLyBjYy5sb2codG9nZ2xlLmlzQ2hlY2tlZCwnY3VzdG9tTGlzdFZpZXcsaW5pdEl0ZW0gaW5kZXggJyxpbmRleCxcIiBpc0NoZWNrIFwiLGlzQ2hlY2tlZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbShpbmRleCwgZGF0YSwgc2VsZWN0RGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pu05pawaXRlbe+8jCDlrZDnsbvlrp7njrBcbiAgICAgKiBAcGFyYW0gaW5kZXggXG4gICAgICogQHBhcmFtIGRhdGEgXG4gICAgICovXG4gICAgdXBkYXRlSXRlbShpbmRleDpudW1iZXIsIGRhdGE6YW55LCBzZWxlY3REYXRhOmFueSkge1xuICAgICAgICAvL+WtkOexu+WunueOsFxuICAgICAgICB0aGlzLl9pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLl9pdGVtRGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgc2V0SXNDaGVja2VkSXRlbShpc0NoZWNrZWQ6Ym9vbGVhbj10cnVlKSB7XG4gICAgICAgIGxldCB0b2dnbGUgPSB0aGlzLmdldENvbXBvbmVudChjYy5Ub2dnbGUpO1xuICAgICAgICBpZiAodG9nZ2xlKSB7XG4gICAgICAgICAgICB0b2dnbGUuaXNDaGVja2VkID0gaXNDaGVja2VkO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5lbWl0KCdjdXN0b21MaXN0U2VsZWN0JywgdGhpcy5faW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2MubG9nKHRvZ2dsZS5pc0NoZWNrZWQsJ2N1c3RvbUxpc3RWaWV3LHNldElzQ2hlY2tlZEl0ZW0gaW5kZXggJyx0aGlzLl9pbmRleCxcIiBpc0NoZWNrIFwiLGlzQ2hlY2tlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJc0NoZWNrZWRJdGVtKCkge1xuICAgICAgICBsZXQgdG9nZ2xlID0gdGhpcy5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKTtcbiAgICAgICAgaWYgKHRvZ2dsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRvZ2dsZS5pc0NoZWNrZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKuaVsOaNrue0ouW8lSAqL1xuICAgIGdldEl0ZW1JbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICAgIH1cbiAgICAvKirliLfmlrDngrkg5pWw5o2uICovXG4gICAgZ2V0SXRlbURhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBvblRvdWNoQ3VzdG9tTGlzdEl0ZW0g5a2Q57G75a6e546wXG4gICAgICog5Zue6LCD55qE5Y+C5pWw5pivIHRvZ2dsZSDnu4Tku7ZcbiAgICAgKi9cbiAgICBvblRvdWNoQ3VzdG9tTGlzdEl0ZW0oKSB7XG4gICAgICAgIC8vIGNjLmxvZygnb25Ub3VjaEN1c3RvbUxpc3RJdGVtICcsdGhpcy5faW5kZXgpO1xuICAgIH1cbiAgICBcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIFxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIManager/HomeMain/HomeMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b75a7ldICNG7KwpG6uUJqA8', 'HomeMain');
// Script/UIManager/HomeMain/HomeMain.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIParent_1 = require("../../Base/UIParent");
var UIManager_1 = require("../../Manager/UIManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HomeMain = /** @class */ (function (_super) {
    __extends(HomeMain, _super);
    function HomeMain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spine = null;
        return _this;
    }
    // private _nowIndex: number = 0
    HomeMain.prototype.InitUI = function (uiMain) {
        _super.prototype.InitUI.call(this, uiMain);
    };
    HomeMain.prototype.ShowUI = function () {
        _super.prototype.ShowUI.call(this);
    };
    HomeMain.prototype.HideUI = function (fun) {
        _super.prototype.HideUI.call(this, fun);
    };
    HomeMain.prototype.onClickStartGame = function () {
    };
    HomeMain.prototype.onClickShowSettingMain = function () {
        this.uiManager.ShowUIName(UIManager_1.WinID.GameSetting, 0);
    };
    HomeMain.prototype.onClickShowOtherGame = function () {
        this.uiManager.ShowUIName(UIManager_1.WinID.OtherGameMain);
    };
    HomeMain.prototype.onDispathcGameEvent = function (eventId, eventData) {
        switch (eventId) {
            // case GameEvent.UpdataVit:
            //     {
            //         this._upDateVit()
            //     }
            //     break
            default:
                _super.prototype.onDispathcGameEvent.call(this, eventId, eventData);
                break;
        }
    };
    __decorate([
        property(sp.Skeleton)
    ], HomeMain.prototype, "spine", void 0);
    HomeMain = __decorate([
        ccclass
    ], HomeMain);
    return HomeMain;
}(UIParent_1.default));
exports.default = HomeMain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVSU1hbmFnZXJcXEhvbWVNYWluXFxIb21lTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFHM0MscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFRO0lBQTlDO1FBQUEscUVBNENDO1FBMUNHLFdBQUssR0FBZ0IsSUFBSSxDQUFDOztJQTBDOUIsQ0FBQztJQXZDRyxnQ0FBZ0M7SUFFaEMseUJBQU0sR0FBTixVQUFPLE1BQU07UUFDVCxpQkFBTSxNQUFNLFlBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEdBQWdCO1FBQ25CLGlCQUFNLE1BQU0sWUFBQyxHQUFHLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBRUQsbUNBQWdCLEdBQWhCO0lBRUEsQ0FBQztJQUVELHlDQUFzQixHQUF0QjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGlCQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFFRCx1Q0FBb0IsR0FBcEI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxpQkFBSyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFFRCxzQ0FBbUIsR0FBbkIsVUFBb0IsT0FBa0IsRUFBRSxTQUFjO1FBQ2xELFFBQVEsT0FBTyxFQUFFO1lBQ2IsNEJBQTRCO1lBQzVCLFFBQVE7WUFDUiw0QkFBNEI7WUFDNUIsUUFBUTtZQUNSLFlBQVk7WUFDWjtnQkFDSSxpQkFBTSxtQkFBbUIsWUFBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQzlDLE1BQU07U0FDYjtJQUVMLENBQUM7SUF6Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzsyQ0FDSTtJQUZULFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0QzVCO0lBQUQsZUFBQztDQTVDRCxBQTRDQyxDQTVDcUMsa0JBQVEsR0E0QzdDO2tCQTVDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVBhcmVudCBmcm9tIFwiLi4vLi4vQmFzZS9VSVBhcmVudFwiO1xuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4uLy4uL0NvbmZpZy9HYW1lRXZlbnRDb25maWdcIjtcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSBcIi4uLy4uL0dhbWVVdGlscy9HYW1lVXRpbHNcIjtcbmltcG9ydCB7IFdpbklEIH0gZnJvbSBcIi4uLy4uL01hbmFnZXIvVUlNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lTWFpbiBleHRlbmRzIFVJUGFyZW50IHtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgc3BpbmU6IHNwLlNrZWxldG9uID0gbnVsbDtcblxuXG4gICAgLy8gcHJpdmF0ZSBfbm93SW5kZXg6IG51bWJlciA9IDBcblxuICAgIEluaXRVSSh1aU1haW4pIHtcbiAgICAgICAgc3VwZXIuSW5pdFVJKHVpTWFpbik7XG4gICAgfVxuXG4gICAgU2hvd1VJKCkge1xuICAgICAgICBzdXBlci5TaG93VUkoKTtcbiAgICB9XG5cbiAgICBIaWRlVUkoZnVuPzogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICBzdXBlci5IaWRlVUkoZnVuKVxuICAgIH1cblxuICAgIG9uQ2xpY2tTdGFydEdhbWUoKSB7XG5cbiAgICB9XG5cbiAgICBvbkNsaWNrU2hvd1NldHRpbmdNYWluKCkge1xuICAgICAgICB0aGlzLnVpTWFuYWdlci5TaG93VUlOYW1lKFdpbklELkdhbWVTZXR0aW5nLCAwKVxuICAgIH1cblxuICAgIG9uQ2xpY2tTaG93T3RoZXJHYW1lKCkge1xuICAgICAgICB0aGlzLnVpTWFuYWdlci5TaG93VUlOYW1lKFdpbklELk90aGVyR2FtZU1haW4pXG4gICAgfVxuXG4gICAgb25EaXNwYXRoY0dhbWVFdmVudChldmVudElkOiBHYW1lRXZlbnQsIGV2ZW50RGF0YTogYW55KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnRJZCkge1xuICAgICAgICAgICAgLy8gY2FzZSBHYW1lRXZlbnQuVXBkYXRhVml0OlxuICAgICAgICAgICAgLy8gICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5fdXBEYXRlVml0KClcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3VwZXIub25EaXNwYXRoY0dhbWVFdmVudChldmVudElkLCBldmVudERhdGEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIManager/TipMain/TipMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54a61mtIb1CGZcbjHf0iQPA', 'TipMain');
// Script/UIManager/TipMain/TipMain.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIParent_1 = require("../../Base/UIParent");
var GameUtils_1 = require("../../GameUtils/GameUtils");
var TipText_1 = require("./TipText");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TipMain = /** @class */ (function (_super) {
    __extends(TipMain, _super);
    function TipMain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipViewItem = null;
        _this.tipItemParent = null;
        // LIFE-CYCLE CALLBACKS:
        _this._tip = [];
        _this._moveSpeed = 120;
        _this._staticTime = 0.35; //tip滞留时间
        _this._endY = 150; //tip结束位置Y
        _this._count = 4; //tip最多持有数量
        _this._positionY = [];
        _this._isInitData = false;
        return _this;
    }
    TipMain.prototype.ShowUI = function (data, fun) {
        if (!this._isInitData) {
            this._isInitData = true;
            // this._endY = (this._count - 1) * this.tipViewItem.height
            for (var i = 0; i < this._count; i++) {
                // let drc = ConfigManager.getInstance().getDesignResoulutionInfo();
                // table.insert(positionY, display.center.y + (i-1)*tipNode:getContentSize().height * CC_DESIGN_RESOLUTION.scale)
                this._positionY[i] = i * this.tipViewItem.getContentSize().height; //* drc.uiScale
            }
        }
        // this.setBlockInputEventEnable(false);
        // this.showBackMask(false);
        GameUtils_1.default.getInstance().setVisible(this.tipViewItem, false);
        GameUtils_1.default.getInstance().setVisible(this.node, true);
        this.createTipView(data);
    };
    TipMain.prototype._unrealOnDisable = function () {
        this.tipItemParent.removeAllChildren();
        this._tip = [];
    };
    TipMain.prototype.createTipView = function (tipContent) {
        var _this = this;
        var itemNode = this.tipViewItem;
        var item = cc.instantiate(itemNode);
        this.tipItemParent.addChild(item);
        GameUtils_1.default.getInstance().setVisible(item, true);
        var sItem = item.getComponent(TipText_1.default);
        sItem.Init(tipContent);
        // if (this._tip.length > 4) {
        //     this._tip[0].tipItem.hideItem();
        //     this._tip.shift();
        //     this.checkCloseWindow();
        // }
        this._tip.push({
            time: 0,
            tipItem: sItem,
            fadeout: false
        });
        // this._tip[this._tip.length] = {
        //     time: 0,
        //     tipItem: sItem,
        //     fadeout: false
        // }
        sItem.scheduleOnce(function () {
            _this._tip.shift();
            sItem.hideItem();
            _this.checkCloseWindow();
        }, 2);
        //this.updateItemPos();
    };
    TipMain.prototype.update = function (dt) {
        if (this._tip.length <= 0) {
            return;
        }
        var numY = 0;
        // let drc = ConfigManager.getInstance().getDesignResoulutionInfo();
        var numYIndex = 0;
        for (var i = this._tip.length - 1; i >= 0; i--) {
            if (numYIndex < this._count) {
                numY += (numYIndex == 0) ? 0 : (this._tip[i].tipItem.node.height / 2 + this._tip[i + 1].tipItem.node.height / 2); //* drc.uiScale
                this._positionY[numYIndex] = numY;
                numYIndex++;
            }
        }
        for (var index = 0; index < this._count; index++) {
            if (!this._tip[index]) {
                numY += this.tipViewItem.getContentSize().height; //* drc.uiScale
                this._positionY[index] = numY;
            }
        }
        this._endY = this._positionY[this._positionY.length - 1];
        for (var index = 0; index < this._tip.length; index++) {
            var index_2 = this._tip.length - index - 1;
            if (index_2 >= this._count - 1) {
                index_2 = this._count - 1;
            }
            var tipData = this._tip[index];
            tipData.time = tipData.time + dt;
            if (index_2 != -1) {
                if (index_2 < this._count && tipData.tipItem.node.y <= this._positionY[index_2]) {
                    tipData.tipItem.node.y = this._positionY[index_2];
                }
            }
            if (tipData.time >= this._staticTime) {
                //this._tip[i].tipItem.node.y += this._moveSpeed * dt;
                var y = tipData.tipItem.node.y;
                var v = Math.abs((this._positionY[2] - y) / (1 - tipData.time));
                tipData.tipItem.node.y += v * dt;
                if (tipData.tipItem.node.y > this._endY) {
                    tipData.tipItem.node.y = this._endY;
                }
                if (!tipData.fadeout) {
                    tipData.fadeout = true;
                    var time = 0.7 - ((index_2 + 1) * 0.1);
                    cc.Tween.stopAllByTarget(tipData.tipItem.node);
                    cc.tween(tipData.tipItem.node).to(time, { opacity: 0 }).start();
                }
            }
            // if (tipData.time>=2) {
            //     tipData.tipItem.hideItem();
            //     this._tip.shift();
            //     this.checkCloseWindow();
            // }
        }
    };
    TipMain.prototype.updateItemPos = function () {
        for (var i = this._tip.length - 1; i > 0; i--) {
            var nextItem = this._tip[i - 1].tipItem.node;
            var thisItem = this._tip[i].tipItem.node;
            if (nextItem.y - thisItem.y < thisItem.height) {
                nextItem.y = thisItem.y + thisItem.height;
                if (nextItem.y > this._endY) {
                    nextItem.y = this._endY;
                }
            }
        }
    };
    // closeWinodw(isNow: boolean = false) {
    //     // GameUtils.getInstance().setVisible(this.node, false);
    //     if (isNow) {
    //         this.node.destroy();
    //     } else {
    //         this.unrealCloseWindow();
    //     }
    // }
    TipMain.prototype.checkCloseWindow = function () {
        if (this._tip.length == 0) {
            // this.closeWinodw();
            // this.unrealCloseWindow();
            this.HideUI();
        }
    };
    __decorate([
        property(cc.Node)
    ], TipMain.prototype, "tipViewItem", void 0);
    __decorate([
        property(cc.Node)
    ], TipMain.prototype, "tipItemParent", void 0);
    TipMain = __decorate([
        ccclass
    ], TipMain);
    return TipMain;
}(UIParent_1.default));
exports.default = TipMain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVSU1hbmFnZXJcXFRpcE1haW5cXFRpcE1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsZ0RBQTJDO0FBQzNDLHVEQUFrRDtBQUNsRCxxQ0FBZ0M7QUFHMUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVE7SUFBN0M7UUFBQSxxRUFpS0M7UUEvSkcsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsd0JBQXdCO1FBQ2hCLFVBQUksR0FBVSxFQUFFLENBQUM7UUFFakIsZ0JBQVUsR0FBVyxHQUFHLENBQUM7UUFDekIsaUJBQVcsR0FBVyxJQUFJLENBQUMsQ0FBQSxTQUFTO1FBQ3BDLFdBQUssR0FBVyxHQUFHLENBQUMsQ0FBQSxVQUFVO1FBQzlCLFlBQU0sR0FBVyxDQUFDLENBQUMsQ0FBQSxXQUFXO1FBQzlCLGdCQUFVLEdBQWEsRUFBRSxDQUFDO1FBQzFCLGlCQUFXLEdBQVksS0FBSyxDQUFBOztJQWtKeEMsQ0FBQztJQS9JRyx3QkFBTSxHQUFOLFVBQU8sSUFBVSxFQUFFLEdBQWdCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO1lBQ3ZCLDJEQUEyRDtZQUMzRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbEMsb0VBQW9FO2dCQUNwRSxpSEFBaUg7Z0JBQ2pILElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFB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QUFDO2dEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1k7SUFMYixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBaUszQjtJQUFELGNBQUM7Q0FqS0QsQUFpS0MsQ0FqS29DLGtCQUFRLEdBaUs1QztrQkFqS29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IFVJUGFyZW50IGZyb20gXCIuLi8uLi9CYXNlL1VJUGFyZW50XCI7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gXCIuLi8uLi9HYW1lVXRpbHMvR2FtZVV0aWxzXCI7XG5pbXBvcnQgVGlwVGV4dCBmcm9tIFwiLi9UaXBUZXh0XCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpcE1haW4gZXh0ZW5kcyBVSVBhcmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGlwVmlld0l0ZW06IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGlwSXRlbVBhcmVudDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBwcml2YXRlIF90aXA6IGFueVtdID0gW107XG5cbiAgICBwcml2YXRlIF9tb3ZlU3BlZWQ6IG51bWJlciA9IDEyMDtcbiAgICBwcml2YXRlIF9zdGF0aWNUaW1lOiBudW1iZXIgPSAwLjM1Oy8vdGlw5rue55WZ5pe26Ze0XG4gICAgcHJpdmF0ZSBfZW5kWTogbnVtYmVyID0gMTUwOy8vdGlw57uT5p2f5L2N572uWVxuICAgIHByaXZhdGUgX2NvdW50OiBudW1iZXIgPSA0Oy8vdGlw5pyA5aSa5oyB5pyJ5pWw6YePXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25ZOiBudW1iZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgX2lzSW5pdERhdGE6IGJvb2xlYW4gPSBmYWxzZVxuXG5cbiAgICBTaG93VUkoZGF0YT86IGFueSwgZnVuPzogKCkgPT4gdm9pZCkge1xuICAgICAgICBpZiAoIXRoaXMuX2lzSW5pdERhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzSW5pdERhdGEgPSB0cnVlXG4gICAgICAgICAgICAvLyB0aGlzLl9lbmRZID0gKHRoaXMuX2NvdW50IC0gMSkgKiB0aGlzLnRpcFZpZXdJdGVtLmhlaWdodFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IGRyYyA9IENvbmZpZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREZXNpZ25SZXNvdWx1dGlvbkluZm8oKTtcbiAgICAgICAgICAgICAgICAvLyB0YWJsZS5pbnNlcnQocG9zaXRpb25ZLCBkaXNwbGF5LmNlbnRlci55ICsgKGktMSkqdGlwTm9kZTpnZXRDb250ZW50U2l6ZSgpLmhlaWdodCAqIENDX0RFU0lHTl9SRVNPTFVUSU9OLnNjYWxlKVxuICAgICAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9uWVtpXSA9IGkgKiB0aGlzLnRpcFZpZXdJdGVtLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8vKiBkcmMudWlTY2FsZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuc2V0QmxvY2tJbnB1dEV2ZW50RW5hYmxlKGZhbHNlKTtcbiAgICAgICAgLy8gdGhpcy5zaG93QmFja01hc2soZmFsc2UpO1xuXG4gICAgICAgIEdhbWVVdGlscy5nZXRJbnN0YW5jZSgpLnNldFZpc2libGUodGhpcy50aXBWaWV3SXRlbSwgZmFsc2UpO1xuICAgICAgICBHYW1lVXRpbHMuZ2V0SW5zdGFuY2UoKS5zZXRWaXNpYmxlKHRoaXMubm9kZSwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVUaXBWaWV3KGRhdGEpO1xuICAgIH1cblxuICAgIF91bnJlYWxPbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMudGlwSXRlbVBhcmVudC5yZW1vdmVBbGxDaGlsZHJlbigpXG4gICAgICAgIHRoaXMuX3RpcCA9IFtdXG4gICAgfVxuXG4gICAgY3JlYXRlVGlwVmlldyh0aXBDb250ZW50OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGl0ZW1Ob2RlID0gdGhpcy50aXBWaWV3SXRlbTtcbiAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZShpdGVtTm9kZSk7XG4gICAgICAgIHRoaXMudGlwSXRlbVBhcmVudC5hZGRDaGlsZChpdGVtKVxuICAgICAgICBHYW1lVXRpbHMuZ2V0SW5zdGFuY2UoKS5zZXRWaXNpYmxlKGl0ZW0sIHRydWUpXG4gICAgICAgIGxldCBzSXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KFRpcFRleHQpXG4gICAgICAgIHNJdGVtLkluaXQodGlwQ29udGVudClcbiAgICAgICAgLy8gaWYgKHRoaXMuX3RpcC5sZW5ndGggPiA0KSB7XG4gICAgICAgIC8vICAgICB0aGlzLl90aXBbMF0udGlwSXRlbS5oaWRlSXRlbSgpO1xuICAgICAgICAvLyAgICAgdGhpcy5fdGlwLnNoaWZ0KCk7XG4gICAgICAgIC8vICAgICB0aGlzLmNoZWNrQ2xvc2VXaW5kb3coKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLl90aXAucHVzaCh7XG4gICAgICAgICAgICB0aW1lOiAwLFxuICAgICAgICAgICAgdGlwSXRlbTogc0l0ZW0sXG4gICAgICAgICAgICBmYWRlb3V0OiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgICAvLyB0aGlzLl90aXBbdGhpcy5fdGlwLmxlbmd0aF0gPSB7XG4gICAgICAgIC8vICAgICB0aW1lOiAwLFxuICAgICAgICAvLyAgICAgdGlwSXRlbTogc0l0ZW0sXG4gICAgICAgIC8vICAgICBmYWRlb3V0OiBmYWxzZVxuICAgICAgICAvLyB9XG4gICAgICAgIHNJdGVtLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90aXAuc2hpZnQoKTtcbiAgICAgICAgICAgIHNJdGVtLmhpZGVJdGVtKCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQ2xvc2VXaW5kb3coKTtcbiAgICAgICAgfSwgMik7XG4gICAgICAgIC8vdGhpcy51cGRhdGVJdGVtUG9zKCk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RpcC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBudW1ZID0gMFxuICAgICAgICAvLyBsZXQgZHJjID0gQ29uZmlnTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERlc2lnblJlc291bHV0aW9uSW5mbygpO1xuICAgICAgICBsZXQgbnVtWUluZGV4ID0gMFxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5fdGlwLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAobnVtWUluZGV4IDwgdGhpcy5fY291bnQpIHtcbiAgICAgICAgICAgICAgICBudW1ZICs9IChudW1ZSW5kZXggPT0gMCkgPyAwIDogKHRoaXMuX3RpcFtpXS50aXBJdGVtLm5vZGUuaGVpZ2h0IC8gMiArIHRoaXMuX3RpcFtpICsgMV0udGlwSXRlbS5ub2RlLmhlaWdodCAvIDIpIC8vKiBkcmMudWlTY2FsZVxuICAgICAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9uWVtudW1ZSW5kZXhdID0gbnVtWVxuICAgICAgICAgICAgICAgIG51bVlJbmRleCsrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2NvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3RpcFtpbmRleF0pIHtcbiAgICAgICAgICAgICAgICBudW1ZICs9IHRoaXMudGlwVmlld0l0ZW0uZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLy8qIGRyYy51aVNjYWxlXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9zaXRpb25ZW2luZGV4XSA9IG51bVlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9lbmRZID0gdGhpcy5fcG9zaXRpb25ZW3RoaXMuX3Bvc2l0aW9uWS5sZW5ndGggLSAxXVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fdGlwLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGluZGV4XzIgPSB0aGlzLl90aXAubGVuZ3RoIC0gaW5kZXggLSAxXG4gICAgICAgICAgICBpZiAoaW5kZXhfMiA+PSB0aGlzLl9jb3VudCAtIDEpIHtcbiAgICAgICAgICAgICAgICBpbmRleF8yID0gdGhpcy5fY291bnQgLSAxXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB0aXBEYXRhID0gdGhpcy5fdGlwW2luZGV4XVxuICAgICAgICAgICAgdGlwRGF0YS50aW1lID0gdGlwRGF0YS50aW1lICsgZHRcblxuICAgICAgICAgICAgaWYgKGluZGV4XzIgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhfMiA8IHRoaXMuX2NvdW50ICYmIHRpcERhdGEudGlwSXRlbS5ub2RlLnkgPD0gdGhpcy5fcG9zaXRpb25ZW2luZGV4XzJdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpcERhdGEudGlwSXRlbS5ub2RlLnkgPSB0aGlzLl9wb3NpdGlvbllbaW5kZXhfMl1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aXBEYXRhLnRpbWUgPj0gdGhpcy5fc3RhdGljVGltZSkge1xuICAgICAgICAgICAgICAgIC8vdGhpcy5fdGlwW2ldLnRpcEl0ZW0ubm9kZS55ICs9IHRoaXMuX21vdmVTcGVlZCAqIGR0O1xuICAgICAgICAgICAgICAgIGxldCB5ID0gdGlwRGF0YS50aXBJdGVtLm5vZGUueVxuICAgICAgICAgICAgICAgIGxldCB2ID0gTWF0aC5hYnMoKHRoaXMuX3Bvc2l0aW9uWVsyXSAtIHkpIC8gKDEgLSB0aXBEYXRhLnRpbWUpKVxuICAgICAgICAgICAgICAgIHRpcERhdGEudGlwSXRlbS5ub2RlLnkgKz0gdiAqIGR0XG4gICAgICAgICAgICAgICAgaWYgKHRpcERhdGEudGlwSXRlbS5ub2RlLnkgPiB0aGlzLl9lbmRZKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpcERhdGEudGlwSXRlbS5ub2RlLnkgPSB0aGlzLl9lbmRZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXRpcERhdGEuZmFkZW91dCkge1xuICAgICAgICAgICAgICAgICAgICB0aXBEYXRhLmZhZGVvdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZSA9IDAuNyAtICgoaW5kZXhfMiArIDEpICogMC4xKVxuICAgICAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGlwRGF0YS50aXBJdGVtLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aXBEYXRhLnRpcEl0ZW0ubm9kZSkudG8odGltZSwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAodGlwRGF0YS50aW1lPj0yKSB7XG4gICAgICAgICAgICAvLyAgICAgdGlwRGF0YS50aXBJdGVtLmhpZGVJdGVtKCk7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5fdGlwLnNoaWZ0KCk7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jaGVja0Nsb3NlV2luZG93KCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVJdGVtUG9zKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5fdGlwLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBuZXh0SXRlbSA9IHRoaXMuX3RpcFtpIC0gMV0udGlwSXRlbS5ub2RlO1xuICAgICAgICAgICAgbGV0IHRoaXNJdGVtID0gdGhpcy5fdGlwW2ldLnRpcEl0ZW0ubm9kZTtcbiAgICAgICAgICAgIGlmIChuZXh0SXRlbS55IC0gdGhpc0l0ZW0ueSA8IHRoaXNJdGVtLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIG5leHRJdGVtLnkgPSB0aGlzSXRlbS55ICsgdGhpc0l0ZW0uaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGlmIChuZXh0SXRlbS55ID4gdGhpcy5fZW5kWSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SXRlbS55ID0gdGhpcy5fZW5kWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjbG9zZVdpbm9kdyhpc05vdzogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgLy8gICAgIC8vIEdhbWVVdGlscy5nZXRJbnN0YW5jZSgpLnNldFZpc2libGUodGhpcy5ub2RlLCBmYWxzZSk7XG4gICAgLy8gICAgIGlmIChpc05vdykge1xuICAgIC8vICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHRoaXMudW5yZWFsQ2xvc2VXaW5kb3coKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIGNoZWNrQ2xvc2VXaW5kb3coKSB7XG4gICAgICAgIGlmICh0aGlzLl90aXAubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIC8vIHRoaXMuY2xvc2VXaW5vZHcoKTtcbiAgICAgICAgICAgIC8vIHRoaXMudW5yZWFsQ2xvc2VXaW5kb3coKTtcbiAgICAgICAgICAgIHRoaXMuSGlkZVVJKClcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIManager/PopUpMain/PopUpMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2d001t7WcpPzabIrTpRETUH', 'PopUpMain');
// Script/UIManager/PopUpMain/PopUpMain.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIParent_1 = require("../../Base/UIParent");
var GameUtils_1 = require("../../GameUtils/GameUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopUpMain = /** @class */ (function (_super) {
    __extends(PopUpMain, _super);
    function PopUpMain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipLabel = null;
        // LIFE-CYCLE CALLBACKS:
        _this._confirmFun = null;
        _this._cancelFun = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    PopUpMain.prototype.ShowUI = function (data, fun) {
        _super.prototype.ShowUI.call(this, data, fun);
        this._confirmFun = data.confirmFun;
        this._cancelFun = data.cancelFun;
        GameUtils_1.default.getInstance().setString(this.tipLabel, data.data);
    };
    PopUpMain.prototype.onClickConfirmFun = function () {
        if (this._confirmFun) {
            this._confirmFun();
        }
        this.HideUI();
    };
    PopUpMain.prototype.onClickCancelFun = function () {
        if (this._cancelFun) {
            this._cancelFun();
        }
        this.HideUI();
    };
    __decorate([
        property(cc.Label)
    ], PopUpMain.prototype, "tipLabel", void 0);
    PopUpMain = __decorate([
        ccclass
    ], PopUpMain);
    return PopUpMain;
}(UIParent_1.default));
exports.default = PopUpMain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVSU1hbmFnZXJcXFBvcFVwTWFpblxcUG9wVXBNYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyx1REFBa0Q7QUFHNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVE7SUFBL0M7UUFBQSxxRUFpQ0M7UUE5QkcsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQix3QkFBd0I7UUFDaEIsaUJBQVcsR0FBYSxJQUFJLENBQUE7UUFDNUIsZ0JBQVUsR0FBYSxJQUFJLENBQUE7O1FBeUJuQyxpQkFBaUI7SUFDckIsQ0FBQztJQXhCRyxlQUFlO0lBRWYsMEJBQU0sR0FBTixVQUFPLElBQVUsRUFBRSxHQUFnQjtRQUMvQixpQkFBTSxNQUFNLFlBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQTtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDaEMsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDL0QsQ0FBQztJQUVELHFDQUFpQixHQUFqQjtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7U0FDckI7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDakIsQ0FBQztJQUVELG9DQUFnQixHQUFoQjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7U0FDcEI7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDakIsQ0FBQztJQTNCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNPO0lBSFQsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWlDN0I7SUFBRCxnQkFBQztDQWpDRCxBQWlDQyxDQWpDc0Msa0JBQVEsR0FpQzlDO2tCQWpDb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVBhcmVudCBmcm9tIFwiLi4vLi4vQmFzZS9VSVBhcmVudFwiO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tIFwiLi4vLi4vR2FtZVV0aWxzL0dhbWVVdGlsc1wiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BVcE1haW4gZXh0ZW5kcyBVSVBhcmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGlwTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIHByaXZhdGUgX2NvbmZpcm1GdW46IEZ1bmN0aW9uID0gbnVsbFxuICAgIHByaXZhdGUgX2NhbmNlbEZ1bjogRnVuY3Rpb24gPSBudWxsXG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIFNob3dVSShkYXRhPzogYW55LCBmdW4/OiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIHN1cGVyLlNob3dVSShkYXRhLCBmdW4pXG4gICAgICAgIHRoaXMuX2NvbmZpcm1GdW4gPSBkYXRhLmNvbmZpcm1GdW5cbiAgICAgICAgdGhpcy5fY2FuY2VsRnVuID0gZGF0YS5jYW5jZWxGdW5cbiAgICAgICAgR2FtZVV0aWxzLmdldEluc3RhbmNlKCkuc2V0U3RyaW5nKHRoaXMudGlwTGFiZWwsIGRhdGEuZGF0YSlcbiAgICB9XG5cbiAgICBvbkNsaWNrQ29uZmlybUZ1bigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpcm1GdW4pIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpcm1GdW4oKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuSGlkZVVJKClcbiAgICB9XG5cbiAgICBvbkNsaWNrQ2FuY2VsRnVuKCkge1xuICAgICAgICBpZiAodGhpcy5fY2FuY2VsRnVuKSB7XG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxGdW4oKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuSGlkZVVJKClcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIManager/GameSetting/GameSetting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8b09gkiK5LUbclXgNTweEv', 'GameSetting');
// Script/UIManager/GameSetting/GameSetting.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIParent_1 = require("../../Base/UIParent");
var SdkCtrl_1 = require("../../Ctrl/SdkCtrl");
var GameUtils_1 = require("../../GameUtils/GameUtils");
var GameEventManager_1 = require("../../Manager/GameEventManager");
var GameData_1 = require("../../Other/GameData");
var SoundMgr_1 = require("../../Other/SoundMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameSetting = /** @class */ (function (_super) {
    __extends(GameSetting, _super);
    function GameSetting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg1MusicSlider = null;
        _this.bg1AudioSlider = null;
        _this.bg1MusicBar = null;
        _this.bg1AudioBar = null;
        _this.closeGameBtn = null;
        // LIFE-CYCLE CALLBACKS:
        _this._isSetMusic = true;
        _this._isSetAudio = true;
        _this._musicNum = 0;
        _this._audioNum = 0;
        return _this;
    }
    GameSetting.prototype.ShowUI = function (data) {
        _super.prototype.ShowUI.call(this, data);
        GameData_1.default.isPause = true;
        this._musicNum = SoundMgr_1.default.getInstance().getBgmVolume();
        this._audioNum = SoundMgr_1.default.getInstance().getAudioVolume();
        this.bg1MusicSlider.progress = this._musicNum;
        this.bg1AudioSlider.progress = this._audioNum;
        this.bg1MusicBar.progress = this._musicNum;
        this.bg1AudioBar.progress = this._audioNum;
        this._isSetMusic = true;
        this._isSetAudio = true;
        SdkCtrl_1.default.getInstance().ShowBanner();
        GameUtils_1.default.getInstance().setVisible(this.closeGameBtn, data == 1);
    };
    GameSetting.prototype.onClickMusicSlider = function (sender, event) {
        var _this = this;
        this._musicNum = sender.progress;
        if (this._isSetMusic) {
            this._isSetMusic = false;
            SoundMgr_1.default.getInstance().setBgmVolume(this._musicNum);
            GameUtils_1.default.getInstance().setProgress(this.bg1MusicBar, this._musicNum);
            this.scheduleOnce(function () {
                _this._isSetMusic = true;
                SoundMgr_1.default.getInstance().setBgmVolume(_this._musicNum);
                GameUtils_1.default.getInstance().setProgress(_this.bg1MusicBar, _this._musicNum);
            }, 0.02);
        }
    };
    GameSetting.prototype.onClickAoudioSlider = function (sender, event) {
        var _this = this;
        this._audioNum = sender.progress;
        if (this._isSetAudio) {
            this._isSetAudio = false;
            SoundMgr_1.default.getInstance().setAudioVolume(this._audioNum);
            GameUtils_1.default.getInstance().setProgress(this.bg1AudioBar, this._audioNum);
            this.scheduleOnce(function () {
                _this._isSetAudio = true;
                SoundMgr_1.default.getInstance().setAudioVolume(_this._audioNum);
                GameUtils_1.default.getInstance().setProgress(_this.bg1AudioBar, _this._audioNum);
            }, 0.02);
        }
    };
    GameSetting.prototype.onClickClose = function () {
        this.HideUI();
    };
    GameSetting.prototype.HideUI = function (fun) {
        _super.prototype.HideUI.call(this, fun);
        GameData_1.default.isPause = false;
        SdkCtrl_1.default.getInstance().HideBanner();
    };
    GameSetting.prototype.sendEvent = function (eventId, data) {
        if (data === void 0) { data = null; }
        GameEventManager_1.default.getInstance().dispathcGameEvent(eventId, data);
    };
    __decorate([
        property(cc.Slider)
    ], GameSetting.prototype, "bg1MusicSlider", void 0);
    __decorate([
        property(cc.Slider)
    ], GameSetting.prototype, "bg1AudioSlider", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], GameSetting.prototype, "bg1MusicBar", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], GameSetting.prototype, "bg1AudioBar", void 0);
    __decorate([
        property(cc.Node)
    ], GameSetting.prototype, "closeGameBtn", void 0);
    GameSetting = __decorate([
        ccclass
    ], GameSetting);
    return GameSetting;
}(UIParent_1.default));
exports.default = GameSetting;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVSU1hbmFnZXJcXEdhbWVTZXR0aW5nXFxHYW1lU2V0dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFFM0MsOENBQXlDO0FBQ3pDLHVEQUFrRDtBQUNsRCxtRUFBOEQ7QUFDOUQsaURBQTRDO0FBQzVDLGlEQUE0QztBQUd0QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBUTtJQUFqRDtRQUFBLHFFQTJFQztRQXpFRyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFFbkMsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBR25DLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLHdCQUF3QjtRQUNoQixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUMzQixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUMzQixlQUFTLEdBQVcsQ0FBQyxDQUFBO1FBQ3JCLGVBQVMsR0FBVyxDQUFDLENBQUE7O0lBMERqQyxDQUFDO0lBeERHLDRCQUFNLEdBQU4sVUFBTyxJQUFTO1FBQ1osaUJBQU0sTUFBTSxZQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLGtCQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ3hELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDN0MsSUFBSSxDQUFDLGNB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V0FBZ0I7UUFDMUMsMEJBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUF4RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFDYTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNhO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7b0RBQ1U7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztvREFDVTtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNXO0lBWFosV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTJFL0I7SUFBRCxrQkFBQztDQTNFRCxBQTJFQyxDQTNFd0Msa0JBQVEsR0EyRWhEO2tCQTNFb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVBhcmVudCBmcm9tIFwiLi4vLi4vQmFzZS9VSVBhcmVudFwiO1xuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4uLy4uL0NvbmZpZy9HYW1lRXZlbnRDb25maWdcIjtcbmltcG9ydCBTZGtDdHJsIGZyb20gXCIuLi8uLi9DdHJsL1Nka0N0cmxcIjtcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSBcIi4uLy4uL0dhbWVVdGlscy9HYW1lVXRpbHNcIjtcbmltcG9ydCBHYW1lRXZlbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9NYW5hZ2VyL0dhbWVFdmVudE1hbmFnZXJcIjtcbmltcG9ydCBHYW1lRGF0YSBmcm9tIFwiLi4vLi4vT3RoZXIvR2FtZURhdGFcIjtcbmltcG9ydCBTb3VuZE1nciBmcm9tIFwiLi4vLi4vT3RoZXIvU291bmRNZ3JcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNldHRpbmcgZXh0ZW5kcyBVSVBhcmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlNsaWRlcilcbiAgICBiZzFNdXNpY1NsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU2xpZGVyKVxuICAgIGJnMUF1ZGlvU2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcbiAgICBiZzFNdXNpY0JhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Qcm9ncmVzc0JhcilcbiAgICBiZzFBdWRpb0JhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2xvc2VHYW1lQnRuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIHByaXZhdGUgX2lzU2V0TXVzaWM6IGJvb2xlYW4gPSB0cnVlXG4gICAgcHJpdmF0ZSBfaXNTZXRBdWRpbzogYm9vbGVhbiA9IHRydWVcbiAgICBwcml2YXRlIF9tdXNpY051bTogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgX2F1ZGlvTnVtOiBudW1iZXIgPSAwXG5cbiAgICBTaG93VUkoZGF0YTogYW55KSB7XG4gICAgICAgIHN1cGVyLlNob3dVSShkYXRhKTtcbiAgICAgICAgR2FtZURhdGEuaXNQYXVzZSA9IHRydWVcbiAgICAgICAgdGhpcy5fbXVzaWNOdW0gPSBTb3VuZE1nci5nZXRJbnN0YW5jZSgpLmdldEJnbVZvbHVtZSgpXG4gICAgICAgIHRoaXMuX2F1ZGlvTnVtID0gU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5nZXRBdWRpb1ZvbHVtZSgpXG4gICAgICAgIHRoaXMuYmcxTXVzaWNTbGlkZXIucHJvZ3Jlc3MgPSB0aGlzLl9tdXNpY051bVxuICAgICAgICB0aGlzLmJnMUF1ZGlvU2xpZGVyLnByb2dyZXNzID0gdGhpcy5fYXVkaW9OdW1cbiAgICAgICAgdGhpcy5iZzFNdXNpY0Jhci5wcm9ncmVzcyA9IHRoaXMuX211c2ljTnVtXG4gICAgICAgIHRoaXMuYmcxQXVkaW9CYXIucHJvZ3Jlc3MgPSB0aGlzLl9hdWRpb051bVxuICAgICAgICB0aGlzLl9pc1NldE11c2ljID0gdHJ1ZVxuICAgICAgICB0aGlzLl9pc1NldEF1ZGlvID0gdHJ1ZVxuICAgICAgICBTZGtDdHJsLmdldEluc3RhbmNlKCkuU2hvd0Jhbm5lcigpXG4gICAgICAgIEdhbWVVdGlscy5nZXRJbnN0YW5jZSgpLnNldFZpc2libGUodGhpcy5jbG9zZUdhbWVCdG4sIGRhdGEgPT0gMSlcbiAgICB9XG5cbiAgICBvbkNsaWNrTXVzaWNTbGlkZXIoc2VuZGVyLCBldmVudCkge1xuICAgICAgICB0aGlzLl9tdXNpY051bSA9IHNlbmRlci5wcm9ncmVzc1xuICAgICAgICBpZiAodGhpcy5faXNTZXRNdXNpYykge1xuICAgICAgICAgICAgdGhpcy5faXNTZXRNdXNpYyA9IGZhbHNlXG4gICAgICAgICAgICBTb3VuZE1nci5nZXRJbnN0YW5jZSgpLnNldEJnbVZvbHVtZSh0aGlzLl9tdXNpY051bSlcbiAgICAgICAgICAgIEdhbWVVdGlscy5nZXRJbnN0YW5jZSgpLnNldFByb2dyZXNzKHRoaXMuYmcxTXVzaWNCYXIsIHRoaXMuX211c2ljTnVtKVxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzU2V0TXVzaWMgPSB0cnVlXG4gICAgICAgICAgICAgICAgU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5zZXRCZ21Wb2x1bWUodGhpcy5fbXVzaWNOdW0pXG4gICAgICAgICAgICAgICAgR2FtZVV0aWxzLmdldEluc3RhbmNlKCkuc2V0UHJvZ3Jlc3ModGhpcy5iZzFNdXNpY0JhciwgdGhpcy5fbXVzaWNOdW0pXG4gICAgICAgICAgICB9LCAwLjAyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja0FvdWRpb1NsaWRlcihzZW5kZXIsIGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2F1ZGlvTnVtID0gc2VuZGVyLnByb2dyZXNzXG4gICAgICAgIGlmICh0aGlzLl9pc1NldEF1ZGlvKSB7XG4gICAgICAgICAgICB0aGlzLl9pc1NldEF1ZGlvID0gZmFsc2VcbiAgICAgICAgICAgIFNvdW5kTWdyLmdldEluc3RhbmNlKCkuc2V0QXVkaW9Wb2x1bWUodGhpcy5fYXVkaW9OdW0pXG4gICAgICAgICAgICBHYW1lVXRpbHMuZ2V0SW5zdGFuY2UoKS5zZXRQcm9ncmVzcyh0aGlzLmJnMUF1ZGlvQmFyLCB0aGlzLl9hdWRpb051bSlcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1NldEF1ZGlvID0gdHJ1ZVxuICAgICAgICAgICAgICAgIFNvdW5kTWdyLmdldEluc3RhbmNlKCkuc2V0QXVkaW9Wb2x1bWUodGhpcy5fYXVkaW9OdW0pXG4gICAgICAgICAgICAgICAgR2FtZVV0aWxzLmdldEluc3RhbmNlKCkuc2V0UHJvZ3Jlc3ModGhpcy5iZzFBdWRpb0JhciwgdGhpcy5fYXVkaW9OdW0pXG4gICAgICAgICAgICB9LCAwLjAyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja0Nsb3NlKCkge1xuICAgICAgICB0aGlzLkhpZGVVSSgpXG4gICAgfVxuXG4gICAgSGlkZVVJKGZ1bj86ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuSGlkZVVJKGZ1bilcbiAgICAgICAgR2FtZURhdGEuaXNQYXVzZSA9IGZhbHNlXG4gICAgICAgIFNka0N0cmwuZ2V0SW5zdGFuY2UoKS5IaWRlQmFubmVyKClcbiAgICB9XG5cbiAgICBzZW5kRXZlbnQoZXZlbnRJZDogR2FtZUV2ZW50LCBkYXRhOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIEdhbWVFdmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5kaXNwYXRoY0dhbWVFdmVudChldmVudElkLCBkYXRhKTtcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/AutoReleaseSpineModify.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e3ef0RTDlKW6EGopckwFOB', 'AutoReleaseSpineModify');
// Script/Common/AutoReleaseSpineModify.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AutoReleaseSpineModify = /** @class */ (function (_super) {
    __extends(AutoReleaseSpineModify, _super);
    function AutoReleaseSpineModify() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._sfs = [];
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    AutoReleaseSpineModify.prototype.start = function () {
    };
    /**
     * addModifySFPath
     */
    AutoReleaseSpineModify.prototype.addModifySF = function (sf) {
        this._sfs.push(sf);
        sf.addRef();
        cc.log("addModifySF", sf.name);
    };
    AutoReleaseSpineModify.prototype.onDestroy = function () {
        cc.log("AutoRelease addModifySF s");
        for (var i = 0; i < this._sfs.length; i++) {
            this._sfs[i].decRef();
            cc.log("AutoRelease addModifySF", this._sfs[i].name);
        }
        cc.log("AutoRelease addModifySF e");
    };
    AutoReleaseSpineModify = __decorate([
        ccclass
    ], AutoReleaseSpineModify);
    return AutoReleaseSpineModify;
}(cc.Component));
exports.default = AutoReleaseSpineModify;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXEF1dG9SZWxlYXNlU3BpbmVNb2RpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0QsMENBQVk7SUFBaEU7UUFFSSx3QkFBd0I7UUFGNUIscUVBK0JDO1FBM0JXLFVBQUksR0FBb0IsRUFBRSxDQUFBOztRQTBCbEMsaUJBQWlCO0lBQ3JCLENBQUM7SUF6QkcsZUFBZTtJQUVmLHNDQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQ7O09BRUc7SUFDSSw0Q0FBVyxHQUFsQixVQUFtQixFQUFrQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWixFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVTLDBDQUFTLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO1FBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNyRDtRQUNELEVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBNUJnQixzQkFBc0I7UUFEMUMsT0FBTztPQUNhLHNCQUFzQixDQStCMUM7SUFBRCw2QkFBQztDQS9CRCxBQStCQyxDQS9CbUQsRUFBRSxDQUFDLFNBQVMsR0ErQi9EO2tCQS9Cb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b1JlbGVhc2VTcGluZU1vZGlmeSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIHByaXZhdGUgX3NmczpjYy5TcHJpdGVGcmFtZVtdID0gW11cblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYWRkTW9kaWZ5U0ZQYXRoXG4gICAgICovXG4gICAgcHVibGljIGFkZE1vZGlmeVNGKHNmOiBjYy5TcHJpdGVGcmFtZSkge1xuICAgICAgICB0aGlzLl9zZnMucHVzaChzZik7XG4gICAgICAgIHNmLmFkZFJlZigpO1xuICAgICAgICBjYy5sb2coXCJhZGRNb2RpZnlTRlwiLHNmLm5hbWUpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgY2MubG9nKFwiQXV0b1JlbGVhc2UgYWRkTW9kaWZ5U0Ygc1wiKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Nmcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICB0aGlzLl9zZnNbaV0uZGVjUmVmKCk7XG4gICAgICAgICAgIGNjLmxvZyhcIkF1dG9SZWxlYXNlIGFkZE1vZGlmeVNGXCIsdGhpcy5fc2ZzW2ldLm5hbWUpXG4gICAgICAgIH1cbiAgICAgICAgY2MubG9nKFwiQXV0b1JlbGVhc2UgYWRkTW9kaWZ5U0YgZVwiKVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/CustomListViewGroup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '804f5TiUQ9LwYH4mC1hZiB5', 'CustomListViewGroup');
// Script/Common/CustomListViewGroup.ts

"use strict";
/**
 * File: CustomListView copy.ts
 * Created Date: 2022-04-22 13:25:39
 * Author: xiaolizi
 * -----
 * Last Modified: 2022-04-25 19:01:20
 * Modified By: xiaolizi
 * -----
 * Copyright (c) 2022 Jw Inc.
 * ------------------------------------
 * Javascript will save your soul!
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../GameUtils/GameUtils");
var CustomListItem_1 = require("./CustomListItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomListViewGroup = /** @class */ (function (_super) {
    __extends(CustomListViewGroup, _super);
    function CustomListViewGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.choseItems = [];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    CustomListViewGroup.prototype.updateItem = function (index, data, selectData) {
        _super.prototype.updateItem.call(this, index, data, selectData);
        for (var i = 0; i < this.choseItems.length; i++) {
            if (i < data.length) {
                GameUtils_1.default.getInstance().setVisible(this.choseItems[i], true);
                this.choseItems[i].updateItem(i + this.choseItems.length * index, data[i], selectData);
            }
            else {
                GameUtils_1.default.getInstance().setVisible(this.choseItems[i], false);
            }
        }
    };
    CustomListViewGroup.prototype.getItemCount = function () {
        return this.choseItems.length;
    };
    __decorate([
        property(CustomListItem_1.default)
    ], CustomListViewGroup.prototype, "choseItems", void 0);
    CustomListViewGroup = __decorate([
        ccclass
    ], CustomListViewGroup);
    return CustomListViewGroup;
}(CustomListItem_1.default));
exports.default = CustomListViewGroup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXEN1c3RvbUxpc3RWaWV3R3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztHQVdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSCxvREFBK0M7QUFDL0MsbURBQThDO0FBSXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlELHVDQUFjO0lBQS9EO1FBQUEscUVBMEJDO1FBdkJHLGdCQUFVLEdBQXFCLEVBQUUsQ0FBQzs7SUF1QnRDLENBQUM7SUFyQkcsd0JBQXdCO0lBRXhCLHdDQUFVLEdBQVYsVUFBVyxLQUFhLEVBQUUsSUFBUyxFQUFFLFVBQVU7UUFDM0MsaUJBQU0sVUFBVSxZQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pCLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3RGO2lCQUFNO2dCQUNILG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDakU7U0FDSjtJQUVMLENBQUM7SUFFRCwwQ0FBWSxHQUFaO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUNsQyxDQUFDO0lBcEJEO1FBREMsUUFBUSxDQUFDLHdCQUFjLENBQUM7MkRBQ1M7SUFIakIsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0EwQnZDO0lBQUQsMEJBQUM7Q0ExQkQsQUEwQkMsQ0ExQmdELHdCQUFjLEdBMEI5RDtrQkExQm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsZTogQ3VzdG9tTGlzdFZpZXcgY29weS50c1xuICogQ3JlYXRlZCBEYXRlOiAyMDIyLTA0LTIyIDEzOjI1OjM5XG4gKiBBdXRob3I6IHhpYW9saXppXG4gKiAtLS0tLVxuICogTGFzdCBNb2RpZmllZDogMjAyMi0wNC0yNSAxOTowMToyMFxuICogTW9kaWZpZWQgQnk6IHhpYW9saXppXG4gKiAtLS0tLVxuICogQ29weXJpZ2h0IChjKSAyMDIyIEp3IEluYy5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogSmF2YXNjcmlwdCB3aWxsIHNhdmUgeW91ciBzb3VsIVxuICovXG5cbmltcG9ydCBHYW1lVXRpbHMgZnJvbSBcIi4uL0dhbWVVdGlscy9HYW1lVXRpbHNcIjtcbmltcG9ydCBDdXN0b21MaXN0SXRlbSBmcm9tIFwiLi9DdXN0b21MaXN0SXRlbVwiO1xuXG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUxpc3RWaWV3R3JvdXAgZXh0ZW5kcyBDdXN0b21MaXN0SXRlbSB7XG5cbiAgICBAcHJvcGVydHkoQ3VzdG9tTGlzdEl0ZW0pXG4gICAgY2hvc2VJdGVtczogQ3VzdG9tTGlzdEl0ZW1bXSA9IFtdO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICB1cGRhdGVJdGVtKGluZGV4OiBudW1iZXIsIGRhdGE6IGFueSwgc2VsZWN0RGF0YSkge1xuICAgICAgICBzdXBlci51cGRhdGVJdGVtKGluZGV4LCBkYXRhLCBzZWxlY3REYXRhKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hvc2VJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPCBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIEdhbWVVdGlscy5nZXRJbnN0YW5jZSgpLnNldFZpc2libGUodGhpcy5jaG9zZUl0ZW1zW2ldLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNob3NlSXRlbXNbaV0udXBkYXRlSXRlbShpK3RoaXMuY2hvc2VJdGVtcy5sZW5ndGgqaW5kZXgsIGRhdGFbaV0sIHNlbGVjdERhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBHYW1lVXRpbHMuZ2V0SW5zdGFuY2UoKS5zZXRWaXNpYmxlKHRoaXMuY2hvc2VJdGVtc1tpXSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXRJdGVtQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNob3NlSXRlbXMubGVuZ3RoO1xuICAgIH1cblxuXG59XG5cblxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Config/GameEventConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3f2b4FMaBGMrbWOYyvdRF6', 'GameEventConfig');
// Script/Config/GameEventConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEvent = void 0;
var GameEvent;
(function (GameEvent) {
    GameEvent["GameOver"] = "GameOver";
    GameEvent["CloseGameMain"] = "CloseGameMain";
    GameEvent["AgainGameMain"] = "AgainGameMain";
    GameEvent["NextGameMain"] = "NextGameMain";
})(GameEvent = exports.GameEvent || (exports.GameEvent = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb25maWdcXEdhbWVFdmVudENvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFNBS1g7QUFMRCxXQUFZLFNBQVM7SUFDakIsa0NBQXFCLENBQUE7SUFDckIsNENBQStCLENBQUE7SUFDL0IsNENBQStCLENBQUE7SUFDL0IsMENBQTZCLENBQUE7QUFDakMsQ0FBQyxFQUxXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBS3BCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gR2FtZUV2ZW50IHtcbiAgICBHYW1lT3ZlciA9IFwiR2FtZU92ZXJcIiwgICAgICAgICAgICAgIC8v5ri45oiP57uT5p2fXG4gICAgQ2xvc2VHYW1lTWFpbiA9IFwiQ2xvc2VHYW1lTWFpblwiLCAgICAvL+WFs+mXrea4uOaIj+eVjOmdolxuICAgIEFnYWluR2FtZU1haW4gPSBcIkFnYWluR2FtZU1haW5cIiwgICAgLy/lho3mrKHmjJHmiJhcbiAgICBOZXh0R2FtZU1haW4gPSBcIk5leHRHYW1lTWFpblwiLCAgICAgIC8v5LiL5LiA5YWzXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Ctrl/GameCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ce190jU2RKyrdMpCl3HpWZ', 'GameCtrl');
// Script/Ctrl/GameCtrl.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameEventManager_1 = require("../Manager/GameEventManager");
var GameData_1 = require("../Other/GameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameCtrl = /** @class */ (function () {
    function GameCtrl() {
        this._isNewGame = false;
        this._itemList = null;
        this._gameState = GameData_1.GameState.waitStart;
    }
    GameCtrl_1 = GameCtrl;
    // private _selectLevelInfo: LevelConfigBasic = null
    GameCtrl.getInstance = function () {
        if (!this._instance) {
            this._instance = new GameCtrl_1();
            this._instance._init();
        }
        return this._instance;
    };
    GameCtrl.destroyInstance = function () {
        if (this._instance) {
            this._instance._destroy();
            delete this._instance;
            this._instance = null;
        }
    };
    GameCtrl.prototype._init = function () {
    };
    GameCtrl.prototype._destroy = function () { };
    GameCtrl.prototype.clearData = function () {
    };
    GameCtrl.prototype.setGameState = function (state) {
        this._gameState = state;
    };
    GameCtrl.prototype.getGameState = function () {
        return this._gameState;
    };
    /** 获得全部道具数组 */
    GameCtrl.prototype.getAllItemList = function () {
        if (!this._itemList) {
            var data = GameData_1.default.getLocalData("ItemList");
            this._itemList = data ? data : {};
        }
        return this._itemList;
    };
    /** 设置道具数量 */
    GameCtrl.prototype.setItemCount = function (itemType, count) {
        var itemList = this.getAllItemList();
        if (count > 0) {
            itemList[itemType] = { itemID: itemType, itemCount: count };
        }
        else if (count == 0) {
            delete itemList[itemType];
        }
        GameData_1.default.saveLocalData("ItemList", itemList);
    };
    /** 获得道具数量 */
    GameCtrl.prototype.getItemCount = function (itemType) {
        var itemList = this.getAllItemList();
        if (!itemList[itemType]) {
            return 0;
        }
        return itemList[itemType].itemCount;
    };
    /** 获得奖励道具 */
    GameCtrl.prototype.addAward = function (itemInfoList, isShowUI) {
        if (isShowUI === void 0) { isShowUI = false; }
        for (var index = 0; index < itemInfoList.length; index++) {
            var itemInfo = itemInfoList[index];
            var goldCount = this.getItemCount(itemInfo.itemID);
            goldCount += itemInfo.itemCount;
            this.setItemCount(itemInfo.itemID, goldCount);
        }
        // if (isShowUI && itemInfoList.length > 0) {
        //     UIManager.share.ShowUIName(WinID.ShowAwardMain, itemInfoList)
        // }
    };
    /** 消耗金币道具统一接口 */
    GameCtrl.prototype.costItem = function (itemInfoList) {
        for (var index = 0; index < itemInfoList.length; index++) {
            var itemInfo = itemInfoList[index];
            var goldCount = this.getItemCount(itemInfo.itemID);
            goldCount -= itemInfo.itemCount;
            this.setItemCount(itemInfo.itemID, goldCount);
        }
    };
    /** 游戏刚打开，检测是不是今天 */
    GameCtrl.prototype.checkDayIsToday = function () {
        var dayData = GameData_1.default.getLocalData("NowDay");
        var isNowDay = false;
        if (dayData == null || dayData == undefined) {
            //今天是新的一天
            isNowDay = true;
        }
        else {
            var signDate = new Date(dayData);
            var signStr = signDate.getFullYear() + "_" + signDate.getMonth() + "_" + signDate.getDate();
            var nowDate = new Date(new Date().getTime());
            var nowStr = nowDate.getFullYear() + "_" + nowDate.getMonth() + "_" + nowDate.getDate();
            isNowDay = signStr != nowStr;
        }
        if (isNowDay) {
            //今天是新的一天
            GameData_1.default.saveLocalData("NowDay", new Date().getTime());
            // //更新每日奖励次数
            // this.updateEverydayAwardTime()
            // //更新每日签到状态
            // SignCtrl.getInstance().updateSignData()
            // //初始化每日任务
            // TaskCtrl.getInstance().clearTaskTime()
            // //更新任务条件
            // TaskCtrl.getInstance().addTaskTime(TaskID.login)
            // //更新副本数据
            // SecretAreaCtrl.getInstance().resetSecretAreaData()
        }
    };
    GameCtrl.prototype.sendEvent = function (eventId, data) {
        if (data === void 0) { data = null; }
        GameEventManager_1.default.getInstance().dispathcGameEvent(eventId, data);
    };
    var GameCtrl_1;
    GameCtrl._instance = null;
    GameCtrl = GameCtrl_1 = __decorate([
        ccclass
    ], GameCtrl);
    return GameCtrl;
}());
exports.default = GameCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDdHJsXFxHYW1lQ3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGdFQUEyRDtBQUMzRCw4Q0FBa0U7QUFFNUQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtRQUdZLGVBQVUsR0FBWSxLQUFLLENBQUE7UUFDM0IsY0FBUyxHQUFnQyxJQUFJLENBQUE7UUFDN0MsZUFBVSxHQUFjLG9CQUFTLENBQUMsU0FBUyxDQUFBO0lBMkh2RCxDQUFDO2lCQWhJb0IsUUFBUTtJQU16QixvREFBb0Q7SUFFdEMsb0JBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksVUFBUSxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQjtRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRWEsd0JBQWUsR0FBN0I7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBRU8sd0JBQUssR0FBYjtJQUVBLENBQUM7SUFFTywyQkFBUSxHQUFoQixjQUFxQixDQUFDO0lBRXRCLDRCQUFTLEdBQVQ7SUFFQSxDQUFDO0lBRUQsK0JBQVksR0FBWixVQUFhLEtBQWdCO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO0lBQzNCLENBQUM7SUFFRCwrQkFBWSxHQUFaO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO0lB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ZW50IjpbImltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gXCIuLi9Db25maWcvR2FtZUV2ZW50Q29uZmlnXCI7XG5pbXBvcnQgR2FtZUV2ZW50TWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9HYW1lRXZlbnRNYW5hZ2VyXCI7XG5pbXBvcnQgR2FtZURhdGEsIHsgR2FtZVN0YXRlLCBJdGVtSW5mbyB9IGZyb20gXCIuLi9PdGhlci9HYW1lRGF0YVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUN0cmwge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogR2FtZUN0cmwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfaXNOZXdHYW1lOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIF9pdGVtTGlzdDogeyBba2V5OiBudW1iZXJdOiBJdGVtSW5mbyB9ID0gbnVsbFxuICAgIHByaXZhdGUgX2dhbWVTdGF0ZTogR2FtZVN0YXRlID0gR2FtZVN0YXRlLndhaXRTdGFydFxuICAgIC8vIHByaXZhdGUgX3NlbGVjdExldmVsSW5mbzogTGV2ZWxDb25maWdCYXNpYyA9IG51bGxcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEdhbWVDdHJsKCk7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5faW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRlc3Ryb3lJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5fZGVzdHJveSgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdCgpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgX2Rlc3Ryb3koKSB7IH1cblxuICAgIGNsZWFyRGF0YSgpIHtcblxuICAgIH1cblxuICAgIHNldEdhbWVTdGF0ZShzdGF0ZTogR2FtZVN0YXRlKSB7XG4gICAgICAgIHRoaXMuX2dhbWVTdGF0ZSA9IHN0YXRlXG4gICAgfVxuXG4gICAgZ2V0R2FtZVN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZVN0YXRlXG4gICAgfVxuXG4gICAgLyoqIOiOt+W+l+WFqOmDqOmBk+WFt+aVsOe7hCAqL1xuICAgIGdldEFsbEl0ZW1MaXN0KCkge1xuICAgICAgICBpZiAoIXRoaXMuX2l0ZW1MaXN0KSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IEdhbWVEYXRhLmdldExvY2FsRGF0YShcIkl0ZW1MaXN0XCIpXG4gICAgICAgICAgICB0aGlzLl9pdGVtTGlzdCA9IGRhdGEgPyBkYXRhIDoge31cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbUxpc3RcbiAgICB9XG5cbiAgICAvKiog6K6+572u6YGT5YW35pWw6YePICovXG4gICAgc2V0SXRlbUNvdW50KGl0ZW1UeXBlOiBudW1iZXIsIGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGl0ZW1MaXN0ID0gdGhpcy5nZXRBbGxJdGVtTGlzdCgpXG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgIGl0ZW1MaXN0W2l0ZW1UeXBlXSA9IHsgaXRlbUlEOiBpdGVtVHlwZSwgaXRlbUNvdW50OiBjb3VudCB9IGFzIEl0ZW1JbmZvXG4gICAgICAgIH0gZWxzZSBpZiAoY291bnQgPT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIGl0ZW1MaXN0W2l0ZW1UeXBlXVxuICAgICAgICB9XG4gICAgICAgIEdhbWVEYXRhLnNhdmVMb2NhbERhdGEoXCJJdGVtTGlzdFwiLCBpdGVtTGlzdClcbiAgICB9XG5cbiAgICAvKiog6I635b6X6YGT5YW35pWw6YePICovXG4gICAgZ2V0SXRlbUNvdW50KGl0ZW1UeXBlOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGl0ZW1MaXN0ID0gdGhpcy5nZXRBbGxJdGVtTGlzdCgpXG4gICAgICAgIGlmICghaXRlbUxpc3RbaXRlbVR5cGVdKSB7XG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtTGlzdFtpdGVtVHlwZV0uaXRlbUNvdW50XG4gICAgfVxuXG4gICAgLyoqIOiOt+W+l+WlluWKsemBk+WFtyAqL1xuICAgIGFkZEF3YXJkKGl0ZW1JbmZvTGlzdDogSXRlbUluZm9bXSwgaXNTaG93VUk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaXRlbUluZm9MaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW1JbmZvID0gaXRlbUluZm9MaXN0W2luZGV4XTtcbiAgICAgICAgICAgIGxldCBnb2xkQ291bnQgPSB0aGlzLmdldEl0ZW1Db3VudChpdGVtSW5mby5pdGVtSUQpXG4gICAgICAgICAgICBnb2xkQ291bnQgKz0gaXRlbUluZm8uaXRlbUNvdW50XG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1Db3VudChpdGVtSW5mby5pdGVtSUQsIGdvbGRDb3VudClcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAoaXNTaG93VUkgJiYgaXRlbUluZm9MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gICAgIFVJTWFuYWdlci5zaGFyZS5TaG93VUlOYW1lKFdpbklELlNob3dBd2FyZE1haW4sIGl0ZW1JbmZvTGlzdClcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC8qKiDmtojogJfph5HluIHpgZPlhbfnu5/kuIDmjqXlj6MgKi9cbiAgICBjb3N0SXRlbShpdGVtSW5mb0xpc3Q6IEl0ZW1JbmZvW10pIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1JbmZvTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtSW5mbyA9IGl0ZW1JbmZvTGlzdFtpbmRleF07XG4gICAgICAgICAgICBsZXQgZ29sZENvdW50ID0gdGhpcy5nZXRJdGVtQ291bnQoaXRlbUluZm8uaXRlbUlEKVxuICAgICAgICAgICAgZ29sZENvdW50IC09IGl0ZW1JbmZvLml0ZW1Db3VudFxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtQ291bnQoaXRlbUluZm8uaXRlbUlELCBnb2xkQ291bnQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgLyoqIOa4uOaIj+WImuaJk+W8gO+8jOajgOa1i+aYr+S4jeaYr+S7iuWkqSAqL1xuICAgICBjaGVja0RheUlzVG9kYXkoKSB7XG4gICAgICAgIGxldCBkYXlEYXRhID0gR2FtZURhdGEuZ2V0TG9jYWxEYXRhKFwiTm93RGF5XCIpXG4gICAgICAgIGxldCBpc05vd0RheSA9IGZhbHNlXG4gICAgICAgIGlmIChkYXlEYXRhID09IG51bGwgfHwgZGF5RGF0YSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8v5LuK5aSp5piv5paw55qE5LiA5aSpXG4gICAgICAgICAgICBpc05vd0RheSA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzaWduRGF0ZSA9IG5ldyBEYXRlKGRheURhdGEpXG4gICAgICAgICAgICBsZXQgc2lnblN0ciA9IHNpZ25EYXRlLmdldEZ1bGxZZWFyKCkgKyBcIl9cIiArIHNpZ25EYXRlLmdldE1vbnRoKCkgKyBcIl9cIiArIHNpZ25EYXRlLmdldERhdGUoKVxuICAgICAgICAgICAgbGV0IG5vd0RhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSlcbiAgICAgICAgICAgIGxldCBub3dTdHIgPSBub3dEYXRlLmdldEZ1bGxZZWFyKCkgKyBcIl9cIiArIG5vd0RhdGUuZ2V0TW9udGgoKSArIFwiX1wiICsgbm93RGF0ZS5nZXREYXRlKClcbiAgICAgICAgICAgIGlzTm93RGF5ID0gc2lnblN0ciAhPSBub3dTdHJcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOb3dEYXkpIHtcbiAgICAgICAgICAgIC8v5LuK5aSp5piv5paw55qE5LiA5aSpXG4gICAgICAgICAgICBHYW1lRGF0YS5zYXZlTG9jYWxEYXRhKFwiTm93RGF5XCIsIG5ldyBEYXRlKCkuZ2V0VGltZSgpKVxuXG4gICAgICAgICAgICAvLyAvL+abtOaWsOavj+aXpeWlluWKseasoeaVsFxuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVFdmVyeWRheUF3YXJkVGltZSgpXG4gICAgICAgICAgICAvLyAvL+abtOaWsOavj+aXpeetvuWIsOeKtuaAgVxuICAgICAgICAgICAgLy8gU2lnbkN0cmwuZ2V0SW5zdGFuY2UoKS51cGRhdGVTaWduRGF0YSgpXG4gICAgICAgICAgICAvLyAvL+WIneWni+WMluavj+aXpeS7u+WKoVxuICAgICAgICAgICAgLy8gVGFza0N0cmwuZ2V0SW5zdGFuY2UoKS5jbGVhclRhc2tUaW1lKClcbiAgICAgICAgICAgIC8vIC8v5pu05paw5Lu75Yqh5p2h5Lu2XG4gICAgICAgICAgICAvLyBUYXNrQ3RybC5nZXRJbnN0YW5jZSgpLmFkZFRhc2tUaW1lKFRhc2tJRC5sb2dpbilcbiAgICAgICAgICAgIC8vIC8v5pu05paw5Ymv5pys5pWw5o2uXG4gICAgICAgICAgICAvLyBTZWNyZXRBcmVhQ3RybC5nZXRJbnN0YW5jZSgpLnJlc2V0U2VjcmV0QXJlYURhdGEoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VuZEV2ZW50KGV2ZW50SWQ6IEdhbWVFdmVudCwgZGF0YTogYW55ID0gbnVsbCkge1xuICAgICAgICBHYW1lRXZlbnRNYW5hZ2VyLmdldEluc3RhbmNlKCkuZGlzcGF0aGNHYW1lRXZlbnQoZXZlbnRJZCwgZGF0YSk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/ObjectManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb390/WC65MK7AymBNioro3', 'ObjectManager');
// Script/Manager/ObjectManager.ts

"use strict";
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
var ObjectManager = /** @class */ (function () {
    function ObjectManager() {
        this._prefabs = {};
    }
    ObjectManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new ObjectManager();
            this._instance._init();
        }
        return this._instance;
    };
    ObjectManager.destroyInstance = function () {
        if (this._instance) {
            this._instance._destroy();
            delete this._instance;
            this._instance = null;
        }
    };
    ObjectManager.prototype._init = function () {
    };
    ObjectManager.prototype._destroy = function () {
    };
    ObjectManager.prototype.getBundleObjectPrefab = function (path, superior) {
        if (superior === void 0) { superior = ""; }
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this._prefabs[path]) {
                            resolve(_this._prefabs[path]);
                            return;
                        }
                        var bundle = cc.assetManager.getBundle("PlayerEffect");
                        if (!bundle) {
                            resolve(null);
                            return;
                        }
                        bundle.load(path, cc.Prefab, function (err, prefab) {
                            if (err) {
                                cc.log("getObjectNode err", err);
                                resolve(null);
                                return;
                            }
                            _this._prefabs[path] = prefab;
                            prefab.addRef();
                            resolve(prefab);
                        });
                    })];
            });
        });
    };
    ObjectManager.prototype.getObjectPrefab = function (path, superior) {
        if (superior === void 0) { superior = ""; }
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this._prefabs[path]) {
                            resolve(_this._prefabs[path]);
                            return;
                        }
                        cc.resources.load(path, cc.Prefab, function (err, prefab) {
                            if (err) {
                                cc.log("getObjectNode err", err);
                                resolve(null);
                                return;
                            }
                            _this._prefabs[path] = prefab;
                            prefab.addRef();
                            resolve(prefab);
                        });
                    })];
            });
        });
    };
    ObjectManager._instance = null;
    return ObjectManager;
}());
exports.default = ObjectManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxPYmplY3RNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtRQUdZLGFBQVEsR0FBUSxFQUFFLENBQUM7SUFzRS9CLENBQUM7SUFwRWlCLHlCQUFXLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDMUI7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVhLDZCQUFlLEdBQTdCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDMUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVPLDZCQUFLLEdBQWI7SUFFQSxDQUFDO0lBRU8sZ0NBQVEsR0FBaEI7SUFFQSxDQUFDO0lBRVksNkNBQXFCLEdBQWxDLFVBQW1DLElBQVksRUFBRSxRQUFxQjtRQUFyQix5QkFBQSxFQUFBLGFBQXFCO3VDQUFHLE9BQU87OztnQkFDNUUsc0JBQU8sSUFBSSxPQUFPLENBQVksVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDMUMsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUVyQixPQUFPLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUM3QixPQUFPO3lCQUNWO3dCQUNELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUN2RCxJQUFJLENBQUMsTUFBTSxFQUFFOzRCQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDZCxPQUFPO3lCQUNWO3dCQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTs0QkFDckMsSUFBSSxHQUFHLEVBQUU7Z0NBQ0wsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQ0FDakMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNkLE9BQU87NkJBQ1Y7NEJBQ0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7NEJBQzdCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQTs0QkFDZixPQUFPLENBQUMsTUFBbUIsQ0FBQyxDQUFDO3dCQUNqQyxDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUMsRUFBQzs7O0tBQ047SUFFWSx1Q0FBZSxHQUE1QixVQUE2QixJQUFZLEVBQUUsUUFBcUI7UUFBckIseUJBQUEsRUFBQSxhQUFxQjt1Q0FBRyxPQUFPOzs7Z0JBQ3RFLHNCQUFPLElBQUksT0FBTyxDQUFZLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQzFDLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFFckIsT0FBTyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDN0IsT0FBTzt5QkFDVjt3QkFDRCxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNOzRCQUMzQyxJQUFJLEdBQUcsRUFBRTtnQ0FDTCxFQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dDQUNqQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ2QsT0FBTzs2QkFDVjs0QkFDRCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQzs0QkFDN0IsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFBOzRCQUNmLE9BQU8sQ0FBQyxNQUFtQixDQUFDLENBQUM7d0JBQ2pDLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxFQUFDOzs7S0FDTjtJQXRFYyx1QkFBUyxHQUFrQixJQUFJLENBQUM7SUF1RW5ELG9CQUFDO0NBekVELEFBeUVDLElBQUE7a0JBekVvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdE1hbmFnZXIge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBPYmplY3RNYW5hZ2VyID0gbnVsbDtcbiAgICBwcml2YXRlIF9wcmVmYWJzOiBhbnkgPSB7fTtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IE9iamVjdE1hbmFnZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLl9pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGVzdHJveUluc3RhbmNlKCkge1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLl9kZXN0cm95KCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5faW5zdGFuY2U7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0KCkge1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVzdHJveSgpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRCdW5kbGVPYmplY3RQcmVmYWIocGF0aDogc3RyaW5nLCBzdXBlcmlvcjogc3RyaW5nID0gXCJcIik6IFByb21pc2U8Y2MuUHJlZmFiPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxjYy5QcmVmYWI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wcmVmYWJzW3BhdGhdKSB7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3ByZWZhYnNbcGF0aF0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBidW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKFwiUGxheWVyRWZmZWN0XCIpO1xuICAgICAgICAgICAgaWYgKCFidW5kbGUpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1bmRsZS5sb2FkKHBhdGgsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJnZXRPYmplY3ROb2RlIGVyclwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3ByZWZhYnNbcGF0aF0gPSBwcmVmYWI7XG4gICAgICAgICAgICAgICAgcHJlZmFiLmFkZFJlZigpXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwcmVmYWIgYXMgY2MuUHJlZmFiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0T2JqZWN0UHJlZmFiKHBhdGg6IHN0cmluZywgc3VwZXJpb3I6IHN0cmluZyA9IFwiXCIpOiBQcm9taXNlPGNjLlByZWZhYj4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Y2MuUHJlZmFiPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcHJlZmFic1twYXRoXSkge1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9wcmVmYWJzW3BhdGhdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiZ2V0T2JqZWN0Tm9kZSBlcnJcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVmYWJzW3BhdGhdID0gcHJlZmFiO1xuICAgICAgICAgICAgICAgIHByZWZhYi5hZGRSZWYoKVxuICAgICAgICAgICAgICAgIHJlc29sdmUocHJlZmFiIGFzIGNjLlByZWZhYik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/GameEventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad503niRTxHQLy5D4KTS+bv', 'GameEventManager');
// Script/Manager/GameEventManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameEventManager = /** @class */ (function () {
    function GameEventManager() {
        this._eventListeners = [];
    }
    //---------------------------------
    GameEventManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new GameEventManager();
        }
        return this._instance;
    };
    GameEventManager.prototype.pushNodeEvent = function (obj) {
        this._eventListeners.push(obj);
    };
    GameEventManager.prototype.removeNodeEvent = function (obj) {
        for (var index = 0; index < this._eventListeners.length; index++) {
            if (this._eventListeners[index] == obj) {
                this._eventListeners.splice(index, 1);
                return;
            }
        }
    };
    GameEventManager.prototype.dispathcGameEvent = function (eventId, data) {
        if (data === void 0) { data = null; }
        for (var index = 0; index < this._eventListeners.length; index++) {
            var element = this._eventListeners[index];
            if (element && element.isValid) {
                element.onDispathcGameEvent(eventId, data);
            }
        }
    };
    GameEventManager._instance = null;
    return GameEventManager;
}());
exports.default = GameEventManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxHYW1lRXZlbnRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtRQUVZLG9CQUFlLEdBQXVCLEVBQUUsQ0FBQTtJQWdDcEQsQ0FBQztJQTlCRyxtQ0FBbUM7SUFDckIsNEJBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsd0NBQWEsR0FBYixVQUFjLEdBQU87UUFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDBDQUFlLEdBQWYsVUFBZ0IsR0FBTztRQUNuQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDOUQsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPO2FBQ1Y7U0FDSjtJQUNMLENBQUM7SUFFRCw0Q0FBaUIsR0FBakIsVUFBa0IsT0FBTyxFQUFFLElBQWU7UUFBZixxQkFBQSxFQUFBLFdBQWU7UUFDdEMsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzlELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzthQUM5QztTQUNKO0lBQ0wsQ0FBQztJQS9CYywwQkFBUyxHQUFvQixJQUFJLENBQUM7SUFpQ3JELHVCQUFDO0NBbENELEFBa0NDLElBQUE7a0JBbENvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUJhc2VFdmVudE5vZGUgZnJvbSBcIi4uL0Jhc2UvR2FtZUJhc2VFdmVudE5vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUV2ZW50TWFuYWdlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOkdhbWVFdmVudE1hbmFnZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2V2ZW50TGlzdGVuZXJzOkdhbWVCYXNlRXZlbnROb2RlW10gPSBbXVxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBHYW1lRXZlbnRNYW5hZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIHB1c2hOb2RlRXZlbnQob2JqOmFueSkge1xuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVycy5wdXNoKG9iaik7XG4gICAgfVxuXG4gICAgcmVtb3ZlTm9kZUV2ZW50KG9iajphbnkpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2V2ZW50TGlzdGVuZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2V2ZW50TGlzdGVuZXJzW2luZGV4XSA9PSBvYmopIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVycy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGF0aGNHYW1lRXZlbnQoZXZlbnRJZCwgZGF0YTphbnkgPSBudWxsKXtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2V2ZW50TGlzdGVuZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2V2ZW50TGlzdGVuZXJzW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQub25EaXNwYXRoY0dhbWVFdmVudChldmVudElkLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIManager/OtherGameMain/OtherGameBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7091L4bKRNNogCVZxoSkoF', 'OtherGameBtn');
// Script/UIManager/OtherGameMain/OtherGameBtn.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SdkCtrl_1 = require("../../Ctrl/SdkCtrl");
var GameUtils_1 = require("../../GameUtils/GameUtils");
var GameData_1 = require("../../Other/GameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OtherGameBtn = /** @class */ (function (_super) {
    __extends(OtherGameBtn, _super);
    function OtherGameBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAnim = false;
        _this.firstAnimTime = 1;
        _this.animTime = 5;
        _this.appid = 'wxce315238fc57bc91';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    OtherGameBtn.prototype.start = function () {
        var _this = this;
        GameUtils_1.default.getInstance().setVisible(this.node, false);
        var pingtai = GameData_1.default.getPlatform();
        switch (pingtai) {
            case GameData_1.Platform.wx:
                {
                    GameUtils_1.default.getInstance().setVisible(this.node, true);
                    if (this.isAnim) {
                        this.schedule(function () {
                            _this.anim();
                        }, this.animTime, this.firstAnimTime);
                    }
                }
                break;
        }
    };
    OtherGameBtn.prototype.anim = function () {
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node)
            .to(0.15, { angle: -30 })
            .to(0.3, { angle: 30 })
            .to(0.15, { angle: 0 })
            .start();
    };
    OtherGameBtn.prototype.onClickGoGame = function () {
        SdkCtrl_1.default.getInstance().navigateToMiniProgram(this.appid);
    };
    __decorate([
        property()
    ], OtherGameBtn.prototype, "isAnim", void 0);
    __decorate([
        property()
    ], OtherGameBtn.prototype, "firstAnimTime", void 0);
    __decorate([
        property()
    ], OtherGameBtn.prototype, "animTime", void 0);
    __decorate([
        property
    ], OtherGameBtn.prototype, "appid", void 0);
    OtherGameBtn = __decorate([
        ccclass
    ], OtherGameBtn);
    return OtherGameBtn;
}(cc.Component));
exports.default = OtherGameBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVSU1hbmFnZXJcXE90aGVyR2FtZU1haW5cXE90aGVyR2FtZUJ0bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUM7QUFDekMsdURBQWtEO0FBQ2xELGlEQUEwRDtBQUlwRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQTJDQztRQXZDRyxZQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTFCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFFckIsV0FBSyxHQUFXLG9CQUFvQixDQUFDOztJQWlDekMsQ0FBQztJQS9CRyx3QkFBd0I7SUFFeEIsNEJBQUssR0FBTDtRQUFBLGlCQWVDO1FBZEcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNwRCxJQUFJLE9BQU8sR0FBRyxrQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3BDLFFBQVEsT0FBTyxFQUFFO1lBQ2IsS0FBSyxtQkFBUSxDQUFDLEVBQUU7Z0JBQ1o7b0JBQ0ksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtvQkFDbkQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO3dCQUNiLElBQUksQ0FBQyxRQUFRLENBQUM7NEJBQ1YsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUNoQixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7cUJBQ3hDO2lCQUNKO2dCQUNELE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ25DLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUN4QixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ3RCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDdEIsS0FBSyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDSSxpQkFBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0lBdENEO1FBREMsUUFBUSxFQUFFO2dEQUNhO0lBRXhCO1FBREMsUUFBUSxFQUFFO3VEQUNlO0lBRTFCO1FBREMsUUFBUSxFQUFFO2tEQUNVO0lBRXJCO1FBREMsUUFBUTsrQ0FDNEI7SUFWcEIsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTJDaEM7SUFBRCxtQkFBQztDQTNDRCxBQTJDQyxDQTNDeUMsRUFBRSxDQUFDLFNBQVMsR0EyQ3JEO2tCQTNDb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZGtDdHJsIGZyb20gXCIuLi8uLi9DdHJsL1Nka0N0cmxcIjtcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSBcIi4uLy4uL0dhbWVVdGlscy9HYW1lVXRpbHNcIjtcbmltcG9ydCBHYW1lRGF0YSwgeyBQbGF0Zm9ybSB9IGZyb20gXCIuLi8uLi9PdGhlci9HYW1lRGF0YVwiO1xuXG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE90aGVyR2FtZUJ0biBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIEBwcm9wZXJ0eSgpXG4gICAgaXNBbmltOiBib29sZWFuID0gZmFsc2U7XG4gICAgQHByb3BlcnR5KClcbiAgICBmaXJzdEFuaW1UaW1lOiBudW1iZXIgPSAxO1xuICAgIEBwcm9wZXJ0eSgpXG4gICAgYW5pbVRpbWU6IG51bWJlciA9IDU7XG4gICAgQHByb3BlcnR5XG4gICAgYXBwaWQ6IHN0cmluZyA9ICd3eGNlMzE1MjM4ZmM1N2JjOTEnO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgR2FtZVV0aWxzLmdldEluc3RhbmNlKCkuc2V0VmlzaWJsZSh0aGlzLm5vZGUsIGZhbHNlKVxuICAgICAgICBsZXQgcGluZ3RhaSA9IEdhbWVEYXRhLmdldFBsYXRmb3JtKClcbiAgICAgICAgc3dpdGNoIChwaW5ndGFpKSB7XG4gICAgICAgICAgICBjYXNlIFBsYXRmb3JtLnd4OlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgR2FtZVV0aWxzLmdldEluc3RhbmNlKCkuc2V0VmlzaWJsZSh0aGlzLm5vZGUsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQW5pbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLmFuaW1UaW1lLCB0aGlzLmZpcnN0QW5pbVRpbWUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmltKCkge1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5ub2RlKVxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAudG8oMC4xNSwgeyBhbmdsZTogLTMwIH0pXG4gICAgICAgICAgICAudG8oMC4zLCB7IGFuZ2xlOiAzMCB9KVxuICAgICAgICAgICAgLnRvKDAuMTUsIHsgYW5nbGU6IDAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpXG4gICAgfVxuXG4gICAgb25DbGlja0dvR2FtZSgpIHtcbiAgICAgICAgU2RrQ3RybC5nZXRJbnN0YW5jZSgpLm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSh0aGlzLmFwcGlkKVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Base/UIParent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4db13XOj9VF94iGMZa9+aJ2', 'UIParent');
// Script/Base/UIParent.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameBaseEventNode_1 = require("../Base/GameBaseEventNode");
var GameEventManager_1 = require("../Manager/GameEventManager");
var GameData_1 = require("../Other/GameData");
var SoundMgr_1 = require("../Other/SoundMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIParent = /** @class */ (function (_super) {
    __extends(UIParent, _super);
    function UIParent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uiAnimObj = null;
        _this.isShowWinAudio = true;
        _this.firstOpenUI = true;
        _this.widData = null;
        _this.isWinAnim = false;
        return _this;
    }
    //进度条加载完初始化
    UIParent.prototype.InitUI = function (uiMain) {
        this.uiManager = uiMain;
        GameEventManager_1.default.getInstance().pushNodeEvent(this);
        if (this.uiAnimObj) {
            this.uiAnimObj.scale = GameData_1.default.sizeType;
        }
        var widget = this.node.getComponent(cc.Widget);
        if (widget) {
            widget.top = 0;
            widget.bottom = 0;
            widget.left = 0;
            widget.right = 0;
        }
    };
    //打开界面
    UIParent.prototype.ShowUI = function (data, fun) {
        var _this = this;
        if (data === void 0) { data = null; }
        if (fun === void 0) { fun = function () { }; }
        this.widData = data;
        if (this.uiAnimObj) {
            if (!this.isWinAnim) {
                this.isWinAnim = true;
                this.uiAnimObj.scale = 0;
                cc.Tween.stopAllByTarget(this.uiAnimObj);
                cc.tween(this.uiAnimObj)
                    .to(0.25, { scale: GameData_1.default.sizeType + 0.2 })
                    .to(0.15, { scale: GameData_1.default.sizeType - 0.1 })
                    .to(0.1, { scale: GameData_1.default.sizeType })
                    .call(function () {
                    _this.isWinAnim = false;
                    fun();
                })
                    .start();
            }
        }
        this.node.active = true;
        if (this.firstOpenUI) {
            this.firstOpenUI = false;
            this.FirstOpen();
        }
        this.UpdataFXData();
        SoundMgr_1.default.getInstance().playFx("win_open");
    };
    //隐藏界面
    UIParent.prototype.HideUI = function (fun) {
        var _this = this;
        if (fun === void 0) { fun = function () { }; }
        if (this.uiAnimObj) {
            if (!this.isWinAnim) {
                this.isWinAnim = true;
                cc.Tween.stopAllByTarget(this.uiAnimObj);
                cc.tween(this.uiAnimObj)
                    .to(0.1, { scale: GameData_1.default.sizeType + 0.2 })
                    .to(0.25, { scale: 0 })
                    .call(function () {
                    _this.isWinAnim = false;
                    _this.node.active = false;
                    if (fun) {
                        fun();
                    }
                })
                    .start();
            }
        }
        else {
            this.node.active = false;
            if (fun) {
                fun();
            }
        }
        SoundMgr_1.default.getInstance().playFx("win_close");
    };
    UIParent.prototype.onClickClose = function () {
        this.HideUI();
    };
    //第一次打开界面
    UIParent.prototype.FirstOpen = function () { };
    //FX成功调用一次
    UIParent.prototype.FxSuccess = function () { };
    //打开界面更新返现数据
    UIParent.prototype.UpdataFXData = function () { };
    UIParent.prototype.sendEvent = function (eventId, data) {
        if (data === void 0) { data = null; }
        GameEventManager_1.default.getInstance().dispathcGameEvent(eventId, data);
    };
    UIParent.prototype.onDispathcGameEvent = function (eventId, eventData) {
        if (_super.prototype.onDispathcGameEvent) {
            _super.prototype.onDispathcGameEvent.call(this, eventId, eventData);
        }
    };
    __decorate([
        property(cc.Node)
    ], UIParent.prototype, "uiAnimObj", void 0);
    __decorate([
        property
    ], UIParent.prototype, "isShowWinAudio", void 0);
    UIParent = __decorate([
        ccclass
    ], UIParent);
    return UIParent;
}(GameBaseEventNode_1.default));
exports.default = UIParent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlXFxVSVBhcmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFFMUQsZ0VBQTJEO0FBRTNELDhDQUF5QztBQUN6Qyw4Q0FBeUM7QUFFbkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQWlCO0lBQXZEO1FBQUEscUVBeUdDO1FBdEdHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsYUFBTyxHQUFRLElBQUksQ0FBQTtRQUNuQixlQUFTLEdBQVksS0FBSyxDQUFBOztJQStGOUIsQ0FBQztJQTdGRyxXQUFXO0lBQ1gseUJBQU0sR0FBTixVQUFPLE1BQU07UUFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QiwwQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLGtCQUFRLENBQUMsUUFBUSxDQUFBO1NBQzNDO1FBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzlDLElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUE7WUFDZCxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtZQUNqQixNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQTtZQUNmLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1NBQ25CO0lBQ0wsQ0FBQztJ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LEdBQVo7UUFDSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFNBQVM7SUFDVCw0QkFBUyxHQUFULGNBQWMsQ0FBQztJQUVmLFVBQVU7SUFDViw0QkFBUyxHQUFULGNBQWMsQ0FBQztJQUVmLFlBQVk7SUFDWiwrQkFBWSxHQUFaLGNBQWlCLENBQUM7SUFFbEIsNEJBQVMsR0FBVCxVQUFVLE9BQU8sRUFBRSxJQUFnQjtRQUFoQixxQkFBQSxFQUFBLFdBQWdCO1FBQy9CLDBCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsc0NBQW1CLEdBQW5CLFVBQW9CLE9BQWtCLEVBQUUsU0FBYztRQUNsRCxJQUFJLGlCQUFNLG1CQUFtQixFQUFFO1lBQzNCLGlCQUFNLG1CQUFtQixZQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNqRDtJQUNMLENBQUM7SUFyR0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVE7b0RBQ3NCO0lBTGQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXlHNUI7SUFBRCxlQUFDO0NBekdELEFBeUdDLENBekdxQywyQkFBaUIsR0F5R3REO2tCQXpHb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lQmFzZUV2ZW50Tm9kZSBmcm9tIFwiLi4vQmFzZS9HYW1lQmFzZUV2ZW50Tm9kZVwiO1xuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4uL0NvbmZpZy9HYW1lRXZlbnRDb25maWdcIjtcbmltcG9ydCBHYW1lRXZlbnRNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL0dhbWVFdmVudE1hbmFnZXJcIjtcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvVUlNYW5hZ2VyXCI7XG5pbXBvcnQgR2FtZURhdGEgZnJvbSBcIi4uL090aGVyL0dhbWVEYXRhXCI7XG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL090aGVyL1NvdW5kTWdyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVBhcmVudCBleHRlbmRzIEdhbWVCYXNlRXZlbnROb2RlIHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVpQW5pbU9iajogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5XG4gICAgaXNTaG93V2luQXVkaW86IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgdWlNYW5hZ2VyOiBVSU1hbmFnZXI7XG4gICAgZmlyc3RPcGVuVUk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHdpZERhdGE6IGFueSA9IG51bGxcbiAgICBpc1dpbkFuaW06IGJvb2xlYW4gPSBmYWxzZVxuXG4gICAgLy/ov5vluqbmnaHliqDovb3lrozliJ3lp4vljJZcbiAgICBJbml0VUkodWlNYWluKSB7XG4gICAgICAgIHRoaXMudWlNYW5hZ2VyID0gdWlNYWluO1xuICAgICAgICBHYW1lRXZlbnRNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaE5vZGVFdmVudCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMudWlBbmltT2JqKSB7XG4gICAgICAgICAgICB0aGlzLnVpQW5pbU9iai5zY2FsZSA9IEdhbWVEYXRhLnNpemVUeXBlXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHdpZGdldCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KVxuICAgICAgICBpZiAod2lkZ2V0KSB7XG4gICAgICAgICAgICB3aWRnZXQudG9wID0gMFxuICAgICAgICAgICAgd2lkZ2V0LmJvdHRvbSA9IDBcbiAgICAgICAgICAgIHdpZGdldC5sZWZ0ID0gMFxuICAgICAgICAgICAgd2lkZ2V0LnJpZ2h0ID0gMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgIC8v5omT5byA55WM6Z2iXG4gICAgIFNob3dVSShkYXRhOiBhbnkgPSBudWxsLCBmdW4gPSAoKSA9PiB7IH0pIHtcbiAgICAgICAgdGhpcy53aWREYXRhID0gZGF0YVxuICAgICAgICBpZiAodGhpcy51aUFuaW1PYmopIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1dpbkFuaW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzV2luQW5pbSA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLnVpQW5pbU9iai5zY2FsZSA9IDA7XG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMudWlBbmltT2JqKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMudWlBbmltT2JqKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yNSwgeyBzY2FsZTogR2FtZURhdGEuc2l6ZVR5cGUgKyAwLjIgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMTUsIHsgc2NhbGU6IEdhbWVEYXRhLnNpemVUeXBlIC0gMC4xIH0pXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IEdhbWVEYXRhLnNpemVUeXBlIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNXaW5BbmltID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bigpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RPcGVuVUkpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RPcGVuVUkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuRmlyc3RPcGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5VcGRhdGFGWERhdGEoKTtcbiAgICAgICAgU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5RngoXCJ3aW5fb3BlblwiKVxuICAgIH1cblxuICAgIC8v6ZqQ6JeP55WM6Z2iXG4gICAgSGlkZVVJKGZ1biA9ICgpID0+IHsgfSkge1xuICAgICAgICBpZiAodGhpcy51aUFuaW1PYmopIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1dpbkFuaW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzV2luQW5pbSA9IHRydWVcbiAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy51aUFuaW1PYmopXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy51aUFuaW1PYmopXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IEdhbWVEYXRhLnNpemVUeXBlICsgMC4yIH0pXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjI1LCB7IHNjYWxlOiAwIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNXaW5BbmltID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmdW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoZnVuKSB7XG4gICAgICAgICAgICAgICAgZnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5RngoXCJ3aW5fY2xvc2VcIik7XG4gICAgfVxuXG4gICAgb25DbGlja0Nsb3NlKCkge1xuICAgICAgICB0aGlzLkhpZGVVSSgpO1xuICAgIH1cblxuICAgIC8v56ys5LiA5qyh5omT5byA55WM6Z2iXG4gICAgRmlyc3RPcGVuKCkgeyB9XG5cbiAgICAvL0ZY5oiQ5Yqf6LCD55So5LiA5qyhXG4gICAgRnhTdWNjZXNzKCkgeyB9XG5cbiAgICAvL+aJk+W8gOeVjOmdouabtOaWsOi/lOeOsOaVsOaNrlxuICAgIFVwZGF0YUZYRGF0YSgpIHsgfVxuXG4gICAgc2VuZEV2ZW50KGV2ZW50SWQsIGRhdGE6IGFueSA9IG51bGwpIHtcbiAgICAgICAgR2FtZUV2ZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpLmRpc3BhdGhjR2FtZUV2ZW50KGV2ZW50SWQsIGRhdGEpO1xuICAgIH1cblxuICAgIG9uRGlzcGF0aGNHYW1lRXZlbnQoZXZlbnRJZDogR2FtZUV2ZW50LCBldmVudERhdGE6IGFueSkge1xuICAgICAgICBpZiAoc3VwZXIub25EaXNwYXRoY0dhbWVFdmVudCkge1xuICAgICAgICAgICAgc3VwZXIub25EaXNwYXRoY0dhbWVFdmVudChldmVudElkLCBldmVudERhdGEpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIManager/TipMain/TipText.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b89fM4RhVChpt4CA1l8LDb', 'TipText');
// Script/UIManager/TipMain/TipText.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../GameUtils/GameUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TipText = /** @class */ (function (_super) {
    __extends(TipText, _super);
    function TipText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipText = null;
        return _this;
    }
    TipText.prototype.Init = function (value, fun) {
        if (fun === void 0) { fun = function () { }; }
        GameUtils_1.default.getInstance().setString(this.tipText, value);
        // let y = this.node.y + 150;
        // cc.tween(this.node)
        //     .delay(0.5)
        //     .to(1, { y: y })
        //     .delay(1)
        //     .to(1, { opacity: 0 })
        //     .call(() => {
        //         fun();
        //         this.node.destroy();
        //     })
        //     .start()
    };
    TipText.prototype.hideItem = function () {
        this.node.destroy();
    };
    __decorate([
        property(cc.Label)
    ], TipText.prototype, "tipText", void 0);
    TipText = __decorate([
        ccclass
    ], TipText);
    return TipText;
}(cc.Component));
exports.default = TipText;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVSU1hbmFnZXJcXFRpcE1haW5cXFRpcFRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBdUJDO1FBcEJHLGFBQU8sR0FBYSxJQUFJLENBQUM7O0lBb0I3QixDQUFDO0lBbEJHLHNCQUFJLEdBQUosVUFBSyxLQUFhLEVBQUUsR0FBZTtRQUFmLG9CQUFBLEVBQUEsb0JBQWMsQ0FBQztRQUMvQixtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3RELDZCQUE2QjtRQUM3QixzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsNkJBQTZCO1FBQzdCLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsK0JBQStCO1FBQy9CLFNBQVM7UUFDVCxlQUFlO0lBQ25CLENBQUM7SUFFRCwwQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBbkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ007SUFIUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBdUIzQjtJQUFELGNBQUM7Q0F2QkQsQUF1QkMsQ0F2Qm9DLEVBQUUsQ0FBQyxTQUFTLEdBdUJoRDtrQkF2Qm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVV0aWxzIGZyb20gXCIuLi8uLi9HYW1lVXRpbHMvR2FtZVV0aWxzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXBUZXh0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0aXBUZXh0OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBJbml0KHZhbHVlOiBzdHJpbmcsIGZ1biA9ICgpID0+IHsgfSkge1xuICAgICAgICBHYW1lVXRpbHMuZ2V0SW5zdGFuY2UoKS5zZXRTdHJpbmcodGhpcy50aXBUZXh0LCB2YWx1ZSlcbiAgICAgICAgLy8gbGV0IHkgPSB0aGlzLm5vZGUueSArIDE1MDtcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAvLyAgICAgLmRlbGF5KDAuNSlcbiAgICAgICAgLy8gICAgIC50bygxLCB7IHk6IHkgfSlcbiAgICAgICAgLy8gICAgIC5kZWxheSgxKVxuICAgICAgICAvLyAgICAgLnRvKDEsIHsgb3BhY2l0eTogMCB9KVxuICAgICAgICAvLyAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGZ1bigpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyAgICAgLnN0YXJ0KClcbiAgICB9XG5cbiAgICBoaWRlSXRlbSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
