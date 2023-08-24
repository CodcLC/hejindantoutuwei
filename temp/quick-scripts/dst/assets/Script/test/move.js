
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/test/move.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '604b8kuPUZHsZxGPZzSnsbk', 'move');
// Script/test/move.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    target: cc.Node,
    speedX: 10,
    speedY: 10
  },
  onLoad: function onLoad() {
    this.targetRect = cc.rect(0, 0, 100, 100);
  },
  start: function start() {},
  onDestroy: function onDestroy() {},
  update: function update(dt) {
    this.node.x--; //cc.log(this.node.width, this.node.height)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFx0ZXN0XFxtb3ZlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGFyZ2V0IiwiTm9kZSIsInNwZWVkWCIsInNwZWVkWSIsIm9uTG9hZCIsInRhcmdldFJlY3QiLCJyZWN0Iiwic3RhcnQiLCJvbkRlc3Ryb3kiLCJ1cGRhdGUiLCJkdCIsIm5vZGUiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFFSixFQUFFLENBQUNLLElBREg7QUFFUkMsSUFBQUEsTUFBTSxFQUFFLEVBRkE7QUFHUkMsSUFBQUEsTUFBTSxFQUFFO0FBSEEsR0FGUDtBQU9MQyxFQUFBQSxNQVBLLG9CQU9JO0FBQ0wsU0FBS0MsVUFBTCxHQUFrQlQsRUFBRSxDQUFDVSxJQUFILENBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxHQUFkLEVBQW1CLEdBQW5CLENBQWxCO0FBQ0gsR0FUSTtBQVVMQyxFQUFBQSxLQVZLLG1CQVVHLENBQ1AsQ0FYSTtBQVlMQyxFQUFBQSxTQVpLLHVCQVlPLENBQ1gsQ0FiSTtBQWNMQyxFQUFBQSxNQWRLLGtCQWNFQyxFQWRGLEVBY007QUFDUCxTQUFLQyxJQUFMLENBQVVDLENBQVYsR0FETyxDQUVQO0FBQ0g7QUFqQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRhcmdldDogY2MuTm9kZSxcclxuICAgICAgICBzcGVlZFg6IDEwLFxyXG4gICAgICAgIHNwZWVkWTogMTBcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRSZWN0ID0gY2MucmVjdCgwLCAwLCAxMDAsIDEwMCk7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMubm9kZS54LS07XHJcbiAgICAgICAgLy9jYy5sb2codGhpcy5ub2RlLndpZHRoLCB0aGlzLm5vZGUuaGVpZ2h0KVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==