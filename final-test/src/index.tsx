import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from "./components/Movie";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path={"/movie/:movieKey/*"} element={<Movie/>}/>
                    <Route path={"/video/:videoKey/*"} element={<Movie/>}/>
                    <Route path={"*"} element={<App/>}/>
                </Routes>
            </Router>
        </QueryClientProvider>
    </React.StrictMode>
);
