import React, { useState } from "react";
import { Container, Table, Row, Col, Button, Collapse } from "reactstrap";

import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Medication.module.css";
import alarm from "../img/clock.png";
import { Link } from "react-router-dom";

const pills = [
  {
    id: 1,
    label: "Pillule A",
    dosage: "",
    frequency: 3,
    time: "per day",
  },
  {
    id: 2,
    label: "Pillule B",
    dosage: "",
    frequency: 2,
    time: "per week",
  },
  {
    id: 3,
    label: "Pillule C",
    dosage: "",
    frequency: 1,
    time: "per day",
  },
  {
    id: 3,
    label: "Pillule D",
    dosage: "",
    frequency: 3,
    time: "per day",
  },
];

function Medication() {
  const [collapseA, setCollapseA] = useState(false);
  const [collapseB, setCollapseB] = useState(false);
  const [collapseC, setCollapseC] = useState(false);
  const [collapseD, setCollapseD] = useState(false);

  const toggleA = () => setCollapseA(!collapseA);
  const toggleB = () => setCollapseB(!collapseB);
  const toggleC = () => setCollapseC(!collapseC);
  const toggleD = () => setCollapseD(!collapseD);

  const [status, setStatus] = useState("Closed");

  const onEntering = () => setStatus("Opening...");

  const onEntered = () => setStatus("Opened");

  const onExiting = () => setStatus("Closing...");

  const onExited = () => setStatus("Closed");
  return (
    <>
      <Navbar title="My medication" />
      <Container className={styles.nextMeditationContainer}>
        <Row className={styles.nextMeditationAlert}>
          <Col xs="2">
            <img
              src={alarm}
              alt="alarm logo"
              width="50vw"
              className="xs-auto"
            />
          </Col>
          <Col>
            <p>Next medication in 73 minutes</p>
            <p>Pillule D</p>
          </Col>
        </Row>
      </Container>
      <Container className={styles.medicationTableContainer}>
        <Table className={styles.medicationTable}>
          <thead>
            <tr>
              <th />
              <th>Name</th>
              <th className={styles.colRight}>Frequency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <input type="checkbox" onClick={toggleA} />
              </th>
              <td>{pills[0].label}</td>
              <td className={styles.colRight}>
                {pills[0].frequency} {pills[0].time}
              </td>
            </tr>
            <tr>
              <td />
              <td />
              <td className={styles.colRight}>
                <Collapse
                  isOpen={collapseA}
                  onEntering={onEntering}
                  onEntered={onEntered}
                  onExiting={onExiting}
                  onExited={onExited}
                >
                  <Button className={styles.buttonMedication}>Edit</Button>
                </Collapse>
                <Collapse
                  isOpen={collapseA}
                  onEntering={onEntering}
                  onEntered={onEntered}
                  onExiting={onExiting}
                  onExited={onExited}
                >
                  <Button className={styles.buttonMedication}>Delete</Button>
                </Collapse>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <input type="checkbox" onClick={toggleB} />
              </th>
              <td>{pills[1].label}</td>
              <td className={styles.colRight}>
                {pills[1].frequency} {pills[1].time}
              </td>
            </tr>
            <tr>
              <td />
              <td />
              <td className={styles.colRight}>
                <Collapse
                  isOpen={collapseB}
                  onEntering={onEntering}
                  onEntered={onEntered}
                  onExiting={onExiting}
                  onExited={onExited}
                >
                  <Button className={styles.buttonMedication}>Edit</Button>
                </Collapse>
                <Collapse
                  isOpen={collapseB}
                  onEntering={onEntering}
                  onEntered={onEntered}
                  onExiting={onExiting}
                  onExited={onExited}
                >
                  <Button className={styles.buttonMedication}>Delete</Button>
                </Collapse>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <input type="checkbox" onClick={toggleC} />
              </th>
              <td>{pills[2].label}</td>
              <td className={styles.colRight}>
                {pills[2].frequency} {pills[2].time}
              </td>
            </tr>
            <tr>
              <td />
              <td />
              <td className={styles.colRight}>
                <Collapse
                  isOpen={collapseC}
                  onEntering={onEntering}
                  onEntered={onEntered}
                  onExiting={onExiting}
                  onExited={onExited}
                >
                  <Button className={styles.buttonMedication}>Edit</Button>
                </Collapse>
                <Collapse
                  isOpen={collapseC}
                  onEntering={onEntering}
                  onEntered={onEntered}
                  onExiting={onExiting}
                  onExited={onExited}
                >
                  <Button className={styles.buttonMedication}>Delete</Button>
                </Collapse>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <input type="checkbox" onClick={toggleD} />
              </th>
              <td>{pills[3].label}</td>
              <td className={styles.colRight}>
                {pills[3].frequency} {pills[3].time}
              </td>
            </tr>
            <tr>
              <td />
              <td />
              <td className={styles.colRight}>
                <Collapse
                  isOpen={collapseD}
                  onEntering={onEntering}
                  onEntered={onEntered}
                  onExiting={onExiting}
                  onExited={onExited}
                >
                  <Button className={styles.buttonMedication}>Edit</Button>
                </Collapse>
                <Collapse
                  isOpen={collapseD}
                  onEntering={onEntering}
                  onEntered={onEntered}
                  onExiting={onExiting}
                  onExited={onExited}
                >
                  <Button className={styles.buttonMedication}>Delete</Button>
                </Collapse>
              </td>
            </tr>
          </tbody>
        </Table>
        <Row>
          <Col xs={{ size: 6, offset: 6 }}>
            <Link to="/treatment">
              <p className={styles.treatmentMedication}>+ Add medication</p>
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Medication;
