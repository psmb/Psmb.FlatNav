/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = readFromConsumerApi;
function readFromConsumerApi(key) {
    return function () {
        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']['@' + key]) {
            var _window$NeosHostPlu;

            return (_window$NeosHostPlu = window['@Neos:HostPluginAPI'])['@' + key].apply(_window$NeosHostPlu, arguments);
        }

        throw new Error('You are trying to read from a consumer api that hasn\'t been initialized yet!');
    };
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().React;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiDecorators;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(21);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(23)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js??ref--6-2!../node_modules/postcss-loader/lib/index.js??ref--6-3!./style.css", function() {
		var newContent = require("!!../node_modules/css-loader/index.js??ref--6-2!../node_modules/postcss-loader/lib/index.js??ref--6-3!./style.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().plow;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().reactRedux;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiReduxStore;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().PropTypes;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().classnames;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _neosUiExtensibility = __webpack_require__(12);

var _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);

var _makeFlatNavContainer = __webpack_require__(16);

var _makeFlatNavContainer2 = _interopRequireDefault(_makeFlatNavContainer);

var _style = __webpack_require__(4);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _neosUiExtensibility2.default)('Psmb.FlatNav:FlatNav', {}, function (globalRegistry) {
    var containerRegistry = globalRegistry.get('containers');
    var PageTreeToolbar = containerRegistry.get('LeftSideBar/Top/PageTreeToolbar');
    var PageTreeSearchbar = containerRegistry.get('LeftSideBar/Top/PageTreeSearchbar');
    var PageTree = containerRegistry.get('LeftSideBar/Top/PageTree');

    var OriginalTree = function OriginalTree() {
        return _react2.default.createElement(
            'div',
            { className: _style2.default.pageTreeContainerOriginal },
            _react2.default.createElement(
                'div',
                { className: _style2.default.pageTreeToolbarOriginal },
                _react2.default.createElement(PageTreeToolbar, null)
            ),
            _react2.default.createElement(PageTreeSearchbar, null),
            _react2.default.createElement(PageTree, null)
        );
    };
    containerRegistry.set('LeftSideBar/Top/PageTreeToolbar', function () {
        return null;
    });
    containerRegistry.set('LeftSideBar/Top/PageTreeSearchbar', function () {
        return null;
    });

    containerRegistry.set('LeftSideBar/Top/PageTree', (0, _makeFlatNavContainer2.default)(OriginalTree));
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createConsumerApi = undefined;

var _createConsumerApi = __webpack_require__(13);

var _createConsumerApi2 = _interopRequireDefault(_createConsumerApi);

var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _readFromConsumerApi2.default)('manifest');
exports.createConsumerApi = _createConsumerApi2.default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createConsumerApi;

var _package = __webpack_require__(14);

var _manifest = __webpack_require__(15);

var _manifest2 = _interopRequireDefault(_manifest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createReadOnlyValue = function createReadOnlyValue(value) {
    return {
        value: value,
        writable: false,
        enumerable: false,
        configurable: true
    };
};

function createConsumerApi(manifests, exposureMap) {
    var api = {};

    Object.keys(exposureMap).forEach(function (key) {
        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));
    });

    Object.defineProperty(api, '@manifest', createReadOnlyValue((0, _manifest2.default)(manifests)));

    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));
    Object.defineProperty(window['@Neos:HostPluginAPI'], 'VERSION', createReadOnlyValue(_package.version));
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {"name":"@neos-project/neos-ui-extensibility","version":"1.3.3","description":"Extensibility mechanisms for the Neos CMS UI","main":"./src/index.js","scripts":{"prebuild":"check-dependencies && yarn clean","test":"yarn jest -- -w 2 --coverage","test:watch":"yarn jest -- --watch","build":"exit 0","build:watch":"exit 0","clean":"rimraf ./lib ./dist","lint":"eslint src","jest":"NODE_ENV=test jest"},"devDependencies":{"@neos-project/babel-preset-neos-ui":"1.3.3","@neos-project/jest-preset-neos-ui":"1.3.3"},"dependencies":{"@neos-project/build-essentials":"1.3.3","@neos-project/positional-array-sorter":"1.3.3","babel-core":"^6.13.2","babel-eslint":"^7.1.1","babel-loader":"^7.1.2","babel-plugin-transform-decorators-legacy":"^1.3.4","babel-plugin-transform-object-rest-spread":"^6.20.1","babel-plugin-webpack-alias":"^2.1.1","babel-preset-es2015":"^6.13.2","babel-preset-react":"^6.3.13","babel-preset-stage-0":"^6.3.13","chalk":"^1.1.3","css-loader":"^0.28.4","file-loader":"^1.1.5","json-loader":"^0.5.4","postcss-loader":"^2.0.10","react-dev-utils":"^0.5.0","style-loader":"^0.21.0"},"bin":{"neos-react-scripts":"./bin/neos-react-scripts.js"},"jest":{"preset":"@neos-project/jest-preset-neos-ui"}}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (manifests) {
    return function (identifier, options, bootstrap) {
        manifests.push(_defineProperty({}, identifier, {
            options: options,
            bootstrap: bootstrap
        }));
    };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _plowJs = __webpack_require__(5);

var _reactUiComponents = __webpack_require__(2);

var _reactRedux = __webpack_require__(6);

var _neosUiReduxStore = __webpack_require__(7);

var _neosUiDecorators = __webpack_require__(3);

var _neosUiBackendConnector = __webpack_require__(17);

var _neosUiBackendConnector2 = _interopRequireDefault(_neosUiBackendConnector);

var _FlatNav = __webpack_require__(18);

var _FlatNav2 = _interopRequireDefault(_FlatNav);

var _style = __webpack_require__(4);

var _style2 = _interopRequireDefault(_style);

var _lodash = __webpack_require__(27);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Taken from here, as it's not exported in the UI
// https://github.com/neos/neos-ui/blob/b2a52d66a211b192dfc541799779a8be27bf5a31/packages/neos-ui-sagas/src/CR/NodeOperations/helpers.js#L3
var parentNodeContextPath = function parentNodeContextPath(contextPath) {
    if (typeof contextPath !== 'string') {
        return null;
    }

    var _contextPath$split = contextPath.split('@'),
        _contextPath$split2 = _slicedToArray(_contextPath$split, 2),
        path = _contextPath$split2[0],
        context = _contextPath$split2[1];

    if (path.length === 0) {
        // We are at top level; so there is no parent anymore!
        return false;
    }

    return path.substr(0, path.lastIndexOf('/')) + '@' + context;
};

var makeFlatNavContainer = function makeFlatNavContainer(OriginalPageTree) {
    var _class, _temp, _initialiseProps;

    var FlatNavContainer = (_temp = _class = function (_Component) {
        _inherits(FlatNavContainer, _Component);

        function FlatNavContainer(props) {
            _classCallCheck(this, FlatNavContainer);

            var _this = _possibleConstructorReturn(this, (FlatNavContainer.__proto__ || Object.getPrototypeOf(FlatNavContainer)).call(this, props));

            _initialiseProps.call(_this);

            _this.state = _this.buildDefaultState(props);

            // It's not safe to rely on React's state to do the locking
            _this.loadingLock = {};
            _this.loadingReferenceNodePathLock = {};
            return _this;
        }

        _createClass(FlatNavContainer, [{
            key: 'componentDidUpdate',
            value: function componentDidUpdate(prevProps) {
                // If the siteNodeContextPath or baseWorkspaceName have changed, fully reset the state
                if (this.props.siteNodeContextPath !== prevProps.siteNodeContextPath || this.props.baseWorkspaceName !== prevProps.baseWorkspaceName) {
                    this.fullReset();
                }
            }

            // Gets the `newReferenceNodePath` setting and loads that node into state

        }, {
            key: 'render',
            value: function render() {
                var _this2 = this;

                return _react2.default.createElement(
                    _reactUiComponents.Tabs,
                    { theme: {
                            tabs__content: _style2.default.tabs__content,
                            tabs__panel: _style2.default.tabs__panel
                        } },
                    Object.keys(this.props.options.presets).map(function (presetName) {
                        var preset = _this2.props.options.presets[presetName];
                        var fetchNodes = _this2.makeFetchNodes(presetName);
                        var resetNodes = _this2.makeResetNodes(presetName, fetchNodes);
                        var debouncedFetchNodes = (0, _lodash2.default)(fetchNodes, 400);
                        var setSearchTerm = _this2.makeSetSearchTerm(presetName, debouncedFetchNodes);
                        var fetchNewReference = _this2.makeGetNewReference(presetName);
                        return _react2.default.createElement(
                            _reactUiComponents.Tabs.Panel,
                            { id: presetName, key: presetName, icon: preset.icon, tooltip: _this2.props.i18nRegistry.translate(preset.label), theme: {
                                    panel: _style2.default.panel
                                } },
                            preset.type === 'flat' && _react2.default.createElement(_FlatNav2.default, _extends({
                                preset: preset,
                                fetchNodes: fetchNodes,
                                resetNodes: resetNodes,
                                setSearchTerm: setSearchTerm,
                                fullReset: _this2.fullReset,
                                fetchNewReference: fetchNewReference
                            }, _this2.state[presetName])),
                            preset.type === 'tree' && _react2.default.createElement(OriginalPageTree, null)
                        );
                    })
                );
            }
        }]);

        return FlatNavContainer;
    }(_react.Component), _initialiseProps = function _initialiseProps() {
        var _this3 = this;

        this.state = {};

        this.buildDefaultState = function (props) {
            var state = {};
            Object.keys(props.options.presets).forEach(function (preset) {
                var newReferenceNodePath = void 0;
                // If `newReferenceNodePath` is static, append context to it, otherwise set to empty, as it would be fetched later
                var newReferenceNodePathSetting = (0, _plowJs.$get)(['options', 'presets', preset, 'newReferenceNodePath'], props);
                if (typeof newReferenceNodePathSetting === 'string' && newReferenceNodePathSetting.indexOf('/') === 0) {
                    newReferenceNodePath = props.options.presets[preset].newReferenceNodePath;
                } else {
                    newReferenceNodePath = '';
                }
                state[preset] = {
                    page: 1,
                    isLoading: false,
                    isLoadingReferenceNodePath: false,
                    nodes: [],
                    searchTerm: '',
                    moreNodesAvailable: true,
                    newReferenceNodePath: newReferenceNodePath
                };
            });
            return state;
        };

        this.fullReset = function () {
            var defaultState = _this3.buildDefaultState(_this3.props);
            _this3.setState(_extends({}, defaultState));
        };

        this.makeResetNodes = function (preset, fetchNodes) {
            return function () {
                _this3.setState(_defineProperty({}, preset, _extends({}, _this3.state[preset], {
                    page: 1,
                    nodes: [],
                    moreNodesAvailable: true
                })), fetchNodes);
            };
        };

        this.makeFetchNodes = function (preset) {
            return function () {
                var loadMore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                var searchTerm = _this3.state[preset].searchTerm;
                var page = loadMore ? _this3.state[preset].page + 1 : 1;
                var url = '/neos/flatnav/query?nodeContextPath=' + encodeURIComponent(_this3.props.siteNodeContextPath) + '&preset=' + preset + '&page=' + page + (searchTerm ? '&searchTerm=' + searchTerm : '');
                if (_this3.loadingLock[url]) {
                    return;
                }
                _this3.loadingLock[url] = true;
                _this3.setState(_defineProperty({}, preset, _extends({}, _this3.state[preset], {
                    isLoading: true,
                    moreNodesAvailable: true
                })));

                _neosUiBackendConnector.fetchWithErrorHandling.withCsrfToken(function (csrfToken) {
                    return {
                        url: url,
                        method: 'GET',
                        credentials: 'include',
                        headers: {
                            'X-Flow-Csrftoken': csrfToken,
                            'Content-Type': 'application/json'
                        }
                    };
                }).then(function (response) {
                    return response && response.json();
                }).then(function (nodes) {
                    // Ignore the response if the searchTerm has changed while request was running
                    if (searchTerm === _this3.state[preset].searchTerm) {
                        if (nodes.length > 0) {
                            var nodesMap = nodes.reduce(function (result, node) {
                                result[node.contextPath] = node;
                                return result;
                            }, {});
                            _this3.props.merge(nodesMap);
                            _this3.setState(_defineProperty({}, preset, _extends({}, _this3.state[preset], {
                                isLoading: false,
                                nodes: loadMore ? [].concat(_toConsumableArray(_this3.state[preset].nodes), _toConsumableArray(Object.keys(nodesMap))) : Object.keys(nodesMap),
                                page: page,
                                moreNodesAvailable: true
                            })));
                        } else {
                            _this3.setState(_defineProperty({}, preset, _extends({}, _this3.state[preset], {
                                isLoading: false,
                                moreNodesAvailable: false,
                                nodes: loadMore ? _this3.state[preset].nodes : []
                            })));
                        }
                        _this3.loadingLock[url] = false;
                    }
                });
            };
        };

        this.makeSetSearchTerm = function (preset, fetchNodes) {
            return function (searchTerm) {
                _this3.setState(_defineProperty({}, preset, _extends({}, _this3.state[preset], {
                    nodes: [],
                    page: 1,
                    isLoading: true,
                    searchTerm: searchTerm
                })), fetchNodes);
            };
        };

        this.makeGetNewReference = function (preset) {
            return function () {
                if (_this3.loadingReferenceNodePathLock[preset]) {
                    return;
                }
                _this3.loadingReferenceNodePathLock[preset] = true;
                var context = _this3.props.siteNodeContextPath.split('@')[1];
                if (_this3.state[preset].newReferenceNodePath.indexOf('/') === 0) {
                    _this3.fetchNodeWithParents(_this3.state[preset].newReferenceNodePath + '@' + context);
                } else {
                    _this3.setState(_defineProperty({}, preset, _extends({}, _this3.state[preset], {
                        isLoadingReferenceNodePath: true
                    })));
                    _neosUiBackendConnector.fetchWithErrorHandling.withCsrfToken(function (csrfToken) {
                        return {
                            url: '/neos/flatnav/getNewReferenceNodePath?nodeContextPath=' + encodeURIComponent(_this3.props.siteNodeContextPath) + '&preset=' + preset,
                            method: 'GET',
                            credentials: 'include',
                            headers: {
                                'X-Flow-Csrftoken': csrfToken,
                                'Content-Type': 'application/json'
                            }
                        };
                    }).then(function (response) {
                        return response && response.json();
                    }).then(function (newReferenceNodePath) {
                        _this3.setState(_defineProperty({}, preset, _extends({}, _this3.state[preset], {
                            isLoadingReferenceNodePath: false,
                            newReferenceNodePath: newReferenceNodePath
                        })));
                        _this3.fetchNodeWithParents(newReferenceNodePath + '@' + context);
                        _this3.loadingReferenceNodePathLock[preset] = false;
                    });
                }
            };
        };

        this.fetchNodeWithParents = function (contextPath) {
            // This is rather a hack. We need to make sure the target NewReferenceNode is loaded
            // in order to be able to create anything inside it.
            var siteNodeContextPath = _this3.props.siteNodeContextPath;

            var _backend$get = _neosUiBackendConnector2.default.get(),
                q = _backend$get.q;

            var parentContextPath = contextPath;

            while (parentContextPath !== siteNodeContextPath) {
                var node = (0, _plowJs.$get)([parentContextPath], _this3.props.nodeData);
                // If the given node is not in the state, load it
                if (!node) {
                    q(parentContextPath).get().then(function (nodes) {
                        _this3.props.merge(nodes.reduce(function (nodeMap, node) {
                            nodeMap[(0, _plowJs.$get)('contextPath', node)] = node;
                            return nodeMap;
                        }, {}));
                    });
                }
                parentContextPath = parentNodeContextPath(parentContextPath);
            }
        };
    }, _temp);

    return (0, _neosUiDecorators.neos)(function (globalRegistry) {
        return {
            options: globalRegistry.get('frontendConfiguration').get('Psmb_FlatNav'),
            i18nRegistry: globalRegistry.get('i18n')
        };
    })((0, _reactRedux.connect)((0, _plowJs.$transform)({
        siteNodeContextPath: (0, _plowJs.$get)('cr.nodes.siteNode'),
        baseWorkspaceName: (0, _plowJs.$get)('cr.workspaces.personalWorkspace.baseWorkspace')
    }), {
        merge: _neosUiReduxStore.actions.CR.Nodes.merge
    })(FlatNavContainer));
};

exports.default = makeFlatNavContainer;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchWithErrorHandling = undefined;

var _readFromConsumerApi = __webpack_require__(0);

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiBackendConnectorDefault;
var fetchWithErrorHandling = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiBackendConnector.fetchWithErrorHandling;
exports.fetchWithErrorHandling = fetchWithErrorHandling;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _plowJs = __webpack_require__(5);

var _reactUiComponents = __webpack_require__(2);

var _reactRedux = __webpack_require__(6);

var _neosUiReduxStore = __webpack_require__(7);

var _neosUiDecorators = __webpack_require__(3);

var _HideSelectedNode = __webpack_require__(19);

var _HideSelectedNode2 = _interopRequireDefault(_HideSelectedNode);

var _DeleteSelectedNode = __webpack_require__(20);

var _DeleteSelectedNode2 = _interopRequireDefault(_DeleteSelectedNode);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

var _style = __webpack_require__(4);

var _style2 = _interopRequireDefault(_style);

var _RefreshNodes = __webpack_require__(25);

var _RefreshNodes2 = _interopRequireDefault(_RefreshNodes);

var _SearchInput = __webpack_require__(26);

var _SearchInput2 = _interopRequireDefault(_SearchInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlatNav = (_dec = (0, _neosUiDecorators.neos)(function (globalRegistry) {
    return {
        nodeTypesRegistry: globalRegistry.get('@neos-project/neos-ui-contentrepository'),
        serverFeedbackHandlers: globalRegistry.get('serverFeedbackHandlers'),
        i18nRegistry: globalRegistry.get('i18n')
    };
}), _dec2 = (0, _reactRedux.connect)(function (state, _ref) {
    var nodeTypesRegistry = _ref.nodeTypesRegistry;

    var isAllowedToAddChildOrSiblingNodesSelector = _neosUiReduxStore.selectors.CR.Nodes.makeIsAllowedToAddChildOrSiblingNodes(nodeTypesRegistry);
    return function (state, _ref2) {
        var newReferenceNodePath = _ref2.newReferenceNodePath;

        var focusedNodeContextPath = _neosUiReduxStore.selectors.UI.PageTree.getFocused(state);
        var getNodeByContextPathSelector = _neosUiReduxStore.selectors.CR.Nodes.makeGetNodeByContextPathSelector(focusedNodeContextPath);
        var focusedNode = getNodeByContextPathSelector(state);
        var canBeDeleted = (0, _plowJs.$get)('policy.canRemove', focusedNode) || false;
        var canBeEdited = (0, _plowJs.$get)('policy.canEdit', focusedNode) || false;
        var context = focusedNodeContextPath.split('@')[1];
        var isAllowedToAddChildOrSiblingNodes = isAllowedToAddChildOrSiblingNodesSelector(state, {
            reference: newReferenceNodePath + '@' + context
        });
        return {
            nodeData: (0, _plowJs.$get)('cr.nodes.byContextPath', state),
            focused: _neosUiReduxStore.selectors.CR.Nodes.focusedNodePathSelector(state),
            siteNodeContextPath: _neosUiReduxStore.selectors.CR.Nodes.siteNodeContextPathSelector(state),
            baseWorkspaceName: (0, _plowJs.$get)('cr.workspaces.personalWorkspace.baseWorkspace', state),
            publishableNodes: (0, _plowJs.$get)('cr.workspaces.personalWorkspace.publishableNodes', state),
            isAllowedToAddChildOrSiblingNodes: isAllowedToAddChildOrSiblingNodes,
            canBeDeleted: canBeDeleted,
            canBeEdited: canBeEdited
        };
    };
}, {
    setSrc: _neosUiReduxStore.actions.UI.ContentCanvas.setSrc,
    focus: _neosUiReduxStore.actions.UI.PageTree.focus,
    openNodeCreationDialog: _neosUiReduxStore.actions.UI.NodeCreationDialog.open,
    commenceNodeCreation: _neosUiReduxStore.actions.CR.Nodes.commenceCreation,
    selectNodeType: _neosUiReduxStore.actions.UI.SelectNodeTypeModal.apply,
    merge: _neosUiReduxStore.actions.CR.Nodes.merge
}), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(FlatNav, _Component);

    function FlatNav() {
        var _ref3;

        var _temp, _this, _ret;

        _classCallCheck(this, FlatNav);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = FlatNav.__proto__ || Object.getPrototypeOf(FlatNav)).call.apply(_ref3, [this].concat(args))), _this), _this.handleNodeWasCreated = function (feedbackPayload, _ref4) {
            var store = _ref4.store;

            var state = store.getState();

            var getNodeByContextPathSelector = _neosUiReduxStore.selectors.CR.Nodes.makeGetNodeByContextPathSelector(feedbackPayload.contextPath);
            var node = getNodeByContextPathSelector(state);
            var nodeTypeName = (0, _plowJs.$get)('nodeType', node);

            if (nodeTypeName === _this.props.preset.newNodeType) {
                _this.refreshFlatNav();
            }
        }, _this.buildNewReferenceNodePath = function () {
            var context = _this.props.siteNodeContextPath.split('@')[1];
            return _this.props.newReferenceNodePath + '@' + context;
        }, _this.createNode = function () {
            var contextPath = _this.buildNewReferenceNodePath();
            _this.props.commenceNodeCreation(contextPath, undefined, 'into', _this.props.preset.newNodeType || undefined);
        }, _this.refreshFlatNav = function () {
            _this.props.resetNodes();
        }, _this.renderNodes = function () {
            if (_this.props.searchTerm && !_this.props.isLoading && _this.props.nodes.length === 0) {
                return _react2.default.createElement(
                    'span',
                    { className: _style2.default.toolbarSearchNoResults },
                    _this.props.i18nRegistry.translate('Psmb.FlatNav:Main:noResults')
                );
            }
            return _this.props.nodes.map(function (contextPath) {
                var item = (0, _plowJs.$get)([contextPath], _this.props.nodeData);

                if (item) {
                    var _mergeClassNames;

                    var isFocused = _this.props.focused === contextPath;
                    console.log(_this.props.focused, contextPath);
                    var isDirty = _this.props.publishableNodes.filter(function (i) {
                        return (0, _plowJs.$get)('contextPath', i) === contextPath || (0, _plowJs.$get)('documentContextPath', i) === contextPath;
                    }).length > 0;
                    var isRemoved = (0, _plowJs.$get)('properties._removed', item);
                    var nodeIconComponent = _this.getNodeIconComponent(item);

                    return _react2.default.createElement(
                        'div',
                        {
                            className: (0, _classnames2.default)((_mergeClassNames = {}, _defineProperty(_mergeClassNames, _style2.default.node, true), _defineProperty(_mergeClassNames, _style2.default['node--focused'], isFocused), _defineProperty(_mergeClassNames, _style2.default['node--dirty'], isDirty), _defineProperty(_mergeClassNames, _style2.default['node--removed'], isRemoved), _mergeClassNames)),
                            key: contextPath,
                            onClick: function onClick() {
                                if (!isRemoved) {
                                    _this.props.setSrc((0, _plowJs.$get)('uri', item));
                                    _this.props.focus(contextPath);
                                }
                            },
                            role: 'button'
                        },
                        _react2.default.createElement(
                            'div',
                            {
                                className: _style2.default.node__iconWrapper },
                            nodeIconComponent
                        ),
                        _react2.default.createElement(
                            'span',
                            {
                                className: _style2.default.node__label },
                            (0, _plowJs.$get)('label', item)
                        )
                    );
                }
                return null;
            }).filter(function (i) {
                return i;
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(FlatNav, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (
            // No node paths in state on initial load
            this.props.nodes.length === 0) {
                this.props.fetchNodes();
                this.props.fetchNewReference();
            }
            this.props.serverFeedbackHandlers.set('Neos.Neos.Ui:NodeCreated/DocumentAdded', this.handleNodeWasCreated, 'after Neos.Neos.Ui:NodeCreated/Main');
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this2 = this;

            if (
            // Node data not available for some nodes (e.g. after tree reload)
            !this.props.nodes.every(function (contextPath) {
                return (0, _plowJs.$get)([contextPath], _this2.props.nodeData);
            })) {
                this.props.fetchNodes();
                this.props.fetchNewReference();
            }
        }
    }, {
        key: 'getNodeIconComponent',
        value: function getNodeIconComponent(node) {
            var nodeTypeName = (0, _plowJs.$get)('nodeType', node);
            var nodeType = this.props.nodeTypesRegistry.getNodeType(nodeTypeName);
            var isHidden = (0, _plowJs.$get)('properties._hidden', node);
            var isHiddenBefore = (0, _plowJs.$get)('properties._hiddenBeforeDateTime', node);
            var isHiddenAfter = (0, _plowJs.$get)('properties._hiddenAfterDateTime', node);

            if (isHidden) {
                return _react2.default.createElement(
                    'span',
                    { className: 'fa-layers fa-fw' },
                    _react2.default.createElement(_reactUiComponents.Icon, { icon: (0, _plowJs.$get)('ui.icon', nodeType) }),
                    _react2.default.createElement(_reactUiComponents.Icon, { icon: 'circle', color: 'error', transform: 'shrink-3 down-6 right-4' }),
                    _react2.default.createElement(_reactUiComponents.Icon, { icon: 'times', transform: 'shrink-7 down-6 right-4' })
                );
            }

            if (isHiddenBefore || isHiddenAfter) {
                return _react2.default.createElement(
                    'span',
                    { className: 'fa-layers fa-fw' },
                    _react2.default.createElement(_reactUiComponents.Icon, { icon: (0, _plowJs.$get)('ui.icon', nodeType) }),
                    _react2.default.createElement(_reactUiComponents.Icon, { icon: 'circle', color: 'primaryBlue', transform: 'shrink-5 down-6 right-4' }),
                    _react2.default.createElement(_reactUiComponents.Icon, { icon: 'clock', transform: 'shrink-9 down-6 right-4' })
                );
            }

            return _react2.default.createElement(_reactUiComponents.Icon, { icon: (0, _plowJs.$get)('ui.icon', nodeType) });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                focused = _props.focused,
                nodes = _props.nodes,
                isLoadingReferenceNodePath = _props.isLoadingReferenceNodePath,
                isLoading = _props.isLoading,
                preset = _props.preset,
                isAllowedToAddChildOrSiblingNodes = _props.isAllowedToAddChildOrSiblingNodes,
                canBeDeleted = _props.canBeDeleted,
                canBeEdited = _props.canBeEdited;


            var focusedInNodes = nodes.includes(focused);

            var searchEnabled = Boolean(preset.searchQuery);

            return _react2.default.createElement(
                'div',
                { className: _style2.default.pageTreeContainer },
                _react2.default.createElement(
                    'div',
                    { className: _style2.default.toolbar },
                    _react2.default.createElement(
                        'div',
                        { className: _style2.default.toolbarButtons },
                        _react2.default.createElement(_reactUiComponents.IconButton, { icon: 'plus', disabled: isLoadingReferenceNodePath || !isAllowedToAddChildOrSiblingNodes, onClick: this.createNode }),
                        _react2.default.createElement(_HideSelectedNode2.default, { disabled: !focusedInNodes || !canBeEdited }),
                        _react2.default.createElement(_DeleteSelectedNode2.default, { disabled: !focusedInNodes || !canBeDeleted || !canBeEdited }),
                        _react2.default.createElement(_RefreshNodes2.default, { disabled: isLoading || isLoadingReferenceNodePath, onClick: this.refreshFlatNav })
                    ),
                    searchEnabled && _react2.default.createElement(_SearchInput2.default, { searchTerm: this.props.searchTerm, onChange: this.props.setSearchTerm, placeholder: this.props.i18nRegistry.translate('Psmb.FlatNav:Main:search') })
                ),
                _react2.default.createElement(
                    'div',
                    { className: _style2.default.treeWrapper },
                    this.renderNodes(),
                    (isLoading || !this.props.preset.disablePagination && this.props.moreNodesAvailable && !this.props.searchTerm) && _react2.default.createElement(
                        _reactUiComponents.Button,
                        {
                            onClick: function onClick() {
                                return _this3.props.fetchNodes(true);
                            },
                            style: 'clean',
                            className: _style2.default.loadMoreButton,
                            disabled: isLoading
                        },
                        _react2.default.createElement(
                            'div',
                            { style: { textAlign: 'center' } },
                            _react2.default.createElement(_reactUiComponents.Icon, {
                                spin: isLoading,
                                icon: isLoading ? 'spinner' : 'angle-double-down'
                            }),
                            '\xA0',
                            isLoading ? this.props.i18nRegistry.translate('Psmb.FlatNav:Main:loading') : this.props.i18nRegistry.translate('Psmb.FlatNav:Main:loadMore')
                        )
                    )
                )
            );
        }
    }]);

    return FlatNav;
}(_react.Component), _class2.propTypes = {
    nodes: _propTypes2.default.array.isRequired,
    preset: _propTypes2.default.object.isRequired,
    isLoading: _propTypes2.default.bool.isRequired,
    isLoadingReferenceNodePath: _propTypes2.default.bool.isRequired,
    page: _propTypes2.default.number.isRequired,
    newReferenceNodePath: _propTypes2.default.string.isRequired,
    moreNodesAvailable: _propTypes2.default.bool.isRequired
}, _temp2)) || _class) || _class);
exports.default = FlatNav;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(6);

