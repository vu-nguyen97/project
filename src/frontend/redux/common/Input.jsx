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
      placeholder

    } = this.props;

    return (
      <div className={className}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder={placeholder}
          />
        </InputGroup>
      </div>
    );
  }
}

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Input;
