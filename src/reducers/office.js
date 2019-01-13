import C from '../constants';

const initialState = {
	offices: [],
	office: {},
	isDelete: false,
	id: ''
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
		case C.DELETE_OFFICE:
			return {
				...state,
				isDelete: action.payload
			};
		case C.GET_OFFICE_ID:
			return {
				...state,
				id: action.payload
			};
		default:
			return state;
	}
};

export default office;
