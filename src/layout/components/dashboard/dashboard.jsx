import React, { Component } from "react";
import AreaChart from "../areaChart/areaChart";
import "./dashboard.css";
import warning from "../../../assets/warning.svg";
import List from "../list/list";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          icon: "fas fa-sitemap",
          detail: "Ongoing Jobs",
          progress: 45,
          task: 5,
          timeLeft: "5 Days",
        },
        {
          icon: "fas fa-dolly-flatbed",
          detail: "Outstanding Bills",
          progress: 75,
          task: 5,
          timeLeft: "5 Week",
        },
        {
          icon: "fas fa-clipboard-list",
          detail: "Delayed Jobs",
          progress: 20,
          task: 5,
          timeLeft: "12 Days",
        },
        {
          icon: "fas fa-rupee-sign",
          detail: "Escalations",
          progress: 90,
          task: 5,
          timeLeft: "8 Days",
          image: warning,
        },
        // {
        //   icon: "fas fa-box",
        //   numbers: "116K",
        //   detail: "Income",
        // },
      ],

      escalations: [
        {
          heading: "Dying",
          details: "Dying fault",
          daysAgo: "2 Days Ago",
        },
        {
          heading: "Pay Order",
          details: "Pending Pay Order",
          daysAgo: "5 Days Ago",
        },
        {
          heading: "Material",
          details: "Damaged Material found",
          daysAgo: "8 Days Ago",
        },
        {
          heading: "Expenses",
          details: "High expenses this month",
          daysAgo: "23 Days Ago",
        },
      ],
      ongoingProcesses: [
        {
          heading: "Dying",
          details: "Dying fault",
          daysAgo: "2 Days Ago",
        },
        {
          heading: "Pay Order",
          details: "Pending Pay Order",
          daysAgo: "5 Days Ago",
        },
        {
          heading: "Material",
          details: "Damaged Material found",
          daysAgo: "8 Days Ago",
        },
        {
          heading: "Expenses",
          details: "High expenses this month",
          daysAgo: "23 Days Ago",
        },
      ],
      dues: [
        {
          heading: "Vendor1",
          detail: "25th November, 2020",
          daysAgo: "₹2580",
        },
        {
          heading: "Vendor2",
          detail: "25th November, 2020",
          daysAgo: "₹58580",
        },
        {
          heading: "Vendor4",
          detail: "25th November, 2020",
          daysAgo: "₹22580",
        },
        {
          heading: "Vendor3",
          detail: "25th November, 2020",
          daysAgo: "₹9580",
        },
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
                <div className="body">
                  {dat.image ? (
                    <div className="image">
                      <img src={dat.image} alt="" />
                    </div>
                  ) : (
                    <i className={dat.icon}></i>
                  )}
                  <h3>{dat.detail}</h3>
                  <h2>{dat.progress}</h2>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bottom">
          <div className="left">
            <div className="graph">
              <AreaChart
                options={this.state.options}
                series={this.state.series}
              />
            </div>
            <div className="recent">
              <div className="ongoing">
                <h3>Recent Ongoing Processes</h3>
                {this.state.ongoingProcesses.map((process, index) => {
                  return <List item={process} key={index} />;
                })}
              </div>
              <div className="dues">
                <h3>Dues</h3>
                {this.state.dues.map((due, index) => {
                  return <List item={due} key={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="right">
            <h3>Escalations</h3>
            {this.state.escalations.map((escalation, index) => {
              return <List item={escalation} key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
