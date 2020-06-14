import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// import institute from '../../../public/consts';

class CourseFilter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      is_show_semester_filter: false,
      is_show_institute_filter: false,
      is_show_lecture_filter: false,
      is_show_type_filter: false,
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
      is_show_lecture_filter,
      is_show_type_filter,
    } = this.state;
    return (
      <div>
        <div className="h3 u-textPrimary2 u-fontWeightBolder u-margin0">Các khóa học</div>
        <div className="u-marginTop u-flex u-flexAlignItemsCenter">
          <div className="h5 u-marginRight u-margin0">Lọc theo:</div>
          <Dropdown
            direction='down'
            isOpen={is_show_semester_filter}
            toggle={() => this.setState({
              is_show_semester_filter: !this.state.is_show_semester_filter
            })}
          >
            <DropdownToggle className="dropdown-toggle-light u-paddingLeftSmall u-paddingRightSmall" caret>
              Kỳ học
            </DropdownToggle>
            <DropdownMenu>
              {/* <DropdownItem divider /> */}
              <DropdownItem header>20192</DropdownItem>
              <DropdownItem>20191</DropdownItem>
              <DropdownItem active={true}>20182</DropdownItem>
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
              Viện
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>20192</DropdownItem>
              <DropdownItem>20191</DropdownItem>
              <DropdownItem active={true}>20182</DropdownItem>
              <DropdownItem>20181</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown
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
          </Dropdown>

          <Dropdown
            className="u-marginLeftSmall"
            direction='down'
            isOpen={is_show_type_filter}
            toggle={() => this.setState({
              is_show_type_filter: !this.state.is_show_type_filter
            })}
          >
            <DropdownToggle className="dropdown-toggle-light u-paddingLeftSmall u-paddingRightSmall" caret>
              Đánh giá
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>20192</DropdownItem>
              <DropdownItem>20191</DropdownItem>
              <DropdownItem active={true}>20182</DropdownItem>
              <DropdownItem>20181</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default CourseFilter;