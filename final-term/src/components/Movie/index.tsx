import React from "react";
import {Button, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import {useQuery} from "@tanstack/react-query";
import {defaultMovieDetail, defaultVideoMovie, urlImages} from "../../types/DefaultValue";
import PropsMovieDetail from "./PropsMovieDetail";
import PropsPlayer from "./PropsPlayer";
import PropsVideoEp from "./PropsVideoEp";
import {fetchDetailMovie, fetchMovieVideo} from "../../api";

const Movie: React.FC = () => {
    const detailMovie = useQuery({queryKey: ['detailMovie'], queryFn: fetchDetailMovie});
    const movieVideo = useQuery({queryKey: ['movieVideo'], queryFn: fetchMovieVideo});

    return (
        <Container className="mt-5 mb-5">
            <PropsPlayer/>
            {
                detailMovie.isSuccess ? <PropsMovieDetail key={detailMovie.data.id} detailMovie={detailMovie.data}/> : <PropsMovieDetail detailMovie={defaultMovieDetail}/>
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

                {/*<Row className="mt-3">
                    <Col xs={6} sm={6} md={6} lg={6}>
                        <Button variant="danger" className="w-100 p-2 text-start border-4">
                            <img src={`${urlImages}/play-white.svg`} alt="" className="me-2 mb-1"/>
                            Episode 1: Freedom Day
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="light" className="w-100 p-2 text-start border-4">
                            <img src={`${urlImages}/play-gray.svg`} alt="" className="me-2 mb-1"/>
                            Episode 4: Truth
                        </Button>
                    </Col>
                </Row>*/}
                <Row className="mt-3 gy-3">
                    {
                        movieVideo.isSuccess ? movieVideo.data.map((video)=>(
                            <PropsVideoEp key={video.id} episode={video}/>
                        )): <PropsVideoEp episode={defaultVideoMovie}/>
                    }
                </Row>
            </div>
        </Container>
    );
};

export default Movie;