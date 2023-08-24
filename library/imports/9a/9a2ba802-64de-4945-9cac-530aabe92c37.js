"use strict";
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