import React from "react";
import {Button, Col} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {urlImages} from "../../types/DefaultValue";
import {ObjMovieDetail, ObjVideoMovie} from "../../types/Obj";

interface VideoEpProps {
    episode: ObjVideoMovie;
    movie: ObjMovieDetail;
}

const PropsVideoEp: React.FC<VideoEpProps> = ({episode, movie}) => {
    let urlVideoKey = useParams();

    return (
        <Col xs={6} sm={6} md={6} lg={6}>
            <Link key={episode.key} to={`/movie/${movie.id}/video/${episode.key}`} onClick={() => {
                window.scrollTo({top: 0})
            }}>
                {
                    urlVideoKey.videoKey === String(episode.key)
                    ?
                    <Button variant="danger" className="w-100 p-2 text-start border-4">
                        <img src={`${urlImages}/play-white.svg`} alt="Icon play" className="me-2 mb-1"/>
                        {episode.name}
                    </Button>
                    :
                    <Button variant="light" className="w-100 p-2 text-start border-4">
                        <img src={`${urlImages}/play-gray.svg`} alt="Icon play" className="me-2 mb-1"/>
                        {episode.name}
                    </Button>
                }
            </Link>
        </Col>
    );
};

export default PropsVideoEp;