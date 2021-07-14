import React from 'react';
import pairshoes from "../../assets/pairshoes.jpeg";
import zx750 from "../../assets/zx750.jpeg";
import zx750g from "../../assets/zx750g.jpeg";
import { Carousel, Container } from 'react-bootstrap';

export default function Slides() {
    return (
        <Container fluid>
        <Carousel fade class="bg-dark">
            <Carousel.Item>
                <img
                className="d-inline w-100"
                src={pairshoes}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={zx750}
                alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={zx750g}
                alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Container>
    )
};