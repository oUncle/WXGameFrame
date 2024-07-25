
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