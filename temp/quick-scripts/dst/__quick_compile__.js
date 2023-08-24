
(function () {
var scripts = [{"deps":{"./assets/Script/bullet/bullet10":26,"./assets/Script/bullet/bullet6":29,"./assets/Script/bullet/bullet7":24,"./assets/Script/blow/bomb1":22,"./assets/Script/bullet/bullet2":32,"./assets/Script/bullet/bullet5":27,"./assets/Script/config/gameConfig":36,"./assets/Script/bullet/bullet1":23,"./assets/Script/blow/bomb2":5,"./assets/Script/bullet/hurt":30,"./assets/Script/config/zhujueConfig":25,"./assets/Script/bullet/bullet9":31,"./assets/Script/control/control":8,"./assets/Script/bullet/bullet4":21,"./assets/Script/config/guan1_1":35,"./assets/Script/bullet/bullet8":28,"./assets/Script/config/gameSound":34,"./assets/Script/control/touchStage":41,"./assets/Script/control/top":47,"./assets/Script/config/binConfig":39,"./assets/Script/control/joystick":33,"./assets/Script/config/gamePopup":7,"./assets/Script/core/mapSetting":45,"./assets/Script/control/joystickBtn":37,"./assets/Script/control/keyboard":38,"./assets/Script/core/rotationNode":50,"./assets/Script/core/persistNode":44,"./assets/Script/control/buttonControl":51,"./assets/Script/core/follow":57,"./assets/Script/core/min/Stately":4,"./assets/Script/core/uiNode":49,"./assets/Script/core/utils":52,"./assets/Script/core/roleRotation":48,"./assets/Script/core/widget_child":53,"./assets/Script/core/persistPrefab":43,"./assets/Script/core/popupLayer":46,"./assets/Script/enemy/enemyMelee":56,"./assets/Script/core/hua":40,"./assets/Script/enemy/enemySettng":55,"./assets/Script/factory/taPaoguan":62,"./assets/Script/enemy/enemyControl":65,"./assets/Script/enemy/enemyMove":54,"./assets/Script/factory/taHp":69,"./assets/Script/enemy/enemySend":64,"./assets/Script/factory/taSprite":59,"./assets/Script/enemy/enemyFind":9,"./assets/Script/enemy/enemySpine":60,"./assets/Script/game/gameAction":70,"./assets/Script/factory/enemyFactory":10,"./assets/Script/fire/fire":11,"./assets/Script/game/localStorage":66,"./assets/Script/game/gameUtils":63,"./assets/Script/guangka/guanItem":76,"./assets/Script/game/soundManager":68,"./assets/Script/game/gameEvent":61,"./assets/Script/layer/shootBullet":14,"./assets/Script/game/gameControl":12,"./assets/Script/guangka/guankazhang":13,"./assets/Script/layer/shootFire":75,"./assets/Script/game/gameScene":74,"./assets/Script/pool/PoolComponent":15,"./assets/Script/layer/roleLayer":71,"./assets/Script/layer/shootBomb":67,"./assets/Script/pool/hpComponent":73,"./assets/Script/pool/NodePool":77,"./assets/Script/scene/gameMain":17,"./assets/Script/scene/hall":78,"./assets/Script/scene/mapEdit":79,"./assets/Script/scene/gameOver":81,"./assets/Script/test/addMap":16,"./assets/Script/test/heros":82,"./assets/Script/scene/roleEdit":83,"./assets/Script/test/itemTest":86,"./assets/Script/scene/gameGuanka":84,"./assets/Script/test/jdTest":88,"./assets/Script/test/drag":85,"./assets/Script/test/move":92,"./assets/Script/ui/gameOverWinPanel ":18,"./assets/Script/test/draw":90,"./assets/Script/you/youFind":96,"./assets/Script/test/HeroHit":91,"./assets/Script/you/youSend":94,"./assets/Script/you/youMove":93,"./assets/Script/ui/gameOverLossPanel":89,"./assets/Script/zhujie/roleFind":99,"./assets/Script/zhujie/roleHp":97,"./assets/Script/ui/gamePausePanel":87,"./assets/Script/you/youHp":20,"./assets/Script/zhujie/roleSprite":104,"./assets/Script/you/youSetting":95,"./assets/Script/zhujie/roleMove":100,"./assets/Script/you/youSpine":101,"./assets/Script/you/youControl":98,"./assets/Script/zhujie/spineAction":105,"./assets/Script/zhujie/spine":102,"./assets/migration/use_reversed_rotateBy":1,"./assets/Script/blow/bomb3":103,"./assets/Script/zhujie/roleControl":106,"./assets/Script/bullet/bullet3":6,"./assets/Script/enemy/enemyHp":58,"./assets/Script/pool/persisPool":72,"./assets/Script/zhujie/roleSpine":3,"./assets/Script/core/min/jm":2,"./assets/Script/core/uuids":19,"./assets/Script/core/loading":42,"./assets/Script/core/min/async":107,"./assets/Script/core/min/lodash":109,"./assets/Script/scene/login":80},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_reversed_rotateBy.js"},{"deps":{"lodash":109},"path":"preview-scripts/assets/Script/core/min/jm.js"},{"deps":{"zhujueConfig":25},"path":"preview-scripts/assets/Script/zhujie/roleSpine.js"},{"deps":{},"path":"preview-scripts/assets/Script/core/min/Stately.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/blow/bomb2.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/bullet/bullet3.js"},{"deps":{},"path":"preview-scripts/assets/Script/config/gamePopup.js"},{"deps":{},"path":"preview-scripts/assets/Script/control/control.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/enemy/enemyFind.js"},{"deps":{},"path":"preview-scripts/assets/Script/factory/enemyFactory.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/fire/fire.js"},{"deps":{},"path":"preview-scripts/assets/Script/game/gameControl.js"},{"deps":{},"path":"preview-scripts/assets/Script/guangka/guankazhang.js"},{"deps":{},"path":"preview-scripts/assets/Script/layer/shootBullet.js"},{"deps":{},"path":"preview-scripts/assets/Script/pool/PoolComponent.js"},{"deps":{},"path":"preview-scripts/assets/Script/test/addMap.js"},{"deps":{},"path":"preview-scripts/assets/Script/scene/gameMain.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/ui/gameOverWinPanel .js"},{"deps":{},"path":"preview-scripts/assets/Script/core/uuids.js"},{"deps":{},"path":"preview-scripts/assets/Script/you/youHp.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/bullet/bullet4.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/blow/bomb1.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/bullet/bullet1.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/bullet/bullet7.js"},{"deps":{},"path":"preview-scripts/assets/Script/config/zhujueConfig.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/bullet/bullet10.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/bullet/bullet5.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/bullet/bullet8.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/bullet/bullet6.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/bullet/hurt.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/bullet/bullet9.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/bullet/bullet2.js"},{"deps":{},"path":"preview-scripts/assets/Script/control/joystick.js"},{"deps":{},"path":"preview-scripts/assets/Script/config/gameSound.js"},{"deps":{},"path":"preview-scripts/assets/Script/config/guan1_1.js"},{"deps":{},"path":"preview-scripts/assets/Script/config/gameConfig.js"},{"deps":{},"path":"preview-scripts/assets/Script/control/joystickBtn.js"},{"deps":{},"path":"preview-scripts/assets/Script/control/keyboard.js"},{"deps":{},"path":"preview-scripts/assets/Script/config/binConfig.js"},{"deps":{},"path":"preview-scripts/assets/Script/core/hua.js"},{"deps":{},"path":"preview-scripts/assets/Script/control/touchStage.js"},{"deps":{"uuids":19},"path":"preview-scripts/assets/Script/core/loading.js"},{"deps":{},"path":"preview-scripts/assets/Script/core/persistPrefab.js"},{"deps":{},"path":"preview-scripts/assets/Script/core/persistNode.js"},{"deps":{},"path":"preview-scripts/assets/Script/core/mapSetting.js"},{"deps":{},"path":"preview-scripts/assets/Script/core/popupLayer.js"},{"deps":{},"path":"preview-scripts/assets/Script/control/top.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/core/roleRotation.js"},{"deps":{},"path":"preview-scripts/assets/Script/core/uiNode.js"},{"deps":{},"path":"preview-scripts/assets/Script/core/rotationNode.js"},{"deps":{},"path":"preview-scripts/assets/Script/control/buttonControl.js"},{"deps":{},"path":"preview-scripts/assets/Script/core/utils.js"},{"deps":{},"path":"preview-scripts/assets/Script/core/widget_child.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/enemy/enemyMove.js"},{"deps":{},"path":"preview-scripts/assets/Script/enemy/enemySettng.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/enemy/enemyMelee.js"},{"deps":{},"path":"preview-scripts/assets/Script/core/follow.js"},{"deps":{"hpComponent":73},"path":"preview-scripts/assets/Script/enemy/enemyHp.js"},{"deps":{},"path":"preview-scripts/assets/Script/factory/taSprite.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/enemy/enemySpine.js"},{"deps":{},"path":"preview-scripts/assets/Script/game/gameEvent.js"},{"deps":{},"path":"preview-scripts/assets/Script/factory/taPaoguan.js"},{"deps":{},"path":"preview-scripts/assets/Script/game/gameUtils.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/enemy/enemySend.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/enemy/enemyControl.js"},{"deps":{},"path":"preview-scripts/assets/Script/game/localStorage.js"},{"deps":{},"path":"preview-scripts/assets/Script/layer/shootBomb.js"},{"deps":{},"path":"preview-scripts/assets/Script/game/soundManager.js"},{"deps":{"hpComponent":73},"path":"preview-scripts/assets/Script/factory/taHp.js"},{"deps":{},"path":"preview-scripts/assets/Script/game/gameAction.js"},{"deps":{},"path":"preview-scripts/assets/Script/layer/roleLayer.js"},{"deps":{"NodePool":77},"path":"preview-scripts/assets/Script/pool/persisPool.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/pool/hpComponent.js"},{"deps":{},"path":"preview-scripts/assets/Script/game/gameScene.js"},{"deps":{},"path":"preview-scripts/assets/Script/layer/shootFire.js"},{"deps":{},"path":"preview-scripts/assets/Script/guangka/guanItem.js"},{"deps":{},"path":"preview-scripts/assets/Script/pool/NodePool.js"},{"deps":{},"path":"preview-scripts/assets/Script/scene/hall.js"},{"deps":{},"path":"preview-scripts/assets/Script/scene/mapEdit.js"},{"deps":{"utils":52,"gameSound":34,"gamePopup":7,"zhujueConfig":25,"gameAction":70,"gameControl":12,"gameEvent":61,"gameScene":74,"gameUtils":63,"localStorage":66,"soundManager":68,"jm":2,"async":107,"lodash":109},"path":"preview-scripts/assets/Script/scene/login.js"},{"deps":{},"path":"preview-scripts/assets/Script/scene/gameOver.js"},{"deps":{},"path":"preview-scripts/assets/Script/test/heros.js"},{"deps":{},"path":"preview-scripts/assets/Script/scene/roleEdit.js"},{"deps":{},"path":"preview-scripts/assets/Script/scene/gameGuanka.js"},{"deps":{},"path":"preview-scripts/assets/Script/test/drag.js"},{"deps":{},"path":"preview-scripts/assets/Script/test/itemTest.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/ui/gamePausePanel.js"},{"deps":{},"path":"preview-scripts/assets/Script/test/jdTest.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/ui/gameOverLossPanel.js"},{"deps":{},"path":"preview-scripts/assets/Script/test/draw.js"},{"deps":{},"path":"preview-scripts/assets/Script/test/HeroHit.js"},{"deps":{},"path":"preview-scripts/assets/Script/test/move.js"},{"deps":{},"path":"preview-scripts/assets/Script/you/youMove.js"},{"deps":{},"path":"preview-scripts/assets/Script/you/youSend.js"},{"deps":{},"path":"preview-scripts/assets/Script/you/youSetting.js"},{"deps":{},"path":"preview-scripts/assets/Script/you/youFind.js"},{"deps":{"hpComponent":73,"zhujueConfig":25},"path":"preview-scripts/assets/Script/zhujie/roleHp.js"},{"deps":{},"path":"preview-scripts/assets/Script/you/youControl.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/zhujie/roleFind.js"},{"deps":{},"path":"preview-scripts/assets/Script/zhujie/roleMove.js"},{"deps":{},"path":"preview-scripts/assets/Script/you/youSpine.js"},{"deps":{},"path":"preview-scripts/assets/Script/zhujie/spine.js"},{"deps":{"PoolComponent":15},"path":"preview-scripts/assets/Script/blow/bomb3.js"},{"deps":{},"path":"preview-scripts/assets/Script/zhujie/roleSprite.js"},{"deps":{"zhujueConfig":25},"path":"preview-scripts/assets/Script/zhujie/spineAction.js"},{"deps":{},"path":"preview-scripts/assets/Script/zhujie/roleControl.js"},{"deps":{"C:/ProgramData/cocos/editors/Creator/2.4.4/resources/app.asar/node_modules/process/browser.js":108},"path":"preview-scripts/assets/Script/core/min/async.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{},"path":"preview-scripts/assets/Script/core/min/lodash.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    