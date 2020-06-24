import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";

import styles from "./Stat.module.css";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";

function stat() {
  const jour = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  return (
    <>
      <Navbar title="My stats"/>
      <h5 className={`${styles.h5} mt-2`}>Blood glucose statement</h5>
      <h6 className={styles.h6}>
        Date : {jour}/0{month + 1}/{year}
      </h6>
      <Row className="mr-3 ml-3">
        <Col>
          <FormGroup>
            <Label for="morning" />
            <Input
              type="text"
              name="morning"
              id="morning"
              placeholder="Morning"
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="Noon" />
            <Input type="text" name="Noon" id="Noon" placeholder="Noon" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="Evening" />
            <Input
              type="text"
              name="Evening"
              id="Evening"
              placeholder="Evening"
            />
          </FormGroup>
        </Col>
      </Row>
      <h5 className={styles.h5}>Height / weight</h5>
      <h6>Date (week) :</h6>
      <FormGroup className="mr-4 ml-4">
        <Label for="weight" />
        <Input type="number" name="weight" id="weight" placeholder="KG" />
      </FormGroup>
      <Footer />
    </>
  );
}

export default stat;
