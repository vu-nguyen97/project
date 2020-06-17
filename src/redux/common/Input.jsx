import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl} from 'react-bootstrap';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    const { 
      className,
      placeholder,
      size
    } = this.props;

    return (
      <div className={className}>
        <InputGroup className="mb-3 u-textBase" size={size}>
          <FormControl
            className="InputGroup"
            placeholder={placeholder}
          />
        </InputGroup>
      </div>
    );
  }
}

Input.defaultProps = {
  size: ''
}

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
}

export default Input;
