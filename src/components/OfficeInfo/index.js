import React from 'react';
import { Card, Header, Icon } from 'semantic-ui-react';

const OfficeInfo = (props) => {
	const info = props.office;
	return (
		<Card>
			<Card.Content>
				<div className="company-info__heading">
					<Header as="h2">{info.name}</Header>
					<Icon className="pointer" name="delete" size="big" />
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
};

export default OfficeInfo;
