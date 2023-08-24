
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bullet/bullet3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a362sK4ytJJY0zBnn5VZae', 'bullet3');
// Script/bullet/bullet3.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": PoolComponent,
  properties: {
    head: cc.Animation
  },
  onLoad: function onLoad() {},
  //回收
  unuse: function unuse() {},
  //重用
  reuse: function reuse(data) {
    game.soundManager.playEffect(game.gameSound.zhong_xing_qiang_jie5, false);
    this.init(data);
  },
  init: function init(data) {
    if (data.group) this.node.group = data.group;
    this.node.angle = data.angle;
    var hd = this.node.angle * Math.PI / 180;
    this.speedX = Math.cos(hd) * (this.node.width / 2 + this.head.node.width);
    this.speedY = Math.sin(hd) * (this.node.width / 2 + this.head.node.width);
    this.node.x = data.v.x + this.speedX;
    this.node.y = data.v.y + this.speedY; //闪电头子动画

    if (!this._isinit) {
      var spriteFrames = game.gameUtils.getSpriteFrames(game.bullet_atlas, "flashHead");
      var startClip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 30);
      startClip.name = 'start';
      startClip.wrapMode = cc.WrapMode.Normal;
      this.head.addClip(startClip);
    }

    this.head.playAdditive('start', 0); //自身动画

    var animation = this.node.getComponent(cc.Animation); //动画组件

    if (!this._isinit) {
      var _spriteFrames = game.gameUtils.getSpriteFrames(game.bullet_atlas, data.prefabName);

      var flashClip = cc.AnimationClip.createWithSpriteFrames(_spriteFrames, 20);
      flashClip.name = 'flash';
      flashClip.wrapMode = cc.WrapMode.Normal;
      animation.addClip(flashClip);
    }

    animation.playAdditive('flash', 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxidWxsZXRcXGJ1bGxldDMuanMiXSwibmFtZXMiOlsiUG9vbENvbXBvbmVudCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsImhlYWQiLCJBbmltYXRpb24iLCJvbkxvYWQiLCJ1bnVzZSIsInJldXNlIiwiZGF0YSIsImdhbWUiLCJzb3VuZE1hbmFnZXIiLCJwbGF5RWZmZWN0IiwiZ2FtZVNvdW5kIiwiemhvbmdfeGluZ19xaWFuZ19qaWU1IiwiaW5pdCIsImdyb3VwIiwibm9kZSIsImFuZ2xlIiwiaGQiLCJNYXRoIiwiUEkiLCJzcGVlZFgiLCJjb3MiLCJ3aWR0aCIsInNwZWVkWSIsInNpbiIsIngiLCJ2IiwieSIsIl9pc2luaXQiLCJzcHJpdGVGcmFtZXMiLCJnYW1lVXRpbHMiLCJnZXRTcHJpdGVGcmFtZXMiLCJidWxsZXRfYXRsYXMiLCJzdGFydENsaXAiLCJBbmltYXRpb25DbGlwIiwiY3JlYXRlV2l0aFNwcml0ZUZyYW1lcyIsIm5hbWUiLCJ3cmFwTW9kZSIsIldyYXBNb2RlIiwiTm9ybWFsIiwiYWRkQ2xpcCIsInBsYXlBZGRpdGl2ZSIsImFuaW1hdGlvbiIsImdldENvbXBvbmVudCIsInByZWZhYk5hbWUiLCJmbGFzaENsaXAiLCJvbmNlIiwicG9vbCIsInB1dCIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95IiwiYmluZCIsInN0YXJ0Iiwib25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBM0IsRUFBOEM7OztBQUM5Q0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTSCxhQURKO0FBRUxJLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUVILEVBQUUsQ0FBQ0k7QUFERCxHQUZQO0FBS0xDLEVBQUFBLE1BTEssb0JBS0ksQ0FDUixDQU5JO0FBT0w7QUFDQUMsRUFBQUEsS0FB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QUNELFlBQVYsQ0FBdUIsT0FBdkIsRUFBZ0MsQ0FBaEM7QUFDQUMsSUFBQUEsU0FBUyxDQUFDSSxJQUFWLENBQWUsVUFBZixFQUEyQixZQUFZO0FBQ25DLFVBQUlDLElBQUksR0FBRyxLQUFLaEMsSUFBTCxDQUFVZ0MsSUFBckI7O0FBQ0EsVUFBSUEsSUFBSixFQUFVO0FBQ05BLFFBQUFBLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtqQyxJQUFkO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsYUFBS0EsSUFBTCxDQUFVa0MsZ0JBQVYsQ0FBMkIsSUFBM0I7QUFDQSxhQUFLbEMsSUFBTCxDQUFVbUMsT0FBVjtBQUNIO0FBQ0osS0FUMEIsQ0FTekJDLElBVHlCLENBU3BCLElBVG9CLENBQTNCO0FBVUgsR0FwREk7QUFxRExDLEVBQUFBLEtBckRLLG1CQXFERyxDQUNQLENBdERJO0FBdURMQyxFQUFBQSxTQXZESyx1QkF1RE8sQ0FDWCxDQXhESSxDQXlETDs7QUF6REssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFBvb2xDb21wb25lbnQgPSByZXF1aXJlKFwiUG9vbENvbXBvbmVudFwiKTsgLy/msaDlrZDnu4Tku7ZcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogUG9vbENvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBoZWFkOiBjYy5BbmltYXRpb24sXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfSxcclxuICAgIC8v5Zue5pS2XHJcbiAgICB1bnVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgfSxcclxuICAgIC8v6YeN55SoXHJcbiAgICByZXVzZTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBnYW1lLnNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KGdhbWUuZ2FtZVNvdW5kLnpob25nX3hpbmdfcWlhbmdfamllNSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuaW5pdChkYXRhKTtcclxuICAgIH0sXHJcbiAgICBpbml0KGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YS5ncm91cCkgdGhpcy5ub2RlLmdyb3VwID0gZGF0YS5ncm91cDtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSBkYXRhLmFuZ2xlO1xyXG4gICAgICAgIGxldCBoZCA9IHRoaXMubm9kZS5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLmNvcyhoZCkgKiAodGhpcy5ub2RlLndpZHRoIC8gMiArIHRoaXMuaGVhZC5ub2RlLndpZHRoKTtcclxuICAgICAgICB0aGlzLnNwZWVkWSA9IE1hdGguc2luKGhkKSAqICh0aGlzLm5vZGUud2lkdGggLyAyICsgdGhpcy5oZWFkLm5vZGUud2lkdGgpO1xyXG4gICAgICAgIHRoaXMubm9kZS54ID0gZGF0YS52LnggKyB0aGlzLnNwZWVkWDtcclxuICAgICAgICB0aGlzLm5vZGUueSA9IGRhdGEudi55ICsgdGhpcy5zcGVlZFk7XHJcbiAgICAgICAgLy/pl6rnlLXlpLTlrZDliqjnlLtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzaW5pdCkge1xyXG4gICAgICAgICAgICBsZXQgc3ByaXRlRnJhbWVzID0gZ2FtZS5nYW1lVXRpbHMuZ2V0U3ByaXRlRnJhbWVzKGdhbWUuYnVsbGV0X2F0bGFzLCBcImZsYXNoSGVhZFwiKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0Q2xpcCA9IGNjLkFuaW1hdGlvbkNsaXAuY3JlYXRlV2l0aFNwcml0ZUZyYW1lcyhzcHJpdGVGcmFtZXMsIDMwKTtcclxuICAgICAgICAgICAgc3RhcnRDbGlwLm5hbWUgPSAnc3RhcnQnO1xyXG4gICAgICAgICAgICBzdGFydENsaXAud3JhcE1vZGUgPSBjYy5XcmFwTW9kZS5Ob3JtYWw7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZC5hZGRDbGlwKHN0YXJ0Q2xpcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGVhZC5wbGF5QWRkaXRpdmUoJ3N0YXJ0JywgMCk7XHJcbiAgICAgICAgLy/oh6rouqvliqjnlLtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pOy8v5Yqo55S757uE5Lu2XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc2luaXQpIHtcclxuICAgICAgICAgICAgbGV0IHNwcml0ZUZyYW1lcyA9IGdhbWUuZ2FtZVV0aWxzLmdldFNwcml0ZUZyYW1lcyhnYW1lLmJ1bGxldF9hdGxhcywgZGF0YS5wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgbGV0IGZsYXNoQ2xpcCA9IGNjLkFuaW1hdGlvbkNsaXAuY3JlYXRlV2l0aFNwcml0ZUZyYW1lcyhzcHJpdGVGcmFtZXMsIDIwKTtcclxuICAgICAgICAgICAgZmxhc2hDbGlwLm5hbWUgPSAnZmxhc2gnO1xyXG4gICAgICAgICAgICBmbGFzaENsaXAud3JhcE1vZGUgPSBjYy5XcmFwTW9kZS5Ob3JtYWw7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5hZGRDbGlwKGZsYXNoQ2xpcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFuaW1hdGlvbi5wbGF5QWRkaXRpdmUoJ2ZsYXNoJywgMCk7XHJcbiAgICAgICAgYW5pbWF0aW9uLm9uY2UoXCJmaW5pc2hlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBwb29sID0gdGhpcy5ub2RlLnBvb2w7XHJcbiAgICAgICAgICAgIGlmIChwb29sKSB7XHJcbiAgICAgICAgICAgICAgICBwb29sLnB1dCh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICB9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=