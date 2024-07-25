"use strict";
cc._RF.push(module, '48519eBSs9KNpciFARl2X9H', 'SoundMgr');
// Script/Other/SoundMgr.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameData_1 = require("./GameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundMgr = /** @class */ (function (_super) {
    __extends(SoundMgr, _super);
    function SoundMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sound_path = 'music/';
        _this.sounds = {};
        _this.music_enabled = true;
        _this.audio_enabled = true;
        _this.music = 'BGM';
        return _this;
    }
    SoundMgr_1 = SoundMgr;
    SoundMgr.getInstance = function () {
        if (!this._instance) {
            this._instance = new SoundMgr_1();
            this._instance._init();
        }
        return this._instance;
    };
    SoundMgr.prototype._init = function () {
        this.setBgmVolume(this.getBgmVolume());
        this.setAudioVolume(this.getAudioVolume());
    };
    SoundMgr.prototype.addSound = function (key, clip) {
        this.sounds[key] = clip;
    };
    SoundMgr.prototype.playFx = function (fxName, isloop) {
        if (isloop === void 0) { isloop = false; }
        if (!this.audio_enabled)
            return;
        if (this.sounds[fxName])
            cc.audioEngine.playEffect(this.sounds[fxName], isloop);
    };
    SoundMgr.prototype.playMusic = function (musicName) {
        if (!this.music_enabled)
            return;
        if (this.sounds[musicName])
            cc.audioEngine.playMusic(this.sounds[musicName], true);
    };
    SoundMgr.prototype.setBgmVolume = function (num) {
        cc.audioEngine.setMusicVolume(num);
        GameData_1.default.saveLocalData("MusicVolume", num);
    };
    SoundMgr.prototype.setAudioVolume = function (num) {
        cc.audioEngine.setEffectsVolume(num);
        GameData_1.default.saveLocalData("EffectsVolume", num);
    };
    SoundMgr.prototype.getBgmVolume = function () {
        var num = GameData_1.default.getLocalData("MusicVolume");
        if (num == 0) {
            return 0;
        }
        return num ? num : 1;
    };
    SoundMgr.prototype.getAudioVolume = function () {
        var num = GameData_1.default.getLocalData("EffectsVolume");
        if (num == 0) {
            return 0;
        }
        return num ? num : 1;
    };
    SoundMgr.prototype.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    SoundMgr.prototype.stopAllMusic = function () {
        cc.audioEngine.stopAll();
    };
    SoundMgr.prototype.setMusic = function (enabled) {
        this.music_enabled = enabled;
        if (!enabled) {
            cc.audioEngine.stopMusic();
        }
    };
    SoundMgr.prototype.setAudio = function (enabled) {
        this.audio_enabled = enabled;
    };
    SoundMgr.prototype.setEnabled = function (enabled) {
        this.music_enabled = enabled;
        if (this.music_enabled) {
            this.playMusic(this.music);
        }
        else {
            cc.audioEngine.stopAll();
        }
    };
    SoundMgr.prototype.getEnable = function () {
        return this.music_enabled;
    };
    SoundMgr.prototype.getMusicName = function () {
        return this.music;
    };
    var SoundMgr_1;
    SoundMgr = SoundMgr_1 = __decorate([
        ccclass
    ], SoundMgr);
    return SoundMgr;
}(cc.Component));
exports.default = SoundMgr;

cc._RF.pop();