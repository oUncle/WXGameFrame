
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Other/SoundMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPdGhlclxcU291bmRNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBRzVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbUdDO1FBakdHLGdCQUFVLEdBQVcsUUFBUSxDQUFDO1FBQzlCLFlBQU0sR0FBMkIsRUFBRSxDQUFDO1FBQ3BDLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLFdBQUssR0FBVyxLQUFLLENBQUM7O0lBNkYxQixDQUFDO2lCQW5Hb0IsUUFBUTtJQVFYLG9CQUFXLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVEsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDMUI7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVPLHdCQUFLLEdBQWI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxHQUFXLEVBQUUsSUFBa0I7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxNQUFjLEVBQUUsTUFBdUI7UUFBdkIsdUJBQUEsRUFBQSxjQUF1QjtRQUMxQyxJQUFJLENBQUMsSUFB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QUMsU0FBUyxHQW1HakQ7a0JBbkdvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVEYXRhIGZyb20gXCIuL0dhbWVEYXRhXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kTWdyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHNvdW5kX3BhdGg6IHN0cmluZyA9ICdtdXNpYy8nO1xuICAgIHNvdW5kczogeyBba2V5OiBudW1iZXJdOiBhbnkgfSA9IHt9O1xuICAgIG11c2ljX2VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGF1ZGlvX2VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIG11c2ljOiBzdHJpbmcgPSAnQkdNJztcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9pbnN0YW5jZTogU291bmRNZ3I7XG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBTb3VuZE1nciB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFNvdW5kTWdyKCk7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5faW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0KCkge1xuICAgICAgICB0aGlzLnNldEJnbVZvbHVtZSh0aGlzLmdldEJnbVZvbHVtZSgpKVxuICAgICAgICB0aGlzLnNldEF1ZGlvVm9sdW1lKHRoaXMuZ2V0QXVkaW9Wb2x1bWUoKSlcbiAgICB9XG5cbiAgICBhZGRTb3VuZChrZXk6IHN0cmluZywgY2xpcDogY2MuQXVkaW9DbGlwKSB7XG4gICAgICAgIHRoaXMuc291bmRzW2tleV0gPSBjbGlwO1xuICAgIH1cblxuICAgIHBsYXlGeChmeE5hbWU6IHN0cmluZywgaXNsb29wOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLmF1ZGlvX2VuYWJsZWQpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuc291bmRzW2Z4TmFtZV0pIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zb3VuZHNbZnhOYW1lXSwgaXNsb29wKTtcbiAgICB9XG5cbiAgICBwbGF5TXVzaWMobXVzaWNOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLm11c2ljX2VuYWJsZWQpIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuc291bmRzW211c2ljTmFtZV0pIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLnNvdW5kc1ttdXNpY05hbWVdLCB0cnVlKTtcbiAgICB9XG5cbiAgICBzZXRCZ21Wb2x1bWUobnVtOiBudW1iZXIpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUobnVtKVxuICAgICAgICBHYW1lRGF0YS5zYXZlTG9jYWxEYXRhKFwiTXVzaWNWb2x1bWVcIiwgbnVtKVxuICAgIH1cblxuICAgIHNldEF1ZGlvVm9sdW1lKG51bTogbnVtYmVyKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUobnVtKVxuICAgICAgICBHYW1lRGF0YS5zYXZlTG9jYWxEYXRhKFwiRWZmZWN0c1ZvbHVtZVwiLCBudW0pXG4gICAgfVxuXG4gICAgZ2V0QmdtVm9sdW1lKCkge1xuICAgICAgICBsZXQgbnVtID0gR2FtZURhdGEuZ2V0TG9jYWxEYXRhKFwiTXVzaWNWb2x1bWVcIilcbiAgICAgICAgaWYgKG51bSA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW0gPyBudW0gOiAxXG4gICAgfVxuXG4gICAgZ2V0QXVkaW9Wb2x1bWUoKSB7XG4gICAgICAgIGxldCBudW0gPSBHYW1lRGF0YS5nZXRMb2NhbERhdGEoXCJFZmZlY3RzVm9sdW1lXCIpXG4gICAgICAgIGlmIChudW0gPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtID8gbnVtIDogMVxuICAgIH1cblxuICAgIHN0b3BNdXNpYygpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XG4gICAgfVxuXG4gICAgc3RvcEFsbE11c2ljKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XG4gICAgfVxuXG4gICAgc2V0TXVzaWMoZW5hYmxlZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLm11c2ljX2VuYWJsZWQgPSBlbmFibGVkO1xuICAgICAgICBpZiAoIWVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEF1ZGlvKGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5hdWRpb19lbmFibGVkID0gZW5hYmxlZDtcbiAgICB9XG5cbiAgICBzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5tdXNpY19lbmFibGVkID0gZW5hYmxlZDtcbiAgICAgICAgaWYgKHRoaXMubXVzaWNfZW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5TXVzaWModGhpcy5tdXNpYyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRFbmFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm11c2ljX2VuYWJsZWQ7XG4gICAgfVxuXG5cbiAgICBnZXRNdXNpY05hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm11c2ljXG4gICAgfVxuXG5cbn1cbiJdfQ==