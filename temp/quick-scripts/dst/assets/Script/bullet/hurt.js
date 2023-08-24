
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bullet/hurt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1c80I0dKpEvK5HjoS3Lizf', 'hurt');
// Script/bullet/hurt.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": PoolComponent,
  properties: {
    value: 10,
    //伤害值
    type: 0,
    //0=伤害1个  1=范围伤害
    hurtValue: {
      get: function get() {
        if (this.state == 1) {
          return this.value;
        }

        return 0;
      }
    }
  },
  //回收
  unuse: function unuse() {},
  //重用
  reuse: function reuse(data) {
    this.state = 1;

    if (data.attack) {
      this.value = data.attack;
    }
  },
  end: function end() {
    if (this.type == 0) {
      this.state = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxidWxsZXRcXGh1cnQuanMiXSwibmFtZXMiOlsiUG9vbENvbXBvbmVudCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsInZhbHVlIiwidHlwZSIsImh1cnRWYWx1ZSIsImdldCIsInN0YXRlIiwidW51c2UiLCJyZXVzZSIsImRhdGEiLCJhdHRhY2siLCJlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUEzQixFQUE4Qzs7O0FBQzlDQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNILGFBREo7QUFFTEksRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRSxFQURDO0FBQ0U7QUFDVkMsSUFBQUEsSUFBSSxFQUFFLENBRkU7QUFFQTtBQUNSQyxJQUFBQSxTQUFTLEVBQUU7QUFDUEMsTUFBQUEsR0FETyxpQkFDRDtBQUNGLFlBQUksS0FBS0MsS0FBTCxJQUFjLENBQWxCLEVBQXFCO0FBQ2pCLGlCQUFPLEtBQUtKLEtBQVo7QUFDSDs7QUFDRCxlQUFPLENBQVA7QUFDSDtBQU5NO0FBSEgsR0FGUDtBQWNMO0FBQ0FLLEVBQUFBLEtBQUssRUFBRSxpQkFBWSxDQUNsQixDQWhCSTtBQWlCTDtBQUNBQyxFQUFBQSxLQUFLLEVBQUUsZUFBVUMsSUFBVixFQUFnQjtBQUNuQixTQUFLSCxLQUFMLEdBQWEsQ0FBYjs7QUFDQSxRQUFJRyxJQUFJLENBQUNDLE1BQVQsRUFBaUI7QUFDYixXQUFLUixLQUFMLEdBQWFPLElBQUksQ0FBQ0MsTUFBbEI7QUFDSDtBQUNKLEdBdkJJO0FBd0JMQyxFQUFBQSxHQXhCSyxpQkF3QkM7QUFDRixRQUFJLEtBQUtSLElBQUwsSUFBYSxDQUFqQixFQUFvQjtBQUNoQixXQUFLRyxLQUFMLEdBQWEsQ0FBYjtBQUNIO0FBQ0o7QUE1QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFBvb2xDb21wb25lbnQgPSByZXF1aXJlKFwiUG9vbENvbXBvbmVudFwiKTsgLy/msaDlrZDnu4Tku7ZcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogUG9vbENvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB2YWx1ZTogMTAsLy/kvKTlrrPlgLxcclxuICAgICAgICB0eXBlOiAwLC8vMD3kvKTlrrMx5LiqICAxPeiMg+WbtOS8pOWus1xyXG4gICAgICAgIGh1cnRWYWx1ZToge1xyXG4gICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgLy/lm57mlLZcclxuICAgIHVudXNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB9LFxyXG4gICAgLy/ph43nlKhcclxuICAgIHJldXNlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAxO1xyXG4gICAgICAgIGlmIChkYXRhLmF0dGFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gZGF0YS5hdHRhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy50eXBlID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19