"use strict";
cc._RF.push(module, 'b488bP9vHxDbIi70Q0n8pxm', 'rotationNode');
// Script/core/rotationNode.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {// var seq = cc.repeatForever(cc.sequence(cc.rotateTo(1, 90),cc.rotateTo(1, 180),cc.rotateTo(1, 270),cc.rotateTo(1, 360)));
    // this.node.runAction(seq)
  },
  start: function start() {},
  update: function update(dt) {
    this.node.angle -= dt * 360 / 1.5;
  }
});

cc._RF.pop();