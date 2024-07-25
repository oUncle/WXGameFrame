
import AutoReleaseSpineModify from '../Common/AutoReleaseSpineModify';
import SpineManager from '../Manager/SpineManager';
import LZString = require('./lzstring')

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameUtils {

    private static _instance: GameUtils = null;
    public static getInstance(): GameUtils {
        if (!this._instance) {
            this._instance = new GameUtils();
        }
        return this._instance;
    }

    public setVisible(node: cc.Node | any, visible: boolean) {
        if (node) {
            if (node.node) {
                node.node.active = visible;
            } else {
                node.active = visible;
            }
        }
    }

    public setCCCNodeOpacity(node: cc.Node, value: number) {
        if (node) {
            node.opacity = value;
        }
    }

    public isVisible(node: cc.Node | any) {
        if (node) {
            if (node.node) {
                return node.node.active
            } else {
                return node.active;
            }
            return false;
        }
    }

    public setPosition(node: cc.Node | any, pos: cc.Vec2) {
        if (node && pos) {
            if (node.node) {
                node.node.setPosition(pos);
            } else {
                node.setPosition(pos);
            }
        }
    }

    public setRotation(node: cc.Node, rotation: number = 0) {
        if (node) {
            node.rotation = rotation;
        }
    }

    public setAngle(node: cc.Node, angle: number = 0) {
        if (node) {
            node.angle = angle;
        }
    }

    public setScaleX(node: cc.Node | any, scaleX: number) {
        if (node && scaleX) {
            if (node.node) {
                node.node.scaleX = scaleX;
            } else {
                node.scaleX = scaleX;
            }
        }
    }

    public setColor(node: cc.Node | any, color: cc.Color) {
        if (node && color) {
            if (node.node) {
                node.node.color = color
            } else {
                node.scaleX = color;
            }
        }
    }

    public getPosition(node: cc.Node) {
        if (node) {
            return node.getPosition();
        }
        return cc.v2(0, 0);
    }

    public setProgress(node: cc.ProgressBar | cc.Slider, progress: number) {
        //原来条件是：node && node.progress ，node.progress为0，则为false
        if (node) {
            node.progress = progress;
        }
    }

    public setString(label: cc.Label | cc.RichText | cc.EditBox, text: string | number) {
        // cc.log(new Error().stack);
        // cc.log(text);

        if (label) {
            label.string = text + "" || "";
        }
    }

    public getString(label: cc.Label | cc.RichText | cc.EditBox): string {
        if (label) {
            return label.string
        }
        return "";
    }

    //判断非法字符
    public isHaveSpecial(text: string): boolean {
        let reg = /^(\w|[\u4E00-\u9FA5])*$/;
        // let reg = /^([a-zA-Z0-9]|[\u4E00-\u9FA5])*$/;
        if (text.match(reg)) {
            return false;
        } else {
            return true;
        }
    }

    public setCCCNodeColor(cccNode: cc.Node, color: cc.Color | string, isChild: boolean = true) {
        if (!cccNode) {
            return;
        }

        this._setColor(cccNode, color);
        if (isChild) {
            let children = cccNode.children;
            if (!children || children.length <= 0)
                return;
            for (let i = 0; i < children.length; i++) {
                this.setCCCNodeColor(children[i], color, isChild);
            }
        }
    }

    private _setColor(cccNode: cc.Node, color: cc.Color | string) {
        if (cccNode) {
            if (typeof color == "string") {
                cccNode.color = this.getColorRGBA(color);
            }
            else {
                cccNode.color = color;
            }
        }
    }

    public getColorRGBA(colorString: string): cc.Color {
        let colorValueList = [];
        if (!colorString) { //默认为白色
            colorString = "#ffffff";
        }
        if (colorString[0] != '#') {
            colorString = '#' + colorString;
        }
        if (colorString.length < 9) {
            colorString += "ff";
        }
        for (let i = 1; i < 9; i += 2) {
            colorValueList.push(parseInt("0x" + colorString.slice(i, i + 2)));
        }
        let color = cc.color(colorValueList[0], colorValueList[1], colorValueList[2], colorValueList[3]);
        return color;
    }

    public setCCCNodeGray(node: cc.Node | cc.Component, isGray: boolean, isChild: boolean = true) {
        if (!node) {
            return;
        }

        let cccNode: cc.Node = null;
        if (node instanceof cc.Component) {
            cccNode = node.node;
        } else {
            cccNode = node;
        }
        if (!cccNode) {
            return;
        }

        let spr: cc.Sprite = cccNode.getComponent(cc.Sprite);
        if (spr) {
            this.setCCCSpriteGray(spr, isGray, false);
        }
        let label: cc.Label = cccNode.getComponent(cc.Label);
        if (label) {
            this.setCCCLabelGray(label, isGray, false);
        }
        let button: cc.Button = cccNode.getComponent(cc.Button);
        if (button) {
            this.setButtonGray(button, isGray, false);
        }

        if (isChild) {
            let children = cccNode.children;
            if (!children || children.length <= 0)
                return;
            for (let i = 0; i < children.length; i++) {
                this.setCCCNodeGray(children[i], isGray, isChild);
            }
        }
    }

    public setCCCSpriteGray(sprite: cc.Sprite, isGray: boolean, isChild: boolean = true) {
        if (!sprite) {
            return;
        }
        // sprite.setState(isGray ? 1 : 0);//升级到2.1.2后 废弃了
        //以下为2.1.2版本
        let mat: cc.Material = null;
        if (isGray) {
            mat = cc.Material.getBuiltinMaterial('2d-gray-sprite');
        }
        else {
            mat = cc.Material.getBuiltinMaterial('2d-sprite');
        }
        sprite.setMaterial(0, mat);
        //---
        if (isChild) {
            let children = sprite.node.children;
            if (!children || children.length <= 0)
                return;
            for (let i = 0; i < children.length; i++) {
                this.setCCCSpriteGray(children[i].getComponent(cc.Sprite), isGray, isChild);
            }
        }
    }

    public setCCCLabelGray(label: cc.Label, isGray: boolean, isChild: boolean = true) {
        if (!label) {
            return;
        }
        // sprite.setState(isGray ? 1 : 0);//升级到2.1.2后 废弃了
        //以下为2.1.2版本
        let mat: cc.Material = null;
        if (isGray) {
            mat = cc.Material.getBuiltinMaterial('2d-gray-sprite');
        }
        else {
            mat = cc.Material.getBuiltinMaterial('2d-sprite');
        }
        label.setMaterial(0, mat);
        //---
        if (isChild) {
            let children = label.node.children;
            if (!children || children.length <= 0)
                return;
            for (let i = 0; i < children.length; i++) {
                this.setCCCLabelGray(children[i].getComponent(cc.Label), isGray, isChild);
            }
        }
    }

    public setButtonGray(button: cc.Button, isGray: boolean = true, isChild: boolean = true) {
        if (button) {
            button.interactable = !isGray;
            button.enableAutoGrayEffect = true;

            if (isChild) {
                let children = button.node.children;
                for (let i = 0; i < children.length; i++) {
                    let child = children[i];
                    this.setCCCNodeGray(child, isGray, isChild);
                }
            }
        }
    }

    /**
     * 判断该日期是否到期 time 时间戳(毫秒)
     */
    public checkTimeISOverDue(time: number) {
        let date = new Date()
        let nowTime = date.getTime()
        return nowTime - time >= 0
    }

    public isNull(obj: any): boolean {
        return obj === null || obj === undefined;
    }

    public replaceString(text: string, args: any[] = []) {
        if (!text) {
            return "";
        }
        let result = text;
        if (!this.isNull(args) && args.length > 0) {
            for (let i = 0; i < args.length; i++) {
                let re = new RegExp('\\{' + (i) + '\\}', 'gm');
                result = result.replace(re, args[i]);
            }
        }
        return result;
    }

    public getChildByName(node: cc.Node, name: string, component: { prototype: cc.Component } | string = null) {
        let temp = null;
        if (node) {
            temp = node.getChildByName(name);
            if (!temp) {
                let children = node.children;
                for (let i = 0; i < children.length; ++i) {
                    temp = this.getChildByName(children[i], name);
                    if (temp) {
                        if (component) {
                            return temp.getComponent(component);
                        }
                        return temp;
                    }
                }
            }
        }
        return temp;
    }

    public getCompressString(str: string): string {
        if (!str) {
            return "";
        }
        return LZString.compressToBase64(str);
    }

    public getDecompressString(compressString: string): string {
        if (!compressString) {
            return "";
        }
        return LZString.decompressFromBase64(compressString);
    }

    //读取英雄动画换皮
    async loadGeneralAnimation(spine: sp.Skeleton, spineModifyList = null) {
        if (spineModifyList && spineModifyList.length > 0) {
            for (let i = 0; i < spineModifyList.length; i++) {
                const smd = spineModifyList[i];
                this.modifySpineAttachment(spine, smd.slotName, smd.sfPath)
            }
        }
    }

    public modifySpineAttachment(spo: sp.Skeleton, slotName: string, sfPath: string) {
        if (!spo || !slotName || !sfPath) {
            cc.error("modifySpineAttachment args err");
            return;
        }
        cc.resources.load(sfPath, cc.SpriteFrame, (err: Error | null, sf: cc.SpriteFrame) => {
            if (!err !== null && err !== undefined) {
                console.error(`loadSpineSF ${sfPath} error:`, err);
                return;
            }
            spo.changeSlotSkin(slotName, sf);

            let autoCom: AutoReleaseSpineModify = spo.getComponent(AutoReleaseSpineModify);
            if (spo && !autoCom) {
                autoCom = spo.addComponent(AutoReleaseSpineModify);
            }
            autoCom.addModifySF(sf);
        });
    }

    /**
    * 局部换皮肤，可以更换皮肤指定的部位。非常nice！
    * @param spine 要替换的spine动画
    * @param skinName 要替换的部件皮肤名称
    * @param slotName 要替换的部件的插槽名称
    * @param targetAttaName  Spine中皮肤占位符的名字
     */
    changeSlot(spine: sp.Skeleton, skinName: string, slotName: string, targetAttaName: string) {
        //查找局部皮肤
        let skeletonData = spine.skeletonData.getRuntimeData();
        let targetSkin: sp.spine.Skin = skeletonData.findSkin(skinName);

        if (!targetSkin) {
            cc.warn("找不到这个皮肤:", skinName)
            return
        }

        //查找局部皮肤下的插槽与附件
        let targetSkinSlotIndex = skeletonData.findSlotIndex(slotName);
        let atta = targetSkin.getAttachment(targetSkinSlotIndex, targetAttaName);

        //查找全身皮肤下的插槽
        let curSlot = spine.findSlot(slotName);

        //替换全身皮肤插槽的附件
        curSlot && curSlot.setAttachment(atta);
    }
}
