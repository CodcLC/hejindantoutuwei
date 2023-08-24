"use strict";
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