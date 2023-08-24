"use strict";
cc._RF.push(module, 'dab16X/XyhK4ry5cx4QTZEG', 'roleSprite');
// Script/zhujie/roleSprite.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onDestroy: function onDestroy() {
    this.node.off("death", this.death, this);
  },
  addEvent: function addEvent() {
    this.node.on("death", this.death, this);
  },
  death: function death() {
    if (this.isDeath) return;
    this.node.isDeath = this.isDeath = true;
    this.node.getComponent(cc.BoxCollider).enabled = false;
  },
  onLoad: function onLoad() {
    this.node.isDeath = this.isDeath = false;
    this.addEvent();
  },
  start: function start() {}
});

cc._RF.pop();