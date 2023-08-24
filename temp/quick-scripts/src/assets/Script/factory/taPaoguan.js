"use strict";
cc._RF.push(module, '3165e4GGOFNBJy2i4VpdT0f', 'taPaoguan');
// Script/factory/taPaoguan.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    sendNode: cc.Node,
    attackTme: 1,
    //攻击时间
    attack: 1000,
    //攻击力
    bulletName: "bullet5"
  },
  onDestroy: function onDestroy() {
    this.parent.off("death", this.death, this);
  },
  addEvent: function addEvent() {
    this.parent.on("death", this.death, this);
  },
  death: function death() {
    this.node.getComponent(cc.CircleCollider).enabled = false;
    var renderComponents = this.node.getComponents(cc.RenderComponent);
    var renderComponent = renderComponents[0];
    renderComponent.setMaterial(0, game.materias["dissolve"]);
  },
  onLoad: function onLoad() {
    this.targets = [];
    this.sendTime = 0;
    this.parent = this.node.parent;
    this.worldPos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
    var sx = this.node.scaleX; //* this.parent.scaleX;

    var psy = this.parent.scaleX; //* this.parent.scaleX;

    sx = sx * psy;
    this.flip = sx < 0;
    this.flip2 = psy < 0;
    this.targetGroup = "enbull2";

    if (this.node.group == "myeye") {
      this.targetGroup = "mybull2";
    }

    this.addEvent();
  },
  //碰撞进入
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (game.isOver) return;
    if (this.node.isDeath) return;
    var node = other.node;

    if (this.targets.indexOf(node) < 0) {
      this.targets.push(node);
    }
  },
  //碰撞退出
  onCollisionExit: function onCollisionExit(other, self) {
    if (game.isOver) return;
    if (this.parent.isDeath) return;
    var node = other.node;
    var idx = this.targets.indexOf(node);

    if (idx >= 0) {
      this.targets.splice(idx, 1);
    }
  },
  start: function start() {},
  update: function update(dt) {
    if (game.isOver) return;
    if (this.parent.isDeath) return;
    this.sendTime += dt;

    if (!this.targets || this.targets.length == 0) {
      //
      //this.sendTime = 0;
      return;
    }

    var target = this.targets[0];
    var targetPos = target.convertToWorldSpaceAR(game.point1); // game.root.emit("drawClear");
    // game.root.emit("draw", targetPos);
    //game.root.emit("draw", this.worldPos);

    var rotation = game.gameUtils.getRotation(this.worldPos, targetPos);

    if (this.flip) {
      rotation = rotation + 180;
    }

    if (this.flip2) {
      rotation = 360 - rotation;
    }

    this.node.angle = rotation; // dt * 10;

    if (this.sendTime > this.attackTme) //攻击时间到了
      {
        this.sendTime = 0;
        var sendPos = this.sendNode.convertToWorldSpaceAR(game.point1);
        rotation = game.gameUtils.getRotation(sendPos, targetPos); //game.emit("shootFire", "fire", "eff3", sendPos, rotation, this.targetGroup);//开火动画

        game.emit("shootFire", {
          aniName: "eff3",
          v: sendPos,
          angle: rotation
        }); //开火动画

        game.emit("shoot", {
          prefabName: this.bulletName,
          //预制体名称
          v: sendPos,
          //位置
          angle: rotation - 15,
          //角度
          group: this.targetGroup,
          //组
          attack: this.attack
        });
        game.emit("shoot", {
          prefabName: this.bulletName,
          //预制体名称
          v: sendPos,
          //位置
          angle: rotation,
          //角度
          group: this.targetGroup,
          //组
          attack: this.attack
        });
        game.emit("shoot", {
          prefabName: this.bulletName,
          //预制体名称
          v: sendPos,
          //位置
          angle: rotation + 15,
          //角度
          group: this.targetGroup,
          //组
          attack: this.attack
        });
      }
  }
});

cc._RF.pop();