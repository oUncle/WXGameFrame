
import GameData, { Platform } from "../Other/GameData";


const { ccclass, property } = cc._decorator;

@ccclass
export default class SdkCtrl {
    private static _instance: SdkCtrl = null;
    private rewardedVideoAdID: string = "adunit-xxxxxxxxxxxxxxx"
    private bannerVideoAdID: string = "adunit-xxxxxxxxxxxxxxx"
    private interstitialAdID: string = "adunit-xxxxxxxxxxxxxxx"
    private leftCustomAdID: string = "adunit-xxxxxxxxxxxxxxx"
    private rightCustomAdID: string = "adunit-xxxxxxxxxxxxxxx"
    private flveCustomAdID: string = "adunit-xxxxxxxxxxxxxxx"
    public rewardedVideoAd: any = null;
    public bannerVideoAd: any = null;
    public successFun: Function = null
    public failFun: Function = null
    public fiveCustom: any;
    public isfiveCustom: boolean = false

    public static getInstance() {
        if (!this._instance) {
            this._instance = new SdkCtrl();
            this._instance._init();
        }
        return this._instance;
    }

    private _init() {
        if (GameData.getPlatform() == Platform.wx) {
            this.showShareMenu()
            this.onShareAppMessage()

            this.rewardedVideoAd = wx.createRewardedVideoAd({ adUnitId: this.rewardedVideoAdID })
            this.rewardedVideoAd.onError(err => {
                console.log("激励视频 " + err);
                if (this.failFun) {
                    this.failFun()
                    this.failFun = null
                }
                GameData.isPause = false
                return;
            })
            this.rewardedVideoAd.onLoad(() => {
                console.log('激励视频 广告加载成功');
                this.rewardedVideoAd.onClose(res => {
                    // 用户点击了【关闭广告】按钮
                    // 小于 2.1.0 的基础库版本，res 是一个 undefined
                    if (res && res.isEnded || res === undefined) {
                        // 正常播放结束，可以下发游戏奖励
                        console.log('激励视频 广告播放完毕');
                        if (this.successFun) {
                            this.successFun()
                            this.successFun = null
                        }
                        GameData.isPause = false
                    } else {
                        // 播放中途退出，不下发游戏奖励
                        console.log('激励视频 广告播放中途退出');
                        if (this.failFun) {
                            this.failFun()
                            this.failFun = null
                        }
                        GameData.isPause = false
                        return;
                    }
                });
            });

            let systemInfo = wx.getSystemInfoSync();
            let screenWidth = systemInfo.screenWidth;
            let screenHeight = systemInfo.screenHeight;
            this.bannerVideoAd = wx.createBannerAd({
                adUnitId: this.bannerVideoAdID,
                adIntervals: 30, // 自动刷新频率不能小于30秒
                style: {
                    top: screenHeight - 100,
                    left: (screenWidth / 2) - 150,
                    width: 150,
                    height: 40,
                }
            });
            this.bannerVideoAd.onError(err => {
                console.log("banner1广告错误 " + err);
            })
            this.bannerVideoAd.onLoad(() => { });
        }
    }

    ShowRewardedVideoAd(successFun: Function, failFun: Function = () => { }) {
        switch (GameData.getPlatform()) {
            case Platform.wx:
                {
                    GameData.isPause = true
                    this.successFun = successFun
                    this.failFun = failFun
                    this.rewardedVideoAd.show().catch(() => {
                        // 失败重试
                        this.rewardedVideoAd.load()
                            .then(() => this.rewardedVideoAd.show())
                            .catch(err => {
                                console.log('激励视频 广告显示失败,可能是没加载出来')
                                if (this.failFun) {
                                    this.failFun()
                                    this.failFun = null
                                }
                                GameData.isPause = false
                                return;
                            })
                    });
                }
                break;
            default:
                cc.log("观看广告")
                successFun()
                break;
        }
    }

    ShowBanner() {
        switch (GameData.getPlatform()) {
            case Platform.wx:
                this.bannerVideoAd.show();
                break;
        }
    }

