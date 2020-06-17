import React, { Component } from 'react';
import Rating from 'react-rating';

import Layout from './layout/Layout';
import SidebarRight from './layout/SidebarRight';
import CourseDetail from './CourseDetail';

import bg1 from '../test/1.png';
import bg2 from '../test/2.png';
import bg3 from '../test/3.png';

export default class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {
      is_show_course_detail: false
    }
  }

  render() {
    const { is_show_course_detail } = this.state;
    const rate = 4;//Fixme

    let course_main = null
    if (is_show_course_detail) {
      course_main = (
        <CourseDetail />
      );
    } else {
      course_main = (
        <div className="Course u-textSmall">
          <div className="u-flex u-shadowLight u-rounded">
            <div className="Course-avatarCourse u-rounded">
              <img className="u-imgCover" src={bg1} alt="ảnh đại diện khóa học" />
            </div>
            <div className="Course-main u-paddingSmall u-paddingLeft u-flexGrow1">
              <div className="u-flex u-flexJustifyBetween u-height100">
                <div className="Course-main-content">
                  <div onClick={() => this.setState({
                    is_show_course_detail: true
                  })}
                    className="Course-main-content-link u-fontWeightBolder u-textBase u-cursorPointer"
                  >
                    Mạng máy tính
                  </div>
                  <div className="u-marginTopSmall u-textTruncate2 u-textMuted">
                    Dolores maiores et natus ut.
                    Et commodi aperiam non nostrum ut.
                    Et et fuga praesentium dolorem voluptatibus at sit.
                    Aut debitis pariatur et ut voluptas eum.
                    Dignissimos et suscipit exercitationem ut dolores illum debitis voluptate.
                  </div>
                  <div className="u-marginTopSmall">
                    <span className="u-textMuted">Tạo bởi: </span><span>Rosendo Deckow MD</span>
                  </div>
                  <div className="u-flex">
                    <div className="Tag Tag--pill u-textXSmall u-marginTopSmall">
                      <span className="Course-main-tag1">20192</span>
                    </div>
                    <div className="Tag Tag--pill u-textXSmall u-marginTopSmall">
                      <span className="Course-main-tag2">CNTT&TT</span>
                    </div>
                  </div>
                </div>
                <div className="Course-main--right u-flex u-flexCol u-flexJustifyBetween">
                  <div className="u-flex u-flexJustifyEnd">
                    <i className="u-cursorPointer u-marginRight fa fa-2x fa-bookmark-o" />
                    <i className="u-cursorPointer u-marginRightSmall fa fa-2x fa-ellipsis-v" />
                  </div>
                  <div className="u-flex u-flexCol u-flexAlignItemsEnd u-textMuted u-textXSmall u-marginRightSmall u-marginBottomXSmall">
                    <div className="u-flex">
                      <Rating
                        // ref: http://dreyescat.github.io/react-rating/
                        initialRating={rate}
                        readonly={rate}
                        emptySymbol="fa fa-star-o"
                        fullSymbol="fa fa-star custom"
                      />
                      <div className="u-marginLeftXSmall">4.0</div>
                    </div>
                    <div>(1,234 rattings)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="u-flex u-marginTop u-shadowLight u-rounded">
            <div className="Course-avatarCourse u-rounded">
              <img className="u-imgCover" src={bg2} alt="ảnh đại diện khóa học" />
            </div>
            <div className="Course-main u-paddingLeft u-paddingSmall u-flexGrow1">
              <div className="u-flex u-flexJustifyBetween">
                <div className="u-fontWeightBolder u-textBase">Mạng máy tính</div>
                <div className="Course-main--right u-flex u-flexJustifyEnd">
                  <i className="u-marginRight fa fa-2x fa-bookmark-o" />
                  <i className="u-marginRightSmall fa fa-2x fa-ellipsis-v" />
                </div>
              </div>
            </div>
          </div>
          <div className="u-flex u-marginTop u-shadowLight u-rounded">
            <div className="Course-avatarCourse u-rounded">
              <img className="u-imgCover" src={bg3} alt="ảnh đại diện khóa học" />
            </div>
            <div className="Course-main u-paddingLeft u-paddingSmall u-flexGrow1">
              <div className="u-flex u-flexJustifyBetween">
                <div className="u-fontWeightBolder u-textBase">Mạng máy tính</div>
                <div className="Course-main--right u-flex u-flexJustifyEnd">
                  <i className="u-marginRight fa fa-2x fa-bookmark-o" />
                  <i className="u-marginRightSmall fa fa-2x fa-ellipsis-v" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const course_comp = (
      <div className="Layout-main u-flex u-marginTop">
        <div className="Layout-main-content u-padding u-paddingTop0">
          {course_main}
        </div>
        <SidebarRight />
      </div>
    );

    return (
      <Layout children={course_comp} />
    );
  }
}
