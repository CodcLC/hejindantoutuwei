
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/test/itemTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f881Qu6BJPlbmzFQBLCwub', 'itemTest');
// Script/test/itemTest.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    label: cc.Label
  },
  setInfo: function setInfo(vale) {
    this.label.string = vale.toString();
  },
  onLoad: function onLoad() {},
  start: function start() {},
  onDestroy: function onDestroy() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx0ZXN0XFxpdGVtVGVzdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxhYmVsIiwiTGFiZWwiLCJzZXRJbmZvIiwidmFsZSIsInN0cmluZyIsInRvU3RyaW5nIiwib25Mb2FkIiwic3RhcnQiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxLQUFLLEVBQUNKLEVBQUUsQ0FBQ0s7QUFEQyxHQUhQO0FBTUxDLEVBQUFBLE9BTkssbUJBTUdDLElBTkgsRUFNUTtBQUNYLFNBQUtILEtBQUwsQ0FBV0ksTUFBWCxHQUFrQkQsSUFBSSxDQUFDRSxRQUFMLEVBQWxCO0FBQ0QsR0FSSTtBQVVMQyxFQUFBQSxNQVZLLG9CQVVLLENBRVQsQ0FaSTtBQWNMQyxFQUFBQSxLQWRLLG1CQWNJLENBRVIsQ0FoQkk7QUFrQkxDLEVBQUFBLFNBbEJLLHVCQWtCTyxDQUVYLENBcEJJLENBc0JMOztBQXRCSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICBsYWJlbDpjYy5MYWJlbFxyXG4gICAgfSxcclxuICAgIHNldEluZm8odmFsZSl7XHJcbiAgICAgIHRoaXMubGFiZWwuc3RyaW5nPXZhbGUudG9TdHJpbmcoKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=