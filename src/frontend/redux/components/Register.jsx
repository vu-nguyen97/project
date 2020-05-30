import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Input from '../common/Input';
import Login from './Login';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      is_show_login_form: false
    }
  }

  render() {
    const { is_show_login_form } = this.state;

    if (is_show_login_form) {
      return (
        <Login />
      );
    }

    return (
      <div className="Register">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-3 col-2" />
            <div className="Register-wrapper col-lg-4 col-md-6 col-8
              u-paddingTop u-paddingBottom u-border u-shadowMedium u-roundedPill
            ">
              <p className="u-textCenter u-textLarge u-fontWeightBolder">Register</p>
              <div className="u-paddingLeftXSmall">Username</div>
              <Input placeholder="Username" />
              <div className="u-paddingLeftXSmall">Email</div>
              <Input placeholder="Email" />
              <div className="u-paddingLeftXSmall">Password</div>
              <Input placeholder="Password" />
              <div className="u-paddingLeftXSmall">Confirm Password</div>
              <Input placeholder="Confirm Password" />
              <div className="u-flex u-flexAlignItemsCenter u-flexJustifyAround">
                <Button size="sm" className="u-paddingLeft u-paddingRight">Register</Button>
                <Button
                  className="Register-loginBtn u-paddingLeft u-paddingRight u-border"
                  onClick={() => this.setState({
                    is_show_login_form: true
                  })}
                  size="sm"
                  variant="light"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
