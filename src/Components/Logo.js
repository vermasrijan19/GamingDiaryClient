import React from 'react';
import PropTypes from 'prop-types'
import image from './images/logo.png'

Logo.defaultProps = {

}
Logo.propTypes = {
};

function Logo(props) {
    return (

            <img src={image}/>
    );
}

export default Logo;
