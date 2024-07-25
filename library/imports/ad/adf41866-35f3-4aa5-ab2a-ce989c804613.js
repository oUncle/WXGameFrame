"use strict";
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