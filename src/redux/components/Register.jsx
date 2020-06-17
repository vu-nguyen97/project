import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import Feedback from 'react-bootstrap/Feedback';

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
    // <Feedback type='invalid'>
    //   {/* {errors.password} */}
    // </Feedback>

    return (
      <div className="Register">
        <div className="container">
          <div className="u-width100 u-flex u-flexJustifyCenter u-flexAlignItemsCenter">
            <div className="Register-wrapper u-border u-shadowMedium">
              <div className="u-padding">
                <p className="u-textCenter u-textLarge u-fontWeightBolder">Đăng ký</p>
                <div className="input-group">
                  <span>
                    <i className="fa fa-user" />
                  </span>
                  <input type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="input-group u-marginTopSmall">
                  <span>
                    <i className="fa fa-envelope" />
                  </span>
                  <input type="text" className="form-control" placeholder="Email" />
                </div>
                <div className="input-group u-marginTopSmall">
                  <span>
                    <i className="fa fa-lock" />
                  </span>
                  <input type="text" className="form-control" placeholder="Password" />
                </div>
                 <div className="input-group u-marginTopSmall">
                  <span>
                    <i className="fa fa-lock" />
                  </span>
                  <input type="text" className="form-control" placeholder="Confirm password" />
                </div>

                <Button className="u-width100 u-marginTopSmall">Đăng ký</Button>
                <div className="Register-loginLink u-marginTopSmall u-textRight u-textSmall u-cursorPointer"
                  onClick={() => this.setState({
                    is_show_login_form: true
                  })}
                >
                  Đăng nhập
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
