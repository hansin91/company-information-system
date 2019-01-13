import CompanyService from './company';

const OfficeService = {
	update: (companyId, company) => {
		let companies = CompanyService.getCompanies();
		companies.splice(companyId, 1, JSON.stringify(company));
		localStorage.setItem('companies', JSON.stringify(companies));
	},
	addOffice: (data) => {
		let index = data.company;
		let company = JSON.parse(CompanyService.findCompany(index));
		if (!company.hasOwnProperty('offices')) {
			company.offices = [];
		}
		company.offices.push(data);

		OfficeService.update(index, company);
	},
	deleteOffice: (companyId, officeId) => {
		let company = JSON.parse(CompanyService.findCompany(companyId));
		let offices = company.offices;
		offices.splice(officeId, 1);
		company.offices = offices;

		OfficeService.update(companyId, company);
	}
};

export default OfficeService;
