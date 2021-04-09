import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Axios from "axios";
import Header from "./Components/Header";
import Navbars from "./Components/Navbars";
import Query_cont from "./Components/Query_cont";
import Card from "./Components/card";


Axios.defaults.withCredentials = true;
function Forum(props) {
    // console.log(props.location.spro)
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        if(props.post_id===0)
        {
            // if(props.post_id!==0)
            if (props.cat_id !== 0) {
                console.log("fetching for specific page")
                Axios.post(props.get, {cat_id: props.cat_id}).then((response) => {
                    setPostList(response.data);
                    console.log(response.data)
                })
            } else {
                Axios.post(props.get).then((response) => {
                    setPostList(response.data);
                    console.log(response.data)
                })
            }
        }
    }, [])
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
        <div className="page">
            <div>
            <Header user={role}/>
                <Navbars/>
                <Card button1={"Overwatch"} button2={"Apex Legends"} button3={"Valorant"} button4={"Minecraft"} button5={"R6S"} button6={"Hardware"} button7={"Software"} button8={"HELP!!!!"}/>
                <h3>{props.text}</h3>
                {
                postList.map((val) => {
                    return (
                        <Query_cont owner={val.username} post_id={val.post_no} key={val.post_no} title={val.post_title} description={val.post_desc}/>
                    );

                })}

            </div>
        </div>
    );
}
Forum.defaultProps = {
    get:'http://localhost:3001/api/get',
    cat_id:0,
    text:"Posts on gaming diary forum",
    post_id:0,
}

Forum.propTypes = {
    get: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    cat_id: PropTypes.number.isRequired,
    post_id:PropTypes.number.isRequired
}


export default Forum;
