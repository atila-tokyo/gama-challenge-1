import React from 'react';
import logo from "../../assets/logo-originals.png";
import { Navbar, Button, Form, InputGroup, FormControl, Container } from 'react-bootstrap';

export default function NavbarDark() {
    return (
        <Navbar bg="dark" variant="light">
           
                <img alt='' className="ms-4" src={logo} />
                <Container>
                <h3 className="text-center text-white mt-2 mb-0 me-0 mx-auto">Cadastre seu email e seja notificado sobre a BLACKFRIDAY</h3>
                <Form inline className="ms-5">
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
                <Form inline className="ms-0 me-0">
                    <Button>Se inscreva!</Button>
                </Form>
                </Container>
            
        </Navbar>
    )
};
