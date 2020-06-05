import React, { Component } from 'react';

import Rating from 'react-rating';

import bg1 from '../../test/1.png';
import bg2 from '../../test/2.png';
import bg3 from '../../test/3.png';

export default class CourseList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rate: 4
    }
  }

  render() {
    const { rate } = this.state;

    return (
      <div className="CoureList u-textSmall">
        <div className="u-flex u-marginTop u-shadowLight u-rounded">
          <div className="CoureList-avatarCourse u-rounded">
            <img className="u-imgCover" src={bg1} alt="ảnh đại diện khóa học" />
          </div>
          <div className="CoureList-content u-paddingSmall u-paddingLeft u-flexGrow1">
            <div className="u-flex u-flexJustifyBetween u-height100">
              <div>
                <div className="u-fontWeightBolder u-textBase">Mạng máy tính</div>
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
                    <span className="CoureList-content-tag1">20192</span>
                  </div>
                  <div className="Tag Tag--pill u-textXSmall u-marginTopSmall">
                    <span className="CoureList-content-tag2">VCNTTVTT</span>
                  </div>
                </div>
              </div>
              <div className="CoureList-content--right u-flex u-flexCol u-flexJustifyBetween">
                <div className="u-flex u-flexJustifyEnd">
                  <i className="u-marginRight fa fa-2x fa-bookmark-o" />
                  <i className="u-marginRightSmall fa fa-2x fa-ellipsis-v" />
                </div>
                <div className="u-flex u-flexCol u-flexAlignItemsEnd u-textMuted u-textXSmall u-marginRightSmall u-marginBottomXSmall">
                  <div className="u-flex">
                    <Rating
                      // ref: http://dreyescat.github.io/react-rating/
                      initialRating={rate}
                      readonly={rate}
                      emptySymbol="fa fa-star-o"
                      fullSymbol="fa fa-star custom"
                      onChange={rate => this.setState({ rate })}
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
          <div className="CoureList-avatarCourse u-rounded">
            <img className="u-imgCover" src={bg2} alt="ảnh đại diện khóa học" />
          </div>
          <div className="CoureList-content u-paddingLeft u-paddingSmall u-flexGrow1">
            <div className="u-flex u-flexJustifyBetween">
              <div className="u-fontWeightBolder u-textBase">Mạng máy tính</div>
              <div className="CoureList-content--right u-flex u-flexJustifyEnd">
                <i className="u-marginRight fa fa-2x fa-bookmark-o" />
                <i className="u-marginRightSmall fa fa-2x fa-ellipsis-v" />
              </div>
            </div>
          </div>
        </div>
        <div className="u-flex u-marginTop u-shadowLight u-rounded">
          <div className="CoureList-avatarCourse u-rounded">
            <img className="u-imgCover" src={bg3} alt="ảnh đại diện khóa học" />
          </div>
          <div className="CoureList-content u-paddingLeft u-paddingSmall u-flexGrow1">
            <div className="u-flex u-flexJustifyBetween">
              <div className="u-fontWeightBolder u-textBase">Mạng máy tính</div>
              <div className="CoureList-content--right u-flex u-flexJustifyEnd">
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
