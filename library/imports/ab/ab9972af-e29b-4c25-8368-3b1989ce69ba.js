"use strict";
cc._RF.push(module, 'ab997Kv4ptMJYNoOxmJzmm6', 'widget_child');
// Script/core/widget_child.js

"use strict";

cc.Class({
  "extends": cc.Component,
  //根据子节点的占用空间 重新设计宽高
  properties: {
    childNode: cc.Node
  },
  onLoad: function onLoad() {
    this.node.width = this.childNode.width;
    this.node.height = this.childNode.height;
  },
  start: function start() {},
  onDestroy: function onDestroy() {} // update (dt) {},

});

cc._RF.pop();