import React, {useState} from 'react';
import PropTypes, {number} from 'prop-types';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";

StoreRep.propTypes = {

    post_no:PropTypes.number.isRequired,
    id:PropTypes.number.isRequired

};

function StoreRep(props) {
    const [desc, setDescription] = useState("");
    function validateForm() {
        return desc.length > 0   ;
    }
    Axios.defaults.withCredentials = true;
    function handleSubmit(event) {

        document.write(desc)
        document.write(props.post_no)
        Axios.post("http://localhost:3001/submit_reply",{description:desc,post_no:props.post_no}).then((response)=>
        {
            console.log(response)
        });

    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>

                <Form.Group size="lg" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        value={desc}
                        onChange={(e) =>  setDescription(e.target.value)}
                    />
                </Form.Group>
                <br/>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Post
                </Button>
            </Form>
        </div>
    );
}

export default StoreRep;
