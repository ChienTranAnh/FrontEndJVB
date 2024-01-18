import React from "react";
import {urlImages} from "../../types/DefaultValue";

const PropsPlayer: React.FC = () => {
    return (
        <div className="mb-5">
            <img src={`${urlImages}/movie_play.png`} alt="" className="w-100"/>
        </div>
    );
};

export default PropsPlayer;