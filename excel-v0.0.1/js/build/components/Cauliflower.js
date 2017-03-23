'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Logo = require('./Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _Table = require('./Table');

var _Table2 = _interopRequireDefault(_Table);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cauliflower = function (_Component) {
    _inherits(Cauliflower, _Component);

    function Cauliflower(props) {
        _classCallCheck(this, Cauliflower);

        var _this = _possibleConstructorReturn(this, (Cauliflower.__proto__ || Object.getPrototypeOf(Cauliflower)).call(this, props));

        _this.state = {
            data: _this.props.data,
            isOpen: false
        };
        return _this;
    }

    _createClass(Cauliflower, [{
        key: '_openDialog',
        value: function _openDialog(e) {
            this.setState({
                isOpen: this.state.isOpen ? false : true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Logo2.default, null),
                _react2.default.createElement(
                    'button',
                    { onClick: this._openDialog.bind(this) },
                    'add'
                ),
                _react2.default.createElement(_Table2.default, { headers: this.props.headers, data: this.state.data }),
                this.state.isOpen ? _react2.default.createElement(
                    _Dialog2.default,
                    { modal: true, header: 'Test', onAction: this._openDialog.bind(this) },
                    _react2.default.createElement(_Form2.default, null)
                ) : null
            );
        }
    }]);

    return Cauliflower;
}(_react.Component);

Cauliflower.propTypes = {};

exports.default = Cauliflower;