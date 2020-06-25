import React from "react";
import { Form, Button, Container, Row, Col } from "reactstrap";
import styles from "./Create_account.module.css";
import logo from "../img/logowhite.png";

const CreateAccount = ({ setUserData, changePage, userData }) => {

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
              placeholder="Firstname"
              onChange={(e) =>
                setUserData({...userData, firstname: e.target.value})
              }
            />
            <input
              className={styles.inputs}
              type="text"
              placeholder="Lastname"
              onChange={(e) => setUserData({ ...userData, lastname: e.target.value })}
            />
            <input
              className={styles.inputs}
              type="text"
              placeholder="Email"
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
            <input
              className={styles.inputs}
              type="password"
              placeholder="Password"
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            />

            <Button className={styles.button} onClick={() => changePage(2)}>
              Sign up
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default CreateAccount;
