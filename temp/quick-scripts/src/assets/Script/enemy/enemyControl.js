"use strict";
cc._RF.push(module, '70ca4oo5GNEj5N/4e2f8oiQ', 'enemyControl');
// Script/enemy/enemyControl.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": PoolComponent,
  properties: {
    _isMove: false,
    attackTme: 1 //攻击时间

  },
  // get isMove() {
  //     return this._isMove;
  // },
  emitMove: function emitMove(value) {
    if (this._isMove != value) {
      this._isMove = value;
      if (value) this.node.emit("key_down", game.gameControl.left);else this.node.emit("key_up", game.gameControl.left);
    }
  },
  onLoad: function onLoad() {},
  unuse: function unuse() {
    this.node.off("onCollisionEnter", this.onFindEnter, this);
    this.node.off("onCollisionExit", this.onFindExit, this);
  },
  reuse: function reuse(data) {
    this.sendTime = 0;
    this.targets = [];
    this.node.on("onCollisionEnter", this.onFindEnter, this);
    this.node.on("onCollisionExit", this.onFindExit, this);
  },
  onEnable: function onEnable() {},
  onDisable: function onDisable() {},
  onDestroy: function onDestroy() {},
  onFindEnter: function onFindEnter(target) {
    if (this.node.isDeath) return;
    var node = target.node;

    if (this.targets.indexOf(node) < 0) {
      this.targets.push(node);
    }
  },
  onFindExit: function onFindExit(target) {
    if (this.node.isDeath) return;
    var node = target.node;
    var idx = this.targets.indexOf(node);

    if (idx >= 0) {
      this.targets.splice(idx, 1);
    }
  },
  start: function start() {},
  update: function update(dt) {
    if (game.isOver) return; //游戏结束

    if (this.node.isDeath) return; //角色死亡

    this.sendTime += dt;

    if (this.targets.length > 0) {
      //有目标
      this.emitMove(false);

      if (this.sendTime > this.attackTme) //攻击时间到了
        {
          this.sendTime = 0;
          this.node.emit("attack");
        }
    } else {
      this.emitMove(true); //= true;
    }
  }
});

cc._RF.pop();