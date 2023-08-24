
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/enemy/enemyHp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '763a3woBJFIwJJmjLAd9Nrw', 'enemyHp');
// Script/enemy/enemyHp.js

"use strict";

var HpComponent = require("hpComponent"); //池子组件


cc.Class({
  "extends": HpComponent,
  properties: {
    progressBar: cc.ProgressBar
  },
  //受到的伤害
  onHurt: function onHurt(value) {
    this.curHp -= value;
    this.isShow = true;
    this.progressBar.node.opacity = 255;
    this.showTime = 0;
    this.updateBar();

    if (this.curHp <= 0) {
      this.node.emit("death");
      this.parent.emit("death");
    }
  },
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {
    this.y = this.progressBar.node.y;
  },
  unuse: function unuse() {},
  reuse: function reuse(data) {
    this.totalHp = this.curHp = data.hp; //数据配置

    this.updateBar();
    this.showTime = 0;
    this.isShow = false;
    this.progressBar.node.opacity = 0;
    this.progressBar.node.y = this.y + data.zy;
  },
  updateBar: function updateBar() {
    var progress = (this.curHp / this.totalHp).format();
    this.progressBar.progress = progress;
  },
  //碰撞检测到
  onCollisionEnter: function onCollisionEnter(other, self) {
    var hurt = other.node.getComponent("hurt");
    if (!hurt || hurt.hurtValue == 0) return;
    this.curHp -= hurt.hurtValue;
    hurt.end();
    this.isShow = true;
    this.progressBar.node.opacity = 255;
    this.showTime = 0;
    this.updateBar();

    if (this.curHp <= 0) {
      this.node.emit("death");
    }
  },
  onCollisionStay: function onCollisionStay(other, self) {},
  //碰撞退出
  onCollisionExit: function onCollisionExit(other, self) {// cc.log("碰撞退出")
  },
  update: function update(dt) {
    this.showTime += dt;

    if (this.isShow && this.showTime > 2) {
      this.isShow = false;
      this.progressBar.node.opacity = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxlbmVteVxcZW5lbXlIcC5qcyJdLCJuYW1lcyI6WyJIcENvbXBvbmVudCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsInByb2dyZXNzQmFyIiwiUHJvZ3Jlc3NCYXIiLCJvbkh1cnQiLCJ2YWx1ZSIsImN1ckhwIiwiaXNTaG93Iiwibm9kZSIsIm9wYWNpdHkiLCJzaG93VGltZSIsInVwZGF0ZUJhciIsImVtaXQiLCJwYXJlbnQiLCJvbkRlc3Ryb3kiLCJvbkxvYWQiLCJ5IiwidW51c2UiLCJyZXVzZSIsImRhdGEiLCJ0b3RhbEhwIiwiaHAiLCJ6eSIsInByb2dyZXNzIiwiZm9ybWF0Iiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsImh1cnQiLCJnZXRDb21wb25lbnQiLCJodXJ0VmFsdWUiLCJlbmQiLCJvbkNvbGxpc2lvblN0YXkiLCJvbkNvbGxpc2lvbkV4aXQiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXpCLEVBQTBDOzs7QUFDMUNDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0gsV0FESjtBQUVMSSxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsV0FBVyxFQUFFSCxFQUFFLENBQUNJO0FBRFIsR0FGUDtBQUtMO0FBQ0FDLEVBQUFBLE1BTkssa0JBTUVDLEtBTkYsRUFNUztBQUNWLFNBQUtDLEtBQUwsSUFBY0QsS0FBZDtBQUNBLFNBQUtFLE1BQUwsR0FBYyxJQUFkO0FBQ0EsU0FBS0wsV0FBTCxDQUFpQk0sSUFBakIsQ0FBc0JDLE9BQXRCLEdBQWdDLEdBQWhDO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLFNBQUw7O0FBQ0EsUUFBSSxLQUFLTCxLQUFMLElBQWMsQ0FBbEIsRUFBcUI7QUFDakIsV0FBS0UsSUFBTCxDQUFVSSxJQUFWLENBQWUsT0FBZjtBQUNBLFdBQUtDLE1BQUwsQ0FBWUQsSUFBWixDQUFpQixPQUFqQjtBQUNIO0FBQ0osR0FoQkk7QUFpQkxFLEVBQUFBLFNBakJLLHVCQWlCTyxDQUNYLENBbEJJO0FBbUJMQyxFQUFBQSxNQW5CSyxvQkFtQkk7QUFDTCxTQUFLQyxDQUFMLEdBQVMsS0FBS2QsV0FBTCxDQUFpQk0sSUFBakIsQ0FBc0JRLENBQS9CO0FBQ0gsR0FyQkk7QUFzQkxDLEVBQUFBLEtBQUssRUFBRSxpQkFBWSxDQUNsQixDQXZCSTtBQXdCTEMsRUFBQUEsS0FBSyxFQUFFLGVBQVVDLElBQVYsRUFBZ0I7QUFDbkIsU0FBS0MsT0FBTCxHQUFlLEtBQUtkLEtBQUwsR0FBYWEsSUFBSSxDQUFDRSxFQUFqQyxDQURtQixDQUNrQjs7QUFDckMsU0FBS1YsU0FBTDtBQUNBLFNBQUtELFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxTQUFLSCxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtMLFdBQUwsQ0FBaUJNLElBQWpCLENBQXNCQyxPQUF0QixHQUFnQyxDQUFoQztBQUNBLFNBQUtQLFdBQUwsQ0FBaUJNLElBQWpCLENBQXNCUSxDQUF0QixHQUEyQixLQUFLQSxDQUFMLEdBQVNHLElBQUksQ0FBQ0csRUFBekM7QUFDSCxHQS9CSTtBQWdDTFgsRUFBQUEsU0FoQ0ssdUJBZ0NPO0FBQ1IsUUFBSVksUUFBUSxHQUFHLENBQUMsS0FBS2pCLEtBQUwsR0FBYSxLQUFLYyxPQUFuQixFQUE0QkksTUFBNUIsRUFBZjtBQUNBLFNBQUt0QixXQUFMLENBQWlCcUIsUUFBakIsR0FBNEJBLFFBQTVCO0FBQ0gsR0FuQ0k7QUFvQ0w7QUFDQUUsRUFBQUEsZ0JBQWdCLEVBQUUsMEJBQVVDLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3JDLFFBQUlDLElBQUksR0FBR0YsS0FBSyxDQUFDbEIsSUFBTixDQUFXcUIsWUFBWCxDQUF3QixNQUF4QixDQUFYO0FBQ0EsUUFBSSxDQUFDRCxJQUFELElBQVNBLElBQUksQ0FBQ0UsU0FBTCxJQUFrQixDQUEvQixFQUFrQztBQUNsQyxTQUFLeEIsS0FBTCxJQUFjc0IsSUFBSSxDQUFDRSxTQUFuQjtBQUNBRixJQUFBQSxJQUFJLENBQUNHLEdBQUw7QUFDQSxTQUFLeEIsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLTCxXQUFMLENBQWlCTSxJQUFqQixDQUFzQkMsT0FBdEIsR0FBZ0MsR0FBaEM7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS0MsU0FBTDs7QUFDQSxRQUFJLEtBQUtMLEtBQUwsSUFBYyxDQUFsQixFQUFxQjtBQUNqQixXQUFLRSxJQUFMLENBQVVJLElBQVYsQ0FBZSxPQUFmO0FBQ0g7QUFDSixHQWpESTtBQWtETG9CLEVBQUFBLGVBQWUsRUFBRSx5QkFBVU4sS0FBVixFQUFpQkMsSUFBakIsRUFBdUIsQ0FDdkMsQ0FuREk7QUFvREw7QUFDQU0sRUFBQUEsZUFBZSxFQUFFLHlCQUFVUCxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QixDQUNwQztBQUNILEdBdkRJO0FBd0RMTyxFQUFBQSxNQXhESyxrQkF3REVDLEVBeERGLEVBd0RNO0FBQ1AsU0FBS3pCLFFBQUwsSUFBaUJ5QixFQUFqQjs7QUFDQSxRQUFJLEtBQUs1QixNQUFMLElBQWUsS0FBS0csUUFBTCxHQUFnQixDQUFuQyxFQUFzQztBQUNsQyxXQUFLSCxNQUFMLEdBQWMsS0FBZDtBQUNBLFdBQUtMLFdBQUwsQ0FBaUJNLElBQWpCLENBQXNCQyxPQUF0QixHQUFnQyxDQUFoQztBQUNIO0FBQ0o7QUE5REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEhwQ29tcG9uZW50ID0gcmVxdWlyZShcImhwQ29tcG9uZW50XCIpOyAvL+axoOWtkOe7hOS7tlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBIcENvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwcm9ncmVzc0JhcjogY2MuUHJvZ3Jlc3NCYXJcclxuICAgIH0sXHJcbiAgICAvL+WPl+WIsOeahOS8pOWus1xyXG4gICAgb25IdXJ0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJIcCAtPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmlzU2hvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5zaG93VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCYXIoKTtcclxuICAgICAgICBpZiAodGhpcy5jdXJIcCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZGVhdGhcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmVtaXQoXCJkZWF0aFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnkgPSB0aGlzLnByb2dyZXNzQmFyLm5vZGUueTtcclxuICAgIH0sXHJcbiAgICB1bnVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgfSxcclxuICAgIHJldXNlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMudG90YWxIcCA9IHRoaXMuY3VySHAgPSBkYXRhLmhwOyAvL+aVsOaNrumFjee9rlxyXG4gICAgICAgIHRoaXMudXBkYXRlQmFyKCk7XHJcbiAgICAgICAgdGhpcy5zaG93VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5pc1Nob3cgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5ub2RlLnkgPSAodGhpcy55ICsgZGF0YS56eSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlQmFyKCkge1xyXG4gICAgICAgIHZhciBwcm9ncmVzcyA9ICh0aGlzLmN1ckhwIC8gdGhpcy50b3RhbEhwKS5mb3JtYXQoKTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgICB9LFxyXG4gICAgLy/norDmkp7mo4DmtYvliLBcclxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIHZhciBodXJ0ID0gb3RoZXIubm9kZS5nZXRDb21wb25lbnQoXCJodXJ0XCIpO1xyXG4gICAgICAgIGlmICghaHVydCB8fCBodXJ0Lmh1cnRWYWx1ZSA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJIcCAtPSBodXJ0Lmh1cnRWYWx1ZTtcclxuICAgICAgICBodXJ0LmVuZCgpO1xyXG4gICAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLnNob3dUaW1lID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJhcigpO1xyXG4gICAgICAgIGlmICh0aGlzLmN1ckhwIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJkZWF0aFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Db2xsaXNpb25TdGF5OiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcclxuICAgIH0sXHJcbiAgICAvL+eisOaSnumAgOWHulxyXG4gICAgb25Db2xsaXNpb25FeGl0OiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICAvLyBjYy5sb2coXCLnorDmkp7pgIDlh7pcIilcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLnNob3dUaW1lICs9IGR0O1xyXG4gICAgICAgIGlmICh0aGlzLmlzU2hvdyAmJiB0aGlzLnNob3dUaW1lID4gMikge1xyXG4gICAgICAgICAgICB0aGlzLmlzU2hvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==