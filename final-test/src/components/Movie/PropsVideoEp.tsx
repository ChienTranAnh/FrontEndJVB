import React from "react";
import {Button, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {urlImages} from "../../types/DefaultValue";
import {ObjVideoMovie} from "../../types/Obj";

interface VideoEpProps {
    episode: ObjVideoMovie;
}

const PropsVideoEp: React.FC<VideoEpProps> = ({episode}) => {

    return (
        <Col xs={6} sm={6} md={6} lg={6}>
            <Link key={episode.key} to={`/video/${episode.key}`} onClick={()=>{window.scrollTo({top:0})}}>
                <Button variant="light" className="w-100 p-2 text-start border-4">
                    <img src={`${urlImages}/play-gray.svg`} alt="Icon play" className="me-2 mb-1"/>
                    {episode.name}
                </Button>
            </Link>
        </Col>
    );
};

export default PropsVideoEp;