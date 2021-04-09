import React from 'react';
import PropTypes from 'prop-types';
import * as url from "url";
import Prof from "./Prof";
import {Link} from "react-router-dom";


const Query_cont = props => {
    console.log(props.post_id);
    return (

        <div className="Query_cont">

            <Prof owner={props.owner} profile_url={props.profile_url}/>
            <div className="w-25"></div>
            <div className="Description">
               <Link to={{
                   pathname:'/view',
                   itemprop:{id:props.post_id},

               }}>

                   <h2>{props.title}</h2>
               </Link>
                {props.description}
            </div>
        </div>
    );
};
Query_cont.propTypes = {
    description:PropTypes.string.isRequired,
    owner:PropTypes.string.isRequired,
    profile_url:PropTypes.string.isRequired,
    usr_post_count:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    post_id: PropTypes.number.isRequired,
};

Query_cont.defaultProps = {
    title:"This is a title",
    description: "THis is a sample post description just to " +
                 "test if the description is accurate and i am writing a long" +
                 " description so that there is room to test it further",
    owner:"LITAF",
    profile_url:"https://i.imgur.com/2nqSWKb.jpeg",
    post_id:0,
    usr_post_count:0,


}

export default Query_cont;
