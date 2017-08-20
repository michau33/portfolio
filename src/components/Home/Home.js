import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';
import { Link } from 'react-router-dom';
import './Home.css'

export default class Home extends Component {
    render() {
        return (    
            <div className="Home">
                <section className="bg-cover" id="first-section">
                    <div className="container title">
                        <TypeWriter typing={ 1 } fixed={true} minDelay={ 50 } maxDelay={ 300 }>
                            <h1 className="style" id="main-title"><g>Welcome</g> <g1>MichalDev</g1><br/><span className="fa fa-code"></span></h1>
                        </TypeWriter>
                        <Link to="skills">
                            <a href="#"><button className="btn pulse" id="btn-more">MORE</button></a>
                        </Link>
                    </div>  
                </section> 
            </div>
        );  
    }
}