import React, { Component } from "react";
import "./roles.css";
import Switch from "react-switch";

export default class Roles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btn1: true,
    };
  }

  handleChange = (value) => {
    this.setState({
      btn1: value,
    });
  };

  render() {
    return (
      <div className="roles">
        <div className="head">
          <h1>Edit Permissions</h1>
          <div className="breadcrumb">
            <p>Roles</p>
            <i className="fas fa-chevron-right"></i>
            <p>Edit Permissions</p>
          </div>
        </div>
        <div className="body">
          <div className="permissions">
            <h5 className="permission-title">Permission List</h5>
            <div className="permission-list">
              <div className="permission-head">
                <div className="first-div head-div">
                  <h5>Modules</h5>
                </div>
                <div className="head-div">
                  <h5>Access</h5>
                </div>
                <div className="head-div">
                  <h5>Add</h5>
                </div>
                <div className="head-div">
                  <h5>Edit</h5>
                </div>
                <div className="head-div">
                  <h5>Details</h5>
                </div>
                <div className="head-div">
                  <h5>Delete</h5>
                </div>
                <div className="head-div">
                  <h5>Status</h5>
                </div>
              </div>
              <div className="permission-body">
                <div className="row">
                  <div className="first-div">
                    <p>Dashboards</p>
                  </div>
                  <div className="switch-holder">
                    <div>
                      <Switch
                        checked={this.state.btn1}
                        onChange={this.handleChange}
                        onColor="#18B68F"
                        width={50}
                        uncheckedIcon={<div></div>}
                        checkedIcon={<div></div>}
                        className="react-switch"
                        id="icon-switch"
                      />
                    </div>
                  </div>
                  <div className="null-holder">
                    <p>NA</p>
                  </div>
                  <div className="null-holder">
                    <p>NA</p>
                  </div>
                  <div className="null-holder">
                    <p>NA</p>
                  </div>
                  <div className="null-holder">
                    <p>NA</p>
                  </div>
                  <div className="null-holder">
                    <p>NA</p>
                  </div>
                </div>
                <div className="row">
                  <div className="first-div">
                    <p>General</p>
                  </div>
                  <div className="switch-holder">
                    <div>
                      <Switch
                        checked={this.state.btn1}
                        onChange={this.handleChange}
                        onColor="#18B68F"
                        width={50}
                        uncheckedIcon={<div></div>}
                        checkedIcon={<div></div>}
                        className="react-switch"
                        id="icon-switch"
                      />
                    </div>
                  </div>
                  <div className="switch-holder">
                    <div>
                      <Switch
                        checked={this.state.btn1}
                        onChange={this.handleChange}
                        onColor="#18B68F"
                        width={50}
                        uncheckedIcon={<div></div>}
                        checkedIcon={<div></div>}
                        className="react-switch"
                        id="icon-switch"
                      />
                    </div>
                  </div>
                  <div className="switch-holder">
                    <div>
                      <Switch
                        checked={this.state.btn1}
                        onChange={this.handleChange}
                        onColor="#18B68F"
                        width={50}
                        uncheckedIcon={<div></div>}
                        checkedIcon={<div></div>}
                        className="react-switch"
                        id="icon-switch"
                      />
                    </div>
                  </div>
                  <div className="null-holder">
                    <p>NA</p>
                  </div>
                  <div className="null-holder">
                    <p>NA</p>
                  </div>
                  <div className="null-holder">
                    <p>NA</p>
                  </div>
                </div>
                <div className="row">
                  <div className="first-div">
                    <p>Sub Admins</p>
                  </div>
                  <div className="switch-holder">
                    <div>
                      <Switch
                        checked={this.state.btn1}
                        onChange={this.handleChange}
                        onColor="#18B68F"
                        width={50}
                        uncheckedIcon={<div></div>}
                        checkedIcon={<div></div>}
                        className="react-switch"
                        id="icon-switch"
                      />
                    </div>
                  </div>
                  <div className="switch-holder">
                    <div>
                      <Switch
                        checked={this.state.btn1}
                        onChange={this.handleChange}
                        onColor="#18B68F"
                        width={50}
                        uncheckedIcon={<div></div>}
                        checkedIcon={<div></div>}
                        className="react-switch"
                        id="icon-switch"
                      />
                    </div>
                  </div>
                  <div className="switch-holder">
                    <div>
                      <Switch
                        checked={this.state.btn1}
                        onChange={this.handleChange}
                        onColor="#18B68F"
                        width={50}
                        uncheckedIcon={<div></div>}
                        checkedIcon={<div></div>}
                        className="react-switch"
                        id="icon-switch"
                      />
                    </div>
                  </div>
                  <div className="null-holder">
                    <p>NA</p>
                  </div>
                  <div className="null-holder">
                    <p>NA</p>
                  </div>
                  <div className="null-holder">
                    <p>NA</p>
                  </div>
                </div>
                <div className="row">
                  <div className="first-div">
                    <p>Colors</p>
                  </div>
                  <div className="switch-holder">
                    <div>
                      <Switch
                        checked={this.state.btn1}
                        onChange={this.handleChange}
                        onColor="#18B68F"
                        width={50}
                        uncheckedIcon={<div></div>}
                        checkedIcon={<div></div>}
                        className="react-switch"
                        id="icon-switch"
                      />
                    </div>
                  </div>
                  <div className="switch-holder">
                    <div>
                      <Switch
                        checked={this.state.btn1}
                        onChange={this.handleChange}
                        onColor="#18B68F"
                        width={50}
                        uncheckedIcon={<div></div>}
                        checkedIcon={<div></div>}
                        className="react-switch"
                        id="icon-switch"
                      />
                    </div>
                  </div>
                  <div className="switch-holder">
                    <div>
                      <Switch
                        checked={this.state.btn1}
                        onChange={this.handleChange}
                        onColor="#18B68F"
                        width={50}
                        uncheckedIcon={<div></div>}
                        checkedIcon={<div></div>}
                        className="react-switch"
                        id="icon-switch"
                      />
                    </div>
                  </div>
                  <div className="switch-holder">
                    <div>
                      <Switch
                        checked={this.state.btn1}
                        onChange={this.handleChange}
                        onColor="#18B68F"
                        width={50}
                        uncheckedIcon={<div></div>}
                        checkedIcon={<div></div>}
                        className="react-switch"
                        id="icon-switch"
                      />
                    </div>
                  </div>
                  <div className="null-holder">
                    <p>NA</p>
                  </div>
                  <div className="null-holder">
                    <p>NA</p>
                  </div>
                </div>
                <div className="row">
                  <div className="first-div">
                    <p>Roles</p>
                  </div>
                  <div className="switch-holder">
                    <div>
                      <Switch
                        checked={this.state.btn1}
                        onChange={this.handleChange}
                        onColor="#18B68F"
                        width={50}
                        uncheckedIcon={<div></div>}
                        checkedIcon={<div></div>}
                        className="react-switch"
                        id="icon-switch"
                      />
                    </div>
                  </div>
                  <div className="switch-holder">
                    <div>
                      <Switch
                        checked={this.state.btn1}
                        onChange={this.handleChange}
                        onColor="#18B68F"
                        width={50}
                        uncheckedIcon={<div></div>}
                        checkedIcon={<div></div>}
                        className="react-switch"
                        id="icon-switch"
                      />
                    </div>
                  </div>
                  <div className="null-holder">
                    <p>NA</p>
                  </div>
                  <div className="null-holder">
                    <p>NA</p>
                  </div>
                  <div className="switch-holder">
                    <div>
                      <Switch
                        checked={this.state.btn1}
                        onChange={this.handleChange}
                        onColor="#18B68F"
                        width={50}
                        uncheckedIcon={<div></div>}
                        checkedIcon={<div></div>}
                        className="react-switch"
                        id="icon-switch"
                      />
                    </div>
                  </div>
                  <div className="null-holder">
                    <p>NA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
