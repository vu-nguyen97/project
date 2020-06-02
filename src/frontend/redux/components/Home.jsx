import React from 'react';
import { Button } from 'react-bootstrap';

import DatePicker from '../common/DatePicker.jsx';
import YesNoModal from './Modal.jsx';

import avatar from '../test/default-avatar.png';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			is_show_login_modal: false
		}

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleShow() {
		this.setState({
			is_show_login_modal: true 
		});
	}

	handleClose() {
		this.setState({
			is_show_login_modal: false 
		});
	}

	render() {
		const { is_show_login_modal } = this.state;
		
    return (
      <div className="Home">
				<div className="Home-banner">
					<img src={avatar} alt="ảnh đại diện" />
				</div>
				<DatePicker />
        <Button variant="outline-secondary" onClick={this.handleShow}>
          Modal
        </Button>
        {
          is_show_login_modal &&
          <YesNoModal 
            handleClose={this.handleClose}
            handleSubmit={this.handleShow}
          />
        }
      </div>
      ); 
	}
}

export default Home;