const validate = (formValues) => {
	const errors = {};

	if (!formValues.name) {
		errors.name = 'You must enter the name';
	}

	if (!formValues.address) {
		errors.address = 'You must enter the address';
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
