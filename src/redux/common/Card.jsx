import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Card extends Component {
  render() {
    return (
      <div className="Card u-shadowLight u-marginBottomSmall">
        {/* <div className="Card-wrapper u-height100 u-width100 u-border u-shadowLight
          u-flex u-flexCol u-flexJustifyBetween
        ">
          <div className="Card-wrapper-setting">
            <i className="fa fa-2x fa-ellipsis-v" />
          </div>
          <div className="u-paddingSmall">
            <div className="u-fontWeightBolder">Mang may tinh</div>
            <div className="u-textSmall">
              <div className="u-marginTopSmall">
                <span>Tạo ngày: </span>
                <span>22-5-2020</span>
              </div>
              <div>
                <span>Giảng viên: </span>
                <span>Odie Keeling</span>
              </div>
            </div>
            <div className="u-width100 u-marginTopSmall u-flex u-flexJustifyCenter">
              {
                this.props.is_open ?
                  <Button variant="outline-primary" size="sm">Xem khóa học</Button>
                  :
                  <Button variant="outline-primary" size="sm">Tham gia</Button>
              }
            </div>
          </div>
          <div className="u-borderTop u-textXSmall">
            <div className="u-paddingSmall">
              <div className="u-flex u-flexJustifyBetween Card-footer">
                <div className="">14 bài giảng</div>
                <div className="">20 thành viên</div>
                <div className="">0 bài thi</div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="Card-bg u-bgLight">
          <div className="Card-bg-icon u-height100 u-width100 u-flex u-flexJustifyCenter u-flexAlignItemsCenter">
            <i className="fas fa-4x fa-book-reader u-textPlaceholder" />
          </div>
        </div>
        <div className="u-paddingSmall">
          <div className="u-fontWeightBolder">Mang may tinh</div>
          <div className="u-textXSmall">
            <div className="u-flex u-flexJustifyBetween u-flexAlignItemsCenter">
              <div className="u-flex">
                <div className="">14 bài giảng</div>
                <div className="u-marginLeftSmall">20 thành viên</div>
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
