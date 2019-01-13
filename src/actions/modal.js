import C from '../constants';

export const closeModal = () => (dispatch) => {
	const data = {
		open: false,
		dimmer: true
	};
	dispatch({
		type: C.CLOSE_MODAL,
		payload: data
	});
};

export const openModal = () => (dispatch) => {
	const data = {
		open: true
	};
	dispatch({
		type: C.OPEN_MODAL,
		payload: data
	});
};
