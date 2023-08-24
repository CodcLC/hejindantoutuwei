
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/test/HeroHit.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc4472Bhw9BSozf92nu/Fhx', 'HeroHit');
// Script/test/HeroHit.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    gravity: -1000 //重力

  },
  onLoad: function onLoad() {
    this.speed = cc.v2(0, 0); //速度

    this.prePosition = cc.v2();
    this.preStep = cc.v2();
    this._lastSpeedY = 0;
  },
  onEnable: function onEnable() {
    cc.director.getCollisionManager().enabled = true;
    cc.director.getCollisionManager().enabledDebugDraw = true;
  },
  onDisable: function onDisable() {
    cc.director.getCollisionManager().enabled = false;
    cc.director.getCollisionManager().enabledDebugDraw = false;
  },
  start: function start() {},

  /**
   * 当碰撞产生的时候调用
   * @param  {Collider} other 产生碰撞的另一个碰撞组件
   * @param  {Collider} self  产生碰撞的自身的碰撞组件
   */
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.node.color = cc.Color.RED;
    this.touchingNumber++;
    console.log('on collision enter'); // // 碰撞系统会计算出碰撞组件在世界坐标系下的相关的值，并放到 world 这个属性里面
    // var world = self.world;
    // // 碰撞组件的 aabb 碰撞框
    // var aabb = world.aabb;
    // // 节点碰撞前上一帧 aabb 碰撞框的位置
    // var preAabb = world.preAabb;
    // // 碰撞框的世界矩阵
    // var t = world.transform;
    // // 以下属性为圆形碰撞组件特有属性
    // var r = world.radius;
    // var p = world.position;
    // // 以下属性为 矩形 和 多边形 碰
    // 1st step
    // get pre aabb, go back before collision

    var otherAabb = other.world.aabb;
    var otherPreAabb = other.world.preAabb.clone();
    var selfAabb = self.world.aabb;
    var selfPreAabb = self.world.preAabb.clone(); //cc.log(otherAabb,otherPreAabb);
    // // 2nd step
    // //向前x轴，检查x轴是否碰撞
    // selfPreAabb.x = selfAabb.x;
    // otherPreAabb.x = otherAabb.x;
    // if (cc.Intersection.rectRect(selfPreAabb, otherPreAabb)) {
    //     if (this.speed.x < 0 && (selfPreAabb.xMax > otherPreAabb.xMax)) {
    //         this.node.x = otherPreAabb.xMax - this.node.parent.x;
    //         this.collisionX = -1;
    //     }
    //     else if (this.speed.x > 0 && (selfPreAabb.xMin < otherPreAabb.xMin)) {
    //         this.node.x = otherPreAabb.xMin - selfPreAabb.width - this.node.parent.x;
    //         this.collisionX = 1;
    //     }
    //
    //     this.speed.x = 0;
    //     other.touchingX = true;
    //     return;s
    // }
  },

  /**
   * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
   * @param  {Collider} other 产生碰撞的另一个碰撞组件
   * @param  {Collider} self  产生碰撞的自身的碰撞组件
   */
  onCollisionStay: function onCollisionStay(other, self) {
    console.log('on collision stay');
  },

  /**
   * 当碰撞结束后调用
   * @param  {Collider} other 产生碰撞的另一个碰撞组件
   * @param  {Collider} self  产生碰撞的自身的碰撞组件
   */
  onCollisionExit: function onCollisionExit(other, self) {
    console.log('on collision exit');
    this.touchingNumber--;

    if (this.touchingNumber === 0) {
      this.node.color = cc.Color.WHITE;
    }
  },
  onDestroy: function onDestroy() {},
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx0ZXN0XFxIZXJvSGl0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ3Jhdml0eSIsIm9uTG9hZCIsInNwZWVkIiwidjIiLCJwcmVQb3NpdGlvbiIsInByZVN0ZXAiLCJfbGFzdFNwZWVkWSIsIm9uRW5hYmxlIiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsImVuYWJsZWREZWJ1Z0RyYXciLCJvbkRpc2FibGUiLCJzdGFydCIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJub2RlIiwiY29sb3IiLCJDb2xvciIsIlJFRCIsInRvdWNoaW5nTnVtYmVyIiwiY29uc29sZSIsImxvZyIsIm90aGVyQWFiYiIsIndvcmxkIiwiYWFiYiIsIm90aGVyUHJlQWFiYiIsInByZUFhYmIiLCJjbG9uZSIsInNlbGZBYWJiIiwic2VsZlByZUFhYmIiLCJvbkNvbGxpc2lvblN0YXkiLCJvbkNvbGxpc2lvbkV4aXQiLCJXSElURSIsIm9uRGVzdHJveSIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFFLENBQUMsSUFERixDQUNPOztBQURQLEdBRlA7QUFLTEMsRUFBQUEsTUFMSyxvQkFLSTtBQUdMLFNBQUtDLEtBQUwsR0FBYU4sRUFBRSxDQUFDTyxFQUFILENBQU0sQ0FBTixFQUFTLENBQVQsQ0FBYixDQUhLLENBR29COztBQUN6QixTQUFLQyxXQUFMLEdBQW1CUixFQUFFLENBQUNPLEVBQUgsRUFBbkI7QUFDQSxTQUFLRSxPQUFMLEdBQWVULEVBQUUsQ0FBQ08sRUFBSCxFQUFmO0FBQ0EsU0FBS0csV0FBTCxHQUFtQixDQUFuQjtBQUNILEdBWkk7QUFhTEMsRUFBQUEsUUFBUSxFQUFFLG9CQUFZO0FBQ2xCWCxJQUFBQSxFQUFFLENBQUNZLFFBQUgsQ0FBWUMsbUJBQVosR0FBa0NDLE9BQWxDLEdBQTRDLElBQTVDO0FBQ0FkLElBQUFBLEVBQUUsQ0FBQ1ksUUFBSCxDQUFZQyxtQkFBWixHQUFrQ0UsZ0JBQWxDLEdBQXFELElBQXJEO0FBQ0gsR0FoQkk7QUFpQkxDLEVBQUFBLFNBQVMsRUFBRSxxQkFBWTtBQUNuQmhCLElBQUFBLEVBQUUsQ0FBQ1ksUUFBSCxDQUFZQyxtQkFBWixHQUFrQ0MsT0FBbEMsR0FBNEMsS0FBNUM7QUFDQWQsSUFBQUEsRUFBRSxDQUFDWSxRQUFILENBQVlDLG1CQUFaLEdBQWtDRSxnQkFBbEMsR0FBcUQsS0FBckQ7QUFDSCxHQXBCSTtBQXFCTEUsRUFBQUEsS0FyQkssbUJBcUJHLENBQ1AsQ0F0Qkk7O0FBdUJMO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSUMsRUFBQUEsZ0JBQWdCLEVBQUUsMEJBQVVDLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBRXJDLFNBQUtDLElBQUwsQ0FBVUMsS0FBVixHQUFrQnRCLEVBQUUsQ0FBQ3VCLEtBQUgsQ0FBU0MsR0FBM0I7QUFDQSxTQUFLQyxjQUFMO0FBR0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBTnFDLENBT3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBQ0EsUUFBSUMsU0FBUyxHQUFHVCxLQUFLLENBQUNVLEtBQU4sQ0FBWUMsSUFBNUI7QUFDQSxRQUFJQyxZQUFZLEdBQUdaLEtBQUssQ0FBQ1UsS0FBTixDQUFZRyxPQUFaLENBQW9CQyxLQUFwQixFQUFuQjtBQUVBLFFBQUlDLFFBQVEsR0FBR2QsSUFBSSxDQUFDUyxLQUFMLENBQVdDLElBQTFCO0FBQ0EsUUFBSUssV0FBVyxHQUFHZixJQUFJLENBQUNTLEtBQUwsQ0FBV0csT0FBWCxDQUFtQkMsS0FBbkIsRUFBbEIsQ0EzQnFDLENBNEJyQztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9ILEdBcEZJOztBQXFGTDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0lHLEVBQUFBLGVBQWUsRUFBRSx5QkFBVWpCLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3BDTSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNILEdBNUZJOztBQTZGTDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0lVLEVBQUFBLGVBQWUsRUFBRSx5QkFBVWxCLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3BDTSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLFNBQUtGLGNBQUw7O0FBQ0EsUUFBSSxLQUFLQSxjQUFMLEtBQXdCLENBQTVCLEVBQStCO0FBQzNCLFdBQUtKLElBQUwsQ0FBVUMsS0FBVixHQUFrQnRCLEVBQUUsQ0FBQ3VCLEtBQUgsQ0FBU2UsS0FBM0I7QUFDSDtBQUVKLEdBekdJO0FBMEdMQyxFQUFBQSxTQTFHSyx1QkEwR08sQ0FDWCxDQTNHSTtBQTRHTEMsRUFBQUEsTUE1R0ssa0JBNEdFQyxFQTVHRixFQTRHTSxDQUNWO0FBN0dJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBncmF2aXR5OiAtMTAwMCwvL+mHjeWKm1xyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBjYy52MigwLCAwKTsvL+mAn+W6plxyXG4gICAgICAgIHRoaXMucHJlUG9zaXRpb24gPSBjYy52MigpO1xyXG4gICAgICAgIHRoaXMucHJlU3RlcCA9IGNjLnYyKCk7XHJcbiAgICAgICAgdGhpcy5fbGFzdFNwZWVkWSA9IDA7XHJcbiAgICB9LFxyXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIG9uRGlzYWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOW9k+eisOaSnuS6p+eUn+eahOaXtuWAmeiwg+eUqFxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IG90aGVyIOS6p+eUn+eisOaSnueahOWPpuS4gOS4queisOaSnue7hOS7tlxyXG4gICAgICogQHBhcmFtICB7Q29sbGlkZXJ9IHNlbGYgIOS6p+eUn+eisOaSnueahOiHqui6q+eahOeisOaSnue7hOS7tlxyXG4gICAgICovXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIHRoaXMudG91Y2hpbmdOdW1iZXIgKys7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnb24gY29sbGlzaW9uIGVudGVyJyk7XHJcbiAgICAgICAgLy8gLy8g56Kw5pKe57O757uf5Lya6K6h566X5Ye656Kw5pKe57uE5Lu25Zyo5LiW55WM5Z2Q5qCH57O75LiL55qE55u45YWz55qE5YC877yM5bm25pS+5YiwIHdvcmxkIOi/meS4quWxnuaAp+mHjOmdolxyXG4gICAgICAgIC8vIHZhciB3b3JsZCA9IHNlbGYud29ybGQ7XHJcbiAgICAgICAgLy8gLy8g56Kw5pKe57uE5Lu255qEIGFhYmIg56Kw5pKe5qGGXHJcbiAgICAgICAgLy8gdmFyIGFhYmIgPSB3b3JsZC5hYWJiO1xyXG4gICAgICAgIC8vIC8vIOiKgueCueeisOaSnuWJjeS4iuS4gOW4pyBhYWJiIOeisOaSnuahhueahOS9jee9rlxyXG4gICAgICAgIC8vIHZhciBwcmVBYWJiID0gd29ybGQucHJlQWFiYjtcclxuICAgICAgICAvLyAvLyDnorDmkp7moYbnmoTkuJbnlYznn6npmLVcclxuICAgICAgICAvLyB2YXIgdCA9IHdvcmxkLnRyYW5zZm9ybTtcclxuICAgICAgICAvLyAvLyDku6XkuIvlsZ7mgKfkuLrlnIblvaLnorDmkp7nu4Tku7bnibnmnInlsZ7mgKdcclxuICAgICAgICAvLyB2YXIgciA9IHdvcmxkLnJhZGl1cztcclxuICAgICAgICAvLyB2YXIgcCA9IHdvcmxkLnBvc2l0aW9uO1xyXG4gICAgICAgIC8vIC8vIOS7peS4i+WxnuaAp+S4uiDnn6nlvaIg5ZKMIOWkmui+ueW9oiDnorBcclxuXHJcblxyXG4gICAgICAgIC8vIDFzdCBzdGVwXHJcbiAgICAgICAgLy8gZ2V0IHByZSBhYWJiLCBnbyBiYWNrIGJlZm9yZSBjb2xsaXNpb25cclxuICAgICAgICB2YXIgb3RoZXJBYWJiID0gb3RoZXIud29ybGQuYWFiYjtcclxuICAgICAgICB2YXIgb3RoZXJQcmVBYWJiID0gb3RoZXIud29ybGQucHJlQWFiYi5jbG9uZSgpO1xyXG5cclxuICAgICAgICB2YXIgc2VsZkFhYmIgPSBzZWxmLndvcmxkLmFhYmI7XHJcbiAgICAgICAgdmFyIHNlbGZQcmVBYWJiID0gc2VsZi53b3JsZC5wcmVBYWJiLmNsb25lKCk7XHJcbiAgICAgICAgLy9jYy5sb2cob3RoZXJBYWJiLG90aGVyUHJlQWFiYik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gLy8gMm5kIHN0ZXBcclxuICAgICAgICAvLyAvL+WQkeWJjXjovbTvvIzmo4Dmn6V46L205piv5ZCm56Kw5pKeXHJcbiAgICAgICAgLy8gc2VsZlByZUFhYmIueCA9IHNlbGZBYWJiLng7XHJcbiAgICAgICAgLy8gb3RoZXJQcmVBYWJiLnggPSBvdGhlckFhYmIueDtcclxuICAgICAgICAvLyBpZiAoY2MuSW50ZXJzZWN0aW9uLnJlY3RSZWN0KHNlbGZQcmVBYWJiLCBvdGhlclByZUFhYmIpKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnNwZWVkLnggPCAwICYmIChzZWxmUHJlQWFiYi54TWF4ID4gb3RoZXJQcmVBYWJiLnhNYXgpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUueCA9IG90aGVyUHJlQWFiYi54TWF4IC0gdGhpcy5ub2RlLnBhcmVudC54O1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gLTE7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgZWxzZSBpZiAodGhpcy5zcGVlZC54ID4gMCAmJiAoc2VsZlByZUFhYmIueE1pbiA8IG90aGVyUHJlQWFiYi54TWluKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5ub2RlLnggPSBvdGhlclByZUFhYmIueE1pbiAtIHNlbGZQcmVBYWJiLndpZHRoIC0gdGhpcy5ub2RlLnBhcmVudC54O1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jb2xsaXNpb25YID0gMTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIHRoaXMuc3BlZWQueCA9IDA7XHJcbiAgICAgICAgLy8gICAgIG90aGVyLnRvdWNoaW5nWCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtzXHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5b2T56Kw5pKe5Lqn55Sf5ZCO77yM56Kw5pKe57uT5p2f5YmN55qE5oOF5Ya15LiL77yM5q+P5qyh6K6h566X56Kw5pKe57uT5p6c5ZCO6LCD55SoXHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gb3RoZXIg5Lqn55Sf56Kw5pKe55qE5Y+m5LiA5Liq56Kw5pKe57uE5Lu2XHJcbiAgICAgKiBAcGFyYW0gIHtDb2xsaWRlcn0gc2VsZiAg5Lqn55Sf56Kw5pKe55qE6Ieq6Lqr55qE56Kw5pKe57uE5Lu2XHJcbiAgICAgKi9cclxuICAgIG9uQ29sbGlzaW9uU3RheTogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29uIGNvbGxpc2lvbiBzdGF5Jyk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPnorDmkp7nu5PmnZ/lkI7osIPnlKhcclxuICAgICAqIEBwYXJhbSAge0NvbGxpZGVyfSBvdGhlciDkuqfnlJ/norDmkp7nmoTlj6bkuIDkuKrnorDmkp7nu4Tku7ZcclxuICAgICAqIEBwYXJhbSAge0NvbGxpZGVyfSBzZWxmICDkuqfnlJ/norDmkp7nmoToh6rouqvnmoTnorDmkp7nu4Tku7ZcclxuICAgICAqL1xyXG4gICAgb25Db2xsaXNpb25FeGl0OiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb24gY29sbGlzaW9uIGV4aXQnKTtcclxuICAgICAgICB0aGlzLnRvdWNoaW5nTnVtYmVyIC0tO1xyXG4gICAgICAgIGlmICh0aGlzLnRvdWNoaW5nTnVtYmVyID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==