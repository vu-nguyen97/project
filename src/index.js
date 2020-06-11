import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './frontend/redux/store';

import App from './frontend/redux/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
