"use strict";
cc._RF.push(module, '00e85gV5ClN0rl+w+GCQY6l', 'roleFind');
// Script/zhujie/roleFind.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": cc.Component,
  properties: {
    hero: cc.Node
  },
  unuse: function unuse() {
    game.off("aim", this.aim, this);
  },
  reuse: function reuse(data) {
    this.targets = []; //game.off("aim", this.aim, this);
  },
  onLoad: function onLoad() {
    this.targets = [];
    game.on("aim", this.aim, this);
  },
  aim: function aim(flg) {
    this.aimFlg = flg;
  },
  //碰撞进入
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (game.isOver) return;
    if (this.node.isDeath) return;
    var node = other.node;

    if (this.targets.indexOf(node) < 0) {
      this.targets.push(node);
    }

    this.aimPos();
  },
  aimPos: function aimPos() {
    if (!this.hero || !this.aimFlg || !this.targets || this.targets.length == 0) return;
    var pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
    this.targets.sort(function (a, b) {
      var pos1 = a.convertToWorldSpaceAR(cc.v2(0, 0));
      var pos2 = b.convertToWorldSpaceAR(cc.v2(0, 0));
      var len1 = game.gameUtils.getLength(pos1, pos);
      var len2 = game.gameUtils.getLength(pos2, pos);
      return len1 - len2;
    });
    var target = this.targets[0];
    pos = target.convertToWorldSpaceAR(cc.v2(0, 50));
    this.hero.emit("aimPos", pos);
  },
  //碰撞停留
  onCollisionStay: function onCollisionStay(other, self) {
    this.aimPos();
  },
  //碰撞退出
  onCollisionExit: function onCollisionExit(other, self) {
    if (game.isOver) return;
    if (this.node.isDeath) return;
    var node = other.node;
    var idx = this.targets.indexOf(node);

    if (idx >= 0) {
      this.targets.splice(idx, 1);
    }

    this.aimPos();
  }
});

cc._RF.pop();