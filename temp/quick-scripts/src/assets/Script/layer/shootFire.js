"use strict";
cc._RF.push(module, '7172ddJtO9NhYeuNeOXY+mF', 'shootFire');
// Script/layer/shootFire.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onDestroy: function onDestroy() {
    game.off("shootFire", this.shootFire, this); //开火动画
  },
  onLoad: function onLoad() {
    game.on("shootFire", this.shootFire, this); //开火动画
  },

  /*****
   * 开火动画
   * **/
  shootFire: function shootFire(data) {
    var pool = game.firePool["fire"];

    if (pool && pool.prefab) {
      pool.getNode(data, this.node); //this.node.addChild(b);
    }
  }
});

cc._RF.pop();