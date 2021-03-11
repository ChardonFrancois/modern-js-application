// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/modules/openCard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayCharactersCards = displayCharactersCards;
exports.openCharacterCard = openCharacterCard;
exports.newCharacterId = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var characterId = [];
var cardName = document.getElementsByClassName("name-for-modal");
var shortDescription = document.getElementsByClassName("short-for-modal");
var longDescription = document.getElementsByClassName("long-for-modal");
var cardImage = document.getElementsByClassName("image-for-modal");

function displayCharactersCards() {
  return _displayCharactersCards.apply(this, arguments);
}

function _displayCharactersCards() {
  _displayCharactersCards = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, character, cardTemplate, target;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("https://character-database.becode.xyz/characters");

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            character = _context.sent;
            cardTemplate = document.querySelector("#template");
            target = document.querySelector("#target");
            character.forEach(function (_ref) {
              var name = _ref.name,
                  shortDescription = _ref.shortDescription,
                  image = _ref.image,
                  description = _ref.description,
                  id = _ref.id;
              var cardClone = cardTemplate.cloneNode(true).content;
              cardClone.querySelector("#name").innerHTML = name;
              cardClone.querySelector("#short-description").innerHTML = shortDescription;
              cardClone.querySelector("#image").src = "data:image/*;base64,".concat(image);
              cardClone.querySelector("#long-description").innerHTML = description;
              target.appendChild(cardClone);
              characterId.push(id);
            });
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _displayCharactersCards.apply(this, arguments);
}

function openCharacterCard() {
  var longDescriptionButton = document.getElementsByClassName("long-description-button");

  var _loop = function _loop(i) {
    longDescriptionButton[i].addEventListener("click", function () {
      var modalName = document.getElementById("name-modal");
      var modalLongDescription = document.getElementById("long-modal-description");
      var modalShortDescription = document.getElementById("short-modal-description");
      var modalImage = document.getElementById("modal-image");
      modalName.textContent = cardName[i].textContent;
      modalShortDescription.textContent = shortDescription[i].textContent;
      modalLongDescription.textContent = longDescription[i].textContent;
      modalImage.src = cardImage[i].src;
    });
  };

  for (var i = 0; i < longDescriptionButton.length; i++) {
    _loop(i);
  }
}

var newCharacterId = characterId;
exports.newCharacterId = newCharacterId;
},{}],"assets/modules/create.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createImage = createImage;
exports.createCharacter = createCharacter;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var image = "";

function createImage() {
  return _createImage.apply(this, arguments);
}

function _createImage() {
  _createImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            document.querySelector("#input-image").addEventListener("change", function (element) {
              var file = element.target.files[0];
              var reader = new FileReader();

              reader.onloadend = function () {
                image = reader.result.replace("data:", "").replace(/^.+,/, "");
              };

              reader.readAsDataURL(file);
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createImage.apply(this, arguments);
}

function createCharacter() {
  return _createCharacter.apply(this, arguments);
}

function _createCharacter() {
  _createCharacter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            document.getElementById("create").addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      try {
                        document.getElementById("submit").addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var inputs, values, _values, name, shortDescription, description, response, createdCharacter;

                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  inputs = Array.from(document.getElementsByClassName("inputs"));
                                  values = inputs.map(function (_ref3) {
                                    var value = _ref3.value;
                                    return value.trim();
                                  });

                                  if (!values.some(function (value) {
                                    return value === "";
                                  })) {
                                    _context2.next = 6;
                                    break;
                                  }

                                  alert("there's an empty input!"); // return;

                                  _context2.next = 15;
                                  break;

                                case 6:
                                  _values = _slicedToArray(values, 3), name = _values[0], shortDescription = _values[1], description = _values[2];
                                  _context2.next = 9;
                                  return fetch("https://character-database.becode.xyz/characters", {
                                    method: "POST",
                                    headers: {
                                      "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                      name: name,
                                      shortDescription: shortDescription,
                                      description: description,
                                      image: image
                                    })
                                  });

                                case 9:
                                  response = _context2.sent;
                                  _context2.next = 12;
                                  return response.json();

                                case 12:
                                  createdCharacter = _context2.sent;
                                  console.log(createdCharacter);
                                  location.reload();

                                case 15:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        })));
                      } catch (error) {
                        console.error(error);
                      }

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _createCharacter.apply(this, arguments);
}
},{}],"assets/modules/editCharacter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editCharacter = editCharacter;

