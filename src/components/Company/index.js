import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCompanyList } from '../../actions/company';

class Company extends Component {
	componentDidMount() {
		this.props.getCompanyList();
	}

	render() {
		if (!this.props.companies && this.props.companies.length === 0) {
			return (
				<div className="no-company__not-found">
					<h2>there is no companies created yet</h2>
				</div>
			);
		}

		return <div className="company__container">Company Container</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		companies: state.company.companies
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getCompanyList }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Company);
