import React, {Component, PropTypes} from 'react';

class Dialog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.modal ? 'Dialog DialogModal' : 'Dialog'}>
                <div className={this.props.modal ? 'DialogModalWrap' : null}>
                    <div className="DialogHeader">{this.props.header}</div>
                    <div className="DialogBody">{this.props.children}</div>
                    <div className="DialogFooter">
                        <button onClick={this.props.onAction}>close</button>
                    </div>
                </div>
            </div>
        );
    }
}

Dialog.propTypes = {
    header: PropTypes.string.isRequired,
    modal: PropTypes.bool,
};

Dialog.defaultProps = {
    modal: false,
};

export default Dialog
