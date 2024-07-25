import UIParent from "../../Base/UIParent";
import GameUtils from "../../GameUtils/GameUtils";


const { ccclass, property } = cc._decorator;

@ccclass
export default class PopUpMain extends UIParent {

    @property(cc.Label)
    tipLabel: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:
    private _confirmFun: Function = null
    private _cancelFun: Function = null

    // onLoad () {}

    ShowUI(data?: any, fun?: () => void) {
        super.ShowUI(data, fun)
        this._confirmFun = data.confirmFun
        this._cancelFun = data.cancelFun
        GameUtils.getInstance().setString(this.tipLabel, data.data)
    }

    onClickConfirmFun() {
        if (this._confirmFun) {
            this._confirmFun()
        }
        this.HideUI()
    }

    onClickCancelFun() {
        if (this._cancelFun) {
            this._cancelFun()
        }
        this.HideUI()
    }

    // update (dt) {}
}
