
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/gameAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1987bpreidA7KxKdyHPjZqG', 'gameAction');
// Script/game/gameAction.js

"use strict";

module.exports = {
  /*****站立    跑步  跳跃 射击  蹲下*/
  idle: "idle",

  /*****跳跃上*/
  jump: "jump",

  /*****跑步动作*/
  run: "run",

  /*****射击动作*/
  attack: "attack",

  /*****蹲下动作*/
  crouch: "crouch",

  /*****向左移动*/
  MOVE_LEFT: 1,

  /*****向右移动*/
  MOVE_RIGHT: 2
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFxnYW1lQWN0aW9uLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJpZGxlIiwianVtcCIsInJ1biIsImF0dGFjayIsImNyb3VjaCIsIk1PVkVfTEVGVCIsIk1PVkVfUklHSFQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiO0FBQ0FDLEVBQUFBLElBQUksRUFBRSxNQUZPOztBQUdiO0FBQ0FDLEVBQUFBLElBQUksRUFBRSxNQUpPOztBQUtiO0FBQ0FDLEVBQUFBLEdBQUcsRUFBRSxLQU5ROztBQU9iO0FBQ0FDLEVBQUFBLE1BQU0sRUFBRSxRQVJLOztBQVNiO0FBQ0FDLEVBQUFBLE1BQU0sRUFBRSxRQVZLOztBQVdiO0FBQ0FDLEVBQUFBLFNBQVMsRUFBRSxDQVpFOztBQWFiO0FBQ0FDLEVBQUFBLFVBQVUsRUFBRTtBQWRDLENBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIC8qKioqKuermeeriyAgICDot5HmraUgIOi3s+i3gyDlsITlh7sgIOi5suS4iyovXHJcbiAgICBpZGxlOiBcImlkbGVcIixcclxuICAgIC8qKioqKui3s+i3g+S4iiovXHJcbiAgICBqdW1wOiBcImp1bXBcIixcclxuICAgIC8qKioqKui3keatpeWKqOS9nCovXHJcbiAgICBydW46IFwicnVuXCIsXHJcbiAgICAvKioqKirlsITlh7vliqjkvZwqL1xyXG4gICAgYXR0YWNrOiBcImF0dGFja1wiLFxyXG4gICAgLyoqKioq6Lmy5LiL5Yqo5L2cKi9cclxuICAgIGNyb3VjaDogXCJjcm91Y2hcIixcclxuICAgIC8qKioqKuWQkeW3puenu+WKqCovXHJcbiAgICBNT1ZFX0xFRlQ6IDEsXHJcbiAgICAvKioqKirlkJHlj7Pnp7vliqgqL1xyXG4gICAgTU9WRV9SSUdIVDogMixcclxufSJdfQ==