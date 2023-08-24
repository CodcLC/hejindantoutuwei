
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bullet/bullet6.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96c5bwgt5FGFb7fDB4d92/w', 'bullet6');
// Script/bullet/bullet6.js

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
    game.soundManager.playEffect(game.gameSound.gong_fu_bo_dong_quan, false);
    this.init(data);
  },
  init: function init(data) {
    this.state = "ready";
    this.idx = 0;
    this.curRange = this.range; //game.emit("shootFire", "fire", "eff1", v, angle);//开火动画

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
    var angle = this.node.angle; //
    // this.data = _.assign(this.data, {
    //     aniName: "bomb1",//预制体名称
    //     v: cc.v2(this.node.x, this.node.y), //位置
    //     angle: 0,//角度
    //     group: this.node.group //组
    // });
    // game.emit("bomb1", this.data);//爆炸
    //game.emit("shootFire", "fire", "eff2", curPos, angle);//开火动画

    game.emit("shootFire", {
      aniName: "eff2",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxidWxsZXRcXGJ1bGxldDYuanMiXSwibmFtZXMiOlsiUG9vbENvbXBvbmVudCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsInNwZWVkIiwicmFuZ2UiLCJvbkxvYWQiLCJzdGFydCIsInVudXNlIiwicmV1c2UiLCJkYXRhIiwiZ2FtZSIsInNvdW5kTWFuYWdlciIsInBsYXlFZmZlY3QiLCJnYW1lU291bmQiLCJnb25nX2Z1X2JvX2RvbmdfcXVhbiIsImluaXQiLCJzdGF0ZSIsImlkeCIsImN1clJhbmdlIiwiZ3JvdXAiLCJub2RlIiwiYW5nbGUiLCJoZCIsIk1hdGgiLCJQSSIsInNwZWVkWCIsImNvcyIsIndpZHRoIiwic3BlZWRZIiwic2luIiwieCIsInYiLCJ5IiwiYW5pbWF0aW9uIiwiZ2V0Q29tcG9uZW50IiwiQW5pbWF0aW9uIiwiX2lzSW5pdCIsInNwcml0ZUZyYW1lcyIsImdhbWVVdGlscyIsImdldFNwcml0ZUZyYW1lcyIsImJ1bGxldF9hdGxhcyIsInByZWZhYk5hbWUiLCJyZWFkeUNsaXAiLCJBbmltYXRpb25DbGlwIiwiY3JlYXRlV2l0aFNwcml0ZUZyYW1lcyIsIm5hbWUiLCJ3cmFwTW9kZSIsIldyYXBNb2RlIiwiTG9vcCIsImFkZENsaXAiLCJwbGF5IiwicGxheUFkZGl0aXZlIiwiZW5kIiwicG9vbCIsInB1dCIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95IiwiY3VyUG9zIiwidjIiLCJlbWl0IiwiYW5pTmFtZSIsIm9uRGVzdHJveSIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTNCLEVBQThDOzs7QUFDOUNDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0gsYUFESjtBQUVMSSxFQUFBQSxVQUFVLEVBQUU7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QUwsSUFBaUIsS0FBS2YsS0FBTCxHQUFhK0QsRUFBOUI7O0FBQ0EsUUFBSSxLQUFLaEQsUUFBTCxJQUFpQixDQUFyQixFQUF3QjtBQUNwQixXQUFLa0MsR0FBTDtBQUNBO0FBQ0g7O0FBQ0QsU0FBS2hDLElBQUwsQ0FBVVUsQ0FBVixJQUFlLEtBQUtMLE1BQUwsR0FBY3lDLEVBQTdCO0FBQ0EsU0FBSzlDLElBQUwsQ0FBVVksQ0FBVixJQUFlLEtBQUtKLE1BQUwsR0FBY3NDLEVBQTdCO0FBQ0g7QUFoR0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFBvb2xDb21wb25lbnQgPSByZXF1aXJlKFwiUG9vbENvbXBvbmVudFwiKTsgLy/msaDlrZDnu4Tku7ZcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogUG9vbENvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzcGVlZDogMTAwMCxcclxuICAgICAgICByYW5nZTogMTAwMFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcblxyXG4gICAgLy/lm57mlLZcclxuICAgIHVudXNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB9LFxyXG4gICAgLy/ph43nlKhcclxuICAgIHJldXNlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGdhbWUuc291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoZ2FtZS5nYW1lU291bmQuZ29uZ19mdV9ib19kb25nX3F1YW4sZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuaW5pdChkYXRhKTtcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdChkYXRhKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBcInJlYWR5XCI7XHJcbiAgICAgICAgdGhpcy5pZHggPSAwO1xyXG4gICAgICAgIHRoaXMuY3VyUmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG4gICAgICAgIC8vZ2FtZS5lbWl0KFwic2hvb3RGaXJlXCIsIFwiZmlyZVwiLCBcImVmZjFcIiwgdiwgYW5nbGUpOy8v5byA54Gr5Yqo55S7XHJcbiAgICAgICAgaWYgKGRhdGEuZ3JvdXApIHRoaXMubm9kZS5ncm91cCA9IGRhdGEuZ3JvdXA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gZGF0YS5hbmdsZTtcclxuICAgICAgICBsZXQgaGQgPSB0aGlzLm5vZGUuYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIHRoaXMuc3BlZWRYID0gTWF0aC5jb3MoaGQpICogdGhpcy5ub2RlLndpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLnNwZWVkWSA9IE1hdGguc2luKGhkKSAqIHRoaXMubm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggPSBkYXRhLnYueCArIHRoaXMuc3BlZWRYO1xyXG4gICAgICAgIHRoaXMubm9kZS55ID0gZGF0YS52LnkgKyB0aGlzLnNwZWVkWTtcclxuICAgICAgICB0aGlzLnNwZWVkWCA9IE1hdGguY29zKGhkKSAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5zcGVlZFkgPSBNYXRoLnNpbihoZCkgKiB0aGlzLnNwZWVkO1xyXG4gICAgICAgIGxldCBhbmltYXRpb24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7Ly/liqjnlLvnu4Tku7ZcclxuICAgICAgICBpZiAoIXRoaXMuX2lzSW5pdCkge1xyXG4gICAgICAgICAgICBsZXQgc3ByaXRlRnJhbWVzID0gZ2FtZS5nYW1lVXRpbHMuZ2V0U3ByaXRlRnJhbWVzKGdhbWUuYnVsbGV0X2F0bGFzLCBkYXRhLnByZWZhYk5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgcmVhZHlDbGlwID0gY2MuQW5pbWF0aW9uQ2xpcC5jcmVhdGVXaXRoU3ByaXRlRnJhbWVzKHNwcml0ZUZyYW1lcywgMjApO1xyXG4gICAgICAgICAgICByZWFkeUNsaXAubmFtZSA9ICdtb3ZlJztcclxuICAgICAgICAgICAgcmVhZHlDbGlwLndyYXBNb2RlID0gY2MuV3JhcE1vZGUuTG9vcDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLmFkZENsaXAocmVhZHlDbGlwKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLnBsYXkoXCJtb3ZlXCIpO1xyXG4gICAgICAgICAgICB0aGlzLl9pc0luaXQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLnBsYXlBZGRpdGl2ZSgnbW92ZScsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlID0gXCJtb3ZlXCI7XHJcbiAgICB9LFxyXG4gICAgZW5kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09IFwiZW5kXCIpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXRlID0gXCJlbmRcIjtcclxuICAgICAgICB2YXIgcG9vbCA9IHRoaXMubm9kZS5wb29sO1xyXG4gICAgICAgIGlmIChwb29sKSB7XHJcbiAgICAgICAgICAgIHBvb2wucHV0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN1clBvcyA9IGNjLnYyKHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSk7XHJcbiAgICAgICAgdmFyIGFuZ2xlID0gdGhpcy5ub2RlLmFuZ2xlO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHRoaXMuZGF0YSA9IF8uYXNzaWduKHRoaXMuZGF0YSwge1xyXG4gICAgICAgIC8vICAgICBhbmlOYW1lOiBcImJvbWIxXCIsLy/pooTliLbkvZPlkI3np7BcclxuICAgICAgICAvLyAgICAgdjogY2MudjIodGhpcy5ub2RlLngsIHRoaXMubm9kZS55KSwgLy/kvY3nva5cclxuICAgICAgICAvLyAgICAgYW5nbGU6IDAsLy/op5LluqZcclxuICAgICAgICAvLyAgICAgZ3JvdXA6IHRoaXMubm9kZS5ncm91cCAvL+e7hFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIGdhbWUuZW1pdChcImJvbWIxXCIsIHRoaXMuZGF0YSk7Ly/niIbngrhcclxuXHJcblxyXG4gICAgICAgIC8vZ2FtZS5lbWl0KFwic2hvb3RGaXJlXCIsIFwiZmlyZVwiLCBcImVmZjJcIiwgY3VyUG9zLCBhbmdsZSk7Ly/lvIDngavliqjnlLtcclxuICAgICAgICBnYW1lLmVtaXQoXCJzaG9vdEZpcmVcIiwge2FuaU5hbWU6IFwiZWZmMlwiLHY6IGN1clBvcywgYW5nbGU6IGFuZ2xlfSk7Ly/lvIDngavliqjnlLtcclxuXHJcblxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgIH0sXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9IFwibW92ZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pZHgrKztcclxuICAgICAgICB0aGlzLmN1clJhbmdlIC09IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICBpZiAodGhpcy5jdXJSYW5nZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZFggKiBkdDtcclxuICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnNwZWVkWSAqIGR0O1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==