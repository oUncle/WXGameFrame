// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameUtils from "../GameUtils/GameUtils";
import CustomListItem from "./CustomListItem";
import CustomListViewGroup from "./CustomListViewGroup";

const { ccclass, property } = cc._decorator;

export enum ScrollDirection {
    Horizontal = 0,
    Vertical = 1,
}

@ccclass
export default class CustomListView extends cc.Component {

    @property({ type: cc.ScrollView, tooltip: CC_DEV && "需要取消Horizontal和Vertical\ncontent的layout组件需要去掉" })
    scrollView: cc.ScrollView = null;
    @property({ type: cc.Enum(ScrollDirection), tooltip: CC_DEV && "Horizontal时，content锚点设置为cc.v2(0,0.5)\nVertical时，content锚点设置为cc.v2(0.5,1)" })
    direction = ScrollDirection.Vertical;
    @property({ type: cc.Integer, tooltip: CC_DEV && "需要初始多少个item，至少比显示区域多3-5个" })
    spawnCount: number = 8;
    @property(cc.Integer)
    spacingX: number = 0;
    @property(cc.Integer)
    spacingY: number = 0;
    @property(cc.Float)
    updateInterval: number = 0.05;
    @property(cc.Boolean)
    canTouchItem: boolean = false;
    // @property(CustomListItem) //导UI用，不可删除
    @property({ type: CustomListItem, tooltip: CC_DEV && "item锚点必需为cc.v2(0.5,0.5)" })
    listItem: CustomListItem = null;

    // LIFE-CYCLE CALLBACKS:

    private _itemDatas: any[] = [];
    private _itemNodes: CustomListItem[] = [];
    private _itemNodesCache: CustomListItem[] = [];
    private _totalCount = 0;
    private _updateTimer = 0;
    private _lastContentPosY = 0;
    private _lastContentPosX = 0;
    private _itemWidth = 0;
    private _itemHeight = 0;

    private _selectIndex = 0;

    private _scrollViewWorldPoses: cc.Vec2[] = [];

    private _selectData: any = null;

    onLoad () {
        if (this.listItem && this.listItem.node) {
            this.listItem.node.active = false;
        }
    }

    start() {

        // this._resetScrollView();
    }

    setSelectData(data) {
        this._selectData = data;

        this._refreshAllItemData();
    }

