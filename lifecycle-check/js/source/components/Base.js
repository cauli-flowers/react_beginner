import React, {Component} from 'react';
import Input from './Input';
import Table from './Table';

class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
        };
    }

    add() {
        const value = this.refs.input.getValue();
        let data = Array.from(this.state.data);
        data.unshift(value);
        this.setState({
            data: data,
        });
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
                <Table data={this.state.data} />
            </div>
        )
    }
}

export default Base
