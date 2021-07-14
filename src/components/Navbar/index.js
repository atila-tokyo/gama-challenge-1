import React from 'react';
import { Navbar, Button, Form, InputGroup, FormControl, Container } from 'react-bootstrap';

export default function NavbarDark() {
    return (
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
        <span className="text-center text-white mt-4 mb-4">Cadastre seu email e seja notificado da BLACK FRIDAY!</span>
        <Form inline>
        <Button>Se inscreva!</Button>
        </Form>
        </Container>
        </Navbar>
    )
};
