"use strict";
cc._RF.push(module, '1ef624xfbNLtpi98CtasLrt', 'gameMain');
// Script/scene/gameMain.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    //     tooltip: "描述tips"
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
  onDestroy: function onDestroy() {
    game.emit("levelGame");
  },
  onLoad: function onLoad() {
    game.emit("enterGame");
    game.soundManager.playMusic(game.gameSound.bgm1_1, true);
  },
  // LIFE-CYCLE CALLBACKS:
  //当该组件被启用，并且它的节点也激活时。
  // onEnable() {
  // },
  // //当该组件被禁用或节点变为无效时调用。
  // onDisable() {
  // },
  //该方法为生命周期方法，父类未必会有实现。
  start: function start() {} // update (dt) {},

});

cc._RF.pop();