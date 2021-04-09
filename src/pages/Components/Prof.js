import React from 'react';
import PropTypes from 'prop-types';

Prof.propTypes = {
    owner:PropTypes.string.isRequired,
    profile_url:PropTypes.string.isRequired,
};
Prof.defaultProps = {
    profile_url:"https://i.imgur.com/2nqSWKb.jpeg",
};

function Prof(props) {
    return (
        <figure className="figure ">
            <img src={props.profile_url} className="figure-img  z-depth-1"
                 alt="" style={{ width: "125px",height: "125px",  }} />
            <figcaption className="figure-caption text-center">
                {props.owner}
            </figcaption>

        </figure>
    );
}

export default Prof;
