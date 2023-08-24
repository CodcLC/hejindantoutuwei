
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bullet/bullet1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ef45j/DSNLpJMtSjU0fAD2', 'bullet1');
// Script/bullet/bullet1.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": PoolComponent,
  properties: {
    speed: 1000,
    range: 1000
  },
  onLoad: function onLoad() {},
  start: function start() {},
  //回收
  unuse: function unuse() {},
  //重用
  reuse: function reuse(data) {
    game.soundManager.playEffect(game.gameSound.qing_xing_qiang_jie2, false);
    this.state = "ready";
    this.idx = 0;
    this.curRange = this.range;
    if (data.group) this.node.group = data.group;
    this.node.angle = data.angle;
    var hd = this.node.angle * Math.PI / 180;
    this.speedX = Math.cos(hd) * this.node.width / 2;
    this.speedY = Math.sin(hd) * this.node.width / 2;
    this.node.x = data.v.x + this.speedX;
    this.node.y = data.v.y + this.speedY;
    this.speedX = Math.cos(hd) * this.speed;
    this.speedY = Math.sin(hd) * this.speed;
    var animation = this.node.getComponent(cc.Animation); //动画组件

    if (!this._isInit) {
      var spriteFrames = game.gameUtils.getSpriteFrames(game.bullet_atlas, data.prefabName);
      var readyClip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 20);
      readyClip.name = 'move';
      readyClip.wrapMode = cc.WrapMode.Loop;
      animation.addClip(readyClip);
      animation.play("move");
      this._isInit = true;
    } else {
      animation.playAdditive('move', 0);
    }

    this.state = "move";
    this.init(data);
  },
  init: function init(data) {
    game.emit("shootFire", {
      aniName: "eff1",
      v: data.v,
      angle: data.angle
    }); //开火动画
  },
  end: function end() {
    if (this.state == "end") return;
    this.state = "end";
    var curPos = cc.v2(this.node.x, this.node.y);
    var angle = this.node.angle;
    game.emit("shootFire", {
      aniName: "eff2",
      v: curPos,
      angle: angle
    }); //开火动画
    // game.emit("shootFire", "eff1", "eff2", curPos, angle);//开火动画

    var pool = this.node.pool;

    if (pool) {
      pool.put(this.node);
    } else {
      this.node.removeFromParent(true);
      this.node.destroy();
    }
  },
  onDestroy: function onDestroy() {},
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.end();
  },
  update: function update(dt) {
    if (this.state != "move") {
      return;
    }

    this.idx++;
    this.curRange -= this.speed * dt;

    if (this.curRange <= 0) {
      this.end();
      return;
    }

    this.node.x += this.speedX * dt;
    this.node.y += this.speedY * dt;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxidWxsZXRcXGJ1bGxldDEuanMiXSwibmFtZXMiOlsiUG9vbENvbXBvbmVudCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsInNwZWVkIiwicmFuZ2UiLCJvbkxvYWQiLCJzdGFydCIsInVudXNlIiwicmV1c2UiLCJkYXRhIiwiZ2FtZSIsInNvdW5kTWFuYWdlciIsInBsYXlFZmZlY3QiLCJnYW1lU291bmQiLCJxaW5nX3hpbmdfcWlhbmdfamllMiIsInN0YXRlIiwiaWR4IiwiY3VyUmFuZ2UiLCJncm91cCIsIm5vZGUiLCJhbmdsZSIsImhkIiwiTWF0aCIsIlBJIiwic3BlZWRYIiwiY29zIiwid2lkdGgiLCJzcGVlZFkiLCJzaW4iLCJ4IiwidiIsInkiLCJhbmltYXRpb24iLCJnZXRDb21wb25lbnQiLCJBbmltYXRpb24iLCJfaXNJbml0Iiwic3ByaXRlRnJhbWVzIiwiZ2FtZVV0aWxzIiwiZ2V0U3ByaXRlRnJhbWVzIiwiYnVsbGV0X2F0bGFzIiwicHJlZmFiTmFtZSIsInJlYWR5Q2xpcCIsIkFuaW1hdGlvbkNsaXAiLCJjcmVhdGVXaXRoU3ByaXRlRnJhbWVzIiwibmFtZSIsIndyYXBNb2RlIiwiV3JhcE1vZGUiLCJMb29wIiwiYWRkQ2xpcCIsInBsYXkiLCJwbGF5QWRkaXRpdmUiLCJpbml0IiwiZW1pdCIsImFuaU5hbWUiLCJlbmQiLCJjdXJQb3MiLCJ2MiIsInBvb2wiLCJwdXQiLCJyZW1vdmVGcm9tUGFyZW50IiwiZGVzdHJveSIsIm9uRGVzdHJveSIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTNCLEVBQThDOzs7QUFDOUNDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0gsYUFESjtBQUVMSSxFQUFBQSxVQUFVLEVBQUU7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STtBQW9FTFcsRUFBQUEsTUFwRUssa0JBb0VFQyxFQXBFRixFQW9FTTtBQUNQLFFBQUksS0FBS25ELEtBQUwsSUFBYyxNQUFsQixFQUEwQjtBQUN0QjtBQUNIOztBQUNELFNBQUtDLEdBQUw7QUFDQSxTQUFLQyxRQUFMLElBQWlCLEtBQUtkLEtBQUwsR0FBYStELEVBQTlCOztBQUNBLFFBQUksS0FBS2pELFFBQUwsSUFBaUIsQ0FBckIsRUFBd0I7QUFDcEIsV0FBS3FDLEdBQUw7QUFDQTtBQUNIOztBQUNELFNBQUtuQyxJQUFMLENBQVVVLENBQVYsSUFBZSxLQUFLTCxNQUFMLEdBQWMwQyxFQUE3QjtBQUNBLFNBQUsvQyxJQUFMLENBQVVZLENBQVYsSUFBZSxLQUFLSixNQUFMLEdBQWN1QyxFQUE3QjtBQUNIO0FBaEZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBQb29sQ29tcG9uZW50ID0gcmVxdWlyZShcIlBvb2xDb21wb25lbnRcIik7IC8v5rGg5a2Q57uE5Lu2XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IFBvb2xDb21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc3BlZWQ6IDEwMDAsXHJcbiAgICAgICAgcmFuZ2U6IDEwMDBcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9LFxyXG4gICAgLy/lm57mlLZcclxuICAgIHVudXNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB9LFxyXG4gICAgLy/ph43nlKhcclxuICAgIHJldXNlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGdhbWUuc291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoZ2FtZS5nYW1lU291bmQucWluZ194aW5nX3FpYW5nX2ppZTIsZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBcInJlYWR5XCI7XHJcbiAgICAgICAgdGhpcy5pZHggPSAwO1xyXG4gICAgICAgIHRoaXMuY3VyUmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG4gICAgICAgIGlmIChkYXRhLmdyb3VwKSB0aGlzLm5vZGUuZ3JvdXAgPSBkYXRhLmdyb3VwO1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IGRhdGEuYW5nbGU7XHJcbiAgICAgICAgbGV0IGhkID0gdGhpcy5ub2RlLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICB0aGlzLnNwZWVkWCA9IE1hdGguY29zKGhkKSAqIHRoaXMubm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy5zcGVlZFkgPSBNYXRoLnNpbihoZCkgKiB0aGlzLm5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMubm9kZS54ID0gZGF0YS52LnggKyB0aGlzLnNwZWVkWDtcclxuICAgICAgICB0aGlzLm5vZGUueSA9IGRhdGEudi55ICsgdGhpcy5zcGVlZFk7XHJcbiAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLmNvcyhoZCkgKiB0aGlzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5zaW4oaGQpICogdGhpcy5zcGVlZDtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pOy8v5Yqo55S757uE5Lu2XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0luaXQpIHtcclxuICAgICAgICAgICAgbGV0IHNwcml0ZUZyYW1lcyA9IGdhbWUuZ2FtZVV0aWxzLmdldFNwcml0ZUZyYW1lcyhnYW1lLmJ1bGxldF9hdGxhcywgZGF0YS5wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgbGV0IHJlYWR5Q2xpcCA9IGNjLkFuaW1hdGlvbkNsaXAuY3JlYXRlV2l0aFNwcml0ZUZyYW1lcyhzcHJpdGVGcmFtZXMsIDIwKTtcclxuICAgICAgICAgICAgcmVhZHlDbGlwLm5hbWUgPSAnbW92ZSc7XHJcbiAgICAgICAgICAgIHJlYWR5Q2xpcC53cmFwTW9kZSA9IGNjLldyYXBNb2RlLkxvb3A7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5hZGRDbGlwKHJlYWR5Q2xpcCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5wbGF5KFwibW92ZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5faXNJbml0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5wbGF5QWRkaXRpdmUoJ21vdmUnLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwibW92ZVwiO1xyXG4gICAgICAgIHRoaXMuaW5pdChkYXRhKTtcclxuICAgIH0sXHJcbiAgICBpbml0KGRhdGEpIHtcclxuICAgICAgICBnYW1lLmVtaXQoXCJzaG9vdEZpcmVcIiwge2FuaU5hbWU6IFwiZWZmMVwiLCB2OiBkYXRhLnYsIGFuZ2xlOiBkYXRhLmFuZ2xlfSk7Ly/lvIDngavliqjnlLtcclxuICAgIH0sXHJcbiAgICBlbmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gXCJlbmRcIikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBcImVuZFwiO1xyXG4gICAgICAgIHZhciBjdXJQb3MgPSBjYy52Mih0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xyXG4gICAgICAgIHZhciBhbmdsZSA9IHRoaXMubm9kZS5hbmdsZTtcclxuICAgICAgICBnYW1lLmVtaXQoXCJzaG9vdEZpcmVcIiwge2FuaU5hbWU6IFwiZWZmMlwiLCB2OiBjdXJQb3MsIGFuZ2xlOiBhbmdsZX0pOy8v5byA54Gr5Yqo55S7XHJcbiAgICAgICAgLy8gZ2FtZS5lbWl0KFwic2hvb3RGaXJlXCIsIFwiZWZmMVwiLCBcImVmZjJcIiwgY3VyUG9zLCBhbmdsZSk7Ly/lvIDngavliqjnlLtcclxuICAgICAgICB2YXIgcG9vbCA9IHRoaXMubm9kZS5wb29sO1xyXG4gICAgICAgIGlmIChwb29sKSB7XHJcbiAgICAgICAgICAgIHBvb2wucHV0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT0gXCJtb3ZlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlkeCsrO1xyXG4gICAgICAgIHRoaXMuY3VyUmFuZ2UgLT0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgIGlmICh0aGlzLmN1clJhbmdlIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkWCAqIGR0O1xyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWRZICogZHQ7XHJcbiAgICB9LFxyXG59KTtcclxuIl19