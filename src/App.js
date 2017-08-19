import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Skills from './components/Skills/Skills.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/home" exact={ true } component={ Home }></Route>
        <Route path="/skills" component={ Skills }></Route>
      </div>
    );
  }
}

export default App;
