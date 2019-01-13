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
