
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/factory/taPaoguan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3165e4GGOFNBJy2i4VpdT0f', 'taPaoguan');
// Script/factory/taPaoguan.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    sendNode: cc.Node,
    attackTme: 1,
    //攻击时间
    attack: 1000,
    //攻击力
    bulletName: "bullet5"
  },
  onDestroy: function onDestroy() {
    this.parent.off("death", this.death, this);
  },
  addEvent: function addEvent() {
    this.parent.on("death", this.death, this);
  },
  death: function death() {
    this.node.getComponent(cc.CircleCollider).enabled = false;
    var renderComponents = this.node.getComponents(cc.RenderComponent);
    var renderComponent = renderComponents[0];
    renderComponent.setMaterial(0, game.materias["dissolve"]);
  },
  onLoad: function onLoad() {
    this.targets = [];
    this.sendTime = 0;
    this.parent = this.node.parent;
    this.worldPos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
    var sx = this.node.scaleX; //* this.parent.scaleX;

    var psy = this.parent.scaleX; //* this.parent.scaleX;

    sx = sx * psy;
    this.flip = sx < 0;
    this.flip2 = psy < 0;
    this.targetGroup = "enbull2";

    if (this.node.group == "myeye") {
      this.targetGroup = "mybull2";
    }

    this.addEvent();
  },
  //碰撞进入
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (game.isOver) return;
    if (this.node.isDeath) return;
    var node = other.node;

    if (this.targets.indexOf(node) < 0) {
      this.targets.push(node);
    }
  },
  //碰撞退出
  onCollisionExit: function onCollisionExit(other, self) {
    if (game.isOver) return;
    if (this.parent.isDeath) return;
    var node = other.node;
    var idx = this.targets.indexOf(node);

    if (idx >= 0) {
      this.targets.splice(idx, 1);
    }
  },
  start: function start() {},
  update: function update(dt) {
    if (game.isOver) return;
    if (this.parent.isDeath) return;
    this.sendTime += dt;

    if (!this.targets || this.targets.length == 0) {
      //
      //this.sendTime = 0;
      return;
    }

    var target = this.targets[0];
    var targetPos = target.convertToWorldSpaceAR(game.point1); // game.root.emit("drawClear");
    // game.root.emit("draw", targetPos);
    //game.root.emit("draw", this.worldPos);

    var rotation = game.gameUtils.getRotation(this.worldPos, targetPos);

    if (this.flip) {
      rotation = rotation + 180;
    }

    if (this.flip2) {
      rotation = 360 - rotation;
    }

    this.node.angle = rotation; // dt * 10;

    if (this.sendTime > this.attackTme) //攻击时间到了
      {
        this.sendTime = 0;
        var sendPos = this.sendNode.convertToWorldSpaceAR(game.point1);
        rotation = game.gameUtils.getRotation(sendPos, targetPos); //game.emit("shootFire", "fire", "eff3", sendPos, rotation, this.targetGroup);//开火动画

        game.emit("shootFire", {
          aniName: "eff3",
          v: sendPos,
          angle: rotation
        }); //开火动画

        game.emit("shoot", {
          prefabName: this.bulletName,
          //预制体名称
          v: sendPos,
          //位置
          angle: rotation - 15,
          //角度
          group: this.targetGroup,
          //组
          attack: this.attack
        });
        game.emit("shoot", {
          prefabName: this.bulletName,
          //预制体名称
          v: sendPos,
          //位置
          angle: rotation,
          //角度
          group: this.targetGroup,
          //组
          attack: this.attack
        });
        game.emit("shoot", {
          prefabName: this.bulletName,
          //预制体名称
          v: sendPos,
          //位置
          angle: rotation + 15,
          //角度
          group: this.targetGroup,
          //组
          attack: this.attack
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxmYWN0b3J5XFx0YVBhb2d1YW4uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzZW5kTm9kZSIsIk5vZGUiLCJhdHRhY2tUbWUiLCJhdHRhY2siLCJidWxsZXROYW1lIiwib25EZXN0cm95IiwicGFyZW50Iiwib2ZmIiwiZGVhdGgiLCJhZGRFdmVudCIsIm9uIiwibm9kZSIsImdldENvbXBvbmVudCIsIkNpcmNsZUNvbGxpZGVyIiwiZW5hYmxlZCIsInJlbmRlckNvbXBvbmVudHMiLCJnZXRDb21wb25lbnRzIiwiUmVuZGVyQ29tcG9uZW50IiwicmVuZGVyQ29tcG9uZW50Iiwic2V0TWF0ZXJpYWwiLCJnYW1lIiwibWF0ZXJpYXMiLCJvbkxvYWQiLCJ0YXJnZXRzIiwic2VuZFRpbWUiLCJ3b3JsZFBvcyIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsInYyIiwic3giLCJzY2FsZVgiLCJwc3kiLCJmbGlwIiwiZmxpcDIiLCJ0YXJnZXRHcm91cCIsImdyb3VwIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsImlzT3ZlciIsImlzRGVhdGgiLCJpbmRleE9mIiwicHVzaCIsIm9uQ29sbGlzaW9uRXhpdCIsImlkeCIsInNwbGljZSIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJsZW5ndGgiLCJ0YXJnZXQiLCJ0YXJnZXRQb3MiLCJwb2ludDEiLCJyb3RhdGlvbiIsImdhbWVVdGlscyIsImdldFJvdGF0aW9uIiwiYW5nbGUiLCJzZW5kUG9zIiwiZW1pdCIsImFuaU5hbWUiLCJ2IiwicHJlZmFiTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRUosRUFBRSxDQUFDSyxJQURMO0FBRVJDLElB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SCxRQUFRLEdBQUcsRUFISDtBQUdNO0FBQ3JCbEIsVUFBQUEsS0FBSyxFQUFFLEtBQUtELFdBSkc7QUFJVTtBQUN6QjlCLFVBQUFBLE1BQU0sRUFBRSxLQUFLQTtBQUxFLFNBQW5CO0FBT0g7QUFDSjtBQTVHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc2VuZE5vZGU6IGNjLk5vZGUsXHJcbiAgICAgICAgYXR0YWNrVG1lOiAxLCAvL+aUu+WHu+aXtumXtFxyXG4gICAgICAgIGF0dGFjazogMTAwMCwgLy/mlLvlh7vliptcclxuICAgICAgICBidWxsZXROYW1lOiBcImJ1bGxldDVcIlxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnBhcmVudC5vZmYoXCJkZWF0aFwiLCB0aGlzLmRlYXRoLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBhZGRFdmVudCgpIHtcclxuICAgICAgICB0aGlzLnBhcmVudC5vbihcImRlYXRoXCIsIHRoaXMuZGVhdGgsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIGRlYXRoKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQ2lyY2xlQ29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgcmVuZGVyQ29tcG9uZW50cyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzKGNjLlJlbmRlckNvbXBvbmVudCk7XHJcbiAgICAgICAgbGV0IHJlbmRlckNvbXBvbmVudCA9IHJlbmRlckNvbXBvbmVudHNbMF07XHJcbiAgICAgICAgcmVuZGVyQ29tcG9uZW50LnNldE1hdGVyaWFsKDAsIGdhbWUubWF0ZXJpYXNbXCJkaXNzb2x2ZVwiXSk7XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2VuZFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICB0aGlzLndvcmxkUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgbGV0IHN4ID0gdGhpcy5ub2RlLnNjYWxlWDsgLy8qIHRoaXMucGFyZW50LnNjYWxlWDtcclxuICAgICAgICBsZXQgcHN5ID0gdGhpcy5wYXJlbnQuc2NhbGVYOyAvLyogdGhpcy5wYXJlbnQuc2NhbGVYO1xyXG4gICAgICAgIHN4ID0gc3ggKiBwc3k7XHJcbiAgICAgICAgdGhpcy5mbGlwID0gc3ggPCAwO1xyXG4gICAgICAgIHRoaXMuZmxpcDIgPSBwc3kgPCAwO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0R3JvdXAgPSBcImVuYnVsbDJcIjtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLmdyb3VwID09IFwibXlleWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldEdyb3VwID0gXCJteWJ1bGwyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcclxuICAgIH0sXHJcbiAgICAvL+eisOaSnui/m+WFpVxyXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYgKGdhbWUuaXNPdmVyKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5pc0RlYXRoKSByZXR1cm47XHJcbiAgICAgICAgbGV0IG5vZGUgPSBvdGhlci5ub2RlO1xyXG4gICAgICAgIGlmICh0aGlzLnRhcmdldHMuaW5kZXhPZihub2RlKSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v56Kw5pKe6YCA5Ye6XHJcbiAgICBvbkNvbGxpc2lvbkV4aXQ6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGlmIChnYW1lLmlzT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5pc0RlYXRoKSByZXR1cm47XHJcbiAgICAgICAgbGV0IG5vZGUgPSBvdGhlci5ub2RlO1xyXG4gICAgICAgIGxldCBpZHggPSB0aGlzLnRhcmdldHMuaW5kZXhPZihub2RlKVxyXG4gICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhcmdldHMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmIChnYW1lLmlzT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5pc0RlYXRoKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zZW5kVGltZSArPSBkdDtcclxuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0cyB8fCB0aGlzLnRhcmdldHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy90aGlzLnNlbmRUaW1lID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXRzWzBdO1xyXG4gICAgICAgIGxldCB0YXJnZXRQb3MgPSB0YXJnZXQuY29udmVydFRvV29ybGRTcGFjZUFSKGdhbWUucG9pbnQxKTtcclxuICAgICAgICAvLyBnYW1lLnJvb3QuZW1pdChcImRyYXdDbGVhclwiKTtcclxuICAgICAgICAvLyBnYW1lLnJvb3QuZW1pdChcImRyYXdcIiwgdGFyZ2V0UG9zKTtcclxuICAgICAgICAvL2dhbWUucm9vdC5lbWl0KFwiZHJhd1wiLCB0aGlzLndvcmxkUG9zKTtcclxuICAgICAgICBsZXQgcm90YXRpb24gPSBnYW1lLmdhbWVVdGlscy5nZXRSb3RhdGlvbih0aGlzLndvcmxkUG9zLCB0YXJnZXRQb3MpO1xyXG4gICAgICAgIGlmICh0aGlzLmZsaXApIHtcclxuICAgICAgICAgICAgcm90YXRpb24gPSByb3RhdGlvbiArIDE4MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZmxpcDIpIHtcclxuICAgICAgICAgICAgcm90YXRpb24gPSAzNjAgLSByb3RhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gcm90YXRpb247Ly8gZHQgKiAxMDtcclxuICAgICAgICBpZiAodGhpcy5zZW5kVGltZSA+IHRoaXMuYXR0YWNrVG1lKSAvL+aUu+WHu+aXtumXtOWIsOS6hlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZW5kVGltZSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBzZW5kUG9zID0gdGhpcy5zZW5kTm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoZ2FtZS5wb2ludDEpO1xyXG4gICAgICAgICAgICByb3RhdGlvbiA9IGdhbWUuZ2FtZVV0aWxzLmdldFJvdGF0aW9uKHNlbmRQb3MsIHRhcmdldFBvcyk7XHJcbiAgICAgICAgICAgIC8vZ2FtZS5lbWl0KFwic2hvb3RGaXJlXCIsIFwiZmlyZVwiLCBcImVmZjNcIiwgc2VuZFBvcywgcm90YXRpb24sIHRoaXMudGFyZ2V0R3JvdXApOy8v5byA54Gr5Yqo55S7XHJcbiAgICAgICAgICAgIGdhbWUuZW1pdChcInNob290RmlyZVwiLCB7YW5pTmFtZTogXCJlZmYzXCIsIHY6IHNlbmRQb3MsIGFuZ2xlOiByb3RhdGlvbn0pOy8v5byA54Gr5Yqo55S7XHJcbiAgICAgICAgICAgIGdhbWUuZW1pdChcInNob290XCIsIHtcclxuICAgICAgICAgICAgICAgIHByZWZhYk5hbWU6IHRoaXMuYnVsbGV0TmFtZSwvL+mihOWItuS9k+WQjeensFxyXG4gICAgICAgICAgICAgICAgdjogc2VuZFBvcywgLy/kvY3nva5cclxuICAgICAgICAgICAgICAgIGFuZ2xlOiByb3RhdGlvbiAtIDE1LC8v6KeS5bqmXHJcbiAgICAgICAgICAgICAgICBncm91cDogdGhpcy50YXJnZXRHcm91cCwgLy/nu4RcclxuICAgICAgICAgICAgICAgIGF0dGFjazogdGhpcy5hdHRhY2tcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGdhbWUuZW1pdChcInNob290XCIsIHtcclxuICAgICAgICAgICAgICAgIHByZWZhYk5hbWU6IHRoaXMuYnVsbGV0TmFtZSwvL+mihOWItuS9k+WQjeensFxyXG4gICAgICAgICAgICAgICAgdjogc2VuZFBvcywgLy/kvY3nva5cclxuICAgICAgICAgICAgICAgIGFuZ2xlOiByb3RhdGlvbiwvL+inkuW6plxyXG4gICAgICAgICAgICAgICAgZ3JvdXA6IHRoaXMudGFyZ2V0R3JvdXAsIC8v57uEXHJcbiAgICAgICAgICAgICAgICBhdHRhY2s6IHRoaXMuYXR0YWNrXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBnYW1lLmVtaXQoXCJzaG9vdFwiLCB7XHJcbiAgICAgICAgICAgICAgICBwcmVmYWJOYW1lOiB0aGlzLmJ1bGxldE5hbWUsLy/pooTliLbkvZPlkI3np7BcclxuICAgICAgICAgICAgICAgIHY6IHNlbmRQb3MsIC8v5L2N572uXHJcbiAgICAgICAgICAgICAgICBhbmdsZTogcm90YXRpb24gKyAxNSwvL+inkuW6plxyXG4gICAgICAgICAgICAgICAgZ3JvdXA6IHRoaXMudGFyZ2V0R3JvdXAsIC8v57uEXHJcbiAgICAgICAgICAgICAgICBhdHRhY2s6IHRoaXMuYXR0YWNrXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=