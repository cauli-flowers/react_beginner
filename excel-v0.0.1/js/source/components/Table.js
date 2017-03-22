import React, {Component, PropTypes} from 'react';

class Table extends Component {
    constructor(props) {
        super(props) // TODO: 'this' is not allowed before super()
        this.state = {
            data: this.props.data,
            sortby: null,
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

    _edit() {
        
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
                                    return <td key={idx} data-row={rowidx}>{cell}</td>;
                                })
                            }</tr>
                        );
                    })}
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
