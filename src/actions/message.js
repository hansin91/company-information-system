import C from '../constants';

export const renderFlashMessage = (message) => (dispatch) => {
	dispatch({
		type: C.ADD_FLASH_MESSAGE,
		payload: message
	});
};

export const removeFlashMessage = (id) => (dispatch) => {
	dispatch({
		type: C.REMOVE_FLASH_MESSAGE,
		payload: id
	});
};
