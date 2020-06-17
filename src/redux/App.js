import React, { Component } from 'react';
import ReactRouter from './index.js';

import '../scss/index.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
