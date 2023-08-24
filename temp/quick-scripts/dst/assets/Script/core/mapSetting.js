
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/core/mapSetting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a2bagCZN5JRZysUwqr6Sw3', 'mapSetting');
// Script/core/mapSetting.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    floor: cc.Node
  },
  onLoad: function onLoad() {
    if (!this.floor) return;
    cc.game.on(cc.game.EVENT_ENGINE_INITED, function () {
      var physicsManager = cc.director.getPhysicsManager();
      physicsManager.enabled = true;
      cc.director.getCollisionManager().enabled = true;
    });
    var polygonCollider = this.floor.getComponent(cc.PolygonCollider);
    var points = polygonCollider.points;
    var physicsPolygonCollider = this.floor.getComponent(cc.PhysicsPolygonCollider);
    physicsPolygonCollider.points = points;
    var mapPoint = [];
    game.mapRotation = [];
    game.mapXList = [];

    for (var i in points) {
      var p = points[i];

      if (p.y > 30) {
        mapPoint.push(cc.v2(p.x, p.y));
        game.mapXList.push(p.x);
      }
    }

    game.mapXList.sort(function (v1, v2) {
      return v1 - v2;
    });
    mapPoint.sort(function (v1, v2) {
      return v1.x - v2.x;
    });
    var startPoint = mapPoint[0];

    for (var _i = 1; _i < mapPoint.length; _i++) {
      var endPoint = mapPoint[_i];
      game.mapRotation.push(game.gameUtils.getRotation(startPoint, endPoint));
      startPoint = endPoint;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb3JlXFxtYXBTZXR0aW5nLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZmxvb3IiLCJOb2RlIiwib25Mb2FkIiwiZ2FtZSIsIm9uIiwiRVZFTlRfRU5HSU5FX0lOSVRFRCIsInBoeXNpY3NNYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsImVuYWJsZWQiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwicG9seWdvbkNvbGxpZGVyIiwiZ2V0Q29tcG9uZW50IiwiUG9seWdvbkNvbGxpZGVyIiwicG9pbnRzIiwicGh5c2ljc1BvbHlnb25Db2xsaWRlciIsIlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIiLCJtYXBQb2ludCIsIm1hcFJvdGF0aW9uIiwibWFwWExpc3QiLCJpIiwicCIsInkiLCJwdXNoIiwidjIiLCJ4Iiwic29ydCIsInYxIiwic3RhcnRQb2ludCIsImxlbmd0aCIsImVuZFBvaW50IiwiZ2FtZVV0aWxzIiwiZ2V0Um90YXRpb24iLCJzdGFydCIsIm9uRGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRUosRUFBRSxDQUFDSztBQURGLEdBRlA7QUFLTEMsRUFBQUEsTUFMSyxvQkFLSTtBQUNMLFFBQUksQ0FBQyxLQUFLRixLQUFWLEVBQWlCO0FBRWpCSixJQUFBQSxFQUFFLENBQUNPLElBQUgsQ0FBUUMsRUFBUixDQUFXUixFQUFFLENBQUNPLElBQUgsQ0FBUUUsbUJBQW5CLEVBQXdDLFlBQU07QUFDMUMsVUFBSUMsY0FBYyxHQUFHVixFQUFFLENBQUNXLFFBQUgsQ0FBWUMsaUJBQVosRUFBckI7QUFDQUYsTUFBQUEsY0FBYyxDQUFDRyxPQUFmLEdBQXlCLElBQXpCO0FBQ0FiLE1BQUFBLEVBQUUsQ0FBQ1csUUFBSCxDQUFZRyxtQkFBWixHQUFrQ0QsT0FBbEMsR0FBNEMsSUFBNUM7QUFDSCxLQUpEO0FBS0EsUUFBSUUsZUFBZSxHQUFHLEtBQUtYLEtBQUwsQ0FBV1ksWUFBWCxDQUF3QmhCLEVBQUUsQ0FBQ2lCLGVBQTNCLENBQXRCO0FBQ0EsUUFBSUMsTUFBTSxHQUFHSCxlQUFlLENBQUNHLE1BQTdCO0FBQ0EsUUFBSUMsc0JBQXNCLEdBQUcsS0FBS2YsS0FBTCxDQUFXWSxZQUFYLENBQXdCaEIsRUFBRSxDQUFDb0Isc0JBQTNCLENBQTdCO0FBQ0FELElBQUFBLHNCQUFzQixDQUFDRCxNQUF2QixHQUFnQ0EsTUFBaEM7QUFFQSxRQUFJRyxRQUFRLEdBQUcsRUFBZjtBQUNBZCxJQUFBQSxJQUFJLENBQUNlLFdBQUwsR0FBbUIsRUFBbkI7QUFDQWYsSUFBQUEsSUFBSSxDQUFDZ0IsUUFBTCxHQUFnQixFQUFoQjs7QUFDQSxTQUFLLElBQUlDLENBQVQsSUFBY04sTUFBZCxFQUFzQjtBQUNsQixVQUFJTyxDQUFDLEdBQUdQLE1BQU0sQ0FBQ00sQ0FBRCxDQUFkOztBQUNBLFVBQUlDLENBQUMsQ0FBQ0MsQ0FBRixHQUFNLEVBQVYsRUFBYztBQUNWTCxRQUFBQSxRQUFRLENBQUNNLElBQVQsQ0FBYzNCLEVBQUUsQ0FBQzRCLEVBQUgsQ0FBTUgsQ0FBQyxDQUFDSSxDQUFSLEVBQVdKLENBQUMsQ0FBQ0MsQ0FBYixDQUFkO0FBQ0FuQixRQUFBQSxJQUFJLENBQUNnQixRQUFMLENBQWNJLElBQWQsQ0FBbUJGLENBQUMsQ0FBQ0ksQ0FBckI7QUFDSDtBQUVKOztBQUNEdEIsSUFBQUEsSUFBSSxDQUFDZ0IsUUFBTCxDQUFjTyxJQUFkLENBQW1CLFVBQVVDLEVBQVYsRUFBY0gsRUFBZCxFQUFrQjtBQUNqQyxhQUFPRyxFQUFFLEdBQUdILEVBQVo7QUFDSCxLQUZEO0FBR0FQLElBQUFBLFFBQVEsQ0FBQ1MsSUFBVCxDQUFjLFVBQVVDLEVBQVYsRUFBY0gsRUFBZCxFQUFrQjtBQUM1QixhQUFPRyxFQUFFLENBQUNGLENBQUgsR0FBT0QsRUFBRSxDQUFDQyxDQUFqQjtBQUNILEtBRkQ7QUFHQSxRQUFJRyxVQUFVLEdBQUdYLFFBQVEsQ0FBQyxDQUFELENBQXpCOztBQUNBLFNBQUssSUFBSUcsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR0gsUUFBUSxDQUFDWSxNQUE3QixFQUFxQ1QsRUFBQyxFQUF0QyxFQUEwQztBQUN0QyxVQUFJVSxRQUFRLEdBQUdiLFFBQVEsQ0FBQ0csRUFBRCxDQUF2QjtBQUNBakIsTUFBQUEsSUFBSSxDQUFDZSxXQUFMLENBQWlCSyxJQUFqQixDQUFzQnBCLElBQUksQ0FBQzRCLFNBQUwsQ0FBZUMsV0FBZixDQUEyQkosVUFBM0IsRUFBdUNFLFFBQXZDLENBQXRCO0FBQ0FGLE1BQUFBLFVBQVUsR0FBR0UsUUFBYjtBQUNIO0FBRUosR0ExQ0k7QUEyQ0xHLEVBQUFBLEtBM0NLLG1CQTJDRyxDQUNQLENBNUNJO0FBNkNMQyxFQUFBQSxTQTdDSyx1QkE2Q08sQ0FDWCxDQTlDSSxDQStDTDs7QUEvQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGZsb29yOiBjYy5Ob2RlXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5mbG9vcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfRU5HSU5FX0lOSVRFRCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGh5c2ljc01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgICAgICBwaHlzaWNzTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBwb2x5Z29uQ29sbGlkZXIgPSB0aGlzLmZsb29yLmdldENvbXBvbmVudChjYy5Qb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgIGxldCBwb2ludHMgPSBwb2x5Z29uQ29sbGlkZXIucG9pbnRzO1xyXG4gICAgICAgIGxldCBwaHlzaWNzUG9seWdvbkNvbGxpZGVyID0gdGhpcy5mbG9vci5nZXRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgcGh5c2ljc1BvbHlnb25Db2xsaWRlci5wb2ludHMgPSBwb2ludHM7XHJcblxyXG4gICAgICAgIGxldCBtYXBQb2ludCA9IFtdO1xyXG4gICAgICAgIGdhbWUubWFwUm90YXRpb24gPSBbXTtcclxuICAgICAgICBnYW1lLm1hcFhMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBwb2ludHMpIHtcclxuICAgICAgICAgICAgbGV0IHAgPSBwb2ludHNbaV07XHJcbiAgICAgICAgICAgIGlmIChwLnkgPiAzMCkge1xyXG4gICAgICAgICAgICAgICAgbWFwUG9pbnQucHVzaChjYy52MihwLngsIHAueSkpO1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5tYXBYTGlzdC5wdXNoKHAueCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhbWUubWFwWExpc3Quc29ydChmdW5jdGlvbiAodjEsIHYyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2MSAtIHYyO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbWFwUG9pbnQuc29ydChmdW5jdGlvbiAodjEsIHYyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2MS54IC0gdjIueDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBzdGFydFBvaW50ID0gbWFwUG9pbnRbMF1cclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1hcFBvaW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlbmRQb2ludCA9IG1hcFBvaW50W2ldO1xyXG4gICAgICAgICAgICBnYW1lLm1hcFJvdGF0aW9uLnB1c2goZ2FtZS5nYW1lVXRpbHMuZ2V0Um90YXRpb24oc3RhcnRQb2ludCwgZW5kUG9pbnQpKVxyXG4gICAgICAgICAgICBzdGFydFBvaW50ID0gZW5kUG9pbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICB9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=