
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/zhujie/roleSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dab16X/XyhK4ry5cx4QTZEG', 'roleSprite');
// Script/zhujie/roleSprite.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onDestroy: function onDestroy() {
    this.node.off("death", this.death, this);
  },
  addEvent: function addEvent() {
    this.node.on("death", this.death, this);
  },
  death: function death() {
    if (this.isDeath) return;
    this.node.isDeath = this.isDeath = true;
    this.node.getComponent(cc.BoxCollider).enabled = false;
  },
  onLoad: function onLoad() {
    this.node.isDeath = this.isDeath = false;
    this.addEvent();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx6aHVqaWVcXHJvbGVTcHJpdGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkRlc3Ryb3kiLCJub2RlIiwib2ZmIiwiZGVhdGgiLCJhZGRFdmVudCIsIm9uIiwiaXNEZWF0aCIsImdldENvbXBvbmVudCIsIkJveENvbGxpZGVyIiwiZW5hYmxlZCIsIm9uTG9hZCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUUsRUFGUDtBQUdMQyxFQUFBQSxTQUhLLHVCQUdPO0FBQ1IsU0FBS0MsSUFBTCxDQUFVQyxHQUFWLENBQWMsT0FBZCxFQUF1QixLQUFLQyxLQUE1QixFQUFtQyxJQUFuQztBQUNILEdBTEk7QUFNTEMsRUFBQUEsUUFOSyxzQkFNTTtBQUNQLFNBQUtILElBQUwsQ0FBVUksRUFBVixDQUFhLE9BQWIsRUFBc0IsS0FBS0YsS0FBM0IsRUFBa0MsSUFBbEM7QUFDSCxHQVJJO0FBU0xBLEVBQUFBLEtBVEssbUJBU0c7QUFDSixRQUFJLEtBQUtHLE9BQVQsRUFBa0I7QUFDbEIsU0FBS0wsSUFBTCxDQUFVSyxPQUFWLEdBQW9CLEtBQUtBLE9BQUwsR0FBZSxJQUFuQztBQUNBLFNBQUtMLElBQUwsQ0FBVU0sWUFBVixDQUF1QlgsRUFBRSxDQUFDWSxXQUExQixFQUF1Q0MsT0FBdkMsR0FBaUQsS0FBakQ7QUFDSCxHQWJJO0FBY0xDLEVBQUFBLE1BZEssb0JBY0k7QUFDTCxTQUFLVCxJQUFMLENBQVVLLE9BQVYsR0FBb0IsS0FBS0EsT0FBTCxHQUFlLEtBQW5DO0FBQ0EsU0FBS0YsUUFBTDtBQUNILEdBakJJO0FBa0JMTyxFQUFBQSxLQWxCSyxtQkFrQkcsQ0FDUDtBQW5CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7fSxcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKFwiZGVhdGhcIiwgdGhpcy5kZWF0aCwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgYWRkRXZlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwiZGVhdGhcIiwgdGhpcy5kZWF0aCwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgZGVhdGgoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWF0aCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubm9kZS5pc0RlYXRoID0gdGhpcy5pc0RlYXRoID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5pc0RlYXRoID0gdGhpcy5pc0RlYXRoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudCgpO1xyXG4gICAgfSxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==