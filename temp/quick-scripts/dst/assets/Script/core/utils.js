
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/core/utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ef5fb5G1dGnKVJk1K0Xvy/', 'utils');
// Script/core/utils.js

"use strict";

Number.prototype.format = function (a) {
  a = a || 3;
  a++;
  var add = Math.pow(10, a);
  var num = Math.round(this * add);
  var str = num.toString();
  var fu = str.substring(0, 1);

  if (fu == "-" || fu == "+") {
    //带符号的情况
    str = str.substring(1, str.length);
  } else {
    fu = "+";
  }

  while (str.length < a) {
    str = "0" + str;
  }

  var str2 = fu + str.substring(0, str.length - a) + "." + str.substring(str.length - a, str.length - 1);
  return parseFloat(str2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb3JlXFx1dGlscy5qcyJdLCJuYW1lcyI6WyJOdW1iZXIiLCJwcm90b3R5cGUiLCJmb3JtYXQiLCJhIiwiYWRkIiwiTWF0aCIsInBvdyIsIm51bSIsInJvdW5kIiwic3RyIiwidG9TdHJpbmciLCJmdSIsInN1YnN0cmluZyIsImxlbmd0aCIsInN0cjIiLCJwYXJzZUZsb2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLE1BQWpCLEdBQTBCLFVBQVVDLENBQVYsRUFBYTtBQUNuQ0EsRUFBQUEsQ0FBQyxHQUFHQSxDQUFDLElBQUksQ0FBVDtBQUNBQSxFQUFBQSxDQUFDO0FBQ0QsTUFBSUMsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxFQUFULEVBQWFILENBQWIsQ0FBVjtBQUNBLE1BQUlJLEdBQUcsR0FBR0YsSUFBSSxDQUFDRyxLQUFMLENBQVcsT0FBT0osR0FBbEIsQ0FBVjtBQUNBLE1BQUlLLEdBQUcsR0FBR0YsR0FBRyxDQUFDRyxRQUFKLEVBQVY7QUFDQSxNQUFJQyxFQUFFLEdBQUdGLEdBQUcsQ0FBQ0csU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBVDs7QUFDQSxNQUFJRCxFQUFFLElBQUksR0FBTixJQUFhQSxFQUFFLElBQUksR0FBdkIsRUFBNEI7QUFBRTtBQUMxQkYsSUFBQUEsR0FBRyxHQUFHQSxHQUFHLENBQUNHLFNBQUosQ0FBYyxDQUFkLEVBQWlCSCxHQUFHLENBQUNJLE1BQXJCLENBQU47QUFDSCxHQUZELE1BR0s7QUFDREYsSUFBQUEsRUFBRSxHQUFHLEdBQUw7QUFDSDs7QUFDRCxTQUFPRixHQUFHLENBQUNJLE1BQUosR0FBYVYsQ0FBcEI7QUFDSU0sSUFBQUEsR0FBRyxHQUFHLE1BQU1BLEdBQVo7QUFESjs7QUFFQSxNQUFJSyxJQUFJLEdBQUdILEVBQUUsR0FBR0YsR0FBRyxDQUFDRyxTQUFKLENBQWMsQ0FBZCxFQUFpQkgsR0FBRyxDQUFDSSxNQUFKLEdBQWFWLENBQTlCLENBQUwsR0FBd0MsR0FBeEMsR0FBOENNLEdBQUcsQ0FBQ0csU0FBSixDQUFjSCxHQUFHLENBQUNJLE1BQUosR0FBYVYsQ0FBM0IsRUFBOEJNLEdBQUcsQ0FBQ0ksTUFBSixHQUFhLENBQTNDLENBQXpEO0FBQ0EsU0FBT0UsVUFBVSxDQUFDRCxJQUFELENBQWpCO0FBQ0gsQ0FqQkQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIk51bWJlci5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKGEpIHtcclxuICAgIGEgPSBhIHx8IDM7XHJcbiAgICBhKys7XHJcbiAgICB2YXIgYWRkID0gTWF0aC5wb3coMTAsIGEpO1xyXG4gICAgdmFyIG51bSA9IE1hdGgucm91bmQodGhpcyAqIGFkZCk7XHJcbiAgICB2YXIgc3RyID0gbnVtLnRvU3RyaW5nKCk7XHJcbiAgICB2YXIgZnUgPSBzdHIuc3Vic3RyaW5nKDAsIDEpO1xyXG4gICAgaWYgKGZ1ID09IFwiLVwiIHx8IGZ1ID09IFwiK1wiKSB7IC8v5bim56ym5Y+355qE5oOF5Ya1XHJcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygxLCBzdHIubGVuZ3RoKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZnUgPSBcIitcIlxyXG4gICAgfVxyXG4gICAgd2hpbGUgKHN0ci5sZW5ndGggPCBhKVxyXG4gICAgICAgIHN0ciA9IFwiMFwiICsgc3RyO1xyXG4gICAgdmFyIHN0cjIgPSBmdSArIHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIGEpICsgXCIuXCIgKyBzdHIuc3Vic3RyaW5nKHN0ci5sZW5ndGggLSBhLCBzdHIubGVuZ3RoIC0gMSk7XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdChzdHIyKTtcclxufSJdfQ==