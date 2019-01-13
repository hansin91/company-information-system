import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal';
import { deleteCompany, getCompanyList, findCompany } from '../../actions/company';
import { deleteOffice } from '../../actions/office';

import './Modal.scss';

class ModalConfirmation extends Component {
	close = () => {
		this.props.closeModal();
	};

	deleteCompany = () => {
		this.props.deleteCompany(this.props.id);
	};

	deleteOffice = () => {
		this.props.deleteOffice(this.props.companyId, this.props.officeId);
	};

	render() {
		console.log(this.props.delete);
		return (
			<div>
				<Modal dimmer={this.props.dimmer} open={this.props.open} onClose={this.close}>
					<Modal.Header>{this.props.header}</Modal.Header>
					<Modal.Content image>
						<Modal.Description>{this.props.children}</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button color="red" onClick={this.close}>
							No
						</Button>
						<Button
							positive
							icon="checkmark"
							labelPosition="right"
							content="Yes"
							onClick={this.props.delete === 'company' ? this.deleteCompany : this.deleteOffice}
						/>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		open: state.modal.open,
		dimmer: state.modal.dimmer
	};
};

const mapDispatchToProps = (dispatch) => ({
	deleteCompany: (index) => {
		dispatch(deleteCompany(index));
		dispatch(closeModal());
		dispatch(getCompanyList());
	},
	deleteOffice: (companyId, officeId) => {
		dispatch(deleteOffice(companyId, officeId));
		dispatch(closeModal());
		dispatch(findCompany(companyId));
	},
	closeModal: () => {
		dispatch(closeModal());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalConfirmation);
