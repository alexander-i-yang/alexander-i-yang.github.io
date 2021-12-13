import './App.css';
import React from 'react';
import Content from './content.js';

const ICON_TYPES = {
    "material": Symbol("material"),
    "custom": Symbol("custom"),
};

class IconButton extends React.Component {
    render() {
        return (
            <a className="icon-button" href={this.props.href}>
                {this.props.icon}
            </a>
        );
    }
}

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
                return(
                    <span>
                        {/*<img src={} alt="Github"/>*/}
                        {Content.icons[this.props.id]}
                    </span>
                );
            default:
                return (this.props.id);
        }
    }
}

export {Icon, ICON_TYPES, IconButton};