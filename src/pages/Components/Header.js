import PropTypes from 'prop-types'
import Logo from "./Logo";
import {Button} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

const Header = (props) => {

    let x = props.user;
    if (props.user === "") {
        x = "Login/signup"
    }
    return (
        <div>
        <div className="head">
            <header className='header'>
                <Logo/>
                <h2 style={{fontWeight: 900}}>{props.title}</h2>

            </header>
            <Link to={() => {
                if (props.user !== 'Login/signup' && props.user !== "") {
                    return "/profile"
                } else {
                    return "/login"
                }

            }} className="btn btn-primary">{x}</Link>

        </div>
            <Link to={() => {
                if (props.user !== 'Login/signup' && props.user !== "") {
                    return "/create-post"
                } else {
                    return "/login"
                }

            }} className="btn btn-primary">Create Post</Link>
            <Link to={() => {
                if (props.user !== 'Login/signup' && props.user !== "") {
                    return "/add-data"
                } else {
                    return "/login"
                }

            }} className="btn btn-primary float-right">Add Data</Link>
        </div>

    )
}

Header.defaultProps = {
    user:'Login/signup',
    title: 'Gaming Diary',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
}



export default Header
