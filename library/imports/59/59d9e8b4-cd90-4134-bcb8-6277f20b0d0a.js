"use strict";
cc._RF.push(module, '59d9ei0zZBBNLy4YnfyCw0K', 'Stately');
// Script/core/min/Stately.js

"use strict";

/*
 * Stately.js: A JavaScript based finite-state machine (FSM) engine.
 *
 * Copyright (c) 2012 Florian Schäfer (florian.schaefer@gmail.com)
 * Released under MIT license.
 *
 * Version: 2.0.0
 *
 */
(function (root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    root.Stately = factory();
  }
})(void 0, function () {
  var toString = Object.prototype.toString,
      InvalidStateError = function () {
    function InvalidStateError(message) {
      this.name = 'InvalidStateError';
      this.message = message;
    }

    InvalidStateError.prototype = new Error();
    InvalidStateError.prototype.constructor = InvalidStateError;
    return InvalidStateError;
  }();

  function Stately(statesObject, initialStateName) {
    if (typeof statesObject === 'function') {
      statesObject = statesObject();
    }

    if (toString.call(statesObject) !== '[object Object]') {
      throw new InvalidStateError('Stately.js: Invalid states object: `' + statesObject + '`.');
    }

    function resolveSpecialEventFn(stateName, fnName) {
      for (var property in stateStore[stateName]) {
        if (stateStore[stateName].hasOwnProperty(property)) {
          if (property.toLowerCase() === fnName.toLowerCase()) {
            return stateStore[stateName][property];
          }
        }
      }
    }

    var currentState,
        stateStore = {
      getMachineState: function getMachineState() {
        return currentState.name;
      },
      setMachineState: function setMachineState(nextState
      /*, eventName */
      ) {
        var eventName = arguments[1],
            onEnterState,
            onLeaveState,
            lastState = currentState;

        if (typeof nextState === 'string') {
          nextState = stateStore[nextState];
        }

        if (!nextState || !nextState.name || !stateStore[nextState.name]) {
          throw new InvalidStateError('Stately.js: Transitioned into invalid state: `' + setMachineState.caller + '`.');
        }

        currentState = nextState;
        onLeaveState = resolveSpecialEventFn(lastState.name, "onLeave");

        if (onLeaveState && typeof onLeaveState === 'function') {
          onLeaveState.call(stateStore, eventName, lastState.name, currentState.name);
        }

        onEnterState = resolveSpecialEventFn(currentState.name, "onEnter");

        if (onEnterState && typeof onEnterState === 'function') {
          onEnterState.call(stateStore, eventName, lastState.name, nextState.name);
        }

        return this;
      },
      getMachineEvents: function getMachineEvents() {
        var events = [];

        for (var property in currentState) {
          if (currentState.hasOwnProperty(property)) {
            if (typeof currentState[property] === 'function') {
              events.push(property);
            }
          }
        }

        return events;
      }
    },
        stateMachine = {
      getMachineState: stateStore.getMachineState,
      getMachineEvents: stateStore.getMachineEvents
    },
        transition = function transition(stateName, eventName, nextEvent) {
      return function event() {
        var onBeforeEvent,
            onAfterEvent,
            nextState,
            eventValue = stateMachine;

        if (stateStore[stateName] !== currentState) {
          if (nextEvent) {
            eventValue = nextEvent.apply(stateStore, arguments);
          }

          return eventValue;
        }

        onBeforeEvent = resolveSpecialEventFn(currentState.name, "onBefore" + eventName);

        if (onBeforeEvent && typeof onBeforeEvent === 'function') {
          onBeforeEvent.call(stateStore, eventName, currentState.name, currentState.name);
        }

        eventValue = stateStore[stateName][eventName].apply(stateStore, arguments);

        if (typeof eventValue === 'undefined') {
          nextState = currentState;
          eventValue = stateMachine;
        } else if (typeof eventValue === 'string') {
          nextState = stateStore[eventValue];
          eventValue = stateMachine;
        } else if (toString.call(eventValue) === '[object Object]') {
          nextState = eventValue === stateStore ? currentState : eventValue;
          eventValue = stateMachine;
        } else if (toString.call(eventValue) === '[object Array]' && eventValue.length >= 1) {
          if (typeof eventValue[0] === 'string') {
            nextState = stateStore[eventValue[0]];
          } else {
            nextState = eventValue[0];
          }

          eventValue = eventValue[1];
        }

        onAfterEvent = resolveSpecialEventFn(currentState.name, "onAfter" + eventName);

        if (onAfterEvent && typeof onAfterEvent === 'function') {
          onAfterEvent.call(stateStore, eventName, currentState.name, nextState.name);
        }

        stateStore.setMachineState(nextState, eventName);
        return eventValue;
      };
    };

    for (var stateName in statesObject) {
      if (statesObject.hasOwnProperty(stateName)) {
        stateStore[stateName] = statesObject[stateName];

        for (var eventName in stateStore[stateName]) {
          if (stateStore[stateName].hasOwnProperty(eventName)) {
            if (typeof stateStore[stateName][eventName] === 'string') {
              stateStore[stateName][eventName] = function (stateName) {
                return function event() {
                  return this[stateName];
                };
              }(stateStore[stateName][eventName]);
            }

            if (typeof stateStore[stateName][eventName] === 'function' && !/^onEnter$/i.test(eventName) && !/^onLeave$/i.test(eventName) && !/^onBefore/i.test(eventName) && !/^onAfter/i.test(eventName)) {
              stateMachine[eventName] = transition(stateName, eventName, stateMachine[eventName]);
            }
          }
        }

        stateStore[stateName].name = stateName;

        if (!currentState) {
          currentState = stateStore[stateName];
        }
      }
    }

    if (typeof stateStore[initialStateName] !== 'undefined') {
      currentState = stateStore[initialStateName];
    }

    if (!currentState) {
      throw new InvalidStateError('Stately.js: Invalid initial state.');
    }

    return stateMachine;
  }

  Stately.machine = function machine(statesObject, initialStateName) {
    return new Stately(statesObject, initialStateName);
  };

  Stately.InvalidStateError = InvalidStateError;
  return Stately;
});

cc._RF.pop();