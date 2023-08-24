
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/layer/roleLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8715d6tVP5MypVr8XqhnGHf', 'roleLayer');
// Script/layer/roleLayer.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onDestroy: function onDestroy() {
    game.off("chubing", this.chubing, this);
  },
  onLoad: function onLoad() {
    this.zIndex = 0; //

    this.yList = [-10, -5, 0, 5, 10];
    game.on("chubing", this.chubing, this);
  },
  chubing: function chubing(prefabName, pos, data) {
    var pool = game.bingPool[prefabName];

    if (pool && pool.prefab) {
      this.zIndex++;
      this.zIndex = this.zIndex % this.yList.length;
      data.zy = this.yList[this.zIndex];
      var b = pool.getNode(data, this.node);
      b.x = pos.x;
      b.y = pos.y; //this.node.addChild(b);

      b.zIndex = this.zIndex;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsYXllclxccm9sZUxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25EZXN0cm95IiwiZ2FtZSIsIm9mZiIsImNodWJpbmciLCJvbkxvYWQiLCJ6SW5kZXgiLCJ5TGlzdCIsIm9uIiwicHJlZmFiTmFtZSIsInBvcyIsImRhdGEiLCJwb29sIiwiYmluZ1Bvb2wiLCJwcmVmYWIiLCJsZW5ndGgiLCJ6eSIsImIiLCJnZXROb2RlIiwibm9kZSIsIngiLCJ5Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRSxFQUZQO0FBR0xDLEVBQUFBLFNBSEssdUJBR087QUFDUkMsSUFBQUEsSUFBSSxDQUFDQyxHQUFMLENBQVMsU0FBVCxFQUFvQixLQUFLQyxPQUF6QixFQUFrQyxJQUFsQztBQUNILEdBTEk7QUFNTEMsRUFBQUEsTUFOSyxvQkFNSTtBQUNMLFNBQUtDLE1BQUwsR0FBYyxDQUFkLENBREssQ0FDVzs7QUFDaEIsU0FBS0MsS0FBTCxHQUFhLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsRUFBaEIsQ0FBYjtBQUNBTCxJQUFBQSxJQUFJLENBQUNNLEVBQUwsQ0FBUSxTQUFSLEVBQW1CLEtBQUtKLE9BQXhCLEVBQWlDLElBQWpDO0FBQ0gsR0FWSTtBQVdMQSxFQUFBQSxPQVhLLG1CQVdHSyxVQVhILEVBV2VDLEdBWGYsRUFXb0JDLElBWHBCLEVBVzBCO0FBQzNCLFFBQUlDLElBQUksR0FBR1YsSUFBSSxDQUFDVyxRQUFMLENBQWNKLFVBQWQsQ0FBWDs7QUFDQSxRQUFJRyxJQUFJLElBQUlBLElBQUksQ0FBQ0UsTUFBakIsRUFBeUI7QUFDckIsV0FBS1IsTUFBTDtBQUNBLFdBQUtBLE1BQUwsR0FBYyxLQUFLQSxNQUFMLEdBQWMsS0FBS0MsS0FBTCxDQUFXUSxNQUF2QztBQUNBSixNQUFBQSxJQUFJLENBQUNLLEVBQUwsR0FBVSxLQUFLVCxLQUFMLENBQVcsS0FBS0QsTUFBaEIsQ0FBVjtBQUNBLFVBQUlXLENBQUMsR0FBR0wsSUFBSSxDQUFDTSxPQUFMLENBQWFQLElBQWIsRUFBbUIsS0FBS1EsSUFBeEIsQ0FBUjtBQUNBRixNQUFBQSxDQUFDLENBQUNHLENBQUYsR0FBTVYsR0FBRyxDQUFDVSxDQUFWO0FBQ0FILE1BQUFBLENBQUMsQ0FBQ0ksQ0FBRixHQUFNWCxHQUFHLENBQUNXLENBQVYsQ0FOcUIsQ0FPckI7O0FBQ0FKLE1BQUFBLENBQUMsQ0FBQ1gsTUFBRixHQUFXLEtBQUtBLE1BQWhCO0FBQ0g7QUFDSixHQXZCSTtBQXdCTGdCLEVBQUFBLEtBeEJLLG1CQXdCRyxDQUNQLENBekJJLENBMEJMOztBQTFCSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7fSxcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBnYW1lLm9mZihcImNodWJpbmdcIiwgdGhpcy5jaHViaW5nLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy56SW5kZXggPSAwOy8vXHJcbiAgICAgICAgdGhpcy55TGlzdCA9IFstMTAsIC01LCAwLCA1LCAxMF07XHJcbiAgICAgICAgZ2FtZS5vbihcImNodWJpbmdcIiwgdGhpcy5jaHViaW5nLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBjaHViaW5nKHByZWZhYk5hbWUsIHBvcywgZGF0YSkge1xyXG4gICAgICAgIGxldCBwb29sID0gZ2FtZS5iaW5nUG9vbFtwcmVmYWJOYW1lXTtcclxuICAgICAgICBpZiAocG9vbCAmJiBwb29sLnByZWZhYikge1xyXG4gICAgICAgICAgICB0aGlzLnpJbmRleCsrO1xyXG4gICAgICAgICAgICB0aGlzLnpJbmRleCA9IHRoaXMuekluZGV4ICUgdGhpcy55TGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGRhdGEuenkgPSB0aGlzLnlMaXN0W3RoaXMuekluZGV4XTtcclxuICAgICAgICAgICAgbGV0IGIgPSBwb29sLmdldE5vZGUoZGF0YSwgdGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgYi54ID0gcG9zLng7XHJcbiAgICAgICAgICAgIGIueSA9IHBvcy55O1xyXG4gICAgICAgICAgICAvL3RoaXMubm9kZS5hZGRDaGlsZChiKTtcclxuICAgICAgICAgICAgYi56SW5kZXggPSB0aGlzLnpJbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=