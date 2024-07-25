
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIManager/TipMain/TipMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVSU1hbmFnZXJcXFRpcE1haW5cXFRpcE1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsZ0RBQTJDO0FBQzNDLHVEQUFrRDtBQUNsRCxxQ0FBZ0M7QUFHMUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVE7SUFBN0M7UUFBQSxxRUFpS0M7UUEvSkcsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsd0JBQXdCO1FBQ2hCLFVBQUksR0FBVSxFQUFFLENBQUM7UUFFakIsZ0JBQVUsR0FBVyxHQUFHLENBQUM7UUFDekIsaUJBQVcsR0FBVyxJQUFJLENBQUMsQ0FBQSxTQUFTO1FBQ3BDLFdBQUssR0FBVyxHQUFHLENBQUMsQ0FBQSxVQUFVO1FBQzlCLFlBQU0sR0FBVyxDQUFDLENBQUMsQ0FBQSxXQUFXO1FBQzlCLGdCQUFVLEdBQWEsRUFBRSxDQUFDO1FBQzFCLGlCQUFXLEdBQVksS0FBSyxDQUFBOztJQWtKeEMsQ0FBQztJQS9JRyx3QkFBTSxHQUFOLFVBQU8sSUFBVSxFQUFFLEdBQWdCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO1lBQ3ZCLDJEQUEyRDtZQUMzRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbEMsb0VBQW9FO2dCQUNwRSxpSEFBaUg7Z0JBQ2pILElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFB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QUFDO2dEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1k7SUFMYixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBaUszQjtJQUFELGNBQUM7Q0FqS0QsQUFpS0MsQ0FqS29DLGtCQUFRLEdBaUs1QztrQkFqS29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IFVJUGFyZW50IGZyb20gXCIuLi8uLi9CYXNlL1VJUGFyZW50XCI7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gXCIuLi8uLi9HYW1lVXRpbHMvR2FtZVV0aWxzXCI7XG5pbXBvcnQgVGlwVGV4dCBmcm9tIFwiLi9UaXBUZXh0XCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpcE1haW4gZXh0ZW5kcyBVSVBhcmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGlwVmlld0l0ZW06IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGlwSXRlbVBhcmVudDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBwcml2YXRlIF90aXA6IGFueVtdID0gW107XG5cbiAgICBwcml2YXRlIF9tb3ZlU3BlZWQ6IG51bWJlciA9IDEyMDtcbiAgICBwcml2YXRlIF9zdGF0aWNUaW1lOiBudW1iZXIgPSAwLjM1Oy8vdGlw5rue55WZ5pe26Ze0XG4gICAgcHJpdmF0ZSBfZW5kWTogbnVtYmVyID0gMTUwOy8vdGlw57uT5p2f5L2N572uWVxuICAgIHByaXZhdGUgX2NvdW50OiBudW1iZXIgPSA0Oy8vdGlw5pyA5aSa5oyB5pyJ5pWw6YePXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25ZOiBudW1iZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgX2lzSW5pdERhdGE6IGJvb2xlYW4gPSBmYWxzZVxuXG5cbiAgICBTaG93VUkoZGF0YT86IGFueSwgZnVuPzogKCkgPT4gdm9pZCkge1xuICAgICAgICBpZiAoIXRoaXMuX2lzSW5pdERhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzSW5pdERhdGEgPSB0cnVlXG4gICAgICAgICAgICAvLyB0aGlzLl9lbmRZID0gKHRoaXMuX2NvdW50IC0gMSkgKiB0aGlzLnRpcFZpZXdJdGVtLmhlaWdodFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IGRyYyA9IENvbmZpZ01hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREZXNpZ25SZXNvdWx1dGlvbkluZm8oKTtcbiAgICAgICAgICAgICAgICAvLyB0YWJsZS5pbnNlcnQocG9zaXRpb25ZLCBkaXNwbGF5LmNlbnRlci55ICsgKGktMSkqdGlwTm9kZTpnZXRDb250ZW50U2l6ZSgpLmhlaWdodCAqIENDX0RFU0lHTl9SRVNPTFVUSU9OLnNjYWxlKVxuICAgICAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9uWVtpXSA9IGkgKiB0aGlzLnRpcFZpZXdJdGVtLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0IC8vKiBkcmMudWlTY2FsZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuc2V0QmxvY2tJbnB1dEV2ZW50RW5hYmxlKGZhbHNlKTtcbiAgICAgICAgLy8gdGhpcy5zaG93QmFja01hc2soZmFsc2UpO1xuXG4gICAgICAgIEdhbWVVdGlscy5nZXRJbnN0YW5jZSgpLnNldFZpc2libGUodGhpcy50aXBWaWV3SXRlbSwgZmFsc2UpO1xuICAgICAgICBHYW1lVXRpbHMuZ2V0SW5zdGFuY2UoKS5zZXRWaXNpYmxlKHRoaXMubm9kZSwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVUaXBWaWV3KGRhdGEpO1xuICAgIH1cblxuICAgIF91bnJlYWxPbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMudGlwSXRlbVBhcmVudC5yZW1vdmVBbGxDaGlsZHJlbigpXG4gICAgICAgIHRoaXMuX3RpcCA9IFtdXG4gICAgfVxuXG4gICAgY3JlYXRlVGlwVmlldyh0aXBDb250ZW50OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGl0ZW1Ob2RlID0gdGhpcy50aXBWaWV3SXRlbTtcbiAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZShpdGVtTm9kZSk7XG4gICAgICAgIHRoaXMudGlwSXRlbVBhcmVudC5hZGRDaGlsZChpdGVtKVxuICAgICAgICBHYW1lVXRpbHMuZ2V0SW5zdGFuY2UoKS5zZXRWaXNpYmxlKGl0ZW0sIHRydWUpXG4gICAgICAgIGxldCBzSXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KFRpcFRleHQpXG4gICAgICAgIHNJdGVtLkluaXQodGlwQ29udGVudClcbiAgICAgICAgLy8gaWYgKHRoaXMuX3RpcC5sZW5ndGggPiA0KSB7XG4gICAgICAgIC8vICAgICB0aGlzLl90aXBbMF0udGlwSXRlbS5oaWRlSXRlbSgpO1xuICAgICAgICAvLyAgICAgdGhpcy5fdGlwLnNoaWZ0KCk7XG4gICAgICAgIC8vICAgICB0aGlzLmNoZWNrQ2xvc2VXaW5kb3coKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLl90aXAucHVzaCh7XG4gICAgICAgICAgICB0aW1lOiAwLFxuICAgICAgICAgICAgdGlwSXRlbTogc0l0ZW0sXG4gICAgICAgICAgICBmYWRlb3V0OiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgICAvLyB0aGlzLl90aXBbdGhpcy5fdGlwLmxlbmd0aF0gPSB7XG4gICAgICAgIC8vICAgICB0aW1lOiAwLFxuICAgICAgICAvLyAgICAgdGlwSXRlbTogc0l0ZW0sXG4gICAgICAgIC8vICAgICBmYWRlb3V0OiBmYWxzZVxuICAgICAgICAvLyB9XG4gICAgICAgIHNJdGVtLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90aXAuc2hpZnQoKTtcbiAgICAgICAgICAgIHNJdGVtLmhpZGVJdGVtKCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQ2xvc2VXaW5kb3coKTtcbiAgICAgICAgfSwgMik7XG4gICAgICAgIC8vdGhpcy51cGRhdGVJdGVtUG9zKCk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RpcC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBudW1ZID0gMFxuICAgICAgICAvLyBsZXQgZHJjID0gQ29uZmlnTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERlc2lnblJlc291bHV0aW9uSW5mbygpO1xuICAgICAgICBsZXQgbnVtWUluZGV4ID0gMFxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5fdGlwLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAobnVtWUluZGV4IDwgdGhpcy5fY291bnQpIHtcbiAgICAgICAgICAgICAgICBudW1ZICs9IChudW1ZSW5kZXggPT0gMCkgPyAwIDogKHRoaXMuX3RpcFtpXS50aXBJdGVtLm5vZGUuaGVpZ2h0IC8gMiArIHRoaXMuX3RpcFtpICsgMV0udGlwSXRlbS5ub2RlLmhlaWdodCAvIDIpIC8vKiBkcmMudWlTY2FsZVxuICAgICAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9uWVtudW1ZSW5kZXhdID0gbnVtWVxuICAgICAgICAgICAgICAgIG51bVlJbmRleCsrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2NvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3RpcFtpbmRleF0pIHtcbiAgICAgICAgICAgICAgICBudW1ZICs9IHRoaXMudGlwVmlld0l0ZW0uZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgLy8qIGRyYy51aVNjYWxlXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9zaXRpb25ZW2luZGV4XSA9IG51bVlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9lbmRZID0gdGhpcy5fcG9zaXRpb25ZW3RoaXMuX3Bvc2l0aW9uWS5sZW5ndGggLSAxXVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fdGlwLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGluZGV4XzIgPSB0aGlzLl90aXAubGVuZ3RoIC0gaW5kZXggLSAxXG4gICAgICAgICAgICBpZiAoaW5kZXhfMiA+PSB0aGlzLl9jb3VudCAtIDEpIHtcbiAgICAgICAgICAgICAgICBpbmRleF8yID0gdGhpcy5fY291bnQgLSAxXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB0aXBEYXRhID0gdGhpcy5fdGlwW2luZGV4XVxuICAgICAgICAgICAgdGlwRGF0YS50aW1lID0gdGlwRGF0YS50aW1lICsgZHRcblxuICAgICAgICAgICAgaWYgKGluZGV4XzIgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhfMiA8IHRoaXMuX2NvdW50ICYmIHRpcERhdGEudGlwSXRlbS5ub2RlLnkgPD0gdGhpcy5fcG9zaXRpb25ZW2luZGV4XzJdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpcERhdGEudGlwSXRlbS5ub2RlLnkgPSB0aGlzLl9wb3NpdGlvbllbaW5kZXhfMl1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aXBEYXRhLnRpbWUgPj0gdGhpcy5fc3RhdGljVGltZSkge1xuICAgICAgICAgICAgICAgIC8vdGhpcy5fdGlwW2ldLnRpcEl0ZW0ubm9kZS55ICs9IHRoaXMuX21vdmVTcGVlZCAqIGR0O1xuICAgICAgICAgICAgICAgIGxldCB5ID0gdGlwRGF0YS50aXBJdGVtLm5vZGUueVxuICAgICAgICAgICAgICAgIGxldCB2ID0gTWF0aC5hYnMoKHRoaXMuX3Bvc2l0aW9uWVsyXSAtIHkpIC8gKDEgLSB0aXBEYXRhLnRpbWUpKVxuICAgICAgICAgICAgICAgIHRpcERhdGEudGlwSXRlbS5ub2RlLnkgKz0gdiAqIGR0XG4gICAgICAgICAgICAgICAgaWYgKHRpcERhdGEudGlwSXRlbS5ub2RlLnkgPiB0aGlzLl9lbmRZKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpcERhdGEudGlwSXRlbS5ub2RlLnkgPSB0aGlzLl9lbmRZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXRpcERhdGEuZmFkZW91dCkge1xuICAgICAgICAgICAgICAgICAgICB0aXBEYXRhLmZhZGVvdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZSA9IDAuNyAtICgoaW5kZXhfMiArIDEpICogMC4xKVxuICAgICAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGlwRGF0YS50aXBJdGVtLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aXBEYXRhLnRpcEl0ZW0ubm9kZSkudG8odGltZSwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAodGlwRGF0YS50aW1lPj0yKSB7XG4gICAgICAgICAgICAvLyAgICAgdGlwRGF0YS50aXBJdGVtLmhpZGVJdGVtKCk7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5fdGlwLnNoaWZ0KCk7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jaGVja0Nsb3NlV2luZG93KCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVJdGVtUG9zKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5fdGlwLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBuZXh0SXRlbSA9IHRoaXMuX3RpcFtpIC0gMV0udGlwSXRlbS5ub2RlO1xuICAgICAgICAgICAgbGV0IHRoaXNJdGVtID0gdGhpcy5fdGlwW2ldLnRpcEl0ZW0ubm9kZTtcbiAgICAgICAgICAgIGlmIChuZXh0SXRlbS55IC0gdGhpc0l0ZW0ueSA8IHRoaXNJdGVtLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIG5leHRJdGVtLnkgPSB0aGlzSXRlbS55ICsgdGhpc0l0ZW0uaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGlmIChuZXh0SXRlbS55ID4gdGhpcy5fZW5kWSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SXRlbS55ID0gdGhpcy5fZW5kWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjbG9zZVdpbm9kdyhpc05vdzogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgLy8gICAgIC8vIEdhbWVVdGlscy5nZXRJbnN0YW5jZSgpLnNldFZpc2libGUodGhpcy5ub2RlLCBmYWxzZSk7XG4gICAgLy8gICAgIGlmIChpc05vdykge1xuICAgIC8vICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHRoaXMudW5yZWFsQ2xvc2VXaW5kb3coKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIGNoZWNrQ2xvc2VXaW5kb3coKSB7XG4gICAgICAgIGlmICh0aGlzLl90aXAubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIC8vIHRoaXMuY2xvc2VXaW5vZHcoKTtcbiAgICAgICAgICAgIC8vIHRoaXMudW5yZWFsQ2xvc2VXaW5kb3coKTtcbiAgICAgICAgICAgIHRoaXMuSGlkZVVJKClcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==