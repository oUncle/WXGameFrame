"use strict";
cc._RF.push(module, 'ad503niRTxHQLy5D4KTS+bv', 'GameEventManager');
// Script/Manager/GameEventManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameEventManager = /** @class */ (function () {
    function GameEventManager() {
        this._eventListeners = [];
    }
    //---------------------------------
    GameEventManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new GameEventManager();
        }
        return this._instance;
    };
    GameEventManager.prototype.pushNodeEvent = function (obj) {
        this._eventListeners.push(obj);
    };
    GameEventManager.prototype.removeNodeEvent = function (obj) {
        for (var index = 0; index < this._eventListeners.length; index++) {
            if (this._eventListeners[index] == obj) {
                this._eventListeners.splice(index, 1);
                return;
            }
        }
    };
    GameEventManager.prototype.dispathcGameEvent = function (eventId, data) {
        if (data === void 0) { data = null; }
        for (var index = 0; index < this._eventListeners.length; index++) {
            var element = this._eventListeners[index];
            if (element && element.isValid) {
                element.onDispathcGameEvent(eventId, data);
            }
        }
    };
    GameEventManager._instance = null;
    return GameEventManager;
}());
exports.default = GameEventManager;

cc._RF.pop();