
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/control/control.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32d83Ai421OJrJRzNVOS66h', 'control');
// Script/control/control.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    joystick: cc.Node,
    btnContinue: cc.Node
  },
  onLoad: function onLoad() {
    this.joystick.active = false; //this.joystick.active = true;

    this.btnContinue.active = false;

    if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS) {//ANDROID IOS
    } else {
      this.node.addComponent("keyboard"); //键盘组件
      //cc.log("添加键盘组件")
    }

    game.on("enterGame", this.enterGame, this);
    game.on("levelGame", this.levelGame, this);
  },
  enterGame: function enterGame() {
    this.btnContinue.active = true;
  },
  levelGame: function levelGame() {
    this.btnContinue.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb250cm9sXFxjb250cm9sLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiam95c3RpY2siLCJOb2RlIiwiYnRuQ29udGludWUiLCJvbkxvYWQiLCJhY3RpdmUiLCJzeXMiLCJvcyIsIk9TX0FORFJPSUQiLCJPU19JT1MiLCJub2RlIiwiYWRkQ29tcG9uZW50IiwiZ2FtZSIsIm9uIiwiZW50ZXJHYW1lIiwibGV2ZWxHYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFFSixFQUFFLENBQUNLLElBREw7QUFFUkMsSUFBQUEsV0FBVyxFQUFFTixFQUFFLENBQUNLO0FBRlIsR0FGUDtBQU1MRSxFQUFBQSxNQU5LLG9CQU1JO0FBQ0wsU0FBS0gsUUFBTCxDQUFjSSxNQUFkLEdBQXVCLEtBQXZCLENBREssQ0FFTDs7QUFDQSxTQUFLRixXQUFMLENBQWlCRSxNQUFqQixHQUEwQixLQUExQjs7QUFDQSxRQUFJUixFQUFFLENBQUNTLEdBQUgsQ0FBT0MsRUFBUCxJQUFhVixFQUFFLENBQUNTLEdBQUgsQ0FBT0UsVUFBcEIsSUFBa0NYLEVBQUUsQ0FBQ1MsR0FBSCxDQUFPQyxFQUFQLElBQWFWLEVBQUUsQ0FBQ1MsR0FBSCxDQUFPRyxNQUExRCxFQUFrRSxDQUFFO0FBQ25FLEtBREQsTUFDTztBQUNILFdBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QixVQUF2QixFQURHLENBQ2lDO0FBQ3BDO0FBQ0g7O0FBQ0RDLElBQUFBLElBQUksQ0FBQ0MsRUFBTCxDQUFRLFdBQVIsRUFBcUIsS0FBS0MsU0FBMUIsRUFBcUMsSUFBckM7QUFDQUYsSUFBQUEsSUFBSSxDQUFDQyxFQUFMLENBQVEsV0FBUixFQUFxQixLQUFLRSxTQUExQixFQUFxQyxJQUFyQztBQUNILEdBakJJO0FBa0JMRCxFQUFBQSxTQWxCSyx1QkFrQk87QUFDUixTQUFLWCxXQUFMLENBQWlCRSxNQUFqQixHQUEwQixJQUExQjtBQUNILEdBcEJJO0FBcUJMVSxFQUFBQSxTQXJCSyx1QkFxQk87QUFDUixTQUFLWixXQUFMLENBQWlCRSxNQUFqQixHQUEwQixLQUExQjtBQUNIO0FBdkJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgam95c3RpY2s6IGNjLk5vZGUsXHJcbiAgICAgICAgYnRuQ29udGludWU6IGNjLk5vZGVcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5qb3lzdGljay5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvL3RoaXMuam95c3RpY2suYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJ0bkNvbnRpbnVlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQgfHwgY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHsgLy9BTkRST0lEIElPU1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDb21wb25lbnQoXCJrZXlib2FyZFwiKTsgLy/plK7nm5jnu4Tku7ZcclxuICAgICAgICAgICAgLy9jYy5sb2coXCLmt7vliqDplK7nm5jnu4Tku7ZcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2FtZS5vbihcImVudGVyR2FtZVwiLCB0aGlzLmVudGVyR2FtZSwgdGhpcyk7XHJcbiAgICAgICAgZ2FtZS5vbihcImxldmVsR2FtZVwiLCB0aGlzLmxldmVsR2FtZSwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgZW50ZXJHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuYnRuQ29udGludWUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBsZXZlbEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5idG5Db250aW51ZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=