"use strict";
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