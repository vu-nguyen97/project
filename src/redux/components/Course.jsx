import React, { Component } from 'react';
import Rating from 'react-rating';

import Layout from './layout/Layout';
import SidebarRight from './layout/SidebarRight';
import CourseDetail from './CourseDetail';

import bg0 from '../test/0.png';
import bg1 from '../test/1.png';
import bg2 from '../test/2.png';

import courses from '../../data/courses.json';

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

    let my_course = courses.filter(course => {
      const { students } = course;

      let has_student = false;
      students.map(student => {
        if(student.name === "Nguyễn Văn Vũ") {
          has_student = true
        }
      return null;
      })
      return has_student;
    });

    let course_main = null
    if (is_show_course_detail) {
      course_main = (
        <CourseDetail />
      );
    } else {
      course_main = (
        <div className="Course u-textSmall">
          {
            my_course.map((course, id) => {
              const bg_id = id % 3;
              let bg = `bg${bg_id}`;
              if (bg === 'bg0') {
                bg = bg0
              } else if (bg === 'bg1') {
                bg = bg1
              } else {
                bg = bg2
              }
              
              return (
                <div key={course.id} className="u-flex u-shadowLight u-rounded u-marginBottom">
                <div className="Course-avatarCourse u-rounded">
                  <img className="u-imgCover" src={bg} alt="ảnh đại diện khóa học" />
                </div>
                <div className="Course-main u-paddingSmall u-paddingLeft u-flexGrow1">
                  <div className="u-flex u-flexJustifyBetween u-height100">
                    <div className="Course-main-content">
                      <div onClick={() => this.setState({
                        is_show_course_detail: true
                      })}
                        className="Course-main-content-link u-fontWeightBolder u-textBase u-cursorPointer"
                      >
                        {course.name}
                      </div>
                      <div className="u-marginTopSmall u-textTruncate2 u-textMuted">
                        {course.descriptions}
                      </div>
                      <div className="u-marginTopSmall">
                        <span className="u-textMuted">Tạo bởi: </span><span>{course.lecturer}</span>
                      </div>
                      <div className="u-flex">
                        <div className="Tag Tag--pill u-textXSmall u-marginTopSmall">
                          <span className="Course-main-tag1">{course.semester}</span>
                        </div>
                        <div className="Tag Tag--pill u-textXSmall u-marginTopSmall">
                          <span className="Course-main-tag2">
                            CNTT&TT
                            {/* Fixme */}
                          </span>
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
              )
            })
          }
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
