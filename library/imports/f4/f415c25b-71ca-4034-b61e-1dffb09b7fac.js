"use strict";
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