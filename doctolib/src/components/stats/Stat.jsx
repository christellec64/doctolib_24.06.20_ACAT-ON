import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import BarChart from "./BarChart";
import LineGraph from "./LineGraph";

import styles from "./Stat.module.css";
import { Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

function stat() {
  const jour = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const monthLetter = [
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
  return (
    <>
      <Navbar title="My stats" />
      <h5 className={`${styles.h5} mt-2`}>Blood glucose statement</h5>
      <h6 xs="4" className={styles.h6}>
        {" "}
        Your{" "}
        {month > 9
          ? `${jour}/${month + 1}/${year}`
          : `Date ${jour}/0${month + 1}/${year}`}{" "}
        statement
      </h6>
      <Row className={`${styles.rowInput} ml-2 mb-3 mr-1`}>
        <Col xs="3" className="pl-1 pr-1">
          <FormGroup>
            <Label for="breakfast">
              <Input
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
            <Label for="Lunch">
              <Input
                className={styles.input}
                type="text"
                name="Lunch"
                id="Lunch"
                placeholder="Lunch"
              />
            </Label>
          </FormGroup>
        </Col>
        <Col xs="3" className="pl-1 pr-1">
          <FormGroup>
            <Label for="Diner">
              <Input
                className={styles.input}
                type="text"
                name="Diner"
                id="Diner"
                placeholder="Diner"
              />
            </Label>
          </FormGroup>
        </Col>
        <Col xs="2">
          <Button className={styles.button}>Save</Button>
        </Col>
      </Row>
      <BarChart />
      <h5 className={styles.h5}>Weight</h5>
      <Row className={`${styles.rowInput} ml-1 mb-3  mr-1`}>
        <Col className={styles.h6bis} xs="5">
          Your weight in {monthLetter[month]}
        </Col>
        <Col xs="4">
          <FormGroup className="ml-2">
            <Label for="weight">
              <Input
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
          <Button className={styles.button}>Save</Button>
        </Col>
      </Row>
      <LineGraph />

      <Footer className={styles.footer} />
    </>
  );
}

export default stat;
