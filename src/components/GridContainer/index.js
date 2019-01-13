import React from 'react';
import './GridContainer.scss';

const GridContainer = (props) => {
	return (
		<React.Fragment>
			<div className="grid__heading">
				<h1 className="grid__heading--title">{props.title ? props.title : ''}</h1>
			</div>

			<div className="grid__container">{props.children}</div>
		</React.Fragment>
	);
};

export default GridContainer;
