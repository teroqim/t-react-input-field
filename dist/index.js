(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["InputField"] = factory(require("react"));
	else
		root["InputField"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PasswordField = exports.InputField = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputField = function (_React$Component) {
	  _inherits(InputField, _React$Component);

	  function InputField(props) {
	    _classCallCheck(this, InputField);

	    var _this = _possibleConstructorReturn(this, (InputField.__proto__ || Object.getPrototypeOf(InputField)).call(this, props));

	    _this.state = {
	      showInfoBubble: false,
	      showInfoBox: false,
	      value: ''
	    };
	    return _this;
	  }

	  _createClass(InputField, [{
	    key: 'getValue',
	    value: function getValue() {
	      return this.state.value;
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.setState({ value: '' });
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur() {
	      this.setState({ showInfoBubble: false, showInfoBox: false });
	      if (this.props.onBlur) {
	        this.props.onBlur();
	      }
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(e) {
	      this.setState({ value: e.target.value });
	      if (this.props.onChange) {
	        this.props.onChange(e.target.value);
	      }
	    }
	  }, {
	    key: 'onFocus',
	    value: function onFocus() {
	      this.setState({ showInfoBubble: true });
	      if (this.props.onFocus) {
	        this.props.onFocus();
	      }
	    }
	  }, {
	    key: 'onKeyPress',
	    value: function onKeyPress(e) {
	      if (e.key === 'Enter' && this.props.onEnter) {
	        if (this.props.onEnter) {
	          this.props.onEnter(e.target.value);
	        }
	      }
	    }
	  }, {
	    key: 'onMouseOverInfoBubble',
	    value: function onMouseOverInfoBubble() {
	      this.setState({ showInfoBox: true });
	    }
	  }, {
	    key: 'onMouseOutInfoBubble',
	    value: function onMouseOutInfoBubble() {
	      this.setState({ showInfoBox: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var type = 'text';
	      if (this.props.password) {
	        type = 'password';
	      }

	      var inputClassName = this.props.inputClassName;
	      if (this.props.showError) {
	        inputClassName += ' err';
	      }

	      var info = null;
	      if (this.props.infoBubbleText && this.state.showInfoBubble) {
	        info = _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement('div', { className: 'info-bubble',
	            onMouseOver: this.onMouseOverInfoBubble.bind(this),
	            onMouseOut: this.onMouseOutInfoBubble.bind(this) }),
	          this.state.showInfoBox ? _react2.default.createElement(
	            'div',
	            { className: 'info-box' },
	            this.props.infoBubbleText
	          ) : null
	        );
	      }

	      var errorBubble = null;
	      if (this.props.errorBubbleText && this.state.showErrorBubble) {
	        errorBubble = _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement('div', { className: 'error-bubble',
	            onMouseOver: this.onMouseOverErrorBubble.bind(this),
	            onMouseOut: this.onMouseOutErrorBubble.bind(this) }),
	          this.state.showErrorBox ? _react2.default.createElement(
	            'div',
	            { className: 'error-box' },
	            this.props.errorBubbleText
	          ) : null
	        );
	      }

	      var wrapperClass = 'input-field-wrapper';
	      if (this.props.wrapperClass) {
	        wrapperClass += ' ' + this.props.wrapperClass;
	      }

	      var preText = null;
	      if (this.props.preText) {
	        preText = _react2.default.createElement(
	          'div',
	          { className: 'pre-text' },
	          this.props.preText
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: wrapperClass },
	        _react2.default.createElement('input', {
	          autoComplete: this.props.autoComplete || 'off',
	          className: inputClassName,
	          onBlur: this.onBlur.bind(this),
	          onChange: this.onChange.bind(this),
	          onFocus: this.onFocus.bind(this),
	          onKeyPress: this.onKeyPress.bind(this),
	          placeholder: this.props.placeholder,
	          ref: function ref(input) {
	            return _this2.input = input;
	          },
	          type: type,
	          value: this.state.value
	        }),
	        info,
	        errorBubble,
	        preText
	      );
	    }
	  }, {
	    key: 'setFocus',
	    value: function setFocus() {
	      this.input.focus();
	    }
	  }]);

	  return InputField;
	}(_react2.default.Component);

	InputField.propTypes = {
	  showError: _react2.default.PropTypes.bool,
	  password: _react2.default.PropTypes.bool,
	  className: _react2.default.PropTypes.string,
	  onEnter: _react2.default.PropTypes.func,
	  infoBubbleText: _react2.default.PropTypes.string,
	  preText: _react2.default.PropTypes.string
	};

	var PasswordField = function (_React$Component2) {
	  _inherits(PasswordField, _React$Component2);

	  function PasswordField() {
	    _classCallCheck(this, PasswordField);

	    return _possibleConstructorReturn(this, (PasswordField.__proto__ || Object.getPrototypeOf(PasswordField)).apply(this, arguments));
	  }

	  _createClass(PasswordField, [{
	    key: 'render',
	    value: function render() {
	      var type = 'text';
	      if (this.props.password) {
	        type = 'password';
	      }
	      return _react2.default.createElement(InputField, _extends({}, this.props, {
	        password: true
	      }));
	    }
	  }]);

	  return PasswordField;
	}(_react2.default.Component);

	exports.default = InputField;
	exports.InputField = InputField;
	exports.PasswordField = PasswordField;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;