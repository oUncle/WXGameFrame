"use strict";
cc._RF.push(module, '54a61mtIb1CGZcbjHf0iQPA', 'TipMain');
// Script/UIManager/TipMain/TipMain.ts

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
var TipText_1 = require("./TipText");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TipMain = /** @class */ (function (_super) {
    __extends(TipMain, _super);
    function TipMain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipViewItem = null;
        _this.tipItemParent = null;
        // LIFE-CYCLE CALLBACKS:
        _this._tip = [];
        _this._moveSpeed = 120;
        _this._staticTime = 0.35; //tip滞留时间
        _this._endY = 150; //tip结束位置Y
        _this._count = 4; //tip最多持有数量
        _this._positionY = [];
        _this._isInitData = false;
        return _this;
    }
    TipMain.prototype.ShowUI = function (data, fun) {
        if (!this._isInitData) {
            this._isInitData = true;
            // this._endY = (this._count - 1) * this.tipViewItem.height
            for (var i = 0; i < this._count; i++) {
                // let drc = ConfigManager.getInstance().getDesignResoulutionInfo();
                // table.insert(positionY, display.center.y + (i-1)*tipNode:getContentSize().height * CC_DESIGN_RESOLUTION.scale)
                this._positionY[i] = i * this.tipViewItem.getContentSize().height; //* drc.uiScale
            }
        }
        // this.setBlockInputEventEnable(false);
        // this.showBackMask(false);
        GameUtils_1.default.getInstance().setVisible(this.tipViewItem, false);
        GameUtils_1.default.getInstance().setVisible(this.node, true);
        this.createTipView(data);
    };
    TipMain.prototype._unrealOnDisable = function () {
        this.tipItemParent.removeAllChildren();
        this._tip = [];
    };
    TipMain.prototype.createTipView = function (tipContent) {
        var _this = this;
        var itemNode = this.tipViewItem;
        var item = cc.instantiate(itemNode);
        this.tipItemParent.addChild(item);
        GameUtils_1.default.getInstance().setVisible(item, true);
        var sItem = item.getComponent(TipText_1.default);
        sItem.Init(tipContent);
        // if (this._tip.length > 4) {
        //     this._tip[0].tipItem.hideItem();
        //     this._tip.shift();
        //     this.checkCloseWindow();
        // }
        this._tip.push({
            time: 0,
            tipItem: sItem,
            fadeout: false
        });
        // this._tip[this._tip.length] = {
        //     time: 0,
        //     tipItem: sItem,
        //     fadeout: false
        // }
        sItem.scheduleOnce(function () {
            _this._tip.shift();
            sItem.hideItem();
            _this.checkCloseWindow();
        }, 2);
        //this.updateItemPos();
    };
    TipMain.prototype.update = function (dt) {
        if (this._tip.length <= 0) {
            return;
        }
        var numY = 0;
        // let drc = ConfigManager.getInstance().getDesignResoulutionInfo();
        var numYIndex = 0;
        for (var i = this._tip.length - 1; i >= 0; i--) {
            if (numYIndex < this._count) {
                numY += (numYIndex == 0) ? 0 : (this._tip[i].tipItem.node.height / 2 + this._tip[i + 1].tipItem.node.height / 2); //* drc.uiScale
                this._positionY[numYIndex] = numY;
                numYIndex++;
            }
        }
        for (var index = 0; index < this._count; index++) {
            if (!this._tip[index]) {
                numY += this.tipViewItem.getContentSize().height; //* drc.uiScale
                this._positionY[index] = numY;
            }
        }
        this._endY = this._positionY[this._positionY.length - 1];
        for (var index = 0; index < this._tip.length; index++) {
            var index_2 = this._tip.length - index - 1;
            if (index_2 >= this._count - 1) {
                index_2 = this._count - 1;
            }
            var tipData = this._tip[index];
            tipData.time = tipData.time + dt;
            if (index_2 != -1) {
                if (index_2 < this._count && tipData.tipItem.node.y <= this._positionY[index_2]) {
                    tipData.tipItem.node.y = this._positionY[index_2];
                }
            }
            if (tipData.time >= this._staticTime) {
                //this._tip[i].tipItem.node.y += this._moveSpeed * dt;
                var y = tipData.tipItem.node.y;
                var v = Math.abs((this._positionY[2] - y) / (1 - tipData.time));
                tipData.tipItem.node.y += v * dt;
                if (tipData.tipItem.node.y > this._endY) {
                    tipData.tipItem.node.y = this._endY;
                }
                if (!tipData.fadeout) {
                    tipData.fadeout = true;
                    var time = 0.7 - ((index_2 + 1) * 0.1);
                    cc.Tween.stopAllByTarget(tipData.tipItem.node);
                    cc.tween(tipData.tipItem.node).to(time, { opacity: 0 }).start();
                }
            }
            // if (tipData.time>=2) {
            //     tipData.tipItem.hideItem();
            //     this._tip.shift();
            //     this.checkCloseWindow();
            // }
        }
    };
    TipMain.prototype.updateItemPos = function () {
        for (var i = this._tip.length - 1; i > 0; i--) {
            var nextItem = this._tip[i - 1].tipItem.node;
            var thisItem = this._tip[i].tipItem.node;
            if (nextItem.y - thisItem.y < thisItem.height) {
                nextItem.y = thisItem.y + thisItem.height;
                if (nextItem.y > this._endY) {
                    nextItem.y = this._endY;
                }
            }
        }
    };
    // closeWinodw(isNow: boolean = false) {
    //     // GameUtils.getInstance().setVisible(this.node, false);
    //     if (isNow) {
    //         this.node.destroy();
    //     } else {
    //         this.unrealCloseWindow();
    //     }
    // }
    TipMain.prototype.checkCloseWindow = function () {
        if (this._tip.length == 0) {
            // this.closeWinodw();
            // this.unrealCloseWindow();
            this.HideUI();
        }
    };
    __decorate([
        property(cc.Node)
    ], TipMain.prototype, "tipViewItem", void 0);
    __decorate([
        property(cc.Node)
    ], TipMain.prototype, "tipItemParent", void 0);
    TipMain = __decorate([
        ccclass
    ], TipMain);
    return TipMain;
}(UIParent_1.default));
exports.default = TipMain;

cc._RF.pop();