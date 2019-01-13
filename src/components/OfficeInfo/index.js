import React, { Component } from 'react';
import { Card, Header, Icon } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { openModal } from '../../actions/modal';
import { getCompanyId } from '../../actions/company';
import { getOfficeId } from '../../actions/office';

class OfficeInfo extends Component {
	render() {
		const info = this.props.office;
		const show = () => {
			this.props.openModal(info.company, this.props.id);
		};
		return (
			<Card>
				<Card.Content>
					<div className="company-info__heading">
						<Header as="h2">{info.name}</Header>
						<Icon onClick={show} className="pointer" name="delete" size="big" />
					</div>
				</Card.Content>
				<Card.Content>
					<Header as="h4">Location:</Header>
					<Card.Meta>Lat - {info.latitude}</Card.Meta>
					<Card.Meta>Log - {info.longitude}</Card.Meta>
					<Header as="h4">Office Start Date:</Header>
					<Card.Meta>{info.officeStartDate}</Card.Meta>
				</Card.Content>
			</Card>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	openModal: (companyId, officeId) => {
		dispatch(openModal());
		dispatch(getCompanyId(companyId));
		dispatch(getOfficeId(officeId));
	}
});

export default connect(null, mapDispatchToProps)(OfficeInfo);
