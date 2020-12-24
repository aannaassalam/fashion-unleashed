import React, { Component } from "react";
import Bills from "../../components/bills/bills";
import Dashboard from "../../components/dashboard/dashboard";
import General from "../../components/general/general";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import Stocks from "../../components/stocks/stocks";
import PayOrder from "../../components/payOrder/payOrder";
import DesignManufacturing from "../../components/designManufacturing/designManufacturing";
import Process from "../../components/process/process";
import LotDetails from "../../components/lotDetails/lotDetails";
import "./homepage.css";
import Roles from "../../components/roles/roles";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tab: 1,
		};
	}

	render() {
		console.log(this.props.auth);
		if (this.props.auth.currentUser === null) {
			return <Redirect to='/login' />;
		}
		return (
			<div className='home-container'>
				<Sidebar
					tab={this.state.tab}
					handletab={(toggle) => {
						this.setState({
							tab: toggle,
						});
					}}
				/>
				<div className='content'>
					<Navbar />
					{this.state.tab === 1 ? <Dashboard /> : null}
					{this.state.tab === 2 ? <General /> : null}
					{this.state.tab === 3 ? <Stocks /> : null}
					{this.state.tab === 4 ? <PayOrder /> : null}
					{this.state.tab === 5 ? <Bills /> : null}
					{this.state.tab === 6 ? <DesignManufacturing /> : null}
					{this.state.tab === 7 ? <Process /> : null}
					{this.state.tab === 8 ? <LotDetails /> : null}
					{this.state.tab === 9 ? <Roles /> : null}
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

export default connect(mapStateToProps)(Homepage);
