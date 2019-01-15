import React from 'react';
import './GridContainer.scss';

const GridContainer = (props) => {
	const { title, children } = props;
	return (
		<React.Fragment>
			<div className="grid__heading">
				<h1 className="grid__heading--title">{title ? title : ''}</h1>
			</div>

			<div className="grid__container">{children}</div>
		</React.Fragment>
	);
};

export default GridContainer;
