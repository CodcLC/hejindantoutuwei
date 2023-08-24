
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/zhujie/roleControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd6591XIiBHmo/z8fwSzvrO', 'roleControl');
// Script/zhujie/roleControl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    game.on("key_down", this.onKeyDown, this);
    game.on("key_up", this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    game.off("key_down", this.onKeyDown, this);
    game.off("key_up", this.onKeyUp, this);
  },
  onKeyDown: function onKeyDown(data) {
    this.node.emit("key_down", data);
  },
  onKeyUp: function onKeyUp(data) {
    this.node.emit("key_up", data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx6aHVqaWVcXHJvbGVDb250cm9sLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiZ2FtZSIsIm9uIiwib25LZXlEb3duIiwib25LZXlVcCIsIm9uRGVzdHJveSIsIm9mZiIsImRhdGEiLCJub2RlIiwiZW1pdCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUUsRUFGUDtBQUdMQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEJDLElBQUFBLElBQUksQ0FBQ0MsRUFBTCxDQUFRLFVBQVIsRUFBb0IsS0FBS0MsU0FBekIsRUFBb0MsSUFBcEM7QUFDQUYsSUFBQUEsSUFBSSxDQUFDQyxFQUFMLENBQVEsUUFBUixFQUFrQixLQUFLRSxPQUF2QixFQUFnQyxJQUFoQztBQUNILEdBTkk7QUFPTEMsRUFBQUEsU0FQSyx1QkFPTztBQUNSSixJQUFBQSxJQUFJLENBQUNLLEdBQUwsQ0FBUyxVQUFULEVBQXFCLEtBQUtILFNBQTFCLEVBQXFDLElBQXJDO0FBQ0FGLElBQUFBLElBQUksQ0FBQ0ssR0FBTCxDQUFTLFFBQVQsRUFBbUIsS0FBS0YsT0FBeEIsRUFBaUMsSUFBakM7QUFDSCxHQVZJO0FBV0xELEVBQUFBLFNBWEsscUJBV0tJLElBWEwsRUFXVztBQUNaLFNBQUtDLElBQUwsQ0FBVUMsSUFBVixDQUFlLFVBQWYsRUFBMkJGLElBQTNCO0FBQ0gsR0FiSTtBQWNMSCxFQUFBQSxPQWRLLG1CQWNHRyxJQWRILEVBY1M7QUFDVixTQUFLQyxJQUFMLENBQVVDLElBQVYsQ0FBZSxRQUFmLEVBQXlCRixJQUF6QjtBQUNILEdBaEJJO0FBaUJMRyxFQUFBQSxLQWpCSyxtQkFpQkcsQ0FDUDtBQWxCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7fSxcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGdhbWUub24oXCJrZXlfZG93blwiLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgZ2FtZS5vbihcImtleV91cFwiLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBnYW1lLm9mZihcImtleV9kb3duXCIsIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBnYW1lLm9mZihcImtleV91cFwiLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uS2V5RG93bihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJrZXlfZG93blwiLCBkYXRhKTtcclxuICAgIH0sXHJcbiAgICBvbktleVVwKGRhdGEpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcImtleV91cFwiLCBkYXRhKTtcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcblxyXG5cclxufSk7XHJcbiJdfQ==