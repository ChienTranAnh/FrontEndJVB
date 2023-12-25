import React, {useEffect, useState} from "react";
import {fetchNewReleaseMovies} from "./index";
import {Button, Container, Row} from "react-bootstrap";

export const NewReleaseMovies = () => {
    const [newReleaseMovies, setNewReleaseMovies] = useState([]);
    // const [index, setIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchNewReleaseMovies();
                setNewReleaseMovies(data);
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
                    <div className="col-md-8">
                        <h3>New Release - Movies</h3>
                    </div>
                    <div className="col-md-4 d-flex" style={{justifyContent: "right"}}>
                        <h3>View all</h3>
                        <img className="ms-2" src={'./images/right-arrow_small.svg'} alt="right-arrow_small.svg"/>
                    </div>
                 </div>
                <Row>
                    {newReleaseMovies &&
                        <div className="col-3" key={newReleaseMovies.id}>
                            <div>
                                <img src={newReleaseMovies.poster_path && `https://image.tmdb.org/t/p/w500${newReleaseMovies.poster_path}`}
                                     alt={newReleaseMovies.original_title}/>
                            </div>
                            <div className="float-start m-2 pt-1 nrm-name">
                                <span className="">{newReleaseMovies.title}</span>
                            </div>
                            <div className="float-end m-2">
                                <Button variant="danger" style={{marginRight: '7px'}} className="mr-5 btn-hd">HD</Button>
                                <Button variant="outline-danger" className="btn-nrm-clock">
                                    <img className="mb-1" src={'./images/clock.svg'} alt='clock.svg'/>&ensp;
                                    <span className="text-white">3:12:00</span>
                                </Button>
                            </div>
                        </div>
                    }
                </Row>
        </Container>
    );
};
