import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import Feedback from 'react-bootstrap/Feedback';

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
        <div className="container u-height100 u-flex u-flexAlignItemsCenter">
          <div className="u-width100 u-flex u-flexJustifyCenter u-flexAlignItemsCenter">
            <div className="Login-wrapper u-border u-shadowMedium">
              <div className="u-padding">
                <p className="u-textCenter u-textLarge u-fontWeightBolder">Đăng nhập</p>
                <div className="input-group u-marginTopSmall">
                  <span>
                    <i className="fa fa-user" />
                  </span>
                  <input type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="input-group u-marginTopSmall">
                  <span>
                    <i className="fa fa-lock" />
                  </span>
                  <input type="text" className="form-control" placeholder="Password" />
                </div>

                <Button className="u-width100 u-marginTopSmall">Đăng nhập</Button>
                <div className="Login-registerLink u-marginTopSmall u-textRight u-textSmall u-cursorPointer"
                  onClick={() => this.setState({
                    is_show_register_form: true
                  })}
                >
                  Tạo tài khoản
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
