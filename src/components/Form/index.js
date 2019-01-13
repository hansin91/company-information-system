import React from 'react';
import './Form.scss';

const Form = (props) => {
	return (
		<div className="form__container">
			<h1>{props.title ? props.title : ''}</h1>
			{props.children}
		</div>
	);
};

export default Form;
