import React from "react";
import {Container, Form, FormControl, Nav, Navbar, Row} from "react-bootstrap";

export const AppNavbar = () => {
    return (
        <Navbar className="justify-content-center" bg="black" variant="dark">
            <Container>
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#genre">Genre</Nav.Link>
                    <Nav.Link href="#country">Country</Nav.Link>
                </Nav>
                <Row>
                    <Form className="d-flex" inline="true">
                        <FormControl type="text" placeholder="Search movie......" className="mr-sm-2"/>
                        <img className="bg-white d-flex" src={'/images/search.svg'} alt='search.svg'/>
                    </Form>
                </Row>
                <Nav>
                    <Nav.Link href="#movies">Movies</Nav.Link>
                    <Nav.Link href="#series">Series</Nav.Link>
                    <Nav.Link href="#animation">Animation</Nav.Link>
                    <Nav.Link href="#login-signup">Login/Signup</Nav.Link>
                    <Nav.Link href="#notifications">
                        <img src={'/images/notification.svg'} alt=''/>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};
