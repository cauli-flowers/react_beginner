import React, {Component, PropTypes} from 'react';

class TableBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tbody>
                <tr>{
                    this.props.initialData.map(function(row, rowidx) {
                        return (
                            row.map(function(cell, idx) {
                                return <td key={idx} data-row={rowidx}>{cell}</td>;
                            })
                        );
                    })
                }</tr>
            </tbody>
        );
    }
}

export default TableBody
