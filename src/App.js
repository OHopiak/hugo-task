import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './assets/logo.svg';
import {InfoBanner, Login, ResetPassword, SignUp, VerifyEmail,} from './components'
import 'typeface-roboto'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="header">
					<img src={logo} className="logo" alt="logo"/>
				</div>
				<Router>
					<Switch>
						<Route exact path={'/'} component={Login}/>
						<Route exact path={'/signup'} component={SignUp}/>
						<Route exact path={'/reset'} component={ResetPassword}/>
						<Route exact path={'/verify'} component={VerifyEmail}/>
					</Switch>
				</Router>
				<InfoBanner/>
			</div>
		);
	}
}

export default App;
