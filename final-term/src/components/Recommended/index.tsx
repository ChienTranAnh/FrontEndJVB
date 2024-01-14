import React from 'react';
import {Badge, Button, Col, Container, Row} from "react-bootstrap";
import {urlImages} from "../../types";

export const Recommended: React.FC = () => {
    return (
        <Container className="mt-4 mb-4 align-items-start">
            <h4 className="mb-5">You may also like</h4>
            <div className="justify-content-center">
                <Row className="mb-4">
                    <Col xs={3} sm={3} md={3} lg={3} className="mb-3">
                        <img src={`${urlImages}/Frame 67.png`} alt=""/>
                        <div className="d-flex mt-3">
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <h5>Black night</h5>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <Button className="me-2" variant="danger" size="sm">HD</Button>
                                <Button variant="outline-danger" size="sm">Session 1</Button>
                            </Col>
                        </div>
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                        <img src={`${urlImages}/Frame 68.png`} alt=""/>
                        <div className="d-flex mt-3">
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <h5>Black night</h5>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6} className="">
                                <Button className="me-2" variant="danger" size="sm">HD</Button>
                                <Button variant="outline-danger" size="sm">Session 1</Button>
                            </Col>
                        </div>
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                        <img src={`${urlImages}/Frame 69.png`} alt=""/>
                        <div className="d-flex mt-3">
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <h5>Black night</h5>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6} className="">
                                <Button className="me-2" variant="danger" size="sm">HD</Button>
                                <Button variant="outline-danger" size="sm">Session 1</Button>
                            </Col>
                        </div>
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                        <img src={`${urlImages}/Frame 116.png`} alt=""/>
                        <div className="d-flex mt-3">
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <h5>Black night</h5>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6} className="">
                                <Button className="me-2" variant="danger" size="sm">HD</Button>
                                <Button variant="outline-danger" size="sm">Session 1</Button>
                            </Col>
                        </div>
                    </Col>

                    <Col xs={3} sm={3} md={3} lg={3}>
                        <img src={`${urlImages}/Frame 116.png`} alt=""/>
                        <div className="d-flex mt-3">
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <h5>Black night</h5>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6} className="">
                                <Button className="me-2" variant="danger" size="sm">HD</Button>
                                <Button variant="outline-danger" size="sm">Session 1</Button>
                            </Col>
                        </div>
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                        <img src={`${urlImages}/Frame 69.png`} alt=""/>
                        <div className="d-flex mt-3">
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <h5>Black night</h5>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6} className="">
                                <Button className="me-2" variant="danger" size="sm">HD</Button>
                                <Button variant="outline-danger" size="sm">Session 1</Button>
                            </Col>
                        </div>
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                        <img src={`${urlImages}/Frame 68.png`} alt=""/>
                        <div className="d-flex mt-3">
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <h5>Black night</h5>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6} className="">
                                <Button className="me-2" variant="danger" size="sm">HD</Button>
                                <Button variant="outline-danger" size="sm">Session 1</Button>
                            </Col>
                        </div>
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                        <img src={`${urlImages}/Frame 67.png`} alt=""/>
                        <div className="d-flex mt-3">
                            <Col xs={6} sm={6} md={6} lg={6}>
                                <h5>Black night</h5>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6} className="">
                                <Button className="me-2" variant="danger" size="sm">HD</Button>
                                <Button variant="outline-danger" size="sm">Session 1</Button>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};