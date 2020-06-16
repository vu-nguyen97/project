import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import institutes from '../../../public/consts';

class CourseFilter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      is_show_semester_filter: false,
      is_show_institute_filter: false,
      // is_show_lecture_filter: false,
      is_show_status_filter: false,
      filters: {
        semester: null,
        institute: null,
        lecture: null,
        type: null
      }
    }
  }

  render() {
    const {
      is_show_semester_filter,
      is_show_institute_filter,
      // is_show_lecture_filter,
      is_show_status_filter,
    } = this.state;

    const active_semester = 20192; //Fixme

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
              <span className="u-textTruncate">{active_semester}</span>
            </DropdownToggle>
            <DropdownMenu>
              {/* <DropdownItem divider /> */}
              <DropdownItem active={true}>20192</DropdownItem>
              <DropdownItem>20191</DropdownItem>
              <DropdownItem>20182</DropdownItem>
              <DropdownItem>20181</DropdownItem>
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
            </DropdownToggle>
            <DropdownMenu>
              {
                institutes.map(entitute => 
                  <DropdownItem key={entitute.id}>{entitute.name}</DropdownItem>
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