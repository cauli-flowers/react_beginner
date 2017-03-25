//

import React, {Component, PropTypes} from 'react';
import FormInput from './FormInput';

class Table extends Component {
    constructor(props: Object) {
        super(props) // TODO: 'this' is not allowed before super()
        this.state = {
            data: this.props.data,
            sortby: null,
            edit: null,
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps");
        this.setState({data: nextProps.data});
    }

    _sort(key) {
        let data = Array.from(this.state.data);
        console.dirxml(data)
        data.sort(function(a, b) {
            return a[key] < b[key] ? 1 : -1;
        });
        this.setState({
            data: data,
            sortby: key,
        });
    }

    _edit(e) {
        this.setState({
            edit: {
                row: parseInt(e.target.dataset.row),
                cell: e.target.dataset.cell,
            },
        });
    }

    _save(e) {
        e.preventDefault();
        const value = this.refs.input.getValue();
        let data = Array.from(this.state.data);
        data[this.state.edit.row][this.state.edit.cell] = value;
        console.dirxml(data)
        this.setState({
            data: data,
            edit: null,
        });
        localStorage.setItem('cauliflower', JSON.stringify(data));
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>{
                        this.props.headers.map(item => {
                            if (this.state.sortby === item) {
                                item += ' *';
                            }
                            return <th key={item} onClick={this._sort.bind(this, item)}>{item}</th>;
                        }, this)
                    }</tr>
                </thead>
                <tbody onDoubleClick={this._edit.bind(this)}>
                    {this.state.data.map((item, rowidx) => {
                        return (
                            <tr key={rowidx}>{
                                Object.keys(item).map(function(cell, idx) {
                                    let content = item[cell];
                                    const edit = this.state.edit;
                                    if (edit && edit.row === rowidx && edit.cell === cell) {
                                        content = (
                                            <form onSubmit={this._save.bind(this)}>
                                                <FormInput ref="input" defaultValue={item[cell]} />
                                            </form>
                                        );
                                    }
                                    return <td key={idx} data-row={rowidx} data-cell={cell}>{content}</td>;
                                }, this)
                            }</tr>
                        );
                    }, this)}
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.any
    ),
};

export default Table
