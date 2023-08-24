
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/core/widget_child.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab997Kv4ptMJYNoOxmJzmm6', 'widget_child');
// Script/core/widget_child.js

"use strict";

cc.Class({
  "extends": cc.Component,
  //根据子节点的占用空间 重新设计宽高
  properties: {
    childNode: cc.Node
  },
  onLoad: function onLoad() {
    this.node.width = this.childNode.width;
    this.node.height = this.childNode.height;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb3JlXFx3aWRnZXRfY2hpbGQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjaGlsZE5vZGUiLCJOb2RlIiwib25Mb2FkIiwibm9kZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3RhcnQiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUw7QUFDQUMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBRUosRUFBRSxDQUFDSztBQUROLEdBSFA7QUFNTEMsRUFBQUEsTUFOSyxvQkFNSTtBQUNMLFNBQUtDLElBQUwsQ0FBVUMsS0FBVixHQUFrQixLQUFLSixTQUFMLENBQWVJLEtBQWpDO0FBQ0EsU0FBS0QsSUFBTCxDQUFVRSxNQUFWLEdBQW1CLEtBQUtMLFNBQUwsQ0FBZUssTUFBbEM7QUFDSCxHQVRJO0FBVUxDLEVBQUFBLEtBVkssbUJBVUcsQ0FDUCxDQVhJO0FBWUxDLEVBQUFBLFNBWkssdUJBWU8sQ0FDWCxDQWJJLENBY0w7O0FBZEssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgLy/moLnmja7lrZDoioLngrnnmoTljaDnlKjnqbrpl7Qg6YeN5paw6K6+6K6h5a696auYXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgY2hpbGROb2RlOiBjYy5Ob2RlXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS53aWR0aCA9IHRoaXMuY2hpbGROb2RlLndpZHRoO1xyXG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSB0aGlzLmNoaWxkTm9kZS5oZWlnaHQ7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19