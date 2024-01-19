import React from "react";
import {useParams} from "react-router-dom";

interface VideoProps {
}

const PropsPlayer: React.FC<VideoProps> = () => {

    // Lấy videoKey từ URL
    const {videoKey} = useParams<{ videoKey: string }>();

    const youtubeBaseUrl = 'https://www.youtube.com/embed/';
    const videoUrl = `${youtubeBaseUrl}${videoKey}`;

    return (
        <div className="mb-5" style={{height: '650px'}}>
            <iframe
                title="YouTube Video"
                src={videoUrl}
                allowFullScreen
                className="w-100 h-100"
            ></iframe>
            {/*<img src={`${urlImages}/movie_play.png`} alt="" />*/}
        </div>
    );
};

export default PropsPlayer;