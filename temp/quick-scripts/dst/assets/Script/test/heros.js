
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/test/heros.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53ae5RTjyFJBaf2/e8arvRC', 'heros');
// Script/test/heros.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    hero: cc.Node
  },
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {
    this.node.removeAllChildren();

    for (var i = 0; i < 20; i++) {
      var hero = cc.instantiate(this.hero);
      var hua = hero.getComponent("hua");
      hua.huaValue = parseInt(i / 20 * 255);
      this.node.addChild(hero);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx0ZXN0XFxoZXJvcy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImhlcm8iLCJOb2RlIiwib25EZXN0cm95Iiwib25Mb2FkIiwibm9kZSIsInJlbW92ZUFsbENoaWxkcmVuIiwiaSIsImluc3RhbnRpYXRlIiwiaHVhIiwiZ2V0Q29tcG9uZW50IiwiaHVhVmFsdWUiLCJwYXJzZUludCIsImFkZENoaWxkIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUVKLEVBQUUsQ0FBQ0s7QUFERCxHQUZQO0FBS0xDLEVBQUFBLFNBTEssdUJBS08sQ0FDWCxDQU5JO0FBT0xDLEVBQUFBLE1BUEssb0JBT0k7QUFDTCxTQUFLQyxJQUFMLENBQVVDLGlCQUFWOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUN6QixVQUFJTixJQUFJLEdBQUdKLEVBQUUsQ0FBQ1csV0FBSCxDQUFlLEtBQUtQLElBQXBCLENBQVg7QUFDQSxVQUFJUSxHQUFHLEdBQUdSLElBQUksQ0FBQ1MsWUFBTCxDQUFrQixLQUFsQixDQUFWO0FBQ0FELE1BQUFBLEdBQUcsQ0FBQ0UsUUFBSixHQUFlQyxRQUFRLENBQUNMLENBQUMsR0FBRyxFQUFKLEdBQVMsR0FBVixDQUF2QjtBQUNBLFdBQUtGLElBQUwsQ0FBVVEsUUFBVixDQUFtQlosSUFBbkI7QUFDSDtBQUNKLEdBZkk7QUFnQkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBYSxFQUFBQSxLQXhCSyxtQkF3QkcsQ0FDUCxDQXpCSSxDQTBCTDs7QUExQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGhlcm86IGNjLk5vZGVcclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjA7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgaGVybyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaGVybyk7XHJcbiAgICAgICAgICAgIHZhciBodWEgPSBoZXJvLmdldENvbXBvbmVudChcImh1YVwiKTtcclxuICAgICAgICAgICAgaHVhLmh1YVZhbHVlID0gcGFyc2VJbnQoaSAvIDIwICogMjU1KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGhlcm8pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIC8v5b2T6K+l57uE5Lu26KKr5ZCv55So77yM5bm25LiU5a6D55qE6IqC54K55Lmf5r+A5rS75pe244CCXHJcbiAgICAvLyBvbkVuYWJsZSgpIHtcclxuICAgIC8vIH0sXHJcbiAgICAvLyAvL+W9k+ivpee7hOS7tuiiq+emgeeUqOaIluiKgueCueWPmOS4uuaXoOaViOaXtuiwg+eUqOOAglxyXG4gICAgLy8gb25EaXNhYmxlKCkge1xyXG4gICAgLy8gfSxcclxuICAgIC8v6K+l5pa55rOV5Li655Sf5ZG95ZGo5pyf5pa55rOV77yM54i257G75pyq5b+F5Lya5pyJ5a6e546w44CCXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==