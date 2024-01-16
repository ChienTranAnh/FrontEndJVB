import React from "react";
import {Button, Col} from "react-bootstrap";
import {Movies} from "../../types";

export const PropsRecommended = ({backdrop_path, title, genre_ids}: Movies) => {
    return (
        <Col xs={3} sm={3} md={3} lg={3} className="mb-3">
            <img src={backdrop_path} alt="" className="w-100"/>
            <div className="d-flex mt-3">
                <Col xs={6} sm={6} md={6} lg={6}>
                    <h5>{title}</h5>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} className="text-end">
                    {
                        genre_ids.map((gen) => (
                            <>
                                {
                                    gen.id === 1 &&
                                    <Button className="me-2" variant="danger" size="sm">{gen.name}</Button>
                                }
                                {
                                    gen.id === 2 &&
                                    <Button variant="outline-danger" size="sm">{gen.name}</Button>
                                }
                            </>
                        ))
                    }
                </Col>
            </div>
        </Col>
    );
};