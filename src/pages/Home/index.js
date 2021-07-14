import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button, Form, InputGroup, FormControl, Container } from 'react-bootstrap';
import NavbarDark from '../../components/Navbar';
import CardBanner from '../../components/Cards/Card-banner';
import Card1 from '../../components/Cards/Card1';
import Slides from '../../components/Carousel';
import Footer from '../../components/Footer';

function App(props) {

    return (
        <>
            <NavbarDark />
            <h3 className="text-center">Não passe vontade! Todos os modelos ORIGINALS para colecionadores em um lugar só</h3>
            <Slides />
            <br></br>
            <CardBanner />
            <Card1 />
            <Footer />
        </>
    );
}

export default App;