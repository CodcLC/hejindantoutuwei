"use strict";
cc._RF.push(module, '8d998z5n41AVYtBN8l0zRCj', 'enemyFind');
// Script/enemy/enemyFind.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": PoolComponent,
  properties: {},
  onEnable: function onEnable() {},
  //当该组件被禁用或节点变为无效时调用。
  onDisable: function onDisable() {},
  //该方法为生命周期方法，父类未必会有实现。
  onDestroy: function onDestroy() {},
  unuse: function unuse() {},
  reuse: function reuse(data) {
    this.node.x = this.x - Math.random() * data.findX;
  },
  onLoad: function onLoad() {
    this.parent = this.node.parent.parent;
    this.x = this.node.x;
  },
  //碰撞进入
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (game.isOver) return;
    this.parent.emit("onCollisionEnter", other, self);
  },
  //碰撞停留
  onCollisionStay: function onCollisionStay(other, self) {},
  //碰撞退出
  onCollisionExit: function onCollisionExit(other, self) {
    if (game.isOver) return;
    this.parent.emit("onCollisionExit", other, self);
  }
});

cc._RF.pop();