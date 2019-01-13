import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findCompany } from '../../actions/company';
import CompanyInfo from '../../components/CompanyInfo';

import './Office.scss';
import GridContainer from '../../components/GridContainer';
import { CardGroup } from 'semantic-ui-react';
import OfficeInfo from '../../components/OfficeInfo';
import ModalConfirmation from '../../components/Modal';

class Office extends Component {
	componentDidMount() {
		let id = this.props.match.params.id;
		this.props.findCompany(id);
	}

	render() {
		return (
			<div className="office__page">
				<div className="office__page__container">
					{this.props.company.hasOwnProperty('name') ? (
						<CompanyInfo link={false} company={this.props.company} />
					) : (
						<div>Not Found</div>
					)}
					<GridContainer title="Offices">
						{this.props.company.hasOwnProperty('offices') && this.props.company.offices.length > 0 ? (
							<CardGroup itemsPerRow={2}>
								{this.props.company.offices.map((element, i) => {
									return <OfficeInfo id={i} office={element} key={i} />;
								})}
							</CardGroup>
						) : (
							<div>There is no offices created yet.</div>
						)}
					</GridContainer>
					<ModalConfirmation
						delete="office"
						companyId={this.props.companyId}
						officeId={this.props.officeId}
						header="Delete Confirmation"
						dimmer={this.props.dimmer}
						open={this.props.open}
					>
						<p>Are you sure want to delete this data ?</p>
					</ModalConfirmation>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		company: state.company.company,
		companyId: state.company.id,
		officeId: state.office.id,
		dimmer: state.modal.dimmer,
		open: state.modal.open
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ findCompany }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Office);
