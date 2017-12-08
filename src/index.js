import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/';
import registerServiceWorker from './registerServiceWorker';

// We tell react to render the App component inside the div with the id of 'root'
ReactDOM.render(
  <App />
, document.getElementById('root')); // eslint-disable-line no-undef

// Caching layer for prod deployment. https://goo.gl/KwvDNy
registerServiceWorker();
