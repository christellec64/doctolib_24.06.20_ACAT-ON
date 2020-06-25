import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./Create_account.module.css";

const CreateAccount = () => {
    const [firstname, setFirstname] = useState([""]);
    const [lastname, setLastname] = useState([""]);
    const [email, setEmail] = useState([""]);
    const [password, setPassword] = useState("");

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
                            value={firstname}
                            placeholder="Firstname"
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        <input
                            className={styles.inputs}
                            type="text"
                            value={lastname}
                            placeholder="Lastname"
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        <input
                            className={styles.inputs}
                            type="text"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className={styles.inputs}
                            type="text"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button className={styles.button}>
                            <Link to="/information" className={styles.signlinks}>
                                Sign up
                            </Link>
                        </Button>
                    </Form>
                </Row>
            </Container>
        </div>
    );
};

export default CreateAccount;
