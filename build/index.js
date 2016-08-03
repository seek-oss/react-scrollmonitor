'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _scrollMonitor = require('./scrollMonitor');

var _scrollMonitor2 = _interopRequireDefault(_scrollMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollMonitor = function (_Component) {
  _inherits(ScrollMonitor, _Component);

  function ScrollMonitor() {
    _classCallCheck(this, ScrollMonitor);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ScrollMonitor).apply(this, arguments));
  }

  _createClass(ScrollMonitor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var visibilityChange = _props.visibilityChange;
      var stateChange = _props.stateChange;
      var enterViewport = _props.enterViewport;
      var fullyEnterViewport = _props.fullyEnterViewport;
      var exitViewport = _props.exitViewport;
      var partiallyExitViewport = _props.partiallyExitViewport;


      var monitor = _scrollMonitor2.default.create(this._component);

      if (visibilityChange) {
        monitor.visibilityChange(visibilityChange);
      }
      if (stateChange) {
        monitor.stateChange(stateChange);
      }
      if (enterViewport) {
        monitor.enterViewport(enterViewport);
      }
      if (fullyEnterViewport) {
        monitor.fullyEnterViewport(fullyEnterViewport);
      }
      if (exitViewport) {
        monitor.exitViewport(exitViewport);
      }
      if (partiallyExitViewport) {
        monitor.partiallyExitViewport(partiallyExitViewport);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;


      return (0, _react.cloneElement)(children, {
        ref: function ref(c) {
          _this2._component = c;
        }
      });
    }
  }]);

  return ScrollMonitor;
}(_react.Component);

ScrollMonitor.propTypes = {
  visibilityChange: _react.PropTypes.func,
  stateChange: _react.PropTypes.func,
  enterViewport: _react.PropTypes.func,
  fullyEnterViewport: _react.PropTypes.func,
  exitViewport: _react.PropTypes.func,
  partiallyExitViewport: _react.PropTypes.func,
  children: _react.PropTypes.node.isRequired
};
exports.default = ScrollMonitor;