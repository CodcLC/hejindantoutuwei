"use strict";
cc._RF.push(module, '21c8dFsJ8FAxpIyuysBCphu', 'enemyMelee');
// Script/enemy/enemyMelee.js

"use strict";

var PoolComponent = require("PoolComponent");

cc.Class({
  "extends": PoolComponent,
  properties: {
    parent: cc.Node
  },
  unuse: function unuse() {
    this.shooting = false;
    this.parent.off("shoot_start", this.shoot_start, this);
    this.parent.off("shoot_end", this.shoot_end, this);
  },
  reuse: function reuse(data) {
    this.data = data;
    if (!this.parent) this.parent = this.node.parent;
    this.parent.on("shoot_start", this.shoot_start, this);
    this.parent.on("shoot_end", this.shoot_end, this);
    this.shooting = false;
  },
  //碰撞进入
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (this.parent.isDeath) return;
    if (game.isOver) return;

    if (this.shooting) {
      this.shoot(other);
    }
  },
  //碰撞停留
  onCollisionStay: function onCollisionStay(other, self) {
    if (this.shooting) {
      this.shoot(other);
    }
  },
  //碰撞退出
  onCollisionExit: function onCollisionExit(other, self) {},
  //开始射击
  shoot_start: function shoot_start() {
    this.shooting = true;
  },
  //射击动作结束
  shoot_end: function shoot_end() {
    this.shooting = false;
  },
  //该方法为生命周期方法，父类未必会有实现。
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {},
  shoot: function shoot(other) {
    this.shooting = false;
    var hps = other.node.getComponentsInChildren("hpComponent");

    if (hps && hps.length) {
      var hp = hps[0];
      hp.onHurt(this.data.attack);
    }
  }
});

cc._RF.pop();