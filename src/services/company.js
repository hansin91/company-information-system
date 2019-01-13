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
	}
};

export default CompanyService;
