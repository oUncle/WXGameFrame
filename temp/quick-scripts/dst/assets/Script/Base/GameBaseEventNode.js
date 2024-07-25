
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Base/GameBaseEventNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c945fDPV6ZB9YInnrDfTit/', 'GameBaseEventNode');
// Script/Base/GameBaseEventNode.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameBaseEventNode = /** @class */ (function (_super) {
    __extends(GameBaseEventNode, _super);
    function GameBaseEventNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameBaseEventNode.prototype.onDispathcGameEvent = function (eventId, eventData) {
    };
    GameBaseEventNode = __decorate([
        ccclass
    ], GameBaseEventNode);
    return GameBaseEventNode;
}(cc.Component));
exports.default = GameBaseEventNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlXFxHYW1lQmFzZUV2ZW50Tm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUErQyxxQ0FBWTtJQUEzRDs7SUFLQSxDQUFDO0lBSEcsK0NBQW1CLEdBQW5CLFVBQXFCLE9BQWlCLEVBQUUsU0FBYTtJQUVyRCxDQUFDO0lBSmdCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBS3JDO0lBQUQsd0JBQUM7Q0FMRCxBQUtDLENBTDhDLEVBQUUsQ0FBQyxTQUFTLEdBSzFEO2tCQUxvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4uL0NvbmZpZy9HYW1lRXZlbnRDb25maWdcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQmFzZUV2ZW50Tm9kZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBvbkRpc3BhdGhjR2FtZUV2ZW50IChldmVudElkOkdhbWVFdmVudCwgZXZlbnREYXRhOmFueSkge1xuICAgICAgICBcbiAgICB9XG59XG4iXX0=