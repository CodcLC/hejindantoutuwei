
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scene/roleEdit.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd066fGB33VOJ6HhdQQa86SB', 'roleEdit');
// Script/scene/roleEdit.js

"use strict";

var track = cc.Enum({
  idle: 1,
  run: 2,
  attack1: 3,
  attack2: 4,
  jump: 5
});
cc.Class({
  "extends": cc.Component,
  properties: {
    sp: sp.Skeleton
  },
  onLoad: function onLoad() {
    this.data = this.sp._skeleton.data; // SkeletonData 骨架数据、

    var opts = {};

    for (var i in this.data.animations) {
      var animation = this.data.animations[i];
      cc.log(animation);
      cc.log(animation.duration * 30);
      opts[animation.name] = animation.duration;
    }

    this.trackIndex = track.idle; //this.sp.timeScale = 0.5;

    var ra1 = this.animations.run.duration > this.animations.attack1.duration ? this.animations.attack1.duration : this.animations.run.duration;
    var ra2 = this.animations.run.duration > this.animations.attack2.duration ? this.animations.attack2.duration : this.animations.run.duration;
    this.setMix('run', 'attack2', ra1 - 0.1);
    this.setMix('run', 'attack1', ra2 - 0.1);
    this.sp.setAnimation(track.run, "run", true);
  },
  //setMix 为所有关键帧设定混合及混合时间（从当前值开始差值）。
  setMix: function setMix(anim1, anim2, mixTime) {
    this.sp.setMix(anim1, anim2, mixTime);
    this.sp.setMix(anim2, anim1, mixTime);
  },

  /********
   * 移动
   * **/
  onMove: function onMove() {
    this.sp.clearTrack(this.trackIndex);
    this.trackIndex = track.run;
    this.sp.addAnimation(track.run, "run", true, 0.1);
  },

  /********
   * 瞄准
   * ***/
  onAim: function onAim() {},

  /********
   * 攻击
   * ***/
  onAttack1: function onAttack1() {
    cc.log("攻击1"); // this.sp.clearTrack(this.trackIndex);
    // this.trackIndex = track.attack1;

    this.sp.addAnimation(track.attack1, "attack1", false, 0);
  },
  onAttack2: function onAttack2() {
    cc.log("攻击2"); // this.sp.timeScale = 1;
    // this.sp.clearTrack(this.trackIndex);
    // this.trackIndex = track.attack2;

    this.sp.addAnimation(track.attack2, "attack2", false, 0);
  },
  onjump: function onjump() {
    cc.log("跳跃");
    this.sp.clearTrack(this.trackIndex);
    this.trackIndex = track.jump;
    this.sp.addAnimation(track.jump, "jump", false, 0.2);
  },

  /***
   * 更换皮肤
   *
   * ****/
  switchSkin: function switchSkin() {},

  /*****
   *
   * ******/
  onClick: function onClick(event) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuZVxccm9sZUVkaXQuanMiXSwibmFtZXMiOlsidHJhY2siLCJjYyIsIkVudW0iLCJpZGxlIiwicnVuIiwiYXR0YWNrMSIsImF0dGFjazIiLCJqdW1wIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3AiLCJTa2VsZXRvbiIsIm9uTG9hZCIsImRhdGEiLCJfc2tlbGV0b24iLCJvcHRzIiwiaSIsImFuaW1hdGlvbnMiLCJhbmltYXRpb24iLCJsb2ciLCJkdXJhdGlvbiIsIm5hbWUiLCJ0cmFja0luZGV4IiwicmExIiwicmEyIiwic2V0TWl4Iiwic2V0QW5pbWF0aW9uIiwiYW5pbTEiLCJhbmltMiIsIm1peFRpbWUiLCJvbk1vdmUiLCJjbGVhclRyYWNrIiwiYWRkQW5pbWF0aW9uIiwib25BaW0iLCJvbkF0dGFjazEiLCJvbkF0dGFjazIiLCJvbmp1bXAiLCJzd2l0Y2hTa2luIiwib25DbGljayIsImV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLEtBQUssR0FBR0MsRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDaEJDLEVBQUFBLElBQUksRUFBRSxDQURVO0FBRWhCQyxFQUFBQSxHQUFHLEVBQUUsQ0FGVztBQUdoQkMsRUFBQUEsT0FBTyxFQUFFLENBSE87QUFJaEJDLEVBQUFBLE9BQU8sRUFBRSxDQUpPO0FBS2hCQyxFQUFBQSxJQUFJLEVBQUU7QUFMVSxDQUFSLENBQVo7QUFPQU4sRUFBRSxDQUFDTyxLQUFILENBQVM7QUFDTCxhQUFTUCxFQUFFLENBQUNRLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEVBQUUsRUFBRUEsRUFBRSxDQUFDQztBQURDLEdBRlA7QUFLTEMsRUFBQUEsTUFMSyxvQkFLSTtBQUNMLFNBQUtDLElBQUwsR0FBWSxLQUFLSCxFQUFMLENBQVFJLFNBQVIsQ0FBa0JELElBQTlCLENBREssQ0FDK0I7O0FBQ3BDLFFBQUlFLElB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QUFwQyxFQUErQyxLQUEvQyxFQUFzRCxDQUF0RDtBQUNILEdBdkRJO0FBd0RMK0IsRUFBQUEsTUF4REssb0JBd0RJO0FBQ0xwQyxJQUFBQSxFQUFFLENBQUNtQixHQUFILENBQU8sSUFBUDtBQUNBLFNBQUtULEVBQUwsQ0FBUXFCLFVBQVIsQ0FBbUIsS0FBS1QsVUFBeEI7QUFDQSxTQUFLQSxVQUFMLEdBQWtCdkIsS0FBSyxDQUFDTyxJQUF4QjtBQUNBLFNBQUtJLEVBQUwsQ0FBUXNCLFlBQVIsQ0FBcUJqQyxLQUFLLENBQUNPLElBQTNCLEVBQWlDLE1BQWpDLEVBQXlDLEtBQXpDLEVBQWdELEdBQWhEO0FBQ0gsR0E3REk7O0FBOERMO0FBQ0o7QUFDQTtBQUNBO0FBQ0krQixFQUFBQSxVQWxFSyx3QkFrRVEsQ0FDWixDQW5FSTs7QUFvRUw7QUFDSjtBQUNBO0FBQ0lDLEVBQUFBLE9BdkVLLG1CQXVFR0MsS0F2RUgsRUF1RVUsQ0FDZDtBQXhFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdHJhY2sgPSBjYy5FbnVtKHtcclxuICAgIGlkbGU6IDEsXHJcbiAgICBydW46IDIsXHJcbiAgICBhdHRhY2sxOiAzLFxyXG4gICAgYXR0YWNrMjogNCxcclxuICAgIGp1bXA6IDVcclxufSk7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzcDogc3AuU2tlbGV0b25cclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5zcC5fc2tlbGV0b24uZGF0YTsgLy8gU2tlbGV0b25EYXRhIOmqqOaetuaVsOaNruOAgVxyXG4gICAgICAgIHZhciBvcHRzID0ge31cclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuZGF0YS5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSB0aGlzLmRhdGEuYW5pbWF0aW9uc1tpXTtcclxuICAgICAgICAgICAgY2MubG9nKGFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIGNjLmxvZyhhbmltYXRpb24uZHVyYXRpb24gKiAzMCk7XHJcbiAgICAgICAgICAgIG9wdHNbYW5pbWF0aW9uLm5hbWVdID0gYW5pbWF0aW9uLmR1cmF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRyYWNrSW5kZXggPSB0cmFjay5pZGxlO1xyXG4gICAgICAgIC8vdGhpcy5zcC50aW1lU2NhbGUgPSAwLjU7XHJcbiAgICAgICAgdmFyIHJhMSA9IHRoaXMuYW5pbWF0aW9ucy5ydW4uZHVyYXRpb24gPiB0aGlzLmFuaW1hdGlvbnMuYXR0YWNrMS5kdXJhdGlvbiA/IHRoaXMuYW5pbWF0aW9ucy5hdHRhY2sxLmR1cmF0aW9uIDogdGhpcy5hbmltYXRpb25zLnJ1bi5kdXJhdGlvbjtcclxuICAgICAgICB2YXIgcmEyID0gdGhpcy5hbmltYXRpb25zLnJ1bi5kdXJhdGlvbiA+IHRoaXMuYW5pbWF0aW9ucy5hdHRhY2syLmR1cmF0aW9uID8gdGhpcy5hbmltYXRpb25zLmF0dGFjazIuZHVyYXRpb24gOiB0aGlzLmFuaW1hdGlvbnMucnVuLmR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMuc2V0TWl4KCdydW4nLCAnYXR0YWNrMicsIHJhMSAtIDAuMSk7XHJcbiAgICAgICAgdGhpcy5zZXRNaXgoJ3J1bicsICdhdHRhY2sxJywgcmEyIC0gMC4xKTtcclxuICAgICAgICB0aGlzLnNwLnNldEFuaW1hdGlvbih0cmFjay5ydW4sIFwicnVuXCIsIHRydWUpO1xyXG4gICAgfSxcclxuICAgIC8vc2V0TWl4IOS4uuaJgOacieWFs+mUruW4p+iuvuWumua3t+WQiOWPiua3t+WQiOaXtumXtO+8iOS7juW9k+WJjeWAvOW8gOWni+W3ruWAvO+8ieOAglxyXG4gICAgc2V0TWl4KGFuaW0xLCBhbmltMiwgbWl4VGltZSkge1xyXG4gICAgICAgIHRoaXMuc3Auc2V0TWl4KGFuaW0xLCBhbmltMiwgbWl4VGltZSk7XHJcbiAgICAgICAgdGhpcy5zcC5zZXRNaXgoYW5pbTIsIGFuaW0xLCBtaXhUaW1lKTtcclxuICAgIH0sXHJcbiAgICAvKioqKioqKipcclxuICAgICAqIOenu+WKqFxyXG4gICAgICogKiovXHJcbiAgICBvbk1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5zcC5jbGVhclRyYWNrKHRoaXMudHJhY2tJbmRleCk7XHJcbiAgICAgICAgdGhpcy50cmFja0luZGV4ID0gdHJhY2sucnVuO1xyXG4gICAgICAgIHRoaXMuc3AuYWRkQW5pbWF0aW9uKHRyYWNrLnJ1biwgXCJydW5cIiwgdHJ1ZSwgMC4xKTtcclxuICAgIH0sXHJcbiAgICAvKioqKioqKipcclxuICAgICAqIOeehOWHhlxyXG4gICAgICogKioqL1xyXG4gICAgb25BaW0oKSB7XHJcbiAgICB9LFxyXG4gICAgLyoqKioqKioqXHJcbiAgICAgKiDmlLvlh7tcclxuICAgICAqICoqKi9cclxuICAgIG9uQXR0YWNrMSgpIHtcclxuICAgICAgICBjYy5sb2coXCLmlLvlh7sxXCIpO1xyXG4gICAgICAgIC8vIHRoaXMuc3AuY2xlYXJUcmFjayh0aGlzLnRyYWNrSW5kZXgpO1xyXG4gICAgICAgIC8vIHRoaXMudHJhY2tJbmRleCA9IHRyYWNrLmF0dGFjazE7XHJcbiAgICAgICAgdGhpcy5zcC5hZGRBbmltYXRpb24odHJhY2suYXR0YWNrMSwgXCJhdHRhY2sxXCIsIGZhbHNlLCAwKTtcclxuICAgIH0sXHJcbiAgICBvbkF0dGFjazIoKSB7XHJcbiAgICAgICAgY2MubG9nKFwi5pS75Ye7MlwiKTtcclxuICAgICAgICAvLyB0aGlzLnNwLnRpbWVTY2FsZSA9IDE7XHJcbiAgICAgICAgLy8gdGhpcy5zcC5jbGVhclRyYWNrKHRoaXMudHJhY2tJbmRleCk7XHJcbiAgICAgICAgLy8gdGhpcy50cmFja0luZGV4ID0gdHJhY2suYXR0YWNrMjtcclxuICAgICAgICB0aGlzLnNwLmFkZEFuaW1hdGlvbih0cmFjay5hdHRhY2syLCBcImF0dGFjazJcIiwgZmFsc2UsIDApO1xyXG4gICAgfSxcclxuICAgIG9uanVtcCgpIHtcclxuICAgICAgICBjYy5sb2coXCLot7Pot4NcIik7XHJcbiAgICAgICAgdGhpcy5zcC5jbGVhclRyYWNrKHRoaXMudHJhY2tJbmRleCk7XHJcbiAgICAgICAgdGhpcy50cmFja0luZGV4ID0gdHJhY2suanVtcDtcclxuICAgICAgICB0aGlzLnNwLmFkZEFuaW1hdGlvbih0cmFjay5qdW1wLCBcImp1bXBcIiwgZmFsc2UsIDAuMik7XHJcbiAgICB9LFxyXG4gICAgLyoqKlxyXG4gICAgICog5pu05o2i55qu6IKkXHJcbiAgICAgKlxyXG4gICAgICogKioqKi9cclxuICAgIHN3aXRjaFNraW4oKSB7XHJcbiAgICB9LFxyXG4gICAgLyoqKioqXHJcbiAgICAgKlxyXG4gICAgICogKioqKioqL1xyXG4gICAgb25DbGljayhldmVudCkge1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==