
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIManager/TipMain/TipText.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVSU1hbmFnZXJcXFRpcE1haW5cXFRpcFRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBdUJDO1FBcEJHLGFBQU8sR0FBYSxJQUFJLENBQUM7O0lBb0I3QixDQUFDO0lBbEJHLHNCQUFJLEdBQUosVUFBSyxLQUFhLEVBQUUsR0FBZTtRQUFmLG9CQUFBLEVBQUEsb0JBQWMsQ0FBQztRQUMvQixtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3RELDZCQUE2QjtRQUM3QixzQkFBc0I7UUFDdEIsa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsNkJBQTZCO1FBQzdCLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsK0JBQStCO1FBQy9CLFNBQVM7UUFDVCxlQUFlO0lBQ25CLENBQUM7SUFFRCwwQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBbkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ007SUFIUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBdUIzQjtJQUFELGNBQUM7Q0F2QkQsQUF1QkMsQ0F2Qm9DLEVBQUUsQ0FBQyxTQUFTLEdBdUJoRDtrQkF2Qm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVV0aWxzIGZyb20gXCIuLi8uLi9HYW1lVXRpbHMvR2FtZVV0aWxzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXBUZXh0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0aXBUZXh0OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBJbml0KHZhbHVlOiBzdHJpbmcsIGZ1biA9ICgpID0+IHsgfSkge1xuICAgICAgICBHYW1lVXRpbHMuZ2V0SW5zdGFuY2UoKS5zZXRTdHJpbmcodGhpcy50aXBUZXh0LCB2YWx1ZSlcbiAgICAgICAgLy8gbGV0IHkgPSB0aGlzLm5vZGUueSArIDE1MDtcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAvLyAgICAgLmRlbGF5KDAuNSlcbiAgICAgICAgLy8gICAgIC50bygxLCB7IHk6IHkgfSlcbiAgICAgICAgLy8gICAgIC5kZWxheSgxKVxuICAgICAgICAvLyAgICAgLnRvKDEsIHsgb3BhY2l0eTogMCB9KVxuICAgICAgICAvLyAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGZ1bigpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyAgICAgLnN0YXJ0KClcbiAgICB9XG5cbiAgICBoaWRlSXRlbSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iXX0=