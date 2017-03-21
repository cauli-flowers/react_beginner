import React, {Component, PropTypes} from 'react';

class TableHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <thead>
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
