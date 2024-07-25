
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/SpineManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxTcGluZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtJQUFBO1FBQ1ksbUJBQWMsR0FBUSxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixtQkFBYyxHQUFHLElBQUksQ0FBQTtJQTZTakMsQ0FBQztJQTFTaUIsd0JBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7U0FDdkM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVPLDhCQUFPLEdBQWYsVUFBZ0IsR0FBRztRQUNmLE9BQU8sR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFFTyx1Q0FBZ0IsR0FBeEIsVUFBeUIsSUFBWSxFQUFFLFFBQWdCO1FBQ25ELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQixrQ0FBa0M7WUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN0QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU8sdUNBQWdCLEdBQXhCLFVBQXlCLElBQVksRUFBRSxRQUFnQjtRQUNuRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxJQUFJLENB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LENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN2QyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7Z0JBQzFDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1QztTQUNKO1FBQ0QsMkRBQTJEO0lBQy9ELENBQUM7SUFFTSw2Q0FBc0IsR0FBN0I7UUFDSSxLQUFLLElBQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM5QjtRQUVELDJEQUEyRDtJQUMvRCxDQUFDO0lBMVNjLHNCQUFTLEdBQWlCLElBQUksQ0FBQztJQTJTbEQsbUJBQUM7Q0FoVEQsQUFnVEMsSUFBQTtrQkFoVG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGluZU1hbmFnZXIge1xuICAgIHByaXZhdGUgX3NrZWxldG9uRGF0YXM6IGFueSA9IHt9O1xuICAgIHByaXZhdGUgX3N1cGVyaW9yOiBhbnkgPSB7fTtcbiAgICBwcml2YXRlIF9zb2xkaWVyQnVuZGxlID0gbnVsbFxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTcGluZU1hbmFnZXIgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFNwaW5lTWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc051bGwoYXJnKSB7XG4gICAgICAgIHJldHVybiBhcmcgPT0gbnVsbCB8fCBhcmcgPT0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldFNrZWxldG9uRGF0YShuYW1lOiBzdHJpbmcsIHN1cGVyaW9yOiBzdHJpbmcpOiBzcC5Ta2VsZXRvbkRhdGEge1xuICAgICAgICBpZiAodGhpcy5fc2tlbGV0b25EYXRhc1tuYW1lXSkge1xuICAgICAgICAgICAgLy8gY2MubG9nKFwiX2dldFNwcml0ZUZhcm1lXCIsbmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9hZGRTdXBlcmlvckRhdGEobmFtZSwgc3VwZXJpb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NrZWxldG9uRGF0YXNbbmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hZGRTdXBlcmlvckRhdGEocGF0aDogc3RyaW5nLCBzdXBlcmlvcjogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc051bGwodGhpcy5fc3VwZXJpb3Jbc3VwZXJpb3JdKSkge1xuICAgICAgICAgICAgdGhpcy5fc3VwZXJpb3Jbc3VwZXJpb3JdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lzTnVsbCh0aGlzLl9zdXBlcmlvcltzdXBlcmlvcl1bcGF0aF0pKSB7XG4gICAgICAgICAgICB0aGlzLl9zdXBlcmlvcltzdXBlcmlvcl1bcGF0aF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2hlY2tTdXBlcmlvcihzdXBlcmlvcjogc3RyaW5nKSB7XG4gICAgICAgIGxldCBjbGVhckxpc3Q6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGlmICh0aGlzLl9pc051bGwodGhpcy5fc3VwZXJpb3Jbc3VwZXJpb3JdKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNsZWFyTGlzdDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBza2V5IGluIHRoaXMuX3N1cGVyaW9yW3N1cGVyaW9yXSkge1xuICAgICAgICAgICAgbGV0IGlzSGF2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuX3N1cGVyaW9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PSBzdXBlcmlvcikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2sgaW4gdGhpcy5fc3VwZXJpb3Jba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2sgPT0gc2tleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNIYXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc0hhdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc0hhdmUpIHtcbiAgICAgICAgICAgICAgICBjbGVhckxpc3QucHVzaChza2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xlYXJMaXN0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NoZWNrUGF0aFN1cGVyaW9yKHBhdGg6IHN0cmluZywgc3VwZXJpb3I6IHN0cmluZykge1xuICAgICAgICBsZXQgY2xlYXJMaXN0OiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBpZiAodGhpcy5faXNOdWxsKHRoaXMuX3N1cGVyaW9yW3N1cGVyaW9yXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGVhckxpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlzSGF2ZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fc3VwZXJpb3IpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT0gc3VwZXJpb3IpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGtrIGluIHRoaXMuX3N1cGVyaW9yW2tleV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2sgPT0gcGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBpc0hhdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0hhdmUpIHtcbiAgICAgICAgICAgIGNsZWFyTGlzdC5wdXNoKHBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGVhckxpc3Q7XG4gICAgfVxuXG4gICAgcHVibGljIHByZWxvYWRTa2VsZXRvbkRhdGEocGF0aDogc3RyaW5nLCBzdXBlcmlvcjogc3RyaW5nLCBjYjogRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX3NrZWxldG9uRGF0YXNbcGF0aF0pIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFN1cGVyaW9yRGF0YShwYXRoLCBzdXBlcmlvcik7XG4gICAgICAgICAgICBjYihwYXRoICsgXCIqQCpcIiArIHN1cGVyaW9yKTtcbiAgICAgICAgICAgIGNjLmxvZyhcInByZWxvYWRTa2VsZXRvbkRhdGEgaGF2ZSBcIiwgcGF0aCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgc3AuU2tlbGV0b25EYXRhLCAoZXJyLCBza2VsZXRvbkRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJsb2FkU2tlbGV0b25EYXRhIGVyclwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIGNiKHBhdGggKyBcIipAKlwiICsgc3VwZXJpb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLmxvZyhcInByZWxvYWRTa2VsZXRvbkRhdGEgaGF2ZSBcIiwgcGF0aCk7XG4gICAgICAgICAgICB0aGlzLl9za2VsZXRvbkRhdGFzW3BhdGhdID0gc2tlbGV0b25EYXRhO1xuICAgICAgICAgICAgdGhpcy5fYWRkU3VwZXJpb3JEYXRhKHBhdGgsIHN1cGVyaW9yKTtcbiAgICAgICAgICAgIHNrZWxldG9uRGF0YS5hZGRSZWYoKVxuICAgICAgICAgICAgY2IocGF0aCArIFwiKkAqXCIgKyBzdXBlcmlvcik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGxvYWRCdW5kbGVTa2VsZXRvbkRhdGEocGF0aDogc3RyaW5nLCBzdXBlcmlvcjogc3RyaW5nID0gXCJcIik6IFByb21pc2U8c3AuU2tlbGV0b25EYXRhPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzcC5Ta2VsZXRvbkRhdGE+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9za2VsZXRvbkRhdGFzW3BhdGhdKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwibG9hZHNrZWxldG9uRGF0YSBoYXZlIFwiLCBwYXRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRTdXBlcmlvckRhdGEocGF0aCwgc3VwZXJpb3IpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fc2tlbGV0b25EYXRhc1twYXRoXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoXCJQbGF5ZXJFZmZlY3RcIik7XG4gICAgICAgICAgICBidW5kbGUubG9hZChwYXRoLCBzcC5Ta2VsZXRvbkRhdGEsIChlcnIsIHNrZWxldG9uRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2Mud2FybihcImxvYWRza2VsZXRvbkRhdGEgZXJyXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b25EYXRhc1twYXRoXSA9IHNrZWxldG9uRGF0YTtcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCJsb2Fkc2tlbGV0b25EYXRhIG5vbm9ub2hhdmUgXCIscGF0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkU3VwZXJpb3JEYXRhKHBhdGgsIHN1cGVyaW9yKTtcbiAgICAgICAgICAgICAgICBza2VsZXRvbkRhdGEuYWRkUmVmKClcbiAgICAgICAgICAgICAgICByZXNvbHZlKHNrZWxldG9uRGF0YSBhcyBzcC5Ta2VsZXRvbkRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBsb2FkU2tlbGV0b25EYXRhKHBhdGg6IHN0cmluZywgc3VwZXJpb3I6IHN0cmluZyA9IFwiXCIpOiBQcm9taXNlPHNwLlNrZWxldG9uRGF0YT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3AuU2tlbGV0b25EYXRhPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2tlbGV0b25EYXRhc1twYXRoXSkge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcImxvYWRza2VsZXRvbkRhdGEgaGF2ZSBcIiwgcGF0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkU3VwZXJpb3JEYXRhKHBhdGgsIHN1cGVyaW9yKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3NrZWxldG9uRGF0YXNbcGF0aF0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIHNwLlNrZWxldG9uRGF0YSwgKGVyciwgc2tlbGV0b25EYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYy53YXJuKFwibG9hZHNrZWxldG9uRGF0YSBlcnJcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbkRhdGFzW3BhdGhdID0gc2tlbGV0b25EYXRhO1xuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcImxvYWRza2VsZXRvbkRhdGEgbm9ub25vaGF2ZSBcIixwYXRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRTdXBlcmlvckRhdGEocGF0aCwgc3VwZXJpb3IpO1xuICAgICAgICAgICAgICAgIHNrZWxldG9uRGF0YS5hZGRSZWYoKVxuICAgICAgICAgICAgICAgIHJlc29sdmUoc2tlbGV0b25EYXRhIGFzIHNwLlNrZWxldG9uRGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldEJ1bmRsZVNrZWxldG9uRGF0YShuYW1lOiBzdHJpbmcsIHN1cGVyaW9yOiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLl9nZXRTcHJpdGVGYXJtZShuYW1lKTtcbiAgICAgICAgbGV0IHNmOiBzcC5Ta2VsZXRvbkRhdGEgPSBhd2FpdCB0aGlzLmxvYWRCdW5kbGVTa2VsZXRvbkRhdGEobmFtZSwgc3VwZXJpb3IpO1xuICAgICAgICBpZiAoc2YpIHtcbiAgICAgICAgICAgIHJldHVybiBzZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5sb2FkU2tlbGV0b25EYXRhKG5hbWUsIHN1cGVyaW9yKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0U2tlbGV0b25EYXRhKG5hbWU6IHN0cmluZywgc3VwZXJpb3I6IHN0cmluZyA9IFwiXCIpIHtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuX2dldFNwcml0ZUZhcm1lKG5hbWUpO1xuICAgICAgICBsZXQgc2Y6IHNwLlNrZWxldG9uRGF0YSA9IHRoaXMuX2dldFNrZWxldG9uRGF0YShuYW1lLCBzdXBlcmlvcik7XG4gICAgICAgIGlmIChzZikge1xuICAgICAgICAgICAgcmV0dXJuIHNmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmxvYWRTa2VsZXRvbkRhdGEobmFtZSwgc3VwZXJpb3IpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaSreaUvnNwaW5l5Yqo55S75Zue6LCD5o6l5Y+jXG4gICAgICogQHBhcmFtIHNwaW5lICDliqjnlLtcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXIgXG4gICAgICogQHBhcmFtIG5hbWUgXG4gICAgICogQHBhcmFtIGxvb3AgYm9vbGVuIOm7mOiupOS4jeW+queOr1xuICAgICAqIEBwYXJhbSBoaWRlT25Db21wbGV0ZSBib29sIOm7mOiupOmakOiXj1xuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBwbGF5U3BpbmVBbmkoc3BpbmU6IHNwLlNrZWxldG9uLCBsaXN0ZW5lcjogYW55ID0gbnVsbCwgbmFtZTogc3RyaW5nID0gXCJcIiwgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBoaWRlT25Db21wbGV0ZTogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgaWYgKHNwaW5lID09IG51bGwgfHwgIXNwaW5lLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIC8vIGlmKEdsb2JhbC5zaG93TG9nID09IHRydWUpXG4gICAgICAgICAgICBjYy53YXJuKFwic3BpbmUg5Yqo55S75Li656m6XCIsIG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgY2Mud2FybihcInNwaW5lIOWKqOeUu+WQjeS4uuepulwiLCBzcGluZS5za2VsZXRvbkRhdGEubmFtZSwgc3BpbmUubm9kZS5uYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBzcGluZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyBzcGluZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKCFzcGluZS5pc0FuaW1hdGlvbkNhY2hlZCgpKSB7XG4gICAgICAgICAgICBzcGluZS5jbGVhclRyYWNrcygpO1xuICAgICAgICB9XG4gICAgICAgIHNwaW5lLnNldFRvU2V0dXBQb3NlKCk7XG4gICAgICAgIHNwaW5lLnNldEFuaW1hdGlvbigwLCBuYW1lLCBsb29wKTtcbiAgICAgICAgLy8gc3BpbmUuYW5pbWF0aW9uID0gbmFtZTtcbiAgICAgICAgLy8gc3BpbmUubG9vcCA9IGxvb3A7XG5cbiAgICAgICAgc3BpbmUuc2V0Q29tcGxldGVMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaGlkZU9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBzcGluZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIHNwaW5lLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChsaXN0ZW5lciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pKt5pS+c3BpbmXliqjnlLvpmo/mnLrotbflp4vml7bpl7Tlm57osIPmjqXlj6NcbiAgICAgKiBAcGFyYW0gc3BpbmUgIOWKqOeUu1xuICAgICAqIEBwYXJhbSBsaXN0ZW5lciBcbiAgICAgKiBAcGFyYW0gbmFtZSBcbiAgICAgKiBAcGFyYW0gc3RhcnRkdCDotbflp4vml7bpl7TvvIww5YiwMeS5i+mXtO+8jCgwLDEpIC8vIOWwj+S6juetieS6jjAg5oiWIOWkp+S6juetieS6jjEg5Li66ZqP5py66LW35aeL5pe26Ze0XG4gICAgICogQHBhcmFtIGxvb3AgYm9vbGVuIOm7mOiupOS4jeW+queOr1xuICAgICAqIEBwYXJhbSBoaWRlT25Db21wbGV0ZSBib29sIOm7mOiupOmakOiXj1xuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBwbGF5U3BpbmVBbmlCeVN0YXJ0KHNwaW5lOiBzcC5Ta2VsZXRvbiwgbGlzdGVuZXI6IGFueSA9IG51bGwsIG5hbWU6IHN0cmluZyA9IFwiXCIsIHN0YXJ0ZHQ6IG51bWJlciA9IDAsIGxvb3A6IGJvb2xlYW4gPSBmYWxzZSwgaGlkZU9uQ29tcGxldGU6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGlmIChzcGluZSA9PSBudWxsIHx8ICFzcGluZS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAvLyBpZihHbG9iYWwuc2hvd0xvZyA9PSB0cnVlKVxuICAgICAgICAgICAgY2Mud2FybihcInNwaW5lIOWKqOeUu+S4uuepulwiLCBuYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJzcGluZSDliqjnlLvlkI3kuLrnqbpcIiwgc3BpbmUubm9kZS5uYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBzcGluZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyBzcGluZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKCFzcGluZS5pc0FuaW1hdGlvbkNhY2hlZCgpKSB7XG4gICAgICAgICAgICBzcGluZS5jbGVhclRyYWNrcygpO1xuICAgICAgICB9XG4gICAgICAgIHNwaW5lLnNldFRvU2V0dXBQb3NlKCk7XG4gICAgICAgIGxldCB0cmFjazogc3Auc3BpbmUuVHJhY2tFbnRyeSA9IHNwaW5lLnNldEFuaW1hdGlvbigwLCBuYW1lLCBsb29wKTtcbiAgICAgICAgaWYgKCF0cmFjayAmJiBzcGluZS5pc0FuaW1hdGlvbkNhY2hlZCgpKSB7XG4gICAgICAgICAgICB0cmFjayA9IHNwaW5lLmdldEN1cnJlbnQoMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZHQgPD0gMCB8fCBzdGFydGR0ID49IDEpIHtcbiAgICAgICAgICAgIHRyYWNrLmFuaW1hdGlvblN0YXJ0ID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyYWNrLmFuaW1hdGlvblN0YXJ0ID0gc3RhcnRkdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBzcGluZS5hbmltYXRpb24gPSBuYW1lO1xuICAgICAgICAvLyBzcGluZS5sb29wID0gbG9vcDtcblxuICAgICAgICBzcGluZS5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgIHRyYWNrLmFuaW1hdGlvblN0YXJ0ID0gMDtcbiAgICAgICAgICAgIGlmIChoaWRlT25Db21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHNwaW5lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gc3BpbmUubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxpc3RlbmVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJPYmplY3QocGF0aDogc3RyaW5nLCBzdXBlcmlvcjogc3RyaW5nKSB7XG4gICAgICAgIGxldCBjbGVhckxpc3QgPSB0aGlzLl9jaGVja1BhdGhTdXBlcmlvcihwYXRoLCBzdXBlcmlvcik7XG4gICAgICAgIGlmICh0aGlzLl9zdXBlcmlvcltzdXBlcmlvcl0gJiYgdGhpcy5fc3VwZXJpb3Jbc3VwZXJpb3JdW3BhdGhdKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fc3VwZXJpb3Jbc3VwZXJpb3JdW3BhdGhdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xlYXJMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2tlbGV0b25EYXRhc1tjbGVhckxpc3RbaV1dKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b25EYXRhc1tjbGVhckxpc3RbaV1dLmRlY1JlZigpXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3NrZWxldG9uRGF0YXNbY2xlYXJMaXN0W2ldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBNZW1vcnlNYW5hZ2VyLmdldEluc3RhbmNlKCkucmVtb3ZlTWVvcnlBc3NldChjbGVhckxpc3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclN1cGVyaW9yT2JqZWN0KHN1cGVyaW9yOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGNsZWFyTGlzdCA9IHRoaXMuX2NoZWNrU3VwZXJpb3Ioc3VwZXJpb3IpO1xuICAgICAgICBpZiAodGhpcy5fc3VwZXJpb3Jbc3VwZXJpb3JdKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fc3VwZXJpb3Jbc3VwZXJpb3JdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xlYXJMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2tlbGV0b25EYXRhc1tjbGVhckxpc3RbaV1dKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b25EYXRhc1tjbGVhckxpc3RbaV1dLmRlY1JlZigpXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3NrZWxldG9uRGF0YXNbY2xlYXJMaXN0W2ldXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBNZW1vcnlNYW5hZ2VyLmdldEluc3RhbmNlKCkucmVtb3ZlTWVvcnlBc3NldChjbGVhckxpc3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckFsbFN1cGVyaW9yT2JqZWN0KCkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdXBlcmlvcikge1xuICAgICAgICAgICAgdGhpcy5jbGVhclN1cGVyaW9yT2JqZWN0KGtleSk7XG5cbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9zdXBlcmlvcltrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWVtb3J5TWFuYWdlci5nZXRJbnN0YW5jZSgpLnJlbW92ZU1lb3J5QXNzZXQoY2xlYXJMaXN0KTtcbiAgICB9XG59XG4iXX0=