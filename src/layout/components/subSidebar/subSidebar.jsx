import React, { Component } from "react";
import "./subSidebar.css";

export default class SubSidebar extends Component {
  render() {
    return (
      <div className={this.props.shrink ? "subSidebar active" : "subSidebar"}>
        <div className="items">
          <div className="item">Categories</div>
          <div className="item">Materials</div>
          <div className="item">Vendors</div>
          <div className="item">Processes</div>
          <div className="item">Create Design</div>
        </div>
      </div>
    );
  }
}
