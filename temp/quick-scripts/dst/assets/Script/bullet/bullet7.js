
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bullet/bullet7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7335ZUP/9NDavQNCbw8oIQ', 'bullet7');
// Script/bullet/bullet7.js

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
    game.soundManager.playEffect(game.gameSound.qing_xing_qiang_jie3, false);
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
    var angle = this.node.angle; // game.emit("shootFire", "fire", "eff2", curPos, angle);//开火动画

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxidWxsZXRcXGJ1bGxldDcuanMiXSwibmFtZXMiOlsiUG9vbENvbXBvbmVudCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsInNwZWVkIiwicmFuZ2UiLCJvbkxvYWQiLCJzdGFydCIsInVudXNlIiwicmV1c2UiLCJkYXRhIiwiZ2FtZSIsInNvdW5kTWFuYWdlciIsInBsYXlFZmZlY3QiLCJnYW1lU291bmQiLCJxaW5nX3hpbmdfcWlhbmdfamllMyIsImluaXQiLCJzdGF0ZSIsImlkeCIsImN1clJhbmdlIiwiZ3JvdXAiLCJub2RlIiwiYW5nbGUiLCJoZCIsIk1hdGgiLCJQSSIsInNwZWVkWCIsImNvcyIsIndpZHRoIiwic3BlZWRZIiwic2luIiwieCIsInYiLCJ5IiwiYW5pbWF0aW9uIiwiZ2V0Q29tcG9uZW50IiwiQW5pbWF0aW9uIiwiX2lzSW5pdCIsInNwcml0ZUZyYW1lcyIsImdhbWVVdGlscyIsImdldFNwcml0ZUZyYW1lcyIsImJ1bGxldF9hdGxhcyIsInByZWZhYk5hbWUiLCJyZWFkeUNsaXAiLCJBbmltYXRpb25DbGlwIiwiY3JlYXRlV2l0aFNwcml0ZUZyYW1lcyIsIm5hbWUiLCJ3cmFwTW9kZSIsIldyYXBNb2RlIiwiTG9vcCIsImFkZENsaXAiLCJwbGF5IiwicGxheUFkZGl0aXZlIiwiZW5kIiwicG9vbCIsInB1dCIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95IiwiY3VyUG9zIiwidjIiLCJlbWl0IiwiYW5pTmFtZSIsIm9uRGVzdHJveSIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTNCLEVBQThDOzs7QUFDOUNDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0gsYUFESjtBQUVMSSxFQUFBQSxVQUFVLEVBQUU7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QUFJLEtBQUtoRCxRQUFMLElBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLFdBQUtrQyxHQUFMO0FBQ0E7QUFDSDs7QUFDRCxTQUFLaEMsSUFBTCxDQUFVVSxDQUFWLElBQWUsS0FBS0wsTUFBTCxHQUFjeUMsRUFBN0I7QUFDQSxTQUFLOUMsSUFBTCxDQUFVWSxDQUFWLElBQWUsS0FBS0osTUFBTCxHQUFjc0MsRUFBN0I7QUFDSDtBQWxGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUG9vbENvbXBvbmVudCA9IHJlcXVpcmUoXCJQb29sQ29tcG9uZW50XCIpOyAvL+axoOWtkOe7hOS7tlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBQb29sQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICAgIHJhbmdlOiAxMDAwXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfSxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgfSxcclxuICAgIC8v5Zue5pS2XHJcbiAgICB1bnVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgfSxcclxuICAgIC8v6YeN55SoXHJcbiAgICByZXVzZTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBnYW1lLnNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KGdhbWUuZ2FtZVNvdW5kLnFpbmdfeGluZ19xaWFuZ19qaWUzLGZhbHNlKTtcclxuICAgICAgICB0aGlzLmluaXQoZGF0YSk7XHJcbiAgICB9LFxyXG4gICAgaW5pdChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwicmVhZHlcIjtcclxuICAgICAgICB0aGlzLmlkeCA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJSYW5nZSA9IHRoaXMucmFuZ2U7XHJcbiAgICAgICAgLy9nYW1lLmVtaXQoXCJzaG9vdEZpcmVcIiwgXCJmaXJlXCIsIFwiZWZmMVwiLCB2LCBhbmdsZSk7Ly/lvIDngavliqjnlLtcclxuICAgICAgICBpZiAoZGF0YS5ncm91cCkgdGhpcy5ub2RlLmdyb3VwID0gZGF0YS5ncm91cDtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSBkYXRhLmFuZ2xlO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGhkID0gdGhpcy5ub2RlLmFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICB0aGlzLnNwZWVkWCA9IE1hdGguY29zKGhkKSAqIHRoaXMubm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy5zcGVlZFkgPSBNYXRoLnNpbihoZCkgKiB0aGlzLm5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMubm9kZS54ID0gZGF0YS52LnggKyB0aGlzLnNwZWVkWDtcclxuICAgICAgICB0aGlzLm5vZGUueSA9IGRhdGEudi55ICsgdGhpcy5zcGVlZFk7XHJcbiAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLmNvcyhoZCkgKiB0aGlzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5zaW4oaGQpICogdGhpcy5zcGVlZDtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pOy8v5Yqo55S757uE5Lu2XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0luaXQpIHtcclxuICAgICAgICAgICAgbGV0IHNwcml0ZUZyYW1lcyA9IGdhbWUuZ2FtZVV0aWxzLmdldFNwcml0ZUZyYW1lcyhnYW1lLmJ1bGxldF9hdGxhcywgZGF0YS5wcmVmYWJOYW1lKTtcclxuICAgICAgICAgICAgbGV0IHJlYWR5Q2xpcCA9IGNjLkFuaW1hdGlvbkNsaXAuY3JlYXRlV2l0aFNwcml0ZUZyYW1lcyhzcHJpdGVGcmFtZXMsIDIwKTtcclxuICAgICAgICAgICAgcmVhZHlDbGlwLm5hbWUgPSAnbW92ZSc7XHJcbiAgICAgICAgICAgIHJlYWR5Q2xpcC53cmFwTW9kZSA9IGNjLldyYXBNb2RlLkxvb3A7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5hZGRDbGlwKHJlYWR5Q2xpcCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5wbGF5KFwibW92ZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5faXNJbml0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5wbGF5QWRkaXRpdmUoJ21vdmUnLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwibW92ZVwiO1xyXG4gICAgfSxcclxuICAgIGVuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSBcImVuZFwiKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwiZW5kXCI7XHJcbiAgICAgICAgdmFyIHBvb2wgPSB0aGlzLm5vZGUucG9vbDtcclxuICAgICAgICBpZiAocG9vbCkge1xyXG4gICAgICAgICAgICBwb29sLnB1dCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdXJQb3MgPSBjYy52Mih0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xyXG4gICAgICAgIHZhciBhbmdsZSA9IHRoaXMubm9kZS5hbmdsZTtcclxuICAgICAgIC8vIGdhbWUuZW1pdChcInNob290RmlyZVwiLCBcImZpcmVcIiwgXCJlZmYyXCIsIGN1clBvcywgYW5nbGUpOy8v5byA54Gr5Yqo55S7XHJcbiAgICAgICAgZ2FtZS5lbWl0KFwic2hvb3RGaXJlXCIsIHthbmlOYW1lOiBcImVmZjJcIix2OiBjdXJQb3MsIGFuZ2xlOiBhbmdsZX0pOy8v5byA54Gr5Yqo55S7XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT0gXCJtb3ZlXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlkeCsrO1xyXG4gICAgICAgIHRoaXMuY3VyUmFuZ2UgLT0gdGhpcy5zcGVlZCAqIGR0O1xyXG4gICAgICAgIGlmICh0aGlzLmN1clJhbmdlIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkWCAqIGR0O1xyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWRZICogZHQ7XHJcbiAgICB9LFxyXG59KTtcclxuIl19