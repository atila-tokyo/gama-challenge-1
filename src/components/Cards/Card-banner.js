import React from 'react';
import { Card } from 'react-bootstrap';
import BF from '../../assets/BF.png';
export default function CardBanner() {
    return (
            <Card className='mt-1 mb-4' style={{ width: '100%' }}>
                <Card.Img src={BF} />
            </Card>
    )
}