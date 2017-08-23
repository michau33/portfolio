import React, { Component } from 'react';
import Header from '../Header/Header';
import './SkillGamedev.css';

export default class SkillGamedev extends Component {
    render() {
        return (
            <div id="SkillGamedev">
                <section id="tools">
                    <div className="container" id="gamedev-cards">
                        <div className="row">
                            <div class="" id="unity">Unity</div>
                            <div class="" id="unreal">Unreal</div>
                            <div class="" id="blender">Blender</div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}