"use strict";
cc._RF.push(module, '3df57yJEQVNAaMCWzJcor+T', 'SpineManager');
// Script/Manager/SpineManager.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var SpineManager = /** @class */ (function () {
    function SpineManager() {
        this._skeletonDatas = {};
        this._superior = {};
        this._soldierBundle = null;
    }
    SpineManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new SpineManager();
        }
        return this._instance;
    };
    SpineManager.prototype._isNull = function (arg) {
        return arg == null || arg == undefined;
    };
    SpineManager.prototype._getSkeletonData = function (name, superior) {
        if (this._skeletonDatas[name]) {
            // cc.log("_getSpriteFarme",name);
            this._addSuperiorData(name, superior);
            return this._skeletonDatas[name];
        }
        return null;
    };
    SpineManager.prototype._addSuperiorData = function (path, superior) {
        if (this._isNull(this._superior[superior])) {
            this._superior[superior] = {};
        }
        if (this._isNull(this._superior[superior][path])) {
            this._superior[superior][path] = true;
        }
    };
    SpineManager.prototype._checkSuperior = function (superior) {
        var clearList = [];
        if (this._isNull(this._superior[superior])) {
            return clearList;
        }
        for (var skey in this._superior[superior]) {
            var isHave = false;
            for (var key in this._superior) {
                if (key == superior) {
                    continue;
                }
                for (var kk in this._superior[key]) {
                    if (kk == skey) {
                        isHave = true;
                        break;
                    }
                }
                if (isHave) {
                    break;
                }
            }
            if (!isHave) {
                clearList.push(skey);
            }
        }
        return clearList;
    };
    SpineManager.prototype._checkPathSuperior = function (path, superior) {
        var clearList = [];
        if (this._isNull(this._superior[superior])) {
            return clearList;
        }
        var isHave = false;
        for (var key in this._superior) {
            if (key == superior) {
                continue;
            }
            for (var kk in this._superior[key]) {
                if (kk == path) {
                    isHave = true;
                    break;
                }
            }
        }
        if (!isHave) {
            clearList.push(path);
        }
        return clearList;
    };
    SpineManager.prototype.preloadSkeletonData = function (path, superior, cb) {
        var _this = this;
        if (this._skeletonDatas[path]) {
            this._addSuperiorData(path, superior);
            cb(path + "*@*" + superior);
            cc.log("preloadSkeletonData have ", path);
            return;
        }
        cc.resources.load(path, sp.SkeletonData, function (err, skeletonData) {
            if (err) {
                cc.log("loadSkeletonData err", err);
                cb(path + "*@*" + superior);
                return;
            }
            cc.log("preloadSkeletonData have ", path);
            _this._skeletonDatas[path] = skeletonData;
            _this._addSuperiorData(path, superior);
            skeletonData.addRef();
            cb(path + "*@*" + superior);
        });
    };
    SpineManager.prototype.loadBundleSkeletonData = function (path, superior) {
        if (superior === void 0) { superior = ""; }
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this._skeletonDatas[path]) {
                            cc.log("loadskeletonData have ", path);
                            _this._addSuperiorData(path, superior);
                            resolve(_this._skeletonDatas[path]);
                            return;
                        }
                        var bundle = cc.assetManager.getBundle("PlayerEffect");
                        bundle.load(path, sp.SkeletonData, function (err, skeletonData) {
                            if (err) {
                                cc.warn("loadskeletonData err", err);
                                resolve(null);
                                return;
                            }
                            _this._skeletonDatas[path] = skeletonData;
                            // cc.log("loadskeletonData nononohave ",path);
                            _this._addSuperiorData(path, superior);
                            skeletonData.addRef();
                            resolve(skeletonData);
                        });
                    })];
            });
        });
    };
    SpineManager.prototype.loadSkeletonData = function (path, superior) {
        if (superior === void 0) { superior = ""; }
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this._skeletonDatas[path]) {
                            cc.log("loadskeletonData have ", path);
                            _this._addSuperiorData(path, superior);
                            resolve(_this._skeletonDatas[path]);
                            return;
                        }
                        cc.resources.load(path, sp.SkeletonData, function (err, skeletonData) {
                            if (err) {
                                cc.warn("loadskeletonData err", err);
                                resolve(null);
                                return;
                            }
                            _this._skeletonDatas[path] = skeletonData;
                            // cc.log("loadskeletonData nononohave ",path);
                            _this._addSuperiorData(path, superior);
                            skeletonData.addRef();
                            resolve(skeletonData);
                        });
                    })];
            });
        });
    };
    SpineManager.prototype.getBundleSkeletonData = function (name, superior) {
        if (superior === void 0) { superior = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var sf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadBundleSkeletonData(name, superior)];
                    case 1:
                        sf = _a.sent();
                        if (sf) {
                            return [2 /*return*/, sf];
                        }
                        return [4 /*yield*/, this.loadSkeletonData(name, superior)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SpineManager.prototype.getSkeletonData = function (name, superior) {
        if (superior === void 0) { superior = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var sf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sf = this._getSkeletonData(name, superior);
                        if (sf) {
                            return [2 /*return*/, sf];
                        }
                        return [4 /*yield*/, this.loadSkeletonData(name, superior)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 播放spine动画回调接口
     * @param spine  动画
     * @param listener
     * @param name
     * @param loop boolen 默认不循环
     * @param hideOnComplete bool 默认隐藏
     * @returns
     */
    SpineManager.prototype.playSpineAni = function (spine, listener, name, loop, hideOnComplete) {
        if (listener === void 0) { listener = null; }
        if (name === void 0) { name = ""; }
        if (loop === void 0) { loop = false; }
        if (hideOnComplete === void 0) { hideOnComplete = true; }
        if (spine == null || !spine.isValid) {
            // if(Global.showLog == true)
            cc.warn("spine 动画为空", name);
            return;
        }
        if (!name) {
            cc.warn("spine 动画名为空", spine.skeletonData.name, spine.node.name);
            return;
        }
        // spine.node.active = false;
        // spine.node.active = true;
        if (!spine.isAnimationCached()) {
            spine.clearTracks();
        }
        spine.setToSetupPose();
        spine.setAnimation(0, name, loop);
        // spine.animation = name;
        // spine.loop = loop;
        spine.setCompleteListener(function () {
            if (hideOnComplete) {
                spine.node.active = false;
                // spine.node.opacity = 0;
            }
            if (listener != null) {
                listener();
            }
        });
    };
    /**
     * 播放spine动画随机起始时间回调接口
     * @param spine  动画
     * @param listener
     * @param name
     * @param startdt 起始时间，0到1之间，(0,1) // 小于等于0 或 大于等于1 为随机起始时间
     * @param loop boolen 默认不循环
     * @param hideOnComplete bool 默认隐藏
     * @returns
     */
    SpineManager.prototype.playSpineAniByStart = function (spine, listener, name, startdt, loop, hideOnComplete) {
        if (listener === void 0) { listener = null; }
        if (name === void 0) { name = ""; }
        if (startdt === void 0) { startdt = 0; }
        if (loop === void 0) { loop = false; }
        if (hideOnComplete === void 0) { hideOnComplete = true; }
        if (spine == null || !spine.isValid) {
            // if(Global.showLog == true)
            cc.warn("spine 动画为空", name);
            return;
        }
        if (!name) {
            cc.warn("spine 动画名为空", spine.node.name);
            return;
        }
        // spine.node.active = false;
        // spine.node.active = true;
        if (!spine.isAnimationCached()) {
            spine.clearTracks();
        }
        spine.setToSetupPose();
        var track = spine.setAnimation(0, name, loop);
        if (!track && spine.isAnimationCached()) {
            track = spine.getCurrent(0);
        }
        if (startdt <= 0 || startdt >= 1) {
            track.animationStart = Math.random();
        }
        else {
            track.animationStart = startdt;
        }
        // spine.animation = name;
        // spine.loop = loop;
        spine.setCompleteListener(function () {
            track.animationStart = 0;
            if (hideOnComplete) {
                spine.node.active = false;
                // spine.node.opacity = 0;
            }
            if (listener != null) {
                listener();
            }
        });
    };
    SpineManager.prototype.clearObject = function (path, superior) {
        var clearList = this._checkPathSuperior(path, superior);
        if (this._superior[superior] && this._superior[superior][path]) {
            delete this._superior[superior][path];
        }
        for (var i = 0; i < clearList.length; ++i) {
            if (this._skeletonDatas[clearList[i]]) {
                this._skeletonDatas[clearList[i]].decRef();
                delete this._skeletonDatas[clearList[i]];
            }
        }
        // MemoryManager.getInstance().removeMeoryAsset(clearList);
    };
    SpineManager.prototype.clearSuperiorObject = function (superior) {
        var clearList = this._checkSuperior(superior);
        if (this._superior[superior]) {
            delete this._superior[superior];
        }
        for (var i = 0; i < clearList.length; ++i) {
            if (this._skeletonDatas[clearList[i]]) {
                this._skeletonDatas[clearList[i]].decRef();
                delete this._skeletonDatas[clearList[i]];
            }
        }
        // MemoryManager.getInstance().removeMeoryAsset(clearList);
    };
    SpineManager.prototype.clearAllSuperiorObject = function () {
        for (var key in this._superior) {
            this.clearSuperiorObject(key);
            delete this._superior[key];
        }
        // MemoryManager.getInstance().removeMeoryAsset(clearList);
    };
    SpineManager._instance = null;
    return SpineManager;
}());
exports.default = SpineManager;

cc._RF.pop();