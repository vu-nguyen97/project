import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../redux/components/Home.jsx';
import User from '../redux/components/User.jsx';
import Login from '../redux/components/Login.jsx';

class App extends React.Component {
  render() {
    const { isLogin } = this.props;
    return (
      <Router>
        <div>
          <nav>
            {
              isLogin ?
                <ul>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/users">Users</Link></li>
                </ul>
                :
                <ul>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/login">login</Link></li>
                </ul>
            }
          </nav>

          <Switch>
            <Route exact path="/users" component={User} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

App.defaulfProps = {
  isLogin: false
}

App.propTypes = {
  isLogin: PropTypes.bool
}

export default App;
