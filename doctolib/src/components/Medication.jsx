import React from "react";
import { Container, Table } from "reactstrap";

import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Medication.module.css";
// import alarm from "../img/clock.png"

function Medication() {
  return (
    <>
      <Navbar />
      <Container>
          <div className={styles.nextMeditationAlert}>
              {/* <img src={alarm} alt="alarm logo"/> */}
              <h1>Next medication in 73 minutes</h1>
              <h2>Pillule D</h2>
          </div>
        <Table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th>Frequency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>Pillule A</td>
              <td>3 per day</td>
            </tr>
            <tr>
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>Pillule B</td>
              <td>2 per week</td>
            </tr>
            <tr>
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>Pillule C</td>
              <td>1 per day</td>
            </tr>
            <tr>
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>Pillule D</td>
              <td>3 per day</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <Footer />
    </>
  );
}

export default Medication;
