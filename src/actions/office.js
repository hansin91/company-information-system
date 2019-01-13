import C from '../constants';
import { Office } from '../models/Office';
import OfficeService from '../services/office';

export const createOffice = (data) => (dispatch) => {
	let office = new Office();
	Object.assign(office, data);
	office = JSON.stringify(office);
	OfficeService.addOffice(data);
	dispatch({
		type: C.CREATE_OFFICE,
		payload: office
	});
};

export const getOfficeId = (index) => (dispatch) => {
	dispatch({
		type: C.GET_OFFICE_ID,
		payload: index
	});
};

export const deleteOffice = (companyId, officeId) => (dispatch) => {
	OfficeService.deleteOffice(companyId, officeId);
	dispatch({
		type: C.DELETE_OFFICE,
		payload: true
	});
};
