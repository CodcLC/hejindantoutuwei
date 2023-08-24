
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bullet/bullet8.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a40d17AxzNGcIQgjoKLEzi+', 'bullet8');
// Script/bullet/bullet8.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": PoolComponent,
  properties: {
    speed: 500,
    fire: cc.Animation,
    addSpeedY: 100,
    range: 2000
  },
  onLoad: function onLoad() {
    this._lastPos = cc.v2(0, 0);
    this._curPos = cc.v2(0, 0);
  },
  //回收
  unuse: function unuse() {},
  //重用
  reuse: function reuse(data) {
    game.soundManager.playEffect(game.gameSound.qing_xing_qiang_jie4, false);
    this.data = data;
    this.init(data);
  },
  init: function init(data) {
    this.idx = 0;
    if (data.group) this.node.group = data.group;
    this.node.angle = data.angle;
    var hd = this.node.angle * Math.PI / 180;
    this.speedX = Math.cos(hd) * this.node.width / 2;
    this.speedY = Math.sin(hd) * this.node.width / 2;
    this.node.x = data.v.x + this.speedX;
    this.node.y = data.v.y + this.speedY;
    this.speedX = Math.cos(hd) * this.speed;
    this.speedY = Math.sin(hd) * this.speed;
    this.curRange = this.range; //火焰动画

    if (!this._isinit) {
      var spriteFrames = game.gameUtils.getSpriteFrames(game.bullet_atlas, "fire1");
      var fireClip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 30);
      fireClip.name = 'fire';
      fireClip.wrapMode = cc.WrapMode.Loop;
      this.fire.addClip(fireClip);
      this.fire.play('fire');
    }

    this.state = "move";
    this.node.active = true;
  },
  start: function start() {},
  onDestroy: function onDestroy() {},
  //碰撞检测到
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.end();
  },
  end: function end() {
    if (this.state == "end") return;
    this.state = "end";
    this.data = _.assign(this.data, {
      aniName: "bomb1",
      //预制体名称
      v: cc.v2(this.node.x, this.node.y),
      //位置
      angle: 0,
      //角度
      group: this.node.group //组

    });
    game.emit("bomb2", this.data); //爆炸

    var pool = this.node.pool;

    if (pool) {
      pool.put(this.node);
    } else {
      this.node.removeFromParent(true);
      this.node.destroy();
    }
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
    } // this._lastPos.x = this.node.x;
    // this._lastPos.y = this.node.y;
    // // this.speedY -= 9.8;


    this.node.x += this.speedX * dt;
    this.node.y += this.speedY * dt; // let pos = cc.v2(this.node.x, this.node.y);
    // let rotation = game.gameUtils.getRotation(curPos, pos);
    // this.node.angle = rotation;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxidWxsZXRcXGJ1bGxldDguanMiXSwibmFtZXMiOlsiUG9vbENvbXBvbmVudCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsInNwZWVkIiwiZmlyZSIsIkFuaW1hdGlvbiIsImFkZFNwZWVkWSIsInJhbmdlIiwib25Mb2FkIiwiX2xhc3RQb3MiLCJ2MiIsIl9jdXJQb3MiLCJ1bnVzZSIsInJldXNlIiwiZGF0YSIsImdhbWUiLCJzb3VuZE1hbmFnZXIiLCJwbGF5RWZmZWN0IiwiZ2FtZVNvdW5kIiwicWluZ194aW5nX3FpYW5nX2ppZTQiLCJpbml0IiwiaWR4IiwiZ3JvdXAiLCJub2RlIiwiYW5nbGUiLCJoZCIsIk1hdGgiLCJQSSIsInNwZWVkWCIsImNvcyIsIndpZHRoIiwic3BlZWRZIiwic2luIiwieCIsInYiLCJ5IiwiY3VyUmFuZ2UiLCJfaXNpbml0Iiwic3ByaXRlRnJhbWVzIiwiZ2FtZVV0aWxzIiwiZ2V0U3ByaXRlRnJhbWVzIiwiYnVsbGV0X2F0bGFzIiwiZmlyZUNsaXAiLCJBbmltYXRpb25DbGlwIiwiY3JlYXRlV2l0aFNwcml0ZUZyYW1lcyIsIm5hbWUiLCJ3cmFwTW9kZSIsIldyYXBNb2RlIiwiTG9vcCIsImFkZENsaXAiLCJwbGF5Iiwic3RhdGUiLCJhY3RpdmUiLCJzdGFydCIsIm9uRGVzdHJveSIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJlbmQiLCJfIiwiYXNzaWduIiwiYW5pTmFtZSIsImVtaXQiLCJwb29sIiwicHV0IiwicmVtb3ZlRnJvbVBhcmVudCIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTNCLEVBQThDOzs7QUFDOUNDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0gsYUFESjtBQUVMSSxFQUFBQSxVQUFVLEVBQUU7QUFD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QUFLakIsS0FBTCxJQUFjLE1BQWxCLEVBQTBCO0FBQ3RCO0FBQ0g7O0FBQ0QsU0FBSzlCLEdBQUw7QUFDQSxTQUFLZSxRQUFMLElBQWlCLEtBQUtqQyxLQUFMLEdBQWFpRSxFQUE5Qjs7QUFDQSxRQUFJLEtBQUtoQyxRQUFMLElBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLFdBQUtzQixHQUFMO0FBQ0E7QUFDSCxLQVRNLENBVVA7QUFDQTtBQUNBOzs7QUFDQSxTQUFLbkMsSUFBTCxDQUFVVSxDQUFWLElBQWUsS0FBS0wsTUFBTCxHQUFjd0MsRUFBN0I7QUFDQSxTQUFLN0MsSUFBTCxDQUFVWSxDQUFWLElBQWUsS0FBS0osTUFBTCxHQUFjcUMsRUFBN0IsQ0FkTyxDQWVQO0FBQ0E7QUFDQTtBQUNIO0FBN0ZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBQb29sQ29tcG9uZW50ID0gcmVxdWlyZShcIlBvb2xDb21wb25lbnRcIik7IC8v5rGg5a2Q57uE5Lu2XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IFBvb2xDb21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBmaXJlOiBjYy5BbmltYXRpb24sXHJcbiAgICAgICAgYWRkU3BlZWRZOiAxMDAsXHJcbiAgICAgICAgcmFuZ2U6IDIwMDAsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX2xhc3RQb3MgPSBjYy52MigwLCAwKTtcclxuICAgICAgICB0aGlzLl9jdXJQb3MgPSBjYy52MigwLCAwKTtcclxuICAgIH0sXHJcbiAgICAvL+WbnuaUtlxyXG4gICAgdW51c2U6IGZ1bmN0aW9uICgpIHtcclxuICAgIH0sXHJcbiAgICAvL+mHjeeUqFxyXG4gICAgcmV1c2U6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgZ2FtZS5zb3VuZE1hbmFnZXIucGxheUVmZmVjdChnYW1lLmdhbWVTb3VuZC5xaW5nX3hpbmdfcWlhbmdfamllNCxmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhPWRhdGE7XHJcbiAgICAgICAgdGhpcy5pbml0KGRhdGEpO1xyXG4gICAgfSxcclxuICAgIGluaXQoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuaWR4ID0gMDtcclxuICAgICAgICBpZiAoZGF0YS5ncm91cCkgdGhpcy5ub2RlLmdyb3VwID0gZGF0YS5ncm91cDtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSBkYXRhLmFuZ2xlO1xyXG4gICAgICAgIGxldCBoZCA9IHRoaXMubm9kZS5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLmNvcyhoZCkgKiB0aGlzLm5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5zaW4oaGQpICogdGhpcy5ub2RlLndpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLm5vZGUueCA9IGRhdGEudi54ICsgdGhpcy5zcGVlZFg7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgPSBkYXRhLnYueSArIHRoaXMuc3BlZWRZO1xyXG4gICAgICAgIHRoaXMuc3BlZWRYID0gTWF0aC5jb3MoaGQpICogdGhpcy5zcGVlZDtcclxuICAgICAgICB0aGlzLnNwZWVkWSA9IE1hdGguc2luKGhkKSAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5jdXJSYW5nZSA9IHRoaXMucmFuZ2U7XHJcbiAgICAgICAgLy/ngavnhLDliqjnlLtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzaW5pdCkge1xyXG4gICAgICAgICAgICBsZXQgc3ByaXRlRnJhbWVzID0gZ2FtZS5nYW1lVXRpbHMuZ2V0U3ByaXRlRnJhbWVzKGdhbWUuYnVsbGV0X2F0bGFzLCBcImZpcmUxXCIpO1xyXG4gICAgICAgICAgICBsZXQgZmlyZUNsaXAgPSBjYy5BbmltYXRpb25DbGlwLmNyZWF0ZVdpdGhTcHJpdGVGcmFtZXMoc3ByaXRlRnJhbWVzLCAzMCk7XHJcbiAgICAgICAgICAgIGZpcmVDbGlwLm5hbWUgPSAnZmlyZSc7XHJcbiAgICAgICAgICAgIGZpcmVDbGlwLndyYXBNb2RlID0gY2MuV3JhcE1vZGUuTG9vcDtcclxuICAgICAgICAgICAgdGhpcy5maXJlLmFkZENsaXAoZmlyZUNsaXApO1xyXG4gICAgICAgICAgICB0aGlzLmZpcmUucGxheSgnZmlyZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlID0gXCJtb3ZlXCI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIC8v56Kw5pKe5qOA5rWL5YiwXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgfSxcclxuICAgIGVuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSBcImVuZFwiKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwiZW5kXCI7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YSA9IF8uYXNzaWduKHRoaXMuZGF0YSwge1xyXG4gICAgICAgICAgICBhbmlOYW1lOiBcImJvbWIxXCIsLy/pooTliLbkvZPlkI3np7BcclxuICAgICAgICAgICAgdjogY2MudjIodGhpcy5ub2RlLngsIHRoaXMubm9kZS55KSwgLy/kvY3nva5cclxuICAgICAgICAgICAgYW5nbGU6IDAsLy/op5LluqZcclxuICAgICAgICAgICAgZ3JvdXA6IHRoaXMubm9kZS5ncm91cCAvL+e7hFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdhbWUuZW1pdChcImJvbWIyXCIsIHRoaXMuZGF0YSk7Ly/niIbngrhcclxuXHJcblxyXG4gICAgICAgIGxldCBwb29sID0gdGhpcy5ub2RlLnBvb2w7XHJcbiAgICAgICAgaWYgKHBvb2wpIHtcclxuICAgICAgICAgICAgcG9vbC5wdXQodGhpcy5ub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPSBcIm1vdmVcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaWR4Kys7XHJcbiAgICAgICAgdGhpcy5jdXJSYW5nZSAtPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyUmFuZ2UgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuX2xhc3RQb3MueCA9IHRoaXMubm9kZS54O1xyXG4gICAgICAgIC8vIHRoaXMuX2xhc3RQb3MueSA9IHRoaXMubm9kZS55O1xyXG4gICAgICAgIC8vIC8vIHRoaXMuc3BlZWRZIC09IDkuODtcclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkWCAqIGR0O1xyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWRZICogZHQ7XHJcbiAgICAgICAgLy8gbGV0IHBvcyA9IGNjLnYyKHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSk7XHJcbiAgICAgICAgLy8gbGV0IHJvdGF0aW9uID0gZ2FtZS5nYW1lVXRpbHMuZ2V0Um90YXRpb24oY3VyUG9zLCBwb3MpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hbmdsZSA9IHJvdGF0aW9uO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==