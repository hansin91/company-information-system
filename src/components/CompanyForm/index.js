import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { Field, Fields, reduxForm } from 'redux-form';
import validate from '../../validators';
import PropTypes from 'prop-types';

import './CompanyForm.scss';

import { connect } from 'react-redux';
import { createCompany, getCompanyList } from '../../actions/company';
import { renderFlashMessage } from '../../actions/message';

class CompanyForm extends Component {
	renderError({ error, touched }) {
		if (touched && error) {
			return <Message negative header={error} />;
		}
	}

	renderInput = ({ input, label, meta }) => {
		return (
			<Form.Field>
				<label>{label}</label>
				<Form.Input {...input} autoComplete="off" placeholder={label} />
				{this.renderError(meta)}
			</Form.Field>
		);
	};

	renderPhoneNumber = (fields) => {
		const onChangeFirst = (event) => {
			const normalizedValue = fields.normalize(event.target.value);
			fields[event.target.name].input.onChange(normalizedValue);
		};

		return (
			<Form.Field>
				<label>{fields.labels[0]}</label>
				<Form.Group>
					{fields.names.map((field, i) => {
						let elem = fields[field];
						let name = elem.input.name.charAt(0).toUpperCase() + elem.input.name.slice(1);
						return (
							<div className="phone__container" key={i}>
								<Form.Input
									{...elem.input}
									placeholder={name}
									onChange={onChangeFirst}
									autoComplete="off"
								/>
								{this.renderError(elem.meta)}
							</div>
						);
					})}
				</Form.Group>
			</Form.Field>
		);
	};

	render() {
		const onSubmit = (formValues) => {
			this.props.saveCompany(formValues);
		};

		const numberOnly = (value, previousValue) => {
			const regexPattern = /[0-9]+$/;
			return regexPattern.test(value) ? value : value.length === 0 ? '' : previousValue;
		};

		return (
			<Form onSubmit={this.props.handleSubmit(onSubmit)}>
				<Field name="name" component={this.renderInput} label="Name" />
				<Field name="address" component={this.renderInput} label="Address" />
				<Field name="revenue" component={this.renderInput} label="Revenue" normalize={numberOnly} />
				<Fields
					names={[ 'code', 'phone' ]}
					component={this.renderPhoneNumber}
					labels={[ 'Phone No:', 'Code', 'Phone' ]}
					normalize={numberOnly}
				/>
				<Button primary className={this.props.valid ? '' : 'disabled'}>
					Create
				</Button>
				<Button secondary onClick={this.props.reset}>
					Reset
				</Button>
			</Form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		company: state.company.company,
		companies: state.company.companies
	};
};

const mapDispatchToProps = (dispatch) => ({
	saveCompany: (formValues) => {
		dispatch(createCompany(formValues));
		dispatch(getCompanyList());
		dispatch(
			renderFlashMessage({
				type: 'success',
				text: formValues.name + ' has been succesfully created',
				header: 'Create company'
			})
		);
	}
});

CompanyForm.propTypes = {
	saveCompany: PropTypes.func.isRequired
};

export default reduxForm({
	validate,
	form: 'companyCreate'
})(connect(mapStateToProps, mapDispatchToProps)(CompanyForm));
