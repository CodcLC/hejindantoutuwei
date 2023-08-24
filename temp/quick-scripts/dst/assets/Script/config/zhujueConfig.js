
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/config/zhujueConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0980ErXYNDFrIP0KHlhGQJ', 'zhujueConfig');
// Script/config/zhujueConfig.js

"use strict";

module.exports = {
  hp: 2500,
  //初始血量
  "1": {
    name: "weapons1",
    //武器皮肤名称
    rotation: 20,
    sendTime: 0.3,
    //子弹发射时间
    attackId: 1,
    //攻击动作id
    attack: 13,
    //攻击力
    bid: 1,
    aimY: 0
  },
  //手枪
  "2": {
    name: "weapons2",
    rotation: 22,
    sendTime: 0.6,
    attackId: 2,
    attack: 20,
    bid: 1,
    aimY: 0
  },
  //来福枪
  "3": {
    name: "weapons3",
    rotation: 25,
    sendTime: 0.6,
    attackId: 2,
    attack: 28,
    //
    bid: 1,
    aimY: -50
  },
  //闪电枪
  "4": {
    name: "weapons4",
    rotation: 25,
    sendTime: 0.6,
    //子弹发射时间
    attackId: 2,
    //攻击动作id
    attack: 37,
    //攻击力
    bid: 1,
    //子弹id
    aimY: 0
  } //火箭筒

};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb25maWdcXHpodWp1ZUNvbmZpZy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiaHAiLCJuYW1lIiwicm90YXRpb24iLCJzZW5kVGltZSIsImF0dGFja0lkIiwiYXR0YWNrIiwiYmlkIiwiYWltWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JDLEVBQUFBLEVBQUUsRUFBRSxJQURTO0FBQ0g7QUFDVixPQUFLO0FBQ0RDLElBQUFBLElBQUksRUFBRSxVQURMO0FBQ2lCO0FBQ2xCQyxJQUFBQSxRQUFRLEVBQUUsRUFGVDtBQUdEQyxJQUFBQSxRQUFRLEVBQUUsR0FIVDtBQUdhO0FBQ2RDLElBQUFBLFFBQVEsRUFBRSxDQUpUO0FBSVc7QUFDWkMsSUFBQUEsTUFBTSxFQUFFLEVBTFA7QUFLVTtBQUNYQyxJQUFBQSxHQUFHLEVBQUUsQ0FOSjtBQU9EQyxJQUFBQSxJQUFJLEVBQUU7QUFQTCxHQUZRO0FBVVg7QUFDRixPQUFLO0FBQ0ROLElBQUFBLElBQUksRUFBRSxVQURMO0FBRURDLElBQUFBLFFBQVEsRUFBRSxFQUZUO0FBR0RDLElBQUFBLFFBQVEsRUFBRSxHQUhUO0FBSURDLElBQUFBLFFBQVEsRUFBRSxDQUpUO0FBS0RDLElBQUFBLE1BQU0sRUFBRSxFQUxQO0FBTURDLElBQUFBLEdBQUcsRUFBRSxDQU5KO0FBT0RDLElBQUFBLElBQUksRUFBRTtBQVBMLEdBWFE7QUFtQlg7QUFDRixPQUFLO0FBQ0ROLElBQUFBLElBQUksRUFBRSxVQURMO0FBRURDLElBQUFBLFFBQVEsRUFBRSxFQUZUO0FBR0RDLElBQUFBLFFBQVEsRUFBRSxHQUhUO0FBSURDLElBQUFBLFFBQVEsRUFBRSxDQUpUO0FBS0RDLElBQUFBLE1BQU0sRUFBRSxFQUxQO0FBS1c7QUFDWkMsSUFBQUEsR0FBRyxFQUFFLENBTko7QUFPREMsSUFBQUEsSUFBSSxFQUFFLENBQUM7QUFQTixHQXBCUTtBQTRCWDtBQUNGLE9BQUs7QUFDRE4sSUFBQUEsSUFBSSxFQUFFLFVBREw7QUFFREMsSUFBQUEsUUFBUSxFQUFFLEVBRlQ7QUFHREMsSUFBQUEsUUFBUSxFQUFFLEdBSFQ7QUFHYztBQUNmQyxJQUFBQSxRQUFRLEVBQUUsQ0FKVDtBQUljO0FBQ2ZDLElBQUFBLE1BQU0sRUFBRSxFQUxQO0FBS1k7QUFDYkMsSUFBQUEsR0FBRyxFQUFFLENBTko7QUFNYTtBQUNkQyxJQUFBQSxJQUFJLEVBQUU7QUFQTCxHQTdCUSxDQXFDWjs7QUFyQ1ksQ0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgaHA6IDI1MDAsIC8v5Yid5aeL6KGA6YePXHJcbiAgICBcIjFcIjoge1xyXG4gICAgICAgIG5hbWU6IFwid2VhcG9uczFcIiwgLy/mrablmajnmq7ogqTlkI3np7BcclxuICAgICAgICByb3RhdGlvbjogMjAsXHJcbiAgICAgICAgc2VuZFRpbWU6IDAuMywvL+WtkOW8ueWPkeWwhOaXtumXtFxyXG4gICAgICAgIGF0dGFja0lkOiAxLC8v5pS75Ye75Yqo5L2caWRcclxuICAgICAgICBhdHRhY2s6IDEzLC8v5pS75Ye75YqbXHJcbiAgICAgICAgYmlkOiAxLFxyXG4gICAgICAgIGFpbVk6IDBcclxuICAgIH0sLy/miYvmnqpcclxuICAgIFwiMlwiOiB7XHJcbiAgICAgICAgbmFtZTogXCJ3ZWFwb25zMlwiLFxyXG4gICAgICAgIHJvdGF0aW9uOiAyMixcclxuICAgICAgICBzZW5kVGltZTogMC42LFxyXG4gICAgICAgIGF0dGFja0lkOiAyLFxyXG4gICAgICAgIGF0dGFjazogMjAsXHJcbiAgICAgICAgYmlkOiAxLFxyXG4gICAgICAgIGFpbVk6IDBcclxuICAgIH0sLy/mnaXnpo/mnqpcclxuICAgIFwiM1wiOiB7XHJcbiAgICAgICAgbmFtZTogXCJ3ZWFwb25zM1wiLFxyXG4gICAgICAgIHJvdGF0aW9uOiAyNSxcclxuICAgICAgICBzZW5kVGltZTogMC42LFxyXG4gICAgICAgIGF0dGFja0lkOiAyLFxyXG4gICAgICAgIGF0dGFjazogMjgsIC8vXHJcbiAgICAgICAgYmlkOiAxLFxyXG4gICAgICAgIGFpbVk6IC01MFxyXG4gICAgfSwvL+mXqueUteaeqlxyXG4gICAgXCI0XCI6IHtcclxuICAgICAgICBuYW1lOiBcIndlYXBvbnM0XCIsXHJcbiAgICAgICAgcm90YXRpb246IDI1LFxyXG4gICAgICAgIHNlbmRUaW1lOiAwLjYsIC8v5a2Q5by55Y+R5bCE5pe26Ze0XHJcbiAgICAgICAgYXR0YWNrSWQ6IDIsICAgLy/mlLvlh7vliqjkvZxpZFxyXG4gICAgICAgIGF0dGFjazogMzcsICAvL+aUu+WHu+WKm1xyXG4gICAgICAgIGJpZDogMSwgICAgICAgLy/lrZDlvLlpZFxyXG4gICAgICAgIGFpbVk6IDBcclxuICAgIH0vL+eBq+eureetklxyXG59OyJdfQ==