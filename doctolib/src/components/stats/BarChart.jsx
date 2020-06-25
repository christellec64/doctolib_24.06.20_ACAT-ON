import React from "react";
import { Bar } from "react-chartjs-2";

import { api_url } from "../../api.js";

import styles from "./Stat.module.css";
import Axios from "axios";

const data = {
  labels: [
    "23/06",
    "8am",
    "Lunch",
    "Diner",
    "24/06",
    "Morning",
    "Noon",
    "Evening",
    "25/06",
    "Morning",
    "Noon",
    "Evening",
  ],
  datasets: [
    {
      label: "Glucose statement",
      backgroundColor: " #f3724a",
      borderColor: " #f3724a",
      borderWidth: 2,
      data: [0, 0.8, 2.1, 1.6, 0, 0.9, 1.2, 1.1, 0, 0.9, 2.0, 1.8],
    },
  ],
};

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
      values: [],
      error: null,
    };
  }

  componentDidMount() {
    this.getGlucose();
  }

  getGlucose() {
    Axios.get(`${api_url}/glucose`)
      .then(({ data }) => this.setState({ values: data }))
      .catch((err) => this.setState({ error: err }));
  }

  render() {
    console.log(this.state.values);
    const { values } = this.state;
    return (
      <>
        <Bar
          className={styles.bar2}
          data={{
            labels: [
              `${
                values &&
                values[values.length - 3] &&
                values[values.length - 3].date
              }`,
              "8am",
              "Lunch",
              "Diner",
              `${
                values &&
                values[values.length - 2] &&
                values[values.length - 2].date
              }`,
              "Morning",
              "Noon",
              "Evening",
              `${
                values &&
                values[values.length - 1] &&
                values[values.length - 1].date
              }`,
              "Morning",
              "Noon",
              "Evening",
            ],
            datasets: [
              {
                label: "Glucose statement",
                backgroundColor: " #f3724a",
                borderColor: " #f3724a",
                borderWidth: 2,
                data: [
                  0,
                  `${
                    values &&
                    values[values.length - 3] &&
                    values[values.length - 3].breakfast
                  }`,
                  `${
                    values &&
                    values[values.length - 3] &&
                    values[values.length - 3].lunch
                  }`,
                  `${
                    values &&
                    values[values.length - 3] &&
                    values[values.length - 3].diner
                  }`,
                  0,
                  `${
                    values &&
                    values[values.length - 2] &&
                    values[values.length - 2].breakfast
                  }`,
                  `${
                    values &&
                    values[values.length - 2] &&
                    values[values.length - 2].lunch
                  }`,
                  `${
                    values &&
                    values[values.length - 2] &&
                    values[values.length - 2].diner
                  }`,
                  0,
                  `${
                    values &&
                    values[values.length - 1] &&
                    values[values.length - 1].breakfast
                  }`,
                  `${
                    values &&
                    values[values.length - 1] &&
                    values[values.length - 1].lunch
                  }`,
                  `${
                    values &&
                    values[values.length - 1] &&
                    values[values.length - 1].diner
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
              xAxes: [
                {
                  barThickness: 10,
                },
              ],
            },
          }}
        />
      </>
    );
  }
}
export default BarChart;
