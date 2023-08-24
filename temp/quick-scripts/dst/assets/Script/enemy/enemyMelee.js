
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/enemy/enemyMelee.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21c8dFsJ8FAxpIyuysBCphu', 'enemyMelee');
// Script/enemy/enemyMelee.js

"use strict";

var PoolComponent = require("PoolComponent");

cc.Class({
  "extends": PoolComponent,
  properties: {
    parent: cc.Node
  },
  unuse: function unuse() {
    this.shooting = false;
    this.parent.off("shoot_start", this.shoot_start, this);
    this.parent.off("shoot_end", this.shoot_end, this);
  },
  reuse: function reuse(data) {
    this.data = data;
    if (!this.parent) this.parent = this.node.parent;
    this.parent.on("shoot_start", this.shoot_start, this);
    this.parent.on("shoot_end", this.shoot_end, this);
    this.shooting = false;
  },
  //碰撞进入
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (this.parent.isDeath) return;
    if (game.isOver) return;

    if (this.shooting) {
      this.shoot(other);
    }
  },
  //碰撞停留
  onCollisionStay: function onCollisionStay(other, self) {
    if (this.shooting) {
      this.shoot(other);
    }
  },
  //碰撞退出
  onCollisionExit: function onCollisionExit(other, self) {},
  //开始射击
  shoot_start: function shoot_start() {
    this.shooting = true;
  },
  //射击动作结束
  shoot_end: function shoot_end() {
    this.shooting = false;
  },
  //该方法为生命周期方法，父类未必会有实现。
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {},
  shoot: function shoot(other) {
    this.shooting = false;
    var hps = other.node.getComponentsInChildren("hpComponent");

    if (hps && hps.length) {
      var hp = hps[0];
      hp.onHurt(this.data.attack);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxlbmVteVxcZW5lbXlNZWxlZS5qcyJdLCJuYW1lcyI6WyJQb29sQ29tcG9uZW50IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicGFyZW50IiwiTm9kZSIsInVudXNlIiwic2hvb3RpbmciLCJvZmYiLCJzaG9vdF9zdGFydCIsInNob290X2VuZCIsInJldXNlIiwiZGF0YSIsIm5vZGUiLCJvbiIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJpc0RlYXRoIiwiZ2FtZSIsImlzT3ZlciIsInNob290Iiwib25Db2xsaXNpb25TdGF5Iiwib25Db2xsaXNpb25FeGl0Iiwib25EZXN0cm95Iiwib25Mb2FkIiwiaHBzIiwiZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4iLCJsZW5ndGgiLCJocCIsIm9uSHVydCIsImF0dGFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTNCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNILGFBREo7QUFFTEksRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRUgsRUFBRSxDQUFDSTtBQURILEdBRlA7QUFLTEMsRUFBQUEsS0FBSyxFQUFFLGlCQUFZO0FBQ2YsU0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFNBQUtILE1BQUwsQ0FBWUksR0FBWixDQUFnQixhQUFoQixFQUErQixLQUFLQyxXQUFwQyxFQUFpRCxJQUFqRDtBQUNBLFNBQUtMLE1BQUwsQ0FBWUksR0FBWixDQUFnQixXQUFoQixFQUE2QixLQUFLRSxTQUFsQyxFQUE2QyxJQUE3QztBQUNILEdBVEk7QUFVTEMsRUFBQUEsS0FBSyxFQUFFLGVBQVVDLElBQVYsRUFBZ0I7QUFDbkIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsUUFBSSxDQUFDLEtBQUtSLE1BQVYsRUFBa0IsS0FBS0EsTUFBTCxHQUFjLEtBQUtTLElBQUwsQ0FBVVQsTUFBeEI7QUFDbEIsU0FBS0EsTUFBTCxDQUFZVSxFQUFaLENBQWUsYUFBZixFQUE4QixLQUFLTCxXQUFuQyxFQUFnRCxJQUFoRDtBQUNBLFNBQUtMLE1BQUwsQ0FBWVUsRUFBWixDQUFlLFdBQWYsRUFBNEIsS0FBS0osU0FBakMsRUFBNEMsSUFBNUM7QUFDQSxTQUFLSCxRQUFMLEdBQWdCLEtBQWhCO0FBQ0gsR0FoQkk7QUFpQkw7QUFDQVEsRUFBQUEsZ0JBQWdCLEVBQUUsMEJBQVVDLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3JDLFFBQUksS0FBS2IsTUFBTCxDQUFZYyxPQUFoQixFQUF5QjtBQUN6QixRQUFJQyxJQUFJLENBQUNDLE1BQVQsRUFBaUI7O0FBQ2pCLFFBQUksS0FBS2IsUUFBVCxFQUFtQjtBQUNmLFdBQUtjLEtBQUwsQ0FBV0wsS0FBWDtBQUNIO0FBQ0osR0F4Qkk7QUF5Qkw7QUFDQU0sRUFBQUEsZUFBZSxFQUFFLHlCQUFVTixLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtBQUNwQyxRQUFJLEtBQUtWLFFBQVQsRUFBbUI7QUFDZixXQUFLYyxLQUFMLENBQVdMLEtBQVg7QUFDSDtBQUNKLEdBOUJJO0FBK0JMO0FBQ0FPLEVBQUFBLGVBQWUsRUFBRSx5QkFBVVAsS0FBVixFQUFpQkMsSUFBakIsRUFBdUIsQ0FDdkMsQ0FqQ0k7QUFrQ0w7QUFDQVIsRUFBQUEsV0FuQ0sseUJBbUNTO0FBQ1YsU0FBS0YsUUFBTCxHQUFnQixJQUFoQjtBQUNILEdBckNJO0FBc0NMO0FBQ0FHLEVBQUFBLFNBdkNLLHVCQXVDTztBQUNSLFNBQUtILFFBQUwsR0FBZ0IsS0FBaEI7QUFDSCxHQXpDSTtBQTBDTDtBQUNBaUIsRUFBQUEsU0EzQ0ssdUJBMkNPLENBQ1gsQ0E1Q0k7QUE2Q0xDLEVBQUFBLE1BN0NLLG9CQTZDSSxDQUNSLENBOUNJO0FBK0NMSixFQUFBQSxLQS9DSyxpQkErQ0NMLEtBL0NELEVBK0NRO0FBQ1QsU0FBS1QsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFFBQUltQixHQUFHLEdBQUdWLEtBQUssQ0FBQ0gsSUFBTixDQUFXYyx1QkFBWCxDQUFtQyxhQUFuQyxDQUFWOztBQUNBLFFBQUlELEdBQUcsSUFBSUEsR0FBRyxDQUFDRSxNQUFmLEVBQXVCO0FBQ25CLFVBQUlDLEVBQUUsR0FBR0gsR0FBRyxDQUFDLENBQUQsQ0FBWjtBQUNBRyxNQUFBQSxFQUFFLENBQUNDLE1BQUgsQ0FBVSxLQUFLbEIsSUFBTCxDQUFVbUIsTUFBcEI7QUFDSDtBQUNKO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBQb29sQ29tcG9uZW50ID0gcmVxdWlyZShcIlBvb2xDb21wb25lbnRcIilcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogUG9vbENvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwYXJlbnQ6IGNjLk5vZGVcclxuICAgIH0sXHJcbiAgICB1bnVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2hvb3RpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhcmVudC5vZmYoXCJzaG9vdF9zdGFydFwiLCB0aGlzLnNob290X3N0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnBhcmVudC5vZmYoXCJzaG9vdF9lbmRcIiwgdGhpcy5zaG9vdF9lbmQsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIHJldXNlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkgdGhpcy5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIHRoaXMucGFyZW50Lm9uKFwic2hvb3Rfc3RhcnRcIiwgdGhpcy5zaG9vdF9zdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQub24oXCJzaG9vdF9lbmRcIiwgdGhpcy5zaG9vdF9lbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2hvb3RpbmcgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICAvL+eisOaSnui/m+WFpVxyXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LmlzRGVhdGgpIHJldHVybjtcclxuICAgICAgICBpZiAoZ2FtZS5pc092ZXIpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5zaG9vdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnNob290KG90aGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/norDmkp7lgZznlZlcclxuICAgIG9uQ29sbGlzaW9uU3RheTogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvb3RpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG9vdChvdGhlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v56Kw5pKe6YCA5Ye6XHJcbiAgICBvbkNvbGxpc2lvbkV4aXQ6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgfSxcclxuICAgIC8v5byA5aeL5bCE5Ye7XHJcbiAgICBzaG9vdF9zdGFydCgpIHtcclxuICAgICAgICB0aGlzLnNob290aW5nID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICAvL+WwhOWHu+WKqOS9nOe7k+adn1xyXG4gICAgc2hvb3RfZW5kKCkge1xyXG4gICAgICAgIHRoaXMuc2hvb3RpbmcgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICAvL+ivpeaWueazleS4uueUn+WRveWRqOacn+aWueazle+8jOeItuexu+acquW/heS8muacieWunueOsOOAglxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH0sXHJcbiAgICBzaG9vdChvdGhlcikge1xyXG4gICAgICAgIHRoaXMuc2hvb3RpbmcgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaHBzID0gb3RoZXIubm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihcImhwQ29tcG9uZW50XCIpO1xyXG4gICAgICAgIGlmIChocHMgJiYgaHBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsZXQgaHAgPSBocHNbMF07XHJcbiAgICAgICAgICAgIGhwLm9uSHVydCh0aGlzLmRhdGEuYXR0YWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=