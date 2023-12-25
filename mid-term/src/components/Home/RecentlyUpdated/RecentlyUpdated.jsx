import React, {useEffect, useState} from "react";
import {fetchUpcomingMovies} from "./Upcoming";
import {Col, Container, Row} from "react-bootstrap";


export const RecentlyUpdated = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    // const [index, setIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchUpcomingMovies();
                setUpcomingMovies(data.results);
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
            <h3 className="my-5">Recently Updated</h3>
            <Row>
                <Col className="col-md-10 d-flex">
                    {upcomingMovies && upcomingMovies.slice(0, 4).map((movie) => (
                            <div className="md-3" key={movie.id}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <img className="card-img"
                                             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                             alt={movie.original_title}/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h6><b>{movie.title}</b></h6>
                                            <p className="card-text">{movie.genre_ids && movie.genre_ids.join(' \\ ')}</p>
                                            <p className="card-text">{movie.release_date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Col>
                <Col className="text-center">
                    <img src={'./images/next.png'} alt='right-arrow.svg'/>
                </Col>
            </Row>
        </Container>
    );
};
