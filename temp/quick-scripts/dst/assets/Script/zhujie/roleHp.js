
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/zhujie/roleHp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b33dfeL3RtOPbJAJ9XMFEdQ', 'roleHp');
// Script/zhujie/roleHp.js

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
    game.emit("zhujiaoXue", this.curHp, this.totalHp);
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
      this.parent.emit("death");
    }
  },
  onCollisionStay: function onCollisionStay(other, self) {},
  //碰撞退出
  onCollisionExit: function onCollisionExit(other, self) {// cc.log("碰撞退出")
  },
  onLoad: function onLoad() {
    var weaponData = require("zhujueConfig");

    this.totalHp = weaponData.hp;
    this.curHp = this.totalHp;
    this.parent = this.node.parent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx6aHVqaWVcXHJvbGVIcC5qcyJdLCJuYW1lcyI6WyJIcENvbXBvbmVudCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsInByb2dyZXNzQmFyIiwiUHJvZ3Jlc3NCYXIiLCJ0b3RhbEhwIiwib25IdXJ0IiwidmFsdWUiLCJjdXJIcCIsImlzU2hvdyIsIm5vZGUiLCJvcGFjaXR5Iiwic2hvd1RpbWUiLCJ1cGRhdGVCYXIiLCJlbWl0IiwicGFyZW50Iiwib25EZXN0cm95IiwicHJvZ3Jlc3MiLCJmb3JtYXQiLCJnYW1lIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsImh1cnQiLCJnZXRDb21wb25lbnQiLCJodXJ0VmFsdWUiLCJlbmQiLCJvbkNvbGxpc2lvblN0YXkiLCJvbkNvbGxpc2lvbkV4aXQiLCJvbkxvYWQiLCJ3ZWFwb25EYXRhIiwiaHAiLCJzdGFydCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFdBQVcsR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBekIsRUFBMEM7OztBQUMxQ0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTSCxXQURKO0FBRUxJLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUVILEVBQUUsQ0FBQ0ksV0FEUjtBQUVSQyxJQUFBQSxPQUFPLEVBQUU7QUFGRCxHQUZQO0FBTUw7QUFDQUMsRUFBQUEsTUFQSyxrQkFPRUMsS0FQRixFQU9TO0FBQ1YsU0FBS0MsS0FBTCxJQUFjRCxLQUFkO0FBQ0EsU0FBS0UsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLTixXQUFMLENBQWlCTyxJQUFqQixDQUFzQkMsT0FBdEIsR0FBZ0MsR0FBaEM7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS0MsU0FBTDs7QUFDQSxRQUFJLEtBQUtMLEtBQUwsSUFBYyxDQUFsQixFQUFxQjtBQUNqQixXQUFLRSxJQUFMLENBQVVJLElBQVYsQ0FBZSxPQUFmO0FBQ0EsV0FBS0MsTUFBTCxDQUFZRCxJQUFaLENBQWlCLE9BQWpCO0FBQ0g7QUFDSixHQWpCSTtBQWtCTEUsRUFBQUEsU0FsQkssdUJBa0JPLENBQ1gsQ0FuQkk7QUFvQkxILEVBQUFBLFNBcEJLLHVCQW9CTztBQUNSLFFBQUlJLFFBQVEsR0FBRyxDQUFDLEtBQUtULEtBQUwsR0FBYSxLQUFLSCxPQUFuQixFQUE0QmEsTUFBNUIsRUFBZjtBQUNBLFNBQUtmLFdBQUwsQ0FBaUJjLFFBQWpCLEdBQTRCQSxRQUE1QjtBQUNBRSxJQUFBQSxJQUFJLENBQUNMLElBQUwsQ0FBVSxZQUFWLEVBQXdCLEtBQUtOLEtBQTdCLEVBQW9DLEtBQUtILE9BQXpDO0FBQ0gsR0F4Qkk7QUF5Qkw7QUFDQWUsRUFBQUEsZ0JBQWdCLEVBQUUsMEJBQVVDLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3JDLFFBQUlDLElBQUksR0FBR0YsS0FBSyxDQUFDWCxJQUFOLENBQVdjLFlBQVgsQ0FBd0IsTUFBeEIsQ0FBWDtBQUNBLFFBQUksQ0FBQ0QsSUFBRCxJQUFTQSxJQUFJLENBQUNFLFNBQUwsSUFBa0IsQ0FBL0IsRUFBa0M7QUFDbEMsU0FBS2pCLEtBQUwsSUFBY2UsSUFBSSxDQUFDRSxTQUFuQjtBQUNBRixJQUFBQSxJQUFJLENBQUNHLEdBQUw7QUFDQSxTQUFLakIsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLTixXQUFMLENBQWlCTyxJQUFqQixDQUFzQkMsT0FBdEIsR0FBZ0MsR0FBaEM7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS0MsU0FBTDs7QUFDQSxRQUFJLEtBQUtMLEtBQUwsSUFBYyxDQUFsQixFQUFxQjtBQUNqQixXQUFLRSxJQUFMLENBQVVJLElBQVYsQ0FBZSxPQUFmO0FBQ0EsV0FBS0MsTUFBTCxDQUFZRCxJQUFaLENBQWlCLE9BQWpCO0FBQ0g7QUFDSixHQXZDSTtBQXdDTGEsRUFBQUEsZUFBZSxFQUFFLHlCQUFVTixLQUFWLEVBQWlCQyxJQUFqQixFQUF1QixDQUN2QyxDQXpDSTtBQTBDTDtBQUNBTSxFQUFBQSxlQUFlLEVBQUUseUJBQVVQLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCLENBQ3BDO0FBQ0gsR0E3Q0k7QUE4Q0xPLEVBQUFBLE1BOUNLLG9CQThDSTtBQUNMLFFBQUlDLFVBQVUsR0FBRy9CLE9BQU8sQ0FBQyxjQUFELENBQXhCOztBQUNBLFNBQUtNLE9BQUwsR0FBZXlCLFVBQVUsQ0FBQ0MsRUFBMUI7QUFDQSxTQUFLdkIsS0FBTCxHQUFhLEtBQUtILE9BQWxCO0FBQ0EsU0FBS1UsTUFBTCxHQUFjLEtBQUtMLElBQUwsQ0FBVUssTUFBeEI7QUFDQSxTQUFLRixTQUFMO0FBQ0EsU0FBS0QsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtILE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS04sV0FBTCxDQUFpQk8sSUFBakIsQ0FBc0JDLE9BQXRCLEdBQWdDLENBQWhDO0FBQ0gsR0F2REk7QUF3RExxQixFQUFBQSxLQXhESyxtQkF3REcsQ0FDUCxDQXpESTtBQTBETEMsRUFBQUEsTUExREssa0JBMERFQyxFQTFERixFQTBETTtBQUNQLFNBQUt0QixRQUFMLElBQWlCc0IsRUFBakI7O0FBQ0EsUUFBSSxLQUFLekIsTUFBTCxJQUFlLEtBQUtHLFFBQUwsR0FBZ0IsQ0FBbkMsRUFBc0M7QUFDbEMsV0FBS0gsTUFBTCxHQUFjLEtBQWQ7QUFDQSxXQUFLTixXQUFMLENBQWlCTyxJQUFqQixDQUFzQkMsT0FBdEIsR0FBZ0MsQ0FBaEM7QUFDSDtBQUNKO0FBaEVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBIcENvbXBvbmVudCA9IHJlcXVpcmUoXCJocENvbXBvbmVudFwiKTsgLy/msaDlrZDnu4Tku7ZcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogSHBDb21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcHJvZ3Jlc3NCYXI6IGNjLlByb2dyZXNzQmFyLFxyXG4gICAgICAgIHRvdGFsSHA6IDEwMDBcclxuICAgIH0sXHJcbiAgICAvL+WPl+WIsOeahOS8pOWus1xyXG4gICAgb25IdXJ0KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJIcCAtPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmlzU2hvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5zaG93VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCYXIoKTtcclxuICAgICAgICBpZiAodGhpcy5jdXJIcCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiZGVhdGhcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmVtaXQoXCJkZWF0aFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUJhcigpIHtcclxuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAodGhpcy5jdXJIcCAvIHRoaXMudG90YWxIcCkuZm9ybWF0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgICAgIGdhbWUuZW1pdChcInpodWppYW9YdWVcIiwgdGhpcy5jdXJIcCwgdGhpcy50b3RhbEhwKTtcclxuICAgIH0sXHJcbiAgICAvL+eisOaSnuajgOa1i+WIsFxyXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgdmFyIGh1cnQgPSBvdGhlci5ub2RlLmdldENvbXBvbmVudChcImh1cnRcIik7XHJcbiAgICAgICAgaWYgKCFodXJ0IHx8IGh1cnQuaHVydFZhbHVlID09IDApIHJldHVybjtcclxuICAgICAgICB0aGlzLmN1ckhwIC09IGh1cnQuaHVydFZhbHVlO1xyXG4gICAgICAgIGh1cnQuZW5kKCk7XHJcbiAgICAgICAgdGhpcy5pc1Nob3cgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMuc2hvd1RpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQmFyKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VySHAgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChcImRlYXRoXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5lbWl0KFwiZGVhdGhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQ29sbGlzaW9uU3RheTogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICB9LFxyXG4gICAgLy/norDmkp7pgIDlh7pcclxuICAgIG9uQ29sbGlzaW9uRXhpdDogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgLy8gY2MubG9nKFwi56Kw5pKe6YCA5Ye6XCIpXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHZhciB3ZWFwb25EYXRhID0gcmVxdWlyZShcInpodWp1ZUNvbmZpZ1wiKTtcclxuICAgICAgICB0aGlzLnRvdGFsSHAgPSB3ZWFwb25EYXRhLmhwO1xyXG4gICAgICAgIHRoaXMuY3VySHAgPSB0aGlzLnRvdGFsSHA7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIHRoaXMudXBkYXRlQmFyKCk7XHJcbiAgICAgICAgdGhpcy5zaG93VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5pc1Nob3cgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLm5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5zaG93VGltZSArPSBkdDtcclxuICAgICAgICBpZiAodGhpcy5pc1Nob3cgJiYgdGhpcy5zaG93VGltZSA+IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1Nob3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5ub2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=