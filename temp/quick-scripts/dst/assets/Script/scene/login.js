
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scene/login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '113afyh7FVBEZ7WptwQ+j6t', 'login');
// Script/scene/login.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {
    window.jm = require("jm");
    window.game = jm.eventEmitter();
    window._ = require("lodash");
    window.async = require("async");

    require("utils"); //game.gameConfig = require("gameConfig"); //公共函数


    game.gameSound = require("gameSound"); //公共函数

    game.gamePopup = require("gamePopup"); //公共函数

    game.zhujueConfig = require("zhujueConfig"); //公共函数\

    game.gameAction = require("gameAction"); //公共函数

    game.gameControl = require("gameControl"); //公共函数

    game.gameEvent = require("gameEvent"); //公共函数

    game.gameScene = require("gameScene"); //公共函数

    game.gameUtils = require("gameUtils"); //公共函数

    game.localStorage = require("localStorage"); //公共函数

    game.soundManager = require("soundManager"); //公共函数

    game.point1 = cc.v2(0, 0);
    game.point2 = cc.v2(-100, 0);
    game.soundManager.init();
    cc.tween(this.node).then(cc.delayTime(0.1)).call(function () {
      game.emit(game.gameEvent.load_scene, game.gameScene.hall);
    }).start();
  },
  start: function start() {} // update (dt) {},i

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuZVxcbG9naW4uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkRlc3Ryb3kiLCJvbkxvYWQiLCJ3aW5kb3ciLCJqbSIsInJlcXVpcmUiLCJnYW1lIiwiZXZlbnRFbWl0dGVyIiwiXyIsImFzeW5jIiwiZ2FtZVNvdW5kIiwiZ2FtZVBvcHVwIiwiemh1anVlQ29uZmlnIiwiZ2FtZUFjdGlvbiIsImdhbWVDb250cm9sIiwiZ2FtZUV2ZW50IiwiZ2FtZVNjZW5lIiwiZ2FtZVV0aWxzIiwibG9jYWxTdG9yYWdlIiwic291bmRNYW5hZ2VyIiwicG9pbnQxIiwidjIiLCJwb2ludDIiLCJpbml0IiwidHdlZW4iLCJub2RlIiwidGhlbiIsImRlbGF5VGltZSIsImNhbGwiLCJlbWl0IiwibG9hZF9zY2VuZSIsImhhbGwiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFLEVBRlA7QUFHTEMsRUFBQUEsU0FISyx1QkFHTyxDQUNYLENBSkk7QUFLTEMsRUFBQUEsTUFMSyxvQkFLSTtBQUNMQyxJQUFBQSxNQUFNLENBQUNDLEVBQVAsR0FBWUMsT0FBTyxDQUFDLElBQUQsQ0FBbkI7QUFDQUYsSUFBQUEsTUFBTSxDQUFDRyxJQUFQLEdBQWNGLEVBQUUsQ0FBQ0csWUFBSCxFQUFkO0FBQ0FKLElBQUFBLE1BQU0sQ0FBQ0ssQ0FBUCxHQUFXSCxPQUFPLENBQUMsUUFBRCxDQUFsQjtBQUNBRixJQUFBQSxNQUFNLENBQUNNLEtBQVAsR0FBZUosT0FBTyxDQUFDLE9BQUQsQ0FBdEI7O0FBQ0FBLElBQUFBLE9BQU8sQ0FBQyxPQUFELENBQVAsQ0FMSyxDQU1MOzs7QUFDQUMsSUFBQUEsSUFBSSxDQUFDSSxTQUFMLEdBQWlCTCxPQUFPLENBQUMsV0FBRCxDQUF4QixDQVBLLENBT2tDOztBQUN2Q0MsSUFBQUEsSUFBSSxDQUFDSyxTQUFMLEdBQWlCTixPQUFPLENBQUMsV0FBRCxDQUF4QixDQVJLLENBUWtDOztBQUN2Q0MsSUFBQUEsSUFBSSxDQUFDTSxZQUFMLEdBQW9CUCxPQUFPLENBQUMsY0FBRCxDQUEzQixDQVRLLENBU3dDOztBQUM3Q0MsSUFBQUEsSUFBSSxDQUFDTyxVQUFMLEdBQWtCUixPQUFPLENBQUMsWUFBRCxDQUF6QixDQVZLLENBVW9DOztBQUN6Q0MsSUFBQUEsSUFBSSxDQUFDUSxXQUFMLEdBQW1CVCxPQUFPLENBQUMsYUFBRCxDQUExQixDQVhLLENBV3NDOztBQUMzQ0MsSUFBQUEsSUFBSSxDQUFDUyxTQUFMLEdBQWlCVixPQUFPLENBQUMsV0FBRCxDQUF4QixDQVpLLENBWWtDOztBQUN2Q0MsSUFBQUEsSUFBSSxDQUFDVSxTQUFMLEdBQWlCWCxPQUFPLENBQUMsV0FBRCxDQUF4QixDQWJLLENBYWtDOztBQUN2Q0MsSUFBQUEsSUFBSSxDQUFDVyxTQUFMLEdBQWlCWixPQUFPLENBQUMsV0FBRCxDQUF4QixDQWRLLENBY2tDOztBQUN2Q0MsSUFBQUEsSUFBSSxDQUFDWSxZQUFMLEdBQW9CYixPQUFPLENBQUMsY0FBRCxDQUEzQixDQWZLLENBZXdDOztBQUM3Q0MsSUFBQUEsSUFBSSxDQUFDYSxZQUFMLEdBQW9CZCxPQUFPLENBQUMsY0FBRCxDQUEzQixDQWhCSyxDQWdCd0M7O0FBQzdDQyxJQUFBQSxJQUFJLENBQUNjLE1BQUwsR0FBWXZCLEVBQUUsQ0FBQ3dCLEVBQUgsQ0FBTSxDQUFOLEVBQVEsQ0FBUixDQUFaO0FBQ0FmLElBQUFBLElBQUksQ0FBQ2dCLE1BQUwsR0FBWXpCLEVBQUUsQ0FBQ3dCLEVBQUgsQ0FBTSxDQUFDLEdBQVAsRUFBVyxDQUFYLENBQVo7QUFDQWYsSUFBQUEsSUFBSSxDQUFDYSxZQUFMLENBQWtCSSxJQUFsQjtBQUNBMUIsSUFBQUEsRUFBRSxDQUFDMkIsS0FBSCxDQUFTLEtBQUtDLElBQWQsRUFBb0JDLElBQXBCLENBQXlCN0IsRUFBRSxDQUFDOEIsU0FBSCxDQUFhLEdBQWIsQ0FBekIsRUFBNENDLElBQTVDLENBQWlELFlBQVk7QUFDekR0QixNQUFBQSxJQUFJLENBQUN1QixJQUFMLENBQVV2QixJQUFJLENBQUNTLFNBQUwsQ0FBZWUsVUFBekIsRUFBcUN4QixJQUFJLENBQUNVLFNBQUwsQ0FBZWUsSUFBcEQ7QUFDSCxLQUZELEVBRUdDLEtBRkg7QUFHSCxHQTVCSTtBQTZCTEEsRUFBQUEsS0E3QkssbUJBNkJHLENBQ1AsQ0E5QkksQ0ErQkw7O0FBL0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHt9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB3aW5kb3cuam0gPSByZXF1aXJlKFwiam1cIik7XHJcbiAgICAgICAgd2luZG93LmdhbWUgPSBqbS5ldmVudEVtaXR0ZXIoKTtcclxuICAgICAgICB3aW5kb3cuXyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XHJcbiAgICAgICAgd2luZG93LmFzeW5jID0gcmVxdWlyZShcImFzeW5jXCIpO1xyXG4gICAgICAgIHJlcXVpcmUoXCJ1dGlsc1wiKTtcclxuICAgICAgICAvL2dhbWUuZ2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJnYW1lQ29uZmlnXCIpOyAvL+WFrOWFseWHveaVsFxyXG4gICAgICAgIGdhbWUuZ2FtZVNvdW5kID0gcmVxdWlyZShcImdhbWVTb3VuZFwiKTsgLy/lhazlhbHlh73mlbBcclxuICAgICAgICBnYW1lLmdhbWVQb3B1cCA9IHJlcXVpcmUoXCJnYW1lUG9wdXBcIik7IC8v5YWs5YWx5Ye95pWwXHJcbiAgICAgICAgZ2FtZS56aHVqdWVDb25maWcgPSByZXF1aXJlKFwiemh1anVlQ29uZmlnXCIpOyAvL+WFrOWFseWHveaVsFxcXHJcbiAgICAgICAgZ2FtZS5nYW1lQWN0aW9uID0gcmVxdWlyZShcImdhbWVBY3Rpb25cIik7IC8v5YWs5YWx5Ye95pWwXHJcbiAgICAgICAgZ2FtZS5nYW1lQ29udHJvbCA9IHJlcXVpcmUoXCJnYW1lQ29udHJvbFwiKTsgLy/lhazlhbHlh73mlbBcclxuICAgICAgICBnYW1lLmdhbWVFdmVudCA9IHJlcXVpcmUoXCJnYW1lRXZlbnRcIik7IC8v5YWs5YWx5Ye95pWwXHJcbiAgICAgICAgZ2FtZS5nYW1lU2NlbmUgPSByZXF1aXJlKFwiZ2FtZVNjZW5lXCIpOyAvL+WFrOWFseWHveaVsFxyXG4gICAgICAgIGdhbWUuZ2FtZVV0aWxzID0gcmVxdWlyZShcImdhbWVVdGlsc1wiKTsgLy/lhazlhbHlh73mlbBcclxuICAgICAgICBnYW1lLmxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoXCJsb2NhbFN0b3JhZ2VcIik7IC8v5YWs5YWx5Ye95pWwXHJcbiAgICAgICAgZ2FtZS5zb3VuZE1hbmFnZXIgPSByZXF1aXJlKFwic291bmRNYW5hZ2VyXCIpOyAvL+WFrOWFseWHveaVsFxyXG4gICAgICAgIGdhbWUucG9pbnQxPWNjLnYyKDAsMCk7XHJcbiAgICAgICAgZ2FtZS5wb2ludDI9Y2MudjIoLTEwMCwwKTtcclxuICAgICAgICBnYW1lLnNvdW5kTWFuYWdlci5pbml0KCk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50aGVuKGNjLmRlbGF5VGltZSgwLjEpKS5jYWxsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZ2FtZS5lbWl0KGdhbWUuZ2FtZUV2ZW50LmxvYWRfc2NlbmUsIGdhbWUuZ2FtZVNjZW5lLmhhbGwpO1xyXG4gICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30saVxyXG59KTtcclxuIl19