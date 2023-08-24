
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/control/buttonControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dda4e5nWIFN9YJxcT6ANnAN', 'buttonControl');
// Script/control/buttonControl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    left: cc.Node,
    right: cc.Node,
    up: cc.Node,
    //down: cc.Node,
    switchBtn: cc.Node,
    shoot: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {},
  onEnable: function onEnable() {
    // this.left.on(cc.Node.EventType.TOUCH_START, this.leftTouchStart, this);
    // this.left.on(cc.Node.EventType.TOUCH_END, this.leftTouchEnd, this);
    // this.left.on(cc.Node.EventType.TOUCH_CANCEL, this.leftTouchEnd, this);
    // this.right.on(cc.Node.EventType.TOUCH_START, this.rightTouchStart, this);
    // this.right.on(cc.Node.EventType.TOUCH_END, this.rightTouchEnd, this);
    // this.right.on(cc.Node.EventType.TOUCH_CANCEL, this.rightTouchEnd, this);
    this.up.on(cc.Node.EventType.TOUCH_START, this.upTouchStart, this);
    this.up.on(cc.Node.EventType.TOUCH_END, this.upTouchEnd, this);
    this.up.on(cc.Node.EventType.TOUCH_CANCEL, this.upTouchEnd, this); // this.down.on(cc.Node.EventType.TOUCH_START, this.downTouchStart, this);
    // this.down.on(cc.Node.EventType.TOUCH_END, this.downTouchEnd, this);
    // this.down.on(cc.Node.EventType.TOUCH_CANCEL, this.downTouchEnd, this);

    this.switchBtn.on(cc.Node.EventType.TOUCH_START, this.switchTouchStart, this);
    this.switchBtn.on(cc.Node.EventType.TOUCH_END, this.switchTouchEnd, this);
    this.switchBtn.on(cc.Node.EventType.TOUCH_CANCEL, this.switchTouchEnd, this);
    this.shoot.on(cc.Node.EventType.TOUCH_START, this.shootStart, this);
    this.shoot.on(cc.Node.EventType.TOUCH_END, this.shootEnd, this);
    this.shoot.on(cc.Node.EventType.TOUCH_CANCEL, this.shootEnd, this);
  },
  onDisable: function onDisable() {
    // this.left.off(cc.Node.EventType.TOUCH_START, this.leftTouchStart, this);
    // this.left.off(cc.Node.EventType.TOUCH_END, this.leftTouchEnd, this);
    // this.left.off(cc.Node.EventType.TOUCH_CANCEL, this.leftTouchEnd, this);
    // this.right.off(cc.Node.EventType.TOUCH_START, this.rightTouchStart, this);
    // this.right.off(cc.Node.EventType.TOUCH_END, this.rightTouchEnd, this);
    // this.right.off(cc.Node.EventType.TOUCH_CANCEL, this.rightTouchEnd, this);
    this.up.off(cc.Node.EventType.TOUCH_START, this.upTouchStart, this);
    this.up.off(cc.Node.EventType.TOUCH_END, this.upTouchEnd, this);
    this.up.off(cc.Node.EventType.TOUCH_CANCEL, this.upTouchEnd, this); // this.down.off(cc.Node.EventType.TOUCH_START, this.downTouchStart, this);
    // this.down.off(cc.Node.EventType.TOUCH_END, this.downTouchEnd, this);
    // this.down.off(cc.Node.EventType.TOUCH_CANCEL, this.downTouchEnd, this);

    this.switchBtn.off(cc.Node.EventType.TOUCH_START, this.switchTouchStart, this);
    this.switchBtn.off(cc.Node.EventType.TOUCH_END, this.switchTouchEnd, this);
    this.switchBtn.off(cc.Node.EventType.TOUCH_CANCEL, this.switchTouchEnd, this);
    this.shoot.off(cc.Node.EventType.TOUCH_START, this.shootStart, this);
    this.shoot.off(cc.Node.EventType.TOUCH_END, this.shootEnd, this);
    this.shoot.off(cc.Node.EventType.TOUCH_CANCEL, this.shootEnd, this);
  },
  leftTouchStart: function leftTouchStart(e) {
    game.emit("key_down", game.gameControl.left);
  },
  leftTouchEnd: function leftTouchEnd(e) {
    game.emit("key_up", game.gameControl.left);
  },
  rightTouchStart: function rightTouchStart(e) {
    game.emit("key_down", game.gameControl.right);
  },
  rightTouchEnd: function rightTouchEnd(e) {
    game.emit("key_up", game.gameControl.right);
  },
  upTouchStart: function upTouchStart(e) {
    game.emit("key_down", game.gameControl.up);
  },
  upTouchEnd: function upTouchEnd(e) {
    game.emit("key_up", game.gameControl.up);
  },
  downTouchStart: function downTouchStart(e) {
    game.emit("key_down", game.gameControl.down);
  },
  downTouchEnd: function downTouchEnd(e) {
    game.emit("key_up", game.gameControl.down);
  },
  switchTouchStart: function switchTouchStart(e) {
    game.emit("key_down", game.gameControl.weapons);
  },
  switchTouchEnd: function switchTouchEnd(e) {
    game.emit("key_up", game.gameControl.weapons);
  },
  shootStart: function shootStart(touch) {
    game.emit("aim", true);
    game.touchDown = true;
  },
  shootEnd: function shootEnd(touch) {
    game.touchDown = false;
    game.emit("aim", false);
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb250cm9sXFxidXR0b25Db250cm9sLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGVmdCIsIk5vZGUiLCJyaWdodCIsInVwIiwic3dpdGNoQnRuIiwic2hvb3QiLCJvbkxvYWQiLCJvbkVuYWJsZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJ1cFRvdWNoU3RhcnQiLCJUT1VDSF9FTkQiLCJ1cFRvdWNoRW5kIiwiVE9VQ0hfQ0FOQ0VMIiwic3dpdGNoVG91Y2hTdGFydCIsInN3aXRjaFRvdWNoRW5kIiwic2hvb3RTdGFydCIsInNob290RW5kIiwib25EaXNhYmxlIiwib2ZmIiwibGVmdFRvdWNoU3RhcnQiLCJlIiwiZ2FtZSIsImVtaXQiLCJnYW1lQ29udHJvbCIsImxlZnRUb3VjaEVuZCIsInJpZ2h0VG91Y2hTdGFydCIsInJpZ2h0VG91Y2hFbmQiLCJkb3duVG91Y2hTdGFydCIsImRvd24iLCJkb3duVG91Y2hFbmQiLCJ3ZWFwb25zIiwidG91Y2giLCJ0b3VjaERvd24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUVKLEVBQUUsQ0FBQ0ssSUFERDtBQUVSQyxJQUFBQSxLQUFLLEVBQUVOLEVBQUUsQ0FBQ0ssSUFGRjtBQUdSRSxJQUFBQSxFQUFFLEVBQUVQLEVBQUUsQ0FBQ0ssSUFIQztBQUlSO0FBQ0FHLElBQUFBLFNBQVMsRUFBRVIsRUFBRSxDQUFDSyxJQUxOO0FBTVJJLElBQUFBLEtBQUssRUFBRVQsRUFBRSxDQUFDSztBQU5GLEdBRlA7QUFVTDtBQUNBSyxFQUFBQSxNQVhLLG9CQVdJLENBQ1IsQ0FaSTtBQWFMQyxFQUFBQSxRQWJLLHNCQWFNO0FBQ1A7QUFDQTtBQUNB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bnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxlZnQ6IGNjLk5vZGUsXHJcbiAgICAgICAgcmlnaHQ6IGNjLk5vZGUsXHJcbiAgICAgICAgdXA6IGNjLk5vZGUsXHJcbiAgICAgICAgLy9kb3duOiBjYy5Ob2RlLFxyXG4gICAgICAgIHN3aXRjaEJ0bjogY2MuTm9kZSxcclxuICAgICAgICBzaG9vdDogY2MuTm9kZVxyXG4gICAgfSxcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIC8vIHRoaXMubGVmdC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5sZWZ0VG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5sZWZ0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5sZWZ0VG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubGVmdC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMubGVmdFRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLnJpZ2h0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnJpZ2h0VG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5yaWdodC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMucmlnaHRUb3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5yaWdodC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMucmlnaHRUb3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51cC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy51cFRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXAub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnVwVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXAub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnVwVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMuZG93bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5kb3duVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5kb3duLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5kb3duVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMuZG93bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuZG93blRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnN3aXRjaEJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5zd2l0Y2hUb3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnN3aXRjaEJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuc3dpdGNoVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoQnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5zd2l0Y2hUb3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zaG9vdC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5zaG9vdFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNob290Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5zaG9vdEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zaG9vdC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuc2hvb3RFbmQsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICAvLyB0aGlzLmxlZnQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmxlZnRUb3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLmxlZnQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5sZWZ0VG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubGVmdC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLmxlZnRUb3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5yaWdodC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMucmlnaHRUb3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLnJpZ2h0Lm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMucmlnaHRUb3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5yaWdodC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnJpZ2h0VG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXAub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnVwVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51cC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnVwVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXAub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy51cFRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLmRvd24ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLmRvd25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLmRvd24ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5kb3duVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMuZG93bi5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLmRvd25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hCdG4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnN3aXRjaFRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoQnRuLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuc3dpdGNoVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoQnRuLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuc3dpdGNoVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2hvb3Qub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnNob290U3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2hvb3Qub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5zaG9vdEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zaG9vdC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnNob290RW5kLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBsZWZ0VG91Y2hTdGFydChlKSB7XHJcbiAgICAgICAgZ2FtZS5lbWl0KFwia2V5X2Rvd25cIiwgZ2FtZS5nYW1lQ29udHJvbC5sZWZ0KTtcclxuICAgIH0sXHJcbiAgICBsZWZ0VG91Y2hFbmQoZSkge1xyXG4gICAgICAgIGdhbWUuZW1pdChcImtleV91cFwiLCBnYW1lLmdhbWVDb250cm9sLmxlZnQpO1xyXG4gICAgfSxcclxuICAgIHJpZ2h0VG91Y2hTdGFydChlKSB7XHJcbiAgICAgICAgZ2FtZS5lbWl0KFwia2V5X2Rvd25cIiwgZ2FtZS5nYW1lQ29udHJvbC5yaWdodCk7XHJcbiAgICB9LFxyXG4gICAgcmlnaHRUb3VjaEVuZChlKSB7XHJcbiAgICAgICAgZ2FtZS5lbWl0KFwia2V5X3VwXCIsIGdhbWUuZ2FtZUNvbnRyb2wucmlnaHQpO1xyXG4gICAgfSxcclxuICAgIHVwVG91Y2hTdGFydChlKSB7XHJcbiAgICAgICAgZ2FtZS5lbWl0KFwia2V5X2Rvd25cIiwgZ2FtZS5nYW1lQ29udHJvbC51cCk7XHJcbiAgICB9LFxyXG4gICAgdXBUb3VjaEVuZChlKSB7XHJcbiAgICAgICAgZ2FtZS5lbWl0KFwia2V5X3VwXCIsIGdhbWUuZ2FtZUNvbnRyb2wudXApO1xyXG4gICAgfSxcclxuICAgIGRvd25Ub3VjaFN0YXJ0KGUpIHtcclxuICAgICAgICBnYW1lLmVtaXQoXCJrZXlfZG93blwiLCBnYW1lLmdhbWVDb250cm9sLmRvd24pO1xyXG4gICAgfSxcclxuICAgIGRvd25Ub3VjaEVuZChlKSB7XHJcbiAgICAgICAgZ2FtZS5lbWl0KFwia2V5X3VwXCIsIGdhbWUuZ2FtZUNvbnRyb2wuZG93bik7XHJcbiAgICB9LFxyXG4gICAgc3dpdGNoVG91Y2hTdGFydChlKSB7XHJcbiAgICAgICAgZ2FtZS5lbWl0KFwia2V5X2Rvd25cIiwgZ2FtZS5nYW1lQ29udHJvbC53ZWFwb25zKTtcclxuICAgIH0sXHJcbiAgICBzd2l0Y2hUb3VjaEVuZDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBnYW1lLmVtaXQoXCJrZXlfdXBcIiwgZ2FtZS5nYW1lQ29udHJvbC53ZWFwb25zKTtcclxuICAgIH0sXHJcbiAgICBzaG9vdFN0YXJ0KHRvdWNoKSB7XHJcbiAgICAgICAgZ2FtZS5lbWl0KFwiYWltXCIsIHRydWUpO1xyXG4gICAgICAgIGdhbWUudG91Y2hEb3duID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBzaG9vdEVuZCh0b3VjaCkge1xyXG4gICAgICAgIGdhbWUudG91Y2hEb3duID0gZmFsc2U7XHJcbiAgICAgICAgZ2FtZS5lbWl0KFwiYWltXCIsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==