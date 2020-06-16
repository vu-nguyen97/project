import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';

import Card from '../../common/Card';

export default class ListCourse extends Component {
  render() {
    const responsive = {
      0: { items: 1 },
      1024: { items: 3 },
    }

    return (
      <div>
        <AliceCarousel
          ref={(el) => (this.Carousel = el)}
          responsive={responsive}
          mouseTrackingEnabled
          buttonsDisabled={true}
          dotsDisabled
        >
          <div className="u-paddingLeftSmall u-paddingRightSmall">
            <Card is_open={true} />
          </div>
          <div className="u-paddingLeftSmall u-paddingRightSmall">
            <Card />
          </div>
          <div className="u-paddingLeftSmall u-paddingRightSmall">
            <Card />
          </div>
          <div className="u-paddingLeftSmall u-paddingRightSmall">
            <Card />
          </div>
          <div className="u-paddingLeftSmall u-paddingRightSmall">
            <Card />
          </div>
          <div className="u-paddingLeftSmall u-paddingRightSmall">
            <Card />
          </div>
        </AliceCarousel>
        <div onClick={() => this.Carousel.slideNext()}
          className="ViewMore u-cursorPointer u-textXSmall u-textRight"
        >
          Xem thêm >>
        </div>
      </div>
    )
  }
}
