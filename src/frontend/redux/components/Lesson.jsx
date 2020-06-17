import React, { Component } from 'react';
import YouTube from 'react-youtube';
import ClassNames from 'classnames';

import Layout from './layout/Layout';
// import video from '../test/video.webm';

const tabs = {
  home: {
    id: 0,
    icon: 'home',
    name: 'Home'
  },
  lesson: {
    id: 1,
    icon: 'book',
    name: 'Lesson'
  },
  group: {
    id: 2,
    icon: 'group',
    name: 'Group'
  },
  chat: {
    id: 3,
    icon: 'comments',
    name: 'Chat'
  }
};

class Lesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active_tab_id: tabs.lesson.id
    }
  }

  _onReady(event) {
    event.target.pauseVideo();
  }

  render() {
    const { active_tab_id } = this.state;
    const opts = {
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        // autoplay: 1,
      },
    };

    const lesson_comp = (
      <div className="Lesson u-flex">
        <div className="SidebarLeft u-borderRight">
          {
            Object.values(tabs).map(tab => (
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
            ))
          }
        </div>
        <div className="u-flexGrow1 u-borderRight">
          <div className="Lesson-video">
            {/* <video controls autoPlay muted>
              <source src="https://www.youtube.com/watch?v=yZ2iEwaX0Hc" type="video/mp4" />
              <source src={video} type="video/webm" />
            </video> */}

            <YouTube containerClassName="Lesson-video-container" videoId="cNwEVYkx2Kk" opts={opts} onReady={this._onReady} />
          </div>
        </div>
        <div className="Chat">
          <div className="Chat-container">
            <div>teeeee</div>
            <div className="Chat-control">
              <div className="input-group u-marginTopSmall">
                <input type="text" className="form-control" placeholder="Tin nhắn..." />
                <span>
                  <i className="fa fa-paper-plane" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <Layout
        is_show_banner={false}
        is_show_footer={false}
        children={lesson_comp}
      />
    );
  }
}

export default Lesson;