import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import company from './company';
import office from './office';
import modal from './modal';
import message from './message';

export default combineReducers({
	company,
	office,
	modal,
	message,
	form: formReducer,
	routing: routerReducer
});
