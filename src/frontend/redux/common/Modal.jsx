import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

class CommonModal extends React.Component {
	render() {
		const { 
			handleClose,
			handleSubmit,
			headerName,
			content,
			className,
			headerClassName,
			closedButtonName,
			cubmitedButtonName,
			modalFooter
		} = this.props;

		let modalTitle = (
			<div>Xác nhận</div>
		);
		if (headerName) {
			modalTitle = (
				<div className={headerClassName}>{headerName}</div>
			)
		}

		let modalBody = 'Bạn có chắc muốn xóa ?';
		if (content) {
			modalBody = (
				<div>{content}</div>
			);
		}

		return (
			<Modal show={true} onHide={handleClose} className={className}>
				<Modal.Header closeButton>
					<Modal.Title>{modalTitle}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{modalBody}</Modal.Body>
				{
					modalFooter ? modalFooter :
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							{closedButtonName ? closedButtonName : 'Không'}
						</Button>
						<Button variant="outline-primary" onClick={handleSubmit}>
							{cubmitedButtonName ? cubmitedButtonName : 'Có'}
						</Button>
					</Modal.Footer>
				}
			</Modal>
		);
	}
}

CommonModal.propTypes = {
	handleClose: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func,
	content: PropTypes.node,
	headerName: PropTypes.string,
	headerClassName: PropTypes.string,
	className: PropTypes.string,
	cubmitedButtonName: PropTypes.string,
	closedButtonName: PropTypes.string,
	modalFooter: PropTypes.node,
};

export default CommonModal;