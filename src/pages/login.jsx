import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom'
import Logo from "./Components/Logo";
// import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                console.log(response.data);
                console.log(response.data.user[0].username);
                window.location.replace("http://localhost:3000/home");
            }
        });
    }, []);
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    Axios.defaults.withCredentials = true;
    function handleSubmit(event) {
        document.write(email)
        document.write(password)
        Axios.post("http://localhost:3001/api/log",{username:email,password:password}).then((response)=>
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
                    Login
                </Button>
                Not a member yet? <Link to="/signup" className="btn btn-primary">Sign-up</Link>
            </Form>

        </div>
    );
}
