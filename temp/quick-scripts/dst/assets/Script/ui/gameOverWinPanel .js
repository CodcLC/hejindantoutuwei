
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ui/gameOverWinPanel .js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d373VHBIdCQZyFeggSUsS8', 'gameOverWinPanel ');
// Script/ui/gameOverWinPanel .js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": PoolComponent,
  properties: {},
  //回收
  unuse: function unuse() {},
  //重用
  reuse: function reuse(data) {
    this.data = data;
  },
  onClosed: function onClosed(e) {
    game.emit(game.gameEvent.load_scene, game.gameScene.hall);
    game.emit(game.gameEvent.closed_prefab, this.node);
  },
  start: function start() {}
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx1aVxcZ2FtZU92ZXJXaW5QYW5lbCAuanMiXSwibmFtZXMiOlsiUG9vbENvbXBvbmVudCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsInVudXNlIiwicmV1c2UiLCJkYXRhIiwib25DbG9zZWQiLCJlIiwiZ2FtZSIsImVtaXQiLCJnYW1lRXZlbnQiLCJsb2FkX3NjZW5lIiwiZ2FtZVNjZW5lIiwiaGFsbCIsImNsb3NlZF9wcmVmYWIiLCJub2RlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUEzQixFQUE4Qzs7O0FBQzlDQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNILGFBREo7QUFFTEksRUFBQUEsVUFBVSxFQUFFLEVBRlA7QUFHTDtBQUNBQyxFQUFBQSxLQUFLLEVBQUUsaUJBQVksQ0FDbEIsQ0FMSTtBQU1MO0FBQ0FDLEVBQUFBLEtBQUssRUFBRSxlQUFVQyxJQUFWLEVBQWdCO0FBQ25CLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNILEdBVEk7QUFVTEMsRUFBQUEsUUFWSyxvQkFVSUMsQ0FWSixFQVVPO0FBQ1JDLElBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVRCxJQUFJLENBQUNFLFNBQUwsQ0FBZUMsVUFBekIsRUFBcUNILElBQUksQ0FBQ0ksU0FBTCxDQUFlQyxJQUFwRDtBQUNBTCxJQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVUQsSUFBSSxDQUFDRSxTQUFMLENBQWVJLGFBQXpCLEVBQXdDLEtBQUtDLElBQTdDO0FBQ0gsR0FiSTtBQWNMQyxFQUFBQSxLQWRLLG1CQWNHLENBQ1A7QUFmSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUG9vbENvbXBvbmVudCA9IHJlcXVpcmUoXCJQb29sQ29tcG9uZW50XCIpOyAvL+axoOWtkOe7hOS7tlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBQb29sQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge30sXHJcbiAgICAvL+WbnuaUtlxyXG4gICAgdW51c2U6IGZ1bmN0aW9uICgpIHtcclxuICAgIH0sXHJcbiAgICAvL+mHjeeUqFxyXG4gICAgcmV1c2U6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIH0sXHJcbiAgICBvbkNsb3NlZChlKSB7XHJcbiAgICAgICAgZ2FtZS5lbWl0KGdhbWUuZ2FtZUV2ZW50LmxvYWRfc2NlbmUsIGdhbWUuZ2FtZVNjZW5lLmhhbGwpO1xyXG4gICAgICAgIGdhbWUuZW1pdChnYW1lLmdhbWVFdmVudC5jbG9zZWRfcHJlZmFiLCB0aGlzLm5vZGUpO1xyXG4gICAgfSxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgfVxyXG59KTtcclxuIl19