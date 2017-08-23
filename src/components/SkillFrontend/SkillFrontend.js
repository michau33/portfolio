import React, { Component } from 'react';
import './SkillFrontend.css';

export default class SkillFrontend extends Component {
    constructor( props ) {
        super( props );
    }


    render() {
        return(
            <div className="SkillFrontend">
                <section id="frontend-background">
                    <div className="container" id="frontend-container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-3 frontend-card" id="js-card">
                                <div className="rounded-circle" id="js-image" width="250" height="250"></div>
                                <h2>Javascript</h2>
                                <p className="lead">Most fucked up language.</p>
                                <a href="#js-section" role="button" className="btn btn-primary btn-lg" id="js-button">More</a>
                            </div>
                            <div className="col-sm-12 col-lg-3 frontend-card" id="reactjs-card">
                                <div className="rounded-circle" id="reactjs-image" width="250" height="250"></div>
                                <h2>Reactjs</h2>
                                <p className="lead">Most fucked up framework.</p>
                                <a href="#reactjs-section" role="button" className="btn btn-primary btn-lg" id="reactjs-button">More</a>
                            </div>
                            <div className="col-sm-12 col-lg-3 frontend-card" id="bootstrap-card">
                                <div className="rounded-circle" id="bootstrap-image" width="250" height="250"></div>
                                <h2>Bootstrap</h2>
                                <p className="lead">Most fucked up css framework.</p>
                                <a href="#bootstrap-section" role="button" className="btn btn-primary btn-lg" id="bootstrap-button">More</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="js-section">
                    <div className="container">
                        <div className="row feature-content">
                                <div className="col-md-6 col-sm-12">
                                    <div id="js-header-image"></div>
                                </div>
                                <div className="col-md-5 col-sm-12 col-md-offset-1">
                                    <h6>Wubba Lubba Dub Dub.</h6>
                                    <p className="lead">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula
                                ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                                </div>                       
                        </div>
                    </div>
                </section>

                <section id="reactjs-section">
                    <div className="container">
                        <div className="row feature-content">
                                <div className="col-md-6 col-sm-12">
                                    <h6>Reactjs powered this page bitch !</h6>
                                    <p className="lead">I met react relatively recently.</p>
                                </div>        
                                <div className="col-md-5 col-sm-12 col-md-offset-1">
                                    <div id="reactjs-header-image"></div>
                                </div>               
                        </div>
                    </div>
                </section>

                <section id="bootstrap-section">
                    <div className="container">
                        <div className="row feature-content">
                                <div className="col-md-6 col-sm-12">
                                    <div id="bootstrap-header-image"></div>
                                </div>   

                                <div className="col-md-5 col-sm-12 col-md-offset-1">
                                    <h6>Bootstrap used for styling this page !</h6>
                                    <p className="lead">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula
                                ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                                </div>                    
                        </div>
                    </div>
                </section>


            </div>
        );
    }
}