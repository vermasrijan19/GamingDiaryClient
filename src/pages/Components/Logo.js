import React from 'react';
import PropTypes from 'prop-types'
import image from './images/logo.png'
import {Link} from "react-router-dom";

Logo.defaultProps = {

}
Logo.propTypes = {
};

function Logo(props) {
    return (

        <a href={"http://localhost:3000/home"}><img src={image}/></a>
    );
}

export default Logo;
