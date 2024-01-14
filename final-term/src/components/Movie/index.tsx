import React from "react";
import {Button, Col, Container, Dropdown, DropdownButton, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import {urlImages} from "../../types";

export const Movie: React.FC = () => {
    return (
        <Container className="mt-5 mb-5">
            <div className="mb-5">
                <img src={`${urlImages}/movie_play.png`} alt="" className="w-100"/>
            </div>
            <Row className="d-flex">
                <Col xs={4} sm={4} md={4} lg={4}>
                    <img src={`${urlImages}/Rectangle 25.png`} alt=""/>
                </Col>
                <Col xs={8} sm={8} md={8} lg={8}>
                    <Row>
                        <Col xs={9} sm={9} md={9} lg={9}>
                            <h3>Silo</h3>
                        </Col>
                        <Col xs={3} sm={3} md={3} lg={3}>
                            <Button variant="danger" className="align-items-end p-2" size="lg">
                                <img src={`${urlImages}/plus.svg`} alt="" className="me-2"/>
                                <span>Add to Favourite</span>
                            </Button>
                        </Col>
                    </Row>
                    <div className="mt-5 mb-5 d-flex">
                        <div className="me-3">
                            <Button className="me-2" variant="light">Drama</Button>
                            <Button variant="light">Science Fiction</Button>
                        </div>
                        <div>
                            <span className="me-2">
                                <img src={`${urlImages}/calendar.svg`} alt=""/>
                            </span>
                            <span className="me-4">2023</span>
                            <span className="me-4">
                                <img src={`${urlImages}/clock.svg`} alt=""/>
                            </span>
                            <span className="me-4">50:38</span>
                            <span className="me-4">
                                <img src={`${urlImages}/star.svg`} alt=""/>
                            </span>
                            <span>8.5</span>
                        </div>
                    </div>
                    <div className="col-md-11">In a ruined and toxic future, a community exists in a giant underground
                        silo that plunges
                        hundreds of stories deep. There, men and women live in a society full of regulations they
                        believe are meant to protect them.
                    </div>
                    <div className="mt-5">
                        <Row className="align-items-center">
                            <Col xs={2} sm={2} md={2} lg={2} className="text-end">
                                <span>Country</span>
                            </Col>
                            <Col className="col-sm-1">
                                <span>:</span>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <span>United States</span>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col xs={2} sm={2} md={2} lg={2} className="text-end">
                                <span>Genre</span>
                            </Col>
                            <Col className="col-sm-1">
                                <span>:</span>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <span>Drama, Science Fiction</span>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col xs={2} sm={2} md={2} lg={2} className="text-end mr-auto">
                                <span>Date Release</span>
                            </Col>
                            <Col className="col-sm-1">
                                <span>:</span>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <span>May 05 2023</span>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col xs={2} sm={2} md={2} lg={2} className="text-end">
                                <span>Production</span>
                            </Col>
                            <Col className="col-sm-1">
                                <span>:</span>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <span>AMC Studios</span>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col xs={2} sm={2} md={2} lg={2} className="text-end">
                                <span>Cast</span>
                            </Col>
                            <Col className="col-sm-1">
                                <span>:</span>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <span>Tim Robbins, Rebecca Ferguson, Avi Nash, Rashida Jones, David Oyewolo, Tim Robbins</span>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <div className="mt-5 mb-5">
                <Navbar variant="dark" bg="black" expand="lg">
                    <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Session 1"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </Container>
    );
};