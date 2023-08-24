
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/layer/shootBomb.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2566cSZnlDGZVdumaO1M4+', 'shootBomb');
// Script/layer/shootBomb.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onDestroy: function onDestroy() {
    game.off("bomb1", this.bomb1, this); //爆炸

    game.off("bomb2", this.bomb2, this); //爆炸

    game.off("bomb3", this.bomb3, this); //爆炸
  },
  onLoad: function onLoad() {
    game.on("bomb1", this.bomb1, this); //爆炸

    game.on("bomb2", this.bomb2, this); //爆炸

    game.on("bomb3", this.bomb3, this); //爆炸
  },

  /********
   *
   * 爆炸效果
   * **/
  bomb1: function bomb1(data) {
    data.aniName = "bomb1";
    var pool = game.bombPool["bomb1"];

    if (pool && pool.prefab) {
      pool.getNode(data, this.node); //this.node.addChild(b);
    }
  },

  /********
   *
   * 爆炸效果
   * **/
  bomb2: function bomb2(data) {
    data.aniName = "bomb2";
    var pool = game.bombPool["bomb2"];

    if (pool && pool.prefab) {
      pool.getNode(data, this.node); //this.node.addChild(b);
    }
  },

  /********
   * 爆炸效果
   * **/
  bomb3: function bomb3(data) {
    data.aniName = "bomb3";
    var pool = game.bombPool["bomb3"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsYXllclxcc2hvb3RCb21iLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25EZXN0cm95IiwiZ2FtZSIsIm9mZiIsImJvbWIxIiwiYm9tYjIiLCJib21iMyIsIm9uTG9hZCIsIm9uIiwiZGF0YSIsImFuaU5hbWUiLCJwb29sIiwiYm9tYlBvb2wiLCJwcmVmYWIiLCJnZXROb2RlIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFLEVBRlA7QUFHTEMsRUFBQUEsU0FISyx1QkFHTztBQUNSQyxJQUFBQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxPQUFULEVBQWtCLEtBQUtDLEtBQXZCLEVBQThCLElBQTlCLEVBRFEsQ0FDNEI7O0FBQ3BDRixJQUFBQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxPQUFULEVBQWtCLEtBQUtFLEtBQXZCLEVBQThCLElBQTlCLEVBRlEsQ0FFNEI7O0FBQ3BDSCxJQUFBQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxPQUFULEVBQWtCLEtBQUtHLEtBQXZCLEVBQThCLElBQTlCLEVBSFEsQ0FHNEI7QUFDdkMsR0FQSTtBQVFMQyxFQUFBQSxNQVJLLG9CQVFJO0FBQ0xMLElBQUFBLElBQUksQ0FBQ00sRUFBTCxDQUFRLE9BQVIsRUFBaUIsS0FBS0osS0FBdEIsRUFBNkIsSUFBN0IsRUFESyxDQUM4Qjs7QUFDbkNGLElBQUFBLElBQUksQ0FBQ00sRUFBTCxDQUFRLE9BQVIsRUFBaUIsS0FBS0gsS0FBdEIsRUFBNkIsSUFBN0IsRUFGSyxDQUU4Qjs7QUFDbkNILElBQUFBLElBQUksQ0FBQ00sRUFBTCxDQUFRLE9BQVIsRUFBaUIsS0FBS0YsS0FBdEIsRUFBNkIsSUFBN0IsRUFISyxDQUc4QjtBQUN0QyxHQVpJOztBQWFMO0FBQ0o7QUFDQTtBQUNBO0FBQ0lGLEVBQUFBLEtBakJLLGlCQWlCQ0ssSUFqQkQsRUFpQk87QUFDUkEsSUFBQUEsSUFBSSxDQUFDQyxPQUFMLEdBQWUsT0FBZjtBQUNBLFFBQUlDLElBQUksR0FBR1QsSUFBSSxDQUFDVSxRQUFMLENBQWMsT0FBZCxDQUFYOztBQUNBLFFBQUlELElBQUksSUFBSUEsSUFBSSxDQUFDRSxNQUFqQixFQUF5QjtBQUNyQkYsTUFBQUEsSUFBSSxDQUFDRyxPQUFMLENBQWFMLElBQWIsRUFBbUIsS0FBS00sSUFBeEIsRUFEcUIsQ0FFckI7QUFDSDtBQUNKLEdBeEJJOztBQXlCTDtBQUNKO0FBQ0E7QUFDQTtBQUNJVixFQUFBQSxLQTdCSyxpQkE2QkNJLElBN0JELEVBNkJPO0FBQ1JBLElBQUFBLElBQUksQ0FBQ0MsT0FBTCxHQUFlLE9BQWY7QUFDQSxRQUFJQyxJQUFJLEdBQUdULElBQUksQ0FBQ1UsUUFBTCxDQUFjLE9BQWQsQ0FBWDs7QUFDQSxRQUFJRCxJQUFJLElBQUlBLElBQUksQ0FBQ0UsTUFBakIsRUFBeUI7QUFDckJGLE1BQUFBLElBQUksQ0FBQ0csT0FBTCxDQUFhTCxJQUFiLEVBQW1CLEtBQUtNLElBQXhCLEVBRHFCLENBRXJCO0FBQ0g7QUFDSixHQXBDSTs7QUFxQ0w7QUFDSjtBQUNBO0FBQ0lULEVBQUFBLEtBeENLLGlCQXdDQ0csSUF4Q0QsRUF3Q087QUFDUkEsSUFBQUEsSUFBSSxDQUFDQyxPQUFMLEdBQWUsT0FBZjtBQUNBLFFBQUlDLElBQUksR0FBR1QsSUFBSSxDQUFDVSxRQUFMLENBQWMsT0FBZCxDQUFYOztBQUNBLFFBQUlELElBQUksSUFBSUEsSUFBSSxDQUFDRSxNQUFqQixFQUF5QjtBQUNyQkYsTUFBQUEsSUFBSSxDQUFDRyxPQUFMLENBQWFMLElBQWIsRUFBbUIsS0FBS00sSUFBeEIsRUFEcUIsQ0FFckI7QUFDSDtBQUNKO0FBL0NJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHt9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGdhbWUub2ZmKFwiYm9tYjFcIiwgdGhpcy5ib21iMSwgdGhpcyk7Ly/niIbngrhcclxuICAgICAgICBnYW1lLm9mZihcImJvbWIyXCIsIHRoaXMuYm9tYjIsIHRoaXMpOy8v54iG54K4XHJcbiAgICAgICAgZ2FtZS5vZmYoXCJib21iM1wiLCB0aGlzLmJvbWIzLCB0aGlzKTsvL+eIhueCuFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBnYW1lLm9uKFwiYm9tYjFcIiwgdGhpcy5ib21iMSwgdGhpcyk7Ly/niIbngrhcclxuICAgICAgICBnYW1lLm9uKFwiYm9tYjJcIiwgdGhpcy5ib21iMiwgdGhpcyk7Ly/niIbngrhcclxuICAgICAgICBnYW1lLm9uKFwiYm9tYjNcIiwgdGhpcy5ib21iMywgdGhpcyk7Ly/niIbngrhcclxuICAgIH0sXHJcbiAgICAvKioqKioqKipcclxuICAgICAqXHJcbiAgICAgKiDniIbngrjmlYjmnpxcclxuICAgICAqICoqL1xyXG4gICAgYm9tYjEoZGF0YSkge1xyXG4gICAgICAgIGRhdGEuYW5pTmFtZSA9IFwiYm9tYjFcIjtcclxuICAgICAgICBsZXQgcG9vbCA9IGdhbWUuYm9tYlBvb2xbXCJib21iMVwiXTtcclxuICAgICAgICBpZiAocG9vbCAmJiBwb29sLnByZWZhYikge1xyXG4gICAgICAgICAgICBwb29sLmdldE5vZGUoZGF0YSwgdGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy90aGlzLm5vZGUuYWRkQ2hpbGQoYik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qKioqKioqKlxyXG4gICAgICpcclxuICAgICAqIOeIhueCuOaViOaenFxyXG4gICAgICogKiovXHJcbiAgICBib21iMihkYXRhKSB7XHJcbiAgICAgICAgZGF0YS5hbmlOYW1lID0gXCJib21iMlwiO1xyXG4gICAgICAgIGxldCBwb29sID0gZ2FtZS5ib21iUG9vbFtcImJvbWIyXCJdO1xyXG4gICAgICAgIGlmIChwb29sICYmIHBvb2wucHJlZmFiKSB7XHJcbiAgICAgICAgICAgIHBvb2wuZ2V0Tm9kZShkYXRhLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICAvL3RoaXMubm9kZS5hZGRDaGlsZChiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyoqKioqKioqXHJcbiAgICAgKiDniIbngrjmlYjmnpxcclxuICAgICAqICoqL1xyXG4gICAgYm9tYjMoZGF0YSkge1xyXG4gICAgICAgIGRhdGEuYW5pTmFtZSA9IFwiYm9tYjNcIjtcclxuICAgICAgICBsZXQgcG9vbCA9IGdhbWUuYm9tYlBvb2xbXCJib21iM1wiXTtcclxuICAgICAgICBpZiAocG9vbCAmJiBwb29sLnByZWZhYikge1xyXG4gICAgICAgICAgICBwb29sLmdldE5vZGUoZGF0YSwgdGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgLy90aGlzLm5vZGUuYWRkQ2hpbGQoYik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19