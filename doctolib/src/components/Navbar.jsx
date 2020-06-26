import React from "react";

import styles from "./Navbar.module.css";

import logo from "./img/logo.png";
import bell from "./img/bell.png";

import logout from "./img/logout.png";

import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ModalAvatar from "./ModalAvatar";

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
            <ModalAvatar />
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
