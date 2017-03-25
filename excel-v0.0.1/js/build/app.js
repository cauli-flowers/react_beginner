'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Cauliflower = require('./components/Cauliflower');

var _Cauliflower2 = _interopRequireDefault(_Cauliflower);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headers = ['title', 'year', 'price'];
// const data = [
//     {title: 'sample1', year: '2017', price: '1000'},
//     {title: 'sample2', year: '2015', price: '5000'},
//     {title: 'sample3', year: '2016', price: '8000'},
// ];

var data = JSON.parse(localStorage.getItem('cauliflower'));

if (!data) {
    data = [];
}

_reactDom2.default.render(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Cauliflower2.default, { headers: headers, data: data })
), document.getElementById('app'));