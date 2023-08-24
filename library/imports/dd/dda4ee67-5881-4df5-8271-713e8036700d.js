"use strict";
cc._RF.push(module, 'dda4e5nWIFN9YJxcT6ANnAN', 'buttonControl');
// Script/control/buttonControl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    left: cc.Node,
    right: cc.Node,
    up: cc.Node,
    //down: cc.Node,
    switchBtn: cc.Node,
    shoot: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {},
  onEnable: function onEnable() {
    // this.left.on(cc.Node.EventType.TOUCH_START, this.leftTouchStart, this);
    // this.left.on(cc.Node.EventType.TOUCH_END, this.leftTouchEnd, this);
    // this.left.on(cc.Node.EventType.TOUCH_CANCEL, this.leftTouchEnd, this);
    // this.right.on(cc.Node.EventType.TOUCH_START, this.rightTouchStart, this);
    // this.right.on(cc.Node.EventType.TOUCH_END, this.rightTouchEnd, this);
    // this.right.on(cc.Node.EventType.TOUCH_CANCEL, this.rightTouchEnd, this);
    this.up.on(cc.Node.EventType.TOUCH_START, this.upTouchStart, this);
    this.up.on(cc.Node.EventType.TOUCH_END, this.upTouchEnd, this);
    this.up.on(cc.Node.EventType.TOUCH_CANCEL, this.upTouchEnd, this); // this.down.on(cc.Node.EventType.TOUCH_START, this.downTouchStart, this);
    // this.down.on(cc.Node.EventType.TOUCH_END, this.downTouchEnd, this);
    // this.down.on(cc.Node.EventType.TOUCH_CANCEL, this.downTouchEnd, this);

    this.switchBtn.on(cc.Node.EventType.TOUCH_START, this.switchTouchStart, this);
    this.switchBtn.on(cc.Node.EventType.TOUCH_END, this.switchTouchEnd, this);
    this.switchBtn.on(cc.Node.EventType.TOUCH_CANCEL, this.switchTouchEnd, this);
    this.shoot.on(cc.Node.EventType.TOUCH_START, this.shootStart, this);
    this.shoot.on(cc.Node.EventType.TOUCH_END, this.shootEnd, this);
    this.shoot.on(cc.Node.EventType.TOUCH_CANCEL, this.shootEnd, this);
  },
  onDisable: function onDisable() {
    // this.left.off(cc.Node.EventType.TOUCH_START, this.leftTouchStart, this);
    // this.left.off(cc.Node.EventType.TOUCH_END, this.leftTouchEnd, this);
    // this.left.off(cc.Node.EventType.TOUCH_CANCEL, this.leftTouchEnd, this);
    // this.right.off(cc.Node.EventType.TOUCH_START, this.rightTouchStart, this);
    // this.right.off(cc.Node.EventType.TOUCH_END, this.rightTouchEnd, this);
    // this.right.off(cc.Node.EventType.TOUCH_CANCEL, this.rightTouchEnd, this);
    this.up.off(cc.Node.EventType.TOUCH_START, this.upTouchStart, this);
    this.up.off(cc.Node.EventType.TOUCH_END, this.upTouchEnd, this);
    this.up.off(cc.Node.EventType.TOUCH_CANCEL, this.upTouchEnd, this); // this.down.off(cc.Node.EventType.TOUCH_START, this.downTouchStart, this);
    // this.down.off(cc.Node.EventType.TOUCH_END, this.downTouchEnd, this);
    // this.down.off(cc.Node.EventType.TOUCH_CANCEL, this.downTouchEnd, this);

    this.switchBtn.off(cc.Node.EventType.TOUCH_START, this.switchTouchStart, this);
    this.switchBtn.off(cc.Node.EventType.TOUCH_END, this.switchTouchEnd, this);
    this.switchBtn.off(cc.Node.EventType.TOUCH_CANCEL, this.switchTouchEnd, this);
    this.shoot.off(cc.Node.EventType.TOUCH_START, this.shootStart, this);
    this.shoot.off(cc.Node.EventType.TOUCH_END, this.shootEnd, this);
    this.shoot.off(cc.Node.EventType.TOUCH_CANCEL, this.shootEnd, this);
  },
  leftTouchStart: function leftTouchStart(e) {
    game.emit("key_down", game.gameControl.left);
  },
  leftTouchEnd: function leftTouchEnd(e) {
    game.emit("key_up", game.gameControl.left);
  },
  rightTouchStart: function rightTouchStart(e) {
    game.emit("key_down", game.gameControl.right);
  },
  rightTouchEnd: function rightTouchEnd(e) {
    game.emit("key_up", game.gameControl.right);
  },
  upTouchStart: function upTouchStart(e) {
    game.emit("key_down", game.gameControl.up);
  },
  upTouchEnd: function upTouchEnd(e) {
    game.emit("key_up", game.gameControl.up);
  },
  downTouchStart: function downTouchStart(e) {
    game.emit("key_down", game.gameControl.down);
  },
  downTouchEnd: function downTouchEnd(e) {
    game.emit("key_up", game.gameControl.down);
  },
  switchTouchStart: function switchTouchStart(e) {
    game.emit("key_down", game.gameControl.weapons);
  },
  switchTouchEnd: function switchTouchEnd(e) {
    game.emit("key_up", game.gameControl.weapons);
  },
  shootStart: function shootStart(touch) {
    game.emit("aim", true);
    game.touchDown = true;
  },
  shootEnd: function shootEnd(touch) {
    game.touchDown = false;
    game.emit("aim", false);
  } // update (dt) {},

});

cc._RF.pop();