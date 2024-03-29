import React from 'react';
import {Button, FormControl,Form,Nav,Navbar} from 'react-bootstrap';

const Navbars = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">

                <Nav className="mr-auto ">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/forum">Forum</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Navbars;
