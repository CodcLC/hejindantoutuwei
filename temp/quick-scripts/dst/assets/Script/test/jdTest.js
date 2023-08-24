
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/test/jdTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f77f2TzmxGNZiFfoKiJVQF', 'jdTest');
// Script/test/jdTest.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    label: cc.Node
  },
  onLoad: function onLoad() {
    this.node.emit("drawClear");
    this.node.removeAllChildren();
    var self = this;

    for (var i = 0; i < 8; i++) {
      var r = 360 * i / 8;
      var a = Math.PI / 180 * r;
      var v1 = cc.v2();
      var v2 = this.getNextPos(cc.v2(), 100, r);
      this.node.emit("lineTo", v1, v2, "#fff000");
      var label = cc.instantiate(this.label);
      this.node.addChild(label);
      label.x = v2.x;
      label.y = v2.y;
      label.getComponent(cc.Label).string = r;
    }

    this.node.emit("drawNow");
  },
  getNextPos: function getNextPos(pos, len, rotation) {
    var angle = rotation * Math.PI / 180;
    var x = pos.x + Math.cos(angle) * len;
    var y = pos.x + Math.sin(angle) * len;
    return cc.v2(x, y);
  },
  start: function start() {},
  onDestroy: function onDestroy() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx0ZXN0XFxqZFRlc3QuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsYWJlbCIsIk5vZGUiLCJvbkxvYWQiLCJub2RlIiwiZW1pdCIsInJlbW92ZUFsbENoaWxkcmVuIiwic2VsZiIsImkiLCJyIiwiYSIsIk1hdGgiLCJQSSIsInYxIiwidjIiLCJnZXROZXh0UG9zIiwiaW5zdGFudGlhdGUiLCJhZGRDaGlsZCIsIngiLCJ5IiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJwb3MiLCJsZW4iLCJyb3RhdGlvbiIsImFuZ2xlIiwiY29zIiwic2luIiwic3RhcnQiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUVKLEVBQUUsQ0FBQ0s7QUFERixHQUZQO0FBS0xDLEVBQUFBLE1BTEssb0JBS0k7QUFDTCxTQUFLQyxJQUFMLENBQVVDLElBQVYsQ0FBZSxXQUFmO0FBQ0EsU0FBS0QsSUFBTCxDQUFVRSxpQkFBVjtBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFYOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUN4QixVQUFJQyxDQUFDLEdBQUcsTUFBTUQsQ0FBTixHQUFVLENBQWxCO0FBQ0EsVUFBSUUsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEVBQUwsR0FBVSxHQUFWLEdBQWdCSCxDQUF4QjtBQUNBLFVBQUlJLEVBQUUsR0FBR2hCLEVBQUUsQ0FBQ2lCLEVBQUgsRUFBVDtBQUNBLFVBQUlBLEVBQUUsR0FBRyxLQUFLQyxVQUFMLENBQWdCbEIsRUFBRSxDQUFDaUIsRUFBSCxFQUFoQixFQUF5QixHQUF6QixFQUE4QkwsQ0FBOUIsQ0FBVDtBQUNBLFdBQUtMLElBQUwsQ0FBVUMsSUFBVixDQUFlLFFBQWYsRUFBeUJRLEVBQXpCLEVBQTZCQyxFQUE3QixFQUFpQyxTQUFqQztBQUNBLFVBQUliLEtBQUssR0FBR0osRUFBRSxDQUFDbUIsV0FBSCxDQUFlLEtBQUtmLEtBQXBCLENBQVo7QUFDQSxXQUFLRyxJQUFMLENBQVVhLFFBQVYsQ0FBbUJoQixLQUFuQjtBQUNBQSxNQUFBQSxLQUFLLENBQUNpQixDQUFOLEdBQVVKLEVBQUUsQ0FBQ0ksQ0FBYjtBQUNBakIsTUFBQUEsS0FBSyxDQUFDa0IsQ0FBTixHQUFVTCxFQUFFLENBQUNLLENBQWI7QUFDQWxCLE1BQUFBLEtBQUssQ0FBQ21CLFlBQU4sQ0FBbUJ2QixFQUFFLENBQUN3QixLQUF0QixFQUE2QkMsTUFBN0IsR0FBc0NiLENBQXRDO0FBQ0g7O0FBQ0QsU0FBS0wsSUFBTCxDQUFVQyxJQUFWLENBQWUsU0FBZjtBQUNILEdBdEJJO0FBdUJMVSxFQUFBQSxVQUFVLEVBQUUsb0JBQVVRLEdBQVYsRUFBZUMsR0FBZixFQUFvQkMsUUFBcEIsRUFBOEI7QUFDdEMsUUFBSUMsS0FBSyxHQUFHRCxRQUFRLEdBQUdkLElBQUksQ0FBQ0MsRUFBaEIsR0FBcUIsR0FBakM7QUFDQSxRQUFJTSxDQUFDLEdBQUdLLEdBQUcsQ0FBQ0wsQ0FBSixHQUFRUCxJQUFJLENBQUNnQixHQUFMLENBQVNELEtBQVQsSUFBa0JGLEdBQWxDO0FBQ0EsUUFBSUwsQ0FBQyxHQUFHSSxHQUFHLENBQUNMLENBQUosR0FBUVAsSUFBSSxDQUFDaUIsR0FBTCxDQUFTRixLQUFULElBQWtCRixHQUFsQztBQUNBLFdBQU8zQixFQUFFLENBQUNpQixFQUFILENBQU1JLENBQU4sRUFBU0MsQ0FBVCxDQUFQO0FBQ0gsR0E1Qkk7QUE2QkxVLEVBQUFBLEtBN0JLLG1CQTZCRyxDQUNQLENBOUJJO0FBK0JMQyxFQUFBQSxTQS9CSyx1QkErQk8sQ0FDWCxDQWhDSSxDQWlDTDs7QUFqQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxhYmVsOiBjYy5Ob2RlXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZHJhd0NsZWFyXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgciA9IDM2MCAqIGkgLyA4O1xyXG4gICAgICAgICAgICB2YXIgYSA9IE1hdGguUEkgLyAxODAgKiByO1xyXG4gICAgICAgICAgICB2YXIgdjEgPSBjYy52MigpO1xyXG4gICAgICAgICAgICB2YXIgdjIgPSB0aGlzLmdldE5leHRQb3MoY2MudjIoKSwgMTAwLCByKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJsaW5lVG9cIiwgdjEsIHYyLCBcIiNmZmYwMDBcIik7XHJcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGFiZWwpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobGFiZWwpO1xyXG4gICAgICAgICAgICBsYWJlbC54ID0gdjIueDtcclxuICAgICAgICAgICAgbGFiZWwueSA9IHYyLnk7XHJcbiAgICAgICAgICAgIGxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJkcmF3Tm93XCIpO1xyXG4gICAgfSxcclxuICAgIGdldE5leHRQb3M6IGZ1bmN0aW9uIChwb3MsIGxlbiwgcm90YXRpb24pIHtcclxuICAgICAgICB2YXIgYW5nbGUgPSByb3RhdGlvbiAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdmFyIHggPSBwb3MueCArIE1hdGguY29zKGFuZ2xlKSAqIGxlbjtcclxuICAgICAgICB2YXIgeSA9IHBvcy54ICsgTWF0aC5zaW4oYW5nbGUpICogbGVuO1xyXG4gICAgICAgIHJldHVybiBjYy52Mih4LCB5KTtcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICB9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=