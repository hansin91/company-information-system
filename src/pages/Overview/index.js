import React, { Component } from 'react';
import CompanyInfo from '../../components/CompanyInfo';

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

class Overview extends Component {
	componentDidMount() {
		this.props.getCompanyList();
	}

	render() {
		return (
			<div className="overview">
				<div className="overview__form">
					<Form title="Create Company">
						<CompanyForm />
					</Form>
					<Form title="Create Office">
						<OfficeForm />
					</Form>
				</div>
				<GridContainer title="Companies">
					{this.props.companies.length > 0 ? (
						<CardGroup itemsPerRow={2}>
							{this.props.companies.map((element, i) => {
								return <CompanyInfo link={true} id={i} company={JSON.parse(element)} key={i} />;
							})}
						</CardGroup>
					) : (
						<div>There is no company created yet.</div>
					)}
				</GridContainer>
				<ModalConfirmation
					id={this.props.id}
					header="Delete Confirmation"
					dimmer={this.props.dimmer}
					open={this.props.open}
				>
					<p>Are you sure want to delete this data ?</p>
				</ModalConfirmation>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		companies: state.company.companies,
		id: state.company.id,
		open: state.modal.open,
		dimmer: state.modal.dimmer
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getCompanyList }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
