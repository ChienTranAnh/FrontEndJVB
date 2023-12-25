import React, {useEffect, useState} from "react";
import {fetchTrendingMovies} from "./Trend";
import {Button, Container} from "react-bootstrap";
import gen from "../../../Genre.json";
import {find} from "lodash";


export const Trending = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    // const [index, setIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchTrendingMovies();
                setTrendingMovies(data.results);
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
            <div className="my-4 d-flex">
                <div className="col-md-8">
                    <h3>Trending</h3>
                </div>
                <div className="col-md-4 d-flex" style={{justifyContent: "right"}}>
                    <h3>View all</h3>
                    <img className="ms-2" src={'./images/right-arrow_small.svg'} alt="right-arrow_small.svg"/>
                </div>
            </div>
            <div className="d-flex">
                {trendingMovies && trendingMovies.slice(0, 3).map((movie) => (
                    <div className="col-md-4 ms-3" key={movie.id}>
                        <div className="trending-img">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                 alt={movie.original_title} style={{maxWidth:'400px'}}/>
                        </div>
                        <div className="float-start m-2">
                            <h5 className="trending-name text-white">{movie.title}</h5>
                        </div>
                        <div className="float-end m-2">
                            {
                                movie.genre_ids && movie.genre_ids.map((genre_id, index) => {
                                        const Gen = find(gen, {id: genre_id});
                                        return Gen ? (
                                            <Button className="mr-5" style={{marginRight: '10px'}} variant="danger">
                                                {Gen.name}
                                            </Button>
                                        ) : ' ';
                                    }
                                )
                            }
                        </div>
                    </div>
                ))
                }
            </div>
        </Container>
    );
};
