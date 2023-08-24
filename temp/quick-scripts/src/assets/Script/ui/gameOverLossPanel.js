"use strict";
cc._RF.push(module, '2abb3C8eB1NVLGym/qVnJv3', 'gameOverLossPanel');
// Script/ui/gameOverLossPanel.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": PoolComponent,
  properties: {},
  //回收
  unuse: function unuse() {},
  //重用
  reuse: function reuse(data) {
    this.data = data;
  },
  onClosed: function onClosed(e) {
    game.emit(game.gameEvent.load_scene, game.gameScene.hall);
    game.emit(game.gameEvent.closed_prefab, this.node);
  },
  start: function start() {}
});

cc._RF.pop();