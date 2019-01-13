import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import Overview from './pages/Overview';
import Office from './pages/Office';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<React.Fragment>
					<Header />
					<Router>
						<Switch>
							<Route exact path="/" component={Overview} />
							<Route path="/detail/:id" render={(props) => <Office {...props} />} />
						</Switch>
					</Router>
				</React.Fragment>
			</Provider>
		);
	}
}

export default App;
