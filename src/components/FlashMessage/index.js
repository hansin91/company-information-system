import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { removeFlashMessage } from '../../actions/message';
import { bindActionCreators } from 'redux';

class FlashMessage extends Component {
	closeMessage = (id) => {
		this.props.removeFlashMessage(id);
	};

	render() {
		return this.props.messages.length > 0
			? this.props.messages.map((message) => {
					return (
						<Message
							className={message.type === 'success' ? 'success' : 'error'}
							key={message.id}
							onDismiss={() => this.closeMessage(message.id)}
						>
							<Message.Header>{message.header}</Message.Header>
							<p>{message.text}</p>
						</Message>
					);
				})
			: '';
	}
}

const mapStateToProps = (state) => {
	return {
		messages: state.message.messages
	};
};
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ removeFlashMessage }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessage);
