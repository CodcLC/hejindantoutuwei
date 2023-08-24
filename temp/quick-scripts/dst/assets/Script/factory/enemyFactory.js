
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/factory/enemyFactory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56cacldgGxOdYNwEYYMWqXC', 'enemyFactory');
// Script/factory/enemyFactory.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    bingTime: 10 //每隔5秒出一个军官

  },
  onDestroy: function onDestroy() {//clearInterval(this.makeJunGuan)
  },
  onLoad: function onLoad() {
    this.fff = true;
    this.nextBin = 0;
    this.parent = this.node.parent;
    this.bingPos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));

    var gameConfig = require(game.guanKaInfo);

    this.config = gameConfig;
    this.bingList = [];

    for (var i in gameConfig) {
      var opts = gameConfig[i];

      for (var j = 0; j < opts.count; j++) {
        this.bingList.push(i);
      }
    }

    var length = this.bingList.length;
    this.bingList.sort(function (a, b) {
      var c = parseInt(Math.random() * length - length / 2);
      return c;
    });
  },
  start: function start() {},
  update: function update(dt) {
    if (game.isOver) return;
    if (this.parent.isDeath) return;
    this.nextBin += dt;

    if (this.nextBin < this.bingTime) {
      return;
    }

    this.nextBin = 0;
    var bing = this.bingList.shift();
    this.bingList.push(bing);
    var data = this.config[bing];

    if (this.fff) {
      // this.fff = false;
      game.emit("chubing", bing, this.bingPos, data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxmYWN0b3J5XFxlbmVteUZhY3RvcnkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiaW5nVGltZSIsIm9uRGVzdHJveSIsIm9uTG9hZCIsImZmZiIsIm5leHRCaW4iLCJwYXJlbnQiLCJub2RlIiwiYmluZ1BvcyIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsInYyIiwiZ2FtZUNvbmZpZyIsInJlcXVpcmUiLCJnYW1lIiwiZ3VhbkthSW5mbyIsImNvbmZpZyIsImJpbmdMaXN0IiwiaSIsIm9wdHMiLCJqIiwiY291bnQiLCJwdXNoIiwibGVuZ3RoIiwic29ydCIsImEiLCJiIiwiYyIsInBhcnNlSW50IiwiTWF0aCIsInJhbmRvbSIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJpc092ZXIiLCJpc0RlYXRoIiwiYmluZyIsInNoaWZ0IiwiZGF0YSIsImVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUUsRUFERixDQUNNOztBQUROLEdBRlA7QUFLTEMsRUFBQUEsU0FMSyx1QkFLTyxDQUNSO0FBQ0gsR0FQSTtBQVFMQyxFQUFBQSxNQVJLLG9CQVFJO0FBQ0wsU0FBS0MsR0FBTCxHQUFXLElBQVg7QUFDQSxTQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyxJQUFMLENBQVVELE1BQXhCO0FBQ0EsU0FBS0UsT0FBTCxHQUFlLEtBQUtELElBQUwsQ0FBVUUscUJBQVYsQ0FBZ0NaLEVBQUUsQ0FBQ2EsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFULENBQWhDLENBQWY7O0FBQ0EsUUFBSUMsVUFBVSxHQUFHQyxPQUFPLENBQUNDLElBQUksQ0FBQ0MsVUFBTixDQUF4Qjs7QUFDQSxTQUFLQyxNQUFMLEdBQWNKLFVBQWQ7QUFDQSxTQUFLSyxRQUFMLEdBQWdCLEVBQWhCOztBQUNBLFNBQUssSUFBSUMsQ0FBVCxJQUFjTixVQUFkLEVBQTBCO0FBQ3RCLFVBQUlPLElBQUksR0FBR1AsVUFBVSxDQUFDTSxDQUFELENBQXJCOztBQUNBLFdBQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsSUFBSSxDQUFDRSxLQUF6QixFQUFnQ0QsQ0FBQyxFQUFqQyxFQUFxQztBQUNqQyxhQUFLSCxRQUFMLENBQWNLLElBQWQsQ0FBbUJKLENBQW5CO0FBQ0g7QUFDSjs7QUFDRCxRQUFJSyxNQUFNLEdBQUcsS0FBS04sUUFBTCxDQUFjTSxNQUEzQjtBQUNBLFNBQUtOLFFBQUwsQ0FBY08sSUFBZCxDQUFtQixVQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDL0IsVUFBSUMsQ0FBQyxHQUFHQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQlAsTUFBaEIsR0FBeUJBLE1BQU0sR0FBRyxDQUFuQyxDQUFoQjtBQUNBLGFBQU9JLENBQVA7QUFDSCxLQUhEO0FBSUgsR0EzQkk7QUE0QkxJLEVBQUFBLEtBNUJLLG1CQTRCRyxDQUNQLENBN0JJO0FBOEJMQyxFQUFBQSxNQTlCSyxrQkE4QkVDLEVBOUJGLEVBOEJNO0FBQ1AsUUFBSW5CLElBQUksQ0FBQ29CLE1BQVQsRUFBaUI7QUFDakIsUUFBSSxLQUFLM0IsTUFBTCxDQUFZNEIsT0FBaEIsRUFBeUI7QUFDekIsU0FBSzdCLE9BQUwsSUFBZ0IyQixFQUFoQjs7QUFDQSxRQUFJLEtBQUszQixPQUFMLEdBQWUsS0FBS0osUUFBeEIsRUFBa0M7QUFDOUI7QUFDSDs7QUFDRCxTQUFLSSxPQUFMLEdBQWUsQ0FBZjtBQUNBLFFBQUk4QixJQUFJLEdBQUcsS0FBS25CLFFBQUwsQ0FBY29CLEtBQWQsRUFBWDtBQUNBLFNBQUtwQixRQUFMLENBQWNLLElBQWQsQ0FBbUJjLElBQW5CO0FBQ0EsUUFBSUUsSUFBSSxHQUFHLEtBQUt0QixNQUFMLENBQVlvQixJQUFaLENBQVg7O0FBQ0EsUUFBSSxLQUFLL0IsR0FBVCxFQUFjO0FBQ1Y7QUFDQVMsTUFBQUEsSUFBSSxDQUFDeUIsSUFBTCxDQUFVLFNBQVYsRUFBcUJILElBQXJCLEVBQTJCLEtBQUszQixPQUFoQyxFQUF5QzZCLElBQXpDO0FBQ0g7QUFDSjtBQTdDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYmluZ1RpbWU6IDEwLCAvL+avj+malDXnp5Llh7rkuIDkuKrlhpvlrphcclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy9jbGVhckludGVydmFsKHRoaXMubWFrZUp1bkd1YW4pXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZmZmID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5leHRCaW4gPSAwO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICB0aGlzLmJpbmdQb3MgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICBsZXQgZ2FtZUNvbmZpZyA9IHJlcXVpcmUoZ2FtZS5ndWFuS2FJbmZvKTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGdhbWVDb25maWc7XHJcbiAgICAgICAgdGhpcy5iaW5nTGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gZ2FtZUNvbmZpZykge1xyXG4gICAgICAgICAgICBsZXQgb3B0cyA9IGdhbWVDb25maWdbaV07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb3B0cy5jb3VudDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmdMaXN0LnB1c2goaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMuYmluZ0xpc3QubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuYmluZ0xpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICBsZXQgYyA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiBsZW5ndGggLSBsZW5ndGggLyAyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAoZ2FtZS5pc092ZXIpIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQuaXNEZWF0aCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubmV4dEJpbiArPSBkdDtcclxuICAgICAgICBpZiAodGhpcy5uZXh0QmluIDwgdGhpcy5iaW5nVGltZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubmV4dEJpbiA9IDA7XHJcbiAgICAgICAgbGV0IGJpbmcgPSB0aGlzLmJpbmdMaXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgdGhpcy5iaW5nTGlzdC5wdXNoKGJpbmcpO1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jb25maWdbYmluZ107XHJcbiAgICAgICAgaWYgKHRoaXMuZmZmKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZmZmID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGdhbWUuZW1pdChcImNodWJpbmdcIiwgYmluZywgdGhpcy5iaW5nUG9zLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19