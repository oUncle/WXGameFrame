
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/CustomListItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXEN1c3RvbUxpc3RJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTRDLGtDQUFZO0lBQXhEO1FBRUkscUJBQXFCO1FBQ3JCLDRCQUE0QjtRQUhoQyxxRUEwR0M7UUFyR0csd0JBQXdCO1FBRWQsWUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1osZUFBUyxHQUFPLElBQUksQ0FBQztRQUNyQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLHlCQUFtQixHQUFZLElBQUksQ0FBQztRQUNwQyx5QkFBbUIsR0FBWSxJQUFJLENBQUM7UUFDcEMsNEJBQXNCLEdBQVksSUFBSSxDQUFDOztJQThGckQsQ0FBQztJQTVGRywrQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDhCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxzQ0FBYSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxxQ0FBWSxHQUFaO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsb0NBQW9DO0lBQ3BDLGlDQUFRLEdBQVIsVUFBUyxLQUFZLEVBQUUsSUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFxQixFQUFFLFNBQXVCO1FBQTlDLHlCQUFBLEVBQUEsZUFBcUI7UUFBRSwwQkFBQSxFQUFBLGlCQUF1QjtRQUN2RixJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1QsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzVEO1lBQ0QsTUFBTSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDN0IseUZBQXlGO1NBRTVGO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUNBQVUsR0FBVixVQUFXLEtBQVksRUFBRSxJQUFRLEVBQUUsVUFBYztRQUM3QyxNQUFNO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELHlDQUFnQixHQUFoQixVQUFpQixTQUFzQjtRQUF0QiwwQkFBQSxFQUFBLGdCQUFzQjtRQUNuQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLE1BQU0sRUFBRTtZQUNSLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBRTdCLElBQUksU0FBUyxFQUFFO2dCQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDMUQ7WUFDRCx1R0FBdUc7U0FDMUc7SUFDTCxDQUFDO0lBRUQseUNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxNQUFNLEVBQUU7WUFDUixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUM7U0FDM0I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsVUFBVTtJQUNWLHFDQUFZLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNELFlBQVk7SUFDWixvQ0FBVyxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSCw4Q0FBcUIsR0FBckI7UUFDSSxnREFBZ0Q7SUFDcEQsQ0FBQztJQUdELGlCQUFpQjtJQUVqQixrQ0FBUyxHQUFUO0lBRUEsQ0FBQztJQXpHZ0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTBHbEM7SUFBRCxxQkFBQztDQTFHRCxBQTBHQyxDQTFHMkMsRUFBRSxDQUFDLFNBQVMsR0EwR3ZEO2tCQTFHb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tTGlzdEl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgLy8gaXRlbU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBwcm90ZWN0ZWQgX2luZGV4ID0gLTE7XG4gICAgcHJvdGVjdGVkIF9pdGVtRGF0YTphbnkgPSBudWxsO1xuICAgIHByb3RlY3RlZCBfY2FsbEJhY2s6RnVuY3Rpb24gPSBudWxsO1xuICAgIHByb3RlY3RlZCBfdG90YWxDb3VudENhbGxCYWNrOkZ1bmN0aW9uID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgX3NlbGVjdEl0ZW1DYWxsQmFjazpGdW5jdGlvbiA9IG51bGw7XG4gICAgcHJvdGVjdGVkIF9nZXRTZWxlY3RJdGVtQ2FsbEJhY2s6RnVuY3Rpb24gPSBudWxsO1xuXG4gICAgb25Mb2FkICgpIHtcblxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6buY6K6k6IqC54K56auY5bqm77yM5aaC5p6c5pyJ6ZyA5rGC77yM5a2Q57G75Y+v6YeN5YaZXG4gICAgICovXG4gICAgZ2V0SXRlbUhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6buY6K6k6IqC54K55a695bqm77yM5aaC5p6c5pyJ6ZyA5rGC77yM5a2Q57G75Y+v6YeN5YaZXG4gICAgICovXG4gICAgZ2V0SXRlbVdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLndpZHRoO1xuICAgIH1cblxuICAgIC8v6L+Z5Liq5o6l5Y+j5Y+q5pyJIGN1c3RvbUxpc3RWaWV3IOmHjOiwg+eUqO+8jOWFtuS7luWcsOaWueS4jeimgeiwg+eUqFxuICAgIGluaXRJdGVtKGluZGV4Om51bWJlciwgZGF0YTphbnksIHNlbGVjdERhdGEsIGNhblRvdWNoOmJvb2xlYW49dHJ1ZSwgaXNDaGVja2VkOmJvb2xlYW49ZmFsc2UpIHtcbiAgICAgICAgaWYgKGNhblRvdWNoKSB7XG4gICAgICAgICAgICBsZXQgdG9nZ2xlID0gdGhpcy5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKTtcbiAgICAgICAgICAgIGlmICghdG9nZ2xlKSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlID0gdGhpcy5hZGRDb21wb25lbnQoY2MuVG9nZ2xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUub24oJ3RvZ2dsZScsIHRoaXMub25Ub3VjaEN1c3RvbUxpc3RJdGVtLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvZ2dsZS5pc0NoZWNrZWQgPSBpc0NoZWNrZWQ7XG4gICAgICAgICAgICAvLyBjYy5sb2codG9nZ2xlLmlzQ2hlY2tlZCwnY3VzdG9tTGlzdFZpZXcsaW5pdEl0ZW0gaW5kZXggJyxpbmRleCxcIiBpc0NoZWNrIFwiLGlzQ2hlY2tlZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbShpbmRleCwgZGF0YSwgc2VsZWN0RGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pu05pawaXRlbe+8jCDlrZDnsbvlrp7njrBcbiAgICAgKiBAcGFyYW0gaW5kZXggXG4gICAgICogQHBhcmFtIGRhdGEgXG4gICAgICovXG4gICAgdXBkYXRlSXRlbShpbmRleDpudW1iZXIsIGRhdGE6YW55LCBzZWxlY3REYXRhOmFueSkge1xuICAgICAgICAvL+WtkOexu+WunueOsFxuICAgICAgICB0aGlzLl9pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLl9pdGVtRGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgc2V0SXNDaGVja2VkSXRlbShpc0NoZWNrZWQ6Ym9vbGVhbj10cnVlKSB7XG4gICAgICAgIGxldCB0b2dnbGUgPSB0aGlzLmdldENvbXBvbmVudChjYy5Ub2dnbGUpO1xuICAgICAgICBpZiAodG9nZ2xlKSB7XG4gICAgICAgICAgICB0b2dnbGUuaXNDaGVja2VkID0gaXNDaGVja2VkO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5lbWl0KCdjdXN0b21MaXN0U2VsZWN0JywgdGhpcy5faW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2MubG9nKHRvZ2dsZS5pc0NoZWNrZWQsJ2N1c3RvbUxpc3RWaWV3LHNldElzQ2hlY2tlZEl0ZW0gaW5kZXggJyx0aGlzLl9pbmRleCxcIiBpc0NoZWNrIFwiLGlzQ2hlY2tlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJc0NoZWNrZWRJdGVtKCkge1xuICAgICAgICBsZXQgdG9nZ2xlID0gdGhpcy5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKTtcbiAgICAgICAgaWYgKHRvZ2dsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRvZ2dsZS5pc0NoZWNrZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKuaVsOaNrue0ouW8lSAqL1xuICAgIGdldEl0ZW1JbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICAgIH1cbiAgICAvKirliLfmlrDngrkg5pWw5o2uICovXG4gICAgZ2V0SXRlbURhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBvblRvdWNoQ3VzdG9tTGlzdEl0ZW0g5a2Q57G75a6e546wXG4gICAgICog5Zue6LCD55qE5Y+C5pWw5pivIHRvZ2dsZSDnu4Tku7ZcbiAgICAgKi9cbiAgICBvblRvdWNoQ3VzdG9tTGlzdEl0ZW0oKSB7XG4gICAgICAgIC8vIGNjLmxvZygnb25Ub3VjaEN1c3RvbUxpc3RJdGVtICcsdGhpcy5faW5kZXgpO1xuICAgIH1cbiAgICBcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIFxuICAgIH1cbn1cbiJdfQ==