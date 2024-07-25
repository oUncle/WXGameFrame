"use strict";
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