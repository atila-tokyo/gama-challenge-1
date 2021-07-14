import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button, Form, InputGroup, FormControl, Container } from 'react-bootstrap';
import NavbarDark from '../../components/Navbar';
import Card1 from '../../components/Cards/Card1';
import Slides from '../../components/Carousel';
function App(props) {

    return (
        <>
            <NavbarDark />
            <Card1 />
            <Slides />
        </>
    );
}

export default App;