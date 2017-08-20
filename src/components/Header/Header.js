import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return(
            <nav>
                <Link to="home"><span className="fa fa-home nav-icon"></span></Link>
                <div className="brand">    
                    <span className="typewriter">   
                        <TypeWriter typing={ 1 } fixed={true} minDelay={ 50 } maxDelay={ 300 }>
                            <span id="nav-title"><name id="name">MichalDev </name><g2> I'm coding web and making games sometimes.</g2></span>
                        </TypeWriter>
                    </span>
                </div>
                <div className="icons">
                        <a href="https://www.instagram.com/gamedevguy/"><span className="fa fa-instagram nav-icon"></span></a>
                        <a href="https://github.com"><span className="fa fa-github nav-icon"></span></a>
                        <a href="https://www.artstation.com/michaldev"><span className="fa fa-gamepad nav-icon"></span></a>
                </div>
            </nav>
        );
    }
}