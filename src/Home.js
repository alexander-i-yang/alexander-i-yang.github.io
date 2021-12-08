import './App.css';
import React from 'react';
import logo from './logo.svg';

class Landing extends React.Component {
    render() {
        return (
            <div className="landing">

            </div>
        );
    }
}


class Home extends React.Component {
    render() {
        return (
            <div className="App">
            <Landing />
            </div>

        );
    }

}

export default Home;
