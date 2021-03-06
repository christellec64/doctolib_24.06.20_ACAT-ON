import React from "react";

import styles from "./Navbar.module.css";

import logo from "./img/logowhite.png";

import logout from "./img/logout.png";

import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ModalAvatar from "./ModalAvatar";
import ModalNotif from "./ModalNotif";



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
            <ModalNotif />
          </Col>
          <Col xs="2">
            <ModalAvatar />
          </Col>
          <Col xs="1.5">
            <Link to="/">
              <img src={logout} alt="log out" className={styles.item} />
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Navbar;
