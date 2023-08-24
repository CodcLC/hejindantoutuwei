"use strict";
cc._RF.push(module, '53ae5RTjyFJBaf2/e8arvRC', 'heros');
// Script/test/heros.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    hero: cc.Node
  },
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {
    this.node.removeAllChildren();

    for (var i = 0; i < 20; i++) {
      var hero = cc.instantiate(this.hero);
      var hua = hero.getComponent("hua");
      hua.huaValue = parseInt(i / 20 * 255);
      this.node.addChild(hero);
    }
  },
  // LIFE-CYCLE CALLBACKS:
  //当该组件被启用，并且它的节点也激活时。
  // onEnable() {
  // },
  // //当该组件被禁用或节点变为无效时调用。
  // onDisable() {
  // },
  //该方法为生命周期方法，父类未必会有实现。
  start: function start() {} // update (dt) {},

});

cc._RF.pop();