
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Config/ItemConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb25maWdcXEl0ZW1Db25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtJQVNBLENBQUM7SUFSaUIsc0JBQUssR0FBRztRQUNsQixDQUFDLEVBQUU7WUFDQyxFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxJQUFJO1lBQ1YsY0FBYyxFQUFFLE1BQU07WUFDdEIsUUFBUSxFQUFFLE1BQU07U0FDbkI7S0FDSixDQUFBO0lBUmdCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBU3BDO0lBQUQsdUJBQUM7Q0FURCxBQVNDLElBQUE7a0JBVG9CLGdCQUFnQjtBQVdyQztJQUFBO1FBQ0ksU0FBUztRQUNULE9BQUUsR0FBVyxDQUFDLENBQUE7UUFDZCxTQUFJLEdBQVcsRUFBRSxDQUFBO1FBQ2pCLG1CQUFjLEdBQVcsRUFBRSxDQUFBO1FBQzNCLGFBQVEsR0FBVyxFQUFFLENBQUE7SUFDekIsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEl0ZW1Db25maWdDb25maWcge1xuICAgIHB1YmxpYyBzdGF0aWMgZGF0YXMgPSB7XG4gICAgICAgIDE6IHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmFtZTogXCLph5HluIFcIixcbiAgICAgICAgICAgIGl0ZW1QcmVmYWJOYW1lOiBcImdvbGRcIixcbiAgICAgICAgICAgIGljb25OYW1lOiBcImdvbGRcIixcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJdGVtQ29uZmlnQmFzaWMge1xuICAgIC8qKiBJRCAqL1xuICAgIGlkOiBudW1iZXIgPSAwXG4gICAgbmFtZTogc3RyaW5nID0gXCJcIlxuICAgIGl0ZW1QcmVmYWJOYW1lOiBzdHJpbmcgPSBcIlwiXG4gICAgaWNvbk5hbWU6IHN0cmluZyA9IFwiXCJcbn0iXX0=