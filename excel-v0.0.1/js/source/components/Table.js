import React, {Component, PropTypes} from 'react';
import TableHeader from './TableHeader';

class Table extends Component {
    constructor(props) {
        super(props) // TODO: 'this' is not allowed before super()
        this.state = {
            headers: props.headers,
        };
    }

    render() {
        return (
            <table>
                <TableHeader initialData={this.props.headers} />
            </table>
        );
    }
}

export default Table
