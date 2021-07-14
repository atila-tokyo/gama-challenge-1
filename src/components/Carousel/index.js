import React from 'react';
import pairshoes from "../../assets/pairshoes.jpeg";
import zx750 from "../../assets/zx750.jpeg";
import zx750g from "../../assets/zx750g.jpeg";
import { Carousel, Container } from 'react-bootstrap';

export default function Slides() {
    return (
        <Container fluid className="content">
        <Carousel fade class="bg-dark p-0">
            <Carousel.Item>
                <img
                className="d-inline w-100"
                src={pairshoes}
                alt="First slide"
            />
            <Carousel.Caption>
                <h1>Boston Super</h1>
                <h3>Modelo super raro em cores únicas</h3>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={zx750}
                alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>ZX 750</h1>
                    <h3>Um toque retrô na sua coleção</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={zx750g}
                alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>ZX 750</h1>
                    <h3>Disponibilidade limitada</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Container>
    )
};