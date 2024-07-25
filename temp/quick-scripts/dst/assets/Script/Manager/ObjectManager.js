
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/ObjectManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb390/WC65MK7AymBNioro3', 'ObjectManager');
// Script/Manager/ObjectManager.ts

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
var ObjectManager = /** @class */ (function () {
    function ObjectManager() {
        this._prefabs = {};
    }
    ObjectManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new ObjectManager();
            this._instance._init();
        }
        return this._instance;
    };
    ObjectManager.destroyInstance = function () {
        if (this._instance) {
            this._instance._destroy();
            delete this._instance;
            this._instance = null;
        }
    };
    ObjectManager.prototype._init = function () {
    };
    ObjectManager.prototype._destroy = function () {
    };
    ObjectManager.prototype.getBundleObjectPrefab = function (path, superior) {
        if (superior === void 0) { superior = ""; }
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this._prefabs[path]) {
                            resolve(_this._prefabs[path]);
                            return;
                        }
                        var bundle = cc.assetManager.getBundle("PlayerEffect");
                        if (!bundle) {
                            resolve(null);
                            return;
                        }
                        bundle.load(path, cc.Prefab, function (err, prefab) {
                            if (err) {
                                cc.log("getObjectNode err", err);
                                resolve(null);
                                return;
                            }
                            _this._prefabs[path] = prefab;
                            prefab.addRef();
                            resolve(prefab);
                        });
                    })];
            });
        });
    };
    ObjectManager.prototype.getObjectPrefab = function (path, superior) {
        if (superior === void 0) { superior = ""; }
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this._prefabs[path]) {
                            resolve(_this._prefabs[path]);
                            return;
                        }
                        cc.resources.load(path, cc.Prefab, function (err, prefab) {
                            if (err) {
                                cc.log("getObjectNode err", err);
                                resolve(null);
                                return;
                            }
                            _this._prefabs[path] = prefab;
                            prefab.addRef();
                            resolve(prefab);
                        });
                    })];
            });
        });
    };
    ObjectManager._instance = null;
    return ObjectManager;
}());
exports.default = ObjectManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxPYmplY3RNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtRQUdZLGFBQVEsR0FBUSxFQUFFLENBQUM7SUFzRS9CLENBQUM7SUFwRWlCLHlCQUFXLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDMUI7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVhLDZCQUFlLEdBQTdCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDMUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVPLDZCQUFLLEdBQWI7SUFFQSxDQUFDO0lBRU8sZ0NBQVEsR0FBaEI7SUFFQSxDQUFDO0lBRVksNkNBQXFCLEdBQWxDLFVBQW1DLElBQVksRUFBRSxRQUFxQjtRQUFyQix5QkFBQSxFQUFBLGFBQXFCO3VDQUFHLE9BQU87OztnQkFDNUUsc0JBQU8sSUFBSSxPQUFPLENBQVksVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDMUMsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUVyQixPQUFPLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUM3QixPQUFPO3lCQUNWO3dCQUNELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUN2RCxJQUFJLENBQUMsTUFBTSxFQUFFOzRCQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDZCxPQUFPO3lCQUNWO3dCQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTs0QkFDckMsSUFBSSxHQUFHLEVBQUU7Z0NBQ0wsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsQ0FBQztnQ0FDakMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNkLE9BQU87NkJBQ1Y7NEJBQ0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7NEJBQzdCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQTs0QkFDZixPQUFPLENBQUMsTUFBbUIsQ0FBQyxDQUFDO3dCQUNqQyxDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUMsRUFBQzs7O0tBQ047SUFFWSx1Q0FBZSxHQUE1QixVQUE2QixJQUFZLEVBQUUsUUFBcUI7UUFBckIseUJBQUEsRUFBQSxhQUFxQjt1Q0FBRyxPQUFPOzs7Z0JBQ3RFLHNCQUFPLElBQUksT0FBTyxDQUFZLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQzFDLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFFckIsT0FBTyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDN0IsT0FBTzt5QkFDVjt3QkFDRCxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNOzRCQUMzQyxJQUFJLEdBQUcsRUFBRTtnQ0FDTCxFQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dDQUNqQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ2QsT0FBTzs2QkFDVjs0QkFDRCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQzs0QkFDN0IsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFBOzRCQUNmLE9BQU8sQ0FBQyxNQUFtQixDQUFDLENBQUM7d0JBQ2pDLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxFQUFDOzs7S0FDTjtJQXRFYyx1QkFBUyxHQUFrQixJQUFJLENBQUM7SUF1RW5ELG9CQUFDO0NBekVELEFBeUVDLElBQUE7a0JBekVvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdE1hbmFnZXIge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBPYmplY3RNYW5hZ2VyID0gbnVsbDtcbiAgICBwcml2YXRlIF9wcmVmYWJzOiBhbnkgPSB7fTtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IE9iamVjdE1hbmFnZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLl9pbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGVzdHJveUluc3RhbmNlKCkge1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLl9kZXN0cm95KCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5faW5zdGFuY2U7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0KCkge1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVzdHJveSgpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRCdW5kbGVPYmplY3RQcmVmYWIocGF0aDogc3RyaW5nLCBzdXBlcmlvcjogc3RyaW5nID0gXCJcIik6IFByb21pc2U8Y2MuUHJlZmFiPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxjYy5QcmVmYWI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wcmVmYWJzW3BhdGhdKSB7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3ByZWZhYnNbcGF0aF0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBidW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKFwiUGxheWVyRWZmZWN0XCIpO1xuICAgICAgICAgICAgaWYgKCFidW5kbGUpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1bmRsZS5sb2FkKHBhdGgsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJnZXRPYmplY3ROb2RlIGVyclwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3ByZWZhYnNbcGF0aF0gPSBwcmVmYWI7XG4gICAgICAgICAgICAgICAgcHJlZmFiLmFkZFJlZigpXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwcmVmYWIgYXMgY2MuUHJlZmFiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0T2JqZWN0UHJlZmFiKHBhdGg6IHN0cmluZywgc3VwZXJpb3I6IHN0cmluZyA9IFwiXCIpOiBQcm9taXNlPGNjLlByZWZhYj4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Y2MuUHJlZmFiPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcHJlZmFic1twYXRoXSkge1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9wcmVmYWJzW3BhdGhdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiZ2V0T2JqZWN0Tm9kZSBlcnJcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVmYWJzW3BhdGhdID0gcHJlZmFiO1xuICAgICAgICAgICAgICAgIHByZWZhYi5hZGRSZWYoKVxuICAgICAgICAgICAgICAgIHJlc29sdmUocHJlZmFiIGFzIGNjLlByZWZhYik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19