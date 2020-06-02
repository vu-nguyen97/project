import React from 'react';
import ReactDOM from 'react-dom';

import App from './frontend/redux/pages/App';

import './frontend/scss/index.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
