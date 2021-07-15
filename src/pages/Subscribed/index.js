import React from 'react';
import Navbar from "../../components/Navbar/subscribed"
import CardSub from '../../components/Cards/Card-Subscribed';
import Footer from '../../components/Footer';

function App(props) {

    return (
        <>
            <Navbar />
            <CardSub />
            <Footer />
        </>
    );
}

export default App;