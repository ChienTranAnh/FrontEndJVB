import React from "react";
import {Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import {useQuery} from "@tanstack/react-query";
import {Route, Routes} from "react-router-dom";
import {defaultMovieDetail, defaultVideoMovie} from "../../types/DefaultValue";
import PropsMovieDetail from "./PropsMovieDetail";
import PropsPlayer from "./PropsPlayer";
import PropsVideoEp from "./PropsVideoEp";
import {fetchDetailMovie, fetchMovieVideo} from "../../api";

const Common: React.FC = () => {
    const detailMovie = useQuery({queryKey: ['detailMovie'], queryFn: fetchDetailMovie});
    const movieVideo = useQuery({queryKey: ['movieVideo'], queryFn: fetchMovieVideo});

    if (detailMovie.error) {
        return <script>alert(`Error: {detailMovie.error.message}`)</script>;
    }
    if (movieVideo.error) {
        return <script>alert(`Error: {movieVideo.error.message}`)</script>;
    }

    if (detailMovie.isLoading) {
        return (
            <Container className="mt-5 mb-5">
                <PropsPlayer/>
                <PropsMovieDetail detailMovie={defaultMovieDetail}/>
                <div className="mt-5 mb-5">
                    <Row className="mt-3 gy-3">
                        <PropsVideoEp episode={defaultVideoMovie}/>
                    </Row>
                </div>
            </Container>
        );
    }

    return (
        <Container className="mt-5 mb-5">
            <Routes>
                <Route path="/video/:videoKey/*" element={<PropsPlayer/>}/>
                <Route path="" element={<PropsPlayer/>}/>
            </Routes>
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
                        <Routes>
                            <Route path="*" element={
                                movieVideo.isSuccess ? movieVideo.data.map((video) => (
                                    <PropsVideoEp key={video.id} episode={video}/>
                                )) : <PropsVideoEp episode={defaultVideoMovie}/>
                            }/>
                        </Routes>
                    }
                </Row>
            </div>
        </Container>
    );
};

export default Common;