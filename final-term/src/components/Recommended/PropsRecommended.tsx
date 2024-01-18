import React from "react";
import {Button, Col} from "react-bootstrap";
import {ObjMovies} from "../../types/Obj";
import {urlPoster} from "../../types/DefaultValue";

interface MovieProps {
    movie: ObjMovies
}

const PropsRecommended: React.FC<MovieProps> = ({movie}) => {
    return (
        <Col xs={3} sm={3} md={3} lg={3} className="mb-3">
            <img src={
                movie.id !== 0 ?
                    `${urlPoster}` + movie.poster_path : movie.poster_path
            } alt="" className="w-100"/>
            <div className="d-flex mt-3">
                <Col xs={6} sm={6} md={6} lg={6}>
                    <h5>{movie.title}</h5>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} className="text-end">
                    {
                        <div>
                            <Button className="me-2" variant="danger" size="sm">HD</Button>
                            <Button variant="outline-danger" size="sm">Session</Button>
                        </div>
                    }
                </Col>
            </div>
        </Col>
    );
};

export default PropsRecommended;