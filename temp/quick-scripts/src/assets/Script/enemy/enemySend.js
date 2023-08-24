"use strict";
cc._RF.push(module, '4c7c8EDVUFGTpxPzzWqkAL+', 'enemySend');
// Script/enemy/enemySend.js

"use strict";

var PoolComponent = require("PoolComponent");

cc.Class({
  "extends": PoolComponent,
  properties: {
    bulletName: "bullet1",
    parent: cc.Node,
    sendNode: cc.Node,
    shootNum: 5
  },
  unuse: function unuse() {
    this.shooting = false;
    this.shoot_num = 0;
    this.parent.off("shoot_start", this.shoot_start, this);
    this.parent.off("shoot_end", this.shoot_end, this);
  },
  reuse: function reuse(data) {
    this.data = _.clone(data);
    if (!this.parent) this.parent = this.node.parent;
    this.parent.on("shoot_start", this.shoot_start, this);
    this.parent.on("shoot_end", this.shoot_end, this);
    this.shooting = false;
    this.shoot_num = 0;
  },
  //碰撞进入
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (this.parent.isDeath) return;
    if (game.isOver) return;
    this.shoot_num = 0;

    if (this.shooting) {
      this.parent.emit("collision_shoot_start");
    }
  },
  //碰撞停留
  onCollisionStay: function onCollisionStay(other, self) {
    if (this.shooting) {
      this.shoot_num++;

      if (this.shoot_num >= this.shootNum) {
        this.shoot();
      }
    }
  },
  //碰撞退出
  onCollisionExit: function onCollisionExit(other, self) {
    this.shoot_num = 0;
  },
  //开始射击
  shoot_start: function shoot_start() {
    this.shooting = true;
  },
  //射击动作结束
  shoot_end: function shoot_end() {
    if (this.shooting) {
      this.shoot();
    } // this.shooting = false;

  },
  //该方法为生命周期方法，父类未必会有实现。
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {},
  shoot: function shoot() {
    this.shooting = false;
    var sendNode = this.sendNode || this.node;
    var shootPos = sendNode.convertToWorldSpaceAR(game.point1);
    var targetPos = sendNode.convertToWorldSpaceAR(game.point2);
    var angle = game.gameUtils.getRotation(shootPos, targetPos);

    if (this.node.scaleX < 0) {
      angle = 360 - angle;
    } else {} // _.assignIn(this.data, {


    this.data.prefabName = this.bulletName; //预制体名称

    this.data.v = shootPos; //位置

    this.data.angle = angle; //角度

    this.data.group = "enbull"; //组
    //prefabName

    game.emit("shoot", this.data);
    this.parent.emit("collision_shoot_end");
    this.shoot_num = 0;
  }
});

cc._RF.pop();