import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Section from './components/Section'
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App">
      <Header/>
      <Section/>
    </div>
    </Router>
  );
}
}

export default App;
