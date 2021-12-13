import './App.css';
import React from 'react';
import Content from './content.json';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="top">
                    <div className="left">
                        <h1>Contact</h1>
                    </div>
                    <div className="right">
                        <h1>Navigation</h1>
                    </div>
                </div>
                <div className="bottom">
                    This website was made from scratch with React.js and Sass.
                    Open source on <a href={Content.global.siteRepoURL}>Github</a>.
                </div>
            </footer>
        );
    }
}

export default Footer;