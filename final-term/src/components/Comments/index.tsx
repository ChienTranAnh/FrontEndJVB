import React from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import {urlImages} from "../../types";

export const Comments: React.FC = () => {
    return (
        <Container className="mt-4 mb-4">
            <h4 className="mt-5 mb-5">Comments</h4>
            <Row className="mt-4 mb-4">
                <Col xs={2} sm={2} md={2} lg={2}>
                    <div>
                        <img src={`${urlImages}/Ellipse 13.png`} alt="" className="w-100"/>
                    </div>
                </Col>
                <Col xs={10} sm={10} md={10} lg={10}>
                    <Form className="col-md-10">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>James</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Write your comments here....."/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row className="mt-4 mb-4">
                <Col xs={2} sm={2} md={2} lg={2}>
                    <div>
                        <img src={`${urlImages}/Ellipse 10.png`} alt="" className="w-100"/>
                    </div>
                </Col>
                <Col xs={10} sm={10} md={10} lg={10}>
                    <div className="col-md-10">
                        <p>Arlene</p>
                        <p>12/12/2024</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo con</p>
                        <span className="me-5"><img src={`${urlImages}/like.svg`} alt="Like"/>10</span>
                        <span className="me-5"><img src={`${urlImages}/dislike.svg`} alt="disLike"/></span>
                        <span>Reply</span>
                    </div>
                </Col>
            </Row>
            <Row className="mt-4 mb-4">
                <Col xs={2} sm={2} md={2} lg={2}>
                    <div>
                        <img src={`${urlImages}/Ellipse 11.png`} alt="" className="w-100"/>
                    </div>
                </Col>
                <Col xs={10} sm={10} md={10} lg={10}>
                    <div className="col-md-10">
                        <p>Arlene</p>
                        <p>12/12/2024</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo con</p>
                        <span className="me-5"><img src={`${urlImages}/like.svg`} alt="Like"/>10</span>
                        <span className="me-5"><img src={`${urlImages}/dislike.svg`} alt="disLike"/></span>
                        <span>Reply</span>
                    </div>
                </Col>
            </Row>
            <Row className="mt-4 mb-4">
                <Col xs={2} sm={2} md={2} lg={2}>
                    <div>
                        <img src={`${urlImages}/Ellipse 12.png`} alt="" className="w-100"/>
                    </div>
                </Col>
                <Col xs={10} sm={10} md={10} lg={10}>
                    <div className="col-md-10">
                        <p>Arlene</p>
                        <p>12/12/2024</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo con</p>
                        <span className="me-5"><img src={`${urlImages}/like.svg`} alt="Like"/>10</span>
                        <span className="me-5"><img src={`${urlImages}/dislike.svg`} alt="disLike"/></span>
                        <span>Reply</span>
                    </div>
                </Col>
            </Row>
            <div className="p-5"></div>
        </Container>
    );
};