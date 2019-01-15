import React, { Component } from 'react';
import { Card, Header, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './CompanyInfo.scss';

import { connect } from 'react-redux';
import { openModal } from '../../actions/modal';
import { getCompanyId } from '../../actions/company';

class CompanyInfo extends Component {
	render() {
		const { link, id, company: { name, address, revenue, code, phone }, openModal } = this.props;

		const show = () => {
			openModal(id);
		};

		return (
			<React.Fragment>
				<Card className={link ? '' : 'width__card--full'}>
					<Card.Content>
						<div className="company-info__heading">
							{link ? (
								<React.Fragment>
									<Link to={'/detail/' + id}>
										<Header as="h2">{name}</Header>
									</Link>
									<div className="company-info__action">
										<Icon className="pointer" name="edit" size="big" />
										<Icon onClick={show} className="pointer" name="delete" size="big" />
									</div>
								</React.Fragment>
							) : (
								<Header as="h2">{name}</Header>
							)}
						</div>
					</Card.Content>
					<Card.Content>
						<Header as="h4">Address:</Header>
						<Card.Meta>{address}</Card.Meta>
						<Header as="h4">Revenue:</Header>
						<Card.Meta>{revenue}</Card.Meta>
						<Header as="h4">Phone No:</Header>
						<Card.Meta className={link ? '' : 'phone__button'}>
							({code}) {phone}
							{link ? (
								''
							) : (
								<Link to="/">
									<Button>Back to overview page</Button>
								</Link>
							)}
						</Card.Meta>
					</Card.Content>
				</Card>
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	openModal: (index) => {
		dispatch(openModal());
		dispatch(getCompanyId(index));
	}
});

export default connect(null, mapDispatchToProps)(CompanyInfo);
