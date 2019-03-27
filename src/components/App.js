import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Storeform from './store-form.js';
import Login from './login.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
