
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/core/min/async.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (process,global){
"use strict";
cc._RF.push(module, 'dde7cV8iSNKL7iBD+8OZ6dM', 'async');
// Script/core/min/async.js

"use strict";

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.async = global.async || {});
})(void 0, function (exports) {
  'use strict';
  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */

  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);

      case 1:
        return func.call(thisArg, args[0]);

      case 2:
        return func.call(thisArg, args[0], args[1]);

      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }

    return func.apply(thisArg, args);
  }
  /* Built-in method references for those with the same name as other `lodash` methods. */


  var nativeMax = Math.max;
  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */

  function overRest$1(func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function () {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }

      index = -1;
      var otherArgs = Array(start + 1);

      while (++index < start) {
        otherArgs[index] = args[index];
      }

      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }
  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */


  function identity(value) {
    return value;
  } // Lodash rest function without function.toString()
  // remappings


  function rest(func, start) {
    return overRest$1(func, start, identity);
  }

  var initialParams = function initialParams(fn) {
    return rest(function (args
    /*..., callback*/
    ) {
      var callback = args.pop();
      fn.call(this, args, callback);
    });
  };

  function applyEach$1(eachfn) {
    return rest(function (fns, args) {
      var go = initialParams(function (args, callback) {
        var that = this;
        return eachfn(fns, function (fn, cb) {
          fn.apply(that, args.concat(cb));
        }, callback);
      });

      if (args.length) {
        return go.apply(this, args);
      } else {
        return go;
      }
    });
  }
  /** Detect free variable `global` from Node.js. */


  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
  /** Detect free variable `self`. */

  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
  /** Used as a reference to the global object. */

  var root = freeGlobal || freeSelf || Function('return this')();
  /** Built-in value references. */

  var Symbol$1 = root.Symbol;
  /** Used for built-in method references. */

  var objectProto = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty = objectProto.hasOwnProperty;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString = objectProto.toString;
  /** Built-in value references. */

  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;
  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */

  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag$1),
        tag = value[symToStringTag$1];

    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);

    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }

    return result;
  }
  /** Used for built-in method references. */


  var objectProto$1 = Object.prototype;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString$1 = objectProto$1.toString;
  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */

  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }
  /** `Object#toString` result references. */


  var nullTag = '[object Null]';
  var undefinedTag = '[object Undefined]';
  /** Built-in value references. */

  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;
  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */

  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }

    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */


  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }
  /** `Object#toString` result references. */


  var asyncTag = '[object AsyncFunction]';
  var funcTag = '[object Function]';
  var genTag = '[object GeneratorFunction]';
  var proxyTag = '[object Proxy]';
  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */

  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    } // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.


    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  /** Used as references for various `Number` constants. */


  var MAX_SAFE_INTEGER = 9007199254740991;
  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */

  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */


  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  } // A temporary value used to identify if the loop should be broken.
  // See #1064, #1293


  var breakLoop = {};
  /**
   * This method returns `undefined`.
   *
   * @static
   * @memberOf _
   * @since 2.3.0
   * @category Util
   * @example
   *
   * _.times(2, _.noop);
   * // => [undefined, undefined]
   */

  function noop() {// No operation performed.
  }

  function once(fn) {
    return function () {
      if (fn === null) return;
      var callFn = fn;
      fn = null;
      callFn.apply(this, arguments);
    };
  }

  var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator;

  var getIterator = function getIterator(coll) {
    return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
  };
  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */


  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }

    return result;
  }
  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */


  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }
  /** `Object#toString` result references. */


  var argsTag = '[object Arguments]';
  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */

  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }
  /** Used for built-in method references. */


  var objectProto$3 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
  /** Built-in value references. */

  var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */

  var isArguments = baseIsArguments(function () {
    return arguments;
  }()) ? baseIsArguments : function (value) {
    return isObjectLike(value) && hasOwnProperty$2.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
  };
  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */

  var isArray = Array.isArray;
  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */

  function stubFalse() {
    return false;
  }
  /** Detect free variable `exports`. */


  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Built-in value references. */

  var Buffer = moduleExports ? root.Buffer : undefined;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */

  var isBuffer = nativeIsBuffer || stubFalse;
  /** Used as references for various `Number` constants. */

  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  /** Used to detect unsigned integer values. */

  var reIsUint = /^(?:0|[1-9]\d*)$/;
  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */

  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }
  /** `Object#toString` result references. */


  var argsTag$1 = '[object Arguments]';
  var arrayTag = '[object Array]';
  var boolTag = '[object Boolean]';
  var dateTag = '[object Date]';
  var errorTag = '[object Error]';
  var funcTag$1 = '[object Function]';
  var mapTag = '[object Map]';
  var numberTag = '[object Number]';
  var objectTag = '[object Object]';
  var regexpTag = '[object RegExp]';
  var setTag = '[object Set]';
  var stringTag = '[object String]';
  var weakMapTag = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]';
  var dataViewTag = '[object DataView]';
  var float32Tag = '[object Float32Array]';
  var float64Tag = '[object Float64Array]';
  var int8Tag = '[object Int8Array]';
  var int16Tag = '[object Int16Array]';
  var int32Tag = '[object Int32Array]';
  var uint8Tag = '[object Uint8Array]';
  var uint8ClampedTag = '[object Uint8ClampedArray]';
  var uint16Tag = '[object Uint16Array]';
  var uint32Tag = '[object Uint32Array]';
  /** Used to identify `toStringTag` values of typed arrays. */

  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */

  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }
  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */


  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }
  /** Detect free variable `exports`. */


  var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
  /** Detect free variable `process` from Node.js. */

  var freeProcess = moduleExports$1 && freeGlobal.process;
  /** Used to access faster Node.js helpers. */

  var nodeUtil = function () {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }();
  /* Node.js helper references. */


  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */

  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  /** Used for built-in method references. */

  var objectProto$2 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */

  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value),
        isArg = !isArr && isArguments(value),
        isBuff = !isArr && !isArg && isBuffer(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$1.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
      key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
      isIndex(key, length)))) {
        result.push(key);
      }
    }

    return result;
  }
  /** Used for built-in method references. */


  var objectProto$5 = Object.prototype;
  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */

  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$5;
    return value === proto;
  }
  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */


  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }
  /* Built-in method references for those with the same name as other `lodash` methods. */


  var nativeKeys = overArg(Object.keys, Object);
  /** Used for built-in method references. */

  var objectProto$4 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }

    var result = [];

    for (var key in Object(object)) {
      if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }

    return result;
  }
  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */


  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  function createArrayIterator(coll) {
    var i = -1;
    var len = coll.length;
    return function next() {
      return ++i < len ? {
        value: coll[i],
        key: i
      } : null;
    };
  }

  function createES2015Iterator(iterator) {
    var i = -1;
    return function next() {
      var item = iterator.next();
      if (item.done) return null;
      i++;
      return {
        value: item.value,
        key: i
      };
    };
  }

  function createObjectIterator(obj) {
    var okeys = keys(obj);
    var i = -1;
    var len = okeys.length;
    return function next() {
      var key = okeys[++i];
      return i < len ? {
        value: obj[key],
        key: key
      } : null;
    };
  }

  function iterator(coll) {
    if (isArrayLike(coll)) {
      return createArrayIterator(coll);
    }

    var iterator = getIterator(coll);
    return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
  }

  function onlyOnce(fn) {
    return function () {
      if (fn === null) throw new Error("Callback was already called.");
      var callFn = fn;
      fn = null;
      callFn.apply(this, arguments);
    };
  }

  function _eachOfLimit(limit) {
    return function (obj, iteratee, callback) {
      callback = once(callback || noop);

      if (limit <= 0 || !obj) {
        return callback(null);
      }

      var nextElem = iterator(obj);
      var done = false;
      var running = 0;

      function iterateeCallback(err, value) {
        running -= 1;

        if (err) {
          done = true;
          callback(err);
        } else if (value === breakLoop || done && running <= 0) {
          done = true;
          return callback(null);
        } else {
          replenish();
        }
      }

      function replenish() {
        while (running < limit && !done) {
          var elem = nextElem();

          if (elem === null) {
            done = true;

            if (running <= 0) {
              callback(null);
            }

            return;
          }

          running += 1;
          iteratee(elem.value, elem.key, onlyOnce(iterateeCallback));
        }
      }

      replenish();
    };
  }
  /**
   * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name eachOfLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.eachOf]{@link module:Collections.eachOf}
   * @alias forEachOfLimit
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {Function} iteratee - A function to apply to each
   * item in `coll`. The `key` is the item's key, or index in the case of an
   * array. The iteratee is passed a `callback(err)` which must be called once it
   * has completed. If no error has occurred, the callback should be run without
   * arguments or with an explicit `null` argument. Invoked with
   * (item, key, callback).
   * @param {Function} [callback] - A callback which is called when all
   * `iteratee` functions have finished, or an error occurs. Invoked with (err).
   */


  function eachOfLimit(coll, limit, iteratee, callback) {
    _eachOfLimit(limit)(coll, iteratee, callback);
  }

  function doLimit(fn, limit) {
    return function (iterable, iteratee, callback) {
      return fn(iterable, limit, iteratee, callback);
    };
  } // eachOf implementation optimized for array-likes


  function eachOfArrayLike(coll, iteratee, callback) {
    callback = once(callback || noop);
    var index = 0,
        completed = 0,
        length = coll.length;

    if (length === 0) {
      callback(null);
    }

    function iteratorCallback(err, value) {
      if (err) {
        callback(err);
      } else if (++completed === length || value === breakLoop) {
        callback(null);
      }
    }

    for (; index < length; index++) {
      iteratee(coll[index], index, onlyOnce(iteratorCallback));
    }
  } // a generic version of eachOf which can handle array, object, and iterator cases.


  var eachOfGeneric = doLimit(eachOfLimit, Infinity);
  /**
   * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
   * to the iteratee.
   *
   * @name eachOf
   * @static
   * @memberOf module:Collections
   * @method
   * @alias forEachOf
   * @category Collection
   * @see [async.each]{@link module:Collections.each}
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A function to apply to each
   * item in `coll`. The `key` is the item's key, or index in the case of an
   * array. The iteratee is passed a `callback(err)` which must be called once it
   * has completed. If no error has occurred, the callback should be run without
   * arguments or with an explicit `null` argument. Invoked with
   * (item, key, callback).
   * @param {Function} [callback] - A callback which is called when all
   * `iteratee` functions have finished, or an error occurs. Invoked with (err).
   * @example
   *
   * var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
   * var configs = {};
   *
   * async.forEachOf(obj, function (value, key, callback) {
   *     fs.readFile(__dirname + value, "utf8", function (err, data) {
   *         if (err) return callback(err);
   *         try {
   *             configs[key] = JSON.parse(data);
   *         } catch (e) {
   *             return callback(e);
   *         }
   *         callback();
   *     });
   * }, function (err) {
   *     if (err) console.error(err.message);
   *     // configs is now a map of JSON data
   *     doSomethingWith(configs);
   * });
   */

  var eachOf = function eachOf(coll, iteratee, callback) {
    var eachOfImplementation = isArrayLike(coll) ? eachOfArrayLike : eachOfGeneric;
    eachOfImplementation(coll, iteratee, callback);
  };

  function doParallel(fn) {
    return function (obj, iteratee, callback) {
      return fn(eachOf, obj, iteratee, callback);
    };
  }

  function _asyncMap(eachfn, arr, iteratee, callback) {
    callback = callback || noop;
    arr = arr || [];
    var results = [];
    var counter = 0;
    eachfn(arr, function (value, _, callback) {
      var index = counter++;
      iteratee(value, function (err, v) {
        results[index] = v;
        callback(err);
      });
    }, function (err) {
      callback(err, results);
    });
  }
  /**
   * Produces a new collection of values by mapping each value in `coll` through
   * the `iteratee` function. The `iteratee` is called with an item from `coll`
   * and a callback for when it has finished processing. Each of these callback
   * takes 2 arguments: an `error`, and the transformed item from `coll`. If
   * `iteratee` passes an error to its callback, the main `callback` (for the
   * `map` function) is immediately called with the error.
   *
   * Note, that since this function applies the `iteratee` to each item in
   * parallel, there is no guarantee that the `iteratee` functions will complete
   * in order. However, the results array will be in the same order as the
   * original `coll`.
   *
   * If `map` is passed an Object, the results will be an Array.  The results
   * will roughly be in the order of the original Objects' keys (but this can
   * vary across JavaScript engines)
   *
   * @name map
   * @static
   * @memberOf module:Collections
   * @method
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A function to apply to each item in `coll`.
   * The iteratee is passed a `callback(err, transformed)` which must be called
   * once it has completed with an error (which can be `null`) and a
   * transformed item. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. Results is an Array of the
   * transformed items from the `coll`. Invoked with (err, results).
   * @example
   *
   * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
   *     // results is now an array of stats for each file
   * });
   */


  var map = doParallel(_asyncMap);
  /**
   * Applies the provided arguments to each function in the array, calling
   * `callback` after all functions have completed. If you only provide the first
   * argument, `fns`, then it will return a function which lets you pass in the
   * arguments as if it were a single function call. If more arguments are
   * provided, `callback` is required while `args` is still optional.
   *
   * @name applyEach
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Array|Iterable|Object} fns - A collection of asynchronous functions
   * to all call with the same arguments
   * @param {...*} [args] - any number of separate arguments to pass to the
   * function.
   * @param {Function} [callback] - the final argument should be the callback,
   * called when all functions have completed processing.
   * @returns {Function} - If only the first argument, `fns`, is provided, it will
   * return a function which lets you pass in the arguments as if it were a single
   * function call. The signature is `(..args, callback)`. If invoked with any
   * arguments, `callback` is required.
   * @example
   *
   * async.applyEach([enableSearch, updateSchema], 'bucket', callback);
   *
   * // partial application example:
   * async.each(
   *     buckets,
   *     async.applyEach([enableSearch, updateSchema]),
   *     callback
   * );
   */

  var applyEach = applyEach$1(map);

  function doParallelLimit(fn) {
    return function (obj, limit, iteratee, callback) {
      return fn(_eachOfLimit(limit), obj, iteratee, callback);
    };
  }
  /**
   * The same as [`map`]{@link module:Collections.map} but runs a maximum of `limit` async operations at a time.
   *
   * @name mapLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.map]{@link module:Collections.map}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {Function} iteratee - A function to apply to each item in `coll`.
   * The iteratee is passed a `callback(err, transformed)` which must be called
   * once it has completed with an error (which can be `null`) and a transformed
   * item. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. Results is an array of the
   * transformed items from the `coll`. Invoked with (err, results).
   */


  var mapLimit = doParallelLimit(_asyncMap);
  /**
   * The same as [`map`]{@link module:Collections.map} but runs only a single async operation at a time.
   *
   * @name mapSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.map]{@link module:Collections.map}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A function to apply to each item in `coll`.
   * The iteratee is passed a `callback(err, transformed)` which must be called
   * once it has completed with an error (which can be `null`) and a
   * transformed item. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. Results is an array of the
   * transformed items from the `coll`. Invoked with (err, results).
   */

  var mapSeries = doLimit(mapLimit, 1);
  /**
   * The same as [`applyEach`]{@link module:ControlFlow.applyEach} but runs only a single async operation at a time.
   *
   * @name applyEachSeries
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.applyEach]{@link module:ControlFlow.applyEach}
   * @category Control Flow
   * @param {Array|Iterable|Object} fns - A collection of asynchronous functions to all
   * call with the same arguments
   * @param {...*} [args] - any number of separate arguments to pass to the
   * function.
   * @param {Function} [callback] - the final argument should be the callback,
   * called when all functions have completed processing.
   * @returns {Function} - If only the first argument is provided, it will return
   * a function which lets you pass in the arguments as if it were a single
   * function call.
   */

  var applyEachSeries = applyEach$1(mapSeries);
  /**
   * Creates a continuation function with some arguments already applied.
   *
   * Useful as a shorthand when combined with other control flow functions. Any
   * arguments passed to the returned function are added to the arguments
   * originally passed to apply.
   *
   * @name apply
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {Function} function - The function you want to eventually apply all
   * arguments to. Invokes with (arguments...).
   * @param {...*} arguments... - Any number of arguments to automatically apply
   * when the continuation is called.
   * @example
   *
   * // using apply
   * async.parallel([
   *     async.apply(fs.writeFile, 'testfile1', 'test1'),
   *     async.apply(fs.writeFile, 'testfile2', 'test2')
   * ]);
   *
   *
   * // the same process without using apply
   * async.parallel([
   *     function(callback) {
   *         fs.writeFile('testfile1', 'test1', callback);
   *     },
   *     function(callback) {
   *         fs.writeFile('testfile2', 'test2', callback);
   *     }
   * ]);
   *
   * // It's possible to pass any number of additional arguments when calling the
   * // continuation:
   *
   * node> var fn = async.apply(sys.puts, 'one');
   * node> fn('two', 'three');
   * one
   * two
   * three
   */

  var apply$2 = rest(function (fn, args) {
    return rest(function (callArgs) {
      return fn.apply(null, args.concat(callArgs));
    });
  });
  /**
   * Take a sync function and make it async, passing its return value to a
   * callback. This is useful for plugging sync functions into a waterfall,
   * series, or other async functions. Any arguments passed to the generated
   * function will be passed to the wrapped function (except for the final
   * callback argument). Errors thrown will be passed to the callback.
   *
   * If the function passed to `asyncify` returns a Promise, that promises's
   * resolved/rejected state will be used to call the callback, rather than simply
   * the synchronous return value.
   *
   * This also means you can asyncify ES2016 `async` functions.
   *
   * @name asyncify
   * @static
   * @memberOf module:Utils
   * @method
   * @alias wrapSync
   * @category Util
   * @param {Function} func - The synchronous function to convert to an
   * asynchronous function.
   * @returns {Function} An asynchronous wrapper of the `func`. To be invoked with
   * (callback).
   * @example
   *
   * // passing a regular synchronous function
   * async.waterfall([
   *     async.apply(fs.readFile, filename, "utf8"),
   *     async.asyncify(JSON.parse),
   *     function (data, next) {
   *         // data is the result of parsing the text.
   *         // If there was a parsing error, it would have been caught.
   *     }
   * ], callback);
   *
   * // passing a function returning a promise
   * async.waterfall([
   *     async.apply(fs.readFile, filename, "utf8"),
   *     async.asyncify(function (contents) {
   *         return db.model.create(contents);
   *     }),
   *     function (model, next) {
   *         // `model` is the instantiated model object.
   *         // If there was an error, this function would be skipped.
   *     }
   * ], callback);
   *
   * // es6 example
   * var q = async.queue(async.asyncify(async function(file) {
   *     var intermediateStep = await processFile(file);
   *     return await somePromise(intermediateStep)
   * }));
   *
   * q.push(files);
   */

  function asyncify(func) {
    return initialParams(function (args, callback) {
      var result;

      try {
        result = func.apply(this, args);
      } catch (e) {
        return callback(e);
      } // if result is Promise object


      if (isObject(result) && typeof result.then === 'function') {
        result.then(function (value) {
          callback(null, value);
        }, function (err) {
          callback(err.message ? err : new Error(err));
        });
      } else {
        callback(null, result);
      }
    });
  }
  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */


  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }

    return array;
  }
  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */


  function createBaseFor(fromRight) {
    return function (object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];

        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }

      return object;
    };
  }
  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */


  var baseFor = createBaseFor();
  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */

  function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
  }
  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }

    return -1;
  }
  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */


  function baseIsNaN(value) {
    return value !== value;
  }
  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }

    return -1;
  }
  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
  }
  /**
   * Determines the best order for running the functions in `tasks`, based on
   * their requirements. Each function can optionally depend on other functions
   * being completed first, and each function is run as soon as its requirements
   * are satisfied.
   *
   * If any of the functions pass an error to their callback, the `auto` sequence
   * will stop. Further tasks will not execute (so any other functions depending
   * on it will not run), and the main `callback` is immediately called with the
   * error.
   *
   * Functions also receive an object containing the results of functions which
   * have completed so far as the first argument, if they have dependencies. If a
   * task function has no dependencies, it will only be passed a callback.
   *
   * @name auto
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Object} tasks - An object. Each of its properties is either a
   * function or an array of requirements, with the function itself the last item
   * in the array. The object's key of a property serves as the name of the task
   * defined by that property, i.e. can be used when specifying requirements for
   * other tasks. The function receives one or two arguments:
   * * a `results` object, containing the results of the previously executed
   *   functions, only passed if the task has any dependencies,
   * * a `callback(err, result)` function, which must be called when finished,
   *   passing an `error` (which can be `null`) and the result of the function's
   *   execution.
   * @param {number} [concurrency=Infinity] - An optional `integer` for
   * determining the maximum number of tasks that can be run in parallel. By
   * default, as many as possible.
   * @param {Function} [callback] - An optional callback which is called when all
   * the tasks have been completed. It receives the `err` argument if any `tasks`
   * pass an error to their callback. Results are always returned; however, if an
   * error occurs, no further `tasks` will be performed, and the results object
   * will only contain partial results. Invoked with (err, results).
   * @returns undefined
   * @example
   *
   * async.auto({
   *     // this function will just be passed a callback
   *     readData: async.apply(fs.readFile, 'data.txt', 'utf-8'),
   *     showData: ['readData', function(results, cb) {
   *         // results.readData is the file's contents
   *         // ...
   *     }]
   * }, callback);
   *
   * async.auto({
   *     get_data: function(callback) {
   *         console.log('in get_data');
   *         // async code to get some data
   *         callback(null, 'data', 'converted to array');
   *     },
   *     make_folder: function(callback) {
   *         console.log('in make_folder');
   *         // async code to create a directory to store a file in
   *         // this is run at the same time as getting the data
   *         callback(null, 'folder');
   *     },
   *     write_file: ['get_data', 'make_folder', function(results, callback) {
   *         console.log('in write_file', JSON.stringify(results));
   *         // once there is some data and the directory exists,
   *         // write the data to a file in the directory
   *         callback(null, 'filename');
   *     }],
   *     email_link: ['write_file', function(results, callback) {
   *         console.log('in email_link', JSON.stringify(results));
   *         // once the file is written let's email a link to it...
   *         // results.write_file contains the filename returned by write_file.
   *         callback(null, {'file':results.write_file, 'email':'user@example.com'});
   *     }]
   * }, function(err, results) {
   *     console.log('err = ', err);
   *     console.log('results = ', results);
   * });
   */


  var auto = function auto(tasks, concurrency, callback) {
    if (typeof concurrency === 'function') {
      // concurrency is optional, shift the args.
      callback = concurrency;
      concurrency = null;
    }

    callback = once(callback || noop);
    var keys$$1 = keys(tasks);
    var numTasks = keys$$1.length;

    if (!numTasks) {
      return callback(null);
    }

    if (!concurrency) {
      concurrency = numTasks;
    }

    var results = {};
    var runningTasks = 0;
    var hasError = false;
    var listeners = Object.create(null);
    var readyTasks = []; // for cycle detection:

    var readyToCheck = []; // tasks that have been identified as reachable
    // without the possibility of returning to an ancestor task

    var uncheckedDependencies = {};
    baseForOwn(tasks, function (task, key) {
      if (!isArray(task)) {
        // no dependencies
        enqueueTask(key, [task]);
        readyToCheck.push(key);
        return;
      }

      var dependencies = task.slice(0, task.length - 1);
      var remainingDependencies = dependencies.length;

      if (remainingDependencies === 0) {
        enqueueTask(key, task);
        readyToCheck.push(key);
        return;
      }

      uncheckedDependencies[key] = remainingDependencies;
      arrayEach(dependencies, function (dependencyName) {
        if (!tasks[dependencyName]) {
          throw new Error('async.auto task `' + key + '` has a non-existent dependency `' + dependencyName + '` in ' + dependencies.join(', '));
        }

        addListener(dependencyName, function () {
          remainingDependencies--;

          if (remainingDependencies === 0) {
            enqueueTask(key, task);
          }
        });
      });
    });
    checkForDeadlocks();
    processQueue();

    function enqueueTask(key, task) {
      readyTasks.push(function () {
        runTask(key, task);
      });
    }

    function processQueue() {
      if (readyTasks.length === 0 && runningTasks === 0) {
        return callback(null, results);
      }

      while (readyTasks.length && runningTasks < concurrency) {
        var run = readyTasks.shift();
        run();
      }
    }

    function addListener(taskName, fn) {
      var taskListeners = listeners[taskName];

      if (!taskListeners) {
        taskListeners = listeners[taskName] = [];
      }

      taskListeners.push(fn);
    }

    function taskComplete(taskName) {
      var taskListeners = listeners[taskName] || [];
      arrayEach(taskListeners, function (fn) {
        fn();
      });
      processQueue();
    }

    function runTask(key, task) {
      if (hasError) return;
      var taskCallback = onlyOnce(rest(function (err, args) {
        runningTasks--;

        if (args.length <= 1) {
          args = args[0];
        }

        if (err) {
          var safeResults = {};
          baseForOwn(results, function (val, rkey) {
            safeResults[rkey] = val;
          });
          safeResults[key] = args;
          hasError = true;
          listeners = Object.create(null);
          callback(err, safeResults);
        } else {
          results[key] = args;
          taskComplete(key);
        }
      }));
      runningTasks++;
      var taskFn = task[task.length - 1];

      if (task.length > 1) {
        taskFn(results, taskCallback);
      } else {
        taskFn(taskCallback);
      }
    }

    function checkForDeadlocks() {
      // Kahn's algorithm
      // https://en.wikipedia.org/wiki/Topological_sorting#Kahn.27s_algorithm
      // http://connalle.blogspot.com/2013/10/topological-sortingkahn-algorithm.html
      var currentTask;
      var counter = 0;

      while (readyToCheck.length) {
        currentTask = readyToCheck.pop();
        counter++;
        arrayEach(getDependents(currentTask), function (dependent) {
          if (--uncheckedDependencies[dependent] === 0) {
            readyToCheck.push(dependent);
          }
        });
      }

      if (counter !== numTasks) {
        throw new Error('async.auto cannot execute tasks due to a recursive dependency');
      }
    }

    function getDependents(taskName) {
      var result = [];
      baseForOwn(tasks, function (task, key) {
        if (isArray(task) && baseIndexOf(task, taskName, 0) >= 0) {
          result.push(key);
        }
      });
      return result;
    }
  };
  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */


  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }

    return result;
  }
  /** `Object#toString` result references. */


  var symbolTag = '[object Symbol]';
  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */

  function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  /** Used as references for various `Number` constants. */


  var INFINITY = 1 / 0;
  /** Used to convert symbols to primitives and strings. */

  var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
  var symbolToString = symbolProto ? symbolProto.toString : undefined;
  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */

  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }

    if (isArray(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString) + '';
    }

    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }

    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }
  /**
   * The base implementation of `_.slice` without an iteratee call guard.
   *
   * @private
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of `array`.
   */


  function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;

    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }

    end = end > length ? length : end;

    if (end < 0) {
      end += length;
    }

    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);

    while (++index < length) {
      result[index] = array[index + start];
    }

    return result;
  }
  /**
   * Casts `array` to a slice if it's needed.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {number} start The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the cast slice.
   */


  function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : baseSlice(array, start, end);
  }
  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */


  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}

    return index;
  }
  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */


  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}

    return index;
  }
  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */


  function asciiToArray(string) {
    return string.split('');
  }
  /** Used to compose unicode character classes. */


  var rsAstralRange = "\\ud800-\\udfff";
  var rsComboMarksRange = "\\u0300-\\u036f";
  var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
  var rsComboSymbolsRange = "\\u20d0-\\u20ff";
  var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
  var rsVarRange = "\\ufe0e\\ufe0f";
  /** Used to compose unicode capture groups. */

  var rsZWJ = "\\u200d";
  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */

  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */

  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }
  /** Used to compose unicode character classes. */


  var rsAstralRange$1 = "\\ud800-\\udfff";
  var rsComboMarksRange$1 = "\\u0300-\\u036f";
  var reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f";
  var rsComboSymbolsRange$1 = "\\u20d0-\\u20ff";
  var rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;
  var rsVarRange$1 = "\\ufe0e\\ufe0f";
  /** Used to compose unicode capture groups. */

  var rsAstral = '[' + rsAstralRange$1 + ']';
  var rsCombo = '[' + rsComboRange$1 + ']';
  var rsFitz = "\\ud83c[\\udffb-\\udfff]";
  var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
  var rsNonAstral = '[^' + rsAstralRange$1 + ']';
  var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
  var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
  var rsZWJ$1 = "\\u200d";
  /** Used to compose unicode regexes. */

  var reOptMod = rsModifier + '?';
  var rsOptVar = '[' + rsVarRange$1 + ']?';
  var rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
  var rsSeq = rsOptVar + reOptMod + rsOptJoin;
  var rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */

  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */

  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }
  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */


  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */


  function toString(value) {
    return value == null ? '' : baseToString(value);
  }
  /** Used to match leading and trailing whitespace. */


  var reTrim = /^\s+|\s+$/g;
  /**
   * Removes leading and trailing whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trim('  abc  ');
   * // => 'abc'
   *
   * _.trim('-_-abc-_-', '_-');
   * // => 'abc'
   *
   * _.map(['  foo  ', '  bar  '], _.trim);
   * // => ['foo', 'bar']
   */

  function trim(string, chars, guard) {
    string = toString(string);

    if (string && (guard || chars === undefined)) {
      return string.replace(reTrim, '');
    }

    if (!string || !(chars = baseToString(chars))) {
      return string;
    }

    var strSymbols = stringToArray(string),
        chrSymbols = stringToArray(chars),
        start = charsStartIndex(strSymbols, chrSymbols),
        end = charsEndIndex(strSymbols, chrSymbols) + 1;
    return castSlice(strSymbols, start, end).join('');
  }

  var FN_ARGS = /^(function)?\s*[^\(]*\(\s*([^\)]*)\)/m;
  var FN_ARG_SPLIT = /,/;
  var FN_ARG = /(=.+)?(\s*)$/;
  var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

  function parseParams(func) {
    func = func.toString().replace(STRIP_COMMENTS, '');
    func = func.match(FN_ARGS)[2].replace(' ', '');
    func = func ? func.split(FN_ARG_SPLIT) : [];
    func = func.map(function (arg) {
      return trim(arg.replace(FN_ARG, ''));
    });
    return func;
  }
  /**
   * A dependency-injected version of the [async.auto]{@link module:ControlFlow.auto} function. Dependent
   * tasks are specified as parameters to the function, after the usual callback
   * parameter, with the parameter names matching the names of the tasks it
   * depends on. This can provide even more readable task graphs which can be
   * easier to maintain.
   *
   * If a final callback is specified, the task results are similarly injected,
   * specified as named parameters after the initial error parameter.
   *
   * The autoInject function is purely syntactic sugar and its semantics are
   * otherwise equivalent to [async.auto]{@link module:ControlFlow.auto}.
   *
   * @name autoInject
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.auto]{@link module:ControlFlow.auto}
   * @category Control Flow
   * @param {Object} tasks - An object, each of whose properties is a function of
   * the form 'func([dependencies...], callback). The object's key of a property
   * serves as the name of the task defined by that property, i.e. can be used
   * when specifying requirements for other tasks.
   * * The `callback` parameter is a `callback(err, result)` which must be called
   *   when finished, passing an `error` (which can be `null`) and the result of
   *   the function's execution. The remaining parameters name other tasks on
   *   which the task is dependent, and the results from those tasks are the
   *   arguments of those parameters.
   * @param {Function} [callback] - An optional callback which is called when all
   * the tasks have been completed. It receives the `err` argument if any `tasks`
   * pass an error to their callback, and a `results` object with any completed
   * task results, similar to `auto`.
   * @example
   *
   * //  The example from `auto` can be rewritten as follows:
   * async.autoInject({
   *     get_data: function(callback) {
   *         // async code to get some data
   *         callback(null, 'data', 'converted to array');
   *     },
   *     make_folder: function(callback) {
   *         // async code to create a directory to store a file in
   *         // this is run at the same time as getting the data
   *         callback(null, 'folder');
   *     },
   *     write_file: function(get_data, make_folder, callback) {
   *         // once there is some data and the directory exists,
   *         // write the data to a file in the directory
   *         callback(null, 'filename');
   *     },
   *     email_link: function(write_file, callback) {
   *         // once the file is written let's email a link to it...
   *         // write_file contains the filename returned by write_file.
   *         callback(null, {'file':write_file, 'email':'user@example.com'});
   *     }
   * }, function(err, results) {
   *     console.log('err = ', err);
   *     console.log('email_link = ', results.email_link);
   * });
   *
   * // If you are using a JS minifier that mangles parameter names, `autoInject`
   * // will not work with plain functions, since the parameter names will be
   * // collapsed to a single letter identifier.  To work around this, you can
   * // explicitly specify the names of the parameters your task function needs
   * // in an array, similar to Angular.js dependency injection.
   *
   * // This still has an advantage over plain `auto`, since the results a task
   * // depends on are still spread into arguments.
   * async.autoInject({
   *     //...
   *     write_file: ['get_data', 'make_folder', function(get_data, make_folder, callback) {
   *         callback(null, 'filename');
   *     }],
   *     email_link: ['write_file', function(write_file, callback) {
   *         callback(null, {'file':write_file, 'email':'user@example.com'});
   *     }]
   *     //...
   * }, function(err, results) {
   *     console.log('err = ', err);
   *     console.log('email_link = ', results.email_link);
   * });
   */


  function autoInject(tasks, callback) {
    var newTasks = {};
    baseForOwn(tasks, function (taskFn, key) {
      var params;

      if (isArray(taskFn)) {
        params = taskFn.slice(0, -1);
        taskFn = taskFn[taskFn.length - 1];
        newTasks[key] = params.concat(params.length > 0 ? newTask : taskFn);
      } else if (taskFn.length === 1) {
        // no dependencies, use the function as-is
        newTasks[key] = taskFn;
      } else {
        params = parseParams(taskFn);

        if (taskFn.length === 0 && params.length === 0) {
          throw new Error("autoInject task functions require explicit parameters.");
        }

        params.pop();
        newTasks[key] = params.concat(newTask);
      }

      function newTask(results, taskCb) {
        var newArgs = arrayMap(params, function (name) {
          return results[name];
        });
        newArgs.push(taskCb);
        taskFn.apply(null, newArgs);
      }
    });
    auto(newTasks, callback);
  }

  var hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
  var hasNextTick = typeof process === 'object' && typeof process.nextTick === 'function';

  function fallback(fn) {
    setTimeout(fn, 0);
  }

  function wrap(defer) {
    return rest(function (fn, args) {
      defer(function () {
        fn.apply(null, args);
      });
    });
  }

  var _defer;

  if (hasSetImmediate) {
    _defer = setImmediate;
  } else if (hasNextTick) {
    _defer = process.nextTick;
  } else {
    _defer = fallback;
  }

  var setImmediate$1 = wrap(_defer); // Simple doubly linked list (https://en.wikipedia.org/wiki/Doubly_linked_list) implementation
  // used for queues. This implementation assumes that the node provided by the user can be modified
  // to adjust the next and last properties. We implement only the minimal functionality
  // for queue support.

  function DLL() {
    this.head = this.tail = null;
    this.length = 0;
  }

  function setInitial(dll, node) {
    dll.length = 1;
    dll.head = dll.tail = node;
  }

  DLL.prototype.removeLink = function (node) {
    if (node.prev) node.prev.next = node.next;else this.head = node.next;
    if (node.next) node.next.prev = node.prev;else this.tail = node.prev;
    node.prev = node.next = null;
    this.length -= 1;
    return node;
  };

  DLL.prototype.empty = DLL;

  DLL.prototype.insertAfter = function (node, newNode) {
    newNode.prev = node;
    newNode.next = node.next;
    if (node.next) node.next.prev = newNode;else this.tail = newNode;
    node.next = newNode;
    this.length += 1;
  };

  DLL.prototype.insertBefore = function (node, newNode) {
    newNode.prev = node.prev;
    newNode.next = node;
    if (node.prev) node.prev.next = newNode;else this.head = newNode;
    node.prev = newNode;
    this.length += 1;
  };

  DLL.prototype.unshift = function (node) {
    if (this.head) this.insertBefore(this.head, node);else setInitial(this, node);
  };

  DLL.prototype.push = function (node) {
    if (this.tail) this.insertAfter(this.tail, node);else setInitial(this, node);
  };

  DLL.prototype.shift = function () {
    return this.head && this.removeLink(this.head);
  };

  DLL.prototype.pop = function () {
    return this.tail && this.removeLink(this.tail);
  };

  function queue(worker, concurrency, payload) {
    if (concurrency == null) {
      concurrency = 1;
    } else if (concurrency === 0) {
      throw new Error('Concurrency must not be zero');
    }

    function _insert(data, insertAtFront, callback) {
      if (callback != null && typeof callback !== 'function') {
        throw new Error('task callback must be a function');
      }

      q.started = true;

      if (!isArray(data)) {
        data = [data];
      }

      if (data.length === 0 && q.idle()) {
        // call drain immediately if there are no tasks
        return setImmediate$1(function () {
          q.drain();
        });
      }

      for (var i = 0, l = data.length; i < l; i++) {
        var item = {
          data: data[i],
          callback: callback || noop
        };

        if (insertAtFront) {
          q._tasks.unshift(item);
        } else {
          q._tasks.push(item);
        }
      }

      setImmediate$1(q.process);
    }

    function _next(tasks) {
      return rest(function (args) {
        workers -= 1;

        for (var i = 0, l = tasks.length; i < l; i++) {
          var task = tasks[i];
          var index = baseIndexOf(_workersList, task, 0);

          if (index >= 0) {
            _workersList.splice(index);
          }

          task.callback.apply(task, args);

          if (args[0] != null) {
            q.error(args[0], task.data);
          }
        }

        if (workers <= q.concurrency - q.buffer) {
          q.unsaturated();
        }

        if (q.idle()) {
          q.drain();
        }

        q.process();
      });
    }

    var workers = 0;
    var _workersList = [];
    var isProcessing = false;
    var q = {
      _tasks: new DLL(),
      concurrency: concurrency,
      payload: payload,
      saturated: noop,
      unsaturated: noop,
      buffer: concurrency / 4,
      empty: noop,
      drain: noop,
      error: noop,
      started: false,
      paused: false,
      push: function push(data, callback) {
        _insert(data, false, callback);
      },
      kill: function kill() {
        q.drain = noop;

        q._tasks.empty();
      },
      unshift: function unshift(data, callback) {
        _insert(data, true, callback);
      },
      process: function process() {
        // Avoid trying to start too many processing operations. This can occur
        // when callbacks resolve synchronously (#1267).
        if (isProcessing) {
          return;
        }

        isProcessing = true;

        while (!q.paused && workers < q.concurrency && q._tasks.length) {
          var tasks = [],
              data = [];
          var l = q._tasks.length;
          if (q.payload) l = Math.min(l, q.payload);

          for (var i = 0; i < l; i++) {
            var node = q._tasks.shift();

            tasks.push(node);
            data.push(node.data);
          }

          if (q._tasks.length === 0) {
            q.empty();
          }

          workers += 1;

          _workersList.push(tasks[0]);

          if (workers === q.concurrency) {
            q.saturated();
          }

          var cb = onlyOnce(_next(tasks));
          worker(data, cb);
        }

        isProcessing = false;
      },
      length: function length() {
        return q._tasks.length;
      },
      running: function running() {
        return workers;
      },
      workersList: function workersList() {
        return _workersList;
      },
      idle: function idle() {
        return q._tasks.length + workers === 0;
      },
      pause: function pause() {
        q.paused = true;
      },
      resume: function resume() {
        if (q.paused === false) {
          return;
        }

        q.paused = false;
        setImmediate$1(q.process);
      }
    };
    return q;
  }
  /**
   * A cargo of tasks for the worker function to complete. Cargo inherits all of
   * the same methods and event callbacks as [`queue`]{@link module:ControlFlow.queue}.
   * @typedef {Object} CargoObject
   * @memberOf module:ControlFlow
   * @property {Function} length - A function returning the number of items
   * waiting to be processed. Invoke like `cargo.length()`.
   * @property {number} payload - An `integer` for determining how many tasks
   * should be process per round. This property can be changed after a `cargo` is
   * created to alter the payload on-the-fly.
   * @property {Function} push - Adds `task` to the `queue`. The callback is
   * called once the `worker` has finished processing the task. Instead of a
   * single task, an array of `tasks` can be submitted. The respective callback is
   * used for every task in the list. Invoke like `cargo.push(task, [callback])`.
   * @property {Function} saturated - A callback that is called when the
   * `queue.length()` hits the concurrency and further tasks will be queued.
   * @property {Function} empty - A callback that is called when the last item
   * from the `queue` is given to a `worker`.
   * @property {Function} drain - A callback that is called when the last item
   * from the `queue` has returned from the `worker`.
   * @property {Function} idle - a function returning false if there are items
   * waiting or being processed, or true if not. Invoke like `cargo.idle()`.
   * @property {Function} pause - a function that pauses the processing of tasks
   * until `resume()` is called. Invoke like `cargo.pause()`.
   * @property {Function} resume - a function that resumes the processing of
   * queued tasks when the queue is paused. Invoke like `cargo.resume()`.
   * @property {Function} kill - a function that removes the `drain` callback and
   * empties remaining tasks from the queue forcing it to go idle. Invoke like `cargo.kill()`.
   */

  /**
   * Creates a `cargo` object with the specified payload. Tasks added to the
   * cargo will be processed altogether (up to the `payload` limit). If the
   * `worker` is in progress, the task is queued until it becomes available. Once
   * the `worker` has completed some tasks, each callback of those tasks is
   * called. Check out [these](https://camo.githubusercontent.com/6bbd36f4cf5b35a0f11a96dcd2e97711ffc2fb37/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130382f62626330636662302d356632392d313165322d393734662d3333393763363464633835382e676966) [animations](https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966)
   * for how `cargo` and `queue` work.
   *
   * While [`queue`]{@link module:ControlFlow.queue} passes only one task to one of a group of workers
   * at a time, cargo passes an array of tasks to a single worker, repeating
   * when the worker is finished.
   *
   * @name cargo
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.queue]{@link module:ControlFlow.queue}
   * @category Control Flow
   * @param {Function} worker - An asynchronous function for processing an array
   * of queued tasks, which must call its `callback(err)` argument when finished,
   * with an optional `err` argument. Invoked with `(tasks, callback)`.
   * @param {number} [payload=Infinity] - An optional `integer` for determining
   * how many tasks should be processed per round; if omitted, the default is
   * unlimited.
   * @returns {module:ControlFlow.CargoObject} A cargo object to manage the tasks. Callbacks can
   * attached as certain properties to listen for specific events during the
   * lifecycle of the cargo and inner queue.
   * @example
   *
   * // create a cargo object with payload 2
   * var cargo = async.cargo(function(tasks, callback) {
   *     for (var i=0; i<tasks.length; i++) {
   *         console.log('hello ' + tasks[i].name);
   *     }
   *     callback();
   * }, 2);
   *
   * // add some items
   * cargo.push({name: 'foo'}, function(err) {
   *     console.log('finished processing foo');
   * });
   * cargo.push({name: 'bar'}, function(err) {
   *     console.log('finished processing bar');
   * });
   * cargo.push({name: 'baz'}, function(err) {
   *     console.log('finished processing baz');
   * });
   */


  function cargo(worker, payload) {
    return queue(worker, 1, payload);
  }
  /**
   * The same as [`eachOf`]{@link module:Collections.eachOf} but runs only a single async operation at a time.
   *
   * @name eachOfSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.eachOf]{@link module:Collections.eachOf}
   * @alias forEachOfSeries
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A function to apply to each item in `coll`. The
   * `key` is the item's key, or index in the case of an array. The iteratee is
   * passed a `callback(err)` which must be called once it has completed. If no
   * error has occurred, the callback should be run without arguments or with an
   * explicit `null` argument. Invoked with (item, key, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. Invoked with (err).
   */


  var eachOfSeries = doLimit(eachOfLimit, 1);
  /**
   * Reduces `coll` into a single value using an async `iteratee` to return each
   * successive step. `memo` is the initial state of the reduction. This function
   * only operates in series.
   *
   * For performance reasons, it may make sense to split a call to this function
   * into a parallel map, and then use the normal `Array.prototype.reduce` on the
   * results. This function is for situations where each step in the reduction
   * needs to be async; if you can get the data before reducing it, then it's
   * probably a good idea to do so.
   *
   * @name reduce
   * @static
   * @memberOf module:Collections
   * @method
   * @alias inject
   * @alias foldl
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {*} memo - The initial state of the reduction.
   * @param {Function} iteratee - A function applied to each item in the
   * array to produce the next step in the reduction. The `iteratee` is passed a
   * `callback(err, reduction)` which accepts an optional error as its first
   * argument, and the state of the reduction as the second. If an error is
   * passed to the callback, the reduction is stopped and the main `callback` is
   * immediately called with the error. Invoked with (memo, item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Result is the reduced value. Invoked with
   * (err, result).
   * @example
   *
   * async.reduce([1,2,3], 0, function(memo, item, callback) {
   *     // pointless async:
   *     process.nextTick(function() {
   *         callback(null, memo + item)
   *     });
   * }, function(err, result) {
   *     // result is now equal to the last value of memo, which is 6
   * });
   */

  function reduce(coll, memo, iteratee, callback) {
    callback = once(callback || noop);
    eachOfSeries(coll, function (x, i, callback) {
      iteratee(memo, x, function (err, v) {
        memo = v;
        callback(err);
      });
    }, function (err) {
      callback(err, memo);
    });
  }
  /**
   * Version of the compose function that is more natural to read. Each function
   * consumes the return value of the previous function. It is the equivalent of
   * [compose]{@link module:ControlFlow.compose} with the arguments reversed.
   *
   * Each function is executed with the `this` binding of the composed function.
   *
   * @name seq
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.compose]{@link module:ControlFlow.compose}
   * @category Control Flow
   * @param {...Function} functions - the asynchronous functions to compose
   * @returns {Function} a function that composes the `functions` in order
   * @example
   *
   * // Requires lodash (or underscore), express3 and dresende's orm2.
   * // Part of an app, that fetches cats of the logged user.
   * // This example uses `seq` function to avoid overnesting and error
   * // handling clutter.
   * app.get('/cats', function(request, response) {
   *     var User = request.models.User;
   *     async.seq(
   *         _.bind(User.get, User),  // 'User.get' has signature (id, callback(err, data))
   *         function(user, fn) {
   *             user.getCats(fn);      // 'getCats' has signature (callback(err, data))
   *         }
   *     )(req.session.user_id, function (err, cats) {
   *         if (err) {
   *             console.error(err);
   *             response.json({ status: 'error', message: err.message });
   *         } else {
   *             response.json({ status: 'ok', message: 'Cats found', data: cats });
   *         }
   *     });
   * });
   */


  var seq$1 = rest(function seq(functions) {
    return rest(function (args) {
      var that = this;
      var cb = args[args.length - 1];

      if (typeof cb == 'function') {
        args.pop();
      } else {
        cb = noop;
      }

      reduce(functions, args, function (newargs, fn, cb) {
        fn.apply(that, newargs.concat(rest(function (err, nextargs) {
          cb(err, nextargs);
        })));
      }, function (err, results) {
        cb.apply(that, [err].concat(results));
      });
    });
  });
  /**
   * Creates a function which is a composition of the passed asynchronous
   * functions. Each function consumes the return value of the function that
   * follows. Composing functions `f()`, `g()`, and `h()` would produce the result
   * of `f(g(h()))`, only this version uses callbacks to obtain the return values.
   *
   * Each function is executed with the `this` binding of the composed function.
   *
   * @name compose
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {...Function} functions - the asynchronous functions to compose
   * @returns {Function} an asynchronous function that is the composed
   * asynchronous `functions`
   * @example
   *
   * function add1(n, callback) {
   *     setTimeout(function () {
   *         callback(null, n + 1);
   *     }, 10);
   * }
   *
   * function mul3(n, callback) {
   *     setTimeout(function () {
   *         callback(null, n * 3);
   *     }, 10);
   * }
   *
   * var add1mul3 = async.compose(mul3, add1);
   * add1mul3(4, function (err, result) {
   *     // result now equals 15
   * });
   */

  var compose = rest(function (args) {
    return seq$1.apply(null, args.reverse());
  });

  function concat$1(eachfn, arr, fn, callback) {
    var result = [];
    eachfn(arr, function (x, index, cb) {
      fn(x, function (err, y) {
        result = result.concat(y || []);
        cb(err);
      });
    }, function (err) {
      callback(err, result);
    });
  }
  /**
   * Applies `iteratee` to each item in `coll`, concatenating the results. Returns
   * the concatenated list. The `iteratee`s are called in parallel, and the
   * results are concatenated as they return. There is no guarantee that the
   * results array will be returned in the original order of `coll` passed to the
   * `iteratee` function.
   *
   * @name concat
   * @static
   * @memberOf module:Collections
   * @method
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A function to apply to each item in `coll`.
   * The iteratee is passed a `callback(err, results)` which must be called once
   * it has completed with an error (which can be `null`) and an array of results.
   * Invoked with (item, callback).
   * @param {Function} [callback(err)] - A callback which is called after all the
   * `iteratee` functions have finished, or an error occurs. Results is an array
   * containing the concatenated results of the `iteratee` function. Invoked with
   * (err, results).
   * @example
   *
   * async.concat(['dir1','dir2','dir3'], fs.readdir, function(err, files) {
   *     // files is now a list of filenames that exist in the 3 directories
   * });
   */


  var concat = doParallel(concat$1);

  function doSeries(fn) {
    return function (obj, iteratee, callback) {
      return fn(eachOfSeries, obj, iteratee, callback);
    };
  }
  /**
   * The same as [`concat`]{@link module:Collections.concat} but runs only a single async operation at a time.
   *
   * @name concatSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.concat]{@link module:Collections.concat}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A function to apply to each item in `coll`.
   * The iteratee is passed a `callback(err, results)` which must be called once
   * it has completed with an error (which can be `null`) and an array of results.
   * Invoked with (item, callback).
   * @param {Function} [callback(err)] - A callback which is called after all the
   * `iteratee` functions have finished, or an error occurs. Results is an array
   * containing the concatenated results of the `iteratee` function. Invoked with
   * (err, results).
   */


  var concatSeries = doSeries(concat$1);
  /**
   * Returns a function that when called, calls-back with the values provided.
   * Useful as the first function in a [`waterfall`]{@link module:ControlFlow.waterfall}, or for plugging values in to
   * [`auto`]{@link module:ControlFlow.auto}.
   *
   * @name constant
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {...*} arguments... - Any number of arguments to automatically invoke
   * callback with.
   * @returns {Function} Returns a function that when invoked, automatically
   * invokes the callback with the previous given arguments.
   * @example
   *
   * async.waterfall([
   *     async.constant(42),
   *     function (value, next) {
   *         // value === 42
   *     },
   *     //...
   * ], callback);
   *
   * async.waterfall([
   *     async.constant(filename, "utf8"),
   *     fs.readFile,
   *     function (fileData, next) {
   *         //...
   *     }
   *     //...
   * ], callback);
   *
   * async.auto({
   *     hostname: async.constant("https://server.net/"),
   *     port: findFreePort,
   *     launchServer: ["hostname", "port", function (options, cb) {
   *         startServer(options, cb);
   *     }],
   *     //...
   * }, callback);
   */

  var constant = rest(function (values) {
    var args = [null].concat(values);
    return initialParams(function (ignoredArgs, callback) {
      return callback.apply(this, args);
    });
  });

  function _createTester(check, getResult) {
    return function (eachfn, arr, iteratee, cb) {
      cb = cb || noop;
      var testPassed = false;
      var testResult;
      eachfn(arr, function (value, _, callback) {
        iteratee(value, function (err, result) {
          if (err) {
            callback(err);
          } else if (check(result) && !testResult) {
            testPassed = true;
            testResult = getResult(true, value);
            callback(null, breakLoop);
          } else {
            callback();
          }
        });
      }, function (err) {
        if (err) {
          cb(err);
        } else {
          cb(null, testPassed ? testResult : getResult(false));
        }
      });
    };
  }

  function _findGetResult(v, x) {
    return x;
  }
  /**
   * Returns the first value in `coll` that passes an async truth test. The
   * `iteratee` is applied in parallel, meaning the first iteratee to return
   * `true` will fire the detect `callback` with that result. That means the
   * result might not be the first item in the original `coll` (in terms of order)
   * that passes the test.
  
   * If order within the original `coll` is important, then look at
   * [`detectSeries`]{@link module:Collections.detectSeries}.
   *
   * @name detect
   * @static
   * @memberOf module:Collections
   * @method
   * @alias find
   * @category Collections
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A truth test to apply to each item in `coll`.
   * The iteratee is passed a `callback(err, truthValue)` which must be called
   * with a boolean argument once it has completed. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called as soon as any
   * iteratee returns `true`, or after all the `iteratee` functions have finished.
   * Result will be the first item in the array that passes the truth test
   * (iteratee) or the value `undefined` if none passed. Invoked with
   * (err, result).
   * @example
   *
   * async.detect(['file1','file2','file3'], function(filePath, callback) {
   *     fs.access(filePath, function(err) {
   *         callback(null, !err)
   *     });
   * }, function(err, result) {
   *     // result now equals the first file in the list that exists
   * });
   */


  var detect = doParallel(_createTester(identity, _findGetResult));
  /**
   * The same as [`detect`]{@link module:Collections.detect} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name detectLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.detect]{@link module:Collections.detect}
   * @alias findLimit
   * @category Collections
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {Function} iteratee - A truth test to apply to each item in `coll`.
   * The iteratee is passed a `callback(err, truthValue)` which must be called
   * with a boolean argument once it has completed. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called as soon as any
   * iteratee returns `true`, or after all the `iteratee` functions have finished.
   * Result will be the first item in the array that passes the truth test
   * (iteratee) or the value `undefined` if none passed. Invoked with
   * (err, result).
   */

  var detectLimit = doParallelLimit(_createTester(identity, _findGetResult));
  /**
   * The same as [`detect`]{@link module:Collections.detect} but runs only a single async operation at a time.
   *
   * @name detectSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.detect]{@link module:Collections.detect}
   * @alias findSeries
   * @category Collections
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A truth test to apply to each item in `coll`.
   * The iteratee is passed a `callback(err, truthValue)` which must be called
   * with a boolean argument once it has completed. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called as soon as any
   * iteratee returns `true`, or after all the `iteratee` functions have finished.
   * Result will be the first item in the array that passes the truth test
   * (iteratee) or the value `undefined` if none passed. Invoked with
   * (err, result).
   */

  var detectSeries = doLimit(detectLimit, 1);

  function consoleFunc(name) {
    return rest(function (fn, args) {
      fn.apply(null, args.concat(rest(function (err, args) {
        if (typeof console === 'object') {
          if (err) {
            if (console.error) {
              console.error(err);
            }
          } else if (console[name]) {
            arrayEach(args, function (x) {
              console[name](x);
            });
          }
        }
      })));
    });
  }
  /**
   * Logs the result of an `async` function to the `console` using `console.dir`
   * to display the properties of the resulting object. Only works in Node.js or
   * in browsers that support `console.dir` and `console.error` (such as FF and
   * Chrome). If multiple arguments are returned from the async function,
   * `console.dir` is called on each argument in order.
   *
   * @name dir
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {Function} function - The function you want to eventually apply all
   * arguments to.
   * @param {...*} arguments... - Any number of arguments to apply to the function.
   * @example
   *
   * // in a module
   * var hello = function(name, callback) {
   *     setTimeout(function() {
   *         callback(null, {hello: name});
   *     }, 1000);
   * };
   *
   * // in the node repl
   * node> async.dir(hello, 'world');
   * {hello: 'world'}
   */


  var dir = consoleFunc('dir');
  /**
   * The post-check version of [`during`]{@link module:ControlFlow.during}. To reflect the difference in
   * the order of operations, the arguments `test` and `fn` are switched.
   *
   * Also a version of [`doWhilst`]{@link module:ControlFlow.doWhilst} with asynchronous `test` function.
   * @name doDuring
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.during]{@link module:ControlFlow.during}
   * @category Control Flow
   * @param {Function} fn - A function which is called each time `test` passes.
   * The function is passed a `callback(err)`, which must be called once it has
   * completed with an optional `err` argument. Invoked with (callback).
   * @param {Function} test - asynchronous truth test to perform before each
   * execution of `fn`. Invoked with (...args, callback), where `...args` are the
   * non-error args from the previous callback of `fn`.
   * @param {Function} [callback] - A callback which is called after the test
   * function has failed and repeated execution of `fn` has stopped. `callback`
   * will be passed an error if one occured, otherwise `null`.
   */

  function doDuring(fn, test, callback) {
    callback = onlyOnce(callback || noop);
    var next = rest(function (err, args) {
      if (err) return callback(err);
      args.push(check);
      test.apply(this, args);
    });

    function check(err, truth) {
      if (err) return callback(err);
      if (!truth) return callback(null);
      fn(next);
    }

    check(null, true);
  }
  /**
   * The post-check version of [`whilst`]{@link module:ControlFlow.whilst}. To reflect the difference in
   * the order of operations, the arguments `test` and `iteratee` are switched.
   *
   * `doWhilst` is to `whilst` as `do while` is to `while` in plain JavaScript.
   *
   * @name doWhilst
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.whilst]{@link module:ControlFlow.whilst}
   * @category Control Flow
   * @param {Function} iteratee - A function which is called each time `test`
   * passes. The function is passed a `callback(err)`, which must be called once
   * it has completed with an optional `err` argument. Invoked with (callback).
   * @param {Function} test - synchronous truth test to perform after each
   * execution of `iteratee`. Invoked with the non-error callback results of 
   * `iteratee`.
   * @param {Function} [callback] - A callback which is called after the test
   * function has failed and repeated execution of `iteratee` has stopped.
   * `callback` will be passed an error and any arguments passed to the final
   * `iteratee`'s callback. Invoked with (err, [results]);
   */


  function doWhilst(iteratee, test, callback) {
    callback = onlyOnce(callback || noop);
    var next = rest(function (err, args) {
      if (err) return callback(err);
      if (test.apply(this, args)) return iteratee(next);
      callback.apply(null, [null].concat(args));
    });
    iteratee(next);
  }
  /**
   * Like ['doWhilst']{@link module:ControlFlow.doWhilst}, except the `test` is inverted. Note the
   * argument ordering differs from `until`.
   *
   * @name doUntil
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.doWhilst]{@link module:ControlFlow.doWhilst}
   * @category Control Flow
   * @param {Function} fn - A function which is called each time `test` fails.
   * The function is passed a `callback(err)`, which must be called once it has
   * completed with an optional `err` argument. Invoked with (callback).
   * @param {Function} test - synchronous truth test to perform after each
   * execution of `fn`. Invoked with the non-error callback results of `fn`.
   * @param {Function} [callback] - A callback which is called after the test
   * function has passed and repeated execution of `fn` has stopped. `callback`
   * will be passed an error and any arguments passed to the final `fn`'s
   * callback. Invoked with (err, [results]);
   */


  function doUntil(fn, test, callback) {
    doWhilst(fn, function () {
      return !test.apply(this, arguments);
    }, callback);
  }
  /**
   * Like [`whilst`]{@link module:ControlFlow.whilst}, except the `test` is an asynchronous function that
   * is passed a callback in the form of `function (err, truth)`. If error is
   * passed to `test` or `fn`, the main callback is immediately called with the
   * value of the error.
   *
   * @name during
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.whilst]{@link module:ControlFlow.whilst}
   * @category Control Flow
   * @param {Function} test - asynchronous truth test to perform before each
   * execution of `fn`. Invoked with (callback).
   * @param {Function} fn - A function which is called each time `test` passes.
   * The function is passed a `callback(err)`, which must be called once it has
   * completed with an optional `err` argument. Invoked with (callback).
   * @param {Function} [callback] - A callback which is called after the test
   * function has failed and repeated execution of `fn` has stopped. `callback`
   * will be passed an error, if one occured, otherwise `null`.
   * @example
   *
   * var count = 0;
   *
   * async.during(
   *     function (callback) {
   *         return callback(null, count < 5);
   *     },
   *     function (callback) {
   *         count++;
   *         setTimeout(callback, 1000);
   *     },
   *     function (err) {
   *         // 5 seconds have passed
   *     }
   * );
   */


  function during(test, fn, callback) {
    callback = onlyOnce(callback || noop);

    function next(err) {
      if (err) return callback(err);
      test(check);
    }

    function check(err, truth) {
      if (err) return callback(err);
      if (!truth) return callback(null);
      fn(next);
    }

    test(check);
  }

  function _withoutIndex(iteratee) {
    return function (value, index, callback) {
      return iteratee(value, callback);
    };
  }
  /**
   * Applies the function `iteratee` to each item in `coll`, in parallel.
   * The `iteratee` is called with an item from the list, and a callback for when
   * it has finished. If the `iteratee` passes an error to its `callback`, the
   * main `callback` (for the `each` function) is immediately called with the
   * error.
   *
   * Note, that since this function applies `iteratee` to each item in parallel,
   * there is no guarantee that the iteratee functions will complete in order.
   *
   * @name each
   * @static
   * @memberOf module:Collections
   * @method
   * @alias forEach
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A function to apply to each item
   * in `coll`. The iteratee is passed a `callback(err)` which must be called once
   * it has completed. If no error has occurred, the `callback` should be run
   * without arguments or with an explicit `null` argument. The array index is not
   * passed to the iteratee. Invoked with (item, callback). If you need the index,
   * use `eachOf`.
   * @param {Function} [callback] - A callback which is called when all
   * `iteratee` functions have finished, or an error occurs. Invoked with (err).
   * @example
   *
   * // assuming openFiles is an array of file names and saveFile is a function
   * // to save the modified contents of that file:
   *
   * async.each(openFiles, saveFile, function(err){
   *   // if any of the saves produced an error, err would equal that error
   * });
   *
   * // assuming openFiles is an array of file names
   * async.each(openFiles, function(file, callback) {
   *
   *     // Perform operation on file here.
   *     console.log('Processing file ' + file);
   *
   *     if( file.length > 32 ) {
   *       console.log('This file name is too long');
   *       callback('File name too long');
   *     } else {
   *       // Do work to process file here
   *       console.log('File processed');
   *       callback();
   *     }
   * }, function(err) {
   *     // if any of the file processing produced an error, err would equal that error
   *     if( err ) {
   *       // One of the iterations produced an error.
   *       // All processing will now stop.
   *       console.log('A file failed to process');
   *     } else {
   *       console.log('All files have been processed successfully');
   *     }
   * });
   */


  function eachLimit(coll, iteratee, callback) {
    eachOf(coll, _withoutIndex(iteratee), callback);
  }
  /**
   * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
   *
   * @name eachLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.each]{@link module:Collections.each}
   * @alias forEachLimit
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {Function} iteratee - A function to apply to each item in `coll`. The
   * iteratee is passed a `callback(err)` which must be called once it has
   * completed. If no error has occurred, the `callback` should be run without
   * arguments or with an explicit `null` argument. The array index is not passed
   * to the iteratee. Invoked with (item, callback). If you need the index, use
   * `eachOfLimit`.
   * @param {Function} [callback] - A callback which is called when all
   * `iteratee` functions have finished, or an error occurs. Invoked with (err).
   */


  function eachLimit$1(coll, limit, iteratee, callback) {
    _eachOfLimit(limit)(coll, _withoutIndex(iteratee), callback);
  }
  /**
   * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
   *
   * @name eachSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.each]{@link module:Collections.each}
   * @alias forEachSeries
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A function to apply to each
   * item in `coll`. The iteratee is passed a `callback(err)` which must be called
   * once it has completed. If no error has occurred, the `callback` should be run
   * without arguments or with an explicit `null` argument. The array index is
   * not passed to the iteratee. Invoked with (item, callback). If you need the
   * index, use `eachOfSeries`.
   * @param {Function} [callback] - A callback which is called when all
   * `iteratee` functions have finished, or an error occurs. Invoked with (err).
   */


  var eachSeries = doLimit(eachLimit$1, 1);
  /**
   * Wrap an async function and ensure it calls its callback on a later tick of
   * the event loop.  If the function already calls its callback on a next tick,
   * no extra deferral is added. This is useful for preventing stack overflows
   * (`RangeError: Maximum call stack size exceeded`) and generally keeping
   * [Zalgo](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony)
   * contained.
   *
   * @name ensureAsync
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {Function} fn - an async function, one that expects a node-style
   * callback as its last argument.
   * @returns {Function} Returns a wrapped function with the exact same call
   * signature as the function passed in.
   * @example
   *
   * function sometimesAsync(arg, callback) {
   *     if (cache[arg]) {
   *         return callback(null, cache[arg]); // this would be synchronous!!
   *     } else {
   *         doSomeIO(arg, callback); // this IO would be asynchronous
   *     }
   * }
   *
   * // this has a risk of stack overflows if many results are cached in a row
   * async.mapSeries(args, sometimesAsync, done);
   *
   * // this will defer sometimesAsync's callback if necessary,
   * // preventing stack overflows
   * async.mapSeries(args, async.ensureAsync(sometimesAsync), done);
   */

  function ensureAsync(fn) {
    return initialParams(function (args, callback) {
      var sync = true;
      args.push(function () {
        var innerArgs = arguments;

        if (sync) {
          setImmediate$1(function () {
            callback.apply(null, innerArgs);
          });
        } else {
          callback.apply(null, innerArgs);
        }
      });
      fn.apply(this, args);
      sync = false;
    });
  }

  function notId(v) {
    return !v;
  }
  /**
   * Returns `true` if every element in `coll` satisfies an async test. If any
   * iteratee call returns `false`, the main `callback` is immediately called.
   *
   * @name every
   * @static
   * @memberOf module:Collections
   * @method
   * @alias all
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A truth test to apply to each item in the
   * collection in parallel. The iteratee is passed a `callback(err, truthValue)`
   * which must be called with a  boolean argument once it has completed. Invoked
   * with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Result will be either `true` or `false`
   * depending on the values of the async tests. Invoked with (err, result).
   * @example
   *
   * async.every(['file1','file2','file3'], function(filePath, callback) {
   *     fs.access(filePath, function(err) {
   *         callback(null, !err)
   *     });
   * }, function(err, result) {
   *     // if result is true then every file exists
   * });
   */


  var every = doParallel(_createTester(notId, notId));
  /**
   * The same as [`every`]{@link module:Collections.every} but runs a maximum of `limit` async operations at a time.
   *
   * @name everyLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.every]{@link module:Collections.every}
   * @alias allLimit
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {Function} iteratee - A truth test to apply to each item in the
   * collection in parallel. The iteratee is passed a `callback(err, truthValue)`
   * which must be called with a  boolean argument once it has completed. Invoked
   * with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Result will be either `true` or `false`
   * depending on the values of the async tests. Invoked with (err, result).
   */

  var everyLimit = doParallelLimit(_createTester(notId, notId));
  /**
   * The same as [`every`]{@link module:Collections.every} but runs only a single async operation at a time.
   *
   * @name everySeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.every]{@link module:Collections.every}
   * @alias allSeries
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A truth test to apply to each item in the
   * collection in parallel. The iteratee is passed a `callback(err, truthValue)`
   * which must be called with a  boolean argument once it has completed. Invoked
   * with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Result will be either `true` or `false`
   * depending on the values of the async tests. Invoked with (err, result).
   */

  var everySeries = doLimit(everyLimit, 1);
  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */

  function baseProperty(key) {
    return function (object) {
      return object == null ? undefined : object[key];
    };
  }

  function filterArray(eachfn, arr, iteratee, callback) {
    var truthValues = new Array(arr.length);
    eachfn(arr, function (x, index, callback) {
      iteratee(x, function (err, v) {
        truthValues[index] = !!v;
        callback(err);
      });
    }, function (err) {
      if (err) return callback(err);
      var results = [];

      for (var i = 0; i < arr.length; i++) {
        if (truthValues[i]) results.push(arr[i]);
      }

      callback(null, results);
    });
  }

  function filterGeneric(eachfn, coll, iteratee, callback) {
    var results = [];
    eachfn(coll, function (x, index, callback) {
      iteratee(x, function (err, v) {
        if (err) {
          callback(err);
        } else {
          if (v) {
            results.push({
              index: index,
              value: x
            });
          }

          callback();
        }
      });
    }, function (err) {
      if (err) {
        callback(err);
      } else {
        callback(null, arrayMap(results.sort(function (a, b) {
          return a.index - b.index;
        }), baseProperty('value')));
      }
    });
  }

  function _filter(eachfn, coll, iteratee, callback) {
    var filter = isArrayLike(coll) ? filterArray : filterGeneric;
    filter(eachfn, coll, iteratee, callback || noop);
  }
  /**
   * Returns a new array of all the values in `coll` which pass an async truth
   * test. This operation is performed in parallel, but the results array will be
   * in the same order as the original.
   *
   * @name filter
   * @static
   * @memberOf module:Collections
   * @method
   * @alias select
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A truth test to apply to each item in `coll`.
   * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
   * with a boolean argument once it has completed. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Invoked with (err, results).
   * @example
   *
   * async.filter(['file1','file2','file3'], function(filePath, callback) {
   *     fs.access(filePath, function(err) {
   *         callback(null, !err)
   *     });
   * }, function(err, results) {
   *     // results now equals an array of the existing files
   * });
   */


  var filter = doParallel(_filter);
  /**
   * The same as [`filter`]{@link module:Collections.filter} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name filterLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.filter]{@link module:Collections.filter}
   * @alias selectLimit
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {Function} iteratee - A truth test to apply to each item in `coll`.
   * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
   * with a boolean argument once it has completed. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Invoked with (err, results).
   */

  var filterLimit = doParallelLimit(_filter);
  /**
   * The same as [`filter`]{@link module:Collections.filter} but runs only a single async operation at a time.
   *
   * @name filterSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.filter]{@link module:Collections.filter}
   * @alias selectSeries
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A truth test to apply to each item in `coll`.
   * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
   * with a boolean argument once it has completed. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Invoked with (err, results)
   */

  var filterSeries = doLimit(filterLimit, 1);
  /**
   * Calls the asynchronous function `fn` with a callback parameter that allows it
   * to call itself again, in series, indefinitely.
  
   * If an error is passed to the
   * callback then `errback` is called with the error, and execution stops,
   * otherwise it will never be called.
   *
   * @name forever
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Function} fn - a function to call repeatedly. Invoked with (next).
   * @param {Function} [errback] - when `fn` passes an error to it's callback,
   * this function will be called, and execution stops. Invoked with (err).
   * @example
   *
   * async.forever(
   *     function(next) {
   *         // next is suitable for passing to things that need a callback(err [, whatever]);
   *         // it will result in this function being called again.
   *     },
   *     function(err) {
   *         // if next is called with a value in its first parameter, it will appear
   *         // in here as 'err', and execution will stop.
   *     }
   * );
   */

  function forever(fn, errback) {
    var done = onlyOnce(errback || noop);
    var task = ensureAsync(fn);

    function next(err) {
      if (err) return done(err);
      task(next);
    }

    next();
  }
  /**
   * Logs the result of an `async` function to the `console`. Only works in
   * Node.js or in browsers that support `console.log` and `console.error` (such
   * as FF and Chrome). If multiple arguments are returned from the async
   * function, `console.log` is called on each argument in order.
   *
   * @name log
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {Function} function - The function you want to eventually apply all
   * arguments to.
   * @param {...*} arguments... - Any number of arguments to apply to the function.
   * @example
   *
   * // in a module
   * var hello = function(name, callback) {
   *     setTimeout(function() {
   *         callback(null, 'hello ' + name);
   *     }, 1000);
   * };
   *
   * // in the node repl
   * node> async.log(hello, 'world');
   * 'hello world'
   */


  var log = consoleFunc('log');
  /**
   * The same as [`mapValues`]{@link module:Collections.mapValues} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name mapValuesLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.mapValues]{@link module:Collections.mapValues}
   * @category Collection
   * @param {Object} obj - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {Function} iteratee - A function to apply to each value in `obj`.
   * The iteratee is passed a `callback(err, transformed)` which must be called
   * once it has completed with an error (which can be `null`) and a
   * transformed value. Invoked with (value, key, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. `result` is a new object consisting
   * of each key from `obj`, with each transformed value on the right-hand side.
   * Invoked with (err, result).
   */

  function mapValuesLimit(obj, limit, iteratee, callback) {
    callback = once(callback || noop);
    var newObj = {};
    eachOfLimit(obj, limit, function (val, key, next) {
      iteratee(val, key, function (err, result) {
        if (err) return next(err);
        newObj[key] = result;
        next();
      });
    }, function (err) {
      callback(err, newObj);
    });
  }
  /**
   * A relative of [`map`]{@link module:Collections.map}, designed for use with objects.
   *
   * Produces a new Object by mapping each value of `obj` through the `iteratee`
   * function. The `iteratee` is called each `value` and `key` from `obj` and a
   * callback for when it has finished processing. Each of these callbacks takes
   * two arguments: an `error`, and the transformed item from `obj`. If `iteratee`
   * passes an error to its callback, the main `callback` (for the `mapValues`
   * function) is immediately called with the error.
   *
   * Note, the order of the keys in the result is not guaranteed.  The keys will
   * be roughly in the order they complete, (but this is very engine-specific)
   *
   * @name mapValues
   * @static
   * @memberOf module:Collections
   * @method
   * @category Collection
   * @param {Object} obj - A collection to iterate over.
   * @param {Function} iteratee - A function to apply to each value and key in
   * `coll`. The iteratee is passed a `callback(err, transformed)` which must be
   * called once it has completed with an error (which can be `null`) and a
   * transformed value. Invoked with (value, key, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. `result` is a new object consisting
   * of each key from `obj`, with each transformed value on the right-hand side.
   * Invoked with (err, result).
   * @example
   *
   * async.mapValues({
   *     f1: 'file1',
   *     f2: 'file2',
   *     f3: 'file3'
   * }, function (file, key, callback) {
   *   fs.stat(file, callback);
   * }, function(err, result) {
   *     // result is now a map of stats for each file, e.g.
   *     // {
   *     //     f1: [stats for file1],
   *     //     f2: [stats for file2],
   *     //     f3: [stats for file3]
   *     // }
   * });
   */


  var mapValues = doLimit(mapValuesLimit, Infinity);
  /**
   * The same as [`mapValues`]{@link module:Collections.mapValues} but runs only a single async operation at a time.
   *
   * @name mapValuesSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.mapValues]{@link module:Collections.mapValues}
   * @category Collection
   * @param {Object} obj - A collection to iterate over.
   * @param {Function} iteratee - A function to apply to each value in `obj`.
   * The iteratee is passed a `callback(err, transformed)` which must be called
   * once it has completed with an error (which can be `null`) and a
   * transformed value. Invoked with (value, key, callback).
   * @param {Function} [callback] - A callback which is called when all `iteratee`
   * functions have finished, or an error occurs. `result` is a new object consisting
   * of each key from `obj`, with each transformed value on the right-hand side.
   * Invoked with (err, result).
   */

  var mapValuesSeries = doLimit(mapValuesLimit, 1);

  function has(obj, key) {
    return key in obj;
  }
  /**
   * Caches the results of an `async` function. When creating a hash to store
   * function results against, the callback is omitted from the hash and an
   * optional hash function can be used.
   *
   * If no hash function is specified, the first argument is used as a hash key,
   * which may work reasonably if it is a string or a data type that converts to a
   * distinct string. Note that objects and arrays will not behave reasonably.
   * Neither will cases where the other arguments are significant. In such cases,
   * specify your own hash function.
   *
   * The cache of results is exposed as the `memo` property of the function
   * returned by `memoize`.
   *
   * @name memoize
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {Function} fn - The function to proxy and cache results from.
   * @param {Function} hasher - An optional function for generating a custom hash
   * for storing results. It has all the arguments applied to it apart from the
   * callback, and must be synchronous.
   * @returns {Function} a memoized version of `fn`
   * @example
   *
   * var slow_fn = function(name, callback) {
   *     // do something
   *     callback(null, result);
   * };
   * var fn = async.memoize(slow_fn);
   *
   * // fn can now be used as if it were slow_fn
   * fn('some name', function() {
   *     // callback
   * });
   */


  function memoize(fn, hasher) {
    var memo = Object.create(null);
    var queues = Object.create(null);
    hasher = hasher || identity;
    var memoized = initialParams(function memoized(args, callback) {
      var key = hasher.apply(null, args);

      if (has(memo, key)) {
        setImmediate$1(function () {
          callback.apply(null, memo[key]);
        });
      } else if (has(queues, key)) {
        queues[key].push(callback);
      } else {
        queues[key] = [callback];
        fn.apply(null, args.concat(rest(function (args) {
          memo[key] = args;
          var q = queues[key];
          delete queues[key];

          for (var i = 0, l = q.length; i < l; i++) {
            q[i].apply(null, args);
          }
        })));
      }
    });
    memoized.memo = memo;
    memoized.unmemoized = fn;
    return memoized;
  }
  /**
   * Calls `callback` on a later loop around the event loop. In Node.js this just
   * calls `setImmediate`.  In the browser it will use `setImmediate` if
   * available, otherwise `setTimeout(callback, 0)`, which means other higher
   * priority events may precede the execution of `callback`.
   *
   * This is used internally for browser-compatibility purposes.
   *
   * @name nextTick
   * @static
   * @memberOf module:Utils
   * @method
   * @alias setImmediate
   * @category Util
   * @param {Function} callback - The function to call on a later loop around
   * the event loop. Invoked with (args...).
   * @param {...*} args... - any number of additional arguments to pass to the
   * callback on the next tick.
   * @example
   *
   * var call_order = [];
   * async.nextTick(function() {
   *     call_order.push('two');
   *     // call_order now equals ['one','two']
   * });
   * call_order.push('one');
   *
   * async.setImmediate(function (a, b, c) {
   *     // a, b, and c equal 1, 2, and 3
   * }, 1, 2, 3);
   */


  var _defer$1;

  if (hasNextTick) {
    _defer$1 = process.nextTick;
  } else if (hasSetImmediate) {
    _defer$1 = setImmediate;
  } else {
    _defer$1 = fallback;
  }

  var nextTick = wrap(_defer$1);

  function _parallel(eachfn, tasks, callback) {
    callback = callback || noop;
    var results = isArrayLike(tasks) ? [] : {};
    eachfn(tasks, function (task, key, callback) {
      task(rest(function (err, args) {
        if (args.length <= 1) {
          args = args[0];
        }

        results[key] = args;
        callback(err);
      }));
    }, function (err) {
      callback(err, results);
    });
  }
  /**
   * Run the `tasks` collection of functions in parallel, without waiting until
   * the previous function has completed. If any of the functions pass an error to
   * its callback, the main `callback` is immediately called with the value of the
   * error. Once the `tasks` have completed, the results are passed to the final
   * `callback` as an array.
   *
   * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
   * parallel execution of code.  If your tasks do not use any timers or perform
   * any I/O, they will actually be executed in series.  Any synchronous setup
   * sections for each task will happen one after the other.  JavaScript remains
   * single-threaded.
   *
   * It is also possible to use an object instead of an array. Each property will
   * be run as a function and the results will be passed to the final `callback`
   * as an object instead of an array. This can be a more readable way of handling
   * results from {@link async.parallel}.
   *
   * @name parallel
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Array|Iterable|Object} tasks - A collection containing functions to run.
   * Each function is passed a `callback(err, result)` which it must call on
   * completion with an error `err` (which can be `null`) and an optional `result`
   * value.
   * @param {Function} [callback] - An optional callback to run once all the
   * functions have completed successfully. This function gets a results array
   * (or object) containing all the result arguments passed to the task callbacks.
   * Invoked with (err, results).
   * @example
   * async.parallel([
   *     function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'one');
   *         }, 200);
   *     },
   *     function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'two');
   *         }, 100);
   *     }
   * ],
   * // optional callback
   * function(err, results) {
   *     // the results array will equal ['one','two'] even though
   *     // the second function had a shorter timeout.
   * });
   *
   * // an example using an object instead of an array
   * async.parallel({
   *     one: function(callback) {
   *         setTimeout(function() {
   *             callback(null, 1);
   *         }, 200);
   *     },
   *     two: function(callback) {
   *         setTimeout(function() {
   *             callback(null, 2);
   *         }, 100);
   *     }
   * }, function(err, results) {
   *     // results is now equals to: {one: 1, two: 2}
   * });
   */


  function parallelLimit(tasks, callback) {
    _parallel(eachOf, tasks, callback);
  }
  /**
   * The same as [`parallel`]{@link module:ControlFlow.parallel} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name parallelLimit
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.parallel]{@link module:ControlFlow.parallel}
   * @category Control Flow
   * @param {Array|Collection} tasks - A collection containing functions to run.
   * Each function is passed a `callback(err, result)` which it must call on
   * completion with an error `err` (which can be `null`) and an optional `result`
   * value.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {Function} [callback] - An optional callback to run once all the
   * functions have completed successfully. This function gets a results array
   * (or object) containing all the result arguments passed to the task callbacks.
   * Invoked with (err, results).
   */


  function parallelLimit$1(tasks, limit, callback) {
    _parallel(_eachOfLimit(limit), tasks, callback);
  }
  /**
   * A queue of tasks for the worker function to complete.
   * @typedef {Object} QueueObject
   * @memberOf module:ControlFlow
   * @property {Function} length - a function returning the number of items
   * waiting to be processed. Invoke with `queue.length()`.
   * @property {boolean} started - a boolean indicating whether or not any
   * items have been pushed and processed by the queue.
   * @property {Function} running - a function returning the number of items
   * currently being processed. Invoke with `queue.running()`.
   * @property {Function} workersList - a function returning the array of items
   * currently being processed. Invoke with `queue.workersList()`.
   * @property {Function} idle - a function returning false if there are items
   * waiting or being processed, or true if not. Invoke with `queue.idle()`.
   * @property {number} concurrency - an integer for determining how many `worker`
   * functions should be run in parallel. This property can be changed after a
   * `queue` is created to alter the concurrency on-the-fly.
   * @property {Function} push - add a new task to the `queue`. Calls `callback`
   * once the `worker` has finished processing the task. Instead of a single task,
   * a `tasks` array can be submitted. The respective callback is used for every
   * task in the list. Invoke with `queue.push(task, [callback])`,
   * @property {Function} unshift - add a new task to the front of the `queue`.
   * Invoke with `queue.unshift(task, [callback])`.
   * @property {Function} saturated - a callback that is called when the number of
   * running workers hits the `concurrency` limit, and further tasks will be
   * queued.
   * @property {Function} unsaturated - a callback that is called when the number
   * of running workers is less than the `concurrency` & `buffer` limits, and
   * further tasks will not be queued.
   * @property {number} buffer - A minimum threshold buffer in order to say that
   * the `queue` is `unsaturated`.
   * @property {Function} empty - a callback that is called when the last item
   * from the `queue` is given to a `worker`.
   * @property {Function} drain - a callback that is called when the last item
   * from the `queue` has returned from the `worker`.
   * @property {Function} error - a callback that is called when a task errors.
   * Has the signature `function(error, task)`.
   * @property {boolean} paused - a boolean for determining whether the queue is
   * in a paused state.
   * @property {Function} pause - a function that pauses the processing of tasks
   * until `resume()` is called. Invoke with `queue.pause()`.
   * @property {Function} resume - a function that resumes the processing of
   * queued tasks when the queue is paused. Invoke with `queue.resume()`.
   * @property {Function} kill - a function that removes the `drain` callback and
   * empties remaining tasks from the queue forcing it to go idle. Invoke with `queue.kill()`.
   */

  /**
   * Creates a `queue` object with the specified `concurrency`. Tasks added to the
   * `queue` are processed in parallel (up to the `concurrency` limit). If all
   * `worker`s are in progress, the task is queued until one becomes available.
   * Once a `worker` completes a `task`, that `task`'s callback is called.
   *
   * @name queue
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Function} worker - An asynchronous function for processing a queued
   * task, which must call its `callback(err)` argument when finished, with an
   * optional `error` as an argument.  If you want to handle errors from an
   * individual task, pass a callback to `q.push()`. Invoked with
   * (task, callback).
   * @param {number} [concurrency=1] - An `integer` for determining how many
   * `worker` functions should be run in parallel.  If omitted, the concurrency
   * defaults to `1`.  If the concurrency is `0`, an error is thrown.
   * @returns {module:ControlFlow.QueueObject} A queue object to manage the tasks. Callbacks can
   * attached as certain properties to listen for specific events during the
   * lifecycle of the queue.
   * @example
   *
   * // create a queue object with concurrency 2
   * var q = async.queue(function(task, callback) {
   *     console.log('hello ' + task.name);
   *     callback();
   * }, 2);
   *
   * // assign a callback
   * q.drain = function() {
   *     console.log('all items have been processed');
   * };
   *
   * // add some items to the queue
   * q.push({name: 'foo'}, function(err) {
   *     console.log('finished processing foo');
   * });
   * q.push({name: 'bar'}, function (err) {
   *     console.log('finished processing bar');
   * });
   *
   * // add some items to the queue (batch-wise)
   * q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
   *     console.log('finished processing item');
   * });
   *
   * // add some items to the front of the queue
   * q.unshift({name: 'bar'}, function (err) {
   *     console.log('finished processing bar');
   * });
   */


  var queue$1 = function queue$1(worker, concurrency) {
    return queue(function (items, cb) {
      worker(items[0], cb);
    }, concurrency, 1);
  };
  /**
   * The same as [async.queue]{@link module:ControlFlow.queue} only tasks are assigned a priority and
   * completed in ascending priority order.
   *
   * @name priorityQueue
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.queue]{@link module:ControlFlow.queue}
   * @category Control Flow
   * @param {Function} worker - An asynchronous function for processing a queued
   * task, which must call its `callback(err)` argument when finished, with an
   * optional `error` as an argument.  If you want to handle errors from an
   * individual task, pass a callback to `q.push()`. Invoked with
   * (task, callback).
   * @param {number} concurrency - An `integer` for determining how many `worker`
   * functions should be run in parallel.  If omitted, the concurrency defaults to
   * `1`.  If the concurrency is `0`, an error is thrown.
   * @returns {module:ControlFlow.QueueObject} A priorityQueue object to manage the tasks. There are two
   * differences between `queue` and `priorityQueue` objects:
   * * `push(task, priority, [callback])` - `priority` should be a number. If an
   *   array of `tasks` is given, all tasks will be assigned the same priority.
   * * The `unshift` method was removed.
   */


  var priorityQueue = function priorityQueue(worker, concurrency) {
    // Start with a normal queue
    var q = queue$1(worker, concurrency); // Override push to accept second parameter representing priority

    q.push = function (data, priority, callback) {
      if (callback == null) callback = noop;

      if (typeof callback !== 'function') {
        throw new Error('task callback must be a function');
      }

      q.started = true;

      if (!isArray(data)) {
        data = [data];
      }

      if (data.length === 0) {
        // call drain immediately if there are no tasks
        return setImmediate$1(function () {
          q.drain();
        });
      }

      priority = priority || 0;
      var nextNode = q._tasks.head;

      while (nextNode && priority >= nextNode.priority) {
        nextNode = nextNode.next;
      }

      for (var i = 0, l = data.length; i < l; i++) {
        var item = {
          data: data[i],
          priority: priority,
          callback: callback
        };

        if (nextNode) {
          q._tasks.insertBefore(nextNode, item);
        } else {
          q._tasks.push(item);
        }
      }

      setImmediate$1(q.process);
    }; // Remove unshift function


    delete q.unshift;
    return q;
  };
  /**
   * Runs the `tasks` array of functions in parallel, without waiting until the
   * previous function has completed. Once any of the `tasks` complete or pass an
   * error to its callback, the main `callback` is immediately called. It's
   * equivalent to `Promise.race()`.
   *
   * @name race
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Array} tasks - An array containing functions to run. Each function
   * is passed a `callback(err, result)` which it must call on completion with an
   * error `err` (which can be `null`) and an optional `result` value.
   * @param {Function} callback - A callback to run once any of the functions have
   * completed. This function gets an error or result from the first function that
   * completed. Invoked with (err, result).
   * @returns undefined
   * @example
   *
   * async.race([
   *     function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'one');
   *         }, 200);
   *     },
   *     function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'two');
   *         }, 100);
   *     }
   * ],
   * // main callback
   * function(err, result) {
   *     // the result will be equal to 'two' as it finishes earlier
   * });
   */


  function race(tasks, callback) {
    callback = once(callback || noop);
    if (!isArray(tasks)) return callback(new TypeError('First argument to race must be an array of functions'));
    if (!tasks.length) return callback();

    for (var i = 0, l = tasks.length; i < l; i++) {
      tasks[i](callback);
    }
  }

  var slice = Array.prototype.slice;
  /**
   * Same as [`reduce`]{@link module:Collections.reduce}, only operates on `array` in reverse order.
   *
   * @name reduceRight
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.reduce]{@link module:Collections.reduce}
   * @alias foldr
   * @category Collection
   * @param {Array} array - A collection to iterate over.
   * @param {*} memo - The initial state of the reduction.
   * @param {Function} iteratee - A function applied to each item in the
   * array to produce the next step in the reduction. The `iteratee` is passed a
   * `callback(err, reduction)` which accepts an optional error as its first
   * argument, and the state of the reduction as the second. If an error is
   * passed to the callback, the reduction is stopped and the main `callback` is
   * immediately called with the error. Invoked with (memo, item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Result is the reduced value. Invoked with
   * (err, result).
   */

  function reduceRight(array, memo, iteratee, callback) {
    var reversed = slice.call(array).reverse();
    reduce(reversed, memo, iteratee, callback);
  }
  /**
   * Wraps the function in another function that always returns data even when it
   * errors.
   *
   * The object returned has either the property `error` or `value`.
   *
   * @name reflect
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {Function} fn - The function you want to wrap
   * @returns {Function} - A function that always passes null to it's callback as
   * the error. The second argument to the callback will be an `object` with
   * either an `error` or a `value` property.
   * @example
   *
   * async.parallel([
   *     async.reflect(function(callback) {
   *         // do some stuff ...
   *         callback(null, 'one');
   *     }),
   *     async.reflect(function(callback) {
   *         // do some more stuff but error ...
   *         callback('bad stuff happened');
   *     }),
   *     async.reflect(function(callback) {
   *         // do some more stuff ...
   *         callback(null, 'two');
   *     })
   * ],
   * // optional callback
   * function(err, results) {
   *     // values
   *     // results[0].value = 'one'
   *     // results[1].error = 'bad stuff happened'
   *     // results[2].value = 'two'
   * });
   */


  function reflect(fn) {
    return initialParams(function reflectOn(args, reflectCallback) {
      args.push(rest(function callback(err, cbArgs) {
        if (err) {
          reflectCallback(null, {
            error: err
          });
        } else {
          var value = null;

          if (cbArgs.length === 1) {
            value = cbArgs[0];
          } else if (cbArgs.length > 1) {
            value = cbArgs;
          }

          reflectCallback(null, {
            value: value
          });
        }
      }));
      return fn.apply(this, args);
    });
  }

  function reject$1(eachfn, arr, iteratee, callback) {
    _filter(eachfn, arr, function (value, cb) {
      iteratee(value, function (err, v) {
        cb(err, !v);
      });
    }, callback);
  }
  /**
   * The opposite of [`filter`]{@link module:Collections.filter}. Removes values that pass an `async` truth test.
   *
   * @name reject
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.filter]{@link module:Collections.filter}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A truth test to apply to each item in `coll`.
   * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
   * with a boolean argument once it has completed. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Invoked with (err, results).
   * @example
   *
   * async.reject(['file1','file2','file3'], function(filePath, callback) {
   *     fs.access(filePath, function(err) {
   *         callback(null, !err)
   *     });
   * }, function(err, results) {
   *     // results now equals an array of missing files
   *     createFiles(results);
   * });
   */


  var reject = doParallel(reject$1);
  /**
   * A helper function that wraps an array or an object of functions with reflect.
   *
   * @name reflectAll
   * @static
   * @memberOf module:Utils
   * @method
   * @see [async.reflect]{@link module:Utils.reflect}
   * @category Util
   * @param {Array} tasks - The array of functions to wrap in `async.reflect`.
   * @returns {Array} Returns an array of functions, each function wrapped in
   * `async.reflect`
   * @example
   *
   * let tasks = [
   *     function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'one');
   *         }, 200);
   *     },
   *     function(callback) {
   *         // do some more stuff but error ...
   *         callback(new Error('bad stuff happened'));
   *     },
   *     function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'two');
   *         }, 100);
   *     }
   * ];
   *
   * async.parallel(async.reflectAll(tasks),
   * // optional callback
   * function(err, results) {
   *     // values
   *     // results[0].value = 'one'
   *     // results[1].error = Error('bad stuff happened')
   *     // results[2].value = 'two'
   * });
   *
   * // an example using an object instead of an array
   * let tasks = {
   *     one: function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'one');
   *         }, 200);
   *     },
   *     two: function(callback) {
   *         callback('two');
   *     },
   *     three: function(callback) {
   *         setTimeout(function() {
   *             callback(null, 'three');
   *         }, 100);
   *     }
   * };
   *
   * async.parallel(async.reflectAll(tasks),
   * // optional callback
   * function(err, results) {
   *     // values
   *     // results.one.value = 'one'
   *     // results.two.error = 'two'
   *     // results.three.value = 'three'
   * });
   */

  function reflectAll(tasks) {
    var results;

    if (isArray(tasks)) {
      results = arrayMap(tasks, reflect);
    } else {
      results = {};
      baseForOwn(tasks, function (task, key) {
        results[key] = reflect.call(this, task);
      });
    }

    return results;
  }
  /**
   * The same as [`reject`]{@link module:Collections.reject} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name rejectLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.reject]{@link module:Collections.reject}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {Function} iteratee - A truth test to apply to each item in `coll`.
   * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
   * with a boolean argument once it has completed. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Invoked with (err, results).
   */


  var rejectLimit = doParallelLimit(reject$1);
  /**
   * The same as [`reject`]{@link module:Collections.reject} but runs only a single async operation at a time.
   *
   * @name rejectSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.reject]{@link module:Collections.reject}
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A truth test to apply to each item in `coll`.
   * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
   * with a boolean argument once it has completed. Invoked with (item, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Invoked with (err, results).
   */

  var rejectSeries = doLimit(rejectLimit, 1);
  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */

  function constant$1(value) {
    return function () {
      return value;
    };
  }
  /**
   * Attempts to get a successful response from `task` no more than `times` times
   * before returning an error. If the task is successful, the `callback` will be
   * passed the result of the successful task. If all attempts fail, the callback
   * will be passed the error and result (if any) of the final attempt.
   *
   * @name retry
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - Can be either an
   * object with `times` and `interval` or a number.
   * * `times` - The number of attempts to make before giving up.  The default
   *   is `5`.
   * * `interval` - The time to wait between retries, in milliseconds.  The
   *   default is `0`. The interval may also be specified as a function of the
   *   retry count (see example).
   * * `errorFilter` - An optional synchronous function that is invoked on
   *   erroneous result. If it returns `true` the retry attempts will continue;
   *   if the function returns `false` the retry flow is aborted with the current
   *   attempt's error and result being returned to the final callback.
   *   Invoked with (err).
   * * If `opts` is a number, the number specifies the number of times to retry,
   *   with the default interval of `0`.
   * @param {Function} task - A function which receives two arguments: (1) a
   * `callback(err, result)` which must be called when finished, passing `err`
   * (which can be `null`) and the `result` of the function's execution, and (2)
   * a `results` object, containing the results of the previously executed
   * functions (if nested inside another control flow). Invoked with
   * (callback, results).
   * @param {Function} [callback] - An optional callback which is called when the
   * task has succeeded, or after the final failed attempt. It receives the `err`
   * and `result` arguments of the last attempt at completing the `task`. Invoked
   * with (err, results).
   * @example
   *
   * // The `retry` function can be used as a stand-alone control flow by passing
   * // a callback, as shown below:
   *
   * // try calling apiMethod 3 times
   * async.retry(3, apiMethod, function(err, result) {
   *     // do something with the result
   * });
   *
   * // try calling apiMethod 3 times, waiting 200 ms between each retry
   * async.retry({times: 3, interval: 200}, apiMethod, function(err, result) {
   *     // do something with the result
   * });
   *
   * // try calling apiMethod 10 times with exponential backoff
   * // (i.e. intervals of 100, 200, 400, 800, 1600, ... milliseconds)
   * async.retry({
   *   times: 10,
   *   interval: function(retryCount) {
   *     return 50 * Math.pow(2, retryCount);
   *   }
   * }, apiMethod, function(err, result) {
   *     // do something with the result
   * });
   *
   * // try calling apiMethod the default 5 times no delay between each retry
   * async.retry(apiMethod, function(err, result) {
   *     // do something with the result
   * });
   *
   * // try calling apiMethod only when error condition satisfies, all other
   * // errors will abort the retry control flow and return to final callback
   * async.retry({
   *   errorFilter: function(err) {
   *     return err.message === 'Temporary error'; // only retry on a specific error
   *   }
   * }, apiMethod, function(err, result) {
   *     // do something with the result
   * });
   *
   * // It can also be embedded within other control flow functions to retry
   * // individual methods that are not as reliable, like this:
   * async.auto({
   *     users: api.getUsers.bind(api),
   *     payments: async.retry(3, api.getPayments.bind(api))
   * }, function(err, results) {
   *     // do something with the results
   * });
   *
   */


  function retry(opts, task, callback) {
    var DEFAULT_TIMES = 5;
    var DEFAULT_INTERVAL = 0;
    var options = {
      times: DEFAULT_TIMES,
      intervalFunc: constant$1(DEFAULT_INTERVAL)
    };

    function parseTimes(acc, t) {
      if (typeof t === 'object') {
        acc.times = +t.times || DEFAULT_TIMES;
        acc.intervalFunc = typeof t.interval === 'function' ? t.interval : constant$1(+t.interval || DEFAULT_INTERVAL);
        acc.errorFilter = t.errorFilter;
      } else if (typeof t === 'number' || typeof t === 'string') {
        acc.times = +t || DEFAULT_TIMES;
      } else {
        throw new Error("Invalid arguments for async.retry");
      }
    }

    if (arguments.length < 3 && typeof opts === 'function') {
      callback = task || noop;
      task = opts;
    } else {
      parseTimes(options, opts);
      callback = callback || noop;
    }

    if (typeof task !== 'function') {
      throw new Error("Invalid arguments for async.retry");
    }

    var attempt = 1;

    function retryAttempt() {
      task(function (err) {
        if (err && attempt++ < options.times && (typeof options.errorFilter != 'function' || options.errorFilter(err))) {
          setTimeout(retryAttempt, options.intervalFunc(attempt));
        } else {
          callback.apply(null, arguments);
        }
      });
    }

    retryAttempt();
  }
  /**
   * A close relative of [`retry`]{@link module:ControlFlow.retry}.  This method wraps a task and makes it
   * retryable, rather than immediately calling it with retries.
   *
   * @name retryable
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.retry]{@link module:ControlFlow.retry}
   * @category Control Flow
   * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - optional
   * options, exactly the same as from `retry`
   * @param {Function} task - the asynchronous function to wrap
   * @returns {Functions} The wrapped function, which when invoked, will retry on
   * an error, based on the parameters specified in `opts`.
   * @example
   *
   * async.auto({
   *     dep1: async.retryable(3, getFromFlakyService),
   *     process: ["dep1", async.retryable(3, function (results, cb) {
   *         maybeProcessData(results.dep1, cb);
   *     })]
   * }, callback);
   */


  var retryable = function retryable(opts, task) {
    if (!task) {
      task = opts;
      opts = null;
    }

    return initialParams(function (args, callback) {
      function taskFn(cb) {
        task.apply(null, args.concat(cb));
      }

      if (opts) retry(opts, taskFn, callback);else retry(taskFn, callback);
    });
  };
  /**
   * Run the functions in the `tasks` collection in series, each one running once
   * the previous function has completed. If any functions in the series pass an
   * error to its callback, no more functions are run, and `callback` is
   * immediately called with the value of the error. Otherwise, `callback`
   * receives an array of results when `tasks` have completed.
   *
   * It is also possible to use an object instead of an array. Each property will
   * be run as a function, and the results will be passed to the final `callback`
   * as an object instead of an array. This can be a more readable way of handling
   *  results from {@link async.series}.
   *
   * **Note** that while many implementations preserve the order of object
   * properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6)
   * explicitly states that
   *
   * > The mechanics and order of enumerating the properties is not specified.
   *
   * So if you rely on the order in which your series of functions are executed,
   * and want this to work on all platforms, consider using an array.
   *
   * @name series
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Array|Iterable|Object} tasks - A collection containing functions to run, each
   * function is passed a `callback(err, result)` it must call on completion with
   * an error `err` (which can be `null`) and an optional `result` value.
   * @param {Function} [callback] - An optional callback to run once all the
   * functions have completed. This function gets a results array (or object)
   * containing all the result arguments passed to the `task` callbacks. Invoked
   * with (err, result).
   * @example
   * async.series([
   *     function(callback) {
   *         // do some stuff ...
   *         callback(null, 'one');
   *     },
   *     function(callback) {
   *         // do some more stuff ...
   *         callback(null, 'two');
   *     }
   * ],
   * // optional callback
   * function(err, results) {
   *     // results is now equal to ['one', 'two']
   * });
   *
   * async.series({
   *     one: function(callback) {
   *         setTimeout(function() {
   *             callback(null, 1);
   *         }, 200);
   *     },
   *     two: function(callback){
   *         setTimeout(function() {
   *             callback(null, 2);
   *         }, 100);
   *     }
   * }, function(err, results) {
   *     // results is now equal to: {one: 1, two: 2}
   * });
   */


  function series(tasks, callback) {
    _parallel(eachOfSeries, tasks, callback);
  }
  /**
   * Returns `true` if at least one element in the `coll` satisfies an async test.
   * If any iteratee call returns `true`, the main `callback` is immediately
   * called.
   *
   * @name some
   * @static
   * @memberOf module:Collections
   * @method
   * @alias any
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A truth test to apply to each item in the array
   * in parallel. The iteratee is passed a `callback(err, truthValue)` which must
   * be called with a boolean argument once it has completed. Invoked with
   * (item, callback).
   * @param {Function} [callback] - A callback which is called as soon as any
   * iteratee returns `true`, or after all the iteratee functions have finished.
   * Result will be either `true` or `false` depending on the values of the async
   * tests. Invoked with (err, result).
   * @example
   *
   * async.some(['file1','file2','file3'], function(filePath, callback) {
   *     fs.access(filePath, function(err) {
   *         callback(null, !err)
   *     });
   * }, function(err, result) {
   *     // if result is true then at least one of the files exists
   * });
   */


  var some = doParallel(_createTester(Boolean, identity));
  /**
   * The same as [`some`]{@link module:Collections.some} but runs a maximum of `limit` async operations at a time.
   *
   * @name someLimit
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.some]{@link module:Collections.some}
   * @alias anyLimit
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {Function} iteratee - A truth test to apply to each item in the array
   * in parallel. The iteratee is passed a `callback(err, truthValue)` which must
   * be called with a boolean argument once it has completed. Invoked with
   * (item, callback).
   * @param {Function} [callback] - A callback which is called as soon as any
   * iteratee returns `true`, or after all the iteratee functions have finished.
   * Result will be either `true` or `false` depending on the values of the async
   * tests. Invoked with (err, result).
   */

  var someLimit = doParallelLimit(_createTester(Boolean, identity));
  /**
   * The same as [`some`]{@link module:Collections.some} but runs only a single async operation at a time.
   *
   * @name someSeries
   * @static
   * @memberOf module:Collections
   * @method
   * @see [async.some]{@link module:Collections.some}
   * @alias anySeries
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A truth test to apply to each item in the array
   * in parallel. The iteratee is passed a `callback(err, truthValue)` which must
   * be called with a boolean argument once it has completed. Invoked with
   * (item, callback).
   * @param {Function} [callback] - A callback which is called as soon as any
   * iteratee returns `true`, or after all the iteratee functions have finished.
   * Result will be either `true` or `false` depending on the values of the async
   * tests. Invoked with (err, result).
   */

  var someSeries = doLimit(someLimit, 1);
  /**
   * Sorts a list by the results of running each `coll` value through an async
   * `iteratee`.
   *
   * @name sortBy
   * @static
   * @memberOf module:Collections
   * @method
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {Function} iteratee - A function to apply to each item in `coll`.
   * The iteratee is passed a `callback(err, sortValue)` which must be called once
   * it has completed with an error (which can be `null`) and a value to use as
   * the sort criteria. Invoked with (item, callback).
   * @param {Function} callback - A callback which is called after all the
   * `iteratee` functions have finished, or an error occurs. Results is the items
   * from the original `coll` sorted by the values returned by the `iteratee`
   * calls. Invoked with (err, results).
   * @example
   *
   * async.sortBy(['file1','file2','file3'], function(file, callback) {
   *     fs.stat(file, function(err, stats) {
   *         callback(err, stats.mtime);
   *     });
   * }, function(err, results) {
   *     // results is now the original array of files sorted by
   *     // modified date
   * });
   *
   * // By modifying the callback parameter the
   * // sorting order can be influenced:
   *
   * // ascending order
   * async.sortBy([1,9,3,5], function(x, callback) {
   *     callback(null, x);
   * }, function(err,result) {
   *     // result callback
   * });
   *
   * // descending order
   * async.sortBy([1,9,3,5], function(x, callback) {
   *     callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
   * }, function(err,result) {
   *     // result callback
   * });
   */

  function sortBy(coll, iteratee, callback) {
    map(coll, function (x, callback) {
      iteratee(x, function (err, criteria) {
        if (err) return callback(err);
        callback(null, {
          value: x,
          criteria: criteria
        });
      });
    }, function (err, results) {
      if (err) return callback(err);
      callback(null, arrayMap(results.sort(comparator), baseProperty('value')));
    });

    function comparator(left, right) {
      var a = left.criteria,
          b = right.criteria;
      return a < b ? -1 : a > b ? 1 : 0;
    }
  }
  /**
   * Sets a time limit on an asynchronous function. If the function does not call
   * its callback within the specified milliseconds, it will be called with a
   * timeout error. The code property for the error object will be `'ETIMEDOUT'`.
   *
   * @name timeout
   * @static
   * @memberOf module:Utils
   * @method
   * @category Util
   * @param {Function} asyncFn - The asynchronous function you want to set the
   * time limit.
   * @param {number} milliseconds - The specified time limit.
   * @param {*} [info] - Any variable you want attached (`string`, `object`, etc)
   * to timeout Error for more information..
   * @returns {Function} Returns a wrapped function that can be used with any of
   * the control flow functions. Invoke this function with the same
   * parameters as you would `asyncFunc`.
   * @example
   *
   * function myFunction(foo, callback) {
   *     doAsyncTask(foo, function(err, data) {
   *         // handle errors
   *         if (err) return callback(err);
   *
   *         // do some stuff ...
   *
   *         // return processed data
   *         return callback(null, data);
   *     });
   * }
   *
   * var wrapped = async.timeout(myFunction, 1000);
   *
   * // call `wrapped` as you would `myFunction`
   * wrapped({ bar: 'bar' }, function(err, data) {
   *     // if `myFunction` takes < 1000 ms to execute, `err`
   *     // and `data` will have their expected values
   *
   *     // else `err` will be an Error with the code 'ETIMEDOUT'
   * });
   */


  function timeout(asyncFn, milliseconds, info) {
    var originalCallback, timer;
    var timedOut = false;

    function injectedCallback() {
      if (!timedOut) {
        originalCallback.apply(null, arguments);
        clearTimeout(timer);
      }
    }

    function timeoutCallback() {
      var name = asyncFn.name || 'anonymous';
      var error = new Error('Callback function "' + name + '" timed out.');
      error.code = 'ETIMEDOUT';

      if (info) {
        error.info = info;
      }

      timedOut = true;
      originalCallback(error);
    }

    return initialParams(function (args, origCallback) {
      originalCallback = origCallback; // setup timer and call original function

      timer = setTimeout(timeoutCallback, milliseconds);
      asyncFn.apply(null, args.concat(injectedCallback));
    });
  }
  /* Built-in method references for those with the same name as other `lodash` methods. */


  var nativeCeil = Math.ceil;
  var nativeMax$1 = Math.max;
  /**
   * The base implementation of `_.range` and `_.rangeRight` which doesn't
   * coerce arguments.
   *
   * @private
   * @param {number} start The start of the range.
   * @param {number} end The end of the range.
   * @param {number} step The value to increment or decrement by.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Array} Returns the range of numbers.
   */

  function baseRange(start, end, step, fromRight) {
    var index = -1,
        length = nativeMax$1(nativeCeil((end - start) / (step || 1)), 0),
        result = Array(length);

    while (length--) {
      result[fromRight ? length : ++index] = start;
      start += step;
    }

    return result;
  }
  /**
   * The same as [times]{@link module:ControlFlow.times} but runs a maximum of `limit` async operations at a
   * time.
   *
   * @name timesLimit
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.times]{@link module:ControlFlow.times}
   * @category Control Flow
   * @param {number} count - The number of times to run the function.
   * @param {number} limit - The maximum number of async operations at a time.
   * @param {Function} iteratee - The function to call `n` times. Invoked with the
   * iteration index and a callback (n, next).
   * @param {Function} callback - see [async.map]{@link module:Collections.map}.
   */


  function timeLimit(count, limit, iteratee, callback) {
    mapLimit(baseRange(0, count, 1), limit, iteratee, callback);
  }
  /**
   * Calls the `iteratee` function `n` times, and accumulates results in the same
   * manner you would use with [map]{@link module:Collections.map}.
   *
   * @name times
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.map]{@link module:Collections.map}
   * @category Control Flow
   * @param {number} n - The number of times to run the function.
   * @param {Function} iteratee - The function to call `n` times. Invoked with the
   * iteration index and a callback (n, next).
   * @param {Function} callback - see {@link module:Collections.map}.
   * @example
   *
   * // Pretend this is some complicated async factory
   * var createUser = function(id, callback) {
   *     callback(null, {
   *         id: 'user' + id
   *     });
   * };
   *
   * // generate 5 users
   * async.times(5, function(n, next) {
   *     createUser(n, function(err, user) {
   *         next(err, user);
   *     });
   * }, function(err, users) {
   *     // we should now have 5 users
   * });
   */


  var times = doLimit(timeLimit, Infinity);
  /**
   * The same as [times]{@link module:ControlFlow.times} but runs only a single async operation at a time.
   *
   * @name timesSeries
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.times]{@link module:ControlFlow.times}
   * @category Control Flow
   * @param {number} n - The number of times to run the function.
   * @param {Function} iteratee - The function to call `n` times. Invoked with the
   * iteration index and a callback (n, next).
   * @param {Function} callback - see {@link module:Collections.map}.
   */

  var timesSeries = doLimit(timeLimit, 1);
  /**
   * A relative of `reduce`.  Takes an Object or Array, and iterates over each
   * element in series, each step potentially mutating an `accumulator` value.
   * The type of the accumulator defaults to the type of collection passed in.
   *
   * @name transform
   * @static
   * @memberOf module:Collections
   * @method
   * @category Collection
   * @param {Array|Iterable|Object} coll - A collection to iterate over.
   * @param {*} [accumulator] - The initial state of the transform.  If omitted,
   * it will default to an empty Object or Array, depending on the type of `coll`
   * @param {Function} iteratee - A function applied to each item in the
   * collection that potentially modifies the accumulator. The `iteratee` is
   * passed a `callback(err)` which accepts an optional error as its first
   * argument. If an error is passed to the callback, the transform is stopped
   * and the main `callback` is immediately called with the error.
   * Invoked with (accumulator, item, key, callback).
   * @param {Function} [callback] - A callback which is called after all the
   * `iteratee` functions have finished. Result is the transformed accumulator.
   * Invoked with (err, result).
   * @example
   *
   * async.transform([1,2,3], function(acc, item, index, callback) {
   *     // pointless async:
   *     process.nextTick(function() {
   *         acc.push(item * 2)
   *         callback(null)
   *     });
   * }, function(err, result) {
   *     // result is now equal to [2, 4, 6]
   * });
   *
   * @example
   *
   * async.transform({a: 1, b: 2, c: 3}, function (obj, val, key, callback) {
   *     setImmediate(function () {
   *         obj[key] = val * 2;
   *         callback();
   *     })
   * }, function (err, result) {
   *     // result is equal to {a: 2, b: 4, c: 6}
   * })
   */

  function transform(coll, accumulator, iteratee, callback) {
    if (arguments.length === 3) {
      callback = iteratee;
      iteratee = accumulator;
      accumulator = isArray(coll) ? [] : {};
    }

    callback = once(callback || noop);
    eachOf(coll, function (v, k, cb) {
      iteratee(accumulator, v, k, cb);
    }, function (err) {
      callback(err, accumulator);
    });
  }
  /**
   * Undoes a [memoize]{@link module:Utils.memoize}d function, reverting it to the original,
   * unmemoized form. Handy for testing.
   *
   * @name unmemoize
   * @static
   * @memberOf module:Utils
   * @method
   * @see [async.memoize]{@link module:Utils.memoize}
   * @category Util
   * @param {Function} fn - the memoized function
   * @returns {Function} a function that calls the original unmemoized function
   */


  function unmemoize(fn) {
    return function () {
      return (fn.unmemoized || fn).apply(null, arguments);
    };
  }
  /**
   * Repeatedly call `iteratee`, while `test` returns `true`. Calls `callback` when
   * stopped, or an error occurs.
   *
   * @name whilst
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Function} test - synchronous truth test to perform before each
   * execution of `iteratee`. Invoked with ().
   * @param {Function} iteratee - A function which is called each time `test` passes.
   * The function is passed a `callback(err)`, which must be called once it has
   * completed with an optional `err` argument. Invoked with (callback).
   * @param {Function} [callback] - A callback which is called after the test
   * function has failed and repeated execution of `iteratee` has stopped. `callback`
   * will be passed an error and any arguments passed to the final `iteratee`'s
   * callback. Invoked with (err, [results]);
   * @returns undefined
   * @example
   *
   * var count = 0;
   * async.whilst(
   *     function() { return count < 5; },
   *     function(callback) {
   *         count++;
   *         setTimeout(function() {
   *             callback(null, count);
   *         }, 1000);
   *     },
   *     function (err, n) {
   *         // 5 seconds have passed, n = 5
   *     }
   * );
   */


  function whilst(test, iteratee, callback) {
    callback = onlyOnce(callback || noop);
    if (!test()) return callback(null);
    var next = rest(function (err, args) {
      if (err) return callback(err);
      if (test()) return iteratee(next);
      callback.apply(null, [null].concat(args));
    });
    iteratee(next);
  }
  /**
   * Repeatedly call `fn` until `test` returns `true`. Calls `callback` when
   * stopped, or an error occurs. `callback` will be passed an error and any
   * arguments passed to the final `fn`'s callback.
   *
   * The inverse of [whilst]{@link module:ControlFlow.whilst}.
   *
   * @name until
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @see [async.whilst]{@link module:ControlFlow.whilst}
   * @category Control Flow
   * @param {Function} test - synchronous truth test to perform before each
   * execution of `fn`. Invoked with ().
   * @param {Function} fn - A function which is called each time `test` fails.
   * The function is passed a `callback(err)`, which must be called once it has
   * completed with an optional `err` argument. Invoked with (callback).
   * @param {Function} [callback] - A callback which is called after the test
   * function has passed and repeated execution of `fn` has stopped. `callback`
   * will be passed an error and any arguments passed to the final `fn`'s
   * callback. Invoked with (err, [results]);
   */


  function until(test, fn, callback) {
    whilst(function () {
      return !test.apply(this, arguments);
    }, fn, callback);
  }
  /**
   * Runs the `tasks` array of functions in series, each passing their results to
   * the next in the array. However, if any of the `tasks` pass an error to their
   * own callback, the next function is not executed, and the main `callback` is
   * immediately called with the error.
   *
   * @name waterfall
   * @static
   * @memberOf module:ControlFlow
   * @method
   * @category Control Flow
   * @param {Array} tasks - An array of functions to run, each function is passed
   * a `callback(err, result1, result2, ...)` it must call on completion. The
   * first argument is an error (which can be `null`) and any further arguments
   * will be passed as arguments in order to the next task.
   * @param {Function} [callback] - An optional callback to run once all the
   * functions have completed. This will be passed the results of the last task's
   * callback. Invoked with (err, [results]).
   * @returns undefined
   * @example
   *
   * async.waterfall([
   *     function(callback) {
   *         callback(null, 'one', 'two');
   *     },
   *     function(arg1, arg2, callback) {
   *         // arg1 now equals 'one' and arg2 now equals 'two'
   *         callback(null, 'three');
   *     },
   *     function(arg1, callback) {
   *         // arg1 now equals 'three'
   *         callback(null, 'done');
   *     }
   * ], function (err, result) {
   *     // result now equals 'done'
   * });
   *
   * // Or, with named functions:
   * async.waterfall([
   *     myFirstFunction,
   *     mySecondFunction,
   *     myLastFunction,
   * ], function (err, result) {
   *     // result now equals 'done'
   * });
   * function myFirstFunction(callback) {
   *     callback(null, 'one', 'two');
   * }
   * function mySecondFunction(arg1, arg2, callback) {
   *     // arg1 now equals 'one' and arg2 now equals 'two'
   *     callback(null, 'three');
   * }
   * function myLastFunction(arg1, callback) {
   *     // arg1 now equals 'three'
   *     callback(null, 'done');
   * }
   */


  var waterfall = function waterfall(tasks, callback) {
    callback = once(callback || noop);
    if (!isArray(tasks)) return callback(new Error('First argument to waterfall must be an array of functions'));
    if (!tasks.length) return callback();
    var taskIndex = 0;

    function nextTask(args) {
      if (taskIndex === tasks.length) {
        return callback.apply(null, [null].concat(args));
      }

      var taskCallback = onlyOnce(rest(function (err, args) {
        if (err) {
          return callback.apply(null, [err].concat(args));
        }

        nextTask(args);
      }));
      args.push(taskCallback);
      var task = tasks[taskIndex++];
      task.apply(null, args);
    }

    nextTask([]);
  };
  /**
   * Async is a utility module which provides straight-forward, powerful functions
   * for working with asynchronous JavaScript. Although originally designed for
   * use with [Node.js](http://nodejs.org) and installable via
   * `npm install --save async`, it can also be used directly in the browser.
   * @module async
   */

  /**
   * A collection of `async` functions for manipulating collections, such as
   * arrays and objects.
   * @module Collections
   */

  /**
   * A collection of `async` functions for controlling the flow through a script.
   * @module ControlFlow
   */

  /**
   * A collection of `async` utility functions.
   * @module Utils
   */


  var index = {
    applyEach: applyEach,
    applyEachSeries: applyEachSeries,
    apply: apply$2,
    asyncify: asyncify,
    auto: auto,
    autoInject: autoInject,
    cargo: cargo,
    compose: compose,
    concat: concat,
    concatSeries: concatSeries,
    constant: constant,
    detect: detect,
    detectLimit: detectLimit,
    detectSeries: detectSeries,
    dir: dir,
    doDuring: doDuring,
    doUntil: doUntil,
    doWhilst: doWhilst,
    during: during,
    each: eachLimit,
    eachLimit: eachLimit$1,
    eachOf: eachOf,
    eachOfLimit: eachOfLimit,
    eachOfSeries: eachOfSeries,
    eachSeries: eachSeries,
    ensureAsync: ensureAsync,
    every: every,
    everyLimit: everyLimit,
    everySeries: everySeries,
    filter: filter,
    filterLimit: filterLimit,
    filterSeries: filterSeries,
    forever: forever,
    log: log,
    map: map,
    mapLimit: mapLimit,
    mapSeries: mapSeries,
    mapValues: mapValues,
    mapValuesLimit: mapValuesLimit,
    mapValuesSeries: mapValuesSeries,
    memoize: memoize,
    nextTick: nextTick,
    parallel: parallelLimit,
    parallelLimit: parallelLimit$1,
    priorityQueue: priorityQueue,
    queue: queue$1,
    race: race,
    reduce: reduce,
    reduceRight: reduceRight,
    reflect: reflect,
    reflectAll: reflectAll,
    reject: reject,
    rejectLimit: rejectLimit,
    rejectSeries: rejectSeries,
    retry: retry,
    retryable: retryable,
    seq: seq$1,
    series: series,
    setImmediate: setImmediate$1,
    some: some,
    someLimit: someLimit,
    someSeries: someSeries,
    sortBy: sortBy,
    timeout: timeout,
    times: times,
    timesLimit: timeLimit,
    timesSeries: timesSeries,
    transform: transform,
    unmemoize: unmemoize,
    until: until,
    waterfall: waterfall,
    whilst: whilst,
    // aliases
    all: every,
    any: some,
    forEach: eachLimit,
    forEachSeries: eachSeries,
    forEachLimit: eachLimit$1,
    forEachOf: eachOf,
    forEachOfSeries: eachOfSeries,
    forEachOfLimit: eachOfLimit,
    inject: reduce,
    foldl: reduce,
    foldr: reduceRight,
    select: filter,
    selectLimit: filterLimit,
    selectSeries: filterSeries,
    wrapSync: asyncify
  };
  exports['default'] = index;
  exports.applyEach = applyEach;
  exports.applyEachSeries = applyEachSeries;
  exports.apply = apply$2;
  exports.asyncify = asyncify;
  exports.auto = auto;
  exports.autoInject = autoInject;
  exports.cargo = cargo;
  exports.compose = compose;
  exports.concat = concat;
  exports.concatSeries = concatSeries;
  exports.constant = constant;
  exports.detect = detect;
  exports.detectLimit = detectLimit;
  exports.detectSeries = detectSeries;
  exports.dir = dir;
  exports.doDuring = doDuring;
  exports.doUntil = doUntil;
  exports.doWhilst = doWhilst;
  exports.during = during;
  exports.each = eachLimit;
  exports.eachLimit = eachLimit$1;
  exports.eachOf = eachOf;
  exports.eachOfLimit = eachOfLimit;
  exports.eachOfSeries = eachOfSeries;
  exports.eachSeries = eachSeries;
  exports.ensureAsync = ensureAsync;
  exports.every = every;
  exports.everyLimit = everyLimit;
  exports.everySeries = everySeries;
  exports.filter = filter;
  exports.filterLimit = filterLimit;
  exports.filterSeries = filterSeries;
  exports.forever = forever;
  exports.log = log;
  exports.map = map;
  exports.mapLimit = mapLimit;
  exports.mapSeries = mapSeries;
  exports.mapValues = mapValues;
  exports.mapValuesLimit = mapValuesLimit;
  exports.mapValuesSeries = mapValuesSeries;
  exports.memoize = memoize;
  exports.nextTick = nextTick;
  exports.parallel = parallelLimit;
  exports.parallelLimit = parallelLimit$1;
  exports.priorityQueue = priorityQueue;
  exports.queue = queue$1;
  exports.race = race;
  exports.reduce = reduce;
  exports.reduceRight = reduceRight;
  exports.reflect = reflect;
  exports.reflectAll = reflectAll;
  exports.reject = reject;
  exports.rejectLimit = rejectLimit;
  exports.rejectSeries = rejectSeries;
  exports.retry = retry;
  exports.retryable = retryable;
  exports.seq = seq$1;
  exports.series = series;
  exports.setImmediate = setImmediate$1;
  exports.some = some;
  exports.someLimit = someLimit;
  exports.someSeries = someSeries;
  exports.sortBy = sortBy;
  exports.timeout = timeout;
  exports.times = times;
  exports.timesLimit = timeLimit;
  exports.timesSeries = timesSeries;
  exports.transform = transform;
  exports.unmemoize = unmemoize;
  exports.until = until;
  exports.waterfall = waterfall;
  exports.whilst = whilst;
  exports.all = every;
  exports.allLimit = everyLimit;
  exports.allSeries = everySeries;
  exports.any = some;
  exports.anyLimit = someLimit;
  exports.anySeries = someSeries;
  exports.find = detect;
  exports.findLimit = detectLimit;
  exports.findSeries = detectSeries;
  exports.forEach = eachLimit;
  exports.forEachSeries = eachSeries;
  exports.forEachLimit = eachLimit$1;
  exports.forEachOf = eachOf;
  exports.forEachOfSeries = eachOfSeries;
  exports.forEachOfLimit = eachOfLimit;
  exports.inject = reduce;
  exports.foldl = reduce;
  exports.foldr = reduceRight;
  exports.select = filter;
  exports.selectLimit = filterLimit;
  exports.selectSeries = filterSeries;
  exports.wrapSync = asyncify;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

