import React, { Component } from 'react';

import Input from '../common/Input';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
         
    }
  }

  render() {
    return (
      <div className="u-textCenter u-textLarge u-fontWeightBolder">
        <p>Login</p>
        <div className="row">
          <div className="col-4" />
          <div className="col-4">
            <Input placeholder="Username" />
            <Input placeholder="Password" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
