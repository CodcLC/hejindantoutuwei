
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/control/top.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f415cJbccpANLYeHf+wm3+s', 'top');
// Script/control/top.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    mask: cc.Mask,
    weapon: cc.Sprite
  },
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {
    game.on("zhujiaoXue", this.zhujiaoXue, this);
    game.on("weaponIndex", this.zhujiaoWeapon, this);
  },
  start: function start() {},
  zhujiaoWeapon: function zhujiaoWeapon(weaponIndex) {
    this.weapon.spriteFrame = game.map_atlas.getSpriteFrame("qiang" + weaponIndex);
  },
  zhujiaoXue: function zhujiaoXue(curHp, totalHp) {
    var progress = (curHp / totalHp).format();
    this.mask.node.width = progress * 286;
  },
  onGamePaues: function onGamePaues() {
    game.emit(game.gameEvent.popup_prefab, game.gamePopup.gamePause);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb250cm9sXFx0b3AuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtYXNrIiwiTWFzayIsIndlYXBvbiIsIlNwcml0ZSIsIm9uRGVzdHJveSIsIm9uTG9hZCIsImdhbWUiLCJvbiIsInpodWppYW9YdWUiLCJ6aHVqaWFvV2VhcG9uIiwic3RhcnQiLCJ3ZWFwb25JbmRleCIsInNwcml0ZUZyYW1lIiwibWFwX2F0bGFzIiwiZ2V0U3ByaXRlRnJhbWUiLCJjdXJIcCIsInRvdGFsSHAiLCJwcm9ncmVzcyIsImZvcm1hdCIsIm5vZGUiLCJ3aWR0aCIsIm9uR2FtZVBhdWVzIiwiZW1pdCIsImdhbWVFdmVudCIsInBvcHVwX3ByZWZhYiIsImdhbWVQb3B1cCIsImdhbWVQYXVzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLElBQUksRUFBRUosRUFBRSxDQUFDSyxJQUREO0FBRVJDLElBQUFBLE1BQU0sRUFBRU4sRUFBRSxDQUFDTztBQUZILEdBRlA7QUFNTEMsRUFBQUEsU0FOSyx1QkFNTyxDQUNYLENBUEk7QUFRTEMsRUFBQUEsTUFSSyxvQkFRSTtBQUNMQyxJQUFBQSxJQUFJLENBQUNDLEVBQUwsQ0FBUSxZQUFSLEVBQXNCLEtBQUtDLFVBQTNCLEVBQXVDLElBQXZDO0FBQ0FGLElBQUFBLElBQUksQ0FBQ0MsRUFBTCxDQUFRLGFBQVIsRUFBdUIsS0FBS0UsYUFBNUIsRUFBMkMsSUFBM0M7QUFDSCxHQVhJO0FBWUxDLEVBQUFBLEtBWkssbUJBWUcsQ0FDUCxDQWJJO0FBY0xELEVBQUFBLGFBZEsseUJBY1NFLFdBZFQsRUFjc0I7QUFDdkIsU0FBS1QsTUFBTCxDQUFZVSxXQUFaLEdBQTBCTixJQUFJLENBQUNPLFNBQUwsQ0FBZUMsY0FBZixDQUE4QixVQUFVSCxXQUF4QyxDQUExQjtBQUNILEdBaEJJO0FBaUJMSCxFQUFBQSxVQWpCSyxzQkFpQk1PLEtBakJOLEVBaUJhQyxPQWpCYixFQWlCc0I7QUFDdkIsUUFBSUMsUUFBUSxHQUFHLENBQUNGLEtBQUssR0FBR0MsT0FBVCxFQUFrQkUsTUFBbEIsRUFBZjtBQUNBLFNBQUtsQixJQUFMLENBQVVtQixJQUFWLENBQWVDLEtBQWYsR0FBdUJILFFBQVEsR0FBRyxHQUFsQztBQUNILEdBcEJJO0FBcUJMSSxFQUFBQSxXQXJCSyx5QkFxQlM7QUFDVmYsSUFBQUEsSUFBSSxDQUFDZ0IsSUFBTCxDQUFVaEIsSUFBSSxDQUFDaUIsU0FBTCxDQUFlQyxZQUF6QixFQUF1Q2xCLElBQUksQ0FBQ21CLFNBQUwsQ0FBZUMsU0FBdEQ7QUFDSDtBQXZCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbWFzazogY2MuTWFzayxcclxuICAgICAgICB3ZWFwb246IGNjLlNwcml0ZVxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgZ2FtZS5vbihcInpodWppYW9YdWVcIiwgdGhpcy56aHVqaWFvWHVlLCB0aGlzKTtcclxuICAgICAgICBnYW1lLm9uKFwid2VhcG9uSW5kZXhcIiwgdGhpcy56aHVqaWFvV2VhcG9uLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcbiAgICB6aHVqaWFvV2VhcG9uKHdlYXBvbkluZGV4KSB7XHJcbiAgICAgICAgdGhpcy53ZWFwb24uc3ByaXRlRnJhbWUgPSBnYW1lLm1hcF9hdGxhcy5nZXRTcHJpdGVGcmFtZShcInFpYW5nXCIgKyB3ZWFwb25JbmRleCk7XHJcbiAgICB9LFxyXG4gICAgemh1amlhb1h1ZShjdXJIcCwgdG90YWxIcCkge1xyXG4gICAgICAgIHZhciBwcm9ncmVzcyA9IChjdXJIcCAvIHRvdGFsSHApLmZvcm1hdCgpO1xyXG4gICAgICAgIHRoaXMubWFzay5ub2RlLndpZHRoID0gcHJvZ3Jlc3MgKiAyODY7XHJcbiAgICB9LFxyXG4gICAgb25HYW1lUGF1ZXMoKSB7XHJcbiAgICAgICAgZ2FtZS5lbWl0KGdhbWUuZ2FtZUV2ZW50LnBvcHVwX3ByZWZhYiwgZ2FtZS5nYW1lUG9wdXAuZ2FtZVBhdXNlKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==