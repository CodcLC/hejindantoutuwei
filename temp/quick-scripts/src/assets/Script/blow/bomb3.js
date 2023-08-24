"use strict";
cc._RF.push(module, 'db6b74DbmZBSIRNOxkQmNf2', 'bomb3');
// Script/blow/bomb3.js

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
    game.soundManager.playEffect(game.gameSound.dao_dan_bao_zha, false);
    this.init(data);
  },
  init: function init(data) {
    if (data.group) this.node.group = data.group;
    this.node.angle = data.angle;
    this.node.x = data.v.x;
    this.node.y = data.v.y; //结束动画

    var animation = this.node.getComponent(cc.Animation); //动画组件

    if (!this._isinit) {
      var spriteFrames = game.gameUtils.getSpriteFrames(game.bomb_atlas, data.aniName);
      var flashClip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 20);
      flashClip.name = 'end';
      flashClip.wrapMode = cc.WrapMode.Normal;
      animation.addClip(flashClip);
      animation.play('end');
    } else {
      animation.playAdditive('end', 0);
    }

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