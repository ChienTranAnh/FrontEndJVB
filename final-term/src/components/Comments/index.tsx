import React from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import {defaultReviewer, urlImages} from "../../types";
import PropsComments from "./PropsComments";

const Comments: React.FC = () => {
    return (
        <Container className="mt-4 mb-4">
            <h4 className="mt-5 mb-5">Comments</h4>
            <Row className="mt-4 mb-4">
                <Col xs={2} sm={2} md={2} lg={2}>
                    <div>
                        <img src={`${urlImages}/defaultAvt.png`} alt="" className="w-100"/>
                    </div>
                </Col>
                <Col xs={10} sm={10} md={10} lg={10}>
                    <Form className="col-md-10">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>CHOEN</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Write your comments here....."/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <PropsComments reviewer={defaultReviewer}/>
            <div className="p-5"></div>
        </Container>
    );
};

export default Comments;