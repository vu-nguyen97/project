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
      <div className="test">
        <p>Login</p>
        <Input />
      </div>
    );
  }
}

export default Login;
