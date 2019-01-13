import C from '../constants';

const initialState = {
	companies: [],
	company: {}
};

const company = (state = initialState, action) => {
	switch (action.type) {
		case C.FETCH_COMPANIES:
			return {
				...state,
				companies: action.payload
			};
		case C.CREATE_COMPANY:
			return {
				...state,
				company: action.payload
			};
		case C.GET_COMPANY:
			return {
				...state,
				company: action.payload
			};
		default:
			return state;
	}
};

export default company;
