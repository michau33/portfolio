import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';
import './Skills.css';

export default class Skills extends Component {
    render() {
        return(
            <section id="bg-skills">
                <div className="cards">
                    <div className="card" id="card-1">
                        <TypeWriter typing={ 1 } fixed={false} minDelay={ 50 } maxDelay={ 300 }>
                            <h1 className="card-title" id="frontend">F<br/>R<br/>O<br/>N<br/>T<br/>E<br/>N<br/>D<br/></h1>
                        </TypeWriter>
                    </div>
                    <div className="card" id="card-2">
                        <TypeWriter typing={ 1 } fixed={false} minDelay={ 50 } maxDelay={ 300 }>
                            <h1 className="card-title" id="gamedev">G<br/>A<br/>M<br/>E<br/>D<br/>E<br/>V<br/></h1>
                        </TypeWriter>
                    </div>  
                </div>
            </section>    
        );
    }
}