import React from 'react';
import './App.css';
import {AppNavbar} from "./components/Navbar";
import {Recommended} from "./components/Recommended";
import {Comments} from "./components/Comments";
import {Movie} from "./components/Movie";

function App() {
    return (
        <div className="App">
            <AppNavbar/>
            <Movie/>
            <Recommended/>
            <Comments/>
        </div>
    );
};

export default App;