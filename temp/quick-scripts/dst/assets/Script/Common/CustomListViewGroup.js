
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/CustomListViewGroup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '804f5TiUQ9LwYH4mC1hZiB5', 'CustomListViewGroup');
// Script/Common/CustomListViewGroup.ts

"use strict";
/**
 * File: CustomListView copy.ts
 * Created Date: 2022-04-22 13:25:39
 * Author: xiaolizi
 * -----
 * Last Modified: 2022-04-25 19:01:20
 * Modified By: xiaolizi
 * -----
 * Copyright (c) 2022 Jw Inc.
 * ------------------------------------
 * Javascript will save your soul!
 */
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
var GameUtils_1 = require("../GameUtils/GameUtils");
var CustomListItem_1 = require("./CustomListItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CustomListViewGroup = /** @class */ (function (_super) {
    __extends(CustomListViewGroup, _super);
    function CustomListViewGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.choseItems = [];
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    CustomListViewGroup.prototype.updateItem = function (index, data, selectData) {
        _super.prototype.updateItem.call(this, index, data, selectData);
        for (var i = 0; i < this.choseItems.length; i++) {
            if (i < data.length) {
                GameUtils_1.default.getInstance().setVisible(this.choseItems[i], true);
                this.choseItems[i].updateItem(i + this.choseItems.length * index, data[i], selectData);
            }
            else {
                GameUtils_1.default.getInstance().setVisible(this.choseItems[i], false);
            }
        }
    };
    CustomListViewGroup.prototype.getItemCount = function () {
        return this.choseItems.length;
    };
    __decorate([
        property(CustomListItem_1.default)
    ], CustomListViewGroup.prototype, "choseItems", void 0);
    CustomListViewGroup = __decorate([
        ccclass
    ], CustomListViewGroup);
    return CustomListViewGroup;
}(CustomListItem_1.default));
exports.default = CustomListViewGroup;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXEN1c3RvbUxpc3RWaWV3R3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztHQVdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSCxvREFBK0M7QUFDL0MsbURBQThDO0FBSXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlELHVDQUFjO0lBQS9EO1FBQUEscUVBMEJDO1FBdkJHLGdCQUFVLEdBQXFCLEVBQUUsQ0FBQzs7SUF1QnRDLENBQUM7SUFyQkcsd0JBQXdCO0lBRXhCLHdDQUFVLEdBQVYsVUFBVyxLQUFhLEVBQUUsSUFBUyxFQUFFLFVBQVU7UUFDM0MsaUJBQU0sVUFBVSxZQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pCLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3RGO2lCQUFNO2dCQUNILG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDakU7U0FDSjtJQUVMLENBQUM7SUFFRCwwQ0FBWSxHQUFaO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUNsQyxDQUFDO0lBcEJEO1FBREMsUUFBUSxDQUFDLHdCQUFjLENBQUM7MkRBQ1M7SUFIakIsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0EwQnZDO0lBQUQsMEJBQUM7Q0ExQkQsQUEwQkMsQ0ExQmdELHdCQUFjLEdBMEI5RDtrQkExQm9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsZTogQ3VzdG9tTGlzdFZpZXcgY29weS50c1xuICogQ3JlYXRlZCBEYXRlOiAyMDIyLTA0LTIyIDEzOjI1OjM5XG4gKiBBdXRob3I6IHhpYW9saXppXG4gKiAtLS0tLVxuICogTGFzdCBNb2RpZmllZDogMjAyMi0wNC0yNSAxOTowMToyMFxuICogTW9kaWZpZWQgQnk6IHhpYW9saXppXG4gKiAtLS0tLVxuICogQ29weXJpZ2h0IChjKSAyMDIyIEp3IEluYy5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogSmF2YXNjcmlwdCB3aWxsIHNhdmUgeW91ciBzb3VsIVxuICovXG5cbmltcG9ydCBHYW1lVXRpbHMgZnJvbSBcIi4uL0dhbWVVdGlscy9HYW1lVXRpbHNcIjtcbmltcG9ydCBDdXN0b21MaXN0SXRlbSBmcm9tIFwiLi9DdXN0b21MaXN0SXRlbVwiO1xuXG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUxpc3RWaWV3R3JvdXAgZXh0ZW5kcyBDdXN0b21MaXN0SXRlbSB7XG5cbiAgICBAcHJvcGVydHkoQ3VzdG9tTGlzdEl0ZW0pXG4gICAgY2hvc2VJdGVtczogQ3VzdG9tTGlzdEl0ZW1bXSA9IFtdO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICB1cGRhdGVJdGVtKGluZGV4OiBudW1iZXIsIGRhdGE6IGFueSwgc2VsZWN0RGF0YSkge1xuICAgICAgICBzdXBlci51cGRhdGVJdGVtKGluZGV4LCBkYXRhLCBzZWxlY3REYXRhKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hvc2VJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPCBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIEdhbWVVdGlscy5nZXRJbnN0YW5jZSgpLnNldFZpc2libGUodGhpcy5jaG9zZUl0ZW1zW2ldLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNob3NlSXRlbXNbaV0udXBkYXRlSXRlbShpK3RoaXMuY2hvc2VJdGVtcy5sZW5ndGgqaW5kZXgsIGRhdGFbaV0sIHNlbGVjdERhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBHYW1lVXRpbHMuZ2V0SW5zdGFuY2UoKS5zZXRWaXNpYmxlKHRoaXMuY2hvc2VJdGVtc1tpXSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXRJdGVtQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNob3NlSXRlbXMubGVuZ3RoO1xuICAgIH1cblxuXG59XG5cblxuIl19