
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/core/loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '409754rvwRFLbF2PxAq7PqJ', 'loading');
// Script/core/loading.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    progressNode: cc.Node,
    //进度条节点
    resLabel: cc.Label,
    barLabel: cc.Label
  },
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {
    cc.game.addPersistRootNode(this.node); //添加常驻节点

    this.node.zIndex = 10;
    game.curScene = this.curScene = "login";
    game.on(game.gameEvent.load_scene, this.loadScene, this); //场景切换场景

    cc.loader.onProgress = this.onProgress.bind(this);
    this.completedCount = 0;
    this.totalCount = 1;
    this.node.active = false;
    this.uuids = require("uuids");
  },
  //开始切换场景
  loadScene: function loadScene(scene) {
    if (game.curScene == scene) return;
    this.node.active = true;
    game.curScene = this.curScene = scene;
    if (this.progressNode) this.progressNode.width = 0;
    cc.log("切换场景");
    this.lastId = 0;
    cc.director.loadScene(scene, this.onCompleteScene.bind(this)); //场景加载完成
    //cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, this.onCompleteScene.bind(this));
    //this.isLoadingScene = true;
  },
  //加载完成
  onCompleteScene: function onCompleteScene() {
    this.node.active = false;
  },
  //加载场景进度
  onProgress: function onProgress(completedCount, totalCount, item) {
    var id = item.id.substring(item.id.lastIndexOf('/') + 1, item.id.lastIndexOf("."));
    var url = this.uuids[id];

    if (!url) {
      return;
    }

    if (totalCount > 1) {
      this.totalCount = totalCount;
    }

    this.completedCount = completedCount;

    if (this.completedCount > this.totalCount) {
      this.completedCount = this.totalCount;
    }

    var progress = (this.completedCount / this.totalCount).format(2);
    if (this.progressNode) this.progressNode.width = 1030 * progress;
    if (this.barLabel) this.barLabel.string = parseInt(progress * 100) + "%"; // if (this.resLabel)
    //     this.resLabel.string = item.id || "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb3JlXFxsb2FkaW5nLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicHJvZ3Jlc3NOb2RlIiwiTm9kZSIsInJlc0xhYmVsIiwiTGFiZWwiLCJiYXJMYWJlbCIsIm9uRGVzdHJveSIsIm9uTG9hZCIsImdhbWUiLCJhZGRQZXJzaXN0Um9vdE5vZGUiLCJub2RlIiwiekluZGV4IiwiY3VyU2NlbmUiLCJvbiIsImdhbWVFdmVudCIsImxvYWRfc2NlbmUiLCJsb2FkU2NlbmUiLCJsb2FkZXIiLCJvblByb2dyZXNzIiwiYmluZCIsImNvbXBsZXRlZENvdW50IiwidG90YWxDb3VudCIsImFjdGl2ZSIsInV1aWRzIiwicmVxdWlyZSIsInNjZW5lIiwid2lkdGgiLCJsb2ciLCJsYXN0SWQiLCJkaXJlY3RvciIsIm9uQ29tcGxldGVTY2VuZSIsIml0ZW0iLCJpZCIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwidXJsIiwicHJvZ3Jlc3MiLCJmb3JtYXQiLCJzdHJpbmciLCJwYXJzZUludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFlBQVksRUFBRUosRUFBRSxDQUFDSyxJQURUO0FBQ2U7QUFDdkJDLElBQUFBLFFBQVEsRUFBRU4sRUFBRSxDQUFDTyxLQUZMO0FBR1JDLElBQUFBLFFBQVEsRUFBRVIsRUFBRSxDQUFDTztBQUhMLEdBRlA7QUFPTEUsRUFBQUEsU0FQSyx1QkFPTyxDQUNYLENBUkk7QUFTTEMsRUFBQUEsTUFUSyxvQkFTSTtBQUNMVixJQUFBQSxFQUFFLENBQUNXLElBQUgsQ0FBUUMsa0JBQVIsQ0FBMkIsS0FBS0MsSUFBaEMsRUFESyxDQUNrQzs7QUFDdkMsU0FBS0EsSUFBTCxDQUFVQyxNQUFWLEdBQW1C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biAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcHJvZ3Jlc3NOb2RlOiBjYy5Ob2RlLCAvL+i/m+W6puadoeiKgueCuVxyXG4gICAgICAgIHJlc0xhYmVsOiBjYy5MYWJlbCxcclxuICAgICAgICBiYXJMYWJlbDogY2MuTGFiZWxcclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKHRoaXMubm9kZSk7IC8v5re75Yqg5bi46am76IqC54K5XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDEwO1xyXG4gICAgICAgIGdhbWUuY3VyU2NlbmUgPSB0aGlzLmN1clNjZW5lID0gXCJsb2dpblwiO1xyXG4gICAgICAgIGdhbWUub24oZ2FtZS5nYW1lRXZlbnQubG9hZF9zY2VuZSwgdGhpcy5sb2FkU2NlbmUsIHRoaXMpOyAvL+WcuuaZr+WIh+aNouWcuuaZr1xyXG4gICAgICAgIGNjLmxvYWRlci5vblByb2dyZXNzID0gdGhpcy5vblByb2dyZXNzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gMTtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51dWlkcyA9IHJlcXVpcmUoXCJ1dWlkc1wiKTtcclxuICAgIH0sXHJcbiAgICAvL+W8gOWni+WIh+aNouWcuuaZr1xyXG4gICAgbG9hZFNjZW5lKHNjZW5lKSB7XHJcbiAgICAgICAgaWYgKGdhbWUuY3VyU2NlbmUgPT0gc2NlbmUpIHJldHVybjtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBnYW1lLmN1clNjZW5lID0gdGhpcy5jdXJTY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzTm9kZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc05vZGUud2lkdGggPSAwO1xyXG4gICAgICAgIGNjLmxvZyhcIuWIh+aNouWcuuaZr1wiKTtcclxuICAgICAgICB0aGlzLmxhc3RJZCA9IDA7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lLCB0aGlzLm9uQ29tcGxldGVTY2VuZS5iaW5kKHRoaXMpKTsgLy/lnLrmma/liqDovb3lrozmiJBcclxuICAgICAgICAvL2NjLmRpcmVjdG9yLm9uKGNjLkRpcmVjdG9yLkVWRU5UX0FGVEVSX1NDRU5FX0xBVU5DSCwgdGhpcy5vbkNvbXBsZXRlU2NlbmUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy90aGlzLmlzTG9hZGluZ1NjZW5lID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICAvL+WKoOi9veWujOaIkFxyXG4gICAgb25Db21wbGV0ZVNjZW5lOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIC8v5Yqg6L295Zy65pmv6L+b5bqmXHJcbiAgICBvblByb2dyZXNzKGNvbXBsZXRlZENvdW50LCB0b3RhbENvdW50LCBpdGVtKSB7XHJcbiAgICAgICAgdmFyIGlkID0gaXRlbS5pZC5zdWJzdHJpbmcoaXRlbS5pZC5sYXN0SW5kZXhPZignLycpICsgMSwgaXRlbS5pZC5sYXN0SW5kZXhPZihcIi5cIikpXHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMudXVpZHNbaWRdO1xyXG4gICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRvdGFsQ291bnQgPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tcGxldGVkQ291bnQgPSBjb21wbGV0ZWRDb3VudDtcclxuICAgICAgICBpZiAodGhpcy5jb21wbGV0ZWRDb3VudCA+IHRoaXMudG90YWxDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlZENvdW50ID0gdGhpcy50b3RhbENvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAodGhpcy5jb21wbGV0ZWRDb3VudCAvIHRoaXMudG90YWxDb3VudCkuZm9ybWF0KDIpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzTm9kZSlcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc05vZGUud2lkdGggPSAxMDMwICogcHJvZ3Jlc3M7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFyTGFiZWwpXHJcbiAgICAgICAgICAgIHRoaXMuYmFyTGFiZWwuc3RyaW5nID0gcGFyc2VJbnQocHJvZ3Jlc3MgKiAxMDApICsgXCIlXCI7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMucmVzTGFiZWwpXHJcbiAgICAgICAgLy8gICAgIHRoaXMucmVzTGFiZWwuc3RyaW5nID0gaXRlbS5pZCB8fCBcIlwiO1xyXG4gICAgfVxyXG59KTtcclxuIl19