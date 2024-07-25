import SdkCtrl from "../../Ctrl/SdkCtrl";
import GameUtils from "../../GameUtils/GameUtils";
import GameData, { Platform } from "../../Other/GameData";



const { ccclass, property } = cc._decorator;

@ccclass
export default class OtherGameBtn extends cc.Component {


    @property()
    isAnim: boolean = false;
    @property()
    firstAnimTime: number = 1;
    @property()
    animTime: number = 5;
    @property
    appid: string = 'wxce315238fc57bc91';

    // LIFE-CYCLE CALLBACKS:

    start() {
        GameUtils.getInstance().setVisible(this.node, false)
        let pingtai = GameData.getPlatform()
        switch (pingtai) {
            case Platform.wx:
                {
                    GameUtils.getInstance().setVisible(this.node, true)
                    if (this.isAnim) {
                        this.schedule(() => {
                            this.anim();
                        }, this.animTime, this.firstAnimTime)
                    }
                }
                break;
        }
    }

    anim() {
        cc.Tween.stopAllByTarget(this.node)
        cc.tween(this.node)
            .to(0.15, { angle: -30 })
            .to(0.3, { angle: 30 })
            .to(0.15, { angle: 0 })
            .start()
    }

    onClickGoGame() {
        SdkCtrl.getInstance().navigateToMiniProgram(this.appid)
    }
}
