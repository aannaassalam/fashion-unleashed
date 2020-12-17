import React, { Component } from "react";
import "./list.css";

export default class List extends Component {
  render() {
    return (
      <div className="list">
        <i className="fas fa-exclamation"></i>
        <div className="details">
          <h5>{this.props.item.heading}</h5>
          <p>{this.props.item.details}</p>
        </div>
        <div className="days">
          <p>{this.props.item.daysAgo}</p>
        </div>
      </div>
    );
  }
}
