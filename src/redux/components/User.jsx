import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class User extends React.Component {

  render() {
    const { isLogin } = this.props;

    return (
      <div>
        {
          isLogin ?
            <div>users</div>
            :
            <Redirect to="/login" />
        }
      </div>
    );
  }
}

User.defaultProps = {
 isLogin: false
};

User.propTypes = {
 isLogin: PropTypes.bool
};

export default User;