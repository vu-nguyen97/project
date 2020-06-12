import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

import SidebarRight from './SidebarRight';
// import SidebarLeft from './SidebarLeft';
import HomeMain from './HomeMain';
import Footer from './Footer';
import UserProfile from '../UserProfile';

import Alert from '../../common/Alert';
import avatar_img from '../../test/default-avatar.png';
// import banner_img from '../../test/banner4.png';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			is_show_setting_acc_dropdown: false,
			is_show_edit_profile_form: true,
		}
	}

	render() {
		const { alert } = this.props;

		const {
			is_show_setting_acc_dropdown,
			is_show_edit_profile_form,
		} = this.state;

    return (
      <div className="Home">
				<div className="Home-banner u-bgMedium">
					<div className="Home-banner-title u-marginLeftLarge u-flex u-flexAlignItemsCenter u-textLarge">
						Bách Khoa Elearning
					</div>
					{/* <img src={banner_img} alt="ảnh banner" className="u-imgContain" /> */}
					<div className="Home-banner-setting u-flex u-flexAlignItemsCenter u-marginRight">
						<i className="fa fa-bell fa-2x u-marginRightSmall" />
						<div className="u-cursorPointer u-flex u-flexAlignItemsCenter">
							<div className="Home-banner-setting-avatar">
								<img src={avatar_img} alt="ảnh đại diện" className="u-imgContain u-roundedCircle" />
							</div>

							<Dropdown
								className="u-marginLeftSmall"
								direction='down'
								isOpen={is_show_setting_acc_dropdown}
								toggle={() => this.setState({
									is_show_setting_acc_dropdown: !this.state.is_show_setting_acc_dropdown
								})}
							>
								<DropdownToggle caret />
								<DropdownMenu right>
									<DropdownItem
										onClick={() => this.setState({
											is_show_edit_profile_form: true
										})}
									>
										Thông tin cá nhân
									</DropdownItem>
									<DropdownItem>Đăng xuất</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					</div>
				</div>

				<div className="Home-header">
					<Navbar bg="light" expand="lg">
						{/* <Navbar.Brand href="#home">Bách Khoa Elearning</Navbar.Brand> */}
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link href="#home">Home</Nav.Link>
								<NavDropdown className="u-marginLeft" title="Khóa học của tôi" id="basic-nav-dropdown">
									<NavDropdown.Item href="#action/3.2">Tin học đại cương</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">Mạng máy tính</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">Cơ sở dữ liệu</NavDropdown.Item>
								</NavDropdown>
								<Nav.Link className="u-marginLeft" href="#link">Tin tức</Nav.Link>
								<Nav.Link className="u-marginLeft"  href="#link">Liên hệ</Nav.Link>
							</Nav>
						</Navbar.Collapse>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					</Navbar>
				</div>

				{
					alert &&
					<div className="Home-alert">
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

				{
					!is_show_edit_profile_form ? 
						<div className="Home-layout u-flex u-marginTop">
							{/* <SidebarLeft /> */}
							<div className="Home-layout-main u-padding u-paddingTop0">
								<HomeMain />
							</div>
							<SidebarRight />
						</div>
						:
						<div className="Home-layout u-flex u-marginTop">
							<UserProfile />
						</div>
				}
        
				<div className="Home-footer">
					<Footer />
				</div>
      </div>
      ); 
	}
}

const mapStateToProps = state => ({
	alert: state.alert
});

export default connect(mapStateToProps)(Home);