var _neosUiDecorators = __webpack_require__(3);

var _plowJs = __webpack_require__(5);

var _reactUiComponents = __webpack_require__(2);

var _neosUiReduxStore = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HideSelectedNode = (_dec = (0, _neosUiDecorators.neos)(function (globalRegistry) {
    return {
        i18nRegistry: globalRegistry.get('i18n')
    };
}), _dec2 = (0, _reactRedux.connect)((0, _plowJs.$transform)({
    node: _neosUiReduxStore.selectors.CR.Nodes.focusedSelector
}), {
    hideNode: _neosUiReduxStore.actions.CR.Nodes.hide,
    showNode: _neosUiReduxStore.actions.CR.Nodes.show
}), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_PureComponent) {
    _inherits(HideSelectedNode, _PureComponent);

    function HideSelectedNode() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, HideSelectedNode);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HideSelectedNode.__proto__ || Object.getPrototypeOf(HideSelectedNode)).call.apply(_ref, [this].concat(args))), _this), _this.handleHideNode = function () {
            var _this$props = _this.props,
                node = _this$props.node,
                hideNode = _this$props.hideNode;


            hideNode((0, _plowJs.$get)('contextPath', node));
        }, _this.handleShowNode = function () {
            var _this$props2 = _this.props,
                node = _this$props2.node,
                showNode = _this$props2.showNode;


            showNode((0, _plowJs.$get)('contextPath', node));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(HideSelectedNode, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                disabled = _props.disabled,
                node = _props.node,
                i18nRegistry = _props.i18nRegistry;

            var isHidden = (0, _plowJs.$get)('properties._hidden', node);

            return _react2.default.createElement(_reactUiComponents.IconButton, {
                className: className,
                disabled: disabled,
                isActive: isHidden,
                onClick: isHidden ? this.handleShowNode : this.handleHideNode,
                icon: 'eye-slash',
                hoverStyle: 'clean',
                title: i18nRegistry.translate('hideUnhide')
            });
        }
    }]);

    return HideSelectedNode;
}(_react.PureComponent), _class2.propTypes = {
    node: _propTypes2.default.object,
    className: _propTypes2.default.string,
    hideNode: _propTypes2.default.func.isRequired,
    showNode: _propTypes2.default.func.isRequired,
    disabled: _propTypes2.default.bool.isRequired,
    i18nRegistry: _propTypes2.default.object.isRequired
}, _temp2)) || _class) || _class);
exports.default = HideSelectedNode;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(6);

