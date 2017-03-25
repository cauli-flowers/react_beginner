import React, {Component, PropTypes} from 'react';
import Logo from './Logo';
import Table from './Table';
import Dialog from './Dialog';
import Form from './Form';

class Cauliflower extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            isOpen: false,
        };
    }

    _openDialog() {
        this.setState({
            isOpen: this.state.isOpen ? false : true,
        });
    }

    _add() {
        let data = Array.from(this.state.data);
        let inputData = this.refs.form.getData();

        data.unshift(inputData);
        console.dirxml(data)
        this.setState({
            data: data,
            isOpen: false,
        });
    }

    _onDataChange(data) {
        console.log("change");
        this.setState({
            data: data,
        });
    }

    _showState() {
        console.dirxml(this.state)
    }

    render() {
        return (
            <div>
                <Logo />
                <button onClick={this._openDialog.bind(this)}>add</button>
                <button onClick={this._showState.bind(this)}>show</button>
                <Table headers={this.props.headers} data={this.state.data} onDataChange={this._onDataChange.bind(this)} />
                {this.state.isOpen
                    ? <Dialog modal={true} header={'Test'} onAction={this._add.bind(this)}>
                        <Form
                            fields={[
                                {label: 'title', type: 'text', id: 'title'},
                                {label: 'year', type: 'number', id: 'year'},
                                {label: 'price', type: 'number', id: 'price'},
                            ]}
                            ref="form"
                            initialData={{title: 'default', year: 2017, price: 0}} />
                      </Dialog>
                    : null
                }
            </div>
        );
    }
}

Cauliflower.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.any
    ),
    isOpen: PropTypes.bool,
};

export default Cauliflower
