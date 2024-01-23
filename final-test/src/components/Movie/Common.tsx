import React from "react";
import {Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import {fetchDetailMovie, fetchMovieVideo} from "../../api";
import {defaultMovieDetail, defaultVideoMovie} from "../../types/DefaultValue";
import PropsMovieDetail from "./PropsMovieDetail";
import PropsPlayer from "./PropsPlayer";
import PropsVideoEp from "./PropsVideoEp";

const Common: React.FC = () => {
    let {movieKey} = useParams();

    const detailMovie = useQuery(
        {queryKey: ['detailMovie', movieKey], queryFn: () => fetchDetailMovie(movieKey ?? '129')}
    );
    const movieVideo = useQuery(
        {queryKey: ['movieVideo', movieKey], queryFn: () => fetchMovieVideo(movieKey ?? '129')}
    );

    if (detailMovie.error) {
        return <script>alert(`Error: {detailMovie.error.message}`)</script>;
    }
    if (movieVideo.error) {
        return <script>alert(`Error: {movieVideo.error.message}`)</script>;
    }

    if (detailMovie.isLoading) {
        return (
            <Container className="mt-5 mb-5">
                <PropsMovieDetail detailMovie={defaultMovieDetail}/>
                <div className="mt-5 mb-5">
                    <Row className="mt-3 gy-3">
                        <PropsVideoEp episode={defaultVideoMovie} movie={defaultMovieDetail}/>
                    </Row>
                </div>
            </Container>
        );
    }

    return (
        <Container className="mt-5 mb-5">
            <PropsPlayer
                firstEpisodeKey={
                    movieVideo.isSuccess && movieVideo.data?.length > 0
                        ? movieVideo.data[0].key
                        : null
                }
            />
            {
                detailMovie.isSuccess ? <PropsMovieDetail key={detailMovie.data.id} detailMovie={detailMovie.data}/> :
                    <PropsMovieDetail detailMovie={defaultMovieDetail}/>
            }
            <div className="mt-5 mb-5">
                <Navbar variant="dark" bg="black" expand="lg">
                    <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Session 1"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.1">Session 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Session 3</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Session 4</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Row className="mt-3 gy-3">
                    {
                        movieVideo.isSuccess && detailMovie.isSuccess && movieVideo.data.map((video) => (
                            <PropsVideoEp
                                key={video.id}
                                episode={video}
                                movie={detailMovie.data}
                                firstEpisodeKey={
                                    movieVideo.isSuccess && movieVideo.data?.length > 0
                                        ? movieVideo.data[0].key
                                        : null
                                }
                            />
                        ))
                    }
                </Row>
            </div>
        </Container>
    );
};

export default Common;