import React from 'react';

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
          <Col xs='3'><img src={home} alt='Home' className={styles.item} /></Col>
          <Col xs='3'><img src={graph} alt='Stats' className={styles.item} /></Col>
          <Col xs='3'><img src={pills} alt='Pills' className={styles.item} /></Col>
          <Col xs='3'><img src={note} alt='Note' className={styles.item} /></Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;