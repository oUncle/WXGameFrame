"use strict";
cc._RF.push(module, 'e2a73Gio2VLzYSwUDNFEacn', 'ItemConfig');
// Script/Config/ItemConfig.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemConfigBasic = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemConfigConfig = /** @class */ (function () {
    function ItemConfigConfig() {
    }
    ItemConfigConfig.datas = {
        1: {
            id: 1,
            name: "金币",
            itemPrefabName: "gold",
            iconName: "gold",
        },
    };
    ItemConfigConfig = __decorate([
        ccclass
    ], ItemConfigConfig);
    return ItemConfigConfig;
}());
exports.default = ItemConfigConfig;
var ItemConfigBasic = /** @class */ (function () {
    function ItemConfigBasic() {
        /** ID */
        this.id = 0;
        this.name = "";
        this.itemPrefabName = "";
        this.iconName = "";
    }
    return ItemConfigBasic;
}());
exports.ItemConfigBasic = ItemConfigBasic;

cc._RF.pop();