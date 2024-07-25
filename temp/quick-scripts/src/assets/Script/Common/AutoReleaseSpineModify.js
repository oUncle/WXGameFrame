"use strict";
cc._RF.push(module, '3e3ef0RTDlKW6EGopckwFOB', 'AutoReleaseSpineModify');
// Script/Common/AutoReleaseSpineModify.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var AutoReleaseSpineModify = /** @class */ (function (_super) {
    __extends(AutoReleaseSpineModify, _super);
    function AutoReleaseSpineModify() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._sfs = [];
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    AutoReleaseSpineModify.prototype.start = function () {
    };
    /**
     * addModifySFPath
     */
    AutoReleaseSpineModify.prototype.addModifySF = function (sf) {
        this._sfs.push(sf);
        sf.addRef();
        cc.log("addModifySF", sf.name);
    };
    AutoReleaseSpineModify.prototype.onDestroy = function () {
        cc.log("AutoRelease addModifySF s");
        for (var i = 0; i < this._sfs.length; i++) {
            this._sfs[i].decRef();
            cc.log("AutoRelease addModifySF", this._sfs[i].name);
        }
        cc.log("AutoRelease addModifySF e");
    };
    AutoReleaseSpineModify = __decorate([
        ccclass
    ], AutoReleaseSpineModify);
    return AutoReleaseSpineModify;
}(cc.Component));
exports.default = AutoReleaseSpineModify;

cc._RF.pop();