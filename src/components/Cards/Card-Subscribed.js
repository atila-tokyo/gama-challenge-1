import React from 'react';
import { Card } from 'react-bootstrap';
import OS from '../../assets/oldschool.jpeg';
export default function CardSub() {
    return (
            <>
            <Card className='mt-5 mb-0' 
                  style={{
                         width: '40%',
                        height: 'auto',
                        display: 'block',
                        margin: 'auto',
                        }}>
                <Card.Img src={OS} />
            </Card>
            <h2 className="text-center mt-2 mb-4">Obrigado! Em breve notificaremos sobre a BlackFriday</h2>
            </>
    )
}