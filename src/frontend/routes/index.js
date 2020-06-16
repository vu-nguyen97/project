import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../redux/components/home/Home';
import User from '../redux/components/User';
import Login from '../redux/components/Login';
import Course from '../redux/components/Course';
import Lesson from '../redux/components/Lesson.jsx';


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
                <Link to="/login" />
                // <ul>
                //   <li><Link to="/home" /></li>
                //   <li><Link to="/login" /></li>
                // </ul>
            }
          </nav>

          <Switch>
            <Route exact path="/users" component={User} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/course" component={Course} />
            <Route exact path="/lesson" component={Lesson} />
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
