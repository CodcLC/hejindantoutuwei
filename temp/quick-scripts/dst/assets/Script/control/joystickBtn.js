
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/control/joystickBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b42dfgD73ZJNIr//6fSEwUT', 'joystickBtn');
// Script/control/joystickBtn.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  onEnable: function onEnable() {
    this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
  },
  onDisable: function onDisable() {
    this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
    this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
    this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
  },
  _onTouchStart: function _onTouchStart(e) {
    this._isTouch = true;
    var pos = e.getLocation();
    var jPos = this.node.convertToNodeSpaceAR(pos);

    if (jPos.x > 0) {
      this.key_down(game.gameControl.right);
    } else {
      this.key_down(game.gameControl.left);
    } //cc.log("_onTouchStart", pos.x, jPos.x);

  },
  _onTouchMove: function _onTouchMove(e) {
    //cc.log("_onTouchMove", this._isTouch);
    if (!this._isTouch) return;
    var pos = e.getLocation();
    var jPos = this.node.convertToNodeSpaceAR(pos);

    if (jPos.x > 0) {
      this.key_down(game.gameControl.right);
    } else {
      this.key_down(game.gameControl.left);
    }
  },
  _onTouchEnd: function _onTouchEnd(e) {
    this._isTouch = false;
    var pos = e.getLocation();
    var jPos = this.node.convertToNodeSpaceAR(pos);

    if (jPos.x > 0) {
      this.key_up(game.gameControl.right);
    } else {
      this.key_up(game.gameControl.left);
    }
  },
  key_down: function key_down(control) {
    if (this.control == control) return;

    if (this.control) {
      this.key_up(this.control);
    }

    this.control = control;
    game.emit("key_down", control);
  },
  key_up: function key_up(control) {
    this.control = 0;
    game.emit("key_up", control);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb250cm9sXFxqb3lzdGlja0J0bi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uRW5hYmxlIiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiX29uVG91Y2hTdGFydCIsIlRPVUNIX01PVkUiLCJfb25Ub3VjaE1vdmUiLCJUT1VDSF9FTkQiLCJfb25Ub3VjaEVuZCIsIlRPVUNIX0NBTkNFTCIsIm9uRGlzYWJsZSIsIm9mZiIsImUiLCJfaXNUb3VjaCIsInBvcyIsImdldExvY2F0aW9uIiwialBvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwieCIsImtleV9kb3duIiwiZ2FtZSIsImdhbWVDb250cm9sIiwicmlnaHQiLCJsZWZ0Iiwia2V5X3VwIiwiY29udHJvbCIsImVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRSxFQUZQO0FBR0w7QUFDQTtBQUNBQyxFQUFBQSxRQUxLLHNCQUtNO0FBQ1AsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFOLEVBQUUsQ0FBQ08sSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxXQUEvQixFQUE0QyxLQUFLQyxhQUFqRCxFQUFnRSxJQUFoRTtBQUNBLFNBQUtMLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQkcsVUFBL0IsRUFBMkMsS0FBS0MsWUFBaEQsRUFBOEQsSUFBOUQ7QUFDQSxTQUFLUCxJQUFMLENBQVVDLEVBQVYsQ0FBYU4sRUFBRSxDQUFDTyxJQUFILENBQVFDLFNBQVIsQ0FBa0JLLFNBQS9CLEVBQTBDLEtBQUtDLFdBQS9DLEVBQTRELElBQTVEO0FBQ0EsU0FBS1QsSUFBTCxDQUFVQyxFQUFWLENBQWFO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LElBQUwsQ0FBVSxVQUFWLEVBQXNCRCxPQUF0QjtBQUNILEdBNURJO0FBNkRMRCxFQUFBQSxNQTdESyxrQkE2REVDLE9BN0RGLEVBNkRXO0FBQ1osU0FBS0EsT0FBTCxHQUFlLENBQWY7QUFDQUwsSUFBQUEsSUFBSSxDQUFDTSxJQUFMLENBQVUsUUFBVixFQUFvQkQsT0FBcEI7QUFDSDtBQWhFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7fSxcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl9vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLl9vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5fb25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX29uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLl9vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLl9vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBfb25Ub3VjaFN0YXJ0KGUpIHtcclxuICAgICAgICB0aGlzLl9pc1RvdWNoID0gdHJ1ZTtcclxuICAgICAgICB2YXIgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHZhciBqUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgaWYgKGpQb3MueCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlfZG93bihnYW1lLmdhbWVDb250cm9sLnJpZ2h0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlfZG93bihnYW1lLmdhbWVDb250cm9sLmxlZnQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY2MubG9nKFwiX29uVG91Y2hTdGFydFwiLCBwb3MueCwgalBvcy54KTtcclxuICAgIH0sXHJcbiAgICBfb25Ub3VjaE1vdmUoZSkge1xyXG4gICAgICAgIC8vY2MubG9nKFwiX29uVG91Y2hNb3ZlXCIsIHRoaXMuX2lzVG91Y2gpO1xyXG4gICAgICAgIGlmICghdGhpcy5faXNUb3VjaClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBwb3MgPSBlLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgdmFyIGpQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcclxuICAgICAgICBpZiAoalBvcy54ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmtleV9kb3duKGdhbWUuZ2FtZUNvbnRyb2wucmlnaHQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmtleV9kb3duKGdhbWUuZ2FtZUNvbnRyb2wubGVmdClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgX29uVG91Y2hFbmQoZSkge1xyXG4gICAgICAgIHRoaXMuX2lzVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICB2YXIgcG9zID0gZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHZhciBqUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcbiAgICAgICAgaWYgKGpQb3MueCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlfdXAoZ2FtZS5nYW1lQ29udHJvbC5yaWdodClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5X3VwKGdhbWUuZ2FtZUNvbnRyb2wubGVmdClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAga2V5X2Rvd24oY29udHJvbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2wgPT0gY29udHJvbCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlfdXAodGhpcy5jb250cm9sKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcclxuICAgICAgICBnYW1lLmVtaXQoXCJrZXlfZG93blwiLCBjb250cm9sKTtcclxuICAgIH0sXHJcbiAgICBrZXlfdXAoY29udHJvbCkge1xyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IDA7XHJcbiAgICAgICAgZ2FtZS5lbWl0KFwia2V5X3VwXCIsIGNvbnRyb2wpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==