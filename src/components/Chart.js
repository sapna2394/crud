import React from "react";
import ReactApexChart from "react-apexcharts";
import "/home/sapna/Desktop/crud/src/App.css"

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["Add", "Update", "Edit", "Delete"],
        theme: {
          monochrome: {
            enabled: false
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "100%"
              },
              legend: {
                show: false
              }
            }
          }
        ],
        chart: {
          events: {
            dataPointSelection: (event, chartContext, config) => {
              console.log(config.w.config.labels[config.dataPointIndex]);
            }
          }
        }
      },
      series: [74, 50, 18, 43]
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width="400"
        />
      </div>
    );
  }
}


export default PieChart;