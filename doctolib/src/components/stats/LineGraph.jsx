import React from "react";
import { Line } from "react-chartjs-2";

import { api_url } from "../../api.js";
import Axios from "axios";

class LineGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      error: null,
    };
  }

  componentDidMount() {
    this.getWeight();
  }

  getWeight() {
    Axios.get(`${api_url}/weight`)
      .then(({ data }) => this.setState({ values: data }))
      .catch((err) => this.setState({ error: err }));
  }

  render() {
    const { values } = this.state;
    return (
      <div>
        <Line
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                label: "Rainfall",
                fill: false,
                lineTension: 0.5,
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(0,0,0,1)",
                borderWidth: 2,
                data: [
                  `${
                    values &&
                    values[values.length - 6] &&
                    values[values.length - 6].weight
                  }`,
                  `${
                    values &&
                    values[values.length - 5] &&
                    values[values.length - 5].weight
                  }`,
                  `${
                    values &&
                    values[values.length - 4] &&
                    values[values.length - 4].weight
                  }`,
                  `${
                    values &&
                    values[values.length - 3] &&
                    values[values.length - 3].weight
                  }`,
                  `${
                    values &&
                    values[values.length -2] &&
                    values[values.length - 2].weight
                  }`,
                  `${
                    values &&
                    values[values.length - 1] &&
                    values[values.length - 1].weight
                  }`,
                ],
              },
            ],
          }}
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
export default LineGraph;
