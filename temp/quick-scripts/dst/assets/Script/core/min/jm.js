
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/core/min/jm.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0d0eWJwgNO+7WlRuA/idaQ', 'jm');
// Script/core/min/jm.js

"use strict";

var jm = jm || {};

var _ = require("lodash");

(function () {
  if (jm.root) return;
  jm.root = {};
  jm.root.registries = {};
})();

module.exports = jm;

(function () {
  if (jm.Class) return;
  var fnTest = /xyz/.test(function () {
    xyz;
  }) ? /\b_super\b/ : /.*/; // The base Class implementation (does nothing)

  jm.Class = function () {}; // Create a new Class that inherits from this class


  jm.Class.extend = function (prop) {
    var _super = this.prototype; // Instantiate a base class (but only create the instance,
    // don't run the init constructor)

    var prototype = Object.create(_super); // Copy the properties over onto the new prototype

    for (var name in prop) {
      if (name == 'properties') {
        continue;
      } // Check if we're overwriting an existing function


      prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? function (name, fn) {
        return function () {
          var tmp = this._super; // Add a new ._super() method that is the same method
          // but on the super-class

          this._super = _super[name]; // The method only need to be bound temporarily, so we
          // remove it when we're done executing

          var ret = fn.apply(this, arguments);
          this._super = tmp;
          return ret;
        };
      }(name, prop[name]) : prop[name];
    }

    {
      var properties = prop['properties'];

      for (var key in properties) {
        var desc = properties[key];

        if (desc.get && typeof desc.get == "string") {
          desc.get = prototype[desc.get];
        }

        if (desc.set && typeof desc.set == "string") {
          desc.set = prototype[desc.set];
        }

        Object.defineProperty(prototype, key, desc);
      }
    } // The dummy class constructor

    function Class() {
      if (this._className) {
        Object.defineProperty(this, "className", {
          value: this._className,
          writable: false
        });
      } // All construction is actually done in the init method


      if (this.ctor) this.ctor.apply(this, arguments);
    } // Populate our constructed prototype object


    Class.prototype = prototype; // Enforce the constructor to be what we expect

    Class.prototype.constructor = Class; // And make this class extendable

    Class.extend = jm.Class.extend;
    return Class;
  };
})();

(function () {
  if (jm.Object) return;
  jm.Object = jm.Class.extend({
    _className: 'object',
    attr: function attr(attrs) {
      for (var key in attrs) {
        if (key === 'className') {
          continue;
        }

        this[key] = attrs[key];
      }
    }
  });

  jm.object = function () {
    return new jm.Object();
  };
})();

(function () {
  if (jm.Random) return;
  var iRandomMax = 200000000000; //最大随机整数范围 0 <= randomValue <= iRandomMax;

  jm.Random = jm.Class.extend({
    _className: 'random',
    properties: {
      seed: {
        get: 'getSeed',
        set: 'setSeed'
      }
    },
    ctor: function ctor(opts) {
      opts = opts || {};
      this.g_seed = 0;
      this.randomMax = opts.randomMax || iRandomMax;
    },
    setSeed: function setSeed(seed) {
      this.g_seed = seed;
    },
    getSeed: function getSeed() {
      return this.g_seed;
    },
    random: function random() {
      this.g_seed = (this.g_seed * 9301 + 49297) % 233280;
      return this.g_seed / 233280.0;
    },
    //min<=result<=max
    randomInt: function randomInt(min, max) {
      if (max === undefined) {
        max = min;
        min = 0;
      }

      var range = min + this.random() * (max - min);
      return Math.round(range);
    },
    //min<=result<=max
    randomDouble: function randomDouble(min, max) {
      if (max === undefined) {
        max = min;
        min = 0.0;
      }

      var range = min + this.random() * (max - min);
      return range;
    },
    randomRange: function randomRange(range) {
      return this.randomInt(0, this.randomMax) % range;
    },
    randomOdds: function randomOdds(range, odds) {
      if (this.randomRange(range) < odds) return 1;
      return 0;
    }
  });

  jm.random = function (opts) {
    return new jm.Random(opts);
  };
})();

(function () {
  if (jm.EventEmitter) return;
  jm.EventEmitter = jm.Object.extend({
    _className: 'eventEmitter',
    ctor: function ctor() {
      this._events = {};
      this._persistEvents = {};
      this.addListener = this.on;
    },
    __createListener: function __createListener(fn, caller) {
      caller = caller;
      return {
        fn: fn,
        caller: caller
      };
    },
    __equalsListener: function __equalsListener(listener1, listener2) {
      return listener1.fn === listener2.fn && listener1.caller === listener2.caller;
    },

    /**
     * Adds a listener
     * @api public
     */
    on: function on(name, fn, caller) {
      var listener = this.__createListener(fn, caller);

      if (!this._events[name]) {
        this._events[name] = listener;
      } else if (Array.isArray(this._events[name])) {
        this._events[name].push(listener);
      } else {
        this._events[name] = [this._events[name], listener];
      }

      return this;
    },
    onPersist: function onPersist(name, fn, caller) {
      var listener = this.__createListener(fn, caller);

      if (!this._persistEvents[name]) {
        this._persistEvents[name] = listener;
      } else if (Array.isArray(this._persistEvents[name])) {
        this._persistEvents[name].push(listener);
      } else {
        this._persistEvents[name] = [this._persistEvents[name], listener];
      }

      return this;
    },

    /**
     * Adds a volatile listener.
     * @api public
     */
    once: function once(name, fn, caller) {
      var self = this;

      var listener = this.__createListener(fn, caller);

      function on(arg1, arg2, arg3, arg4, arg5) {
        self.removeListener(name, on);
        fn.call(listener.caller, arg1, arg2, arg3, arg4, arg5);
      }

      ;
      on.listener = listener;
      this.on(name, on);
      return this;
    },

    /**
     * Removes a listener.
     * @api public
     */
    removeListener: function removeListener(name, fn, caller) {
      var listener = this.__createListener(fn, caller);

      if (this._events && this._events[name]) {
        var list = this._events[name];

        if (Array.isArray(list)) {
          var pos = -1;

          for (var i = 0, l = list.length; i < l; i++) {
            var o = list[i];

            if (this.__equalsListener(o, listener) || o.listener && this.__equalsListener(o.listener, listener)) {
              pos = i;
              break;
            }
          }

          if (pos < 0) {
            return this;
          }

          list.splice(pos, 1);

          if (!list.length) {
            delete this._events[name];
          }
        } else if (this.__equalsListener(list, listener) || list.listener && this.__equalsListener(list.listener, listener)) {
          delete this._events[name];
        }
      }

      return this;
    },
    removePersistListener: function removePersistListener(name, fn, caller) {
      var listener = this.__createListener(fn, caller);

      if (this._persistEvents && this._persistEvents[name]) {
        var list = this._persistEvents[name];

        if (Array.isArray(list)) {
          var pos = -1;

          for (var i = 0, l = list.length; i < l; i++) {
            var o = list[i];

            if (this.__equalsListener(o, listener) || o.listener && this.__equalsListener(o.listener, listener)) {
              pos = i;
              break;
            }
          }

          if (pos < 0) {
            return this;
          }

          list.splice(pos, 1);

          if (!list.length) {
            delete this._persistEvents[name];
          }
        } else if (this.__equalsListener(list, listener) || list.listener && this.__equalsListener(list.listener, listener)) {
          delete this._persistEvents[name];
        }
      }

      return this;
    },
    //移除NODE注册的所有事件。
    delListener: function delListener(caller) {
      for (var name in this._events) {
        var list = this._events[name];

        if (!Array.isArray(list)) {
          list = [list];
        }

        list = list.concat();

        for (var i in list) {
          var listener = list[i];

          if (listener.caller && listener.fn && listener.caller === caller) {
            this.removeListener(name, listener.fn, caller);
          }
        }
      }
    },

    /**
     * Removes all listeners for an event.
     * @api public
     */
    removeAllListeners: function removeAllListeners(name) {
      if (name === undefined) {
        this._events = {};
        return this;
      }

      if (this._events && this._events[name]) {
        //this._events[name] = null;
        delete this._events[name];
      }

      return this;
    },

    /**
     * Gets all listeners for a certain event.
     *
     * @api publci
     */
    listeners: function listeners(name) {
      if (!this._events[name]) {
        this._events[name] = [];
      }

      if (!Array.isArray(this._events[name])) {
        this._events[name] = [this._events[name]];
      }

      return this._events[name];
    },

    /**
     * Emits an event.
     *
     * tip: use arg1...arg5 instead of arguments for performance consider.
     *
     * @api public
     */
    emit: function emit(name, arg1, arg2, arg3, arg4, arg5) {
      this._emitPersist(name, arg1, arg2, arg3, arg4, arg5);

      var handler = this._events[name];
      if (!handler) return this;

      if (typeof handler === 'object' && !Array.isArray(handler)) {
        handler.fn.call(handler.caller || this, arg1, arg2, arg3, arg4, arg5);
      } else if (Array.isArray(handler)) {
        var listeners = new Array(handler.length);

        for (var i = 0; i < handler.length; i++) {
          listeners[i] = handler[i];
        }

        for (var i = 0, l = listeners.length; i < l; i++) {
          var h = listeners[i];
          if (h.fn.call(h.caller || this, arg1, arg2, arg3, arg4, arg5) === false) break;
        }
      }

      return this;
    },
    _emitPersist: function _emitPersist(name, arg1, arg2, arg3, arg4, arg5) {
      var handler = this._persistEvents[name];
      if (!handler) return this;

      if (typeof handler === 'object' && !Array.isArray(handler)) {
        handler.fn.call(handler.caller || this, arg1, arg2, arg3, arg4, arg5);
      } else if (Array.isArray(handler)) {
        var listeners = new Array(handler.length);

        for (var i = 0; i < handler.length; i++) {
          listeners[i] = handler[i];
        }

        for (var i = 0, l = listeners.length; i < l; i++) {
          var h = listeners[i];
          if (h.fn.call(h.caller || this, arg1, arg2, arg3, arg4, arg5) === false) break;
        }
      }

      return this;
    }
  });

  jm.eventEmitter = function () {
    var event = new jm.EventEmitter();
    event.off = event.removeListener;
    return event;
  };

  var prototype = jm.EventEmitter.prototype;
  var EventEmitter = {
    _events: {},
    _persistEvents: {},
    delListener: prototype.delListener,
    removePersistListener: prototype.removePersistListener,
    _emitPersist: prototype._emitPersist,
    __createListener: prototype.__createListener,
    __equalsListener: prototype.__equalsListener,
    on: prototype.on,
    once: prototype.once,
    onPersist: prototype.onPersist,
    addListener: prototype.on,
    removeListener: prototype.removeListener,
    removeEventListener: prototype.removeListener,
    off: prototype.removeListener,
    removeAllListeners: prototype.removeAllListeners,
    listeners: prototype.listeners,
    emit: prototype.emit
  };
  var em = EventEmitter;

  jm.enableEvent = function (obj) {
    if (obj._events !== undefined) return;

    for (var key in em) {
      obj[key] = em[key];
    }

    obj._events = {};
    return this;
  };

  jm.disableEvent = function (obj) {
    for (var key in em) {
      delete obj[key];
    }

    return this;
  };
})();

(function () {
  if (jm.TagObject) return;
  jm.TagObject = jm.EventEmitter.extend({
    _className: 'tagObject',
    ctor: function ctor() {
      this._super();

      this._tags = [];
      Object.defineProperty(this, "tags", {
        value: this._tags,
        writable: false
      });
    },
    destroy: function destroy() {
      this.emit('destroy', this);
      this.removeAllTags();
    },
    hasTag: function hasTag(tag) {
      var tags = this._tags;
      return tags.indexOf(tag) != -1;
    },
    hasTagAny: function hasTagAny(tags) {
      for (var i in tags) {
        var t = tags[i];
        if (this.hasTag(t)) return true;
      }

      return false;
    },
    hasTagAll: function hasTagAll(tags) {
      for (var i in tags) {
        var t = tags[i];
        if (!this.hasTag(t)) return false;
      }

      return true;
    },
    addTag: function addTag(tag) {
      var tags = this._tags;
      if (this.hasTag(tag)) return this;
      tags.push(tag);
      this.emit('addTag', tag);
      return this;
    },
    addTags: function addTags(tags) {
      for (var i in tags) {
        var t = tags[i];
        this.addTag(t);
      }

      return this;
    },
    removeTag: function removeTag(tag) {
      var tags = this._tags;
      var idx = tags.indexOf(tag);

      if (idx >= 0) {
        tags.splice(idx, 1);
      }

      this.emit('removeTag', tag);
      return this;
    },
    removeTags: function removeTags(tags) {
      for (var i in tags) {
        var t = tags[i];
        this.removeTag(t);
      }

      return this;
    },
    removeAllTags: function removeAllTags() {
      var v = this._tags;

      for (i in v) {
        this.emit('removeTag', v[i]);
      }

      this._tags = [];
      this.emit('removeAllTags');
      return this;
    }
  });

  jm.tagObject = function () {
    return new jm.TagObject();
  };

  var prototype = jm.TagObject.prototype;
  var Tag = {
    _tags: [],
    hasTag: prototype.hasTag,
    hasTagAny: prototype.hasTagAny,
    hasTagAll: prototype.hasTagAll,
    addTag: prototype.addTag,
    addTags: prototype.addTags,
    removeTag: prototype.removeTag,
    removeTags: prototype.removeTags,
    removeAllTags: prototype.removeAllTags
  };

  jm.enableTag = function (obj) {
    if (obj._tags != undefined) return;

    for (var key in Tag) {
      obj[key] = Tag[key];
    }

    obj._tags = [];
    Object.defineProperty(obj, "tags", {
      value: obj._tags,
      writable: false
    });
    jm.enableEvent(obj);
  };

  jm.disableTag = function (obj) {
    for (var key in Tag) {
      delete obj[key];
    }

    jm.disableEvent(obj);
  };
})();

