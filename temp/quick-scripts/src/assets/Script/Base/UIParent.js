"use strict";
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