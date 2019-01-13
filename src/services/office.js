import CompanyService from './company';

const OfficeService = {
	addOffice: (data) => {
		let index = data.company;
		let company = JSON.parse(CompanyService.findCompany(index));
		if (!company.hasOwnProperty('offices')) {
			company.offices = [];
		}
		company.offices.push(data);

		let companies = CompanyService.getCompanies();
		companies.splice(index, 1, JSON.stringify(company));
		localStorage.setItem('companies', JSON.stringify(companies));
	}
};

export default OfficeService;
