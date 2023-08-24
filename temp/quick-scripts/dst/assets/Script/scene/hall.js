
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scene/hall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69945lhXk9LGqmOhtuNdoDG', 'hall');
// Script/scene/hall.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onEnterGame: function onEnterGame(event, value) {
    value = parseInt(value);

    switch (value) {
      case 1:
        game.isOver = false;
        game.emit(game.gameEvent.load_scene, game.gameScene.gameGuanka);
        break;

      case 2:
        game.emit(game.gameEvent.load_scene, game.gameScene.mapEdit);
        break;

      case 3:
        game.emit(game.gameEvent.load_scene, game.gameScene.roleEdit);
        break;

      default:
        break;
    }
  },
  onLoad: function onLoad() {
    //game.soundManager.musicMute = true;
    game.soundManager.playMusic(game.gameSound.op, true);
  },
  start: function start() {},
  onDestroy: function onDestroy() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuZVxcaGFsbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uRW50ZXJHYW1lIiwiZXZlbnQiLCJ2YWx1ZSIsInBhcnNlSW50IiwiZ2FtZSIsImlzT3ZlciIsImVtaXQiLCJnYW1lRXZlbnQiLCJsb2FkX3NjZW5lIiwiZ2FtZVNjZW5lIiwiZ2FtZUd1YW5rYSIsIm1hcEVkaXQiLCJyb2xlRWRpdCIsIm9uTG9hZCIsInNvdW5kTWFuYWdlciIsInBsYXlNdXNpYyIsImdhbWVTb3VuZCIsIm9wIiwic3RhcnQiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRSxFQUZQO0FBR0xDLEVBQUFBLFdBSEssdUJBR09DLEtBSFAsRUFHY0MsS0FIZCxFQUdxQjtBQUN0QkEsSUFBQUEsS0FBSyxHQUFHQyxRQUFRLENBQUNELEtBQUQsQ0FBaEI7O0FBQ0EsWUFBUUEsS0FBUjtBQUNJLFdBQUssQ0FBTDtBQUNJRSxRQUFBQSxJQUFJLENBQUNDLE1BQUwsR0FBYyxLQUFkO0FBQ0FELFFBQUFBLElBQUksQ0FBQ0UsSUFBTCxDQUFVRixJQUFJLENBQUNHLFNBQUwsQ0FBZUMsVUFBekIsRUFBcUNKLElBQUksQ0FBQ0ssU0FBTCxDQUFlQyxVQUFwRDtBQUNBOztBQUNKLFdBQUssQ0FBTDtBQUNJTixRQUFBQSxJQUFJLENBQUNFLElBQUwsQ0FBVUYsSUFBSSxDQUFDRyxTQUFMLENBQWVDLFVBQXpCLEVBQXFDSixJQUFJLENBQUNLLFNBQUwsQ0FBZUUsT0FBcEQ7QUFDQTs7QUFDSixXQUFLLENBQUw7QUFDSVAsUUFBQUEsSUFBSSxDQUFDRSxJQUFMLENBQVVGLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxVQUF6QixFQUFxQ0osSUFBSSxDQUFDSyxTQUFMLENBQWVHLFFBQXBEO0FBQ0E7O0FBQ0o7QUFDSTtBQVpSO0FBY0gsR0FuQkk7QUFvQkxDLEVBQUFBLE1BcEJLLG9CQW9CSTtBQUNMO0FBQ0FULElBQUFBLElBQUksQ0FBQ1UsWUFBTCxDQUFrQkMsU0FBbEIsQ0FBNEJYLElBQUksQ0FBQ1ksU0FBTCxDQUFlQyxFQUEzQyxFQUErQyxJQUEvQztBQUVILEdBeEJJO0FBeUJMQyxFQUFBQSxLQXpCSyxtQkF5QkcsQ0FDUCxDQTFCSTtBQTJCTEMsRUFBQUEsU0EzQkssdUJBMkJPLENBQ1gsQ0E1QkksQ0E2Qkw7O0FBN0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHt9LFxyXG4gICAgb25FbnRlckdhbWUoZXZlbnQsIHZhbHVlKSB7XHJcbiAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSlcclxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGdhbWUuaXNPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBnYW1lLmVtaXQoZ2FtZS5nYW1lRXZlbnQubG9hZF9zY2VuZSwgZ2FtZS5nYW1lU2NlbmUuZ2FtZUd1YW5rYSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgZ2FtZS5lbWl0KGdhbWUuZ2FtZUV2ZW50LmxvYWRfc2NlbmUsIGdhbWUuZ2FtZVNjZW5lLm1hcEVkaXQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGdhbWUuZW1pdChnYW1lLmdhbWVFdmVudC5sb2FkX3NjZW5lLCBnYW1lLmdhbWVTY2VuZS5yb2xlRWRpdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy9nYW1lLnNvdW5kTWFuYWdlci5tdXNpY011dGUgPSB0cnVlO1xyXG4gICAgICAgIGdhbWUuc291bmRNYW5hZ2VyLnBsYXlNdXNpYyhnYW1lLmdhbWVTb3VuZC5vcCwgdHJ1ZSk7XHJcblxyXG4gICAgfSxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==