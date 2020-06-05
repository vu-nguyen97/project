import React from 'react';
import { Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap';

import SidebarRight from './SidebarRight';
import CourseList from './CourseList';
import CourseFilter from './CourseFilter';
import Footer from './Footer';

import avatar_img from '../../test/default-avatar.png';
// import banner_img from '../../test/banner4.png';

class Home extends React.Component {
	render() {
		// Fixme
		const data_fake = [
			'Bài 1','Bài 1','Bài 1','Bài 1','Bài 1','Bài 1','Bài 1','Bài 1','Bài 1','Bài 1'
		]
		
    return (
      <div className="Home">
				<div className="Home-banner u-bgMedium">
					{/* <img src={banner_img} alt="ảnh banner" className="u-imgContain" /> */}
					<div className="Home-banner-avatar u-flex u-flexAlignItemsCenter">
						<i className="fa fa-bell fa-2x u-marginRightSmall" />
						<img src={avatar_img} alt="ảnh đại diện" className="u-imgContain u-roundedCircle" />
						<i className="fa fa-angle-down fa-2x u-marginLeftSmall" />
					</div>
				</div>

				<div className="Home-header">
					<Navbar bg="light" expand="lg">
						<Navbar.Brand href="#home">Bách Khoa Elearning</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link href="#home">Home</Nav.Link>
								<NavDropdown title="Khóa học của tôi" id="basic-nav-dropdown">
									<NavDropdown.Item href="#action/3.2">Khóa học của tôi</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">Tin tức</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">Liên hệ</NavDropdown.Item>
								</NavDropdown>
								<Nav.Link href="#link">Tin tức</Nav.Link>
								<Nav.Link href="#link">Liên hệ</Nav.Link>
							</Nav>
						</Navbar.Collapse>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					</Navbar>
				</div>

				<div className="Home-layout u-flex u-marginTop">
					<div className="Home-layout-sidebarLeft u-paddingLeftSmall">
						<div className="Home-layout-sidebarLeft-nav u-paddingSmall u-border">
							<div>Trang chủ</div>
							<div className="u-cursorPointer">
								<i className="fa fa-angle-down u-marginRightSmall" />Khóa học của tôi
							</div>
							<div className="SidebarLeft-courses u-marginLeft">
								Mang may tinh
								{
									data_fake.map((course, i) =>
										<div key={i} className="u-marginLeft">{course}</div>
									)
								}
							</div>
						</div>
					</div>
					<div className="Home-layout-main u-padding u-paddingTop0">
						<CourseFilter />
						<CourseList />
					</div>
					<div className="Home-layout-sidebarRight u-flex u-flexCol u-paddingSmall u-roundedPill u-marginRight">
						<SidebarRight />
					</div>
				</div>
        
				<div className="Home-footer">
					<Footer />
				</div>
      </div>
      ); 
	}
}

export default Home;