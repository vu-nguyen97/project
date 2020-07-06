import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import institutes from '../../../data/institutes.js';

const semesters = [
  '20192',
  '20191',
  '20182',
  '20181',
  '20172',
  '20171'
]

class CourseFilter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      is_show_semester_filter: false,
      is_show_institute_filter: false,
      // is_show_lecture_filter: false,
      is_show_status_filter: false,
    }
  }

  render() {
    const {
      is_show_semester_filter,
      is_show_institute_filter,
      // is_show_lecture_filter,
      is_show_status_filter,
    } = this.state;

    const { onFilter, filters } = this.props
    const {
      semester,
      institute,
      type
    } = filters;

    return (
      <div>
        {/* <div className="h3 u-textPrimary2 u-fontWeightBolder u-margin0 u-marginBottom">Các khóa học</div> */}
        <div className="u-flex u-flexAlignItemsCenter">
          <div className="h5 u-marginRight u-margin0">Lọc theo:</div>
          <Dropdown
            direction='down'
            isOpen={is_show_semester_filter}
            toggle={() => this.setState({
              is_show_semester_filter: !this.state.is_show_semester_filter
            })}
          >
            <DropdownToggle className="dropdown-toggle-light u-paddingLeftSmall u-paddingRightSmall" caret>
              <span>Kỳ học </span>
              <span className="u-textTruncate">{semester}</span>
            </DropdownToggle>
            <DropdownMenu>
              {
                semesters.map((semester, id) => {
                  let is_active = this.props.semester === semester ? true : false;
                  return (
                    <DropdownItem
                    key={id}
                    active={is_active}>
                    <div onClick={(value) => 
                      onFilter('semester', value.currentTarget.textContent)}
                    >
                      {semester}
                    </div>
                  </DropdownItem>
                  )
                })
              }
            </DropdownMenu>
          </Dropdown>

          <Dropdown
            className="u-marginLeftSmall"
            direction='down'
            isOpen={is_show_institute_filter}
            toggle={() => this.setState({
              is_show_institute_filter: !this.state.is_show_institute_filter
            })}
          >
            <DropdownToggle className="dropdown-toggle-light u-paddingLeftSmall u-paddingRightSmall" caret>
              <span>Viện</span>
              <span className="u-textTruncate">{institute}</span>
            </DropdownToggle>
            <DropdownMenu>
              {
                institutes.map((institute, id) => 
                  <DropdownItem key={id}>
                    <div onClick={(value) => 
                        onFilter('institute', value.currentTarget.textContent)}
                      >
                        {institute.name}
                      </div>
                  </DropdownItem>
                )
              }
            </DropdownMenu>
          </Dropdown>

          {/* <Dropdown
            className="u-marginLeftSmall"
            direction='down'
            isOpen={is_show_lecture_filter}
            toggle={() => this.setState({
              is_show_lecture_filter: !this.state.is_show_lecture_filter
            })}
          >
            <DropdownToggle className="dropdown-toggle-light u-paddingLeftSmall u-paddingRightSmall" caret>
              Giảng viên
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>20192</DropdownItem>
              <DropdownItem>20191</DropdownItem>
              <DropdownItem active={true}>20182</DropdownItem>
              <DropdownItem>20181</DropdownItem>
            </DropdownMenu>
          </Dropdown> */}

          <Dropdown
            className="u-marginLeftSmall"
            direction='down'
            isOpen={is_show_status_filter}
            toggle={() => this.setState({
              is_show_status_filter: !this.state.is_show_status_filter
            })}
          >
            <DropdownToggle className="dropdown-toggle-light u-paddingLeftSmall u-paddingRightSmall" caret>
              <span>Trạng thái</span>
              <span className="u-textTruncate">{type}</span>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Tất cả</DropdownItem>
              <DropdownItem>Kết thúc</DropdownItem>
              <DropdownItem>Đang học</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default CourseFilter;