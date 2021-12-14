import './App.css';
import React from 'react';
import Content from './content.js';
import {Icon, ICON_TYPES, IconButton} from './Icon.js';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="top">
                    <div className="left">
                        <h1>Contact</h1>
                        <div className="icons">
                            <IconButton href={Content.global.email} icon={
                                <Icon type={ICON_TYPES.material} id="mail"/>
                            }/>
                            <IconButton href={Content.global.github} icon={
                                <Icon type={ICON_TYPES.custom} id="github"/>
                            }/>
                            <IconButton href={Content.global["linkedIn"]} icon={
                                <Icon type={ICON_TYPES.custom} id="linkedIn"/>
                            }/>
                        </div>
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