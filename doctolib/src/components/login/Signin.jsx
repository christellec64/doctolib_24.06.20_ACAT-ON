import React, { useState } from "react";
import { Form, Button, Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./Signin.module.css";

const SignIn = () => {
  const logo = require("../img/logowhite.png");

  const [setEmail] = useState([""]);
  const [password, setPassword] = useState("");
  return (
    <div className={styles.background}>
      <Container className={styles.navbar}>
        <Row>
          <Col xs="4" className={styles.listItem}>
            <img src={logo} alt="logo app" className={styles.logo} />
            MediMe
          </Col>
        </Row>
        <Row className={styles.formContainer}>
          <Form className={styles.form}>
            <input
              className={styles.inputs}
              type="text"
              value="elvis.presley@wcs.fr"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={styles.inputs}
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/dashboard" className={styles.signlinks}>
              <Button className={styles.button}>Submit</Button>
            </Link>
            <Link to="/createaccount" className={styles.signlinks}>
              <Button className={styles.button2}>Create Account</Button>
            </Link>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
