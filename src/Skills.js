import './App.css';
import React from 'react';
import ExpandingButton from './ExpandingButton.js';
import Content from './content.json';

class Section extends React.Component {
    render() {
        let skillList = [];
        if (this.props.list) {
            skillList = this.props.list.map(e => <li key={e}>{e}</li>);
        }
        return (
            <div className="section">
                <span className="section-title">{this.props.title}</span>
                <ul>
                    {skillList}
                </ul>
            </div>
        );
    }
}

class SkillCard extends React.Component {
    render() {
        const t = this.props.title;
        //background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('landingpagepic.jpg');
        const titleWrapperStyle = {
            backgroundImage: `linear-gradient( rgba(0, 0, 0, ${this.props.darken}), rgba(0, 0, 0, ${this.props.darken}) ), url(\"${this.props.img}\")`
        };

        return (
            <div className="card-wrapper">
                <div className="card">
                    <div className="title-wrapper" style={titleWrapperStyle}>
                        {t}
                    </div>
                    <div className="card-content">
                        <Section title="Skills" list={this.props.skills}/>
                        <Section title="Projects/Experience" list={this.props.projects}/>
                    </div>
                    <div className="button-wrapper">
                        <ExpandingButton text="See More"/>
                    </div>
                </div>
            </div>
        );
    }
}

class Skills extends React.Component {
    render() {
        const skillData = Content.skills;
        let renderData = skillData.map(e => <SkillCard
            key={e.title}
            title={e.title}
            img={e.image}
            darken={e.darken}
            skills={e.skills}
            projects={e.projects}
        />);
        return (
            <div className="skills">{renderData}</div>
        );
    }
}

export default Skills;