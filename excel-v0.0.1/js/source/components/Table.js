import React, {Component, PropTypes} from 'react';

class Table extends Component {
    constructor(props) {
        super(props) // TODO: 'this' is not allowed before super()
        this.state = {
            data: this.props.data,
            sortby: null,
            edit: null,
        };
    }

    _sort(e) {
        const column = e.target.cellIndex;
        let data = Array.from(this.state.data);
        data.sort(function(a, b) {
            return a[column] < b[column] ? 1 : -1;
        });
        this.setState({
            data: data,
            sortby: column,
        });
    }

    _edit(e) {
        this.setState({
            edit: {
                row: parseInt(e.target.dataset.row),
                cell: e.target.cellIndex,
            }
        });
    }

    render() {
        return (
            <table>
                <thead onClick={this._sort.bind(this)}>
                    <tr>{
                        this.props.headers.map(function(title, idx) {
                            if (this.state.sortby === idx) {
                                title += ' *';
                            }
                            return <th key={idx}>{title}</th>;
                        }, this)
                    }</tr>
                </thead>
                <tbody onDoubleClick={this._edit.bind(this)}>
                    {this.state.data.map(function(row, rowidx) {
                        return (
                            <tr key={rowidx}>{
                                row.map(function(cell, idx) {
                                    let content = cell;
                                    const edit = this.state.edit;
                                    if (edit && edit.row === rowidx && edit.cell === idx) {
                                        content = (
                                            <form>
                                                <input type="text" defaultValue={cell} />
                                            </form>
                                        );
                                    }
                                    return <td key={idx} data-row={rowidx}>{content}</td>;
                                }, this)
                            }</tr>
                        );
                    }, this)}
                </tbody>
            </table>
        );
    }
}

// Table.propTypes = {
//     data: PropTypes.arrayOf(
//         PropTypes.string
//     )
// };

export default Table
