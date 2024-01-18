import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {urlImages} from "../../types/DefaultValue";
import {ObjVideoMovie} from "../../types/Obj";

interface VideoMovieProps {
    episode: ObjVideoMovie
}

const PropsVideoEp: React.FC<VideoMovieProps> = ({episode}) => {
    return (
        <>
            <Col xs={6} sm={6} md={6} lg={6}>
                <Button variant="light" className="w-100 p-2 text-start border-4">
                    <img src={`${urlImages}/play-gray.svg`} alt="Icon play" className="me-2 mb-1"/>
                    {episode.name}
                </Button>
            </Col>
        </>
    );
};

export default PropsVideoEp;