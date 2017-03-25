import React, {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    getValue() {
        return 'value' in this.refs.input ? this.refs.input.value : this.refs.input.getValue();
    }

    componentWillUpdate() {
        console.log("Input: componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("Input: componentDidUpdate");
    }

    componentWillMount() {
        console.log("Input: componentWillMount");
    }

    componentDidMount() {
        console.log("Input: componentDidMount");
    }

    componentWillUnmount() {
        console.log("Input: componentWillUnmount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Input: componentWillReceiveProps");
        // this.setState({data: nextProps.data});
    }

    shouldComponentUpdate(newProps, newState) {
        console.log("Input: shouldComponentUpdate");
        console.dirxml(newProps);
        console.dirxml(newState);
        return true;
    }

    render() {
        return (
            <div>
                <input ref="input" type="text" defaultValue={this.props.defaultValue} />
                <button onClick={this.props.onAction}>add</button>
            </div>
        )
    }
}

export default Input
