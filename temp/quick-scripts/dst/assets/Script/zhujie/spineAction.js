
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/zhujie/spineAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52925FT5Z5J7J7AyDvE14Jp', 'spineAction');
// Script/zhujie/spineAction.js

"use strict";

cc.Class({
  //动画播放类
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    this.sp = this.node.getComponent(sp.Skeleton); //获取骨骼动画组件

    this.data = this.sp._skeleton.data; // SkeletonData 骨架数据

    this.animations = {};

    for (var i in this.data.animations) {
      this.animations[animation.name] = {
        trackIndex: parseInt(i),
        name: animation.name,
        duration: animation.duration
      };
    }

    this.weaponData = require("zhujueConfig"); //武器数据

    this.sp.setStartListener(function (trackEntry) {
      self.animationName = trackEntry.animation ? trackEntry.animation.name : "";

      if (self.animationName === 'attack1') {
        this.sp.timeScale = self.attackTimeScale1;
      } else if (self.animationName === 'attack2') {
        this.sp.timeScale = self.attackTimeScale2;
      } else {
        this.sp.timeScale = 1;
      }
    }.bind(this));
    this.sp.setCompleteListener(function (trackEntry) {
      var animationName = trackEntry.animation ? trackEntry.animation.name : "";

      if (animationName === 'attack1' || animationName === 'attack2') {}
    }.bind(this));
  },
  onDestroy: function onDestroy() {
    if (!this.parent) return; // this.parent.off("roleState", this.setRoleState, this);
    // this.parent.off("changeDirection", this.changeDirection, this);

    this.parent.off("switchSkin", this.switchSkin, this); // game.off("stage.touch", this.stageTouch, this);
    // game.off("gameOver", this.gameOver, this);
  },
  addEvent: function addEvent() {
    // this.parent.on("roleState", this.setRoleState, this);
    // this.parent.on("changeDirection", this.changeDirection, this);
    this.parent.on("switchSkin", this.switchSkin, this); // game.on("stage.touch", this.stageTouch, this);
    // game.on("gameOver", this.gameOver, this);
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
    this.weaponPos = cc.v2(this.weapon.worldX, this.weapon.worldY);
    this.attackTimeScale1 = 230 / (weapon.sendTime * 1000);
    this.attackTimeScale2 = 450 / (weapon.sendTime * 1000);
  },

  /**
   !#en
   Mix applies all keyframe values,
   interpolated for the specified time and mixed with the current values.
   !#zh 为所有关键帧设定混合及混合时间（从当前值开始差值）。
   @param fromAnimation fromAnimation
   @param toAnimation toAnimation
   @param duration duration
   */
  setMix: function setMix(anim1, anim2, mixTime) {
    this.sp.setMix(anim1, anim2, mixTime);
    this.sp.setMix(anim2, anim1, mixTime);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx6aHVqaWVcXHNwaW5lQWN0aW9uLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwic3AiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU2tlbGV0b24iLCJkYXRhIiwiX3NrZWxldG9uIiwiYW5pbWF0aW9ucyIsImkiLCJhbmltYXRpb24iLCJuYW1lIiwidHJhY2tJbmRleCIsInBhcnNlSW50IiwiZHVyYXRpb24iLCJ3ZWFwb25EYXRhIiwicmVxdWlyZSIsInNldFN0YXJ0TGlzdGVuZXIiLCJ0cmFja0VudHJ5Iiwic2VsZiIsImFuaW1hdGlvbk5hbWUiLCJ0aW1lU2NhbGUiLCJhdHRhY2tUaW1lU2NhbGUxIiwiYXR0YWNrVGltZVNjYWxlMiIsImJpbmQiLCJzZXRDb21wbGV0ZUxpc3RlbmVyIiwib25EZXN0cm95IiwicGFyZW50Iiwib2ZmIiwic3dpdGNoU2tpbiIsImFkZEV2ZW50Iiwib24iLCJpZHgiLCJnYW1lIiwiaXNPdmVyIiwid2VhcG9uSW5kZXgiLCJlbWl0Iiwid2VhcG9uIiwic2V0U2tpbiIsImZpbmRCb25lIiwid2VhcG9uUG9zIiwidjIiLCJ3b3JsZFgiLCJ3b3JsZFkiLCJzZW5kVGltZSIsInNldE1peCIsImFuaW0xIiwiYW5pbTIiLCJtaXhUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMO0FBQ0EsYUFBU0QsRUFBRSxDQUFDRSxTQUZQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBSUxDLEVBQUFBLE1BSkssb0JBSUk7QUFDTCxTQUFLQyxFQUFMLEdBQVUsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCRixFQUFFLENBQUNHLFFBQTFCLENBQVYsQ0FESyxDQUMwQzs7QUFDL0MsU0FBS0MsSUFBTCxHQUFZLEtBQUtKLEVBQUwsQ0FBUUssU0FBUixDQUFrQkQsSUFBOUIsQ0FG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TCxHQUFjLEtBQUtuQyxFQUFMLENBQVFxQyxRQUFSLENBQWlCLGlCQUFpQlAsR0FBbEMsQ0FBZDtBQUNBLFNBQUtRLFNBQUwsR0FBaUIzQyxFQUFFLENBQUM0QyxFQUFILENBQU0sS0FBS0osTUFBTCxDQUFZSyxNQUFsQixFQUEwQixLQUFLTCxNQUFMLENBQVlNLE1BQXRDLENBQWpCO0FBQ0EsU0FBS3JCLGdCQUFMLEdBQXdCLE9BQU9lLE1BQU0sQ0FBQ08sUUFBUCxHQUFrQixJQUF6QixDQUF4QjtBQUNBLFNBQUtyQixnQkFBTCxHQUF3QixPQUFPYyxNQUFNLENBQUNPLFFBQVAsR0FBa0IsSUFBekIsQ0FBeEI7QUFDSCxHQWpFSTs7QUFrRUw7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0lDLEVBQUFBLE1BM0VLLGtCQTJFRUMsS0EzRUYsRUEyRVNDLEtBM0VULEVBMkVnQkMsT0EzRWhCLEVBMkV5QjtBQUMxQixTQUFLOUMsRUFBTCxDQUFRMkMsTUFBUixDQUFlQyxLQUFmLEVBQXNCQyxLQUF0QixFQUE2QkMsT0FBN0I7QUFDQSxTQUFLOUMsRUFBTCxDQUFRMkMsTUFBUixDQUFlRSxLQUFmLEVBQXNCRCxLQUF0QixFQUE2QkUsT0FBN0I7QUFDSDtBQTlFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICAvL+WKqOeUu+aSreaUvuexu1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge30sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5zcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pOyAvL+iOt+WPlumqqOmqvOWKqOeUu+e7hOS7tlxyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuc3AuX3NrZWxldG9uLmRhdGE7IC8vIFNrZWxldG9uRGF0YSDpqqjmnrbmlbDmja5cclxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZGF0YS5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uc1thbmltYXRpb24ubmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICB0cmFja0luZGV4OiBwYXJzZUludChpKSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGFuaW1hdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGFuaW1hdGlvbi5kdXJhdGlvblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndlYXBvbkRhdGEgPSByZXF1aXJlKFwiemh1anVlQ29uZmlnXCIpOy8v5q2m5Zmo5pWw5o2uXHJcbiAgICAgICAgdGhpcy5zcC5zZXRTdGFydExpc3RlbmVyKGZ1bmN0aW9uICh0cmFja0VudHJ5KSB7XHJcbiAgICAgICAgICAgIHNlbGYuYW5pbWF0aW9uTmFtZSA9IHRyYWNrRW50cnkuYW5pbWF0aW9uID8gdHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSA6IFwiXCI7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmFuaW1hdGlvbk5hbWUgPT09ICdhdHRhY2sxJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcC50aW1lU2NhbGUgPSBzZWxmLmF0dGFja1RpbWVTY2FsZTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5hbmltYXRpb25OYW1lID09PSAnYXR0YWNrMicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3AudGltZVNjYWxlID0gc2VsZi5hdHRhY2tUaW1lU2NhbGUyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcC50aW1lU2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnNwLnNldENvbXBsZXRlTGlzdGVuZXIoZnVuY3Rpb24gKHRyYWNrRW50cnkpIHtcclxuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbk5hbWUgPSB0cmFja0VudHJ5LmFuaW1hdGlvbiA/IHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgOiBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uTmFtZSA9PT0gJ2F0dGFjazEnIHx8IGFuaW1hdGlvbk5hbWUgPT09ICdhdHRhY2syJykge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkgcmV0dXJuO1xyXG4gICAgICAgIC8vIHRoaXMucGFyZW50Lm9mZihcInJvbGVTdGF0ZVwiLCB0aGlzLnNldFJvbGVTdGF0ZSwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5wYXJlbnQub2ZmKFwiY2hhbmdlRGlyZWN0aW9uXCIsIHRoaXMuY2hhbmdlRGlyZWN0aW9uLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnBhcmVudC5vZmYoXCJzd2l0Y2hTa2luXCIsIHRoaXMuc3dpdGNoU2tpbiwgdGhpcyk7XHJcbiAgICAgICAgLy8gZ2FtZS5vZmYoXCJzdGFnZS50b3VjaFwiLCB0aGlzLnN0YWdlVG91Y2gsIHRoaXMpO1xyXG4gICAgICAgIC8vIGdhbWUub2ZmKFwiZ2FtZU92ZXJcIiwgdGhpcy5nYW1lT3ZlciwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgYWRkRXZlbnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5wYXJlbnQub24oXCJyb2xlU3RhdGVcIiwgdGhpcy5zZXRSb2xlU3RhdGUsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMucGFyZW50Lm9uKFwiY2hhbmdlRGlyZWN0aW9uXCIsIHRoaXMuY2hhbmdlRGlyZWN0aW9uLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnBhcmVudC5vbihcInN3aXRjaFNraW5cIiwgdGhpcy5zd2l0Y2hTa2luLCB0aGlzKTtcclxuICAgICAgICAvLyBnYW1lLm9uKFwic3RhZ2UudG91Y2hcIiwgdGhpcy5zdGFnZVRvdWNoLCB0aGlzKTtcclxuICAgICAgICAvLyBnYW1lLm9uKFwiZ2FtZU92ZXJcIiwgdGhpcy5nYW1lT3ZlciwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgLy/liIfmjaLnmq7ogqQg5q2m5ZmoXHJcbiAgICBzd2l0Y2hTa2luKGlkeCkge1xyXG4gICAgICAgIGlmIChnYW1lLmlzT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgIGlmICghaWR4KSB7XHJcbiAgICAgICAgICAgIHRoaXMud2VhcG9uSW5kZXggKz0gMTtcclxuICAgICAgICAgICAgaWYgKHRoaXMud2VhcG9uSW5kZXggPiA0KSB0aGlzLndlYXBvbkluZGV4ID0gMTtcclxuICAgICAgICAgICAgaWR4ID0gdGhpcy53ZWFwb25JbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53ZWFwb25JbmRleCA9IGlkeDtcclxuICAgICAgICBnYW1lLmVtaXQoXCJ3ZWFwb25JbmRleFwiLCB0aGlzLndlYXBvbkluZGV4KTtcclxuICAgICAgICB2YXIgd2VhcG9uID0gdGhpcy53ZWFwb25EYXRhW3RoaXMud2VhcG9uSW5kZXhdO1xyXG4gICAgICAgIHRoaXMuc3Auc2V0U2tpbih3ZWFwb24ubmFtZSk7XHJcbiAgICAgICAgdGhpcy53ZWFwb24gPSB0aGlzLnNwLmZpbmRCb25lKFwicm9vdF93ZWFwb25zXCIgKyBpZHgpO1xyXG4gICAgICAgIHRoaXMud2VhcG9uUG9zID0gY2MudjIodGhpcy53ZWFwb24ud29ybGRYLCB0aGlzLndlYXBvbi53b3JsZFkpO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrVGltZVNjYWxlMSA9IDIzMCAvICh3ZWFwb24uc2VuZFRpbWUgKiAxMDAwKTtcclxuICAgICAgICB0aGlzLmF0dGFja1RpbWVTY2FsZTIgPSA0NTAgLyAod2VhcG9uLnNlbmRUaW1lICogMTAwMCk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgISNlblxyXG4gICAgIE1peCBhcHBsaWVzIGFsbCBrZXlmcmFtZSB2YWx1ZXMsXHJcbiAgICAgaW50ZXJwb2xhdGVkIGZvciB0aGUgc3BlY2lmaWVkIHRpbWUgYW5kIG1peGVkIHdpdGggdGhlIGN1cnJlbnQgdmFsdWVzLlxyXG4gICAgICEjemgg5Li65omA5pyJ5YWz6ZSu5bin6K6+5a6a5re35ZCI5Y+K5re35ZCI5pe26Ze077yI5LuO5b2T5YmN5YC85byA5aeL5beu5YC877yJ44CCXHJcbiAgICAgQHBhcmFtIGZyb21BbmltYXRpb24gZnJvbUFuaW1hdGlvblxyXG4gICAgIEBwYXJhbSB0b0FuaW1hdGlvbiB0b0FuaW1hdGlvblxyXG4gICAgIEBwYXJhbSBkdXJhdGlvbiBkdXJhdGlvblxyXG4gICAgICovXHJcbiAgICBzZXRNaXgoYW5pbTEsIGFuaW0yLCBtaXhUaW1lKSB7XHJcbiAgICAgICAgdGhpcy5zcC5zZXRNaXgoYW5pbTEsIGFuaW0yLCBtaXhUaW1lKTtcclxuICAgICAgICB0aGlzLnNwLnNldE1peChhbmltMiwgYW5pbTEsIG1peFRpbWUpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==