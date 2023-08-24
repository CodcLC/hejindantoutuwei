
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/game/soundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fee26zaSPFIiIpnn8GNirz9', 'soundManager');
// Script/game/soundManager.js

"use strict";

module.exports = {
  _musicUrl: null,
  _musicMute: false,
  _musicVolume: 1,
  _effectList: [],
  _effectMute: false,
  _effectVolume: 1,
  _curMusicId: null,
  init: function init() {
    var musicMute = game.localStorage.getItem("musicMute");
    if (musicMute == null) musicMute = false;
    this.musicMute = musicMute;
    var effectMute = game.localStorage.getItem("effectMute");
    if (effectMute == null) effectMute = false;
    this.effectMute = effectMute;
    var musicVolume = game.localStorage.getItem("musicVolume");
    if (musicVolume == null) musicVolume = 1;
    this.musicVolume = musicVolume;
    var effectVolume = game.localStorage.getItem("effectVolume");
    if (effectVolume == null) effectVolume = 1;
    this.effectVolume = effectVolume;
  },

  /****
   * 音乐是否静音
   * ****/
  get musicMute() {
    return this._musicMute;
  },

  set musicMute(value) {
    if (this._musicMute != value) {
      game.localStorage.setItem("musicMute", value);
      this._musicMute = value;
      if (!value) this.playMusic(this._musicUrl, true, true);else cc.audioEngine.stopMusic();
    }
  },

  /**背景音乐音量 */
  get musicVolume() {
    return this._musicVolume;
  },

  set musicVolume(value) {
    if (this._musicVolume != value) {
      game.localStorage.setItem("musicVolume", value);
      this._musicVolume = value;
      cc.audioEngine.setMusicVolume(value);
    }
  },

  /**音效是否静音 */
  get effectMute() {
    return this._effectMute;
  },

  set effectMute(value) {
    if (this._effectMute != value) {
      game.localStorage.setItem("effectMute", value);
      this._effectMute = value;
      if (value) cc.audioEngine.stopAllEffects();
    }
  },

  /**音效音量 */
  get effectVolume() {
    return this._effectVolume;
  },

  set effectVolume(value) {
    if (this._effectVolume != value) {
      game.localStorage.setItem("effectVolume", value);
      this._effectVolume = value;
      cc.audioEngine.setEffectsVolume(value);
    }
  },

  /**
   * 播放背景音乐
   */
  playMusic: function playMusic(url, loop, afresh) {
    if (!afresh && this._musicUrl == url) return;
    if (this._musicMute) return;
    this._musicUrl = url;
    cc.resources.load(url, cc.AudioClip, function (err, clip) {
      if (this._curMusicId) cc.audioEngine.stop(this._curMusicId);
      this._curMusicId = cc.audioEngine.playMusic(clip, loop);
    }.bind(this));
  },

  /**暂停播放背景音乐 */
  pauseMusic: function pauseMusic() {
    cc.audioEngine.pauseMusic();
  },

  /**继续播放背景音乐 */
  resumeMusic: function resumeMusic() {
    cc.audioEngine.resumeMusic();
  },

  /**停止背景音乐 */
  stopMusic: function stopMusic() {
    cc.audioEngine.stopMusic();
  },

  /**
   * 播放音效
   * @param audioName 音乐文件名称，不需要填文件后缀
   * @param loop 是否循环播放
   * @param folder 资源文件夹名称，必须放在resources文件夹下面
   */
  playEffect: function playEffect(url, loop) {
    loop = loop || false;
    this.checkEffect();
    if (this._effectMute) return;
    cc.loader.loadRes(url, cc.AudioClip, function (err, clip) {
      var id = cc.audioEngine.playEffect(clip, loop);
      cc.audioEngine.setVolume(id, this.effectVolume);

      this._effectList.push({
        "url": url,
        "id": id
      });
    }.bind(this));
  },
  checkEffect: function checkEffect() {
    for (var i = this._effectList.length - 1; i >= 0; i--) {
      var obj = this._effectList[i];
      if (cc.audioEngine.getState(obj["id"]) == -1) this._effectList.splice(i, 1);
    }
  },

  /**
   * 停止某个音效
   * @param audioName
   * @param folder
   */
  stopEffect: function stopEffect(url) {
    for (var i = this._effectList.length - 1; i >= 0; i--) {
      var obj = this._effectList[i];

      if (cc.audioEngine.getState(obj["id"]) == -1) {
        this._effectList.splice(i, 1);

        continue;
      }

      if (obj["url"] == url) {
        cc.audioEngine.stopEffect(obj["id"]);

        this._effectList.splice(i, 1);
      }
    }
  },

  /**停止所有音效 */
  stopAllEffect: function stopAllEffect() {
    cc.audioEngine.stopAllEffects();
    this._effectList.length = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxnYW1lXFxzb3VuZE1hbmFnZXIuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIl9tdXNpY1VybCIsIl9tdXNpY011dGUiLCJfbXVzaWNWb2x1bWUiLCJfZWZmZWN0TGlzdCIsIl9lZmZlY3RNdXRlIiwiX2VmZmVjdFZvbHVtZSIsIl9jdXJNdXNpY0lkIiwiaW5pdCIsIm11c2ljTXV0ZSIsImdhbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZWZmZWN0TXV0ZSIsIm11c2ljVm9sdW1lIiwiZWZmZWN0Vm9sdW1lIiwidmFsdWUiLCJzZXRJdGVtIiwicGxheU11c2ljIiwiY2MiLCJhdWRpb0VuZ2luZSIsInN0b3BNdXNpYyIsInNldE11c2ljVm9sdW1lIiwic3RvcEFsbEVmZmVjdHMiLCJzZXRFZmZlY3RzVm9sdW1lIiwidXJsIiwibG9vcCIsImFmcmVzaCIsInJlc291cmNlcyIsImxvYWQiLCJBdWRpb0NsaXAiLCJlcnIiLCJjbGlwIiwic3RvcCIsImJpbmQiLCJwYXVzZU11c2ljIiwicmVzdW1lTXVzaWMiLCJwbGF5RWZmZWN0IiwiY2hlY2tFZmZlY3QiLCJsb2FkZXIiLCJsb2FkUmVzIiwiaWQiLCJzZXRWb2x1bWUiLCJwdXNoIiwiaSIsImxlbmd0aCIsIm9iaiIsImdldFN0YXRlIiwic3BsaWNlIiwic3RvcEVmZmVjdCIsInN0b3BBbGxFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiQyxFQUFBQSxTQUFTLEVBQUUsSUFERTtBQUViQyxFQUFBQSxVQUFVLEVBQUUsS0FGQztBQUdiQyxFQUFBQSxZQUFZLEVBQUUsQ0FIRDtBQUliQyxFQUFBQSxXQUFXLEVBQUUsRUFKQTtBQUtiQyxFQUFBQSxXQUFXLEVBQUUsS0FMQTtBQU1iQyxFQUFBQSxhQUFhLEVBQUUsQ0FORjtBQU9iQyxFQUFBQSxXQUFXLEVBQUUsSUFQQTtBQVFiQyxFQUFB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QUNBO0FBQ0E7QUFDSUssRUFBQUEsVUE3SGEsc0JBNkhGeEIsR0E3SEUsRUE2SEc7QUFDWixTQUFLLElBQUltQixDQUFDLEdBQUcsS0FBS3hDLFdBQUwsQ0FBaUJ5QyxNQUFqQixHQUEwQixDQUF2QyxFQUEwQ0QsQ0FBQyxJQUFJLENBQS9DLEVBQWtEQSxDQUFDLEVBQW5ELEVBQXVEO0FBQ25ELFVBQUlFLEdBQUcsR0FBRyxLQUFLMUMsV0FBTCxDQUFpQndDLENBQWpCLENBQVY7O0FBQ0EsVUFBSXpCLEVBQUUsQ0FBQ0MsV0FBSCxDQUFlMkIsUUFBZixDQUF3QkQsR0FBRyxDQUFDLElBQUQsQ0FBM0IsS0FBc0MsQ0FBQyxDQUEzQyxFQUE4QztBQUMxQyxhQUFLMUMsV0FBTCxDQUFpQjRDLE1BQWpCLENBQXdCSixDQUF4QixFQUEyQixDQUEzQjs7QUFDQTtBQUNIOztBQUNELFVBQUlFLEdBQUcsQ0FBQyxLQUFELENBQUgsSUFBY3JCLEdBQWxCLEVBQXVCO0FBQ25CTixRQUFBQSxFQUFFLENBQUNDLFdBQUgsQ0FBZTZCLFVBQWYsQ0FBMEJILEdBQUcsQ0FBQyxJQUFELENBQTdCOztBQUNBLGFBQUsxQyxXQUFMLENBQWlCNEMsTUFBakIsQ0FBd0JKLENBQXhCLEVBQTJCLENBQTNCO0FBQ0g7QUFDSjtBQUNKLEdBeklZOztBQTBJYjtBQUNBTSxFQUFBQSxhQTNJYSwyQkEySUc7QUFDWi9CLElBQUFBLEVBQUUsQ0FBQ0MsV0FBSCxDQUFlRyxjQUFmO0FBQ0EsU0FBS25CLFdBQUwsQ0FBaUJ5QyxNQUFqQixHQUEwQixDQUExQjtBQUNIO0FBOUlZLENBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIF9tdXNpY1VybDogbnVsbCxcclxuICAgIF9tdXNpY011dGU6IGZhbHNlLFxyXG4gICAgX211c2ljVm9sdW1lOiAxLFxyXG4gICAgX2VmZmVjdExpc3Q6IFtdLFxyXG4gICAgX2VmZmVjdE11dGU6IGZhbHNlLFxyXG4gICAgX2VmZmVjdFZvbHVtZTogMSxcclxuICAgIF9jdXJNdXNpY0lkOiBudWxsLFxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsZXQgbXVzaWNNdXRlID0gZ2FtZS5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm11c2ljTXV0ZVwiKTtcclxuICAgICAgICBpZiAobXVzaWNNdXRlID09IG51bGwpIG11c2ljTXV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubXVzaWNNdXRlID0gbXVzaWNNdXRlO1xyXG4gICAgICAgIGxldCBlZmZlY3RNdXRlID0gZ2FtZS5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImVmZmVjdE11dGVcIik7XHJcbiAgICAgICAgaWYgKGVmZmVjdE11dGUgPT0gbnVsbCkgZWZmZWN0TXV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0TXV0ZSA9IGVmZmVjdE11dGU7XHJcbiAgICAgICAgbGV0IG11c2ljVm9sdW1lID0gZ2FtZS5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm11c2ljVm9sdW1lXCIpO1xyXG4gICAgICAgIGlmIChtdXNpY1ZvbHVtZSA9PSBudWxsKSBtdXNpY1ZvbHVtZSA9IDE7XHJcbiAgICAgICAgdGhpcy5tdXNpY1ZvbHVtZSA9IG11c2ljVm9sdW1lO1xyXG4gICAgICAgIGxldCBlZmZlY3RWb2x1bWUgPSBnYW1lLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZWZmZWN0Vm9sdW1lXCIpO1xyXG4gICAgICAgIGlmIChlZmZlY3RWb2x1bWUgPT0gbnVsbCkgZWZmZWN0Vm9sdW1lID0gMTtcclxuICAgICAgICB0aGlzLmVmZmVjdFZvbHVtZSA9IGVmZmVjdFZvbHVtZTtcclxuICAgIH0sXHJcbiAgICAvKioqKlxyXG4gICAgICog6Z+z5LmQ5piv5ZCm6Z2Z6Z+zXHJcbiAgICAgKiAqKioqL1xyXG4gICAgZ2V0IG11c2ljTXV0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbXVzaWNNdXRlO1xyXG4gICAgfSxcclxuICAgIHNldCBtdXNpY011dGUodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5fbXVzaWNNdXRlICE9IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGdhbWUubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtdXNpY011dGVcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9tdXNpY011dGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKCF2YWx1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheU11c2ljKHRoaXMuX211c2ljVXJsLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qKuiDjOaZr+mfs+S5kOmfs+mHjyAqL1xyXG4gICAgZ2V0IG11c2ljVm9sdW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tdXNpY1ZvbHVtZTtcclxuICAgIH0sXHJcbiAgICBzZXQgbXVzaWNWb2x1bWUodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5fbXVzaWNWb2x1bWUgIT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgZ2FtZS5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11c2ljVm9sdW1lXCIsIHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5fbXVzaWNWb2x1bWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKirpn7PmlYjmmK/lkKbpnZnpn7MgKi9cclxuICAgIGdldCBlZmZlY3RNdXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lZmZlY3RNdXRlO1xyXG4gICAgfSxcclxuICAgIHNldCBlZmZlY3RNdXRlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2VmZmVjdE11dGUgIT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgZ2FtZS5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImVmZmVjdE11dGVcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9lZmZlY3RNdXRlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSlcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qKumfs+aViOmfs+mHjyAqL1xyXG4gICAgZ2V0IGVmZmVjdFZvbHVtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWZmZWN0Vm9sdW1lO1xyXG4gICAgfSxcclxuICAgIHNldCBlZmZlY3RWb2x1bWUodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5fZWZmZWN0Vm9sdW1lICE9IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGdhbWUubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJlZmZlY3RWb2x1bWVcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9lZmZlY3RWb2x1bWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+6IOM5pmv6Z+z5LmQXHJcbiAgICAgKi9cclxuICAgIHBsYXlNdXNpYyh1cmwsIGxvb3AsIGFmcmVzaCkge1xyXG4gICAgICAgIGlmICghYWZyZXNoICYmIHRoaXMuX211c2ljVXJsID09IHVybCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLl9tdXNpY011dGUpIHJldHVybjtcclxuICAgICAgICB0aGlzLl9tdXNpY1VybCA9IHVybDtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1ck11c2ljSWQpIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5fY3VyTXVzaWNJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1ck11c2ljSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCwgbG9vcCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH0sXHJcbiAgICAvKirmmoLlgZzmkq3mlL7og4zmma/pn7PkuZAgKi9cclxuICAgIHBhdXNlTXVzaWMoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgfSxcclxuICAgIC8qKue7p+e7reaSreaUvuiDjOaZr+mfs+S5kCAqL1xyXG4gICAgcmVzdW1lTXVzaWMoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lTXVzaWMoKTtcclxuICAgIH0sXHJcbiAgICAvKirlgZzmraLog4zmma/pn7PkuZAgKi9cclxuICAgIHN0b3BNdXNpYygpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvumfs+aViFxyXG4gICAgICogQHBhcmFtIGF1ZGlvTmFtZSDpn7PkuZDmlofku7blkI3np7DvvIzkuI3pnIDopoHloavmlofku7blkI7nvIBcclxuICAgICAqIEBwYXJhbSBsb29wIOaYr+WQpuW+queOr+aSreaUvlxyXG4gICAgICogQHBhcmFtIGZvbGRlciDotYTmupDmlofku7blpLnlkI3np7DvvIzlv4XpobvmlL7lnKhyZXNvdXJjZXPmlofku7blpLnkuIvpnaJcclxuICAgICAqL1xyXG4gICAgcGxheUVmZmVjdCh1cmwsIGxvb3ApIHtcclxuICAgICAgICBsb29wID0gbG9vcCB8fCBmYWxzZTtcclxuICAgICAgICB0aGlzLmNoZWNrRWZmZWN0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2VmZmVjdE11dGUpIHJldHVybjtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGxvb3ApO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUoaWQsIHRoaXMuZWZmZWN0Vm9sdW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fZWZmZWN0TGlzdC5wdXNoKHtcInVybFwiOiB1cmwsIFwiaWRcIjogaWR9KTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfSxcclxuICAgIGNoZWNrRWZmZWN0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLl9lZmZlY3RMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGxldCBvYmogPSB0aGlzLl9lZmZlY3RMaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAoY2MuYXVkaW9FbmdpbmUuZ2V0U3RhdGUob2JqW1wiaWRcIl0pID09IC0xKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWZmZWN0TGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5YGc5q2i5p+Q5Liq6Z+z5pWIXHJcbiAgICAgKiBAcGFyYW0gYXVkaW9OYW1lXHJcbiAgICAgKiBAcGFyYW0gZm9sZGVyXHJcbiAgICAgKi9cclxuICAgIHN0b3BFZmZlY3QodXJsKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX2VmZmVjdExpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHRoaXMuX2VmZmVjdExpc3RbaV07XHJcbiAgICAgICAgICAgIGlmIChjYy5hdWRpb0VuZ2luZS5nZXRTdGF0ZShvYmpbXCJpZFwiXSkgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VmZmVjdExpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9ialtcInVybFwiXSA9PSB1cmwpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3Qob2JqW1wiaWRcIl0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWZmZWN0TGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyoq5YGc5q2i5omA5pyJ6Z+z5pWIICovXHJcbiAgICBzdG9wQWxsRWZmZWN0KCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgdGhpcy5fZWZmZWN0TGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59OyJdfQ==