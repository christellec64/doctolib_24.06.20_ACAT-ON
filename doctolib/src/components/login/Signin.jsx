import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./Signin.module.css";

const SignIn = () => {
    const [email, setEmail] = useState([""]);
    const [password, setPassword] = useState("");
    return (
        <Row className={styles.background}>
            <Col sm={{size:6, offset:4}}>
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

                    <Link to="/home">
                        <Button className={styles.button}>Submit</Button>
                    </Link>
                </Form>
            </Col>
            {/* {email.map(item=>(
            <p>{item}</p>
        ))} */}
        </Row>
    );
};

export default SignIn;
