
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bullet/bullet9.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1f08FGqmJMcLYH9RElpzP/', 'bullet9');
// Script/bullet/bullet9.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": PoolComponent,
  properties: {
    speed: 500,
    fire: cc.Animation,
    addSpeedY: 100,
    range: 2000
  },
  onLoad: function onLoad() {},
  //回收
  unuse: function unuse() {},
  //重用
  reuse: function reuse(data) {
    game.soundManager.playEffect(game.gameSound.qing_xing_qiang_jie4, false);
    this.data = data;
    this.init(data);
  },
  init: function init(data) {
    this.idx = 0;
    if (data.group) this.node.group = data.group;
    this.node.angle = data.angle;
    var hd = this.node.angle * Math.PI / 180;
    this.speedX = Math.cos(hd) * this.node.width / 2;
    this.speedY = Math.sin(hd) * this.node.width / 2;
    this.node.x = data.v.x + this.speedX;
    this.node.y = data.v.y + this.speedY;
    this.speedX = Math.cos(hd) * this.speed;
    this.speedY = Math.sin(hd) * this.speed;
    this.curRange = this.range; //火焰动画

    if (!this._isinit) {
      var spriteFrames = game.gameUtils.getSpriteFrames(game.bullet_atlas, "fire1");
      var fireClip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 30);
      fireClip.name = 'fire';
      fireClip.wrapMode = cc.WrapMode.Loop;
      this.fire.addClip(fireClip);
      this.fire.play('fire');
    }

    this.state = "move";
    this.node.active = true;
  },
  start: function start() {},
  onDestroy: function onDestroy() {},
  //碰撞检测到
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.end();
  },
  end: function end() {
    if (this.state == "end") return;
    this.state = "end";
    this.data = _.assign(this.data, {
      aniName: "bomb1",
      //预制体名称
      v: cc.v2(this.node.x, this.node.y),
      //位置
      angle: 0,
      //角度
      group: this.node.group //组

    });
    game.emit("bomb2", this.data); //爆炸

    var pool = this.node.pool;

    if (pool) {
      pool.put(this.node);
    } else {
      this.node.removeFromParent(true);
      this.node.destroy();
    }
  },
  update: function update(dt) {
    if (this.state != "move") {
      return;
    } // let hd = this.node.angle * Math.PI / 180;
    // this.speedX = Math.cos(hd) * this.speed;
    // this.speedY = Math.sin(hd) * this.speed;
    //


    this.idx++;
    this.curRange -= this.speed * dt;

    if (this.curRange <= 0) {
      this.end();
      return;
    } // let curPos = cc.v2(this.node.x, this.node.y);
    // // this.speedY -= 9.8;


    this.node.x += this.speedX * dt;
    this.node.y += this.speedY * dt; // let pos = cc.v2(this.node.x, this.node.y);
    // let rotation = game.gameUtils.getRotation(curPos, pos);
    // this.node.angle = rotation;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxidWxsZXRcXGJ1bGxldDkuanMiXSwibmFtZXMiOlsiUG9vbENvbXBvbmVudCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsInNwZWVkIiwiZmlyZSIsIkFuaW1hdGlvbiIsImFkZFNwZWVkWSIsInJhbmdlIiwib25Mb2FkIiwidW51c2UiLCJyZXVzZSIsImRhdGEiLCJnYW1lIiwic291bmRNYW5hZ2VyIiwicGxheUVmZmVjdCIsImdhbWVTb3VuZCIsInFpbmdfeGluZ19xaWFuZ19qaWU0IiwiaW5pdCIsImlkeCIsImdyb3VwIiwibm9kZSIsImFuZ2xlIiwiaGQiLCJNYXRoIiwiUEkiLCJzcGVlZFgiLCJjb3MiLCJ3aWR0aCIsInNwZWVkWSIsInNpbiIsIngiLCJ2IiwieSIsImN1clJhbmdlIiwiX2lzaW5pdCIsInNwcml0ZUZyYW1lcyIsImdhbWVVdGlscyIsImdldFNwcml0ZUZyYW1lcyIsImJ1bGxldF9hdGxhcyIsImZpcmVDbGlwIiwiQW5pbWF0aW9uQ2xpcCIsImNyZWF0ZVdpdGhTcHJpdGVGcmFtZXMiLCJuYW1lIiwid3JhcE1vZGUiLCJXcmFwTW9kZSIsIkxvb3AiLCJhZGRDbGlwIiwicGxheSIsInN0YXRlIiwiYWN0aXZlIiwic3RhcnQiLCJvbkRlc3Ryb3kiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwiZW5kIiwiXyIsImFzc2lnbiIsImFuaU5hbWUiLCJ2MiIsImVtaXQiLCJwb29sIiwicHV0IiwicmVtb3ZlRnJvbVBhcmVudCIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUdDLE9BQU8sQ0FBQyxlQUFELENBQTNCLEVBQThDOzs7QUFDOUNDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0gsYUFESjtBQUVMSSxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFLEdBREM7QUFFUkMsSUFBQUEsSUFBSSxFQUFFSixFQUFFLENBQUNLLFNBRkQ7QUFHUkMsSUFBQUEsU0FBUyxFQUFFLEdBSEg7QUFJUkMsSUFBQUEsS0FBSyxFQUFFO0FBSkMsR0FGUDtBQVFMQyxFQUFBQSxNQVJLLG9CQVFJLENBQ1IsQ0FUSTtBQVVMO0FBQ0FDLEVBQUFBLEtBQUssRUFBRSxpQkFBWSxDQUNsQixDQVpJO0FBYUw7QUFDQUMsRUFBQUEsS0FBSyxFQUFFLGVBQVVDLElBQVYsRUFBZ0I7QUFDbkJDLElBQUFBLElBQUksQ0FBQ0MsWUFBTCxDQUFrQkMsVUFBbEIsQ0FBNkJGLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxvQkFBNUMsRUFBaUUsS0FBakU7QUFDQSxTQUFLTCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLTSxJQUFMLENBQVVOLElBQVY7QUFDSCxHQWxCSTtBQW1CTE0sRUFBQUEsSUFuQkssZ0JBbUJBTixJQW5CQSxFQW1CTTtBQUNQLFNBQUtPLEdBQUwsR0FBVyxDQUFYO0FBQ0EsUUFBSVAsSUFBSSxDQUFDUSxLQUFULEVBQWdCLEtBQUtDLElBQUwsQ0FBVUQsS0FBVixHQUFrQlIsSUFBSSxDQUFDUSxLQUF2QjtBQUNoQixTQUFLQyxJQUFMLENBQVVDLEtBQVYsR0FBa0JWLElBQUksQ0FBQ1UsS0FBdkI7QUFDQSxRQUFJQyxFQUFFLEdBQUcsS0FBS0YsSUFBTCxDQUFVQyxLQUFWLEdBQWtCRSxJQUFJLENBQUNDLEVBQXZCLEdBQTRCLEdBQXJDO0FBQ0EsU0FBS0MsTUFBTCxHQUFjRixJQUFJLENBQUNHLEdBQUwsQ0FBU0osRUFBVCxJQUFlLEtBQUtGLElBQUwsQ0FBVU8sS0FBekIsR0FBaUMsQ0FBL0M7QUFDQSxTQUFLQyxNQUFMLEdBQWNMLElBQUksQ0FBQ00sR0FBTCxDQUFTUCxFQUFULElBQWUsS0FBS0YsSUFBTCxDQUFVTyxLQUF6QixHQUFpQyxDQUEvQztBQUNBLFNBQUtQLElBQUwsQ0FBVVUsQ0FBVixHQUFjbkIsSUFBSSxDQUFDb0IsQ0FBTCxDQUFPRCxDQUFQLEdBQVcsS0FBS0wsTUFBOUI7QUFDQSxTQUFLTCxJQUFMLENBQVVZLENBQVYsR0FBY3JCLElBQUksQ0FBQ29CLENBQUwsQ0FBT0MsQ0FBUCxHQUFXLEtBQUtKLE1BQTlCO0FBQ0EsU0FBS0gsTUFBTCxHQUFjRixJQUFJLENBQUNHLEdBQUwsQ0FBU0osRUFBVCxJQUFlLEtBQUtuQixLQUFsQztBQUNBLFNBQUt5QixNQUFMLEdBQWNMLElBQUksQ0FBQ00sR0FBTCxDQUFTUCxFQUFULElBQWUsS0FBS25CLEtBQWxDO0FBQ0EsU0FBSzhCLFFBQUwsR0FBZ0IsS0FBSzFCLEtBQXJCLENBWE8sQ0FZUDs7QUFDQSxRQUFJLENBQUMsS0FBSzJCLE9BQVYsRUFBbUI7QUFDZixVQUFJQyxZQUFZLEdBQUd2QixJQUFJLENBQUN3QixTQUFMLENBQWVDLGVBQWYsQ0FBK0J6QixJQUFJLENBQUMwQixZQUFwQyxFQUFrRCxPQUFsRCxDQUFuQjtBQUNBLFVBQUlDLFFBQVEsR0FBR3ZDLEVBQUUsQ0FBQ3dDLGFBQUgsQ0FBaUJDLHNCQUFqQixDQUF3Q04sWUFBeEMsRUFBc0QsRUFBdEQsQ0FBZjtBQUNBSSxNQUFBQSxRQUFRLENBQUNHLElBQVQsR0FBZ0IsTUFBaEI7QUFDQUgsTUFBQUEsUUFBUSxDQUFDSSxRQUFULEdBQW9CM0MsRUFBRSxDQUFDNEMsUUFBSCxDQUFZQyxJQUFoQztBQUNBLFdBQUt6QyxJQUFMLENBQVUwQyxPQUFWLENBQWtCUCxRQUFsQjtBQUNBLFdBQUtuQyxJQUFMLENBQVUyQyxJQUFWLENBQWUsTUFBZjtBQUNIOztBQUNELFNBQUtDLEtBQUwsR0FBYSxNQUFiO0FBQ0EsU0FBSzVCLElBQUwsQ0FBVTZCLE1BQVYsR0FBbUIsSUFBbkI7QUFDSCxHQTFDSTtBQTJDTEMsRUFBQUEsS0EzQ0ssbUJBMkNHLENBQ1AsQ0E1Q0k7QUE2Q0xDLEVBQUFBLFNBN0NLLHVCQTZDTyxDQUNYLENBOUNJO0FBK0NMO0FBQ0FDLEVBQUFBLGdCQUFnQixFQUFFLDBCQUFVQyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtBQUNyQyxTQUFLQyxHQUFMO0FBQ0gsR0FsREk7QUFtRExBLEVBQUFBLEdBbkRLLGlCQW1EQztBQUNGLFFBQUksS0FBS1AsS0FBTCxJQUFjLEtBQWxCLEVBQXlCO0FBQ3pCLFNBQUtBLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS3JDLElBQUwsR0FBWTZDLENBQUMsQ0FBQ0MsTUFBRixDQUFTLEtBQUs5QyxJQUFkLEVBQW9CO0FBQzVCK0MsTUFBQUEsT0FBTyxFQUFFLE9BRG1CO0FBQ1g7QUFDakIzQixNQUFBQSxDQUFDLEVBQUUvQixFQUFFLENBQUMyRCxFQUFILENBQU0sS0FBS3ZDLElBQUwsQ0FBVVUsQ0FBaEIsRUFBbUIsS0FBS1YsSUFBTCxDQUFVWSxDQUE3QixDQUZ5QjtBQUVRO0FBQ3BDWCxNQUFBQSxLQUFLLEVBQUUsQ0FIcUI7QUFHbkI7QUFDVEYsTUFBQUEsS0FBSyxFQUFFLEtBQUtDLElBQUwsQ0FBVUQsS0FKVyxDQUlMOztBQUpLLEtBQXBCLENBQVo7QUFNQVAsSUFBQUEsSUFBSSxDQUFDZ0QsSUFBTCxDQUFVLE9BQVYsRUFBbUIsS0FBS2pELElBQXhCLEVBVEUsQ0FTNEI7O0FBQzlCLFFBQUlrRCxJQUFJLEdBQUcsS0FBS3pDLElBQUwsQ0FBVXlDLElBQXJCOztBQUNBLFFBQUlBLElBQUosRUFBVTtBQUNOQSxNQUFBQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLMUMsSUFBZDtBQUNILEtBRkQsTUFHSztBQUNELFdBQUtBLElBQUwsQ0FBVTJDLGdCQUFWLENBQTJCLElBQTNCO0FBQ0EsV0FBSzNDLElBQUwsQ0FBVTRDLE9BQVY7QUFDSDtBQUNKLEdBckVJO0FBc0VMQyxFQUFBQSxNQXRFSyxrQkFzRUVDLEVBdEVGLEVBc0VNO0FBQ1AsUUFBSSxLQUFLbEIsS0FBTCxJQUFjLE1BQWxCLEVBQTBCO0FBQ3RCO0FBQ0gsS0FITSxDQUlQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFLOUIsR0FBTDtBQUNBLFNBQUtlLFFBQUwsSUFBaUIsS0FBSzlCLEtBQUwsR0FBYStELEVBQTlCOztBQUNBLFFBQUksS0FBS2pDLFFBQUwsSUFBaUIsQ0FBckIsRUFBd0I7QUFDcEIsV0FBS3NCLEdBQUw7QUFDQTtBQUNILEtBYk0sQ0FjUDtBQUNBOzs7QUFDQSxTQUFLbkMsSUFBTCxDQUFVVSxDQUFWLElBQWUsS0FBS0wsTUFBTCxHQUFjeUMsRUFBN0I7QUFDQSxTQUFLOUMsSUFBTCxDQUFVWSxDQUFWLElBQWUsS0FBS0osTUFBTCxHQUFjc0MsRUFBN0IsQ0FqQk8sQ0FrQlA7QUFDQTtBQUNBO0FBQ0g7QUEzRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFBvb2xDb21wb25lbnQgPSByZXF1aXJlKFwiUG9vbENvbXBvbmVudFwiKTsgLy/msaDlrZDnu4Tku7ZcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogUG9vbENvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgIGZpcmU6IGNjLkFuaW1hdGlvbixcclxuICAgICAgICBhZGRTcGVlZFk6IDEwMCxcclxuICAgICAgICByYW5nZTogMjAwMCxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICB9LFxyXG4gICAgLy/lm57mlLZcclxuICAgIHVudXNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB9LFxyXG4gICAgLy/ph43nlKhcclxuICAgIHJldXNlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGdhbWUuc291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoZ2FtZS5nYW1lU291bmQucWluZ194aW5nX3FpYW5nX2ppZTQsZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5pbml0KGRhdGEpO1xyXG4gICAgfSxcclxuICAgIGluaXQoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuaWR4ID0gMDtcclxuICAgICAgICBpZiAoZGF0YS5ncm91cCkgdGhpcy5ub2RlLmdyb3VwID0gZGF0YS5ncm91cDtcclxuICAgICAgICB0aGlzLm5vZGUuYW5nbGUgPSBkYXRhLmFuZ2xlO1xyXG4gICAgICAgIGxldCBoZCA9IHRoaXMubm9kZS5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdGhpcy5zcGVlZFggPSBNYXRoLmNvcyhoZCkgKiB0aGlzLm5vZGUud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuc3BlZWRZID0gTWF0aC5zaW4oaGQpICogdGhpcy5ub2RlLndpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLm5vZGUueCA9IGRhdGEudi54ICsgdGhpcy5zcGVlZFg7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgPSBkYXRhLnYueSArIHRoaXMuc3BlZWRZO1xyXG4gICAgICAgIHRoaXMuc3BlZWRYID0gTWF0aC5jb3MoaGQpICogdGhpcy5zcGVlZDtcclxuICAgICAgICB0aGlzLnNwZWVkWSA9IE1hdGguc2luKGhkKSAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5jdXJSYW5nZSA9IHRoaXMucmFuZ2U7XHJcbiAgICAgICAgLy/ngavnhLDliqjnlLtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzaW5pdCkge1xyXG4gICAgICAgICAgICBsZXQgc3ByaXRlRnJhbWVzID0gZ2FtZS5nYW1lVXRpbHMuZ2V0U3ByaXRlRnJhbWVzKGdhbWUuYnVsbGV0X2F0bGFzLCBcImZpcmUxXCIpO1xyXG4gICAgICAgICAgICBsZXQgZmlyZUNsaXAgPSBjYy5BbmltYXRpb25DbGlwLmNyZWF0ZVdpdGhTcHJpdGVGcmFtZXMoc3ByaXRlRnJhbWVzLCAzMCk7XHJcbiAgICAgICAgICAgIGZpcmVDbGlwLm5hbWUgPSAnZmlyZSc7XHJcbiAgICAgICAgICAgIGZpcmVDbGlwLndyYXBNb2RlID0gY2MuV3JhcE1vZGUuTG9vcDtcclxuICAgICAgICAgICAgdGhpcy5maXJlLmFkZENsaXAoZmlyZUNsaXApO1xyXG4gICAgICAgICAgICB0aGlzLmZpcmUucGxheSgnZmlyZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlID0gXCJtb3ZlXCI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIC8v56Kw5pKe5qOA5rWL5YiwXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgfSxcclxuICAgIGVuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PSBcImVuZFwiKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFwiZW5kXCI7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gXy5hc3NpZ24odGhpcy5kYXRhLCB7XHJcbiAgICAgICAgICAgIGFuaU5hbWU6IFwiYm9tYjFcIiwvL+mihOWItuS9k+WQjeensFxyXG4gICAgICAgICAgICB2OiBjYy52Mih0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpLCAvL+S9jee9rlxyXG4gICAgICAgICAgICBhbmdsZTogMCwvL+inkuW6plxyXG4gICAgICAgICAgICBncm91cDogdGhpcy5ub2RlLmdyb3VwIC8v57uEXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2FtZS5lbWl0KFwiYm9tYjJcIiwgdGhpcy5kYXRhKTsvL+eIhueCuFxyXG4gICAgICAgIGxldCBwb29sID0gdGhpcy5ub2RlLnBvb2w7XHJcbiAgICAgICAgaWYgKHBvb2wpIHtcclxuICAgICAgICAgICAgcG9vbC5wdXQodGhpcy5ub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPSBcIm1vdmVcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBoZCA9IHRoaXMubm9kZS5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgLy8gdGhpcy5zcGVlZFggPSBNYXRoLmNvcyhoZCkgKiB0aGlzLnNwZWVkO1xyXG4gICAgICAgIC8vIHRoaXMuc3BlZWRZID0gTWF0aC5zaW4oaGQpICogdGhpcy5zcGVlZDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIHRoaXMuaWR4Kys7XHJcbiAgICAgICAgdGhpcy5jdXJSYW5nZSAtPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyUmFuZ2UgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBjdXJQb3MgPSBjYy52Mih0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xyXG4gICAgICAgIC8vIC8vIHRoaXMuc3BlZWRZIC09IDkuODtcclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkWCAqIGR0O1xyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWRZICogZHQ7XHJcbiAgICAgICAgLy8gbGV0IHBvcyA9IGNjLnYyKHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSk7XHJcbiAgICAgICAgLy8gbGV0IHJvdGF0aW9uID0gZ2FtZS5nYW1lVXRpbHMuZ2V0Um90YXRpb24oY3VyUG9zLCBwb3MpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hbmdsZSA9IHJvdGF0aW9uO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==