const validate = (formValues) => {
	const errors = {};

	if (!formValues.name) {
		errors.name = 'You must enter the name';
	}

	if (!formValues.address) {
		errors.address = 'You must enter the address';
	}

	if (!formValues.latitude) {
		errors.latitude = 'You must enter the latitude';
	}

	if (!formValues.longitude) {
		errors.longitude = 'You must enter the latitude';
	}

	if (!formValues.officeStartDate) {
		errors.officeStartDate = 'You must select the date';
	}

	if (formValues.company == null) {
		errors.company = 'You must select the company';
	}

	const regexPattern = /[0-9]*$/;

	if (!formValues.revenue) {
		errors.revenue = 'You must enter the revenue';
	} else {
		if (!regexPattern.test(formValues.revenue)) {
			errors.revenue = 'Revenue should be a number';
		}
	}

	if (!formValues.code) {
		errors.code = 'You must enter the code';
	}

	if (!formValues.phone) {
		errors.phone = 'You must enter the phone';
	}

	return errors;
};

export default validate;
