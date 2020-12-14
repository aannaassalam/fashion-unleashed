import React, { Component } from "react";
import "./navbar.css";
import profile from "../../../assets/winkboy.svg";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <i className="far fa-bell"></i>
        <div className="profilepic">
          <img src={profile} alt="" />
          <div className="dropdown">
            <div className="logout">Logout</div>
          </div>
        </div>
      </div>
    );
  }
}
