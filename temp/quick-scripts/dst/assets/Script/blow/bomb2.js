
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/blow/bomb2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '270cf0zn19LIptyZxBKgC9L', 'bomb2');
// Script/blow/bomb2.js

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
  onDestroy: function onDestroy() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxibG93XFxib21iMi5qcyJdLCJuYW1lcyI6WyJQb29sQ29tcG9uZW50IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwidW51c2UiLCJyZXVzZSIsImRhdGEiLCJnYW1lIiwic291bmRNYW5hZ2VyIiwicGxheUVmZmVjdCIsImdhbWVTb3VuZCIsImRhb19kYW5fYmFvX3poYSIsImluaXQiLCJncm91cCIsIm5vZGUiLCJhbmdsZSIsIngiLCJ2IiwieSIsImFuaW1hdGlvbiIsImdldENvbXBvbmVudCIsIkFuaW1hdGlvbiIsIl9pc2luaXQiLCJzcHJpdGVGcmFtZXMiLCJnYW1lVXRpbHMiLCJnZXRTcHJpdGVGcmFtZXMiLCJib21iX2F0bGFzIiwiYW5pTmFtZSIsImZsYXNoQ2xpcCIsIkFuaW1hdGlvbkNsaXAiLCJjcmVhdGVXaXRoU3ByaXRlRnJhbWVzIiwibmFtZSIsIndyYXBNb2RlIiwiV3JhcE1vZGUiLCJOb3JtYWwiLCJhZGRDbGlwIiwicGxheSIsInBsYXlBZGRpdGl2ZSIsIm9uY2UiLCJwb29sIiwicHV0IiwicmVtb3ZlRnJvbVBhcmVudCIsImRlc3Ryb3kiLCJiaW5kIiwic3RhcnQiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUEzQixFQUE4Qzs7O0FBQzlDQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNILGFBREo7QUFFTEksRUFBQUEsVUFBVSxFQUFFLEVBRlA7QUFHTEMsRUFBQUEsTUFISyxvQkFHSSxDQUNSLENBSkk7QUFLTDtBQUNBQyxFQUFBQSxLQUFLLEVBQUUsaUJBQVksQ0FDbEIsQ0FQSTtBQVFMO0FBQ0FDLEVBQUFBLEtBQUssRUFBRSxlQUFVQyxJQUFWLEVBQWdCO0FBQ25CQyxJQUFBQSxJQUFJLENBQUNDLFlBQUwsQ0FBa0JDLFVBQWxCLENBQTZCRixJQUFJLENBQUNHLFNBQUwsQ0FBZUMsZUFBNUMsRUFBNEQsS0FBNUQ7QUFDQSxTQUFLQyxJQUFMLENBQVVOLElBQVY7QUFDSCxHQVpJO0FBYUxNLEVBQUFBLElBYkssZ0JBYUFOLElBYkEsRUFhTTtBQUNQLFFBQUlBLElBQUksQ0FBQ08sS0FBVCxFQUFnQixLQUFLQyxJQUFMLENBQVVELEtBQVYsR0FBa0JQLElBQUksQ0FBQ08sS0FBdkI7QUFDaEIsU0FBS0MsSUFBTCxDQUFVQyxLQUFWLEdBQWtCVCxJQUFJLENBQUNTLEtBQXZCO0FBQ0EsU0FBS0QsSUFBTCxDQUFVRSxDQUFWLEdBQWNWLElBQUksQ0FBQ1csQ0FBTCxDQUFPRCxDQUFyQjtBQUNBLFNBQUtGLElBQUwsQ0FBVUksQ0FBVixHQUFjWixJQUFJLENBQUNXLENBQUwsQ0FBT0MsQ0FBckIsQ0FKTyxDQUtQOztBQUNBLFFBQUlDLFNBQVMsR0FBRyxLQUFLTCxJQUFMLENBQVVNLFlBQVYsQ0FBdUJwQixFQUFFLENBQUNxQixTQUExQixDQUFoQixDQU5PLENBTThDOztBQUNyRCxRQUFJLENBQUMsS0FBS0MsT0FBVixFQUFtQjtBQUNmLFVBQUlDLFlBQVksR0FBR2hCLElBQUksQ0FBQ2lCLFNBQUwsQ0FBZUMsZUFBZixDQUErQmxCLElBQUksQ0FBQ21CLFVBQXBDLEVBQWdEcEIsSUFBSSxDQUFDcUIsT0FBckQsQ0FBbkI7QUFDQSxVQUFJQyxTQUFTLEdBQUc1QixFQUFFLENBQUM2QixhQUFILENBQWlCQyxzQkFBakIsQ0FBd0NQLFlBQXhDLEVBQXNELEVBQXRELENBQWhCO0FBQ0FLLE1BQUFBLFNBQVMsQ0FBQ0csSUFBVixHQUFpQixLQUFqQjtBQUNBSCxNQUFBQSxTQUFTLENBQUNJLFFBQVYsR0FBcUJoQyxFQUFFLENBQUNpQyxRQUFILENBQVlDLE1BQWpDO0FBQ0FmLE1BQUFBLFNBQVMsQ0FBQ2dCLE9BQVYsQ0FBa0JQLFNBQWxCO0FBQ0FULE1BQUFBLFNBQVMsQ0FBQ2lCLElBQVYsQ0FBZSxLQUFmO0FBQ0gsS0FQRCxNQVFLO0FBQ0RqQixNQUFBQSxTQUFTLENBQUNrQixZQUFWLENBQXVCLEtBQXZCLEVBQThCLENBQTlCO0FBQ0g7O0FBQ0RsQixJQUFBQSxTQUFTLENBQUNtQixJQUFWLENBQWUsVUFBZixFQUEyQixZQUFZO0FBQ25DLFVBQUlDLElBQUksR0FBRyxLQUFLekIsSUFBTCxDQUFVeUIsSUFBckI7O0FBQ0EsVUFBSUEsSUFBSixFQUFVO0FBQ05BLFFBQUFBLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUsxQixJQUFkO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsYUFBS0EsSUFBTCxDQUFVMkIsZ0JBQVYsQ0FBMkIsSUFBM0I7QUFDQSxhQUFLM0IsSUFBTCxDQUFVNEIsT0FBVjtBQUNIO0FBQ0osS0FUMEIsQ0FTekJDLElBVHlCLENBU3BCLElBVG9CLENBQTNCO0FBVUgsR0F6Q0k7QUEwQ0xDLEVBQUFBLEtBMUNLLG1CQTBDRyxDQUNQLENBM0NJO0FBNENMQyxFQUFBQSxTQTVDSyx1QkE0Q08sQ0FDWDtBQTdDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUG9vbENvbXBvbmVudCA9IHJlcXVpcmUoXCJQb29sQ29tcG9uZW50XCIpOyAvL+axoOWtkOe7hOS7tlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBQb29sQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge30sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICB9LFxyXG4gICAgLy/lm57mlLZcclxuICAgIHVudXNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB9LFxyXG4gICAgLy/ph43nlKhcclxuICAgIHJldXNlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGdhbWUuc291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoZ2FtZS5nYW1lU291bmQuZGFvX2Rhbl9iYW9femhhLGZhbHNlKTtcclxuICAgICAgICB0aGlzLmluaXQoZGF0YSk7XHJcbiAgICB9LFxyXG4gICAgaW5pdChkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEuZ3JvdXApIHRoaXMubm9kZS5ncm91cCA9IGRhdGEuZ3JvdXA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gZGF0YS5hbmdsZTtcclxuICAgICAgICB0aGlzLm5vZGUueCA9IGRhdGEudi54O1xyXG4gICAgICAgIHRoaXMubm9kZS55ID0gZGF0YS52Lnk7XHJcbiAgICAgICAgLy/nu5PmnZ/liqjnlLtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pOy8v5Yqo55S757uE5Lu2XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc2luaXQpIHtcclxuICAgICAgICAgICAgbGV0IHNwcml0ZUZyYW1lcyA9IGdhbWUuZ2FtZVV0aWxzLmdldFNwcml0ZUZyYW1lcyhnYW1lLmJvbWJfYXRsYXMsIGRhdGEuYW5pTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBmbGFzaENsaXAgPSBjYy5BbmltYXRpb25DbGlwLmNyZWF0ZVdpdGhTcHJpdGVGcmFtZXMoc3ByaXRlRnJhbWVzLCAyMCk7XHJcbiAgICAgICAgICAgIGZsYXNoQ2xpcC5uYW1lID0gJ2VuZCc7XHJcbiAgICAgICAgICAgIGZsYXNoQ2xpcC53cmFwTW9kZSA9IGNjLldyYXBNb2RlLk5vcm1hbDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLmFkZENsaXAoZmxhc2hDbGlwKTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLnBsYXkoJ2VuZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLnBsYXlBZGRpdGl2ZSgnZW5kJywgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFuaW1hdGlvbi5vbmNlKFwiZmluaXNoZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgcG9vbCA9IHRoaXMubm9kZS5wb29sO1xyXG4gICAgICAgICAgICBpZiAocG9vbCkge1xyXG4gICAgICAgICAgICAgICAgcG9vbC5wdXQodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0uYmluZCh0aGlzKSlcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=