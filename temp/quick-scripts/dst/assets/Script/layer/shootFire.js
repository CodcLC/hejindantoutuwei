
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/layer/shootFire.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7172ddJtO9NhYeuNeOXY+mF', 'shootFire');
// Script/layer/shootFire.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onDestroy: function onDestroy() {
    game.off("shootFire", this.shootFire, this); //开火动画
  },
  onLoad: function onLoad() {
    game.on("shootFire", this.shootFire, this); //开火动画
  },

  /*****
   * 开火动画
   * **/
  shootFire: function shootFire(data) {
    var pool = game.firePool["fire"];

    if (pool && pool.prefab) {
      pool.getNode(data, this.node); //this.node.addChild(b);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsYXllclxcc2hvb3RGaXJlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25EZXN0cm95IiwiZ2FtZSIsIm9mZiIsInNob290RmlyZSIsIm9uTG9hZCIsIm9uIiwiZGF0YSIsInBvb2wiLCJmaXJlUG9vbCIsInByZWZhYiIsImdldE5vZGUiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUUsRUFGUDtBQUdMQyxFQUFBQSxTQUhLLHVCQUdPO0FBQ1JDLElBQUFBLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFdBQVQsRUFBc0IsS0FBS0MsU0FBM0IsRUFBc0MsSUFBdEMsRUFEUSxDQUNvQztBQUMvQyxHQUxJO0FBTUxDLEVBQUFBLE1BTkssb0JBTUk7QUFDTEgsSUFBQUEsSUFBSSxDQUFDSSxFQUFMLENBQVEsV0FBUixFQUFxQixLQUFLRixTQUExQixFQUFxQyxJQUFyQyxFQURLLENBQ3NDO0FBQzlDLEdBUkk7O0FBU0w7QUFDSjtBQUNBO0FBQ0lBLEVBQUFBLFNBWksscUJBWUtHLElBWkwsRUFZVztBQUVaLFFBQUlDLElBQUksR0FBR04sSUFBSSxDQUFDTyxRQUFMLENBQWMsTUFBZCxDQUFYOztBQUNBLFFBQUlELElBQUksSUFBSUEsSUFBSSxDQUFDRSxNQUFqQixFQUF5QjtBQUNyQkYsTUFBQUEsSUFBSSxDQUFDRyxPQUFMLENBQWFKLElBQWIsRUFBa0IsS0FBS0ssSUFBdkIsRUFEcUIsQ0FFckI7QUFDSDtBQUNKO0FBbkJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHt9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGdhbWUub2ZmKFwic2hvb3RGaXJlXCIsIHRoaXMuc2hvb3RGaXJlLCB0aGlzKTsvL+W8gOeBq+WKqOeUu1xyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBnYW1lLm9uKFwic2hvb3RGaXJlXCIsIHRoaXMuc2hvb3RGaXJlLCB0aGlzKTsvL+W8gOeBq+WKqOeUu1xyXG4gICAgfSxcclxuICAgIC8qKioqKlxyXG4gICAgICog5byA54Gr5Yqo55S7XHJcbiAgICAgKiAqKi9cclxuICAgIHNob290RmlyZShkYXRhKSB7XHJcblxyXG4gICAgICAgIGxldCBwb29sID0gZ2FtZS5maXJlUG9vbFtcImZpcmVcIl07XHJcbiAgICAgICAgaWYgKHBvb2wgJiYgcG9vbC5wcmVmYWIpIHtcclxuICAgICAgICAgICAgcG9vbC5nZXROb2RlKGRhdGEsdGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy90aGlzLm5vZGUuYWRkQ2hpbGQoYik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==