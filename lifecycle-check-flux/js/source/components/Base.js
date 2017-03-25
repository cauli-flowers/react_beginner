import React, {Component} from 'react';
import Input from './Input';
import Table from './Table';
import CRUDStore from '../flux/CRUDStore';
import CRUDActions from '../flux/CRUDActions';

class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: CRUDStore.getData(),
        };
        CRUDStore.addListener('change', () => {
            this.setState({
                data: CRUDStore.getData(),
            });
        });
    }

    add() {
        CRUDActions.create(this.refs.input.getValue());
        // const value = this.refs.input.getValue();
        // let data = Array.from(this.state.data);
        // data.unshift(value);
        // CRUDStore.setData(data);
    }

    componentWillUpdate() {
        console.log("Base: componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("Base: componentDidUpdate");
    }

    componentWillMount() {
        console.log("Base: componentWillMount");
    }

    componentDidMount() {
        console.log("Base: componentDidMount");
    }

    componentWillUnmount() {
        console.log("Base: componentWillUnmount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Base: componentWillReceiveProps");
        // this.setState({data: nextProps.data});
    }

    shouldComponentUpdate(newProps, newState) {
        console.log("Base: shouldComponentUpdate");
        console.dirxml(newProps);
        console.dirxml(newState);
        return true;
    }

    render() {
        return (
            <div>
                <Input ref="input" defaultValue={'aiueo'} onAction={this.add.bind(this)} />
                <Table />
            </div>
        )
    }
}

export default Base
