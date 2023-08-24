
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/test/addMap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd00fe6c691KLKbLOpXcCm8A', 'addMap');
// Script/test/addMap.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    cell: cc.Node
  },
  onLoad: function onLoad() {
    this.node.removeAllChildren();
    var num = 30;

    for (var i = 0; i < num; i++) {
      var cell = cc.instantiate(this.cell);
      var r = parseInt(Math.random() * 255);
      var g = parseInt(Math.random() * 255);
      var b = parseInt(Math.random() * 255);
      cell.color = cc.color(r, g, b);
      cell.getComponent("itemTest").setInfo(i);
      this.node.addChild(cell);
    }
  },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx0ZXN0XFxhZGRNYXAuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjZWxsIiwiTm9kZSIsIm9uTG9hZCIsIm5vZGUiLCJyZW1vdmVBbGxDaGlsZHJlbiIsIm51bSIsImkiLCJpbnN0YW50aWF0ZSIsInIiLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJnIiwiYiIsImNvbG9yIiwiZ2V0Q29tcG9uZW50Iiwic2V0SW5mbyIsImFkZENoaWxkIiwic3RhcnQiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUVKLEVBQUUsQ0FBQ0s7QUFERCxHQUZQO0FBS0xDLEVBQUFBLE1BTEssb0JBS0k7QUFDTCxTQUFLQyxJQUFMLENBQVVDLGlCQUFWO0FBQ0EsUUFBSUMsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxHQUFwQixFQUF5QkMsQ0FBQyxFQUExQixFQUE4QjtBQUMxQixVQUFJTixJQUFJLEdBQUdKLEVBQUUsQ0FBQ1csV0FBSCxDQUFlLEtBQUtQLElBQXBCLENBQVg7QUFDQSxVQUFJUSxDQUFDLEdBQUdDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWpCLENBQWhCO0FBQ0EsVUFBSUMsQ0FBQyxHQUFHSCxRQUFRLENBQUNDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFqQixDQUFoQjtBQUNBLFVBQUlFLENBQUMsR0FBR0osUUFBUSxDQUFDQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBakIsQ0FBaEI7QUFDQVgsTUFBQUEsSUFBSSxDQUFDYyxLQUFMLEdBQWFsQixFQUFFLENBQUNrQixLQUFILENBQVNOLENBQVQsRUFBWUksQ0FBWixFQUFlQyxDQUFmLENBQWI7QUFDQWIsTUFBQUEsSUFBSSxDQUFDZSxZQUFMLENBQWtCLFVBQWxCLEVBQThCQyxPQUE5QixDQUFzQ1YsQ0FBdEM7QUFDQSxXQUFLSCxJQUFMLENBQVVjLFFBQVYsQ0FBbUJqQixJQUFuQjtBQUNIO0FBQ0osR0FqQkk7QUFrQkxrQixFQUFBQSxLQWxCSyxtQkFrQkcsQ0FDUCxDQW5CSTtBQW9CTEMsRUFBQUEsU0FwQkssdUJBb0JPLENBQ1gsQ0FyQkksQ0FzQkw7O0FBdEJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBjZWxsOiBjYy5Ob2RlXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHZhciBudW0gPSAzMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gY2MuaW5zdGFudGlhdGUodGhpcy5jZWxsKTtcclxuICAgICAgICAgICAgbGV0IHIgPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMjU1KTtcclxuICAgICAgICAgICAgbGV0IGcgPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMjU1KTtcclxuICAgICAgICAgICAgbGV0IGIgPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMjU1KTtcclxuICAgICAgICAgICAgY2VsbC5jb2xvciA9IGNjLmNvbG9yKHIsIGcsIGIpO1xyXG4gICAgICAgICAgICBjZWxsLmdldENvbXBvbmVudChcIml0ZW1UZXN0XCIpLnNldEluZm8oaSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjZWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19