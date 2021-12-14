import './App.css';
import React from 'react';
import Content from './content.js';

class Projects extends React.Component {
    render() {
        return(
            <div className="projects">
                <div className="header">
                    {this.props.content}
                </div>
                <div className="showcase">
                    Bottom
                </div>
            </div>
        );
    }
}

export default Projects;