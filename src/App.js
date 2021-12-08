import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Home from './Home.js';
import About from './About.js';


class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="about">About</Link>
                    </nav>
                    {/*<div>
                        <nav>
                            <Link to="/">Home</Link>
                            <Link to="about">About</Link>
                        </nav>
                    </div>*/}
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="about" element={<About/>}/>
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App;