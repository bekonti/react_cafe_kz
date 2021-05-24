import React from "react";
// import {BrowserRouter as Router, Link} from "react-router-dom";
import {Navbar, NavDropdown, Nav, Col, Row, Container} from "react-bootstrap";
import {BsFillInboxFill} from 'react-icons/bs'

function Navq() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Row>
                    <Container>
                        <Navbar.Brand href="#home" className="align-content-center">
                            CAFE.KZ
                        </Navbar.Brand>
                    </Container>
                </Row>
                <BsFillInboxFill fontSize={25} className='ml-auto text-white'></BsFillInboxFill>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"
                               style={{borderColor: 'transparent'}}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>


    );
}

export default Navq;