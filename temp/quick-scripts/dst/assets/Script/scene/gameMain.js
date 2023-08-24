
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scene/gameMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ef624xfbNLtpi98CtasLrt', 'gameMain');
// Script/scene/gameMain.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    //     tooltip: "描述tips"
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  onDestroy: function onDestroy() {
    game.emit("levelGame");
  },
  onLoad: function onLoad() {
    game.emit("enterGame");
    game.soundManager.playMusic(game.gameSound.bgm1_1, true);
  },
  // LIFE-CYCLE CALLBACKS:
  //当该组件被启用，并且它的节点也激活时。
  // onEnable() {
  // },
  // //当该组件被禁用或节点变为无效时调用。
  // onDisable() {
  // },
  //该方法为生命周期方法，父类未必会有实现。
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuZVxcZ2FtZU1haW4uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkRlc3Ryb3kiLCJnYW1lIiwiZW1pdCIsIm9uTG9hZCIsInNvdW5kTWFuYWdlciIsInBsYXlNdXNpYyIsImdhbWVTb3VuZCIsImJnbTFfMSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCUSxHQUZQO0FBb0JMQyxFQUFBQSxTQXBCSyx1QkFvQk87QUFDUkMsSUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVUsV0FBVjtBQUNILEdBdEJJO0FBdUJMQyxFQUFBQSxNQXZCSyxvQkF1Qkk7QUFDTEYsSUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVUsV0FBVjtBQUNBRCxJQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBa0JDLFNBQWxCLENBQTRCSixJQUFJLENBQUNLLFNBQUwsQ0FBZUMsTUFBM0MsRUFBa0QsSUFBbEQ7QUFFSCxHQTNCSTtBQTRCTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLEVBQUFBLEtBcENLLG1CQW9DRyxDQUNQLENBckNJLENBc0NMOztBQXRDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgICB0b29sdGlwOiBcIuaPj+i/sHRpcHNcIlxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGdhbWUuZW1pdChcImxldmVsR2FtZVwiKTtcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgZ2FtZS5lbWl0KFwiZW50ZXJHYW1lXCIpO1xyXG4gICAgICAgIGdhbWUuc291bmRNYW5hZ2VyLnBsYXlNdXNpYyhnYW1lLmdhbWVTb3VuZC5iZ20xXzEsdHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICAvL+W9k+ivpee7hOS7tuiiq+WQr+eUqO+8jOW5tuS4lOWug+eahOiKgueCueS5n+a/gOa0u+aXtuOAglxyXG4gICAgLy8gb25FbmFibGUoKSB7XHJcbiAgICAvLyB9LFxyXG4gICAgLy8gLy/lvZPor6Xnu4Tku7booqvnpoHnlKjmiJboioLngrnlj5jkuLrml6DmlYjml7bosIPnlKjjgIJcclxuICAgIC8vIG9uRGlzYWJsZSgpIHtcclxuICAgIC8vIH0sXHJcbiAgICAvL+ivpeaWueazleS4uueUn+WRveWRqOacn+aWueazle+8jOeItuexu+acquW/heS8muacieWunueOsOOAglxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=