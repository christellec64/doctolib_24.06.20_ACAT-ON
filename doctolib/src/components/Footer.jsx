import React from 'react';
import { Link } from "react-router-dom";

import home from '../img/home.png';
import graph from '../img/graph.png';
import pills from '../img/pills.png';
import note from '../img/note.png';

import styles from './Footer.module.css';

import { Container, Row, Col } from 'reactstrap';


function Footer() {
  return (
    <>
      <Container className={styles.footer}>
        <Row className={styles.listItem}>
        <Col xs='3'><Link to="/dashboard"><img src={home} alt='Home' className={styles.item} /></Link></Col>
          <Col xs='3'><Link to="/stat"><img src={graph} alt='Stats' className={styles.item} /></Link></Col>
          <Col xs='3'><Link to="/pilllist"><img src={pills} alt='Pills' className={styles.item} /></Link></Col>
          <Col xs='3'><Link to="/ordonance"><img src={note} alt='Note' className={styles.item} /></Link></Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;