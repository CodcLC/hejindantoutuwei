"use strict";
cc._RF.push(module, '8715d6tVP5MypVr8XqhnGHf', 'roleLayer');
// Script/layer/roleLayer.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onDestroy: function onDestroy() {
    game.off("chubing", this.chubing, this);
  },
  onLoad: function onLoad() {
    this.zIndex = 0; //

    this.yList = [-10, -5, 0, 5, 10];
    game.on("chubing", this.chubing, this);
  },
  chubing: function chubing(prefabName, pos, data) {
    var pool = game.bingPool[prefabName];

    if (pool && pool.prefab) {
      this.zIndex++;
      this.zIndex = this.zIndex % this.yList.length;
      data.zy = this.yList[this.zIndex];
      var b = pool.getNode(data, this.node);
      b.x = pos.x;
      b.y = pos.y; //this.node.addChild(b);

      b.zIndex = this.zIndex;
    }
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();