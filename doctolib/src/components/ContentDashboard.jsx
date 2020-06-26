import React from 'react';

import clock from '../img/clock.png';
import bulb from '../img/bulb.png';
import badge from '../img/badge.png';

import styles from './ContentDashboard.module.css';
import { ListGroup, ListGroupItem, Badge, Table, Container, Row, Col } from 'reactstrap';

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

      <Table className={styles.table}>
      <tbody>
        <tr className={styles.rowTable}>
          <td>DOLIPRANE</td>
          <td><Badge pill color="dark">12:30</Badge></td>
        </tr>
        <tr className={styles.rowTable}> 
          <td>PENICILLIN</td>
          <td><Badge pill color="dark">16:30</Badge></td>
        </tr>
        <tr className={styles.rowTable}>
          <td>DOLIPRANE</td>
          <td><Badge pill color="dark">19:00</Badge></td>
        </tr>
      </tbody>
    </Table>

      <Row className={styles.advice}>
        <Col xs='2'><img src={bulb} alt='light' className={styles.bulbImage}/></Col>
        <Col xs='8' className={styles.adviceText}>Eat 5 fruit and veg per day !</Col>
      </Row>

      <Row className={styles.quote}>
        <Col><span className={styles.doubleQuote}>“</span> You don’t need to be the “best”.
         No one needs to eat the best apple every day. You just need a good one.
         And you’re a good apple <span className={styles.doubleQuote}>“</span></Col>
      </Row>

      <ListGroup horizontal className={styles.score}>
        <ListGroupItem color="info" tag="a" ><img  src={badge} alt='badge' className={styles.badge} /></ListGroupItem>
        <ListGroupItem color="info" tag="a" >You scored 90% on your medication this week</ListGroupItem>
      </ListGroup>

    </Container>
  );
}

export default ContentDashboard;