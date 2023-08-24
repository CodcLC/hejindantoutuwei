
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/test/drag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96091gf6RNBI6G7o1U+SQxb', 'drag');
// Script/test/drag.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, function (t) {}, this); //监听

    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.on_touch_move, this); //触摸抬起

    this.node.on(cc.Node.EventType.TOUCH_ENDED, function (t) {}, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (t) {}, this);
  },
  on_touch_move: function on_touch_move(t) {
    //定义一个n_pos变量存储当前触摸点的位置
    var n_pos = t.getLocation();
    var delta = t.getDelta();
    this.node.x += delta.x;
    this.node.y += delta.y;
  },
  start: function start() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx0ZXN0XFxkcmFnLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwidCIsIlRPVUNIX01PVkUiLCJvbl90b3VjaF9tb3ZlIiwiVE9VQ0hfRU5ERUQiLCJUT1VDSF9DQU5DRUwiLCJuX3BvcyIsImdldExvY2F0aW9uIiwiZGVsdGEiLCJnZXREZWx0YSIsIngiLCJ5Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRSxFQUZQO0FBR1Q7QUFDSUMsRUFBQUEsTUFKSyxvQkFJSTtBQUNMLFNBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsV0FBL0IsRUFBNEMsVUFBVUMsQ0FBVixFQUFhLENBQ3hELENBREQsRUFDRyxJQURILEVBREssQ0FHTDs7QUFDQSxTQUFLTCxJQUFMLENBQVVDLEVBQVYsQ0FBYU4sRUFBRSxDQUFDTyxJQUFILENBQVFDLFNBQVIsQ0FBa0JHLFVBQS9CLEVBQTJDLEtBQUtDLGFBQWhELEVBQStELElBQS9ELEVBSkssQ0FLTDs7QUFDQSxTQUFLUCxJQUFMLENBQVVDLEVBQVYsQ0FBYU4sRUFBRSxDQUFDTyxJQUFILENBQVFDLFNBQVIsQ0FBa0JLLFdBQS9CLEVBQTRDLFVBQVVILENBQVYsRUFBYSxDQUN4RCxDQURELEVBQ0csSUFESDtBQUVBLFNBQUtMLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQk0sWUFBL0IsRUFBNkMsVUFBVUosQ0FBVixFQUFhLENBQ3pELENBREQsRUFDRyxJQURIO0FBRUgsR0FkSTtBQWVMRSxFQUFBQSxhQWZLLHlCQWVTRixDQWZULEVBZVk7QUFDYjtBQUNBLFFBQUlLLEtBQUssR0FBR0wsQ0FBQyxDQUFDTSxXQUFGLEVBQVo7QUFDQSxRQUFJQyxLQUFLLEdBQUdQLENBQUMsQ0FBQ1EsUUFBRixFQUFaO0FBQ0EsU0FBS2IsSUFBTCxDQUFVYyxDQUFWLElBQWVGLEtBQUssQ0FBQ0UsQ0FBckI7QUFDQSxTQUFLZCxJQUFMLENBQVVlLENBQVYsSUFBZUgsS0FBSyxDQUFDRyxDQUFyQjtBQUNILEdBckJJO0FBc0JMQyxFQUFBQSxLQXRCSyxtQkFzQkcsQ0FDUDtBQXZCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7fSxcclxuLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIH0sIHRoaXMpXHJcbiAgICAgICAgLy/nm5HlkKxcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vbl90b3VjaF9tb3ZlLCB0aGlzKTtcclxuICAgICAgICAvL+inpuaRuOaKrOi1t1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkRFRCwgZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uX3RvdWNoX21vdmUodCkge1xyXG4gICAgICAgIC8v5a6a5LmJ5LiA5Liqbl9wb3Plj5jph4/lrZjlgqjlvZPliY3op6bmkbjngrnnmoTkvY3nva5cclxuICAgICAgICB2YXIgbl9wb3MgPSB0LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgdmFyIGRlbHRhID0gdC5nZXREZWx0YSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IGRlbHRhLng7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgKz0gZGVsdGEueTtcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==