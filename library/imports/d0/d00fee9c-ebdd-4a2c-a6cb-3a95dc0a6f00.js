"use strict";
cc._RF.push(module, 'd00fe6c691KLKbLOpXcCm8A', 'addMap');
// Script/test/addMap.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    cell: cc.Node
  },
  onLoad: function onLoad() {
    this.node.removeAllChildren();
    var num = 30;

    for (var i = 0; i < num; i++) {
      var cell = cc.instantiate(this.cell);
      var r = parseInt(Math.random() * 255);
      var g = parseInt(Math.random() * 255);
      var b = parseInt(Math.random() * 255);
      cell.color = cc.color(r, g, b);
      cell.getComponent("itemTest").setInfo(i);
      this.node.addChild(cell);
    }
  },
  start: function start() {},
  onDestroy: function onDestroy() {} // update (dt) {},

});

cc._RF.pop();