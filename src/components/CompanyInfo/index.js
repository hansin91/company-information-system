import React, { Component } from 'react';
import { Card, Header, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './CompanyInfo.scss';
import ModalDelete from '../Modal';

class CompanyInfo extends Component {
	state = { open: false };

	show = (dimmer) => () => this.setState({ dimmer, open: true });
	// close = () => this.setState({ open: false });

	close = () => {};

	render() {
		const info = this.props.company;
		return (
			<React.Fragment>
				<Card className={this.props.link ? '' : 'width__card--full'}>
					<Card.Content>
						<div className="company-info__heading">
							{this.props.link ? (
								<React.Fragment>
									<Link to={'/detail/' + this.props.id}>
										<Header as="h2">{info.name}</Header>
									</Link>
									<Icon onClick={this.show(true)} className="pointer" name="delete" size="big" />
								</React.Fragment>
							) : (
								<Header as="h2">{info.name}</Header>
							)}
						</div>
					</Card.Content>
					<Card.Content>
						<Header as="h4">Address:</Header>
						<Card.Meta>{info.address}</Card.Meta>
						<Header as="h4">Revenue:</Header>
						<Card.Meta>{info.revenue}</Card.Meta>
						<Header as="h4">Phone No:</Header>
						<Card.Meta className={this.props.link ? '' : 'phone__button'}>
							({info.code}) {info.phone}
							{this.props.link ? (
								''
							) : (
								<Link to="/">
									<Button>Back to overview page</Button>
								</Link>
							)}
						</Card.Meta>
					</Card.Content>
				</Card>
				<ModalDelete dimmer={this.state.dimmer} open={this.state.open} onClick={this.close} />
			</React.Fragment>
		);
	}
}

export default CompanyInfo;
