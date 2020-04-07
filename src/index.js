import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './frontend/redux/pages/App';
import './frontend/scss/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
