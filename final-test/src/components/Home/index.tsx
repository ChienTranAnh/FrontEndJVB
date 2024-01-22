import React from "react";
import Navbar from "../Navbar";
import Recommended from "../Recommended";
import Slider from "../Slider";

const Home: React.FC = () => {
    return (
        <>
            <Navbar/>
            <Slider/>
            <Recommended/>
        </>
    );
};

export default Home;