
import UIParent from "../Base/UIParent";
import GameCtrl from "../Ctrl/GameCtrl";
import SdkCtrl from "../Ctrl/SdkCtrl";
import GameData from "../Other/GameData";
import SoundMgr from "../Other/SoundMgr";

export enum WinID {
    GameSetting = "GameSetting",
    HomeMain = "HomeMain",
    OtherGameMain = "OtherGameMain",
    PopUpMain = "PopUpMain",
    TipMain = "TipMain",
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIManager extends cc.Component {
    @property(cc.ProgressBar)
    loadBar: cc.ProgressBar = null;
    @property(cc.Node)
    panelParent: cc.Node = null;
    @property(cc.Node)
    tipParent: cc.Node = null;
    @property(cc.Label)
    versions: cc.Label = null;

    allUIPanel: UIParent[] = [];
    UIPlaneDictionary: { [key: string]: UIParent; } = {};
    isload: boolean = false
    isShow: boolean = false;
    loadStateList: boolean[] = []
    public static share: UIManager;

    onLoad() {
        // cc.sys.localStorage.removeItem("LocalData")
        UIManager.share = this;
        let view = cc.view.getFrameSize()
        if (view.height / view.width < 10 / 17) {//1.7
            GameData.sizeType = view.height / (view.width * (10 / 17));
        }

        this.LoadUIPanel();

        // GameUtils.getInstance().setString(this.versions, VersionsData.Versions)

        // cc.director.getPhysicsManager().enabled = true
        // cc.director.getCollisionManager().enabled = true
        // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        // cc.PhysicsManager.DrawBits.e_jointBit |
        // cc.PhysicsManager.DrawBits.e_shapeBit;

        SdkCtrl.getInstance().showShareMenu()
        cc.game.on(cc.game.EVENT_SHOW, () => {
            //打开游戏界面
            let eventList = GameData.showGameEvent
            for (let index = 0; index < eventList.length; index++) {
                eventList[index]()
            }
            GameData.showGameEvent = []
            // this.sendEvent(GameEvent.UpdataVit)
        })
        cc.game.on(cc.game.EVENT_HIDE, () => {
            //关闭游戏界面
            let eventList = GameData.hideGameEvent
            for (let index = 0; index < eventList.length; index++) {
                eventList[index]()
            }
            GameData.hideGameEvent = []
        })
    }

    start() {
        this.LoadGameBundle();
        this.startPor();
    }

    LoadUIPanel() {
        let uiPath = [];
        let uiPanel = [
            WinID.HomeMain,
            WinID.TipMain,
            WinID.OtherGameMain,
        ];
        for (let i = 0; i < uiPanel.length; i++) {
            uiPath[i] = "UIPanel/" + uiPanel[i] + "/" + uiPanel[i];
        }
        cc.loader.loadResArray(uiPath, cc.Prefab, (completedCount: number, totalCount: number, item: any) => {
            //console.log(completedCount, totalCount, item);
        }, (msg: Error, res: any[]) => {
            //console.log(msg, res);
            for (let i = 0; i < res.length; i++) {
                let obj = cc.instantiate(res[i]);
                if (obj.name == WinID.TipMain) {
                    obj.parent = this.tipParent
                } else {
                    obj.parent = this.panelParent;
                }
                let uiPlaneSpr = obj.getComponent(obj.name);
                this.UIPlaneDictionary[obj.name] = uiPlaneSpr;
                obj.active = false;
            }
            this.isload = true;


        })
    }

    LoadGameBundle() {
        let nowIndex = this.loadStateList.length
        this.loadStateList[nowIndex] = false
        cc.assetManager.loadBundle('Game', (err, bundle) => {
            this.loadStateList[nowIndex] = true

            let nowIndex1 = this.loadStateList.length
            this.loadStateList[nowIndex1] = false
            bundle.loadDir("Music", cc.AudioClip, (err, clips: any) => {
                for (let i = 0; i < clips.length; i++) {
                    SoundMgr.getInstance().addSound(clips[i].name, clips[i]);
                }
                SoundMgr.getInstance().playMusic("BGM")
                this.loadStateList[nowIndex1] = true
            });
        });
    }

    startPor() {
        let count = 0;
        this.loadBar.progress = count;
        let callback = (event) => {
            if (count >= 0.9) {
                if (this.isload && this.checkIsLoadSuccess()) {
                    count += 0.015;
                }
            } else {
                count += 0.015;
            }
            this.loadBar.progress = count;
            if (count >= 1) {
                this.isShow = true;
                this.unschedule(callback);
                this.loadBar.node.parent.active = false;
                GameCtrl.getInstance().checkDayIsToday()
                for (let i in this.UIPlaneDictionary) {
                    this.UIPlaneDictionary[i].InitUI(this);
                }
                this.ShowUIName(WinID.HomeMain);
            }
        }
        this.schedule(callback, 0.02);
    }

    checkIsLoadSuccess() {
        for (let index = 0; index < this.loadStateList.length; index++) {
            let state = this.loadStateList[index];
            if (!state) {
                return false
            }
        }
        return true
    }

    ShowUIName(uiName: WinID, data: any = null, fun = () => { }) {
        if (this.UIPlaneDictionary[uiName]) {
            this.UIPlaneDictionary[uiName].ShowUI(data, fun);
        } else {
            cc.log("空界面")
        }
    }

    HideUIName(uiName) {
        if (this.UIPlaneDictionary[uiName]) {
            this.UIPlaneDictionary[uiName].onClickClose();
        } else {
            cc.log("空界面")
        }
    }

    showTip(str: string) {
        this.ShowUIName(WinID.TipMain, str)
    }

    GetUIPanl(uiName): any {
        return this.UIPlaneDictionary[uiName];
    }
}