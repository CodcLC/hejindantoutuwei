
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/localStorage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e428uQFSlI1qpJJtJv9kar', 'localStorage');
// Script/game/localStorage.js

"use strict";

module.exports = {
  _localStorage: {},
  clear: function clear() {
    this._localStorage = {};
    cc.sys.localStorage.clear();
  },
  removeItem: function removeItem(key) {
    cc.sys.localStorage.removeItem(key);
    delete this._localStorage[key];
  },
  setItem: function setItem(key, value) {
    this._localStorage[key] = value;

    try {
      value = JSON.stringify(value);
    } catch (e) {
      value = value;
    }

    cc.sys.localStorage.setItem(key, value);
  },
  getItem: function getItem(key) {
    if (this._localStorage[key]) {
      return this._localStorage[key];
      var value = cc.sys.localStorage.getItem(key);

      if (value) {
        try {
          value = JSON.parse(value);
        } catch (e) {
          value = value;
        }

        this._localStorage[key] = value;
        return value;
      }

      return null;
    }
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFxsb2NhbFN0b3JhZ2UuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIl9sb2NhbFN0b3JhZ2UiLCJjbGVhciIsImNjIiwic3lzIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImtleSIsInNldEl0ZW0iLCJ2YWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiZ2V0SXRlbSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYkMsRUFBQUEsYUFBYSxFQUFFLEVBREY7QUFFYkMsRUFBQUEsS0FBSyxFQUFFLGlCQUFZO0FBQ2YsU0FBS0QsYUFBTCxHQUFxQixFQUFyQjtBQUNBRSxJQUFBQSxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkgsS0FBcEI7QUFDSCxHQUxZO0FBTWJJLEVBQUFBLFVBQVUsRUFBRSxvQkFBVUMsR0FBVixFQUFlO0FBQ3ZCSixJQUFBQSxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsVUFBcEIsQ0FBK0JDLEdBQS9CO0FBQ0EsV0FBTyxLQUFLTixhQUFMLENBQW1CTSxHQUFuQixDQUFQO0FBQ0gsR0FUWTtBQVViQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVVELEdBQVYsRUFBZUUsS0FBZixFQUFzQjtBQUMzQixTQUFLUixhQUFMLENBQW1CTSxHQUFuQixJQUEwQkUsS0FBMUI7O0FBQ0EsUUFBSTtBQUNBQSxNQUFBQSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixLQUFmLENBQVI7QUFDSCxLQUZELENBRUUsT0FBT0csQ0FBUCxFQUFVO0FBQ1JILE1BQUFBLEtBQUssR0FBR0EsS0FBUjtBQUNIOztBQUNETixJQUFBQSxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkcsT0FBcEIsQ0FBNEJELEdBQTVCLEVBQWlDRSxLQUFqQztBQUNILEdBbEJZO0FBbUJiSSxFQUFBQSxPQUFPLEVBQUUsaUJBQVVOLEdBQVYsRUFBZTtBQUNwQixRQUFJLEtBQUtOLGFBQUwsQ0FBbUJNLEdBQW5CLENBQUosRUFBNkI7QUFDekIsYUFBTyxLQUFLTixhQUFMLENBQW1CTSxHQUFuQixDQUFQO0FBQ0EsVUFBSUUsS0FBSyxHQUFHTixFQUFFLENBQUNDLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQlEsT0FBcEIsQ0FBNEJOLEdBQTVCLENBQVo7O0FBQ0EsVUFBSUUsS0FBSixFQUFXO0FBQ1AsWUFBSTtBQUNBQSxVQUFBQSxLQUFLLEdBQUdDLElBQUksQ0FBQ0ksS0FBTCxDQUFXTCxLQUFYLENBQVI7QUFDSCxTQUZELENBRUUsT0FBT0csQ0FBUCxFQUFVO0FBQ1JILFVBQUFBLEtBQUssR0FBR0EsS0FBUjtBQUNIOztBQUNELGFBQUtSLGFBQUwsQ0FBbUJNLEdBQW5CLElBQTBCRSxLQUExQjtBQUNBLGVBQU9BLEtBQVA7QUFDSDs7QUFDRCxhQUFPLElBQVA7QUFDSDtBQUNKO0FBbENZLENBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIF9sb2NhbFN0b3JhZ2U6IHt9LFxyXG4gICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9sb2NhbFN0b3JhZ2UgPSB7fTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlSXRlbTogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9sb2NhbFN0b3JhZ2Vba2V5XTtcclxuICAgIH0sXHJcbiAgICBzZXRJdGVtOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2xvY2FsU3RvcmFnZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0SXRlbTogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9sb2NhbFN0b3JhZ2Vba2V5XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxTdG9yYWdlW2tleV07XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=