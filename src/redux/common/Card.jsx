import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Card extends Component {
  render() {
    const { course } = this.props
    return (
      <div className="Card u-shadowLight u-marginBottomSmall">
        <div className="Card-bg u-bgLight">
          <div className="Card-bg-icon u-height100 u-width100 u-flex u-flexJustifyCenter u-flexAlignItemsCenter">
            <i className="fas fa-4x fa-book-reader u-textPlaceholder" />
          </div>
        </div>
        <div className="u-paddingSmall">
          <div className="u-fontWeightBolder">{course.name}</div>
          <div className="u-textXSmall">
            <div className="u-flex u-flexJustifyBetween u-flexAlignItemsCenter">
              <div className="u-flex">
                <div className="">{course.lessons.length} bài giảng</div>
                <div className="u-marginLeftSmall">{course.students.length} thành viên</div>
              </div>
              {
                this.props.is_open ?
                  <Button variant="outline-primary" size="sm">Xem thêm</Button>
                  :
                  <Button variant="outline-primary" size="sm">Tham gia</Button>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
