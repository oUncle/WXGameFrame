
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/CustomListView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea23eUA7dlK+53f+uVixC0r', 'CustomListView');
// Script/Common/CustomListView.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
exports.ScrollDirection = void 0;
var GameUtils_1 = require("../GameUtils/GameUtils");
var CustomListItem_1 = require("./CustomListItem");
var CustomListViewGroup_1 = require("./CustomListViewGroup");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScrollDirection;
(function (ScrollDirection) {
    ScrollDirection[ScrollDirection["Horizontal"] = 0] = "Horizontal";
    ScrollDirection[ScrollDirection["Vertical"] = 1] = "Vertical";
})(ScrollDirection = exports.ScrollDirection || (exports.ScrollDirection = {}));
var CustomListView = /** @class */ (function (_super) {
    __extends(CustomListView, _super);
    function CustomListView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollView = null;
        _this.direction = ScrollDirection.Vertical;
        _this.spawnCount = 8;
        _this.spacingX = 0;
        _this.spacingY = 0;
        _this.updateInterval = 0.05;
        _this.canTouchItem = false;
        // @property(CustomListItem) //导UI用，不可删除
        _this.listItem = null;
        // LIFE-CYCLE CALLBACKS:
        _this._itemDatas = [];
        _this._itemNodes = [];
        _this._itemNodesCache = [];
        _this._totalCount = 0;
        _this._updateTimer = 0;
        _this._lastContentPosY = 0;
        _this._lastContentPosX = 0;
        _this._itemWidth = 0;
        _this._itemHeight = 0;
        _this._selectIndex = 0;
        _this._scrollViewWorldPoses = [];
        _this._selectData = null;
        return _this;
    }
    CustomListView.prototype.onLoad = function () {
        if (this.listItem && this.listItem.node) {
            this.listItem.node.active = false;
        }
    };
    CustomListView.prototype.start = function () {
        // this._resetScrollView();
    };
    CustomListView.prototype.setSelectData = function (data) {
        this._selectData = data;
        this._refreshAllItemData();
    };
    CustomListView.prototype._resetScrollView = function () {
        var _this = this;
        if (this.scrollView) {
            this.scrollView.horizontal = false;
            this.scrollView.vertical = false;
            var widget = this.scrollView.content.getComponent(cc.Widget);
            if (!widget) {
                widget = this.scrollView.content.addComponent(cc.Widget);
            }
            widget.enabled = true;
            if (this.direction == ScrollDirection.Horizontal) {
                this.scrollView.horizontal = true;
                this.scrollView.content.setAnchorPoint(cc.v2(0, 0.5));
                widget.isAlignTop = true;
                widget.isAlignBottom = true;
                widget.isAlignLeft = true;
                widget.isAlignRight = false;
            }
            else {
                this.scrollView.vertical = true;
                this.scrollView.content.setAnchorPoint(cc.v2(0.5, 1));
                widget.isAlignTop = true;
                widget.isAlignBottom = false;
                widget.isAlignLeft = true;
                widget.isAlignRight = true;
            }
            widget.alignMode = cc.Widget.AlignMode.ONCE;
            widget.updateAlignment();
            widget.enabled = false;
            this._resetScrollViewRect();
            //
            if (this.canTouchItem) {
                if (!this.scrollView.content.getComponent(cc.ToggleContainer)) {
                    var toggleContainer = this.scrollView.content.addComponent(cc.ToggleContainer);
                    toggleContainer.allowSwitchOff = true;
                    // cc.log('_resetScrollView allowSwitchOff= ',toggleContainer.allowSwitchOff);
                    toggleContainer.node.on("customListSelect", function (index, y) {
                        _this._onsetSelectIndex(index);
                    });
                }
            }
        }
    };
    CustomListView.prototype._resetScrollViewRect = function () {
        this._scrollViewWorldPoses.length = 0;
        //左下，右下，右上，左上
        var w = this.scrollView.node.width;
        var h = this.scrollView.node.height;
        var ax = this.scrollView.node.anchorX;
        var ay = this.scrollView.node.anchorY;
        var wp = this.scrollView.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        // cc.log("_resetScrollViewRect", w, h, ax, ay, wp.x, wp.y)
        this._scrollViewWorldPoses.push(cc.v2(wp.x - w * ax, wp.y - h * ay));
        this._scrollViewWorldPoses.push(cc.v2(wp.x + w * (1 - ax), wp.y - h * ay));
        this._scrollViewWorldPoses.push(cc.v2(wp.x + w * (1 - ax), wp.y + h * (1 - ay)));
        this._scrollViewWorldPoses.push(cc.v2(wp.x - w * ax, wp.y + h * (1 - ay)));
        // cc.log("this._scrollViewWorldPoses", this._scrollViewWorldPoses)
    };
    CustomListView.prototype.initListInfo = function (dataList) {
        if (dataList === void 0) { dataList = []; }
        this._resetScrollView();
        var group = this.listItem.getComponent(CustomListViewGroup_1.default);
        if (group) {
            var groupCellCount = group.getItemCount();
            var ndl = [];
            for (var i = 0; i < dataList.length; i += groupCellCount) {
                var temp = [];
                for (var index = 0; index < groupCellCount; index++) {
                    if (i + index >= dataList.length) {
                        break;
                    }
                    temp.push(dataList[i + index]);
                }
                ndl.push(temp);
            }
            dataList = ndl;
        }
        this._itemDatas = dataList;
        this._totalCount = this._itemDatas.length;
        this._selectIndex = 0;
        this._initialize();
        // cc.log("totalCount ",this._totalCount)
    };
    /** 刷新ItemData */
    CustomListView.prototype.resetItemDatas = function (dataList, selectIndex, isScrollTo) {
        if (dataList === void 0) { dataList = []; }
        if (selectIndex === void 0) { selectIndex = 0; }
        if (isScrollTo === void 0) { isScrollTo = false; }
        var oldLength = this._totalCount;
        this._itemDatas = dataList;
        this._totalCount = this._itemDatas.length;
        this._selectIndex = selectIndex;
        this._resetScrollViewContentSize();
        if (!this._checkContentSizeFull() || this._itemNodes.length < this.spawnCount || this._totalCount < this.spawnCount) {
            if (oldLength == dataList.length) {
                cc.log("resetItemDatas  oldLength ==dataList.length ", oldLength == dataList.length);
            }
            else {
                this.initListInfo(dataList);
                this.setSelectIndex(selectIndex);
                return;
            }
        }
        cc.log("resetItemDatas  totalCount ", this._totalCount);
        // this._resetScrollView();
        this._resetScrollViewRect();
        var isEnd = false;
        for (var index = 0; index < this._itemNodes.length; index++) {
            if (this._itemNodes[index].getItemIndex() >= this._totalCount) {
                isEnd = true;
                break;
            }
        }
        if (isEnd) {
            this.setToEnd();
        }
        else {
            this._refreshAllItemData();
        }
        if (isScrollTo) {
            this.scrollToItem(selectIndex);
        }
        this.setSelectIndex(this._selectIndex);
    };
    CustomListView.prototype._createListItem = function () {
        if (!this.listItem) {
            return null;
        }
        var itemNode = cc.instantiate(this.listItem.node);
        itemNode.active = true;
        var item = itemNode.getComponent(CustomListItem_1.default);
        return item;
    };
    /** 滑动到最后 */
    CustomListView.prototype.setToEnd = function () {
        var w = this.scrollView.node.width;
        var h = this.scrollView.node.height;
        var ax = this.scrollView.node.anchorX;
        var ay = this.scrollView.node.anchorY;
        if (this.direction == ScrollDirection.Horizontal) {
            this.scrollView.content.x = -(this.scrollView.content.width - w * (1 - ax));
            this._lastContentPosX = this.scrollView.content.x;
            // cc.log("setToEnd",this._lastContentPosX)
            var offset = (this._itemWidth + this.spacingX) * this._itemNodes.length - this._itemWidth * 0.5;
            var sposX = this.scrollView.content.width - offset;
            for (var index = 0; index < this.spawnCount && index < this._itemNodes.length; index++) {
                var item = this._itemNodes[index];
                var itemId = this._totalCount - this.spawnCount + index;
                // cc.log(itemId,this._itemDatas[itemId])
                item.initItem(itemId, this.getItemData(itemId), this._selectData, this.canTouchItem, this._selectIndex == itemId);
                item.node.x = sposX + (this._itemWidth + this.spacingX) * index;
            }
        }
        else {
            this.scrollView.content.y = (this.scrollView.content.height - h * (1 - ay));
            this._lastContentPosY = this.scrollView.content.y;
            var offset = (this._itemHeight + this.spacingY) * this._itemNodes.length - this._itemHeight * 0.5;
            var sposY = -(this.scrollView.content.height - offset);
            for (var index = 0; index < this.spawnCount && index < this._itemNodes.length; index++) {
                var item = this._itemNodes[index];
                var itemId = this._totalCount - this.spawnCount + index;
                // cc.log(itemId,this.getItemData(itemId))
                item.initItem(itemId, this.getItemData(itemId), this._selectData, this.canTouchItem, this._selectIndex == itemId);
                item.node.y = sposY - (this._itemHeight + this.spacingY) * index;
            }
            // cc.log("setToEnd",this._lastContentPosY)
        }
    };
    CustomListView.prototype.refreshAllShowItems = function () {
        this._refreshAllItemData();
    };
    CustomListView.prototype._refreshAllItemData = function () {
        for (var index = 0; index < this._itemNodes.length; index++) {
            var item = this._itemNodes[index];
            var itemIndex = item.getItemIndex();
            item.initItem(itemIndex, this.getItemData(itemIndex), this._selectData, this.canTouchItem, this._selectIndex == itemIndex);
        }
    };
    CustomListView.prototype._resetScrollViewContentSize = function () {
        if (this.direction == ScrollDirection.Horizontal) {
            this.scrollView.content.width = this._totalCount * (this._itemWidth + this.spacingX) + this.spacingX;
        }
        else {
            this.scrollView.content.height = this._totalCount * (this._itemHeight + this.spacingY) + this.spacingY;
        }
    };
    CustomListView.prototype._checkContentSizeFull = function () {
        var size = this.scrollView.node.getContentSize();
        if (this.direction == ScrollDirection.Horizontal) {
            return this.scrollView.content.width >= size.width;
        }
        return this.scrollView.content.height >= size.height;
    };
    CustomListView.prototype._initialize = function () {
        if (!this.listItem) {
            cc.warn("列表Item为空");
            return;
        }
        this._resetScrollViewRect();
        this._itemWidth = this.listItem.getItemWidth();
        this._itemHeight = this.listItem.getItemHeight();
        this._itemNodes.length = 0;
        this._resetScrollViewContentSize();
        // if (!this._startPos) {
        //     this._startPos =  this.scrollView.content.getPosition()
        // }
        // cc.log("_initialize",this._startPos)
        // this.scrollView.content.setPosition(this._startPos)
        for (var i = 0; i < this.spawnCount && i < this._itemDatas.length; i++) {
            var item = this._itemNodesCache[i];
            if (i >= this._itemNodesCache.length) {
                item = this._createListItem();
                this.scrollView.content.addChild(item.node);
                this._itemNodesCache.push(item);
            }
            GameUtils_1.default.getInstance().setVisible(item, true);
            if (this.direction == ScrollDirection.Horizontal) {
                item.node.setPosition(this._itemWidth * (0.5 + i) + this.spacingX * (i + 1), 0);
            }
            else {
                item.node.setPosition(0, -(this._itemHeight * (0.5 + i) + this.spacingY * (i + 1)));
            }
            item.initItem(i, this.getItemData(i), this._selectData, this.canTouchItem);
            this._itemNodes.push(item);
        }
        if (this._itemNodesCache.length > this._itemNodes.length) {
            for (var i = this._itemNodes.length; i < this._itemNodesCache.length; i++) {
                GameUtils_1.default.getInstance().setVisible(this._itemNodesCache[i], false);
            }
        }
    };
    CustomListView.prototype.initWithoutData = function () {
        for (var i = 0; i < this.spawnCount; i++) {
            var item = this._itemNodesCache[i];
            if (i >= this._itemNodesCache.length) {
                item = this._createListItem();
                this.scrollView.content.addChild(item.node);
                this._itemNodesCache.push(item);
            }
            GameUtils_1.default.getInstance().setVisible(item, false);
        }
    };
    CustomListView.prototype._onsetSelectIndex = function (index) {
        // cc.log('CustomListView _onsetSelectIndex ',index);
        this._selectIndex = index;
    };
    CustomListView.prototype.setSelectIndex = function (index) {
        // cc.log('setSelectIndex  ',index);
        this._selectIndex = index;
        for (var index_1 = 0; index_1 < this._itemNodes.length; index_1++) {
            var item = this._itemNodes[index_1];
            // cc.log(item.getItemIndex())
            if (item.getItemIndex() == this._selectIndex) {
                // cc.log('select  true ',item.getItemIndex());
                item.setIsCheckedItem(true);
            }
        }
    };
    CustomListView.prototype.getSelectIndex = function () {
        return this._selectIndex;
    };
    CustomListView.prototype.resetItemData = function (index, data, selectData) {
        if (data === void 0) { data = null; }
        if (selectData === void 0) { selectData = null; }
        this._itemDatas[index] = data ? data : this._itemDatas[index];
        this._itemNodes[index].initItem(index, data, selectData);
    };
    CustomListView.prototype.getTotalCount = function () {
        return this._totalCount;
    };
    CustomListView.prototype.getItemData = function (index) {
        return this._itemDatas[index];
    };
    CustomListView.prototype.getShowItems = function () {
        return this._itemNodes;
    };
    CustomListView.prototype.getSpacingX = function () {
        return this.spacingX;
    };
    CustomListView.prototype.getSpacingY = function () {
        return this.spacingY;
    };
    CustomListView.prototype._getItemPos = function (index) {
        if (this.direction == ScrollDirection.Horizontal) {
            return cc.v2(this._itemWidth * (0.5 + index) + this.spacingX * (index + 1), 0);
        }
        return cc.v2(0, -(this._itemHeight * (0.5 + index) + this.spacingY * (index + 1)));
    };
    CustomListView.prototype.scrollToItem = function (index, scrollTime) {
        if (scrollTime === void 0) { scrollTime = 1; }
        // cc.log('scrollToItem');
        if (index < 0 || index >= this._totalCount) {
            return;
        }
        var percent = (Math.abs(index) / this._totalCount);
        if (index == 0) {
            percent = 0;
        }
        else if (index >= (this._totalCount - 1)) {
            percent = 1;
        }
        // let itemPos = this._getItemPos(index);
        if (this.direction == ScrollDirection.Horizontal) {
            // let percent = 1-(Math.abs(itemPos.x) / this.scrollView.content.width)
            this.scrollView.scrollToPercentHorizontal(percent, scrollTime);
        }
        else {
            // let percent = 1-(Math.abs(itemPos.y) / this.scrollView.content.height)
            this.scrollView.scrollToPercentVertical(percent, scrollTime);
        }
    };
    CustomListView.prototype.update = function (dt) {
        if (this._itemNodes.length <= 0) {
            return;
        }
        this._updateTimer += dt;
        if (this._updateTimer < this.updateInterval)
            return; // we don't need to do the math every frame
        this._updateTimer = 0;
        if (this.direction == ScrollDirection.Horizontal) {
            if (this.scrollView.content.x == this._lastContentPosX) {
                return;
            }
            var isLeft = this.scrollView.content.x < this._lastContentPosX;
            var offset = (this._itemWidth + this.spacingX) * this._itemNodes.length;
            for (var i = 0; i < this._itemNodes.length; i++) {
                var item = this._itemNodes[i];
                var wp = item.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
                // cc.log("item wp", i, item.node.x, item.node.y, wp.x, wp.y)
                var wlx = wp.x - item.getItemWidth();
                var wrx = wp.x + item.getItemWidth();
                if (isLeft) {
                    // cc.log("isLeft", wrx, this._scrollViewWorldPoses[0].x, item.node.x, offset, this.scrollView.content.width, wrx < this._scrollViewWorldPoses[0].x && item.node.x + offset < this.scrollView.content.width)
                    // if away from buffer zone and not reaching top of content
                    if (wrx < this._scrollViewWorldPoses[0].x && item.node.x + offset < this.scrollView.content.width) {
                        item.node.x = (item.node.x + offset);
                        var dataIndex = item.getItemIndex() + this._itemNodes.length;
                        item.initItem(dataIndex, this.getItemData(dataIndex), this._selectData, this.canTouchItem, this._selectIndex == dataIndex);
                    }
                }
                else {
                    // cc.log("isRight", wlx, this._scrollViewWorldPoses[1].x, item.node.x, offset, wlx > this._scrollViewWorldPoses[1].x && item.node.x - offset > 0)
                    // if away from buffer zone and not reaching bottom of content
                    if (wlx > this._scrollViewWorldPoses[1].x && item.node.x - offset > 0) {
                        item.node.x = (item.node.x - offset);
                        var dataIndex = item.getItemIndex() - this._itemNodes.length;
                        item.initItem(dataIndex, this.getItemData(dataIndex), this._selectData, this.canTouchItem, this._selectIndex == dataIndex);
                    }
                }
            }
            this._lastContentPosX = this.scrollView.content.x;
            // cc.log("_lastContentPosX",this._lastContentPosX)
        }
        else {
            if (this._lastContentPosY == this.scrollView.content.y) {
                return;
            }
            var isDown = this.scrollView.content.y < this._lastContentPosY;
            var offset = (this._itemHeight + this.spacingY) * this._itemNodes.length;
            for (var i = 0; i < this._itemNodes.length; i++) {
                var item = this._itemNodes[i];
                var wp = item.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
                var wty = wp.y + item.getItemHeight();
                var wby = wp.y - item.getItemHeight();
                if (isDown) {
                    // if away from buffer zone and not reaching top of content
                    if (wty < this._scrollViewWorldPoses[0].y && item.node.y + offset < 0) {
                        item.node.y = (item.node.y + offset);
                        var dataIndex = item.getItemIndex() - this._itemNodes.length;
                        item.initItem(dataIndex, this.getItemData(dataIndex), this._selectData, this.canTouchItem, this._selectIndex == dataIndex);
                    }
                }
                else {
                    // if away from buffer zone and not reaching bottom of content
                    if (wby > this._scrollViewWorldPoses[3].y && item.node.y - offset > -this.scrollView.content.height) {
                        item.node.y = (item.node.y - offset);
                        var dataIndex = item.getItemIndex() + this._itemNodes.length;
                        item.initItem(dataIndex, this.getItemData(dataIndex), this._selectData, this.canTouchItem, this._selectIndex == dataIndex);
                    }
                }
            }
            this._lastContentPosY = this.scrollView.content.y;
            // cc.log("_lastContentPosY",this._lastContentPosY)
        }
    };
    CustomListView.prototype.stopAutoScroll = function () {
        this.scrollView.stopAutoScroll();
    };
    CustomListView.prototype.scrollToLeft = function (timeInSecond, attenuated) {
        if (this.scrollView) {
            this.scrollView.scrollToLeft(timeInSecond, attenuated);
        }
    };
    CustomListView.prototype.scrollToRight = function (timeInSecond, attenuated) {
        if (this.scrollView) {
            this.scrollView.scrollToRight(timeInSecond, attenuated);
        }
    };
    CustomListView.prototype.scrollToTop = function (timeInSecond, attenuated) {
        if (this.scrollView) {
            this.scrollView.scrollToTop(timeInSecond, attenuated);
        }
    };
    CustomListView.prototype.scrollToBottom = function (timeInSecond, attenuated) {
        if (this.scrollView) {
            this.scrollView.scrollToBottom(timeInSecond, attenuated);
        }
    };
    CustomListView.prototype.scrollToOffset = function (offset, timeInSecond, attenuated) {
        if (this.scrollView) {
            this.scrollView.scrollToOffset(offset, timeInSecond, attenuated);
        }
    };
    CustomListView.prototype.getScrollOffset = function () {
        if (this.scrollView) {
            return this.scrollView.getScrollOffset();
        }
    };
    CustomListView.prototype.getMaxScrollOffset = function () {
        if (this.scrollView) {
            return this.scrollView.getMaxScrollOffset();
        }
    };
    __decorate([
        property({ type: cc.ScrollView, tooltip: CC_DEV && "需要取消Horizontal和Vertical\ncontent的layout组件需要去掉" })
    ], CustomListView.prototype, "scrollView", void 0);
    __decorate([
        property({ type: cc.Enum(ScrollDirection), tooltip: CC_DEV && "Horizontal时，content锚点设置为cc.v2(0,0.5)\nVertical时，content锚点设置为cc.v2(0.5,1)" })
    ], CustomListView.prototype, "direction", void 0);
    __decorate([
        property({ type: cc.Integer, tooltip: CC_DEV && "需要初始多少个item，至少比显示区域多3-5个" })
    ], CustomListView.prototype, "spawnCount", void 0);
    __decorate([
        property(cc.Integer)
    ], CustomListView.prototype, "spacingX", void 0);
    __decorate([
        property(cc.Integer)
    ], CustomListView.prototype, "spacingY", void 0);
    __decorate([
        property(cc.Float)
    ], CustomListView.prototype, "updateInterval", void 0);
    __decorate([
        property(cc.Boolean)
    ], CustomListView.prototype, "canTouchItem", void 0);
    __decorate([
        property({ type: CustomListItem_1.default, tooltip: CC_DEV && "item锚点必需为cc.v2(0.5,0.5)" })
    ], CustomListView.prototype, "listItem", void 0);
    CustomListView = __decorate([
        ccclass
    ], CustomListView);
    return CustomListView;
}(cc.Component));
exports.default = CustomListView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXEN1c3RvbUxpc3RWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixvREFBK0M7QUFDL0MsbURBQThDO0FBQzlDLDZEQUF3RDtBQUVsRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDdkIsaUVBQWMsQ0FBQTtJQUNkLDZEQUFZLENBQUE7QUFDaEIsQ0FBQyxFQUhXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBRzFCO0FBR0Q7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFraEJDO1FBL2dCRyxnQkFBVSxHQUFrQixJQUFJLENBQUM7UUFFakMsZUFBUyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFFckMsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLG9CQUFjLEdBQVcsSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLHdDQUF3QztRQUV4QyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyx3QkFBd0I7UUFFaEIsZ0JBQVUsR0FBVSxFQUFFLENBQUM7UUFDdkIsZ0JBQVUsR0FBcUIsRUFBRSxDQUFDO1FBQ2xDLHFCQUFlLEdBQXFCLEVBQUUsQ0FBQztRQUN2QyxpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixzQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIsc0JBQWdCLEdBQUcsQ0FB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QyxVQUFVLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLENBQUE7U0FDOUM7SUFDTCxDQUFDO0lBOWdCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksK0NBQStDLEVBQUUsQ0FBQztzREFDckU7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxJQUFJLDBFQUEwRSxFQUFFLENBQUM7cURBQ3ZHO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSwwQkFBMEIsRUFBRSxDQUFDO3NEQUN2RDtJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO29EQUNBO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0RBQ0E7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswREFDVztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3dEQUNTO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLHdCQUFjLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSx5QkFBeUIsRUFBRSxDQUFDO29EQUNqRDtJQWxCZixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBa2hCbEM7SUFBRCxxQkFBQztDQWxoQkQsQUFraEJDLENBbGhCMkMsRUFBRSxDQUFDLFNBQVMsR0FraEJ2RDtrQkFsaEJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lVXRpbHMgZnJvbSBcIi4uL0dhbWVVdGlscy9HYW1lVXRpbHNcIjtcbmltcG9ydCBDdXN0b21MaXN0SXRlbSBmcm9tIFwiLi9DdXN0b21MaXN0SXRlbVwiO1xuaW1wb3J0IEN1c3RvbUxpc3RWaWV3R3JvdXAgZnJvbSBcIi4vQ3VzdG9tTGlzdFZpZXdHcm91cFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgZW51bSBTY3JvbGxEaXJlY3Rpb24ge1xuICAgIEhvcml6b250YWwgPSAwLFxuICAgIFZlcnRpY2FsID0gMSxcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUxpc3RWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlNjcm9sbFZpZXcsIHRvb2x0aXA6IENDX0RFViAmJiBcIumcgOimgeWPlua2iEhvcml6b250YWzlkoxWZXJ0aWNhbFxcbmNvbnRlbnTnmoRsYXlvdXTnu4Tku7bpnIDopoHljrvmjolcIiB9KVxuICAgIHNjcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oU2Nyb2xsRGlyZWN0aW9uKSwgdG9vbHRpcDogQ0NfREVWICYmIFwiSG9yaXpvbnRhbOaXtu+8jGNvbnRlbnTplJrngrnorr7nva7kuLpjYy52MigwLDAuNSlcXG5WZXJ0aWNhbOaXtu+8jGNvbnRlbnTplJrngrnorr7nva7kuLpjYy52MigwLjUsMSlcIiB9KVxuICAgIGRpcmVjdGlvbiA9IFNjcm9sbERpcmVjdGlvbi5WZXJ0aWNhbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyLCB0b29sdGlwOiBDQ19ERVYgJiYgXCLpnIDopoHliJ3lp4vlpJrlsJHkuKppdGVt77yM6Iez5bCR5q+U5pi+56S65Yy65Z+f5aSaMy015LiqXCIgfSlcbiAgICBzcGF3bkNvdW50OiBudW1iZXIgPSA4O1xuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHNwYWNpbmdYOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHNwYWNpbmdZOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcbiAgICB1cGRhdGVJbnRlcnZhbDogbnVtYmVyID0gMC4wNTtcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcbiAgICBjYW5Ub3VjaEl0ZW06IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyBAcHJvcGVydHkoQ3VzdG9tTGlzdEl0ZW0pIC8v5a+8VUnnlKjvvIzkuI3lj6/liKDpmaRcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDdXN0b21MaXN0SXRlbSwgdG9vbHRpcDogQ0NfREVWICYmIFwiaXRlbemUmueCueW/hemcgOS4umNjLnYyKDAuNSwwLjUpXCIgfSlcbiAgICBsaXN0SXRlbTogQ3VzdG9tTGlzdEl0ZW0gPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBwcml2YXRlIF9pdGVtRGF0YXM6IGFueVtdID0gW107XG4gICAgcHJpdmF0ZSBfaXRlbU5vZGVzOiBDdXN0b21MaXN0SXRlbVtdID0gW107XG4gICAgcHJpdmF0ZSBfaXRlbU5vZGVzQ2FjaGU6IEN1c3RvbUxpc3RJdGVtW10gPSBbXTtcbiAgICBwcml2YXRlIF90b3RhbENvdW50ID0gMDtcbiAgICBwcml2YXRlIF91cGRhdGVUaW1lciA9IDA7XG4gICAgcHJpdmF0ZSBfbGFzdENvbnRlbnRQb3NZID0gMDtcbiAgICBwcml2YXRlIF9sYXN0Q29udGVudFBvc1ggPSAwO1xuICAgIHByaXZhdGUgX2l0ZW1XaWR0aCA9IDA7XG4gICAgcHJpdmF0ZSBfaXRlbUhlaWdodCA9IDA7XG5cbiAgICBwcml2YXRlIF9zZWxlY3RJbmRleCA9IDA7XG5cbiAgICBwcml2YXRlIF9zY3JvbGxWaWV3V29ybGRQb3NlczogY2MuVmVjMltdID0gW107XG5cbiAgICBwcml2YXRlIF9zZWxlY3REYXRhOiBhbnkgPSBudWxsO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdEl0ZW0gJiYgdGhpcy5saXN0SXRlbS5ub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RJdGVtLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgICAgICAvLyB0aGlzLl9yZXNldFNjcm9sbFZpZXcoKTtcbiAgICB9XG5cbiAgICBzZXRTZWxlY3REYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0RGF0YSA9IGRhdGE7XG5cbiAgICAgICAgdGhpcy5fcmVmcmVzaEFsbEl0ZW1EYXRhKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVzZXRTY3JvbGxWaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuaG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnZlcnRpY2FsID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGxldCB3aWRnZXQgPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICAgICAgICAgIGlmICghd2lkZ2V0KSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0ID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuYWRkQ29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aWRnZXQuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBTY3JvbGxEaXJlY3Rpb24uSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5ob3Jpem9udGFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5zZXRBbmNob3JQb2ludChjYy52MigwLCAwLjUpKTtcblxuICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduVG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkJvdHRvbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblJpZ2h0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnZlcnRpY2FsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5zZXRBbmNob3JQb2ludChjYy52MigwLjUsIDEpKTtcblxuICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduVG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkJvdHRvbSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduTGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25SaWdodCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpZGdldC5hbGlnbk1vZGUgPSBjYy5XaWRnZXQuQWxpZ25Nb2RlLk9OQ0U7XG4gICAgICAgICAgICB3aWRnZXQudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICAgICAgICB3aWRnZXQuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLl9yZXNldFNjcm9sbFZpZXdSZWN0KCk7XG5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBpZiAodGhpcy5jYW5Ub3VjaEl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmdldENvbXBvbmVudChjYy5Ub2dnbGVDb250YWluZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2dnbGVDb250YWluZXIgPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5hZGRDb21wb25lbnQoY2MuVG9nZ2xlQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ29udGFpbmVyLmFsbG93U3dpdGNoT2ZmID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ19yZXNldFNjcm9sbFZpZXcgYWxsb3dTd2l0Y2hPZmY9ICcsdG9nZ2xlQ29udGFpbmVyLmFsbG93U3dpdGNoT2ZmKTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ29udGFpbmVyLm5vZGUub24oXCJjdXN0b21MaXN0U2VsZWN0XCIsIChpbmRleCwgeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25zZXRTZWxlY3RJbmRleChpbmRleClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVzZXRTY3JvbGxWaWV3UmVjdCgpIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1dvcmxkUG9zZXMubGVuZ3RoID0gMDtcbiAgICAgICAgLy/lt6bkuIvvvIzlj7PkuIvvvIzlj7PkuIrvvIzlt6bkuIpcbiAgICAgICAgbGV0IHcgPSB0aGlzLnNjcm9sbFZpZXcubm9kZS53aWR0aDtcbiAgICAgICAgbGV0IGggPSB0aGlzLnNjcm9sbFZpZXcubm9kZS5oZWlnaHQ7XG4gICAgICAgIGxldCBheCA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmFuY2hvclg7XG4gICAgICAgIGxldCBheSA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmFuY2hvclk7XG4gICAgICAgIGxldCB3cCA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xuICAgICAgICAvLyBjYy5sb2coXCJfcmVzZXRTY3JvbGxWaWV3UmVjdFwiLCB3LCBoLCBheCwgYXksIHdwLngsIHdwLnkpXG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXdXb3JsZFBvc2VzLnB1c2goY2MudjIod3AueCAtIHcgKiBheCwgd3AueSAtIGggKiBheSkpO1xuICAgICAgICB0aGlzLl9zY3JvbGxWaWV3V29ybGRQb3Nlcy5wdXNoKGNjLnYyKHdwLnggKyB3ICogKDEgLSBheCksIHdwLnkgLSBoICogYXkpKTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1dvcmxkUG9zZXMucHVzaChjYy52Mih3cC54ICsgdyAqICgxIC0gYXgpLCB3cC55ICsgaCAqICgxIC0gYXkpKSk7XG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXdXb3JsZFBvc2VzLnB1c2goY2MudjIod3AueCAtIHcgKiBheCwgd3AueSArIGggKiAoMSAtIGF5KSkpO1xuICAgICAgICAvLyBjYy5sb2coXCJ0aGlzLl9zY3JvbGxWaWV3V29ybGRQb3Nlc1wiLCB0aGlzLl9zY3JvbGxWaWV3V29ybGRQb3NlcylcbiAgICB9XG5cbiAgICBpbml0TGlzdEluZm8oZGF0YUxpc3Q6IGFueVtdID0gW10pIHtcbiAgICAgICAgdGhpcy5fcmVzZXRTY3JvbGxWaWV3KCk7XG4gICAgICAgIGxldCBncm91cDpDdXN0b21MaXN0Vmlld0dyb3VwID0gdGhpcy5saXN0SXRlbS5nZXRDb21wb25lbnQoQ3VzdG9tTGlzdFZpZXdHcm91cCk7XG4gICAgICAgIGlmIChncm91cCkge1xuICAgICAgICAgICAgbGV0IGdyb3VwQ2VsbENvdW50ID0gZ3JvdXAuZ2V0SXRlbUNvdW50KCk7XG5cbiAgICAgICAgICAgIGxldCBuZGwgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTGlzdC5sZW5ndGg7IGkgKz0gZ3JvdXBDZWxsQ291bnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IFtdXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdyb3VwQ2VsbENvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICsgaW5kZXggPj0gZGF0YUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRlbXAucHVzaChkYXRhTGlzdFtpICsgaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmRsLnB1c2godGVtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhTGlzdCA9IG5kbFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXRlbURhdGFzID0gZGF0YUxpc3Q7XG4gICAgICAgIHRoaXMuX3RvdGFsQ291bnQgPSB0aGlzLl9pdGVtRGF0YXMubGVuZ3RoO1xuICAgICAgICB0aGlzLl9zZWxlY3RJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemUoKTtcbiAgICAgICAgLy8gY2MubG9nKFwidG90YWxDb3VudCBcIix0aGlzLl90b3RhbENvdW50KVxuICAgIH1cblxuICAgIC8qKiDliLfmlrBJdGVtRGF0YSAqL1xuICAgIHJlc2V0SXRlbURhdGFzKGRhdGFMaXN0OiBhbnlbXSA9IFtdLCBzZWxlY3RJbmRleDogbnVtYmVyID0gMCwgaXNTY3JvbGxUbzogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBvbGRMZW5ndGggPSB0aGlzLl90b3RhbENvdW50XG4gICAgICAgIHRoaXMuX2l0ZW1EYXRhcyA9IGRhdGFMaXN0O1xuICAgICAgICB0aGlzLl90b3RhbENvdW50ID0gdGhpcy5faXRlbURhdGFzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fc2VsZWN0SW5kZXggPSBzZWxlY3RJbmRleDtcblxuICAgICAgICB0aGlzLl9yZXNldFNjcm9sbFZpZXdDb250ZW50U2l6ZSgpO1xuXG4gICAgICAgIGlmICghdGhpcy5fY2hlY2tDb250ZW50U2l6ZUZ1bGwoKSB8fCB0aGlzLl9pdGVtTm9kZXMubGVuZ3RoIDwgdGhpcy5zcGF3bkNvdW50IHx8IHRoaXMuX3RvdGFsQ291bnQgPCB0aGlzLnNwYXduQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChvbGRMZW5ndGggPT0gZGF0YUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwicmVzZXRJdGVtRGF0YXMgIG9sZExlbmd0aCA9PWRhdGFMaXN0Lmxlbmd0aCBcIiwgb2xkTGVuZ3RoID09IGRhdGFMaXN0Lmxlbmd0aClcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRMaXN0SW5mbyhkYXRhTGlzdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RJbmRleChzZWxlY3RJbmRleClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYy5sb2coXCJyZXNldEl0ZW1EYXRhcyAgdG90YWxDb3VudCBcIiwgdGhpcy5fdG90YWxDb3VudClcbiAgICAgICAgLy8gdGhpcy5fcmVzZXRTY3JvbGxWaWV3KCk7XG5cbiAgICAgICAgdGhpcy5fcmVzZXRTY3JvbGxWaWV3UmVjdCgpO1xuICAgICAgICBsZXQgaXNFbmQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2l0ZW1Ob2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pdGVtTm9kZXNbaW5kZXhdLmdldEl0ZW1JbmRleCgpID49IHRoaXMuX3RvdGFsQ291bnQpIHtcbiAgICAgICAgICAgICAgICBpc0VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRW5kKSB7XG4gICAgICAgICAgICB0aGlzLnNldFRvRW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZWZyZXNoQWxsSXRlbURhdGEoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1Njcm9sbFRvKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSXRlbShzZWxlY3RJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFNlbGVjdEluZGV4KHRoaXMuX3NlbGVjdEluZGV4KVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY3JlYXRlTGlzdEl0ZW0oKSB7XG4gICAgICAgIGlmICghdGhpcy5saXN0SXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGl0ZW1Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5saXN0SXRlbS5ub2RlKTtcbiAgICAgICAgaXRlbU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGl0ZW0gPSBpdGVtTm9kZS5nZXRDb21wb25lbnQoQ3VzdG9tTGlzdEl0ZW0pO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cblxuICAgIC8qKiDmu5HliqjliLDmnIDlkI4gKi9cbiAgICBzZXRUb0VuZCgpIHtcbiAgICAgICAgbGV0IHcgPSB0aGlzLnNjcm9sbFZpZXcubm9kZS53aWR0aDtcbiAgICAgICAgbGV0IGggPSB0aGlzLnNjcm9sbFZpZXcubm9kZS5oZWlnaHQ7XG4gICAgICAgIGxldCBheCA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmFuY2hvclg7XG4gICAgICAgIGxldCBheSA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmFuY2hvclk7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBTY3JvbGxEaXJlY3Rpb24uSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueCA9IC0odGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQud2lkdGggLSB3ICogKDEgLSBheCkpXG4gICAgICAgICAgICB0aGlzLl9sYXN0Q29udGVudFBvc1ggPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC54O1xuICAgICAgICAgICAgLy8gY2MubG9nKFwic2V0VG9FbmRcIix0aGlzLl9sYXN0Q29udGVudFBvc1gpXG5cbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAodGhpcy5faXRlbVdpZHRoICsgdGhpcy5zcGFjaW5nWCkgKiB0aGlzLl9pdGVtTm9kZXMubGVuZ3RoIC0gdGhpcy5faXRlbVdpZHRoICogMC41O1xuICAgICAgICAgICAgbGV0IHNwb3NYID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQud2lkdGggLSBvZmZzZXQ7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5zcGF3bkNvdW50ICYmIGluZGV4IDwgdGhpcy5faXRlbU5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbU5vZGVzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbUlkID0gdGhpcy5fdG90YWxDb3VudCAtIHRoaXMuc3Bhd25Db3VudCArIGluZGV4XG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGl0ZW1JZCx0aGlzLl9pdGVtRGF0YXNbaXRlbUlkXSlcbiAgICAgICAgICAgICAgICBpdGVtLmluaXRJdGVtKGl0ZW1JZCwgdGhpcy5nZXRJdGVtRGF0YShpdGVtSWQpLCB0aGlzLl9zZWxlY3REYXRhLCB0aGlzLmNhblRvdWNoSXRlbSwgdGhpcy5fc2VsZWN0SW5kZXggPT0gaXRlbUlkKTtcbiAgICAgICAgICAgICAgICBpdGVtLm5vZGUueCA9IHNwb3NYICsgKHRoaXMuX2l0ZW1XaWR0aCArIHRoaXMuc3BhY2luZ1gpICogaW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnkgPSAodGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuaGVpZ2h0IC0gaCAqICgxIC0gYXkpKVxuICAgICAgICAgICAgdGhpcy5fbGFzdENvbnRlbnRQb3NZID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueTtcblxuICAgICAgICAgICAgbGV0IG9mZnNldCA9ICh0aGlzLl9pdGVtSGVpZ2h0ICsgdGhpcy5zcGFjaW5nWSkgKiB0aGlzLl9pdGVtTm9kZXMubGVuZ3RoIC0gdGhpcy5faXRlbUhlaWdodCAqIDAuNTtcbiAgICAgICAgICAgIGxldCBzcG9zWSA9IC0odGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuaGVpZ2h0IC0gb2Zmc2V0KTtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnNwYXduQ291bnQgJiYgaW5kZXggPCB0aGlzLl9pdGVtTm9kZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9pdGVtTm9kZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtSWQgPSB0aGlzLl90b3RhbENvdW50IC0gdGhpcy5zcGF3bkNvdW50ICsgaW5kZXhcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coaXRlbUlkLHRoaXMuZ2V0SXRlbURhdGEoaXRlbUlkKSlcbiAgICAgICAgICAgICAgICBpdGVtLmluaXRJdGVtKGl0ZW1JZCwgdGhpcy5nZXRJdGVtRGF0YShpdGVtSWQpLCB0aGlzLl9zZWxlY3REYXRhLCB0aGlzLmNhblRvdWNoSXRlbSwgdGhpcy5fc2VsZWN0SW5kZXggPT0gaXRlbUlkKTtcbiAgICAgICAgICAgICAgICBpdGVtLm5vZGUueSA9IHNwb3NZIC0gKHRoaXMuX2l0ZW1IZWlnaHQgKyB0aGlzLnNwYWNpbmdZKSAqIGluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjYy5sb2coXCJzZXRUb0VuZFwiLHRoaXMuX2xhc3RDb250ZW50UG9zWSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVmcmVzaEFsbFNob3dJdGVtcygpIHtcbiAgICAgICAgdGhpcy5fcmVmcmVzaEFsbEl0ZW1EYXRhKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVmcmVzaEFsbEl0ZW1EYXRhKCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5faXRlbU5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9pdGVtTm9kZXNbaW5kZXhdO1xuICAgICAgICAgICAgbGV0IGl0ZW1JbmRleCA9IGl0ZW0uZ2V0SXRlbUluZGV4KCk7XG4gICAgICAgICAgICBpdGVtLmluaXRJdGVtKGl0ZW1JbmRleCwgdGhpcy5nZXRJdGVtRGF0YShpdGVtSW5kZXgpLCB0aGlzLl9zZWxlY3REYXRhLCB0aGlzLmNhblRvdWNoSXRlbSwgdGhpcy5fc2VsZWN0SW5kZXggPT0gaXRlbUluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3Jlc2V0U2Nyb2xsVmlld0NvbnRlbnRTaXplKCkge1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gU2Nyb2xsRGlyZWN0aW9uLkhvcml6b250YWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LndpZHRoID0gdGhpcy5fdG90YWxDb3VudCAqICh0aGlzLl9pdGVtV2lkdGggKyB0aGlzLnNwYWNpbmdYKSArIHRoaXMuc3BhY2luZ1g7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5oZWlnaHQgPSB0aGlzLl90b3RhbENvdW50ICogKHRoaXMuX2l0ZW1IZWlnaHQgKyB0aGlzLnNwYWNpbmdZKSArIHRoaXMuc3BhY2luZ1k7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9jaGVja0NvbnRlbnRTaXplRnVsbCgpIHtcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLnNjcm9sbFZpZXcubm9kZS5nZXRDb250ZW50U2l6ZSgpO1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gU2Nyb2xsRGlyZWN0aW9uLkhvcml6b250YWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFZpZXcuY29udGVudC53aWR0aCA+PSBzaXplLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5oZWlnaHQgPj0gc2l6ZS5oZWlnaHQ7XG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgX2luaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5saXN0SXRlbSkge1xuICAgICAgICAgICAgY2Mud2FybihcIuWIl+ihqEl0ZW3kuLrnqbpcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9yZXNldFNjcm9sbFZpZXdSZWN0KCk7XG5cbiAgICAgICAgdGhpcy5faXRlbVdpZHRoID0gdGhpcy5saXN0SXRlbS5nZXRJdGVtV2lkdGgoKTtcbiAgICAgICAgdGhpcy5faXRlbUhlaWdodCA9IHRoaXMubGlzdEl0ZW0uZ2V0SXRlbUhlaWdodCgpO1xuXG4gICAgICAgIHRoaXMuX2l0ZW1Ob2Rlcy5sZW5ndGggPSAwO1xuXG4gICAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsVmlld0NvbnRlbnRTaXplKCk7XG5cbiAgICAgICAgLy8gaWYgKCF0aGlzLl9zdGFydFBvcykge1xuICAgICAgICAvLyAgICAgdGhpcy5fc3RhcnRQb3MgPSAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuZ2V0UG9zaXRpb24oKVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGNjLmxvZyhcIl9pbml0aWFsaXplXCIsdGhpcy5fc3RhcnRQb3MpXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnNldFBvc2l0aW9uKHRoaXMuX3N0YXJ0UG9zKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3Bhd25Db3VudCAmJiBpIDwgdGhpcy5faXRlbURhdGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1Ob2Rlc0NhY2hlW2ldXG4gICAgICAgICAgICBpZiAoaSA+PSB0aGlzLl9pdGVtTm9kZXNDYWNoZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5fY3JlYXRlTGlzdEl0ZW0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1Ob2Rlc0NhY2hlLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHYW1lVXRpbHMuZ2V0SW5zdGFuY2UoKS5zZXRWaXNpYmxlKGl0ZW0sIHRydWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09IFNjcm9sbERpcmVjdGlvbi5Ib3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5ub2RlLnNldFBvc2l0aW9uKHRoaXMuX2l0ZW1XaWR0aCAqICgwLjUgKyBpKSArIHRoaXMuc3BhY2luZ1ggKiAoaSArIDEpLCAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5ub2RlLnNldFBvc2l0aW9uKDAsIC0odGhpcy5faXRlbUhlaWdodCAqICgwLjUgKyBpKSArIHRoaXMuc3BhY2luZ1kgKiAoaSArIDEpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW0uaW5pdEl0ZW0oaSwgdGhpcy5nZXRJdGVtRGF0YShpKSwgdGhpcy5fc2VsZWN0RGF0YSwgdGhpcy5jYW5Ub3VjaEl0ZW0pO1xuXG4gICAgICAgICAgICB0aGlzLl9pdGVtTm9kZXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faXRlbU5vZGVzQ2FjaGUubGVuZ3RoID4gdGhpcy5faXRlbU5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX2l0ZW1Ob2Rlcy5sZW5ndGg7IGkgPCB0aGlzLl9pdGVtTm9kZXNDYWNoZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIEdhbWVVdGlscy5nZXRJbnN0YW5jZSgpLnNldFZpc2libGUodGhpcy5faXRlbU5vZGVzQ2FjaGVbaV0sIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaW5pdFdpdGhvdXREYXRhKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3Bhd25Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1Ob2Rlc0NhY2hlW2ldXG4gICAgICAgICAgICBpZiAoaSA+PSB0aGlzLl9pdGVtTm9kZXNDYWNoZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5fY3JlYXRlTGlzdEl0ZW0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1Ob2Rlc0NhY2hlLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHYW1lVXRpbHMuZ2V0SW5zdGFuY2UoKS5zZXRWaXNpYmxlKGl0ZW0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX29uc2V0U2VsZWN0SW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgICAgICAvLyBjYy5sb2coJ0N1c3RvbUxpc3RWaWV3IF9vbnNldFNlbGVjdEluZGV4ICcsaW5kZXgpO1xuICAgICAgICB0aGlzLl9zZWxlY3RJbmRleCA9IGluZGV4O1xuICAgIH1cblxuICAgIHNldFNlbGVjdEluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgLy8gY2MubG9nKCdzZXRTZWxlY3RJbmRleCAgJyxpbmRleCk7XG4gICAgICAgIHRoaXMuX3NlbGVjdEluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2l0ZW1Ob2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbU5vZGVzW2luZGV4XTtcbiAgICAgICAgICAgIC8vIGNjLmxvZyhpdGVtLmdldEl0ZW1JbmRleCgpKVxuICAgICAgICAgICAgaWYgKGl0ZW0uZ2V0SXRlbUluZGV4KCkgPT0gdGhpcy5fc2VsZWN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ3NlbGVjdCAgdHJ1ZSAnLGl0ZW0uZ2V0SXRlbUluZGV4KCkpO1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0SXNDaGVja2VkSXRlbSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNlbGVjdEluZGV4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0SW5kZXg7XG4gICAgfVxuXG4gICAgcmVzZXRJdGVtRGF0YShpbmRleDogbnVtYmVyLCBkYXRhOiBhbnkgPSBudWxsLCBzZWxlY3REYXRhOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1EYXRhc1tpbmRleF0gPSBkYXRhID8gZGF0YSA6dGhpcy5faXRlbURhdGFzW2luZGV4XTtcbiAgICAgICAgdGhpcy5faXRlbU5vZGVzW2luZGV4XS5pbml0SXRlbShpbmRleCwgZGF0YSwgc2VsZWN0RGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0VG90YWxDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvdGFsQ291bnQ7XG4gICAgfVxuXG4gICAgZ2V0SXRlbURhdGEoaW5kZXg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbURhdGFzW2luZGV4XTtcbiAgICB9XG5cbiAgICBnZXRTaG93SXRlbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtTm9kZXM7XG4gICAgfVxuXG4gICAgZ2V0U3BhY2luZ1goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwYWNpbmdYXG4gICAgfVxuXG4gICAgZ2V0U3BhY2luZ1koKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwYWNpbmdZXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0SXRlbVBvcyhpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBTY3JvbGxEaXJlY3Rpb24uSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgcmV0dXJuIGNjLnYyKHRoaXMuX2l0ZW1XaWR0aCAqICgwLjUgKyBpbmRleCkgKyB0aGlzLnNwYWNpbmdYICogKGluZGV4ICsgMSksIDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYy52MigwLCAtKHRoaXMuX2l0ZW1IZWlnaHQgKiAoMC41ICsgaW5kZXgpICsgdGhpcy5zcGFjaW5nWSAqIChpbmRleCArIDEpKSk7XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9JdGVtKGluZGV4OiBudW1iZXIsIHNjcm9sbFRpbWU6IG51bWJlciA9IDEpIHtcbiAgICAgICAgLy8gY2MubG9nKCdzY3JvbGxUb0l0ZW0nKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLl90b3RhbENvdW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBlcmNlbnQgPSAoTWF0aC5hYnMoaW5kZXgpIC8gdGhpcy5fdG90YWxDb3VudClcbiAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgIHBlcmNlbnQgPSAwXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPj0gKHRoaXMuX3RvdGFsQ291bnQgLSAxKSkge1xuICAgICAgICAgICAgcGVyY2VudCA9IDFcbiAgICAgICAgfVxuICAgICAgICAvLyBsZXQgaXRlbVBvcyA9IHRoaXMuX2dldEl0ZW1Qb3MoaW5kZXgpO1xuXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSBTY3JvbGxEaXJlY3Rpb24uSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgLy8gbGV0IHBlcmNlbnQgPSAxLShNYXRoLmFicyhpdGVtUG9zLngpIC8gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQud2lkdGgpXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9QZXJjZW50SG9yaXpvbnRhbChwZXJjZW50LCBzY3JvbGxUaW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGxldCBwZXJjZW50ID0gMS0oTWF0aC5hYnMoaXRlbVBvcy55KSAvIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmhlaWdodClcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb1BlcmNlbnRWZXJ0aWNhbChwZXJjZW50LCBzY3JvbGxUaW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5faXRlbU5vZGVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl91cGRhdGVUaW1lciArPSBkdDtcbiAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZVRpbWVyIDwgdGhpcy51cGRhdGVJbnRlcnZhbCkgcmV0dXJuOyAvLyB3ZSBkb24ndCBuZWVkIHRvIGRvIHRoZSBtYXRoIGV2ZXJ5IGZyYW1lXG4gICAgICAgIHRoaXMuX3VwZGF0ZVRpbWVyID0gMDtcblxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gU2Nyb2xsRGlyZWN0aW9uLkhvcml6b250YWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjcm9sbFZpZXcuY29udGVudC54ID09IHRoaXMuX2xhc3RDb250ZW50UG9zWCkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGlzTGVmdCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnggPCB0aGlzLl9sYXN0Q29udGVudFBvc1g7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gKHRoaXMuX2l0ZW1XaWR0aCArIHRoaXMuc3BhY2luZ1gpICogdGhpcy5faXRlbU5vZGVzLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9pdGVtTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1Ob2Rlc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgd3AgPSBpdGVtLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKFwiaXRlbSB3cFwiLCBpLCBpdGVtLm5vZGUueCwgaXRlbS5ub2RlLnksIHdwLngsIHdwLnkpXG4gICAgICAgICAgICAgICAgbGV0IHdseCA9IHdwLnggLSBpdGVtLmdldEl0ZW1XaWR0aCgpO1xuICAgICAgICAgICAgICAgIGxldCB3cnggPSB3cC54ICsgaXRlbS5nZXRJdGVtV2lkdGgoKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcImlzTGVmdFwiLCB3cngsIHRoaXMuX3Njcm9sbFZpZXdXb3JsZFBvc2VzWzBdLngsIGl0ZW0ubm9kZS54LCBvZmZzZXQsIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LndpZHRoLCB3cnggPCB0aGlzLl9zY3JvbGxWaWV3V29ybGRQb3Nlc1swXS54ICYmIGl0ZW0ubm9kZS54ICsgb2Zmc2V0IDwgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQud2lkdGgpXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGF3YXkgZnJvbSBidWZmZXIgem9uZSBhbmQgbm90IHJlYWNoaW5nIHRvcCBvZiBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgIGlmICh3cnggPCB0aGlzLl9zY3JvbGxWaWV3V29ybGRQb3Nlc1swXS54ICYmIGl0ZW0ubm9kZS54ICsgb2Zmc2V0IDwgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9kZS54ID0gKGl0ZW0ubm9kZS54ICsgb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSBpdGVtLmdldEl0ZW1JbmRleCgpICsgdGhpcy5faXRlbU5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5pdEl0ZW0oZGF0YUluZGV4LCB0aGlzLmdldEl0ZW1EYXRhKGRhdGFJbmRleCksIHRoaXMuX3NlbGVjdERhdGEsIHRoaXMuY2FuVG91Y2hJdGVtLCB0aGlzLl9zZWxlY3RJbmRleCA9PSBkYXRhSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKFwiaXNSaWdodFwiLCB3bHgsIHRoaXMuX3Njcm9sbFZpZXdXb3JsZFBvc2VzWzFdLngsIGl0ZW0ubm9kZS54LCBvZmZzZXQsIHdseCA+IHRoaXMuX3Njcm9sbFZpZXdXb3JsZFBvc2VzWzFdLnggJiYgaXRlbS5ub2RlLnggLSBvZmZzZXQgPiAwKVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBhd2F5IGZyb20gYnVmZmVyIHpvbmUgYW5kIG5vdCByZWFjaGluZyBib3R0b20gb2YgY29udGVudFxuICAgICAgICAgICAgICAgICAgICBpZiAod2x4ID4gdGhpcy5fc2Nyb2xsVmlld1dvcmxkUG9zZXNbMV0ueCAmJiBpdGVtLm5vZGUueCAtIG9mZnNldCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9kZS54ID0gKGl0ZW0ubm9kZS54IC0gb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSBpdGVtLmdldEl0ZW1JbmRleCgpIC0gdGhpcy5faXRlbU5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5pdEl0ZW0oZGF0YUluZGV4LCB0aGlzLmdldEl0ZW1EYXRhKGRhdGFJbmRleCksIHRoaXMuX3NlbGVjdERhdGEsIHRoaXMuY2FuVG91Y2hJdGVtLCB0aGlzLl9zZWxlY3RJbmRleCA9PSBkYXRhSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbGFzdENvbnRlbnRQb3NYID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueDtcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIl9sYXN0Q29udGVudFBvc1hcIix0aGlzLl9sYXN0Q29udGVudFBvc1gpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbGFzdENvbnRlbnRQb3NZID09IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpc0Rvd24gPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudC55IDwgdGhpcy5fbGFzdENvbnRlbnRQb3NZO1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9ICh0aGlzLl9pdGVtSGVpZ2h0ICsgdGhpcy5zcGFjaW5nWSkgKiB0aGlzLl9pdGVtTm9kZXMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2l0ZW1Ob2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbU5vZGVzW2ldO1xuICAgICAgICAgICAgICAgIGxldCB3cCA9IGl0ZW0ubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKTtcbiAgICAgICAgICAgICAgICBsZXQgd3R5ID0gd3AueSArIGl0ZW0uZ2V0SXRlbUhlaWdodCgpO1xuICAgICAgICAgICAgICAgIGxldCB3YnkgPSB3cC55IC0gaXRlbS5nZXRJdGVtSGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzRG93bikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBhd2F5IGZyb20gYnVmZmVyIHpvbmUgYW5kIG5vdCByZWFjaGluZyB0b3Agb2YgY29udGVudFxuICAgICAgICAgICAgICAgICAgICBpZiAod3R5IDwgdGhpcy5fc2Nyb2xsVmlld1dvcmxkUG9zZXNbMF0ueSAmJiBpdGVtLm5vZGUueSArIG9mZnNldCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9kZS55ID0gKGl0ZW0ubm9kZS55ICsgb2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhSW5kZXggPSBpdGVtLmdldEl0ZW1JbmRleCgpIC0gdGhpcy5faXRlbU5vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5pdEl0ZW0oZGF0YUluZGV4LCB0aGlzLmdldEl0ZW1EYXRhKGRhdGFJbmRleCksIHRoaXMuX3NlbGVjdERhdGEsIHRoaXMuY2FuVG91Y2hJdGVtLCB0aGlzLl9zZWxlY3RJbmRleCA9PSBkYXRhSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgYXdheSBmcm9tIGJ1ZmZlciB6b25lIGFuZCBub3QgcmVhY2hpbmcgYm90dG9tIG9mIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdieSA+IHRoaXMuX3Njcm9sbFZpZXdXb3JsZFBvc2VzWzNdLnkgJiYgaXRlbS5ub2RlLnkgLSBvZmZzZXQgPiAtdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5vZGUueSA9IChpdGVtLm5vZGUueSAtIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUluZGV4ID0gaXRlbS5nZXRJdGVtSW5kZXgoKSArIHRoaXMuX2l0ZW1Ob2Rlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmluaXRJdGVtKGRhdGFJbmRleCwgdGhpcy5nZXRJdGVtRGF0YShkYXRhSW5kZXgpLCB0aGlzLl9zZWxlY3REYXRhLCB0aGlzLmNhblRvdWNoSXRlbSwgdGhpcy5fc2VsZWN0SW5kZXggPT0gZGF0YUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fbGFzdENvbnRlbnRQb3NZID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQueTtcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIl9sYXN0Q29udGVudFBvc1lcIix0aGlzLl9sYXN0Q29udGVudFBvc1kpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wQXV0b1Njcm9sbCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKClcbiAgICB9XG5cbiAgICBzY3JvbGxUb0xlZnQodGltZUluU2Vjb25kPzogbnVtYmVyLCBhdHRlbnVhdGVkPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9MZWZ0KHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjcm9sbFRvUmlnaHQodGltZUluU2Vjb25kPzogbnVtYmVyLCBhdHRlbnVhdGVkPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9SaWdodCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxUb1RvcCh0aW1lSW5TZWNvbmQ/OiBudW1iZXIsIGF0dGVudWF0ZWQ/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb1RvcCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxUb0JvdHRvbSh0aW1lSW5TZWNvbmQ/OiBudW1iZXIsIGF0dGVudWF0ZWQ/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb0JvdHRvbSh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxUb09mZnNldChvZmZzZXQ6IGNjLlZlYzIsIHRpbWVJblNlY29uZD86IG51bWJlciwgYXR0ZW51YXRlZD86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsVmlldykge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvT2Zmc2V0KG9mZnNldCwgdGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2Nyb2xsT2Zmc2V0KCkge1xuICAgICAgICBpZiAodGhpcy5zY3JvbGxWaWV3KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxWaWV3LmdldFNjcm9sbE9mZnNldCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNYXhTY3JvbGxPZmZzZXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbFZpZXcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjcm9sbFZpZXcuZ2V0TWF4U2Nyb2xsT2Zmc2V0KClcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==