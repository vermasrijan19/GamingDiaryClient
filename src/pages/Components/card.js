import React from 'react';
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";
import ow from './images/overwatch.png'
import apex from './images/apex.jpg'
import valorant from './images/valorant.png'
import minecwaft from './images/minecraft_.png'
import r6 from './images/46s.jpg'
import rtx from './images/rtx.png'
import linux from './images/linux_tux.png'
import help from './images/help.jpg'
import {Link} from "react-router-dom";

Card.propTypes = {
    button1: PropTypes.string.isRequired,
    button2: PropTypes.string.isRequired,
    button3: PropTypes.string.isRequired,
    button4: PropTypes.string.isRequired,
    button5: PropTypes.string.isRequired,
    button6: PropTypes.string.isRequired,
    button7: PropTypes.string.isRequired,
    button8: PropTypes.string.isRequired,
// button9:PropTypes.string.isRequired,
};
Card.defaultProps =
    {}

function over(event) {

}

function Card(props) {
    return (
        <div>

            <Link to={{pathname: "/forum/"+props.button1 }}><Button
                className={"col-2"} variant="warning">
                {<img className="game" src={ow}/>}{props.button1}</Button>{' '}
            </Link>
            <Link to={{pathname: "/forum/"+props.button2,}}>
                <Button className={"col-2"} variant="danger">{<img className="game"
                                                                                                    src={apex}/>}{props.button2}</Button>{' '}
            </Link>
            <Link to={{pathname: "/forum/"+props.button4, }}><Button href={"/forum/" + props.button4}
                                                                                 className={"col-2"} variant="success">{
                <img
                    className="game" src={minecwaft}/>}{props.button4}</Button>{' '}
            </Link>
            <Link to={{pathname: "/forum/"+props.button5, }}><Button href={"/forum/" + props.button5}
                                                                                 className={"col-2"} variant="dark">{
                <img className="game" src={r6}/>}{props.button5}</Button>
            </Link>
            <Link to={{pathname:"/forum/"+props.button3,}}><Button href={"/forum/" + props.button3} className={"col-2"} variant="danger">
            {<img className="game" src={valorant}/>}{props.button3}</Button>{' '}
            </Link>
            <Link to={{pathname: "/forum/"+props.button6, }}><Button href={"/forum/" + props.button6}
                                                                                 className={"col-2"} variant="light">{
                <img className="game" src={rtx}/>}{props.button6}</Button>
            </Link><Link to={{pathname: "/forum/"+props.button7, }}><Button href={"/forum/" + props.button7}
                                                                                        className={"col-2"}
                                                                                        variant="info">{<img
            className="game" src={linux}/>}{props.button7}</Button>{' '}
        </Link>
            <Link to={{pathname: "/forum/"+props.button8, }}><Button href={"/forum/" + props.button8}
                                                                                 className={"col-2"} variant="dark">{
                <img className="game" src={help}/>}{props.button8}</Button>{' '}
            </Link>
        </div>
    );
}

export default Card;
