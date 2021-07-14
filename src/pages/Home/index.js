import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button, Form, InputGroup, FormControl, Container } from 'react-bootstrap';
import { Card1 } from '../../Cards';
function App(props) {

    return (
        <>
        <Navbar bg="dark" variant="light">
            <Container>
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
            <span className="text-center mt-4 mb-4">Cadastre seu email e seja notificado da BLACK FRIDAY!</span>
            <Form inline>
            <Button>Se inscreva!</Button>
            </Form>
            </Container>
            </Navbar>
            <Card1 />
        </>
    );
}

export default App;