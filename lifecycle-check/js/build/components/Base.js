'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Table = require('./Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base = function (_Component) {
    _inherits(Base, _Component);

    function Base(props) {
        _classCallCheck(this, Base);

        var _this = _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).call(this, props));

        _this.state = {
            data: props.data
        };
        return _this;
    }

    _createClass(Base, [{
        key: 'add',
        value: function add() {
            var value = this.refs.input.getValue();
            var data = Array.from(this.state.data);
            data.unshift(value);
            this.setState({
                data: data
            });
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            console.log("Base: componentWillUpdate");
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log("Base: componentDidUpdate");
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log("Base: componentWillMount");
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log("Base: componentDidMount");
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log("Base: componentWillUnmount");
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            console.log("Base: componentWillReceiveProps");
            // this.setState({data: nextProps.data});
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(newProps, newState) {
            console.log("Base: shouldComponentUpdate");
            console.dirxml(newProps);
            console.dirxml(newState);
            return true;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Input2.default, { ref: 'input', defaultValue: 'aiueo', onAction: this.add.bind(this) }),
                _react2.default.createElement(_Table2.default, { data: this.state.data })
            );
        }
    }]);

    return Base;
}(_react.Component);

exports.default = Base;