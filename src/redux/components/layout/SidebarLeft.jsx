import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SidebarLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    // Fixme
		const data_fake = [
			'Bài 1','Bài 1','Bài 1','Bài 1','Bài 1','Bài 1','Bài 1','Bài 1','Bài 1','Bài 1'
		]

    return (
      <div className="SidebarLeft u-paddingLeftSmall">
        <div className="SidebarLeft-nav u-paddingSmall u-border">
          <div>Trang chủ</div>
          <div className="u-cursorPointer">
            <i className="fa fa-angle-down u-marginRightSmall" />Khóa học của tôi
          </div>
          <div className="SidebarLeft-courses u-marginLeft">
            <Link to="/lesson">Mang may tinh</Link>
            {
              data_fake.map((course, i) =>
                <div key={i} className="u-marginLeft">{course}</div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
