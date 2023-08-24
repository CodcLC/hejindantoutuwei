
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/core/popupLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2bf9bfAF6lNK5upLcU2ud1h', 'popupLayer');
// Script/core/popupLayer.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    resLoader: cc.Node,
    //资源加载菊花圈
    bg: cc.Node
  },
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {
    //this.prefabs = game.gamePopup;
    this.popopNodes = {};
    this.loadingList = [];
    this.childList = []; //添加的子节点列表

    game.on(game.gameEvent.popup_prefab, this.popup_prefab, this);
    game.on(game.gameEvent.closed_prefab, this.closed_prefab, this);
    this.autoRes();
  },
  closed_prefab: function closed_prefab(node) {
    var self = this;
    var poolComponents = node.getComponentsInChildren("PoolComponent");

    for (var i in poolComponents) {
      var poolComponent = poolComponents[i];
      poolComponent.unuse(); //启用
    } // this.showNodes(node, false, function () {
    //     this.parent = null;
    //     var idx = self.childList.indexOf(this);
    //     if (idx >= 0) {
    //         self.childList.splice(idx, 1);
    //     }
    //     self.autoRes();
    // }.bind(node));


    node.parent = null;
    var idx = self.childList.indexOf(node);

    if (idx >= 0) {
      self.childList.splice(idx, 1);
    }

    self.autoRes();
  },
  showNodes: function showNodes(node, isPopup, cb) {
    if (node == null) {
      return;
    }

    if (isPopup == true) {
      node.opacity = 0;
      node.setScale(0.1);
      var fadeIn = cc.fadeIn(0.2);
      var scaleTo = cc.scaleTo(0.2, 1);
      cc.tween(node).then(fadeIn).then(scaleTo).call(function () {
        if (cb) cb();
      }.bind(node)).start();
    } else {
      node.opacity = 1;
      node.setScale(1);
      var fadeOut = cc.fadeOut(0.2);

      var _scaleTo = cc.scaleTo(0.2, 0.1);

      cc.tween(node).then(fadeOut).then(_scaleTo).call(function () {
        if (cb) cb();
      }.bind(node)).start();
    }
  },
  popup_prefab: function popup_prefab(data, msg) {
    // let date = this.prefabs[name];
    // if (!date) {
    //     console.log("\" %s \"弹窗模块未注册", name);
    //     alert("\" %s \"弹窗模块未注册", name);
    //     return;
    // }
    this.loadPrefab(data.url, function (err, node) {
      if (!err) {
        var idx = this.childList.indexOf(node);

        if (idx >= 0) {
          this.childList.splice(idx, 1);
        }

        this.childList.push(node);

        if (!node.parent) {
          this.node.addChild(node);
        } else {
          node.parent = this.node;
        }

        node.x = node.y = 0;
        cc.log(node.x, node.y);
        var poolComponents = node.getComponentsInChildren("PoolComponent");

        for (var i in poolComponents) {
          var poolComponent = poolComponents[i];
          poolComponent.reuse(msg); //启用

          poolComponent.onComplete(); //启用
        } // var self = this;
        // this.showNodes(node, true, function () {
        //     let poolComponents = this.getComponentsInChildren("PoolComponent");
        //     for (let i in poolComponents) {
        //         let poolComponent = poolComponents[i];
        //         poolComponent.onComplete(); //启用
        //     }
        //     self.autoRes();
        // }.bind(node));

      }

      this.autoRes();
    }.bind(this));
    this.autoRes();
  },

  /*******
   * 加载预制体
   * *****/
  loadPrefab: function loadPrefab(url, cb) {
    if (this.popopNodes[url]) {
      cb(null, this.popopNodes[url]);
      return;
    }

    var opts = {
      url: url,
      cb: cb
    };
    var self = this;

    if (this.loadingList.indexOf(url) >= 0) {
      this.node.once(url, function (err, node) {
        this.cb(err, node);
      }.bind(opts));
      return;
    }

    if (this.loadingList.indexOf(url) < 0) {
      this.loadingList.push(url);
    }

    cc.loader.loadRes(url, cc.Prefab, function (err, prefab) {
      var node;

      if (!err) {
        node = cc.instantiate(prefab);
        self.popopNodes[this.url] = node;
      }

      var idx = self.loadingList.indexOf(this.url);

      if (idx >= 0) {
        self.loadingList.splice(idx, 1);
      }

      this.cb(err, node);
      self.node.emit(this.url, err, node);
    }.bind(opts));
  },
  autoRes: function autoRes() {
    for (var i = 0; i < this.childList.length; i++) {
      var node = this.childList[i];

      if (i == this.childList.length - 1) {
        this.bg.zIndex = i;
        node.zIndex = i + 1;
      } else {
        node.zIndex = i;
      }
    }

    var count = this.node.childrenCount;
    var len = this.loadingList.length;

    if (len > 0 || count > 1) {
      this.node.active = true;
    } else {
      this.node.active = false;
    }

    if (len > 0) {
      this.resLoader.active = true;
    } else {
      this.resLoader.active = false;
    }
  },
  onClick: function onClick(e) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb3JlXFxwb3B1cExheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVzTG9hZGVyIiwiTm9kZSIsImJnIiwib25EZXN0cm95Iiwib25Mb2FkIiwicG9wb3BOb2RlcyIsImxvYWRpbmdMaXN0IiwiY2hpbGRMaXN0IiwiZ2FtZSIsIm9uIiwiZ2FtZUV2ZW50IiwicG9wdXBfcHJlZmFiIiwiY2xvc2VkX3ByZWZhYiIsImF1dG9SZXMiLCJub2RlIiwic2VsZiIsInBvb2xDb21wb25lbnRzIiwiZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4iLCJpIiwicG9vbENvbXBvbmVudCIsInVudXNlIiwicGFyZW50IiwiaWR4IiwiaW5kZXhPZiIsInNwbGljZSIsInNob3dOb2RlcyIsImlzUG9wdXAiLCJjYiIsIm9wYWNpdHkiLCJzZXRTY2FsZSIsImZhZGVJbiIsInNjYWxlVG8iLCJ0d2VlbiIsInRoZW4iLCJjYWxsIiwiYmluZCIsInN0YXJ0IiwiZmFkZU91dCIsImRhdGEiLCJtc2ciLCJsb2FkUHJlZmFiIiwidXJsIiwiZXJyIiwicHVzaCIsImFkZENoaWxkIiwieCIsInkiLCJsb2ciLCJyZXVzZSIsIm9uQ29tcGxldGUiLCJvcHRzIiwib25jZSIsImxvYWRlciIsImxvYWRSZXMiLCJQcmVmYWIiLCJwcmVmYWIiLCJpbnN0YW50aWF0ZSIsImVtaXQiLCJsZW5ndGgiLCJ6SW5kZXgiLCJjb3VudCIsImNoaWxkcmVuQ291bnQiLCJsZW4iLCJhY3RpdmUiLCJvbkNsaWNrIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBRUosRUFBRSxDQUFDSyxJQUROO0FBQ1c7QUFDbkJDLElBQUFBLEVBQUUsRUFBRU4s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LENBQWVtRCxNQUFmLEdBQXdCLENBQWxDLEVBQXNDO0FBQ2xDLGFBQUt4RCxFQUFMLENBQVF5RCxNQUFSLEdBQWlCekMsQ0FBakI7QUFDQUosUUFBQUEsSUFBSSxDQUFDNkMsTUFBTCxHQUFjekMsQ0FBQyxHQUFHLENBQWxCO0FBQ0gsT0FIRCxNQUlLO0FBQ0RKLFFBQUFBLElBQUksQ0FBQzZDLE1BQUwsR0FBY3pDLENBQWQ7QUFDSDtBQUNKOztBQUNELFFBQUkwQyxLQUFLLEdBQUcsS0FBSzlDLElBQUwsQ0FBVStDLGFBQXRCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHLEtBQUt4RCxXQUFMLENBQWlCb0QsTUFBM0I7O0FBQ0EsUUFBSUksR0FBRyxHQUFHLENBQU4sSUFBV0YsS0FBSyxHQUFHLENBQXZCLEVBQTBCO0FBQ3RCLFdBQUs5QyxJQUFMLENBQVVpRCxNQUFWLEdBQW1CLElBQW5CO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsV0FBS2pELElBQUwsQ0FBVWlELE1BQVYsR0FBbUIsS0FBbkI7QUFDSDs7QUFDRCxRQUFJRCxHQUFHLEdBQUcsQ0FBVixFQUFhO0FBQ1QsV0FBSzlELFNBQUwsQ0FBZStELE1BQWYsR0FBd0IsSUFBeEI7QUFDSCxLQUZELE1BR0s7QUFDRCxXQUFLL0QsU0FBTCxDQUFlK0QsTUFBZixHQUF3QixLQUF4QjtBQUNIO0FBQ0osR0FyS0k7QUFzS0xDLEVBQUFBLE9BdEtLLG1CQXNLR0MsQ0F0S0gsRUFzS00sQ0FDVjtBQXZLSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcmVzTG9hZGVyOiBjYy5Ob2RlLC8v6LWE5rqQ5Yqg6L296I+K6Iqx5ZyIXHJcbiAgICAgICAgYmc6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvL3RoaXMucHJlZmFicyA9IGdhbWUuZ2FtZVBvcHVwO1xyXG4gICAgICAgIHRoaXMucG9wb3BOb2RlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0xpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmNoaWxkTGlzdCA9IFtdOyAvL+a3u+WKoOeahOWtkOiKgueCueWIl+ihqFxyXG4gICAgICAgIGdhbWUub24oZ2FtZS5nYW1lRXZlbnQucG9wdXBfcHJlZmFiLCB0aGlzLnBvcHVwX3ByZWZhYiwgdGhpcyk7XHJcbiAgICAgICAgZ2FtZS5vbihnYW1lLmdhbWVFdmVudC5jbG9zZWRfcHJlZmFiLCB0aGlzLmNsb3NlZF9wcmVmYWIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYXV0b1JlcygpO1xyXG4gICAgfSxcclxuICAgIGNsb3NlZF9wcmVmYWIobm9kZSkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgcG9vbENvbXBvbmVudHMgPSBub2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKFwiUG9vbENvbXBvbmVudFwiKTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHBvb2xDb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgIGxldCBwb29sQ29tcG9uZW50ID0gcG9vbENvbXBvbmVudHNbaV07XHJcbiAgICAgICAgICAgIHBvb2xDb21wb25lbnQudW51c2UoKTsgLy/lkK/nlKhcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5zaG93Tm9kZXMobm9kZSwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIC8vICAgICB2YXIgaWR4ID0gc2VsZi5jaGlsZExpc3QuaW5kZXhPZih0aGlzKTtcclxuICAgICAgICAvLyAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBzZWxmLmNoaWxkTGlzdC5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBzZWxmLmF1dG9SZXMoKTtcclxuICAgICAgICAvLyB9LmJpbmQobm9kZSkpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gbnVsbDtcclxuICAgICAgICBsZXQgaWR4ID0gc2VsZi5jaGlsZExpc3QuaW5kZXhPZihub2RlKTtcclxuICAgICAgICBpZiAoaWR4ID49IDApIHtcclxuICAgICAgICAgICAgc2VsZi5jaGlsZExpc3Quc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYuYXV0b1JlcygpO1xyXG4gICAgfSxcclxuICAgIHNob3dOb2Rlcyhub2RlLCBpc1BvcHVwLCBjYikge1xyXG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1BvcHVwID09IHRydWUpIHtcclxuICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgbm9kZS5zZXRTY2FsZSgwLjEpO1xyXG4gICAgICAgICAgICBsZXQgZmFkZUluID0gY2MuZmFkZUluKDAuMik7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZVRvID0gY2Muc2NhbGVUbygwLjIsIDEpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbihub2RlKS50aGVuKGZhZGVJbikudGhlbihzY2FsZVRvKS5jYWxsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYikgY2IoKTtcclxuICAgICAgICAgICAgfS5iaW5kKG5vZGUpKS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgbm9kZS5zZXRTY2FsZSgxKTtcclxuICAgICAgICAgICAgbGV0IGZhZGVPdXQgPSBjYy5mYWRlT3V0KDAuMik7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZVRvID0gY2Muc2NhbGVUbygwLjIsIDAuMSk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpLnRoZW4oZmFkZU91dCkudGhlbihzY2FsZVRvKS5jYWxsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYikgY2IoKTtcclxuICAgICAgICAgICAgfS5iaW5kKG5vZGUpKS5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwb3B1cF9wcmVmYWIoZGF0YSwgbXNnKSB7XHJcbiAgICAgICAgLy8gbGV0IGRhdGUgPSB0aGlzLnByZWZhYnNbbmFtZV07XHJcbiAgICAgICAgLy8gaWYgKCFkYXRlKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiXFxcIiAlcyBcXFwi5by556qX5qih5Z2X5pyq5rOo5YaMXCIsIG5hbWUpO1xyXG4gICAgICAgIC8vICAgICBhbGVydChcIlxcXCIgJXMgXFxcIuW8ueeql+aooeWdl+acquazqOWGjFwiLCBuYW1lKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmxvYWRQcmVmYWIoZGF0YS51cmwsIGZ1bmN0aW9uIChlcnIsIG5vZGUpIHtcclxuICAgICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLmNoaWxkTGlzdC5pbmRleE9mKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZExpc3Quc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbm9kZS54ID0gbm9kZS55ID0gMDtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhub2RlLngsIG5vZGUueSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9vbENvbXBvbmVudHMgPSBub2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKFwiUG9vbENvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gcG9vbENvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9vbENvbXBvbmVudCA9IHBvb2xDb21wb25lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvb2xDb21wb25lbnQucmV1c2UobXNnKTsgLy/lkK/nlKhcclxuICAgICAgICAgICAgICAgICAgICBwb29sQ29tcG9uZW50Lm9uQ29tcGxldGUoKTsgLy/lkK/nlKhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2hvd05vZGVzKG5vZGUsIHRydWUsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgcG9vbENvbXBvbmVudHMgPSB0aGlzLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKFwiUG9vbENvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBmb3IgKGxldCBpIGluIHBvb2xDb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCBwb29sQ29tcG9uZW50ID0gcG9vbENvbXBvbmVudHNbaV07XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHBvb2xDb21wb25lbnQub25Db21wbGV0ZSgpOyAvL+WQr+eUqFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgICBzZWxmLmF1dG9SZXMoKTtcclxuICAgICAgICAgICAgICAgIC8vIH0uYmluZChub2RlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hdXRvUmVzKCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmF1dG9SZXMoKTtcclxuICAgIH0sXHJcbiAgICAvKioqKioqKlxyXG4gICAgICog5Yqg6L296aKE5Yi25L2TXHJcbiAgICAgKiAqKioqKi9cclxuICAgIGxvYWRQcmVmYWI6IGZ1bmN0aW9uICh1cmwsIGNiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9wb3BOb2Rlc1t1cmxdKSB7XHJcbiAgICAgICAgICAgIGNiKG51bGwsIHRoaXMucG9wb3BOb2Rlc1t1cmxdKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb3B0cyA9IHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGNiOiBjYlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmdMaXN0LmluZGV4T2YodXJsKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5vbmNlKHVybCwgZnVuY3Rpb24gKGVyciwgbm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYihlcnIsIG5vZGUpO1xyXG4gICAgICAgICAgICB9LmJpbmQob3B0cykpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmdMaXN0LmluZGV4T2YodXJsKSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nTGlzdC5wdXNoKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHVybCwgY2MuUHJlZmFiLCBmdW5jdGlvbiAoZXJyLCBwcmVmYWIpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGVcclxuICAgICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5wb3BvcE5vZGVzW3RoaXMudXJsXSA9IG5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGlkeCA9IHNlbGYubG9hZGluZ0xpc3QuaW5kZXhPZih0aGlzLnVybCk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5sb2FkaW5nTGlzdC5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNiKGVyciwgbm9kZSk7XHJcbiAgICAgICAgICAgIHNlbGYubm9kZS5lbWl0KHRoaXMudXJsLCBlcnIsIG5vZGUpO1xyXG4gICAgICAgIH0uYmluZChvcHRzKSk7XHJcbiAgICB9LFxyXG4gICAgYXV0b1JlcygpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy5jaGlsZExpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChpID09ICh0aGlzLmNoaWxkTGlzdC5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZy56SW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS56SW5kZXggPSBpICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vZGUuekluZGV4ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY291bnQgPSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudDtcclxuICAgICAgICB2YXIgbGVuID0gdGhpcy5sb2FkaW5nTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGxlbiA+IDAgfHwgY291bnQgPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVuID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc0xvYWRlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNMb2FkZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQ2xpY2soZSkge1xyXG4gICAgfVxyXG59KVxyXG4iXX0=