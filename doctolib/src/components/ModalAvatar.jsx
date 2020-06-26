import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Label,
  Col,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

import styles from "./ModalAvatar.module.css";
import user from "./img/user.png";

const ModalAvatar = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <img src={user} alt="user" className={styles.item} onClick={toggle} />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className={styles.bleu} toggle={toggle}>
          My informations
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Row className={styles.row}>
                <Col xs="3" className={styles.center}>
                  <Label for="firstname">Firstname</Label>
                </Col>
                <Col xs="8">
                  <Input
                    className={styles.input}
                    type="text"
                    name="firstname"
                    id="firstname"
                    value="Elvis"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row className={styles.row}>
                <Col xs="3" className={styles.center}>
                  <Label for="lastname">Lastname</Label>
                </Col>
                <Col xs="8">
                  <Input
                    className={styles.input}
                    type="text"
                    name="lastname"
                    id="lastname"
                    value="Presley"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row className={styles.row}>
                <Col xs="3" className={styles.center}>
                  <Label for="email">Email</Label>
                </Col>
                <Col xs="8">
                  <Input
                    className={styles.input}
                    type="email"
                    name="email"
                    id="email"
                    value="elvis.presley@wcs.fr"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row className={styles.row}>
                <Col xs="3" className={styles.center}>
                  <Label for="height">Height</Label>
                </Col>
                <Col xs="8">
                  <Input
                    className={styles.input}
                    type="text"
                    name="height"
                    id="height"
                    value="1.70"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row className={styles.row}>
                <Col xs="3" className={styles.center}>
                  <Label for="weight">Weight</Label>
                </Col>
                <Col xs="8">
                  <Input
                    className={styles.input}
                    type="text"
                    name="weight"
                    id="weight"
                    value="70"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row className={styles.row}>
                <Col xs="3" className={styles.center}>
                  <Label for="doctor">Doctor</Label>
                </Col>
                <Col xs="8">
                  <Input
                    className={styles.input}
                    type="text"
                    name="doctor"
                    id="doctor"
                    value="Dr House"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row className={styles.row}>
                <Col xs="3" className={styles.center}>
                  <Label for="doctormail">Doctor'mail</Label>
                </Col>
                <Col xs="8">
                  <Input
                    className={styles.input}
                    type="text"
                    name="doctormail"
                    id="doctormail"
                    value="drHouse@wcs.fr"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row className={styles.row}>
                <Col xs="3" className={styles.center}>
                  <Label for="disease">Disease</Label>
                </Col>
                <Col xs="8">
                  <Input
                    className={styles.input}
                    type="text"
                    name="disease"
                    id="disease"
                    value="Diabets"
                  />
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button className={styles.button} onClick={toggle}>
            Save
          </Button>{" "}
          <Button className={styles.button} onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalAvatar;
