import React from 'react';
import logo from "../../assets/logo-originals.png";
import { Navbar} from 'react-bootstrap';


function App(props) {

    return (
        <>
            <Navbar bg="dark" variant="light">
                <img alt='' src={logo} className="ms-4"/>
                <div className="row text-center text-white mt-4 mb-4 mx-auto">
                    <div className="col-6 pe-5 me-5">
                        <h1>adidas Collectibles</h1>
                        <h5></h5>
                    </div>
                    <div className="col-6 "></div>
                </div>
            </Navbar>
        </>
    );
}

export default App;