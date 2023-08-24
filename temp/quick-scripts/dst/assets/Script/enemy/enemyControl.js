
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/enemy/enemyControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70ca4oo5GNEj5N/4e2f8oiQ', 'enemyControl');
// Script/enemy/enemyControl.js

"use strict";

var PoolComponent = require("PoolComponent"); //池子组件


cc.Class({
  "extends": PoolComponent,
  properties: {
    _isMove: false,
    attackTme: 1 //攻击时间

  },
  // get isMove() {
  //     return this._isMove;
  // },
  emitMove: function emitMove(value) {
    if (this._isMove != value) {
      this._isMove = value;
      if (value) this.node.emit("key_down", game.gameControl.left);else this.node.emit("key_up", game.gameControl.left);
    }
  },
  onLoad: function onLoad() {},
  unuse: function unuse() {
    this.node.off("onCollisionEnter", this.onFindEnter, this);
    this.node.off("onCollisionExit", this.onFindExit, this);
  },
  reuse: function reuse(data) {
    this.sendTime = 0;
    this.targets = [];
    this.node.on("onCollisionEnter", this.onFindEnter, this);
    this.node.on("onCollisionExit", this.onFindExit, this);
  },
  onEnable: function onEnable() {},
  onDisable: function onDisable() {},
  onDestroy: function onDestroy() {},
  onFindEnter: function onFindEnter(target) {
    if (this.node.isDeath) return;
    var node = target.node;

    if (this.targets.indexOf(node) < 0) {
      this.targets.push(node);
    }
  },
  onFindExit: function onFindExit(target) {
    if (this.node.isDeath) return;
    var node = target.node;
    var idx = this.targets.indexOf(node);

    if (idx >= 0) {
      this.targets.splice(idx, 1);
    }
  },
  start: function start() {},
  update: function update(dt) {
    if (game.isOver) return; //游戏结束

    if (this.node.isDeath) return; //角色死亡

    this.sendTime += dt;

    if (this.targets.length > 0) {
      //有目标
      this.emitMove(false);

      if (this.sendTime > this.attackTme) //攻击时间到了
        {
          this.sendTime = 0;
          this.node.emit("attack");
        }
    } else {
      this.emitMove(true); //= true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxlbmVteVxcZW5lbXlDb250cm9sLmpzIl0sIm5hbWVzIjpbIlBvb2xDb21wb25lbnQiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJfaXNNb3ZlIiwiYXR0YWNrVG1lIiwiZW1pdE1vdmUiLCJ2YWx1ZSIsIm5vZGUiLCJlbWl0IiwiZ2FtZSIsImdhbWVDb250cm9sIiwibGVmdCIsIm9uTG9hZCIsInVudXNlIiwib2ZmIiwib25GaW5kRW50ZXIiLCJvbkZpbmRFeGl0IiwicmV1c2UiLCJkYXRhIiwic2VuZFRpbWUiLCJ0YXJnZXRzIiwib24iLCJvbkVuYWJsZSIsIm9uRGlzYWJsZSIsIm9uRGVzdHJveSIsInRhcmdldCIsImlzRGVhdGgiLCJpbmRleE9mIiwicHVzaCIsImlkeCIsInNwbGljZSIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJpc092ZXIiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUEzQixFQUE4Qzs7O0FBQzlDQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNILGFBREo7QUFFTEksRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBRSxLQUREO0FBRVJDLElBQUFBLFNBQVMsRUFBRSxDQUZILENBRU07O0FBRk4sR0FGUDtBQU1MO0FBQ0E7QUFDQTtBQUNBQyxFQUFBQSxRQVRLLG9CQVNJQyxLQVRKLEVBU1c7QUFDWixRQUFJLEtBQUtILE9BQUwsSUFBZ0JHLEtBQXBCLEVBQTJCO0FBQ3ZCLFdBQUtILE9BQUwsR0FBZUcsS0FBZjtBQUNBLFVBQUlBLEtBQUosRUFDSSxLQUFLQyxJQUFMLENBQVVDLElBQVYsQ0FBZSxVQUFmLEVBQTJCQyxJQUFJLENBQUNDLFdBQUwsQ0FBaUJDLElBQTVDLEVBREosS0FHSSxLQUFLSixJQUFMLENBQVVDLElBQVYsQ0FBZSxRQUFmLEVBQXlCQyxJQUFJLENBQUNDLFdBQUwsQ0FBaUJDLElBQTFDO0FBQ1A7QUFDSixHQWpCSTtBQWtCTEMsRUFBQUEsTUFsQkssb0JBa0JJLENBQ1IsQ0FuQkk7QUFvQkxDLEVBQUFBLEtBQUssRUFBRSxpQkFBWTtBQUNmLFNBQUtOLElBQUwsQ0FBVU8sR0FBVixDQUFjLGtCQUFkLEVBQWtDLEtBQUtDLFdBQXZDLEVBQW9ELElBQXBEO0FBQ0EsU0FBS1IsSUFBTCxDQUFVTyxHQUFWLENBQWMsaUJBQWQsRUFBaUMsS0FBS0UsVUFBdEMsRUFBa0QsSUFBbEQ7QUFDSCxHQXZCSTtBQXdCTEMsRUFBQUEsS0FBSyxFQUFFLGVBQVVDLElBQVYsRUFBZ0I7QUFDbkIsU0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS2IsSUFBTCxDQUFVYyxFQUFWLENBQWEsa0JBQWIsRUFBaUMsS0FBS04sV0FBdEMsRUFBbUQsSUFBbkQ7QUFDQSxTQUFLUixJQUFMLENBQVVjLEVBQVYsQ0FBYSxpQkFBYixFQUFnQyxLQUFLTCxVQUFyQyxFQUFpRCxJQUFqRDtBQUNILEdBN0JJO0FBOEJMTSxFQUFBQSxRQTlCSyxzQkE4Qk0sQ0FDVixDQS9CSTtBQWdDTEMsRUFBQUEsU0FoQ0ssdUJBZ0NPLENBQ1gsQ0FqQ0k7QUFrQ0xDLEVBQUFBLFNBbENLLHVCQWtDTyxDQUNYLENBbkNJO0FBb0NMVCxFQUFBQSxXQXBDSyx1QkFvQ09VLE1BcENQLEVBb0NlO0FBQ2hCLFFBQUksS0FBS2xCLElBQUwsQ0FBVW1CLE9BQWQsRUFBdUI7QUFDdkIsUUFBSW5CLElBQUksR0FBR2tCLE1BQU0sQ0FBQ2xCLElBQWxCOztBQUNBLFFBQUksS0FBS2EsT0FBTCxDQUFhTyxPQUFiLENBQXFCcEIsSUFBckIsSUFBNkIsQ0FBakMsRUFBb0M7QUFDaEMsV0FBS2EsT0FBTCxDQUFhUSxJQUFiLENBQWtCckIsSUFBbEI7QUFDSDtBQUNKLEdBMUNJO0FBMkNMUyxFQUFBQSxVQTNDSyxzQkEyQ01TLE1BM0NOLEVBMkNjO0FBQ2YsUUFBSSxLQUFLbEIsSUFBTCxDQUFVbUIsT0FBZCxFQUF1QjtBQUN2QixRQUFJbkIsSUFBSSxHQUFHa0IsTUFBTSxDQUFDbEIsSUFBbEI7QUFDQSxRQUFJc0IsR0FBRyxHQUFHLEtBQUtULE9BQUwsQ0FBYU8sT0FBYixDQUFxQnBCLElBQXJCLENBQVY7O0FBQ0EsUUFBSXNCLEdBQUcsSUFBSSxDQUFYLEVBQWM7QUFDVixXQUFLVCxPQUFMLENBQWFVLE1BQWIsQ0FBb0JELEdBQXBCLEVBQXlCLENBQXpCO0FBQ0g7QUFDSixHQWxESTtBQW1ETEUsRUFBQUEsS0FuREssbUJBbURHLENBQ1AsQ0FwREk7QUFxRExDLEVBQUFBLE1BckRLLGtCQXFERUMsRUFyREYsRUFxRE07QUFDUCxRQUFJeEIsSUFBSSxDQUFDeUIsTUFBVCxFQUFpQixPQURWLENBQ2lCOztBQUN4QixRQUFJLEtBQUszQixJQUFMLENBQVVtQixPQUFkLEVBQXVCLE9BRmhCLENBRXdCOztBQUMvQixTQUFLUCxRQUFMLElBQWlCYyxFQUFqQjs7QUFDQSxRQUFJLEtBQUtiLE9BQUwsQ0FBYWUsTUFBYixHQUFzQixDQUExQixFQUE2QjtBQUFFO0FBQzNCLFdBQUs5QixRQUFMLENBQWMsS0FBZDs7QUFDQSxVQUFJLEtBQUtjLFFBQUwsR0FBZ0IsS0FBS2YsU0FBekIsRUFBb0M7QUFDcEM7QUFDSSxlQUFLZSxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsZUFBS1osSUFBTCxDQUFVQyxJQUFWLENBQWUsUUFBZjtBQUNIO0FBQ0osS0FQRCxNQVFLO0FBQ0QsV0FBS0gsUUFBTCxDQUFjLElBQWQsRUFEQyxDQUNtQjtBQUN2QjtBQUNKO0FBcEVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBQb29sQ29tcG9uZW50ID0gcmVxdWlyZShcIlBvb2xDb21wb25lbnRcIik7IC8v5rGg5a2Q57uE5Lu2XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IFBvb2xDb21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgX2lzTW92ZTogZmFsc2UsXHJcbiAgICAgICAgYXR0YWNrVG1lOiAxLCAvL+aUu+WHu+aXtumXtFxyXG4gICAgfSxcclxuICAgIC8vIGdldCBpc01vdmUoKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuX2lzTW92ZTtcclxuICAgIC8vIH0sXHJcbiAgICBlbWl0TW92ZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc01vdmUgIT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5faXNNb3ZlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwia2V5X2Rvd25cIiwgZ2FtZS5nYW1lQ29udHJvbC5sZWZ0KTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJrZXlfdXBcIiwgZ2FtZS5nYW1lQ29udHJvbC5sZWZ0KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfSxcclxuICAgIHVudXNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihcIm9uQ29sbGlzaW9uRW50ZXJcIiwgdGhpcy5vbkZpbmRFbnRlciwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihcIm9uQ29sbGlzaW9uRXhpdFwiLCB0aGlzLm9uRmluZEV4aXQsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIHJldXNlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc2VuZFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihcIm9uQ29sbGlzaW9uRW50ZXJcIiwgdGhpcy5vbkZpbmRFbnRlciwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKFwib25Db2xsaXNpb25FeGl0XCIsIHRoaXMub25GaW5kRXhpdCwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICB9LFxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgIH0sXHJcbiAgICBvbkZpbmRFbnRlcih0YXJnZXQpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLmlzRGVhdGgpIHJldHVybjtcclxuICAgICAgICB2YXIgbm9kZSA9IHRhcmdldC5ub2RlO1xyXG4gICAgICAgIGlmICh0aGlzLnRhcmdldHMuaW5kZXhPZihub2RlKSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRmluZEV4aXQodGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5pc0RlYXRoKSByZXR1cm47XHJcbiAgICAgICAgdmFyIG5vZGUgPSB0YXJnZXQubm9kZTtcclxuICAgICAgICB2YXIgaWR4ID0gdGhpcy50YXJnZXRzLmluZGV4T2Yobm9kZSlcclxuICAgICAgICBpZiAoaWR4ID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAoZ2FtZS5pc092ZXIpIHJldHVybjsvL+a4uOaIj+e7k+adn1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuaXNEZWF0aCkgcmV0dXJuOyAvL+inkuiJsuatu+S6oVxyXG4gICAgICAgIHRoaXMuc2VuZFRpbWUgKz0gZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0cy5sZW5ndGggPiAwKSB7IC8v5pyJ55uu5qCHXHJcbiAgICAgICAgICAgIHRoaXMuZW1pdE1vdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZW5kVGltZSA+IHRoaXMuYXR0YWNrVG1lKSAvL+aUu+WHu+aXtumXtOWIsOS6hlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRUaW1lID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KFwiYXR0YWNrXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXRNb3ZlKHRydWUpOy8vPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=