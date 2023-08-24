
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/layer/shootBullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b412irmTBCk7rwyHAKfT2b', 'shootBullet');
// Script/layer/shootBullet.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onDestroy: function onDestroy() {
    game.off("shoot", this.shoot, this); //
  },
  onLoad: function onLoad() {
    game.on("shoot", this.shoot, this); //
  },

  /****
   * 发射子弹
   * ****/
  shoot: function shoot(data) {
    var pool = game.bulletPool[data.prefabName];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsYXllclxcc2hvb3RCdWxsZXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkRlc3Ryb3kiLCJnYW1lIiwib2ZmIiwic2hvb3QiLCJvbkxvYWQiLCJvbiIsImRhdGEiLCJwb29sIiwiYnVsbGV0UG9vbCIsInByZWZhYk5hbWUiLCJwcmVmYWIiLCJnZXROb2RlIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFLEVBRlA7QUFHTEMsRUFBQUEsU0FISyx1QkFHTztBQUNSQyxJQUFBQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxPQUFULEVBQWtCLEtBQUtDLEtBQXZCLEVBQThCLElBQTlCLEVBRFEsQ0FDNEI7QUFDdkMsR0FMSTtBQU1MQyxFQUFBQSxNQU5LLG9CQU1JO0FBQ0xILElBQUFBLElBQUksQ0FBQ0ksRUFBTCxDQUFRLE9BQVIsRUFBaUIsS0FBS0YsS0FBdEIsRUFBNkIsSUFBN0IsRUFESyxDQUM4QjtBQUN0QyxHQVJJOztBQVNMO0FBQ0o7QUFDQTtBQUNJQSxFQUFBQSxLQVpLLGlCQVlDRyxJQVpELEVBWU87QUFDUixRQUFJQyxJQUFJLEdBQUdOLElBQUksQ0FBQ08sVUFBTCxDQUFnQkYsSUFBSSxDQUFDRyxVQUFyQixDQUFYOztBQUNBLFFBQUlGLElBQUksSUFBSUEsSUFBSSxDQUFDRyxNQUFqQixFQUF5QjtBQUNyQkgsTUFBQUEsSUFBSSxDQUFDSSxPQUFMLENBQWFMLElBQWIsRUFBa0IsS0FBS00sSUFBdkIsRUFEcUIsQ0FFckI7QUFDSDtBQUNKO0FBbEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHt9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGdhbWUub2ZmKFwic2hvb3RcIiwgdGhpcy5zaG9vdCwgdGhpcyk7Ly9cclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgZ2FtZS5vbihcInNob290XCIsIHRoaXMuc2hvb3QsIHRoaXMpOy8vXHJcbiAgICB9LFxyXG4gICAgLyoqKipcclxuICAgICAqIOWPkeWwhOWtkOW8uVxyXG4gICAgICogKioqKi9cclxuICAgIHNob290KGRhdGEpIHtcclxuICAgICAgICBsZXQgcG9vbCA9IGdhbWUuYnVsbGV0UG9vbFtkYXRhLnByZWZhYk5hbWVdO1xyXG4gICAgICAgIGlmIChwb29sICYmIHBvb2wucHJlZmFiKSB7XHJcbiAgICAgICAgICAgIHBvb2wuZ2V0Tm9kZShkYXRhLHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLmFkZENoaWxkKGIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuO1xyXG4iXX0=