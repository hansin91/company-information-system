import C from '../constants';
import shortid from 'shortid';

const initialState = {
	messages: []
};

const message = (state = initialState, action) => {
	switch (action.type) {
		case C.ADD_FLASH_MESSAGE:
			return {
				...state,
				messages: [
					{
						id: shortid.generate(),
						type: action.payload.type,
						text: action.payload.text,
						header: action.payload.header
					}
				]
			};
		case C.REMOVE_FLASH_MESSAGE:
			let messages = [ ...state.messages ];
			let index = messages.find((message) => (message.id = action.payload));
			if (index !== -1) {
				messages.splice(index, 1);
			}
			return {
				...state,
				messages: messages
			};
		default:
			return state;
	}
};

export default message;
