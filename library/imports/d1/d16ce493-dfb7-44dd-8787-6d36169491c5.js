"use strict";
cc._RF.push(module, 'd16ceST37dE3YeHbTYWlJHF', 'NodePool');
// Script/pool/NodePool.js

"use strict";

module.exports = cc.Class({
  name: 'NodePool',
  properties: {
    prefab: cc.Prefab
  },
  ctor: function ctor() {
    this.nodePool = new cc.NodePool();
  },
  //获取一个节点
  getNode: function getNode(data, parent) {
    var node = null;

    if (this.nodePool.size() > 0) {
      // 通过 size 接口判断对象池中是否有空闲的对象
      node = this.nodePool.get();
    } else {
      // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
      node = cc.instantiate(this.prefab);
      node.pool = this;
    }

    if (parent) parent.addChild(node);
    var poolComponents = node.getComponentsInChildren("PoolComponent");

    for (var i in poolComponents) {
      var poolComponent = poolComponents[i];
      poolComponent.reuse(data); //启用
    }

    return node;
  },
  put: function put(node) {
    node.removeFromParent();
    this.nodePool.put(node); // 通过之前传入的管理类实例回收子弹

    var poolComponents = node.getComponentsInChildren("PoolComponent");

    for (var i in poolComponents) {
      var poolComponent = poolComponents[i];
      poolComponent.unuse(); //启用
    }
  }
});

cc._RF.pop();