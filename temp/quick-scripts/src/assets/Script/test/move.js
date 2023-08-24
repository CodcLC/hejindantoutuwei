"use strict";
cc._RF.push(module, '604b8kuPUZHsZxGPZzSnsbk', 'move');
// Script/test/move.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    target: cc.Node,
    speedX: 10,
    speedY: 10
  },
  onLoad: function onLoad() {
    this.targetRect = cc.rect(0, 0, 100, 100);
  },
  start: function start() {},
  onDestroy: function onDestroy() {},
  update: function update(dt) {
    this.node.x--; //cc.log(this.node.width, this.node.height)
  }
});

cc._RF.pop();