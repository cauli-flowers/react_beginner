import React, {Component, PropTypes} from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {
    constructor(props) {
        super(props) // TODO: 'this' is not allowed before super()
        // this.state = {
        //     headers: props.headers,
        //     data: props.data,
        // };
    }

    render() {
        return (
            <table>
                <TableHeader initialData={this.props.headers} />
                <TableBody initialData={this.props.data} />
            </table>
        );
    }
}

export default Table
