import React from "react";
import {
  Container,
  Table,
  Row,
  Col,
  Button,
  Collapse,
  Modal,
  ModalFooter,
  Input,
  InputGroupText,
  InputGroupAddon,
  InputGroup,
  ModalBody,
} from "reactstrap";

import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Medication.module.css";
import alarm from "../img/clock.png";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import alarm from "../img/alarm.png";
=======
import Axios from "axios";
import { api_url } from "../api";
>>>>>>> d5ef7a9fbf1361bae9e19bfc1bad27d07b67533b

class Medication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      id: "",
      status: "Closed",
      pill: [],
      modal: false,
      frequency: {},
      label: {},
    };
    this.toggle = this.toggle.bind(this);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.getPills = this.getPills.bind(this);
    this.deletePills = this.deletePills.bind(this);
    this.getModal = this.getModal.bind(this);
    this.postPills = this.postPills.bind(this);
    this.handleChangeFrequency = this.handleChangeFrequency.bind(this);
    this.handleChangeLabel = this.handleChangeLabel.bind(this);
  }
  componentDidMount() {
    this.getPills();
  }

  handleChangeLabel(e) {
    this.setState({
      label: e.target.value,
    });
  }
  handleChangeFrequency(e) {
    this.setState({
      frequency: e.target.value,
    });
  }
  getModal() {
    this.setState({ modal: !this.state.modal });
  }

  getPills() {
    Axios.get(`${api_url}/medicaments`).then((res) => {
      console.log(res);
      this.setState({ pill: res.data });
    });
  }
  postPills() {
    const { pill } = this.state;
    Axios.put(
      `${api_url}/medicaments/${pill.id}`,
      { ...pill },
      { header: { "Content-Type": "application.json" } }
    )
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  }
  deletePills() {
    const { pill } = this.state;
    Axios.delete(`${api_url}/${pill.id}`).catch((err) =>
      console.log(err.message)
    );
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
    const { pill } = this.state;
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
              {pill.map((item) => {
                return (
                  <>
                    <tr>
                      <th scope="row">
                        <input
                          type="checkbox"
                          onClick={this.toggle}
                          id={item.id}
                        />
                      </th>
                      <td>{item.label}</td>
                      <td className={styles.colRight}>
                        {item.frequency} per day
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
                          <Button
                            className={styles.buttonMedication}
                            onClick={this.getModal}
                          >
                            Edit
                          </Button>
                          <Modal
                            isOpen={this.state.modal}
                            toggle={this.getModal}
                          >
                            <ModalBody>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>Disease name</InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  onChange={this.handleChangeLabel}
                                  placeholder={item.label}
                                  type="text"
                                  name={item.label}
                                  id={item.id}
                                />
                              </InputGroup>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>Frequency</InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  onChange={this.handleChangeFrequency}
                                  placeholder={item.frequency}
                                  type="text"
                                  name={item.frequency}
                                  id={item.id}
                                />
                              </InputGroup>
                            </ModalBody>
                            <ModalFooter>
                              <Button onClick={this.postPills}>Save</Button>
                              <Button onClick={this.getModal}>Cancel</Button>
                            </ModalFooter>
                          </Modal>
                        </Collapse>
                        <Collapse
                          isOpen={this.state.collapse}
                          onEntering={this.onEntering}
                          onEntered={this.onEntered}
                          onExiting={this.onExiting}
                          onExited={this.onExited}
                        >
                          <Button
                            className={styles.buttonMedication}
                            onClick={this.deletePills}
                          >
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
