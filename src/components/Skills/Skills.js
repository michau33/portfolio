import React, { Component } from 'react';
import './Skills.css';

export default class Skills extends Component {
    render() {
        return(
            <section id="bg-skills">
                <div className="section-content">
                    <div className="container">
                        <h1>What do I do ?</h1>
                        <p className="lead">Many things.</p>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card-group">
                                    <div className="card">
                                        <div className="card-block">
                                            <h4 className="card-title">Witam</h4>
                                            <h6 className="card-subtitle">No witam witam</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>    
        );
    }
}