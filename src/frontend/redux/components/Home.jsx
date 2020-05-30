import React from 'react';
import { Button } from 'react-bootstrap';
import YesNoModal from './Modal.jsx';

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
      <div>
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