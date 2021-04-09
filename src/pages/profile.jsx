import React, {useEffect, useState} from 'react';
import Axios from "axios";
import Header from "./Components/Header";

import Tab from "./Components/tab";
import {Table} from "react-bootstrap";
import Query_cont from "./Components/Query_cont";

Profile.propTypes = {};

function Profile(props) {
    const [user, setUser] = useState("");

    const [userInfo, setUserInfo] = useState([]);
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        console.log("first");
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                console.log(response.data);
                console.log(response.data.user[0].id);
                setUser(response.data.user[0].username);
                Axios.post("http://localhost:3001/api/user", {id: response.data.user[0].id}).then((respons) => {
                    setUserInfo(respons.data);

                    console.log(respons.data)

                })
                Axios.get("http://localhost:3001/api/get/posts").then((response) => {
                    setUserPosts(response.data);
                    console.log(response.data)
                })
                // setRole(response.data.user[0].id.toString);
            }
        });
    }, []);

    return (
        <div className="Profile">
            <Header user={user}/>
            {
                userInfo.map((val) => {
                    return (

                        <Tab col1={val.Datatype} col2={val.Data}/>
                    );

                })}
            {
                userPosts.map((val)=>
                {
                    return(
                        <Query_cont title={val.post_title} description={val.post_desc} />
                        );
                })}

        </div>
    );
}

export default Profile;
