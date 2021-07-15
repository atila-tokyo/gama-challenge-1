import React from 'react';
import { Card } from 'react-bootstrap';
import BF from '../../assets/BF.png';
export default function CardBanner() {
    return (
            <Card className='mt-1 mb-4' style={{ width: '50%', height: 'auto' }}>
                <Card.Img src={BF} style={{}} />
            </Card>
    )
}