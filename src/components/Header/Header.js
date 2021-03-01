import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
        <div>
            <Navbar bg="success" variant="dark" className="pl-5">
                <Navbar.Brand href="#home"><span className="text-white">Bangladesh Team</span></Navbar.Brand>
                <Nav className="m-auto">
                    <Nav.Link href="/home" className="text-white">Home</Nav.Link>
                    <Nav.Link href="/team" className="text-white">Team</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;