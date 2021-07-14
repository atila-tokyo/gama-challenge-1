import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import gazelle from '../../assets/gazelle.jpeg';
import samoa from '../../assets/samoa.jpeg'
import stansmith from '../../assets/stansmith.jpeg'
import BF from '../../assets/BF.jpeg'
export default function Card1() {
    return (
        <CardGroup>
        <Card>
          <Card.Img variant="top" src={stansmith} />
          <Card.Body>
            <Card.Title>Stan Smith Recycle</Card.Title>
            <Card.Text>
              Fabricado com lixo reciclado do fundo do mar
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={samoa} />
          <Card.Body>
            <Card.Title>Samoa</Card.Title>
            <Card.Text>
              Um dos maiores clássicos de volta ao topo das paradas
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={gazelle} /><br></br>
          <Card.Body>
            <Card.Title>Gazelle</Card.Title>
            <Card.Text>
              Das pistas de atletismo para a cultura pop
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    )
};