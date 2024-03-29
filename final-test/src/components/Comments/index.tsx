import React from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {defaultReviewer, urlImages} from "../../types/DefaultValue";
import PropsComments from "./PropsComments";
import {fetchReviewer} from "../../api";

const Comments: React.FC = () => {
    let {movieKey} = useParams();

    const {isLoading, data, error, isSuccess} = useQuery(
        {queryKey: ['review', movieKey], queryFn: () => fetchReviewer(movieKey ?? '129')}
    );

    if (error) {
        return <script>alert(`Error: {error.message}`)</script>;
    }

    if (isLoading) {
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
    }

    return (
        <Container className="mt-4 mb-4">
            <h4 className="mt-5 mb-5">Comments</h4>
            <Row className="mt-4 mb-4">
                <Col xs={2} sm={2} md={2} lg={2}>
                    <div>
                        <img src={`${urlImages}/defaultAvt.png`} alt="CHOEN"
                             style={{width: '160px', height: '160px', objectFit: "cover", borderRadius: '50%'}}/>
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
            {
                isSuccess ? data.map((cmt) => (
                    <PropsComments key={cmt.id} reviewer={cmt}/>
                )) : <PropsComments reviewer={defaultReviewer}/>
            }
            <div className="p-5"></div>
        </Container>
    );
};

export default Comments;