import React from 'react';

import clock from '../img/clock.png';

import styles from './ContentDashboard.module.css';
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

function ContentDashboard() {
  return (
    <Container className={styles.banner}>
      <Row className={styles.blueBanner}>
      <Col xs='2'><img src={clock} alt='clock' className={styles.clock} /></Col>
      <Col xs='10' className={styles.textBanner}>Next medication in 73 minutes</Col>
      </Row>
      <Row className={styles.blueBanner}>
        <Col xs='2'></Col>
        <Col xs='10' className={styles.textBanner}> DOLIPRANE</Col>
      </Row>

      <ListGroup className={styles.listPills}>
        <ListGroupItem color="info" className="justify-content-between">DOLIPRANE <Badge pill color="dark">12:30</Badge></ListGroupItem>
        <ListGroupItem color="info" className="justify-content-between">PENICILLIN <Badge pill color="dark">16:30</Badge></ListGroupItem>
        <ListGroupItem color="info" className="justify-content-between">DOLIPRANE <Badge pill color="dark">19:00</Badge></ListGroupItem>
      </ListGroup>

      <Row className={styles.quote}>
        <Col>“ You don’t need to be the “best”.
         No one needs to eat the best apple every day. You just need a good one. And you’re a good apple “</Col>
      </Row>

      <ListGroup horizontal className={styles.score}>
        <ListGroupItem color="info" tag="a" ><Badge color="danger">90%</Badge></ListGroupItem>
        <ListGroupItem color="info" tag="a" >You scored 90% on your medication this week</ListGroupItem>
      </ListGroup>

      

    </Container>
  );
}

export default ContentDashboard;