import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./Mytreatment.module.css";

const MyTreatment = () => {
    const [medication, setMedication] = useState([""]);
    const [dosage, setDosage] = useState([""]);
    const [frequency, setFrequency] = useState([""]);
    const [time, setTime] = useState([""]);

    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    const logo = require("../img/logowhite.png");
    return (
        <div className={styles.background}>
            <Container className={styles.navbar}>
                <Row>
                    <Col xs="2" className={styles.listItem}>
                        <img
                            src={logo}
                            alt="logo app"
                            className={styles.logo}
                        />
                        MediMe
                    </Col>
                    <Col xs="8" className={styles.heading}>
                        <h2>My Treatment</h2>
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
                        <select
                            className={styles.inputfrequency}
                            type="text"
                            value={frequency}
                            placeholder="Frequency per day"
                            onChange={(e) => setFrequency(e.target.value)}
                        >
                            {numbers.map((number) => (
                                <option value={number}>{number}</option>
                            ))}
                        </select>

                        <label className={styles.timelabel}>
                            What time do you take your first medication?
                            <input
                                className={styles.inputtime}
                                type="time"
                                value={time}
                                placeholder="What time do you take your first medication?"
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </label>

                        <Button className={styles.button}>
                            <Link
                                to="/dashboard"
                                className={styles.signlinks}
                            >
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