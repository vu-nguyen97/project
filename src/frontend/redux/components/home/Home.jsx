import React, { Component } from 'react';
import Layout from '../layout/Layout';

import SidebarRight from '../layout/SidebarRight';
// // import SidebarLeft from '../layout/SidebarLeft';
import HomeMain from './HomeMain';

export default class Home extends Component {
	render() {
		const home_main = (
			<div className="Layout-main u-flex u-marginTop">
				{/* <SidebarLeft /> */}
				<div className="Layout-main-content u-padding u-paddingTop0">
					<HomeMain />
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
