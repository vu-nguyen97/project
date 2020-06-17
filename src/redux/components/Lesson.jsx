import React, { Component } from 'react';
import YouTube from 'react-youtube';
import ClassNames from 'classnames';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';

import avatar from '../test/default-avatar.png';

const tabs = {
  home: {
    id: 0,
    icon: 'home',
    name: 'Home',
    link_page: '/home'
  },
  lesson: {
    id: 1,
    icon: 'book',
    name: 'Lesson',
    link_page: '/lesson'
  },
  group: {
    id: 2,
    icon: 'group',
    name: 'Group',
    link_page: '/lesson'
  },
  chat: {
    id: 3,
    icon: 'comments',
    name: 'Chat',
    link_page: '/lesson'
  }
};

const options = [
  { value: 'lesson1', label: 'Tuần 1: Giới thiệu' },
  { value: 'lesson2', label: 'Tuần 2: Chương 1' },
  { value: 'lesson3', label: 'Tuần 3: Chương 2' },
];

class Lesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active_tab_id: tabs.lesson.id,
      selectedOption: null,
      key: 'content'
    }
  }

  _onReady(event) {
    event.target.pauseVideo();
  }

  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  setKey = key => {
    this.setState({
      key
    })
  }

  render() {
    const { active_tab_id, selectedOption, key } = this.state;
    const opts = {
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        // autoplay: 1,
      },
    };

    return (
      <div className="Lesson">
        <div className="Lesson-header u-flex u-flexAlignItemsCenter u-borderBottom">
          <div className="Lesson-header-left u-height100">
            <div className="u-flex u-flexAlignItemsCenter u-height100 u-flexJustifyCenter u-fontWeightBolder">BK</div>
          </div>
          <div className="Lesson-header-main u-borderRight u-borderLeft u-height100 u-flex u-flexJustifyCenter u-flexAlignItemsCenter">
            <Select
              className="Lesson-header-main-select"
              value={selectedOption}
              // defaultInputValue={options[0].label}
              onChange={this.handleChange}
              options={options}
            />
          </div>
          <div className="Lesson-header-right u-height100">
            <div className="u-flex u-flexAlignItemsCenter u-height100 u-flexJustifyCenter">
              <span>Giảng viên:&nbsp;</span><span>Kyra Hessel</span>
            </div>
          </div>
        </div>
        <div className="u-flex">
          <div className="SidebarLeft u-borderRight">
            {
              Object.values(tabs).map(tab => (
                <Link to={tab.link_page}>
                  <div key={tab.id} className={ClassNames(
                    'SidebarLeft-tab u-paddingSmall u-textCenter u-cursorPointer u-textXSmall',
                    { 'u-bgMedium': active_tab_id === tab.id ? true : false }
                  )}>
                    <div>
                      <i className={ClassNames(
                        'fa fa-2x',
                        `fa-${tab.icon}`,
                        { 'fa--active': active_tab_id === tab.id ? true : false }
                      )} />
                    </div>
                    <div 
                      className={ClassNames(
                        'tabName u-textMuted',
                        { 'active': active_tab_id === tab.id ? true : false }
                      )}
                    >
                      {tab.name}
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
          <div className="Lesson-main u-flexGrow1 u-borderRight u-flex u-flexCol">
            <div className="Lesson-video">
              <YouTube containerClassName="Lesson-video-container" videoId="cNwEVYkx2Kk" opts={opts} onReady={this._onReady} />
            </div>
            {/* <div className="Lesson-content u-paddingSmall u-flex">
              <div className="Lesson-content-tabs u-paddingSmall u-roundedPill u-bgMedium u-marginRight">Nội dung bài học</div>
              <div className="Lesson-content-tabs">Bài thi</div>
              <div className="Lesson-content-tabs">Nộp bài</div>
            </div> */}
            <Tabs
              className="u-borderTop"
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => this.setKey(k)}
            >
              <Tab eventKey="content" title="Nội dung bài học">
                <div className="u-height100 u-width100 u-padding u-textSmall">
                  <div className="u-textBase u-marginBottomSmall">Hướng dẫn:</div>
                    <div className="u-paddingLeft u-paddingRight">
                      <div>Veniam occaecati eos. Temporibus dolorum libero culpa iure optio et eum. Quibusdam quam et molestias est eaque et harum dolores quia.</div>
                      {/* <div>Veniam occaecati eos. Temporibus dolorum libero culpa iure optio et eum. Quibusdam quam et molestias est eaque et harum dolores quia.</div>
                      <div>Veniam occaecati eos. Temporibus dolorum libero culpa iure optio et eum. Quibusdam quam et molestias est eaque et harum dolores quia.</div>
                      <div>Veniam occaecati eos. Temporibus dolorum libero culpa iure optio et eum. Quibusdam quam et molestias est eaque et harum dolores quia.</div> */}
                    </div>
                </div>
              </Tab>
              <Tab eventKey="exam" title="Bài tập">
                <div className="u-width100 u-height100 u-textCenter u-marginTop">Chưa có bài tập.</div>
              </Tab>
              {/* <Tab eventKey="file" title="Nộp bài">
                <div className="u-width100 u-height100 u-textCenter u-marginTop">Chưa phải thời gian nộp bài.</div>
              </Tab> */}
            </Tabs>
          </div>
          <div className="Chat">
            <div className="u-bgLight u-height100">
              <div className="Chat-messages u-textSmall u-paddingTopSmall u-paddingBottomSmall u-flex u-flexCol u-flexGrow1 u-height100">
                <div className="u-flex u-paddingLeftXSmall u-paddingRight">
                  <div className="Chat-messages-avatar">
                    <img src={avatar} alt="ảnh đại diện" className="u-imgContain u-roundedCircle" />
                  </div>
                  <div className="Chat-messages-mess u-bgWhite  u-marginLeftXSmall u-roundedPill u-paddingXSmall u-border">
                    Eos dignissimos et quis modi rerum. Vero unde nulla ut temporibus et aut quia voluptas fugit. Molestiae ut aperiam totam voluptas vel et harum ea incidunt. Esse sit iure tenetur voluptatum aliquid qui deserunt.
                  </div>
                </div>
                <div className="u-flex u-marginTopSmall u-paddingLeftXSmall u-paddingRight">
                  <div className="Chat-messages-avatar">
                    <img src={avatar} alt="ảnh đại diện" className="u-imgContain u-roundedCircle" />
                  </div>
                  <div className="Chat-messages-mess u-bgWhite  u-marginLeftXSmall u-roundedPill u-paddingXSmall u-border">
                    Eos dignissimos et quis modi rerum. Vero unde nulla ut temporibus et aut quia voluptas fugit. Molestiae ut aperiam totam voluptas vel et harum ea incidunt. Esse sit iure tenetur voluptatum aliquid qui deserunt.
                  </div>
                </div>
                <div className="u-flex u-marginTopSmall u-paddingLeftXSmall u-paddingRight">
                  <div className="Chat-messages-avatar">
                    <img src={avatar} alt="ảnh đại diện" className="u-imgContain u-roundedCircle" />
                  </div>
                  <div className="Chat-messages-mess u-bgWhite  u-marginLeftXSmall u-roundedPill u-paddingXSmall u-border">
                    Eos dignissimos et quis modi rerum. Vero unde nulla ut temporibus et aut quia voluptas fugit. Molestiae ut aperiam totam voluptas vel et harum ea incidunt. Esse sit iure tenetur voluptatum aliquid qui deserunt.
                  </div>
                </div>
                <div className="u-flex u-marginTopSmall u-paddingLeftXSmall u-paddingRight">
                  <div className="Chat-messages-avatar">
                    <img src={avatar} alt="ảnh đại diện" className="u-imgContain u-roundedCircle" />
                  </div>
                  <div className="Chat-messages-mess u-bgWhite  u-marginLeftXSmall u-roundedPill u-paddingXSmall u-border">
                    Eos dignissimos et quis modi rerum. Vero unde nulla ut temporibus et aut quia voluptas fugit. Molestiae ut aperiam totam voluptas vel et harum ea incidunt. Esse sit iure tenetur voluptatum aliquid qui deserunt.
                  </div>
                </div>
                <div className="u-flex u-marginTopSmall u-paddingLeftXSmall u-paddingRight">
                  <div className="Chat-messages-avatar">
                    <img src={avatar} alt="ảnh đại diện" className="u-imgContain u-roundedCircle" />
                  </div>
                  <div className="Chat-messages-mess u-bgWhite  u-marginLeftXSmall u-roundedPill u-paddingXSmall u-border">
                    Eos dignissimos et quis modi rerum. Vero unde nulla ut temporibus et aut quia voluptas fugit. Molestiae ut aperiam totam voluptas vel et harum ea incidunt. Esse sit iure tenetur voluptatum aliquid qui deserunt.
                  </div>
                </div>
              </div>
              <div className="Chat-control">
                <div className="input-group u-marginTopSmall">
                  <input type="text" className="form-control" placeholder="Soạn tin..." />
                  <span>
                    <i className="fa fa-paper-plane" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lesson;