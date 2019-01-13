import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal } from '../../actions/modal';

import './Modal.scss';

class ModalConfirmation extends Component {
	close = () => {
		this.props.closeModal();
	};

	render() {
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
						<Button positive icon="checkmark" labelPosition="right" content="Yes" onClick={this.close} />
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

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ closeModal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalConfirmation);
