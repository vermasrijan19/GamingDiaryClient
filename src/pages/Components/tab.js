import React from 'react';
import PropTypes from 'prop-types';
import {Table} from "react-bootstrap";

Tab.propTypes = {
col1:PropTypes.string.isRequired,
col2:PropTypes.string.isRequired,
};

function Tab(props) {
    return (
        <div >
            <Table striped bordered hover variant="dark" >
            <tbody>
            <tr>
                <td>{props.col1}</td>
                <td>{props.col2}</td>
            </tr>
            </tbody>
            </Table>
        </div>
    );
}

export default Tab;
