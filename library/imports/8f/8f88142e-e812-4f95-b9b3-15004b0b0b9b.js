"use strict";
cc._RF.push(module, '8f881Qu6BJPlbmzFQBLCwub', 'itemTest');
// Script/test/itemTest.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    label: cc.Label
  },
  setInfo: function setInfo(vale) {
    this.label.string = vale.toString();
  },
  onLoad: function onLoad() {},
  start: function start() {},
  onDestroy: function onDestroy() {} // update (dt) {},

});

cc._RF.pop();