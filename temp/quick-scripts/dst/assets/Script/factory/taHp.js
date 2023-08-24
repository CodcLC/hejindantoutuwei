
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/factory/taHp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6995994YAJM0bDydGhmuXN4', 'taHp');
// Script/factory/taHp.js

"use strict";

var HpComponent = require("hpComponent"); //池子组件


cc.Class({
  "extends": HpComponent,
  properties: {
    progressBar: cc.ProgressBar,
    totalHp: 1000
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
  updateBar: function updateBar() {
    var progress = (this.curHp / this.totalHp).format();
    this.progressBar.progress = progress;
    this.node.emit("dissolve", 1 - progress);
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
    } //D:\project\client\dbl-client\build\
    // jsb-link\frameworks\runtime-src\proj.android-studio\app\jni\Android.mk

  },
  onCollisionStay: function onCollisionStay(other, self) {},
  //碰撞退出
  onCollisionExit: function onCollisionExit(other, self) {// cc.log("碰撞退出")
  },
  onLoad: function onLoad() {
    this.curHp = this.totalHp;
    this.updateBar();
    this.showTime = 0;
    this.isShow = false;
    this.progressBar.node.opacity = 0;
  },
  start: function start() {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxmYWN0b3J5XFx0YUhwLmpzIl0sIm5hbWVzIjpbIkhwQ29tcG9uZW50IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicHJvZ3Jlc3NCYXIiLCJQcm9ncmVzc0JhciIsInRvdGFsSHAiLCJvbkh1cnQiLCJ2YWx1ZSIsImN1ckhwIiwiaXNTaG93Iiwibm9kZSIsIm9wYWNpdHkiLCJzaG93VGltZSIsInVwZGF0ZUJhciIsImVtaXQiLCJwYXJlbnQiLCJvbkRlc3Ryb3kiLCJwcm9ncmVzcyIsImZvcm1hdCIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJodXJ0IiwiZ2V0Q29tcG9uZW50IiwiaHVydFZhbHVlIiwiZW5kIiwib25Db2xsaXNpb25TdGF5Iiwib25Db2xsaXNpb25FeGl0Iiwib25Mb2FkIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQXpCLEVBQTBDOzs7QUFDMUNDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0gsV0FESjtBQUVMSSxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsV0FBVyxFQUFFSCxFQUFFLENBQUNJLFdBRFI7QUFFUkMsSUFBQUEsT0FBTyxFQUFFO0FBRkQsR0FGUDtBQU1MO0FBQ0FDLEVBQUFBLE1BUEssa0JBT0VDLEtBUEYsRUFPUztBQUNWLFNBQUtDLEtBQUwsSUFBY0QsS0FBZDtBQUNBLFNBQUtFLE1BQUwsR0FBYyxJQUFkO0FBQ0EsU0FBS04sV0FBTCxDQUFpQk8sSUFBakIsQ0FBc0JDLE9BQXRCLEdBQWdDLEdBQWhDO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLFNBQUw7O0FBQ0EsUUFBSSxLQUFLTCxLQUFMLElBQWMsQ0FBbEIsRUFBcUI7QUFDakIsV0FBS0UsSUFBTCxDQUFVSSxJQUFWLENBQWUsT0FBZjtBQUNBLFdBQUtDLE1BQUwsQ0FBWUQsSUFBWixDQUFpQixPQUFqQjtBQUNIO0FBQ0osR0FqQkk7QUFrQkxFLEVBQUFBLFNBbEJLLHVCQWtCTyxDQUNYLENBbkJJO0FBb0JMSCxFQUFBQSxTQXBCSyx1QkFvQk87QUFDUixRQUFJSSxRQUFRLEdBQUcsQ0FBQyxLQUFLVCxLQUFMLEdBQWEsS0FBS0gsT0FBbkIsRUFBNEJhLE1BQTVCLEVBQWY7QUFDQSxTQUFLZixXQUFMLENBQWlCYyxRQUFqQixHQUE0QkEsUUFBNUI7QUFDQSxTQUFLUCxJQUFMLENBQVVJLElBQVYsQ0FBZSxVQUFmLEVBQTRCLElBQUlHLFFBQWhDO0FBQ0gsR0F4Qkk7QUF5Qkw7QUFDQUUsRUFBQUEsZ0JBQWdCLEVBQUUsMEJBQVVDLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3JDLFFBQUlDLElBQUksR0FBR0YsS0FBSyxDQUFDVixJQUFOLENBQVdhLFlBQVgsQ0FBd0IsTUFBeEIsQ0FBWDtBQUNBLFFBQUksQ0FBQ0QsSUFBRCxJQUFTQSxJQUFJLENBQUNFLFNBQUwsSUFBa0IsQ0FBL0IsRUFBa0M7QUFDbEMsU0FBS2hCLEtBQUwsSUFBY2MsSUFBSSxDQUFDRSxTQUFuQjtBQUNBRixJQUFBQSxJQUFJLENBQUNHLEdBQUw7QUFDQSxTQUFLaEIsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLTixXQUFMLENBQWlCTyxJQUFqQixDQUFzQkMsT0FBdEIsR0FBZ0MsR0FBaEM7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS0MsU0FBTDs7QUFDQSxRQUFJLEtBQUtMLEtBQUwsSUFBYyxDQUFsQixFQUFxQjtBQUNqQixXQUFLRSxJQUFMLENBQVVJLElBQVYsQ0FBZSxPQUFmO0FBQ0gsS0FYb0MsQ0FZckM7QUFDQTs7QUFDSCxHQXhDSTtBQXlDTFksRUFBQUEsZUFBZSxFQUFFLHlCQUFVTixLQUFWLEVBQWlCQyxJQUFqQixFQUF1QixDQUN2QyxDQTFDSTtBQTJDTDtBQUNBTSxFQUFBQSxlQUFlLEVBQUUseUJBQVVQLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCLENBQ3BDO0FBQ0gsR0E5Q0k7QUErQ0xPLEVBQUFBLE1BL0NLLG9CQStDSTtBQUNMLFNBQUtwQixLQUFMLEdBQWEsS0FBS0gsT0FBbEI7QUFDQSxTQUFLUSxTQUFMO0FBQ0EsU0FBS0QsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtILE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS04sV0FBTCxDQUFpQk8sSUFBakIsQ0FBc0JDLE9BQXRCLEdBQWdDLENBQWhDO0FBQ0gsR0FyREk7QUFzRExrQixFQUFBQSxLQXRESyxtQkFzREcsQ0FDUCxDQXZESTtBQXdETEMsRUFBQUEsTUF4REssa0JBd0RFQyxFQXhERixFQXdETTtBQUNQLFNBQUtuQixRQUFMLElBQWlCbUIsRUFBakI7O0FBQ0EsUUFBSSxLQUFLdEIsTUFBTCxJQUFlLEtBQUtHLFFBQUwsR0FBZ0IsQ0FBbkMsRUFBc0M7QUFDbEMsV0FBS0gsTUFBTCxHQUFjLEtBQWQ7QUFDQSxXQUFLTixXQUFMLENBQWlCTyxJQUFqQixDQUFzQkMsT0FBdEIsR0FBZ0MsQ0FBaEM7QUFDSDtBQUNKO0FBOURJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBIcENvbXBvbmVudCA9IHJlcXVpcmUoXCJocENvbXBvbmVudFwiKTsgLy/msaDlrZDnu4Tku7ZcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogSHBDb21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcHJvZ3Jlc3NCYXI6IGNjLlByb2dyZXNzQmFyLFxyXG4gICAgICAgIHRvdGFsSHA6IDEwMDBcclxuICAgIH0sXHJcbiAgICAvL+WPl+WIsOeahOS8pOWus1xyXG4gICAgb25IdXJ0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJIcCAtPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmlzU2hvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5zaG93VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCYXIoKTtcclxuICAgICAgICBpZiAodGhpcy5jdXJIcCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZGVhdGhcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmVtaXQoXCJkZWF0aFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUJhcigpIHtcclxuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAodGhpcy5jdXJIcCAvIHRoaXMudG90YWxIcCkuZm9ybWF0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZGlzc29sdmVcIiwgKDEgLSBwcm9ncmVzcykpO1xyXG4gICAgfSxcclxuICAgIC8v56Kw5pKe5qOA5rWL5YiwXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICB2YXIgaHVydCA9IG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KFwiaHVydFwiKTtcclxuICAgICAgICBpZiAoIWh1cnQgfHwgaHVydC5odXJ0VmFsdWUgPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3VySHAgLT0gaHVydC5odXJ0VmFsdWU7XHJcbiAgICAgICAgaHVydC5lbmQoKTtcclxuICAgICAgICB0aGlzLmlzU2hvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5zaG93VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCYXIoKTtcclxuICAgICAgICBpZiAodGhpcy5jdXJIcCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZGVhdGhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vRDpcXHByb2plY3RcXGNsaWVudFxcZGJsLWNsaWVudFxcYnVpbGRcXFxyXG4gICAgICAgIC8vIGpzYi1saW5rXFxmcmFtZXdvcmtzXFxydW50aW1lLXNyY1xccHJvai5hbmRyb2lkLXN0dWRpb1xcYXBwXFxqbmlcXEFuZHJvaWQubWtcclxuICAgIH0sXHJcbiAgICBvbkNvbGxpc2lvblN0YXk6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgfSxcclxuICAgIC8v56Kw5pKe6YCA5Ye6XHJcbiAgICBvbkNvbGxpc2lvbkV4aXQ6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIC8vIGNjLmxvZyhcIueisOaSnumAgOWHulwiKVxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmN1ckhwID0gdGhpcy50b3RhbEhwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQmFyKCk7XHJcbiAgICAgICAgdGhpcy5zaG93VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5pc1Nob3cgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5zaG93VGltZSArPSBkdDtcclxuICAgICAgICBpZiAodGhpcy5pc1Nob3cgJiYgdGhpcy5zaG93VGltZSA+IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1Nob3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5ub2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=