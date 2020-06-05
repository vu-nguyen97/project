import React, { Component } from 'react'

import bg1 from '../../test/1.png';
import bg2 from '../../test/2.png';
import bg3 from '../../test/3.png';

export default class CourseList extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div className="CoureList u-textSmall">
        <div className="u-flex u-marginTop">
          <div className="CoureList-avatarCourse u-rounded">
            <img className="u-imgCover" src={bg1} alt="ảnh đại diện khóa học" />
          </div>
          <div className="CoureList-course u-paddingSmall u-flexGrow1">
            <div className="u-flex u-flexJustifyBetween">
              <div>
                <div className="u-fontWeightBolder u-textBase">Mạng máy tính</div>
                <div className="u-marginTopSmall u-textTruncate2">
                  Dolores maiores et natus ut.
                  Et commodi aperiam non nostrum ut.
                  Et et fuga praesentium dolorem voluptatibus at sit.
                  Aut debitis pariatur et ut voluptas eum.
                  Dignissimos et suscipit exercitationem ut dolores illum debitis voluptate.
                </div>
              </div>
              <div className="CoureList-course-icons u-flex u-flexJustifyEnd">
                <i className="u-marginRight fa fa-2x fa-bookmark-o" />
                <i className="u-marginRightSmall fa fa-2x fa-ellipsis-v" />
              </div>
            </div>
          </div>
        </div>
        <div className="u-flex u-marginTop">
          <div className="CoureList-avatarCourse u-rounded">
            <img className="u-imgCover" src={bg2} alt="ảnh đại diện khóa học" />
          </div>
          <div className="CoureList-course u-paddingSmall u-flexGrow1">
            <div className="u-flex u-flexJustifyBetween">
              <div className="u-fontWeightBolder u-textBase">Mạng máy tính</div>
              <div className="CoureList-course-icons u-flex u-flexJustifyEnd">
                <i className="u-marginRight fa fa-2x fa-bookmark-o" />
                <i className="u-marginRightSmall fa fa-2x fa-ellipsis-v" />
              </div>
            </div>
          </div>
        </div>
        <div className="u-flex u-marginTop">
          <div className="CoureList-avatarCourse u-rounded">
            <img className="u-imgCover" src={bg3} alt="ảnh đại diện khóa học" />
          </div>
          <div className="CoureList-course u-paddingSmall u-flexGrow1">
            <div className="u-flex u-flexJustifyBetween">
              <div className="u-fontWeightBolder u-textBase">Mạng máy tính</div>
              <div className="CoureList-course-icons u-flex u-flexJustifyEnd">
                <i className="u-marginRight fa fa-2x fa-bookmark-o" />
                <i className="u-marginRightSmall fa fa-2x fa-ellipsis-v" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
