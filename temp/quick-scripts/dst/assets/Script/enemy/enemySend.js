
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/enemy/enemySend.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c7c8EDVUFGTpxPzzWqkAL+', 'enemySend');
// Script/enemy/enemySend.js

"use strict";

var PoolComponent = require("PoolComponent");

cc.Class({
  "extends": PoolComponent,
  properties: {
    bulletName: "bullet1",
    parent: cc.Node,
    sendNode: cc.Node,
    shootNum: 5
  },
  unuse: function unuse() {
    this.shooting = false;
    this.shoot_num = 0;
    this.parent.off("shoot_start", this.shoot_start, this);
    this.parent.off("shoot_end", this.shoot_end, this);
  },
  reuse: function reuse(data) {
    this.data = _.clone(data);
    if (!this.parent) this.parent = this.node.parent;
    this.parent.on("shoot_start", this.shoot_start, this);
    this.parent.on("shoot_end", this.shoot_end, this);
    this.shooting = false;
    this.shoot_num = 0;
  },
  //碰撞进入
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (this.parent.isDeath) return;
    if (game.isOver) return;
    this.shoot_num = 0;

    if (this.shooting) {
      this.parent.emit("collision_shoot_start");
    }
  },
  //碰撞停留
  onCollisionStay: function onCollisionStay(other, self) {
    if (this.shooting) {
      this.shoot_num++;

      if (this.shoot_num >= this.shootNum) {
        this.shoot();
      }
    }
  },
  //碰撞退出
  onCollisionExit: function onCollisionExit(other, self) {
    this.shoot_num = 0;
  },
  //开始射击
  shoot_start: function shoot_start() {
    this.shooting = true;
  },
  //射击动作结束
  shoot_end: function shoot_end() {
    if (this.shooting) {
      this.shoot();
    } // this.shooting = false;

  },
  //该方法为生命周期方法，父类未必会有实现。
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {},
  shoot: function shoot() {
    this.shooting = false;
    var sendNode = this.sendNode || this.node;
    var shootPos = sendNode.convertToWorldSpaceAR(game.point1);
    var targetPos = sendNode.convertToWorldSpaceAR(game.point2);
    var angle = game.gameUtils.getRotation(shootPos, targetPos);

    if (this.node.scaleX < 0) {
      angle = 360 - angle;
    } else {} // _.assignIn(this.data, {


    this.data.prefabName = this.bulletName; //预制体名称

    this.data.v = shootPos; //位置

    this.data.angle = angle; //角度

    this.data.group = "enbull"; //组
    //prefabName

    game.emit("shoot", this.data);
    this.parent.emit("collision_shoot_end");
    this.shoot_num = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxlbmVteVxcZW5lbXlTZW5kLmpzIl0sIm5hbWVzIjpbIlBvb2xDb21wb25lbnQiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJidWxsZXROYW1lIiwicGFyZW50IiwiTm9kZSIsInNlbmROb2RlIiwic2hvb3ROdW0iLCJ1bnVzZSIsInNob290aW5nIiwic2hvb3RfbnVtIiwib2ZmIiwic2hvb3Rfc3RhcnQiLCJzaG9vdF9lbmQiLCJyZXVzZSIsImRhdGEiLCJfIiwiY2xvbmUiLCJub2RlIiwib24iLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwiaXNEZWF0aCIsImdhbWUiLCJpc092ZXIiLCJlbWl0Iiwib25Db2xsaXNpb25TdGF5Iiwic2hvb3QiLCJvbkNvbGxpc2lvbkV4aXQiLCJvbkRlc3Ryb3kiLCJvbkxvYWQiLCJzaG9vdFBvcyIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsInBvaW50MSIsInRhcmdldFBvcyIsInBvaW50MiIsImFuZ2xlIiwiZ2FtZVV0aWxzIiwiZ2V0Um90YXRpb24iLCJzY2FsZVgiLCJwcmVmYWJOYW1lIiwidiIsImdyb3VwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBM0I7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0gsYUFESjtBQUVMSSxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFLFNBREo7QUFFUkMsSUFBQUEsTUFBTSxFQUFFSixFQUFFLENBQUNLLElBRkg7QUFHUkMsSUFBQUEsUUFBUSxFQUFFTixFQUFFLENBQUNLLElBSEw7QUFJUkUsSUFBQUEsUUFBUSxFQUFFO0FBSkYsR0FGUDtBQVFMQyxFQUFBQSxLQUFLLEVBQUUsaUJBQVk7QUFDZixTQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixDQUFq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QVpJLENBWW1DOztBQUN2QyxTQUFLWSxJQUFMLENBQVUyQixDQUFWLEdBQWNWLFFBQWQsQ0FiSSxDQWFtQjs7QUFDdkIsU0FBS2pCLElBQUwsQ0FBVXNCLEtBQVYsR0FBa0JBLEtBQWxCLENBZEksQ0Fjb0I7O0FBQ3hCLFNBQUt0QixJQUFMLENBQVU0QixLQUFWLEdBQWtCLFFBQWxCLENBZkksQ0Fld0I7QUFDNUI7O0FBQ0FuQixJQUFBQSxJQUFJLENBQUNFLElBQUwsQ0FBVSxPQUFWLEVBQW1CLEtBQUtYLElBQXhCO0FBQ0EsU0FBS1gsTUFBTCxDQUFZc0IsSUFBWixDQUFpQixxQkFBakI7QUFDQSxTQUFLaEIsU0FBTCxHQUFpQixDQUFqQjtBQUNIO0FBaEZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBQb29sQ29tcG9uZW50ID0gcmVxdWlyZShcIlBvb2xDb21wb25lbnRcIilcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogUG9vbENvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBidWxsZXROYW1lOiBcImJ1bGxldDFcIixcclxuICAgICAgICBwYXJlbnQ6IGNjLk5vZGUsXHJcbiAgICAgICAgc2VuZE5vZGU6IGNjLk5vZGUsXHJcbiAgICAgICAgc2hvb3ROdW06IDVcclxuICAgIH0sXHJcbiAgICB1bnVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2hvb3RpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNob290X251bSA9IDA7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQub2ZmKFwic2hvb3Rfc3RhcnRcIiwgdGhpcy5zaG9vdF9zdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQub2ZmKFwic2hvb3RfZW5kXCIsIHRoaXMuc2hvb3RfZW5kLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICByZXVzZTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBfLmNsb25lKGRhdGEpO1xyXG4gICAgICAgIGlmICghdGhpcy5wYXJlbnQpIHRoaXMucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICB0aGlzLnBhcmVudC5vbihcInNob290X3N0YXJ0XCIsIHRoaXMuc2hvb3Rfc3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGFyZW50Lm9uKFwic2hvb3RfZW5kXCIsIHRoaXMuc2hvb3RfZW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNob290aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zaG9vdF9udW0gPSAwO1xyXG4gICAgfSxcclxuICAgIC8v56Kw5pKe6L+b5YWlXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQuaXNEZWF0aCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChnYW1lLmlzT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2hvb3RfbnVtID0gMDtcclxuICAgICAgICBpZiAodGhpcy5zaG9vdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5lbWl0KFwiY29sbGlzaW9uX3Nob290X3N0YXJ0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+eisOaSnuWBnOeVmVxyXG4gICAgb25Db2xsaXNpb25TdGF5OiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAodGhpcy5zaG9vdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnNob290X251bSsrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaG9vdF9udW0gPj0gdGhpcy5zaG9vdE51bSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG9vdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v56Kw5pKe6YCA5Ye6XHJcbiAgICBvbkNvbGxpc2lvbkV4aXQ6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIHRoaXMuc2hvb3RfbnVtID0gMDtcclxuICAgIH0sXHJcbiAgICAvL+W8gOWni+WwhOWHu1xyXG4gICAgc2hvb3Rfc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zaG9vdGluZyA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgLy/lsITlh7vliqjkvZznu5PmnZ9cclxuICAgIHNob290X2VuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zaG9vdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnNob290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuc2hvb3RpbmcgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICAvL+ivpeaWueazleS4uueUn+WRveWRqOacn+aWueazle+8jOeItuexu+acquW/heS8muacieWunueOsOOAglxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH0sXHJcbiAgICBzaG9vdCgpIHtcclxuICAgICAgICB0aGlzLnNob290aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIHNlbmROb2RlID0gdGhpcy5zZW5kTm9kZSB8fCB0aGlzLm5vZGU7XHJcbiAgICAgICAgbGV0IHNob290UG9zID0gc2VuZE5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGdhbWUucG9pbnQxKTtcclxuICAgICAgICBsZXQgdGFyZ2V0UG9zID0gc2VuZE5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGdhbWUucG9pbnQyKTtcclxuICAgICAgICBsZXQgYW5nbGUgPSBnYW1lLmdhbWVVdGlscy5nZXRSb3RhdGlvbihzaG9vdFBvcywgdGFyZ2V0UG9zKTtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnNjYWxlWCA8IDApIHtcclxuICAgICAgICAgICAgYW5nbGUgPSAzNjAgLSBhbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIF8uYXNzaWduSW4odGhpcy5kYXRhLCB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnByZWZhYk5hbWUgPSB0aGlzLmJ1bGxldE5hbWU7Ly/pooTliLbkvZPlkI3np7BcclxuICAgICAgICB0aGlzLmRhdGEudiA9IHNob290UG9zOy8v5L2N572uXHJcbiAgICAgICAgdGhpcy5kYXRhLmFuZ2xlID0gYW5nbGU7Ly/op5LluqZcclxuICAgICAgICB0aGlzLmRhdGEuZ3JvdXAgPSBcImVuYnVsbFwiOyAvL+e7hFxyXG4gICAgICAgIC8vcHJlZmFiTmFtZVxyXG4gICAgICAgIGdhbWUuZW1pdChcInNob290XCIsIHRoaXMuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQuZW1pdChcImNvbGxpc2lvbl9zaG9vdF9lbmRcIik7XHJcbiAgICAgICAgdGhpcy5zaG9vdF9udW0gPSAwO1xyXG4gICAgfVxyXG59KTtcclxuIl19