import React from "react";
import {Button, Col} from "react-bootstrap";
import {Routes, Route, Link} from "react-router-dom";
import {urlImages} from "../../types/DefaultValue";
import PropsPlayer from "./PropsPlayer";
import {useQuery} from "@tanstack/react-query";
import {fetchMovieVideo} from "../../api";

const PropsVideoEp: React.FC = () => {
    const {error, isLoading, isSuccess, data} = useQuery({queryKey: ['movieVideo'], queryFn: fetchMovieVideo});
    console.log(data);
    return (
        <>
            {
                data?.map((episode) => (
                    <Col xs={6} sm={6} md={6} lg={6}>
                        <Link to={episode.key}>
                            <Button variant="light" className="w-100 p-2 text-start border-4">
                                <img src={`${urlImages}/play-gray.svg`} alt="Icon play" className="me-2 mb-1"/>
                                {episode.name}
                            </Button>
                        </Link>
                    </Col>
                ))
            }
            <Routes>
                {
                    data?.map((episode) => (
                        <Route key={episode.key} path={`/${episode.key}`} element={<PropsPlayer/>}/>
                    ))
                }
            </Routes>
        </>
    );
};

export default PropsVideoEp;