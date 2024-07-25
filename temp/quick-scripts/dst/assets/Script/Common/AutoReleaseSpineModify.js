
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/AutoReleaseSpineModify.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXEF1dG9SZWxlYXNlU3BpbmVNb2RpZnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0QsMENBQVk7SUFBaEU7UUFFSSx3QkFBd0I7UUFGNUIscUVBK0JDO1FBM0JXLFVBQUksR0FBb0IsRUFBRSxDQUFBOztRQTBCbEMsaUJBQWlCO0lBQ3JCLENBQUM7SUF6QkcsZUFBZTtJQUVmLHNDQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQ7O09BRUc7SUFDSSw0Q0FBVyxHQUFsQixVQUFtQixFQUFrQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWixFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVTLDBDQUFTLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO1FBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNyRDtRQUNELEVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBNUJnQixzQkFBc0I7UUFEMUMsT0FBTztPQUNhLHNCQUFzQixDQStCMUM7SUFBRCw2QkFBQztDQS9CRCxBQStCQyxDQS9CbUQsRUFBRSxDQUFDLFNBQVMsR0ErQi9EO2tCQS9Cb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b1JlbGVhc2VTcGluZU1vZGlmeSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIHByaXZhdGUgX3NmczpjYy5TcHJpdGVGcmFtZVtdID0gW11cblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYWRkTW9kaWZ5U0ZQYXRoXG4gICAgICovXG4gICAgcHVibGljIGFkZE1vZGlmeVNGKHNmOiBjYy5TcHJpdGVGcmFtZSkge1xuICAgICAgICB0aGlzLl9zZnMucHVzaChzZik7XG4gICAgICAgIHNmLmFkZFJlZigpO1xuICAgICAgICBjYy5sb2coXCJhZGRNb2RpZnlTRlwiLHNmLm5hbWUpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgY2MubG9nKFwiQXV0b1JlbGVhc2UgYWRkTW9kaWZ5U0Ygc1wiKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Nmcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICB0aGlzLl9zZnNbaV0uZGVjUmVmKCk7XG4gICAgICAgICAgIGNjLmxvZyhcIkF1dG9SZWxlYXNlIGFkZE1vZGlmeVNGXCIsdGhpcy5fc2ZzW2ldLm5hbWUpXG4gICAgICAgIH1cbiAgICAgICAgY2MubG9nKFwiQXV0b1JlbGVhc2UgYWRkTW9kaWZ5U0YgZVwiKVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=