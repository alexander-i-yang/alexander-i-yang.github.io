import './App.css';
import React from 'react';
import ExtendedLogo from './images/ExtendedLogo.svg';
import Headshot from './images/Headshot.png';
import Skills from './Skills.js';

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
                        <div>A <b className="position">Web Developer</b> (Full Stack) creating sleek, Material-inspired,
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
