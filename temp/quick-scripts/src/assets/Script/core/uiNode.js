"use strict";
cc._RF.push(module, 'b1596gnZApNzpjR+zLcdQvn', 'uiNode');
// Script/core/uiNode.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {
    cc.game.addPersistRootNode(this.node); //添加常驻节点

    game.on("aa", function (txt) {
      cc.log(txt);
    }); //game.gameConfig.junguan.attack;
  },
  start: function start() {},
  //返回界面
  oBack: function oBack(event, value) {
    game.emit(game.gameEvent.load_scene, game.gameScene.hall);
  },
  showPhysicsManager: function showPhysicsManager() {
    var physicsManager = cc.director.getPhysicsManager();

    if (physicsManager.debugDrawFlags == 0) {
      physicsManager.debugDrawFlags = // 0;
      cc.PhysicsManager.DrawBits.e_aabbBit | cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit;
    } else {
      physicsManager.debugDrawFlags = 0;
    } //  physicsManager.enabled = true;

  },
  showDebugDraw: function showDebugDraw() {
    cc.director.getCollisionManager().enabledDebugDraw = !cc.director.getCollisionManager().enabledDebugDraw;
  },
  showTest: function showTest() {
    game.emit(game.gameEvent.popup_prefab, game.gamePopup.gameOver, {
      test: 123
    });
  } // update (dt) {},

});

cc._RF.pop();