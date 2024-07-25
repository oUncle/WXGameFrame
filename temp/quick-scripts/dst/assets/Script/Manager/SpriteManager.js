
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/SpriteManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a71aa/D32dFIbq5Kq7tTAiX', 'SpriteManager');
// Script/Manager/SpriteManager.ts

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
var SpriteManager = /** @class */ (function () {
    function SpriteManager() {
        this._spriteFrames = {};
    }
    SpriteManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new SpriteManager();
            this._instance._init();
        }
        return this._instance;
    };
    SpriteManager.destroyInstance = function () {
        if (this._instance) {
            this._instance._destroy();
            delete this._instance;
            this._instance = null;
        }
    };
    SpriteManager.prototype._init = function () {
    };
    SpriteManager.prototype._destroy = function () {
    };
    SpriteManager.prototype.setBundleSpriteFrameByName = function (sprite, spriteFrameName) {
        return __awaiter(this, void 0, void 0, function () {
            var frame;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!sprite) {
                            return [2 /*return*/];
                        }
                        if (!Boolean(spriteFrameName)) {
                            cc.warn("setSpriteFrameByName spriteFrameName is null");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getBundleSpriteFrame(spriteFrameName)];
                    case 1:
                        frame = _a.sent();
                        if (sprite && cc.isValid(sprite) && cc.isValid(sprite.node)) {
                            if (frame) {
                                sprite.spriteFrame = frame;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SpriteManager.prototype.getBundleSpriteFrame = function (spriteFrameName) {
        return __awaiter(this, void 0, void 0, function () {
            var sp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sp = this._spriteFrames[spriteFrameName];
                        if (sp) {
                            return [2 /*return*/, sp];
                        }
                        return [4 /*yield*/, this.loadBundleSpriteFrame(spriteFrameName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SpriteManager.prototype.loadBundleSpriteFrame = function (path) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this._spriteFrames[path]) {
                            resolve(_this._spriteFrames[path]);
                            return;
                        }
                        var bundle = cc.assetManager.getBundle("PlayerEffect");
                        if (!bundle) {
                            cc.warn("Game分包还没加载,图片路径", path);
                            resolve(null);
                            return;
                        }
                        bundle.load(path, cc.SpriteFrame, function (err, spriteFrame) {
                            if (err) {
                                cc.warn("loadSpriteFrame err", path, err);
                                resolve(null);
                                return;
                            }
                            _this._spriteFrames[path] = spriteFrame;
                            spriteFrame.addRef();
                            resolve(spriteFrame);
                        });
                    })];
            });
        });
    };
    SpriteManager.prototype.setSpriteFrameByName = function (sprite, spriteFrameName) {
        return __awaiter(this, void 0, void 0, function () {
            var frame;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!sprite) {
                            return [2 /*return*/];
                        }
                        if (!Boolean(spriteFrameName)) {
                            cc.warn("setSpriteFrameByName spriteFrameName is null");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getSpriteFrame(spriteFrameName)];
                    case 1:
                        frame = _a.sent();
                        if (sprite && cc.isValid(sprite) && cc.isValid(sprite.node)) {
                            if (frame) {
                                sprite.spriteFrame = frame;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SpriteManager.prototype.getSpriteFrame = function (spriteFrameName) {
        return __awaiter(this, void 0, void 0, function () {
            var sp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sp = this._spriteFrames[spriteFrameName];
                        if (sp) {
                            return [2 /*return*/, sp];
                        }
                        return [4 /*yield*/, this.loadSpriteFrame(spriteFrameName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SpriteManager.prototype.loadSpriteFrame = function (path) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this._spriteFrames[path]) {
                            resolve(_this._spriteFrames[path]);
                            return;
                        }
                        cc.resources.load(path, cc.SpriteFrame, function (err, spriteFrame) {
                            if (err) {
                                cc.warn("loadSpriteFrame err", path, err);
                                resolve(null);
                                return;
                            }
                            _this._spriteFrames[path] = spriteFrame;
                            spriteFrame.addRef();
                            resolve(spriteFrame);
                        });
                    })];
            });
        });
    };
    SpriteManager._instance = null;
    return SpriteManager;
}());
exports.default = SpriteManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxTcHJpdGVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtRQUdZLGtCQUFhLEdBQVEsRUFBRSxDQUFDO0lBc0hwQyxDQUFDO0lBcEhpQix5QkFBVyxHQUF6QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFYSw2QkFBZSxHQUE3QjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzFCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFTyw2QkFBSyxHQUFiO0lBRUEsQ0FBQztJQUVPLGdDQUFRLEdBQWhCO0lBRUEsQ0FBQztJQUVZLGtEQUEwQixHQUF2QyxVQUF3QyxNQUFpQixFQUFFLGVBQXVCOzs7Ozs7d0JBQzlFLElBQUksQ0FBQyxNQUFNLEVBQUU7NEJBQ1Qsc0JBQU87eUJBQ1Y7d0JBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTs0QkFDM0IsRUFBRSxDQUFDLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDOzRCQUN4RCxzQkFBTzt5QkFDVjt3QkFDVyxxQkFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLEVBQUE7O3dCQUF4RCxLQUFLLEdBQUcsU0FBZ0Q7d0JBQzVELElBQUksTUFBTSxJQUFJLEVBQUUs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TyxTQUEyQyxFQUFDOzs7O0tBQ3REO0lBRWEsdUNBQWUsR0FBN0IsVUFBOEIsSUFBWTt1Q0FBRyxPQUFPOzs7Z0JBQ2hELHNCQUFPLElBQUksT0FBTyxDQUFpQixVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUMvQyxJQUFJLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQzFCLE9BQU8sQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ2xDLE9BQU87eUJBQ1Y7d0JBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsV0FBVzs0QkFDckQsSUFBSSxHQUFHLEVBQUU7Z0NBQ0wsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0NBQzFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDZCxPQUFPOzZCQUNWOzRCQUNELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDOzRCQUN2QyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUE7NEJBQ3BCLE9BQU8sQ0FBQyxXQUE2QixDQUFDLENBQUM7d0JBQzNDLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxFQUFDOzs7S0FDTjtJQXRIYyx1QkFBUyxHQUFrQixJQUFJLENBQUM7SUF1SG5ELG9CQUFDO0NBekhELEFBeUhDLElBQUE7a0JBekhvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwcml0ZU1hbmFnZXIge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTcHJpdGVNYW5hZ2VyID0gbnVsbDtcbiAgICBwcml2YXRlIF9zcHJpdGVGcmFtZXM6IGFueSA9IHt9O1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgU3ByaXRlTWFuYWdlcigpO1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UuX2luaXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkZXN0cm95SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UuX2Rlc3Ryb3koKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9pbnN0YW5jZTtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXQoKSB7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIF9kZXN0cm95KCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHNldEJ1bmRsZVNwcml0ZUZyYW1lQnlOYW1lKHNwcml0ZTogY2MuU3ByaXRlLCBzcHJpdGVGcmFtZU5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAoIXNwcml0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghQm9vbGVhbihzcHJpdGVGcmFtZU5hbWUpKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwic2V0U3ByaXRlRnJhbWVCeU5hbWUgc3ByaXRlRnJhbWVOYW1lIGlzIG51bGxcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZyYW1lID0gYXdhaXQgdGhpcy5nZXRCdW5kbGVTcHJpdGVGcmFtZShzcHJpdGVGcmFtZU5hbWUpO1xuICAgICAgICBpZiAoc3ByaXRlICYmIGNjLmlzVmFsaWQoc3ByaXRlKSAmJiBjYy5pc1ZhbGlkKHNwcml0ZS5ub2RlKSkge1xuICAgICAgICAgICAgaWYgKGZyYW1lKSB7XG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gZnJhbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldEJ1bmRsZVNwcml0ZUZyYW1lKHNwcml0ZUZyYW1lTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBzcCA9IHRoaXMuX3Nwcml0ZUZyYW1lc1tzcHJpdGVGcmFtZU5hbWVdXG4gICAgICAgIGlmIChzcCkge1xuICAgICAgICAgICAgcmV0dXJuIHNwXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMubG9hZEJ1bmRsZVNwcml0ZUZyYW1lKHNwcml0ZUZyYW1lTmFtZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkQnVuZGxlU3ByaXRlRnJhbWUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxjYy5TcHJpdGVGcmFtZT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Y2MuU3ByaXRlRnJhbWU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zcHJpdGVGcmFtZXNbcGF0aF0pIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3Nwcml0ZUZyYW1lc1twYXRoXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoXCJQbGF5ZXJFZmZlY3RcIik7XG4gICAgICAgICAgICBpZiAoIWJ1bmRsZSkge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oXCJHYW1l5YiG5YyF6L+Y5rKh5Yqg6L29LOWbvueJh+i3r+W+hFwiLCBwYXRoKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1bmRsZS5sb2FkKHBhdGgsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2Mud2FybihcImxvYWRTcHJpdGVGcmFtZSBlcnJcIiwgcGF0aCwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9zcHJpdGVGcmFtZXNbcGF0aF0gPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZS5hZGRSZWYoKVxuICAgICAgICAgICAgICAgIHJlc29sdmUoc3ByaXRlRnJhbWUgYXMgY2MuU3ByaXRlRnJhbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzZXRTcHJpdGVGcmFtZUJ5TmFtZShzcHJpdGU6IGNjLlNwcml0ZSwgc3ByaXRlRnJhbWVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFzcHJpdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUJvb2xlYW4oc3ByaXRlRnJhbWVOYW1lKSkge1xuICAgICAgICAgICAgY2Mud2FybihcInNldFNwcml0ZUZyYW1lQnlOYW1lIHNwcml0ZUZyYW1lTmFtZSBpcyBudWxsXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmcmFtZSA9IGF3YWl0IHRoaXMuZ2V0U3ByaXRlRnJhbWUoc3ByaXRlRnJhbWVOYW1lKTtcbiAgICAgICAgaWYgKHNwcml0ZSAmJiBjYy5pc1ZhbGlkKHNwcml0ZSkgJiYgY2MuaXNWYWxpZChzcHJpdGUubm9kZSkpIHtcbiAgICAgICAgICAgIGlmIChmcmFtZSkge1xuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IGZyYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldFNwcml0ZUZyYW1lKHNwcml0ZUZyYW1lTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBzcCA9IHRoaXMuX3Nwcml0ZUZyYW1lc1tzcHJpdGVGcmFtZU5hbWVdXG4gICAgICAgIGlmIChzcCkge1xuICAgICAgICAgICAgcmV0dXJuIHNwXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMubG9hZFNwcml0ZUZyYW1lKHNwcml0ZUZyYW1lTmFtZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBsb2FkU3ByaXRlRnJhbWUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxjYy5TcHJpdGVGcmFtZT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Y2MuU3ByaXRlRnJhbWU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zcHJpdGVGcmFtZXNbcGF0aF0pIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3Nwcml0ZUZyYW1lc1twYXRoXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQocGF0aCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYy53YXJuKFwibG9hZFNwcml0ZUZyYW1lIGVyclwiLCBwYXRoLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3Nwcml0ZUZyYW1lc1twYXRoXSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLmFkZFJlZigpXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzcHJpdGVGcmFtZSBhcyBjYy5TcHJpdGVGcmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19