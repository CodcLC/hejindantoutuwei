
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/factory/taSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca680c/pjZBg54VhBzvvIZY', 'taSprite');
// Script/factory/taSprite.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onDestroy: function onDestroy() {
    this.node.off("death", this.death, this);
  },
  addEvent: function addEvent() {
    this.node.on("death", this.death, this);
    this.node.on("dissolve", this.dissolve, this);
  },
  dissolve: function dissolve(value) {
    if (value > 1) value = 1;
    if (value < 0) value = 0;
    value = value * 255;
    if (this.hua) this.hua.setHua(value); //this.material.setProperty("disLevel", value);
  },
  death: function death() {
    if (this.isDeath) return;
    this.node.isDeath = this.isDeath = true;
    this.node.getComponent(cc.PolygonCollider).enabled = false;
  },
  onLoad: function onLoad() {
    this.node.isDeath = this.isDeath = false;
    this.addEvent(); // let renderComponents = this.node.getComponents(cc.RenderComponent);
    // let renderComponent = renderComponents[0];
    // this.material = renderComponent.getMaterial(0);

    this.hua = this.node.getComponent("hua");
  },
  start: function start() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxmYWN0b3J5XFx0YVNwcml0ZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uRGVzdHJveSIsIm5vZGUiLCJvZmYiLCJkZWF0aCIsImFkZEV2ZW50Iiwib24iLCJkaXNzb2x2ZSIsInZhbHVlIiwiaHVhIiwic2V0SHVhIiwiaXNEZWF0aCIsImdldENvbXBvbmVudCIsIlBvbHlnb25Db2xsaWRlciIsImVuYWJsZWQiLCJvbkxvYWQiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFLEVBRlA7QUFHTEMsRUFBQUEsU0FISyx1QkFHTztBQUNSLFNBQUtDLElBQUwsQ0FBVUMsR0FBVixDQUFjLE9BQWQsRUFBdUIsS0FBS0MsS0FBNUIsRUFBbUMsSUFBbkM7QUFDSCxHQUxJO0FBTUxDLEVBQUFBLFFBTkssc0JBTU07QUFDUCxTQUFLSCxJQUFMLENBQVVJLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLEtBQUtGLEtBQTNCLEVBQWtDLElBQWxDO0FBQ0EsU0FBS0YsSUFBTCxDQUFVSSxFQUFWLENBQWEsVUFBYixFQUF5QixLQUFLQyxRQUE5QixFQUF3QyxJQUF4QztBQUNILEdBVEk7QUFVTEEsRUFBQUEsUUFWSyxvQkFVSUMsS0FWSixFQVVXO0FBQ1osUUFBSUEsS0FBSyxHQUFHLENBQVosRUFBZUEsS0FBSyxHQUFHLENBQVI7QUFDZixRQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlQSxLQUFLLEdBQUcsQ0FBUjtBQUNmQSxJQUFBQSxLQUFLLEdBQUdBLEtBQUssR0FBRyxHQUFoQjtBQUNBLFFBQUksS0FBS0MsR0FBVCxFQUNJLEtBQUtBLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQkYsS0FBaEIsRUFMUSxDQU1aO0FBQ0gsR0FqQkk7QUFrQkxKLEVBQUFBLEtBbEJLLG1CQWtCRztBQUNKLFFBQUksS0FBS08sT0FBVCxFQUFrQjtBQUNsQixTQUFLVCxJQUFMLENBQVVTLE9BQVYsR0FBb0IsS0FBS0EsT0FBTCxHQUFlLElBQW5DO0FBQ0EsU0FBS1QsSUFBTCxDQUFVVSxZQUFWLENBQXVCZixFQUFFLENBQUNnQixlQUExQixFQUEyQ0MsT0FBM0MsR0FBcUQsS0FBckQ7QUFDSCxHQXRCSTtBQXVCTEMsRUFBQUEsTUF2Qkssb0JBdUJJO0FBQ0wsU0FBS2IsSUFBTCxDQUFVUyxPQUFWLEdBQW9CLEtBQUtBLE9BQUwsR0FBZSxLQUFuQztBQUNBLFNBQUtOLFFBQUwsR0FGSyxDQUdMO0FBQ0E7QUFDQTs7QUFDQSxTQUFLSSxHQUFMLEdBQVcsS0FBS1AsSUFBTCxDQUFVVSxZQUFWLENBQXVCLEtBQXZCLENBQVg7QUFDSCxHQTlCSTtBQStCTEksRUFBQUEsS0EvQkssbUJBK0JHLENBQ1A7QUFoQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge30sXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihcImRlYXRoXCIsIHRoaXMuZGVhdGgsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIGFkZEV2ZW50KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImRlYXRoXCIsIHRoaXMuZGVhdGgsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImRpc3NvbHZlXCIsIHRoaXMuZGlzc29sdmUsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIGRpc3NvbHZlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID4gMSkgdmFsdWUgPSAxO1xyXG4gICAgICAgIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMDtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlICogMjU1O1xyXG4gICAgICAgIGlmICh0aGlzLmh1YSlcclxuICAgICAgICAgICAgdGhpcy5odWEuc2V0SHVhKHZhbHVlKTtcclxuICAgICAgICAvL3RoaXMubWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJkaXNMZXZlbFwiLCB2YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgZGVhdGgoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZWF0aCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubm9kZS5pc0RlYXRoID0gdGhpcy5pc0RlYXRoID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBvbHlnb25Db2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuaXNEZWF0aCA9IHRoaXMuaXNEZWF0aCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcclxuICAgICAgICAvLyBsZXQgcmVuZGVyQ29tcG9uZW50cyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzKGNjLlJlbmRlckNvbXBvbmVudCk7XHJcbiAgICAgICAgLy8gbGV0IHJlbmRlckNvbXBvbmVudCA9IHJlbmRlckNvbXBvbmVudHNbMF07XHJcbiAgICAgICAgLy8gdGhpcy5tYXRlcmlhbCA9IHJlbmRlckNvbXBvbmVudC5nZXRNYXRlcmlhbCgwKTtcclxuICAgICAgICB0aGlzLmh1YSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoXCJodWFcIik7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9LFxyXG59KTtcclxuIl19