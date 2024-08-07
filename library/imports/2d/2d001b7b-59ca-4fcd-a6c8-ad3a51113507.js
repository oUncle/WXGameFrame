"use strict";
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