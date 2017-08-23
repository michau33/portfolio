import React, { Component } from 'react';
import Header from '../Header/Header';
import './SkillFrontend.css';

export default class SkillFrontend extends Component {
    constructor( props ) {
        super( props );
    }


    render() {
        return(
            <div className="container" id="frontend-container">
                <div className="col-md-4" id="javascript-card">
                    <div className="rounded-circle" id="javascript-image" width="250" height="250"></div>
                    <h2>Javascript</h2>
                    <p className="lead">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula
                    ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                </div>
                <div className="col-md-4">

                </div>
                <div className="col-md-4">

                </div>
            </div>
        );
    }
}