cc._RF.pop();

}).call(this,require("C:/ProgramData/cocos/editors/Creator/2.4.4/resources/app.asar/node_modules/process/browser.js"),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hc3NldHNcXFNjcmlwdFxcY29yZVxcbWluXFxhc3luYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQyxXQUFVLE1BQVYsRUFBa0IsT0FBbEIsRUFBMkI7QUFDeEIsU0FBTyxPQUFQLEtBQW1CLFFBQW5CLElBQStCLE9BQU8sTUFBUCxLQUFrQixXQUFqRCxHQUErRCxPQUFPLENBQUMsT0FBRCxDQUF0RSxHQUNBLE9BQU8sTUFBUCxLQUFrQixVQUFsQixJQUFnQyxNQUFNLENBQUMsR0FBdkMsR0FBNkMsTUFBTSxDQUFDLENBQUMsU0FBRCxDQUFELEVBQWMsT0FBZCxDQUFuRCxHQUNDLE9BQU8sQ0FBRSxNQUFNLENBQUMsS0FBUCxHQUFlLE1BQU0sQ0FBQyxLQUFQLElBQWdCLEVBQWpDLENBRlI7QUFHSCxDQUpBLFVBSVEsVUFBVSxPQUFWLEVBQW1CO0FBQUU7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsV0FBUyxLQUFULENBQWUsSUFBZixFQUFxQixPQUFyQixFQUE4QixJQUE5QixFQUFvQztBQUNsQyxZQUFRLElBQUksQ0FBQyxNQUFiO0FBQ0UsV0FBSyxDQUFMO0FBQVEsZUFBTyxJQUFJLENBQUMsSUFBTCxDQUFVLE9BQVYsQ0FBUDs7QUFDUixXQUFLLENBQUw7QUFBUSxlQUFPLElBQUksQ0FBQyxJQUFMLENBQVUsT0FBVixFQUFtQixJQUFJLENBQUMsQ0FBRCxDQUF2QixDQUFQOztBQUNSLFdBQUssQ0FBTDtBQUFRLGVBQU8sSUFBSSxDQUFDLElBQUwsQ0FBVSxPQUFWLEVBQW1CLElBQUksQ0FBQyxDQUFELENBQXZCLEVBQTRCLElBQUksQ0FBQyxDQUFELENBQWhDLENBQVA7O0FBQ1IsV0FBSyxDQUFMO0FBQVEsZUFBTyxJQUFJLENBQUMsSUFBTCxDQUFVLE9BQVYsRUFBbUIsSUFBSSxDQUFDLENBQUQsQ0FBdkIsRUFBNEIsSUFBSSxDQUFDLENBQUQs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