
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/core/persistPrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0ebdc2bPkJBvKj0a9u10BaP', 'persistPrefab');
// Script/core/persistPrefab.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    bullet_atlas: cc.SpriteAtlas,
    //子弹的序列图
    bomb_atlas: cc.SpriteAtlas,
    //爆炸材质
    map_atlas: cc.SpriteAtlas,
    ui_atlas: cc.SpriteAtlas,
    materias: {
      //引用到的材质球
      "default": [],
      type: cc.Material
    } // bingList: {default: [], type: cc.Prefab},
    // bulletList: {default: [], type: cc.Prefab},
    // effList: {default: [], type: cc.Prefab},
    // bombList: {default: [], type: cc.Prefab}

  },
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {
    game.bullet_atlas = this.bullet_atlas; //保存到全局

    game.bomb_atlas = this.bomb_atlas; //保存到全局

    game.map_atlas = this.map_atlas; //保存到全局

    game.ui_atlas = this.ui_atlas;
    game.materias = {};

    for (var i in this.materias) {
      var materia = this.materias[i];

      if (materia) {
        game.materias[materia.name] = materia;
      }
    } // game.bingList = {};
    // game.bingPool = new cc.NodePool();
    // for (var i in this.bingList) {
    //     var prefab = this.bingList[i];
    //     if (prefab) {
    //         game.bingList[prefab.name] = prefab;
    //     }
    // }
    // game.bulletList = {};
    // game.bulletPool = {};
    // for (var i in this.bulletList) {
    //     var prefab = this.bulletList[i];
    //     if (prefab) {
    //         game.bulletList[prefab.name] = prefab;
    //     }
    // }
    // game.effList = {};
    // game.effPool = new cc.NodePool();
    // for (var i in this.effList) {
    //     var prefab = this.effList[i];
    //     if (prefab) {
    //         game.effList[prefab.name] = prefab;
    //     }
    // }
    // game.bombList = {};
    // game.bombPool = new cc.NodePool();
    // for (var i in this.bombList) {
    //     var prefab = this.bombList[i];
    //     if (prefab) {
    //         game.bombList[prefab.name] = prefab;
    //     }
    // }

  },
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb3JlXFxwZXJzaXN0UHJlZmFiLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYnVsbGV0X2F0bGFzIiwiU3ByaXRlQXRsYXMiLCJib21iX2F0bGFzIiwibWFwX2F0bGFzIiwidWlfYXRsYXMiLCJtYXRlcmlhcyIsInR5cGUiLCJNYXRlcmlhbCIsIm9uRGVzdHJveSIsIm9uTG9hZCIsImdhbWUiLCJpIiwibWF0ZXJpYSIsIm5hbWUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFlBQVksRUFBRUosRUFBRSxDQUFDSyxXQURUO0FBQ3FCO0FBQzdCQyxJQUFBQSxVQUFVLEVBQUVOLEVBQUUsQ0FBQ0ssV0FGUDtBQUVxQjtBQUM3QkUsSUFBQUEsU0FBUyxFQUFDUCxFQUFFLENBQUNLLFdBSEw7QUFNUkcsSUFBQUEsUUFBUSxFQUFDUixFQUFFLENBQUNLLFdBTko7QUFPUkksSUFBQUEsUUFBUSxFQUFFO0FBQUU7QUFDUixpQkFBUyxFQURIO0FBQ09DLE1BQUFBLElBQUksRUFBRVYsRUFBRSxDQUFDVztBQURoQixLQVBGLENBVVI7QUFDQTtBQUNBO0FBQ0E7O0FBYlEsR0FGUDtBQWlCTEMsRUFBQUEsU0FqQkssdUJBaUJPLENBQ1gsQ0FsQkk7QUFtQkxDLEVBQUFBLE1BbkJLLG9CQW1CSTtBQUNMQyxJQUFBQSxJQUFJLENBQUNWLFlBQUwsR0FBb0IsS0FBS0EsWUFBekIsQ0FESyxDQUNpQzs7QUFDdENVLElBQUFBLElBQUksQ0FBQ1IsVUFBTCxHQUFrQixLQUFLQSxVQUF2QixDQUZLLENBRTZCOztBQUNsQ1EsSUFBQUEsSUFBSSxDQUFDUCxTQUFMLEdBQWlCLEtBQUtBLFNBQXRCLENBSEssQ0FHMkI7O0FBQ2hDTyxJQUFBQSxJQUFJLENBQUNOLFFBQUwsR0FBYyxLQUFLQSxRQUFuQjtBQUNBTSxJQUFBQSxJQUFJLENBQUNMLFFBQUwsR0FBZ0IsRUFBaEI7O0FBQ0EsU0FBSyxJQUFJTSxDQUFULElBQWMsS0FBS04sUUFBbkIsRUFBNkI7QUFDekIsVUFBSU8sT0FBTyxHQUFHLEtBQUtQLFFBQUwsQ0FBY00sQ0FBZCxDQUFkOztBQUNBLFVBQUlDLE9BQUosRUFBYTtBQUNURixRQUFBQSxJQUFJLENBQUNMLFFBQUwsQ0FBY08sT0FBTyxDQUFDQyxJQUF0QixJQUE4QkQsT0FBOUI7QUFDSDtBQUNKLEtBWEksQ0FZTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNILEdBL0RJO0FBZ0VMRSxFQUFBQSxLQWhFSyxtQkFnRUcsQ0FDUCxDQWpFSSxDQWtFTDs7QUFsRUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJ1bGxldF9hdGxhczogY2MuU3ByaXRlQXRsYXMsLy/lrZDlvLnnmoTluo/liJflm75cclxuICAgICAgICBib21iX2F0bGFzOiBjYy5TcHJpdGVBdGxhcywgIC8v54iG54K45p2Q6LSoXHJcbiAgICAgICAgbWFwX2F0bGFzOmNjLlNwcml0ZUF0bGFzLFxyXG5cclxuXHJcbiAgICAgICAgdWlfYXRsYXM6Y2MuU3ByaXRlQXRsYXMsXHJcbiAgICAgICAgbWF0ZXJpYXM6IHsgLy/lvJXnlKjliLDnmoTmnZDotKjnkINcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sIHR5cGU6IGNjLk1hdGVyaWFsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gYmluZ0xpc3Q6IHtkZWZhdWx0OiBbXSwgdHlwZTogY2MuUHJlZmFifSxcclxuICAgICAgICAvLyBidWxsZXRMaXN0OiB7ZGVmYXVsdDogW10sIHR5cGU6IGNjLlByZWZhYn0sXHJcbiAgICAgICAgLy8gZWZmTGlzdDoge2RlZmF1bHQ6IFtdLCB0eXBlOiBjYy5QcmVmYWJ9LFxyXG4gICAgICAgIC8vIGJvbWJMaXN0OiB7ZGVmYXVsdDogW10sIHR5cGU6IGNjLlByZWZhYn1cclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGdhbWUuYnVsbGV0X2F0bGFzID0gdGhpcy5idWxsZXRfYXRsYXM7Ly/kv53lrZjliLDlhajlsYBcclxuICAgICAgICBnYW1lLmJvbWJfYXRsYXMgPSB0aGlzLmJvbWJfYXRsYXM7Ly/kv53lrZjliLDlhajlsYBcclxuICAgICAgICBnYW1lLm1hcF9hdGxhcyA9IHRoaXMubWFwX2F0bGFzOy8v5L+d5a2Y5Yiw5YWo5bGAXHJcbiAgICAgICAgZ2FtZS51aV9hdGxhcz10aGlzLnVpX2F0bGFzO1xyXG4gICAgICAgIGdhbWUubWF0ZXJpYXMgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMubWF0ZXJpYXMpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGVyaWEgPSB0aGlzLm1hdGVyaWFzW2ldO1xyXG4gICAgICAgICAgICBpZiAobWF0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5tYXRlcmlhc1ttYXRlcmlhLm5hbWVdID0gbWF0ZXJpYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBnYW1lLmJpbmdMaXN0ID0ge307XHJcbiAgICAgICAgLy8gZ2FtZS5iaW5nUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgpO1xyXG4gICAgICAgIC8vIGZvciAodmFyIGkgaW4gdGhpcy5iaW5nTGlzdCkge1xyXG4gICAgICAgIC8vICAgICB2YXIgcHJlZmFiID0gdGhpcy5iaW5nTGlzdFtpXTtcclxuICAgICAgICAvLyAgICAgaWYgKHByZWZhYikge1xyXG4gICAgICAgIC8vICAgICAgICAgZ2FtZS5iaW5nTGlzdFtwcmVmYWIubmFtZV0gPSBwcmVmYWI7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZ2FtZS5idWxsZXRMaXN0ID0ge307XHJcbiAgICAgICAgLy8gZ2FtZS5idWxsZXRQb29sID0ge307XHJcbiAgICAgICAgLy8gZm9yICh2YXIgaSBpbiB0aGlzLmJ1bGxldExpc3QpIHtcclxuICAgICAgICAvLyAgICAgdmFyIHByZWZhYiA9IHRoaXMuYnVsbGV0TGlzdFtpXTtcclxuICAgICAgICAvLyAgICAgaWYgKHByZWZhYikge1xyXG4gICAgICAgIC8vICAgICAgICAgZ2FtZS5idWxsZXRMaXN0W3ByZWZhYi5uYW1lXSA9IHByZWZhYjtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBnYW1lLmVmZkxpc3QgPSB7fTtcclxuICAgICAgICAvLyBnYW1lLmVmZlBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcclxuICAgICAgICAvLyBmb3IgKHZhciBpIGluIHRoaXMuZWZmTGlzdCkge1xyXG4gICAgICAgIC8vICAgICB2YXIgcHJlZmFiID0gdGhpcy5lZmZMaXN0W2ldO1xyXG4gICAgICAgIC8vICAgICBpZiAocHJlZmFiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBnYW1lLmVmZkxpc3RbcHJlZmFiLm5hbWVdID0gcHJlZmFiO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGdhbWUuYm9tYkxpc3QgPSB7fTtcclxuICAgICAgICAvLyBnYW1lLmJvbWJQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XHJcbiAgICAgICAgLy8gZm9yICh2YXIgaSBpbiB0aGlzLmJvbWJMaXN0KSB7XHJcbiAgICAgICAgLy8gICAgIHZhciBwcmVmYWIgPSB0aGlzLmJvbWJMaXN0W2ldO1xyXG4gICAgICAgIC8vICAgICBpZiAocHJlZmFiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBnYW1lLmJvbWJMaXN0W3ByZWZhYi5uYW1lXSA9IHByZWZhYjtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==