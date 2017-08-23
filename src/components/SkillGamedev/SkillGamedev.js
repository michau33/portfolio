import React, { Component } from 'react';
import Header from '../Header/Header';
import './SkillGamedev.css';

export default class SkillGamedev extends Component {
    render() {
        return (
            <section id="SkillGamedev">
                <div className="cards" id="gamedev-cards">
                    
                    <div className="card gamedev-card" id="unity-card">
                        <h1 className="card-title" id="unity-title">Unity</h1>
                        <div className="logo-image" id="unity-logo"></div>
                        <p className="text-description" id="unity-description">
                            Bootstrap was used for efficiently create this page overall styling along with <strong>CSS Flexbox</strong>
                        </p>
                    </div>

                    <div className="card gamedev-card" id="unity-card">
                        <h1 className="card-title" id="unity-title">Unreal Engine</h1>
                        <div className="logo-image" id="unreal-logo"></div>
                        <p className="text-description" id="unity-description">
                            Bootstrap was used for efficiently create this page overall styling along with <strong>CSS Flexbox</strong>
                        </p>
                    </div>

                    <div className="card gamedev-card" id="unity-card">
                        <h1 className="card-title" id="unity-title">Unity</h1>
                        <div className="logo-image" id="unity-logo"></div>
                        <p className="text-description" id="unity-description">
                            Bootstrap was used for efficiently create this page overall styling along with <strong>CSS Flexbox</strong>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}