import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button, Card, Form, InputGroup, FormControl } from 'react-bootstrap';

function App(props) {

    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Form inline>
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="E-mail"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </Form>
            <Form inline>
            <Button>Se inscreva!</Button>
            </Form>
            </Navbar>
        </>
    );
}

export default App;