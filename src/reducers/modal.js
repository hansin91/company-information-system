import C from '../constants';

const initialState = {
	open: false,
	dimmer: 'blurring',
	isCompany: true
};

const modal = (state = initialState, action) => {
	switch (action.type) {
		case C.CLOSE_MODAL:
			return {
				...state,
				open: action.payload.open
			};
		case C.OPEN_MODAL:
			return {
				...state,
				open: action.payload.open
			};
		default:
			return state;
	}
};

export default modal;
