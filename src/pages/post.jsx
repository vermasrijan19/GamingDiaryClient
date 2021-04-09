import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import Header from "./Components/Header";
import Store from "./Components/Store";
// import "./Login.css";

export default function Post() {
    const [role, setRole] = useState("");
    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                console.log(response.data);
                console.log(response.data.user[0].username);
                setRole(response.data.user[0].username);
            }
            else{
                window.location.replace("http://localhost:3000/forum");
            }
        });
    }, []);


    return (
        <div className="page">
            <Header user={role}/>
            <Store/>


        </div>
    );
}
