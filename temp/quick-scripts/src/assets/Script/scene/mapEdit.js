"use strict";
cc._RF.push(module, 'd4bd4llXEhEb4dwq1+ayqtz', 'mapEdit');
// Script/scene/mapEdit.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  oBack: function oBack(event, value) {
    game.emit(game.gameEvent.load_scene, game.gameScene.hall);
  } // update (dt) {},

});

cc._RF.pop();