(function () {
  if (jm.Entity) return;
  var guid = 1;

  function isEmptyObject(e) {
    var t;

    for (t in e) {
      return false;
    }

    return true;
  }

  jm.Entity = jm.TagObject.extend({
    _className: 'entity',
    ctor: function ctor(entityManager) {
      this._super();

      this.entityManager = entityManager;
      this._components = {};
      this._componentsByClass = {};
      this._componentGUID = 1;
      this.active = true;
      this.entityId = guid++;
      Object.defineProperty(this, "components", {
        value: this._components,
        writable: false
      });
      Object.defineProperty(this, "componentsByClass", {
        value: this._componentsByClass,
        writable: false
      });
      this.on('addTag', function (tag) {
        entityManager._entitiesByTag[tag] = entityManager._entitiesByTag[tag] || {};
        entityManager._entitiesByTag[tag][this.entityId] = this;
      });
      this.on('removeTag', function (tag) {
        var o = entityManager._entitiesByTag[tag];
        if (!o) return;
        delete o[this.entityId];
        if (isEmptyObject(o)) delete entityManager._entitiesByTag[tag];
      });
    },
    destroy: function destroy() {
      this.emit('destroy', this);
      this.removeAllComponents();
      this.removeAllTags();
    },
    removeChild: function removeChild(e) {
      this.entityManager.removeEntity(e.entityId);
      this.children = _.without(this.children, e);
      e.destroy();
    },
    removeFromParent: function removeFromParent() {
      this.removeAllTags();

      if (this.parent) {
        this.parent.removeChild(this);
      } else {
        this.entityManager.removeEntity(this.entityId);
      }
    },
    addComponent: function addComponent(c) {
      var components = this._components;
      var componentsByClass = this._componentsByClass;
      var name = c.name;
      var cClassName = c.className;
      var bUsedName = (name in components);

      if (bUsedName) {
        if (c.singleton) {
          if (bUsedName) throw "componen already exists with the name: " + name;
        }

        name = cClassName + this._componentGUID++;
        c.name = name;
      }

      if (cClassName in componentsByClass) {} else {
        componentsByClass[cClassName] = {};
      }

      var vByClass = componentsByClass[cClassName];
      components[name] = c;
      vByClass[name] = c;
      this[name] = c;
      this.addTag(cClassName);
      if (c.classAlias) this.addTag(c.classAlias);
      c.onAdd(this);
      c.emit('add', this);
      this.emit('addComponent', c);
      return this;
    },
    removeComponent: function removeComponent(c_or_name) {
      var components = this._components;
      var componentsByClass = this._componentsByClass;
      var c = c_or_name;

      if (typeof c == 'string') {
        c = components[c];
      }

      if (!c) return this;
      var name = c.name;
      var cClassName = c.className;
      var v = componentsByClass[cClassName];
      delete components[name];
      delete v[name];
      delete this[name];
      this.removeTag(cClassName);
      c.onRemove(this);
      c.emit('remove', this);
      this.emit('removeComponent', c);
      c.destroy();
      return this;
    },
    removeComponents: function removeComponents(className) {
      var v = this.getComponents(className);

      for (i in v) {
        this.removeComponent(i);
      }

      delete this._componentsByClass[className];
      this.emit('removeComponents', className);
      return this;
    },
    removeAllComponents: function removeAllComponents() {
      var v = this._components;

      for (i in v) {
        this.removeComponent(i);
      }

      this.emit('removeAllComponents');
      return this;
    },
    getComponent: function getComponent(name) {
      return this._components[name];
    },
    getComponents: function getComponents(className) {
      return this._componentsByClass[className];
    },

    /**
     * 鍘绘帀entityType涓凡缁忓畾涔夌殑鐩稿悓閮ㄥ垎
     */
    _clip: function _clip(origin, target) {
      if (!origin) {
        return;
      }

      var obj = target;

      for (var key in target) {
        var t = target[key];
        var o = origin[key];

        if (_.isObject(t)) {
          if (o) {
            this._clip(o, t);
          }

          if (_.isEmpty(t)) {
            delete target[key];
          }

          continue;
        }

        if (t === o) {
          delete target[key];
        }
      }
    },
    toJSON: function toJSON() {
      var em = this.entityManager;
      var type = this.type;
      var et = em.entityType(type);
      var opts = {
        type: type,
        tags: [],
        components: {}
      };
      opts.tags = _.cloneDeep(this.tags);
      opts.tags = _.without(opts.tags, type);
      var cs = opts.components;
      var v = this.components;

      for (i in v) {
        var c = v[i];
        cs[i] = c.toJSON();
        opts.tags = _.without(opts.tags, i, c.className);
        if (c.classAlias) opts.tags = _.without(opts.tags, c.classAlias);
        if (i === cs[i].className) delete cs[i].className;
      }

      for (i in et.tags) {
        opts.tags = _.without(opts.tags, et.tags[i]);
      }

      if (!opts.tags.length) delete opts.tags; //鍘绘帀entityType涓凡缁忓畾涔夌殑鐩稿悓閮ㄥ垎

      this._clip(et, opts);

      v = this.children;

      for (i in v) {
        var e = v[i];
        if (!opts.children) opts.children = [];
        opts.children.push(e.toJSON());
      }

      return opts;
    }
  });
})();

(function () {
  if (jm.Component) return;
  jm.Component = jm.TagObject.extend({
    _className: 'component',
    _singleton: true,
    _nameReadOnly: false,
    properties: {
      singleton: {
        get: 'getSignleton'
      },
      entity: {
        get: 'getEntity'
      },
      name: {
        get: 'getName',
        set: 'setName'
      }
    },
    ctor: function ctor(entity, opts) {
      this._super();

      this._entity = entity;
      this.active = true;
      if (opts) this.attr(opts);
    },
    destroy: function destroy() {},

    /**
     * on added to an entity
     * @param e
     */
    onAdd: function onAdd(e) {},

    /**
     * on removed from an entity
     * @param e
     */
    onRemove: function onRemove(e) {},
    getName: function getName() {
      return this._name || this.classAlias || this.className;
    },
    setName: function setName(name) {
      if (this._nameReadOnly) return;
      this._name = name;
    },
    getSignleton: function getSignleton() {
      return this._singleton;
    },
    getEntity: function getEntity() {
      return this._entity;
    },
    toJSON: function toJSON() {
      return {
        className: this.classAlias || this.className
      };
    }
  });
  jm.root.registries.components = {
    'component': jm.Component
  };

  jm.Component.extend = function (opts) {
    var Class = jm.Class.extend.call(this, opts);
    Class.extend = jm.Component.extend;
    jm.root.registries.components[Class.prototype._className] = Class;
    return Class;
  };
})();

(function () {
  if (jm.Factory) return;
  jm.Factory = jm.EventEmitter.extend({
    _className: 'factory',
    ctor: function ctor(entityManager, opts) {
      this._super(opts);

      this.entityManager = entityManager;
    },
    destory: function destory() {
      this.emit('destroy', this);

      this._super();
    },
    create: function create(opts) {
      var e = new jm.Entity(this.entityManager);
      if (!opts || !opts.components) return e;

      if (opts.parent) {
        e.parent = opts.parent;
      }

      var c;
      var em = this.entityManager;

      for (var name in opts.components) {
        var info = opts.components[name];
        var className = name;
        if (info.className) className = info.className;
        var C = em.component(className);

        if (!C) {
          C = jm.root.registries.components[className];

          if (C) {
            em.addComponent(C, className);
          } else {
            console.log(className);
            C = eval(className);

            if (C) {
              C = jm.root.registries.components[C.prototype._className];
            }

            if (C) {
              em.addComponent(C, className, true);
            } else {
              em.emit('warn', 'can not find component ' + className + ', ignored');
              continue;
            }
          }
        }

        c = new C(e, info);
        if (info.className) c.name = name;
        e.addComponent(c);
      }

      this.emit('create', e);
      return e;
    }
  });
  jm.root.registries.factories = {
    'factory': jm.Factory
  };

  jm.Factory.extend = function (opts) {
    var Class = jm.Class.extend.call(this, opts);
    Class.extend = jm.Factory.extend;
    jm.root.registries.factories[Class.prototype._className] = Class;
    return Class;
  };
})();

(function () {
  if (jm.EntityManager) return;

  var __parseConfigInfo = function __parseConfigInfo(opts, key) {
    var bArray = Array.isArray(opts);
    var className, name;

    if (bArray) {
      className = opts[key];
      name = null;
    } else {
      className = key;
      name = opts[key];
    }

    return {
      className: className,
      name: name
    };
  };

  jm.EntityManager = jm.EventEmitter.extend({
    _className: 'entityManager',
    ctor: function ctor(opts) {
      this._super();

      this._components = {};
      this._processors = {};
      this._factories = {};
      this._entityTypes = {};
      this._pools = {};
      this._entities = {};
      this._entitiesByName = {};
      this._entitiesByTag = {};
      Object.defineProperty(this, "components", {
        value: this._components,
        writable: false
      });
      Object.defineProperty(this, "processors", {
        value: this._processors,
        writable: false
      });
      Object.defineProperty(this, "factories", {
        value: this._factories,
        writable: false
      });
      Object.defineProperty(this, "entityTypes", {
        value: this._entityTypes,
        writable: false
      });
      Object.defineProperty(this, "pools", {
        value: this._pools,
        writable: false
      });
      Object.defineProperty(this, "entities", {
        value: this._entities,
        writable: false
      });
      Object.defineProperty(this, "entitiesByName", {
        value: this._entitiesByName,
        writable: false
      });
      Object.defineProperty(this, "entitiesByTag", {
        value: this._entitiesByTag,
        writable: false
      });
      var v = jm.root.registries.factories;

      for (var key in v) {
        var o = new v[key](this);
        this.addFactory(o, key);
      }

      this.init(opts);
    },
    init: function init(opts) {
      if (!opts) return;
      this.addComponents(opts.components);
      this.addProcessors(opts.processors);
      this.addFactories(opts.factories);
    },
    addComponents: function addComponents(opts) {
      var bArray = _.isArray(opts);

      for (var key in opts) {
        var info = __parseConfigInfo(opts, key);

        var C = eval(info.className);
        this.addComponent(C, info.className, true);
        this.addComponent(C, info.name);
      }

      return this;
    },
    addProcessors: function addProcessors(opts) {
      for (var key in opts) {
        var info = __parseConfigInfo(opts, key);

        var o = eval('new ' + info.className + '(this)');

        if (info.name) {
          this.addProcessor(o, info.name);
        } else {
          this.addProcessor(o, info.className);
        }
      }

      return this;
    },
    addFactories: function addFactories(opts) {
      for (var key in opts) {
        var info = __parseConfigInfo(opts, key);

        var o = eval('new ' + info.className + '(this)');
        this.addFactory(o, info.className);
        this.addFactory(o, info.name);
      }

      return this;
    },
    addComponent: function addComponent(C, name, notAlias) {
      if (!C) return this;

      if (!name) {
        name = C.prototype._className;
      } else {
        if (!notAlias) {
          if (name != C.prototype._className) {
            C.prototype.classAlias = name;
          }
        }
      }

      if (this._components[name]) {
        this.emit('warn', 'add Compoent already exists for ' + name + ', replaced.');
      }

      this._components[name] = C;
      this.emit('addComponent', name);
      return this;
    },
    removeComponent: function removeComponent(name) {
      var components = this._components;
      var o = components[name];

      if (o) {
        this.emit('removeComponent', name);
      }

      delete components[name];
      return this;
    },
    component: function component(name) {
      return this._components[name];
    },
    addEntityType: function addEntityType(type, opts) {
      if (this._entityTypes[type]) {
        this.emit('warn', 'add entityType already exists for ' + type + ', replaced.');
      }

      this._entityTypes[type] = opts;
    },
    addEntityTypes: function addEntityTypes(opts) {
      for (var type in opts) {
        this.addEntityType(type, opts[type]);
      }
    },
    entityType: function entityType(type) {
      return this._entityTypes[type];
    },
    addFactory: function addFactory(f, name) {
      if (!f) return this;
      name = name || f.name || f.className;

      if (this._factories[name]) {
        this.emit('warn', 'add factory already exists for ' + name + ', replaced.');
      }

      this._factories[name] = f;
      if (f.entityManager != this) f.entityManager = this;
      this.emit('addFactory', f);
      return this;
    },
    removeFactory: function removeFactory(name) {
      var factories = this._factories;
      var f = factories[name];

      if (f) {
        this.emit('removeFactory', f);
        delete factories[name];
        f.destroy();
      }

      return this;
    },
    factory: function factory(name) {
      return this._factories[name];
    },
    addProcessor: function addProcessor(p, name) {
      if (!p) return this;
      if (!name) name = p.name || p.className;

      if (this._processors[name]) {
        this.emit('warn', 'add processor already exists for ' + name + ', replaced.');
      }

      this._processors[name] = p;
      if (p.entityManager != this) p.entityManager = this;
      this.emit('addProcessor', p);
      return this;
    },
    removeProcessor: function removeProcessor(name) {
      var processors = this._processors;
      var p = processors[name];

      if (p) {
        this.emit('removeProcessor', p);
        delete processors[name];
        p.destroy();
      }

      return this;
    },
    processor: function processor(name) {
      return this._processors[name];
    },
    //__createEntityFromPool: function (type, opts, parent) {
    //    if (!this._entityTypes[type].poolable) return null;
    //    if (parent) return null;
    //    if (opts && opts.parent) return null;
    //    if (this._pools[type]) {
    //        var e = this._pools[type].shift();
    //        if (e) {
    //            e.emit('reuse', opts);
    //            this.addEntity(e);
    //            return e;
    //        }
    //    }
    //    return null;
    //},
    createEntity: function createEntity(type, opts, parent) {
      var e = null;
      var _opts = opts;
      opts = {};
      opts = _.cloneDeep(this._entityTypes[type]); //克隆

      if (_opts) {
        opts = _.merge(opts, _.cloneDeep(_opts)); //合并
      }

      var name = opts.factory || 'factory';
      var f = this._factories[name];
      if (!f) return null;
      if (parent) opts.parent = parent;
      e = f.create(opts);

      if (!e) {
        return null;
      }

      e.type = type;
      e.addTag(type);
      e.addTags(opts.tags);
      this.addEntity(e);
      this.createEntityChildren(e, opts);
      return e;
    },
    createEntityChildren: function createEntityChildren(e, opts) {
      //create Children
      for (var i in opts.children) {
        var info = opts.children[i];
        if (!info) continue;
        var o = null;
        var className = info.className || 'jm.Entity';

        if (className == 'jm.Entity') {
          var type = info.type;
          o = this.createEntity(type, info, e);
        }

        if (!e.children) {
          e.children = [];
        }

        e.children.push(o);
      }
    },
    addEntity: function addEntity(e, tag) {
      if (!e || !e.entityId) {
        return this;
      }

      if (tag) {
        e.addTag(tag);
      }

      this._entities[e.entityId] = e;

      if (e.name) {
        this._entitiesByName[e.name] = e;
      }

      e.emit('add', this);
      this.emit('addEntity', e);
      return this;
    },
    //
    //__removeEntityToPool: function (e) {
    //    var type = e.type;
    //    if (!this._entityTypes[type].poolable) return false;
    //    if (e.parent) return false;
    //    //濡傛灉鍙睜鍖? 瀛樺埌姹犻噷
    //    if (!this._pools[type]) this._pools[type] = [];
    //    var pool = this._pools[type];
    //    e.emit('unuse');
    //    pool.push(e);
    //    return true;
    //},
    //
    //clearPool: function (type) {
    //    var pool = this._pools[type];
    //    if (!pool) return;
    //    this._pools[type] = [];
    //    pool.forEach(function (e) {
    //        e.destroy();
    //    });
    //},
    //
    //clearPools: function () {
    //    for (var type in this._pools) {
    //        this.clearPool(type);
    //    }
    //},
    removeEntity: function removeEntity(entityId) {
      var e;

      if (_.isObject(entityId)) {
        e = entityId;
      } else {
        e = this._entities[entityId];
      }

      if (!e) {
        return this;
      }

      this.removeEntityChildren(e);
      e.emit('remove', this);
      this.emit('removeEntity', e);
      delete this._entities[e.entityId];

      if (e.name) {
        delete this._entitiesByName[e.name];
      } //if (this.__removeEntityToPool(e)) {
      //    return this;
      //} else {
      //    e.destroy();
      //}


      e.destroy();
      return this;
    },
    removeEntityChildren: function removeEntityChildren(e) {
      var v = e.children;

      for (var i in v) {
        var _e = v[i];
        this.removeEntity(_e.entityId);
      }
    },
    getEntityById: function getEntityById(eid) {
      return this._entities[eid];
    },
    //    getEntities('render')
    //    getEntities('render move tag1')  and
    //    getEntities('render, move, tag1')   or
    getEntities: function getEntities(selector) {
      var entities = this._entities;
      if (!selector) return entities;
      var v = {}; //select entities by tags

      if (typeof selector === 'string') {
        var and = false,
            //flags for multiple
        or = false;
        var rlist = /\s*,\s*/;
        var rspace = /\s+/;
        var del; //multiple components OR

        if (selector.indexOf(',') !== -1) {
          or = true;
          del = rlist;
        } else if (selector.indexOf(' ') !== -1) {
          and = true;
          del = rspace;
        }

        if (!and && !or) {
          return this._entitiesByTag[selector];
        }

        var tags = selector.split(del);
        var e;

        for (var entityId in entities) {
          e = entities[entityId];

          if (and) {
            if (!e.hasTagAll(tags)) continue;
          } else if (or) {
            if (!e.hasTagAny(tags)) continue;
          }

          v[entityId] = e;
        }
      }

      return v;
    },
    getEntity: function getEntity(selector) {
      var v = this.getEntities(selector);

      for (var i in v) {
        return v[i];
      }

      return null;
    },
    update: function update(delta) {
      this.emit('update', delta);
      var processors = this._processors;

      for (var name in processors) {
        var p = processors[name];
        p.process(delta);
      }
    }
  });

  jm.entityManager = function (opts) {
    return new jm.EntityManager(opts);
  };
})();

