import React from "react";
import "./style.css";
import { connect } from "react-redux";
import { loginUser } from "../../../redux/actions/authActions";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			loading: false,
		};
	}

	handleSubmit = () => {
		var email = this.state.email;
		var password = this.state.password;
		const userData = {
			email,
			password,
		};
		this.props.loginUser(userData);
		this.setState({
			loading: true,
		});
	};

	render() {
		console.log(this.props.auth);
		if (this.props.auth.currentUser) {
			return <Redirect to='/' />;
		}
		return (
			<div className='background-box'>
				<input
					type='email'
					placeholder='Enter email'
					onChange={(e) => {
						this.setState({ email: e.target.value });
					}}
				/>
				<input
					type='password'
					placeholder='Password'
					onChange={(e) => {
						this.setState({ password: e.target.value });
					}}
				/>
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
					}}>
					{this.state.loading ? (
						<p>Loading</p>
					) : (
						<div variant='primary' type='button' onClick={this.handleSubmit}>
							Submit
						</div>
					)}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		loginUser: (userData) => dispatch(loginUser(userData)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
