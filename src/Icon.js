import './App.css';
import React from 'react';

const ICON_TYPES = {
    "material": Symbol("material"),
    "custom": Symbol("custom"),
};

class Icon extends React.Component {
    render() {
        switch (this.props.type) {
            case ICON_TYPES.material:
                return (
                    <span className="material-icons-sharp">
                        {this.props.id}
                    </span>
                );
            case ICON_TYPES.custom:
                return(this.props.id);
            default:
                return(this.props.id);
        }
    }
}

export {Icon, ICON_TYPES};