import React, { useState } from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import styles from "./ModalNotif.module.css";
import bell from "../img/notif.png";
import badge from "../img/badge.png";

const ModalNotif = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <img
        src={bell}
        alt="notification"
        className={styles.item}
        onClick={toggle}
      />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className={styles.bleu} toggle={toggle}>
          Notifications
        </ModalHeader>
        <ModalBody>
          <Row className={styles.p}>
            <Col xs="8" className={styles.p2}>Congratulations! You scored 90% on medication this week !!</Col>
            <Col xs="3" className={styles.badgeCol}>
              <img className={styles.badge} src={badge} alt="badge" />
            </Col>
          </Row>
          <p className={styles.p3}>Your information has been updated.</p>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalNotif;
