"use strict";
cc._RF.push(module, 'c12adAeKNJFaaGOS9v0je9s', 'gamePausePanel');
// Script/ui/gamePausePanel.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": PoolComponent,
  properties: {},
  //回收
  unuse: function unuse() {},
  //重用
  reuse: function reuse(data) {},
  onComplete: function onComplete() {//cc.director.pause();
  },
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {},
  start: function start() {},
  onClosed: function onClosed() {
    //cc.director.resume();
    game.emit(game.gameEvent.closed_prefab, this.node);
  },
  //返回大厅
  onBackHome: function onBackHome() {
    //cc.director.resume();
    game.emit(game.gameEvent.closed_prefab, this.node);
    game.emit(game.gameEvent.load_scene, game.gameScene.hall);
  },
  //重新开始
  onReStart: function onReStart() {
    //cc.director.resume();
    game.emit(game.gameEvent.closed_prefab, this.node);
    game.emit(game.gameEvent.load_scene, game.gameScene.gameGuanka);
  }
});

cc._RF.pop();