import React, { Component } from 'react';
import DatePicker from "react-datepicker";

class InputDate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: new Date()
    }
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        // onChange={this.handleChange}
        inline
      />
    );
  }
}

export default InputDate;
