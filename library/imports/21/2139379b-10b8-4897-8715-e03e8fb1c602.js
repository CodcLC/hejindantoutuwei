"use strict";
cc._RF.push(module, '21393ebELhIl4cV4D6PscYC', 'gameOver');
// Script/scene/gameOver.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onDestroy: function onDestroy() {
    this.node.off("death", this.death, this);
  },
  addEvent: function addEvent() {
    this.node.on("death", this.death, this);
  },
  death: function death() {
    if (this.isDeath) return;
    game.isOver = true;
    this.node.isDeath = this.isDeath = true;
    var win = true;

    if (this.node.group == "myrole") {
      win = false;
    }

    game.emit("gameOver");
    var physicsManager = cc.director.getPhysicsManager();
    physicsManager.enabled = false;
    cc.director.getCollisionManager().enabled = false;

    if (win) {
      game.emit(game.gameEvent.popup_prefab, game.gamePopup.gameOver_win, {
        test: parseInt(Math.random() * 1000),
        win: win
      });
      game.soundManager.playMusic(game.gameSound.bgm_win, false); //停止播放音乐
    } else {
      game.emit(game.gameEvent.popup_prefab, game.gamePopup.gameOver_loss, {
        test: parseInt(Math.random() * 1000),
        win: win
      });
      game.soundManager.playMusic(game.gameSound.bgm_lose, false); //停止播放音乐
    }
  },
  onLoad: function onLoad() {
    this.isDeath = false;
    this.addEvent();
  },
  start: function start() {}
});

cc._RF.pop();