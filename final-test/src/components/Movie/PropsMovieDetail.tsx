import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {format} from "date-fns";
import {urlImages, urlPoster} from "../../types/DefaultValue";
import {ObjMovieDetail} from "../../types/Obj";

interface DetailMovieProps {
    detailMovie: ObjMovieDetail
}

const PropsMovieDetail: React.FC<DetailMovieProps> = ({detailMovie}) => {

    const formatMinutesToHoursAndMinutes = (minutes: number): string => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        return `${hours}:${remainingMinutes < 10 ? '0' : ''}${remainingMinutes}`;
    };

    const formattedTime = formatMinutesToHoursAndMinutes(detailMovie.runtime);

    return (
        <Row className="w-auto">
            <Col xs={4} sm={4} md={4} lg={4}>
                <img src={
                    detailMovie.id !== 0 ? `${urlPoster}` + detailMovie.poster_path : detailMovie.poster_path
                } alt={detailMovie.original_title} className="w-100"/>
            </Col>
            <Col xs={8} sm={8} md={8} lg={8}>
                <Row>
                    <Col xs={8} sm={8} md={8} lg={8}>
                        <h3 className="mt-2 mb-2">{detailMovie.title}</h3>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} className="text-end">
                        <Button variant="danger" className="mt-2 mb-2">
                            <img src={`${urlImages}/plus.svg`} alt="plus.svg" className="me-2"/>
                            <span>Add to Favourite</span>
                        </Button>
                    </Col>
                </Row>
                <div className="mt-5 mb-5 d-flex align-items-center">
                    <div className="me-3">
                        {
                            detailMovie.genres.map((gen, index) => (
                                <Button key={index} variant="light" className="me-2">{gen.name}</Button>
                            ))
                        }
                    </div>
                    <div>
                        <span className="me-2">
                            <img src={`${urlImages}/calendar.svg`} alt="calendar.svg"/>
                        </span>
                        <span className="me-4">
                            {
                                format(new Date(detailMovie.release_date), 'y')
                            }
                        </span>
                        <span className="me-4">
                                <img src={`${urlImages}/clock.svg`} alt="clock.svg"/>
                            </span>
                        <span className="me-4">{formattedTime}</span>
                        <span className="me-4">
                                <img src={`${urlImages}/star.svg`} alt="star.svg"/>
                            </span>
                        <span>{detailMovie.vote_average}</span>
                    </div>
                </div>
                <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11">
                    {detailMovie.overview}
                </div>
                <div className="mt-5">
                    <Row className="align-items-center">
                        <Col xs={2} sm={2} md={2} lg={2} className="text-end">
                            <span>Country</span>
                        </Col>
                        <Col xs="auto" sm="auto" md="auto" lg="auto">
                            <span>:</span>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6}>
                            <span>{
                                detailMovie.production_countries && detailMovie.production_countries.map((country) => (
                                    country.name
                                )).join(', ')
                            }</span>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col xs={2} sm={2} md={2} lg={2} className="text-end">
                            <span>Genre</span>
                        </Col>
                        <Col xs="auto" sm="auto" md="auto" lg="auto">
                            <span>:</span>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6}>
                            <span>{
                                detailMovie.genres && detailMovie.genres.map((gen) => (
                                    gen.name
                                )).join(', ')
                            }</span>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col xs={2} sm={2} md={2} lg={2} className="text-end mr-auto">
                            <span>Date Release</span>
                        </Col>
                        <Col xs="auto" sm="auto" md="auto" lg="auto">
                            <span>:</span>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6}>
                            <span>{format(new Date(detailMovie.release_date), 'MMM dd yyyy')}</span>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col xs={2} sm={2} md={2} lg={2} className="text-end">
                            <span>Production</span>
                        </Col>
                        <Col xs="auto" sm="auto" md="auto" lg="auto">
                            <span>:</span>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6}>
                            <span>{
                                detailMovie.production_companies && detailMovie.production_companies.map((production) => (
                                    production.name
                                )).join(', ')
                            }</span>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col xs={2} sm={2} md={2} lg={2} className="text-end">
                            <span>Cast</span>
                        </Col>
                        <Col xs="auto" sm="auto" md="auto" lg="auto">
                            <span>:</span>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6}>
                            <span>Tim Robbins, Rebecca Ferguson, Avi Nash, Rashida Jones, David Oyewolo, Tim Robbins</span>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
};

export default PropsMovieDetail;