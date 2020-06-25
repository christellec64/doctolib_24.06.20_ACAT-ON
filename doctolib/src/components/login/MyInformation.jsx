import React, { useState } from "react";
import { Form, Button, Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./myinformation.module.css";

const MyInformation = () => {
    const logo = require("../img/logowhite.png");
    const [height, setHeight] = useState([""]);
    const [weight, setWeight] = useState([""]);
    const [doctor, setDoctor] = useState([""]);
    const [doctorsMail, setDoctorsMail] = useState([""]);
    const [chronicDisease, setChronicDisease] = useState([""]);

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
                        <h2>My Information</h2>
                    </Col>
                </Row>
                <Row className={styles.formContainer}>
                    <Form className={styles.form}>
                        <input
                            className={styles.inputs}
                            type="text"
                            value={height}
                            placeholder="Height (cm)"
                            onChange={(e) => setHeight(e.target.value)}
                        />
                        <input
                            className={styles.inputs}
                            type="text"
                            value={weight}
                            placeholder="Weight (kg)"
                            onChange={(e) => setWeight(e.target.value)}
                        />
                        <input
                            className={styles.inputs}
                            type="text"
                            value={doctor}
                            placeholder="Doctor's name"
                            onChange={(e) => setDoctor(e.target.value)}
                        />
                        <input
                            className={styles.inputs}
                            type="text"
                            value={doctorsMail}
                            placeholder="Doctor's email"
                            onChange={(e) => setDoctorsMail(e.target.value)}
                        />
                        <input
                            className={styles.inputs}
                            type="text"
                            value={chronicDisease}
                            placeholder="Chronic disease"
                            onChange={(e) => setChronicDisease(e.target.value)}
                        />

                        <Button className={styles.button}>
                            <Link to="/treatment" className={styles.signlinks}>
                                Save
                            </Link>
                        </Button>
                    </Form>
                </Row>
            </Container>
        </div>
    );
};

export default MyInformation;
