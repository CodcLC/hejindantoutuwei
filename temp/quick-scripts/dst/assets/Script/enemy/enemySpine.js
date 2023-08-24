
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/enemy/enemySpine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53e9aIJWw9L671lHuSyQq66', 'enemySpine');
// Script/enemy/enemySpine.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  //骨骼动画精灵组件
  "extends": PoolComponent,
  properties: {},
  //该方法为生命周期方法，父类未必会有实现。
  onDestroy: function onDestroy() {},
  unuse: function unuse() {
    //this.clearTracks();
    this.parent.off("roleState", this.setRoleState, this);
    this.parent.off("attack", this.setRoleState, this);
    this.node.off("death", this.death, this);
    game.off("gameOver", this.gameOver, this);
    this.node.off("shoot_start", this.shoot_start, this);
    this.node.off("shoot_end", this.shoot_end, this);
    this.node.off("collision_shoot_start", this.collision_shoot_start, this);
    this.node.off("collision_shoot_end", this.shoot_end, this);
  },
  reuse: function reuse(data) {
    this.shootIng = false;
    if (!this.parent) this.parent = this.node.parent;
    this.node.getComponent(cc.Collider).enabled = true;
    this.parent.isDeath = this.node.isDeath = false;
    this.parent.on("roleState", this.setRoleState, this);
    this.parent.on("attack", this.attack, this);
    this.node.on("death", this.death, this);
    this.node.on("shoot_start", this.shoot_start, this);
    this.node.on("collision_shoot_start", this.collision_shoot_start, this);
    this.node.on("collision_shoot_end", this.shoot_end, this);
    this.node.on("shoot_end", this.shoot_end, this);
    game.on("gameOver", this.gameOver, this);
    this.node.y = data.zy;
  },
  shoot_end: function shoot_end() {
    this.sp.timeScale = 1;
  },
  shoot_start: function shoot_start() {
    this.sp.timeScale = 0.5;
  },
  collision_shoot_start: function collision_shoot_start(value) {
    value = value || 0.1;
    this.sp.timeScale = 0.1;
  },
  update: function update() {
    if (this.sp.timeScale < 1) this.sp.timeScale += 0.02;
  },
  gameOver: function gameOver() {
    this.changeAction("idle");
  },
  //死亡
  death: function death() {
    this.changeAction("death");
    this.parent.isDeath = this.node.isDeath = true;
    this.node.getComponent(cc.Collider).enabled = false;
  },
  onLoad: function onLoad() {
    if (!this.parent) this.parent = this.node.parent;
    this.sp = this.getComponent(sp.Skeleton); //获取骨骼动画组件
    // this.sp_skeleton_data = this.sp._skeleton.data;
    // this.sp_state = this.sp.getState();
    // this.sp_state_data = this.sp_state.data;
    // this.sp_state_data.defaultMix = 0.3;
    //  this.setMix('run', 'attack', 0.1);
    //  this.setMix('idle', 'attack', 0.1); //移动射击

    var spine = this.sp;
    this.shootIng = false;
    spine.setStartListener(function (trackEntry) {
      var animationName = trackEntry.animation ? trackEntry.animation.name : "";

      if (animationName == "attack") {
        this.shootIng = true;
        this.node.emit("shoot_start");
      }
    }.bind(this));
    spine.setCompleteListener(function (trackEntry) {
      var animationName = trackEntry.animation ? trackEntry.animation.name : "";

      if (animationName === 'death') {
        // this.parent.removeFromParent();
        var pool = this.parent.pool;

        if (pool) {
          pool.put(this.parent);
        } else {
          this.parent.removeFromParent(true);
          this.parent.destroy();
        }
      }

      if (animationName === "attack") {
        //this.node.emit("attackShoot", 2);
        this.shootIng = false;
        this.node.emit("shoot_end");
        this.sp.setAnimation(0, this.curAction, true);
      }
    }.bind(this));
  },
  //setMix 为所有关键帧设定混合及混合时间（从当前值开始差值）。
  setMix: function setMix(anim1, anim2, mixTime) {// this.sp.setMix(anim1, anim2, mixTime);
    // this.sp.setMix(anim2, anim1, mixTime);
  },
  attack: function attack(pos) {
    this.targetPos = pos; //目标位置

    this.changeAction("attack");
  },
  setRoleState: function setRoleState(value) {
    this.roleState = value; //角色状态  0=静止 1=移动 2=跳跃

    switch (value) {
      case 0:
        //静止
        this.changeAction("idle");
        break;

      case 1:
        //移动
        this.changeAction("run");
        break;

      case 2:
        //跳跃
        //  this.changeAction("jump");
        break;
    }
  },
  changeAction: function changeAction(value) {
    if (!this.node) return;
    if (this.node.isDeath) return;
    if (this.sp.animation == value) return;
    var self = this;

    switch (value) {
      case "death":
        this.sp.timeScale = 1;
        this.sp.setAnimation(0, "death", false);
        break;

      case "run":
        this.sp.timeScale = 1;
        this.sp.setAnimation(0, "run", true);
        this.curAction = "run";
        break;

      case "idle":
        this.sp.timeScale = 1;
        this.curAction = "idle";
        if (!this.shootIng) this.sp.setAnimation(0, "idle", true);
        break;

      case "attack":
        this.sp.setAnimation(0, "attack", false); // this.sp.setTrackEventListener(entry, function (trackIndex, event) {
        //     //   console.log("TrackEventListener :", event.data.name, Date.now());
        //     // let weapon = this.sp.findBone("root_qiang");
        //     // let weaponPos = cc.v2(weapon.worldX, weapon.worldY);
        //     // let worldPos = this.node.convertToWorldSpaceAR(weaponPos);
        //     // let rotation = gameUtils.getRotation(worldPos, this.targetPos);
        //     //self.node.emit("attack", 1, worldPos, 180, "enbull");
        //     this.node.emit("attackShoot", 3);
        // }.bind(this));

        break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxlbmVteVxcZW5lbXlTcGluZS5qcyJdLCJuYW1lcyI6WyJQb29sQ29tcG9uZW50IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwib25EZXN0cm95IiwidW51c2UiLCJwYXJlbnQiLCJvZmYiLCJzZXRSb2xlU3RhdGUiLCJub2RlIiwiZGVhdGgiLCJnYW1lIiwiZ2FtZU92ZXIiLCJzaG9vdF9zdGFydCIsInNob290X2VuZCIsImNvbGxpc2lvbl9zaG9vdF9zdGFydCIsInJldXNlIiwiZGF0YSIsInNob290SW5nIiwiZ2V0Q29tcG9uZW50IiwiQ29sbGlkZXIiLCJlbmFibGVkIiwiaXNEZWF0aCIsIm9uIiwiYXR0YWNrIiwieSIsInp5Iiwic3AiLCJ0aW1lU2NhbGUiLCJ2YWx1ZSIsInVwZGF0ZSIsImNoYW5nZUFjdGlvbiIsIm9uTG9hZCIsIlNrZWxldG9uIiwic3BpbmUiLCJzZXRTdGFydExpc3RlbmVyIiwidHJhY2tFbnRyeSIsImFuaW1hdGlvbk5hbWUiLCJhbmltYXRpb24iLCJuYW1lIiwiZW1pdCIsImJpbmQiLCJzZXRDb21wbGV0ZUxpc3RlbmVyIiwicG9vbCIsInB1dCIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95Iiwic2V0QW5pbWF0aW9uIiwiY3VyQWN0aW9uIiwic2V0TWl4IiwiYW5pbTEiLCJhbmltMiIsIm1peFRpbWUiLCJwb3MiLCJ0YXJnZXRQb3MiLCJyb2xlU3RhdGUiLCJzZWxmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBM0IsRUFBOEM7OztBQUM5Q0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTDtBQUNBLGFBQVNILGFBRko7QUFHTEksRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFJTDtBQUNBQyxFQUFBQSxTQUxLLHVCQUtPLENBQ1gsQ0FOSTtBQU9MQyxFQUFBQSxLQUFLLEVBQUUsaUJBQVk7QUFD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QixZQUFSLENBQXFCLENBQXJCLEVBQXdCLFFBQXhCLEVBQWtDLEtBQWxDLEVBREosQ0FFSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUEzQlI7QUE2Qkg7QUF4SkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFBvb2xDb21wb25lbnQgPSByZXF1aXJlKFwiUG9vbENvbXBvbmVudFwiKTsgLy/msaDlrZDnu4Tku7ZcclxuY2MuQ2xhc3Moe1xyXG4gICAgLy/pqqjpqrzliqjnlLvnsr7ngbXnu4Tku7ZcclxuICAgIGV4dGVuZHM6IFBvb2xDb21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7fSxcclxuICAgIC8v6K+l5pa55rOV5Li655Sf5ZG95ZGo5pyf5pa55rOV77yM54i257G75pyq5b+F5Lya5pyJ5a6e546w44CCXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICB9LFxyXG4gICAgdW51c2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvL3RoaXMuY2xlYXJUcmFja3MoKTtcclxuICAgICAgICB0aGlzLnBhcmVudC5vZmYoXCJyb2xlU3RhdGVcIiwgdGhpcy5zZXRSb2xlU3RhdGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGFyZW50Lm9mZihcImF0dGFja1wiLCB0aGlzLnNldFJvbGVTdGF0ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihcImRlYXRoXCIsIHRoaXMuZGVhdGgsIHRoaXMpO1xyXG4gICAgICAgIGdhbWUub2ZmKFwiZ2FtZU92ZXJcIiwgdGhpcy5nYW1lT3ZlciwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihcInNob290X3N0YXJ0XCIsIHRoaXMuc2hvb3Rfc3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoXCJzaG9vdF9lbmRcIiwgdGhpcy5zaG9vdF9lbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoXCJjb2xsaXNpb25fc2hvb3Rfc3RhcnRcIiwgdGhpcy5jb2xsaXNpb25fc2hvb3Rfc3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoXCJjb2xsaXNpb25fc2hvb3RfZW5kXCIsIHRoaXMuc2hvb3RfZW5kLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICByZXVzZTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnNob290SW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkgdGhpcy5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ29sbGlkZXIpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGFyZW50LmlzRGVhdGggPSB0aGlzLm5vZGUuaXNEZWF0aCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGFyZW50Lm9uKFwicm9sZVN0YXRlXCIsIHRoaXMuc2V0Um9sZVN0YXRlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnBhcmVudC5vbihcImF0dGFja1wiLCB0aGlzLmF0dGFjaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiZGVhdGhcIiwgdGhpcy5kZWF0aCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwic2hvb3Rfc3RhcnRcIiwgdGhpcy5zaG9vdF9zdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiY29sbGlzaW9uX3Nob290X3N0YXJ0XCIsIHRoaXMuY29sbGlzaW9uX3Nob290X3N0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJjb2xsaXNpb25fc2hvb3RfZW5kXCIsIHRoaXMuc2hvb3RfZW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJzaG9vdF9lbmRcIiwgdGhpcy5zaG9vdF9lbmQsIHRoaXMpO1xyXG4gICAgICAgIGdhbWUub24oXCJnYW1lT3ZlclwiLCB0aGlzLmdhbWVPdmVyLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUueSA9IGRhdGEuenk7XHJcbiAgICB9LFxyXG4gICAgc2hvb3RfZW5kKCkge1xyXG4gICAgICAgIHRoaXMuc3AudGltZVNjYWxlID0gMTtcclxuICAgIH0sXHJcbiAgICBzaG9vdF9zdGFydCgpIHtcclxuICAgICAgICB0aGlzLnNwLnRpbWVTY2FsZSA9IDAuNTtcclxuICAgIH0sXHJcbiAgICBjb2xsaXNpb25fc2hvb3Rfc3RhcnQodmFsdWUpIHtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlIHx8IDAuMTtcclxuICAgICAgICB0aGlzLnNwLnRpbWVTY2FsZSA9IDAuMTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3AudGltZVNjYWxlIDwgMSlcclxuICAgICAgICAgICAgdGhpcy5zcC50aW1lU2NhbGUgKz0gMC4wMlxyXG4gICAgfSxcclxuICAgIGdhbWVPdmVyKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlQWN0aW9uKFwiaWRsZVwiKTtcclxuICAgIH0sXHJcbiAgICAvL+atu+S6oVxyXG4gICAgZGVhdGgoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VBY3Rpb24oXCJkZWF0aFwiKTtcclxuICAgICAgICB0aGlzLnBhcmVudC5pc0RlYXRoID0gdGhpcy5ub2RlLmlzRGVhdGggPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkgdGhpcy5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIHRoaXMuc3AgPSB0aGlzLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7IC8v6I635Y+W6aqo6aq85Yqo55S757uE5Lu2XHJcbiAgICAgICAgLy8gdGhpcy5zcF9za2VsZXRvbl9kYXRhID0gdGhpcy5zcC5fc2tlbGV0b24uZGF0YTtcclxuICAgICAgICAvLyB0aGlzLnNwX3N0YXRlID0gdGhpcy5zcC5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIC8vIHRoaXMuc3Bfc3RhdGVfZGF0YSA9IHRoaXMuc3Bfc3RhdGUuZGF0YTtcclxuICAgICAgICAvLyB0aGlzLnNwX3N0YXRlX2RhdGEuZGVmYXVsdE1peCA9IDAuMztcclxuICAgICAgICAvLyAgdGhpcy5zZXRNaXgoJ3J1bicsICdhdHRhY2snLCAwLjEpO1xyXG4gICAgICAgIC8vICB0aGlzLnNldE1peCgnaWRsZScsICdhdHRhY2snLCAwLjEpOyAvL+enu+WKqOWwhOWHu1xyXG4gICAgICAgIGxldCBzcGluZSA9IHRoaXMuc3A7XHJcbiAgICAgICAgdGhpcy5zaG9vdEluZyA9IGZhbHNlO1xyXG4gICAgICAgIHNwaW5lLnNldFN0YXJ0TGlzdGVuZXIoZnVuY3Rpb24gKHRyYWNrRW50cnkpIHtcclxuICAgICAgICAgICAgbGV0IGFuaW1hdGlvbk5hbWUgPSB0cmFja0VudHJ5LmFuaW1hdGlvbiA/IHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgOiBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uTmFtZSA9PSBcImF0dGFja1wiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob290SW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwic2hvb3Rfc3RhcnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHNwaW5lLnNldENvbXBsZXRlTGlzdGVuZXIoZnVuY3Rpb24gKHRyYWNrRW50cnkpIHtcclxuICAgICAgICAgICAgbGV0IGFuaW1hdGlvbk5hbWUgPSB0cmFja0VudHJ5LmFuaW1hdGlvbiA/IHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgOiBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uTmFtZSA9PT0gJ2RlYXRoJykge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wYXJlbnQucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvb2wgPSB0aGlzLnBhcmVudC5wb29sO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvb2wpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb29sLnB1dCh0aGlzLnBhcmVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uTmFtZSA9PT0gXCJhdHRhY2tcIikge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLm5vZGUuZW1pdChcImF0dGFja1Nob290XCIsIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG9vdEluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJzaG9vdF9lbmRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwLnNldEFuaW1hdGlvbigwLCB0aGlzLmN1ckFjdGlvbiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfSxcclxuICAgIC8vc2V0TWl4IOS4uuaJgOacieWFs+mUruW4p+iuvuWumua3t+WQiOWPiua3t+WQiOaXtumXtO+8iOS7juW9k+WJjeWAvOW8gOWni+W3ruWAvO+8ieOAglxyXG4gICAgc2V0TWl4KGFuaW0xLCBhbmltMiwgbWl4VGltZSkge1xyXG4gICAgICAgIC8vIHRoaXMuc3Auc2V0TWl4KGFuaW0xLCBhbmltMiwgbWl4VGltZSk7XHJcbiAgICAgICAgLy8gdGhpcy5zcC5zZXRNaXgoYW5pbTIsIGFuaW0xLCBtaXhUaW1lKTtcclxuICAgIH0sXHJcbiAgICBhdHRhY2socG9zKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRQb3MgPSBwb3M7Ly/nm67moIfkvY3nva5cclxuICAgICAgICB0aGlzLmNoYW5nZUFjdGlvbihcImF0dGFja1wiKTtcclxuICAgIH0sXHJcbiAgICBzZXRSb2xlU3RhdGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnJvbGVTdGF0ZSA9IHZhbHVlOy8v6KeS6Imy54q25oCBICAwPemdmeatoiAxPeenu+WKqCAyPei3s+i3g1xyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiAvL+mdmeatolxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3Rpb24oXCJpZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTovL+enu+WKqFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3Rpb24oXCJydW5cIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOiAvL+i3s+i3g1xyXG4gICAgICAgICAgICAgICAgLy8gIHRoaXMuY2hhbmdlQWN0aW9uKFwianVtcFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjaGFuZ2VBY3Rpb24odmFsdWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuaXNEZWF0aCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnNwLmFuaW1hdGlvbiA9PSB2YWx1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkZWF0aFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcC50aW1lU2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcC5zZXRBbmltYXRpb24oMCwgXCJkZWF0aFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJ1blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcC50aW1lU2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcC5zZXRBbmltYXRpb24oMCwgXCJydW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckFjdGlvbiA9IFwicnVuXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImlkbGVcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3AudGltZVNjYWxlID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyQWN0aW9uID0gXCJpZGxlXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2hvb3RJbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhdHRhY2tcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3Auc2V0QW5pbWF0aW9uKDAsIFwiYXR0YWNrXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3Auc2V0VHJhY2tFdmVudExpc3RlbmVyKGVudHJ5LCBmdW5jdGlvbiAodHJhY2tJbmRleCwgZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgIGNvbnNvbGUubG9nKFwiVHJhY2tFdmVudExpc3RlbmVyIDpcIiwgZXZlbnQuZGF0YS5uYW1lLCBEYXRlLm5vdygpKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBsZXQgd2VhcG9uID0gdGhpcy5zcC5maW5kQm9uZShcInJvb3RfcWlhbmdcIik7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gbGV0IHdlYXBvblBvcyA9IGNjLnYyKHdlYXBvbi53b3JsZFgsIHdlYXBvbi53b3JsZFkpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIGxldCB3b3JsZFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIod2VhcG9uUG9zKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBsZXQgcm90YXRpb24gPSBnYW1lVXRpbHMuZ2V0Um90YXRpb24od29ybGRQb3MsIHRoaXMudGFyZ2V0UG9zKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvL3NlbGYubm9kZS5lbWl0KFwiYXR0YWNrXCIsIDEsIHdvcmxkUG9zLCAxODAsIFwiZW5idWxsXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5lbWl0KFwiYXR0YWNrU2hvb3RcIiwgMyk7XHJcbiAgICAgICAgICAgICAgICAvLyB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19