// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class AutoReleaseSpineModify extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    private _sfs:cc.SpriteFrame[] = []

    // onLoad () {}

    start () {

    }

    /**
     * addModifySFPath
     */
    public addModifySF(sf: cc.SpriteFrame) {
        this._sfs.push(sf);
        sf.addRef();
        cc.log("addModifySF",sf.name)
    }

    protected onDestroy(): void {
        cc.log("AutoRelease addModifySF s")
        for (let i = 0; i < this._sfs.length; i++) {
           this._sfs[i].decRef();
           cc.log("AutoRelease addModifySF",this._sfs[i].name)
        }
        cc.log("AutoRelease addModifySF e")
    }

    // update (dt) {}
}
