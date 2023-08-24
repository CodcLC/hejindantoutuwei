
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/zhujie/roleSpine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10232qRodJN9p1C27si7Dc/', 'roleSpine');
// Script/zhujie/roleSpine.js

"use strict";

cc.Class({
  "extends": cc.Component,
  //角色类
  properties: {},
  onDestroy: function onDestroy() {
    if (!this.parent) return;
    this.parent.off("roleState", this.setRoleState, this);
    this.parent.off("changeDirection", this.changeDirection, this);
    this.parent.off("switchSkin", this.switchSkin, this);
    game.off("stage.touch", this.stageTouch, this);
    game.off("gameOver", this.gameOver, this);
    this.node.off("aimPos", this.aimPos, this);
  },
  addEvent: function addEvent() {
    this.parent.on("roleState", this.setRoleState, this);
    this.parent.on("changeDirection", this.changeDirection, this);
    this.parent.on("switchSkin", this.switchSkin, this);
    game.on("stage.touch", this.stageTouch, this);
    game.on("gameOver", this.gameOver, this);
    this.node.on("aimPos", this.aimPos, this);
  },
  onLoad: function onLoad() {
    if (!this.parent) this.parent = this.node.parent;
    if (!this.parent) return;
    this.animationName = "";
    this.roleState = 0; //角色状态  0=静止 1=移动 2=跳跃

    this.scaleX = Math.abs(this.node.scaleX);
    this.sp = this.getComponent(sp.Skeleton);
    var sp_skeleton_data = this.sp._skeleton.data;
    this.animations = {};

    for (var i in sp_skeleton_data.animations) {
      var animation = sp_skeleton_data.animations[i];
      this.animations[animation.name] = {
        trackIndex: parseInt(i),
        name: animation.name,
        duration: animation.duration
      };
    }

    this.trackIndex = this.animations.idle.trackIndex;
    this.trackIndex2 = 0;
    this.action = "idle";
    this.changeAction(this.action); // let ra1 = this.animations.run.duration > this.animations.attack1.duration ? this.animations.attack1.duration : this.animations.run.duration;
    // let ra2 = this.animations.run.duration > this.animations.attack2.duration ? this.animations.attack2.duration : this.animations.run.duration;

    this.setMix('run', 'attack2', 0.1);
    this.setMix('run', 'attack1', 0.1); // this.setMix('run', 'attack2', ra1);
    // this.setMix('run', 'attack1', ra2);

    var ia1 = this.animations.idle.duration > this.animations.attack1.duration ? this.animations.attack1.duration : this.animations.idle.duration;
    var ia2 = this.animations.idle.duration > this.animations.attack2.duration ? this.animations.attack2.duration : this.animations.idle.duration;
    this.setMix('idle', 'attack2', 0.2);
    this.setMix('idle', 'attack1', 0.2); // this.setMix('idle', 'attack2', ia1);
    // this.setMix('idle', 'attack1', ia2);

    this.weaponData = require("zhujueConfig");
    this.weaponIndex = 1;
    setTimeout(this.init.bind(this), 100);
  },
  //设置角色状态
  setRoleState: function setRoleState(value) {
    this.roleState = value; //角色状态  0=静止 1=移动 2=跳跃

    switch (value) {
      case 0:
        //静止
        this.action = "idle";
        this.changeAction(this.action);
        break;

      case 1:
        //移动
        this.action = "run";
        this.changeAction(this.action);
        break;

      case 2:
        //跳跃
        this.action = "jump";
        this.changeAction("jump");
        break;
    }
  },
  changeAction: function changeAction(value) {
    if (this.sp.animation == value) return;

    switch (value) {
      case game.gameAction.idle:
        this.sp.clearTrack(this.trackIndex);
        this.sp.clearTrack(this.trackIndex2);
        this.trackIndex = this.animations.idle.trackIndex;
        this.sp.addAnimation(this.trackIndex, "idle", true);
        break;

      case game.gameAction.run:
        this.sp.clearTrack(this.trackIndex);
        this.sp.clearTrack(this.trackIndex2);
        this.trackIndex = this.animations.run.trackIndex;
        this.sp.addAnimation(this.trackIndex, "run", true);
        break;

      case game.gameAction.jump:
        // this.sp.clearTrack(this.trackIndex);
        // this.trackIndex = this.animations.jump.trackIndex;
        this.sp.clearTrack(this.trackIndex);
        this.trackIndex = this.animations.jump.trackIndex;
        this.sp.addAnimation(this.trackIndex, "jump", false);
        break;

      case game.gameAction.attack:
        // if (this.sp.animation == "jump" || this.sp.animation == "run")
        //     return;
        // this.sp.clearTrack(this.trackIndex);
        this.sp.clearTrack(this.trackIndex2);

        if (this.trackIndex == this.animations.idle.trackIndex || this.trackIndex == this.animations.jump.trackIndex) {
          this.sp.clearTrack(this.trackIndex);
        }

        var weapon = this.weaponData[this.weaponIndex];

        if (weapon.attackId == 1) {
          this.trackIndex2 = this.animations.attack1.trackIndex;
          this.sp.addAnimation(this.trackIndex2, "attack1", false);
        } else if (weapon.attackId == 2) {
          this.trackIndex2 = this.animations.attack2.trackIndex;
          this.sp.addAnimation(this.trackIndex2, "attack2", false);
        }

        break;
    }
  },
  gameOver: function gameOver() {
    this.changeAction("idle");
  },
  init: function init() {
    this.arm = this.sp.findBone("root_qiang");
    this.armPos = cc.v2(this.arm.worldX, this.arm.worldY);
    this.switchSkin(this.weaponIndex);
    this.armRotation = game.gameUtils.standardRotation(this.arm.rotation);
    this.rotationLimit = -65;
    this.rotationLimit1 = game.gameUtils.standardRotation(this.rotationLimit - 90);
    this.rotationLimit2 = game.gameUtils.standardRotation(this.rotationLimit + 90);
    this.sendTime = 0; // this.curAction = "idle";

    var self = this;
    var spine = this.sp; // //动画开始
    // let weapon = this.weaponData[this.weaponIndex];
    // this.attackTimeScale1 = 230 / (weapon.sendTime * 1000);
    // this.attackTimeScale2 = 450 / (weapon.sendTime * 1000);

    spine.setStartListener(function (trackEntry) {
      var animationName = trackEntry.animation ? trackEntry.animation.name : "";

      switch (animationName) {
        case "attack1":
          break;
      } // if (self.animationName === 'attack1') {
      //     spine.timeScale = self.attackTimeScale1;
      // }
      // else if (self.animationName === 'attack2') {
      //     spine.timeScale = self.attackTimeScale2;
      // }
      // else {
      //     spine.timeScale = 1;
      // }

    }.bind(this));
    spine.setCompleteListener(function (trackEntry) {
      var animationName = trackEntry.animation ? trackEntry.animation.name : "";

      switch (animationName) {
        case "attack1":
        case "attack2":
          this.sp.clearTrack(this.trackIndex);
          this.changeAction(this.action);
          break;
      }
    }.bind(this));
    this._isinit = true;
    this.addEvent();
  },
  stageTouch: function stageTouch(pos) {
    if (!this._isinit) return;
    if (game.isOver) return;
    var p = this.node.convertToWorldSpaceAR(this.armPos);
    var rotation = game.gameUtils.getRotation(p, pos);

    if (this.node.scaleX < 0) {
      rotation = rotation - 90 - this.weaponData[this.weaponIndex].rotation;
      rotation = 360 - rotation;
    } else {
      rotation = rotation - 90 + this.weaponData[this.weaponIndex].rotation;
    }

    rotation = game.gameUtils.standardRotation(rotation);

    if (game.gameUtils.limitRotation(rotation, this.rotationLimit1, this.rotationLimit2)) {
      this.arm.rotation = rotation;
      this.armRotation = game.gameUtils.standardRotation(this.arm.rotation);
    } else {
      this.changeDirection(this.node.scaleX * -1);
    }
  },
  aimPos: function aimPos(pos) {
    if (!this._isinit) return;
    if (game.isOver) return;
    pos.y += this.weaponData[this.weaponIndex].aimY;
    var p = this.node.convertToWorldSpaceAR(this.armPos);
    var rotation = game.gameUtils.getRotation(p, pos);

    if (this.node.scaleX < 0) {
      rotation = rotation - 90 - this.weaponData[this.weaponIndex].rotation;
      rotation = 360 - rotation;
    } else {
      rotation = rotation - 90 + this.weaponData[this.weaponIndex].rotation;
    }

    rotation = game.gameUtils.standardRotation(rotation);

    if (game.gameUtils.limitRotation(rotation, this.rotationLimit1, this.rotationLimit2)) {
      this.arm.rotation = rotation;
      this.armRotation = game.gameUtils.standardRotation(this.arm.rotation);
    }
  },
  changeDirection: function changeDirection(value) {
    this.node.scaleX = this.scaleX * value;
  },
  //切换皮肤 武器
  switchSkin: function switchSkin(idx) {
    if (game.isOver) return;

    if (!idx) {
      this.weaponIndex += 1;
      if (this.weaponIndex > 4) this.weaponIndex = 1;
      idx = this.weaponIndex;
    }

    this.weaponIndex = idx;
    game.emit("weaponIndex", this.weaponIndex);
    var weapon = this.weaponData[this.weaponIndex];
    this.sp.setSkin(weapon.name);
    this.weapon = this.sp.findBone("root_weapons" + idx);
    this.weaponPos = cc.v2(this.weapon.worldX, this.weapon.worldY); // this.attackTimeScale1 = 230 / (weapon.sendTime * 1000);
    // this.attackTimeScale2 = 450 / (weapon.sendTime * 1000);
  },
  //setMix 为所有关键帧设定混合及混合时间（从当前值开始差值）。
  setMix: function setMix(anim1, anim2, mixTime) {// this.sp.setMix(anim1, anim2, mixTime);
    // this.sp.setMix(anim2, anim1, mixTime);
  },
  start: function start() {},
  update: function update(dt) {
    if (game.isOver) return;
    if (!this._isinit) return;
    this.sendTime += dt;

    if (!game.touchDown) {
      return;
    }

    var weapon = this.weaponData[this.weaponIndex];

    if (this.sendTime > weapon.sendTime) {
      this.sendTime = 0;
      this.changeAction(game.gameAction.attack);
      var armPos = this.node.convertToWorldSpaceAR(this.armPos);
      this.weaponPos = cc.v2(this.weapon.worldX, this.weapon.worldY);
      var weaponPos = this.node.convertToWorldSpaceAR(this.weaponPos);
      var rotation = game.gameUtils.getRotation(armPos, weaponPos);
      var bulletName = "bullet" + this.weaponIndex;
      if (!this.shootData) this.shootData = {};
      this.shootData.prefabName = bulletName; //预制体名称

      this.shootData.v = weaponPos; //位置

      this.shootData.angle = rotation; //角度

      this.shootData.group = "mybull"; //组

      this.shootData.attack = weapon.attack;
      game.emit("shoot", this.shootData); //game.emit("shoot", bulletName, weaponPos, rotation, "mybull");
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx6aHVqaWVcXHJvbGVTcGluZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uRGVzdHJveSIsInBhcmVudCIsIm9mZiIsInNldFJvbGVTdGF0ZSIsImNoYW5nZURpcmVjdGlvbiIsInN3aXRjaFNraW4iLCJnYW1lIiwic3RhZ2VUb3VjaCIsImdhbWVPdmVyIiwibm9kZSIsImFpbVBvcyIsImFkZEV2ZW50Iiwib24iLCJvbkxvYWQiLCJhbmltYXRpb25OYW1lIiwicm9sZVN0YXRlIiwic2NhbGVYIiwiTWF0aCIsImFicyIsInNwIiwiZ2V0Q29tcG9uZW50IiwiU2tlbGV0b24iLCJzcF9za2VsZXRvbl9kYXRhIiwiX3NrZWxldG9uIiwiZGF0YSIsImFuaW1hdGlvbnMiLCJpIiwiYW5pbWF0aW9uIiwibmFtZSIsInRyYWNrSW5kZXgiLCJwYXJzZUludCIsImR1cmF0aW9uIiwiaWRsZSIsInRyYWNrSW5kZXgyIiwiYWN0aW9uIiwiY2hhbmdlQWN0aW9uIiwic2V0TWl4IiwiaWExIiwiYXR0YWNrMSIsImlhMiIsImF0dGFjazIiLCJ3ZWFwb25EYXRhIiwicmVxdWlyZSIsIndlYXBvbkluZGV4Iiwic2V0VGltZW91dCIsImluaXQiLCJiaW5kIiwidmFsdWUiLCJnYW1lQWN0aW9uIiwiY2xlYXJUcmFjayIsImFkZEFuaW1hdGlvbiIsInJ1biIsImp1bXAiLCJhdHRhY2siLCJ3ZWFwb24iLCJhdHRhY2tJZCIsImFybSIsImZpbmRCb25lIiwiYXJtUG9zIiwidjIiLCJ3b3JsZFgiLCJ3b3JsZFkiLCJhcm1Sb3RhdGlvbiIsImdhbWVVdGlscyIsInN0YW5kYXJkUm90YXRpb24iLCJyb3RhdGlvbiIsInJvdGF0aW9uTGltaXQiLCJyb3RhdGlvbkxpbWl0MSIsInJvdGF0aW9uTGltaXQyIiwic2VuZFRpbWUiLCJzZWxmIiwic3BpbmUiLCJzZXRTdGFydExpc3RlbmVyIiwidHJhY2tFbnRyeSIsInNldENvbXBsZXRlTGlzdGVuZXIiLCJfaXNpbml0IiwicG9zIiwiaXNPdmVyIiwicCIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsImdldFJvdGF0aW9uIiwibGltaXRSb3RhdGlvbiIsInkiLCJhaW1ZIiwiaWR4IiwiZW1pdCIsInNldFNraW4iLCJ3ZWFwb25Qb3MiLCJhbmltMSIsImFuaW0yIiwibWl4VGltZSIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJ0b3VjaERvd24iLCJidWxsZXROYW1lIiwic2hvb3REYXRhIiwicHJlZmFiTmFtZSIsInYiLCJhbmdsZSIsImdyb3VwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMO0FBQ0FDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBSUxDLEVBQUFBLFNBSkssdUJBSU87QUFDUixRQUFJLENBQUMsS0FBS0MsTUFBVixFQUFrQjtBQUNsQixTQUFLQSxNQUFMLENBQVlDLEdBQVosQ0FBZ0IsV0FBaEIsRUFBNkIsS0FBS0MsWUFBbEMsRUFBZ0QsSUFBaEQ7QUFDQSxTQUFLRixNQUFMLENBQVlDLEdBQVosQ0FBZ0IsaUJBQWhCLEVBQW1DLEtBQUtFLGVBQXhDLEVBQXlELElBQXpEO0FBQ0EsU0FBS0gsTUFBTCxDQUFZQyxHQUFaLENBQWdCLFlBQWhCLEVBQThCLEtBQUtHLFVBQW5DLEVBQStDLElBQS9DO0FBQ0FDLElBQUFBLElBQUksQ0FBQ0osR0FBTCxDQUFTLGFBQVQsRUFBd0IsS0FBS0ssVUFBN0IsRUFBeUMsSUFBekM7QUFDQUQsSUFBQUEsSUFBSSxDQUFDSixHQUFMLENBQVMsVUFBVCxFQUFxQixLQUFLTSxRQUExQixFQUFvQyxJQUFwQztBQUNBLFNBQUtDLElBQUwsQ0FBVVAsR0FBVixDQUFjLFFBQWQsRUFBd0IsS0FBS1EsTUFBN0IsRUFBcUMsSUFBckM7QUFDSCxHQVpJO0FBYUxDLEVBQUFBLFFBYkssc0JBYU07QUFDUCxTQUFLVixNQUFMLENBQVlXLEVBQVosQ0FBZSxXQUFmLEVBQTRCLEtBQUtULFlBQWpDLEVBQStDLElBQS9DO0FBQ0EsU0FBS0YsTUFBTCxDQUFZVyxFQUFaLENBQWUsaUJBQWYsRUFBa0MsS0FBS1IsZUFBdkMsRUFBd0QsSUFBeEQ7QUFDQSxTQUFLSCxNQUFMLENBQVlXLEVBQVosQ0FBZSxZQUFmLEVBQTZCLEtBQUtQLFVBQWxDLEVBQThDLElBQTlDO0FBQ0FDLElBQUFBLElBQUksQ0FBQ00sRUFBTCxDQUFRLGFBQVIsRUFBdUIsS0FBS0wsVUFBNUIsRUFBd0MsSUFBeEM7QUFDQUQsSUFBQUEsSUFBSSxDQUFDTSxFQUFMLENBQVEsVUFBUixFQUFvQixLQUFLSixRQUF6QixFQUFtQyxJQUFuQztBQUNBLFNBQUtDLElBQUwsQ0FBVUcsRUFBVixDQUFhLFFBQWIsRUFBdUIsS0FBS0YsTUFBNUIsRUFBb0MsSUFBcEM7QUFDSCxHQXBCSTtBQXFCTEcsRUFBQUEsTUFyQkssb0JBcUJJO0FBQ0wsUUFBSSxDQUFDLEtBQUtaLE1BQVYsRUFBa0IsS0FBS0EsTUFBTCxHQUFjLEtBQUtRLElBQUwsQ0FBVVIsTUFBeEI7QUFDbEIsUUFBSSxDQUFDLEtBQUtBLE1BQVYsRUFBa0I7QUFDbEIsU0FBS2EsYUFBTCxHQUFxQixFQUFyQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsQ0FBakIsQ0FKSyxDQUljOztBQUNuQixTQUFLQyxNQUFMLEdBQWNDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtULElBQUwsQ0FBVU8sTUFBbkIsQ0FBZDtBQUNBLFNBQUtHLEVBQUwsR0FBVSxLQUFLQyxZQUFMLENBQWtCRCxFQUFFLENBQUNFLFFBQXJCLENBQVY7QUFDQSxRQUFJQyxnQkFBZ0IsR0FBRyxLQUFLSCxFQUFMLENBQVFJLFNBQVIsQ0FBa0JDLElBQXpDO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQjs7QUFDQSxTQUFLLElBQUlDLENBQVQsSUFBY0osZ0JBQWdCLENBQUNHLFVBQS9CLEVBQTJDO0FBQ3ZDLFVBQUlFLFNBQVMsR0FBR0wsZ0JBQWdCLENBQUNHLFVBQWpCLENBQTRCQyxDQUE1QixDQUFoQjtBQUNBLFdBQUtELFVBQUwsQ0FBZ0JFLFNBQVMsQ0FBQ0MsSUFBMUIsSUFBa0M7QUFDOUJDLFFBQUFBLFVBQVUsRUFBRUMsUUFBUSxDQUFDSixDQUFELENBRFU7QUFFOUJFLFFBQUFBLElBQUksRUFBRUQsU0FBUyxDQUFDQyxJQUZjO0FBRzlCRyxRQUFBQSxRQUFRLEVBQUVKLFNBQVMsQ0FBQ0k7QUFIVSxPQUFsQztBQUtIOztBQUNELFNBQUtGLFVBQUwsR0FBa0IsS0FBS0osVUFBTCxDQUFnQk8sSUFBaEIsQ0FBcUJILFVBQXZDO0FBQ0EsU0FBS0ksV0FBTCxHQUFtQixDQUFuQjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxNQUFkO0FBQ0EsU0FBS0MsWUFBTCxDQUFrQixLQUFLRCxNQUF2QixFQXBCSyxDQXFCTDtBQUNBOztBQUNBLFNBQUtFLE1BQUwsQ0FBWSxLQUFaLEVBQW1CLFNBQW5CLEVBQThCLEdBQTlCO0FBQ0EsU0FBS0EsTUFBTCxDQUFZLEtBQVosRUFBbUIsU0FBbkIsRUFBOEIsR0FBOUIsRUF4QkssQ0F5Qkw7QUFDQTs7QUFDQSxRQUFJQyxHQUFHLEdBQUcsS0FBS1osVUFBTCxDQUFnQk8sSUFBaEIsQ0FBcUJELFFBQXJCLEdBQWdDLEtBQUtOLFVBQUwsQ0FBZ0JhLE9BQWhCLENBQXdCUCxRQUF4RCxHQUFtRSxLQUFLTixVQUFMLENBQWdCYSxPQUFoQixDQUF3QlAsUUFBM0YsR0FBc0csS0FBS04sVUFBTCxDQUFnQk8sSUFBaEIsQ0FBcUJELFFBQXJJO0FBQ0EsUUFBSVEsR0FBRyxHQUFHLEtBQUtkLFVBQUwsQ0FBZ0JPLElBQWhCLENBQXFCRCxRQUFyQixHQUFnQyxLQUFLTixVQUFMLENBQWdCZSxPQUFoQixDQUF3QlQsUUFBeEQsR0FBbUUsS0FBS04sVUFBTCxDQUFnQmUsT0FBaEIsQ0FBd0JULFFBQTNGLEdBQXNHLEtBQUtOLFVBQUwsQ0FBZ0JPLElBQWhCLENBQXFCRCxRQUFySTtBQUNBLFNBQUtLLE1BQUwsQ0FBWSxNQUFaLEVBQW9CLFNBQXBCLEVBQStCLEdBQS9CO0FBQ0EsU0FBS0EsTUFBTCxDQUFZLE1BQVosRUFBb0IsU0FBcEIsRUFBK0IsR0FBL0IsRUE5QkssQ0ErQkw7QUFDQTs7QUFDQSxTQUFLSyxVQUFMLEdBQWtCQyxPQUFPLENBQUMsY0FBRCxDQUF6QjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQUMsSUFBQUEsVUFBVSxDQUFDLEtBQUtDLElBQUwsQ0FBVUMsSUFBVixDQUFlLElBQWYsQ0FBRCxFQUF1QixHQUF2QixDQUFWO0FBQ0gsR0F6REk7QUEwREw7QUFDQTNDLEVBQUFBLFlBM0RLLHdCQTJEUTRDLEtBM0RSLEVBMkRlO0FBQ2hCLFNBQUtoQyxTQUFMLEdBQWlCZ0MsS0FBakIsQ0FEZ0IsQ0FDTzs7QUFDdkIsWUFBUUEsS0FBUjtBQUNJLFdBQUssQ0FBTDtBQUFRO0FBQ0osYUFBS2IsTUFBTCxHQUFjLE1BQWQ7QUFDQSxhQUFLQyxZQUFMLENBQWtCLEtBQUtELE1BQXZCO0FBQ0E7O0FBQ0osV0FBSyxDQUFMO0FBQU87QUFDSCxhQUFLQSxNQUFMLEdBQWMsS0FBZDtBQUNBLGFBQUtDLFlBQUwsQ0FBa0IsS0FBS0QsTUFBdkI7QUFDQTs7QUFDSixXQUFLLENBQUw7QUFBUTtBQUNKLGFBQUtBLE1BQUwsR0FBYyxNQUFkO0FBQ0EsYUFBS0MsWUFBTCxDQUFrQixNQUFsQjtBQUNBO0FBWlI7QUFjSCxHQTNFSTtBQTRFTEEsRUFBQUEsWUE1RUssd0JBNEVRWSxLQTVFUixFQTRFZTtBQUNoQixRQUFJLEtBQUs1QixFQUFMLENBQVFRLFNBQVIsSUFBcUJvQixLQUF6QixFQUFnQzs7QUFDaEMsWUFBUUEsS0FBUjtBQUNJLFdBQU16QyxJQUFJLENBQUMwQyxVQUFMLENBQWdCaEIsSUFBdEI7QUFDSSxhQUFLYixFQUFMLENBQVE4QixVQUFSLENBQW1CLEtBQUtwQixVQUF4QjtBQUNBLGFBQUtWLEVBQUwsQ0FBUThCLFVBQVIsQ0FBbUIsS0FBS2hCLFdBQXhCO0FBQ0EsYUFBS0osVUFBTCxHQUFrQixLQUFLSixVQUFMLENBQWdCTyxJQUFoQixDQUFxQkgsVUFBdkM7QUFDQSxhQUFLVixFQUFMLENBQVErQixZQUFSLENBQXFCLEtBQUtyQixVQUExQixFQUFzQyxNQUF0QyxFQUE4QyxJQUE5QztBQUNBOztBQUNKLFdBQU92QixJQUFJLENBQUMwQyxVQUFMLENBQWdCRyxHQUF2QjtBQUNJLGFBQUtoQyxFQUFMLENBQVE4QixVQUFSLENBQW1CLEtBQUtwQixVQUF4QjtBQUNBLGFBQUtWLEVBQUwsQ0FBUThCLFVBQVIsQ0FBbUIsS0FBS2hCLFdBQXhCO0FBQ0EsYUFBS0osVUFBTCxHQUFrQixLQUFLSixVQUFMLENBQWdCMEIsR0FBaEIsQ0FBb0J0QixVQUF0QztBQUNBLGFBQUtWLEVBQUwsQ0FBUStCLFlBQVIsQ0FBcUIsS0FBS3JCLFVBQTFCLEVBQXNDLEtBQXRDLEVBQTZDLElBQTdDO0FBQ0E7O0FBQ0osV0FBT3ZCLElBQUksQ0FBQzBDLFVBQUwsQ0FBZ0JJLElBQXZCO0FBQ0k7QUFDQTtBQUNBLGFBQUtqQyxFQUFMLENBQVE4QixVQUFSLENBQW1CLEtBQUtwQixVQUF4QjtBQUNBLGFBQUtBLFVBQUwsR0FBa0IsS0FBS0osVUFBTCxDQUFnQjJCLElBQWhCLENBQXFCdkIsVUFBdkM7QUFDQSxhQUFLVixFQUFMLENBQVErQixZQUFSLENBQXFCLEtBQUtyQixVQUExQixFQUFzQyxNQUF0QyxFQUE4QyxLQUE5QztBQUNBOztBQUNKLFdBQU92QixJQUFJLENBQUMwQyxVQUFMLENBQWdCSyxNQUF2QjtBQUNJO0FBQ0E7QUFDQTtBQUNBLGFBQUtsQyxFQUFMLENBQVE4QixVQUFSLENBQW1CLEtBQUtoQixXQUF4Qjs7QUFDQSxZQUFJLEtBQUtKLFVBQUwsSUFBbUIsS0FBS0osVUFBTCxDQUFnQk8sSUFBaEIsQ0FBcUJILFVBQXhDLElBQXNELEtBQUtBLFVBQUwsSUFBbUIsS0FBS0osVUFBTCxDQUFnQjJCLElBQWhCLENBQXFCdkIsVUFBbEcsRUFBOEc7QUFDMUcsZUFBS1YsRUFBTCxDQUFROEIsVUFBUixDQUFtQixLQUFLcEIsVUFBeEI7QUFDSDs7QUFDRCxZQUFJeUIsTUFBTSxHQUFHLEtBQUtiLFVBQUwsQ0FBZ0IsS0FBS0UsV0FBckIsQ0FBYjs7QUFDQSxZQUFJVyxNQUFNLENBQUNDLFFBQVAsSUFBbUIsQ0FBdkIsRUFBMEI7QUFDdEIsZUFBS3RCLFdBQUwsR0FBbUIsS0FBS1IsVUFBTCxDQUFnQmEsT0FBaEIsQ0FBd0JULFVBQTNDO0FBQ0EsZUFBS1YsRUFBTCxDQUFRK0IsWUFBUixDQUFxQixLQUFLakIsV0FBMUIsRUFBdUMsU0FBdkMsRUFBa0QsS0FBbEQ7QUFDSCxTQUhELE1BSUssSUFBSXFCLE1BQU0sQ0FBQ0MsUUFBUCxJQUFtQixDQUF2QixFQUEwQjtBQUMzQixlQUFLdEIsV0FBTCxHQUFtQixLQUFLUixVQUFMLENBQWdCZSxPQUFoQixDQUF3QlgsVUFBM0M7QUFDQSxlQUFLVixFQUFMLENBQVErQixZQUFSLENBQXFCLEtBQUtqQixXQUExQixFQUF1QyxTQUF2QyxFQUFrRCxLQUFsRDtBQUNIOztBQUNEO0FBckNSO0FBdUNILEdBckhJO0FBc0hMekIsRUFBQUEsUUF0SEssc0JBc0hNO0FBQ1AsU0FBSzJCLFlBQUwsQ0FBa0IsTUFBbEI7QUFDSCxHQXhISTtBQXlITFUsRUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2QsU0FBS1csR0FBTCxHQUFXLEtBQUtyQyxFQUFMLENBQVFzQyxRQUFSLENBQWlCLFlBQWpCLENBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWM5RCxFQUFFLENBQUMrRCxFQUFILENBQU0sS0FBS0gsR0FBTCxDQUFTSSxNQUFmLEVBQXVCLEtBQUtKLEdBQUwsQ0FBU0ssTUFBaEMsQ0FBZDtBQUNBLFNBQUt4RCxVQUFMLENBQWdCLEtBQUtzQyxXQUFyQjtBQUNBLFNBQUttQixXQUFMLEdBQW1CeEQsSUFBSSxDQUFDeUQsU0FBTCxDQUFlQyxnQkFBZixDQUFnQyxLQUFLUixHQUFMLENBQVNTLFFBQXpDLENBQW5CO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixDQUFDLEVBQXRCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQjdELElBQUksQ0FBQ3lELFNBQUwsQ0FBZUMsZ0JBQWYsQ0FBZ0MsS0FBS0UsYUFBTCxHQUFxQixFQUFyRCxDQUF0QjtBQUNBLFNBQUtFLGNBQUwsR0FBc0I5RCxJQUFJLENBQUN5RCxTQUFMLENBQWVDLGdCQUFmLENBQWdDLEtBQUtFLGFBQUwsR0FBcUIsRUFBckQsQ0FBdEI7QUFDQSxTQUFLRyxRQUFMLEdBQWdCLENBQWhCLENBUmMsQ0FTZDs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBLFFBQUlDLEtBQUssR0FBRyxLQUFLcEQsRUFBakIsQ0FYYyxDQVlkO0FBQ0E7QUFDQTtBQUNBOztBQUNBb0QsSUFBQUEsS0FBSyxDQUFDQyxnQkFBTixDQUF1QixVQUFVQyxVQUFWLEVBQXNCO0FBQ3pDLFVBQUkzRCxhQUFhLEdBQUcyRCxVQUFVLENBQUM5QyxTQUFYLEdBQXVCOEMsVUFBVSxDQUFDOUMsU0FBWCxDQUFxQkMsSUFBNUMsR0FBbUQsRUFBdkU7O0FBQ0EsY0FBUWQsYUFBUjtBQUNJLGFBQUssU0FBTDtBQUNJO0FBRlIsT0FGeUMsQ0FNekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNILEtBZnNCLENBZXJCZ0MsSUFmcUIsQ0FlaEIsSUFmZ0IsQ0FBdkI7QUFnQkF5QixJQUFBQSxLQUFLLENBQUNHLG1CQUFOLENBQTBCLFVBQVVELFVBQVYsRUFBc0I7QUFDNUMsVUFBSTNELGFBQWEsR0FBRzJELFVBQVUsQ0FBQzlDLFNBQVgsR0FBdUI4QyxVQUFVLENBQUM5QyxTQUFYLENBQXFCQyxJQUE1QyxHQUFtRCxFQUF2RTs7QUFDQSxjQUFRZCxhQUFSO0FBQ0ksYUFBSyxTQUFMO0FBQ0EsYUFBSyxTQUFMO0FBQ0ksZUFBS0ssRUFBTCxDQUFROEIsVUFBUixDQUFtQixLQUFLcEIsVUFBeEI7QUFDQSxlQUFLTSxZQUFMLENBQWtCLEtBQUtELE1BQXZCO0FBQ0E7QUFMUjtBQU9ILEtBVHlCLENBU3hCWSxJQVR3QixDQVNuQixJQVRtQixDQUExQjtBQVVBLFNBQUs2QixPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUtoRSxRQUFMO0FBQ0gsR0FyS0k7QUFzS0xKLEVBQUFBLFVBdEtLLHNCQXNLTXFFLEdBdEtOLEVBc0tXO0FBQ1osUUFBSSxDQUFDLEtBQUtELE9BQVYsRUFBbUI7QUFDbkIsUUFBSXJFLElBQUksQ0FBQ3VFLE1BQVQsRUFBaUI7QUFDakIsUUFBSUMsQ0FBQyxHQUFHLEtBQUtyRSxJQUFMLENBQVVzRSxxQkFBVixDQUFnQyxLQUFLckIsTUFBckMsQ0FBUjtBQUNBLFFBQUlPLFFBQVEsR0FBRzNELElBQUksQ0FBQ3lELFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkJGLENBQTNCLEVBQThCRixHQUE5QixDQUFmOztBQUNBLFFBQUksS0FBS25FLElBQUwsQ0FBVU8sTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN0QmlELE1BQUFBLFFBQVEsR0FBR0EsUUFBUSxHQUFHLEVBQVgsR0FBZ0IsS0FBS3hCLFVBQUwsQ0FBZ0IsS0FBS0UsV0FBckIsRUFBa0NzQixRQUE3RDtBQUNBQSxNQUFBQSxRQUFRLEdBQUcsTUFBTUEsUUFBakI7QUFDSCxLQUhELE1BSUs7QUFDREEsTUFBQUEsUUFBUSxHQUFHQSxRQUFRLEdBQUcsRUFBWCxHQUFnQixLQUFLeEIsVUFBTCxDQUFnQixLQUFLRSxXQUFyQixFQUFrQ3NCLFFBQTdEO0FBQ0g7O0FBQ0RBLElBQUFBLFFBQVEsR0FBRzNELElBQUksQ0FBQ3lELFNBQUwsQ0FBZUMsZ0JBQWYsQ0FBZ0NDLFFBQWhDLENBQVg7O0FBQ0EsUUFBSTNELElBQUksQ0FBQ3lELFNBQUwsQ0FBZWtCLGFBQWYsQ0FBNkJoQixRQUE3QixFQUF1QyxLQUFLRSxjQUE1QyxFQUE0RCxLQUFLQyxjQUFqRSxDQUFKLEVBQXNGO0FBQ2xGLFdBQUtaLEdBQUwsQ0FBU1MsUUFBVCxHQUFvQkEsUUFBcEI7QUFDQSxXQUFLSCxXQUFMLEdBQW1CeEQsSUFBSSxDQUFDeUQsU0FBTCxDQUFlQyxnQkFBZixDQUFnQyxLQUFLUixHQUFMLENBQVNTLFFBQXpDLENBQW5CO0FBQ0gsS0FIRCxNQUlLO0FBQ0QsV0FBSzdELGVBQUwsQ0FBcUIsS0FBS0ssSUFBTCxDQUFVTyxNQUFWLEdBQW1CLENBQUMsQ0FBekM7QUFDSDtBQUNKLEdBMUxJO0FBMkxMTixFQUFBQSxNQTNMSyxrQkEyTEVrRSxHQTNMRixFQTJMTztBQUNSLFFBQUksQ0FBQyxLQUFLRCxPQUFWLEVBQW1CO0FBQ25CLFFBQUlyRSxJQUFJLENBQUN1RSxNQUFULEVBQWlCO0FBQ2pCRCxJQUFBQSxHQUFHLENBQUNNLENBQUosSUFBUyxLQUFLekMsVUFBTCxDQUFnQixLQUFLRSxXQUFyQixFQUFrQ3dDLElBQTNDO0FBQ0EsUUFBSUwsQ0FBQyxHQUFHLEtBQUtyRSxJQUFMLENBQVVzRSxxQkFBVixDQUFnQyxLQUFLckIsTUFBckMsQ0FBUjtBQUNBLFFBQUlPLFFBQVEsR0FBRzNELElBQUksQ0FBQ3lELFNBQUwsQ0FBZWlCLFdBQWYsQ0FBMkJGLENBQTNCLEVBQThCRixHQUE5QixDQUFmOztBQUNBLFFBQUksS0FBS25FLElBQUwsQ0FBVU8sTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN0QmlELE1BQUFBLFFBQVEsR0FBR0EsUUFBUSxHQUFHLEVBQVgsR0FBZ0IsS0FBS3hCLFVBQUwsQ0FBZ0IsS0FBS0UsV0FBckIsRUFBa0NzQixRQUE3RDtBQUNBQSxNQUFBQSxRQUFRLEdBQUcsTUFBTUEsUUFBakI7QUFDSCxLQUhELE1BSUs7QUFDREEsTUFBQUEsUUFBUSxHQUFHQSxRQUFRLEdBQUcsRUFBWCxHQUFnQixLQUFLeEIsVUFBTCxDQUFnQixLQUFLRSxXQUFyQixFQUFrQ3NCLFFBQTdEO0FBQ0g7O0FBQ0RBLElBQUFBLFFBQVEsR0FBRzNELElBQUksQ0FBQ3lELFNBQUwsQ0FBZUMsZ0JBQWYsQ0FBZ0NDLFFBQWhDLENBQVg7O0FBQ0EsUUFBSTNELElBQUksQ0FBQ3lELFNBQUwsQ0FBZWtCLGFBQWYsQ0FBNkJoQixRQUE3QixFQUF1QyxLQUFLRSxjQUE1QyxFQUE0RCxLQUFLQyxjQUFqRSxDQUFKLEVBQXNGO0FBQ2xGLFdBQUtaLEdBQUwsQ0FBU1MsUUFBVCxHQUFvQkEsUUFBcEI7QUFDQSxXQUFLSCxXQUFMLEdBQW1CeEQsSUFBSSxDQUFDeUQsU0FBTCxDQUFlQyxnQkFBZixDQUFnQyxLQUFLUixHQUFMLENBQVNTLFFBQXpDLENBQW5CO0FBQ0g7QUFDSixHQTdNSTtBQThNTDdELEVBQUFBLGVBOU1LLDJCQThNVzJDLEtBOU1YLEVBOE1rQjtBQUNuQixTQUFLdEMsSUFBTCxDQUFVTyxNQUFWLEdBQW1CLEtBQUtBLE1BQUwsR0FBYytCLEtBQWpDO0FBQ0gsR0FoTkk7QUFpTkw7QUFDQTFDLEVBQUFBLFVBbE5LLHNCQWtOTStFLEdBbE5OLEVBa05XO0FBQ1osUUFBSTlFLElBQUksQ0FBQ3VFLE1BQVQsRUFBaUI7O0FBQ2pCLFFBQUksQ0FBQ08sR0FBTCxFQUFVO0FBQ04sV0FBS3pDLFdBQUwsSUFBb0IsQ0FBcEI7QUFDQSxVQUFJLEtBQUtBLFdBQUwsR0FBbUIsQ0FBdkIsRUFBMEIsS0FBS0EsV0FBTCxHQUFtQixDQUFuQjtBQUMxQnlDLE1BQUFBLEdBQUcsR0FBRyxLQUFLekMsV0FBWDtBQUNIOztBQUNELFNBQUtBLFdBQUwsR0FBbUJ5QyxHQUFuQjtBQUNBOUUsSUFBQUEsSUFBSSxDQUFDK0UsSUFBTCxDQUFVLGFBQVYsRUFBeUIsS0FBSzFDLFdBQTlCO0FBQ0EsUUFBSVcsTUFBTSxHQUFHLEtBQUtiLFVBQUwsQ0FBZ0IsS0FBS0UsV0FBckIsQ0FBYjtBQUNBLFNBQUt4QixFQUFMLENBQVFtRSxPQUFSLENBQWdCaEMsTUFBTSxDQUFDMUIsSUFBdkI7QUFDQSxTQUFLMEIsTUFBTCxHQUFjLEtBQUtuQyxFQUFMLENBQVFzQyxRQUFSLENBQWlCLGlCQUFpQjJCLEdBQWxDLENBQWQ7QUFDQSxTQUFLRyxTQUFMLEdBQWlCM0YsRUFBRSxDQUFDK0QsRUFBSCxDQUFNLEtBQUtMLE1BQUwsQ0FBWU0sTUFBbEIsRUFBMEIsS0FBS04sTUFBTCxDQUFZTyxNQUF0QyxDQUFqQixDQVpZLENBYVo7QUFDQTtBQUNILEdBak9JO0FBa09MO0FBQ0F6QixFQUFBQSxNQW5PSyxrQkFtT0VvRCxLQW5PRixFQW1PU0MsS0FuT1QsRUFtT2dCQyxPQW5PaEIsRUFtT3lCLENBQzFCO0FBQ0E7QUFDSCxHQXRPSTtBQXVPTEMsRUFBQUEsS0F2T0ssbUJBdU9HLENBQ1AsQ0F4T0k7QUF5T0xDLEVBQUFBLE1Bek9LLGtCQXlPRUMsRUF6T0YsRUF5T007QUFDUCxRQUFJdkYsSUFBSSxDQUFDdUUsTUFBVCxFQUFpQjtBQUNqQixRQUFJLENBQUMsS0FBS0YsT0FBVixFQUFtQjtBQUNuQixTQUFLTixRQUFMLElBQWlCd0IsRUFBakI7O0FBQ0EsUUFBSSxDQUFDdkYsSUFBSSxDQUFDd0YsU0FBVixFQUFxQjtBQUNqQjtBQUNIOztBQUNELFFBQUl4QyxNQUFNLEdBQUcsS0FBS2IsVUFBTCxDQUFnQixLQUFLRSxXQUFyQixDQUFiOztBQUNBLFFBQUksS0FBSzBCLFFBQUwsR0FBZ0JmLE1BQU0sQ0FBQ2UsUUFBM0IsRUFBcUM7QUFDakMsV0FBS0EsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFdBQUtsQyxZQUFMLENBQWtCN0IsSUFBSSxDQUFDMEMsVUFBTCxDQUFnQkssTUFBbEM7QUFDQSxVQUFJSyxNQUFNLEdBQUcsS0FBS2pELElBQUwsQ0FBVXNFLHFCQUFWLENBQWdDLEtBQUtyQixNQUFyQyxDQUFiO0FBQ0EsV0FBSzZCLFNBQUwsR0FBaUIzRixFQUFFLENBQUMrRCxFQUFILENBQU0sS0FBS0wsTUFBTCxDQUFZTSxNQUFsQixFQUEwQixLQUFLTixNQUFMLENBQVlPLE1BQXRDLENBQWpCO0FBQ0EsVUFBSTBCLFNBQVMsR0FBRyxLQUFLOUUsSUFBTCxDQUFVc0UscUJBQVYsQ0FBZ0MsS0FBS1EsU0FBckMsQ0FBaEI7QUFDQSxVQUFJdEIsUUFBUSxHQUFHM0QsSUFBSSxDQUFDeUQsU0FBTCxDQUFlaUIsV0FBZixDQUEyQnRCLE1BQTNCLEVBQW1DNkIsU0FBbkMsQ0FBZjtBQUNBLFVBQUlRLFVBQVUsR0FBRyxXQUFXLEtBQUtwRCxXQUFqQztBQUNBLFVBQUksQ0FBQyxLQUFLcUQsU0FBVixFQUFxQixLQUFLQSxTQUFMLEdBQWlCLEVBQWpCO0FBQ3JCLFdBQUtBLFNBQUwsQ0FBZUMsVUFBZixHQUE0QkYsVUFBNUIsQ0FUaUMsQ0FTTTs7QUFDdkMsV0FBS0MsU0FBTCxDQUFlRSxDQUFmLEdBQW1CWCxTQUFuQixDQVZpQyxDQVVIOztBQUM5QixXQUFLUyxTQUFMLENBQWVHLEtBQWYsR0FBdUJsQyxRQUF2QixDQVhpQyxDQVdEOztBQUNoQyxXQUFLK0IsU0FBTCxDQUFlSSxLQUFmLEdBQXVCLFFBQXZCLENBWmlDLENBWUE7O0FBQ2pDLFdBQUtKLFNBQUwsQ0FBZTNDLE1BQWYsR0FBd0JDLE1BQU0sQ0FBQ0QsTUFBL0I7QUFDQS9DLE1BQUFBLElBQUksQ0FBQytFLElBQUwsQ0FBVSxPQUFWLEVBQW1CLEtBQUtXLFNBQXhCLEVBZGlDLENBZWpDO0FBQ0g7QUFDSjtBQWxRSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICAvL+inkuiJsuexu1xyXG4gICAgcHJvcGVydGllczoge30sXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucGFyZW50Lm9mZihcInJvbGVTdGF0ZVwiLCB0aGlzLnNldFJvbGVTdGF0ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQub2ZmKFwiY2hhbmdlRGlyZWN0aW9uXCIsIHRoaXMuY2hhbmdlRGlyZWN0aW9uLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnBhcmVudC5vZmYoXCJzd2l0Y2hTa2luXCIsIHRoaXMuc3dpdGNoU2tpbiwgdGhpcyk7XHJcbiAgICAgICAgZ2FtZS5vZmYoXCJzdGFnZS50b3VjaFwiLCB0aGlzLnN0YWdlVG91Y2gsIHRoaXMpO1xyXG4gICAgICAgIGdhbWUub2ZmKFwiZ2FtZU92ZXJcIiwgdGhpcy5nYW1lT3ZlciwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihcImFpbVBvc1wiLCB0aGlzLmFpbVBvcywgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgYWRkRXZlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQub24oXCJyb2xlU3RhdGVcIiwgdGhpcy5zZXRSb2xlU3RhdGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGFyZW50Lm9uKFwiY2hhbmdlRGlyZWN0aW9uXCIsIHRoaXMuY2hhbmdlRGlyZWN0aW9uLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnBhcmVudC5vbihcInN3aXRjaFNraW5cIiwgdGhpcy5zd2l0Y2hTa2luLCB0aGlzKTtcclxuICAgICAgICBnYW1lLm9uKFwic3RhZ2UudG91Y2hcIiwgdGhpcy5zdGFnZVRvdWNoLCB0aGlzKTtcclxuICAgICAgICBnYW1lLm9uKFwiZ2FtZU92ZXJcIiwgdGhpcy5nYW1lT3ZlciwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiYWltUG9zXCIsIHRoaXMuYWltUG9zLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkgdGhpcy5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIGlmICghdGhpcy5wYXJlbnQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbk5hbWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucm9sZVN0YXRlID0gMDsvL+inkuiJsueKtuaAgSAgMD3pnZnmraIgMT3np7vliqggMj3ot7Pot4NcclxuICAgICAgICB0aGlzLnNjYWxlWCA9IE1hdGguYWJzKHRoaXMubm9kZS5zY2FsZVgpO1xyXG4gICAgICAgIHRoaXMuc3AgPSB0aGlzLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgbGV0IHNwX3NrZWxldG9uX2RhdGEgPSB0aGlzLnNwLl9za2VsZXRvbi5kYXRhO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gc3Bfc2tlbGV0b25fZGF0YS5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgIGxldCBhbmltYXRpb24gPSBzcF9za2VsZXRvbl9kYXRhLmFuaW1hdGlvbnNbaV07XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uc1thbmltYXRpb24ubmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICB0cmFja0luZGV4OiBwYXJzZUludChpKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGFuaW1hdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGFuaW1hdGlvbi5kdXJhdGlvblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRyYWNrSW5kZXggPSB0aGlzLmFuaW1hdGlvbnMuaWRsZS50cmFja0luZGV4O1xyXG4gICAgICAgIHRoaXMudHJhY2tJbmRleDIgPSAwO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gXCJpZGxlXCI7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VBY3Rpb24odGhpcy5hY3Rpb24pO1xyXG4gICAgICAgIC8vIGxldCByYTEgPSB0aGlzLmFuaW1hdGlvbnMucnVuLmR1cmF0aW9uID4gdGhpcy5hbmltYXRpb25zLmF0dGFjazEuZHVyYXRpb24gPyB0aGlzLmFuaW1hdGlvbnMuYXR0YWNrMS5kdXJhdGlvbiA6IHRoaXMuYW5pbWF0aW9ucy5ydW4uZHVyYXRpb247XHJcbiAgICAgICAgLy8gbGV0IHJhMiA9IHRoaXMuYW5pbWF0aW9ucy5ydW4uZHVyYXRpb24gPiB0aGlzLmFuaW1hdGlvbnMuYXR0YWNrMi5kdXJhdGlvbiA/IHRoaXMuYW5pbWF0aW9ucy5hdHRhY2syLmR1cmF0aW9uIDogdGhpcy5hbmltYXRpb25zLnJ1bi5kdXJhdGlvbjtcclxuICAgICAgICB0aGlzLnNldE1peCgncnVuJywgJ2F0dGFjazInLCAwLjEpO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KCdydW4nLCAnYXR0YWNrMScsIDAuMSk7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRNaXgoJ3J1bicsICdhdHRhY2syJywgcmExKTtcclxuICAgICAgICAvLyB0aGlzLnNldE1peCgncnVuJywgJ2F0dGFjazEnLCByYTIpO1xyXG4gICAgICAgIGxldCBpYTEgPSB0aGlzLmFuaW1hdGlvbnMuaWRsZS5kdXJhdGlvbiA+IHRoaXMuYW5pbWF0aW9ucy5hdHRhY2sxLmR1cmF0aW9uID8gdGhpcy5hbmltYXRpb25zLmF0dGFjazEuZHVyYXRpb24gOiB0aGlzLmFuaW1hdGlvbnMuaWRsZS5kdXJhdGlvbjtcclxuICAgICAgICBsZXQgaWEyID0gdGhpcy5hbmltYXRpb25zLmlkbGUuZHVyYXRpb24gPiB0aGlzLmFuaW1hdGlvbnMuYXR0YWNrMi5kdXJhdGlvbiA/IHRoaXMuYW5pbWF0aW9ucy5hdHRhY2syLmR1cmF0aW9uIDogdGhpcy5hbmltYXRpb25zLmlkbGUuZHVyYXRpb247XHJcbiAgICAgICAgdGhpcy5zZXRNaXgoJ2lkbGUnLCAnYXR0YWNrMicsIDAuMik7XHJcbiAgICAgICAgdGhpcy5zZXRNaXgoJ2lkbGUnLCAnYXR0YWNrMScsIDAuMik7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRNaXgoJ2lkbGUnLCAnYXR0YWNrMicsIGlhMSk7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRNaXgoJ2lkbGUnLCAnYXR0YWNrMScsIGlhMik7XHJcbiAgICAgICAgdGhpcy53ZWFwb25EYXRhID0gcmVxdWlyZShcInpodWp1ZUNvbmZpZ1wiKTtcclxuICAgICAgICB0aGlzLndlYXBvbkluZGV4ID0gMTtcclxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuaW5pdC5iaW5kKHRoaXMpLCAxMDApO1xyXG4gICAgfSxcclxuICAgIC8v6K6+572u6KeS6Imy54q25oCBXHJcbiAgICBzZXRSb2xlU3RhdGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnJvbGVTdGF0ZSA9IHZhbHVlOy8v6KeS6Imy54q25oCBICAwPemdmeatoiAxPeenu+WKqCAyPei3s+i3g1xyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiAvL+mdmeatolxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBcImlkbGVcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQWN0aW9uKHRoaXMuYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6Ly/np7vliqhcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gXCJydW5cIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQWN0aW9uKHRoaXMuYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6IC8v6Lez6LeDXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IFwianVtcFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3Rpb24oXCJqdW1wXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNoYW5nZUFjdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnNwLmFuaW1hdGlvbiA9PSB2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAgZ2FtZS5nYW1lQWN0aW9uLmlkbGU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwLmNsZWFyVHJhY2sodGhpcy50cmFja0luZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3AuY2xlYXJUcmFjayh0aGlzLnRyYWNrSW5kZXgyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhY2tJbmRleCA9IHRoaXMuYW5pbWF0aW9ucy5pZGxlLnRyYWNrSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwLmFkZEFuaW1hdGlvbih0aGlzLnRyYWNrSW5kZXgsIFwiaWRsZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICAgZ2FtZS5nYW1lQWN0aW9uLnJ1bjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3AuY2xlYXJUcmFjayh0aGlzLnRyYWNrSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcC5jbGVhclRyYWNrKHRoaXMudHJhY2tJbmRleDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFja0luZGV4ID0gdGhpcy5hbmltYXRpb25zLnJ1bi50cmFja0luZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcC5hZGRBbmltYXRpb24odGhpcy50cmFja0luZGV4LCBcInJ1blwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICAgZ2FtZS5nYW1lQWN0aW9uLmp1bXA6XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNwLmNsZWFyVHJhY2sodGhpcy50cmFja0luZGV4KTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudHJhY2tJbmRleCA9IHRoaXMuYW5pbWF0aW9ucy5qdW1wLnRyYWNrSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwLmNsZWFyVHJhY2sodGhpcy50cmFja0luZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhY2tJbmRleCA9IHRoaXMuYW5pbWF0aW9ucy5qdW1wLnRyYWNrSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwLmFkZEFuaW1hdGlvbih0aGlzLnRyYWNrSW5kZXgsIFwianVtcFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAgIGdhbWUuZ2FtZUFjdGlvbi5hdHRhY2s6XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5zcC5hbmltYXRpb24gPT0gXCJqdW1wXCIgfHwgdGhpcy5zcC5hbmltYXRpb24gPT0gXCJydW5cIilcclxuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNwLmNsZWFyVHJhY2sodGhpcy50cmFja0luZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3AuY2xlYXJUcmFjayh0aGlzLnRyYWNrSW5kZXgyKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyYWNrSW5kZXggPT0gdGhpcy5hbmltYXRpb25zLmlkbGUudHJhY2tJbmRleCB8fCB0aGlzLnRyYWNrSW5kZXggPT0gdGhpcy5hbmltYXRpb25zLmp1bXAudHJhY2tJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3AuY2xlYXJUcmFjayh0aGlzLnRyYWNrSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHdlYXBvbiA9IHRoaXMud2VhcG9uRGF0YVt0aGlzLndlYXBvbkluZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmICh3ZWFwb24uYXR0YWNrSWQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhY2tJbmRleDIgPSB0aGlzLmFuaW1hdGlvbnMuYXR0YWNrMS50cmFja0luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3AuYWRkQW5pbWF0aW9uKHRoaXMudHJhY2tJbmRleDIsIFwiYXR0YWNrMVwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh3ZWFwb24uYXR0YWNrSWQgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhY2tJbmRleDIgPSB0aGlzLmFuaW1hdGlvbnMuYXR0YWNrMi50cmFja0luZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3AuYWRkQW5pbWF0aW9uKHRoaXMudHJhY2tJbmRleDIsIFwiYXR0YWNrMlwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2FtZU92ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VBY3Rpb24oXCJpZGxlXCIpO1xyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFybSA9IHRoaXMuc3AuZmluZEJvbmUoXCJyb290X3FpYW5nXCIpO1xyXG4gICAgICAgIHRoaXMuYXJtUG9zID0gY2MudjIodGhpcy5hcm0ud29ybGRYLCB0aGlzLmFybS53b3JsZFkpO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoU2tpbih0aGlzLndlYXBvbkluZGV4KTtcclxuICAgICAgICB0aGlzLmFybVJvdGF0aW9uID0gZ2FtZS5nYW1lVXRpbHMuc3RhbmRhcmRSb3RhdGlvbih0aGlzLmFybS5yb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbkxpbWl0ID0gLTY1O1xyXG4gICAgICAgIHRoaXMucm90YXRpb25MaW1pdDEgPSBnYW1lLmdhbWVVdGlscy5zdGFuZGFyZFJvdGF0aW9uKHRoaXMucm90YXRpb25MaW1pdCAtIDkwKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uTGltaXQyID0gZ2FtZS5nYW1lVXRpbHMuc3RhbmRhcmRSb3RhdGlvbih0aGlzLnJvdGF0aW9uTGltaXQgKyA5MCk7XHJcbiAgICAgICAgdGhpcy5zZW5kVGltZSA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5jdXJBY3Rpb24gPSBcImlkbGVcIjtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHNwaW5lID0gdGhpcy5zcDtcclxuICAgICAgICAvLyAvL+WKqOeUu+W8gOWni1xyXG4gICAgICAgIC8vIGxldCB3ZWFwb24gPSB0aGlzLndlYXBvbkRhdGFbdGhpcy53ZWFwb25JbmRleF07XHJcbiAgICAgICAgLy8gdGhpcy5hdHRhY2tUaW1lU2NhbGUxID0gMjMwIC8gKHdlYXBvbi5zZW5kVGltZSAqIDEwMDApO1xyXG4gICAgICAgIC8vIHRoaXMuYXR0YWNrVGltZVNjYWxlMiA9IDQ1MCAvICh3ZWFwb24uc2VuZFRpbWUgKiAxMDAwKTtcclxuICAgICAgICBzcGluZS5zZXRTdGFydExpc3RlbmVyKGZ1bmN0aW9uICh0cmFja0VudHJ5KSB7XHJcbiAgICAgICAgICAgIGxldCBhbmltYXRpb25OYW1lID0gdHJhY2tFbnRyeS5hbmltYXRpb24gPyB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lIDogXCJcIjtcclxuICAgICAgICAgICAgc3dpdGNoIChhbmltYXRpb25OYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXR0YWNrMVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChzZWxmLmFuaW1hdGlvbk5hbWUgPT09ICdhdHRhY2sxJykge1xyXG4gICAgICAgICAgICAvLyAgICAgc3BpbmUudGltZVNjYWxlID0gc2VsZi5hdHRhY2tUaW1lU2NhbGUxO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGVsc2UgaWYgKHNlbGYuYW5pbWF0aW9uTmFtZSA9PT0gJ2F0dGFjazInKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBzcGluZS50aW1lU2NhbGUgPSBzZWxmLmF0dGFja1RpbWVTY2FsZTI7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICBzcGluZS50aW1lU2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBzcGluZS5zZXRDb21wbGV0ZUxpc3RlbmVyKGZ1bmN0aW9uICh0cmFja0VudHJ5KSB7XHJcbiAgICAgICAgICAgIGxldCBhbmltYXRpb25OYW1lID0gdHJhY2tFbnRyeS5hbmltYXRpb24gPyB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lIDogXCJcIjtcclxuICAgICAgICAgICAgc3dpdGNoIChhbmltYXRpb25OYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXR0YWNrMVwiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcImF0dGFjazJcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwLmNsZWFyVHJhY2sodGhpcy50cmFja0luZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUFjdGlvbih0aGlzLmFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuX2lzaW5pdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xyXG4gICAgfSxcclxuICAgIHN0YWdlVG91Y2gocG9zKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc2luaXQpIHJldHVybjtcclxuICAgICAgICBpZiAoZ2FtZS5pc092ZXIpIHJldHVybjtcclxuICAgICAgICBsZXQgcCA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5hcm1Qb3MpO1xyXG4gICAgICAgIGxldCByb3RhdGlvbiA9IGdhbWUuZ2FtZVV0aWxzLmdldFJvdGF0aW9uKHAsIHBvcyk7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5zY2FsZVggPCAwKSB7XHJcbiAgICAgICAgICAgIHJvdGF0aW9uID0gcm90YXRpb24gLSA5MCAtIHRoaXMud2VhcG9uRGF0YVt0aGlzLndlYXBvbkluZGV4XS5yb3RhdGlvbjtcclxuICAgICAgICAgICAgcm90YXRpb24gPSAzNjAgLSByb3RhdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcm90YXRpb24gPSByb3RhdGlvbiAtIDkwICsgdGhpcy53ZWFwb25EYXRhW3RoaXMud2VhcG9uSW5kZXhdLnJvdGF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByb3RhdGlvbiA9IGdhbWUuZ2FtZVV0aWxzLnN0YW5kYXJkUm90YXRpb24ocm90YXRpb24pO1xyXG4gICAgICAgIGlmIChnYW1lLmdhbWVVdGlscy5saW1pdFJvdGF0aW9uKHJvdGF0aW9uLCB0aGlzLnJvdGF0aW9uTGltaXQxLCB0aGlzLnJvdGF0aW9uTGltaXQyKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFybS5yb3RhdGlvbiA9IHJvdGF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmFybVJvdGF0aW9uID0gZ2FtZS5nYW1lVXRpbHMuc3RhbmRhcmRSb3RhdGlvbih0aGlzLmFybS5yb3RhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbih0aGlzLm5vZGUuc2NhbGVYICogLTEpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFpbVBvcyhwb3MpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzaW5pdCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChnYW1lLmlzT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgIHBvcy55ICs9IHRoaXMud2VhcG9uRGF0YVt0aGlzLndlYXBvbkluZGV4XS5haW1ZO1xyXG4gICAgICAgIGxldCBwID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLmFybVBvcyk7XHJcbiAgICAgICAgbGV0IHJvdGF0aW9uID0gZ2FtZS5nYW1lVXRpbHMuZ2V0Um90YXRpb24ocCwgcG9zKTtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnNjYWxlWCA8IDApIHtcclxuICAgICAgICAgICAgcm90YXRpb24gPSByb3RhdGlvbiAtIDkwIC0gdGhpcy53ZWFwb25EYXRhW3RoaXMud2VhcG9uSW5kZXhdLnJvdGF0aW9uO1xyXG4gICAgICAgICAgICByb3RhdGlvbiA9IDM2MCAtIHJvdGF0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByb3RhdGlvbiA9IHJvdGF0aW9uIC0gOTAgKyB0aGlzLndlYXBvbkRhdGFbdGhpcy53ZWFwb25JbmRleF0ucm90YXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvdGF0aW9uID0gZ2FtZS5nYW1lVXRpbHMuc3RhbmRhcmRSb3RhdGlvbihyb3RhdGlvbik7XHJcbiAgICAgICAgaWYgKGdhbWUuZ2FtZVV0aWxzLmxpbWl0Um90YXRpb24ocm90YXRpb24sIHRoaXMucm90YXRpb25MaW1pdDEsIHRoaXMucm90YXRpb25MaW1pdDIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJtLnJvdGF0aW9uID0gcm90YXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuYXJtUm90YXRpb24gPSBnYW1lLmdhbWVVdGlscy5zdGFuZGFyZFJvdGF0aW9uKHRoaXMuYXJtLnJvdGF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlRGlyZWN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IHRoaXMuc2NhbGVYICogdmFsdWU7XHJcbiAgICB9LFxyXG4gICAgLy/liIfmjaLnmq7ogqQg5q2m5ZmoXHJcbiAgICBzd2l0Y2hTa2luKGlkeCkge1xyXG4gICAgICAgIGlmIChnYW1lLmlzT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgIGlmICghaWR4KSB7XHJcbiAgICAgICAgICAgIHRoaXMud2VhcG9uSW5kZXggKz0gMTtcclxuICAgICAgICAgICAgaWYgKHRoaXMud2VhcG9uSW5kZXggPiA0KSB0aGlzLndlYXBvbkluZGV4ID0gMTtcclxuICAgICAgICAgICAgaWR4ID0gdGhpcy53ZWFwb25JbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53ZWFwb25JbmRleCA9IGlkeDtcclxuICAgICAgICBnYW1lLmVtaXQoXCJ3ZWFwb25JbmRleFwiLCB0aGlzLndlYXBvbkluZGV4KTtcclxuICAgICAgICBsZXQgd2VhcG9uID0gdGhpcy53ZWFwb25EYXRhW3RoaXMud2VhcG9uSW5kZXhdXHJcbiAgICAgICAgdGhpcy5zcC5zZXRTa2luKHdlYXBvbi5uYW1lKTtcclxuICAgICAgICB0aGlzLndlYXBvbiA9IHRoaXMuc3AuZmluZEJvbmUoXCJyb290X3dlYXBvbnNcIiArIGlkeCk7XHJcbiAgICAgICAgdGhpcy53ZWFwb25Qb3MgPSBjYy52Mih0aGlzLndlYXBvbi53b3JsZFgsIHRoaXMud2VhcG9uLndvcmxkWSk7XHJcbiAgICAgICAgLy8gdGhpcy5hdHRhY2tUaW1lU2NhbGUxID0gMjMwIC8gKHdlYXBvbi5zZW5kVGltZSAqIDEwMDApO1xyXG4gICAgICAgIC8vIHRoaXMuYXR0YWNrVGltZVNjYWxlMiA9IDQ1MCAvICh3ZWFwb24uc2VuZFRpbWUgKiAxMDAwKTtcclxuICAgIH0sXHJcbiAgICAvL3NldE1peCDkuLrmiYDmnInlhbPplK7luKforr7lrprmt7flkIjlj4rmt7flkIjml7bpl7TvvIjku47lvZPliY3lgLzlvIDlp4vlt67lgLzvvInjgIJcclxuICAgIHNldE1peChhbmltMSwgYW5pbTIsIG1peFRpbWUpIHtcclxuICAgICAgICAvLyB0aGlzLnNwLnNldE1peChhbmltMSwgYW5pbTIsIG1peFRpbWUpO1xyXG4gICAgICAgIC8vIHRoaXMuc3Auc2V0TWl4KGFuaW0yLCBhbmltMSwgbWl4VGltZSk7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKGdhbWUuaXNPdmVyKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc2luaXQpIHJldHVybjtcclxuICAgICAgICB0aGlzLnNlbmRUaW1lICs9IGR0O1xyXG4gICAgICAgIGlmICghZ2FtZS50b3VjaERvd24pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgd2VhcG9uID0gdGhpcy53ZWFwb25EYXRhW3RoaXMud2VhcG9uSW5kZXhdO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbmRUaW1lID4gd2VhcG9uLnNlbmRUaW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZFRpbWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFjdGlvbihnYW1lLmdhbWVBY3Rpb24uYXR0YWNrKTtcclxuICAgICAgICAgICAgbGV0IGFybVBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5hcm1Qb3MpO1xyXG4gICAgICAgICAgICB0aGlzLndlYXBvblBvcyA9IGNjLnYyKHRoaXMud2VhcG9uLndvcmxkWCwgdGhpcy53ZWFwb24ud29ybGRZKTtcclxuICAgICAgICAgICAgbGV0IHdlYXBvblBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy53ZWFwb25Qb3MpO1xyXG4gICAgICAgICAgICBsZXQgcm90YXRpb24gPSBnYW1lLmdhbWVVdGlscy5nZXRSb3RhdGlvbihhcm1Qb3MsIHdlYXBvblBvcyk7XHJcbiAgICAgICAgICAgIGxldCBidWxsZXROYW1lID0gXCJidWxsZXRcIiArIHRoaXMud2VhcG9uSW5kZXg7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG9vdERhdGEpIHRoaXMuc2hvb3REYXRhID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3REYXRhLnByZWZhYk5hbWUgPSBidWxsZXROYW1lOy8v6aKE5Yi25L2T5ZCN56ewXHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3REYXRhLnYgPSB3ZWFwb25Qb3M7IC8v5L2N572uXHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3REYXRhLmFuZ2xlID0gcm90YXRpb247Ly/op5LluqZcclxuICAgICAgICAgICAgdGhpcy5zaG9vdERhdGEuZ3JvdXAgPSBcIm15YnVsbFwiOyAvL+e7hFxyXG4gICAgICAgICAgICB0aGlzLnNob290RGF0YS5hdHRhY2sgPSB3ZWFwb24uYXR0YWNrO1xyXG4gICAgICAgICAgICBnYW1lLmVtaXQoXCJzaG9vdFwiLCB0aGlzLnNob290RGF0YSk7XHJcbiAgICAgICAgICAgIC8vZ2FtZS5lbWl0KFwic2hvb3RcIiwgYnVsbGV0TmFtZSwgd2VhcG9uUG9zLCByb3RhdGlvbiwgXCJteWJ1bGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==