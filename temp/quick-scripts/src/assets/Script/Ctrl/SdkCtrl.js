"use strict";
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