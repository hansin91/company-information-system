import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import company from './company';
import office from './office';
import modal from './modal';

export default combineReducers({
	company,
	office,
	modal,
	form: formReducer,
	routing: routerReducer
});
