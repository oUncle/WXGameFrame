import UIParent from "../../Base/UIParent";
import SdkCtrl from "../../Ctrl/SdkCtrl";


const { ccclass, property } = cc._decorator;

@ccclass
export default class OtherGameMain extends UIParent {
    // @property(cc.Slider)
    // bg1MusicSlider: cc.Slider = null;

    // LIFE-CYCLE CALLBACKS:

    ShowUI(data: any) {
        super.ShowUI(data);
        SdkCtrl.getInstance().ShowBanner()
    }

    onClickClose() {
        this.HideUI()
        SdkCtrl.getInstance().HideBanner()
    }
}