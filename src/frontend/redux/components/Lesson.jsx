import React, { Component } from 'react';

import SidebarLeft from './home/SidebarLeft';

class Lesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
         
    }
  }

  render() {

    return (
      <div>
        <div className="u-flex">
          <SidebarLeft />
        </div>
      </div>
    );
  }
}

export default Lesson;