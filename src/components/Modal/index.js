import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal';
import { deleteCompany, getCompanyList, findCompany } from '../../actions/company';
import { deleteOffice } from '../../actions/office';

import './Modal.scss';

class ModalConfirmation extends Component {
	render() {
		const {
			dimmer,
			open,
			header,
			children,
			isCompany,
			closeModal,
			deleteCompany,
			deleteOffice,
			id,
			companyId,
			officeId
		} = this.props;

		const close = () => {
			closeModal();
		};

		const removeCompany = () => {
			deleteCompany(id);
		};

		const removeOffice = () => {
			deleteOffice(companyId, officeId);
		};

		return (
			<div>
				<Modal dimmer={dimmer} open={open} onClose={close}>
					<Modal.Header>{header}</Modal.Header>
					<Modal.Content>
						<Modal.Description>{children}</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button color="red" onClick={close}>
							No
						</Button>
						<Button
							positive
							icon="checkmark"
							labelPosition="right"
							content="Yes"
							onClick={isCompany ? removeCompany : removeOffice}
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
