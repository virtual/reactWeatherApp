import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import WeatherComponent from "./Weather.js";
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<WeatherComponent />, document.getElementById('root'));

registerServiceWorker();
