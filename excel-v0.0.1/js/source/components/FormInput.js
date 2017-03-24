import React, {Component, PropTypes} from 'react';

class FormInput extends Component {
    constructor(props) {
        super(props);
    }

    getValue() {
        return 'value' in this.refs.input ? this.refs.input.value : this.refs.input.getValue();
    }

    render() {
        const common = {
            id: this.props.id,
            ref: 'input',
            defaultValue: this.props.defaultValue,
        };

        switch (this.props.type) {
            case 'number':
                return (<input {...common} type="number" defaultValue={this.props.defaultValue} />);
            case 'textarea':
                return <textarea {...common}/>;
            default:
                return <input {...common} type="text"/>;
        }
    }
}

FormInput.propTypes = {
    type: PropTypes.oneOf(['number', 'textarea', 'text']),
    id: PropTypes.string,
    options: PropTypes.array,
    defaultValue: PropTypes.any
};

export default FormInput
