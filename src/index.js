import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/fonts.css'
import App from '../src/app/app.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";

import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);