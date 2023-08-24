
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ui/gamePausePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c12adAeKNJFaaGOS9v0je9s', 'gamePausePanel');
// Script/ui/gamePausePanel.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": PoolComponent,
  properties: {},
  //回收
  unuse: function unuse() {},
  //重用
  reuse: function reuse(data) {},
  onComplete: function onComplete() {//cc.director.pause();
  },
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {},
  start: function start() {},
  onClosed: function onClosed() {
    //cc.director.resume();
    game.emit(game.gameEvent.closed_prefab, this.node);
  },
  //返回大厅
  onBackHome: function onBackHome() {
    //cc.director.resume();
    game.emit(game.gameEvent.closed_prefab, this.node);
    game.emit(game.gameEvent.load_scene, game.gameScene.hall);
  },
  //重新开始
  onReStart: function onReStart() {
    //cc.director.resume();
    game.emit(game.gameEvent.closed_prefab, this.node);
    game.emit(game.gameEvent.load_scene, game.gameScene.gameGuanka);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx1aVxcZ2FtZVBhdXNlUGFuZWwuanMiXSwibmFtZXMiOlsiUG9vbENvbXBvbmVudCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsInVudXNlIiwicmV1c2UiLCJkYXRhIiwib25Db21wbGV0ZSIsIm9uRGVzdHJveSIsIm9uTG9hZCIsInN0YXJ0Iiwib25DbG9zZWQiLCJnYW1lIiwiZW1pdCIsImdhbWVFdmVudCIsImNsb3NlZF9wcmVmYWIiLCJub2RlIiwib25CYWNrSG9tZSIsImxvYWRfc2NlbmUiLCJnYW1lU2NlbmUiLCJoYWxsIiwib25SZVN0YXJ0IiwiZ2FtZUd1YW5rYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTNCLEVBQThDOzs7QUFDOUNDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0gsYUFESjtBQUVMSSxFQUFBQSxVQUFVLEVBQUUsRUFGUDtBQUdMO0FBQ0FDLEVBQUFBLEtBQUssRUFBRSxpQkFBWSxDQUNsQixDQUxJO0FBTUw7QUFDQUMsRUFBQUEsS0FBSyxFQUFFLGVBQVVDLElBQVYsRUFBZ0IsQ0FDdEIsQ0FSSTtBQVNMQyxFQUFBQSxVQVRLLHdCQVNRLENBQ1Q7QUFDSCxHQVhJO0FBWUxDLEVBQUFBLFNBWkssdUJBWU8sQ0FDWCxDQWJJO0FBY0xDLEVBQUFBLE1BZEssb0JBY0ksQ0FDUixDQWZJO0FBZ0JMQyxFQUFBQSxLQWhCSyxtQkFnQkcsQ0FDUCxDQWpCSTtBQWtCTEMsRUFBQUEsUUFsQkssc0JBa0JNO0FBQ1A7QUFDQUMsSUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVVELElBQUksQ0FBQ0UsU0FBTCxDQUFlQyxhQUF6QixFQUF3QyxLQUFLQyxJQUE3QztBQUNILEdBckJJO0FBc0JMO0FBQ0FDLEVBQUFBLFVBdkJLLHdCQXVCUTtBQUNUO0FBQ0FMLElBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVRCxJQUFJLENBQUNFLFNBQUwsQ0FBZUMsYUFBekIsRUFBd0MsS0FBS0MsSUFBN0M7QUFDQUosSUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVVELElBQUksQ0FBQ0UsU0FBTCxDQUFlSSxVQUF6QixFQUFxQ04sSUFBSSxDQUFDTyxTQUFMLENBQWVDLElBQXBEO0FBQ0gsR0EzQkk7QUE0Qkw7QUFDQUMsRUFBQUEsU0E3QkssdUJBNkJPO0FBQ1I7QUFDQVQsSUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVVELElBQUksQ0FBQ0UsU0FBTCxDQUFlQyxhQUF6QixFQUF3QyxLQUFLQyxJQUE3QztBQUNBSixJQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVUQsSUFBSSxDQUFDRSxTQUFMLENBQWVJLFVBQXpCLEVBQXFDTixJQUFJLENBQUNPLFNBQUwsQ0FBZUcsVUFBcEQ7QUFDSDtBQWpDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUG9vbENvbXBvbmVudCA9IHJlcXVpcmUoXCJQb29sQ29tcG9uZW50XCIpOyAvL+axoOWtkOe7hOS7tlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBQb29sQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge30sXHJcbiAgICAvL+WbnuaUtlxyXG4gICAgdW51c2U6IGZ1bmN0aW9uICgpIHtcclxuICAgIH0sXHJcbiAgICAvL+mHjeeUqFxyXG4gICAgcmV1c2U6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICB9LFxyXG4gICAgb25Db21wbGV0ZSgpIHtcclxuICAgICAgICAvL2NjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcbiAgICBvbkNsb3NlZCgpIHtcclxuICAgICAgICAvL2NjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgIGdhbWUuZW1pdChnYW1lLmdhbWVFdmVudC5jbG9zZWRfcHJlZmFiLCB0aGlzLm5vZGUpO1xyXG4gICAgfSxcclxuICAgIC8v6L+U5Zue5aSn5Y6FXHJcbiAgICBvbkJhY2tIb21lKCkge1xyXG4gICAgICAgIC8vY2MuZGlyZWN0b3IucmVzdW1lKCk7XHJcbiAgICAgICAgZ2FtZS5lbWl0KGdhbWUuZ2FtZUV2ZW50LmNsb3NlZF9wcmVmYWIsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgZ2FtZS5lbWl0KGdhbWUuZ2FtZUV2ZW50LmxvYWRfc2NlbmUsIGdhbWUuZ2FtZVNjZW5lLmhhbGwpO1xyXG4gICAgfSxcclxuICAgIC8v6YeN5paw5byA5aeLXHJcbiAgICBvblJlU3RhcnQoKSB7XHJcbiAgICAgICAgLy9jYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgICAgICBnYW1lLmVtaXQoZ2FtZS5nYW1lRXZlbnQuY2xvc2VkX3ByZWZhYiwgdGhpcy5ub2RlKTtcclxuICAgICAgICBnYW1lLmVtaXQoZ2FtZS5nYW1lRXZlbnQubG9hZF9zY2VuZSwgZ2FtZS5nYW1lU2NlbmUuZ2FtZUd1YW5rYSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=