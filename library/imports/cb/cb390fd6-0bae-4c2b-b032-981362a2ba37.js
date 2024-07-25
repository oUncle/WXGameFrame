"use strict";
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