import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import ReactRouter from '../../routes/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactRouter />
      </div>
    );
  }
}

export default App;