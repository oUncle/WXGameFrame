
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Base/UIParent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4db13XOj9VF94iGMZa9+aJ2', 'UIParent');
// Script/Base/UIParent.ts

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
var GameBaseEventNode_1 = require("../Base/GameBaseEventNode");
var GameEventManager_1 = require("../Manager/GameEventManager");
var GameData_1 = require("../Other/GameData");
var SoundMgr_1 = require("../Other/SoundMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIParent = /** @class */ (function (_super) {
    __extends(UIParent, _super);
    function UIParent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uiAnimObj = null;
        _this.isShowWinAudio = true;
        _this.firstOpenUI = true;
        _this.widData = null;
        _this.isWinAnim = false;
        return _this;
    }
    //进度条加载完初始化
    UIParent.prototype.InitUI = function (uiMain) {
        this.uiManager = uiMain;
        GameEventManager_1.default.getInstance().pushNodeEvent(this);
        if (this.uiAnimObj) {
            this.uiAnimObj.scale = GameData_1.default.sizeType;
        }
        var widget = this.node.getComponent(cc.Widget);
        if (widget) {
            widget.top = 0;
            widget.bottom = 0;
            widget.left = 0;
            widget.right = 0;
        }
    };
    //打开界面
    UIParent.prototype.ShowUI = function (data, fun) {
        var _this = this;
        if (data === void 0) { data = null; }
        if (fun === void 0) { fun = function () { }; }
        this.widData = data;
        if (this.uiAnimObj) {
            if (!this.isWinAnim) {
                this.isWinAnim = true;
                this.uiAnimObj.scale = 0;
                cc.Tween.stopAllByTarget(this.uiAnimObj);
                cc.tween(this.uiAnimObj)
                    .to(0.25, { scale: GameData_1.default.sizeType + 0.2 })
                    .to(0.15, { scale: GameData_1.default.sizeType - 0.1 })
                    .to(0.1, { scale: GameData_1.default.sizeType })
                    .call(function () {
                    _this.isWinAnim = false;
                    fun();
                })
                    .start();
            }
        }
        this.node.active = true;
        if (this.firstOpenUI) {
            this.firstOpenUI = false;
            this.FirstOpen();
        }
        this.UpdataFXData();
        SoundMgr_1.default.getInstance().playFx("win_open");
    };
    //隐藏界面
    UIParent.prototype.HideUI = function (fun) {
        var _this = this;
        if (fun === void 0) { fun = function () { }; }
        if (this.uiAnimObj) {
            if (!this.isWinAnim) {
                this.isWinAnim = true;
                cc.Tween.stopAllByTarget(this.uiAnimObj);
                cc.tween(this.uiAnimObj)
                    .to(0.1, { scale: GameData_1.default.sizeType + 0.2 })
                    .to(0.25, { scale: 0 })
                    .call(function () {
                    _this.isWinAnim = false;
                    _this.node.active = false;
                    if (fun) {
                        fun();
                    }
                })
                    .start();
            }
        }
        else {
            this.node.active = false;
            if (fun) {
                fun();
            }
        }
        SoundMgr_1.default.getInstance().playFx("win_close");
    };
    UIParent.prototype.onClickClose = function () {
        this.HideUI();
    };
    //第一次打开界面
    UIParent.prototype.FirstOpen = function () { };
    //FX成功调用一次
    UIParent.prototype.FxSuccess = function () { };
    //打开界面更新返现数据
    UIParent.prototype.UpdataFXData = function () { };
    UIParent.prototype.sendEvent = function (eventId, data) {
        if (data === void 0) { data = null; }
        GameEventManager_1.default.getInstance().dispathcGameEvent(eventId, data);
    };
    UIParent.prototype.onDispathcGameEvent = function (eventId, eventData) {
        if (_super.prototype.onDispathcGameEvent) {
            _super.prototype.onDispathcGameEvent.call(this, eventId, eventData);
        }
    };
    __decorate([
        property(cc.Node)
    ], UIParent.prototype, "uiAnimObj", void 0);
    __decorate([
        property
    ], UIParent.prototype, "isShowWinAudio", void 0);
    UIParent = __decorate([
        ccclass
    ], UIParent);
    return UIParent;
}(GameBaseEventNode_1.default));
exports.default = UIParent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlXFxVSVBhcmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFFMUQsZ0VBQTJEO0FBRTNELDhDQUF5QztBQUN6Qyw4Q0FBeUM7QUFFbkMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQWlCO0lBQXZEO1FBQUEscUVBeUdDO1FBdEdHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsYUFBTyxHQUFRLElBQUksQ0FBQTtRQUNuQixlQUFTLEdBQVksS0FBSyxDQUFBOztJQStGOUIsQ0FBQztJQTdGRyxXQUFXO0lBQ1gseUJBQU0sR0FBTixVQUFPLE1BQU07UUFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QiwwQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLGtCQUFRLENBQUMsUUFBUSxDQUFBO1NBQzNDO1FBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzlDLElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUE7WUFDZCxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtZQUNqQixNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQTtZQUNmLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1NBQ25CO0lBQ0wsQ0FBQztJQUVBLE1BQU07SUFDTix5QkFBTSxHQUFOLFVBQU8sSUFBZ0IsRUFBRSxHQUFlO1FBQXhDLGlCQXlCQTtRQXpCTyxxQkFBQSxFQUFBLFdBQWdCO1FBQUUsb0JBQUEsRUFBQSxvQkFBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1FBQ25CLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7Z0JBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDekIsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUN4QyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7cUJBQ25CLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsa0JBQVEsQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFLENBQUM7cUJBQzVDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsa0JBQVEsQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFLENBQUM7cUJBQzVDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDckMsSUFBSSxDQUFDO29CQUNGLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO29CQUN0QixHQUFHLEVBQUUsQ0FBQztnQkFDVixDQUFDLENBQUM7cUJBQ0QsS0FBSyxFQUFFLENBQUM7YUFDaEI7U0FDSjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLGtCQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFRCxNQUFNO0lBQ04seUJBQU0sR0FBTixVQUFPLEdBQWU7UUFBdEIsaUJBd0JDO1FBeEJNLG9CQUFBLEVBQUEsb0JBQWMsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO2dCQUNyQixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7Z0JBQ3hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztxQkFDbkIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxrQkFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUUsQ0FBQztxQkFDM0MsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztxQkFDdEIsSUFBSSxDQUFDO29CQUNGLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO29CQUN0QixLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQ3pCLElBQUksR0FBRyxFQUFFO3dCQUNMLEdBQUcsRUFBRSxDQUFDO3FCQUNUO2dCQUNMLENBQUMsQ0FBQztxQkFDRCxLQUFLLEVBQUUsQ0FBQzthQUNoQjtTQUNKO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsR0FBRyxFQUFFLENBQUM7YUFDVDtTQUNKO1FBQ0Qsa0JBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFNBQVM7SUFDVCw0QkFBUyxHQUFULGNBQWMsQ0FBQztJQUVmLFVBQVU7SUFDViw0QkFBUyxHQUFULGNBQWMsQ0FBQztJQUVmLFlBQVk7SUFDWiwrQkFBWSxHQUFaLGNBQWlCLENBQUM7SUFFbEIsNEJBQVMsR0FBVCxVQUFVLE9BQU8sRUFBRSxJQUFnQjtRQUFoQixxQkFBQSxFQUFBLFdBQWdCO1FBQy9CLDBCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsc0NBQW1CLEdBQW5CLFVBQW9CLE9BQWtCLEVBQUUsU0FBYztRQUNsRCxJQUFJLGlCQUFNLG1CQUFtQixFQUFFO1lBQzNCLGlCQUFNLG1CQUFtQixZQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNqRDtJQUNMLENBQUM7SUFyR0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVE7b0RBQ3NCO0lBTGQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXlHNUI7SUFBRCxlQUFDO0NBekdELEFBeUdDLENBekdxQywyQkFBaUIsR0F5R3REO2tCQXpHb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lQmFzZUV2ZW50Tm9kZSBmcm9tIFwiLi4vQmFzZS9HYW1lQmFzZUV2ZW50Tm9kZVwiO1xuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4uL0NvbmZpZy9HYW1lRXZlbnRDb25maWdcIjtcbmltcG9ydCBHYW1lRXZlbnRNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL0dhbWVFdmVudE1hbmFnZXJcIjtcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4uL01hbmFnZXIvVUlNYW5hZ2VyXCI7XG5pbXBvcnQgR2FtZURhdGEgZnJvbSBcIi4uL090aGVyL0dhbWVEYXRhXCI7XG5pbXBvcnQgU291bmRNZ3IgZnJvbSBcIi4uL090aGVyL1NvdW5kTWdyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVBhcmVudCBleHRlbmRzIEdhbWVCYXNlRXZlbnROb2RlIHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHVpQW5pbU9iajogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5XG4gICAgaXNTaG93V2luQXVkaW86IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgdWlNYW5hZ2VyOiBVSU1hbmFnZXI7XG4gICAgZmlyc3RPcGVuVUk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHdpZERhdGE6IGFueSA9IG51bGxcbiAgICBpc1dpbkFuaW06IGJvb2xlYW4gPSBmYWxzZVxuXG4gICAgLy/ov5vluqbmnaHliqDovb3lrozliJ3lp4vljJZcbiAgICBJbml0VUkodWlNYWluKSB7XG4gICAgICAgIHRoaXMudWlNYW5hZ2VyID0gdWlNYWluO1xuICAgICAgICBHYW1lRXZlbnRNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaE5vZGVFdmVudCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMudWlBbmltT2JqKSB7XG4gICAgICAgICAgICB0aGlzLnVpQW5pbU9iai5zY2FsZSA9IEdhbWVEYXRhLnNpemVUeXBlXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHdpZGdldCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KVxuICAgICAgICBpZiAod2lkZ2V0KSB7XG4gICAgICAgICAgICB3aWRnZXQudG9wID0gMFxuICAgICAgICAgICAgd2lkZ2V0LmJvdHRvbSA9IDBcbiAgICAgICAgICAgIHdpZGdldC5sZWZ0ID0gMFxuICAgICAgICAgICAgd2lkZ2V0LnJpZ2h0ID0gMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgIC8v5omT5byA55WM6Z2iXG4gICAgIFNob3dVSShkYXRhOiBhbnkgPSBudWxsLCBmdW4gPSAoKSA9PiB7IH0pIHtcbiAgICAgICAgdGhpcy53aWREYXRhID0gZGF0YVxuICAgICAgICBpZiAodGhpcy51aUFuaW1PYmopIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1dpbkFuaW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzV2luQW5pbSA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLnVpQW5pbU9iai5zY2FsZSA9IDA7XG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMudWlBbmltT2JqKVxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMudWlBbmltT2JqKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC4yNSwgeyBzY2FsZTogR2FtZURhdGEuc2l6ZVR5cGUgKyAwLjIgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuMTUsIHsgc2NhbGU6IEdhbWVEYXRhLnNpemVUeXBlIC0gMC4xIH0pXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IEdhbWVEYXRhLnNpemVUeXBlIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNXaW5BbmltID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bigpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RPcGVuVUkpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RPcGVuVUkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuRmlyc3RPcGVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5VcGRhdGFGWERhdGEoKTtcbiAgICAgICAgU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5RngoXCJ3aW5fb3BlblwiKVxuICAgIH1cblxuICAgIC8v6ZqQ6JeP55WM6Z2iXG4gICAgSGlkZVVJKGZ1biA9ICgpID0+IHsgfSkge1xuICAgICAgICBpZiAodGhpcy51aUFuaW1PYmopIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1dpbkFuaW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzV2luQW5pbSA9IHRydWVcbiAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy51aUFuaW1PYmopXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy51aUFuaW1PYmopXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IEdhbWVEYXRhLnNpemVUeXBlICsgMC4yIH0pXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjI1LCB7IHNjYWxlOiAwIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNXaW5BbmltID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmdW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoZnVuKSB7XG4gICAgICAgICAgICAgICAgZnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5RngoXCJ3aW5fY2xvc2VcIik7XG4gICAgfVxuXG4gICAgb25DbGlja0Nsb3NlKCkge1xuICAgICAgICB0aGlzLkhpZGVVSSgpO1xuICAgIH1cblxuICAgIC8v56ys5LiA5qyh5omT5byA55WM6Z2iXG4gICAgRmlyc3RPcGVuKCkgeyB9XG5cbiAgICAvL0ZY5oiQ5Yqf6LCD55So5LiA5qyhXG4gICAgRnhTdWNjZXNzKCkgeyB9XG5cbiAgICAvL+aJk+W8gOeVjOmdouabtOaWsOi/lOeOsOaVsOaNrlxuICAgIFVwZGF0YUZYRGF0YSgpIHsgfVxuXG4gICAgc2VuZEV2ZW50KGV2ZW50SWQsIGRhdGE6IGFueSA9IG51bGwpIHtcbiAgICAgICAgR2FtZUV2ZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpLmRpc3BhdGhjR2FtZUV2ZW50KGV2ZW50SWQsIGRhdGEpO1xuICAgIH1cblxuICAgIG9uRGlzcGF0aGNHYW1lRXZlbnQoZXZlbnRJZDogR2FtZUV2ZW50LCBldmVudERhdGE6IGFueSkge1xuICAgICAgICBpZiAoc3VwZXIub25EaXNwYXRoY0dhbWVFdmVudCkge1xuICAgICAgICAgICAgc3VwZXIub25EaXNwYXRoY0dhbWVFdmVudChldmVudElkLCBldmVudERhdGEpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19