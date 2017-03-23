'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Cauliflower = require('./components/Cauliflower');

var _Cauliflower2 = _interopRequireDefault(_Cauliflower);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headers = ['title', 'year', 'price'];
var data = [['sample1', '2017', '1,000'], ['sample2', '2016', '4,000'], ['sample3', '2015', '8,000']];

_reactDom2.default.render(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Cauliflower2.default, { headers: headers, data: data })
), document.getElementById('app'));