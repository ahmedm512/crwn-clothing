import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tachyons from 'tachyons'
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    
    document.getElementById('root'));
 