var _openCard = require("./openCard.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var image = ' '; // edit character

function editCharacter() {
  return _editCharacter.apply(this, arguments);
}

function _editCharacter() {
  _editCharacter = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var outerEditButton, _loop, i;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            outerEditButton = document.getElementsByClassName('outer-edit');

            _loop = function _loop(i) {
              outerEditButton[i].addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var id, response, character;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        id = _openCard.newCharacterId[i];
                        _context2.prev = 1;
                        _context2.next = 4;
                        return fetch("https://character-database.becode.xyz/characters/".concat(id));

                      case 4:
                        response = _context2.sent;
                        _context2.next = 7;
                        return response.json();

                      case 7:
                        character = _context2.sent;
                        document.getElementById('input-name').value = character.name;
                        document.getElementById('input-short-description').value = character.shortDescription;
                        document.getElementById('input-long-description').textContent = character.description;
                        image = character.image;
                        document.getElementById('submit').addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var inputs, values, _values, name, shortDescription, description, edit, editedCharacter;

                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  inputs = Array.from(document.getElementsByClassName('inputs'));
                                  values = inputs.map(function (_ref3) {
                                    var value = _ref3.value;
                                    return value.trim();
                                  });
                                  _values = _slicedToArray(values, 3), name = _values[0], shortDescription = _values[1], description = _values[2];

                                  if (!values.some(function (value) {
                                    return value === '';
                                  })) {
                                    _context.next = 8;
                                    break;
                                  }

                                  alert("there's an empty input!");
                                  return _context.abrupt("return");

                                case 8:
                                  _context.next = 10;
                                  return fetch("https://character-database.becode.xyz/characters/".concat(id), {
                                    method: 'PUT',
                                    headers: {
                                      'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                      name: name,
                                      shortDescription: shortDescription,
                                      description: description,
                                      image: image
                                    })
                                  });

                                case 10:
                                  edit = _context.sent;
                                  _context.next = 13;
                                  return edit.json();

                                case 13:
                                  editedCharacter = _context.sent;
                                  console.log(editedCharacter);
                                  location.reload();

                                case 16:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        })));
                        _context2.next = 18;
                        break;

                      case 15:
                        _context2.prev = 15;
                        _context2.t0 = _context2["catch"](1);
                        console.error(_context2.t0);

                      case 18:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[1, 15]]);
              })));
            };

            for (i = 0; i < outerEditButton.length; i++) {
              _loop(i);
            }

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _editCharacter.apply(this, arguments);
}
},{"./openCard.js":"assets/modules/openCard.js"}],"assets/modules/delete.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCharacter = deleteCharacter;

var _openCard = require("./openCard.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// const characterId = [];
function deleteCharacter() {
  var deleteButton = document.getElementsByClassName("delete");

  var _loop = function _loop(i) {
    deleteButton[i].addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var id, response, deletedCharacter;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!confirm("Are you sure you want to delete this character?")) {
                _context.next = 18;
                break;
              }

              id = _openCard.newCharacterId[i];
              _context.prev = 2;
              _context.next = 5;
              return fetch("https://character-database.becode.xyz/characters/".concat(id), {
                method: "DELETE"
              });

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              deletedCharacter = _context.sent;
              console.log(deletedCharacter);
              location.reload();
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](2);
              console.error(_context.t0);

            case 16:
              _context.next = 19;
              break;

            case 18:
              alert("This character has not been deleted");

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 13]]);
    })));
  };

  for (var i = 0; i < deleteButton.length; i++) {
    _loop(i);
  }
}
},{"./openCard.js":"assets/modules/openCard.js"}],"assets/index.js":[function(require,module,exports) {
"use strict";

var _openCard = require("./modules/openCard.js");

var _create = require("./modules/create.js");

var _editCharacter = require("./modules/editCharacter.js");

var _delete = require("./modules/delete.js");

var callAllFunctions = (0, _openCard.displayCharactersCards)();
callAllFunctions.then(function () {
  (0, _openCard.openCharacterCard)();
  (0, _create.createImage)();
  (0, _create.createCharacter)();
  (0, _editCharacter.editCharacter)();
  (0, _delete.deleteCharacter)();
});
},{"./modules/openCard.js":"assets/modules/openCard.js","./modules/create.js":"assets/modules/create.js","./modules/editCharacter.js":"assets/modules/editCharacter.js","./modules/delete.js":"assets/modules/delete.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55067" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/index.js"], null)
//# sourceMappingURL=/assets.8f4429fc.js.map