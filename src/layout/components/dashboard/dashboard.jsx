import React, { Component } from "react";
import "./dashboard.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          icon: "fas fa-globe",
          numbers: 42,
          detail: "Ongoing Process",
        },
        {
          icon: "fas fa-box",
          numbers: 85,
          detail: "Raw Materials",
        },
        {
          icon: "fas fa-globe",
          numbers: 55,
          detail: "Pending Orders",
        },
        {
          icon: "fas fa-box",
          numbers: "62K",
          detail: "Expenses",
        },
        // {
        //   icon: "fas fa-box",
        //   numbers: "116K",
        //   detail: "Income",
        // },
      ],
    };
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="boxes">
          {this.state.data.map((dat) => {
            return (
              <div className="box">
                <div className="top">
                  <i className="fas fa-info-circle"></i>
                </div>
                <div className="bottom">
                  <i className={dat.icon}></i>
                  <h1>{dat.numbers}</h1>
                  <p>{dat.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
