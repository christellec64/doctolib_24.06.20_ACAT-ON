import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./Mytreatment.module.css";

const MyTreatment = () => {
    const [medication, setMedication] = useState([""]);
    const [dosage, setDosage] = useState([""]);
    const [frequency, setFrequency] = useState([""]);
    const [time, setTime] = useState([""]);
  
    const logo = require("../img/logowhite.png");
    return (
        <div className={styles.background}>
            <Container className={styles.navbar}>
                <Row>
                    <Col xs="4" className={styles.listItem}>
                        <img
                            src={logo}
                            alt="logo app"
                            className={styles.logo}
                        />
                        MediMe
                    </Col>
                </Row>
                <Row className={styles.formContainer}>
                    <Form className={styles.form}>
                        <input
                            className={styles.inputs}
                            type="text"
                            value={medication}
                            placeholder="Medication"
                            onChange={(e) => setMedication(e.target.value)}
                        />
                        <input
                            className={styles.inputs}
                            type="text"
                            value={dosage}
                            placeholder="Dosage"
                            onChange={(e) => setDosage(e.target.value)}
                        />
                        <input
                            className={styles.inputs}
                            type="text"
                            value={frequency}
                            placeholder="Frequency per day"
                            onChange={(e) => setFrequency(e.target.value)}
                        />
                        <label className={styles.timelabel}>What time do you take your first medication?
                        <input
                            className={styles.inputs}
                            type="time"
                            value={time}
                            placeholder="What time do you take your first medication?"
                            onChange={(e) => setTime(e.target.value)}
                        />
                        </label>

                        <Button className={styles.button}>
                            <Link to="/information" className={styles.signlinks}>
                                Save
                            </Link>
                        </Button>
                    </Form>
                </Row>
            </Container>
        </div>
    );
};

export default MyTreatment;
