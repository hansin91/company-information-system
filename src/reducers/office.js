import C from '../constants';

const initialState = {
	offices: [],
	office: {}
};

const office = (state = initialState, action) => {
	switch (action.type) {
		case C.FETCH_OFFICES:
			return {
				...state,
				offices: action.payload
			};
		case C.CREATE_OFFICE:
			return {
				...state,
				office: action.payload
			};
		default:
			return state;
	}
};

export default office;
