import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import './App.css';
import AppNavbar from "./components/Navbar";
import Recommended from "./components/Recommended";
import Comments from "./components/Comments";
import Movie from "./components/Movie/Common";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <Home/>
            {/*<AppNavbar/>
            <Movie/>
            <Recommended/>
            <Comments/>*/}
        </div>
    );
};

export default App;