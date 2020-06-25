import React, { useState } from "react";
import { Form, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./Create_account.module.css";

const CreateAccount = () => {
    const [firstname, setFirstname] = useState([""]);
    const [lastname, setLastname] = useState([""]);
    const [email, setEmail] = useState([""]);
    const [password, setPassword] = useState("");
    return (

        <div className={styles.background}>
            <img className={styles.logo} src={logo} alt="logo"/>
            <Form className={styles.form}>
                <Input
                type="text"
                value={firstname}
                placeholder="Firstname"
                onChange={(e) => setFirstname(e.target.value)}
                />
                <Input
                type="text"
                value={lastname}
                placeholder="lastname"
                onChange={(e) => setLastname(e.target.value)}
                />

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
                    <Link to="/home" className={styles.signlinks}>Firstname</Link>
                </Button>
                <Button className={styles.button}>
                    <Link to="/home" className={styles.signlinks}>Lastname</Link>
                </Button>

                <Button className={styles.button}>
                    <Link to="/home" className={styles.signlinks}>Submit</Link>
                </Button>

                <Button className={styles.button2}>
                    <Link to="/createaccount" className={styles.signlinks}>Create Account</Link>
                </Button>
            </Form>
        </div>
    );
};

export default CreateAccount;
