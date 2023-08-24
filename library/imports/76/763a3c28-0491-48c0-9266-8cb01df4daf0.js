"use strict";
cc._RF.push(module, '763a3woBJFIwJJmjLAd9Nrw', 'enemyHp');
// Script/enemy/enemyHp.js

"use strict";

var HpComponent = require("hpComponent"); //池子组件


cc.Class({
  "extends": HpComponent,
  properties: {
    progressBar: cc.ProgressBar
  },
  //受到的伤害
  onHurt: function onHurt(value) {
    this.curHp -= value;
    this.isShow = true;
    this.progressBar.node.opacity = 255;
    this.showTime = 0;
    this.updateBar();

    if (this.curHp <= 0) {
      this.node.emit("death");
      this.parent.emit("death");
    }
  },
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {
    this.y = this.progressBar.node.y;
  },
  unuse: function unuse() {},
  reuse: function reuse(data) {
    this.totalHp = this.curHp = data.hp; //数据配置

    this.updateBar();
    this.showTime = 0;
    this.isShow = false;
    this.progressBar.node.opacity = 0;
    this.progressBar.node.y = this.y + data.zy;
  },
  updateBar: function updateBar() {
    var progress = (this.curHp / this.totalHp).format();
    this.progressBar.progress = progress;
  },
  //碰撞检测到
  onCollisionEnter: function onCollisionEnter(other, self) {
    var hurt = other.node.getComponent("hurt");
    if (!hurt || hurt.hurtValue == 0) return;
    this.curHp -= hurt.hurtValue;
    hurt.end();
    this.isShow = true;
    this.progressBar.node.opacity = 255;
    this.showTime = 0;
    this.updateBar();

    if (this.curHp <= 0) {
      this.node.emit("death");
    }
  },
  onCollisionStay: function onCollisionStay(other, self) {},
  //碰撞退出
  onCollisionExit: function onCollisionExit(other, self) {// cc.log("碰撞退出")
  },
  update: function update(dt) {
    this.showTime += dt;

    if (this.isShow && this.showTime > 2) {
      this.isShow = false;
      this.progressBar.node.opacity = 0;
    }
  }
});

cc._RF.pop();