import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo-originals.png";
import { Navbar, Button, Form, InputGroup, FormControl, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';

export default function NavbarDark() {
    const history = useHistory();
    const [ email, setEmail ] = useState('');
    const [listEmails, setListEmails] = useState([]);

    const handleEmail = () => {
        if (email) {
            console.log("list", [...listEmails, email])
            setListEmails([...listEmails, email]);
            localStorage.setItem('listEmails', JSON.stringify([...listEmails, email]));

            // waits for 1 second before redirecting            
            setTimeout(()=>{
                history.push('/subscribed');
            },1000)
        }
    }
    
    useEffect(() => {
        // checks if is there anything at the localStorage
        const data = localStorage.getItem('listEmails');
        console.log("data",data)
        if (data) {
            setListEmails(JSON.parse(data))
        }
    }, []);

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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    </InputGroup>
                </Form>
                <Form inline className="ms-0 me-0">
                    <Button type="button" onClick={handleEmail}>Se inscreva!</Button>
                </Form>
                </Container>
            
        </Navbar>
    )
};
