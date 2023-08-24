
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/guangka/guanItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da537/LzyFMrbvYsOvGkxoy', 'guanItem');
// Script/guangka/guanItem.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    num: 101,
    stars: [cc.Sprite],
    label: cc.Label,
    gkIcon: cc.Sprite
  },
  onDestroy: function onDestroy() {
    this.addEvent(false);
  },
  onLoad: function onLoad() {
    this.zhang = parseInt(this.num / 100);
    this.guan = this.num % 100;
    this.label.string = this.guan.toString();
  },
  addEvent: function addEvent(flg) {
    if (this.flg == flg) return;
    this.flg = flg;

    if (flg) {
      this.node.on(cc.Node.EventType.TOUCH_END, this.onTouch, this);
    } else {
      this.node.off(cc.Node.EventType.TOUCH_END, this.onTouch, this);
    }
  },
  onTouch: function onTouch() {
    cc.log(1);
    game.guanKaInfo = "guan1_1";
    game.emit(game.gameEvent.load_scene, game.gameScene.gameMain);
  },
  setInfo: function setInfo(info) {
    info = info || {};
    info.level = info.level || 0; //0

    if (game.curNum == this.num) {
      this.gkIcon.spriteFrame = game.ui_atlas.getSpriteFrame("gk-guka0");
      this.addEvent(true);
    } else {
      if (info.state) {
        this.addEvent(true);
        this.gkIcon.spriteFrame = game.ui_atlas.getSpriteFrame("gk-guka1");
      } else {
        this.gkIcon.spriteFrame = game.ui_atlas.getSpriteFrame("gk-guka2");
      }
    }

    for (var i = 0; i < this.stars.length; i++) {
      var star = this.stars[i];

      if (info.state > i) {
        star.spriteFrame = game.ui_atlas.getSpriteFrame("gk-start1");
      } else {
        star.spriteFrame = game.ui_atlas.getSpriteFrame("gk-start0");
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxndWFuZ2thXFxndWFuSXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm51bSIsInN0YXJzIiwiU3ByaXRlIiwibGFiZWwiLCJMYWJlbCIsImdrSWNvbiIsIm9uRGVzdHJveSIsImFkZEV2ZW50Iiwib25Mb2FkIiwiemhhbmciLCJwYXJzZUludCIsImd1YW4iLCJzdHJpbmciLCJ0b1N0cmluZyIsImZsZyIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJvblRvdWNoIiwib2ZmIiwibG9nIiwiZ2FtZSIsImd1YW5LYUluZm8iLCJlbWl0IiwiZ2FtZUV2ZW50IiwibG9hZF9zY2VuZSIsImdhbWVTY2VuZSIsImdhbWVNYWluIiwic2V0SW5mbyIsImluZm8iLCJsZXZlbCIsImN1ck51bSIsInNwcml0ZUZyYW1lIiwidWlfYXRsYXMiLCJnZXRTcHJpdGVGcmFtZSIsInN0YXRlIiwiaSIsImxlbmd0aCIsInN0YXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUUsR0FERztBQUVSQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxNQUFKLENBRkM7QUFHUkMsSUFBQUEsS0FBSyxFQUFFUCxFQUFFLENBQUNRLEtBSEY7QUFJUkMsSUFBQUEsTUFBTSxFQUFFVCxFQUFFLENBQUNNO0FBSkgsR0FGUDtBQVFMSSxFQUFBQSxTQVJLLHVCQVFPO0FBQ1IsU0FBS0MsUUFBTCxDQUFjLEtBQWQ7QUFDSCxHQVZJO0FBV0xDLEVBQUFBLE1BWEssb0JBV0k7QUFDTCxTQUFLQyxLQUFMLEdBQWFDLFFBQVEsQ0FBQyxLQUFLVixHQUFMLEdBQVcsR0FBWixDQUFyQjtBQUNBLFNBQUtXLElBQUwsR0FBWSxLQUFLWCxHQUFMLEdBQVcsR0FBdkI7QUFDQSxTQUFLRyxLQUFMLENBQVdTLE1BQVgsR0FBb0IsS0FBS0QsSUFBTCxDQUFVRSxRQUFWLEVBQXBCO0FBQ0gsR0FmSTtBQWdCTE4sRUFBQUEsUUFoQkssb0JBZ0JJTyxHQWhCSixFQWdCUztBQUNWLFFBQUksS0FBS0EsR0FBTCxJQUFZQSxHQUFoQixFQUFxQjtBQUNyQixTQUFLQSxHQUFMLEdBQVdBLEdBQVg7O0FBQ0EsUUFBSUEsR0FBSixFQUFTO0FBQ0wsV0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFwQixFQUFFLENBQUNxQixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFNBQS9CLEVBQTBDLEtBQUtDLE9BQS9DLEVBQXdELElBQXhEO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsV0FBS0wsSUFBTCxDQUFVTSxHQUFWLENBQWN6QixFQUFFLENBQUNxQixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFNBQWhDLEVBQTJDLEtBQUtDLE9BQWhELEVBQXlELElBQXpEO0FBQ0g7QUFDSixHQXpCSTtBQTBCTEEsRUFBQUEsT0ExQksscUJBMEJLO0FBQ054QixJQUFBQSxFQUFFLENBQUMwQixHQUFILENBQU8sQ0FBUDtBQUNBQyxJQUFBQSxJQUFJLENBQUNDLFVBQUwsR0FBa0IsU0FBbEI7QUFDQUQsSUFBQUEsSUFBSSxDQUFDRSxJQUFMLENBQVVGLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxVQUF6QixFQUFxQ0osSUFBSSxDQUFDSyxTQUFMLENBQWVDLFFBQXBEO0FBQ0gsR0E5Qkk7QUErQkxDLEVBQUFBLE9BL0JLLG1CQStCR0MsSUEvQkgsRUErQlM7QUFDVkEsSUFBQUEsSUFBSSxHQUFHQSxJQUFJLElBQUksRUFBZjtBQUNBQSxJQUFBQSxJQUFJLENBQUNDLEtBQUwsR0FBYUQsSUFBSSxDQUFDQyxLQUFMLElBQWMsQ0FBM0IsQ0FGVSxDQUVvQjs7QUFDOUIsUUFBSVQsSUFBSSxDQUFDVSxNQUFMLElBQWUsS0FBS2pDLEdBQXhCLEVBQTZCO0FBQ3pCLFdBQUtLLE1BQUwsQ0FBWTZCLFdBQVosR0FBMEJYLElBQUksQ0FBQ1ksUUFBTCxDQUFjQyxjQUFkLENBQTZCLFVBQTdCLENBQTFCO0FBQ0EsV0FBSzdCLFFBQUwsQ0FBYyxJQUFkO0FBQ0gsS0FIRCxNQUlLO0FBQ0QsVUFBSXdCLElBQUksQ0FBQ00sS0FBVCxFQUFnQjtBQUNaLGFBQUs5QixRQUFMLENBQWMsSUFBZDtBQUNBLGFBQUtGLE1BQUwsQ0FBWTZCLFdBQVosR0FBMEJYLElBQUksQ0FBQ1ksUUFBTCxDQUFjQyxjQUFkLENBQTZCLFVBQTdCLENBQTFCO0FBQ0gsT0FIRCxNQUlLO0FBQ0QsYUFBSy9CLE1BQUwsQ0FBWTZCLFdBQVosR0FBMEJYLElBQUksQ0FBQ1ksUUFBTCxDQUFjQyxjQUFkLENBQTZCLFVBQTdCLENBQTFCO0FBQ0g7QUFDSjs7QUFDRCxTQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3JDLEtBQUwsQ0FBV3NDLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQ3hDLFVBQUlFLElBQUksR0FBRyxLQUFLdkMsS0FBTCxDQUFXcUMsQ0FBWCxDQUFYOztBQUNBLFVBQUlQLElBQUksQ0FBQ00sS0FBTCxHQUFhQyxDQUFqQixFQUFvQjtBQUNoQkUsUUFBQUEsSUFBSSxDQUFDTixXQUFMLEdBQW1CWCxJQUFJLENBQUNZLFFBQUwsQ0FBY0MsY0FBZCxDQUE2QixXQUE3QixDQUFuQjtBQUNILE9BRkQsTUFHSztBQUNESSxRQUFBQSxJQUFJLENBQUNOLFdBQUwsR0FBbUJYLElBQUksQ0FBQ1ksUUFBTCxDQUFjQyxjQUFkLENBQTZCLFdBQTdCLENBQW5CO0FBQ0g7QUFDSjtBQUNKO0FBeERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBudW06IDEwMSxcclxuICAgICAgICBzdGFyczogW2NjLlNwcml0ZV0sXHJcbiAgICAgICAgbGFiZWw6IGNjLkxhYmVsLFxyXG4gICAgICAgIGdrSWNvbjogY2MuU3ByaXRlXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnQoZmFsc2UpXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuemhhbmcgPSBwYXJzZUludCh0aGlzLm51bSAvIDEwMCk7XHJcbiAgICAgICAgdGhpcy5ndWFuID0gdGhpcy5udW0gJSAxMDA7XHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLmd1YW4udG9TdHJpbmcoKTtcclxuICAgIH0sXHJcbiAgICBhZGRFdmVudChmbGcpIHtcclxuICAgICAgICBpZiAodGhpcy5mbGcgPT0gZmxnKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5mbGcgPSBmbGc7XHJcbiAgICAgICAgaWYgKGZsZykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2gsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaCwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uVG91Y2goKSB7XHJcbiAgICAgICAgY2MubG9nKDEpO1xyXG4gICAgICAgIGdhbWUuZ3VhbkthSW5mbyA9IFwiZ3VhbjFfMVwiO1xyXG4gICAgICAgIGdhbWUuZW1pdChnYW1lLmdhbWVFdmVudC5sb2FkX3NjZW5lLCBnYW1lLmdhbWVTY2VuZS5nYW1lTWFpbilcclxuICAgIH0sXHJcbiAgICBzZXRJbmZvKGluZm8pIHtcclxuICAgICAgICBpbmZvID0gaW5mbyB8fCB7fTtcclxuICAgICAgICBpbmZvLmxldmVsID0gaW5mby5sZXZlbCB8fCAwOyAvLzBcclxuICAgICAgICBpZiAoZ2FtZS5jdXJOdW0gPT0gdGhpcy5udW0pIHtcclxuICAgICAgICAgICAgdGhpcy5na0ljb24uc3ByaXRlRnJhbWUgPSBnYW1lLnVpX2F0bGFzLmdldFNwcml0ZUZyYW1lKFwiZ2stZ3VrYTBcIik7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaW5mby5zdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2tJY29uLnNwcml0ZUZyYW1lID0gZ2FtZS51aV9hdGxhcy5nZXRTcHJpdGVGcmFtZShcImdrLWd1a2ExXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5na0ljb24uc3ByaXRlRnJhbWUgPSBnYW1lLnVpX2F0bGFzLmdldFNwcml0ZUZyYW1lKFwiZ2stZ3VrYTJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFyID0gdGhpcy5zdGFyc1tpXTtcclxuICAgICAgICAgICAgaWYgKGluZm8uc3RhdGUgPiBpKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFyLnNwcml0ZUZyYW1lID0gZ2FtZS51aV9hdGxhcy5nZXRTcHJpdGVGcmFtZShcImdrLXN0YXJ0MVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0YXIuc3ByaXRlRnJhbWUgPSBnYW1lLnVpX2F0bGFzLmdldFNwcml0ZUZyYW1lKFwiZ2stc3RhcnQwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19