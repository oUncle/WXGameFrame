
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