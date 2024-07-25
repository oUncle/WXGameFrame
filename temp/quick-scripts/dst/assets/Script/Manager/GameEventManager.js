
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Manager/GameEventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYW5hZ2VyXFxHYW1lRXZlbnRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtRQUVZLG9CQUFlLEdBQXVCLEVBQUUsQ0FBQTtJQWdDcEQsQ0FBQztJQTlCRyxtQ0FBbUM7SUFDckIsNEJBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsd0NBQWEsR0FBYixVQUFjLEdBQU87UUFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDBDQUFlLEdBQWYsVUFBZ0IsR0FBTztRQUNuQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDOUQsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPO2FBQ1Y7U0FDSjtJQUNMLENBQUM7SUFFRCw0Q0FBaUIsR0FBakIsVUFBa0IsT0FBTyxFQUFFLElBQWU7UUFBZixxQkFBQSxFQUFBLFdBQWU7UUFDdEMsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzlELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzthQUM5QztTQUNKO0lBQ0wsQ0FBQztJQS9CYywwQkFBUyxHQUFvQixJQUFJLENBQUM7SUFpQ3JELHVCQUFDO0NBbENELEFBa0NDLElBQUE7a0JBbENvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUJhc2VFdmVudE5vZGUgZnJvbSBcIi4uL0Jhc2UvR2FtZUJhc2VFdmVudE5vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUV2ZW50TWFuYWdlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOkdhbWVFdmVudE1hbmFnZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2V2ZW50TGlzdGVuZXJzOkdhbWVCYXNlRXZlbnROb2RlW10gPSBbXVxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBHYW1lRXZlbnRNYW5hZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIHB1c2hOb2RlRXZlbnQob2JqOmFueSkge1xuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVycy5wdXNoKG9iaik7XG4gICAgfVxuXG4gICAgcmVtb3ZlTm9kZUV2ZW50KG9iajphbnkpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2V2ZW50TGlzdGVuZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2V2ZW50TGlzdGVuZXJzW2luZGV4XSA9PSBvYmopIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVycy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGF0aGNHYW1lRXZlbnQoZXZlbnRJZCwgZGF0YTphbnkgPSBudWxsKXtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2V2ZW50TGlzdGVuZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2V2ZW50TGlzdGVuZXJzW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQub25EaXNwYXRoY0dhbWVFdmVudChldmVudElkLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4iXX0=