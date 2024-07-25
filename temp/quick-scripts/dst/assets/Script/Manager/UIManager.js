
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxVSU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDZDQUF3QztBQUN4QywyQ0FBc0M7QUFDdEMsOENBQXlDO0FBQ3pDLDhDQUF5QztBQUV6QyxJQUFZLEtBTVg7QUFORCxXQUFZLEtBQUs7SUFDYixvQ0FBMkIsQ0FBQTtJQUMzQiw4QkFBcUIsQ0FBQTtJQUNyQix3Q0FBK0IsQ0FBQTtJQUMvQixnQ0FBdUIsQ0FBQTtJQUN2Qiw0QkFBbUIsQ0FBQTtBQUN2QixDQUFDLEVBTlcsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBTWhCO0FBRUssSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUF3S0M7UUF0S0csYUFBTyxHQUFtQixJQUFJLENBQUM7UUFFL0IsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQWUsRUFBRSxDQUFDO1FBQzVCLHVCQUFpQixHQUFpQyxFQUFFLENBQUM7UUFDckQsWUFBTSxHQUFZLEtBQUssQ0FBQTtRQUN2QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLG1CQUFhLEdBQWMsRUFBRSxDQUFBOztJQTBKakMsQ0FBQztrQkF4S29CLFNBQVM7SUFpQjFCLDBCQUFNLEdBQU47UUFDSSw4Q0FBOEM7UUFDOUMsV0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNqQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFB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QVMsR0FBVCxVQUFVLE1BQU07UUFDWixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDOztJQXJLRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzhDQUNNO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNPO0lBUlQsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXdLN0I7SUFBRCxnQkFBQztDQXhLRCxBQXdLQyxDQXhLc0MsRUFBRSxDQUFDLFNBQVMsR0F3S2xEO2tCQXhLb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFVJUGFyZW50IGZyb20gXCIuLi9CYXNlL1VJUGFyZW50XCI7XG5pbXBvcnQgR2FtZUN0cmwgZnJvbSBcIi4uL0N0cmwvR2FtZUN0cmxcIjtcbmltcG9ydCBTZGtDdHJsIGZyb20gXCIuLi9DdHJsL1Nka0N0cmxcIjtcbmltcG9ydCBHYW1lRGF0YSBmcm9tIFwiLi4vT3RoZXIvR2FtZURhdGFcIjtcbmltcG9ydCBTb3VuZE1nciBmcm9tIFwiLi4vT3RoZXIvU291bmRNZ3JcIjtcblxuZXhwb3J0IGVudW0gV2luSUQge1xuICAgIEdhbWVTZXR0aW5nID0gXCJHYW1lU2V0dGluZ1wiLFxuICAgIEhvbWVNYWluID0gXCJIb21lTWFpblwiLFxuICAgIE90aGVyR2FtZU1haW4gPSBcIk90aGVyR2FtZU1haW5cIixcbiAgICBQb3BVcE1haW4gPSBcIlBvcFVwTWFpblwiLFxuICAgIFRpcE1haW4gPSBcIlRpcE1haW5cIixcbn1cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxuICAgIGxvYWRCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwYW5lbFBhcmVudDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGlwUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdmVyc2lvbnM6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIGFsbFVJUGFuZWw6IFVJUGFyZW50W10gPSBbXTtcbiAgICBVSVBsYW5lRGljdGlvbmFyeTogeyBba2V5OiBzdHJpbmddOiBVSVBhcmVudDsgfSA9IHt9O1xuICAgIGlzbG9hZDogYm9vbGVhbiA9IGZhbHNlXG4gICAgaXNTaG93OiBib29sZWFuID0gZmFsc2U7XG4gICAgbG9hZFN0YXRlTGlzdDogYm9vbGVhbltdID0gW11cbiAgICBwdWJsaWMgc3RhdGljIHNoYXJlOiBVSU1hbmFnZXI7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcIkxvY2FsRGF0YVwiKVxuICAgICAgICBVSU1hbmFnZXIuc2hhcmUgPSB0aGlzO1xuICAgICAgICBsZXQgdmlldyA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKClcbiAgICAgICAgaWYgKHZpZXcuaGVpZ2h0IC8gdmlldy53aWR0aCA8IDEwIC8gMTcpIHsvLzEuN1xuICAgICAgICAgICAgR2FtZURhdGEuc2l6ZVR5cGUgPSB2aWV3LmhlaWdodCAvICh2aWV3LndpZHRoICogKDEwIC8gMTcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuTG9hZFVJUGFuZWwoKTtcblxuICAgICAgICAvLyBHYW1lVXRpbHMuZ2V0SW5zdGFuY2UoKS5zZXRTdHJpbmcodGhpcy52ZXJzaW9ucywgVmVyc2lvbnNEYXRhLlZlcnNpb25zKVxuXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWVcbiAgICAgICAgLy8gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3MgPSBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2FhYmJCaXQgfFxuICAgICAgICAvLyBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2pvaW50Qml0IHxcbiAgICAgICAgLy8gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9zaGFwZUJpdDtcblxuICAgICAgICBTZGtDdHJsLmdldEluc3RhbmNlKCkuc2hvd1NoYXJlTWVudSgpXG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9TSE9XLCAoKSA9PiB7XG4gICAgICAgICAgICAvL+aJk+W8gOa4uOaIj+eVjOmdolxuICAgICAgICAgICAgbGV0IGV2ZW50TGlzdCA9IEdhbWVEYXRhLnNob3dHYW1lRXZlbnRcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBldmVudExpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRMaXN0W2luZGV4XSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHYW1lRGF0YS5zaG93R2FtZUV2ZW50ID0gW11cbiAgICAgICAgICAgIC8vIHRoaXMuc2VuZEV2ZW50KEdhbWVFdmVudC5VcGRhdGFWaXQpXG4gICAgICAgIH0pXG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9ISURFLCAoKSA9PiB7XG4gICAgICAgICAgICAvL+WFs+mXrea4uOaIj+eVjOmdolxuICAgICAgICAgICAgbGV0IGV2ZW50TGlzdCA9IEdhbWVEYXRhLmhpZGVHYW1lRXZlbnRcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBldmVudExpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRMaXN0W2luZGV4XSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHYW1lRGF0YS5oaWRlR2FtZUV2ZW50ID0gW11cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5Mb2FkR2FtZUJ1bmRsZSgpO1xuICAgICAgICB0aGlzLnN0YXJ0UG9yKCk7XG4gICAgfVxuXG4gICAgTG9hZFVJUGFuZWwoKSB7XG4gICAgICAgIGxldCB1aVBhdGggPSBbXTtcbiAgICAgICAgbGV0IHVpUGFuZWwgPSBbXG4gICAgICAgICAgICBXaW5JRC5Ib21lTWFpbixcbiAgICAgICAgICAgIFdpbklELlRpcE1haW4sXG4gICAgICAgICAgICBXaW5JRC5PdGhlckdhbWVNYWluLFxuICAgICAgICBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVpUGFuZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHVpUGF0aFtpXSA9IFwiVUlQYW5lbC9cIiArIHVpUGFuZWxbaV0gKyBcIi9cIiArIHVpUGFuZWxbaV07XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNBcnJheSh1aVBhdGgsIGNjLlByZWZhYiwgKGNvbXBsZXRlZENvdW50OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlciwgaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNvbXBsZXRlZENvdW50LCB0b3RhbENvdW50LCBpdGVtKTtcbiAgICAgICAgfSwgKG1zZzogRXJyb3IsIHJlczogYW55W10pID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobXNnLCByZXMpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0gY2MuaW5zdGFudGlhdGUocmVzW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAob2JqLm5hbWUgPT0gV2luSUQuVGlwTWFpbikge1xuICAgICAgICAgICAgICAgICAgICBvYmoucGFyZW50ID0gdGhpcy50aXBQYXJlbnRcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvYmoucGFyZW50ID0gdGhpcy5wYW5lbFBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHVpUGxhbmVTcHIgPSBvYmouZ2V0Q29tcG9uZW50KG9iai5uYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLlVJUGxhbmVEaWN0aW9uYXJ5W29iai5uYW1lXSA9IHVpUGxhbmVTcHI7XG4gICAgICAgICAgICAgICAgb2JqLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc2xvYWQgPSB0cnVlO1xuXG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBMb2FkR2FtZUJ1bmRsZSgpIHtcbiAgICAgICAgbGV0IG5vd0luZGV4ID0gdGhpcy5sb2FkU3RhdGVMaXN0Lmxlbmd0aFxuICAgICAgICB0aGlzLmxvYWRTdGF0ZUxpc3Rbbm93SW5kZXhdID0gZmFsc2VcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUoJ0dhbWUnLCAoZXJyLCBidW5kbGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZFN0YXRlTGlzdFtub3dJbmRleF0gPSB0cnVlXG5cbiAgICAgICAgICAgIGxldCBub3dJbmRleDEgPSB0aGlzLmxvYWRTdGF0ZUxpc3QubGVuZ3RoXG4gICAgICAgICAgICB0aGlzLmxvYWRTdGF0ZUxpc3Rbbm93SW5kZXgxXSA9IGZhbHNlXG4gICAgICAgICAgICBidW5kbGUubG9hZERpcihcIk11c2ljXCIsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgY2xpcHM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5hZGRTb3VuZChjbGlwc1tpXS5uYW1lLCBjbGlwc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFNvdW5kTWdyLmdldEluc3RhbmNlKCkucGxheU11c2ljKFwiQkdNXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3RhdGVMaXN0W25vd0luZGV4MV0gPSB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhcnRQb3IoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIHRoaXMubG9hZEJhci5wcm9ncmVzcyA9IGNvdW50O1xuICAgICAgICBsZXQgY2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChjb3VudCA+PSAwLjkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc2xvYWQgJiYgdGhpcy5jaGVja0lzTG9hZFN1Y2Nlc3MoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCArPSAwLjAxNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50ICs9IDAuMDE1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2FkQmFyLnByb2dyZXNzID0gY291bnQ7XG4gICAgICAgICAgICBpZiAoY291bnQgPj0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEJhci5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBHYW1lQ3RybC5nZXRJbnN0YW5jZSgpLmNoZWNrRGF5SXNUb2RheSgpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLlVJUGxhbmVEaWN0aW9uYXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVUlQbGFuZURpY3Rpb25hcnlbaV0uSW5pdFVJKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLlNob3dVSU5hbWUoV2luSUQuSG9tZU1haW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoY2FsbGJhY2ssIDAuMDIpO1xuICAgIH1cblxuICAgIGNoZWNrSXNMb2FkU3VjY2VzcygpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubG9hZFN0YXRlTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IHRoaXMubG9hZFN0YXRlTGlzdFtpbmRleF07XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBTaG93VUlOYW1lKHVpTmFtZTogV2luSUQsIGRhdGE6IGFueSA9IG51bGwsIGZ1biA9ICgpID0+IHsgfSkge1xuICAgICAgICBpZiAodGhpcy5VSVBsYW5lRGljdGlvbmFyeVt1aU5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLlVJUGxhbmVEaWN0aW9uYXJ5W3VpTmFtZV0uU2hvd1VJKGRhdGEsIGZ1bik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5sb2coXCLnqbrnlYzpnaJcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEhpZGVVSU5hbWUodWlOYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLlVJUGxhbmVEaWN0aW9uYXJ5W3VpTmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuVUlQbGFuZURpY3Rpb25hcnlbdWlOYW1lXS5vbkNsaWNrQ2xvc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIuepuueVjOmdolwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1RpcChzdHI6IHN0cmluZykge1xuICAgICAgICB0aGlzLlNob3dVSU5hbWUoV2luSUQuVGlwTWFpbiwgc3RyKVxuICAgIH1cblxuICAgIEdldFVJUGFubCh1aU5hbWUpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5VSVBsYW5lRGljdGlvbmFyeVt1aU5hbWVdO1xuICAgIH1cbn0iXX0=