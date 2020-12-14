import React, { Component } from "react";
import "./sidebar.css";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shrink: false,
    };
  }

  render() {
    return (
      <div className={this.state.shrink ? "sidebar shrink" : "sidebar"}>
        <div className="items">
          <div
            className={this.props.tab === 1 ? "item active" : "item"}
            onClick={() => {
              this.props.handletab(1);
              this.setState({
                shrink: false,
              });
            }}
          >
            {this.state.shrink ? "D" : "Dashboard"}
          </div>
          <div
            className={this.props.tab === 2 ? "item active" : "item"}
            onClick={() => {
              this.props.handletab(2);
              this.setState({
                shrink: true,
              });
            }}
          >
            {this.state.shrink ? "G" : "General"}
          </div>
          <div
            className={this.props.tab === 3 ? "item active" : "item"}
            onClick={() => {
              this.props.handletab(3);
              this.setState({
                shrink: false,
              });
            }}
          >
            {this.state.shrink ? "S" : "Stocks"}
          </div>
          <div
            className={this.props.tab === 4 ? "item active" : "item"}
            onClick={() => {
              this.props.handletab(4);
              this.setState({
                shrink: false,
              });
            }}
          >
            {this.state.shrink ? "PO" : "Pay Order"}
          </div>
          <div
            className={this.props.tab === 5 ? "item active" : "item"}
            onClick={() => {
              this.props.handletab(5);
              this.setState({
                shrink: false,
              });
            }}
          >
            {this.state.shrink ? "B" : "Bills"}
          </div>
          <div
            className={this.props.tab === 6 ? "item active" : "item"}
            onClick={() => {
              this.props.handletab(6);
              this.setState({
                shrink: false,
              });
            }}
          >
            {this.state.shrink ? "DM" : "Design Manufacturing"}
          </div>
          <div
            className={this.props.tab === 7 ? "item active" : "item"}
            onClick={() => {
              this.props.handletab(7);
              this.setState({
                shrink: false,
              });
            }}
          >
            {this.state.shrink ? "P" : "Processes"}
          </div>
          <div
            className={this.props.tab === 8 ? "item active" : "item"}
            onClick={() => {
              this.props.handletab(8);
              this.setState({
                shrink: false,
              });
            }}
          >
            {this.state.shrink ? "LD" : "Lot Details"}
          </div>
        </div>
      </div>
    );
  }
}
