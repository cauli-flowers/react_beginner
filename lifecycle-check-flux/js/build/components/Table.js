'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CRUDStore = require('../flux/CRUDStore');

var _CRUDStore2 = _interopRequireDefault(_CRUDStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_Component) {
    _inherits(Table, _Component);

    function Table(props) {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this.state = {
            data: _CRUDStore2.default.getData()
        };
        _CRUDStore2.default.addListener('change', function () {
            console.log('Table: change');
            _this.setState({
                data: _CRUDStore2.default.getData()
            });
        });
        return _this;
    }

    _createClass(Table, [{
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            console.log("Table: componentWillUpdate");
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log("Table: componentDidUpdate");
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log("Table: componentWillMount");
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log("Table: componentDidMount");
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log("Table: componentWillUnmount");
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            console.log("Table: componentWillReceiveProps");
            // this.setState({data: nextProps.data});
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(newProps, newState) {
            console.log("Table: shouldComponentUpdate");
            console.dirxml(newProps);
            console.dirxml(newState);
            return true;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(
                    'tbody',
                    null,
                    this.state.data.map(function (item, rowidx) {
                        return _react2.default.createElement(
                            'tr',
                            { key: rowidx },
                            _react2.default.createElement(
                                'td',
                                null,
                                item
                            )
                        );
                    })
                )
            );
        }
    }]);

    return Table;
}(_react.Component);

exports.default = Table;