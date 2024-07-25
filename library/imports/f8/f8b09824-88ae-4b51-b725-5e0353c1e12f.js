"use strict";
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