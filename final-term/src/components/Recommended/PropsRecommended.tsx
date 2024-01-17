import React from "react";
import {Button, Col} from "react-bootstrap";
import {Movies} from "../../types";

interface ObjMovie {
    movie: Movies
}

const PropsRecommended:React.FC<ObjMovie> = ({movie}) => {
    return (
        <Col xs={3} sm={3} md={3} lg={3} className="mb-3">
            <img src={movie.backdrop_path} alt="" className="w-100"/>
            <div className="d-flex mt-3">
                <Col xs={6} sm={6} md={6} lg={6}>
                    <h5>{movie.title}</h5>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} className="text-end">
                    {
                        movie.genre_ids.map((gen) => (
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

export default PropsRecommended;