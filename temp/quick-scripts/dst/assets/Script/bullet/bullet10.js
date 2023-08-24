
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bullet/bullet10.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92255K1Bt1EpJNQGgCB1c66', 'bullet10');
// Script/bullet/bullet10.js

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
  onLoad: function onLoad() {},
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
    game.emit("bomb3", this.data); //爆炸

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
    } // let hd = this.node.angle * Math.PI / 180;
    // this.speedX = Math.cos(hd) * this.speed;
    // this.speedY = Math.sin(hd) * this.speed;
    //


    this.idx++;
    this.curRange -= this.speed * dt;

    if (this.curRange <= 0) {
      this.end();
      return;
    } // let curPos = cc.v2(this.node.x, this.node.y);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxidWxsZXRcXGJ1bGxldDEwLmpzIl0sIm5hbWVzIjpbIlBvb2xDb21wb25lbnQiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJzcGVlZCIsImZpcmUiLCJBbmltYXRpb24iLCJhZGRTcGVlZFkiLCJyYW5nZSIsIm9uTG9hZCIsInVudXNlIiwicmV1c2UiLCJkYXRhIiwiZ2FtZSIsInNvdW5kTWFuYWdlciIsInBsYXlFZmZlY3QiLCJnYW1lU291bmQiLCJxaW5nX3hpbmdfcWlhbmdfamllNCIsImluaXQiLCJpZHgiLCJncm91cCIsIm5vZGUiLCJhbmdsZSIsImhkIiwiTWF0aCIsIlBJIiwic3BlZWRYIiwiY29zIiwid2lkdGgiLCJzcGVlZFkiLCJzaW4iLCJ4IiwidiIsInkiLCJjdXJSYW5nZSIsIl9pc2luaXQiLCJzcHJpdGVGcmFtZXMiLCJnYW1lVXRpbHMiLCJnZXRTcHJpdGVGcmFtZXMiLCJidWxsZXRfYXRsYXMiLCJmaXJlQ2xpcCIsIkFuaW1hdGlvbkNsaXAiLCJjcmVhdGVXaXRoU3ByaXRlRnJhbWVzIiwibmFtZSIsIndyYXBNb2RlIiwiV3JhcE1vZGUiLCJMb29wIiwiYWRkQ2xpcCIsInBsYXkiLCJzdGF0ZSIsImFjdGl2ZSIsInN0YXJ0Iiwib25EZXN0cm95Iiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsImVuZCIsIl8iLCJhc3NpZ24iLCJhbmlOYW1lIiwidjIiLCJlbWl0IiwicG9vbCIsInB1dCIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95IiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUEzQixFQUE4Qzs7O0FBQzlDQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNILGFBREo7QUFFTEksRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRSxH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QyxRQUFMLElBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLFdBQUtzQixHQUFMO0FBQ0E7QUFDSCxLQWJNLENBY1A7QUFDQTs7O0FBQ0EsU0FBS25DLElBQUwsQ0FBVVUsQ0FBVixJQUFlLEtBQUtMLE1BQUwsR0FBY3lDLEVBQTdCO0FBQ0EsU0FBSzlDLElBQUwsQ0FBVVksQ0FBVixJQUFlLEtBQUtKLE1BQUwsR0FBY3NDLEVBQTdCLENBakJPLENBa0JQO0FBQ0E7QUFDQTtBQUNIO0FBM0ZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBQb29sQ29tcG9uZW50ID0gcmVxdWlyZShcIlBvb2xDb21wb25lbnRcIik7IC8v5rGg5a2Q57uE5Lu2XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IFBvb2xDb21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBmaXJlOiBjYy5BbmltYXRpb24sXHJcbiAgICAgICAgYWRkU3BlZWRZOiAxMDAsXHJcbiAgICAgICAgcmFuZ2U6IDIwMDAsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfSxcclxuICAgIC8v5Zue5pS2XHJcbiAgICB1bnVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgfSxcclxuICAgIC8v6YeN55SoXHJcbiAgICByZXVzZTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBnYW1lLnNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KGdhbWUuZ2FtZVNvdW5kLnFpbmdfeGluZ19xaWFuZ19qaWU0LCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLmluaXQoZGF0YSk7XHJcbiAgICB9LFxyXG4gICAgaW5pdChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5pZHggPSAwO1xyXG4gICAgICAgIGlmIChkYXRhLmdyb3VwKSB0aGlzLm5vZGUuZ3JvdXAgPSBkYXRhLmdyb3VwO1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IGRhdGEuYW5nbGU7XHJcbiAgICAgICAgbGV0IGhkID0gdGhpcy5ub2RlLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICB0aGlzLnNwZWVkWCA9IE1hdGguY29zKGhkKSAqIHRoaXMubm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy5zcGVlZFkgPSBNYXRoLnNpbihoZCkgKiB0aGlzLm5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMubm9kZS54ID0gZGF0YS52LnggKyB0aGlzLnNwZWVkWDtcclxuICAgICAgICB0aGlzLm5vZGUueSA9IGRhdGEudi55ICsgdGhpcy5zcGVlZFk7XHJcbiAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLmNvcyhoZCkgKiB0aGlzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5zaW4oaGQpICogdGhpcy5zcGVlZDtcclxuICAgICAgICB0aGlzLmN1clJhbmdlID0gdGhpcy5yYW5nZTtcclxuICAgICAgICAvL+eBq+eEsOWKqOeUu1xyXG4gICAgICAgIGlmICghdGhpcy5faXNpbml0KSB7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGVGcmFtZXMgPSBnYW1lLmdhbWVVdGlscy5nZXRTcHJpdGVGcmFtZXMoZ2FtZS5idWxsZXRfYXRsYXMsIFwiZmlyZTFcIik7XHJcbiAgICAgICAgICAgIGxldCBmaXJlQ2xpcCA9IGNjLkFuaW1hdGlvbkNsaXAuY3JlYXRlV2l0aFNwcml0ZUZyYW1lcyhzcHJpdGVGcmFtZXMsIDMwKTtcclxuICAgICAgICAgICAgZmlyZUNsaXAubmFtZSA9ICdmaXJlJztcclxuICAgICAgICAgICAgZmlyZUNsaXAud3JhcE1vZGUgPSBjYy5XcmFwTW9kZS5Mb29wO1xyXG4gICAgICAgICAgICB0aGlzLmZpcmUuYWRkQ2xpcChmaXJlQ2xpcCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZS5wbGF5KCdmaXJlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBcIm1vdmVcIjtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICB9LFxyXG4gICAgLy/norDmkp7mo4DmtYvliLBcclxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICB9LFxyXG4gICAgZW5kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09IFwiZW5kXCIpIHJldHVybjtcclxuICAgICAgICB0aGlzLnN0YXRlID0gXCJlbmRcIjtcclxuICAgICAgICB0aGlzLmRhdGEgPSBfLmFzc2lnbih0aGlzLmRhdGEsIHtcclxuICAgICAgICAgICAgYW5pTmFtZTogXCJib21iMVwiLC8v6aKE5Yi25L2T5ZCN56ewXHJcbiAgICAgICAgICAgIHY6IGNjLnYyKHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSksIC8v5L2N572uXHJcbiAgICAgICAgICAgIGFuZ2xlOiAwLC8v6KeS5bqmXHJcbiAgICAgICAgICAgIGdyb3VwOiB0aGlzLm5vZGUuZ3JvdXAgLy/nu4RcclxuICAgICAgICB9KTtcclxuICAgICAgICBnYW1lLmVtaXQoXCJib21iM1wiLCB0aGlzLmRhdGEpOy8v54iG54K4XHJcbiAgICAgICAgbGV0IHBvb2wgPSB0aGlzLm5vZGUucG9vbDtcclxuICAgICAgICBpZiAocG9vbCkge1xyXG4gICAgICAgICAgICBwb29sLnB1dCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9IFwibW92ZVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IGhkID0gdGhpcy5ub2RlLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICAvLyB0aGlzLnNwZWVkWCA9IE1hdGguY29zKGhkKSAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgLy8gdGhpcy5zcGVlZFkgPSBNYXRoLnNpbihoZCkgKiB0aGlzLnNwZWVkO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5pZHgrKztcclxuICAgICAgICB0aGlzLmN1clJhbmdlIC09IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgICAgICBpZiAodGhpcy5jdXJSYW5nZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IGN1clBvcyA9IGNjLnYyKHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSk7XHJcbiAgICAgICAgLy8gLy8gdGhpcy5zcGVlZFkgLT0gOS44O1xyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWRYICogZHQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy5zcGVlZFkgKiBkdDtcclxuICAgICAgICAvLyBsZXQgcG9zID0gY2MudjIodGhpcy5ub2RlLngsIHRoaXMubm9kZS55KTtcclxuICAgICAgICAvLyBsZXQgcm90YXRpb24gPSBnYW1lLmdhbWVVdGlscy5nZXRSb3RhdGlvbihjdXJQb3MsIHBvcyk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFuZ2xlID0gcm90YXRpb247XHJcbiAgICB9LFxyXG59KTtcclxuIl19