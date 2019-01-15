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
		const { type, company, companyId, officeId, dimmer, open, company: { offices } } = this.props;

		return (
			<div className="office__page">
				<div className="office__page__container">
					{company.hasOwnProperty('name') ? (
						<CompanyInfo link={false} company={company} />
					) : (
						<div>Not Found</div>
					)}
					<GridContainer title="Offices">
						{company.hasOwnProperty('offices') && offices.length > 0 ? (
							<CardGroup itemsPerRow={2}>
								{offices.map((element, i) => {
									return <OfficeInfo id={i} office={element} key={i} />;
								})}
							</CardGroup>
						) : (
							<div>There is no offices created yet.</div>
						)}
					</GridContainer>

					{type === 'delete' ? (
						<ModalConfirmation
							isCompany={false}
							companyId={companyId}
							officeId={officeId}
							header="Delete Confirmation"
							dimmer={dimmer}
							open={open}
						>
							<p>Are you sure want to delete this data ?</p>
						</ModalConfirmation>
					) : (
						<ModalConfirmation
							isCompany={false}
							companyId={companyId}
							officeId={officeId}
							header="Edit Office"
							dimmer={dimmer}
							open={open}
						>
							<p>Are you sure want to delete this data ?</p>
						</ModalConfirmation>
					)}
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
		open: state.modal.open,
		type: state.modal.type
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ findCompany }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Office);
