import UIParent from "../../Base/UIParent";
import { GameEvent } from "../../Config/GameEventConfig";
import GameUtils from "../../GameUtils/GameUtils";
import { WinID } from "../../Manager/UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HomeMain extends UIParent {
    @property(sp.Skeleton)
    spine: sp.Skeleton = null;


    // private _nowIndex: number = 0

    InitUI(uiMain) {
        super.InitUI(uiMain);
    }

    ShowUI() {
        super.ShowUI();
    }

    HideUI(fun?: () => void): void {
        super.HideUI(fun)
    }

    onClickStartGame() {

    }

    onClickShowSettingMain() {
        this.uiManager.ShowUIName(WinID.GameSetting, 0)
    }

    onClickShowOtherGame() {
        this.uiManager.ShowUIName(WinID.OtherGameMain)
    }

    onDispathcGameEvent(eventId: GameEvent, eventData: any) {
        switch (eventId) {
            // case GameEvent.UpdataVit:
            //     {
            //         this._upDateVit()
            //     }
            //     break
            default:
                super.onDispathcGameEvent(eventId, eventData);
                break;
        }

    }
}