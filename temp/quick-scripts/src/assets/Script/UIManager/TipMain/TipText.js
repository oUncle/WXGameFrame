"use strict";
cc._RF.push(module, '3b89fM4RhVChpt4CA1l8LDb', 'TipText');
// Script/UIManager/TipMain/TipText.ts

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
var GameUtils_1 = require("../../GameUtils/GameUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TipText = /** @class */ (function (_super) {
    __extends(TipText, _super);
    function TipText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipText = null;
        return _this;
    }
    TipText.prototype.Init = function (value, fun) {
        if (fun === void 0) { fun = function () { }; }
        GameUtils_1.default.getInstance().setString(this.tipText, value);
        // let y = this.node.y + 150;
        // cc.tween(this.node)
        //     .delay(0.5)
        //     .to(1, { y: y })
        //     .delay(1)
        //     .to(1, { opacity: 0 })
        //     .call(() => {
        //         fun();
        //         this.node.destroy();
        //     })
        //     .start()
    };
    TipText.prototype.hideItem = function () {
        this.node.destroy();
    };
    __decorate([
        property(cc.Label)
    ], TipText.prototype, "tipText", void 0);
    TipText = __decorate([
        ccclass
    ], TipText);
    return TipText;
}(cc.Component));
exports.default = TipText;

cc._RF.pop();