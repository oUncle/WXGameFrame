
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIManager/HomeMain/HomeMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b75a7ldICNG7KwpG6uUJqA8', 'HomeMain');
// Script/UIManager/HomeMain/HomeMain.ts

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
var UIParent_1 = require("../../Base/UIParent");
var UIManager_1 = require("../../Manager/UIManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HomeMain = /** @class */ (function (_super) {
    __extends(HomeMain, _super);
    function HomeMain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spine = null;
        return _this;
    }
    // private _nowIndex: number = 0
    HomeMain.prototype.InitUI = function (uiMain) {
        _super.prototype.InitUI.call(this, uiMain);
    };
    HomeMain.prototype.ShowUI = function () {
        _super.prototype.ShowUI.call(this);
    };
    HomeMain.prototype.HideUI = function (fun) {
        _super.prototype.HideUI.call(this, fun);
    };
    HomeMain.prototype.onClickStartGame = function () {
    };
    HomeMain.prototype.onClickShowSettingMain = function () {
        this.uiManager.ShowUIName(UIManager_1.WinID.GameSetting, 0);
    };
    HomeMain.prototype.onClickShowOtherGame = function () {
        this.uiManager.ShowUIName(UIManager_1.WinID.OtherGameMain);
    };
    HomeMain.prototype.onDispathcGameEvent = function (eventId, eventData) {
        switch (eventId) {
            // case GameEvent.UpdataVit:
            //     {
            //         this._upDateVit()
            //     }
            //     break
            default:
                _super.prototype.onDispathcGameEvent.call(this, eventId, eventData);
                break;
        }
    };
    __decorate([
        property(sp.Skeleton)
    ], HomeMain.prototype, "spine", void 0);
    HomeMain = __decorate([
        ccclass
    ], HomeMain);
    return HomeMain;
}(UIParent_1.default));
exports.default = HomeMain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxVSU1hbmFnZXJcXEhvbWVNYWluXFxIb21lTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFHM0MscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFRO0lBQTlDO1FBQUEscUVBNENDO1FBMUNHLFdBQUssR0FBZ0IsSUFBSSxDQUFDOztJQTBDOUIsQ0FBQztJQXZDRyxnQ0FBZ0M7SUFFaEMseUJBQU0sR0FBTixVQUFPLE1BQU07UUFDVCxpQkFBTSxNQUFNLFlBQUMsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEdBQWdCO1FBQ25CLGlCQUFNLE1BQU0sWUFBQyxHQUFHLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBRUQsbUNBQWdCLEdBQWhCO0lBRUEsQ0FBQztJQUVELHlDQUFzQixHQUF0QjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGlCQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFFRCx1Q0FBb0IsR0FBcEI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxpQkFBSyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFFRCxzQ0FBbUIsR0FBbkIsVUFBb0IsT0FBa0IsRUFBRSxTQUFjO1FBQ2xELFFBQVEsT0FBTyxFQUFFO1lBQ2IsNEJBQTRCO1lBQzVCLFFBQVE7WUFDUiw0QkFBNEI7WUFDNUIsUUFBUTtZQUNSLFlBQVk7WUFDWjtnQkFDSSxpQkFBTSxtQkFBbUIsWUFBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQzlDLE1BQU07U0FDYjtJQUVMLENBQUM7SUF6Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzsyQ0FDSTtJQUZULFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0QzVCO0lBQUQsZUFBQztDQTVDRCxBQTRDQyxDQTVDcUMsa0JBQVEsR0E0QzdDO2tCQTVDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVBhcmVudCBmcm9tIFwiLi4vLi4vQmFzZS9VSVBhcmVudFwiO1xuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4uLy4uL0NvbmZpZy9HYW1lRXZlbnRDb25maWdcIjtcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSBcIi4uLy4uL0dhbWVVdGlscy9HYW1lVXRpbHNcIjtcbmltcG9ydCB7IFdpbklEIH0gZnJvbSBcIi4uLy4uL01hbmFnZXIvVUlNYW5hZ2VyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lTWFpbiBleHRlbmRzIFVJUGFyZW50IHtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgc3BpbmU6IHNwLlNrZWxldG9uID0gbnVsbDtcblxuXG4gICAgLy8gcHJpdmF0ZSBfbm93SW5kZXg6IG51bWJlciA9IDBcblxuICAgIEluaXRVSSh1aU1haW4pIHtcbiAgICAgICAgc3VwZXIuSW5pdFVJKHVpTWFpbik7XG4gICAgfVxuXG4gICAgU2hvd1VJKCkge1xuICAgICAgICBzdXBlci5TaG93VUkoKTtcbiAgICB9XG5cbiAgICBIaWRlVUkoZnVuPzogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICBzdXBlci5IaWRlVUkoZnVuKVxuICAgIH1cblxuICAgIG9uQ2xpY2tTdGFydEdhbWUoKSB7XG5cbiAgICB9XG5cbiAgICBvbkNsaWNrU2hvd1NldHRpbmdNYWluKCkge1xuICAgICAgICB0aGlzLnVpTWFuYWdlci5TaG93VUlOYW1lKFdpbklELkdhbWVTZXR0aW5nLCAwKVxuICAgIH1cblxuICAgIG9uQ2xpY2tTaG93T3RoZXJHYW1lKCkge1xuICAgICAgICB0aGlzLnVpTWFuYWdlci5TaG93VUlOYW1lKFdpbklELk90aGVyR2FtZU1haW4pXG4gICAgfVxuXG4gICAgb25EaXNwYXRoY0dhbWVFdmVudChldmVudElkOiBHYW1lRXZlbnQsIGV2ZW50RGF0YTogYW55KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnRJZCkge1xuICAgICAgICAgICAgLy8gY2FzZSBHYW1lRXZlbnQuVXBkYXRhVml0OlxuICAgICAgICAgICAgLy8gICAgIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5fdXBEYXRlVml0KClcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgYnJlYWtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3VwZXIub25EaXNwYXRoY0dhbWVFdmVudChldmVudElkLCBldmVudERhdGEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICB9XG59Il19