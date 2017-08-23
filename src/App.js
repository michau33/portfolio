import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css'; 

import Footer from './components/Footer/Footer.js';
import SkillFrontend from './components/SkillFrontend/SkillFrontend.js';
import SkillGamedev from './components/SkillGamedev/SkillGamedev.js';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Skills from './components/Skills/Skills.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={ Home }></Route>
        <Route path="/skills" component={ Skills }></Route>
        <Route path="/frontend" component={ SkillFrontend }></Route>
        <Route path="/gamedev" component={ SkillGamedev }></Route>
      </div>
    );
  }
}

export default App;
