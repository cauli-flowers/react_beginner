'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Table = require('./components/Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headers = ['title', 'year', 'price'];

_reactDom2.default.render(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Logo2.default, null),
    _react2.default.createElement(_Table2.default, { headers: headers })
), document.getElementById('app'));