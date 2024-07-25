"use strict";
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