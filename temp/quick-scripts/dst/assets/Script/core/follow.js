
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/core/follow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3b98skOxJLhZAeNYmwoUq4', 'follow');
// Script/core/follow.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    target: {
      "default": null,
      type: cc.Node
    },
    map: cc.Node
  },
  // use this for initialization
  onLoad: function onLoad() {
    if (!this.target || !this.map) {
      return;
    }

    var widget = this.node.getComponent(cc.Widget);

    if (widget) {
      widget.updateAlignment();
    }

    this.mapRect = this.map.getBoundingBox();
    this.minX = 0;
    this.maxX = this.mapRect.width - cc.winSize.width;
    this.minY = 0;
    this.maxY = this.mapRect.height - cc.winSize.height;
    game.mapRect = this.mapRect;
  },
  // called every frame, uncomment this function to activate update callback
  lateUpdate: function lateUpdate(dt) {
    if (!this.target) {
      return;
    }

    var targetPos = this.target.convertToWorldSpaceAR(cc.Vec2.ZERO);
    var nodepos = this.node.parent.convertToNodeSpaceAR(targetPos);
    if (nodepos.x < this.minX) nodepos.x = this.minX;else if (nodepos.x > this.maxX) nodepos.x = this.maxX;
    if (nodepos.y < this.minY) nodepos.y = this.minY;else if (nodepos.y > this.maxY) nodepos.y = this.maxY;
    this.node.position = nodepos; // let ratio = targetPos.y / cc.winSize.height;
    // this.camera.zoomRatio = 1 + (0.5 - ratio) * 0.5;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb3JlXFxmb2xsb3cuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0YXJnZXQiLCJ0eXBlIiwiTm9kZSIsIm1hcCIsIm9uTG9hZCIsIndpZGdldCIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJXaWRnZXQiLCJ1cGRhdGVBbGlnbm1lbnQiLCJtYXBSZWN0IiwiZ2V0Qm91bmRpbmdCb3giLCJtaW5YIiwibWF4WCIsIndpZHRoIiwid2luU2l6ZSIsIm1pblkiLCJtYXhZIiwiaGVpZ2h0IiwiZ2FtZSIsImxhdGVVcGRhdGUiLCJkdCIsInRhcmdldFBvcyIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsIlZlYzIiLCJaRVJPIiwibm9kZXBvcyIsInBhcmVudCIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwieCIsInkiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkwsS0FEQTtBQUtSQyxJQUFBQSxHQUFHLEVBQUVQLEVBQUUsQ0FBQ007QUFMQSxHQUZQO0FBU0w7QUFDQUUsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFFBQUksQ0FBQyxLQUFLSixNQUFOLElBQWdCLENBQUMsS0FBS0csR0FBMUIsRUFBK0I7QUFDM0I7QUFDSDs7QUFDRCxRQUFJRSxNQUFNLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCWCxFQUFFLENBQUNZLE1BQTFCLENBQWI7O0FBQ0EsUUFBSUgsTUFBSixFQUFZO0FBQ1JBLE1BQUFBLE1BQU0sQ0FBQ0ksZUFBUDtBQUNIOztBQUNELFNBQUtDLE9BQUwsR0FBZSxLQUFLUCxHQUFMLENBQVNRLGNBQVQsRUFBZjtBQUNBLFNBQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQUtILE9BQUwsQ0FBYUksS0FBYixHQUFxQmxCLEVBQUUsQ0FBQ21CLE9BQUgsQ0FBV0QsS0FBNUM7QUFDQSxTQUFLRSxJQUFMLEdBQVksQ0FBWjtBQUNBLFNBQUtDLElBQUwsR0FBWSxLQUFLUCxPQUFMLENBQWFRLE1BQWIsR0FBc0J0QixFQUFFLENBQUNtQixPQUFILENBQVdHLE1BQTdDO0FBRUFDLElBQUFBLElBQUksQ0FBQ1QsT0FBTCxHQUFhLEtBQUtBLE9BQWxCO0FBQ0gsR0F6Qkk7QUEwQkw7QUFDQVUsRUFBQUEsVUFBVSxFQUFFLG9CQUFVQyxFQUFWLEVBQWM7QUFDdEIsUUFBSSxDQUFDLEtBQUtyQixNQUFWLEVBQWtCO0FBQ2Q7QUFDSDs7QUFDRCxRQUFJc0IsU0FBUyxHQUFHLEtBQUt0QixNQUFMLENBQVl1QixxQkFBWixDQUFrQzNCLEVBQUUsQ0FBQzRCLElBQUgsQ0FBUUMsSUFBMUMsQ0FBaEI7QUFDQSxRQUFJQyxPQUFPLEdBQUcsS0FBS3BCLElBQUwsQ0FBVXFCLE1BQVYsQ0FBaUJDLG9CQUFqQixDQUFzQ04sU0FBdEMsQ0FBZDtBQUNBLFFBQUlJLE9BQU8sQ0FBQ0csQ0FBUixHQUFZLEtBQUtqQixJQUFyQixFQUEyQmMsT0FBTyxDQUFDRyxDQUFSLEdBQVksS0FBS2pCLElBQWpCLENBQTNCLEtBQ0ssSUFBSWMsT0FBTyxDQUFDRyxDQUFSLEdBQVksS0FBS2hCLElBQXJCLEVBQTJCYSxPQUFPLENBQUNHLENBQVIsR0FBWSxLQUFLaEIsSUFBakI7QUFDaEMsUUFBSWEsT0FBTyxDQUFDSSxDQUFSLEdBQVksS0FBS2QsSUFBckIsRUFBMkJVLE9BQU8sQ0FBQ0ksQ0FBUixHQUFZLEtBQUtkLElBQWpCLENBQTNCLEtBQ0ssSUFBSVUsT0FBTyxDQUFDSSxDQUFSLEdBQVksS0FBS2IsSUFBckIsRUFBMkJTLE9BQU8sQ0FBQ0ksQ0FBUixHQUFZLEtBQUtiLElBQWpCO0FBQ2hDLFNBQUtYLElBQUwsQ0FBVXlCLFFBQVYsR0FBcUJMLE9BQXJCLENBVnNCLENBV3RCO0FBQ0E7QUFDSDtBQXhDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBtYXA6IGNjLk5vZGVcbiAgICB9LFxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0IHx8ICF0aGlzLm1hcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3aWRnZXQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk7XG4gICAgICAgIGlmICh3aWRnZXQpIHtcbiAgICAgICAgICAgIHdpZGdldC51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1hcFJlY3QgPSB0aGlzLm1hcC5nZXRCb3VuZGluZ0JveCgpO1xuICAgICAgICB0aGlzLm1pblggPSAwO1xuICAgICAgICB0aGlzLm1heFggPSB0aGlzLm1hcFJlY3Qud2lkdGggLSBjYy53aW5TaXplLndpZHRoO1xuICAgICAgICB0aGlzLm1pblkgPSAwO1xuICAgICAgICB0aGlzLm1heFkgPSB0aGlzLm1hcFJlY3QuaGVpZ2h0IC0gY2Mud2luU2l6ZS5oZWlnaHQ7XG5cbiAgICAgICAgZ2FtZS5tYXBSZWN0PXRoaXMubWFwUmVjdDtcbiAgICB9LFxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgbGF0ZVVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIGlmICghdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGFyZ2V0UG9zID0gdGhpcy50YXJnZXQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyk7XG4gICAgICAgIGxldCBub2RlcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0YXJnZXRQb3MpO1xuICAgICAgICBpZiAobm9kZXBvcy54IDwgdGhpcy5taW5YKSBub2RlcG9zLnggPSB0aGlzLm1pblg7XG4gICAgICAgIGVsc2UgaWYgKG5vZGVwb3MueCA+IHRoaXMubWF4WCkgbm9kZXBvcy54ID0gdGhpcy5tYXhYO1xuICAgICAgICBpZiAobm9kZXBvcy55IDwgdGhpcy5taW5ZKSBub2RlcG9zLnkgPSB0aGlzLm1pblk7XG4gICAgICAgIGVsc2UgaWYgKG5vZGVwb3MueSA+IHRoaXMubWF4WSkgbm9kZXBvcy55ID0gdGhpcy5tYXhZO1xuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBub2RlcG9zO1xuICAgICAgICAvLyBsZXQgcmF0aW8gPSB0YXJnZXRQb3MueSAvIGNjLndpblNpemUuaGVpZ2h0O1xuICAgICAgICAvLyB0aGlzLmNhbWVyYS56b29tUmF0aW8gPSAxICsgKDAuNSAtIHJhdGlvKSAqIDAuNTtcbiAgICB9LFxufSk7XG4iXX0=