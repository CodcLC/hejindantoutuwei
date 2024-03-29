"use strict";
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