    HideBanner() {
        switch (GameData.getPlatform()) {
            case Platform.wx:
                this.bannerVideoAd.hide();
                break;
        }
    }

    getSetting() {
        console.log("获取信息");
        let pingtai = GameData.getPlatform()
        switch (pingtai) {
            case Platform.wx:
                {
                    wx.getSetting({
                        success(res) {
                            if (res.authSetting['scope.userInfo']) {
                                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                                wx.getUserInfo({
                                    success: function (res) {
                                        console.log("个人信息1", res);
                                        const userInfo = res.userInfo;
                                        //保存数据，进入游戏主界面
                                        this._userInfo = userInfo
                                    }
                                })
                            } else {
                                // 未授权的要调用 createUserInfoButton 创建按钮引导玩家点击
                                const systemInfo = wx.getSystemInfoSync();
                                const safeArea = systemInfo.safeArea;
                                const button = wx.createUserInfoButton({
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
                                })
                                button.onTap((res) => {
                                    const userInfo = res.userInfo;
                                    if (res && userInfo) {
                                        //保存数据，进入游戏主界面
                                        this._userInfo = userInfo
                                        console.log("个人信息2", res);
                                    }
                                })
                            }
                        }
                    })
                }
                break;
        }

    }

    /** 给好友排行榜发送消息 */
    postMessage(score: number) {
        let pingtai = GameData.getPlatform()
        switch (pingtai) {
            case Platform.wx:
                {
                    wx.getOpenDataContext().postMessage({
                        score: score,
                        dayTime: new Date().getTime()
                    });
                }
                break;
        }
    }

    /** 更新好友排行榜 */
    updataFriendList() {
        let pingtai = GameData.getPlatform()
        switch (pingtai) {
            case Platform.wx:
                {
                    wx.getOpenDataContext().postMessage({});
                }
                break;
        }
    }

    /** 打开另一个小程序 */
    navigateToMiniProgram(appId: string) {
        let pingtai = GameData.getPlatform()
        switch (pingtai) {
            case Platform.wx:
                {
                    wx.navigateToMiniProgram({
                        appId: appId,
                        path: 'page/index/index?id=123',
                        extraData: {
                            foo: 'bar'
                        },
                        envVersion: 'develop',
                        success(res) {
                            // 打开成功
                        }
                    })
                }
                break;
        }
    }

    /** 创建游戏圈 */
    createGameClubButton() {
        let pingtai = GameData.getPlatform()
        switch (pingtai) {
            case Platform.wx:
                {
                    let button = wx.createGameClubButton({
                        icon: 'light',
                        style: {
                            left: 10,
                            top: 76,
                            width: 40,
                            height: 40
                        }
                    })
                }
                break;
        }
    }

