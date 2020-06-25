import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import BarChart from "./BarChart";
import LineGraph from "./LineGraph";

import styles from "./Stat.module.css";
import { Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

function Stat() {
  const jour = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  return (
    <>
      <Navbar title="My stats" />
      <h5 className={`${styles.h5} mt-2`}>Blood glucose statement</h5>
      <h6 xs="4" className={styles.h6}>
        Date {jour}/{month + 1}/{year}
      </h6>
      <Row className={`${styles.rowInput} ml-2 mb-3 mt-3 mr-1`}>
        <Col xs="3" className="pl-1 pr-1">
          <FormGroup>
            <Label for="morning">
              <Input
                className={styles.input}
                type="text"
                name="morning"
                id="morning"
                placeholder="Morning..."
              />
            </Label>
          </FormGroup>
        </Col>
        <Col xs="2" className="pl-1 pr-1">
          <FormGroup>
            <Label for="Noon">
              <Input
                className={styles.input}
                type="text"
                name="Noon"
                id="Noon"
                placeholder="Noon..."
              />
            </Label>
          </FormGroup>
        </Col>
        <Col xs="3" className="pl-1 pr-1">
          <FormGroup>
            <Label for="Evening">
              <Input
                className={styles.input}
                type="text"
                name="Evening"
                id="Evening"
                placeholder="Evening..."
              />
            </Label>
          </FormGroup>
        </Col>
        <Col xs="3">
          <Button className={styles.button}>Save</Button>
        </Col>
      </Row>
      <BarChart />
      <h5 className={styles.h5}>Weight</h5>
      <Row className={`${styles.rowInput} ml-1 mb-3 mt-3 mr-1`}>
        <Col className={styles.h6} xs="4">Once a month</Col>
        <Col xs="5">
          <FormGroup className="ml-2">
            <Label for="weight">
              <Input
                className={styles.input}
                type="number"
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

      <Footer />
    </>
  );
}

export default Stat;
