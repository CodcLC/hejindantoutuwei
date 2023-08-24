"use strict";
cc._RF.push(module, 'df2ebmX2N5Mw6e6KJNOa/hW', 'gameGuanka');
// Script/scene/gameGuanka.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    scrollView: cc.ScrollView,
    jiaose: cc.Node,
    zhangLabel: cc.Label,
    shangBtn: cc.Button,
    xiaBtn: cc.Button
  },
  onDestroy: function onDestroy() {},
  onLoad: function onLoad() {
    var list = game.localStorage.getItem("guanka-data");

    if (!list) {
      list = [];
      game.localStorage.setItem("guanka-data", list);
    }

    list = [{
      num: 101,
      state: 3
    }, {
      num: 102,
      state: 2
    }, {
      num: 103,
      state: 2
    }, {
      num: 104,
      state: 1
    }];
    game.curNum = game.localStorage.getItem("guanka-curGuan") || 105;
    game.curZhang = parseInt(game.curNum / 100);
    game.curGuan = game.curNum % 100;
    var guankazhangs = this.getComponentsInChildren("guankazhang");
    guankazhangs.sort(function (a, b) {
      return a.num - b.num;
    });
    this.zhangNodeList = guankazhangs;
    this.curIndex = 0;

    for (var i = 0; i < guankazhangs.length; i++) {
      var zhang = guankazhangs[i];

      if (game.curZhang == zhang.num) {
        zhang.node.active = true;
        this.jiaose.parent = zhang.node;
        this.curIndex = i;
        this.scrollView.content = zhang.node;
      } else {
        zhang.node.active = false;
      }
    }

    game.localStorage.setItem("guanka-curNum", game.curNum);
    var items = this.getComponentsInChildren("guanItem");
    items.sort(function (a, b) {
      return a.num - b.num;
    });

    for (var _i = 0; _i < items.length; _i++) {
      var item = items[_i];
      item.setInfo(list[_i]);

      if (item.num == game.curNum) {
        this.jiaose.x = item.node.x;
        this.jiaose.y = item.node.y + 50;
      }
    }

    this.updateBtnState();
  },
  updateBtnState: function updateBtnState() {
    this.zhangLabel.string = "第" + (this.curIndex + 1) + "章";

    if (this.curIndex == 0 || this.zhangNodeList.length < 2) {
      this.shangBtn.interactable = false;
    } else {
      this.shangBtn.interactable = true;
    }

    if (this.curIndex >= this.zhangNodeList.length - 1) {
      this.xiaBtn.interactable = false;
    } else {
      this.xiaBtn.interactable = true;
    }
  },
  updataMap: function updataMap() {
    for (var i = 0; i < this.zhangNodeList.length; i++) {
      var zhang = this.zhangNodeList[i];

      if (i == this.curIndex) {
        zhang.node.active = true;
        this.curIndex = i;
        this.scrollView.content = zhang.node;
      } else {
        zhang.node.active = false;
      }
    }
  },
  onShang: function onShang() {
    var a = this.curIndex - 1;
    if (a < 0) return;
    this.curIndex = a;
    this.updataMap();
    this.updateBtnState();
  },
  onXia: function onXia() {
    var a = this.curIndex + 1;
    if (a >= this.zhangNodeList.length) return;
    this.curIndex = a;
    this.updataMap();
    this.updateBtnState();
  }
});

cc._RF.pop();