
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