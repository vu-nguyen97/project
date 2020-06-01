import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Feedback from 'react-bootstrap/Feedback';

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
    const {
      // touchedEmail,
      // touchedPassword,
      // errors,
      handleBlur,
      handleChange,
      // values
    } = this.props;

    return (
      <div className="Register">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-3 col-2" />
            <div className="Register-wrapper col-lg-4 col-md-6 col-8
              u-paddingTop u-paddingBottom u-border u-shadowMedium u-roundedPill
            ">
              <p className="u-textCenter u-textLarge u-fontWeightBolder">Register</p>
              <div>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name='username' 
                    // value={values.password}
                    type="text" placeholder="Username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // isInvalid={touchedPassword && errors.password}
                  />
                  <Feedback type='invalid'>
                    {/* {errors.password} */}
                  </Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name='email' 
                    // value={values.password}
                    type="email" placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // isInvalid={touchedPassword && errors.password}
                  />
                  <Feedback type='invalid'>
                    {/* {errors.password} */}
                  </Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name='password' 
                    // value={values.password}
                    type="password" placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // isInvalid={touchedPassword && errors.password}
                  />
                  <Feedback type='invalid'>
                    {/* {errors.password} */}
                  </Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    name='confirm_password' 
                    // value={values.password}
                    type="password" placeholder="Confirm Password"
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
