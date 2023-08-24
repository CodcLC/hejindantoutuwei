
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/test/draw.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b919eFObpRA1bvtwbXrw5sr', 'draw');
// Script/test/draw.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    this.node.on("draw", this.draw, this);
    this.node.on("drawClear", this.clear, this);
    this.node.on("lineTo", this.lineTo, this);
    this.node.on("drawNow", this.drawNow, this);
    this.colors = [cc.Color.YELLOW, cc.Color.BLUE, cc.Color.GREEN, cc.Color.RED];
    this.colorIndex = 0;
    game.root = this.node;
  },
  draw: function draw(p, c) {
    var g = this.getComponent(cc.Graphics);

    if (!c) {
      this.colorIndex++;
      this.colorIndex = this.colorIndex % this.colors.length;
      c = this.colors[this.colorIndex];
    } // g.lineWidth = 10;
    //  cc.log("绘制", p, c)


    g.strokeColor = c;
    g.moveTo(p.x - 100, p.y);
    g.lineTo(p.x + 100, p.y);
    g.moveTo(p.x, p.y - 100);
    g.lineTo(p.x, p.y + 100);
    g.close();
    g.stroke();
    g.fill();
  },
  lineTo: function lineTo(p1, p2, c) {
    var g = this.getComponent(cc.Graphics);
    c = c || '#222bff'; // g.lineWidth = 10;

    g.strokeColor = cc.Color.RED;
    g.moveTo(p1.x, p1.y);
    g.lineTo(p2.x, p2.y);
  },
  drawNow: function drawNow() {
    var g = this.getComponent(cc.Graphics);
    g.close();
    g.stroke();
    g.fill();
  },
  clear: function clear() {
    var g = this.getComponent(cc.Graphics); // g.lineWidth = 10;

    g.clear();
  },
  start: function start() {},
  onDestroy: function onDestroy() {
    this.node.off("draw", this.draw, this);
    this.node.off("drawClear", this.clear, this);
    this.node.off("lineTo", this.lineTo, this);
    this.node.off("drawNow", this.drawNow, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx0ZXN0XFxkcmF3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwibm9kZSIsIm9uIiwiZHJhdyIsImNsZWFyIiwibGluZVRvIiwiZHJhd05vdyIsImNvbG9ycyIsIkNvbG9yIiwiWUVMTE9XIiwiQkxVRSIsIkdSRUVOIiwiUkVEIiwiY29sb3JJbmRleCIsImdhbWUiLCJyb290IiwicCIsImMiLCJnIiwiZ2V0Q29tcG9uZW50IiwiR3JhcGhpY3MiLCJsZW5ndGgiLCJzdHJva2VDb2xvciIsIm1vdmVUbyIsIngiLCJ5IiwiY2xvc2UiLCJzdHJva2UiLCJmaWxsIiwicDEiLCJwMiIsInN0YXJ0Iiwib25EZXN0cm95Iiwib2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUUsRUFGUDtBQUdMQyxFQUFBQSxNQUhLLG9CQUdJO0FBQ0wsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsTUFBYixFQUFxQixLQUFLQyxJQUExQixFQUFnQyxJQUFoQztBQUNBLFNBQUtGLElBQUwsQ0FBVUMsRUFBVixDQUFhLFdBQWIsRUFBMEIsS0FBS0UsS0FBL0IsRUFBc0MsSUFBdEM7QUFDQSxTQUFLSCxJQUFMLENBQVVDLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLEtBQUtHLE1BQTVCLEVBQW9DLElBQXBDO0FBQ0EsU0FBS0osSUFBTCxDQUFVQyxFQUFWLENBQWEsU0FBYixFQUF3QixLQUFLSSxPQUE3QixFQUFzQyxJQUF0QztBQUNBLFNBQUtDLE1BQUwsR0FBYyxDQUNWWCxFQUFFLENBQUNZLEtBQUgsQ0FBU0MsTUFEQyxFQUVWYixFQUFFLENBQUNZLEtBQUgsQ0FBU0UsSUFGQyxFQUdWZCxFQUFFLENBQUNZLEtBQUgsQ0FBU0csS0FIQyxFQUlWZixF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QUF1QyxJQUF2QztBQUNBLFNBQUtILElBQUwsQ0FBVWdDLEdBQVYsQ0FBYyxRQUFkLEVBQXdCLEtBQUs1QixNQUE3QixFQUFxQyxJQUFyQztBQUNBLFNBQUtKLElBQUwsQ0FBVWdDLEdBQVYsQ0FBYyxTQUFkLEVBQXlCLEtBQUszQixPQUE5QixFQUF1QyxJQUF2QztBQUNILEdBN0RJLENBOERMOztBQTlESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7fSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJkcmF3XCIsIHRoaXMuZHJhdywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiZHJhd0NsZWFyXCIsIHRoaXMuY2xlYXIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImxpbmVUb1wiLCB0aGlzLmxpbmVUbywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiZHJhd05vd1wiLCB0aGlzLmRyYXdOb3csIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY29sb3JzID0gW1xyXG4gICAgICAgICAgICBjYy5Db2xvci5ZRUxMT1csXHJcbiAgICAgICAgICAgIGNjLkNvbG9yLkJMVUUsXHJcbiAgICAgICAgICAgIGNjLkNvbG9yLkdSRUVOLFxyXG4gICAgICAgICAgICBjYy5Db2xvci5SRURcclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMuY29sb3JJbmRleCA9IDA7XHJcbiAgICAgICAgZ2FtZS5yb290ID0gdGhpcy5ub2RlO1xyXG4gICAgfSxcclxuICAgIGRyYXcocCwgYykge1xyXG4gICAgICAgIHZhciBnID0gdGhpcy5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIGlmICghYykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9ySW5kZXgrKztcclxuICAgICAgICAgICAgdGhpcy5jb2xvckluZGV4ID0gdGhpcy5jb2xvckluZGV4ICUgdGhpcy5jb2xvcnMubGVuZ3RoO1xyXG4gICAgICAgICAgICBjID0gdGhpcy5jb2xvcnNbdGhpcy5jb2xvckluZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZy5saW5lV2lkdGggPSAxMDtcclxuICAgICAgICAvLyAgY2MubG9nKFwi57uY5Yi2XCIsIHAsIGMpXHJcbiAgICAgICAgZy5zdHJva2VDb2xvciA9IGM7XHJcbiAgICAgICAgZy5tb3ZlVG8ocC54IC0gMTAwLCBwLnkpO1xyXG4gICAgICAgIGcubGluZVRvKHAueCArIDEwMCwgcC55KTtcclxuICAgICAgICBnLm1vdmVUbyhwLngsIHAueSAtIDEwMCk7XHJcbiAgICAgICAgZy5saW5lVG8ocC54LCBwLnkgKyAxMDApO1xyXG4gICAgICAgIGcuY2xvc2UoKTtcclxuICAgICAgICBnLnN0cm9rZSgpO1xyXG4gICAgICAgIGcuZmlsbCgpO1xyXG4gICAgfSxcclxuICAgIGxpbmVUbyhwMSwgcDIsIGMpIHtcclxuICAgICAgICB2YXIgZyA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBjID0gYyB8fCAnIzIyMmJmZic7XHJcbiAgICAgICAgLy8gZy5saW5lV2lkdGggPSAxMDtcclxuICAgICAgICBnLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIGcubW92ZVRvKHAxLngsIHAxLnkpO1xyXG4gICAgICAgIGcubGluZVRvKHAyLngsIHAyLnkpO1xyXG4gICAgfSxcclxuICAgIGRyYXdOb3coKSB7XHJcbiAgICAgICAgdmFyIGcgPSB0aGlzLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgZy5jbG9zZSgpO1xyXG4gICAgICAgIGcuc3Ryb2tlKCk7XHJcbiAgICAgICAgZy5maWxsKCk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdmFyIGcgPSB0aGlzLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgLy8gZy5saW5lV2lkdGggPSAxMDtcclxuICAgICAgICBnLmNsZWFyKClcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihcImRyYXdcIiwgdGhpcy5kcmF3LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKFwiZHJhd0NsZWFyXCIsIHRoaXMuY2xlYXIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoXCJsaW5lVG9cIiwgdGhpcy5saW5lVG8sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoXCJkcmF3Tm93XCIsIHRoaXMuZHJhd05vdywgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=