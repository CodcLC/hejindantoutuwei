
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scene/gameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21393ebELhIl4cV4D6PscYC', 'gameOver');
// Script/scene/gameOver.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onDestroy: function onDestroy() {
    this.node.off("death", this.death, this);
  },
  addEvent: function addEvent() {
    this.node.on("death", this.death, this);
  },
  death: function death() {
    if (this.isDeath) return;
    game.isOver = true;
    this.node.isDeath = this.isDeath = true;
    var win = true;

    if (this.node.group == "myrole") {
      win = false;
    }

    game.emit("gameOver");
    var physicsManager = cc.director.getPhysicsManager();
    physicsManager.enabled = false;
    cc.director.getCollisionManager().enabled = false;

    if (win) {
      game.emit(game.gameEvent.popup_prefab, game.gamePopup.gameOver_win, {
        test: parseInt(Math.random() * 1000),
        win: win
      });
      game.soundManager.playMusic(game.gameSound.bgm_win, false); //停止播放音乐
    } else {
      game.emit(game.gameEvent.popup_prefab, game.gamePopup.gameOver_loss, {
        test: parseInt(Math.random() * 1000),
        win: win
      });
      game.soundManager.playMusic(game.gameSound.bgm_lose, false); //停止播放音乐
    }
  },
  onLoad: function onLoad() {
    this.isDeath = false;
    this.addEvent();
  },
  start: function start() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuZVxcZ2FtZU92ZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkRlc3Ryb3kiLCJub2RlIiwib2ZmIiwiZGVhdGgiLCJhZGRFdmVudCIsIm9uIiwiaXNEZWF0aCIsImdhbWUiLCJpc092ZXIiLCJ3aW4iLCJncm91cCIsImVtaXQiLCJwaHlzaWNzTWFuYWdlciIsImRpcmVjdG9yIiwiZ2V0UGh5c2ljc01hbmFnZXIiLCJlbmFibGVkIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImdhbWVFdmVudCIsInBvcHVwX3ByZWZhYiIsImdhbWVQb3B1cCIsImdhbWVPdmVyX3dpbiIsInRlc3QiLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJzb3VuZE1hbmFnZXIiLCJwbGF5TXVzaWMiLCJnYW1lU291bmQiLCJiZ21fd2luIiwiZ2FtZU92ZXJfbG9zcyIsImJnbV9sb3NlIiwib25Mb2FkIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRSxFQUZQO0FBR0xDLEVBQUFBLFNBSEssdUJBR087QUFDUixTQUFLQyxJQUFMLENBQVVDLEdBQVYsQ0FBYyxPQUFkLEVBQXVCLEtBQUtDLEtBQTVCLEVBQW1DLElBQW5DO0FBQ0gsR0FMSTtBQU1MQyxFQUFBQSxRQU5LLHNCQU1NO0FBQ1AsU0FBS0gsSUFBTCxDQUFVSSxFQUFWLENBQWEsT0FBYixFQUFzQixLQUFLRixLQUEzQixFQUFrQyxJQUFsQztBQUNILEdBUkk7QUFTTEEsRUFBQUEsS0FUSyxtQkFTRztBQUNKLFFBQUksS0FBS0csT0FBVCxFQUFrQjtBQUNsQkMsSUFBQUEsSUFBSSxDQUFDQyxNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUtQLElBQUwsQ0FBVUssT0FBVixHQUFvQixLQUFLQSxPQUFMLEdBQWUsSUFBbkM7QUFDQSxRQUFJRyxHQUFHLEdBQUcsSUFBVjs7QUFDQSxRQUFJLEtBQUtSLElBQUwsQ0FBVVMsS0FBVixJQUFtQixRQUF2QixFQUFpQztBQUM3QkQsTUFBQUEsR0FBRyxHQUFHLEtBQU47QUFDSDs7QUFDREYsSUFBQUEsSUFBSSxDQUFDSSxJQUFMLENBQVUsVUFBVjtBQUNBLFFBQUlDLGNBQWMsR0FBR2hCLEVBQUUsQ0FBQ2lCLFFBQUgsQ0FBWUMsaUJBQVosRUFBckI7QUFDQUYsSUFBQUEsY0FBYyxDQUFDRyxPQUFmLEdBQXlCLEtBQXpCO0FBQ0FuQixJQUFBQSxFQUFFLENBQUNpQixRQUFILENBQVlHLG1CQUFaLEdBQWtDRCxPQUFsQyxHQUE0QyxLQUE1Qzs7QUFDQSxRQUFJTixHQUFKLEVBQVM7QUFDTEYsTUFBQUEsSUFBSSxDQUFDSSxJQUFMLENBQVVKLElBQUksQ0FBQ1UsU0FBTCxDQUFlQyxZQUF6QixFQUF1Q1gsSUFBSSxDQUFDWSxTQUFMLENBQWVDLFlBQXRELEVBQW9FO0FBQ2hFQyxRQUFBQSxJQUFJLEVBQUVDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLElBQWpCLENBRGtEO0FBRWhFZixRQUFBQSxHQUFHLEVBQUVBO0FBRjJELE9BQXBFO0FBSUFGLE1BQUFBLElBQUksQ0FBQ2tCLFlBQUwsQ0FBa0JDLFNBQWxCLENBQTRCbkIsSUFBSSxDQUFDb0IsU0FBTCxDQUFlQyxPQUEzQyxFQUFvRCxLQUFwRCxFQUxLLENBS3NEO0FBQzlELEtBTkQsTUFPSztBQUNEckIsTUFBQUEsSUFBSSxDQUFDSSxJQUFMLENBQVVKLElBQUksQ0FBQ1UsU0FBTCxDQUFlQyxZQUF6QixFQUF1Q1gsSUFBSSxDQUFDWSxTQUFMLENBQWVVLGFBQXRELEVBQXFFO0FBQ2pFUixRQUFBQSxJQUFJLEVBQUVDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLElBQWpCLENBRG1EO0FBRWpFZixRQUFBQSxHQUFHLEVBQUVBO0FBRjRELE9BQXJFO0FBSUFGLE1BQUFBLElBQUksQ0FBQ2tCLFlBQUwsQ0FBa0JDLFNBQWxCLENBQTRCbkIsSUFBSSxDQUFDb0IsU0FBTCxDQUFlRyxRQUEzQyxFQUFxRCxLQUFyRCxFQUxDLENBSzJEO0FBQy9EO0FBQ0osR0FuQ0k7QUFvQ0xDLEVBQUFBLE1BcENLLG9CQW9DSTtBQUNMLFNBQUt6QixPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtGLFFBQUw7QUFDSCxHQXZDSTtBQXdDTDRCLEVBQUFBLEtBeENLLG1CQXdDRyxDQUNQO0FBekNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHt9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoXCJkZWF0aFwiLCB0aGlzLmRlYXRoLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBhZGRFdmVudCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oXCJkZWF0aFwiLCB0aGlzLmRlYXRoLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBkZWF0aCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlYXRoKSByZXR1cm47XHJcbiAgICAgICAgZ2FtZS5pc092ZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5pc0RlYXRoID0gdGhpcy5pc0RlYXRoID0gdHJ1ZTtcclxuICAgICAgICB2YXIgd2luID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLmdyb3VwID09IFwibXlyb2xlXCIpIHtcclxuICAgICAgICAgICAgd2luID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhbWUuZW1pdChcImdhbWVPdmVyXCIpO1xyXG4gICAgICAgIGxldCBwaHlzaWNzTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgcGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHdpbikge1xyXG4gICAgICAgICAgICBnYW1lLmVtaXQoZ2FtZS5nYW1lRXZlbnQucG9wdXBfcHJlZmFiLCBnYW1lLmdhbWVQb3B1cC5nYW1lT3Zlcl93aW4sIHtcclxuICAgICAgICAgICAgICAgIHRlc3Q6IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMDAwKSxcclxuICAgICAgICAgICAgICAgIHdpbjogd2luXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBnYW1lLnNvdW5kTWFuYWdlci5wbGF5TXVzaWMoZ2FtZS5nYW1lU291bmQuYmdtX3dpbiwgZmFsc2UpOy8v5YGc5q2i5pKt5pS+6Z+z5LmQXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBnYW1lLmVtaXQoZ2FtZS5nYW1lRXZlbnQucG9wdXBfcHJlZmFiLCBnYW1lLmdhbWVQb3B1cC5nYW1lT3Zlcl9sb3NzLCB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0OiBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMTAwMCksXHJcbiAgICAgICAgICAgICAgICB3aW46IHdpblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZ2FtZS5zb3VuZE1hbmFnZXIucGxheU11c2ljKGdhbWUuZ2FtZVNvdW5kLmJnbV9sb3NlLCBmYWxzZSk7Ly/lgZzmraLmkq3mlL7pn7PkuZBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuaXNEZWF0aCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnQoKTtcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=