import React from "react";
import '../../App.css';
import Common from "./Common";
import AppNavbar from "../Navbar";
import Recommended from "../Recommended";

const Movie: React.FC = () => {
    console.log(1111);
    return (
        <div className="App">
            <AppNavbar/>
            <Common/>
            <Recommended/>
        </div>
    );
};

export default Movie;