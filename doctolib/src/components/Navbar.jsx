import React from "react";

import styles from "./Navbar.module.css";

import logo from "./img/logo.png";
import bell from "./img/bell.png";
import user from "./img/user.png";
import logout from "./img/logout.png";

import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";



function Navbar({ title }) {
  return (
    <>
      <Container className={styles.navbar}>
        <Row className={styles.listItem}>
          <Col xs="2">
            <Row>
              <Col>
                <Link to="/dashboard">
                  <img src={logo} alt="logo app" className={styles.logo} />
                </Link>
              </Col>
            </Row>
            <Row>
              <Link to="/dashboard">
                <Col className={styles.medime}>MediMe</Col>
              </Link>
            </Row>
          </Col>
          <Col xs={{ size: 5, offset: 0.5 }} className={styles.title}>
            {title}
          </Col>
          <Col xs="1.5">
            <img src={bell} alt="notification" className={styles.item} />
          </Col>
          <Col xs="2">
            <Link to="/information">
              <img src={user} alt="user" className={styles.item} />
            </Link>
          </Col>
          <Col xs="1.5">
            <Link to="/signin">
              <img src={logout} alt="log out" className={styles.item} />
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Navbar;
