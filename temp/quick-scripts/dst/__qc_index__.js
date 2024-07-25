
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Base/GameBaseEventNode');
require('./assets/Script/Base/UIParent');
require('./assets/Script/Common/AutoReleaseSpineModify');
require('./assets/Script/Common/CustomListItem');
require('./assets/Script/Common/CustomListView');
require('./assets/Script/Common/CustomListViewGroup');
require('./assets/Script/Common/TurnTable');
require('./assets/Script/Config/GameEventConfig');
require('./assets/Script/Config/ItemConfig');
require('./assets/Script/Ctrl/GameCtrl');
require('./assets/Script/Ctrl/SdkCtrl');
require('./assets/Script/GameUtils/GameUtils');
require('./assets/Script/GameUtils/lzstring');
require('./assets/Script/Manager/GameEventManager');
require('./assets/Script/Manager/HttpManager');
require('./assets/Script/Manager/NetManager');
require('./assets/Script/Manager/ObjectManager');
require('./assets/Script/Manager/SpineManager');
require('./assets/Script/Manager/SpriteManager');
require('./assets/Script/Manager/UIManager');
require('./assets/Script/Other/GameData');
require('./assets/Script/Other/SoundMgr');
require('./assets/Script/UIManager/GameSetting/GameSetting');
require('./assets/Script/UIManager/HomeMain/HomeMain');
require('./assets/Script/UIManager/OtherGameMain/OtherGameBtn');
require('./assets/Script/UIManager/OtherGameMain/OtherGameMain');
require('./assets/Script/UIManager/PopUpMain/PopUpMain');
require('./assets/Script/UIManager/TipMain/TipMain');
require('./assets/Script/UIManager/TipMain/TipText');
require('./assets/Script/plugins/SkeletonExt');

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