    private _resetScrollView() {
        if (this.scrollView) {
            this.scrollView.horizontal = false;
            this.scrollView.vertical = false;

            let widget = this.scrollView.content.getComponent(cc.Widget);
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

            } else {
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
                    let toggleContainer = this.scrollView.content.addComponent(cc.ToggleContainer);
                    toggleContainer.allowSwitchOff = true
                    // cc.log('_resetScrollView allowSwitchOff= ',toggleContainer.allowSwitchOff);
                    toggleContainer.node.on("customListSelect", (index, y) => {
                        this._onsetSelectIndex(index)
                    });
                }
            }
        }



    }

    private _resetScrollViewRect() {
        this._scrollViewWorldPoses.length = 0;
        //左下，右下，右上，左上
        let w = this.scrollView.node.width;
        let h = this.scrollView.node.height;
        let ax = this.scrollView.node.anchorX;
        let ay = this.scrollView.node.anchorY;
        let wp = this.scrollView.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        // cc.log("_resetScrollViewRect", w, h, ax, ay, wp.x, wp.y)
        this._scrollViewWorldPoses.push(cc.v2(wp.x - w * ax, wp.y - h * ay));
        this._scrollViewWorldPoses.push(cc.v2(wp.x + w * (1 - ax), wp.y - h * ay));
        this._scrollViewWorldPoses.push(cc.v2(wp.x + w * (1 - ax), wp.y + h * (1 - ay)));
        this._scrollViewWorldPoses.push(cc.v2(wp.x - w * ax, wp.y + h * (1 - ay)));
        // cc.log("this._scrollViewWorldPoses", this._scrollViewWorldPoses)
    }

    initListInfo(dataList: any[] = []) {
        this._resetScrollView();
        let group:CustomListViewGroup = this.listItem.getComponent(CustomListViewGroup);
        if (group) {
            let groupCellCount = group.getItemCount();

            let ndl = []
            for (let i = 0; i < dataList.length; i += groupCellCount) {
                let temp = []
                for (let index = 0; index < groupCellCount; index++) {
                    if (i + index >= dataList.length) {
                        break
                    }
                    temp.push(dataList[i + index]);
                }
                ndl.push(temp);
            }
            dataList = ndl
        }

        this._itemDatas = dataList;
        this._totalCount = this._itemDatas.length;
        this._selectIndex = 0;
        this._initialize();
        // cc.log("totalCount ",this._totalCount)
    }

    /** 刷新ItemData */
    resetItemDatas(dataList: any[] = [], selectIndex: number = 0, isScrollTo: boolean = false) {
        let oldLength = this._totalCount
        this._itemDatas = dataList;
        this._totalCount = this._itemDatas.length;
        this._selectIndex = selectIndex;

        this._resetScrollViewContentSize();

        if (!this._checkContentSizeFull() || this._itemNodes.length < this.spawnCount || this._totalCount < this.spawnCount) {
            if (oldLength == dataList.length) {
                cc.log("resetItemDatas  oldLength ==dataList.length ", oldLength == dataList.length)

            } else {
                this.initListInfo(dataList);
                this.setSelectIndex(selectIndex)
                return
            }
        }
        cc.log("resetItemDatas  totalCount ", this._totalCount)
        // this._resetScrollView();

        this._resetScrollViewRect();
        let isEnd = false;
        for (let index = 0; index < this._itemNodes.length; index++) {
            if (this._itemNodes[index].getItemIndex() >= this._totalCount) {
                isEnd = true;
                break;
            }
        }
        if (isEnd) {
            this.setToEnd();
        } else {
            this._refreshAllItemData();
        }

        if (isScrollTo) {
            this.scrollToItem(selectIndex);
        }

        this.setSelectIndex(this._selectIndex)

    }

    private _createListItem() {
        if (!this.listItem) {
            return null;
        }
        let itemNode = cc.instantiate(this.listItem.node);
        itemNode.active = true;
        let item = itemNode.getComponent(CustomListItem);
        return item;
    }


    /** 滑动到最后 */
    setToEnd() {
        let w = this.scrollView.node.width;
        let h = this.scrollView.node.height;
        let ax = this.scrollView.node.anchorX;
        let ay = this.scrollView.node.anchorY;
        if (this.direction == ScrollDirection.Horizontal) {
            this.scrollView.content.x = -(this.scrollView.content.width - w * (1 - ax))
            this._lastContentPosX = this.scrollView.content.x;
            // cc.log("setToEnd",this._lastContentPosX)

            let offset = (this._itemWidth + this.spacingX) * this._itemNodes.length - this._itemWidth * 0.5;
            let sposX = this.scrollView.content.width - offset;
            for (let index = 0; index < this.spawnCount && index < this._itemNodes.length; index++) {
                let item = this._itemNodes[index];
                let itemId = this._totalCount - this.spawnCount + index
                // cc.log(itemId,this._itemDatas[itemId])
                item.initItem(itemId, this.getItemData(itemId), this._selectData, this.canTouchItem, this._selectIndex == itemId);
                item.node.x = sposX + (this._itemWidth + this.spacingX) * index
            }
        } else {
            this.scrollView.content.y = (this.scrollView.content.height - h * (1 - ay))
            this._lastContentPosY = this.scrollView.content.y;

            let offset = (this._itemHeight + this.spacingY) * this._itemNodes.length - this._itemHeight * 0.5;
            let sposY = -(this.scrollView.content.height - offset);
            for (let index = 0; index < this.spawnCount && index < this._itemNodes.length; index++) {
                let item = this._itemNodes[index];
                let itemId = this._totalCount - this.spawnCount + index
                // cc.log(itemId,this.getItemData(itemId))
                item.initItem(itemId, this.getItemData(itemId), this._selectData, this.canTouchItem, this._selectIndex == itemId);
                item.node.y = sposY - (this._itemHeight + this.spacingY) * index
            }
            // cc.log("setToEnd",this._lastContentPosY)
        }

    }

    refreshAllShowItems() {
        this._refreshAllItemData();
    }

    private _refreshAllItemData() {
        for (let index = 0; index < this._itemNodes.length; index++) {
            let item = this._itemNodes[index];
            let itemIndex = item.getItemIndex();
            item.initItem(itemIndex, this.getItemData(itemIndex), this._selectData, this.canTouchItem, this._selectIndex == itemIndex);
        }
    }

    private _resetScrollViewContentSize() {
        if (this.direction == ScrollDirection.Horizontal) {
            this.scrollView.content.width = this._totalCount * (this._itemWidth + this.spacingX) + this.spacingX;
        } else {
            this.scrollView.content.height = this._totalCount * (this._itemHeight + this.spacingY) + this.spacingY;
        }
    }

    private _checkContentSizeFull() {
        let size = this.scrollView.node.getContentSize();
        if (this.direction == ScrollDirection.Horizontal) {
            return this.scrollView.content.width >= size.width;
        }
        return this.scrollView.content.height >= size.height;
    }



    private _initialize() {
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
        for (let i = 0; i < this.spawnCount && i < this._itemDatas.length; i++) {
            let item = this._itemNodesCache[i]
            if (i >= this._itemNodesCache.length) {
                item = this._createListItem();
                this.scrollView.content.addChild(item.node);
                this._itemNodesCache.push(item);
            }
            GameUtils.getInstance().setVisible(item, true);
            if (this.direction == ScrollDirection.Horizontal) {
                item.node.setPosition(this._itemWidth * (0.5 + i) + this.spacingX * (i + 1), 0);
            } else {
                item.node.setPosition(0, -(this._itemHeight * (0.5 + i) + this.spacingY * (i + 1)));
            }

            item.initItem(i, this.getItemData(i), this._selectData, this.canTouchItem);

            this._itemNodes.push(item);
        }
        if (this._itemNodesCache.length > this._itemNodes.length) {
            for (let i = this._itemNodes.length; i < this._itemNodesCache.length; i++) {
                GameUtils.getInstance().setVisible(this._itemNodesCache[i], false);
            }
        }

    }

    initWithoutData() {
        for (let i = 0; i < this.spawnCount; i++) {
            let item = this._itemNodesCache[i]
            if (i >= this._itemNodesCache.length) {
                item = this._createListItem();
                this.scrollView.content.addChild(item.node);
                this._itemNodesCache.push(item);
            }
            GameUtils.getInstance().setVisible(item, false);
        }
    }

    private _onsetSelectIndex(index: number) {
        // cc.log('CustomListView _onsetSelectIndex ',index);
        this._selectIndex = index;
    }

    setSelectIndex(index: number) {
        // cc.log('setSelectIndex  ',index);
        this._selectIndex = index;

        for (let index = 0; index < this._itemNodes.length; index++) {
            let item = this._itemNodes[index];
            // cc.log(item.getItemIndex())
            if (item.getItemIndex() == this._selectIndex) {
                // cc.log('select  true ',item.getItemIndex());
                item.setIsCheckedItem(true);
            }
        }
    }

    getSelectIndex() {
        return this._selectIndex;
    }

    resetItemData(index: number, data: any = null, selectData: any = null) {
        this._itemDatas[index] = data ? data :this._itemDatas[index];
        this._itemNodes[index].initItem(index, data, selectData);
    }

    getTotalCount() {
        return this._totalCount;
    }

    getItemData(index: number) {
        return this._itemDatas[index];
    }

    getShowItems() {
        return this._itemNodes;
    }

    getSpacingX() {
        return this.spacingX
    }

    getSpacingY() {
        return this.spacingY
    }

    private _getItemPos(index: number) {
        if (this.direction == ScrollDirection.Horizontal) {
            return cc.v2(this._itemWidth * (0.5 + index) + this.spacingX * (index + 1), 0);
        }
        return cc.v2(0, -(this._itemHeight * (0.5 + index) + this.spacingY * (index + 1)));
    }

    scrollToItem(index: number, scrollTime: number = 1) {
        // cc.log('scrollToItem');
        if (index < 0 || index >= this._totalCount) {
            return;
        }
        let percent = (Math.abs(index) / this._totalCount)
        if (index == 0) {
            percent = 0
        } else if (index >= (this._totalCount - 1)) {
            percent = 1
        }
        // let itemPos = this._getItemPos(index);

        if (this.direction == ScrollDirection.Horizontal) {
            // let percent = 1-(Math.abs(itemPos.x) / this.scrollView.content.width)
            this.scrollView.scrollToPercentHorizontal(percent, scrollTime);
        } else {
            // let percent = 1-(Math.abs(itemPos.y) / this.scrollView.content.height)
            this.scrollView.scrollToPercentVertical(percent, scrollTime);
        }
    }

    update(dt) {
        if (this._itemNodes.length <= 0) {
            return;
        }

        this._updateTimer += dt;
        if (this._updateTimer < this.updateInterval) return; // we don't need to do the math every frame
        this._updateTimer = 0;

        if (this.direction == ScrollDirection.Horizontal) {
            if (this.scrollView.content.x == this._lastContentPosX) {
                return
            }
            let isLeft = this.scrollView.content.x < this._lastContentPosX;
            let offset = (this._itemWidth + this.spacingX) * this._itemNodes.length;

            for (let i = 0; i < this._itemNodes.length; i++) {
                let item = this._itemNodes[i];
                let wp = item.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
                // cc.log("item wp", i, item.node.x, item.node.y, wp.x, wp.y)
                let wlx = wp.x - item.getItemWidth();
                let wrx = wp.x + item.getItemWidth();
                if (isLeft) {
                    // cc.log("isLeft", wrx, this._scrollViewWorldPoses[0].x, item.node.x, offset, this.scrollView.content.width, wrx < this._scrollViewWorldPoses[0].x && item.node.x + offset < this.scrollView.content.width)
                    // if away from buffer zone and not reaching top of content
                    if (wrx < this._scrollViewWorldPoses[0].x && item.node.x + offset < this.scrollView.content.width) {
                        item.node.x = (item.node.x + offset);
                        let dataIndex = item.getItemIndex() + this._itemNodes.length;
                        item.initItem(dataIndex, this.getItemData(dataIndex), this._selectData, this.canTouchItem, this._selectIndex == dataIndex);
                    }
                } else {
                    // cc.log("isRight", wlx, this._scrollViewWorldPoses[1].x, item.node.x, offset, wlx > this._scrollViewWorldPoses[1].x && item.node.x - offset > 0)
                    // if away from buffer zone and not reaching bottom of content
                    if (wlx > this._scrollViewWorldPoses[1].x && item.node.x - offset > 0) {
                        item.node.x = (item.node.x - offset);
                        let dataIndex = item.getItemIndex() - this._itemNodes.length;
                        item.initItem(dataIndex, this.getItemData(dataIndex), this._selectData, this.canTouchItem, this._selectIndex == dataIndex);
                    }
                }
            }
            this._lastContentPosX = this.scrollView.content.x;
            // cc.log("_lastContentPosX",this._lastContentPosX)
        } else {
            if (this._lastContentPosY == this.scrollView.content.y) {
                return
            }
            let isDown = this.scrollView.content.y < this._lastContentPosY;
            let offset = (this._itemHeight + this.spacingY) * this._itemNodes.length;

            for (let i = 0; i < this._itemNodes.length; i++) {
                let item = this._itemNodes[i];
                let wp = item.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
                let wty = wp.y + item.getItemHeight();
                let wby = wp.y - item.getItemHeight();
                if (isDown) {
                    // if away from buffer zone and not reaching top of content
                    if (wty < this._scrollViewWorldPoses[0].y && item.node.y + offset < 0) {
                        item.node.y = (item.node.y + offset);
                        let dataIndex = item.getItemIndex() - this._itemNodes.length;
                        item.initItem(dataIndex, this.getItemData(dataIndex), this._selectData, this.canTouchItem, this._selectIndex == dataIndex);
                    }
                } else {
                    // if away from buffer zone and not reaching bottom of content
                    if (wby > this._scrollViewWorldPoses[3].y && item.node.y - offset > -this.scrollView.content.height) {
                        item.node.y = (item.node.y - offset);
                        let dataIndex = item.getItemIndex() + this._itemNodes.length;
                        item.initItem(dataIndex, this.getItemData(dataIndex), this._selectData, this.canTouchItem, this._selectIndex == dataIndex);
                    }
                }
            }

            this._lastContentPosY = this.scrollView.content.y;
            // cc.log("_lastContentPosY",this._lastContentPosY)
        }
    }

    stopAutoScroll() {
        this.scrollView.stopAutoScroll()
    }

    scrollToLeft(timeInSecond?: number, attenuated?: boolean) {
        if (this.scrollView) {
            this.scrollView.scrollToLeft(timeInSecond, attenuated)
        }
    }

    scrollToRight(timeInSecond?: number, attenuated?: boolean) {
        if (this.scrollView) {
            this.scrollView.scrollToRight(timeInSecond, attenuated)
        }
    }

    scrollToTop(timeInSecond?: number, attenuated?: boolean) {
        if (this.scrollView) {
            this.scrollView.scrollToTop(timeInSecond, attenuated)
        }
    }

    scrollToBottom(timeInSecond?: number, attenuated?: boolean) {
        if (this.scrollView) {
            this.scrollView.scrollToBottom(timeInSecond, attenuated)
        }
    }

    scrollToOffset(offset: cc.Vec2, timeInSecond?: number, attenuated?: boolean) {
        if (this.scrollView) {
            this.scrollView.scrollToOffset(offset, timeInSecond, attenuated)
        }
    }

    getScrollOffset() {
        if (this.scrollView) {
            return this.scrollView.getScrollOffset()
        }
    }

    getMaxScrollOffset() {
        if (this.scrollView) {
            return this.scrollView.getMaxScrollOffset()
        }
    }
}
