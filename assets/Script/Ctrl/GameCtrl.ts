import { GameEvent } from "../Config/GameEventConfig";
import GameEventManager from "../Manager/GameEventManager";
import GameData, { GameState, ItemInfo } from "../Other/GameData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameCtrl {
    private static _instance: GameCtrl = null;

    private _isNewGame: boolean = false
    private _itemList: { [key: number]: ItemInfo } = null
    private _gameState: GameState = GameState.waitStart
    // private _selectLevelInfo: LevelConfigBasic = null

    public static getInstance() {
        if (!this._instance) {
            this._instance = new GameCtrl();
            this._instance._init();
        }
        return this._instance;
    }

    public static destroyInstance() {
        if (this._instance) {
            this._instance._destroy();
            delete this._instance;
            this._instance = null;
        }
    }

    private _init() {

    }

    private _destroy() { }

    clearData() {

    }

    setGameState(state: GameState) {
        this._gameState = state
    }

    getGameState() {
        return this._gameState
    }

    /** 获得全部道具数组 */
    getAllItemList() {
        if (!this._itemList) {
            let data = GameData.getLocalData("ItemList")
            this._itemList = data ? data : {}
        }
        return this._itemList
    }

    /** 设置道具数量 */
    setItemCount(itemType: number, count: number) {
        let itemList = this.getAllItemList()
        if (count > 0) {
            itemList[itemType] = { itemID: itemType, itemCount: count } as ItemInfo
        } else if (count == 0) {
            delete itemList[itemType]
        }
        GameData.saveLocalData("ItemList", itemList)
    }

    /** 获得道具数量 */
    getItemCount(itemType: number) {
        let itemList = this.getAllItemList()
        if (!itemList[itemType]) {
            return 0
        }
        return itemList[itemType].itemCount
    }

    /** 获得奖励道具 */
    addAward(itemInfoList: ItemInfo[], isShowUI: boolean = false) {
        for (let index = 0; index < itemInfoList.length; index++) {
            let itemInfo = itemInfoList[index];
            let goldCount = this.getItemCount(itemInfo.itemID)
            goldCount += itemInfo.itemCount
            this.setItemCount(itemInfo.itemID, goldCount)
        }
        // if (isShowUI && itemInfoList.length > 0) {
        //     UIManager.share.ShowUIName(WinID.ShowAwardMain, itemInfoList)
        // }
    }

    /** 消耗金币道具统一接口 */
    costItem(itemInfoList: ItemInfo[]) {
        for (let index = 0; index < itemInfoList.length; index++) {
            let itemInfo = itemInfoList[index];
            let goldCount = this.getItemCount(itemInfo.itemID)
            goldCount -= itemInfo.itemCount
            this.setItemCount(itemInfo.itemID, goldCount)
        }
    }

     /** 游戏刚打开，检测是不是今天 */
     checkDayIsToday() {
        let dayData = GameData.getLocalData("NowDay")
        let isNowDay = false
        if (dayData == null || dayData == undefined) {
            //今天是新的一天
            isNowDay = true
        } else {
            let signDate = new Date(dayData)
            let signStr = signDate.getFullYear() + "_" + signDate.getMonth() + "_" + signDate.getDate()
            let nowDate = new Date(new Date().getTime())
            let nowStr = nowDate.getFullYear() + "_" + nowDate.getMonth() + "_" + nowDate.getDate()
            isNowDay = signStr != nowStr
        }
        if (isNowDay) {
            //今天是新的一天
            GameData.saveLocalData("NowDay", new Date().getTime())

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
    }

    sendEvent(eventId: GameEvent, data: any = null) {
        GameEventManager.getInstance().dispathcGameEvent(eventId, data);
    }
}
