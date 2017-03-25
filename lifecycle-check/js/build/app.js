'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Base = require('./components/Base');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = ['a', 'b', 'c'];

_reactDom2.default.render(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Base2.default, { data: data })
), document.getElementById('app'));