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
      <div className="DatePicker">
        <DatePicker
          selected={this.state.startDate}
          // onChange={this.handleChange}
          inline
        />
      </div>
    );
  }
}

export default InputDate;
