import GameData from "./GameData";


const { ccclass, property } = cc._decorator;

@ccclass
export default class SoundMgr extends cc.Component {

    sound_path: string = 'music/';
    sounds: { [key: number]: any } = {};
    music_enabled: boolean = true;
    audio_enabled: boolean = true;
    music: string = 'BGM';
    protected static _instance: SoundMgr;
    public static getInstance(): SoundMgr {
        if (!this._instance) {
            this._instance = new SoundMgr();
            this._instance._init();
        }
        return this._instance;
    }

    private _init() {
        this.setBgmVolume(this.getBgmVolume())
        this.setAudioVolume(this.getAudioVolume())
    }

    addSound(key: string, clip: cc.AudioClip) {
        this.sounds[key] = clip;
    }

    playFx(fxName: string, isloop: boolean = false) {
        if (!this.audio_enabled) return;
        if (this.sounds[fxName]) cc.audioEngine.playEffect(this.sounds[fxName], isloop);
    }

    playMusic(musicName: string) {
        if (!this.music_enabled) return;
        if (this.sounds[musicName]) cc.audioEngine.playMusic(this.sounds[musicName], true);
    }

    setBgmVolume(num: number) {
        cc.audioEngine.setMusicVolume(num)
        GameData.saveLocalData("MusicVolume", num)
    }

    setAudioVolume(num: number) {
        cc.audioEngine.setEffectsVolume(num)
        GameData.saveLocalData("EffectsVolume", num)
    }

    getBgmVolume() {
        let num = GameData.getLocalData("MusicVolume")
        if (num == 0) {
            return 0
        }
        return num ? num : 1
    }

    getAudioVolume() {
        let num = GameData.getLocalData("EffectsVolume")
        if (num == 0) {
            return 0
        }
        return num ? num : 1
    }

    stopMusic() {
        cc.audioEngine.stopMusic();
    }

    stopAllMusic() {
        cc.audioEngine.stopAll();
    }

    setMusic(enabled: boolean) {
        this.music_enabled = enabled;
        if (!enabled) {
            cc.audioEngine.stopMusic();
        }
    }
    setAudio(enabled: boolean) {
        this.audio_enabled = enabled;
    }

    setEnabled(enabled: boolean) {
        this.music_enabled = enabled;
        if (this.music_enabled) {
            this.playMusic(this.music);
        }
        else {
            cc.audioEngine.stopAll();
        }
    }

    getEnable() {
        return this.music_enabled;
    }


    getMusicName() {
        return this.music
    }


}
