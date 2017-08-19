import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return(
            <nav>
                <Link to="home"><span className="fa fa-home"></span></Link>
                <div className="brand">    
                    <span className="type">   
                        <TypeWriter typing={ 1 } fixed={true} minDelay={ 50 } maxDelay={ 300 }>
                            <strong><name className="name">MichalDev</name> I'm coding web and making games sometimes.</strong>
                        </TypeWriter>
                    </span>
                </div>
                <div className="icons">
                        <a href="https://www.instagram.com/gamedevguy/"><span className="fa fa-instagram"></span></a>
                        <a href="https://github.com"><span className="fa fa-github"></span></a>
                        <a href="https://www.artstation.com/michaldev"><span className="fa fa-gamepad"></span></a>
                </div>
            </nav>
        );
    }
}