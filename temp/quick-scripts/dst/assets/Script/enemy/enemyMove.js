
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/enemy/enemyMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1e37BHhpJJJahXIx5PAy6z', 'enemyMove');
// Script/enemy/enemyMove.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": PoolComponent,
  properties: {
    maxSpeed: 100,
    //最大速度
    jumps: 2,
    //跳跃次数
    // acceleration: 1500,//加速度
    jumpSpeed: 500,
    //跳跃速度
    drag: 600 //拖拽速度

  },
  unuse: function unuse() {
    this.node.off("key_down", this.onKeyDown, this);
    this.node.off("key_up", this.onKeyUp, this);
  },
  reuse: function reuse(data) {
    this._moveFlags = 0;
    this.node.roleState = this.roleState = 0; //角色状态  0=静止 1=移动 2=跳跃

    this._up = false;
    this.jumping = false;
    this.node.zIndex = 10;
    this.node.on("key_down", this.onKeyDown, this);
    this.node.on("key_up", this.onKeyUp, this);
  },
  onDisable: function onDisable() {},
  onLoad: function onLoad() {
    this.body = this.getComponent(cc.RigidBody);
  },
  onDestroy: function onDestroy() {},
  onKeyDown: function onKeyDown(data) {
    if (this.node.isDeath) return;
    if (game.isOver) return;

    switch (data) {
      case game.gameControl.left:
        this._moveFlags |= game.gameAction.MOVE_LEFT;
        break;

      case game.gameControl.right:
        this._moveFlags |= game.gameAction.MOVE_RIGHT;
        break;

      case game.gameControl.up:
        if (!this._upPressed) {
          this._up = true;
        }

        this._upPressed = true;
        break;

      case game.gameControl.down:
        //this.node.emit("switchSkin");//更改方向
        break;

      case game.gameControl.weapons:
        this.node.emit("switchSkin"); //更改方向

        break;
    }
  },
  onKeyUp: function onKeyUp(data) {
    if (this.node.isDeath) return;
    if (game.isOver) return;

    switch (data) {
      case game.gameControl.left:
        this._moveFlags &= ~game.gameAction.MOVE_LEFT;
        break;

      case game.gameControl.right:
        this._moveFlags &= ~game.gameAction.MOVE_RIGHT;
        break;

      case game.gameControl.down:
      case game.gameControl.up:
        this._upPressed = false;
        break;
    }
  },
  // 只在两个碰撞体开始接触时被调用一次
  onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
    this.jumping = false;
  },
  // 只在两个碰撞体结束接触时被调用一次
  onEndContact: function onEndContact(contact, selfCollider, otherCollider) {},
  // 每次将要处理碰撞体接触逻辑时被调用
  onPreSolve: function onPreSolve(contact, selfCollider, otherCollider) {},
  // 每次处理完碰撞体接触逻辑时被调用
  onPostSolve: function onPostSolve(contact, selfCollider, otherCollider) {},
  update: function update(dt) {
    if (game.isOver) return;
    var speed = this.body.linearVelocity;

    if (this.node.isDeath) {
      speed.x = 0;
      this.body.linearVelocity = speed;
      return;
    }

    if (this._moveFlags === game.gameAction.MOVE_LEFT) {
      // speed.x -= this.acceleration * dt;
      // if (speed.x < -this.maxSpeed) {
      //     speed.x = -this.maxSpeed;
      // }
      speed.x = -this.maxSpeed;
      this.node.emit("changeDirection", -1); //更改方向
    } else if (this._moveFlags === game.gameAction.MOVE_RIGHT) {
      // speed.x += this.acceleration * dt;
      // if (speed.x > this.maxSpeed) {
      //     speed.x = this.maxSpeed;
      // }
      speed.x = this.maxSpeed;
      this.node.emit("changeDirection", 1); //更改方向
    } else {
      speed.x = 0; // if (speed.x != 0) {
      //     var d = this.drag * dt;
      //     if (Math.abs(speed.x) <= d) {
      //         speed.x = 0;
      //     } else {
      //         speed.x -= speed.x > 0 ? d : -d;
      //     }
      // }
    }

    if (Math.abs(speed.y) < 1) {
      this.jumps = 2;
    }

    if (this.jumps > 0 && this._up) {
      speed.y = this.jumpSpeed;
      this.jumps--;
      this.setState(2);
      this.jumping = true;
    }

    this._up = false;

    if (this.jumping == false) {
      if (speed.x > 0 || speed.x < 0) {
        this.setState(1);
      } else {
        this.setState(0);
      }
    }

    if (speed.x != 0) {
      if (speed.x < 0) {
        if (this.node.x < game.mapRect.x + 10) {
          speed.x = 0;
        }
      } else {
        if (this.node.x > game.mapRect.x + game.mapRect.width - 10) {
          speed.x = 0;
        }
      }

      if (speed.y == 0) {
        speed.y = 10;
      }
    }

    this.body.linearVelocity = speed;
  },
  //设置角色状态
  setState: function setState(value) {
    if (this.roleState == value) return;
    this.node.roleState = this.roleState = value;
    this.node.emit("roleState", this.roleState); //更改动作
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxlbmVteVxcZW5lbXlNb3ZlLmpzIl0sIm5hbWVzIjpbIlBvb2xDb21wb25lbnQiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJtYXhTcGVlZCIsImp1bXBzIiwianVtcFNwZWVkIiwiZHJhZyIsInVudXNlIiwibm9kZSIsIm9mZiIsIm9uS2V5RG93biIsIm9uS2V5VXAiLCJyZXVzZSIsImRhdGEiLCJfbW92ZUZsYWdzIiwicm9sZVN0YXRlIiwiX3VwIiwianVtcGluZyIsInpJbmRleCIsIm9uIiwib25EaXNhYmxlIiwib25Mb2FkIiwiYm9keSIsImdldENvbXBvbmVudCIsIlJpZ2lkQm9keSIsIm9uRGVzdHJveSIsImlzRGVhdGgiLCJnYW1lIiwiaXNPdmVyIiwiZ2FtZUNvbnRyb2wiLCJsZWZ0IiwiZ2FtZUFjdGlvbiIsIk1PVkVfTEVGVCIsInJpZ2h0IiwiTU9WRV9SSUdIVCIsInVwIiwiX3VwUHJlc3NlZCIsImRvd24iLCJ3ZWFwb25zIiwiZW1pdCIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGZDb2xsaWRlciIsIm90aGVyQ29sbGlkZXIiLCJvbkVuZENvbnRhY3QiLCJvblByZVNvbHZlIiwib25Qb3N0U29sdmUiLCJ1cGRhdGUiLCJkdCIsInNwZWVkIiwibGluZWFyVmVsb2NpdHkiLCJ4IiwiTWF0aCIsImFicyIsInkiLCJzZXRTdGF0ZSIsIm1hcFJlY3QiLCJ3aWR0aCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBM0IsRUFBOEM7OztBQUM5Q0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTSCxhQURKO0FBRUxJLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUUsR0FERjtBQUNNO0FBQ2RDLElBQUFBLEtBQUssRUFBRSxDQUZDO0FBRUU7QUFDVjtBQUNBQyxJQUFB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QUFVLENBQWQsRUFBaUI7QUFDYixZQUFJLEtBQUszQyxJQUFMLENBQVUyQyxDQUFWLEdBQWV4QixJQUFJLENBQUM2QixPQUFMLENBQWFMLENBQWIsR0FBaUIsRUFBcEMsRUFBeUM7QUFDckNGLFVBQUFBLEtBQUssQ0FBQ0UsQ0FBTixHQUFVLENBQVY7QUFDSDtBQUNKLE9BSkQsTUFLSztBQUNELFlBQUksS0FBSzNDLElBQUwsQ0FBVTJDLENBQVYsR0FBZXhCLElBQUksQ0FBQzZCLE9BQUwsQ0FBYUwsQ0FBYixHQUFpQnhCLElBQUksQ0FBQzZCLE9BQUwsQ0FBYUMsS0FBOUIsR0FBc0MsRUFBekQsRUFBOEQ7QUFDMURSLFVBQUFBLEtBQUssQ0FBQ0UsQ0FBTixHQUFVLENBQVY7QUFDSDtBQUNKOztBQUNELFVBQUlGLEtBQUssQ0FBQ0ssQ0FBTixJQUFXLENBQWYsRUFBa0I7QUFDZEwsUUFBQUEsS0FBSyxDQUFDSyxDQUFOLEdBQVUsRUFBVjtBQUNIO0FBQ0o7O0FBQ0QsU0FBS2hDLElBQUwsQ0FBVTRCLGNBQVYsR0FBMkJELEtBQTNCO0FBQ0gsR0F2Skk7QUF3Skw7QUFDQU0sRUFBQUEsUUF6Skssb0JBeUpJRyxLQXpKSixFQXlKVztBQUNaLFFBQUksS0FBSzNDLFNBQUwsSUFBa0IyQyxLQUF0QixFQUE2QjtBQUM3QixTQUFLbEQsSUFBTCxDQUFVTyxTQUFWLEdBQXNCLEtBQUtBLFNBQUwsR0FBaUIyQyxLQUF2QztBQUNBLFNBQUtsRCxJQUFMLENBQVUrQixJQUFWLENBQWUsV0FBZixFQUE0QixLQUFLeEIsU0FBakMsRUFIWSxDQUdnQztBQUMvQztBQTdKSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUG9vbENvbXBvbmVudCA9IHJlcXVpcmUoXCJQb29sQ29tcG9uZW50XCIpOyAvL+axoOWtkOe7hOS7tlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBQb29sQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIG1heFNwZWVkOiAxMDAsLy/mnIDlpKfpgJ/luqZcclxuICAgICAgICBqdW1wczogMiwgLy/ot7Pot4PmrKHmlbBcclxuICAgICAgICAvLyBhY2NlbGVyYXRpb246IDE1MDAsLy/liqDpgJ/luqZcclxuICAgICAgICBqdW1wU3BlZWQ6IDUwMCwgLy/ot7Pot4PpgJ/luqZcclxuICAgICAgICBkcmFnOiA2MDAgICAgICAgLy/mi5bmi73pgJ/luqZcclxuICAgIH0sXHJcbiAgICB1bnVzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoXCJrZXlfZG93blwiLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihcImtleV91cFwiLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIHJldXNlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX21vdmVGbGFncyA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJvbGVTdGF0ZSA9IHRoaXMucm9sZVN0YXRlID0gMDsvL+inkuiJsueKtuaAgSAgMD3pnZnmraIgMT3np7vliqggMj3ot7Pot4NcclxuICAgICAgICB0aGlzLl91cCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAxMDtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJrZXlfZG93blwiLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwia2V5X3VwXCIsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgfSxcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYm9keSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIG9uS2V5RG93bihkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5pc0RlYXRoKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGdhbWUuaXNPdmVyKSByZXR1cm47XHJcbiAgICAgICAgc3dpdGNoIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGNhc2UgZ2FtZS5nYW1lQ29udHJvbC5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZUZsYWdzIHw9IGdhbWUuZ2FtZUFjdGlvbi5NT1ZFX0xFRlQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBnYW1lLmdhbWVDb250cm9sLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZUZsYWdzIHw9IGdhbWUuZ2FtZUFjdGlvbi5NT1ZFX1JJR0hUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZ2FtZS5nYW1lQ29udHJvbC51cDpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fdXBQcmVzc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGdhbWUuZ2FtZUNvbnRyb2wuZG93bjpcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLmVtaXQoXCJzd2l0Y2hTa2luXCIpOy8v5pu05pS55pa55ZCRXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAgZ2FtZS5nYW1lQ29udHJvbC53ZWFwb25zOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJzd2l0Y2hTa2luXCIpOy8v5pu05pS55pa55ZCRXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25LZXlVcChkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5pc0RlYXRoKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGdhbWUuaXNPdmVyKSByZXR1cm47XHJcbiAgICAgICAgc3dpdGNoIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGNhc2UgZ2FtZS5nYW1lQ29udHJvbC5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW92ZUZsYWdzICY9IH5nYW1lLmdhbWVBY3Rpb24uTU9WRV9MRUZUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZ2FtZS5nYW1lQ29udHJvbC5yaWdodDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vdmVGbGFncyAmPSB+Z2FtZS5nYW1lQWN0aW9uLk1PVkVfUklHSFQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBnYW1lLmdhbWVDb250cm9sLmRvd246XHJcbiAgICAgICAgICAgIGNhc2UgZ2FtZS5nYW1lQ29udHJvbC51cDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOWPquWcqOS4pOS4queisOaSnuS9k+W8gOWni+aOpeinpuaXtuiiq+iwg+eUqOS4gOasoVxyXG4gICAgb25CZWdpbkNvbnRhY3Q6IGZ1bmN0aW9uIChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcclxuICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICAvLyDlj6rlnKjkuKTkuKrnorDmkp7kvZPnu5PmnZ/mjqXop6bml7booqvosIPnlKjkuIDmrKFcclxuICAgIG9uRW5kQ29udGFjdDogZnVuY3Rpb24gKGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgfSxcclxuICAgIC8vIOavj+asoeWwhuimgeWkhOeQhueisOaSnuS9k+aOpeinpumAu+i+keaXtuiiq+iwg+eUqFxyXG4gICAgb25QcmVTb2x2ZTogZnVuY3Rpb24gKGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgfSxcclxuICAgIC8vIOavj+asoeWkhOeQhuWujOeisOaSnuS9k+aOpeinpumAu+i+keaXtuiiq+iwg+eUqFxyXG4gICAgb25Qb3N0U29sdmU6IGZ1bmN0aW9uIChjb250YWN0LCBzZWxmQ29sbGlkZXIsIG90aGVyQ29sbGlkZXIpIHtcclxuICAgIH0sXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIGlmIChnYW1lLmlzT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgIHZhciBzcGVlZCA9IHRoaXMuYm9keS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLmlzRGVhdGgpIHtcclxuICAgICAgICAgICAgc3BlZWQueCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS5saW5lYXJWZWxvY2l0eSA9IHNwZWVkO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX21vdmVGbGFncyA9PT0gZ2FtZS5nYW1lQWN0aW9uLk1PVkVfTEVGVCkge1xyXG4gICAgICAgICAgICAvLyBzcGVlZC54IC09IHRoaXMuYWNjZWxlcmF0aW9uICogZHQ7XHJcbiAgICAgICAgICAgIC8vIGlmIChzcGVlZC54IDwgLXRoaXMubWF4U3BlZWQpIHtcclxuICAgICAgICAgICAgLy8gICAgIHNwZWVkLnggPSAtdGhpcy5tYXhTcGVlZDtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBzcGVlZC54ID0gLXRoaXMubWF4U3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiY2hhbmdlRGlyZWN0aW9uXCIsIC0xKTsvL+abtOaUueaWueWQkVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9tb3ZlRmxhZ3MgPT09IGdhbWUuZ2FtZUFjdGlvbi5NT1ZFX1JJR0hUKSB7XHJcbiAgICAgICAgICAgIC8vIHNwZWVkLnggKz0gdGhpcy5hY2NlbGVyYXRpb24gKiBkdDtcclxuICAgICAgICAgICAgLy8gaWYgKHNwZWVkLnggPiB0aGlzLm1heFNwZWVkKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBzcGVlZC54ID0gdGhpcy5tYXhTcGVlZDtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBzcGVlZC54ID0gdGhpcy5tYXhTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJjaGFuZ2VEaXJlY3Rpb25cIiwgMSk7Ly/mm7TmlLnmlrnlkJFcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNwZWVkLnggPSAwO1xyXG4gICAgICAgICAgICAvLyBpZiAoc3BlZWQueCAhPSAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgZCA9IHRoaXMuZHJhZyAqIGR0O1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKE1hdGguYWJzKHNwZWVkLngpIDw9IGQpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBzcGVlZC54ID0gMDtcclxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc3BlZWQueCAtPSBzcGVlZC54ID4gMCA/IGQgOiAtZDtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTWF0aC5hYnMoc3BlZWQueSkgPCAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcHMgPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5qdW1wcyA+IDAgJiYgdGhpcy5fdXApIHtcclxuICAgICAgICAgICAgc3BlZWQueSA9IHRoaXMuanVtcFNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBzLS07XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoMik7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3VwID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuanVtcGluZyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpZiAoc3BlZWQueCA+IDAgfHwgc3BlZWQueCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzcGVlZC54ICE9IDApIHtcclxuICAgICAgICAgICAgaWYgKHNwZWVkLnggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLnggPCAoZ2FtZS5tYXBSZWN0LnggKyAxMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVlZC54ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueCA+IChnYW1lLm1hcFJlY3QueCArIGdhbWUubWFwUmVjdC53aWR0aCAtIDEwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkLnggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzcGVlZC55ID09IDApIHtcclxuICAgICAgICAgICAgICAgIHNwZWVkLnkgPSAxMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJvZHkubGluZWFyVmVsb2NpdHkgPSBzcGVlZDtcclxuICAgIH0sXHJcbiAgICAvL+iuvue9ruinkuiJsueKtuaAgVxyXG4gICAgc2V0U3RhdGUodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5yb2xlU3RhdGUgPT0gdmFsdWUpIHJldHVybjtcclxuICAgICAgICB0aGlzLm5vZGUucm9sZVN0YXRlID0gdGhpcy5yb2xlU3RhdGUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcInJvbGVTdGF0ZVwiLCB0aGlzLnJvbGVTdGF0ZSk7Ly/mm7TmlLnliqjkvZxcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=