import React, { Component } from 'react';
import './Skills.css';

export default class Skills extends Component {
    render() {
        return(
            <section className="bg-skills" id="second-section">
                <div className="skill-container">
                    <div className="skill">
                        <h4 className="skill-title">Javascript</h4>
                        <div className="skill-logo js"></div>
                    </div>
                    <div className="skill">
                        <h4 className="skill-title">Unity</h4>
                        <div className="skill-logo unity"></div>
                    </div>
                    <div className="skill">
                        <h4 className="skill-title">Blender</h4>
                        <div className="skill-logo blender"></div>
                    </div>
                </div>
            </section>     
        );
    }
}