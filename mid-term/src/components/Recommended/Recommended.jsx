import React, {useEffect, useState} from "react";
import {fetchTopRatedMovies} from "./TopRated";
import {Button, Container, Row} from "react-bootstrap";


export const Recommended = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    // const [index, setIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchTopRatedMovies();
                setTopRatedMovies(data.results);
            } catch (error) {
                console.error('Error fetching popular data:', error);
            }
        };

        fetchData();
    }, []);

    /*const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };*/

    return (
        <Container>
            <div className="d-flex my-4">
                <div className="row col-md-9">
                    <div className="col-md-3">
                        <h3 className="text-white">Recommended</h3>
                    </div>
                    <div className="col-md-9">
                        <Button variant="danger">Movies</Button>
                        <Button variant="outline-danger"
                                className="ms-3">Series</Button>
                        <Button variant="outline-danger" className="ms-3">Animation</Button>
                    </div>
                </div>
                <div className="col-md-3 d-flex" style={{justifyContent: "right"}}>
                    <h3>View all</h3>
                    <img className="ms-2" src={'./images/right-arrow_small.svg'} alt="right-arrow_small.svg"/>
                </div>
            </div>
            <Row>
                {
                    topRatedMovies && topRatedMovies.slice(0, 8).map((movie) => (
                        <div className="col-3" key={movie.id}>
                            <div className="">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                     alt='{movie.original_title}' style={{maxWidth: '300px'}}/>
                            </div>
                            <div className="float-start m-2 pt-1 nrm-name">
                                <span className="text-white">{movie.title}</span>
                            </div>
                            <div className="float-end m-2">
                                <Button variant="danger" style={{marginRight: '7px'}}
                                        className="mr-5 btn-sm">{movie.vote_average}</Button>
                                <Button variant="outline-danger" className="btn-nrm-clock btn-sm justify-content-end">
                                    <img className="mb-1" src={'./images/clock.svg'} alt='clock.svg'/>&ensp;
                                    <span className="text-white">{movie.vote_count}</span>
                                </Button>
                            </div>
                        </div>
                    ))
                }
            </Row>
        </Container>
    );
};
