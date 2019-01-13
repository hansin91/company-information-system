const CompanyService = {
	getCompanies: () => {
		return localStorage.getItem('companies') ? JSON.parse(localStorage.getItem('companies')) : [];
	},
	addCompany: (data) => {
		let companies = CompanyService.getCompanies();
		companies.push(data);
		localStorage.setItem('companies', JSON.stringify(companies));
		return CompanyService.getCompanies();
	},
	findCompany: (index) => {
		let companies = CompanyService.getCompanies();
		let company = {};
		if (companies.length > 0) {
			company = companies[index];
		}
		return company;
	},
	deleteCompany: (index) => {
		let companies = CompanyService.getCompanies();
		companies.splice(index, 1);
		localStorage.setItem('companies', JSON.stringify(companies));
		return true;
	}
};

export default CompanyService;
