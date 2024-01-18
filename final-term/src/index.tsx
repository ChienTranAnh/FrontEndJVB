import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Route} from "react-router-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Route>
            <App/>
        </Route>
    </React.StrictMode>
);
