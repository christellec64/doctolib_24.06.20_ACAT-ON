import React, { useState } from "react";
import { Container, Table, Row, Col, Button, Collapse } from "reactstrap";

import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Medication.module.css";
import alarm from "./img/alarm.png";

function Medication () {
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
              <td>Pillule A</td>
              <td className={styles.colRight}>3 per day</td>
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
              <td>Pillule B</td>
              <td className={styles.colRight}>2 per week</td>
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
              <td>Pillule C</td>
              <td className={styles.colRight}>1 per day</td>
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
              <td>Pillule D</td>
              <td className={styles.colRight}>3 per day</td>
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
          <Col xs={{ size: 6, offset: 8 }}>
            <Button className={styles.buttonMedication}>Add medication</Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Medication;
