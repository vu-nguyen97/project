import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap';

import SidebarRight from './SidebarRight';
// import SidebarLeft from './SidebarLeft';
import CourseList from './CourseList';
import CourseFilter from './CourseFilter';
import Footer from './Footer';

import Alert from '../../common/Alert';
import avatar_img from '../../test/default-avatar.png';
// import banner_img from '../../test/banner4.png';

class Home extends React.Component {
	render() {
		const { children, alert } = this.props;

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
				<div className="">
					{
						alert &&
						<div className="row">
							<div className="col-6" />
							<div className="col-6">
								<Alert
									className="u-marginTopSmall u-marginRight"
									variant="success"
									content={alert}
								/>
							</div>
						</div>
					}
				</div>

				<div className="Home-layout u-flex u-marginTop">
					{/* <SidebarLeft /> */}
					{
						children ?
							<div className="Home-layout-main u-padding u-paddingTop0">{children}</div>
							:
							<div className="Home-layout-main u-padding u-paddingTop0">
								<CourseFilter />
								<CourseList />
							</div>
					}
					<SidebarRight />
				</div>
        
				<div className="Home-footer">
					<Footer />
				</div>
      </div>
      ); 
	}
}

Home.propTypes = {
	children: PropTypes.node,
	alert: PropTypes.string,
}

export default Home;