
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/core/rotationNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b488bP9vHxDbIi70Q0n8pxm', 'rotationNode');
// Script/core/rotationNode.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {// var seq = cc.repeatForever(cc.sequence(cc.rotateTo(1, 90),cc.rotateTo(1, 180),cc.rotateTo(1, 270),cc.rotateTo(1, 360)));
    // this.node.runAction(seq)
  },
  start: function start() {},
  update: function update(dt) {
    this.node.angle -= dt * 360 / 1.5;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb3JlXFxyb3RhdGlvbk5vZGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkRlc3Ryb3kiLCJvbkxvYWQiLCJzdGFydCIsInVwZGF0ZSIsImR0Iiwibm9kZSIsImFuZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUUsRUFGUDtBQUdMQyxFQUFBQSxTQUhLLHVCQUdPLENBQ1gsQ0FKSTtBQUtMQyxFQUFBQSxNQUxLLG9CQUtJLENBQ0w7QUFDQTtBQUNILEdBUkk7QUFTTEMsRUFBQUEsS0FUSyxtQkFTRyxDQUNQLENBVkk7QUFXTEMsRUFBQUEsTUFYSyxrQkFXRUMsRUFYRixFQVdNO0FBQ1AsU0FBS0MsSUFBTCxDQUFVQyxLQUFWLElBQW9CRixFQUFFLEdBQUcsR0FBTixHQUFhLEdBQWhDO0FBQ0g7QUFiSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7fSxcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gdmFyIHNlcSA9IGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoY2Mucm90YXRlVG8oMSwgOTApLGNjLnJvdGF0ZVRvKDEsIDE4MCksY2Mucm90YXRlVG8oMSwgMjcwKSxjYy5yb3RhdGVUbygxLCAzNjApKSk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnJ1bkFjdGlvbihzZXEpXHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlIC09IChkdCAqIDM2MCkgLyAxLjU7XHJcbiAgICB9LFxyXG59KTtcclxuIl19