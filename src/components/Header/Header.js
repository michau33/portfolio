import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return(
            <nav>
                <Link to="/" style={{ textDecoration: 'none' }}><span className="fa fa-home nav-icon"></span></Link>
                <div className="brand">    
                    <span className="typewriter">   
                        <TypeWriter typing={ 1 } fixed={true} minDelay={ 50 } maxDelay={ 300 }>
                            <span id="nav-title"><name id="name">MichalDev </name><g2> I'm coding web and making games sometimes.</g2></span>
                        </TypeWriter>
                    </span>
                </div>
                <div className="icons">
                        <a target="_blank" href="https://www.instagram.com/gamedevguy/" style= {{ textDecoration: false }}>
                            <span className="fa fa-instagram nav-icon"></span>
                        </a>
                        <a target="_blank" href="https://github.com">
                            <span className="fa fa-github nav-icon"></span>
                        </a>
                        <a target="_blank" href="https://www.artstation.com/michaldev">
                            <span className="fa fa-gamepad nav-icon"></span>
                        </a>
                </div>
            </nav>
        );
    }
}