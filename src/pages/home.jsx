import React, {useEffect, useState} from 'react';
import Header from "./Components/Header";
import Navbars from "./Components/Navbars";
import Query_cont from "./Components/Query_cont";
import {BrowserRouter as Router} from "react-router-dom";
import Axios from "axios";

function Home(props) {
    const [role, setRole] = useState("");
    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                console.log(response.data);
                console.log(response.data.user[0].username);
                setRole(response.data.user[0].username);
            }
        });
    }, []);
    return (
        <div className={"page"}>
            <Header user={role}/>
            <Navbars/>
        </div>
    );
}

export default Home;
