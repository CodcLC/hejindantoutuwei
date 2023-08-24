"use strict";
cc._RF.push(module, '0f1abu+nMdGdKUwIJfTqxLo', 'roleRotation');
// Script/core/roleRotation.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": PoolComponent,
  properties: {
    parent: cc.Node
  },
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {
    this.idx = 0;
  },
  reuse: function reuse(data) {
    this.idx = 0;
    this.node.angle = 0;
  },
  unuse: function unuse() {
    this.node.angle = 0;
  },
  update: function update(dt) {
    if (!this.parent) return;
    this.idx++;

    if (this.idx % 10 == 0) {
      var idx = _.sortedIndex(game.mapXList, this.parent.x);

      if (idx > 0) idx--;

      if (idx >= 0 && idx < game.mapRotation.length) {
        var angle = game.mapRotation[idx];
        this.node.angle = angle;
      }
    }
  }
});

cc._RF.pop();