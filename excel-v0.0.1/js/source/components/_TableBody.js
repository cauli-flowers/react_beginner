import React, {Component, PropTypes} from 'react';

class TableBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.initialData,
        }
    }

    render() {
        return (
            <tbody>
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
        );
    }
}

TableBody.propTypes = {
    initialData: PropTypes.arrayOf(
        PropTypes.string
    )
};

export default TableBody
