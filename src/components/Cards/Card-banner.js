import React from 'react';
import { Card } from 'react-bootstrap';
import '../../index.css'

export default function CardBanner() {
    return (
            <Card className="mt-0 mb-4 row" 
            style={{background: 'red', height: '175px'}}>
                <br></br><br></br><br></br>
                <h2 className="text-center"
                    style={{color: 'white'}}>
                <strong>BLACK FRIDAY & CYBER MONDAY 2021</strong></h2>
            </Card>
    )
}