var _plowJs = __webpack_require__(5);

var _neosUiDecorators = __webpack_require__(3);

var _reactUiComponents = __webpack_require__(2);

var _neosUiReduxStore = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeleteSelectedNode = (_dec = (0, _neosUiDecorators.neos)(function (globalRegistry) {
    return {
        i18nRegistry: globalRegistry.get('i18n')
    };
}), _dec2 = (0, _reactRedux.connect)((0, _plowJs.$transform)({
    node: _neosUiReduxStore.selectors.CR.Nodes.focusedSelector
}), {
    commenceNodeRemoval: _neosUiReduxStore.actions.CR.Nodes.commenceRemoval
}), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_PureComponent) {
    _inherits(DeleteSelectedNode, _PureComponent);

    function DeleteSelectedNode() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DeleteSelectedNode);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DeleteSelectedNode.__proto__ || Object.getPrototypeOf(DeleteSelectedNode)).call.apply(_ref, [this].concat(args))), _this), _this.handleDeleteSelectedNodeClick = function () {
            var _this$props = _this.props,
                node = _this$props.node,
                commenceNodeRemoval = _this$props.commenceNodeRemoval;

            commenceNodeRemoval((0, _plowJs.$get)('contextPath', node));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DeleteSelectedNode, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                disabled = _props.disabled,
                i18nRegistry = _props.i18nRegistry;


            return _react2.default.createElement(_reactUiComponents.IconButton, {
                className: className,
                disabled: disabled,
                onClick: this.handleDeleteSelectedNodeClick,
                icon: 'trash',
                hoverStyle: 'clean',
                title: i18nRegistry.translate('delete')
            });
        }
    }]);

    return DeleteSelectedNode;
}(_react.PureComponent), _class2.propTypes = {
    node: _propTypes2.default.object,
    className: _propTypes2.default.string,
    commenceNodeRemoval: _propTypes2.default.func.isRequired,
    disabled: _propTypes2.default.bool.isRequired,
    i18nRegistry: _propTypes2.default.object.isRequired
}, _temp2)) || _class) || _class);
exports.default = DeleteSelectedNode;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, ".style__loadMoreButton___9u14e {\n    width: 100% !important;\n    opacity: 1 !important;\n}\n\n.style__tabs__content___pnV9i {\n    height: calc(100% - 41px);\n}\n\n.style__tabs__panel___1f-I- {\n    height: 100%;\n}\n\n.style__panel___8gH6H {\n    height: 100%;\n}\n\n.style__toolbar___Y2z2P {\n    background-color: #222;\n    border-bottom: 1px solid #3f3f3f;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.style__toolbarButtons___2DkPs {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n}\n\n.style__toolbarSearch___VoCND {\n    margin-left: 5px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\n.style__toolbarSearchInput___3iqrB {\n    border-radius: 0;\n}\n\n.style__toolbarSearchInput___3iqrB:focus {\n        background-color: #3f3f3f;\n        color: #FFF;\n    }\n\n.style__toolbarSearchClearButton___2zsD3 {\n    background-color: #3f3f3f;\n}\n\n.style__toolbarSearchNoResults___1mTrz {\n    padding: 5px 10px;\n}\n\n.style__pageTreeContainer___7tNsg {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    height: 100%;\n    background-color: #222;\n    border-right: 1px solid #3f3f3f;\n    border-bottom: 1px solid #3f3f3f;\n}\n\n.style__pageTreeContainerOriginal___dXhKR {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    height: 100%;\n}\n\n.style__pageTreeToolbarOriginal___3coJx div {\n        border-top: 0;\n    }\n\n.style__treeWrapper___1Ki9q {\n    overflow-y: auto;\n    padding: 5px 0;\n}\n\n.style__node___37dXu {\n    position: relative;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: 100%;\n    padding: 3px 6px;\n    cursor: pointer;\n}\n\n.style__node--focused___2Ad0k {\n    background-color: #323232;\n}\n\n.style__node--focused___2Ad0k .style__node__label___2ktrO {\n    color: #00ADEE;\n}\n\n.style__node--dirty___K2yEx {\n    border-left: 2px solid #ff8700;\n    padding-left: 4px;\n}\n\n.style__node--removed___3ycgN {\n    cursor: not-allowed;\n    border-color: #ff460d;\n}\n\n.style__node--removed___3ycgN .style__node__label___2ktrO,\n.style__node--removed___3ycgN .style__node__iconWrapper___32kOo {\n    opacity: 0.5;\n}\n\n.style__node__iconWrapper___32kOo {\n    width: 2em;\n    display: inline-block;\n    position: absolute;\n    text-align: center;\n}\n\n.style__node__label___2ktrO {\n    margin-left: 2em;\n}\n", ""]);

