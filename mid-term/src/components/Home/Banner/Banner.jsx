import React, {useEffect, useState} from "react";
import {Badge, Carousel, Row} from 'react-bootstrap';
import {fetchBannerMovies} from "./index";
import gen from "../../../Genre.json";
import {find} from 'lodash';

export const Banner = () => {
    const [banner, setBanner] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    // Fetch data from API for backdrop images
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchBannerMovies();
                setBanner(data.results);
            } catch (error) {
                console.error('Error fetching backdrops:', error);
            }
        };

        fetchData();
    }, []);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
            {banner && banner.slice(0, 4).map((movie) => (
                <Carousel.Item key={movie.id}>
                    <img
                        className="d-block w-100"
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt={movie.original_title}
                    />
                    <Carousel.Caption className="col col-md-5" style={{textAlign:'left'}}>
                        <h2 className="py-3">{movie.title}</h2>
                        <Row className="d-flex col-md-12">
                                {
                                    movie.genre_ids && movie.genre_ids.map((genre_id, index) => {
                                        const Gen = find(gen, {id: genre_id});
                                        return Gen ? (
                                                <Badge key={index} bg={"light"} text={"dark"} className="col-auto mr-5">
                                                    {Gen.name}
                                                </Badge>
                                            ) : ' ';
                                        }
                                    )
                                }
                            <div className="col-md-3">
                                <img className="mb-1" src={'./images/calendar.svg'} alt='star.svg'/>
                                {new Date(movie.release_date).getFullYear()}
                            </div>
                            <div className="col-md-3">
                                <img className="mb-1" src={'./images/star.svg'} alt='star.svg'/>
                                <span>{movie.vote_average}</span>
                            </div>
                        </Row>
                        <p>{movie.overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};
