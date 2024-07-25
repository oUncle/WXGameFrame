
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