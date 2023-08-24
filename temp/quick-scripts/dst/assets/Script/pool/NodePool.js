
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/pool/NodePool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd16ceST37dE3YeHbTYWlJHF', 'NodePool');
// Script/pool/NodePool.js

"use strict";

module.exports = cc.Class({
  name: 'NodePool',
  properties: {
    prefab: cc.Prefab
  },
  ctor: function ctor() {
    this.nodePool = new cc.NodePool();
  },
  //获取一个节点
  getNode: function getNode(data, parent) {
    var node = null;

    if (this.nodePool.size() > 0) {
      // 通过 size 接口判断对象池中是否有空闲的对象
      node = this.nodePool.get();
    } else {
      // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
      node = cc.instantiate(this.prefab);
      node.pool = this;
    }

    if (parent) parent.addChild(node);
    var poolComponents = node.getComponentsInChildren("PoolComponent");

    for (var i in poolComponents) {
      var poolComponent = poolComponents[i];
      poolComponent.reuse(data); //启用
    }

    return node;
  },
  put: function put(node) {
    node.removeFromParent();
    this.nodePool.put(node); // 通过之前传入的管理类实例回收子弹

    var poolComponents = node.getComponentsInChildren("PoolComponent");

    for (var i in poolComponents) {
      var poolComponent = poolComponents[i];
      poolComponent.unuse(); //启用
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwb29sXFxOb2RlUG9vbC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwicHJlZmFiIiwiUHJlZmFiIiwiY3RvciIsIm5vZGVQb29sIiwiTm9kZVBvb2wiLCJnZXROb2RlIiwiZGF0YSIsInBhcmVudCIsIm5vZGUiLCJzaXplIiwiZ2V0IiwiaW5zdGFudGlhdGUiLCJwb29sIiwiYWRkQ2hpbGQiLCJwb29sQ29tcG9uZW50cyIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwiaSIsInBvb2xDb21wb25lbnQiLCJyZXVzZSIsInB1dCIsInJlbW92ZUZyb21QYXJlbnQiLCJ1bnVzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUN0QkMsRUFBQUEsSUFBSSxFQUFFLFVBRGdCO0FBRXRCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFFSixFQUFFLENBQUNLO0FBREgsR0FGVTtBQUt0QkMsRUFBQUEsSUFMc0Isa0JBS2Y7QUFDSCxTQUFLQyxRQUFMLEdBQWdCLElBQUlQLEVBQUUsQ0FBQ1EsUUFBUCxFQUFoQjtBQUNILEdBUHFCO0FBUXRCO0FBQ0FDLEVBQUFBLE9BQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQkMsTUFBaEIsRUFBd0I7QUFDN0IsUUFBSUMsSUFBSSxHQUFHLElBQVg7O0FBQ0EsUUFBSSxLQUFLTCxRQUFMLENBQWNNLElBQWQsS0FBdUIsQ0FBM0IsRUFBOEI7QUFBRTtBQUM1QkQsTUFBQUEsSUFBSSxHQUFHLEtBQUtMLFFBQUwsQ0FBY08sR0FBZCxFQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQUU7QUFDTEYsTUFBQUEsSUFBSSxHQUFHWixFQUFFLENBQUNlLFdBQUgsQ0FBZSxLQUFLWCxNQUFwQixDQUFQO0FBQ0FRLE1BQUFBLElBQUksQ0FBQ0ksSUFBTCxHQUFZLElBQVo7QUFDSDs7QUFDRCxRQUFJTCxNQUFKLEVBQVlBLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkwsSUFBaEI7QUFDWixRQUFJTSxjQUFjLEdBQUdOLElBQUksQ0FBQ08sdUJBQUwsQ0FBNkIsZUFBN0IsQ0FBckI7O0FBQ0EsU0FBSyxJQUFJQyxDQUFULElBQWNGLGNBQWQsRUFBOEI7QUFDMUIsVUFBSUcsYUFBYSxHQUFHSCxjQUFjLENBQUNFLENBQUQsQ0FBbEM7QUFDQUMsTUFBQUEsYUFBYSxDQUFDQyxLQUFkLENBQW9CWixJQUFwQixFQUYwQixDQUVDO0FBQzlCOztBQUNELFdBQU9FLElBQVA7QUFDSCxHQXhCcUI7QUF5QnRCVyxFQUFBQSxHQUFHLEVBQUUsYUFBVVgsSUFBVixFQUFnQjtBQUNqQkEsSUFBQUEsSUFBSSxDQUFDWSxnQkFBTDtBQUNBLFNBQUtqQixRQUFMLENBQWNnQixHQUFkLENBQWtCWCxJQUFsQixFQUZpQixDQUVROztBQUN6QixRQUFJTSxjQUFjLEdBQUdOLElBQUksQ0FBQ08sdUJBQUwsQ0FBNkIsZUFBN0IsQ0FBckI7O0FBQ0EsU0FBSyxJQUFJQyxDQUFULElBQWNGLGNBQWQsRUFBOEI7QUFDMUIsVUFBSUcsYUFBYSxHQUFHSCxjQUFjLENBQUNFLENBQUQsQ0FBbEM7QUFDQUMsTUFBQUEsYUFBYSxDQUFDSSxLQUFkLEdBRjBCLENBRUg7QUFDMUI7QUFDSjtBQWpDcUIsQ0FBVCxDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBjYy5DbGFzcyh7XHJcbiAgICBuYW1lOiAnTm9kZVBvb2wnLFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHByZWZhYjogY2MuUHJlZmFiXHJcbiAgICB9LFxyXG4gICAgY3RvcigpIHtcclxuICAgICAgICB0aGlzLm5vZGVQb29sID0gbmV3IGNjLk5vZGVQb29sKCk7XHJcbiAgICB9LFxyXG4gICAgLy/ojrflj5bkuIDkuKroioLngrlcclxuICAgIGdldE5vZGU6IGZ1bmN0aW9uIChkYXRhLCBwYXJlbnQpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZVBvb2wuc2l6ZSgpID4gMCkgeyAvLyDpgJrov4cgc2l6ZSDmjqXlj6PliKTmlq3lr7nosaHmsaDkuK3mmK/lkKbmnInnqbrpl7LnmoTlr7nosaFcclxuICAgICAgICAgICAgbm9kZSA9IHRoaXMubm9kZVBvb2wuZ2V0KCk7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8g5aaC5p6c5rKh5pyJ56m66Zey5a+56LGh77yM5Lmf5bCx5piv5a+56LGh5rGg5Lit5aSH55So5a+56LGh5LiN5aSf5pe277yM5oiR5Lus5bCx55SoIGNjLmluc3RhbnRpYXRlIOmHjeaWsOWIm+W7ulxyXG4gICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWIpO1xyXG4gICAgICAgICAgICBub2RlLnBvb2wgPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFyZW50KSBwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgbGV0IHBvb2xDb21wb25lbnRzID0gbm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihcIlBvb2xDb21wb25lbnRcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBwb29sQ29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBsZXQgcG9vbENvbXBvbmVudCA9IHBvb2xDb21wb25lbnRzW2ldO1xyXG4gICAgICAgICAgICBwb29sQ29tcG9uZW50LnJldXNlKGRhdGEpOyAvL+WQr+eUqFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH0sXHJcbiAgICBwdXQ6IGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgbm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlUG9vbC5wdXQobm9kZSk7IC8vIOmAmui/h+S5i+WJjeS8oOWFpeeahOeuoeeQhuexu+WunuS+i+WbnuaUtuWtkOW8uVxyXG4gICAgICAgIGxldCBwb29sQ29tcG9uZW50cyA9IG5vZGUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oXCJQb29sQ29tcG9uZW50XCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gcG9vbENvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgbGV0IHBvb2xDb21wb25lbnQgPSBwb29sQ29tcG9uZW50c1tpXTtcclxuICAgICAgICAgICAgcG9vbENvbXBvbmVudC51bnVzZSgpOyAvL+WQr+eUqFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7Il19