import GameUtils from "../../GameUtils/GameUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TipText extends cc.Component {

    @property(cc.Label)
    tipText: cc.Label = null;

    Init(value: string, fun = () => { }) {
        GameUtils.getInstance().setString(this.tipText, value)
        // let y = this.node.y + 150;
        // cc.tween(this.node)
        //     .delay(0.5)
        //     .to(1, { y: y })
        //     .delay(1)
        //     .to(1, { opacity: 0 })
        //     .call(() => {
        //         fun();
        //         this.node.destroy();
        //     })
        //     .start()
    }

    hideItem() {
        this.node.destroy();
    }
}
