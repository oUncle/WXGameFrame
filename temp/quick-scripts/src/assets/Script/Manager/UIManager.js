"use strict";
cc._RF.push(module, '18c9afpMBFPV7msMxMGnST7', 'UIManager');
// Script/Manager/UIManager.ts

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
exports.WinID = void 0;
var GameCtrl_1 = require("../Ctrl/GameCtrl");
var SdkCtrl_1 = require("../Ctrl/SdkCtrl");
var GameData_1 = require("../Other/GameData");
var SoundMgr_1 = require("../Other/SoundMgr");
var WinID;
(function (WinID) {
    WinID["GameSetting"] = "GameSetting";
    WinID["HomeMain"] = "HomeMain";
    WinID["OtherGameMain"] = "OtherGameMain";
    WinID["PopUpMain"] = "PopUpMain";
    WinID["TipMain"] = "TipMain";
})(WinID = exports.WinID || (exports.WinID = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadBar = null;
        _this.panelParent = null;
        _this.tipParent = null;
        _this.versions = null;
        _this.allUIPanel = [];
        _this.UIPlaneDictionary = {};
        _this.isload = false;
        _this.isShow = false;
        _this.loadStateList = [];
        return _this;
    }
    UIManager_1 = UIManager;
    UIManager.prototype.onLoad = function () {
        // cc.sys.localStorage.removeItem("LocalData")
        UIManager_1.share = this;
        var view = cc.view.getFrameSize();
        if (view.height / view.width < 10 / 17) { //1.7
            GameData_1.default.sizeType = view.height / (view.width * (10 / 17));
        }
        this.LoadUIPanel();
        // GameUtils.getInstance().setString(this.versions, VersionsData.Versions)
        // cc.director.getPhysicsManager().enabled = true
        // cc.director.getCollisionManager().enabled = true
        // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        // cc.PhysicsManager.DrawBits.e_jointBit |
        // cc.PhysicsManager.DrawBits.e_shapeBit;
        SdkCtrl_1.default.getInstance().showShareMenu();
        cc.game.on(cc.game.EVENT_SHOW, function () {
            //打开游戏界面
            var eventList = GameData_1.default.showGameEvent;
            for (var index = 0; index < eventList.length; index++) {
                eventList[index]();
            }
            GameData_1.default.showGameEvent = [];
            // this.sendEvent(GameEvent.UpdataVit)
        });
        cc.game.on(cc.game.EVENT_HIDE, function () {
            //关闭游戏界面
            var eventList = GameData_1.default.hideGameEvent;
            for (var index = 0; index < eventList.length; index++) {
                eventList[index]();
            }
            GameData_1.default.hideGameEvent = [];
        });
    };
    UIManager.prototype.start = function () {
        this.LoadGameBundle();
        this.startPor();
    };
    UIManager.prototype.LoadUIPanel = function () {
        var _this = this;
        var uiPath = [];
        var uiPanel = [
            WinID.HomeMain,
            WinID.TipMain,
            WinID.OtherGameMain,
        ];
        for (var i = 0; i < uiPanel.length; i++) {
            uiPath[i] = "UIPanel/" + uiPanel[i] + "/" + uiPanel[i];
        }
        cc.loader.loadResArray(uiPath, cc.Prefab, function (completedCount, totalCount, item) {
            //console.log(completedCount, totalCount, item);
        }, function (msg, res) {
            //console.log(msg, res);
            for (var i = 0; i < res.length; i++) {
                var obj = cc.instantiate(res[i]);
                if (obj.name == WinID.TipMain) {
                    obj.parent = _this.tipParent;
                }
                else {
                    obj.parent = _this.panelParent;
                }
                var uiPlaneSpr = obj.getComponent(obj.name);
                _this.UIPlaneDictionary[obj.name] = uiPlaneSpr;
                obj.active = false;
            }
            _this.isload = true;
        });
    };
    UIManager.prototype.LoadGameBundle = function () {
        var _this = this;
        var nowIndex = this.loadStateList.length;
        this.loadStateList[nowIndex] = false;
        cc.assetManager.loadBundle('Game', function (err, bundle) {
            _this.loadStateList[nowIndex] = true;
            var nowIndex1 = _this.loadStateList.length;
            _this.loadStateList[nowIndex1] = false;
            bundle.loadDir("Music", cc.AudioClip, function (err, clips) {
                for (var i = 0; i < clips.length; i++) {
                    SoundMgr_1.default.getInstance().addSound(clips[i].name, clips[i]);
                }
                SoundMgr_1.default.getInstance().playMusic("BGM");
                _this.loadStateList[nowIndex1] = true;
            });
        });
    };
    UIManager.prototype.startPor = function () {
        var _this = this;
        var count = 0;
        this.loadBar.progress = count;
        var callback = function (event) {
            if (count >= 0.9) {
                if (_this.isload && _this.checkIsLoadSuccess()) {
                    count += 0.015;
                }
            }
            else {
                count += 0.015;
            }
            _this.loadBar.progress = count;
            if (count >= 1) {
                _this.isShow = true;
                _this.unschedule(callback);
                _this.loadBar.node.parent.active = false;
                GameCtrl_1.default.getInstance().checkDayIsToday();
                for (var i in _this.UIPlaneDictionary) {
                    _this.UIPlaneDictionary[i].InitUI(_this);
                }
                _this.ShowUIName(WinID.HomeMain);
            }
        };
        this.schedule(callback, 0.02);
    };
    UIManager.prototype.checkIsLoadSuccess = function () {
        for (var index = 0; index < this.loadStateList.length; index++) {
            var state = this.loadStateList[index];
            if (!state) {
                return false;
            }
        }
        return true;
    };
    UIManager.prototype.ShowUIName = function (uiName, data, fun) {
        if (data === void 0) { data = null; }
        if (fun === void 0) { fun = function () { }; }
        if (this.UIPlaneDictionary[uiName]) {
            this.UIPlaneDictionary[uiName].ShowUI(data, fun);
        }
        else {
            cc.log("空界面");
        }
    };
    UIManager.prototype.HideUIName = function (uiName) {
        if (this.UIPlaneDictionary[uiName]) {
            this.UIPlaneDictionary[uiName].onClickClose();
        }
        else {
            cc.log("空界面");
        }
    };
    UIManager.prototype.showTip = function (str) {
        this.ShowUIName(WinID.TipMain, str);
    };
    UIManager.prototype.GetUIPanl = function (uiName) {
        return this.UIPlaneDictionary[uiName];
    };
    var UIManager_1;
    __decorate([
        property(cc.ProgressBar)
    ], UIManager.prototype, "loadBar", void 0);
    __decorate([
        property(cc.Node)
    ], UIManager.prototype, "panelParent", void 0);
    __decorate([
        property(cc.Node)
    ], UIManager.prototype, "tipParent", void 0);
    __decorate([
        property(cc.Label)
    ], UIManager.prototype, "versions", void 0);
    UIManager = UIManager_1 = __decorate([
        ccclass
    ], UIManager);
    return UIManager;
}(cc.Component));
exports.default = UIManager;

cc._RF.pop();