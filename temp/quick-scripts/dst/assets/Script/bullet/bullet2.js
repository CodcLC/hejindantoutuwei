
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bullet/bullet2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68c6azHekhFwLiKPVsMN0F3', 'bullet2');
// Script/bullet/bullet2.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": PoolComponent,
  properties: {},
  onLoad: function onLoad() {},
  //回收
  unuse: function unuse() {},
  //重用
  reuse: function reuse(data) {
    game.soundManager.playEffect(game.gameSound.qing_xing_qiang_jie1, false);
    this.init(data);
  },
  init: function init(data) {
    if (data.group) this.node.group = data.group;
    this.node.angle = data.angle;
    var hd = this.node.angle * Math.PI / 180;
    this.speedX = Math.cos(hd) * this.node.width / 2;
    this.speedY = Math.sin(hd) * this.node.width / 2;
    this.node.x = data.v.x + this.speedX;
    this.node.y = data.v.y + this.speedY;
    var animation = this.node.getComponent(cc.Animation); //动画组件

    if (!this._isInit) {
      var spriteFrames = game.gameUtils.getSpriteFrames(game.bullet_atlas, "bullet2");
      var clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 20);
      clip.name = 'start';
      clip.wrapMode = cc.WrapMode.Normal;
      animation.addClip(clip);
      this._isInit = true;
    }

    animation.playAdditive('start', 0);
    animation.once("finished", function () {
      var pool = this.node.pool;

      if (pool) {
        pool.put(this.node);
      } else {
        this.node.removeFromParent(true);
        this.node.destroy();
      }
    }.bind(this));
  },
  start: function start() {},
  onDestroy: function onDestroy() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxidWxsZXRcXGJ1bGxldDIuanMiXSwibmFtZXMiOlsiUG9vbENvbXBvbmVudCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsIm9uTG9hZCIsInVudXNlIiwicmV1c2UiLCJkYXRhIiwiZ2FtZSIsInNvdW5kTWFuYWdlciIsInBsYXlFZmZlY3QiLCJnYW1lU291bmQiLCJxaW5nX3hpbmdfcWlhbmdfamllMSIsImluaXQiLCJncm91cCIsIm5vZGUiLCJhbmdsZSIsImhkIiwiTWF0aCIsIlBJIiwic3BlZWRYIiwiY29zIiwid2lkdGgiLCJzcGVlZFkiLCJzaW4iLCJ4IiwidiIsInkiLCJhbmltYXRpb24iLCJnZXRDb21wb25lbnQiLCJBbmltYXRpb24iLCJfaXNJbml0Iiwic3ByaXRlRnJhbWVzIiwiZ2FtZVV0aWxzIiwiZ2V0U3ByaXRlRnJhbWVzIiwiYnVsbGV0X2F0bGFzIiwiY2xpcCIsIkFuaW1hdGlvbkNsaXAiLCJjcmVhdGVXaXRoU3ByaXRlRnJhbWVzIiwibmFtZSIsIndyYXBNb2RlIiwiV3JhcE1vZGUiLCJOb3JtYWwiLCJhZGRDbGlwIiwicGxheUFkZGl0aXZlIiwib25jZSIsInBvb2wiLCJwdXQiLCJyZW1vdmVGcm9tUGFyZW50IiwiZGVzdHJveSIsImJpbmQiLCJzdGFydCIsIm9uRGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTNCLEVBQThDOzs7QUFDOUNDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0gsYUFESjtBQUVMSSxFQUFBQSxVQUFVLEVBQUUsRUFGUDtBQUdMQyxFQUFBQSxNQUhLLG9CQUdJLENBQ1IsQ0FKSTtBQUtMO0FBQ0FDLEVBQUFBLEtBQUssRUFBRSxpQkFBWSxDQUNsQixDQVBJO0FBUUw7QUFDQUMsRUFBQUEsS0FBSyxFQUFFLGVBQVVDLElBQVYsRUFBZ0I7QUFDbkJDLElBQUFBLElBQUksQ0FBQ0MsWUFBTCxDQUFrQkMsVUFBbEIsQ0FBNkJGLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxvQkFBNUMsRUFBaUUsS0FBakU7QUFDQSxTQUFLQyxJQUFMLENBQVVOLElBQVY7QUFDSCxHQVpJO0FBYUxNLEVBQUFBLElBYkssZ0JBYUFOLElBYkEsRUFhTTtBQUNQLFFBQUlBLElBQUksQ0FBQ08sS0FBVCxFQUFnQixLQUFLQyxJQUFMLENBQVVELEtBQVYsR0FBa0JQLElBQUksQ0FBQ08sS0FBdkI7QUFDaEIsU0FBS0MsSUFBTCxDQUFVQyxLQUFWLEdBQWtCVCxJQUFJLENBQUNTLEtBQXZCO0FBQ0EsUUFBSUMsRUFBRSxHQUFHLEtBQUtGLElBQUwsQ0FBVUMsS0FBVixHQUFrQkUsSUFBSSxDQUFDQyxFQUF2QixHQUE0QixHQUFyQztBQUNBLFNBQUtDLE1BQUwsR0FBY0YsSUFBSSxDQUFDRyxHQUFMLENBQVNKLEVBQVQsSUFBZSxLQUFLRixJQUFMLENBQVVPLEtBQXpCLEdBQWlDLENBQS9DO0FBQ0EsU0FBS0MsTUFBTCxHQUFjTCxJQUFJLENBQUNNLEdBQUwsQ0FBU1AsRUFBVCxJQUFlLEtBQUtGLElBQUwsQ0FBVU8sS0FBekIsR0FBaUMsQ0FBL0M7QUFDQSxTQUFLUCxJQUFMLENBQVVVLENBQVYsR0FBY2xCLElBQUksQ0FBQ21CLENBQUwsQ0FBT0QsQ0FBUCxHQUFXLEtBQUtMLE1BQTlCO0FBQ0EsU0FBS0wsSUFBTCxDQUFVWSxDQUFWLEdBQWNwQixJQUFJLENBQUNtQixDQUFMLENBQU9DLENBQVAsR0FBVyxLQUFLSixNQUE5QjtBQUNBLFFBQUlLLFNBQVMsR0FBRyxLQUFLYixJQUFMLENBQVVjLFlBQVYsQ0FBdUI1QixFQUFFLENBQUM2QixTQUExQixDQUFoQixDQVJPLENBUThDOztBQUNyRCxRQUFJLENBQUMsS0FBS0MsT0FBVixFQUFtQjtBQUNmLFVBQUlDLFlBQVksR0FBR3hCLElBQUksQ0FBQ3lCLFNBQUwsQ0FBZUMsZUFBZixDQUErQjFCLElBQUksQ0FBQzJCLFlBQXBDLEVBQWtELFNBQWxELENBQW5CO0FBQ0EsVUFBSUMsSUFBSSxHQUFHbkMsRUFBRSxDQUFDb0MsYUFBSCxDQUFpQkMsc0JBQWpCLENBQXdDTixZQUF4QyxFQUFzRCxFQUF0RCxDQUFYO0FBQ0FJLE1BQUFBLElBQUksQ0FBQ0csSUFBTCxHQUFZLE9BQVo7QUFDQUgsTUFBQUEsSUFBSSxDQUFDSSxRQUFMLEdBQWdCdkMsRUFBRSxDQUFDd0MsUUFBSCxDQUFZQyxNQUE1QjtBQUNBZCxNQUFBQSxTQUFTLENBQUNlLE9BQVYsQ0FBa0JQLElBQWxCO0FBQ0EsV0FBS0wsT0FBTCxHQUFlLElBQWY7QUFDSDs7QUFDREgsSUFBQUEsU0FBUyxDQUFDZ0IsWUFBVixDQUF1QixPQUF2QixFQUFnQyxDQUFoQztBQUNBaEIsSUFBQUEsU0FBUyxDQUFDaUIsSUFBVixDQUFlLFVBQWYsRUFBMkIsWUFBWTtBQUNuQyxVQUFJQyxJQUFJLEdBQUcsS0FBSy9CLElBQUwsQ0FBVStCLElBQXJCOztBQUNBLFVBQUlBLElBQUosRUFBVTtBQUNOQSxRQUFBQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLaEMsSUFBZDtBQUNILE9BRkQsTUFHSztBQUNELGFBQUtBLElBQUwsQ0FBVWlDLGdCQUFWLENBQTJCLElBQTNCO0FBQ0EsYUFBS2pDLElBQUwsQ0FBVWtDLE9BQVY7QUFDSDtBQUNKLEtBVDBCLENBU3pCQyxJQVR5QixDQVNwQixJQVRvQixDQUEzQjtBQVVILEdBekNJO0FBMENMQyxFQUFBQSxLQTFDSyxtQkEwQ0csQ0FDUCxDQTNDSTtBQTRDTEMsRUFBQUEsU0E1Q0ssdUJBNENPLENBQ1gsQ0E3Q0ksQ0E4Q0w7O0FBOUNLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBQb29sQ29tcG9uZW50ID0gcmVxdWlyZShcIlBvb2xDb21wb25lbnRcIik7IC8v5rGg5a2Q57uE5Lu2XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IFBvb2xDb21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7fSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH0sXHJcbiAgICAvL+WbnuaUtlxyXG4gICAgdW51c2U6IGZ1bmN0aW9uICgpIHtcclxuICAgIH0sXHJcbiAgICAvL+mHjeeUqFxyXG4gICAgcmV1c2U6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgZ2FtZS5zb3VuZE1hbmFnZXIucGxheUVmZmVjdChnYW1lLmdhbWVTb3VuZC5xaW5nX3hpbmdfcWlhbmdfamllMSxmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5pbml0KGRhdGEpO1xyXG4gICAgfSxcclxuICAgIGluaXQoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhLmdyb3VwKSB0aGlzLm5vZGUuZ3JvdXAgPSBkYXRhLmdyb3VwO1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IGRhdGEuYW5nbGU7XHJcbiAgICAgICAgbGV0IGhkID0gdGhpcy5ub2RlLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICB0aGlzLnNwZWVkWCA9IE1hdGguY29zKGhkKSAqIHRoaXMubm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy5zcGVlZFkgPSBNYXRoLnNpbihoZCkgKiB0aGlzLm5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMubm9kZS54ID0gZGF0YS52LnggKyB0aGlzLnNwZWVkWDtcclxuICAgICAgICB0aGlzLm5vZGUueSA9IGRhdGEudi55ICsgdGhpcy5zcGVlZFk7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTsvL+WKqOeUu+e7hOS7tlxyXG4gICAgICAgIGlmICghdGhpcy5faXNJbml0KSB7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGVGcmFtZXMgPSBnYW1lLmdhbWVVdGlscy5nZXRTcHJpdGVGcmFtZXMoZ2FtZS5idWxsZXRfYXRsYXMsIFwiYnVsbGV0MlwiKTtcclxuICAgICAgICAgICAgbGV0IGNsaXAgPSBjYy5BbmltYXRpb25DbGlwLmNyZWF0ZVdpdGhTcHJpdGVGcmFtZXMoc3ByaXRlRnJhbWVzLCAyMCk7XHJcbiAgICAgICAgICAgIGNsaXAubmFtZSA9ICdzdGFydCc7XHJcbiAgICAgICAgICAgIGNsaXAud3JhcE1vZGUgPSBjYy5XcmFwTW9kZS5Ob3JtYWw7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5hZGRDbGlwKGNsaXApO1xyXG4gICAgICAgICAgICB0aGlzLl9pc0luaXQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbmltYXRpb24ucGxheUFkZGl0aXZlKCdzdGFydCcsIDApO1xyXG4gICAgICAgIGFuaW1hdGlvbi5vbmNlKFwiZmluaXNoZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgcG9vbCA9IHRoaXMubm9kZS5wb29sO1xyXG4gICAgICAgICAgICBpZiAocG9vbCkge1xyXG4gICAgICAgICAgICAgICAgcG9vbC5wdXQodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19