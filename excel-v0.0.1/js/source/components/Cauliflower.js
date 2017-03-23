import React, {Component, PropTypes} from 'react';
import Logo from './Logo';
import Table from './Table';
import Dialog from './Dialog';
import Form from './Form';

class Cauliflower extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            isOpen: false,
        };
    }

    _openDialog(e) {
        this.setState({
            isOpen: this.state.isOpen ? false : true,
        });
    }

    render() {
        return (
            <div>
                <Logo />
                <button onClick={this._openDialog.bind(this)}>add</button>
                <Table headers={this.props.headers} data={this.state.data} />
                {this.state.isOpen
                    ? <Dialog modal={true} header={'Test'} onAction={this._openDialog.bind(this)}>
                        <Form />
                      </Dialog>
                    : null
                }
            </div>
        );
    }
}

Cauliflower.propTypes = {

};

export default Cauliflower