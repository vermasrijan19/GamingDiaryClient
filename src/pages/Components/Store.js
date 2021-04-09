import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
function Store(props) {
    const [title, setTitle] = useState("");
    const [desc, setDescription] = useState("");
    const [input, setInput] = useState('');
    const tagList = [
        {title: "Overwatch", id: 100},
        {title: "Apex Legends", id: 200},
        {title: "Minecraft", id: 300},
        {title: "Rainbow 6 siege", id: 400},
        {title: "Valorant", id: 500},
        {title: "Hardware", id: 600},
        {title: "Software", id: 700},
        {title: "HELP!!", id: 800},

    ];

    function validateForm() {
        return title.length > 0 && desc.length > 0 && input  ;
    }
    Axios.defaults.withCredentials = true;
    function handleSubmit(event) {
        document.write(title)
        document.write(input)
        const cat_id  = parseInt(input)
        console.log(desc)
        // let response;
        Axios.post("http://localhost:3001/api/createp",{title:title,description:desc,cat_id:cat_id}).then((response)=>
        {
            console.log(response)
        });

    }
    return (
        <div className={"m-5"}>
            {/*<div id={"combo-box-demo"}>*/}
            <Autocomplete
                id="combo-box-demo"
                options={tagList}
                getOptionLabel={(option) => option.title}
                // inputValue={input}
                onChange={(e,v) => setInput(v.id)}
                style={{ width: 300 }}
                renderInput={(params) => (
                    <TextField id={"combo-box-demo"} {...params} label="Select tag" onChange={({ target }) => setInput(target.value)} variant="outlined" fullWidth />
                )}
            />
            {/*</div>*/}
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        // autoFocus
                        size="lg" type="text" placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
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

export default Store;
