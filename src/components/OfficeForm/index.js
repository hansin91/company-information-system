import React, { Component } from 'react';
import { Button, Form, Message, Dropdown } from 'semantic-ui-react';
import { Field, Fields, reduxForm } from 'redux-form';
import validate from '../../validators';

import './OfficeForm.scss';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';
import momentLocaliser from 'react-widgets-moment';

import 'react-widgets/dist/css/react-widgets.css';

import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { getCompanyList } from '../../actions/company';
import { createOffice } from '../../actions/office';

momentLocaliser(moment);

class OfficeForm extends Component {
	componentDidMount() {
		this.props.getCompanyList();
	}

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

	renderDatePicker = ({ label, meta, input: { onChange, value }, showTime }) => {
		return (
			<Form.Field>
				<label>{label}</label>
				<DateTimePicker
					onChange={onChange}
					format="DD-MM-YYYY"
					time={showTime}
					value={!value ? null : new Date(value)}
				/>
			</Form.Field>
		);
	};

	renderOptions = (options) => {
		let companies = [
			{
				key: '',
				value: null,
				text: '--Select one--'
			}
		];
		if (options.length > 0) {
			options.map((option, i) => {
				let company = {
					key: '',
					value: '',
					text: ''
				};
				let parsedOption = JSON.parse(option);
				company.key = i;
				company.value = i;
				company.text = parsedOption.name;
				companies.push(company);
				return companies;
			});
		}
		return companies;
	};

	renderDropdown = ({ label, input, options }) => {
		let companies = this.renderOptions(options);
		return (
			<Form.Field>
				<label>{label}</label>
				<Dropdown
					selection
					{...input}
					search
					options={companies}
					value={input.value}
					onChange={(param, data) => input.onChange(data.value)}
					placeholder={label}
				/>
			</Form.Field>
		);
	};

	renderLatLog = (fields) => {
		const onChangeFirst = (event) => {
			const normalizedValue = fields.normalize(event.target.value);
			fields[event.target.name].input.onChange(normalizedValue);
		};

		return (
			<Form.Field>
				<label>{fields.label}</label>
				<Form.Group>
					{fields.names.map((field, i) => {
						let elem = fields[field];
						let name = elem.input.name.charAt(0).toUpperCase() + elem.input.name.slice(1);
						return (
							<div className="form__inline" key={i}>
								<Form.Input
									{...elem.input}
									onChange={onChangeFirst}
									placeholder={name}
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
		const { handleSubmit, companies, valid, pristine, submitting, createOffice, resetForm } = this.props;

		const onSubmit = (formValues) => {
			createOffice(formValues);
			resetForm();
		};

		const positiveFloatNumber = (value, previousValue) => {
			const regexPattern = /(\d)/;
			return regexPattern.test(value) ? value : value.length === 0 ? '' : previousValue;
		};

		const reset = (e) => {
			e.preventDefault();
			resetForm();
		};

		return (
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Field name="name" component={this.renderInput} label="Name" />
				<Fields
					names={[ 'latitude', 'longitude' ]}
					component={this.renderLatLog}
					normalize={positiveFloatNumber}
					label="Location:"
				/>
				<Field
					name="officeStartDate"
					showTime={false}
					component={this.renderDatePicker}
					label="Office Start Date"
				/>
				<Field
					options={companies && companies.length > 0 ? companies : []}
					name="company"
					component={this.renderDropdown}
					label="Company"
					optionsKey="id"
					optionsValue="name"
				/>

				<Button primary className={valid ? '' : 'disabled'}>
					Create
				</Button>
				<Button secondary className={pristine || submitting ? 'disabled' : ''} onClick={reset}>
					Reset
				</Button>
			</Form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		companies: state.company.companies
	};
};

const mapDispatchToProps = (dispatch) => ({
	getCompanyList: () => {
		dispatch(getCompanyList());
	},
	createOffice: (formValues) => {
		dispatch(createOffice(formValues));
	},
	resetForm: () => {
		dispatch(reset('officeCreate'));
	}
});

export default reduxForm({
	form: 'officeCreate',
	validate
})(connect(mapStateToProps, mapDispatchToProps)(OfficeForm));
