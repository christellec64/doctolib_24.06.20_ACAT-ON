import React from "react";

import styles from "./Navbar.module.css";
import logo from "../img/logo.png";
import bell from "../img/bell.png";
import user from "../img/user.png";
import logout from "../img/logout.png";

import { Container, Row, Col } from "reactstrap";

function Navbar({ title }) {
  return (
    <>
      <Container className={styles.navbar}>
        <Row className={styles.listItem}>
          <Col xs="2">
            <Row>
              <Col>
                <img src={logo} alt="logo app" className={styles.logo} />
              </Col>
            </Row>
            <Row>
              <Col className={styles.medime}>MediMe</Col>
            </Row>
          </Col>
          <Col xs={{ size: 5, offset: 0.5 }} className={styles.title}>
            {title}
          </Col>
          <Col xs="1.5">
            <img src={bell} alt="notification" className={styles.item} />
          </Col>
          <Col xs="2">
            <img src={user} alt="user" className={styles.item} />
          </Col>
          <Col xs="1.5">
            <img src={logout} alt="log out" className={styles.item} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Navbar;
