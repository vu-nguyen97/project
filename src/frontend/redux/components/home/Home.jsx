import React, { Component } from 'react';
import Layout from '../layout/Layout';

import SidebarRight from '../layout/SidebarRight';
// // import SidebarLeft from '../layout/SidebarLeft';
import Card from '../../common/Card';
import CourseFilter from './CourseFilter';

export default class Home extends Component {
	render() {
		const home_main = (
			<div className="Layout-main u-flex u-marginTop">
				<div className="Layout-main-content u-padding u-paddingTop0">
					<CourseFilter />
					<div className="">
						<div className="u-marginTopSmall">Các khóa học mới</div>
						<div className="Home-listCourse row">
							<div className="col-4 u-marginTopSmall">
								<Card is_open={true} />
							</div>
							<div className="col-4 u-marginTopSmall">
								<Card />
							</div>
							<div className="col-4 u-marginTopSmall">
								<Card />
							</div>
						</div>
						<div className="u-textXSmall u-marginTopXSmall u-textRight">Xem thêm >></div>

						<div className="col-4 u-marginTopSmall">Các khóa theo kỳ</div>
						<div className="Home-listCourse row">
							<div className="col-4 u-marginTopSmall">
								<Card is_open={true} />
							</div>
							<div className="col-4 u-marginTopSmall">
								<Card />
							</div>
							<div className="col-4 u-marginTopSmall">
								<Card />
							</div>
						</div>
						<div className="u-textXSmall u-marginTopXSmall u-textRight">Xem thêm >></div>

						<div className="col-4 u-marginTopSmall">Các khóa theo viện</div>
						<div className="Home-listCourse row">
							<div className="col-4 u-marginTopSmall">
								<Card is_open={true} />
							</div>
							<div className="col-4 u-marginTopSmall">
								<Card />
							</div>
							<div className="col-4 u-marginTopSmall">
								<Card />
							</div>
						</div>
						<div className="u-textXSmall u-marginTopXSmall u-textRight">Xem thêm >></div>
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
