import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header_old.css';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="home"><a className="navbar-brand" href="/">Michał Szkopiński</a></Link>
                    </div>
                    <div className="nav-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><span className="fa fa-instagram"></span></li>
                            <li><span className="fa fa-github"></span></li>
                        </ul>
                    </div>
                </div>
            </nav>
                
            </div>
        );
    }
}