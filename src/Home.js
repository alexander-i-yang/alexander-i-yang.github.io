import './App.css';
import React from 'react';
import ExtendedLogo from './images/ExtendedLogo.svg';
import Headshot from './images/Headshot.png';
import Content from './content.json';

import ExpandingButton from './ExpandingButton.js';

const Mission = ({position, description}) => {
    return (
        <div>
            A <b className="position">{position}</b> {description}
        </div>
    );
};

class Landing extends React.Component {
    render() {
        return (
            <div className="landing">
                <div className="left">
                    <div className="hi">
                        Hi, I'm
                    </div>
                    <img className="extended-logo" src={ExtendedLogo} alt="Alex Yang"/>
                    <div className="mission-statements">
                        <Mission position={"Data Scientist"}
                                 description={"focused on the interaction between humans, data, and AI"}/>
                        <div>A <b className="position">Full Stack Web Developer</b> creating sleek, Material-inspired,
                            React-powered websites
                        </div>
                        <div>A <b className="position">Game Developer</b> making razor-tight pixel puzzle-platformers
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img className="headshot" src={Headshot} alt="Alex Yang"/>
                </div>
            </div>
        );
    }
}

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
            // backgroundImage: `url(\"${this.props.img}\")`
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
        console.log(renderData);
        return (
            <div className="skills">{renderData}</div>
        );
    }
}

class Home extends React.Component {
    render() {
        return (
            <>
                <Landing/>
                <Skills/>
            </>
        );
    }

}

export default Home;
