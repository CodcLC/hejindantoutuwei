
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/zhujie/roleFind.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00e85gV5ClN0rl+w+GCQY6l', 'roleFind');
// Script/zhujie/roleFind.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": cc.Component,
  properties: {
    hero: cc.Node
  },
  unuse: function unuse() {
    game.off("aim", this.aim, this);
  },
  reuse: function reuse(data) {
    this.targets = []; //game.off("aim", this.aim, this);
  },
  onLoad: function onLoad() {
    this.targets = [];
    game.on("aim", this.aim, this);
  },
  aim: function aim(flg) {
    this.aimFlg = flg;
  },
  //碰撞进入
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (game.isOver) return;
    if (this.node.isDeath) return;
    var node = other.node;

    if (this.targets.indexOf(node) < 0) {
      this.targets.push(node);
    }

    this.aimPos();
  },
  aimPos: function aimPos() {
    if (!this.hero || !this.aimFlg || !this.targets || this.targets.length == 0) return;
    var pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
    this.targets.sort(function (a, b) {
      var pos1 = a.convertToWorldSpaceAR(cc.v2(0, 0));
      var pos2 = b.convertToWorldSpaceAR(cc.v2(0, 0));
      var len1 = game.gameUtils.getLength(pos1, pos);
      var len2 = game.gameUtils.getLength(pos2, pos);
      return len1 - len2;
    });
    var target = this.targets[0];
    pos = target.convertToWorldSpaceAR(cc.v2(0, 50));
    this.hero.emit("aimPos", pos);
  },
  //碰撞停留
  onCollisionStay: function onCollisionStay(other, self) {
    this.aimPos();
  },
  //碰撞退出
  onCollisionExit: function onCollisionExit(other, self) {
    if (game.isOver) return;
    if (this.node.isDeath) return;
    var node = other.node;
    var idx = this.targets.indexOf(node);

    if (idx >= 0) {
      this.targets.splice(idx, 1);
    }

    this.aimPos();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx6aHVqaWVcXHJvbGVGaW5kLmpzIl0sIm5hbWVzIjpbIlBvb2xDb21wb25lbnQiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJoZXJvIiwiTm9kZSIsInVudXNlIiwiZ2FtZSIsIm9mZiIsImFpbSIsInJldXNlIiwiZGF0YSIsInRhcmdldHMiLCJvbkxvYWQiLCJvbiIsImZsZyIsImFpbUZsZyIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJpc092ZXIiLCJub2RlIiwiaXNEZWF0aCIsImluZGV4T2YiLCJwdXNoIiwiYWltUG9zIiwibGVuZ3RoIiwicG9zIiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwidjIiLCJzb3J0IiwiYSIsImIiLCJwb3MxIiwicG9zMiIsImxlbjEiLCJnYW1lVXRpbHMiLCJnZXRMZW5ndGgiLCJsZW4yIiwidGFyZ2V0IiwiZW1pdCIsIm9uQ29sbGlzaW9uU3RheSIsIm9uQ29sbGlzaW9uRXhpdCIsImlkeCIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTNCLEVBQThDOzs7QUFDOUNDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUVKLEVBQUUsQ0FBQ0s7QUFERCxHQUZQO0FBS0xDLEVBQUFBLEtBQUssRUFBRSxpQkFBWTtBQUNmQyxJQUFBQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFULEVBQWdCLEtBQUtDLEdBQXJCLEVBQTBCLElBQTFCO0FBQ0gsR0FQSTtBQVFMQyxFQUFBQSxLQUFLLEVBQUUsZUFBVUMsSUFBVixFQUFnQjtBQUNuQixTQUFLQyxPQUFMLEdBQWUsRUFBZixDQURtQixDQUVuQjtBQUNILEdBWEk7QUFZTEMsRUFB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QUFvQkQsR0FBcEIsRUFBeUIsQ0FBekI7QUFDSDs7QUFDRCxTQUFLbEIsTUFBTDtBQUNIO0FBekRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBQb29sQ29tcG9uZW50ID0gcmVxdWlyZShcIlBvb2xDb21wb25lbnRcIik7IC8v5rGg5a2Q57uE5Lu2XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBoZXJvOiBjYy5Ob2RlXHJcbiAgICB9LFxyXG4gICAgdW51c2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBnYW1lLm9mZihcImFpbVwiLCB0aGlzLmFpbSwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgcmV1c2U6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRzID0gW107XHJcbiAgICAgICAgLy9nYW1lLm9mZihcImFpbVwiLCB0aGlzLmFpbSwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IFtdO1xyXG4gICAgICAgIGdhbWUub24oXCJhaW1cIiwgdGhpcy5haW0sIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIGFpbShmbGcpIHtcclxuICAgICAgICB0aGlzLmFpbUZsZyA9IGZsZztcclxuICAgIH0sXHJcbiAgICAvL+eisOaSnui/m+WFpVxyXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYgKGdhbWUuaXNPdmVyKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5pc0RlYXRoKSByZXR1cm47XHJcbiAgICAgICAgbGV0IG5vZGUgPSBvdGhlci5ub2RlO1xyXG4gICAgICAgIGlmICh0aGlzLnRhcmdldHMuaW5kZXhPZihub2RlKSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWltUG9zKCk7XHJcbiAgICB9LFxyXG4gICAgYWltUG9zKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oZXJvIHx8ICF0aGlzLmFpbUZsZyB8fCAhdGhpcy50YXJnZXRzIHx8IHRoaXMudGFyZ2V0cy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICB0aGlzLnRhcmdldHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICBsZXQgcG9zMSA9IGEuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgbGV0IHBvczIgPSBiLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgICAgIGxldCBsZW4xID0gZ2FtZS5nYW1lVXRpbHMuZ2V0TGVuZ3RoKHBvczEsIHBvcyk7XHJcbiAgICAgICAgICAgIGxldCBsZW4yID0gZ2FtZS5nYW1lVXRpbHMuZ2V0TGVuZ3RoKHBvczIsIHBvcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBsZW4xIC0gbGVuMjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy50YXJnZXRzWzBdO1xyXG4gICAgICAgIHBvcyA9IHRhcmdldC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgNTApKTtcclxuICAgICAgICB0aGlzLmhlcm8uZW1pdChcImFpbVBvc1wiLCBwb3MpO1xyXG4gICAgfSxcclxuICAgIC8v56Kw5pKe5YGc55WZXHJcbiAgICBvbkNvbGxpc2lvblN0YXk6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xyXG4gICAgICAgIHRoaXMuYWltUG9zKCk7XHJcbiAgICB9LFxyXG4gICAgLy/norDmkp7pgIDlh7pcclxuICAgIG9uQ29sbGlzaW9uRXhpdDogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYgKGdhbWUuaXNPdmVyKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5pc0RlYXRoKSByZXR1cm47XHJcbiAgICAgICAgbGV0IG5vZGUgPSBvdGhlci5ub2RlO1xyXG4gICAgICAgIGxldCBpZHggPSB0aGlzLnRhcmdldHMuaW5kZXhPZihub2RlKTtcclxuICAgICAgICBpZiAoaWR4ID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFpbVBvcygpO1xyXG4gICAgfVxyXG59KTtcclxuIl19