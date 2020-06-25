import React from "react";
import { Form, Button, Container, Col, Row } from "reactstrap";
import styles from "./myinformation.module.css";
import { Link } from "react-router-dom";

const MyInformation = ({ setUserData, userData, handleSubmit }) => {
  const logo = require("../img/logowhite.png");

  return (
    <div className={styles.background}>
      <Container className={styles.navbar}>
        <Row>
          <Col xs="2" className={styles.listItem}>
            <img src={logo} alt="logo app" className={styles.logo} />
            MediMe
          </Col>
          <Col xs="8" className={styles.heading}>
            <h2>My Information</h2>
          </Col>
        </Row>
        <Row className={styles.formContainer}>
          <Form className={styles.form}>
            <input
              className={styles.inputs}
              type="text"
              placeholder="Height (cm)"
              onChange={(e) =>
                setUserData({ ...userData, height: e.target.value })
              }
            />
            <input
              className={styles.inputs}
              type="text"
              placeholder="Weight (kg)"
              onChange={(e) =>
                setUserData({ ...userData, weight: e.target.value })
              }
            />
            <input
              className={styles.inputs}
              type="text"
              placeholder="Doctor's name"
              onChange={(e) =>
                setUserData({ ...userData, doctor: e.target.value })
              }
            />
            <input
              className={styles.inputs}
              type="text"
              placeholder="Doctor's email"
              onChange={(e) =>
                setUserData({ ...userData, doctor_mail: e.target.value })
              }
            />
            <input
              className={styles.inputs}
              type="text"
              placeholder="Chronic disease"
              onChange={(e) =>
                setUserData({ ...userData, disease: e.target.value })
              }
            />

            <Button tag={Link} to="/treatment" className={styles.button} onClick={()=> handleSubmit()}>
              Save
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default MyInformation;
