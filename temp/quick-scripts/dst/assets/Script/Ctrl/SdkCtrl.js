
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Ctrl/SdkCtrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b1deV1fjRGEJ90nKNh3ltk', 'SdkCtrl');
// Script/Ctrl/SdkCtrl.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameData_1 = require("../Other/GameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SdkCtrl = /** @class */ (function () {
    function SdkCtrl() {
        this.rewardedVideoAdID = "adunit-xxxxxxxxxxxxxxx";
        this.bannerVideoAdID = "adunit-xxxxxxxxxxxxxxx";
        this.interstitialAdID = "adunit-xxxxxxxxxxxxxxx";
        this.leftCustomAdID = "adunit-xxxxxxxxxxxxxxx";
        this.rightCustomAdID = "adunit-xxxxxxxxxxxxxxx";
        this.flveCustomAdID = "adunit-xxxxxxxxxxxxxxx";
        this.rewardedVideoAd = null;
        this.bannerVideoAd = null;
        this.successFun = null;
        this.failFun = null;
        this.isfiveCustom = false;
        this.isShowCustom = false;
    }
    SdkCtrl_1 = SdkCtrl;
    SdkCtrl.getInstance = function () {
        if (!this._instance) {
            this._instance = new SdkCtrl_1();
            this._instance._init();
        }
        return this._instance;
    };
    SdkCtrl.prototype._init = function () {
        var _this = this;
        if (GameData_1.default.getPlatform() == GameData_1.Platform.wx) {
            this.showShareMenu();
            this.onShareAppMessage();
            this.rewardedVideoAd = wx.createRewardedVideoAd({ adUnitId: this.rewardedVideoAdID });
            this.rewardedVideoAd.onError(function (err) {
                console.log("激励视频 " + err);
                if (_this.failFun) {
                    _this.failFun();
                    _this.failFun = null;
                }
                GameData_1.default.isPause = false;
                return;
            });
            this.rewardedVideoAd.onLoad(function () {
                console.log('激励视频 广告加载成功');
                _this.rewardedVideoAd.onClose(function (res) {
                    // 用户点击了【关闭广告】按钮
                    // 小于 2.1.0 的基础库版本，res 是一个 undefined
                    if (res && res.isEnded || res === undefined) {
                        // 正常播放结束，可以下发游戏奖励
                        console.log('激励视频 广告播放完毕');
                        if (_this.successFun) {
                            _this.successFun();
                            _this.successFun = null;
                        }
                        GameData_1.default.isPause = false;
                    }
                    else {
                        // 播放中途退出，不下发游戏奖励
                        console.log('激励视频 广告播放中途退出');
                        if (_this.failFun) {
                            _this.failFun();
                            _this.failFun = null;
                        }
                        GameData_1.default.isPause = false;
                        return;
                    }
                });
            });
            var systemInfo = wx.getSystemInfoSync();
            var screenWidth = systemInfo.screenWidth;
            var screenHeight = systemInfo.screenHeight;
            this.bannerVideoAd = wx.createBannerAd({
                adUnitId: this.bannerVideoAdID,
                adIntervals: 30,
                style: {
                    top: screenHeight - 100,
                    left: (screenWidth / 2) - 150,
                    width: 150,
                    height: 40,
                }
            });
            this.bannerVideoAd.onError(function (err) {
                console.log("banner1广告错误 " + err);
            });
            this.bannerVideoAd.onLoad(function () { });
        }
    };
    SdkCtrl.prototype.ShowRewardedVideoAd = function (successFun, failFun) {
        var _this = this;
        if (failFun === void 0) { failFun = function () { }; }
        switch (GameData_1.default.getPlatform()) {
            case GameData_1.Platform.wx:
                {
                    GameData_1.default.isPause = true;
                    this.successFun = successFun;
                    this.failFun = failFun;
                    this.rewardedVideoAd.show().catch(function () {
                        // 失败重试
                        _this.rewardedVideoAd.load()
                            .then(function () { return _this.rewardedVideoAd.show(); })
                            .catch(function (err) {
                            console.log('激励视频 广告显示失败,可能是没加载出来');
                            if (_this.failFun) {
                                _this.failFun();
                                _this.failFun = null;
                            }
                            GameData_1.default.isPause = false;
                            return;
                        });
                    });
                }
                break;
            default:
                cc.log("观看广告");
                successFun();
                break;
        }
    };
    SdkCtrl.prototype.ShowBanner = function () {
        switch (GameData_1.default.getPlatform()) {
            case GameData_1.Platform.wx:
                this.bannerVideoAd.show();
                break;
        }
    };
    SdkCtrl.prototype.HideBanner = function () {
        switch (GameData_1.default.getPlatform()) {
            case GameData_1.Platform.wx:
                this.bannerVideoAd.hide();
                break;
        }
    };
    SdkCtrl.prototype.getSetting = function () {
        console.log("获取信息");
        var pingtai = GameData_1.default.getPlatform();
        switch (pingtai) {
            case GameData_1.Platform.wx:
                {
                    wx.getSetting({
                        success: function (res) {
                            var _this = this;
                            if (res.authSetting['scope.userInfo']) {
                                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                                wx.getUserInfo({
                                    success: function (res) {
                                        console.log("个人信息1", res);
                                        var userInfo = res.userInfo;
                                        //保存数据，进入游戏主界面
                                        this._userInfo = userInfo;
                                    }
                                });
                            }
                            else {
                                // 未授权的要调用 createUserInfoButton 创建按钮引导玩家点击
                                var systemInfo = wx.getSystemInfoSync();
                                var safeArea = systemInfo.safeArea;
                                var button = wx.createUserInfoButton({
                                    type: 'text',
                                    text: '授权登录',
                                    style: {
                                        left: safeArea.left,
                                        top: (safeArea.top - safeArea.height / 2 - 25),
                                        width: safeArea.width,
                                        height: 50,
                                        lineHeight: 50,
                                        backgroundColor: '#90ef62',
                                        color: '#ffffff',
                                        textAlign: 'center',
                                        fontSize: 20,
                                        borderRadius: 5
                                    }
                                });
                                button.onTap(function (res) {
                                    var userInfo = res.userInfo;
                                    if (res && userInfo) {
                                        //保存数据，进入游戏主界面
                                        _this._userInfo = userInfo;
                                        console.log("个人信息2", res);
                                    }
                                });
                            }
                        }
                    });
                }
                break;
        }
    };
    /** 给好友排行榜发送消息 */
    SdkCtrl.prototype.postMessage = function (score) {
        var pingtai = GameData_1.default.getPlatform();
        switch (pingtai) {
            case GameData_1.Platform.wx:
                {
                    wx.getOpenDataContext().postMessage({
                        score: score,
                        dayTime: new Date().getTime()
                    });
                }
                break;
        }
    };
    /** 更新好友排行榜 */
    SdkCtrl.prototype.updataFriendList = function () {
        var pingtai = GameData_1.default.getPlatform();
        switch (pingtai) {
            case GameData_1.Platform.wx:
                {
                    wx.getOpenDataContext().postMessage({});
                }
                break;
        }
    };
    /** 打开另一个小程序 */
    SdkCtrl.prototype.navigateToMiniProgram = function (appId) {
        var pingtai = GameData_1.default.getPlatform();
        switch (pingtai) {
            case GameData_1.Platform.wx:
                {
                    wx.navigateToMiniProgram({
                        appId: appId,
                        path: 'page/index/index?id=123',
                        extraData: {
                            foo: 'bar'
                        },
                        envVersion: 'develop',
                        success: function (res) {
                            // 打开成功
                        }
                    });
                }
                break;
        }
    };
    /** 创建游戏圈 */
    SdkCtrl.prototype.createGameClubButton = function () {
        var pingtai = GameData_1.default.getPlatform();
        switch (pingtai) {
            case GameData_1.Platform.wx:
                {
                    var button = wx.createGameClubButton({
                        icon: 'light',
                        style: {
                            left: 10,
                            top: 76,
                            width: 40,
                            height: 40
                        }
                    });
                }
                break;
        }
    };
    /** 打开分享游戏权限 */
    SdkCtrl.prototype.showShareMenu = function () {
        if (GameData_1.default.getPlatform() == GameData_1.Platform.wx) {
            wx.showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline'],
                success: function (res) { },
                fail: function (e) { }
            });
        }
    };
    /** 主动分享 */
    SdkCtrl.prototype.shareAppMessage = function (fun) {
        if (fun === void 0) { fun = null; }
        if (fun) {
            GameData_1.default.showGameEvent.push(fun);
        }
        if (GameData_1.default.getPlatform() == GameData_1.Platform.wx) {
            var titleList = ["超级好玩的游戏！"];
            wx.shareAppMessage({
                title: titleList[Math.floor(Math.random() * titleList.length)],
            });
            this.onShareAppMessage();
        }
    };
    /** 监听游戏分享修改分享图片和标题 */
    SdkCtrl.prototype.onShareAppMessage = function () {
        if (GameData_1.default.getPlatform() == GameData_1.Platform.wx) {
            var titleList_1 = ["超级好玩的游戏！"];
            wx.onShareAppMessage(function () {
                return {
                    title: titleList_1[Math.floor(Math.random() * titleList_1.length)],
                };
            });
        }
    };
    /** 显示插屏广告 */
    SdkCtrl.prototype.showInterstitialAd = function () {
        // 定义插屏广告
        if (GameData_1.default.getPlatform() == GameData_1.Platform.wx) {
            var interstitialAd = null;
            // 创建插屏广告实例，提前初始化
            if (!interstitialAd) {
                if (wx.createInterstitialAd) {
                    interstitialAd = wx.createInterstitialAd({
                        adUnitId: this.interstitialAdID
                    });
                }
            }
            // 在适合的场景显示插屏广告
            if (interstitialAd) {
                interstitialAd.show().catch(function (err) {
                    console.error(err);
                });
            }
        }
    };
    SdkCtrl.prototype.showCustomAd = function () {
        var _this = this;
        if (GameData_1.default.getPlatform() == GameData_1.Platform.wx) {
            this.isShowCustom = true;
            var leftId = this.leftCustomAdID;
            var rightId = this.rightCustomAdID;
            var winSize = wx.getSystemInfoSync();
            var leftStyle = {
                left: 15,
                top: 120,
                fixed: false,
            };
            var rightStyle = {
                left: winSize.screenWidth - 70,
                top: 120,
                fixed: false,
            };
            if (this.leftCustom) {
                this.leftCustom.show();
            }
            else {
                this.leftCustom = wx.createCustomAd({
                    adUnitId: leftId,
                    style: leftStyle
                });
                this.leftCustom.onLoad(function () {
                    console.log('原生模板 广告加载成功');
                    if (_this.isShowCustom) {
                        _this.leftCustom.show().then(function () { return console.log('原生模板 广告显示成功'); }).catch(function (err) {
                            console.log("原生模板 广告显示失败", err);
                        });
                    }
                });
            }
            if (this.rightCustom) {
                this.rightCustom.show();
            }
            else {
                this.rightCustom = wx.createCustomAd({
                    adUnitId: rightId,
                    style: rightStyle
                });
                this.rightCustom.onLoad(function () {
                    console.log('原生模板 广告加载成功');
                    if (_this.isShowCustom) {
                        _this.rightCustom.show().then(function () { return console.log('原生模板 广告显示成功'); }).catch(function (err) {
                            console.log("原生模板 广告显示失败", err);
                        });
                    }
                });
            }
        }
    };
    /** 隐藏格子广告 */
    SdkCtrl.prototype.hideCustomAd = function () {
        this.isShowCustom = false;
        if (this.leftCustom) {
            this.leftCustom.hide();
        }
        if (this.rightCustom) {
            this.rightCustom.hide();
        }
    };
    /** 手机振动 */
    SdkCtrl.prototype.QuakeScreen = function () {
        if (GameData_1.default.getPlatform() == GameData_1.Platform.wx) {
            wx.vibrateLong({
                success: function (t) {
                    console.log("" + t);
                },
                fail: function (t) {
                    console.log("vibrateLong调用失败");
                }
            });
        }
    };
    /** 创建原生模板广告组件-五行格子广告-弹窗 */
    SdkCtrl.prototype.showFiveCustomAd = function () {
        var _this = this;
        if (GameData_1.default.getPlatform() == GameData_1.Platform.wx) {
            this.isfiveCustom = true;
            var winSize = wx.getSystemInfoSync();
            var leftStyle = {
                left: 0,
                top: 100,
                fixed: false,
            };
            if (this.fiveCustom) {
                this.fiveCustom.show();
            }
            else {
                this.fiveCustom = wx.createCustomAd({
                    adUnitId: this.flveCustomAdID,
                    style: leftStyle
                });
                this.fiveCustom.onLoad(function () {
                    console.log('原生模板 广告加载成功');
                    if (_this.isfiveCustom) {
                        _this.fiveCustom.show().then(function () { return console.log('原生模板 广告显示成功'); }).catch(function (err) {
                            console.log("原生模板 广告显示失败", err);
                        });
                    }
                });
            }
        }
    };
    var SdkCtrl_1;
    SdkCtrl._instance = null;
    SdkCtrl = SdkCtrl_1 = __decorate([
        ccclass
    ], SdkCtrl);
    return SdkCtrl;
}());
exports.default = SdkCtrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDdHJsXFxTZGtDdHJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsOENBQXVEO0FBR2pELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFFWSxzQkFBaUIsR0FBVyx3QkFBd0IsQ0FBQTtRQUNwRCxvQkFBZSxHQUFXLHdCQUF3QixDQUFBO1FBQ2xELHFCQUFnQixHQUFXLHdCQUF3QixDQUFBO1FBQ25ELG1CQUFjLEdBQVcsd0JBQXdCLENBQUE7UUFDakQsb0JBQWUsR0FBVyx3QkFBd0IsQ0FBQTtRQUNsRCxtQkFBYyxHQUFXLHdCQUF3QixDQUFBO1FBQ2xELG9CQUFlLEdBQVEsSUFBSSxDQUFDO1FBQzVCLGtCQUFhLEdBQVEsSUFBSSxDQUFDO1FBQzFCLGVBQVUsR0FBYSxJQUFJLENBQUE7UUFDM0IsWUFBTyxHQUFhLElBQUksQ0FBQTtRQUV4QixpQkFBWSxHQUFZLEtBQUssQ0FBQTtRQW9UcEMsaUJBQVksR0FBWSxLQUFLLENBQUE7SUE2R2pDLENBQUM7Z0JBOWFvQixPQUFPO0lBZVYsbUJBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBTyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQjtRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU8sdUJBQUssR0FBYjtRQUFBLGlCQTJEQztRQTFERyxJQUFJLGtCQUFRLENBQUMsV0FBVyxFQUFFLElBQUksbUJBQVEsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO1lBQ3BCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1lBRXhC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LElBQUksQ0FBQTtZQUN4QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNyQyxJQUFJLFNBQVMsR0FBRztnQkFDWixJQUFJLEVBQUUsQ0FBQztnQkFDUCxHQUFHLEVBQUUsR0FBRztnQkFDUixLQUFLLEVBQUUsS0FBSzthQUNmLENBQUE7WUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUNoQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWM7b0JBQzdCLEtBQUssRUFBRSxTQUFTO2lCQUNuQixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzNCLElBQUksS0FBSSxDQUFDLFlBQVksRUFBRTt3QkFDbkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFROzRCQUN6RSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQTt3QkFDbkMsQ0FBQyxDQUFDLENBQUE7cUJBQ0w7Z0JBQ0wsQ0FBQyxDQUFDLENBQUE7YUFDTDtTQUNKO0lBQ0wsQ0FBQzs7SUE1YWMsaUJBQVMsR0FBWSxJQUFJLENBQUM7SUFEeEIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQThhM0I7SUFBRCxjQUFDO0NBOWFELEFBOGFDLElBQUE7a0JBOWFvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgR2FtZURhdGEsIHsgUGxhdGZvcm0gfSBmcm9tIFwiLi4vT3RoZXIvR2FtZURhdGFcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2RrQ3RybCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTZGtDdHJsID0gbnVsbDtcbiAgICBwcml2YXRlIHJld2FyZGVkVmlkZW9BZElEOiBzdHJpbmcgPSBcImFkdW5pdC14eHh4eHh4eHh4eHh4eHhcIlxuICAgIHByaXZhdGUgYmFubmVyVmlkZW9BZElEOiBzdHJpbmcgPSBcImFkdW5pdC14eHh4eHh4eHh4eHh4eHhcIlxuICAgIHByaXZhdGUgaW50ZXJzdGl0aWFsQWRJRDogc3RyaW5nID0gXCJhZHVuaXQteHh4eHh4eHh4eHh4eHh4XCJcbiAgICBwcml2YXRlIGxlZnRDdXN0b21BZElEOiBzdHJpbmcgPSBcImFkdW5pdC14eHh4eHh4eHh4eHh4eHhcIlxuICAgIHByaXZhdGUgcmlnaHRDdXN0b21BZElEOiBzdHJpbmcgPSBcImFkdW5pdC14eHh4eHh4eHh4eHh4eHhcIlxuICAgIHByaXZhdGUgZmx2ZUN1c3RvbUFkSUQ6IHN0cmluZyA9IFwiYWR1bml0LXh4eHh4eHh4eHh4eHh4eFwiXG4gICAgcHVibGljIHJld2FyZGVkVmlkZW9BZDogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgYmFubmVyVmlkZW9BZDogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgc3VjY2Vzc0Z1bjogRnVuY3Rpb24gPSBudWxsXG4gICAgcHVibGljIGZhaWxGdW46IEZ1bmN0aW9uID0gbnVsbFxuICAgIHB1YmxpYyBmaXZlQ3VzdG9tOiBhbnk7XG4gICAgcHVibGljIGlzZml2ZUN1c3RvbTogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBTZGtDdHJsKCk7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5faW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0KCkge1xuICAgICAgICBpZiAoR2FtZURhdGEuZ2V0UGxhdGZvcm0oKSA9PSBQbGF0Zm9ybS53eCkge1xuICAgICAgICAgICAgdGhpcy5zaG93U2hhcmVNZW51KClcbiAgICAgICAgICAgIHRoaXMub25TaGFyZUFwcE1lc3NhZ2UoKVxuXG4gICAgICAgICAgICB0aGlzLnJld2FyZGVkVmlkZW9BZCA9IHd4LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7IGFkVW5pdElkOiB0aGlzLnJld2FyZGVkVmlkZW9BZElEIH0pXG4gICAgICAgICAgICB0aGlzLnJld2FyZGVkVmlkZW9BZC5vbkVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmv4DlirHop4bpopEgXCIgKyBlcnIpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZhaWxGdW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsRnVuKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsRnVuID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBHYW1lRGF0YS5pc1BhdXNlID0gZmFsc2VcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5yZXdhcmRlZFZpZGVvQWQub25Mb2FkKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5r+A5Yqx6KeG6aKRIOW5v+WRiuWKoOi9veaIkOWKnycpO1xuICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkZWRWaWRlb0FkLm9uQ2xvc2UocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g55So5oi354K55Ye75LqG44CQ5YWz6Zet5bm/5ZGK44CR5oyJ6ZKuXG4gICAgICAgICAgICAgICAgICAgIC8vIOWwj+S6jiAyLjEuMCDnmoTln7rnoYDlupPniYjmnKzvvIxyZXMg5piv5LiA5LiqIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzICYmIHJlcy5pc0VuZGVkIHx8IHJlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmraPluLjmkq3mlL7nu5PmnZ/vvIzlj6/ku6XkuIvlj5HmuLjmiI/lpZblirFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmv4DlirHop4bpopEg5bm/5ZGK5pKt5pS+5a6M5q+VJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdWNjZXNzRnVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzRnVuKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3NGdW4gPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5pc1BhdXNlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaSreaUvuS4remAlOmAgOWHuu+8jOS4jeS4i+WPkea4uOaIj+WlluWKsVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+a/gOWKseinhumikSDlub/lkYrmkq3mlL7kuK3pgJTpgIDlh7onKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZhaWxGdW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhaWxGdW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmFpbEZ1biA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVEYXRhLmlzUGF1c2UgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IHN5c3RlbUluZm8gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xuICAgICAgICAgICAgbGV0IHNjcmVlbldpZHRoID0gc3lzdGVtSW5mby5zY3JlZW5XaWR0aDtcbiAgICAgICAgICAgIGxldCBzY3JlZW5IZWlnaHQgPSBzeXN0ZW1JbmZvLnNjcmVlbkhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuYmFubmVyVmlkZW9BZCA9IHd4LmNyZWF0ZUJhbm5lckFkKHtcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogdGhpcy5iYW5uZXJWaWRlb0FkSUQsXG4gICAgICAgICAgICAgICAgYWRJbnRlcnZhbHM6IDMwLCAvLyDoh6rliqjliLfmlrDpopHnjofkuI3og73lsI/kuo4zMOenklxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogc2NyZWVuSGVpZ2h0IC0gMTAwLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAoc2NyZWVuV2lkdGggLyAyKSAtIDE1MCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYmFubmVyVmlkZW9BZC5vbkVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYW5uZXIx5bm/5ZGK6ZSZ6K+vIFwiICsgZXJyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmJhbm5lclZpZGVvQWQub25Mb2FkKCgpID0+IHsgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBTaG93UmV3YXJkZWRWaWRlb0FkKHN1Y2Nlc3NGdW46IEZ1bmN0aW9uLCBmYWlsRnVuOiBGdW5jdGlvbiA9ICgpID0+IHsgfSkge1xuICAgICAgICBzd2l0Y2ggKEdhbWVEYXRhLmdldFBsYXRmb3JtKCkpIHtcbiAgICAgICAgICAgIGNhc2UgUGxhdGZvcm0ud3g6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBHYW1lRGF0YS5pc1BhdXNlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3NGdW4gPSBzdWNjZXNzRnVuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFpbEZ1biA9IGZhaWxGdW5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRlZFZpZGVvQWQuc2hvdygpLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWksei0pemHjeivlVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRlZFZpZGVvQWQubG9hZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5yZXdhcmRlZFZpZGVvQWQuc2hvdygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5r+A5Yqx6KeG6aKRIOW5v+WRiuaYvuekuuWksei0pSzlj6/og73mmK/msqHliqDovb3lh7rmnaUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mYWlsRnVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhaWxGdW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsRnVuID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVEYXRhLmlzUGF1c2UgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLop4LnnIvlub/lkYpcIilcbiAgICAgICAgICAgICAgICBzdWNjZXNzRnVuKClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFNob3dCYW5uZXIoKSB7XG4gICAgICAgIHN3aXRjaCAoR2FtZURhdGEuZ2V0UGxhdGZvcm0oKSkge1xuICAgICAgICAgICAgY2FzZSBQbGF0Zm9ybS53eDpcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lclZpZGVvQWQuc2hvdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgSGlkZUJhbm5lcigpIHtcbiAgICAgICAgc3dpdGNoIChHYW1lRGF0YS5nZXRQbGF0Zm9ybSgpKSB7XG4gICAgICAgICAgICBjYXNlIFBsYXRmb3JtLnd4OlxuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyVmlkZW9BZC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTZXR0aW5nKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuiOt+WPluS/oeaBr1wiKTtcbiAgICAgICAgbGV0IHBpbmd0YWkgPSBHYW1lRGF0YS5nZXRQbGF0Zm9ybSgpXG4gICAgICAgIHN3aXRjaCAocGluZ3RhaSkge1xuICAgICAgICAgICAgY2FzZSBQbGF0Zm9ybS53eDpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Liq5Lq65L+h5oGvMVwiLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5L+d5a2Y5pWw5o2u77yM6L+b5YWl5ri45oiP5Li755WM6Z2iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXNlckluZm8gPSB1c2VySW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOacquaOiOadg+eahOimgeiwg+eUqCBjcmVhdGVVc2VySW5mb0J1dHRvbiDliJvlu7rmjInpkq7lvJXlr7znjqnlrrbngrnlh7tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3lzdGVtSW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhZmVBcmVhID0gc3lzdGVtSW5mby5zYWZlQXJlYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gd3guY3JlYXRlVXNlckluZm9CdXR0b24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+aOiOadg+eZu+W9lScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IHNhZmVBcmVhLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAoc2FmZUFyZWEudG9wIC0gc2FmZUFyZWEuaGVpZ2h0IC8gMiAtIDI1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogc2FmZUFyZWEud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjOTBlZjYyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ub25UYXAoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSByZXMudXNlckluZm87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzICYmIHVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/kv53lrZjmlbDmja7vvIzov5vlhaXmuLjmiI/kuLvnlYzpnaJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VySW5mbyA9IHVzZXJJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkuKrkurrkv6Hmga8yXCIsIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqIOe7meWlveWPi+aOkuihjOamnOWPkemAgea2iOaBryAqL1xuICAgIHBvc3RNZXNzYWdlKHNjb3JlOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHBpbmd0YWkgPSBHYW1lRGF0YS5nZXRQbGF0Zm9ybSgpXG4gICAgICAgIHN3aXRjaCAocGluZ3RhaSkge1xuICAgICAgICAgICAgY2FzZSBQbGF0Zm9ybS53eDpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHd4LmdldE9wZW5EYXRhQ29udGV4dCgpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlOiBzY29yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheVRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDmm7TmlrDlpb3lj4vmjpLooYzmppwgKi9cbiAgICB1cGRhdGFGcmllbmRMaXN0KCkge1xuICAgICAgICBsZXQgcGluZ3RhaSA9IEdhbWVEYXRhLmdldFBsYXRmb3JtKClcbiAgICAgICAgc3dpdGNoIChwaW5ndGFpKSB7XG4gICAgICAgICAgICBjYXNlIFBsYXRmb3JtLnd4OlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgd3guZ2V0T3BlbkRhdGFDb250ZXh0KCkucG9zdE1lc3NhZ2Uoe30pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDmiZPlvIDlj6bkuIDkuKrlsI/nqIvluo8gKi9cbiAgICBuYXZpZ2F0ZVRvTWluaVByb2dyYW0oYXBwSWQ6IHN0cmluZykge1xuICAgICAgICBsZXQgcGluZ3RhaSA9IEdhbWVEYXRhLmdldFBsYXRmb3JtKClcbiAgICAgICAgc3dpdGNoIChwaW5ndGFpKSB7XG4gICAgICAgICAgICBjYXNlIFBsYXRmb3JtLnd4OlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiBhcHBJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICdwYWdlL2luZGV4L2luZGV4P2lkPTEyMycsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb286ICdiYXInXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW52VmVyc2lvbjogJ2RldmVsb3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmiZPlvIDmiJDlip9cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5Yib5bu65ri45oiP5ZyIICovXG4gICAgY3JlYXRlR2FtZUNsdWJCdXR0b24oKSB7XG4gICAgICAgIGxldCBwaW5ndGFpID0gR2FtZURhdGEuZ2V0UGxhdGZvcm0oKVxuICAgICAgICBzd2l0Y2ggKHBpbmd0YWkpIHtcbiAgICAgICAgICAgIGNhc2UgUGxhdGZvcm0ud3g6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYnV0dG9uID0gd3guY3JlYXRlR2FtZUNsdWJCdXR0b24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2xpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA3NixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDmiZPlvIDliIbkuqvmuLjmiI/mnYPpmZAgKi9cbiAgICBzaG93U2hhcmVNZW51KCkge1xuICAgICAgICBpZiAoR2FtZURhdGEuZ2V0UGxhdGZvcm0oKSA9PSBQbGF0Zm9ybS53eCkge1xuICAgICAgICAgICAgd3guc2hvd1NoYXJlTWVudSh7XG4gICAgICAgICAgICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lbnVzOiBbJ3NoYXJlQXBwTWVzc2FnZScsICdzaGFyZVRpbWVsaW5lJ10sXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHsgfSxcbiAgICAgICAgICAgICAgICBmYWlsKGUpIHsgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDkuLvliqjliIbkuqsgKi9cbiAgICBzaGFyZUFwcE1lc3NhZ2UoZnVuOiBGdW5jdGlvbiA9IG51bGwpIHtcbiAgICAgICAgaWYgKGZ1bikge1xuICAgICAgICAgICAgR2FtZURhdGEuc2hvd0dhbWVFdmVudC5wdXNoKGZ1bilcbiAgICAgICAgfVxuICAgICAgICBpZiAoR2FtZURhdGEuZ2V0UGxhdGZvcm0oKSA9PSBQbGF0Zm9ybS53eCkge1xuICAgICAgICAgICAgbGV0IHRpdGxlTGlzdCA9IFtcIui2hee6p+WlveeOqeeahOa4uOaIj++8gVwiXVxuICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGVMaXN0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRpdGxlTGlzdC5sZW5ndGgpXSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLm9uU2hhcmVBcHBNZXNzYWdlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDnm5HlkKzmuLjmiI/liIbkuqvkv67mlLnliIbkuqvlm77niYflkozmoIfpopggKi9cbiAgICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICAgICAgaWYgKEdhbWVEYXRhLmdldFBsYXRmb3JtKCkgPT0gUGxhdGZvcm0ud3gpIHtcbiAgICAgICAgICAgIGxldCB0aXRsZUxpc3QgPSBbXCLotoXnuqflpb3njqnnmoTmuLjmiI/vvIFcIl1cbiAgICAgICAgICAgIHd4Lm9uU2hhcmVBcHBNZXNzYWdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGVMaXN0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRpdGxlTGlzdC5sZW5ndGgpXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VVcmxJZDogXCJKUFB1aWpLUVNLQ2oxbXdCVjltV1pBPT1cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VVcmw6IFwiaHR0cHM6Ly9tbW9jZ2FtZS5xcGljLmNuL3dlY2hhdGdhbWUvSnpabEF2TklTTm5aNVFGTGliWDhTbmlhcE9QZkJ4SWZWWDFITjB3M2ljVkdMd01kdHY1WWtCcTJwSEJmbkdnMTZOYi8wXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOaYvuekuuaPkuWxj+W5v+WRiiAqL1xuICAgIHNob3dJbnRlcnN0aXRpYWxBZCgpIHtcbiAgICAgICAgLy8g5a6a5LmJ5o+S5bGP5bm/5ZGKXG4gICAgICAgIGlmIChHYW1lRGF0YS5nZXRQbGF0Zm9ybSgpID09IFBsYXRmb3JtLnd4KSB7XG4gICAgICAgICAgICBsZXQgaW50ZXJzdGl0aWFsQWQgPSBudWxsXG5cbiAgICAgICAgICAgIC8vIOWIm+W7uuaPkuWxj+W5v+WRiuWunuS+i++8jOaPkOWJjeWIneWni+WMllxuICAgICAgICAgICAgaWYgKCFpbnRlcnN0aXRpYWxBZCkge1xuICAgICAgICAgICAgICAgIGlmICh3eC5jcmVhdGVJbnRlcnN0aXRpYWxBZCkge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnN0aXRpYWxBZCA9IHd4LmNyZWF0ZUludGVyc3RpdGlhbEFkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkVW5pdElkOiB0aGlzLmludGVyc3RpdGlhbEFkSURcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWcqOmAguWQiOeahOWcuuaZr+aYvuekuuaPkuWxj+W5v+WRilxuICAgICAgICAgICAgaWYgKGludGVyc3RpdGlhbEFkKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJzdGl0aWFsQWQuc2hvdygpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDliJvlu7rljp/nlJ/mqKHmnb/lub/lkYrnu4Tku7Yt5LqU6KGM5qC85a2Q5bm/5ZGKLeW8ueeqlyAqL1xuICAgIGxlZnRDdXN0b206IGFueTtcbiAgICByaWdodEN1c3RvbTogYW55O1xuICAgIGlzU2hvd0N1c3RvbTogYm9vbGVhbiA9IGZhbHNlXG4gICAgc2hvd0N1c3RvbUFkKCkge1xuICAgICAgICBpZiAoR2FtZURhdGEuZ2V0UGxhdGZvcm0oKSA9PSBQbGF0Zm9ybS53eCkge1xuICAgICAgICAgICAgdGhpcy5pc1Nob3dDdXN0b20gPSB0cnVlXG4gICAgICAgICAgICBsZXQgbGVmdElkID0gdGhpcy5sZWZ0Q3VzdG9tQWRJRDtcbiAgICAgICAgICAgIGxldCByaWdodElkID0gdGhpcy5yaWdodEN1c3RvbUFkSUQ7XG4gICAgICAgICAgICBsZXQgd2luU2l6ZSA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgICAgICAgICBsZXQgbGVmdFN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDE1LFxuICAgICAgICAgICAgICAgIHRvcDogMTIwLFxuICAgICAgICAgICAgICAgIGZpeGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJpZ2h0U3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogd2luU2l6ZS5zY3JlZW5XaWR0aCAtIDcwLFxuICAgICAgICAgICAgICAgIHRvcDogMTIwLFxuICAgICAgICAgICAgICAgIGZpeGVkOiBmYWxzZSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubGVmdEN1c3RvbSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdEN1c3RvbS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdEN1c3RvbSA9IHd4LmNyZWF0ZUN1c3RvbUFkKHtcbiAgICAgICAgICAgICAgICAgICAgYWRVbml0SWQ6IGxlZnRJZCwgIC8vJ2FkdW5pdC1hYmY5YzYzNDI3YzNhMzhhJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IGxlZnRTdHlsZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdEN1c3RvbS5vbkxvYWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5Y6f55Sf5qih5p2/IOW5v+WRiuWKoOi9veaIkOWKnycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1Nob3dDdXN0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdEN1c3RvbS5zaG93KCkudGhlbigoKSA9PiBjb25zb2xlLmxvZygn5Y6f55Sf5qih5p2/IOW5v+WRiuaYvuekuuaIkOWKnycpKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLljp/nlJ/mqKHmnb8g5bm/5ZGK5pi+56S65aSx6LSlXCIsIGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5yaWdodEN1c3RvbSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRDdXN0b20uc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q3VzdG9tID0gd3guY3JlYXRlQ3VzdG9tQWQoe1xuICAgICAgICAgICAgICAgICAgICBhZFVuaXRJZDogcmlnaHRJZCwgIC8vJ2FkdW5pdC1hYmY5YzYzNDI3YzNhMzhhJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHJpZ2h0U3R5bGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0Q3VzdG9tLm9uTG9hZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfljp/nlJ/mqKHmnb8g5bm/5ZGK5Yqg6L295oiQ5YqfJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2hvd0N1c3RvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodEN1c3RvbS5zaG93KCkudGhlbigoKSA9PiBjb25zb2xlLmxvZygn5Y6f55Sf5qih5p2/IOW5v+WRiuaYvuekuuaIkOWKnycpKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLljp/nlJ/mqKHmnb8g5bm/5ZGK5pi+56S65aSx6LSlXCIsIGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOmakOiXj+agvOWtkOW5v+WRiiAqL1xuICAgIGhpZGVDdXN0b21BZCgpIHtcbiAgICAgICAgdGhpcy5pc1Nob3dDdXN0b20gPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5sZWZ0Q3VzdG9tKSB7XG4gICAgICAgICAgICB0aGlzLmxlZnRDdXN0b20uaGlkZSgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmlnaHRDdXN0b20pIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRDdXN0b20uaGlkZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiog5omL5py65oyv5YqoICovXG4gICAgUXVha2VTY3JlZW4oKSB7XG4gICAgICAgIGlmIChHYW1lRGF0YS5nZXRQbGF0Zm9ybSgpID09IFBsYXRmb3JtLnd4KSB7XG4gICAgICAgICAgICB3eC52aWJyYXRlTG9uZyh7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcIiArIHQpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiAodCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZpYnJhdGVMb25n6LCD55So5aSx6LSlXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDliJvlu7rljp/nlJ/mqKHmnb/lub/lkYrnu4Tku7Yt5LqU6KGM5qC85a2Q5bm/5ZGKLeW8ueeqlyAqL1xuICAgIHNob3dGaXZlQ3VzdG9tQWQoKSB7XG4gICAgICAgIGlmIChHYW1lRGF0YS5nZXRQbGF0Zm9ybSgpID09IFBsYXRmb3JtLnd4KSB7XG4gICAgICAgICAgICB0aGlzLmlzZml2ZUN1c3RvbSA9IHRydWVcbiAgICAgICAgICAgIGxldCB3aW5TaXplID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcbiAgICAgICAgICAgIGxldCBsZWZ0U3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDEwMCxcbiAgICAgICAgICAgICAgICBmaXhlZDogZmFsc2UsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpdmVDdXN0b20pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpdmVDdXN0b20uc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpdmVDdXN0b20gPSB3eC5jcmVhdGVDdXN0b21BZCh7XG4gICAgICAgICAgICAgICAgICAgIGFkVW5pdElkOiB0aGlzLmZsdmVDdXN0b21BZElELCAgLy8nYWR1bml0LWFiZjljNjM0MjdjM2EzOGEnLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogbGVmdFN0eWxlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5maXZlQ3VzdG9tLm9uTG9hZCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfljp/nlJ/mqKHmnb8g5bm/5ZGK5Yqg6L295oiQ5YqfJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzZml2ZUN1c3RvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXZlQ3VzdG9tLnNob3coKS50aGVuKCgpID0+IGNvbnNvbGUubG9nKCfljp/nlJ/mqKHmnb8g5bm/5ZGK5pi+56S65oiQ5YqfJykpLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Y6f55Sf5qih5p2/IOW5v+WRiuaYvuekuuWksei0pVwiLCBlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==