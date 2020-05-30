import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Input from '../common/Input';
import Register from './Register';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      is_show_register_form: false
    }
  }

  render() {
    const { is_show_register_form } = this.state;

    if (is_show_register_form) {
      return (
        <Register />
      );
    }

    return (
      <div className="Login">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-3 col-2" />
            <div className="Login-wrapper col-lg-4 col-md-6 col-8
              u-paddingTop u-paddingBottom u-border u-shadowMedium u-roundedPill
            ">
              <p className="u-textCenter u-textLarge u-fontWeightBolder">Login</p>
              <div className="u-paddingLeftXSmall">Username</div>
              <Input placeholder="Username" />
              <div className="u-paddingLeftXSmall">Password</div>
              <Input placeholder="Password" />
              <div className="u-flex u-flexAlignItemsCenter u-flexJustifyAround">
                <Button
                  className="Login-registerBtn u-paddingLeft u-paddingRight u-border"
                  onClick={() => this.setState({
                    is_show_register_form: true
                  })}
                  size="sm"
                  variant="light"
                >
                  Register
                </Button>
                <Button size="sm" className="u-paddingLeft u-paddingRight">Login</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
