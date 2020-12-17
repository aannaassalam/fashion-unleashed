import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class AreaChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Expense",
          data: [546, 624, 652, 985, 371, 363, 911, 653],
        },
        {
          name: "Income",
          data: [374, 687, 365, 364, 874, 587, 941, 768],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },

        title: {
          text: "Accounts",
          align: "left",
        },
        subtitle: {
          text: "Price Movements",
          align: "left",
        },
        labels: [
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        xaxis: {
          type: [],
        },
        yaxis: {
          opposite: false,
        },
      },
    };
  }

  render() {
    return (
      <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          // width={800}
          height={280}
          style={{
            margin: "0 auto",
            width: "95%",
          }}
        />
      </div>
    );
  }
}
