import React from "react";
import { Container, Table, Row, Col, Button, Collapse } from "reactstrap";

import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Medication.module.css";
import alarm from "../img/clock.png";
import { Link } from "react-router-dom";

const pills = [
  {
    id: "A",
    label: "Pillule A",
    dosage: "",
    frequency: 3,
    time: "per day",
  },
  {
    id: "B",
    label: "Pillule B",
    dosage: "",
    frequency: 1,
    time: "per day",
  },
  {
    id: "C",
    label: "Pillule C",
    dosage: "",
    frequency: 2,
    time: "per week",
  },
  {
    id: "D",
    label: "Pillule D",
    dosage: "",
    frequency: 3,
    time: "per day",
  },
];

class Medication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      id: "",
      status: "Closed",
    };
    this.toggle = this.toggle.bind(this);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  onEntering() {
    this.setState({ status: "Opening" });
  }
  onEntered() {
    this.setState({ status: "Opened" });
  }
  onExiting() {
    this.setState({ status: "Closing..." });
  }
  onExited() {
    this.setState({ status: "Closed" });
  }
  render() {
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
              {pills.map((item) => {
                return (
                  <>
                    <tr>
                      <th scope="row">
                        <input type="checkbox" onClick={this.toggle} />
                      </th>
                      <td>{item.label}</td>
                      <td className={styles.colRight}>
                        {item.frequency} {item.time}
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td className={styles.colRight}>
                        <Collapse
                          isOpen={this.state.collapse}
                          onEntering={this.onEntering}
                          onEntered={this.onEntered}
                          onExiting={this.onExiting}
                          onExited={this.onExited}
                        >
                          <Button className={styles.buttonMedication}>
                            Edit
                          </Button>
                        </Collapse>
                        <Collapse
                          isOpen={this.state.collapse}
                          onEntering={this.onEntering}
                          onEntered={this.onEntered}
                          onExiting={this.onExiting}
                          onExited={this.onExited}
                        >
                          <Button className={styles.buttonMedication}>
                            Delete
                          </Button>
                        </Collapse>
                      </td>
                    </tr>
                  </>
                );
              })}
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
}

export default Medication;
