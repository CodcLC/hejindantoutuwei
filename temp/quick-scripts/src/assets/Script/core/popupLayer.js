"use strict";
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