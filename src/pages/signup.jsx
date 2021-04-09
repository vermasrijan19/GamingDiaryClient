import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import {Link} from "react-router-dom";
import Logo from "./Components/Logo";
// import "./Login.css";

    export default function SignUp() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        function validateForm() {
            return email.length > 0 && password.length > 0;
        }
        Axios.defaults.withCredentials = true;
        function handleSubmit(event) {
            document.write(email)
            document.write(password)
            // let response;
            Axios.post("http://localhost:3001/api/reg",{username:email,password:password}).then((response)=>
            {
                console.log(response)
            });

        }


        return (

            <div className="Login">
                <Logo/>
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Sign_up
                </Button>
                    Already a member? <Link to="/login" className="btn btn-primary">Login</Link>
            </Form>
        </div>
    );
}
