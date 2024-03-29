"use strict";
cc._RF.push(module, 'd3611yaI9lNuapmc728jxg/', 'fire');
// Script/fire/fire.js

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
    this.init(data);
  },
  //开火动画
  init: function init(data) {
    if (!this._isinit) {
      this._isinit = true;
      this.aniNames = [];
    }

    this.node.angle = data.angle;
    var hd = this.node.angle * Math.PI / 180;
    this.speedX = Math.cos(hd) * this.node.width / 2;
    this.speedY = Math.sin(hd) * this.node.width / 2;
    this.node.x = data.v.x + this.speedX;
    this.node.y = data.v.y + this.speedY;
    var animation = this.node.getComponent(cc.Animation); //动画组件

    if (this.aniNames.indexOf(data.aniName) < 0) {
      var spriteFrames = game.gameUtils.getSpriteFrames(game.bullet_atlas, data.aniName);
      var clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 40);
      this.aniNames.push(data.aniName);
      clip.name = data.aniName;
      clip.wrapMode = cc.WrapMode.Normal;
      animation.addClip(clip);
    }

    animation.playAdditive(data.aniName, 0);
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
  onDestroy: function onDestroy() {}
});

cc._RF.pop();