"use strict";
cc._RF.push(module, 'bd6591XIiBHmo/z8fwSzvrO', 'roleControl');
// Script/zhujie/roleControl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    game.on("key_down", this.onKeyDown, this);
    game.on("key_up", this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    game.off("key_down", this.onKeyDown, this);
    game.off("key_up", this.onKeyUp, this);
  },
  onKeyDown: function onKeyDown(data) {
    this.node.emit("key_down", data);
  },
  onKeyUp: function onKeyUp(data) {
    this.node.emit("key_up", data);
  },
  start: function start() {}
});

cc._RF.pop();