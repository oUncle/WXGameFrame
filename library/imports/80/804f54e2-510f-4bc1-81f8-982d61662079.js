"use strict";
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