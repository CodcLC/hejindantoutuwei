"use strict";
cc._RF.push(module, '7b412irmTBCk7rwyHAKfT2b', 'shootBullet');
// Script/layer/shootBullet.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onDestroy: function onDestroy() {
    game.off("shoot", this.shoot, this); //
  },
  onLoad: function onLoad() {
    game.on("shoot", this.shoot, this); //
  },

  /****
   * 发射子弹
   * ****/
  shoot: function shoot(data) {
    var pool = game.bulletPool[data.prefabName];

    if (pool && pool.prefab) {
      pool.getNode(data, this.node); //this.node.addChild(b);
    }
  }
});

cc._RF.pop();