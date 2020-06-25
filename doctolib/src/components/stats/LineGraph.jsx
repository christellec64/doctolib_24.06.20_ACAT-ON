import React from "react";
import { Line } from "react-chartjs-2";

const state = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Rainfall",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 66, 64, 65, 66, 67],
    },
  ],
};

export default class LineGraph extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            legend: {
              display: false,
              position: "right",
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    stepSize: 10,
                    suggestedMin: 50,
                    suggestedMax: 90,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}
