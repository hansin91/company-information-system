import C from '../constants';

const initialState = {
	companies: [],
	company: {},
	id: '',
	delete: false
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
		case C.DELETE_COMPANY:
			return {
				...state,
				delete: action.payload
			};
		case C.GET_COMPANY:
			return {
				...state,
				company: action.payload
			};
		case C.GET_COMPANY_ID:
			return {
				...state,
				id: action.payload
			};
		default:
			return state;
	}
};

export default company;
