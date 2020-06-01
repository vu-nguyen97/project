import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Feedback from 'react-bootstrap/Feedback';

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
    const {
      // touchedEmail,
      // touchedPassword,
      // errors,
      handleBlur,
      handleChange,
      // values
    } = this.props;

    return (
      <div className="Login">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-3 col-2" />
            <div className="Login-wrapper col-lg-4 col-md-6 col-8
              u-paddingTop u-paddingBottom u-border u-shadowMedium u-roundedPill
            ">
              <p className="u-textCenter u-textLarge u-fontWeightBolder">Login</p>
              <div>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name='username'
                    // value={values.email}
                    type="text" placeholder="Enter username . . ."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // isInvalid={touchedEmail && errors.email}
                  />
                  <Feedback type='invalid'>
                    {/* {errors.email} */}
                  </Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name='password' 
                    // value={values.password}
                    type="password" placeholder="Enter your password . . ."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // isInvalid={touchedPassword && errors.password}
                  />
                  <Feedback type='invalid'>
                    {/* {errors.password} */}
                  </Feedback>
                </Form.Group>
              </div>

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
