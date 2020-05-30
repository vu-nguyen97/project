import React, { Component } from 'react'

import { InputGroup, FormControl} from 'react-bootstrap';

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
    )
  }
}

export default Input
