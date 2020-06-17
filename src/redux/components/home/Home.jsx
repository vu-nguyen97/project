import React, { Component } from 'react';
import Layout from '../layout/Layout';

import SidebarRight from '../layout/SidebarRight';
// // import SidebarLeft from '../layout/SidebarLeft';
import CourseFilter from './CourseFilter';
import ListCourse from './ListCourse';

export default class Home extends Component {
	render() {
		const home_main = (
			<div className="Layout-main u-flex u-marginTop">
				<div className="Layout-main-content u-padding u-paddingTop0">
					<CourseFilter />
					<div className="Home u-marginTopSmall">
						<div className="u-marginBottomSmall">Các khóa học mới</div>
						<ListCourse/>
						<div className="u-marginBottomSmall">Các khóa theo kỳ</div>
						<ListCourse />
						<div className="u-marginBottomSmall">Các khóa theo viện</div>
						<ListCourse />
					</div>
				</div>
				<SidebarRight />
			</div>
		);

		return (
			<div>
				<Layout children={home_main} />
			</div>
		)
	}
}
