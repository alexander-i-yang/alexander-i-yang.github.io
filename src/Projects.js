import './App.css';
import React from 'react';
import Content from './content.js';

class Number extends React.Component {
    render() {
        return(
            <div className="big-number-container">
                <div className="big-number">
                    {this.props.number}
                </div>
                <div className="big-number-description">
                    {this.props.description}
                </div>
            </div>
        );
    }
}

class Numbers extends React.Component {
    render() {
        let numbers = "";
        if (this.props.numbers) {
            numbers = this.props.numbers.map(e =>
                <div className="number-row" key={e}>
                    {e.map(ee =>
                        <Number key={ee} number={ee.number} description={ee.description} />
                    )}
                </div>
            );
        }

        return (
            <div className="numbers">
                {numbers}
            </div>
        );
    }
}

class Project extends React.Component {
    render() {
        const data = this.props.content;

        return (
            <div className="project">
                <span className="title">
                    {data.title}
                </span>
                <div className="header">
                    <span className="flavor">
                        {data.flavor}
                    </span>
                    <span className="date">
                        {data.date}
                    </span>
                </div>
                <div className="description">
                    {data.description}
                </div>
                <Numbers numbers = {data.numbers} />
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