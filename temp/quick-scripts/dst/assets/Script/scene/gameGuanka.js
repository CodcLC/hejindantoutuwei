
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scene/gameGuanka.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuZVxcZ2FtZUd1YW5rYS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNjcm9sbFZpZXciLCJTY3JvbGxWaWV3Iiwiamlhb3NlIiwiTm9kZSIsInpoYW5nTGFiZWwiLCJMYWJlbCIsInNoYW5nQnRuIiwiQnV0dG9uIiwieGlhQnRuIiwib25EZXN0cm95Iiwib25Mb2FkIiwibGlzdCIsImdhbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsIm51bSIsInN0YXRlIiwiY3VyTnVtIiwiY3VyWmhhbmciLCJwYXJzZUludCIsImN1ckd1YW4iLCJndWFua2F6aGFuZ3MiLCJnZXRDb21wb25lbnRzSW5DaGlsZHJlbiIsInNvcnQiLCJhIiwiYiIsInpoYW5nTm9kZUxpc3QiLCJjdXJJbmRleCIsImkiLCJsZW5ndGgiLCJ6aGFuZyIsIm5vZGUiLCJhY3RpdmUiLCJwYXJlbnQiLCJjb250ZW50IiwiaXRlbXMiLCJpdGVtIiwic2V0SW5mbyIsIngiLCJ5IiwidXBkYXRlQnRuU3RhdGUiLCJzdHJpbmciLCJpbnRlcmFjdGFibGUiLCJ1cGRhdGFNYXAiLCJvblNoYW5nIiwib25YaWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUVKLEVBQUUsQ0FBQ0ssVUFEUDtBQUVSQyxJQUFBQSxNQUFNLEVBQUVOLEVBQUUsQ0FBQ08sSUFGSDtBQUdSQyxJQUFBQSxVQUFVLEVBQUVSLEVBQUUsQ0FBQ1MsS0FIUDtBQUlSQyxJQUFBQSxRQUFRLEVBQUVWLEVBQUUsQ0FBQ1csTUFKTDtBQUtSQyxJQUFBQSxNQUFNLEVBQUVaLEVBQUUsQ0FBQ1c7QUFMSCxHQUZQO0FBU0xFLEVBQUFBLFNBVEssdUJBU08s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LEVBQW9EO0FBQ2hELFVBQUlFLEtBQUssR0FBRyxLQUFLSixhQUFMLENBQW1CRSxDQUFuQixDQUFaOztBQUNBLFVBQUlBLENBQUMsSUFBSSxLQUFLRCxRQUFkLEVBQXdCO0FBQ3BCRyxRQUFBQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsTUFBWCxHQUFvQixJQUFwQjtBQUNBLGFBQUtMLFFBQUwsR0FBZ0JDLENBQWhCO0FBQ0EsYUFBSzdCLFVBQUwsQ0FBZ0JtQyxPQUFoQixHQUEwQkosS0FBSyxDQUFDQyxJQUFoQztBQUNILE9BSkQsTUFLSztBQUNERCxRQUFBQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsTUFBWCxHQUFvQixLQUFwQjtBQUNIO0FBQ0o7QUFDSixHQXRGSTtBQXVGTFksRUFBQUEsT0F2RksscUJBdUZLO0FBQ04sUUFBSXBCLENBQUMsR0FBRyxLQUFLRyxRQUFMLEdBQWdCLENBQXhCO0FBQ0EsUUFBSUgsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNYLFNBQUtHLFFBQUwsR0FBZ0JILENBQWhCO0FBQ0EsU0FBS21CLFNBQUw7QUFDQSxTQUFLSCxjQUFMO0FBQ0gsR0E3Rkk7QUE4RkxLLEVBQUFBLEtBOUZLLG1CQThGRztBQUNKLFFBQUlyQixDQUFDLEdBQUcsS0FBS0csUUFBTCxHQUFnQixDQUF4QjtBQUNBLFFBQUlILENBQUMsSUFBSSxLQUFLRSxhQUFMLENBQW1CRyxNQUE1QixFQUFvQztBQUNwQyxTQUFLRixRQUFMLEdBQWdCSCxDQUFoQjtBQUNBLFNBQUttQixTQUFMO0FBQ0EsU0FBS0gsY0FBTDtBQUNIO0FBcEdJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzY3JvbGxWaWV3OiBjYy5TY3JvbGxWaWV3LFxyXG4gICAgICAgIGppYW9zZTogY2MuTm9kZSxcclxuICAgICAgICB6aGFuZ0xhYmVsOiBjYy5MYWJlbCxcclxuICAgICAgICBzaGFuZ0J0bjogY2MuQnV0dG9uLFxyXG4gICAgICAgIHhpYUJ0bjogY2MuQnV0dG9uLFxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSBnYW1lLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3VhbmthLWRhdGFcIik7XHJcbiAgICAgICAgaWYgKCFsaXN0KSB7XHJcbiAgICAgICAgICAgIGxpc3QgPSBbXTtcclxuICAgICAgICAgICAgZ2FtZS5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1YW5rYS1kYXRhXCIsIGxpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaXN0ID0gW1xyXG4gICAgICAgICAgICB7bnVtOiAxMDEsIHN0YXRlOiAzfSxcclxuICAgICAgICAgICAge251bTogMTAyLCBzdGF0ZTogMn0sXHJcbiAgICAgICAgICAgIHtudW06IDEwMywgc3RhdGU6IDJ9LFxyXG4gICAgICAgICAgICB7bnVtOiAxMDQsIHN0YXRlOiAxfVxyXG4gICAgICAgIF1cclxuICAgICAgICBnYW1lLmN1ck51bSA9IGdhbWUubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJndWFua2EtY3VyR3VhblwiKSB8fCAxMDU7XHJcbiAgICAgICAgZ2FtZS5jdXJaaGFuZyA9IHBhcnNlSW50KGdhbWUuY3VyTnVtIC8gMTAwKTtcclxuICAgICAgICBnYW1lLmN1ckd1YW4gPSBnYW1lLmN1ck51bSAlIDEwMDtcclxuICAgICAgICBsZXQgZ3VhbmthemhhbmdzID0gdGhpcy5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihcImd1YW5rYXpoYW5nXCIpO1xyXG4gICAgICAgIGd1YW5rYXpoYW5ncy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLm51bSAtIGIubnVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuemhhbmdOb2RlTGlzdCA9IGd1YW5rYXpoYW5ncztcclxuICAgICAgICB0aGlzLmN1ckluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGd1YW5rYXpoYW5ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgemhhbmcgPSBndWFua2F6aGFuZ3NbaV07XHJcbiAgICAgICAgICAgIGlmIChnYW1lLmN1clpoYW5nID09IHpoYW5nLm51bSkge1xyXG4gICAgICAgICAgICAgICAgemhhbmcubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qaWFvc2UucGFyZW50ID0gemhhbmcubm9kZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VySW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQgPSB6aGFuZy5ub2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgemhhbmcubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBnYW1lLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VhbmthLWN1ck51bVwiLCBnYW1lLmN1ck51bSk7XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihcImd1YW5JdGVtXCIpO1xyXG4gICAgICAgIGl0ZW1zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEubnVtIC0gYi5udW07XHJcbiAgICAgICAgfSlcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gaXRlbXNbaV07XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0SW5mbyhsaXN0W2ldKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ubnVtID09IGdhbWUuY3VyTnVtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmppYW9zZS54ID0gaXRlbS5ub2RlLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmppYW9zZS55ID0gaXRlbS5ub2RlLnkgKyA1MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUJ0blN0YXRlKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlQnRuU3RhdGUoKSB7XHJcbiAgICAgICAgdGhpcy56aGFuZ0xhYmVsLnN0cmluZyA9IFwi56ysXCIgKyAodGhpcy5jdXJJbmRleCArIDEpICsgXCLnq6BcIjtcclxuICAgICAgICBpZiAodGhpcy5jdXJJbmRleCA9PSAwIHx8IHRoaXMuemhhbmdOb2RlTGlzdC5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhbmdCdG4uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNoYW5nQnRuLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmN1ckluZGV4ID49ICh0aGlzLnpoYW5nTm9kZUxpc3QubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgICAgdGhpcy54aWFCdG4uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnhpYUJ0bi5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGFNYXAoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnpoYW5nTm9kZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHpoYW5nID0gdGhpcy56aGFuZ05vZGVMaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAoaSA9PSB0aGlzLmN1ckluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB6aGFuZy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50ID0gemhhbmcubm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHpoYW5nLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25TaGFuZygpIHtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuY3VySW5kZXggLSAxO1xyXG4gICAgICAgIGlmIChhIDwgMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3VySW5kZXggPSBhO1xyXG4gICAgICAgIHRoaXMudXBkYXRhTWFwKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCdG5TdGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIG9uWGlhKCkge1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5jdXJJbmRleCArIDE7XHJcbiAgICAgICAgaWYgKGEgPj0gdGhpcy56aGFuZ05vZGVMaXN0Lmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3VySW5kZXggPSBhO1xyXG4gICAgICAgIHRoaXMudXBkYXRhTWFwKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCdG5TdGF0ZSgpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==