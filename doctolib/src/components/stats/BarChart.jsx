import React from "react";
import { Bar } from "react-chartjs-2";

import styles from "./Stat.module.css";

const state = {
  labels: [
    "Morning",
    "Noon",
    "Evening",
    "Morning",
    "Noon",
    "Evening",
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
      data: [0.8, 2.1, 1.6, 0.9, 1.2],
    },
  ],
};

export default class BarChart extends React.Component {
  render() {
    return (
      <>
        <Bar
          className={styles.bar2}
          data={state}
          options={{
            legend: {
              display: false,
              position: "right",
            },
          }}
        />
      </>
    );
  }
}
