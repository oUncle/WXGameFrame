import UIParent from "../../Base/UIParent";
import { GameEvent } from "../../Config/GameEventConfig";
import SdkCtrl from "../../Ctrl/SdkCtrl";
import GameUtils from "../../GameUtils/GameUtils";
import GameEventManager from "../../Manager/GameEventManager";
import GameData from "../../Other/GameData";
import SoundMgr from "../../Other/SoundMgr";


const { ccclass, property } = cc._decorator;

@ccclass
export default class GameSetting extends UIParent {
    @property(cc.Slider)
    bg1MusicSlider: cc.Slider = null;
    @property(cc.Slider)
    bg1AudioSlider: cc.Slider = null;
    @property(cc.ProgressBar)
    bg1MusicBar: cc.ProgressBar = null;
    @property(cc.ProgressBar)
    bg1AudioBar: cc.ProgressBar = null;

    @property(cc.Node)
    closeGameBtn: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:
    private _isSetMusic: boolean = true
    private _isSetAudio: boolean = true
    private _musicNum: number = 0
    private _audioNum: number = 0

    ShowUI(data: any) {
        super.ShowUI(data);
        GameData.isPause = true
        this._musicNum = SoundMgr.getInstance().getBgmVolume()
        this._audioNum = SoundMgr.getInstance().getAudioVolume()
        this.bg1MusicSlider.progress = this._musicNum
        this.bg1AudioSlider.progress = this._audioNum
        this.bg1MusicBar.progress = this._musicNum
        this.bg1AudioBar.progress = this._audioNum
        this._isSetMusic = true
        this._isSetAudio = true
        SdkCtrl.getInstance().ShowBanner()
        GameUtils.getInstance().setVisible(this.closeGameBtn, data == 1)
    }

    onClickMusicSlider(sender, event) {
        this._musicNum = sender.progress
        if (this._isSetMusic) {
            this._isSetMusic = false
            SoundMgr.getInstance().setBgmVolume(this._musicNum)
            GameUtils.getInstance().setProgress(this.bg1MusicBar, this._musicNum)
            this.scheduleOnce(() => {
                this._isSetMusic = true
                SoundMgr.getInstance().setBgmVolume(this._musicNum)
                GameUtils.getInstance().setProgress(this.bg1MusicBar, this._musicNum)
            }, 0.02)
        }
    }

    onClickAoudioSlider(sender, event) {
        this._audioNum = sender.progress
        if (this._isSetAudio) {
            this._isSetAudio = false
            SoundMgr.getInstance().setAudioVolume(this._audioNum)
            GameUtils.getInstance().setProgress(this.bg1AudioBar, this._audioNum)
            this.scheduleOnce(() => {
                this._isSetAudio = true
                SoundMgr.getInstance().setAudioVolume(this._audioNum)
                GameUtils.getInstance().setProgress(this.bg1AudioBar, this._audioNum)
            }, 0.02)
        }
    }

    onClickClose() {
        this.HideUI()
    }

    HideUI(fun?: () => void): void {
        super.HideUI(fun)
        GameData.isPause = false
        SdkCtrl.getInstance().HideBanner()
    }

    sendEvent(eventId: GameEvent, data: any = null) {
        GameEventManager.getInstance().dispathcGameEvent(eventId, data);
    }
}