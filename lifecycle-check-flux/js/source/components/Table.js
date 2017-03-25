import React, {Component} from 'react';
import CRUDStore from '../flux/CRUDStore';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: CRUDStore.getData(),
        };
        CRUDStore.addListener('change', () => {
            console.log('Table: change');
            this.setState({
                data: CRUDStore.getData(),
            });
        });
    }

    componentWillUpdate() {
        console.log("Table: componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("Table: componentDidUpdate");
    }

    componentWillMount() {
        console.log("Table: componentWillMount");
    }

    componentDidMount() {
        console.log("Table: componentDidMount");
    }

    componentWillUnmount() {
        console.log("Table: componentWillUnmount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Table: componentWillReceiveProps");
        // this.setState({data: nextProps.data});
    }

    shouldComponentUpdate(newProps, newState) {
        console.log("Table: shouldComponentUpdate");
        console.dirxml(newProps);
        console.dirxml(newState);
        return true;
    }

    render() {
        return (
            <table>
                <tbody>
                    {this.state.data.map((item, rowidx) => {
                        return (
                            <tr key={rowidx}>
                                <td>{item}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    }
}

export default Table
