"use strict";
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