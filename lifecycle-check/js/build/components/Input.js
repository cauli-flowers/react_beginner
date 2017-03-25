'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
    _inherits(Input, _Component);

    function Input(props) {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));
    }

    _createClass(Input, [{
        key: 'getValue',
        value: function getValue() {
            return 'value' in this.refs.input ? this.refs.input.value : this.refs.input.getValue();
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            console.log("Input: componentWillUpdate");
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log("Input: componentDidUpdate");
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log("Input: componentWillMount");
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log("Input: componentDidMount");
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log("Input: componentWillUnmount");
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            console.log("Input: componentWillReceiveProps");
            // this.setState({data: nextProps.data});
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(newProps, newState) {
            console.log("Input: shouldComponentUpdate");
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
                _react2.default.createElement('input', { ref: 'input', type: 'text', defaultValue: this.props.defaultValue }),
                _react2.default.createElement(
                    'button',
                    { onClick: this.props.onAction },
                    'add'
                )
            );
        }
    }]);

    return Input;
}(_react.Component);

exports.default = Input;