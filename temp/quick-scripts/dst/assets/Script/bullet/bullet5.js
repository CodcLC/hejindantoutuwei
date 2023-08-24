
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bullet/bullet5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '711dbd0tLZACopU4NMproPG', 'bullet5');
// Script/bullet/bullet5.js

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
    game.soundManager.playEffect(game.gameSound.qing_xing_qiang_jie1, false);
    this.init(data);
  },
  init: function init(data) {
    this.state = "ready";
    this.idx = 0;
    this.curRange = this.range;
    game.emit("shootFire", {
      aniName: "eff2",
      v: data.v,
      angle: data.angle
    }); //开火动画

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
  },
  end: function end() {
    if (this.state == "end") return;
    this.state = "end";
    var pool = this.node.pool;

    if (pool) {
      pool.put(this.node);
    } else {
      this.node.removeFromParent(true);
      this.node.destroy();
    }

    var curPos = cc.v2(this.node.x, this.node.y);
    var angle = this.node.angle; //game.emit("shootFire", "fire", "eff5", curPos, angle);//开火动画

    game.emit("shootFire", {
      aniName: "eff5",
      v: curPos,
      angle: angle
    }); //开火动画
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxidWxsZXRcXGJ1bGxldDUuanMiXSwibmFtZXMiOlsiUG9vbENvbXBvbmVudCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsInNwZWVkIiwicmFuZ2UiLCJvbkxvYWQiLCJzdGFydCIsInVudXNlIiwicmV1c2UiLCJkYXRhIiwiZ2FtZSIsInNvdW5kTWFuYWdlciIsInBsYXlFZmZlY3QiLCJnYW1lU291bmQiLCJxaW5nX3hpbmdfcWlhbmdfamllMSIsImluaXQiLCJzdGF0ZSIsImlkeCIsImN1clJhbmdlIiwiZW1pdCIsImFuaU5hbWUiLCJ2IiwiYW5nbGUiLCJncm91cCIsIm5vZGUiLCJoZCIsIk1hdGgiLCJQSSIsInNwZWVkWCIsImNvcyIsIndpZHRoIiwic3BlZWRZIiwic2luIiwieCIsInkiLCJhbmltYXRpb24iLCJnZXRDb21wb25lbnQiLCJBbmltYXRpb24iLCJfaXNJbml0Iiwic3ByaXRlRnJhbWVzIiwiZ2FtZVV0aWxzIiwiZ2V0U3ByaXRlRnJhbWVzIiwiYnVsbGV0X2F0bGFzIiwicHJlZmFiTmFtZSIsInJlYWR5Q2xpcCIsIkFuaW1hdGlvbkNsaXAiLCJjcmVhdGVXaXRoU3ByaXRlRnJhbWVzIiwibmFtZSIsIndyYXBNb2RlIiwiV3JhcE1vZGUiLCJMb29wIiwiYWRkQ2xpcCIsInBsYXkiLCJwbGF5QWRkaXRpdmUiLCJlbmQiLCJwb29sIiwicHV0IiwicmVtb3ZlRnJvbVBhcmVudCIsImRlc3Ryb3kiLCJjdXJQb3MiLCJ2MiIsIm9uRGVzdHJveSIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTNCLEVBQThDOzs7QUFDOUNDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0gsYUFESjtBQUVMSSxFQUFBQSxVQUFVLEVBQUU7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TFcsRUFBQUEsTUFyRUssa0JBcUVFQyxFQXJFRixFQXFFTTtBQUNQLFFBQUksS0FBS2xELEtBQUwsSUFBYyxNQUFsQixFQUEwQjtBQUN0QjtBQUNIOztBQUNELFNBQUtDLEdBQUw7QUFDQSxTQUFLQyxRQUFMLElBQWlCLEtBQUtmLEtBQUwsR0FBYStELEVBQTlCOztBQUNBLFFBQUksS0FBS2hELFFBQUwsSUFBaUIsQ0FBckIsRUFBd0I7QUFDcEIsV0FBS29DLEdBQUw7QUFDQTtBQUNIOztBQUNELFNBQUs5QixJQUFMLENBQVVTLENBQVYsSUFBZSxLQUFLTCxNQUFMLEdBQWNzQyxFQUE3QjtBQUNBLFNBQUsxQyxJQUFMLENBQVVVLENBQVYsSUFBZSxLQUFLSCxNQUFMLEdBQWNtQyxFQUE3QjtBQUNIO0FBakZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBQb29sQ29tcG9uZW50ID0gcmVxdWlyZShcIlBvb2xDb21wb25lbnRcIik7IC8v5rGg5a2Q57uE5Lu2XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IFBvb2xDb21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc3BlZWQ6IDEwMDAsXHJcbiAgICAgICAgcmFuZ2U6IDEwMDBcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9LFxyXG4gICAgLy/lm57mlLZcclxuICAgIHVudXNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB9LFxyXG4gICAgLy/ph43nlKhcclxuICAgIHJldXNlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGdhbWUuc291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoZ2FtZS5nYW1lU291bmQucWluZ194aW5nX3FpYW5nX2ppZTEsZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuaW5pdChkYXRhKTtcclxuICAgIH0sXHJcbiAgICBpbml0KGRhdGEpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gXCJyZWFkeVwiO1xyXG4gICAgICAgIHRoaXMuaWR4ID0gMDtcclxuICAgICAgICB0aGlzLmN1clJhbmdlID0gdGhpcy5yYW5nZTtcclxuICAgICAgICBnYW1lLmVtaXQoXCJzaG9vdEZpcmVcIiwge2FuaU5hbWU6IFwiZWZmMlwiLHY6IGRhdGEudiwgYW5nbGU6IGRhdGEuYW5nbGV9KTsvL+W8gOeBq+WKqOeUu1xyXG4gICAgICAgIGlmIChkYXRhLmdyb3VwKSB0aGlzLm5vZGUuZ3JvdXAgPSBkYXRhLmdyb3VwO1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IGRhdGEuYW5nbGU7XHJcblxyXG4gICAgICAgIGxldCBoZCA9IHRoaXMubm9kZS5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLmNvcyhoZCkgKiB0aGlzLm5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5zaW4oaGQpICogdGhpcy5ub2RlLndpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLm5vZGUueCA9IGRhdGEudi54ICsgdGhpcy5zcGVlZFg7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgPSBkYXRhLnYueSArIHRoaXMuc3BlZWRZO1xyXG4gICAgICAgIHRoaXMuc3BlZWRYID0gTWF0aC5jb3MoaGQpICogdGhpcy5zcGVlZDtcclxuICAgICAgICB0aGlzLnNwZWVkWSA9IE1hdGguc2luKGhkKSAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTsvL+WKqOeUu+e7hOS7tlxyXG4gICAgICAgIGlmICghdGhpcy5faXNJbml0KSB7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGVGcmFtZXMgPSBnYW1lLmdhbWVVdGlscy5nZXRTcHJpdGVGcmFtZXMoZ2FtZS5idWxsZXRfYXRsYXMsIGRhdGEucHJlZmFiTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCByZWFkeUNsaXAgPSBjYy5BbmltYXRpb25DbGlwLmNyZWF0ZVdpdGhTcHJpdGVGcmFtZXMoc3ByaXRlRnJhbWVzLCAyMCk7XHJcbiAgICAgICAgICAgIHJlYWR5Q2xpcC5uYW1lID0gJ21vdmUnO1xyXG4gICAgICAgICAgICByZWFkeUNsaXAud3JhcE1vZGUgPSBjYy5XcmFwTW9kZS5Mb29wO1xyXG4gICAgICAgICAgICBhbmltYXRpb24uYWRkQ2xpcChyZWFkeUNsaXApO1xyXG4gICAgICAgICAgICBhbmltYXRpb24ucGxheShcIm1vdmVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzSW5pdCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbmltYXRpb24ucGxheUFkZGl0aXZlKCdtb3ZlJywgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBcIm1vdmVcIjtcclxuICAgIH0sXHJcbiAgICBlbmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gXCJlbmRcIikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBcImVuZFwiO1xyXG4gICAgICAgIHZhciBwb29sID0gdGhpcy5ub2RlLnBvb2w7XHJcbiAgICAgICAgaWYgKHBvb2wpIHtcclxuICAgICAgICAgICAgcG9vbC5wdXQodGhpcy5ub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3VyUG9zID0gY2MudjIodGhpcy5ub2RlLngsIHRoaXMubm9kZS55KTtcclxuICAgICAgICB2YXIgYW5nbGUgPSB0aGlzLm5vZGUuYW5nbGU7XHJcbiAgICAgICAgLy9nYW1lLmVtaXQoXCJzaG9vdEZpcmVcIiwgXCJmaXJlXCIsIFwiZWZmNVwiLCBjdXJQb3MsIGFuZ2xlKTsvL+W8gOeBq+WKqOeUu1xyXG4gICAgICAgIGdhbWUuZW1pdChcInNob290RmlyZVwiLCB7YW5pTmFtZTogXCJlZmY1XCIsdjogY3VyUG9zLCBhbmdsZTogYW5nbGV9KTsvL+W8gOeBq+WKqOeUu1xyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgIH0sXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9IFwibW92ZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pZHgrKztcclxuICAgICAgICB0aGlzLmN1clJhbmdlIC09IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICBpZiAodGhpcy5jdXJSYW5nZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZFggKiBkdDtcclxuICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkWSAqIGR0O1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==