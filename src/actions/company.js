import C from '../constants';
import { Company } from '../models/Company';
import CompanyService from '../services/company';

export const getCompanyList = () => (dispatch) => {
	let companies = CompanyService.getCompanies();
	dispatch({
		type: C.FETCH_COMPANIES,
		payload: companies
	});
};

export const createCompany = (data) => (dispatch) => {
	let company = new Company();
	Object.assign(company, data);
	company.offices = [];
	company = JSON.stringify(company);
	let companies = CompanyService.addCompany(company);
	dispatch({
		type: C.CREATE_COMPANY,
		payload: companies
	});
};

export const deleteCompany = (index) => (dispatch) => {
	let isDelete = CompanyService.deleteCompany(index);
	dispatch({
		type: C.DELETE_COMPANY,
		payload: isDelete
	});
};

export const findCompany = (index) => (dispatch) => {
	let company = JSON.parse(CompanyService.findCompany(index));
	dispatch({
		type: C.GET_COMPANY,
		payload: company
	});
};

export const getCompanyId = (index) => (dispatch) => {
	dispatch({
		type: C.GET_COMPANY_ID,
		payload: index
	});
};
