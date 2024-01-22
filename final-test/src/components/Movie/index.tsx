import React from "react";
import '../../App.css';
import Common from "./Common";
import AppNavbar from "../Navbar";
import Recommended from "../Recommended";
import Comments from "../Comments";

const Movie: React.FC = () => {
    return (
        <div className="App">
            <AppNavbar/>
            <Common/>
            <Recommended/>
            <Comments/>
        </div>
    );
};

export default Movie;