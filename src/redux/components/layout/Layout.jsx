import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

import Footer from './Footer';
import UserProfile from '../UserProfile';

import Alert from '../../common/Alert';
import avatar_img from '../../test/default-avatar.png';

import { toggleSettingProfile, toggleUserAccount } from '../../actions'; 
import store from '../../store';

store.subscribe(() => {
  console.log('Store', JSON.stringify(store.getState()))
});

class Layout extends Component {
  render() {
    const {
      is_show_banner,
      is_show_header,
      is_show_footer,
      children,

      alert,
      is_show_edit_profile_form,
      is_show_setting_acc_dropdown,
    } = this.props;

    let main_comp = null;
    if (is_show_edit_profile_form) {
      main_comp = (
        <div className="Layout-main u-flex u-marginTop">
          <UserProfile />
        </div>
      );
    } else {
      main_comp = children;
    }

    return (
      <div className="Layout">
        {
          is_show_banner &&
            <div className="Layout-banner u-bgMedium">
              <div className="Layout-banner-title u-marginLeftLarge u-flex u-flexAlignItemsCenter u-textLarge">
                Bách Khoa Elearning
              </div>
              {/* <img src={banner_img} alt="ảnh banner" className="u-imgContain" /> */}
              <div className="Layout-banner-setting u-flex u-flexAlignItemsCenter u-marginRight">
                <i className="fa fa-bell fa-2x u-marginRightSmall" />
                <div className="u-flex u-flexAlignItemsCenter">
                  <div className="Layout-banner-setting-avatar">
                    <img src={avatar_img} alt="ảnh đại diện" className="u-imgContain u-roundedCircle" />
                  </div>

                  <Dropdown
                    className="u-cursorPointer u-marginLeftSmall"
                    direction='down'
                    isOpen={is_show_setting_acc_dropdown}
                    toggle={this.props.onToggleUserAccount}
                  >
                    <DropdownToggle caret />
                    <DropdownMenu right>
                      <DropdownItem
                        onClick={this.props.onToggleSettingProfile}
                      >
                        Thông tin cá nhân
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/login" className="u-textBlack" >Đăng xuất</Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
        }

        {
          is_show_header &&
            <div className="Layout-header u-bgLight u-flex u-flexJustifyBetween u-flexAlignItemsCenter
              u-paddingXSmall u-paddingLeft u-paddingRight
            ">
              <ul className="u-padding0 u-margin0 u-flexGrow1">
                <li className="u-paddingLeft0 u-paddingXSmall">
                  <a href="/home">Trang chủ</a>
                </li>
                <li className="u-marginLeft u-paddingXSmall">
                  <a href="/course">Khóa học của tôi</a>
                </li>
                <li className="u-marginLeft u-paddingXSmall">
                  <a href="/home">Tin tức</a>
                </li>
                <li className="u-marginLeft u-paddingXSmall">
                  <a href="/home">Liên hệ</a>
                </li>
              </ul>
              <FormControl id="search-input" type="text" placeholder="Search" />
            </div>
        }

        {
          alert &&
          <div className="Layout-alert">
            <div className="row">
              <div className="col-3" />
              <div className="col-6">
                <Alert
                  className="u-marginTopSmall"
                  variant="success"
                  content={alert}
                  icon=""
                />
              </div>
            </div>
          </div>
        }

        {main_comp}
        
        {
          is_show_footer &&
            <div className="Layout-footer">
              <Footer />
            </div>
        }
      </div>
    );
  }
}

Layout.propsTypes = {
  is_show_banner: PropTypes.bool,
  is_show_header: PropTypes.bool,
  is_show_footer: PropTypes.bool,
  children: PropTypes.node,
}

Layout.defaultProps = {
  is_show_banner: true,
  is_show_header: true,
  is_show_footer: true
}

const mapStateToProps = state => ({
	alert: state.alert,
  is_show_edit_profile_form: state.is_show_edit_profile_form,
  is_show_setting_acc_dropdown: state.is_show_setting_acc_dropdown,
});

const mapDispatchToProps = dispatch => ({
  onToggleSettingProfile: () => dispatch(toggleSettingProfile()),
  onToggleUserAccount: () => dispatch(toggleUserAccount())
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout);