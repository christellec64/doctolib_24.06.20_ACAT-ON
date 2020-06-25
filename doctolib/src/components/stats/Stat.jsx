import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import BarChart from "./BarChart";
import LineGraph from "./LineGraph";

import styles from "./Stat.module.css";
import { Row, Col, FormGroup, Label, Input, Button, Form } from "reactstrap";
import { Component } from "react";

import { api_url } from "../../api.js";
import Axios from "axios";

class stat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakfast: {},
      lunch : {},
      diner :{},
      weight: {},
      date : `${this.day}/${this.month + 1}/${this.year}`
    };

    this.handleChangeBreakfast = this.handleChangeBreakfast.bind(this);
    this.handleChangeLunch = this.handleChangeLunch.bind(this);
    this.handleChangeDiner = this.handleChangeDiner.bind(this);
    this.handleSubmitGlucose = this.handleSubmitGlucose.bind(this);
    this.handleChangeWeight = this.handleChangeWeight.bind(this);
    this.handleSubmitWeight = this.handleSubmitWeight.bind(this);
  }

  day = new Date().getDate();
  month = new Date().getMonth();
  year = new Date().getFullYear();
  monthLetter = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // componentDidMount () {
  //   getDate()
  // }
  handleChangeBreakfast(e) {
    this.setState({
      breakfast: e.target.value,
    });
  }
  handleChangeLunch(e) {
    this.setState({
      lunch: e.target.value,
    });
  }
  handleChangeDiner(e) {
    this.setState({
      diner: e.target.value,
    });
  }

  handleChangeWeight(e) {
    const { weight } = this.state;
    this.setState({
      ...weight,
      [e.target.name] : e.target.value,
    });
  }

  handleSubmitWeight(e) {
    const { weight } = this.state;
    Axios.post(
      `${api_url}/weight`,
      { weight },
      { header: { "Content-Type": "application.json" } }
    ).then(res => console.log(res))
    .catch((err) => console.log(err.message));
  }

  handleSubmitGlucose(e) {
    const { breakfast, lunch, diner, date } = this.state;

    Axios.post(
      `${api_url}/glucose`,
      { breakfast, lunch, diner, date },
      { header: { "Content-Type": "application.json" } }
    ).catch((err) => console.log(err.message));
  }

  render() {
    console.log(this.state.weight)
    console.log(this.state.diner)
    
    return (
      <>
        <Navbar title="My stats" />
        <h5 className={`${styles.h5} mt-2`}>Blood glucose statement</h5>
        <h6 xs="4" className={styles.h6}>
          Your{" "}
          {this.month > 9
            ? `${this.day}/${this.month + 1}/${this.year}`
            : `Date ${this.day}/0${this.month + 1}/${this.year}`}{" "}
          statement
        </h6>
        <Form onSubmit={this.handleSubmitGlucose}>
          <Row className={`${styles.rowInput} ml-2 mb-3 mr-1`}>
            <Col xs="3" className="pl-1 pr-1">
              <FormGroup>
                <Label for="breakfast">
                  <Input
                    onChange={this.handleChangeBreakfast}
                    className={styles.input}
                    type="text"
                    name="breakfast"
                    id="breakfast"
                    placeholder="Breakfast"
                  />
                </Label>
              </FormGroup>
            </Col>
            <Col xs="3" className="pl-1 pr-1">
              <FormGroup>
                <Label for="lunch">
                  <Input
                    onChange={this.handleChangeLunch}
                    className={styles.input}
                    type="text"
                    name="lunch"
                    id="lunch"
                    placeholder="Lunch"
                  />
                </Label>
              </FormGroup>
            </Col>
            <Col xs="3" className="pl-1 pr-1">
              <FormGroup>
                <Label for="diner">
                  <Input
                    onChange={this.handleChangeDiner}
                    className={styles.input}
                    type="text"
                    name="diner"
                    id="diner"
                    placeholder="Diner"
                  />
                </Label>
              </FormGroup>
            </Col>
            <Col xs="2">
              <Button type="submit" className={styles.button}>
                Save
              </Button>
            </Col>
          </Row>
        </Form>
        <BarChart />
        <h5 className={styles.h5}>Weight</h5>
        <Form onSubmit={this.handleSubmitWeight}>
          <Row className={`${styles.rowInput} ml-1 mb-3  mr-1`}>
            <Col className={styles.h6bis} xs="5">
              Your weight in {this.monthLetter[this.month]}
            </Col>
            <Col xs="4">
              <FormGroup className="ml-2">
                <Label for="weight">
                  <Input
                    onChange={this.handleChangeWeight}
                    className={styles.input}
                    type="text"
                    name="weight"
                    id="weight"
                    placeholder="KG"
                  />
                </Label>
              </FormGroup>
            </Col>
            <Col xs="3">
              <Button type="submit" className={styles.button}>
                Save
              </Button>
            </Col>
          </Row>
        </Form>
        <LineGraph />

        <Footer className={styles.footer} />
      </>
    );
  }
}

export default stat;
