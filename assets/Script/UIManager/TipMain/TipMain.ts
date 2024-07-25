

import UIParent from "../../Base/UIParent";
import GameUtils from "../../GameUtils/GameUtils";
import TipText from "./TipText";


const { ccclass, property } = cc._decorator;

@ccclass
export default class TipMain extends UIParent {
    @property(cc.Node)
    tipViewItem: cc.Node = null;

    @property(cc.Node)
    tipItemParent: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:
    private _tip: any[] = [];

    private _moveSpeed: number = 120;
    private _staticTime: number = 0.35;//tip滞留时间
    private _endY: number = 150;//tip结束位置Y
    private _count: number = 4;//tip最多持有数量
    private _positionY: number[] = [];
    private _isInitData: boolean = false


    ShowUI(data?: any, fun?: () => void) {
        if (!this._isInitData) {
            this._isInitData = true
            // this._endY = (this._count - 1) * this.tipViewItem.height
            for (let i = 0; i < this._count; i++) {
                // let drc = ConfigManager.getInstance().getDesignResoulutionInfo();
                // table.insert(positionY, display.center.y + (i-1)*tipNode:getContentSize().height * CC_DESIGN_RESOLUTION.scale)
                this._positionY[i] = i * this.tipViewItem.getContentSize().height //* drc.uiScale
            }
        }
        // this.setBlockInputEventEnable(false);
        // this.showBackMask(false);

        GameUtils.getInstance().setVisible(this.tipViewItem, false);
        GameUtils.getInstance().setVisible(this.node, true);

        this.createTipView(data);
    }

    _unrealOnDisable() {
        this.tipItemParent.removeAllChildren()
        this._tip = []
    }

    createTipView(tipContent: string) {
        let itemNode = this.tipViewItem;
        let item = cc.instantiate(itemNode);
        this.tipItemParent.addChild(item)
        GameUtils.getInstance().setVisible(item, true)
        let sItem = item.getComponent(TipText)
        sItem.Init(tipContent)
        // if (this._tip.length > 4) {
        //     this._tip[0].tipItem.hideItem();
        //     this._tip.shift();
        //     this.checkCloseWindow();
        // }
        this._tip.push({
            time: 0,
            tipItem: sItem,
            fadeout: false
        })
        // this._tip[this._tip.length] = {
        //     time: 0,
        //     tipItem: sItem,
        //     fadeout: false
        // }
        sItem.scheduleOnce(() => {
            this._tip.shift();
            sItem.hideItem();
            this.checkCloseWindow();
        }, 2);
        //this.updateItemPos();

    }

    update(dt) {
        if (this._tip.length <= 0) {
            return;
        }
        let numY = 0
        // let drc = ConfigManager.getInstance().getDesignResoulutionInfo();
        let numYIndex = 0
        for (let i = this._tip.length - 1; i >= 0; i--) {
            if (numYIndex < this._count) {
                numY += (numYIndex == 0) ? 0 : (this._tip[i].tipItem.node.height / 2 + this._tip[i + 1].tipItem.node.height / 2) //* drc.uiScale
                this._positionY[numYIndex] = numY
                numYIndex++
            }
        }
        for (let index = 0; index < this._count; index++) {
            if (!this._tip[index]) {
                numY += this.tipViewItem.getContentSize().height //* drc.uiScale
                this._positionY[index] = numY
            }
        }
        this._endY = this._positionY[this._positionY.length - 1]
        for (let index = 0; index < this._tip.length; index++) {
            let index_2 = this._tip.length - index - 1
            if (index_2 >= this._count - 1) {
                index_2 = this._count - 1
            }

            let tipData = this._tip[index]
            tipData.time = tipData.time + dt

            if (index_2 != -1) {
                if (index_2 < this._count && tipData.tipItem.node.y <= this._positionY[index_2]) {
                    tipData.tipItem.node.y = this._positionY[index_2]
                }
            }

            if (tipData.time >= this._staticTime) {
                //this._tip[i].tipItem.node.y += this._moveSpeed * dt;
                let y = tipData.tipItem.node.y
                let v = Math.abs((this._positionY[2] - y) / (1 - tipData.time))
                tipData.tipItem.node.y += v * dt
                if (tipData.tipItem.node.y > this._endY) {
                    tipData.tipItem.node.y = this._endY;
                }
                if (!tipData.fadeout) {
                    tipData.fadeout = true;
                    let time = 0.7 - ((index_2 + 1) * 0.1)
                    cc.Tween.stopAllByTarget(tipData.tipItem.node);
                    cc.tween(tipData.tipItem.node).to(time, { opacity: 0 }).start()
                }
            }
            // if (tipData.time>=2) {
            //     tipData.tipItem.hideItem();
            //     this._tip.shift();
            //     this.checkCloseWindow();
            // }
        }
    }

    updateItemPos() {
        for (let i = this._tip.length - 1; i > 0; i--) {
            let nextItem = this._tip[i - 1].tipItem.node;
            let thisItem = this._tip[i].tipItem.node;
            if (nextItem.y - thisItem.y < thisItem.height) {
                nextItem.y = thisItem.y + thisItem.height;
                if (nextItem.y > this._endY) {
                    nextItem.y = this._endY;
                }
            }
        }
    }

    // closeWinodw(isNow: boolean = false) {
    //     // GameUtils.getInstance().setVisible(this.node, false);
    //     if (isNow) {
    //         this.node.destroy();
    //     } else {
    //         this.unrealCloseWindow();
    //     }
    // }

    checkCloseWindow() {
        if (this._tip.length == 0) {
            // this.closeWinodw();
            // this.unrealCloseWindow();
            this.HideUI()
        }
    }
}
