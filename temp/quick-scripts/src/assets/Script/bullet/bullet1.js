"use strict";
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