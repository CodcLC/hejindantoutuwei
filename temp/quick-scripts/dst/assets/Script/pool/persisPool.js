
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/pool/persisPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b153YOncVB679HyrjGu8mU', 'persisPool');
// Script/pool/persisPool.js

"use strict";

var NodePool = require('NodePool');

cc.Class({
  "extends": cc.Component,
  properties: {
    bulletPool: {
      "default": [],
      type: NodePool
    },
    firePool: {
      "default": [],
      type: NodePool
    },
    bombPool: {
      "default": [],
      type: NodePool
    },
    bingPool: {
      "default": [],
      type: NodePool
    }
  },
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {
    game.bulletPool = {};

    for (var i in this.bulletPool) {
      var pool = this.bulletPool[i];

      if (pool) {
        game.bulletPool[pool.prefab.name] = pool;
      }
    }

    game.firePool = {};

    for (var i in this.firePool) {
      var pool = this.firePool[i];

      if (pool) {
        game.firePool[pool.prefab.name] = pool;
      }
    }

    game.bombPool = {};

    for (var i in this.bombPool) {
      var pool = this.bombPool[i];

      if (pool) {
        game.bombPool[pool.prefab.name] = pool;
      }
    }

    game.bingPool = {};

    for (var i in this.bingPool) {
      var pool = this.bingPool[i];

      if (pool) {
        game.bingPool[pool.prefab.name] = pool;
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwb29sXFxwZXJzaXNQb29sLmpzIl0sIm5hbWVzIjpbIk5vZGVQb29sIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYnVsbGV0UG9vbCIsInR5cGUiLCJmaXJlUG9vbCIsImJvbWJQb29sIiwiYmluZ1Bvb2wiLCJvbkRlc3Ryb3kiLCJvbkxvYWQiLCJnYW1lIiwiaSIsInBvb2wiLCJwcmVmYWIiLCJuYW1lIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF4Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLEVBREQ7QUFFUkMsTUFBQUEsSUFBSSxFQUFFUDtBQUZFLEtBREo7QUFLUlEsSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsRUFESDtBQUVORCxNQUFBQSxJQUFJLEVBQUVQO0FBRkEsS0FMRjtBQVNSUyxJQUFBQSxRQUFRLEVBQUU7QUFDTixpQkFBUyxFQURIO0FBRU5GLE1BQUFBLElBQUksRUFBRVA7QUFGQSxLQVRGO0FBYVJVLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLEVBREg7QUFFTkgsTUFBQUEsSUFBSSxFQUFFUDtBQUZBO0FBYkYsR0FGUDtBQW9CTFcsRUFBQUEsU0FwQkssdUJBb0JPLENBQ1gsQ0FyQkk7QUFzQkxDLEVBQUFBLE1BdEJLLG9CQXNCSTtBQUNMQyxJQUFBQSxJQUFJLENBQUNQLFVBQUwsR0FBa0IsRUFBbEI7O0FBQ0EsU0FBSyxJQUFJUSxDQUFULElBQWMsS0FBS1IsVUFBbkIsRUFBK0I7QUFDM0IsVUFBSVMsSUFBSSxHQUFHLEtBQUtULFVBQUwsQ0FBZ0JRLENBQWhCLENBQVg7O0FBQ0EsVUFBSUMsSUFBSixFQUFVO0FBQ05GLFFBQUFBLElBQUksQ0FBQ1AsVUFBTCxDQUFnQlMsSUFBSSxDQUFDQyxNQUFMLENBQVlDLElBQTVCLElBQW9DRixJQUFwQztBQUNIO0FBQ0o7O0FBQ0RGLElBQUFBLElBQUksQ0FBQ0wsUUFBTCxHQUFnQixFQUFoQjs7QUFDQSxTQUFLLElBQUlNLENBQVQsSUFBYyxLQUFLTixRQUFuQixFQUE2QjtBQUN6QixVQUFJTyxJQUFJLEdBQUcsS0FBS1AsUUFBTCxDQUFjTSxDQUFkLENBQVg7O0FBQ0EsVUFBSUMsSUFBSixFQUFVO0FBQ05GLFFBQUFBLElBQUksQ0FBQ0wsUUFBTCxDQUFjTyxJQUFJLENBQUNDLE1BQUwsQ0FBWUMsSUFBMUIsSUFBa0NGLElBQWxDO0FBQ0g7QUFDSjs7QUFDREYsSUFBQUEsSUFBSSxDQUFDSixRQUFMLEdBQWdCLEVBQWhCOztBQUNBLFNBQUssSUFBSUssQ0FBVCxJQUFjLEtBQUtMLFFBQW5CLEVBQTZCO0FBQ3pCLFVBQUlNLElBQUksR0FBRyxLQUFLTixRQUFMLENBQWNLLENBQWQsQ0FBWDs7QUFDQSxVQUFJQyxJQUFKLEVBQVU7QUFDTkYsUUFBQUEsSUFBSSxDQUFDSixRQUFMLENBQWNNLElBQUksQ0FBQ0MsTUFBTCxDQUFZQyxJQUExQixJQUFrQ0YsSUFBbEM7QUFDSDtBQUNKOztBQUNERixJQUFBQSxJQUFJLENBQUNILFFBQUwsR0FBZ0IsRUFBaEI7O0FBQ0EsU0FBSyxJQUFJSSxDQUFULElBQWMsS0FBS0osUUFBbkIsRUFBNkI7QUFDekIsVUFBSUssSUFBSSxHQUFHLEtBQUtMLFFBQUwsQ0FBY0ksQ0FBZCxDQUFYOztBQUNBLFVBQUlDLElBQUosRUFBVTtBQUNORixRQUFBQSxJQUFJLENBQUNILFFBQUwsQ0FBY0ssSUFBSSxDQUFDQyxNQUFMLENBQVlDLElBQTFCLElBQWtDRixJQUFsQztBQUNIO0FBQ0o7QUFDSixHQW5ESTtBQW9ETEcsRUFBQUEsS0FwREssbUJBb0RHLENBQ1AsQ0FyREksQ0FzREw7O0FBdERLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE5vZGVQb29sID0gcmVxdWlyZSgnTm9kZVBvb2wnKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJ1bGxldFBvb2w6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IE5vZGVQb29sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaXJlUG9vbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogTm9kZVBvb2xcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvbWJQb29sOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBOb2RlUG9vbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmluZ1Bvb2w6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IE5vZGVQb29sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGdhbWUuYnVsbGV0UG9vbCA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5idWxsZXRQb29sKSB7XHJcbiAgICAgICAgICAgIHZhciBwb29sID0gdGhpcy5idWxsZXRQb29sW2ldO1xyXG4gICAgICAgICAgICBpZiAocG9vbCkge1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5idWxsZXRQb29sW3Bvb2wucHJlZmFiLm5hbWVdID0gcG9vbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBnYW1lLmZpcmVQb29sID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmZpcmVQb29sKSB7XHJcbiAgICAgICAgICAgIHZhciBwb29sID0gdGhpcy5maXJlUG9vbFtpXTtcclxuICAgICAgICAgICAgaWYgKHBvb2wpIHtcclxuICAgICAgICAgICAgICAgIGdhbWUuZmlyZVBvb2xbcG9vbC5wcmVmYWIubmFtZV0gPSBwb29sO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhbWUuYm9tYlBvb2wgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuYm9tYlBvb2wpIHtcclxuICAgICAgICAgICAgdmFyIHBvb2wgPSB0aGlzLmJvbWJQb29sW2ldO1xyXG4gICAgICAgICAgICBpZiAocG9vbCkge1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5ib21iUG9vbFtwb29sLnByZWZhYi5uYW1lXSA9IHBvb2w7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2FtZS5iaW5nUG9vbCA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5iaW5nUG9vbCkge1xyXG4gICAgICAgICAgICB2YXIgcG9vbCA9IHRoaXMuYmluZ1Bvb2xbaV07XHJcbiAgICAgICAgICAgIGlmIChwb29sKSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lLmJpbmdQb29sW3Bvb2wucHJlZmFiLm5hbWVdID0gcG9vbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==