(function () {
  if (jm.sprintf) return;
  var sprintfWrapper = {
    init: function init() {
      if (typeof arguments == 'undefined') {
        return null;
      }

      if (arguments.length < 1) {
        return null;
      }

      if (typeof arguments[0] != 'string') {
        return null;
      }

      if (typeof RegExp == 'undefined') {
        return null;
      }

      var string = arguments[0];
      var exp = new RegExp(/(%([%]|(\-)?(\+|\x20)?(0)?(\d+)?(\.(\d)?)?([bcdfosxX])))/g);
      var matches = new Array();
      var strings = new Array();
      var convCount = 0;
      var stringPosStart = 0;
      var stringPosEnd = 0;
      var matchPosEnd = 0;
      var newString = '';
      var match;

      while (match = exp.exec(string)) {
        if (match[9]) {
          convCount += 1;
        }

        stringPosStart = matchPosEnd;
        stringPosEnd = exp.lastIndex - match[0].length;
        strings[strings.length] = string.substring(stringPosStart, stringPosEnd);
        matchPosEnd = exp.lastIndex;
        matches[matches.length] = {
          match: match[0],
          left: match[3] ? true : false,
          sign: match[4] || '',
          pad: match[5] || ' ',
          min: match[6] || 0,
          precision: match[8],
          code: match[9] || '%',
          negative: parseInt(arguments[convCount]) < 0 ? true : false,
          argument: String(arguments[convCount])
        };
      }

      strings[strings.length] = string.substring(matchPosEnd);

      if (matches.length == 0) {
        return string;
      }

      if (arguments.length - 1 < convCount) {
        return null;
      }

      for (var i = 0; i < matches.length; i++) {
        var substitution;

        if (matches[i].code == '%') {
          substitution = '%';
        } else if (matches[i].code == 'b') {
          matches[i].argument = String(Math.abs(parseInt(matches[i].argument)).toString(2));
          substitution = sprintfWrapper.convert(matches[i], true);
        } else if (matches[i].code == 'c') {
          matches[i].argument = String(String.fromCharCode(parseInt(Math.abs(parseInt(matches[i].argument)))));
          substitution = sprintfWrapper.convert(matches[i], true);
        } else if (matches[i].code == 'd') {
          matches[i].argument = String(Math.abs(parseInt(matches[i].argument)));
          substitution = sprintfWrapper.convert(matches[i]);
        } else if (matches[i].code == 'f') {
          matches[i].argument = String(Math.abs(parseFloat(matches[i].argument)).toFixed(matches[i].precision ? matches[i].precision : 6));
          substitution = sprintfWrapper.convert(matches[i]);
        } else if (matches[i].code == 'o') {
          matches[i].argument = String(Math.abs(parseInt(matches[i].argument)).toString(8));
          substitution = sprintfWrapper.convert(matches[i]);
        } else if (matches[i].code == 's') {
          matches[i].argument = matches[i].argument.substring(0, matches[i].precision ? matches[i].precision : matches[i].argument.length);
          substitution = sprintfWrapper.convert(matches[i], true);
        } else if (matches[i].code == 'x') {
          matches[i].argument = String(Math.abs(parseInt(matches[i].argument)).toString(16));
          substitution = sprintfWrapper.convert(matches[i]);
        } else if (matches[i].code == 'X') {
          matches[i].argument = String(Math.abs(parseInt(matches[i].argument)).toString(16));
          substitution = sprintfWrapper.convert(matches[i]).toUpperCase();
        } else {
          substitution = matches[i].match;
        }

        newString += strings[i];
        newString += substitution;
      }

      newString += strings[i];
      return newString;
    },
    convert: function convert(match, nosign) {
      if (nosign) {
        match.sign = '';
      } else {
        match.sign = match.negative ? '-' : match.sign;
      }

      var l = match.min - match.argument.length + 1 - match.sign.length;
      var pad = new Array(l < 0 ? 0 : l).join(match.pad);

      if (!match.left) {
        if (match.pad == '0' || nosign) {
          return match.sign + pad + match.argument;
        } else {
          return pad + match.sign + match.argument;
        }
      } else {
        if (match.pad == '0' || nosign) {
          return match.sign + match.argument + pad.replace(/0/g, ' ');
        } else {
          return match.sign + match.argument + pad;
        }
      }
    }
  };
  jm.sprintf = sprintfWrapper.init;
})();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb3JlXFxtaW5cXGptLmpzIl0sIm5hbWVzIjpbImptIiwiXyIsInJlcXVpcmUiLCJyb290IiwicmVnaXN0cmllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJDbGFzcyIsImZuVGVzdCIsInRlc3QiLCJ4eXoiLCJleHRlbmQiLCJwcm9wIiwiX3N1cGVyIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwibmFtZSIsImZuIiwidG1wIiwicmV0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJwcm9wZXJ0aWVzIiwia2V5IiwiZGVzYyIsImdldCIsInNldCIsImRlZmluZVByb3BlcnR5IiwiX2NsYXNzTmFtZSIsInZhbHVlIiwid3JpdGFibGUiLCJjdG9yIiwiY29uc3RydWN0b3IiLCJhdHRyIiwiYXR0cnMiLCJvYmplY3QiLCJSYW5kb20iLCJpUmFuZG9tTWF4Iiwic2VlZCIsIm9wdHMiLCJnX3NlZWQiLCJyYW5kb21NYXgiLCJzZXRTZWVkIiwiZ2V0U2VlZCIsInJhbmRvbSIsInJhbmRvbUludCIsIm1pbiIsIm1heCIsInVuZGVmaW5lZCIsInJhbmdlIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tRG91YmxlIiwicmFuZG9tUmFuZ2UiLCJyYW5kb21PZGRzIiwib2RkcyIsIkV2ZW50RW1pdHRlciIsIl9ldmVudHMiLCJfcGVyc2lzdEV2ZW50cyIsImFkZExpc3RlbmVyIiwib24iLCJfX2NyZWF0ZUxpc3RlbmVyIiwiY2FsbGVyIiwiX19lcXVhbHNMaXN0ZW5lciIsImxpc3RlbmVyMSIsImxpc3RlbmVyMiIsImxpc3RlbmVyIiwiQXJyYXkiLCJpc0FycmF5IiwicHVzaCIsIm9uUGVyc2lzdCIsIm9uY2UiLCJzZWxmIiwiYXJnMSIsImFyZzIiLCJhcmczIiwiYXJnNCIsImFyZzUiLCJyZW1vdmVMaXN0ZW5lciIsImNhbGwiLCJsaXN0IiwicG9zIiwiaSIsImwiLCJsZW5ndGgiLCJvIiwic3BsaWNlIiwicmVtb3ZlUGVyc2lzdExpc3RlbmVyIiwiZGVsTGlzdGVuZXIiLCJjb25jYXQiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJsaXN0ZW5lcnMiLCJlbWl0IiwiX2VtaXRQZXJzaXN0IiwiaGFuZGxlciIsImgiLCJldmVudEVtaXR0ZXIiLCJldmVudCIsIm9mZiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbSIsImVuYWJsZUV2ZW50Iiwib2JqIiwiZGlzYWJsZUV2ZW50IiwiVGFnT2JqZWN0IiwiX3RhZ3MiLCJkZXN0cm95IiwicmVtb3ZlQWxsVGFncyIsImhhc1RhZyIsInRhZyIsInRhZ3MiLCJpbmRleE9mIiwiaGFzVGFnQW55IiwidCIsImhhc1RhZ0FsbCIsImFkZFRhZyIsImFkZFRhZ3MiLCJyZW1vdmVUYWciLCJpZHgiLCJyZW1vdmVUYWdzIiwidiIsInRhZ09iamVjdCIsIlRhZyIsImVuYWJsZVRhZyIsImRpc2FibGVUYWciLCJFbnRpdHkiLCJndWlkIiwiaXNFbXB0eU9iamVjdCIsImUiLCJlbnRpdHlNYW5hZ2VyIiwiX2NvbXBvbmVudHMiLCJfY29tcG9uZW50c0J5Q2xhc3MiLCJfY29tcG9uZW50R1VJRCIsImFjdGl2ZSIsImVudGl0eUlkIiwiX2VudGl0aWVzQnlUYWciLCJyZW1vdmVBbGxDb21wb25lbnRzIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVFbnRpdHkiLCJjaGlsZHJlbiIsIndpdGhvdXQiLCJyZW1vdmVGcm9tUGFyZW50IiwicGFyZW50IiwiYWRkQ29tcG9uZW50IiwiYyIsImNvbXBvbmVudHMiLCJjb21wb25lbnRzQnlDbGFzcyIsImNDbGFzc05hbWUiLCJjbGFzc05hbWUiLCJiVXNlZE5hbWUiLCJzaW5nbGV0b24iLCJ2QnlDbGFzcyIsImNsYXNzQWxpYXMiLCJvbkFkZCIsInJlbW92ZUNvbXBvbmVudCIsImNfb3JfbmFtZSIsIm9uUmVtb3ZlIiwicmVtb3ZlQ29tcG9uZW50cyIsImdldENvbXBvbmVudHMiLCJnZXRDb21wb25lbnQiLCJfY2xpcCIsIm9yaWdpbiIsInRhcmdldCIsImlzT2JqZWN0IiwiaXNFbXB0eSIsInRvSlNPTiIsInR5cGUiLCJldCIsImVudGl0eVR5cGUiLCJjbG9uZURlZXAiLCJjcyIsIkNvbXBvbmVudCIsIl9zaW5nbGV0b24iLCJfbmFtZVJlYWRPbmx5IiwiZW50aXR5IiwiX2VudGl0eSIsImdldE5hbWUiLCJfbmFtZSIsInNldE5hbWUiLCJnZXRTaWdubGV0b24iLCJnZXRFbnRpdHkiLCJGYWN0b3J5IiwiZGVzdG9yeSIsImluZm8iLCJDIiwiY29tcG9uZW50IiwiY29uc29sZSIsImxvZyIsImV2YWwiLCJmYWN0b3JpZXMiLCJFbnRpdHlNYW5hZ2VyIiwiX19wYXJzZUNvbmZpZ0luZm8iLCJiQXJyYXkiLCJfcHJvY2Vzc29ycyIsIl9mYWN0b3JpZXMiLCJfZW50aXR5VHlwZXMiLCJfcG9vbHMiLCJfZW50aXRpZXMiLCJfZW50aXRpZXNCeU5hbWUiLCJhZGRGYWN0b3J5IiwiaW5pdCIsImFkZENvbXBvbmVudHMiLCJhZGRQcm9jZXNzb3JzIiwicHJvY2Vzc29ycyIsImFkZEZhY3RvcmllcyIsImFkZFByb2Nlc3NvciIsIm5vdEFsaWFzIiwiYWRkRW50aXR5VHlwZSIsImFkZEVudGl0eVR5cGVzIiwiZiIsInJlbW92ZUZhY3RvcnkiLCJmYWN0b3J5IiwicCIsInJlbW92ZVByb2Nlc3NvciIsInByb2Nlc3NvciIsImNyZWF0ZUVudGl0eSIsIl9vcHRzIiwibWVyZ2UiLCJhZGRFbnRpdHkiLCJjcmVhdGVFbnRpdHlDaGlsZHJlbiIsInJlbW92ZUVudGl0eUNoaWxkcmVuIiwiX2UiLCJnZXRFbnRpdHlCeUlkIiwiZWlkIiwiZ2V0RW50aXRpZXMiLCJzZWxlY3RvciIsImVudGl0aWVzIiwiYW5kIiwib3IiLCJybGlzdCIsInJzcGFjZSIsImRlbCIsInNwbGl0IiwidXBkYXRlIiwiZGVsdGEiLCJwcm9jZXNzIiwic3ByaW50ZiIsInNwcmludGZXcmFwcGVyIiwiUmVnRXhwIiwic3RyaW5nIiwiZXhwIiwibWF0Y2hlcyIsInN0cmluZ3MiLCJjb252Q291bnQiLCJzdHJpbmdQb3NTdGFydCIsInN0cmluZ1Bvc0VuZCIsIm1hdGNoUG9zRW5kIiwibmV3U3RyaW5nIiwibWF0Y2giLCJleGVjIiwibGFzdEluZGV4Iiwic3Vic3RyaW5nIiwibGVmdCIsInNpZ24iLCJwYWQiLCJwcmVjaXNpb24iLCJjb2RlIiwibmVnYXRpdmUiLCJwYXJzZUludCIsImFyZ3VtZW50IiwiU3RyaW5nIiwic3Vic3RpdHV0aW9uIiwiYWJzIiwidG9TdHJpbmciLCJjb252ZXJ0IiwiZnJvbUNoYXJDb2RlIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJ0b1VwcGVyQ2FzZSIsIm5vc2lnbiIsImpvaW4iLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLEVBQUUsR0FBR0EsRUFBRSxJQUFJLEVBQWY7O0FBQ0EsSUFBSUMsQ0FBQyxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUFmOztBQUNBLENBQUMsWUFBWTtBQUNULE1BQUlGLEVBQUUsQ0FBQ0csSUFBUCxFQUFhO0FBQ2JILEVBQUFBLEVBQUUsQ0FBQ0csSUFBSCxHQUFVLEVBQVY7QUFDQUgsRUFBQUEsRUFBRSxDQUFDRyxJQUFILENBQVFDLFVBQVIsR0FBcUIsRUFBckI7QUFDSCxDQUpEOztBQU1BQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJOLEVBQWpCOztBQUNBLENBQUMsWUFBVTtBQUNQLE1BQUdBLEVBQUUsQ0FBQ08sS0FBTixFQUFhO0FBQ2IsTUFBSUMsTUFBTSxHQUFHLE1BQU1DLElBQU4sQ0FBVyxZQUFVO0FBQUNDLElBQUFBLEdBQUc7QUFBRSxHQUEzQixJQUErQixZQUEvQixHQUE4QyxJQUEzRCxDQUZPLENBSVA7O0FBQ0FWLEVBQUFBLEVBQUUsQ0FBQ08sS0FBSCxHQUFXLFlBQVUsQ0FBRSxDQUF2QixDQUxPLENBT1A7OztBQUNBUCxFQUFBQSxFQUFFLENBQUNPLEtBQUgsQ0FBU0ksTUFBVCxHQUFrQixVQUFTQyxJQUFULEVBQWU7QUFDN0IsUUFBSUMsTUFBTSxHQUFHLEtBQUtDLFNBQWxCLENBRDZCLENBRzdCO0FBQ0E7O0FBQ0Es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RSxDQUFDNk8sT0FBSCxHQUFhQyxjQUFjLENBQUNyQyxJQUE1QjtBQUVILENBNUhEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgam0gPSBqbSB8fCB7fTtcclxudmFyIF8gPSByZXF1aXJlKFwibG9kYXNoXCIpO1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGptLnJvb3QpIHJldHVybjtcclxuICAgIGptLnJvb3QgPSB7fTtcclxuICAgIGptLnJvb3QucmVnaXN0cmllcyA9IHt9O1xyXG59KSgpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBqbTtcbihmdW5jdGlvbigpe1xyXG4gICAgaWYoam0uQ2xhc3MpIHJldHVybjtcclxuICAgIHZhciBmblRlc3QgPSAveHl6Ly50ZXN0KGZ1bmN0aW9uKCl7eHl6O30pID8gL1xcYl9zdXBlclxcYi8gOiAvLiovO1xyXG5cclxuICAgIC8vIFRoZSBiYXNlIENsYXNzIGltcGxlbWVudGF0aW9uIChkb2VzIG5vdGhpbmcpXHJcbiAgICBqbS5DbGFzcyA9IGZ1bmN0aW9uKCl7fTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBuZXcgQ2xhc3MgdGhhdCBpbmhlcml0cyBmcm9tIHRoaXMgY2xhc3NcclxuICAgIGptLkNsYXNzLmV4dGVuZCA9IGZ1bmN0aW9uKHByb3ApIHtcclxuICAgICAgICB2YXIgX3N1cGVyID0gdGhpcy5wcm90b3R5cGU7XHJcblxyXG4gICAgICAgIC8vIEluc3RhbnRpYXRlIGEgYmFzZSBjbGFzcyAoYnV0IG9ubHkgY3JlYXRlIHRoZSBpbnN0YW5jZSxcclxuICAgICAgICAvLyBkb24ndCBydW4gdGhlIGluaXQgY29uc3RydWN0b3IpXHJcbiAgICAgICAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoX3N1cGVyKTtcclxuXHJcbiAgICAgICAgLy8gQ29weSB0aGUgcHJvcGVydGllcyBvdmVyIG9udG8gdGhlIG5ldyBwcm90b3R5cGVcclxuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHByb3ApIHtcclxuICAgICAgICAgICAgaWYobmFtZSA9PSAncHJvcGVydGllcycpe1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UncmUgb3ZlcndyaXRpbmcgYW4gZXhpc3RpbmcgZnVuY3Rpb25cclxuICAgICAgICAgICAgcHJvdG90eXBlW25hbWVdID0gdHlwZW9mIHByb3BbbmFtZV0gPT0gXCJmdW5jdGlvblwiICYmXHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgX3N1cGVyW25hbWVdID09IFwiZnVuY3Rpb25cIiAmJiBmblRlc3QudGVzdChwcm9wW25hbWVdKSA/XHJcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24obmFtZSwgZm4pe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHRoaXMuX3N1cGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGEgbmV3IC5fc3VwZXIoKSBtZXRob2QgdGhhdCBpcyB0aGUgc2FtZSBtZXRob2RcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnV0IG9uIHRoZSBzdXBlci1jbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdXBlciA9IF9zdXBlcltuYW1lXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBtZXRob2Qgb25seSBuZWVkIHRvIGJlIGJvdW5kIHRlbXBvcmFyaWx5LCBzbyB3ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgaXQgd2hlbiB3ZSdyZSBkb25lIGV4ZWN1dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0ID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3VwZXIgPSB0bXA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KShuYW1lLCBwcm9wW25hbWVdKSA6XHJcbiAgICAgICAgICAgICAgICBwcm9wW25hbWVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcHJvcGVydGllcyA9IHByb3BbJ3Byb3BlcnRpZXMnXTtcclxuICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gcHJvcGVydGllcyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVzYyA9IHByb3BlcnRpZXNba2V5XTtcclxuICAgICAgICAgICAgICAgIGlmKGRlc2MuZ2V0ICYmIHR5cGVvZiBkZXNjLmdldCA9PSBcInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgICAgICAgICBkZXNjLmdldCA9IHByb3RvdHlwZVtkZXNjLmdldF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihkZXNjLnNldCAmJiB0eXBlb2YgZGVzYy5zZXQgPT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzYy5zZXQgPSBwcm90b3R5cGVbZGVzYy5zZXRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwga2V5LCBkZXNjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGhlIGR1bW15IGNsYXNzIGNvbnN0cnVjdG9yXHJcbiAgICAgICAgZnVuY3Rpb24gQ2xhc3MoKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2NsYXNzTmFtZSl7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJjbGFzc05hbWVcIiwgeyB2YWx1ZTogdGhpcy5fY2xhc3NOYW1lLCB3cml0YWJsZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEFsbCBjb25zdHJ1Y3Rpb24gaXMgYWN0dWFsbHkgZG9uZSBpbiB0aGUgaW5pdCBtZXRob2RcclxuICAgICAgICAgICAgaWYgKCB0aGlzLmN0b3IgKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQb3B1bGF0ZSBvdXIgY29uc3RydWN0ZWQgcHJvdG90eXBlIG9iamVjdFxyXG4gICAgICAgIENsYXNzLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcclxuXHJcbiAgICAgICAgLy8gRW5mb3JjZSB0aGUgY29uc3RydWN0b3IgdG8gYmUgd2hhdCB3ZSBleHBlY3RcclxuICAgICAgICBDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDbGFzcztcclxuXHJcbiAgICAgICAgLy8gQW5kIG1ha2UgdGhpcyBjbGFzcyBleHRlbmRhYmxlXHJcbiAgICAgICAgQ2xhc3MuZXh0ZW5kID0gam0uQ2xhc3MuZXh0ZW5kO1xyXG5cclxuICAgICAgICByZXR1cm4gQ2xhc3M7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cbihmdW5jdGlvbigpe1xyXG4gICAgaWYoam0uT2JqZWN0KSByZXR1cm47XHJcbiAgICBqbS5PYmplY3QgPSBqbS5DbGFzcy5leHRlbmQoe1xyXG4gICAgICAgIF9jbGFzc05hbWU6ICdvYmplY3QnLFxyXG4gICAgICAgIGF0dHI6IGZ1bmN0aW9uIChhdHRycykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcclxuICAgICAgICAgICAgICAgIGlmKGtleSA9PT0gJ2NsYXNzTmFtZScpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gYXR0cnNba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGptLm9iamVjdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBqbS5PYmplY3QoKTtcclxuICAgIH07XHJcbn0pKCk7XHJcblxuKGZ1bmN0aW9uKCl7XHJcbiAgICBpZihqbS5SYW5kb20pIHJldHVybjtcclxuICAgIHZhciBpUmFuZG9tTWF4ID0gMjAwMDAwMDAwMDAwOyAgICAvL+acgOWkp+maj+acuuaVtOaVsOiMg+WbtCAwIDw9IHJhbmRvbVZhbHVlIDw9IGlSYW5kb21NYXg7XHJcblxyXG4gICAgam0uUmFuZG9tID0gam0uQ2xhc3MuZXh0ZW5kKHtcclxuICAgICAgICBfY2xhc3NOYW1lOiAncmFuZG9tJyxcclxuXHJcbiAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICBzZWVkOiB7IGdldDogJ2dldFNlZWQnLCBzZXQ6ICdzZXRTZWVkJyB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY3RvcjogZnVuY3Rpb24ob3B0cyl7XHJcbiAgICAgICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmdfc2VlZCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZG9tTWF4ID0gIG9wdHMucmFuZG9tTWF4IHx8IGlSYW5kb21NYXg7ICAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0U2VlZCA6IGZ1bmN0aW9uKHNlZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmdfc2VlZCA9IHNlZWQ7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0U2VlZCA6IGZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdfc2VlZDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByYW5kb20gOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLmdfc2VlZCA9ICggdGhpcy5nX3NlZWQgKiA5MzAxICsgNDkyOTcgKSAlIDIzMzI4MDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ19zZWVkIC8gKCAyMzMyODAuMCApO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vbWluPD1yZXN1bHQ8PW1heFxyXG4gICAgICAgIHJhbmRvbUludCA6IGZ1bmN0aW9uKG1pbiwgbWF4KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYobWF4ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIG1heCA9IG1pbjtcclxuICAgICAgICAgICAgICAgIG1pbiA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJhbmdlID0gbWluICsgKHRoaXMucmFuZG9tKCkqKG1heCAtIG1pbikpO1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChyYW5nZSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy9taW48PXJlc3VsdDw9bWF4XHJcbiAgICAgICAgcmFuZG9tRG91YmxlIDogZnVuY3Rpb24obWluLCBtYXgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihtYXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbWF4ID0gbWluO1xyXG4gICAgICAgICAgICAgICAgbWluID0gMC4wO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSBtaW4gKyAodGhpcy5yYW5kb20oKSoobWF4IC0gbWluKSk7XHJcbiAgICAgICAgICAgIHJldHVybiByYW5nZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByYW5kb21SYW5nZSA6IGZ1bmN0aW9uKHJhbmdlKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9tSW50KDAsdGhpcy5yYW5kb21NYXgpICUgcmFuZ2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmFuZG9tT2RkcyA6IGZ1bmN0aW9uKHJhbmdlLCBvZGRzKXtcclxuICAgICAgICAgICAgaWYodGhpcy5yYW5kb21SYW5nZShyYW5nZSkgPCBvZGRzKSByZXR1cm4gMTtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgam0ucmFuZG9tID0gZnVuY3Rpb24ob3B0cyl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBqbS5SYW5kb20ob3B0cyk7XHJcbiAgICB9O1xyXG5cclxufSkoKTtcclxuXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGptLkV2ZW50RW1pdHRlcikgcmV0dXJuO1xyXG4gICAgam0uRXZlbnRFbWl0dGVyID0gam0uT2JqZWN0LmV4dGVuZCh7XHJcbiAgICAgICAgX2NsYXNzTmFtZTogJ2V2ZW50RW1pdHRlcicsXHJcbiAgICAgICAgY3RvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5fcGVyc2lzdEV2ZW50cyA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmFkZExpc3RlbmVyID0gdGhpcy5vbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9fY3JlYXRlTGlzdGVuZXI6IGZ1bmN0aW9uIChmbiwgY2FsbGVyKSB7XHJcbiAgICAgICAgICAgIGNhbGxlciA9IGNhbGxlcjtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGZuOiBmbixcclxuICAgICAgICAgICAgICAgIGNhbGxlcjogY2FsbGVyXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfX2VxdWFsc0xpc3RlbmVyOiBmdW5jdGlvbiAobGlzdGVuZXIxLCBsaXN0ZW5lcjIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVyMS5mbiA9PT0gbGlzdGVuZXIyLmZuICYmIGxpc3RlbmVyMS5jYWxsZXIgPT09IGxpc3RlbmVyMi5jYWxsZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBZGRzIGEgbGlzdGVuZXJcclxuICAgICAgICAgKiBAYXBpIHB1YmxpY1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9uOiBmdW5jdGlvbiAobmFtZSwgZm4sIGNhbGxlcikge1xyXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLl9fY3JlYXRlTGlzdGVuZXIoZm4sIGNhbGxlcik7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fZXZlbnRzW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbbmFtZV0gPSBsaXN0ZW5lcjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRoaXMuX2V2ZW50c1tuYW1lXSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1tuYW1lXS5wdXNoKGxpc3RlbmVyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1tuYW1lXSA9IFt0aGlzLl9ldmVudHNbbmFtZV0sIGxpc3RlbmVyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uUGVyc2lzdDogZnVuY3Rpb24gKG5hbWUsIGZuLCBjYWxsZXIpIHtcclxuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5fX2NyZWF0ZUxpc3RlbmVyKGZuLCBjYWxsZXIpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3BlcnNpc3RFdmVudHNbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BlcnNpc3RFdmVudHNbbmFtZV0gPSBsaXN0ZW5lcjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRoaXMuX3BlcnNpc3RFdmVudHNbbmFtZV0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wZXJzaXN0RXZlbnRzW25hbWVdLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGVyc2lzdEV2ZW50c1tuYW1lXSA9IFt0aGlzLl9wZXJzaXN0RXZlbnRzW25hbWVdLCBsaXN0ZW5lcl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBZGRzIGEgdm9sYXRpbGUgbGlzdGVuZXIuXHJcbiAgICAgICAgICogQGFwaSBwdWJsaWNcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgb25jZTogZnVuY3Rpb24gKG5hbWUsIGZuLCBjYWxsZXIpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLl9fY3JlYXRlTGlzdGVuZXIoZm4sIGNhbGxlcik7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBvbihhcmcxLCBhcmcyLCBhcmczLCBhcmc0LCBhcmc1KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKG5hbWUsIG9uKTtcclxuICAgICAgICAgICAgICAgIGZuLmNhbGwobGlzdGVuZXIuY2FsbGVyLCBhcmcxLCBhcmcyLCBhcmczLCBhcmc0LCBhcmc1KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgb24ubGlzdGVuZXIgPSBsaXN0ZW5lcjtcclxuICAgICAgICAgICAgdGhpcy5vbihuYW1lLCBvbik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVtb3ZlcyBhIGxpc3RlbmVyLlxyXG4gICAgICAgICAqIEBhcGkgcHVibGljXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyOiBmdW5jdGlvbiAobmFtZSwgZm4sIGNhbGxlcikge1xyXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLl9fY3JlYXRlTGlzdGVuZXIoZm4sIGNhbGxlcik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IHRoaXMuX2V2ZW50c1tuYW1lXTtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fX2VxdWFsc0xpc3RlbmVyKG8sIGxpc3RlbmVyKSB8fCAoby5saXN0ZW5lciAmJiB0aGlzLl9fZXF1YWxzTGlzdGVuZXIoby5saXN0ZW5lciwgbGlzdGVuZXIpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3MgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShwb3MsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1tuYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX19lcXVhbHNMaXN0ZW5lcihsaXN0LCBsaXN0ZW5lcikgfHwgKGxpc3QubGlzdGVuZXIgJiYgdGhpcy5fX2VxdWFsc0xpc3RlbmVyKGxpc3QubGlzdGVuZXIsIGxpc3RlbmVyKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlUGVyc2lzdExpc3RlbmVyOiBmdW5jdGlvbiAobmFtZSwgZm4sIGNhbGxlcikge1xyXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLl9fY3JlYXRlTGlzdGVuZXIoZm4sIGNhbGxlcik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9wZXJzaXN0RXZlbnRzICYmIHRoaXMuX3BlcnNpc3RFdmVudHNbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0ID0gdGhpcy5fcGVyc2lzdEV2ZW50c1tuYW1lXTtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fX2VxdWFsc0xpc3RlbmVyKG8sIGxpc3RlbmVyKSB8fCAoby5saXN0ZW5lciAmJiB0aGlzLl9fZXF1YWxzTGlzdGVuZXIoby5saXN0ZW5lciwgbGlzdGVuZXIpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3MgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShwb3MsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghbGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3BlcnNpc3RFdmVudHNbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9fZXF1YWxzTGlzdGVuZXIobGlzdCwgbGlzdGVuZXIpIHx8IChsaXN0Lmxpc3RlbmVyICYmIHRoaXMuX19lcXVhbHNMaXN0ZW5lcihsaXN0Lmxpc3RlbmVyLCBsaXN0ZW5lcikpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3BlcnNpc3RFdmVudHNbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+enu+mZpE5PREXms6jlhoznmoTmiYDmnInkuovku7bjgIJcclxuICAgICAgICBkZWxMaXN0ZW5lcjogZnVuY3Rpb24gKGNhbGxlcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluICB0aGlzLl9ldmVudHMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0ID0gdGhpcy5fZXZlbnRzW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IFtsaXN0XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxpc3QgPSBsaXN0LmNvbmNhdCgpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBsaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdFtpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIuY2FsbGVyICYmIGxpc3RlbmVyLmZuICYmIGxpc3RlbmVyLmNhbGxlciA9PT0gY2FsbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIobmFtZSwgbGlzdGVuZXIuZm4sIGNhbGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZW1vdmVzIGFsbCBsaXN0ZW5lcnMgZm9yIGFuIGV2ZW50LlxyXG4gICAgICAgICAqIEBhcGkgcHVibGljXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIHJlbW92ZUFsbExpc3RlbmVyczogZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLl9ldmVudHNbbmFtZV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1tuYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldHMgYWxsIGxpc3RlbmVycyBmb3IgYSBjZXJ0YWluIGV2ZW50LlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQGFwaSBwdWJsY2lcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgbGlzdGVuZXJzOiBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2V2ZW50c1tuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW25hbWVdID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMuX2V2ZW50c1tuYW1lXSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50c1tuYW1lXSA9IFt0aGlzLl9ldmVudHNbbmFtZV1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudHNbbmFtZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFbWl0cyBhbiBldmVudC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIHRpcDogdXNlIGFyZzEuLi5hcmc1IGluc3RlYWQgb2YgYXJndW1lbnRzIGZvciBwZXJmb3JtYW5jZSBjb25zaWRlci5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBhcGkgcHVibGljXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIGVtaXQ6IGZ1bmN0aW9uIChuYW1lLCBhcmcxLCBhcmcyLCBhcmczLCBhcmc0LCBhcmc1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VtaXRQZXJzaXN0KG5hbWUsIGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQsIGFyZzUpO1xyXG4gICAgICAgICAgICB2YXIgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1tuYW1lXTtcclxuICAgICAgICAgICAgaWYgKCFoYW5kbGVyKSByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShoYW5kbGVyKSkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlci5mbi5jYWxsKGhhbmRsZXIuY2FsbGVyIHx8IHRoaXMsIGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQsIGFyZzUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGFuZGxlcikpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lcnMgPSBuZXcgQXJyYXkoaGFuZGxlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzW2ldID0gaGFuZGxlcltpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoID0gbGlzdGVuZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoLmZuLmNhbGwoaC5jYWxsZXIgfHwgdGhpcywgYXJnMSwgYXJnMiwgYXJnMywgYXJnNCwgYXJnNSkgPT09IGZhbHNlKSBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9lbWl0UGVyc2lzdDogZnVuY3Rpb24gKG5hbWUsIGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQsIGFyZzUpIHtcclxuICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSB0aGlzLl9wZXJzaXN0RXZlbnRzW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoIWhhbmRsZXIpIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGhhbmRsZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmZuLmNhbGwoaGFuZGxlci5jYWxsZXIgfHwgdGhpcywgYXJnMSwgYXJnMiwgYXJnMywgYXJnNCwgYXJnNSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoYW5kbGVyKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVycyA9IG5ldyBBcnJheShoYW5kbGVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhbmRsZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbaV0gPSBoYW5kbGVyW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBsaXN0ZW5lcnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGguZm4uY2FsbChoLmNhbGxlciB8fCB0aGlzLCBhcmcxLCBhcmcyLCBhcmczLCBhcmc0LCBhcmc1KSA9PT0gZmFsc2UpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgam0uZXZlbnRFbWl0dGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBldmVudCA9IG5ldyBqbS5FdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICBldmVudC5vZmYgPSBldmVudC5yZW1vdmVMaXN0ZW5lcjtcclxuICAgICAgICByZXR1cm4gZXZlbnQ7XHJcbiAgICB9XHJcbiAgICB2YXIgcHJvdG90eXBlID0gam0uRXZlbnRFbWl0dGVyLnByb3RvdHlwZTtcclxuICAgIHZhciBFdmVudEVtaXR0ZXIgPSB7XHJcbiAgICAgICAgX2V2ZW50czoge30sXHJcbiAgICAgICAgX3BlcnNpc3RFdmVudHM6IHt9LFxyXG4gICAgICAgIGRlbExpc3RlbmVyOiBwcm90b3R5cGUuZGVsTGlzdGVuZXIsXHJcbiAgICAgICAgcmVtb3ZlUGVyc2lzdExpc3RlbmVyOiBwcm90b3R5cGUucmVtb3ZlUGVyc2lzdExpc3RlbmVyLFxyXG4gICAgICAgIF9lbWl0UGVyc2lzdDogcHJvdG90eXBlLl9lbWl0UGVyc2lzdCxcclxuICAgICAgICBfX2NyZWF0ZUxpc3RlbmVyOiBwcm90b3R5cGUuX19jcmVhdGVMaXN0ZW5lcixcclxuICAgICAgICBfX2VxdWFsc0xpc3RlbmVyOiBwcm90b3R5cGUuX19lcXVhbHNMaXN0ZW5lcixcclxuICAgICAgICBvbjogcHJvdG90eXBlLm9uLFxyXG4gICAgICAgIG9uY2U6IHByb3RvdHlwZS5vbmNlLFxyXG4gICAgICAgIG9uUGVyc2lzdDogcHJvdG90eXBlLm9uUGVyc2lzdCxcclxuICAgICAgICBhZGRMaXN0ZW5lcjogcHJvdG90eXBlLm9uLFxyXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyOiBwcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIsXHJcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogcHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyLFxyXG4gICAgICAgIG9mZjogcHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyLFxyXG4gICAgICAgIHJlbW92ZUFsbExpc3RlbmVyczogcHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyxcclxuICAgICAgICBsaXN0ZW5lcnM6IHByb3RvdHlwZS5saXN0ZW5lcnMsXHJcbiAgICAgICAgZW1pdDogcHJvdG90eXBlLmVtaXRcclxuICAgIH07XHJcbiAgICB2YXIgZW0gPSBFdmVudEVtaXR0ZXI7XHJcbiAgICBqbS5lbmFibGVFdmVudCA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICBpZiAob2JqLl9ldmVudHMgIT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBlbSkge1xyXG4gICAgICAgICAgICBvYmpba2V5XSA9IGVtW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iai5fZXZlbnRzID0ge307XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgam0uZGlzYWJsZUV2ZW50ID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBlbSkge1xyXG4gICAgICAgICAgICBkZWxldGUgb2JqW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxufSkoKTtcclxuXG4oZnVuY3Rpb24oKXtcclxuICAgIGlmKGptLlRhZ09iamVjdCkgcmV0dXJuO1xyXG4gICAgam0uVGFnT2JqZWN0ID0gam0uRXZlbnRFbWl0dGVyLmV4dGVuZCh7XHJcbiAgICAgICAgX2NsYXNzTmFtZTogJ3RhZ09iamVjdCcsXHJcblxyXG4gICAgICAgIGN0b3I6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RhZ3MgPSBbXTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwidGFnc1wiLCB7IHZhbHVlOiB0aGlzLl90YWdzLCB3cml0YWJsZTogZmFsc2UgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsVGFncygpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhc1RhZzogZnVuY3Rpb24odGFnKXtcclxuICAgICAgICAgICAgdmFyIHRhZ3MgPSB0aGlzLl90YWdzO1xyXG4gICAgICAgICAgICByZXR1cm4gdGFncy5pbmRleE9mKHRhZykgIT0gLTE7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFzVGFnQW55OiBmdW5jdGlvbih0YWdzKXtcclxuICAgICAgICAgICAgZm9yKHZhciBpIGluIHRhZ3Mpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHQgPSB0YWdzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5oYXNUYWcodCkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBoYXNUYWdBbGw6IGZ1bmN0aW9uKHRhZ3Mpe1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgaW4gdGFncyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHRhZ3NbaV07XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5oYXNUYWcodCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhZGRUYWc6IGZ1bmN0aW9uKHRhZyl7XHJcbiAgICAgICAgICAgIHZhciB0YWdzID0gdGhpcy5fdGFncztcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzVGFnKHRhZykpIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB0YWdzLnB1c2godGFnKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdhZGRUYWcnLCB0YWcpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhZGRUYWdzOiBmdW5jdGlvbih0YWdzKXtcclxuICAgICAgICAgICAgZm9yKHZhciBpIGluIHRhZ3Mpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHQgPSB0YWdzW2ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUYWcodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmVtb3ZlVGFnOiBmdW5jdGlvbih0YWcpe1xyXG4gICAgICAgICAgICB2YXIgdGFncyA9IHRoaXMuX3RhZ3M7XHJcbiAgICAgICAgICAgIHZhciBpZHggPSB0YWdzLmluZGV4T2YodGFnKTtcclxuICAgICAgICAgICAgaWYoaWR4Pj0wKXtcclxuICAgICAgICAgICAgICAgIHRhZ3Muc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVUYWcnLCB0YWcpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByZW1vdmVUYWdzOiBmdW5jdGlvbih0YWdzKXtcclxuICAgICAgICAgICAgZm9yKHZhciBpIGluIHRhZ3Mpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHQgPSB0YWdzW2ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVUYWcodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmVtb3ZlQWxsVGFnczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuX3RhZ3M7XHJcbiAgICAgICAgICAgIGZvcihpIGluIHYpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVUYWcnLCB2W2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl90YWdzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlQWxsVGFncycpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgam0udGFnT2JqZWN0ID0gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGptLlRhZ09iamVjdCgpO31cclxuXHJcbiAgICB2YXIgcHJvdG90eXBlID0gam0uVGFnT2JqZWN0LnByb3RvdHlwZTtcclxuICAgIHZhciBUYWcgPSB7XHJcbiAgICAgICAgX3RhZ3M6IFtdLFxyXG4gICAgICAgIGhhc1RhZzogcHJvdG90eXBlLmhhc1RhZyxcclxuICAgICAgICBoYXNUYWdBbnk6IHByb3RvdHlwZS5oYXNUYWdBbnksXHJcbiAgICAgICAgaGFzVGFnQWxsOiBwcm90b3R5cGUuaGFzVGFnQWxsLFxyXG4gICAgICAgIGFkZFRhZzogcHJvdG90eXBlLmFkZFRhZyxcclxuICAgICAgICBhZGRUYWdzOiBwcm90b3R5cGUuYWRkVGFncyxcclxuICAgICAgICByZW1vdmVUYWc6IHByb3RvdHlwZS5yZW1vdmVUYWcsXHJcbiAgICAgICAgcmVtb3ZlVGFnczogcHJvdG90eXBlLnJlbW92ZVRhZ3MsXHJcbiAgICAgICAgcmVtb3ZlQWxsVGFnczogcHJvdG90eXBlLnJlbW92ZUFsbFRhZ3NcclxuICAgIH07XHJcbiAgICBqbS5lbmFibGVUYWcgPSBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICBpZihvYmouX3RhZ3MhPXVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICAgIGZvcih2YXIga2V5IGluIFRhZyl7XHJcbiAgICAgICAgICAgIG9ialtrZXldID0gVGFnW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iai5fdGFncyA9IFtdO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIFwidGFnc1wiLCB7IHZhbHVlOiBvYmouX3RhZ3MsIHdyaXRhYmxlOiBmYWxzZSB9KTtcclxuICAgICAgICBqbS5lbmFibGVFdmVudChvYmopO1xyXG4gICAgfTtcclxuICAgIGptLmRpc2FibGVUYWcgPSBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICBmb3IodmFyIGtleSBpbiBUYWcpe1xyXG4gICAgICAgICAgICBkZWxldGUgb2JqW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGptLmRpc2FibGVFdmVudChvYmopO1xyXG4gICAgfTtcclxufSkoKTtcclxuXG4oZnVuY3Rpb24gKCkge1xuICAgIGlmIChqbS5FbnRpdHkpIHJldHVybjtcbiAgICB2YXIgZ3VpZCA9IDE7XG5cbiAgICBmdW5jdGlvbiBpc0VtcHR5T2JqZWN0KGUpIHtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIGZvciAodCBpbiBlKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBqbS5FbnRpdHkgPSBqbS5UYWdPYmplY3QuZXh0ZW5kKHtcbiAgICAgICAgX2NsYXNzTmFtZTogJ2VudGl0eScsXG5cbiAgICAgICAgY3RvcjogZnVuY3Rpb24gKGVudGl0eU1hbmFnZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1cGVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZW50aXR5TWFuYWdlciA9IGVudGl0eU1hbmFnZXI7XG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRzID0ge307XG4gICAgICAgICAgICB0aGlzLl9jb21wb25lbnRzQnlDbGFzcyA9IHt9O1xuICAgICAgICAgICAgdGhpcy5fY29tcG9uZW50R1VJRCA9IDE7XG5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZW50aXR5SWQgPSBndWlkKys7XG5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNvbXBvbmVudHNcIiwge3ZhbHVlOiB0aGlzLl9jb21wb25lbnRzLCB3cml0YWJsZTogZmFsc2V9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNvbXBvbmVudHNCeUNsYXNzXCIsIHt2YWx1ZTogdGhpcy5fY29tcG9uZW50c0J5Q2xhc3MsIHdyaXRhYmxlOiBmYWxzZX0pO1xuXG4gICAgICAgICAgICB0aGlzLm9uKCdhZGRUYWcnLCBmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgICAgICAgICAgZW50aXR5TWFuYWdlci5fZW50aXRpZXNCeVRhZ1t0YWddID0gZW50aXR5TWFuYWdlci5fZW50aXRpZXNCeVRhZ1t0YWddIHx8IHt9O1xuICAgICAgICAgICAgICAgIGVudGl0eU1hbmFnZXIuX2VudGl0aWVzQnlUYWdbdGFnXVt0aGlzLmVudGl0eUlkXSA9IHRoaXM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMub24oJ3JlbW92ZVRhZycsIGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IGVudGl0eU1hbmFnZXIuX2VudGl0aWVzQnlUYWdbdGFnXTtcbiAgICAgICAgICAgICAgICBpZiAoIW8pIHJldHVybjtcbiAgICAgICAgICAgICAgICBkZWxldGUgb1t0aGlzLmVudGl0eUlkXTtcbiAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eU9iamVjdChvKSlcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGVudGl0eU1hbmFnZXIuX2VudGl0aWVzQnlUYWdbdGFnXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZGVzdHJveScsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxDb21wb25lbnRzKCk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFsbFRhZ3MoKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVDaGlsZDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMuZW50aXR5TWFuYWdlci5yZW1vdmVFbnRpdHkoZS5lbnRpdHlJZCk7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gXy53aXRob3V0KHRoaXMuY2hpbGRyZW4sIGUpO1xuICAgICAgICAgICAgZS5kZXN0cm95KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlRnJvbVBhcmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxUYWdzKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRpdHlNYW5hZ2VyLnJlbW92ZUVudGl0eSh0aGlzLmVudGl0eUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBhZGRDb21wb25lbnQ6IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICB2YXIgY29tcG9uZW50cyA9IHRoaXMuX2NvbXBvbmVudHM7XG4gICAgICAgICAgICB2YXIgY29tcG9uZW50c0J5Q2xhc3MgPSB0aGlzLl9jb21wb25lbnRzQnlDbGFzcztcbiAgICAgICAgICAgIHZhciBuYW1lID0gYy5uYW1lO1xuICAgICAgICAgICAgdmFyIGNDbGFzc05hbWUgPSBjLmNsYXNzTmFtZTtcblxuICAgICAgICAgICAgdmFyIGJVc2VkTmFtZSA9IChuYW1lIGluIGNvbXBvbmVudHMgKTtcbiAgICAgICAgICAgIGlmIChiVXNlZE5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYy5zaW5nbGV0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJVc2VkTmFtZSkgdGhyb3cgXCJjb21wb25lbiBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoZSBuYW1lOiBcIiArIG5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5hbWUgPSBjQ2xhc3NOYW1lICsgdGhpcy5fY29tcG9uZW50R1VJRCsrO1xuICAgICAgICAgICAgICAgIGMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjQ2xhc3NOYW1lIGluIGNvbXBvbmVudHNCeUNsYXNzKSB7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHNCeUNsYXNzW2NDbGFzc05hbWVdID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdkJ5Q2xhc3MgPSBjb21wb25lbnRzQnlDbGFzc1tjQ2xhc3NOYW1lXTtcblxuICAgICAgICAgICAgY29tcG9uZW50c1tuYW1lXSA9IGM7XG4gICAgICAgICAgICB2QnlDbGFzc1tuYW1lXSA9IGM7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gYztcbiAgICAgICAgICAgIHRoaXMuYWRkVGFnKGNDbGFzc05hbWUpO1xuICAgICAgICAgICAgaWYgKGMuY2xhc3NBbGlhcykgdGhpcy5hZGRUYWcoYy5jbGFzc0FsaWFzKTtcblxuICAgICAgICAgICAgYy5vbkFkZCh0aGlzKTtcbiAgICAgICAgICAgIGMuZW1pdCgnYWRkJywgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2FkZENvbXBvbmVudCcsIGMpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVDb21wb25lbnQ6IGZ1bmN0aW9uIChjX29yX25hbWUpIHtcbiAgICAgICAgICAgIHZhciBjb21wb25lbnRzID0gdGhpcy5fY29tcG9uZW50cztcbiAgICAgICAgICAgIHZhciBjb21wb25lbnRzQnlDbGFzcyA9IHRoaXMuX2NvbXBvbmVudHNCeUNsYXNzO1xuICAgICAgICAgICAgdmFyIGMgPSBjX29yX25hbWU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGMgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjID0gY29tcG9uZW50c1tjXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYykgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IGMubmFtZTtcbiAgICAgICAgICAgIHZhciBjQ2xhc3NOYW1lID0gYy5jbGFzc05hbWU7XG4gICAgICAgICAgICB2YXIgdiA9IGNvbXBvbmVudHNCeUNsYXNzW2NDbGFzc05hbWVdO1xuICAgICAgICAgICAgZGVsZXRlIGNvbXBvbmVudHNbbmFtZV07XG4gICAgICAgICAgICBkZWxldGUgdltuYW1lXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW25hbWVdO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVUYWcoY0NsYXNzTmFtZSk7XG5cbiAgICAgICAgICAgIGMub25SZW1vdmUodGhpcyk7XG4gICAgICAgICAgICBjLmVtaXQoJ3JlbW92ZScsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVDb21wb25lbnQnLCBjKTtcbiAgICAgICAgICAgIGMuZGVzdHJveSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlQ29tcG9uZW50czogZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldENvbXBvbmVudHMoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGZvciAoaSBpbiB2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDb21wb25lbnQoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY29tcG9uZW50c0J5Q2xhc3NbY2xhc3NOYW1lXTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlQ29tcG9uZW50cycsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVBbGxDb21wb25lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuX2NvbXBvbmVudHM7XG4gICAgICAgICAgICBmb3IgKGkgaW4gdikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ29tcG9uZW50KGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVBbGxDb21wb25lbnRzJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRDb21wb25lbnQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50c1tuYW1lXTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRDb21wb25lbnRzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50c0J5Q2xhc3NbY2xhc3NOYW1lXTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog6Y2Y57uY5biAZW50aXR5VHlwZea2k+6FnuWHoee8geW/k+eVvua2lOWkjOaukemQqeeov+aCk+mWruOEpeWejlxuICAgICAgICAgKi9cbiAgICAgICAgX2NsaXA6IGZ1bmN0aW9uIChvcmlnaW4sIHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKCFvcmlnaW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBvYmogPSB0YXJnZXQ7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHRhcmdldFtrZXldO1xuICAgICAgICAgICAgICAgIHZhciBvID0gb3JpZ2luW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKF8uaXNPYmplY3QodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NsaXAobywgdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uaXNFbXB0eSh0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0ID09PSBvKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZW0gPSB0aGlzLmVudGl0eU1hbmFnZXI7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IHRoaXMudHlwZTtcbiAgICAgICAgICAgIHZhciBldCA9IGVtLmVudGl0eVR5cGUodHlwZSk7XG5cbiAgICAgICAgICAgIHZhciBvcHRzID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgdGFnczogW10sXG4gICAgICAgICAgICAgICAgY29tcG9uZW50czoge31cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIG9wdHMudGFncyA9IF8uY2xvbmVEZWVwKHRoaXMudGFncyk7XG4gICAgICAgICAgICBvcHRzLnRhZ3MgPSBfLndpdGhvdXQob3B0cy50YWdzLCB0eXBlKTtcblxuICAgICAgICAgICAgdmFyIGNzID0gb3B0cy5jb21wb25lbnRzO1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmNvbXBvbmVudHM7XG4gICAgICAgICAgICBmb3IgKGkgaW4gdikge1xuICAgICAgICAgICAgICAgIHZhciBjID0gdltpXTtcbiAgICAgICAgICAgICAgICBjc1tpXSA9IGMudG9KU09OKCk7XG4gICAgICAgICAgICAgICAgb3B0cy50YWdzID0gXy53aXRob3V0KG9wdHMudGFncywgaSwgYy5jbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChjLmNsYXNzQWxpYXMpIG9wdHMudGFncyA9IF8ud2l0aG91dChvcHRzLnRhZ3MsIGMuY2xhc3NBbGlhcyk7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGNzW2ldLmNsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNzW2ldLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpIGluIGV0LnRhZ3MpIHtcbiAgICAgICAgICAgICAgICBvcHRzLnRhZ3MgPSBfLndpdGhvdXQob3B0cy50YWdzLCBldC50YWdzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghb3B0cy50YWdzLmxlbmd0aCkgZGVsZXRlIG9wdHMudGFncztcblxuICAgICAgICAgICAgLy/pjZjnu5jluIBlbnRpdHlUeXBl5raT7oWe5Yeh57yB5b+T55W+5raU5aSM5q6R6ZCp56i/5oKT6Zau44Sl5Z6OXG4gICAgICAgICAgICB0aGlzLl9jbGlwKGV0LCBvcHRzKTtcblxuICAgICAgICAgICAgdiA9IHRoaXMuY2hpbGRyZW47XG4gICAgICAgICAgICBmb3IgKGkgaW4gdikge1xuICAgICAgICAgICAgICAgIHZhciBlID0gdltpXTtcbiAgICAgICAgICAgICAgICBpZiAoIW9wdHMuY2hpbGRyZW4pIG9wdHMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICAgICAgICBvcHRzLmNoaWxkcmVuLnB1c2goZS50b0pTT04oKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvcHRzO1xuICAgICAgICB9XG5cbiAgICB9KTtcbn0pKCk7XG4oZnVuY3Rpb24gKCkge1xuICAgIGlmIChqbS5Db21wb25lbnQpIHJldHVybjtcbiAgICBqbS5Db21wb25lbnQgPSBqbS5UYWdPYmplY3QuZXh0ZW5kKHtcbiAgICAgICAgX2NsYXNzTmFtZTogJ2NvbXBvbmVudCcsXG4gICAgICAgIF9zaW5nbGV0b246IHRydWUsXG4gICAgICAgIF9uYW1lUmVhZE9ubHk6IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICBzaW5nbGV0b246IHtnZXQ6ICdnZXRTaWdubGV0b24nfSxcbiAgICAgICAgICAgIGVudGl0eToge2dldDogJ2dldEVudGl0eSd9LFxuICAgICAgICAgICAgbmFtZToge2dldDogJ2dldE5hbWUnLCBzZXQ6ICdzZXROYW1lJ31cbiAgICAgICAgfSxcblxuICAgICAgICBjdG9yOiBmdW5jdGlvbiAoZW50aXR5LCBvcHRzKSB7XG4gICAgICAgICAgICB0aGlzLl9zdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5fZW50aXR5ID0gZW50aXR5O1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKG9wdHMpIHRoaXMuYXR0cihvcHRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIG9uIGFkZGVkIHRvIGFuIGVudGl0eVxuICAgICAgICAgKiBAcGFyYW0gZVxuICAgICAgICAgKi9cbiAgICAgICAgb25BZGQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIG9uIHJlbW92ZWQgZnJvbSBhbiBlbnRpdHlcbiAgICAgICAgICogQHBhcmFtIGVcbiAgICAgICAgICovXG4gICAgICAgIG9uUmVtb3ZlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldE5hbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lIHx8IHRoaXMuY2xhc3NBbGlhcyB8fCB0aGlzLmNsYXNzTmFtZTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXROYW1lOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX25hbWVSZWFkT25seSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0U2lnbmxldG9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2luZ2xldG9uO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldEVudGl0eTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2VudGl0eTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b0pTT046IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNsYXNzQWxpYXMgfHwgdGhpcy5jbGFzc05hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgam0ucm9vdC5yZWdpc3RyaWVzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgICdjb21wb25lbnQnOiBqbS5Db21wb25lbnRcbiAgICB9O1xuXG4gICAgam0uQ29tcG9uZW50LmV4dGVuZCA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgICAgIHZhciBDbGFzcyA9IGptLkNsYXNzLmV4dGVuZC5jYWxsKHRoaXMsIG9wdHMpO1xuICAgICAgICBDbGFzcy5leHRlbmQgPSBqbS5Db21wb25lbnQuZXh0ZW5kO1xuICAgICAgICBqbS5yb290LnJlZ2lzdHJpZXMuY29tcG9uZW50c1tDbGFzcy5wcm90b3R5cGUuX2NsYXNzTmFtZV0gPSBDbGFzcztcbiAgICAgICAgcmV0dXJuIENsYXNzO1xuICAgIH07XG5cbn0pKCk7XG4oZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGptLkZhY3RvcnkpIHJldHVybjtcclxuICAgIGptLkZhY3RvcnkgPSBqbS5FdmVudEVtaXR0ZXIuZXh0ZW5kKHtcclxuICAgICAgICBfY2xhc3NOYW1lOiAnZmFjdG9yeScsXHJcblxyXG4gICAgICAgIGN0b3I6IGZ1bmN0aW9uIChlbnRpdHlNYW5hZ2VyLCBvcHRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1cGVyKG9wdHMpO1xyXG4gICAgICAgICAgICB0aGlzLmVudGl0eU1hbmFnZXIgPSBlbnRpdHlNYW5hZ2VyO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRlc3Rvcnk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdkZXN0cm95JywgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1cGVyKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAob3B0cykge1xyXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBqbS5FbnRpdHkodGhpcy5lbnRpdHlNYW5hZ2VyKTtcclxuICAgICAgICAgICAgaWYgKCFvcHRzIHx8ICFvcHRzLmNvbXBvbmVudHMpIHJldHVybiBlO1xyXG4gICAgICAgICAgICBpZiAob3B0cy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGUucGFyZW50ID0gb3B0cy5wYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBjO1xyXG4gICAgICAgICAgICB2YXIgZW0gPSB0aGlzLmVudGl0eU1hbmFnZXI7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gb3B0cy5jb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5mbyA9IG9wdHMuY29tcG9uZW50c1tuYW1lXTtcclxuICAgICAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZm8uY2xhc3NOYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGluZm8uY2xhc3NOYW1lO1xyXG4gICAgICAgICAgICAgICAgdmFyIEMgPSBlbS5jb21wb25lbnQoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmICghQykge1xyXG4gICAgICAgICAgICAgICAgICAgIEMgPSBqbS5yb290LnJlZ2lzdHJpZXMuY29tcG9uZW50c1tjbGFzc05hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChDKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtLmFkZENvbXBvbmVudChDLCBjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsYXNzTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgQyA9IGV2YWwoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEMgPSBqbS5yb290LnJlZ2lzdHJpZXMuY29tcG9uZW50c1tDLnByb3RvdHlwZS5fY2xhc3NOYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW0uYWRkQ29tcG9uZW50KEMsIGNsYXNzTmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbS5lbWl0KCd3YXJuJywgJ2NhbiBub3QgZmluZCBjb21wb25lbnQgJyArIGNsYXNzTmFtZSArICcsIGlnbm9yZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYyA9IG5ldyBDKGUsIGluZm8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZm8uY2xhc3NOYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIGMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgICAgICBlLmFkZENvbXBvbmVudChjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2NyZWF0ZScsIGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGptLnJvb3QucmVnaXN0cmllcy5mYWN0b3JpZXMgPSB7XHJcbiAgICAgICAgJ2ZhY3RvcnknOiBqbS5GYWN0b3J5XHJcbiAgICB9O1xyXG4gICAgam0uRmFjdG9yeS5leHRlbmQgPSBmdW5jdGlvbiAob3B0cykge1xyXG4gICAgICAgIHZhciBDbGFzcyA9IGptLkNsYXNzLmV4dGVuZC5jYWxsKHRoaXMsIG9wdHMpO1xyXG4gICAgICAgIENsYXNzLmV4dGVuZCA9IGptLkZhY3RvcnkuZXh0ZW5kO1xyXG4gICAgICAgIGptLnJvb3QucmVnaXN0cmllcy5mYWN0b3JpZXNbQ2xhc3MucHJvdG90eXBlLl9jbGFzc05hbWVdID0gQ2xhc3M7XHJcbiAgICAgICAgcmV0dXJuIENsYXNzO1xyXG4gICAgfTtcclxufSkoKTtcbihmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGptLkVudGl0eU1hbmFnZXIpIHJldHVybjtcbiAgICB2YXIgX19wYXJzZUNvbmZpZ0luZm8gPSBmdW5jdGlvbiAob3B0cywga2V5KSB7XG4gICAgICAgIHZhciBiQXJyYXkgPSBBcnJheS5pc0FycmF5KG9wdHMpO1xuICAgICAgICB2YXIgY2xhc3NOYW1lLCBuYW1lO1xuICAgICAgICBpZiAoYkFycmF5KSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBvcHRzW2tleV07XG4gICAgICAgICAgICBuYW1lID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGtleTtcbiAgICAgICAgICAgIG5hbWUgPSBvcHRzW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2NsYXNzTmFtZTogY2xhc3NOYW1lLCBuYW1lOiBuYW1lfTtcbiAgICB9O1xuXG4gICAgam0uRW50aXR5TWFuYWdlciA9IGptLkV2ZW50RW1pdHRlci5leHRlbmQoe1xuICAgICAgICBfY2xhc3NOYW1lOiAnZW50aXR5TWFuYWdlcicsXG5cbiAgICAgICAgY3RvcjogZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1cGVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NvcnMgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuX2ZhY3RvcmllcyA9IHt9O1xuICAgICAgICAgICAgdGhpcy5fZW50aXR5VHlwZXMgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuX3Bvb2xzID0ge307XG5cbiAgICAgICAgICAgIHRoaXMuX2VudGl0aWVzID0ge307XG4gICAgICAgICAgICB0aGlzLl9lbnRpdGllc0J5TmFtZSA9IHt9O1xuICAgICAgICAgICAgdGhpcy5fZW50aXRpZXNCeVRhZyA9IHt9O1xuXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJjb21wb25lbnRzXCIsIHt2YWx1ZTogdGhpcy5fY29tcG9uZW50cywgd3JpdGFibGU6IGZhbHNlfSk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJwcm9jZXNzb3JzXCIsIHt2YWx1ZTogdGhpcy5fcHJvY2Vzc29ycywgd3JpdGFibGU6IGZhbHNlfSk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJmYWN0b3JpZXNcIiwge3ZhbHVlOiB0aGlzLl9mYWN0b3JpZXMsIHdyaXRhYmxlOiBmYWxzZX0pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZW50aXR5VHlwZXNcIiwge3ZhbHVlOiB0aGlzLl9lbnRpdHlUeXBlcywgd3JpdGFibGU6IGZhbHNlfSk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJwb29sc1wiLCB7dmFsdWU6IHRoaXMuX3Bvb2xzLCB3cml0YWJsZTogZmFsc2V9KTtcblxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiZW50aXRpZXNcIiwge3ZhbHVlOiB0aGlzLl9lbnRpdGllcywgd3JpdGFibGU6IGZhbHNlfSk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJlbnRpdGllc0J5TmFtZVwiLCB7dmFsdWU6IHRoaXMuX2VudGl0aWVzQnlOYW1lLCB3cml0YWJsZTogZmFsc2V9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImVudGl0aWVzQnlUYWdcIiwge3ZhbHVlOiB0aGlzLl9lbnRpdGllc0J5VGFnLCB3cml0YWJsZTogZmFsc2V9KTtcblxuICAgICAgICAgICAgdmFyIHYgPSBqbS5yb290LnJlZ2lzdHJpZXMuZmFjdG9yaWVzO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHYpIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IG5ldyB2W2tleV0odGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRGYWN0b3J5KG8sIGtleSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaW5pdChvcHRzKVxuICAgICAgICB9LFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgICAgICAgICBpZiAoIW9wdHMpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50cyhvcHRzLmNvbXBvbmVudHMpO1xuICAgICAgICAgICAgdGhpcy5hZGRQcm9jZXNzb3JzKG9wdHMucHJvY2Vzc29ycyk7XG4gICAgICAgICAgICB0aGlzLmFkZEZhY3RvcmllcyhvcHRzLmZhY3Rvcmllcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkQ29tcG9uZW50czogZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgICAgIHZhciBiQXJyYXkgPSBfLmlzQXJyYXkob3B0cyk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb3B0cykge1xuICAgICAgICAgICAgICAgIHZhciBpbmZvID0gX19wYXJzZUNvbmZpZ0luZm8ob3B0cywga2V5KTtcbiAgICAgICAgICAgICAgICB2YXIgQyA9IGV2YWwoaW5mby5jbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KEMsIGluZm8uY2xhc3NOYW1lLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChDLCBpbmZvLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkUHJvY2Vzc29yczogZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBvcHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZm8gPSBfX3BhcnNlQ29uZmlnSW5mbyhvcHRzLCBrZXkpO1xuICAgICAgICAgICAgICAgIHZhciBvID0gZXZhbCgnbmV3ICcgKyBpbmZvLmNsYXNzTmFtZSArICcodGhpcyknKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5mby5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkUHJvY2Vzc29yKG8sIGluZm8ubmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRQcm9jZXNzb3IobywgaW5mby5jbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkZEZhY3RvcmllczogZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBvcHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZm8gPSBfX3BhcnNlQ29uZmlnSW5mbyhvcHRzLCBrZXkpO1xuICAgICAgICAgICAgICAgIHZhciBvID0gZXZhbCgnbmV3ICcgKyBpbmZvLmNsYXNzTmFtZSArICcodGhpcyknKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEZhY3RvcnkobywgaW5mby5jbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRmFjdG9yeShvLCBpbmZvLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkQ29tcG9uZW50OiBmdW5jdGlvbiAoQywgbmFtZSwgbm90QWxpYXMpIHtcbiAgICAgICAgICAgIGlmICghQykgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gQy5wcm90b3R5cGUuX2NsYXNzTmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFub3RBbGlhcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSAhPSBDLnByb3RvdHlwZS5fY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDLnByb3RvdHlwZS5jbGFzc0FsaWFzID0gbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9jb21wb25lbnRzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd3YXJuJywgJ2FkZCBDb21wb2VudCBhbHJlYWR5IGV4aXN0cyBmb3IgJyArIG5hbWUgKyAnLCByZXBsYWNlZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudHNbbmFtZV0gPSBDO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdhZGRDb21wb25lbnQnLCBuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZUNvbXBvbmVudDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBjb21wb25lbnRzID0gdGhpcy5fY29tcG9uZW50cztcbiAgICAgICAgICAgIHZhciBvID0gY29tcG9uZW50c1tuYW1lXTtcbiAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVDb21wb25lbnQnLCBuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSBjb21wb25lbnRzW25hbWVdO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcG9uZW50OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudHNbbmFtZV07XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkRW50aXR5VHlwZTogZnVuY3Rpb24gKHR5cGUsIG9wdHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9lbnRpdHlUeXBlc1t0eXBlXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnd2FybicsICdhZGQgZW50aXR5VHlwZSBhbHJlYWR5IGV4aXN0cyBmb3IgJyArIHR5cGUgKyAnLCByZXBsYWNlZC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZW50aXR5VHlwZXNbdHlwZV0gPSBvcHRzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkZEVudGl0eVR5cGVzOiBmdW5jdGlvbiAob3B0cykge1xuICAgICAgICAgICAgZm9yICh2YXIgdHlwZSBpbiBvcHRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFbnRpdHlUeXBlKHR5cGUsIG9wdHNbdHlwZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGVudGl0eVR5cGU6IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZW50aXR5VHlwZXNbdHlwZV07XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkRmFjdG9yeTogZnVuY3Rpb24gKGYsIG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghZikgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICBuYW1lID0gbmFtZSB8fCBmLm5hbWUgfHwgZi5jbGFzc05hbWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9mYWN0b3JpZXNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3dhcm4nLCAnYWRkIGZhY3RvcnkgYWxyZWFkeSBleGlzdHMgZm9yICcgKyBuYW1lICsgJywgcmVwbGFjZWQuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2ZhY3Rvcmllc1tuYW1lXSA9IGY7XG4gICAgICAgICAgICBpZiAoZi5lbnRpdHlNYW5hZ2VyICE9IHRoaXMpXG4gICAgICAgICAgICAgICAgZi5lbnRpdHlNYW5hZ2VyID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnYWRkRmFjdG9yeScsIGYpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVGYWN0b3J5OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdmFyIGZhY3RvcmllcyA9IHRoaXMuX2ZhY3RvcmllcztcbiAgICAgICAgICAgIHZhciBmID0gZmFjdG9yaWVzW25hbWVdO1xuICAgICAgICAgICAgaWYgKGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUZhY3RvcnknLCBmKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgZmFjdG9yaWVzW25hbWVdO1xuICAgICAgICAgICAgICAgIGYuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmFjdG9yeTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mYWN0b3JpZXNbbmFtZV07XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkUHJvY2Vzc29yOiBmdW5jdGlvbiAocCwgbmFtZSkge1xuICAgICAgICAgICAgaWYgKCFwKSByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICBuYW1lID0gcC5uYW1lIHx8IHAuY2xhc3NOYW1lO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fcHJvY2Vzc29yc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnd2FybicsICdhZGQgcHJvY2Vzc29yIGFscmVhZHkgZXhpc3RzIGZvciAnICsgbmFtZSArICcsIHJlcGxhY2VkLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzb3JzW25hbWVdID0gcDtcbiAgICAgICAgICAgIGlmIChwLmVudGl0eU1hbmFnZXIgIT0gdGhpcylcbiAgICAgICAgICAgICAgICBwLmVudGl0eU1hbmFnZXIgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdhZGRQcm9jZXNzb3InLCBwKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlUHJvY2Vzc29yOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdmFyIHByb2Nlc3NvcnMgPSB0aGlzLl9wcm9jZXNzb3JzO1xuICAgICAgICAgICAgdmFyIHAgPSBwcm9jZXNzb3JzW25hbWVdO1xuXG4gICAgICAgICAgICBpZiAocCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlUHJvY2Vzc29yJywgcCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByb2Nlc3NvcnNbbmFtZV07XG4gICAgICAgICAgICAgICAgcC5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIHByb2Nlc3NvcjogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzb3JzW25hbWVdO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vX19jcmVhdGVFbnRpdHlGcm9tUG9vbDogZnVuY3Rpb24gKHR5cGUsIG9wdHMsIHBhcmVudCkge1xuICAgICAgICAvLyAgICBpZiAoIXRoaXMuX2VudGl0eVR5cGVzW3R5cGVdLnBvb2xhYmxlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgLy8gICAgaWYgKHBhcmVudCkgcmV0dXJuIG51bGw7XG4gICAgICAgIC8vICAgIGlmIChvcHRzICYmIG9wdHMucGFyZW50KSByZXR1cm4gbnVsbDtcbiAgICAgICAgLy8gICAgaWYgKHRoaXMuX3Bvb2xzW3R5cGVdKSB7XG4gICAgICAgIC8vICAgICAgICB2YXIgZSA9IHRoaXMuX3Bvb2xzW3R5cGVdLnNoaWZ0KCk7XG4gICAgICAgIC8vICAgICAgICBpZiAoZSkge1xuICAgICAgICAvLyAgICAgICAgICAgIGUuZW1pdCgncmV1c2UnLCBvcHRzKTtcbiAgICAgICAgLy8gICAgICAgICAgICB0aGlzLmFkZEVudGl0eShlKTtcbiAgICAgICAgLy8gICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgLy8gICAgICAgIH1cbiAgICAgICAgLy8gICAgfVxuICAgICAgICAvLyAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgLy99LFxuXG4gICAgICAgIGNyZWF0ZUVudGl0eTogZnVuY3Rpb24gKHR5cGUsIG9wdHMsIHBhcmVudCkge1xuICAgICAgICAgICAgdmFyIGUgPSBudWxsO1xuXG4gICAgICAgICAgICB2YXIgX29wdHMgPSBvcHRzO1xuICAgICAgICAgICAgb3B0cyA9IHt9O1xuICAgICAgICAgICAgb3B0cyA9IF8uY2xvbmVEZWVwKHRoaXMuX2VudGl0eVR5cGVzW3R5cGVdKTsgLy/lhYvpmoZcbiAgICAgICAgICAgIGlmIChfb3B0cykge1xuICAgICAgICAgICAgICAgIG9wdHMgPSBfLm1lcmdlKG9wdHMsIF8uY2xvbmVEZWVwKF9vcHRzKSk7IC8v5ZCI5bm2XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBuYW1lID0gb3B0cy5mYWN0b3J5IHx8ICdmYWN0b3J5JztcbiAgICAgICAgICAgIHZhciBmID0gdGhpcy5fZmFjdG9yaWVzW25hbWVdO1xuICAgICAgICAgICAgaWYgKCFmKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIG9wdHMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgZSA9IGYuY3JlYXRlKG9wdHMpO1xuICAgICAgICAgICAgaWYgKCFlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGUudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICBlLmFkZFRhZyh0eXBlKTtcbiAgICAgICAgICAgIGUuYWRkVGFncyhvcHRzLnRhZ3MpO1xuICAgICAgICAgICAgdGhpcy5hZGRFbnRpdHkoZSk7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW50aXR5Q2hpbGRyZW4oZSwgb3B0cyk7XG5cbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZUVudGl0eUNoaWxkcmVuOiBmdW5jdGlvbiAoZSwgb3B0cykge1xuICAgICAgICAgICAgLy9jcmVhdGUgQ2hpbGRyZW5cbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gb3B0cy5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHZhciBpbmZvID0gb3B0cy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBpZiAoIWluZm8pIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHZhciBvID0gbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gaW5mby5jbGFzc05hbWUgfHwgJ2ptLkVudGl0eSc7XG4gICAgICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSA9PSAnam0uRW50aXR5Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IGluZm8udHlwZTtcbiAgICAgICAgICAgICAgICAgICAgbyA9IHRoaXMuY3JlYXRlRW50aXR5KHR5cGUsIGluZm8sIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLmNoaWxkcmVuLnB1c2gobyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkRW50aXR5OiBmdW5jdGlvbiAoZSwgdGFnKSB7XG4gICAgICAgICAgICBpZiAoIWUgfHwgIWUuZW50aXR5SWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhZykge1xuICAgICAgICAgICAgICAgIGUuYWRkVGFnKHRhZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2VudGl0aWVzW2UuZW50aXR5SWRdID0gZTtcbiAgICAgICAgICAgIGlmIChlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbnRpdGllc0J5TmFtZVtlLm5hbWVdID0gZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5lbWl0KCdhZGQnLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnYWRkRW50aXR5JywgZSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICAvL1xuICAgICAgICAvL19fcmVtb3ZlRW50aXR5VG9Qb29sOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyAgICB2YXIgdHlwZSA9IGUudHlwZTtcbiAgICAgICAgLy8gICAgaWYgKCF0aGlzLl9lbnRpdHlUeXBlc1t0eXBlXS5wb29sYWJsZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyAgICBpZiAoZS5wYXJlbnQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gICAgLy/mv6HlgpvngYnpjZnuiJvnnZzpjZY/IOeAm+aouuWfjOWnueeKu+WZt1xuICAgICAgICAvLyAgICBpZiAoIXRoaXMuX3Bvb2xzW3R5cGVdKSB0aGlzLl9wb29sc1t0eXBlXSA9IFtdO1xuICAgICAgICAvLyAgICB2YXIgcG9vbCA9IHRoaXMuX3Bvb2xzW3R5cGVdO1xuICAgICAgICAvLyAgICBlLmVtaXQoJ3VudXNlJyk7XG4gICAgICAgIC8vICAgIHBvb2wucHVzaChlKTtcbiAgICAgICAgLy8gICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vfSxcbiAgICAgICAgLy9cbiAgICAgICAgLy9jbGVhclBvb2w6IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIC8vICAgIHZhciBwb29sID0gdGhpcy5fcG9vbHNbdHlwZV07XG4gICAgICAgIC8vICAgIGlmICghcG9vbCkgcmV0dXJuO1xuICAgICAgICAvLyAgICB0aGlzLl9wb29sc1t0eXBlXSA9IFtdO1xuICAgICAgICAvLyAgICBwb29sLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gICAgICAgIGUuZGVzdHJveSgpO1xuICAgICAgICAvLyAgICB9KTtcbiAgICAgICAgLy99LFxuICAgICAgICAvL1xuICAgICAgICAvL2NsZWFyUG9vbHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgZm9yICh2YXIgdHlwZSBpbiB0aGlzLl9wb29scykge1xuICAgICAgICAvLyAgICAgICAgdGhpcy5jbGVhclBvb2wodHlwZSk7XG4gICAgICAgIC8vICAgIH1cbiAgICAgICAgLy99LFxuXG4gICAgICAgIHJlbW92ZUVudGl0eTogZnVuY3Rpb24gKGVudGl0eUlkKSB7XG4gICAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICAgIGlmIChfLmlzT2JqZWN0KGVudGl0eUlkKSkge1xuICAgICAgICAgICAgICAgIGUgPSBlbnRpdHlJZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZSA9IHRoaXMuX2VudGl0aWVzW2VudGl0eUlkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUVudGl0eUNoaWxkcmVuKGUpO1xuXG4gICAgICAgICAgICBlLmVtaXQoJ3JlbW92ZScsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVFbnRpdHknLCBlKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9lbnRpdGllc1tlLmVudGl0eUlkXTtcblxuICAgICAgICAgICAgaWYgKGUubmFtZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9lbnRpdGllc0J5TmFtZVtlLm5hbWVdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2lmICh0aGlzLl9fcmVtb3ZlRW50aXR5VG9Qb29sKGUpKSB7XG4gICAgICAgICAgICAvLyAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIC8vfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgIGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgLy99XG4gICAgICAgICAgICBlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZUVudGl0eUNoaWxkcmVuOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHYgPSBlLmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB2KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9lID0gdltpXTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUVudGl0eShfZS5lbnRpdHlJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0RW50aXR5QnlJZDogZnVuY3Rpb24gKGVpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2VudGl0aWVzW2VpZF07XG4gICAgICAgIH0sXG4vLyAgICBnZXRFbnRpdGllcygncmVuZGVyJylcbi8vICAgIGdldEVudGl0aWVzKCdyZW5kZXIgbW92ZSB0YWcxJykgIGFuZFxuLy8gICAgZ2V0RW50aXRpZXMoJ3JlbmRlciwgbW92ZSwgdGFnMScpICAgb3JcbiAgICAgICAgZ2V0RW50aXRpZXM6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgdmFyIGVudGl0aWVzID0gdGhpcy5fZW50aXRpZXM7XG4gICAgICAgICAgICBpZiAoIXNlbGVjdG9yKSByZXR1cm4gZW50aXRpZXM7XG4gICAgICAgICAgICB2YXIgdiA9IHt9O1xuICAgICAgICAgICAgLy9zZWxlY3QgZW50aXRpZXMgYnkgdGFnc1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB2YXIgYW5kID0gZmFsc2UsIC8vZmxhZ3MgZm9yIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgIG9yID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmxpc3QgPSAvXFxzKixcXHMqLztcbiAgICAgICAgICAgICAgICB2YXIgcnNwYWNlID0gL1xccysvO1xuICAgICAgICAgICAgICAgIHZhciBkZWw7XG4gICAgICAgICAgICAgICAgLy9tdWx0aXBsZSBjb21wb25lbnRzIE9SXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yLmluZGV4T2YoJywnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBkZWwgPSBybGlzdDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdG9yLmluZGV4T2YoJyAnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZGVsID0gcnNwYWNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWFuZCAmJiAhb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2VudGl0aWVzQnlUYWdbc2VsZWN0b3JdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdGFncyA9IHNlbGVjdG9yLnNwbGl0KGRlbCk7XG4gICAgICAgICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZW50aXR5SWQgaW4gZW50aXRpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZSA9IGVudGl0aWVzW2VudGl0eUlkXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlLmhhc1RhZ0FsbCh0YWdzKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZS5oYXNUYWdBbnkodGFncykpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZbZW50aXR5SWRdID0gZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldEVudGl0eTogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICB2YXIgdiA9IHRoaXMuZ2V0RW50aXRpZXMoc2VsZWN0b3IpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChkZWx0YSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCBkZWx0YSk7XG4gICAgICAgICAgICB2YXIgcHJvY2Vzc29ycyA9IHRoaXMuX3Byb2Nlc3NvcnM7XG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIHByb2Nlc3NvcnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IHByb2Nlc3NvcnNbbmFtZV07XG4gICAgICAgICAgICAgICAgcC5wcm9jZXNzKGRlbHRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICBqbS5lbnRpdHlNYW5hZ2VyID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBqbS5FbnRpdHlNYW5hZ2VyKG9wdHMpO1xuICAgIH1cbn0pKCk7XG4oZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGptLnNwcmludGYpcmV0dXJuO1xyXG4gICAgdmFyIHNwcmludGZXcmFwcGVyID0ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHMgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gIT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgUmVnRXhwID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgc3RyaW5nID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICB2YXIgZXhwID0gbmV3IFJlZ0V4cCgvKCUoWyVdfChcXC0pPyhcXCt8XFx4MjApPygwKT8oXFxkKyk/KFxcLihcXGQpPyk/KFtiY2Rmb3N4WF0pKSkvZyk7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIHZhciBzdHJpbmdzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIHZhciBjb252Q291bnQgPSAwO1xyXG4gICAgICAgICAgICB2YXIgc3RyaW5nUG9zU3RhcnQgPSAwO1xyXG4gICAgICAgICAgICB2YXIgc3RyaW5nUG9zRW5kID0gMDtcclxuICAgICAgICAgICAgdmFyIG1hdGNoUG9zRW5kID0gMDtcclxuICAgICAgICAgICAgdmFyIG5ld1N0cmluZyA9ICcnO1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2g7XHJcbiAgICAgICAgICAgIHdoaWxlIChtYXRjaCA9IGV4cC5leGVjKHN0cmluZykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaFs5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZDb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3RyaW5nUG9zU3RhcnQgPSBtYXRjaFBvc0VuZDtcclxuICAgICAgICAgICAgICAgIHN0cmluZ1Bvc0VuZCA9IGV4cC5sYXN0SW5kZXggLSBtYXRjaFswXS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmdzW3N0cmluZ3MubGVuZ3RoXSA9IHN0cmluZy5zdWJzdHJpbmcoc3RyaW5nUG9zU3RhcnQsIHN0cmluZ1Bvc0VuZCk7XHJcbiAgICAgICAgICAgICAgICBtYXRjaFBvc0VuZCA9IGV4cC5sYXN0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICBtYXRjaGVzW21hdGNoZXMubGVuZ3RoXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaDogbWF0Y2hbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogbWF0Y2hbM10gPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbjogbWF0Y2hbNF0gfHwgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkOiBtYXRjaFs1XSB8fCAnICcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluOiBtYXRjaFs2XSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogbWF0Y2hbOF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29kZTogbWF0Y2hbOV0gfHwgJyUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5lZ2F0aXZlOiBwYXJzZUludChhcmd1bWVudHNbY29udkNvdW50XSkgPCAwID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50OiBTdHJpbmcoYXJndW1lbnRzW2NvbnZDb3VudF0pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0cmluZ3Nbc3RyaW5ncy5sZW5ndGhdID0gc3RyaW5nLnN1YnN0cmluZyhtYXRjaFBvc0VuZCk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgoYXJndW1lbnRzLmxlbmd0aCAtIDEpIDwgY29udkNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdWJzdGl0dXRpb247XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlc1tpXS5jb2RlID09ICclJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9ICclJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hlc1tpXS5jb2RlID09ICdiJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXNbaV0uYXJndW1lbnQgPSBTdHJpbmcoTWF0aC5hYnMocGFyc2VJbnQobWF0Y2hlc1tpXS5hcmd1bWVudCkpLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzcHJpbnRmV3JhcHBlci5jb252ZXJ0KG1hdGNoZXNbaV0sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hlc1tpXS5jb2RlID09ICdjJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXNbaV0uYXJndW1lbnQgPSBTdHJpbmcoU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChNYXRoLmFicyhwYXJzZUludChtYXRjaGVzW2ldLmFyZ3VtZW50KSkpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3ByaW50ZldyYXBwZXIuY29udmVydChtYXRjaGVzW2ldLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoZXNbaV0uY29kZSA9PSAnZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzW2ldLmFyZ3VtZW50ID0gU3RyaW5nKE1hdGguYWJzKHBhcnNlSW50KG1hdGNoZXNbaV0uYXJndW1lbnQpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3ByaW50ZldyYXBwZXIuY29udmVydChtYXRjaGVzW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoZXNbaV0uY29kZSA9PSAnZicpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzW2ldLmFyZ3VtZW50ID0gU3RyaW5nKE1hdGguYWJzKHBhcnNlRmxvYXQobWF0Y2hlc1tpXS5hcmd1bWVudCkpLnRvRml4ZWQobWF0Y2hlc1tpXS5wcmVjaXNpb24gPyBtYXRjaGVzW2ldLnByZWNpc2lvbiA6IDYpKTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzcHJpbnRmV3JhcHBlci5jb252ZXJ0KG1hdGNoZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hlc1tpXS5jb2RlID09ICdvJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXNbaV0uYXJndW1lbnQgPSBTdHJpbmcoTWF0aC5hYnMocGFyc2VJbnQobWF0Y2hlc1tpXS5hcmd1bWVudCkpLnRvU3RyaW5nKDgpKTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzcHJpbnRmV3JhcHBlci5jb252ZXJ0KG1hdGNoZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hlc1tpXS5jb2RlID09ICdzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXNbaV0uYXJndW1lbnQgPSBtYXRjaGVzW2ldLmFyZ3VtZW50LnN1YnN0cmluZygwLCBtYXRjaGVzW2ldLnByZWNpc2lvbiA/IG1hdGNoZXNbaV0ucHJlY2lzaW9uIDogbWF0Y2hlc1tpXS5hcmd1bWVudC5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3ByaW50ZldyYXBwZXIuY29udmVydChtYXRjaGVzW2ldLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoZXNbaV0uY29kZSA9PSAneCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzW2ldLmFyZ3VtZW50ID0gU3RyaW5nKE1hdGguYWJzKHBhcnNlSW50KG1hdGNoZXNbaV0uYXJndW1lbnQpKS50b1N0cmluZygxNikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNwcmludGZXcmFwcGVyLmNvbnZlcnQobWF0Y2hlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaGVzW2ldLmNvZGUgPT0gJ1gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlc1tpXS5hcmd1bWVudCA9IFN0cmluZyhNYXRoLmFicyhwYXJzZUludChtYXRjaGVzW2ldLmFyZ3VtZW50KSkudG9TdHJpbmcoMTYpKTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzcHJpbnRmV3JhcHBlci5jb252ZXJ0KG1hdGNoZXNbaV0pLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBtYXRjaGVzW2ldLm1hdGNoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3U3RyaW5nICs9IHN0cmluZ3NbaV07XHJcbiAgICAgICAgICAgICAgICBuZXdTdHJpbmcgKz0gc3Vic3RpdHV0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1N0cmluZyArPSBzdHJpbmdzW2ldO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3U3RyaW5nO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udmVydDogZnVuY3Rpb24gKG1hdGNoLCBub3NpZ24pIHtcclxuICAgICAgICAgICAgaWYgKG5vc2lnbikge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2guc2lnbiA9ICcnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2guc2lnbiA9IG1hdGNoLm5lZ2F0aXZlID8gJy0nIDogbWF0Y2guc2lnbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbCA9IG1hdGNoLm1pbiAtIG1hdGNoLmFyZ3VtZW50Lmxlbmd0aCArIDEgLSBtYXRjaC5zaWduLmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIHBhZCA9IG5ldyBBcnJheShsIDwgMCA/IDAgOiBsKS5qb2luKG1hdGNoLnBhZCk7XHJcbiAgICAgICAgICAgIGlmICghbWF0Y2gubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoLnBhZCA9PSAnMCcgfHwgbm9zaWduKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoLnNpZ24gKyBwYWQgKyBtYXRjaC5hcmd1bWVudDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZCArIG1hdGNoLnNpZ24gKyBtYXRjaC5hcmd1bWVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaC5wYWQgPT0gJzAnIHx8IG5vc2lnbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaC5zaWduICsgbWF0Y2guYXJndW1lbnQgKyBwYWQucmVwbGFjZSgvMC9nLCAnICcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2guc2lnbiArIG1hdGNoLmFyZ3VtZW50ICsgcGFkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGptLnNwcmludGYgPSBzcHJpbnRmV3JhcHBlci5pbml0O1xyXG5cclxufSkoKTtcclxuXHJcblxyXG5cclxuIl19