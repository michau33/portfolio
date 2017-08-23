import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';
import { Link } from 'react-router-dom';
import './Skills.css';

export default class Skills extends Component {
    render() {
        return(
            <section id="Skills">
                <div className="container">
                    <div className="row">
                        <div className="cards">
                            
                            <Link to="frontend" style={{ textDecoration: 'none' }}>
                                <div className="col-sm-12 col-md-12 card" id="card-1">
                                    <TypeWriter typing={ 1 } fixed={false} minDelay={ 50 } maxDelay={ 200 }>
                                        <h1 className="card-title" id="frontend">F<br/>R<br/>O<br/>N<br/>T<br/>E<br/>N<br/>D<br/></h1>
                                    </TypeWriter>
                                </div>
                            </Link>

                            <Link to="gamedev" style={{ textDecoration: 'none' }}>
                                <div className="col-sm-12 col-md-12 card" id="card-2">
                                    <TypeWriter typing={ 1 } fixed={false} minDelay={ 50 } maxDelay={ 200 }>
                                        <h1 className="card-title" id="gamedev">G<br/>A<br/>M<br/>E<br/>D<br/>E<br/>V<br/></h1>
                                    </TypeWriter>
                                </div>  
                            </Link>
                        </div>
                    </div>
                </div>
            </section>    
        );
    }
}