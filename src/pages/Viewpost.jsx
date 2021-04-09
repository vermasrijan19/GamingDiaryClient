import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import Header from "./Components/Header";
import Store from "./Components/Store";
import Forum from "./forum";
import Query_cont from "./Components/Query_cont";
import PropTypes from "prop-types";
import StoreRep from "./Components/store rep";
import {Link} from "react-router-dom";
// import "./Login.css";
Axios.defaults.withCredentials = true;
 function Viewpost(props) {
    const [role, setRole] = useState(0);
    const [post_no, setpost_no] = useState(0);

    const [postList, setPostList] = useState([]);
    const [log,setlog] = useState(false);
    const [reply, setReplyList] = useState([]);
    let replyto;
    useEffect(() => {
        if(props.location.itemprop)
        Axios.post(props.get ,{post_id:(props.location.itemprop)}).then((response) => {
            setPostList(response.data);
            setpost_no(response.data[0].post_no)
            console.log(response.data)
        });
        if(props.location.itemprop)
        Axios.post( "http://localhost:3001/replies",{post_id:(props.location.itemprop)}).then((response) => {
            setReplyList(response.data);
            console.log(response.data)
        })
    // }
    }, [])
    // const [role, setRole] = useState("");
    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                setlog(response.data.loggedIn)
                // console.log(response.data);
                // console.log(response.data.user[0].username);
                setRole(response.data.user[0].id);
                // console.log(role)
            }
            else
            {

            }
        });
    }, []);
    if(log)
    {
        console.log("postlist:")
        console.log(postList)
        replyto= <StoreRep id={ (role)} post_no={post_no}/>
    }
    else {
        replyto=<Link to={{pathname:"/login"}}>< Button className={"but"} block size="lg" >
            Login
        </Button></Link>;
    }
     // console.log("This is the id"+role)
    return (
        <div className={"nopage"}>
            {/*<Header user={role}/>*/}
            <Forum post_id={parseInt(props.location.itemprop)}/>
            <div className={"nopage"}>
            {
                postList.map((val) => {
                    return (
                        <Query_cont owner={val.username} post_id={val.post_no} key={val.post_no} title={val.post_title} description={val.post_desc}/>
                    );

                })}
                {
                    replyto
                }
                {
                    reply.map((val) => {
                        return (
                            <Query_cont owner={val.username} post_id={val.post_no} key={val.post_no} title={""} description={val.reply}/>
                        );

                    })
                }
            </div>



        </div>
    );
}
Viewpost.defaultProps = {
    get:'http://localhost:3001/api/spc',
    cat_id:0,
    text:"Posts on gaming diary forum",
    post_id:0,
}

Viewpost.propTypes = {
    get: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    cat_id: PropTypes.number.isRequired,
    post_id:PropTypes.number.isRequired
}


export default Viewpost;
