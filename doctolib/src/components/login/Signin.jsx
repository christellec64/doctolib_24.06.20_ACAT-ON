import React, { useState } from "react";
import { Form, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./Signin.module.css";

const SignIn = () => {
    const [email, setEmail] = useState([""]);
    const [password, setPassword] = useState("");
    return (
        <div className={styles.background}>
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
                <Link to="/createaccount">
                    <Button className={styles.button2}>Create Account</Button>
                </Link>
            </Form>
        </div>
    );
};

export default SignIn;
