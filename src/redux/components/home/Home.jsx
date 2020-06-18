import React, { Component } from 'react';
import Layout from '../layout/Layout';

import SidebarRight from '../layout/SidebarRight';
// // import SidebarLeft from '../layout/SidebarLeft';
import CourseFilter from './CourseFilter';
import ListCourse from './ListCourse';
import courses from '../../../data/courses.json';
import Card from '../../common/Card';

export default class Home extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			courses,
			filters: {
        semester: null,
        institute: null,
        lecture: null,
        type: null
      }
		}
	}

	onFilter = (name, value) => {
		const filters = Object.assign({}, this.state.filters, {
			[name]: value
		})
		console.log('>>>',value, name, filters);
		this.setState({filters})
	}
	
	render() {
		const { filters, courses } = this.state;
		let filter_courses = courses;

		let filter_names = Object.keys(filters);
		let is_filter = false;
		for (let i = 0; i < filter_names.length; i++) {
			if (filters[filter_names[i]] !== null) {
				 is_filter = true;
				 break;
			}
		}

		if(is_filter) {
			Object.keys(filters).map(name => {
				console.log('name', name);
				if(this.state.filters[name] !== null) {
					// console.log('1')
					filter_courses = filter_courses.filter(course => course[name] === this.state.filters[name]);
				}
				console.log('filter_courses', filter_courses);
				return null
			});
		}
		// const filter_course = courses.filter(course => course.)
		filter_courses = filter_courses.slice(0, 7);

		const home_main = (
			<div className="Layout-main u-flex u-marginTop">
				<div className="Layout-main-content u-padding u-paddingTop0">
					<CourseFilter
						filters={filters}
						semester={filters.semester}
						onFilter={(name, value) => this.onFilter(name, value)} />
					<div className="Home u-marginTopSmall">
						{
							is_filter ? 
								<div>
									<div>Kết quả tìm kiếm: {filter_courses.length} kết quả</div>
									<div className="u-marginTopSmall row">
										{
											filter_courses.map((course, id) => (
												<div className="col-4">
													<Card key={id} course={course} is_open={true} />
												</div>
											))
										}
									</div>
								</div>
								:
								<div>
									<div className="u-marginBottomSmall">Các khóa học mới</div>
									<ListCourse courses={filter_courses}/>
									<div className="u-marginBottomSmall">Các khóa theo kỳ</div>
									<ListCourse courses={filter_courses}/>
									<div className="u-marginBottomSmall">Các khóa theo viện</div>
									<ListCourse courses={filter_courses}/>
								</div>
						}
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
