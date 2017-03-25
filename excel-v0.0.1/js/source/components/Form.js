import React, {Component} from 'react';
import FormInput from './FormInput';

class Form extends Component {
    constructor(props) {
        super(props);
    }

    getData() {
        let data = {};
        this.props.fields.forEach(field =>
            data[field.id] = this.refs[field.id].getValue()
        );
        return data;
    }

    render() {
        return (
            <form className="Form">
                {
                    this.props.fields.map(field => {
                        const prefilled = this.props.initialData && this.props.initialData[field.id];
                        if (!this.props.readonly) {
                            return (
                                <div className="FormRow" key={field.id}>
                                    <label className="FormLabel" htmlFor={field.id}>{field.label}</label>
                                    <FormInput {...field} ref={field.id} defaultValue={prefilled} />
                                </div>
                            );
                        }
                        if (!prefilled) {
                            return null;
                        }
                    }, this)
                }
            </form>
        )
    }
}

export default Form
