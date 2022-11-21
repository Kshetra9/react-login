

import React, {Component} from 'react';
import Header from './components/Header/header.js'
import Login from './components/Login/login.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Login/>
      </div>
    );
  }
}

export default App;
