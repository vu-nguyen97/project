import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

class YesNoModal extends React.Component {
	render() {
		const { 
			handleClose,
			handleSubmit,
			headerName,
			content,
			classname
		} = this.props;

		return (
			<div className={classname}>
	      <Modal show={true} onHide={handleClose}>
	        <Modal.Header closeButton>
	          <Modal.Title>
	          	{
	          		headerName ?
	          		<div>{headerName}</div>
	          		:
	          		<div>Xác nhận<	/div>
	          	}
	          </Modal.Title>
	        </Modal.Header>
	        <Modal.Body>
	        	{
	        		content ?
		        		<div>{content}</div>
		        		:
		        		<div>Bạn có chắc muốn xóa ?</div>
	        	}
	        </Modal.Body>
	        <Modal.Footer>
	          <Button variant="secondary" onClick={handleClose}>
	            Không
	          </Button>
	          <Button variant="outline-primary" onClick={handleSubmit}>
	            Có
	          </Button>
	        </Modal.Footer>
	      </Modal>
			</div>
		);
	}
}

YesNoModal.propTypes = {
	handleClose: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	content: PropTypes.node,
	headerName: PropTypes.string,
	classname: PropTypes.string
};

export default YesNoModal;