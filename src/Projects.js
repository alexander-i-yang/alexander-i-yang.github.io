import './App.css';
import React from 'react';
import Content from './content.js';

class Project extends React.Component {
    render() {
        const data = this.props.content;

        return (
            <div className="project">
                <div className="header">
                    <span className="title">
                        {data.title}
                    </span>
                    <span className="date">
                        {data.date}
                    </span>
                </div>
                <span className="flavor">
                    {data.flavor}
                </span>
                <div className="description">
                    {data.description}
                </div>
            </div>
        );
    }
}

class Projects extends React.Component {
    render() {
        const data = this.props.content;

        const bgIgStyle = {
            // backgroundImage: `url("${data.}")`
            backgroundImage: `url("/images/Data Science Cardsplash.png")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100vw',
        };

        let projectList = [];
        if (data.projectList) {
            projectList = data.projectList.map(e => <Project key={e} content={e}/>);
        }

        return (
            <div className="project-page" /*style={bgIgStyle}*/>
                <div className="header">
                    <div className="title">
                        {data.title}
                    </div>
                    <div className="flavor">
                        {data.flavor}
                    </div>
                </div>
                <div className="projects">
                    {projectList}
                </div>
            </div>
        );
    }
}

export default Projects;