
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/core/roleRotation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f1abu+nMdGdKUwIJfTqxLo', 'roleRotation');
// Script/core/roleRotation.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": PoolComponent,
  properties: {
    parent: cc.Node
  },
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {
    this.idx = 0;
  },
  reuse: function reuse(data) {
    this.idx = 0;
    this.node.angle = 0;
  },
  unuse: function unuse() {
    this.node.angle = 0;
  },
  update: function update(dt) {
    if (!this.parent) return;
    this.idx++;

    if (this.idx % 10 == 0) {
      var idx = _.sortedIndex(game.mapXList, this.parent.x);

      if (idx > 0) idx--;

      if (idx >= 0 && idx < game.mapRotation.length) {
        var angle = game.mapRotation[idx];
        this.node.angle = angle;
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb3JlXFxyb2xlUm90YXRpb24uanMiXSwibmFtZXMiOlsiUG9vbENvbXBvbmVudCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsInBhcmVudCIsIk5vZGUiLCJvbkRlc3Ryb3kiLCJvbkxvYWQiLCJpZHgiLCJyZXVzZSIsImRhdGEiLCJub2RlIiwiYW5nbGUiLCJ1bnVzZSIsInVwZGF0ZSIsImR0IiwiXyIsInNvcnRlZEluZGV4IiwiZ2FtZSIsIm1hcFhMaXN0IiwieCIsIm1hcFJvdGF0aW9uIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBM0IsRUFBOEM7OztBQUM5Q0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTSCxhQURKO0FBRUxJLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQUVILEVBQUUsQ0FBQ0k7QUFESCxHQUZQO0FBS0xDLEVBQUFBLFNBTEssdUJBS08sQ0FDWCxDQU5JO0FBT0xDLEVBQUFBLE1BUEssb0JBT0k7QUFDTCxTQUFLQyxHQUFMLEdBQVcsQ0FBWDtBQUNILEdBVEk7QUFVTEMsRUFBQUEsS0FWSyxpQkFVQ0MsSUFWRCxFQVVPO0FBQ1IsU0FBS0YsR0FBTCxHQUFXLENBQVg7QUFDQSxTQUFLRyxJQUFMLENBQVVDLEtBQVYsR0FBa0IsQ0FBbEI7QUFDSCxHQWJJO0FBY0xDLEVBQUFBLEtBZEssbUJBY0c7QUFDSixTQUFLRixJQUFMLENBQVVDLEtBQVYsR0FBa0IsQ0FBbEI7QUFDSCxHQWhCSTtBQWlCTEUsRUFBQUEsTUFqQkssa0JBaUJFQyxFQWpCRixFQWlCTTtBQUNQLFFBQUksQ0FBQyxLQUFLWCxNQUFWLEVBQWtCO0FBQ2xCLFNBQUtJLEdBQUw7O0FBQ0EsUUFBSSxLQUFLQSxHQUFMLEdBQVcsRUFBWCxJQUFpQixDQUFyQixFQUF3QjtBQUNwQixVQUFJQSxHQUFHLEdBQUdRLENBQUMsQ0FBQ0MsV0FBRixDQUFjQyxJQUFJLENBQUNDLFFBQW5CLEVBQTZCLEtBQUtmLE1BQUwsQ0FBWWdCLENBQXpDLENBQVY7O0FBQ0EsVUFBSVosR0FBRyxHQUFHLENBQVYsRUFBYUEsR0FBRzs7QUFDaEIsVUFBSUEsR0FBRyxJQUFJLENBQVAsSUFBWUEsR0FBRyxHQUFHVSxJQUFJLENBQUNHLFdBQUwsQ0FBaUJDLE1BQXZDLEVBQStDO0FBQzNDLFlBQUlWLEtBQUssR0FBR00sSUFBSSxDQUFDRyxXQUFMLENBQWlCYixHQUFqQixDQUFaO0FBQ0EsYUFBS0csSUFBTCxDQUFVQyxLQUFWLEdBQWtCQSxLQUFsQjtBQUNIO0FBQ0o7QUFDSjtBQTVCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUG9vbENvbXBvbmVudCA9IHJlcXVpcmUoXCJQb29sQ29tcG9uZW50XCIpOyAvL+axoOWtkOe7hOS7tlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBQb29sQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHBhcmVudDogY2MuTm9kZVxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5pZHggPSAwO1xyXG4gICAgfSxcclxuICAgIHJldXNlKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmlkeCA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gMDtcclxuICAgIH0sXHJcbiAgICB1bnVzZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSAwO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wYXJlbnQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmlkeCsrO1xyXG4gICAgICAgIGlmICh0aGlzLmlkeCAlIDEwID09IDApIHtcclxuICAgICAgICAgICAgdmFyIGlkeCA9IF8uc29ydGVkSW5kZXgoZ2FtZS5tYXBYTGlzdCwgdGhpcy5wYXJlbnQueCk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPiAwKSBpZHgtLTtcclxuICAgICAgICAgICAgaWYgKGlkeCA+PSAwICYmIGlkeCA8IGdhbWUubWFwUm90YXRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5nbGUgPSBnYW1lLm1hcFJvdGF0aW9uW2lkeF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSBhbmdsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=