
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/enemy/enemyFind.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d998z5n41AVYtBN8l0zRCj', 'enemyFind');
// Script/enemy/enemyFind.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": PoolComponent,
  properties: {},
  onEnable: function onEnable() {},
  //当该组件被禁用或节点变为无效时调用。
  onDisable: function onDisable() {},
  //该方法为生命周期方法，父类未必会有实现。
  onDestroy: function onDestroy() {},
  unuse: function unuse() {},
  reuse: function reuse(data) {
    this.node.x = this.x - Math.random() * data.findX;
  },
  onLoad: function onLoad() {
    this.parent = this.node.parent.parent;
    this.x = this.node.x;
  },
  //碰撞进入
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (game.isOver) return;
    this.parent.emit("onCollisionEnter", other, self);
  },
  //碰撞停留
  onCollisionStay: function onCollisionStay(other, self) {},
  //碰撞退出
  onCollisionExit: function onCollisionExit(other, self) {
    if (game.isOver) return;
    this.parent.emit("onCollisionExit", other, self);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxlbmVteVxcZW5lbXlGaW5kLmpzIl0sIm5hbWVzIjpbIlBvb2xDb21wb25lbnQiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJvbkVuYWJsZSIsIm9uRGlzYWJsZSIsIm9uRGVzdHJveSIsInVudXNlIiwicmV1c2UiLCJkYXRhIiwibm9kZSIsIngiLCJNYXRoIiwicmFuZG9tIiwiZmluZFgiLCJvbkxvYWQiLCJwYXJlbnQiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwiZ2FtZSIsImlzT3ZlciIsImVtaXQiLCJvbkNvbGxpc2lvblN0YXkiLCJvbkNvbGxpc2lvbkV4aXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUEzQixFQUE4Qzs7O0FBQzlDQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNILGFBREo7QUFFTEksRUFBQUEsVUFBVSxFQUFFLEVBRlA7QUFHTEMsRUFBQUEsUUFISyxzQkFHTSxDQUNWLENBSkk7QUFLTDtBQUNBQyxFQUFBQSxTQU5LLHVCQU1PLENBQ1gsQ0FQSTtBQVFMO0FBQ0FDLEVBQUFBLFNBVEssdUJBU08sQ0FDWCxDQVZJO0FBV0xDLEVBQUFBLEtBQUssRUFBRSxpQkFBWSxDQUNsQixDQVpJO0FBYUxDLEVBQUFBLEtBQUssRUFBRSxlQUFVQyxJQUFWLEVBQWdCO0FBQ25CLFNBQUtDLElBQUwsQ0FBVUMsQ0FBVixHQUFZLEtBQUtBLENBQUwsR0FBT0MsSUFBSSxDQUFDQyxNQUFMLEtBQWNKLElBQUksQ0FBQ0ssS0FBdEM7QUFDSCxHQWZJO0FBZ0JMQyxFQUFBQSxNQWhCSyxvQkFnQkk7QUFDTCxTQUFLQyxNQUFMLEdBQWMsS0FBS04sSUFBTCxDQUFVTSxNQUFWLENBQWlCQSxNQUEvQjtBQUNBLFNBQUtMLENBQUwsR0FBUyxLQUFLRCxJQUFMLENBQVVDLENBQW5CO0FBQ0gsR0FuQkk7QUFvQkw7QUFDQU0sRUFBQUEsZ0JBQWdCLEVBQUUsMEJBQVVDLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3JDLFFBQUlDLElBQUksQ0FBQ0MsTUFBVCxFQUFpQjtBQUNqQixTQUFLTCxNQUFMLENBQVlNLElBQVosQ0FBaUIsa0JBQWpCLEVBQXFDSixLQUFyQyxFQUE0Q0MsSUFBNUM7QUFDSCxHQXhCSTtBQXlCTDtBQUNBSSxFQUFBQSxlQUFlLEVBQUUseUJBQVVMLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCLENBQ3ZDLENBM0JJO0FBNEJMO0FBQ0FLLEVBQUFBLGVBQWUsRUFBRSx5QkFBVU4sS0FBVixFQUFpQkMsSUFBakIsRUFBdUI7QUFDcEMsUUFBSUMsSUFBSSxDQUFDQyxNQUFULEVBQWlCO0FBQ2pCLFNBQUtMLE1BQUwsQ0FBWU0sSUFBWixDQUFpQixpQkFBakIsRUFBb0NKLEtBQXBDLEVBQTJDQyxJQUEzQztBQUNIO0FBaENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBQb29sQ29tcG9uZW50ID0gcmVxdWlyZShcIlBvb2xDb21wb25lbnRcIik7IC8v5rGg5a2Q57uE5Lu2XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IFBvb2xDb21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7fSxcclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgfSxcclxuICAgIC8v5b2T6K+l57uE5Lu26KKr56aB55So5oiW6IqC54K55Y+Y5Li65peg5pWI5pe26LCD55So44CCXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICB9LFxyXG4gICAgLy/or6Xmlrnms5XkuLrnlJ/lkb3lkajmnJ/mlrnms5XvvIzniLbnsbvmnKrlv4XkvJrmnInlrp7njrDjgIJcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgIH0sXHJcbiAgICB1bnVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgfSxcclxuICAgIHJldXNlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMubm9kZS54PXRoaXMueC1NYXRoLnJhbmRvbSgpKmRhdGEuZmluZFg7XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy5ub2RlLng7XHJcbiAgICB9LFxyXG4gICAgLy/norDmkp7ov5vlhaVcclxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGlmIChnYW1lLmlzT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucGFyZW50LmVtaXQoXCJvbkNvbGxpc2lvbkVudGVyXCIsIG90aGVyLCBzZWxmKVxyXG4gICAgfSxcclxuICAgIC8v56Kw5pKe5YGc55WZXHJcbiAgICBvbkNvbGxpc2lvblN0YXk6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgfSxcclxuICAgIC8v56Kw5pKe6YCA5Ye6XHJcbiAgICBvbkNvbGxpc2lvbkV4aXQ6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGlmIChnYW1lLmlzT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucGFyZW50LmVtaXQoXCJvbkNvbGxpc2lvbkV4aXRcIiwgb3RoZXIsIHNlbGYpXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=