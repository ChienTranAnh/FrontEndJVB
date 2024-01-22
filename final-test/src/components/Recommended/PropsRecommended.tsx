import React from "react";
import {Button, Col} from "react-bootstrap";
import {Routes, Route, Link} from "react-router-dom";
import {ObjMovies} from "../../types/Obj";
import {urlPoster} from "../../types/DefaultValue";

interface MovieProps {
    movie: ObjMovies
}

const PropsRecommended: React.FC<MovieProps> = ({movie}) => {
    // console.log(movie.id);
    return (
        <Col xs={3} sm={3} md={3} lg={3} className="mb-3">
            <Link to={'/movie/'+String(movie.id)} onClick={() => window.scrollTo({top:500, left: 0})}>
                <img src={
                    movie.id !== 0 ?
                        `${urlPoster}` + movie.poster_path : movie.poster_path
                } alt="" className="w-100"/>
            </Link>
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