    /** 打开分享游戏权限 */
    showShareMenu() {
        if (GameData.getPlatform() == Platform.wx) {
            wx.showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline'],
                success(res) { },
                fail(e) { }
            })
        }
    }

    /** 主动分享 */
    shareAppMessage(fun: Function = null) {
        if (fun) {
            GameData.showGameEvent.push(fun)
        }
        if (GameData.getPlatform() == Platform.wx) {
            let titleList = ["超级好玩的游戏！"]
            wx.shareAppMessage({
                title: titleList[Math.floor(Math.random() * titleList.length)],
            })
            this.onShareAppMessage()
        }
    }

    /** 监听游戏分享修改分享图片和标题 */
    onShareAppMessage() {
        if (GameData.getPlatform() == Platform.wx) {
            let titleList = ["超级好玩的游戏！"]
            wx.onShareAppMessage(function () {
                return {
                    title: titleList[Math.floor(Math.random() * titleList.length)],
                    // imageUrlId: "JPPuijKQSKCj1mwBV9mWZA==",
                    // imageUrl: "https://mmocgame.qpic.cn/wechatgame/JzZlAvNISNnZ5QFLibX8SniapOPfBxIfVX1HN0w3icVGLwMdtv5YkBq2pHBfnGg16Nb/0"
                }
            })
        }
    }

    /** 显示插屏广告 */
    showInterstitialAd() {
        // 定义插屏广告
        if (GameData.getPlatform() == Platform.wx) {
            let interstitialAd = null

            // 创建插屏广告实例，提前初始化
            if (!interstitialAd) {
                if (wx.createInterstitialAd) {
                    interstitialAd = wx.createInterstitialAd({
                        adUnitId: this.interstitialAdID
                    })
                }
            }

            // 在适合的场景显示插屏广告
            if (interstitialAd) {
                interstitialAd.show().catch((err) => {
                    console.error(err)
                })
            }
        }
    }

    /** 创建原生模板广告组件-五行格子广告-弹窗 */
    leftCustom: any;
    rightCustom: any;
    isShowCustom: boolean = false
    showCustomAd() {
        if (GameData.getPlatform() == Platform.wx) {
            this.isShowCustom = true
            let leftId = this.leftCustomAdID;
            let rightId = this.rightCustomAdID;
            let winSize = wx.getSystemInfoSync();
            let leftStyle = {
                left: 15,
                top: 120,
                fixed: false,
            }

            let rightStyle = {
                left: winSize.screenWidth - 70,
                top: 120,
                fixed: false,
            }

            if (this.leftCustom) {
                this.leftCustom.show();
            } else {
                this.leftCustom = wx.createCustomAd({
                    adUnitId: leftId,  //'adunit-abf9c63427c3a38a',
                    style: leftStyle
                });
                this.leftCustom.onLoad(() => {
                    console.log('原生模板 广告加载成功');
                    if (this.isShowCustom) {
                        this.leftCustom.show().then(() => console.log('原生模板 广告显示成功')).catch((err) => {
                            console.log("原生模板 广告显示失败", err)
                        })
                    }
                })
            }

            if (this.rightCustom) {
                this.rightCustom.show();
            } else {
                this.rightCustom = wx.createCustomAd({
                    adUnitId: rightId,  //'adunit-abf9c63427c3a38a',
                    style: rightStyle
                });
                this.rightCustom.onLoad(() => {
                    console.log('原生模板 广告加载成功');
                    if (this.isShowCustom) {
                        this.rightCustom.show().then(() => console.log('原生模板 广告显示成功')).catch((err) => {
                            console.log("原生模板 广告显示失败", err)
                        })
                    }
                })
            }
        }
    }

    /** 隐藏格子广告 */
    hideCustomAd() {
        this.isShowCustom = false
        if (this.leftCustom) {
            this.leftCustom.hide()
        }
        if (this.rightCustom) {
            this.rightCustom.hide()
        }
    }

    /** 手机振动 */
    QuakeScreen() {
        if (GameData.getPlatform() == Platform.wx) {
            wx.vibrateLong({
                success: (t) => {
                    console.log("" + t)
                },
                fail: (t) => {
                    console.log("vibrateLong调用失败")
                }
            })
        }
    }

    /** 创建原生模板广告组件-五行格子广告-弹窗 */
    showFiveCustomAd() {
        if (GameData.getPlatform() == Platform.wx) {
            this.isfiveCustom = true
            let winSize = wx.getSystemInfoSync();
            let leftStyle = {
                left: 0,
                top: 100,
                fixed: false,
            }

            if (this.fiveCustom) {
                this.fiveCustom.show();
            } else {
                this.fiveCustom = wx.createCustomAd({
                    adUnitId: this.flveCustomAdID,  //'adunit-abf9c63427c3a38a',
                    style: leftStyle
                });
                this.fiveCustom.onLoad(() => {
                    console.log('原生模板 广告加载成功');
                    if (this.isfiveCustom) {
                        this.fiveCustom.show().then(() => console.log('原生模板 广告显示成功')).catch((err: any) => {
                            console.log("原生模板 广告显示失败", err)
                        })
                    }
                })
            }
        }
    }
}
