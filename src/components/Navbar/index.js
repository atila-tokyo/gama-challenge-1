import React from 'react';
import logo from "../../assets/logo-originals.png";
import { Navbar, Button, Form, InputGroup, FormControl, Container } from 'react-bootstrap';

export default function NavbarDark() {
    return (
        <Navbar class="inline" bg="dark" variant="light">
        <Container>
            <img src={logo} />
            <h3 className="text-center text-white mt-4 mb-4">Cadastre seu email e seja notificado da BLACK FRIDAY!</h3>
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
            </Container>
            </Navbar>
    )
};
