"use strict";
cc._RF.push(module, 'd9653BgQAVG665zoE49f92V', 'CustomListItem');
// Script/Common/CustomListItem.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomListItem = /** @class */ (function (_super) {
    __extends(CustomListItem, _super);
    function CustomListItem() {
        // @property(cc.Node)
        // itemNode: cc.Node = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this._index = -1;
        _this._itemData = null;
        _this._callBack = null;
        _this._totalCountCallBack = null;
        _this._selectItemCallBack = null;
        _this._getSelectItemCallBack = null;
        return _this;
    }
    CustomListItem.prototype.onLoad = function () {
    };
    CustomListItem.prototype.start = function () {
    };
    /**
     * 默认节点高度，如果有需求，子类可重写
     */
    CustomListItem.prototype.getItemHeight = function () {
        return this.node.height;
    };
    /**
     * 默认节点宽度，如果有需求，子类可重写
     */
    CustomListItem.prototype.getItemWidth = function () {
        return this.node.width;
    };
    //这个接口只有 customListView 里调用，其他地方不要调用
    CustomListItem.prototype.initItem = function (index, data, selectData, canTouch, isChecked) {
        if (canTouch === void 0) { canTouch = true; }
        if (isChecked === void 0) { isChecked = false; }
        if (canTouch) {
            var toggle = this.getComponent(cc.Toggle);
            if (!toggle) {
                toggle = this.addComponent(cc.Toggle);
                this.node.on('toggle', this.onTouchCustomListItem, this);
            }
            toggle.isChecked = isChecked;
            // cc.log(toggle.isChecked,'customListView,initItem index ',index," isCheck ",isChecked);
        }
        this.updateItem(index, data, selectData);
    };
    /**
     * 更新item， 子类实现
     * @param index
     * @param data
     */
    CustomListItem.prototype.updateItem = function (index, data, selectData) {
        //子类实现
        this._index = index;
        this._itemData = data;
    };
    CustomListItem.prototype.setIsCheckedItem = function (isChecked) {
        if (isChecked === void 0) { isChecked = true; }
        var toggle = this.getComponent(cc.Toggle);
        if (toggle) {
            toggle.isChecked = isChecked;
            if (isChecked) {
                this.node.parent.emit('customListSelect', this._index);
            }
            // cc.log(toggle.isChecked,'customListView,setIsCheckedItem index ',this._index," isCheck ",isChecked);
        }
    };
    CustomListItem.prototype.getIsCheckedItem = function () {
        var toggle = this.getComponent(cc.Toggle);
        if (toggle) {
            return toggle.isChecked;
        }
        return false;
    };
    /**数据索引 */
    CustomListItem.prototype.getItemIndex = function () {
        return this._index;
    };
    /**刷新点 数据 */
    CustomListItem.prototype.getItemData = function () {
        return this._itemData;
    };
    /**
     * onTouchCustomListItem 子类实现
     * 回调的参数是 toggle 组件
     */
    CustomListItem.prototype.onTouchCustomListItem = function () {
        // cc.log('onTouchCustomListItem ',this._index);
    };
    // update (dt) {}
    CustomListItem.prototype.onDestroy = function () {
    };
    CustomListItem = __decorate([
        ccclass
    ], CustomListItem);
    return CustomListItem;
}(cc.Component));
exports.default = CustomListItem;

cc._RF.pop();