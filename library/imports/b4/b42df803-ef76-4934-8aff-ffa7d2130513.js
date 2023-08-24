"use strict";
cc._RF.push(module, 'b42dfgD73ZJNIr//6fSEwUT', 'joystickBtn');
// Script/control/joystickBtn.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  onEnable: function onEnable() {
    this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
  },
  onDisable: function onDisable() {
    this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
    this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
    this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
  },
  _onTouchStart: function _onTouchStart(e) {
    this._isTouch = true;
    var pos = e.getLocation();
    var jPos = this.node.convertToNodeSpaceAR(pos);

    if (jPos.x > 0) {
      this.key_down(game.gameControl.right);
    } else {
      this.key_down(game.gameControl.left);
    } //cc.log("_onTouchStart", pos.x, jPos.x);

  },
  _onTouchMove: function _onTouchMove(e) {
    //cc.log("_onTouchMove", this._isTouch);
    if (!this._isTouch) return;
    var pos = e.getLocation();
    var jPos = this.node.convertToNodeSpaceAR(pos);

    if (jPos.x > 0) {
      this.key_down(game.gameControl.right);
    } else {
      this.key_down(game.gameControl.left);
    }
  },
  _onTouchEnd: function _onTouchEnd(e) {
    this._isTouch = false;
    var pos = e.getLocation();
    var jPos = this.node.convertToNodeSpaceAR(pos);

    if (jPos.x > 0) {
      this.key_up(game.gameControl.right);
    } else {
      this.key_up(game.gameControl.left);
    }
  },
  key_down: function key_down(control) {
    if (this.control == control) return;

    if (this.control) {
      this.key_up(this.control);
    }

    this.control = control;
    game.emit("key_down", control);
  },
  key_up: function key_up(control) {
    this.control = 0;
    game.emit("key_up", control);
  }
});

cc._RF.pop();