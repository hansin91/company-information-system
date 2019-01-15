import React from 'react';
import './Form.scss';

const Form = (props) => {
	const { title, children } = props;
	return (
		<div className="form__container">
			<h1>{title ? title : ''}</h1>
			{children}
		</div>
	);
};

export default Form;
