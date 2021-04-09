import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Axios from "axios";
import Header from "./Header";
import Navbars from "./Navbars";

Redirect.propTypes = {
    to:PropTypes.string.isRequired,
};
Redirect.defaultProps = {
    to:"/login",
};

function Redirect(props) {

    return (
        <div>
            <Redirect to={props.to} />
        </div>
    );
}

export default Redirect;
