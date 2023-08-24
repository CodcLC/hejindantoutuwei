
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/core/uiNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1596gnZApNzpjR+zLcdQvn', 'uiNode');
// Script/core/uiNode.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {
    cc.game.addPersistRootNode(this.node); //添加常驻节点

    game.on("aa", function (txt) {
      cc.log(txt);
    }); //game.gameConfig.junguan.attack;
  },
  start: function start() {},
  //返回界面
  oBack: function oBack(event, value) {
    game.emit(game.gameEvent.load_scene, game.gameScene.hall);
  },
  showPhysicsManager: function showPhysicsManager() {
    var physicsManager = cc.director.getPhysicsManager();

    if (physicsManager.debugDrawFlags == 0) {
      physicsManager.debugDrawFlags = // 0;
      cc.PhysicsManager.DrawBits.e_aabbBit | cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit;
    } else {
      physicsManager.debugDrawFlags = 0;
    } //  physicsManager.enabled = true;

  },
  showDebugDraw: function showDebugDraw() {
    cc.director.getCollisionManager().enabledDebugDraw = !cc.director.getCollisionManager().enabledDebugDraw;
  },
  showTest: function showTest() {
    game.emit(game.gameEvent.popup_prefab, game.gamePopup.gameOver, {
      test: 123
    });
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb3JlXFx1aU5vZGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkRlc3Ryb3kiLCJvbkxvYWQiLCJnYW1lIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwibm9kZSIsIm9uIiwidHh0IiwibG9nIiwic3RhcnQiLCJvQmFjayIsImV2ZW50IiwidmFsdWUiLCJlbWl0IiwiZ2FtZUV2ZW50IiwibG9hZF9zY2VuZSIsImdhbWVTY2VuZSIsImhhbGwiLCJzaG93UGh5c2ljc01hbmFnZXIiLCJwaHlzaWNzTWFuYWdlciIsImRpcmVjdG9yIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJkZWJ1Z0RyYXdGbGFncyIsIlBoeXNpY3NNYW5hZ2VyIiwiRHJhd0JpdHMiLCJlX2FhYmJCaXQiLCJlX2pvaW50Qml0IiwiZV9zaGFwZUJpdCIsInNob3dEZWJ1Z0RyYXciLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZERlYnVnRHJhdyIsInNob3dUZXN0IiwicG9wdXBfcHJlZmFiIiwiZ2FtZVBvcHVwIiwiZ2FtZU92ZXIiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUUsRUFGUDtBQUdMQyxFQUFBQSxTQUhLLHVCQUdPLENBQ1gsQ0FKSTtBQUtMQyxFQUFBQSxNQUxLLG9CQUtJO0FBQ0xMLElBQUFBLEVBQUUsQ0FBQ00sSUFBSCxDQUFRQyxrQkFBUixDQUEyQixLQUFLQyxJQUFoQyxFQURLLENBQ2tDOztBQUN2Q0YsSUFBQUEsSUFBSSxDQUFDRyxFQUFMLENBQVEsSUFBUixFQUFjLFVBQVVDLEdBQVYsRUFBZTtBQUN6QlYsTUFBQUEsRUFBRSxDQUFDVyxHQUFILENBQU9ELEdBQVA7QUFDSCxLQUZELEVBRkssQ0FLTDtBQUNILEdBWEk7QUFZTEUsRUFBQUEsS0FaSyxtQkFZRyxDQUNQLENBYkk7QUFjTDtBQUNBQyxFQUFBQSxLQWZLLGlCQWVDQyxLQWZELEVBZVFDLEtBZlIsRUFlZTtBQUNoQlQsSUFBQUEsSUFBSSxDQUFDVSxJQUFMLENBQVVWLElBQUksQ0FBQ1csU0FBTCxDQUFlQyxVQUF6QixFQUFxQ1osSUFBSSxDQUFDYSxTQUFMLENBQWVDLElBQXBEO0FBQ0gsR0FqQkk7QUFrQkxDLEVBQUFBLGtCQWxCSyxnQ0FrQmdCO0FBQ2pCLFFBQUlDLGNBQWMsR0FBR3RCLEVBQUUsQ0FBQ3VCLFFBQUgsQ0FBWUMsaUJBQVosRUFBckI7O0FBQ0EsUUFBSUYsY0FBYyxDQUFDRyxjQUFmLElBQWlDLENBQXJDLEVBQXdDO0FBQ3BDSCxNQUFBQSxjQUFjLENBQUNHLGNBQWYsR0FBZ0M7QUFDNUJ6QixNQUFBQSxFQUFFLENBQUMwQixjQUFILENBQWtCQyxRQUFsQixDQUEyQkMsU0FBM0IsR0FDQTVCLEVBQUUsQ0FBQzBCLGNBQUgsQ0FBa0JDLFFBQWxCLENBQTJCRSxVQUQzQixHQUVBN0IsRUFBRSxDQUFDMEIsY0FBSCxDQUFrQkMsUUFBbEIsQ0FBMkJHLFVBSC9CO0FBSUgsS0FMRCxNQU1LO0FBQ0RSLE1BQUFBLGNBQWMsQ0FBQ0csY0FBZixHQUFnQyxDQUFoQztBQUNILEtBVmdCLENBV2pCOztBQUNILEdBOUJJO0FBK0JMTSxFQUFBQSxhQS9CSywyQkErQlc7QUFDWi9CLElBQUFBLEVBQUUsQ0FBQ3VCLFFBQUgsQ0FBWVMsbUJBQVosR0FBa0NDLGdCQUFsQyxHQUFxRCxDQUFDakMsRUFBRSxDQUFDdUIsUUFBSCxDQUFZUyxtQkFBWixHQUFrQ0MsZ0JBQXhGO0FBQ0gsR0FqQ0k7QUFrQ0xDLEVBQUFBLFFBbENLLHNCQWtDTTtBQUNQNUIsSUFBQUEsSUFBSSxDQUFDVSxJQUFMLENBQVVWLElBQUksQ0FBQ1csU0FBTCxDQUFla0IsWUFBekIsRUFBdUM3QixJQUFJLENBQUM4QixTQUFMLENBQWVDLFFBQXRELEVBQWdFO0FBQUNDLE1BQUFBLElBQUksRUFBRTtBQUFQLEtBQWhFO0FBQ0gsR0FwQ0ksQ0FzQ0w7O0FBdENLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHt9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpOyAvL+a3u+WKoOW4uOmpu+iKgueCuVxyXG4gICAgICAgIGdhbWUub24oXCJhYVwiLCBmdW5jdGlvbiAodHh0KSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyh0eHQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvL2dhbWUuZ2FtZUNvbmZpZy5qdW5ndWFuLmF0dGFjaztcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcbiAgICAvL+i/lOWbnueVjOmdolxyXG4gICAgb0JhY2soZXZlbnQsIHZhbHVlKSB7XHJcbiAgICAgICAgZ2FtZS5lbWl0KGdhbWUuZ2FtZUV2ZW50LmxvYWRfc2NlbmUsIGdhbWUuZ2FtZVNjZW5lLmhhbGwpO1xyXG4gICAgfSxcclxuICAgIHNob3dQaHlzaWNzTWFuYWdlcigpIHtcclxuICAgICAgICBsZXQgcGh5c2ljc01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIGlmIChwaHlzaWNzTWFuYWdlci5kZWJ1Z0RyYXdGbGFncyA9PSAwKSB7XHJcbiAgICAgICAgICAgIHBoeXNpY3NNYW5hZ2VyLmRlYnVnRHJhd0ZsYWdzID0gLy8gMDtcclxuICAgICAgICAgICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfYWFiYkJpdCB8XHJcbiAgICAgICAgICAgICAgICBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2pvaW50Qml0IHxcclxuICAgICAgICAgICAgICAgIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfc2hhcGVCaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwaHlzaWNzTWFuYWdlci5kZWJ1Z0RyYXdGbGFncyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vICBwaHlzaWNzTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBzaG93RGVidWdEcmF3KCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3ID0gIWNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3O1xyXG4gICAgfSxcclxuICAgIHNob3dUZXN0KCkge1xyXG4gICAgICAgIGdhbWUuZW1pdChnYW1lLmdhbWVFdmVudC5wb3B1cF9wcmVmYWIsIGdhbWUuZ2FtZVBvcHVwLmdhbWVPdmVyLCB7dGVzdDogMTIzfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=