"use strict";
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