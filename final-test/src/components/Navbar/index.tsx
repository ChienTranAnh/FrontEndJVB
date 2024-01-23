import React from 'react';
import {Container, Form, FormControl, Nav, Navbar, Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import {urlImages} from "../../types/DefaultValue";

const AppNavbar: React.FC = () => {
    let url = useLocation();
    console.log(url);

    return (
        <Navbar bg="black" variant="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav className="mr-auto col-md-3">
                        {url.pathname === '/' ?
                            <Nav.Link href="/" active={true}>Home</Nav.Link> : <Nav.Link href="/">Home</Nav.Link>
                        }
                        <Nav.Link href="#genre">Genre</Nav.Link>
                        <Nav.Link href="#country">Country</Nav.Link>
                    </Nav>
                    <Row className="col-md-3">
                        <Form className="d-flex">
                            <FormControl type="text" placeholder="Search movie......" className="mr-sm-2"/>
                            <img className="bg-white d-flex" src={`${urlImages}/search.svg`} alt='search.svg'/>
                        </Form>
                    </Row>
                    <Nav className="mr-auto col-md-5">
                        {url.pathname !== '/' ?
                            <Nav.Link href="#movies" active={true}>Movies</Nav.Link>
                            :
                            <Nav.Link href="#movies">Movies</Nav.Link>
                        }
                        <Nav.Link href="#series">Series</Nav.Link>
                        <Nav.Link href="#animation">Animation</Nav.Link>
                        <Nav.Link href="#login-signup">Login/Signup</Nav.Link>
                        <Nav.Link href="#notifications">
                            <img src={`${urlImages}/notification.svg`} alt='notification.svg'/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;