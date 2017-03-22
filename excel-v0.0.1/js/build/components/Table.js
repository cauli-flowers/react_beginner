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
        key: '_sort',
        value: function _sort(e) {
            var column = e.target.cellIndex;
            var data = Array.from(this.state.data);
            data.sort(function (a, b) {
                return a[column] < b[column] ? 1 : -1;
            });
            this.setState({
                data: data,
                sortby: column
            });
        }
    }, {
        key: '_edit',
        value: function _edit(e) {
            this.setState({
                edit: {
                    row: parseInt(e.target.dataset.row),
                    cell: e.target.cellIndex
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'table',
                null,
                _react2.default.createElement(
                    'thead',
                    { onClick: this._sort.bind(this) },
                    _react2.default.createElement(
                        'tr',
                        null,
                        this.props.headers.map(function (title, idx) {
                            if (this.state.sortby === idx) {
                                title += ' *';
                            }
                            return _react2.default.createElement(
                                'th',
                                { key: idx },
                                title
                            );
                        }, this)
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    { onDoubleClick: this._edit.bind(this) },
                    this.state.data.map(function (row, rowidx) {
                        return _react2.default.createElement(
                            'tr',
                            { key: rowidx },
                            row.map(function (cell, idx) {
                                var content = cell;
                                var edit = this.state.edit;
                                if (edit && edit.row === rowidx && edit.cell === idx) {
                                    content = _react2.default.createElement(
                                        'form',
                                        null,
                                        _react2.default.createElement('input', { type: 'text', defaultValue: cell })
                                    );
                                }
                                return _react2.default.createElement(
                                    'td',
                                    { key: idx, 'data-row': rowidx },
                                    content
                                );
                            }, this)
                        );
                    }, this)
                )
            );
        }
    }]);

    return Table;
}(_react.Component);

// Table.propTypes = {
//     data: PropTypes.arrayOf(
//         PropTypes.string
//     )
// };

exports.default = Table;