import './App.css';
import React from 'react';

class ExpandingButton extends  React.Component {
    render() {
        return(
            <a className={`expanding-button`} href={this.props.link}>
                {this.props.text}
            </a>
        );
    }
}

export default ExpandingButton;