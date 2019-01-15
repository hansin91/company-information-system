import React, { Component } from 'react';
import CompanyInfo from '../../components/CompanyInfo';
import PropTypes from 'prop-types';

import './Overview.scss';
import GridContainer from '../../components/GridContainer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCompanyList } from '../../actions/company';

import { CardGroup } from 'semantic-ui-react';
import Form from '../../components/Form';
import CompanyForm from '../../components/CompanyForm';
import OfficeForm from '../../components/OfficeForm';
import ModalConfirmation from '../../components/Modal';
import FlashMessage from '../../components/FlashMessage';

class Overview extends Component {
	componentDidMount() {
		this.props.getCompanyList();
	}

	render() {
		const { companies, open, dimmer, id, type } = this.props;
		return (
			<React.Fragment>
				<div className="overview">
					<FlashMessage />
					<div className="overview__form">
						<Form title="Create Company">
							<CompanyForm />
						</Form>
						<Form title="Create Office">
							<OfficeForm />
						</Form>
					</div>
					<GridContainer title="Companies">
						{companies.length > 0 ? (
							<CardGroup itemsPerRow={2}>
								{companies.map((element, i) => {
									return <CompanyInfo link={true} id={i} company={JSON.parse(element)} key={i} />;
								})}
							</CardGroup>
						) : (
							<div>There is no company created yet.</div>
						)}
					</GridContainer>

					{type === 'delete' ? (
						<ModalConfirmation
							id={id}
							type={type}
							isCompany={true}
							header="Delete Confirmation"
							dimmer={dimmer}
							open={open}
						>
							<p>Are you sure want to delete this data ?</p>
						</ModalConfirmation>
					) : (
						<ModalConfirmation
							id={id}
							type={type}
							isCompany={true}
							header="Edit Company"
							dimmer={dimmer}
							open={open}
						>
							<p>Are you sure want to delete this data ?</p>
						</ModalConfirmation>
					)}
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		companies: state.company.companies,
		id: state.company.id,
		open: state.modal.open,
		dimmer: state.modal.dimmer,
		messages: state.message.messages,
		type: state.modal.type
	};
};

Overview.prototypes = {
	companies: PropTypes.array.isRequired,
	id: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	dimmer: PropTypes.bool.isRequired,
	messages: PropTypes.array.isRequired,
	getCompanyList: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getCompanyList }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
