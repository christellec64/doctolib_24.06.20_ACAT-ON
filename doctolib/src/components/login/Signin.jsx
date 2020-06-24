import React, { useState } from "react";
import { Form, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState([""]);
    const [password, setPassword] = useState("");
    return (
        <>
            <Form>
                <Input
                    type="text"
                    value={email}
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="text"
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* <Link to="/home">
                    <Button>Submit</Button>
                </Link> */}
                    <Button>Submit</Button>
            </Form>
            {/* {email.map(item=>(
            <p>{item}</p>
        ))} */}
        </>
    );
};

export default SignIn;
