import React, {Component, PropTypes} from 'react';

class TableHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <thead onClick={this._sort}>
                <tr>{
                    this.props.initialData.map(function(title, idx) {
                        return <th key={idx}>{title}</th>;
                    })
                }</tr>
            </thead>
        );
    }
}

export default TableHeader
