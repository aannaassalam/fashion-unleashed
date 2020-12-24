import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./layout/pages/homepage/homepage";
import { fetchUser } from "./redux/actions/authActions";
import Login from "./layout/pages/Login";
import { connect } from "react-redux";
import firebase from "firebase";
class App extends React.Component {
	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.props.fetchUser(user.email);
			}
		});
	}
	render() {
		return (
			<div className='App'>
				<BrowserRouter>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/Login' component={Login} />
				</BrowserRouter>
			</div>
		);
	}
}
function mapDispatchToProps(dispatch) {
	return {
		fetchUser: (email) => dispatch(fetchUser(email)),
	};
}

export default connect(null, mapDispatchToProps)(App);
