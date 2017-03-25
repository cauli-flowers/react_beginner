'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormInput = require('./FormInput');

var _FormInput2 = _interopRequireDefault(_FormInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //

var Table = function (_Component) {
    _inherits(Table, _Component);

    function Table(props) {
        _classCallCheck(this, Table);

        // TODO: 'this' is not allowed before super()
        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this.state = {
            data: _this.props.data,
            sortby: null,
            edit: null
        };
        return _this;
    }

    _createClass(Table, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            console.log("componentWillReceiveProps");
            this.setState({ data: nextProps.data });
        }
    }, {
        key: '_sort',
        value: function _sort(key) {
            var data = Array.from(this.state.data);
            console.dirxml(data);
            data.sort(function (a, b) {
                return a[key] < b[key] ? 1 : -1;
            });
            this.setState({
                data: data,
                sortby: key
            });
        }
    }, {
        key: '_edit',
        value: function _edit(e) {
            this.setState({
                edit: {
                    row: parseInt(e.target.dataset.row),
                    cell: e.target.dataset.cell
                }
            });
        }
    }, {
        key: '_save',
        value: function _save(e) {
            e.preventDefault();
            var value = this.refs.input.getValue();
            var data = Array.from(this.state.data);
            data[this.state.edit.row][this.state.edit.cell] = value;
            console.dirxml(data);
            this.setState({
                data: data,
                edit: null
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        this.props.headers.map(function (item) {
                            if (_this2.state.sortby === item) {
                                item += ' *';
                            }
                            return _react2.default.createElement(
                                'th',
                                { key: item, onClick: _this2._sort.bind(_this2, item) },
                                item
                            );
                        }, this)
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    { onDoubleClick: this._edit.bind(this) },
                    this.state.data.map(function (item, rowidx) {
                        return _react2.default.createElement(
                            'tr',
                            { key: rowidx },
                            Object.keys(item).map(function (cell, idx) {
                                var content = item[cell];
                                var edit = this.state.edit;
                                if (edit && edit.row === rowidx && edit.cell === cell) {
                                    content = _react2.default.createElement(
                                        'form',
                                        { onSubmit: this._save.bind(this) },
                                        _react2.default.createElement(_FormInput2.default, { ref: 'input', defaultValue: item[cell] })
                                    );
                                }
                                return _react2.default.createElement(
                                    'td',
                                    { key: idx, 'data-row': rowidx, 'data-cell': cell },
                                    content
                                );
                            }, _this2)
                        );
                    }, this)
                )
            );
        }
    }]);

    return Table;
}(_react.Component);

Table.propTypes = {
    data: _react.PropTypes.arrayOf(_react.PropTypes.any)
};

exports.default = Table;