// exports
exports.locals = {
	"loadMoreButton": "style__loadMoreButton___9u14e",
	"tabs__content": "style__tabs__content___pnV9i",
	"tabs__panel": "style__tabs__panel___1f-I-",
	"panel": "style__panel___8gH6H",
	"toolbar": "style__toolbar___Y2z2P",
	"toolbarButtons": "style__toolbarButtons___2DkPs",
	"toolbarSearch": "style__toolbarSearch___VoCND",
	"toolbarSearchInput": "style__toolbarSearchInput___3iqrB",
	"toolbarSearchClearButton": "style__toolbarSearchClearButton___2zsD3",
	"toolbarSearchNoResults": "style__toolbarSearchNoResults___1mTrz",
	"pageTreeContainer": "style__pageTreeContainer___7tNsg",
	"pageTreeContainerOriginal": "style__pageTreeContainerOriginal___dXhKR",
	"pageTreeToolbarOriginal": "style__pageTreeToolbarOriginal___3coJx",
	"treeWrapper": "style__treeWrapper___1Ki9q",
	"node": "style__node___37dXu",
	"node--focused": "style__node--focused___2Ad0k",
	"node__label": "style__node__label___2ktrO",
	"node--dirty": "style__node--dirty___K2yEx",
	"node--removed": "style__node--removed___3ycgN",
	"node__iconWrapper": "style__node__iconWrapper___32kOo"
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(24);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

var _neosUiDecorators = __webpack_require__(3);

var _reactUiComponents = __webpack_require__(2);

var _style = __webpack_require__(4);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RefreshNodes = (_dec = (0, _neosUiDecorators.neos)(function (globalRegistry) {
    return {
        i18nRegistry: globalRegistry.get('i18n')
    };
}), _dec(_class = (_temp2 = _class2 = function (_PureComponent) {
    _inherits(RefreshNodes, _PureComponent);

    function RefreshNodes() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RefreshNodes);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RefreshNodes.__proto__ || Object.getPrototypeOf(RefreshNodes)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
            var onClick = _this.props.onClick;


            onClick();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RefreshNodes, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                disabled = _props.disabled,
                className = _props.className,
                i18nRegistry = _props.i18nRegistry;

            var finalClassName = (0, _classnames2.default)(_defineProperty({}, className, className && className.length));

            return _react2.default.createElement(_reactUiComponents.IconButton, {
                className: finalClassName,
                disabled: disabled,
                onClick: this.handleClick,
                icon: 'sync',
                hoverStyle: 'clean',
                title: i18nRegistry.translate('refresh')
            });
        }
    }]);

    return RefreshNodes;
}(_react.PureComponent), _class2.propTypes = {
    node: _propTypes2.default.object,
    className: _propTypes2.default.string,
    onClick: _propTypes2.default.func.isRequired,
    disabled: _propTypes2.default.bool.isRequired,
    i18nRegistry: _propTypes2.default.object.isRequired
}, _temp2)) || _class);
exports.default = RefreshNodes;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(4);

var _style2 = _interopRequireDefault(_style);

var _reactUiComponents = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchInput = function SearchInput(_ref) {
  var onChange = _ref.onChange,
      searchTerm = _ref.searchTerm,
      placeholder = _ref.placeholder;

  var onEnterKey = function onEnterKey() {
    return onChange(searchTerm);
  };
  return _react2.default.createElement(
    'div',
    { className: _style2.default.toolbarSearch },
    _react2.default.createElement(_reactUiComponents.TextInput, { className: _style2.default.toolbarSearchInput, value: searchTerm, placeholder: placeholder, onChange: onChange, onEnterKey: onEnterKey }),
    searchTerm ? _react2.default.createElement(_reactUiComponents.IconButton, { icon: 'times', onClick: function onClick() {
        return onChange('');
      }, className: _style2.default.toolbarSearchClearButton }) : null
  );
};
exports.default = SearchInput;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
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
  return !!value && (type == 'object' || type == 'function');
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
  return !!value && typeof value == 'object';
}

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
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
//# sourceMappingURL=Plugin.js.map