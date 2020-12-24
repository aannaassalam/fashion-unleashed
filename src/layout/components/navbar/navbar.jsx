import React, { Component } from "react";
import "./navbar.css";
import profile from "../../../assets/winkboy.svg";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";
class Navbar extends Component {
	handleLogout = () => {
		this.props.logoutUser();
	};
	render() {
		return (
			<div className='navbar'>
				<i className='far fa-bell'></i>
				<div className='profilepic'>
					<img src={profile} alt='' />
					<div className='dropdown'>
						<div onClick={this.handleLogout} className='logout'>
							Logout
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		logoutUser: () => dispatch(logoutUser()),
	};
}

export default connect(null, mapDispatchToProps)(Navbar);
