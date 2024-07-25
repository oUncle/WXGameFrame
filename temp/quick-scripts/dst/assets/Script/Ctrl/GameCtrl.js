
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Ctrl/GameCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ce190jU2RKyrdMpCl3HpWZ', 'GameCtrl');
// Script/Ctrl/GameCtrl.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameEventManager_1 = require("../Manager/GameEventManager");
var GameData_1 = require("../Other/GameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameCtrl = /** @class */ (function () {
    function GameCtrl() {
        this._isNewGame = false;
        this._itemList = null;
        this._gameState = GameData_1.GameState.waitStart;
    }
    GameCtrl_1 = GameCtrl;
    // private _selectLevelInfo: LevelConfigBasic = null
    GameCtrl.getInstance = function () {
        if (!this._instance) {
            this._instance = new GameCtrl_1();
            this._instance._init();
        }
        return this._instance;
    };
    GameCtrl.destroyInstance = function () {
        if (this._instance) {
            this._instance._destroy();
            delete this._instance;
            this._instance = null;
        }
    };
    GameCtrl.prototype._init = function () {
    };
    GameCtrl.prototype._destroy = function () { };
    GameCtrl.prototype.clearData = function () {
    };
    GameCtrl.prototype.setGameState = function (state) {
        this._gameState = state;
    };
    GameCtrl.prototype.getGameState = function () {
        return this._gameState;
    };
    /** 获得全部道具数组 */
    GameCtrl.prototype.getAllItemList = function () {
        if (!this._itemList) {
            var data = GameData_1.default.getLocalData("ItemList");
            this._itemList = data ? data : {};
        }
        return this._itemList;
    };
    /** 设置道具数量 */
    GameCtrl.prototype.setItemCount = function (itemType, count) {
        var itemList = this.getAllItemList();
        if (count > 0) {
            itemList[itemType] = { itemID: itemType, itemCount: count };
        }
        else if (count == 0) {
            delete itemList[itemType];
        }
        GameData_1.default.saveLocalData("ItemList", itemList);
    };
    /** 获得道具数量 */
    GameCtrl.prototype.getItemCount = function (itemType) {
        var itemList = this.getAllItemList();
        if (!itemList[itemType]) {
            return 0;
        }
        return itemList[itemType].itemCount;
    };
    /** 获得奖励道具 */
    GameCtrl.prototype.addAward = function (itemInfoList, isShowUI) {
        if (isShowUI === void 0) { isShowUI = false; }
        for (var index = 0; index < itemInfoList.length; index++) {
            var itemInfo = itemInfoList[index];
            var goldCount = this.getItemCount(itemInfo.itemID);
            goldCount += itemInfo.itemCount;
            this.setItemCount(itemInfo.itemID, goldCount);
        }
        // if (isShowUI && itemInfoList.length > 0) {
        //     UIManager.share.ShowUIName(WinID.ShowAwardMain, itemInfoList)
        // }
    };
    /** 消耗金币道具统一接口 */
    GameCtrl.prototype.costItem = function (itemInfoList) {
        for (var index = 0; index < itemInfoList.length; index++) {
            var itemInfo = itemInfoList[index];
            var goldCount = this.getItemCount(itemInfo.itemID);
            goldCount -= itemInfo.itemCount;
            this.setItemCount(itemInfo.itemID, goldCount);
        }
    };
    /** 游戏刚打开，检测是不是今天 */
    GameCtrl.prototype.checkDayIsToday = function () {
        var dayData = GameData_1.default.getLocalData("NowDay");
        var isNowDay = false;
        if (dayData == null || dayData == undefined) {
            //今天是新的一天
            isNowDay = true;
        }
        else {
            var signDate = new Date(dayData);
            var signStr = signDate.getFullYear() + "_" + signDate.getMonth() + "_" + signDate.getDate();
            var nowDate = new Date(new Date().getTime());
            var nowStr = nowDate.getFullYear() + "_" + nowDate.getMonth() + "_" + nowDate.getDate();
            isNowDay = signStr != nowStr;
        }
        if (isNowDay) {
            //今天是新的一天
            GameData_1.default.saveLocalData("NowDay", new Date().getTime());
            // //更新每日奖励次数
            // this.updateEverydayAwardTime()
            // //更新每日签到状态
            // SignCtrl.getInstance().updateSignData()
            // //初始化每日任务
            // TaskCtrl.getInstance().clearTaskTime()
            // //更新任务条件
            // TaskCtrl.getInstance().addTaskTime(TaskID.login)
            // //更新副本数据
            // SecretAreaCtrl.getInstance().resetSecretAreaData()
        }
    };
    GameCtrl.prototype.sendEvent = function (eventId, data) {
        if (data === void 0) { data = null; }
        GameEventManager_1.default.getInstance().dispathcGameEvent(eventId, data);
    };
    var GameCtrl_1;
    GameCtrl._instance = null;
    GameCtrl = GameCtrl_1 = __decorate([
        ccclass
    ], GameCtrl);
    return GameCtrl;
}());
exports.default = GameCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDdHJsXFxHYW1lQ3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGdFQUEyRDtBQUMzRCw4Q0FBa0U7QUFFNUQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtRQUdZLGVBQVUsR0FBWSxLQUFLLENBQUE7UUFDM0IsY0FBUyxHQUFnQyxJQUFJLENBQUE7UUFDN0MsZUFBVSxHQUFjLG9CQUFTLENBQUMsU0FBUyxDQUFBO0lBMkh2RCxDQUFDO2lCQWhJb0IsUUFBUTtJQU16QixvREFBb0Q7SUFFdEMsb0JBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksVUFBUSxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQjtRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRWEsd0JBQWUsR0FBN0I7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBRU8sd0JBQUssR0FBYjtJQUVBLENBQUM7SUFFTywyQkFBUSxHQUFoQixjQUFxQixDQUFDO0lBRXRCLDRCQUFTLEdBQVQ7SUFFQSxDQUFDO0lBRUQsK0JBQVksR0FBWixVQUFhLEtBQWdCO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO0lBQzNCLENBQUM7SUFFRCwrQkFBWSxHQUFaO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO0lB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ZW50IjpbImltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gXCIuLi9Db25maWcvR2FtZUV2ZW50Q29uZmlnXCI7XG5pbXBvcnQgR2FtZUV2ZW50TWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9HYW1lRXZlbnRNYW5hZ2VyXCI7XG5pbXBvcnQgR2FtZURhdGEsIHsgR2FtZVN0YXRlLCBJdGVtSW5mbyB9IGZyb20gXCIuLi9PdGhlci9HYW1lRGF0YVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUN0cmwge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogR2FtZUN0cmwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfaXNOZXdHYW1lOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIF9pdGVtTGlzdDogeyBba2V5OiBudW1iZXJdOiBJdGVtSW5mbyB9ID0gbnVsbFxuICAgIHByaXZhdGUgX2dhbWVTdGF0ZTogR2FtZVN0YXRlID0gR2FtZVN0YXRlLndhaXRTdGFydFxuICAgIC8vIHByaXZhdGUgX3NlbGVjdExldmVsSW5mbzogTGV2ZWxDb25maWdCYXNpYyA9IG51bGxcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEdhbWVDdHJsKCk7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5faW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRlc3Ryb3lJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5fZGVzdHJveSgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaW5pdCgpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgX2Rlc3Ryb3koKSB7IH1cblxuICAgIGNsZWFyRGF0YSgpIHtcblxuICAgIH1cblxuICAgIHNldEdhbWVTdGF0ZShzdGF0ZTogR2FtZVN0YXRlKSB7XG4gICAgICAgIHRoaXMuX2dhbWVTdGF0ZSA9IHN0YXRlXG4gICAgfVxuXG4gICAgZ2V0R2FtZVN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZVN0YXRlXG4gICAgfVxuXG4gICAgLyoqIOiOt+W+l+WFqOmDqOmBk+WFt+aVsOe7hCAqL1xuICAgIGdldEFsbEl0ZW1MaXN0KCkge1xuICAgICAgICBpZiAoIXRoaXMuX2l0ZW1MaXN0KSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IEdhbWVEYXRhLmdldExvY2FsRGF0YShcIkl0ZW1MaXN0XCIpXG4gICAgICAgICAgICB0aGlzLl9pdGVtTGlzdCA9IGRhdGEgPyBkYXRhIDoge31cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbUxpc3RcbiAgICB9XG5cbiAgICAvKiog6K6+572u6YGT5YW35pWw6YePICovXG4gICAgc2V0SXRlbUNvdW50KGl0ZW1UeXBlOiBudW1iZXIsIGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGl0ZW1MaXN0ID0gdGhpcy5nZXRBbGxJdGVtTGlzdCgpXG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgIGl0ZW1MaXN0W2l0ZW1UeXBlXSA9IHsgaXRlbUlEOiBpdGVtVHlwZSwgaXRlbUNvdW50OiBjb3VudCB9IGFzIEl0ZW1JbmZvXG4gICAgICAgIH0gZWxzZSBpZiAoY291bnQgPT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIGl0ZW1MaXN0W2l0ZW1UeXBlXVxuICAgICAgICB9XG4gICAgICAgIEdhbWVEYXRhLnNhdmVMb2NhbERhdGEoXCJJdGVtTGlzdFwiLCBpdGVtTGlzdClcbiAgICB9XG5cbiAgICAvKiog6I635b6X6YGT5YW35pWw6YePICovXG4gICAgZ2V0SXRlbUNvdW50KGl0ZW1UeXBlOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGl0ZW1MaXN0ID0gdGhpcy5nZXRBbGxJdGVtTGlzdCgpXG4gICAgICAgIGlmICghaXRlbUxpc3RbaXRlbVR5cGVdKSB7XG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtTGlzdFtpdGVtVHlwZV0uaXRlbUNvdW50XG4gICAgfVxuXG4gICAgLyoqIOiOt+W+l+WlluWKsemBk+WFtyAqL1xuICAgIGFkZEF3YXJkKGl0ZW1JbmZvTGlzdDogSXRlbUluZm9bXSwgaXNTaG93VUk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaXRlbUluZm9MaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW1JbmZvID0gaXRlbUluZm9MaXN0W2luZGV4XTtcbiAgICAgICAgICAgIGxldCBnb2xkQ291bnQgPSB0aGlzLmdldEl0ZW1Db3VudChpdGVtSW5mby5pdGVtSUQpXG4gICAgICAgICAgICBnb2xkQ291bnQgKz0gaXRlbUluZm8uaXRlbUNvdW50XG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1Db3VudChpdGVtSW5mby5pdGVtSUQsIGdvbGRDb3VudClcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAoaXNTaG93VUkgJiYgaXRlbUluZm9MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gICAgIFVJTWFuYWdlci5zaGFyZS5TaG93VUlOYW1lKFdpbklELlNob3dBd2FyZE1haW4sIGl0ZW1JbmZvTGlzdClcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC8qKiDmtojogJfph5HluIHpgZPlhbfnu5/kuIDmjqXlj6MgKi9cbiAgICBjb3N0SXRlbShpdGVtSW5mb0xpc3Q6IEl0ZW1JbmZvW10pIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1JbmZvTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtSW5mbyA9IGl0ZW1JbmZvTGlzdFtpbmRleF07XG4gICAgICAgICAgICBsZXQgZ29sZENvdW50ID0gdGhpcy5nZXRJdGVtQ291bnQoaXRlbUluZm8uaXRlbUlEKVxuICAgICAgICAgICAgZ29sZENvdW50IC09IGl0ZW1JbmZvLml0ZW1Db3VudFxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtQ291bnQoaXRlbUluZm8uaXRlbUlELCBnb2xkQ291bnQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgLyoqIOa4uOaIj+WImuaJk+W8gO+8jOajgOa1i+aYr+S4jeaYr+S7iuWkqSAqL1xuICAgICBjaGVja0RheUlzVG9kYXkoKSB7XG4gICAgICAgIGxldCBkYXlEYXRhID0gR2FtZURhdGEuZ2V0TG9jYWxEYXRhKFwiTm93RGF5XCIpXG4gICAgICAgIGxldCBpc05vd0RheSA9IGZhbHNlXG4gICAgICAgIGlmIChkYXlEYXRhID09IG51bGwgfHwgZGF5RGF0YSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8v5LuK5aSp5piv5paw55qE5LiA5aSpXG4gICAgICAgICAgICBpc05vd0RheSA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzaWduRGF0ZSA9IG5ldyBEYXRlKGRheURhdGEpXG4gICAgICAgICAgICBsZXQgc2lnblN0ciA9IHNpZ25EYXRlLmdldEZ1bGxZZWFyKCkgKyBcIl9cIiArIHNpZ25EYXRlLmdldE1vbnRoKCkgKyBcIl9cIiArIHNpZ25EYXRlLmdldERhdGUoKVxuICAgICAgICAgICAgbGV0IG5vd0RhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSlcbiAgICAgICAgICAgIGxldCBub3dTdHIgPSBub3dEYXRlLmdldEZ1bGxZZWFyKCkgKyBcIl9cIiArIG5vd0RhdGUuZ2V0TW9udGgoKSArIFwiX1wiICsgbm93RGF0ZS5nZXREYXRlKClcbiAgICAgICAgICAgIGlzTm93RGF5ID0gc2lnblN0ciAhPSBub3dTdHJcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOb3dEYXkpIHtcbiAgICAgICAgICAgIC8v5LuK5aSp5piv5paw55qE5LiA5aSpXG4gICAgICAgICAgICBHYW1lRGF0YS5zYXZlTG9jYWxEYXRhKFwiTm93RGF5XCIsIG5ldyBEYXRlKCkuZ2V0VGltZSgpKVxuXG4gICAgICAgICAgICAvLyAvL+abtOaWsOavj+aXpeWlluWKseasoeaVsFxuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVFdmVyeWRheUF3YXJkVGltZSgpXG4gICAgICAgICAgICAvLyAvL+abtOaWsOavj+aXpeetvuWIsOeKtuaAgVxuICAgICAgICAgICAgLy8gU2lnbkN0cmwuZ2V0SW5zdGFuY2UoKS51cGRhdGVTaWduRGF0YSgpXG4gICAgICAgICAgICAvLyAvL+WIneWni+WMluavj+aXpeS7u+WKoVxuICAgICAgICAgICAgLy8gVGFza0N0cmwuZ2V0SW5zdGFuY2UoKS5jbGVhclRhc2tUaW1lKClcbiAgICAgICAgICAgIC8vIC8v5pu05paw5Lu75Yqh5p2h5Lu2XG4gICAgICAgICAgICAvLyBUYXNrQ3RybC5nZXRJbnN0YW5jZSgpLmFkZFRhc2tUaW1lKFRhc2tJRC5sb2dpbilcbiAgICAgICAgICAgIC8vIC8v5pu05paw5Ymv5pys5pWw5o2uXG4gICAgICAgICAgICAvLyBTZWNyZXRBcmVhQ3RybC5nZXRJbnN0YW5jZSgpLnJlc2V0U2VjcmV0QXJlYURhdGEoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VuZEV2ZW50KGV2ZW50SWQ6IEdhbWVFdmVudCwgZGF0YTogYW55ID0gbnVsbCkge1xuICAgICAgICBHYW1lRXZlbnRNYW5hZ2VyLmdldEluc3RhbmNlKCkuZGlzcGF0aGNHYW1lRXZlbnQoZXZlbnRJZCwgZGF0YSk7XG4gICAgfVxufVxuIl19