"use strict";
cc._RF.push(module, '69945lhXk9LGqmOhtuNdoDG', 'hall');
// Script/scene/hall.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onEnterGame: function onEnterGame(event, value) {
    value = parseInt(value);

    switch (value) {
      case 1:
        game.isOver = false;
        game.emit(game.gameEvent.load_scene, game.gameScene.gameGuanka);
        break;

      case 2:
        game.emit(game.gameEvent.load_scene, game.gameScene.mapEdit);
        break;

      case 3:
        game.emit(game.gameEvent.load_scene, game.gameScene.roleEdit);
        break;

      default:
        break;
    }
  },
  onLoad: function onLoad() {
    //game.soundManager.musicMute = true;
    game.soundManager.playMusic(game.gameSound.op, true);
  },
  start: function start() {},
  onDestroy: function onDestroy() {} // update (dt) {},

});

cc._RF.pop();