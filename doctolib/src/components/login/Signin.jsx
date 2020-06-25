import React, { useState } from "react";
import { Form, Input, Button, Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./Signin.module.css";

const SignIn = () => {
    const logo = require("../img/logo.png");

    const [email, setEmail] = useState([""]);
    const [password, setPassword] = useState("");
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
                        <Input
                            className={styles.inputs}
                            type="text"
                            value={email}
                            placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            className={styles.inputs}
                            type="text"
                            value={password}
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button className={styles.button}>
                            <Link to="/home" className={styles.signlinks}>
                                Submit
                            </Link>
                        </Button>

                        <Button className={styles.button2}>
                            <Link
                                to="/createaccount"
                                className={styles.signlinks}
                            >
                                Create Account
                            </Link>
                        </Button>
                    </Form>
                </Row>

            </Container>
                        

        </div>
    );
};

export default SignIn;
