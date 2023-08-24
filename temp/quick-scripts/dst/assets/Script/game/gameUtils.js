
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/gameUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ca93yd2x1Ge5bQO4eUy+Wd', 'gameUtils');
// Script/game/gameUtils.js

"use strict";

module.exports = {
  //获取两点之间的角
  getRotation: function getRotation(start, end) {
    //算好初始位置和初始角度
    var angle = Math.atan2(end.y - start.y, end.x - start.x);
    if (angle < 0) angle = angle + Math.PI * 2;else if (angle > Math.PI * 2) angle = angle - Math.PI * 2; //var rotation = 360.0-angle * 180.0 / Math.PI;//原图的初始角度是向右用360- 向左则用180-

    var rotation = angle * 180.0 / Math.PI; //原图的初始角度是向右用360- 向左则用180-

    return rotation;
  },
  standardRotation: function standardRotation(rotation) {
    while (rotation > 180) {
      rotation = rotation - 360;
    }

    while (rotation < -180) {
      rotation = rotation + 360;
    }

    return rotation;
  },
  limitRotation: function limitRotation(rotation, start, end) {
    var a = Math.abs(rotation - start);
    var b = Math.abs(end - rotation);
    return a < 180 && b < 180;
  },
  getNextPos: function getNextPos(pos, len, rotation) {
    var angle = rotation * Math.PI / 180;
    var x = pos.x + Math.cos(angle) * len;
    var y = pos.x + Math.sin(angle) * len;
    return cc.v2(x, y);
  },
  getLength: function getLength(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  },
  getSpriteFrames: function getSpriteFrames(atlas, textName) {
    textName = textName + "_";
    var frames = [];
    var i = 0;

    while (true) {
      var frameName = jm.sprintf('%s%d', textName, i);
      var frame = atlas.getSpriteFrame(frameName);

      if (!frame) {
        frameName = jm.sprintf('%s%02d', textName, i);
        frame = atlas.getSpriteFrame(frameName);
      }

      if (frame) {
        frames.push(frame);
      } else if (i > 1) {
        break;
      }

      i++;
    }

    return frames;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFxnYW1lVXRpbHMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImdldFJvdGF0aW9uIiwic3RhcnQiLCJlbmQiLCJhbmdsZSIsIk1hdGgiLCJhdGFuMiIsInkiLCJ4IiwiUEkiLCJyb3RhdGlvbiIsInN0YW5kYXJkUm90YXRpb24iLCJsaW1pdFJvdGF0aW9uIiwiYSIsImFicyIsImIiLCJnZXROZXh0UG9zIiwicG9zIiwibGVuIiwiY29zIiwic2luIiwiY2MiLCJ2MiIsImdldExlbmd0aCIsInAxIiwicDIiLCJzcXJ0IiwicG93IiwiZ2V0U3ByaXRlRnJhbWVzIiwiYXRsYXMiLCJ0ZXh0TmFtZSIsImZyYW1lcyIsImkiLCJmcmFtZU5hbWUiLCJqbSIsInNwcmludGYiLCJmcmFtZSIsImdldFNwcml0ZUZyYW1lIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2pCO0FBQ0lDLEVBQUFBLFdBQVcsRUFBRSxxQkFBVUMsS0FBVixFQUFpQkMsR0FBakIsRUFBc0I7QUFDL0I7QUFDQSxRQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxHQUFHLENBQUNJLENBQUosR0FBUUwsS0FBSyxDQUFDSyxDQUF6QixFQUE0QkosR0FBRyxDQUFDSyxDQUFKLEdBQVFOLEtBQUssQ0FBQ00sQ0FBMUMsQ0FBWjtBQUNBLFFBQUlKLEtBQUssR0FBRyxDQUFaLEVBQ0lBLEtBQUssR0FBR0EsS0FBSyxHQUFHQyxJQUFJLENBQUNJLEVBQUwsR0FBVSxDQUExQixDQURKLEtBRUssSUFBSUwsS0FBSyxHQUFHQyxJQUFJLENBQUNJLEVBQUwsR0FBVSxDQUF0QixFQUNETCxLQUFLLEdBQUdBLEtBQUssR0FBR0MsSUFBSSxDQUFDSSxFQUFMLEdBQVUsQ0FBMUIsQ0FOMkIsQ0FPL0I7O0FBQ0EsUUFBSUMsUUFBUSxHQUFHTixLQUFLLEdBQUcsS0FB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QUFDRCxXQUFPRCxNQUFQO0FBQ0g7QUF4RFksQ0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xyXG4vL+iOt+WPluS4pOeCueS5i+mXtOeahOinklxyXG4gICAgZ2V0Um90YXRpb246IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgLy/nrpflpb3liJ3lp4vkvY3nva7lkozliJ3lp4vop5LluqZcclxuICAgICAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKGVuZC55IC0gc3RhcnQueSwgZW5kLnggLSBzdGFydC54KTtcclxuICAgICAgICBpZiAoYW5nbGUgPCAwKVxyXG4gICAgICAgICAgICBhbmdsZSA9IGFuZ2xlICsgTWF0aC5QSSAqIDI7XHJcbiAgICAgICAgZWxzZSBpZiAoYW5nbGUgPiBNYXRoLlBJICogMilcclxuICAgICAgICAgICAgYW5nbGUgPSBhbmdsZSAtIE1hdGguUEkgKiAyO1xyXG4gICAgICAgIC8vdmFyIHJvdGF0aW9uID0gMzYwLjAtYW5nbGUgKiAxODAuMCAvIE1hdGguUEk7Ly/ljp/lm77nmoTliJ3lp4vop5LluqbmmK/lkJHlj7PnlKgzNjAtIOWQkeW3puWImeeUqDE4MC1cclxuICAgICAgICB2YXIgcm90YXRpb24gPSBhbmdsZSAqIDE4MC4wIC8gTWF0aC5QSTsvL+WOn+WbvueahOWIneWni+inkuW6puaYr+WQkeWPs+eUqDM2MC0g5ZCR5bem5YiZ55SoMTgwLVxyXG4gICAgICAgIHJldHVybiByb3RhdGlvbjtcclxuICAgIH0sXHJcbiAgICBzdGFuZGFyZFJvdGF0aW9uOiBmdW5jdGlvbiAocm90YXRpb24pIHtcclxuICAgICAgICB3aGlsZSAocm90YXRpb24gPiAxODApIHtcclxuICAgICAgICAgICAgcm90YXRpb24gPSByb3RhdGlvbiAtIDM2MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKHJvdGF0aW9uIDwgLTE4MCkge1xyXG4gICAgICAgICAgICByb3RhdGlvbiA9IHJvdGF0aW9uICsgMzYwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm90YXRpb247XHJcbiAgICB9LFxyXG4gICAgbGltaXRSb3RhdGlvbjogZnVuY3Rpb24gKHJvdGF0aW9uLCBzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgdmFyIGEgPSBNYXRoLmFicyhyb3RhdGlvbiAtIHN0YXJ0KTtcclxuICAgICAgICB2YXIgYiA9IE1hdGguYWJzKGVuZCAtIHJvdGF0aW9uKTtcclxuICAgICAgICByZXR1cm4gYSA8IDE4MCAmJiBiIDwgMTgwO1xyXG4gICAgfSxcclxuICAgIGdldE5leHRQb3M6IGZ1bmN0aW9uIChwb3MsIGxlbiwgcm90YXRpb24pIHtcclxuICAgICAgICB2YXIgYW5nbGUgPSByb3RhdGlvbiAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgdmFyIHggPSBwb3MueCArIE1hdGguY29zKGFuZ2xlKSAqIGxlbjtcclxuICAgICAgICB2YXIgeSA9IHBvcy54ICsgTWF0aC5zaW4oYW5nbGUpICogbGVuO1xyXG4gICAgICAgIHJldHVybiBjYy52Mih4LCB5KTtcclxuICAgIH0sXHJcbiAgICBnZXRMZW5ndGg6IGZ1bmN0aW9uIChwMSwgcDIpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAxLnggLSBwMi54LCAyKSArIE1hdGgucG93KHAxLnkgLSBwMi55LCAyKSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0U3ByaXRlRnJhbWVzOiBmdW5jdGlvbiAoYXRsYXMsIHRleHROYW1lKSB7XHJcbiAgICAgICAgdGV4dE5hbWUgPSB0ZXh0TmFtZSArIFwiX1wiXHJcbiAgICAgICAgdmFyIGZyYW1lcyA9IFtdO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICB2YXIgZnJhbWVOYW1lID0gam0uc3ByaW50ZignJXMlZCcsIHRleHROYW1lLCBpKTtcclxuICAgICAgICAgICAgdmFyIGZyYW1lID0gYXRsYXMuZ2V0U3ByaXRlRnJhbWUoZnJhbWVOYW1lKTtcclxuICAgICAgICAgICAgaWYgKCFmcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgZnJhbWVOYW1lID0gam0uc3ByaW50ZignJXMlMDJkJywgdGV4dE5hbWUsIGkpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWUgPSBhdGxhcy5nZXRTcHJpdGVGcmFtZShmcmFtZU5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgZnJhbWVzLnB1c2goZnJhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGkgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmcmFtZXM7XHJcbiAgICB9LFxyXG59XHJcbiJdfQ==