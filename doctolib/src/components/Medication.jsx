import React from "react";
import {
  Container,
  Table,
  Row,
  Col,
  Button,
  Collapse,
} from "reactstrap";

import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Medication.module.css";
import alarm from "../img/clock.png";
import { Link } from "react-router-dom";
import Axios from "axios";
import { api_url } from "../api";
import ModalMedication from './ModalMedication'

class Medication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      status: "Closed",
      pill: [],
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.getPills = this.getPills.bind(this);
    this.getModal = this.getModal.bind(this);
  }
  componentDidMount() {
    this.getPills();
  }
  componentDidUpdate(prevProps, prevState) {
    const {modal} = this.state;
    if (prevState.modal !== modal) {
      this.getPills(modal)
    }
  }
  toggle(){
    this.setState({collapse : !this.state.collapse})
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
                          <ModalMedication  getPills={this.getPills} item={item} modal={this.state.modal} handleModal={this.getModal} />
                        </Collapse>
                        <Collapse
                          isOpen={this.state.collapse}
                          onEntering={this.onEntering}
                          onEntered={this.onEntered}
                          onExiting={this.onExiting}
                          onExited={this.onExited}
                        >
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
