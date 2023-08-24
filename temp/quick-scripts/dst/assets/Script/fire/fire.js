
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/fire/fire.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3611yaI9lNuapmc728jxg/', 'fire');
// Script/fire/fire.js

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
    this.init(data);
  },
  //开火动画
  init: function init(data) {
    if (!this._isinit) {
      this._isinit = true;
      this.aniNames = [];
    }

    this.node.angle = data.angle;
    var hd = this.node.angle * Math.PI / 180;
    this.speedX = Math.cos(hd) * this.node.width / 2;
    this.speedY = Math.sin(hd) * this.node.width / 2;
    this.node.x = data.v.x + this.speedX;
    this.node.y = data.v.y + this.speedY;
    var animation = this.node.getComponent(cc.Animation); //动画组件

    if (this.aniNames.indexOf(data.aniName) < 0) {
      var spriteFrames = game.gameUtils.getSpriteFrames(game.bullet_atlas, data.aniName);
      var clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 40);
      this.aniNames.push(data.aniName);
      clip.name = data.aniName;
      clip.wrapMode = cc.WrapMode.Normal;
      animation.addClip(clip);
    }

    animation.playAdditive(data.aniName, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxmaXJlXFxmaXJlLmpzIl0sIm5hbWVzIjpbIlBvb2xDb21wb25lbnQiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJ1bnVzZSIsInJldXNlIiwiZGF0YSIsImluaXQiLCJfaXNpbml0IiwiYW5pTmFtZXMiLCJub2RlIiwiYW5nbGUiLCJoZCIsIk1hdGgiLCJQSSIsInNwZWVkWCIsImNvcyIsIndpZHRoIiwic3BlZWRZIiwic2luIiwieCIsInYiLCJ5IiwiYW5pbWF0aW9uIiwiZ2V0Q29tcG9uZW50IiwiQW5pbWF0aW9uIiwiaW5kZXhPZiIsImFuaU5hbWUiLCJzcHJpdGVGcmFtZXMiLCJnYW1lIiwiZ2FtZVV0aWxzIiwiZ2V0U3ByaXRlRnJhbWVzIiwiYnVsbGV0X2F0bGFzIiwiY2xpcCIsIkFuaW1hdGlvbkNsaXAiLCJjcmVhdGVXaXRoU3ByaXRlRnJhbWVzIiwicHVzaCIsIm5hbWUiLCJ3cmFwTW9kZSIsIldyYXBNb2RlIiwiTm9ybWFsIiwiYWRkQ2xpcCIsInBsYXlBZGRpdGl2ZSIsIm9uY2UiLCJwb29sIiwicHV0IiwicmVtb3ZlRnJvbVBhcmVudCIsImRlc3Ryb3kiLCJiaW5kIiwic3RhcnQiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUEzQixFQUE4Qzs7O0FBQzlDQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNILGFBREo7QUFFTEksRUFBQUEsVUFBVSxFQUFFLEVBRlA7QUFHTEMsRUFBQUEsTUFISyxvQkFHSSxDQUNSLENBSkk7QUFLTDtBQUNBQyxFQUFBQSxLQUFLLEVBQUUsaUJBQVksQ0FDbEIsQ0FQSTtBQVFMO0FBQ0FDLEVBQUFBLEtBQUssRUFBRSxlQUFVQyxJQUFWLEVBQWdCO0FBQ25CLFNBQUtDLElBQUwsQ0FBVUQsSUFBVjtBQUNILEdBWEk7QUFZTDtBQUNBQyxFQUFBQSxJQWJLLGdCQWFBRCxJQWJBLEVBYU07QUFDUCxRQUFJLENBQUMsS0FBS0UsT0FBVixFQUFtQjtBQUNmLFdBQUtBLE9BQUwsR0FBZSxJQUFmO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNIOztBQUNELFNBQUtDLElBQUwsQ0FBVUMsS0FBVixHQUFrQkwsSUFBSSxDQUFDSyxLQUF2QjtBQUNBLFFBQUlDLEVBQUUsR0FBRyxLQUFLRixJQUFMLENBQVVDLEtBQVYsR0FBa0JFLElBQUksQ0FBQ0MsRUFBdkIsR0FBNEIsR0FBckM7QUFDQSxTQUFLQyxNQUFMLEdBQWNGLElBQUksQ0FBQ0csR0FBTCxDQUFTSixFQUFULElBQWUsS0FBS0YsSUFBTCxDQUFVTyxLQUF6QixHQUFpQyxDQUEvQztBQUNBLFNBQUtDLE1BQUwsR0FBY0wsSUFBSSxDQUFDTSxHQUFMLENBQVNQLEVBQVQsSUFBZSxLQUFLRixJQUFMLENBQVVPLEtBQXpCLEdBQWlDLENBQS9DO0FBQ0EsU0FBS1AsSUFBTCxDQUFVVSxDQUFWLEdBQWNkLElBQUksQ0FBQ2UsQ0FBTCxDQUFPRCxDQUFQLEdBQVcsS0FBS0wsTUFBOUI7QUFDQSxTQUFLTCxJQUFMLENBQVVZLENBQVYsR0FBY2hCLElBQUksQ0FBQ2UsQ0FBTCxDQUFPQyxDQUFQLEdBQVcsS0FBS0osTUFBOUI7QUFDQSxRQUFJSyxTQUFTLEdBQUcsS0FBS2IsSUFBTCxDQUFVYyxZQUFWLENBQXVCeEIsRUFBRSxDQUFDeUIsU0FBMUIsQ0FBaEIsQ0FYTyxDQVc4Qzs7QUFDckQsUUFBSSxLQUFLaEIsUUFBTCxDQUFjaUIsT0FBZCxDQUFzQnBCLElBQUksQ0FBQ3FCLE9BQTNCLElBQXNDLENBQTFDLEVBQTZDO0FBQ3pDLFVBQUlDLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWVDLGVBQWYsQ0FBK0JGLElBQUksQ0FBQ0csWUFBcEMsRUFBa0QxQixJQUFJLENBQUNxQixPQUF2RCxDQUFuQjtBQUNBLFVBQUlNLElBQUksR0FBR2pDLEVBQUUsQ0FBQ2tDLGFBQUgsQ0FBaUJDLHNCQUFqQixDQUF3Q1AsWUFBeEMsRUFBc0QsRUFBdEQsQ0FBWDtBQUNBLFdBQUtuQixRQUFMLENBQWMyQixJQUFkLENBQW1COUIsSUFBSSxDQUFDcUIsT0FBeEI7QUFDQU0sTUFBQUEsSUFBSSxDQUFDSSxJQUFMLEdBQVkvQixJQUFJLENBQUNxQixPQUFqQjtBQUNBTSxNQUFBQSxJQUFJLENBQUNLLFFBQUwsR0FBZ0J0QyxFQUFFLENBQUN1QyxRQUFILENBQVlDLE1BQTVCO0FBQ0FqQixNQUFBQSxTQUFTLENBQUNrQixPQUFWLENBQWtCUixJQUFsQjtBQUNIOztBQUNEVixJQUFBQSxTQUFTLENBQUNtQixZQUFWLENBQXVCcEMsSUFBSSxDQUFDcUIsT0FBNUIsRUFBcUMsQ0FBckM7QUFDQUosSUFBQUEsU0FBUyxDQUFDb0IsSUFBVixDQUFlLFVBQWYsRUFBMkIsWUFBWTtBQUNuQyxVQUFJQyxJQUFJLEdBQUcsS0FBS2xDLElBQUwsQ0FBVWtDLElBQXJCOztBQUNBLFVBQUlBLElBQUosRUFBVTtBQUNOQSxRQUFBQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLbkMsSUFBZDtBQUNILE9BRkQsTUFHSztBQUNELGFBQUtBLElBQUwsQ0FBVW9DLGdCQUFWLENBQTJCLElBQTNCO0FBQ0EsYUFBS3BDLElBQUwsQ0FBVXFDLE9BQVY7QUFDSDtBQUNKLEtBVDBCLENBU3pCQyxJQVR5QixDQVNwQixJQVRvQixDQUEzQjtBQVVILEdBNUNJO0FBNkNMQyxFQUFBQSxLQTdDSyxtQkE2Q0csQ0FDUCxDQTlDSTtBQStDTEMsRUFBQUEsU0EvQ0ssdUJBK0NPLENBQ1g7QUFoREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFBvb2xDb21wb25lbnQgPSByZXF1aXJlKFwiUG9vbENvbXBvbmVudFwiKTsgLy/msaDlrZDnu4Tku7ZcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogUG9vbENvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHt9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfSxcclxuICAgIC8v5Zue5pS2XHJcbiAgICB1bnVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgfSxcclxuICAgIC8v6YeN55SoXHJcbiAgICByZXVzZTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmluaXQoZGF0YSk7XHJcbiAgICB9LFxyXG4gICAgLy/lvIDngavliqjnlLtcclxuICAgIGluaXQoZGF0YSkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNpbml0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzaW5pdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pTmFtZXMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gZGF0YS5hbmdsZTtcclxuICAgICAgICBsZXQgaGQgPSB0aGlzLm5vZGUuYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIHRoaXMuc3BlZWRYID0gTWF0aC5jb3MoaGQpICogdGhpcy5ub2RlLndpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLnNwZWVkWSA9IE1hdGguc2luKGhkKSAqIHRoaXMubm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggPSBkYXRhLnYueCArIHRoaXMuc3BlZWRYO1xyXG4gICAgICAgIHRoaXMubm9kZS55ID0gZGF0YS52LnkgKyB0aGlzLnNwZWVkWTtcclxuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pOy8v5Yqo55S757uE5Lu2XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pTmFtZXMuaW5kZXhPZihkYXRhLmFuaU5hbWUpIDwgMCkge1xyXG4gICAgICAgICAgICBsZXQgc3ByaXRlRnJhbWVzID0gZ2FtZS5nYW1lVXRpbHMuZ2V0U3ByaXRlRnJhbWVzKGdhbWUuYnVsbGV0X2F0bGFzLCBkYXRhLmFuaU5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgY2xpcCA9IGNjLkFuaW1hdGlvbkNsaXAuY3JlYXRlV2l0aFNwcml0ZUZyYW1lcyhzcHJpdGVGcmFtZXMsIDQwKTtcclxuICAgICAgICAgICAgdGhpcy5hbmlOYW1lcy5wdXNoKGRhdGEuYW5pTmFtZSk7XHJcbiAgICAgICAgICAgIGNsaXAubmFtZSA9IGRhdGEuYW5pTmFtZTtcclxuICAgICAgICAgICAgY2xpcC53cmFwTW9kZSA9IGNjLldyYXBNb2RlLk5vcm1hbDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLmFkZENsaXAoY2xpcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFuaW1hdGlvbi5wbGF5QWRkaXRpdmUoZGF0YS5hbmlOYW1lLCAwKTtcclxuICAgICAgICBhbmltYXRpb24ub25jZShcImZpbmlzaGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHBvb2wgPSB0aGlzLm5vZGUucG9vbDtcclxuICAgICAgICAgICAgaWYgKHBvb2wpIHtcclxuICAgICAgICAgICAgICAgIHBvb2wucHV0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfSxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==