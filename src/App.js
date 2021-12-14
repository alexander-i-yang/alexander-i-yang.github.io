import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Home from './Home.js';
import Footer from './Footer.js';
import Projects from './Projects.js';
import Content from './content.js';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="data-science">Data Science</Link>
                        <Link to="web-dev">Web Dev</Link>
                        <Link to="game-dev">Game Dev</Link>
                    </nav>
                    <div className="content">
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route exact path="data-science" element={<Projects content={Content.projects.dataScience}/>}/>
                            <Route exact path="web-dev" element={<Projects content={Content.projects.webDev}/>}/>
                            <Route exact path="game-dev" element={<Projects content={Content.projects.gameDev}/>}/>
                        </Routes>
                        <Footer />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;