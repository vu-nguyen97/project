import React, { Component } from 'react';

import DatePicker from '../../common/DatePicker.jsx';

export default class SidebarRight extends Component {
  render() {
    return (
      <div className="SidebarRight">
        <div className="SidebarRight-wrapper u-flex u-flexCol u-paddingSmall u-roundedPill u-marginRight">
          <div className="u-marginBottom u-textSmall">
            <div className="u-flex u-flexJustifyBetween u-flexAlignItemsCenter">
              <div className="u-fontWeightBolder u-textPrimary2">Thông báo mới</div>
              <div className="SidebarRight-viewMore u-textMuted u-cursorPointer u-textXSmall">Xem thêm</div>
            </div>
            <div className="SidebarRight-notifications u-padding u-bgWhite u-roundedPill u-marginTopSmall u-cursorPointer">
              <span className="u-fontWeightBolder">[ĐTĐH]</span>&nbsp;Lịch mở đăng ký xét tốt nghiệp đợt 20192-A 08h00 ngày 02/06/2020
            </div>
            <div className="SidebarRight-notifications u-padding u-bgWhite u-roundedPill u-marginTopSmall u-cursorPointer">
              <span className="u-fontWeightBolder">[ĐTĐH]</span>&nbsp;Kế hoạch thi điều kiện phân ngành cho sinh viên chương trình KS Chất lượng cao K63 13/06/2020
            </div>
          </div>
          <div className="u-marginBottomSmall">
            <DatePicker />
          </div>
          <div className="u-marginBottom">
            <div className="u-marginBottomSmall u-flex u-flexJustifyBetween u-flexAlignItemsCenter">
              <div className="u-fontWeightBolder u-textPrimary2">Sự kiện sắp tới</div>
              <div className="SidebarRight-viewMore u-textMuted u-cursorPointer u-textXSmall">Xem thêm</div>
            </div>
            <div className="u-paddingSmall u-bgWhite u-roundedPill u-marginBottomSmall u-textSmall u-flex">
              <div className="SidebarRight-event1 u-paddingXSmall u-rounded u-flex u-flexJustifyCenter u-flexAlignItemsCenter">
                <i className="SidebarRight-event1-icon fa fa-calendar-o fa-2x" />
              </div>
              <div className="u-height100 u-paddingSmall">test</div>
            </div>
            <div className="u-paddingSmall u-bgWhite u-roundedPill u-marginBottomSmall u-textSmall u-flex u-marginTopSmall">
              <div className="SidebarRight-event2 u-paddingXSmall u-rounded u-flex u-flexJustifyCenter u-flexAlignItemsCenter">
                <i className="SidebarRight-event2-icon fa fa-calendar-o fa-2x" />
              </div>
              <div className="u-height100 u-paddingSmall">test</div>
            </div>
            <div className="u-paddingSmall u-bgWhite u-roundedPill u-marginBottomSmall u-textSmall u-flex u-marginTopSmall">
              <div className="SidebarRight-event3 u-paddingXSmall u-rounded u-flex u-flexJustifyCenter u-flexAlignItemsCenter">
                <i className="SidebarRight-event3-icon fa fa-calendar-o fa-2x" />
              </div>
              <div className="u-height100 u-paddingSmall">test</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
