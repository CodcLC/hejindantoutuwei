
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/blow/bomb1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c9f5FhmlNNe7ZF5Dgt7tjs', 'bomb1');
// Script/blow/bomb1.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": PoolComponent,
  properties: {},
  onLoad: function onLoad() {},
  //回收
  unuse: function unuse() {},
  //重用
  reuse: function reuse(data) {
    game.soundManager.playEffect(game.gameSound.dao_dan_bao_zha, false);
    this.init(data);
  },
  init: function init(data) {
    if (data.group) this.node.group = data.group;
    this.node.angle = data.angle;
    this.node.x = data.v.x;
    this.node.y = data.v.y; //结束动画

    var animation = this.node.getComponent(cc.Animation); //动画组件

    if (!this._isinit) {
      var spriteFrames = game.gameUtils.getSpriteFrames(game.bomb_atlas, data.aniName);
      var flashClip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 20);
      flashClip.name = 'end';
      flashClip.wrapMode = cc.WrapMode.Normal;
      animation.addClip(flashClip);
      animation.play('end');
    } else {
      animation.playAdditive('end', 0);
    }

    animation.once("finished", function () {
      var pool = this.node.pool;

      if (pool) {
        pool.put(this.node);
      } else {
        this.node.removeFromParent(true);
        this.node.destroy();
      }
    }.bind(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxibG93XFxib21iMS5qcyJdLCJuYW1lcyI6WyJQb29sQ29tcG9uZW50IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwidW51c2UiLCJyZXVzZSIsImRhdGEiLCJnYW1lIiwic291bmRNYW5hZ2VyIiwicGxheUVmZmVjdCIsImdhbWVTb3VuZCIsImRhb19kYW5fYmFvX3poYSIsImluaXQiLCJncm91cCIsIm5vZGUiLCJhbmdsZSIsIngiLCJ2IiwieSIsImFuaW1hdGlvbiIsImdldENvbXBvbmVudCIsIkFuaW1hdGlvbiIsIl9pc2luaXQiLCJzcHJpdGVGcmFtZXMiLCJnYW1lVXRpbHMiLCJnZXRTcHJpdGVGcmFtZXMiLCJib21iX2F0bGFzIiwiYW5pTmFtZSIsImZsYXNoQ2xpcCIsIkFuaW1hdGlvbkNsaXAiLCJjcmVhdGVXaXRoU3ByaXRlRnJhbWVzIiwibmFtZSIsIndyYXBNb2RlIiwiV3JhcE1vZGUiLCJOb3JtYWwiLCJhZGRDbGlwIiwicGxheSIsInBsYXlBZGRpdGl2ZSIsIm9uY2UiLCJwb29sIiwicHV0IiwicmVtb3ZlRnJvbVBhcmVudCIsImRlc3Ryb3kiLCJiaW5kIiwic3RhcnQiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUEzQixFQUE4Qzs7O0FBQzlDQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNILGFBREo7QUFFTEksRUFBQUEsVUFBVSxFQUFFLEVBRlA7QUFHTEMsRUFBQUEsTUFISyxvQkFHSSxDQUNSLENBSkk7QUFLTDtBQUNBQyxFQUFBQSxLQUFLLEVBQUUsaUJBQVksQ0FDbEIsQ0FQSTtBQVFMO0FBQ0FDLEVBQUFBLEtBQUssRUFBRSxlQUFVQyxJQUFWLEVBQWdCO0FBQ25CQyxJQUFBQSxJQUFJLENBQUNDLFlBQUwsQ0FBa0JDLFVBQWxCLENBQTZCRixJQUFJLENBQUNHLFNBQUwsQ0FBZUMsZUFBNUMsRUFBNEQsS0FBNUQ7QUFDQSxTQUFLQyxJQUFMLENBQVVOLElBQVY7QUFDSCxHQVpJO0FBYUxNLEVBQUFBLElBYkssZ0JBYUFOLElBYkEsRUFhTTtBQUNQLFFBQUlBLElBQUksQ0FBQ08sS0FBVCxFQUFnQixLQUFLQyxJQUFMLENBQVVELEtBQVYsR0FBa0JQLElBQUksQ0FBQ08sS0FBdkI7QUFDaEIsU0FBS0MsSUFBTCxDQUFVQyxLQUFWLEdBQWtCVCxJQUFJLENBQUNTLEtBQXZCO0FBQ0EsU0FBS0QsSUFBTCxDQUFVRSxDQUFWLEdBQWNWLElBQUksQ0FBQ1csQ0FBTCxDQUFPRCxDQUFyQjtBQUNBLFNBQUtGLElBQUwsQ0FBVUksQ0FBVixHQUFjWixJQUFJLENBQUNXLENBQUwsQ0FBT0MsQ0FBckIsQ0FKTyxDQUtQOztBQUNBLFFBQUlDLFNBQVMsR0FBRyxLQUFLTCxJQUFMLENBQVVNLFlBQVYsQ0FBdUJwQixFQUFFLENBQUNxQixTQUExQixDQUFoQixDQU5PLENBTThDOztBQUNyRCxRQUFJLENBQUMsS0FBS0MsT0FBVixFQUFtQjtBQUNmLFVBQUlDLFlBQVksR0FBR2hCLElBQUksQ0FBQ2lCLFNBQUwsQ0FBZUMsZUFBZixDQUErQmxCLElBQUksQ0FBQ21CLFVBQXBDLEVBQWdEcEIsSUFBSSxDQUFDcUIsT0FBckQsQ0FBbkI7QUFDQSxVQUFJQyxTQUFTLEdBQUc1QixFQUFFLENBQUM2QixhQUFILENBQWlCQyxzQkFBakIsQ0FBd0NQLFlBQXhDLEVBQXNELEVBQXRELENBQWhCO0FBQ0FLLE1BQUFBLFNBQVMsQ0FBQ0csSUFBVixHQUFpQixLQUFqQjtBQUNBSCxNQUFBQSxTQUFTLENBQUNJLFFBQVYsR0FBcUJoQyxFQUFFLENBQUNpQyxRQUFILENBQVlDLE1BQWpDO0FBQ0FmLE1BQUFBLFNBQVMsQ0FBQ2dCLE9BQVYsQ0FBa0JQLFNBQWxCO0FBQ0FULE1BQUFBLFNBQVMsQ0FBQ2lCLElBQVYsQ0FBZSxLQUFmO0FBQ0gsS0FQRCxNQVFLO0FBQ0RqQixNQUFBQSxTQUFTLENBQUNrQixZQUFWLENBQXVCLEtBQXZCLEVBQThCLENBQTlCO0FBQ0g7O0FBQ0RsQixJQUFBQSxTQUFTLENBQUNtQixJQUFWLENBQWUsVUFBZixFQUEyQixZQUFZO0FBQ25DLFVBQUlDLElBQUksR0FBRyxLQUFLekIsSUFBTCxDQUFVeUIsSUFBckI7O0FBQ0EsVUFBSUEsSUFBSixFQUFVO0FBQ05BLFFBQUFBLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUsxQixJQUFkO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsYUFBS0EsSUFBTCxDQUFVMkIsZ0JBQVYsQ0FBMkIsSUFBM0I7QUFDQSxhQUFLM0IsSUFBTCxDQUFVNEIsT0FBVjtBQUNIO0FBQ0osS0FUMEIsQ0FTekJDLElBVHlCLENBU3BCLElBVG9CLENBQTNCO0FBVUgsR0F6Q0k7QUEwQ0xDLEVBQUFBLEtBMUNLLG1CQTBDRyxDQUNQLENBM0NJO0FBNENMQyxFQUFBQSxTQTVDSyx1QkE0Q08sQ0FDWCxDQTdDSSxDQThDTDs7QUE5Q0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFBvb2xDb21wb25lbnQgPSByZXF1aXJlKFwiUG9vbENvbXBvbmVudFwiKTsgLy/msaDlrZDnu4Tku7ZcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogUG9vbENvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHt9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfSxcclxuICAgIC8v5Zue5pS2XHJcbiAgICB1bnVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgfSxcclxuICAgIC8v6YeN55SoXHJcbiAgICByZXVzZTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBnYW1lLnNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KGdhbWUuZ2FtZVNvdW5kLmRhb19kYW5fYmFvX3poYSxmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5pbml0KGRhdGEpO1xyXG4gICAgfSxcclxuICAgIGluaXQoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhLmdyb3VwKSB0aGlzLm5vZGUuZ3JvdXAgPSBkYXRhLmdyb3VwO1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IGRhdGEuYW5nbGU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggPSBkYXRhLnYueDtcclxuICAgICAgICB0aGlzLm5vZGUueSA9IGRhdGEudi55O1xyXG4gICAgICAgIC8v57uT5p2f5Yqo55S7XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTsvL+WKqOeUu+e7hOS7tlxyXG4gICAgICAgIGlmICghdGhpcy5faXNpbml0KSB7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGVGcmFtZXMgPSBnYW1lLmdhbWVVdGlscy5nZXRTcHJpdGVGcmFtZXMoZ2FtZS5ib21iX2F0bGFzLCBkYXRhLmFuaU5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgZmxhc2hDbGlwID0gY2MuQW5pbWF0aW9uQ2xpcC5jcmVhdGVXaXRoU3ByaXRlRnJhbWVzKHNwcml0ZUZyYW1lcywgMjApO1xyXG4gICAgICAgICAgICBmbGFzaENsaXAubmFtZSA9ICdlbmQnO1xyXG4gICAgICAgICAgICBmbGFzaENsaXAud3JhcE1vZGUgPSBjYy5XcmFwTW9kZS5Ob3JtYWw7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5hZGRDbGlwKGZsYXNoQ2xpcCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5wbGF5KCdlbmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5wbGF5QWRkaXRpdmUoJ2VuZCcsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbmltYXRpb24ub25jZShcImZpbmlzaGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IHBvb2wgPSB0aGlzLm5vZGUucG9vbDtcclxuICAgICAgICAgICAgaWYgKHBvb2wpIHtcclxuICAgICAgICAgICAgICAgIHBvb2wucHV0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LmJpbmQodGhpcykpXHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19