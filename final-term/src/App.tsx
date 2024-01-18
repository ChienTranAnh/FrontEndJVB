import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import './App.css';
import AppNavbar from "./components/Navbar";
import Recommended from "./components/Recommended";
import Comments from "./components/Comments";
import Movie from "./components/Movie";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <AppNavbar/>
                <Movie/>
                <Recommended/>
                <Comments/>
            </div>
        </QueryClientProvider>
    );
};

export default App;