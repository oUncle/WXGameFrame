import GameBaseEventNode from "../Base/GameBaseEventNode";
import { GameEvent } from "../Config/GameEventConfig";
import GameEventManager from "../Manager/GameEventManager";
import UIManager from "../Manager/UIManager";
import GameData from "../Other/GameData";
import SoundMgr from "../Other/SoundMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIParent extends GameBaseEventNode {

    @property(cc.Node)
    uiAnimObj: cc.Node = null;
    @property
    isShowWinAudio: boolean = true;

    uiManager: UIManager;
    firstOpenUI: boolean = true;
    widData: any = null
    isWinAnim: boolean = false

    //进度条加载完初始化
    InitUI(uiMain) {
        this.uiManager = uiMain;
        GameEventManager.getInstance().pushNodeEvent(this);
        if (this.uiAnimObj) {
            this.uiAnimObj.scale = GameData.sizeType
        }
        let widget = this.node.getComponent(cc.Widget)
        if (widget) {
            widget.top = 0
            widget.bottom = 0
            widget.left = 0
            widget.right = 0
        }
    }

     //打开界面
     ShowUI(data: any = null, fun = () => { }) {
        this.widData = data
        if (this.uiAnimObj) {
            if (!this.isWinAnim) {
                this.isWinAnim = true
                this.uiAnimObj.scale = 0;
                cc.Tween.stopAllByTarget(this.uiAnimObj)
                cc.tween(this.uiAnimObj)
                    .to(0.25, { scale: GameData.sizeType + 0.2 })
                    .to(0.15, { scale: GameData.sizeType - 0.1 })
                    .to(0.1, { scale: GameData.sizeType })
                    .call(() => {
                        this.isWinAnim = false
                        fun();
                    })
                    .start();
            }
        }
        this.node.active = true;
        if (this.firstOpenUI) {
            this.firstOpenUI = false;
            this.FirstOpen();
        }
        this.UpdataFXData();
        SoundMgr.getInstance().playFx("win_open")
    }

    //隐藏界面
    HideUI(fun = () => { }) {
        if (this.uiAnimObj) {
            if (!this.isWinAnim) {
                this.isWinAnim = true
                cc.Tween.stopAllByTarget(this.uiAnimObj)
                cc.tween(this.uiAnimObj)
                    .to(0.1, { scale: GameData.sizeType + 0.2 })
                    .to(0.25, { scale: 0 })
                    .call(() => {
                        this.isWinAnim = false
                        this.node.active = false;
                        if (fun) {
                            fun();
                        }
                    })
                    .start();
            }
        } else {
            this.node.active = false;
            if (fun) {
                fun();
            }
        }
        SoundMgr.getInstance().playFx("win_close");
    }

    onClickClose() {
        this.HideUI();
    }

    //第一次打开界面
    FirstOpen() { }

    //FX成功调用一次
    FxSuccess() { }

    //打开界面更新返现数据
    UpdataFXData() { }

    sendEvent(eventId, data: any = null) {
        GameEventManager.getInstance().dispathcGameEvent(eventId, data);
    }

    onDispathcGameEvent(eventId: GameEvent, eventData: any) {
        if (super.onDispathcGameEvent) {
            super.onDispathcGameEvent(eventId, eventData);
        }
    }
}
