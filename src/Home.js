import './App.css';
import React from 'react';
import ExtendedLogo from './ExtendedLogo.svg';
import Headshot from './Headshot.png';

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
                        <Mission position={"Data Scientist"} description={"focused on the interaction between humans, data, and AI"}/>
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


class Home extends React.Component {
    render() {
        return (
            <Landing/>
        );
    }

}

export default Home;
