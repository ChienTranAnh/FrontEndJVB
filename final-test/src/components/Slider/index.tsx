import React from "react";
import {Badge, Carousel, Row} from "react-bootstrap";
import {useQuery} from "@tanstack/react-query";
import {fetchGenre, fetchSlide} from "../../api";
import {defaultMovie, urlSlider} from "../../types/DefaultValue";
import {Link, Route, Routes} from "react-router-dom";
import Movie from "../Movie/Common";

const Slider: React.FC = () => {

    const slider = useQuery({queryKey: ['movieVideo'], queryFn: fetchSlide});
    const genres = useQuery({queryKey: ['genreMovie'], queryFn: fetchGenre});

    if (slider.error) {
        return <script>alert(`Error: {slider.error.message}`)</script>;
    }

    if (slider.isLoading) {
        return (
            <Carousel>
                <Carousel.Item interval={3000} key={defaultMovie.id}>
                    <img className="d-block w-100" src={defaultMovie.backdrop_path}
                         alt={`${defaultMovie.original_title} - Backdrop`}/>
                    <Carousel.Caption className="text-start col-md-4">
                        <h3 className="py-3">{defaultMovie.title}</h3>
                        <Row className="d-flex col-md-12">
                            <div className="col-auto">
                                {
                                    defaultMovie.genre_ids.map((gen, index) => {
                                        return (<Badge key={index} bg={"light"} text={"dark"}
                                                       className="col-auto rounded-5 me-1">
                                            {gen}
                                        </Badge>);
                                    })
                                }
                            </div>
                            <div className="col-md-3">{defaultMovie.release_date}</div>
                            <div className="col-md-3">{defaultMovie.vote_average}</div>
                        </Row>
                        <p>{defaultMovie.overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }

    return (
        <>
            <Carousel key={Date.now()}>
                {
                    slider.data && slider.data.slice(0, 5).map((movie) => (
                        <Carousel.Item interval={3000} key={movie.id}>
                            <Link to={'/movie/' + String(movie.id)}>
                                <img className="d-block w-100" src={urlSlider + movie.backdrop_path}
                                     alt={`${movie.original_title} - Backdrop`}/>
                            </Link>
                            <Carousel.Caption className="text-start col-md-4">
                                <h3 className="py-3">{movie.title}</h3>
                                <Row className="d-flex col-md-12">
                                    <div className="col-auto">
                                        {movie.genre_ids &&
                                            movie.genre_ids.map((genreId => (
                                                <Badge key={genreId} bg={"light"} text={"dark"}
                                                       className="col-auto rounded-5 me-1 p-2">
                                                    {
                                                        genres.data?.find(item => item.id === genreId)?.name
                                                    }
                                                </Badge>
                                            )))
                                        }
                                    </div>
                                    <div className="col-md-3">{movie.release_date}</div>
                                    <div className="col-md-3">{movie.vote_average}</div>
                                </Row>
                                <p>{movie.overview}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
            <Routes>
                {
                    slider.data && slider.data.slice(0, 5).map((movie) => (
                        <Route key={movie.id} path={'/moive/' + String(movie.id)} element={<Movie/>}/>
                    ))
                }
            </Routes>
        </>
    );
};

export default Slider;