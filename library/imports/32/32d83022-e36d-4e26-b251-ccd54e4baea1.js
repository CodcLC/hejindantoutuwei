"use strict";
cc._RF.push(module, '32d83Ai421OJrJRzNVOS66h', 'control');
// Script/control/control.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    joystick: cc.Node,
    btnContinue: cc.Node
  },
  onLoad: function onLoad() {
    this.joystick.active = false; //this.joystick.active = true;

    this.btnContinue.active = false;

    if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS) {//ANDROID IOS
    } else {
      this.node.addComponent("keyboard"); //键盘组件
      //cc.log("添加键盘组件")
    }

    game.on("enterGame", this.enterGame, this);
    game.on("levelGame", this.levelGame, this);
  },
  enterGame: function enterGame() {
    this.btnContinue.active = true;
  },
  levelGame: function levelGame() {
    this.btnContinue.active = false;
  }
});

cc._RF.pop();