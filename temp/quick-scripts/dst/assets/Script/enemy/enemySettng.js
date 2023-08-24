
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/enemy/enemySettng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ecf2+i3l1Giop2hM3sD43b', 'enemySettng');
// Script/enemy/enemySettng.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    var parent = this.node.parent; //父节点

    var box = this.node.getComponent(cc.BoxCollider); //碰撞组件

    if (box) {
      var parentBox = parent.getComponent(cc.PhysicsBoxCollider); //物理引擎碰撞组件

      parentBox.offset = box.offset.clone();
      parentBox.size = box.size.clone();
    } else {// box = this.node.getComponent(cc.PolygonCollider); //碰撞组件
      // var parentBox = parent.getComponent(cc.PhysicsPolygonCollider);//物理引擎碰撞组件
      // parentBox.points = box.points;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxlbmVteVxcZW5lbXlTZXR0bmcuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJwYXJlbnQiLCJub2RlIiwiYm94IiwiZ2V0Q29tcG9uZW50IiwiQm94Q29sbGlkZXIiLCJwYXJlbnRCb3giLCJQaHlzaWNzQm94Q29sbGlkZXIiLCJvZmZzZXQiLCJjbG9uZSIsInNpemUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFLEVBRlA7QUFHTEMsRUFBQUEsTUFISyxvQkFHSTtBQUNMLFFBQUlDLE1BQU0sR0FBRyxLQUFLQyxJQUFMLENBQVVELE1BQXZCLENBREssQ0FDMEI7O0FBQy9CLFFBQUlFLEdBQUcsR0FBRyxLQUFLRCxJQUFMLENBQVVFLFlBQVYsQ0FBdUJSLEVBQUUsQ0FBQ1MsV0FBMUIsQ0FBVixDQUZLLENBRTZDOztBQUNsRCxRQUFJRixHQUFKLEVBQVM7QUFDTCxVQUFJRyxTQUFTLEdBQUdMLE1BQU0sQ0FBQ0csWUFBUCxDQUFvQlIsRUFBRSxDQUFDVyxrQkFBdkIsQ0FBaEIsQ0FESyxDQUNzRDs7QUFDM0RELE1BQUFBLFNBQVMsQ0FBQ0UsTUFBVixHQUFtQkwsR0FBRyxDQUFDSyxNQUFKLENBQVdDLEtBQVgsRUFBbkI7QUFDQUgsTUFBQUEsU0FBUyxDQUFDSSxJQUFWLEdBQWlCUCxHQUFHLENBQUNPLElBQUosQ0FBU0QsS0FBVCxFQUFqQjtBQUNILEtBSkQsTUFLSyxDQUNEO0FBQ0E7QUFDQTtBQUNIO0FBQ0osR0FoQkk7QUFpQkxFLEVBQUFBLEtBakJLLG1CQWlCRyxDQUNQLENBbEJJLENBbUJMOztBQW5CSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7fSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDsgLy/niLboioLngrlcclxuICAgICAgICB2YXIgYm94ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Cb3hDb2xsaWRlcik7IC8v56Kw5pKe57uE5Lu2XHJcbiAgICAgICAgaWYgKGJveCkge1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50Qm94ID0gcGFyZW50LmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpOy8v54mp55CG5byV5pOO56Kw5pKe57uE5Lu2XHJcbiAgICAgICAgICAgIHBhcmVudEJveC5vZmZzZXQgPSBib3gub2Zmc2V0LmNsb25lKCk7XHJcbiAgICAgICAgICAgIHBhcmVudEJveC5zaXplID0gYm94LnNpemUuY2xvbmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGJveCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUG9seWdvbkNvbGxpZGVyKTsgLy/norDmkp7nu4Tku7ZcclxuICAgICAgICAgICAgLy8gdmFyIHBhcmVudEJveCA9IHBhcmVudC5nZXRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7Ly/niannkIblvJXmk47norDmkp7nu4Tku7ZcclxuICAgICAgICAgICAgLy8gcGFyZW50Qm94LnBvaW50cyA9IGJveC5wb2ludHM7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19